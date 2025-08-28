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

async function fetchButtonsPage() {
  try {
    console.log('🔍 Fetching Buttons page details...');
    
    // First get the file structure to find the Buttons page
    const fileResponse = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}?depth=1`, {
      headers: figmaHeaders
    });

    if (!fileResponse.ok) {
      throw new Error(`HTTP ${fileResponse.status}: ${fileResponse.statusText}`);
    }

    const fileData = await fileResponse.json();
    
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
      throw new Error('No Buttons page found');
    }

    // Now fetch the detailed button data with deeper nesting
    const detailResponse = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${buttonsPageId}&depth=5`, {
      headers: figmaHeaders
    });

    if (!detailResponse.ok) {
      throw new Error(`HTTP ${detailResponse.status}: ${detailResponse.statusText}`);
    }

    const detailData = await detailResponse.json();
    return detailData.nodes[buttonsPageId];
  } catch (error) {
    console.error('❌ Error fetching Buttons page:', error);
    throw error;
  }
}

function rgbaToHex(r, g, b, a = 1) {
  const toHex = (n) => {
    const hex = Math.round(n * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}${a < 1 ? toHex(a) : ''}`;
}

function extractRealButtonComponents(node, buttons = [], depth = 0) {
  if (depth > 8) return buttons; // Prevent infinite recursion

  // Look for actual button components (not documentation frames)
  if (node.type === 'COMPONENT' || node.type === 'INSTANCE') {
    const name = node.name.toLowerCase();
    
    // Skip documentation frames and look for actual button components
    if (name.includes('button') && 
        !name.includes('documentation') && 
        !name.includes('icon button') &&
        node.absoluteBoundingBox &&
        node.absoluteBoundingBox.width < 300 && // Real buttons are smaller
        node.absoluteBoundingBox.height < 100) {
      
      console.log(`🔍 Found actual button: "${node.name}" (${Math.round(node.absoluteBoundingBox.width)}x${Math.round(node.absoluteBoundingBox.height)})`);
      
      const button = {
        name: node.name,
        id: node.id,
        type: node.type,
        size: {
          width: Math.round(node.absoluteBoundingBox.width),
          height: Math.round(node.absoluteBoundingBox.height)
        },
        cornerRadius: node.cornerRadius || 0,
        fills: [],
        strokes: [],
        effects: [],
        textStyle: null
      };

      // Extract background fills
      if (node.fills && node.fills.length > 0) {
        node.fills.forEach(fill => {
          if (fill.type === 'SOLID' && fill.visible !== false) {
            button.fills.push({
              type: 'SOLID',
              color: rgbaToHex(fill.color.r, fill.color.g, fill.color.b, fill.opacity || 1),
              opacity: fill.opacity || 1
            });
          }
        });
      }

      // Extract strokes (borders)
      if (node.strokes && node.strokes.length > 0) {
        node.strokes.forEach(stroke => {
          if (stroke.type === 'SOLID' && stroke.visible !== false) {
            button.strokes.push({
              type: 'SOLID',
              color: rgbaToHex(stroke.color.r, stroke.color.g, stroke.color.b, stroke.opacity || 1),
              width: node.strokeWeight || 1,
              opacity: stroke.opacity || 1
            });
          }
        });
      }

      // Extract effects (shadows, etc.)
      if (node.effects && node.effects.length > 0) {
        node.effects.forEach(effect => {
          if (effect.visible !== false) {
            button.effects.push({
              type: effect.type,
              color: effect.color ? rgbaToHex(effect.color.r, effect.color.g, effect.color.b, effect.color.a) : null,
              offset: effect.offset || { x: 0, y: 0 },
              radius: effect.radius || 0,
              spread: effect.spread || 0
            });
          }
        });
      }

      // Look for text styling in children
      const textNode = findTextInNode(node);
      if (textNode) {
        button.textStyle = {
          fontFamily: textNode.style?.fontFamily || null,
          fontSize: textNode.style?.fontSize || null,
          fontWeight: textNode.style?.fontWeight || null,
          lineHeight: textNode.style?.lineHeightPx || null,
          letterSpacing: textNode.style?.letterSpacing || null,
          textColor: null
        };

        // Extract text color
        if (textNode.fills && textNode.fills.length > 0) {
          const textFill = textNode.fills.find(fill => fill.type === 'SOLID');
          if (textFill) {
            button.textStyle.textColor = rgbaToHex(
              textFill.color.r, 
              textFill.color.g, 
              textFill.color.b, 
              textFill.opacity || 1
            );
          }
        }
      }

      buttons.push(button);
    }
  }

  // Recursively check children
  if (node.children) {
    for (const child of node.children) {
      extractRealButtonComponents(child, buttons, depth + 1);
    }
  }

  return buttons;
}

function findTextInNode(node) {
  if (node.type === 'TEXT') {
    return node;
  }
  
  if (node.children) {
    for (const child of node.children) {
      const textNode = findTextInNode(child);
      if (textNode) return textNode;
    }
  }
  
  return null;
}

function analyzeButtonVariants(buttons) {
  const variants = {
    primary: [],
    secondary: [],
    ghost: [],
    text: [],
    critical: [],
    disabled: []
  };

  buttons.forEach(button => {
    const name = button.name.toLowerCase();
    
    if (name.includes('primary')) {
      variants.primary.push(button);
    } else if (name.includes('secondary')) {
      variants.secondary.push(button);
    } else if (name.includes('ghost')) {
      variants.ghost.push(button);
    } else if (name.includes('text')) {
      variants.text.push(button);
    } else if (name.includes('critical') || name.includes('destructive') || name.includes('danger')) {
      variants.critical.push(button);
    } else if (name.includes('disabled')) {
      variants.disabled.push(button);
    } else {
      // Default to primary if unclear
      variants.primary.push(button);
    }
  });

  return variants;
}

async function main() {
  try {
    console.log('🚀 Extracting ACTUAL button components from Figma...');
    
    const buttonsPageData = await fetchButtonsPage();
    
    if (!buttonsPageData || !buttonsPageData.document) {
      console.log('❌ Failed to fetch buttons page data');
      return;
    }

    console.log('🔍 Analyzing button components...');
    const realButtons = extractRealButtonComponents(buttonsPageData.document);
    
    if (realButtons.length === 0) {
      console.log('❌ No actual button components found');
      console.log('💡 Try looking for frames or instances with smaller dimensions');
      return;
    }

    console.log(`✅ Found ${realButtons.length} actual button components`);

    // Analyze variants
    const variants = analyzeButtonVariants(realButtons);

    // Generate detailed analysis
    const analysis = {
      totalButtons: realButtons.length,
      variants: variants,
      commonStyles: {
        cornerRadius: [...new Set(realButtons.map(b => b.cornerRadius))],
        heights: [...new Set(realButtons.map(b => b.size.height))],
        backgroundColors: [...new Set(realButtons.flatMap(b => b.fills.map(f => f.color)))],
        borderColors: [...new Set(realButtons.flatMap(b => b.strokes.map(s => s.color)))],
        fontFamilies: [...new Set(realButtons.map(b => b.textStyle?.fontFamily).filter(Boolean))],
        fontSizes: [...new Set(realButtons.map(b => b.textStyle?.fontSize).filter(Boolean))],
        fontWeights: [...new Set(realButtons.map(b => b.textStyle?.fontWeight).filter(Boolean))]
      }
    };

    // Generate the actual button specs file
    const outputContent = `// Comcast Business Design System - ACTUAL Button Specifications
// Auto-generated from Figma on: ${new Date().toISOString()}
// Extracted from real button components (not documentation frames)

export interface ActualButtonSpec {
  name: string;
  id: string;
  type: string;
  size: {
    width: number;
    height: number;
  };
  cornerRadius: number;
  fills: Array<{
    type: string;
    color: string;
    opacity: number;
  }>;
  strokes: Array<{
    type: string;
    color: string;
    width: number;
    opacity: number;
  }>;
  effects: Array<{
    type: string;
    color: string | null;
    offset: { x: number; y: number };
    radius: number;
    spread: number;
  }>;
  textStyle: {
    fontFamily: string | null;
    fontSize: number | null;
    fontWeight: number | null;
    lineHeight: number | null;
    letterSpacing: number | null;
    textColor: string | null;
  } | null;
}

// All actual button specifications
export const actualButtonSpecs: ActualButtonSpec[] = ${JSON.stringify(realButtons, null, 2)};

// Button variants organized by type
export const buttonVariants = ${JSON.stringify(variants, null, 2)};

// Common styling patterns found across buttons
export const commonButtonStyles = ${JSON.stringify(analysis.commonStyles, null, 2)};

// Analysis summary
export const buttonAnalysis = {
  totalButtons: ${analysis.totalButtons},
  variantCounts: {
    primary: ${variants.primary.length},
    secondary: ${variants.secondary.length},
    ghost: ${variants.ghost.length},
    text: ${variants.text.length},
    critical: ${variants.critical.length},
    disabled: ${variants.disabled.length}
  },
  commonStyles: commonButtonStyles
};

// Helper functions
export const getButtonByName = (name: string): ActualButtonSpec | undefined => {
  return actualButtonSpecs.find(spec => spec.name.toLowerCase().includes(name.toLowerCase()));
};

export const getButtonsByVariant = (variant: keyof typeof buttonVariants) => {
  return buttonVariants[variant] || [];
};

// Figma button styles for shadcn/ui integration
export const figmaButtonCSS = {
  primary: ${variants.primary.length > 0 ? `{
    backgroundColor: "${variants.primary[0]?.fills[0]?.color || '#0D62FF'}",
    borderColor: "${variants.primary[0]?.strokes[0]?.color || 'transparent'}",
    borderRadius: "${variants.primary[0]?.cornerRadius || 6}px",
    height: "${variants.primary[0]?.size.height || 40}px",
    fontSize: "${variants.primary[0]?.textStyle?.fontSize || 16}px",
    fontWeight: "${variants.primary[0]?.textStyle?.fontWeight || 500}",
    fontFamily: "${variants.primary[0]?.textStyle?.fontFamily || 'Montserrat'}"
  }` : 'null'},
  
  secondary: ${variants.secondary.length > 0 ? `{
    backgroundColor: "${variants.secondary[0]?.fills[0]?.color || 'transparent'}",
    borderColor: "${variants.secondary[0]?.strokes[0]?.color || '#0D62FF'}",
    borderRadius: "${variants.secondary[0]?.cornerRadius || 6}px",
    height: "${variants.secondary[0]?.size.height || 40}px",
    fontSize: "${variants.secondary[0]?.textStyle?.fontSize || 16}px",
    fontWeight: "${variants.secondary[0]?.textStyle?.fontWeight || 500}",
    fontFamily: "${variants.secondary[0]?.textStyle?.fontFamily || 'Montserrat'}"
  }` : 'null'},
  
  ghost: ${variants.ghost.length > 0 ? `{
    backgroundColor: "${variants.ghost[0]?.fills[0]?.color || 'transparent'}",
    borderColor: "transparent",
    borderRadius: "${variants.ghost[0]?.cornerRadius || 6}px",
    height: "${variants.ghost[0]?.size.height || 40}px",
    fontSize: "${variants.ghost[0]?.textStyle?.fontSize || 16}px",
    fontWeight: "${variants.ghost[0]?.textStyle?.fontWeight || 500}",
    fontFamily: "${variants.ghost[0]?.textStyle?.fontFamily || 'Montserrat'}"
  }` : 'null'}
};

export default {
  actualButtonSpecs,
  buttonVariants,
  commonButtonStyles,
  buttonAnalysis,
  figmaButtonCSS,
  getButtonByName,
  getButtonsByVariant
} as const;
`;

    // Write the specifications file
    const outputPath = path.join(__dirname, '../src/tokens/figma-actual-buttons.ts');
    fs.writeFileSync(outputPath, outputContent);

    console.log(`✅ ACTUAL button specifications saved to: ${outputPath}`);
    console.log('📊 Analysis Summary:');
    console.log(`   • Total actual buttons: ${analysis.totalButtons}`);
    console.log(`   • Primary buttons: ${variants.primary.length}`);
    console.log(`   • Secondary buttons: ${variants.secondary.length}`);
    console.log(`   • Ghost buttons: ${variants.ghost.length}`);
    console.log(`   • Text buttons: ${variants.text.length}`);
    console.log(`   • Critical buttons: ${variants.critical.length}`);
    console.log(`   • Disabled buttons: ${variants.disabled.length}`);
    console.log('');
    console.log('🎨 Common Styling Patterns:');
    console.log(`   • Corner radius: ${analysis.commonStyles.cornerRadius.join(', ')}px`);
    console.log(`   • Heights: ${analysis.commonStyles.heights.join(', ')}px`);
    console.log(`   • Font families: ${analysis.commonStyles.fontFamilies.join(', ')}`);
    console.log(`   • Font sizes: ${analysis.commonStyles.fontSizes.join(', ')}px`);
    console.log(`   • Font weights: ${analysis.commonStyles.fontWeights.join(', ')}`);

  } catch (error) {
    console.error('❌ Error extracting actual button specifications:', error);
    process.exit(1);
  }
}

main();