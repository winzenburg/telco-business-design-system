#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
require('dotenv').config();

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

if (!FIGMA_ACCESS_TOKEN || !FIGMA_FILE_KEY) {
  console.error('❌ Missing required environment variables');
  process.exit(1);
}

const figmaHeaders = {
  'X-Figma-Token': FIGMA_ACCESS_TOKEN,
  'Content-Type': 'application/json'
};

async function fetchFigmaFile() {
  const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}?depth=1`, {
    headers: figmaHeaders
  });
  return response.json();
}

async function fetchFormElementsPage(pageId) {
  const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${pageId}&depth=4`, {
    headers: figmaHeaders
  });
  return response.json();
}

function extractFormSpecs(node, specs = [], depth = 0) {
  if (depth > 8) return specs;

  const name = node.name?.toLowerCase() || '';
  
  // Look for form-related components
  const isFormElement = name.includes('input') || 
                       name.includes('text') || 
                       name.includes('dropdown') || 
                       name.includes('select') || 
                       name.includes('checkbox') || 
                       name.includes('radio') || 
                       name.includes('textarea') || 
                       name.includes('field') ||
                       node.type === 'COMPONENT' ||
                       node.type === 'COMPONENT_SET';
  
  if (isFormElement) {
    console.log(`🔍 Found form component: "${node.name}"`);
    
    const spec = {
      name: node.name,
      id: node.id,
      type: node.type,
      category: categorizeFormElement(node.name),
      size: {
        width: node.absoluteBoundingBox?.width || null,
        height: node.absoluteBoundingBox?.height || null
      },
      styles: extractStyles(node),
      states: extractStates(node)
    };

    specs.push(spec);
  }

  if (node.children) {
    for (const child of node.children) {
      extractFormSpecs(child, specs, depth + 1);
    }
  }

  return specs;
}

function categorizeFormElement(name) {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('input') || lowerName.includes('text field')) return 'input';
  if (lowerName.includes('dropdown') || lowerName.includes('select')) return 'select';
  if (lowerName.includes('checkbox')) return 'checkbox';
  if (lowerName.includes('radio')) return 'radio';
  if (lowerName.includes('textarea')) return 'textarea';
  if (lowerName.includes('label')) return 'label';
  if (lowerName.includes('button')) return 'button';
  
  return 'unknown';
}

function extractStyles(node) {
  const styles = {
    background: null,
    border: null,
    borderRadius: null,
    padding: null,
    textColor: null,
    fontSize: null,
    fontWeight: null,
    fontFamily: null
  };

  // Extract background
  if (node.fills && node.fills.length > 0) {
    const solidFill = node.fills.find(fill => fill.type === 'SOLID');
    if (solidFill) {
      const { r, g, b, a = 1 } = solidFill.color;
      styles.background = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
    }
  }

  // Extract border
  if (node.strokes && node.strokes.length > 0) {
    const stroke = node.strokes[0];
    if (stroke.type === 'SOLID') {
      const { r, g, b, a = 1 } = stroke.color;
      styles.border = {
        width: node.strokeWeight || 1,
        color: `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`
      };
    }
  }

  // Extract border radius
  if (node.cornerRadius !== undefined) {
    styles.borderRadius = node.cornerRadius;
  }

  // Extract text styles from children
  const textNode = findTextNode(node);
  if (textNode) {
    styles.fontSize = textNode.style?.fontSize || null;
    styles.fontWeight = textNode.style?.fontWeight || null;
    styles.fontFamily = textNode.style?.fontFamily || null;
    
    if (textNode.fills && textNode.fills.length > 0) {
      const textFill = textNode.fills.find(fill => fill.type === 'SOLID');
      if (textFill) {
        const { r, g, b, a = 1 } = textFill.color;
        styles.textColor = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
      }
    }
  }

  return styles;
}

function extractStates(node) {
  const states = [];
  const name = node.name.toLowerCase();
  
  // Common form states
  if (name.includes('default') || name.includes('rest')) states.push('default');
  if (name.includes('hover')) states.push('hover');
  if (name.includes('focus')) states.push('focus');
  if (name.includes('active')) states.push('active');
  if (name.includes('disabled')) states.push('disabled');
  if (name.includes('error') || name.includes('invalid')) states.push('error');
  if (name.includes('success') || name.includes('valid')) states.push('success');
  
  return states.length > 0 ? states : ['default'];
}

function findTextNode(node) {
  if (!node.children) return null;
  
  for (const child of node.children) {
    if (child.type === 'TEXT') return child;
    
    const textNode = findTextNode(child);
    if (textNode) return textNode;
  }
  
  return null;
}

async function main() {
  try {
    console.log('🚀 Extracting Form Element specifications from Figma...');
    
    const fileData = await fetchFigmaFile();
    
    // Find Form Elements page
    let formPageId = null;
    for (const page of fileData.document.children) {
      if (page.name.toLowerCase().includes('form')) {
        formPageId = page.id;
        console.log(`📄 Found Form Elements page: "${page.name}" (ID: ${page.id})`);
        break;
      }
    }

    if (!formPageId) {
      console.log('❌ No Form Elements page found');
      return;
    }

    const formsData = await fetchFormElementsPage(formPageId);
    const pageNode = formsData.nodes[formPageId];
    
    if (!pageNode || !pageNode.document) {
      console.log('❌ Failed to fetch form elements data');
      return;
    }

    console.log('🔍 Analyzing form components...');
    const formSpecs = extractFormSpecs(pageNode.document);
    
    if (formSpecs.length === 0) {
      console.log('❌ No form components found');
      return;
    }

    console.log(`✅ Found ${formSpecs.length} form element specifications`);

    // Group by category
    const categorizedForms = {};
    formSpecs.forEach(spec => {
      if (!categorizedForms[spec.category]) {
        categorizedForms[spec.category] = [];
      }
      categorizedForms[spec.category].push(spec);
    });

    const outputContent = `// Comcast Business Design System - Form Element Specifications
// Auto-generated from Figma on: ${new Date().toISOString()}

export interface FormElementSpec {
  name: string;
  id: string;
  type: string;
  category: string;
  size: {
    width: number | null;
    height: number | null;
  };
  styles: {
    background: string | null;
    border: {
      width: number;
      color: string;
    } | null;
    borderRadius: number | null;
    padding: string | null;
    textColor: string | null;
    fontSize: number | null;
    fontWeight: number | null;
    fontFamily: string | null;
  };
  states: string[];
}

// All form element specifications
export const formElementSpecs: FormElementSpec[] = ${JSON.stringify(formSpecs, null, 2)};

// Categorized form specifications
export const categorizedForms = ${JSON.stringify(categorizedForms, null, 2)};

// Helper functions
export const getFormElementSpec = (name: string): FormElementSpec | undefined => {
  return formElementSpecs.find(spec => spec.name === name);
};

export const getFormElementsByCategory = (category: string) => {
  return categorizedForms[category] || [];
};

// Form element usage guidelines
export const formElementUsage = {
  input: "Use for single-line text input fields",
  textarea: "Use for multi-line text input",
  select: "Use for dropdown selections with multiple options",
  checkbox: "Use for multiple selection options",
  radio: "Use for single selection from multiple options",
  label: "Use to describe form elements for accessibility",
  guidelines: [
    "Always provide accessible labels for form elements",
    "Use appropriate input types for better UX",
    "Provide clear error messages and validation feedback",
    "Maintain consistent spacing and sizing across forms"
  ]
} as const;

export default {
  formElementSpecs,
  categorizedForms,
  formElementUsage,
  getFormElementSpec,
  getFormElementsByCategory
} as const;
`;

    const outputPath = path.join(__dirname, '../src/tokens/figma-form-specs.ts');
    fs.writeFileSync(outputPath, outputContent);

    console.log(`✅ Form specifications saved to: ${outputPath}`);
    console.log('📊 Summary:');
    Object.entries(categorizedForms).forEach(([category, specs]) => {
      console.log(`   • ${category}: ${specs.length} components`);
    });

  } catch (error) {
    console.error('❌ Error extracting form specifications:', error);
    process.exit(1);
  }
}

main();