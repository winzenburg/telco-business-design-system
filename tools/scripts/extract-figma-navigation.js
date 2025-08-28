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

async function fetchNavigationPage(pageId) {
  const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${pageId}&depth=4`, {
    headers: figmaHeaders
  });
  return response.json();
}

function extractNavigationSpecs(node, specs = [], depth = 0) {
  if (depth > 8) return specs;

  const name = node.name?.toLowerCase() || '';
  
  // Look for navigation-related components
  const isNavigationElement = name.includes('nav') || 
                             name.includes('menu') || 
                             name.includes('header') || 
                             name.includes('sidebar') || 
                             name.includes('breadcrumb') || 
                             name.includes('tab') || 
                             name.includes('link') || 
                             name.includes('drawer') ||
                             node.type === 'COMPONENT' ||
                             node.type === 'COMPONENT_SET';
  
  if (isNavigationElement) {
    console.log(`🔍 Found navigation component: "${node.name}"`);
    
    const spec = {
      name: node.name,
      id: node.id,
      type: node.type,
      category: categorizeNavigationElement(node.name),
      size: {
        width: node.absoluteBoundingBox?.width || null,
        height: node.absoluteBoundingBox?.height || null
      },
      styles: extractStyles(node),
      states: extractStates(node),
      layout: extractLayout(node)
    };

    specs.push(spec);
  }

  if (node.children) {
    for (const child of node.children) {
      extractNavigationSpecs(child, specs, depth + 1);
    }
  }

  return specs;
}

function categorizeNavigationElement(name) {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('header') || lowerName.includes('top nav')) return 'header';
  if (lowerName.includes('sidebar') || lowerName.includes('side nav')) return 'sidebar';
  if (lowerName.includes('breadcrumb')) return 'breadcrumb';
  if (lowerName.includes('tab')) return 'tabs';
  if (lowerName.includes('menu') || lowerName.includes('dropdown')) return 'menu';
  if (lowerName.includes('link') || lowerName.includes('anchor')) return 'link';
  if (lowerName.includes('drawer')) return 'drawer';
  if (lowerName.includes('pagination')) return 'pagination';
  
  return 'navigation';
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
    fontFamily: null,
    shadow: null
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

  // Extract shadow
  if (node.effects && node.effects.length > 0) {
    const shadow = node.effects.find(effect => effect.type === 'DROP_SHADOW');
    if (shadow) {
      const { r, g, b, a = 1 } = shadow.color;
      styles.shadow = {
        x: shadow.offset.x,
        y: shadow.offset.y,
        blur: shadow.radius,
        color: `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`
      };
    }
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

function extractLayout(node) {
  return {
    direction: node.layoutMode || null,
    align: node.primaryAxisAlignItems || null,
    justify: node.counterAxisAlignItems || null,
    gap: node.itemSpacing || null,
    padding: {
      top: node.paddingTop || 0,
      right: node.paddingRight || 0,
      bottom: node.paddingBottom || 0,
      left: node.paddingLeft || 0
    }
  };
}

function extractStates(node) {
  const states = [];
  const name = node.name.toLowerCase();
  
  // Common navigation states
  if (name.includes('default') || name.includes('rest')) states.push('default');
  if (name.includes('hover')) states.push('hover');
  if (name.includes('focus')) states.push('focus');
  if (name.includes('active') || name.includes('current')) states.push('active');
  if (name.includes('disabled')) states.push('disabled');
  if (name.includes('selected')) states.push('selected');
  if (name.includes('expanded')) states.push('expanded');
  if (name.includes('collapsed')) states.push('collapsed');
  
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
    console.log('🚀 Extracting Navigation specifications from Figma...');
    
    const fileData = await fetchFigmaFile();
    
    // Find Navigation page
    let navPageId = null;
    for (const page of fileData.document.children) {
      if (page.name.toLowerCase().includes('nav') || 
          page.name.toLowerCase().includes('header') ||
          page.name.toLowerCase().includes('menu')) {
        navPageId = page.id;
        console.log(`📄 Found Navigation page: "${page.name}" (ID: ${page.id})`);
        break;
      }
    }

    if (!navPageId) {
      console.log('❌ No Navigation page found');
      return;
    }

    const navigationData = await fetchNavigationPage(navPageId);
    const pageNode = navigationData.nodes[navPageId];
    
    if (!pageNode || !pageNode.document) {
      console.log('❌ Failed to fetch navigation data');
      return;
    }

    console.log('🔍 Analyzing navigation components...');
    const navigationSpecs = extractNavigationSpecs(pageNode.document);
    
    if (navigationSpecs.length === 0) {
      console.log('❌ No navigation components found');
      return;
    }

    console.log(`✅ Found ${navigationSpecs.length} navigation specifications`);

    // Group by category
    const categorizedNavigation = {};
    navigationSpecs.forEach(spec => {
      if (!categorizedNavigation[spec.category]) {
        categorizedNavigation[spec.category] = [];
      }
      categorizedNavigation[spec.category].push(spec);
    });

    const outputContent = `// Comcast Business Design System - Navigation Specifications
// Auto-generated from Figma on: ${new Date().toISOString()}

export interface NavigationSpec {
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
    shadow: {
      x: number;
      y: number;
      blur: number;
      color: string;
    } | null;
  };
  layout: {
    direction: string | null;
    align: string | null;
    justify: string | null;
    gap: number | null;
    padding: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
  };
  states: string[];
}

// All navigation specifications
export const navigationSpecs: NavigationSpec[] = ${JSON.stringify(navigationSpecs, null, 2)};

// Categorized navigation specifications
export const categorizedNavigation = ${JSON.stringify(categorizedNavigation, null, 2)};

// Helper functions
export const getNavigationSpec = (name: string): NavigationSpec | undefined => {
  return navigationSpecs.find(spec => spec.name === name);
};

export const getNavigationByCategory = (category: string) => {
  return categorizedNavigation[category] || [];
};

// Navigation usage guidelines
export const navigationUsage = {
  header: "Primary site navigation, typically at the top of the page",
  sidebar: "Secondary navigation, typically on the left or right side",
  breadcrumb: "Shows user's current location in site hierarchy",
  tabs: "Switch between related content sections",
  menu: "Dropdown or context menus for additional options",
  link: "Individual navigation links and anchors",
  drawer: "Collapsible navigation panel",
  pagination: "Navigate through multiple pages of content",
  guidelines: [
    "Keep navigation consistent across all pages",
    "Use clear, descriptive labels for navigation items",
    "Provide visual feedback for current page/section",
    "Ensure navigation is accessible via keyboard",
    "Consider mobile responsiveness for all navigation"
  ]
} as const;

export default {
  navigationSpecs,
  categorizedNavigation,
  navigationUsage,
  getNavigationSpec,
  getNavigationByCategory
} as const;
`;

    const outputPath = path.join(__dirname, '../src/tokens/figma-navigation-specs.ts');
    fs.writeFileSync(outputPath, outputContent);

    console.log(`✅ Navigation specifications saved to: ${outputPath}`);
    console.log('📊 Summary:');
    Object.entries(categorizedNavigation).forEach(([category, specs]) => {
      console.log(`   • ${category}: ${specs.length} components`);
    });

  } catch (error) {
    console.error('❌ Error extracting navigation specifications:', error);
    process.exit(1);
  }
}

main();