#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Figma API setup
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

if (!FIGMA_ACCESS_TOKEN || !FIGMA_FILE_KEY) {
  console.error('❌ Missing required environment variables: FIGMA_ACCESS_TOKEN and/or FIGMA_FILE_KEY');
  process.exit(1);
}

const figmaHeaders = {
  'X-Figma-Token': FIGMA_ACCESS_TOKEN,
  'Content-Type': 'application/json'
};

async function fetchFigmaFile() {
  try {
    console.log('🔍 Fetching Figma file structure...');
    
    const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}?depth=1`, {
      headers: figmaHeaders
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Error fetching Figma file:', error);
    throw error;
  }
}

async function fetchButtonsPage(buttonsPageId) {
  try {
    console.log('🔍 Fetching Buttons page details...');
    
    const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${buttonsPageId}&depth=3`, {
      headers: figmaHeaders
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('❌ Error fetching Buttons page:', error);
    throw error;
  }
}

function extractButtonSpecs(node, specs = [], depth = 0) {
  if (depth > 6) return specs; // Prevent infinite recursion

  if (node.type === 'COMPONENT' || node.type === 'INSTANCE') {
    // Check if this looks like a button component
    const name = node.name.toLowerCase();
    if (name.includes('button') || name.includes('btn')) {
      console.log(`🔍 Found potential button component: "${node.name}"`);
      
      const spec = {
        name: node.name,
        id: node.id,
        type: node.type,
        size: {
          width: node.absoluteBoundingBox?.width || null,
          height: node.absoluteBoundingBox?.height || null
        },
        // Extract styling properties
        background: null,
        textColor: null,
        borderRadius: null,
        padding: null,
        fontSize: null,
        fontWeight: null,
        border: null
      };

      // Look for fill information (background)
      if (node.fills && node.fills.length > 0) {
        const solidFill = node.fills.find(fill => fill.type === 'SOLID');
        if (solidFill) {
          const { r, g, b, a = 1 } = solidFill.color;
          spec.background = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
        }
      }

      // Look for corner radius
      if (node.cornerRadius !== undefined) {
        spec.borderRadius = node.cornerRadius;
      }

      // Look for strokes (borders)
      if (node.strokes && node.strokes.length > 0) {
        const stroke = node.strokes[0];
        if (stroke.type === 'SOLID') {
          const { r, g, b, a = 1 } = stroke.color;
          spec.border = {
            width: node.strokeWeight || 1,
            color: `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`
          };
        }
      }

      // Look for text styling in children
      if (node.children) {
        const textNode = findTextNode(node.children);
        if (textNode) {
          spec.fontSize = textNode.style?.fontSize || null;
          spec.fontWeight = textNode.style?.fontWeight || null;
          spec.fontFamily = textNode.style?.fontFamily || null;
          
          // Extract text color
          if (textNode.fills && textNode.fills.length > 0) {
            const textFill = textNode.fills.find(fill => fill.type === 'SOLID');
            if (textFill) {
              const { r, g, b, a = 1 } = textFill.color;
              spec.textColor = `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
            }
          }
        }
      }

      specs.push(spec);
    }
  }

  // Recursively check children
  if (node.children) {
    for (const child of node.children) {
      extractButtonSpecs(child, specs, depth + 1);
    }
  }

  return specs;
}

function findTextNode(children) {
  for (const child of children) {
    if (child.type === 'TEXT') {
      return child;
    }
    if (child.children) {
      const textNode = findTextNode(child.children);
      if (textNode) return textNode;
    }
  }
  return null;
}

function categorizeButtonSpecs(specs) {
  const categories = {
    primary: [],
    secondary: [],
    tertiary: [],
    ghost: [],
    danger: [],
    disabled: [],
    sizes: { small: [], medium: [], large: [] },
    states: { default: [], hover: [], active: [], focus: [], disabled: [] }
  };

  specs.forEach(spec => {
    const name = spec.name.toLowerCase();
    
    // Categorize by variant
    if (name.includes('primary') || name.includes('main')) {
      categories.primary.push(spec);
    } else if (name.includes('secondary')) {
      categories.secondary.push(spec);
    } else if (name.includes('tertiary') || name.includes('outline')) {
      categories.tertiary.push(spec);
    } else if (name.includes('ghost') || name.includes('text')) {
      categories.ghost.push(spec);
    } else if (name.includes('danger') || name.includes('error') || name.includes('destructive')) {
      categories.danger.push(spec);
    } else if (name.includes('disabled')) {
      categories.disabled.push(spec);
    }

    // Categorize by size
    if (name.includes('small') || name.includes('sm')) {
      categories.sizes.small.push(spec);
    } else if (name.includes('large') || name.includes('lg')) {
      categories.sizes.large.push(spec);
    } else {
      categories.sizes.medium.push(spec);
    }

    // Categorize by state
    if (name.includes('hover')) {
      categories.states.hover.push(spec);
    } else if (name.includes('active') || name.includes('pressed')) {
      categories.states.active.push(spec);
    } else if (name.includes('focus')) {
      categories.states.focus.push(spec);
    } else if (name.includes('disabled')) {
      categories.states.disabled.push(spec);
    } else {
      categories.states.default.push(spec);
    }
  });

  return categories;
}

async function main() {
  try {
    console.log('🚀 Extracting Button specifications from Figma...');
    
    // First, get the file structure
    const fileData = await fetchFigmaFile();
    
    // Find the Buttons page
    let buttonsPageId = null;
    for (const page of fileData.document.children) {
      if (page.name.toLowerCase().includes('button')) {
        buttonsPageId = page.id;
        console.log(`📄 Found Buttons page: "${page.name}" (ID: ${page.id})`);
        break;
      }
    }

    if (!buttonsPageId) {
      console.log('❌ No Buttons page found. Looking for alternative names...');
      // Try other common names
      for (const page of fileData.document.children) {
        const pageName = page.name.toLowerCase();
        if (pageName.includes('component') || pageName.includes('ui') || pageName.includes('element')) {
          buttonsPageId = page.id;
          console.log(`📄 Found potential components page: "${page.name}" (ID: ${page.id})`);
          break;
        }
      }
    }

    if (!buttonsPageId) {
      console.log('❌ No suitable page found for button components');
      return;
    }

    // Fetch detailed button data
    const buttonsData = await fetchButtonsPage(buttonsPageId);
    const pageNode = buttonsData.nodes[buttonsPageId];
    
    if (!pageNode || !pageNode.document) {
      console.log('❌ Failed to fetch buttons page data');
      return;
    }

    // Extract button specifications
    console.log('🔍 Analyzing button components...');
    const buttonSpecs = extractButtonSpecs(pageNode.document);
    
    if (buttonSpecs.length === 0) {
      console.log('❌ No button components found');
      return;
    }

    console.log(`✅ Found ${buttonSpecs.length} button specifications`);

    // Categorize buttons
    const categorizedButtons = categorizeButtonSpecs(buttonSpecs);

    // Generate the button specifications file
    const outputContent = `// Comcast Business Design System - Button Specifications
// Auto-generated from Figma on: ${new Date().toISOString()}

export interface ButtonSpec {
  name: string;
  id: string;
  type: string;
  size: {
    width: number | null;
    height: number | null;
  };
  background: string | null;
  textColor: string | null;
  borderRadius: number | null;
  padding: string | null;
  fontSize: number | null;
  fontWeight: number | null;
  fontFamily: string | null;
  border: {
    width: number;
    color: string;
  } | null;
}

// All button specifications
export const buttonSpecs: ButtonSpec[] = ${JSON.stringify(buttonSpecs, null, 2)};

// Categorized button specifications
export const categorizedButtons = ${JSON.stringify(categorizedButtons, null, 2)};

// Helper functions
export const getButtonSpec = (name: string): ButtonSpec | undefined => {
  return buttonSpecs.find(spec => spec.name === name);
};

export const getButtonsByCategory = (category: keyof typeof categorizedButtons) => {
  return categorizedButtons[category];
};

// Button variant mappings for shadcn/ui
export const figmaToShadcnVariants = {
  primary: categorizedButtons.primary,
  secondary: categorizedButtons.secondary,
  tertiary: categorizedButtons.tertiary,
  ghost: categorizedButtons.ghost,
  destructive: categorizedButtons.danger,
  disabled: categorizedButtons.disabled
} as const;

// Size mappings
export const figmaToShadcnSizes = {
  sm: categorizedButtons.sizes.small,
  md: categorizedButtons.sizes.medium,
  lg: categorizedButtons.sizes.large
} as const;

// Usage guidelines based on Figma specifications
export const buttonUsage = {
  primary: "Use for the most important actions in any experience",
  secondary: "Use for secondary actions that support the primary action",
  tertiary: "Use for less important actions or as alternatives",
  ghost: "Use for subtle actions that don't need strong visual weight",
  destructive: "Use for dangerous or irreversible actions",
  guidelines: [
    "Always maintain proper contrast ratios for accessibility",
    "Use consistent sizing within component groups",
    "Follow the visual hierarchy established by the design system",
    "Test button states (hover, active, focus, disabled) thoroughly"
  ]
} as const;

export default {
  buttonSpecs,
  categorizedButtons,
  figmaToShadcnVariants,
  figmaToShadcnSizes,
  buttonUsage,
  getButtonSpec,
  getButtonsByCategory
} as const;
`;

    // Write the specifications file
    const outputPath = path.join(__dirname, '../src/tokens/figma-button-specs.ts');
    fs.writeFileSync(outputPath, outputContent);

    console.log(`✅ Button specifications saved to: ${outputPath}`);
    console.log('📊 Summary:');
    console.log(`   • Total buttons: ${buttonSpecs.length}`);
    console.log(`   • Primary buttons: ${categorizedButtons.primary.length}`);
    console.log(`   • Secondary buttons: ${categorizedButtons.secondary.length}`);
    console.log(`   • Tertiary buttons: ${categorizedButtons.tertiary.length}`);
    console.log(`   • Ghost buttons: ${categorizedButtons.ghost.length}`);
    console.log(`   • Danger buttons: ${categorizedButtons.danger.length}`);
    console.log(`   • Small buttons: ${categorizedButtons.sizes.small.length}`);
    console.log(`   • Medium buttons: ${categorizedButtons.sizes.medium.length}`);
    console.log(`   • Large buttons: ${categorizedButtons.sizes.large.length}`);

  } catch (error) {
    console.error('❌ Error extracting button specifications:', error);
    process.exit(1);
  }
}

main();