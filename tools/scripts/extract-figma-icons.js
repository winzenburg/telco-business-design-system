#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config();

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

if (!FIGMA_ACCESS_TOKEN || !FIGMA_FILE_KEY) {
  console.error('❌ Missing required environment variables: FIGMA_ACCESS_TOKEN and FIGMA_FILE_KEY');
  process.exit(1);
}

// Figma API request function
function figmaRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: endpoint,
      method: 'GET',
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode !== 200) {
            reject(new Error(`Figma API error: ${res.statusCode} - ${parsed.message || 'Unknown error'}`));
          } else {
            resolve(parsed);
          }
        } catch (error) {
          reject(new Error(`Failed to parse JSON: ${error.message}`));
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

// Find Icons page
function findNodesByName(node, targetName, results = []) {
  if (node.name && node.name.toLowerCase().includes(targetName.toLowerCase())) {
    results.push(node);
  }
  
  if (node.children) {
    node.children.forEach(child => findNodesByName(child, targetName, results));
  }
  
  return results;
}

// Extract icons from node
function extractIconsFromNode(node, results = [], depth = 0) {
  // Look for components, instances, or frames that could be icons
  if ((node.type === 'COMPONENT' || node.type === 'INSTANCE' || node.type === 'FRAME' || node.type === 'GROUP') 
      && node.name && !node.name.toLowerCase().includes('frame')) {
    
    const name = node.name || 'Unnamed';
    
    // Skip obviously non-icon elements
    const skipPatterns = [
      'annotation',
      'template', 
      'changelog',
      'documentation',
      'cover',
      'status'
    ];
    
    const shouldSkip = skipPatterns.some(pattern => 
      name.toLowerCase().includes(pattern)
    );
    
    if (!shouldSkip) {
      const iconData = {
        name: name,
        id: node.id,
        type: node.type,
        absoluteBoundingBox: node.absoluteBoundingBox,
        size: node.absoluteBoundingBox ? {
          width: Math.round(node.absoluteBoundingBox.width),
          height: Math.round(node.absoluteBoundingBox.height)
        } : null,
        fills: node.fills,
        strokes: node.strokes,
        effects: node.effects,
        depth: depth,
        description: node.description || '',
        // Try to determine icon category from name
        category: categorizeIcon(name),
        // SVG export info
        exportable: true
      };
      
      results.push(iconData);
    }
  }
  
  if (node.children) {
    node.children.forEach(child => extractIconsFromNode(child, results, depth + 1));
  }
  
  return results;
}

// Categorize icons based on name patterns
function categorizeIcon(name) {
  const categories = {
    'action': ['edit', 'delete', 'add', 'remove', 'save', 'cancel', 'submit', 'close', 'open'],
    'navigation': ['arrow', 'chevron', 'back', 'forward', 'up', 'down', 'left', 'right', 'menu', 'home'],
    'communication': ['mail', 'message', 'chat', 'phone', 'call', 'notification', 'bell'],
    'media': ['play', 'pause', 'stop', 'volume', 'music', 'video', 'camera', 'image'],
    'interface': ['settings', 'gear', 'cog', 'user', 'profile', 'account', 'dashboard', 'grid', 'list'],
    'status': ['success', 'error', 'warning', 'info', 'check', 'cross', 'alert', 'approved', 'denied'],
    'file': ['document', 'file', 'folder', 'download', 'upload', 'attachment', 'pdf', 'excel'],
    'commerce': ['cart', 'shop', 'buy', 'sell', 'payment', 'money', 'dollar', 'price'],
    'social': ['share', 'like', 'heart', 'star', 'bookmark', 'follow', 'facebook', 'twitter'],
    'time': ['clock', 'time', 'calendar', 'date', 'schedule', 'timer', 'watch'],
    'security': ['lock', 'unlock', 'shield', 'security', 'key', 'password', 'protect'],
    'weather': ['sun', 'moon', 'cloud', 'rain', 'snow', 'weather', 'temperature'],
    'location': ['map', 'location', 'pin', 'marker', 'gps', 'direction', 'compass'],
    'device': ['desktop', 'mobile', 'tablet', 'laptop', 'phone', 'computer', 'screen'],
    'data': ['chart', 'graph', 'analytics', 'report', 'data', 'statistics', 'pie', 'bar']
  };
  
  const lowerName = name.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => lowerName.includes(keyword))) {
      return category;
    }
  }
  
  return 'general';
}

// Organize icons by category and size
function organizeIcons(icons) {
  const organized = {
    byCategory: {},
    bySize: {},
    all: icons
  };
  
  // Group by category
  icons.forEach(icon => {
    const category = icon.category;
    if (!organized.byCategory[category]) {
      organized.byCategory[category] = [];
    }
    organized.byCategory[category].push(icon);
  });
  
  // Group by size
  icons.forEach(icon => {
    if (icon.size) {
      const sizeKey = `${icon.size.width}x${icon.size.height}`;
      if (!organized.bySize[sizeKey]) {
        organized.bySize[sizeKey] = [];
      }
      organized.bySize[sizeKey].push(icon);
    }
  });
  
  return organized;
}

// Generate TypeScript icon tokens
function generateIconTokens(organizedIcons) {
  const { byCategory, bySize, all } = organizedIcons;
  
  return `// Comcast Business Design System - Icon Tokens
// Auto-generated from Figma Icons page

// Icon data structure
export interface IconData {
  name: string;
  id: string;
  type: string;
  size: {
    width: number;
    height: number;
  } | null;
  category: string;
  description: string;
  exportable: boolean;
}

// All icons
export const icons = {
${all.map(icon => `  "${icon.name.toLowerCase().replace(/[^a-z0-9]+/g, '')}": ${JSON.stringify({
  name: icon.name,
  id: icon.id,
  type: icon.type,
  size: icon.size,
  category: icon.category,
  description: icon.description,
  exportable: icon.exportable
}, null, 4)}`).join(',\n')}
} as const;

// Icons organized by category
export const iconsByCategory = {
${Object.entries(byCategory).map(([category, categoryIcons]) => 
  `  ${category}: {
${categoryIcons.map(icon => 
    `    "${icon.name.toLowerCase().replace(/[^a-z0-9]+/g, '')}": icons["${icon.name.toLowerCase().replace(/[^a-z0-9]+/g, '')}"]`
  ).join(',\n')}
  }`
).join(',\n')}
} as const;

// Icons organized by size
export const iconsBySize = {
${Object.entries(bySize).map(([size, sizeIcons]) => 
  `  "${size}": {
${sizeIcons.map(icon => 
    `    "${icon.name.toLowerCase().replace(/[^a-z0-9]+/g, '')}": icons["${icon.name.toLowerCase().replace(/[^a-z0-9]+/g, '')}"]`
  ).join(',\n')}
  }`
).join(',\n')}
} as const;

// Icon categories
export const iconCategories = [
  ${Object.keys(byCategory).map(cat => `"${cat}"`).join(', ')}
] as const;

// Icon sizes
export const iconSizes = [
  ${Object.keys(bySize).map(size => `"${size}"`).join(', ')}
] as const;

// Common icon sizes
export const commonIconSizes = {
  xs: "12x12",
  sm: "16x16", 
  md: "20x20",
  lg: "24x24",
  xl: "32x32",
  xxl: "48x48"
} as const;

// Utility functions
export const getIcon = (name: string) => {
  const iconKey = name.toLowerCase().replace(/[^a-z0-9]+/g, '');
  return icons[iconKey as keyof typeof icons];
};

export const getIconsByCategory = (category: string) => {
  return iconsByCategory[category as keyof typeof iconsByCategory] || {};
};

export const getIconsBySize = (size: string) => {
  return iconsBySize[size as keyof typeof iconsBySize] || {};
};

// Icon usage guidelines
export const iconUsage = {
  sizing: {
    description: "Icons should use consistent sizes across the application",
    recommended: ["16x16", "20x20", "24x24"],
    guidelines: [
      "Use 16px icons for inline text and small UI elements",
      "Use 20px icons for standard interface elements", 
      "Use 24px icons for prominent actions and navigation",
      "Maintain consistent sizing within component groups"
    ]
  },
  
  accessibility: {
    description: "Icons should be accessible and meaningful to all users",
    guidelines: [
      "Always provide alt text or aria-labels for icons",
      "Use icons that are universally understood",
      "Provide text labels alongside icons when possible",
      "Ensure sufficient color contrast for icon visibility"
    ]
  },
  
  implementation: {
    description: "How to use icons in your application",
    svgExport: "Icons can be exported as SVG from Figma using the Figma API",
    reactUsage: "Import icon components or use SVG sprites for better performance",
    webFonts: "Consider icon fonts for simple icons with single colors"
  }
} as const;

export default {
  icons,
  iconsByCategory,
  iconsBySize,
  iconCategories,
  iconSizes,
  commonIconSizes,
  iconUsage,
  getIcon,
  getIconsByCategory,
  getIconsBySize
} as const;

// Type definitions
export type IconName = keyof typeof icons;
export type IconCategory = keyof typeof iconsByCategory;
export type IconSize = keyof typeof iconsBySize;
export type CommonIconSize = keyof typeof commonIconSizes;
`;
}

async function main() {
  try {
    console.log('🔍 Fetching Figma icons...');
    
    // Get file structure to find Icons page
    const fileData = await figmaRequest(`/v1/files/${FIGMA_FILE_KEY}?depth=2`);
    console.log('📄 File retrieved successfully');
    
    const iconPages = findNodesByName(fileData.document, 'icons');
    if (iconPages.length === 0) {
      console.log('❌ No Icons page found');
      return;
    }
    
    console.log(`✅ Found Icons page: "${iconPages[0].name}"`);
    
    const iconPage = iconPages[0];
    const detailedData = await figmaRequest(`/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${iconPage.id}&depth=8`);
    
    if (!detailedData.nodes || !detailedData.nodes[iconPage.id]) {
      console.error('❌ Failed to get detailed Icons page data');
      return;
    }
    
    const iconNode = detailedData.nodes[iconPage.id].document;
    console.log('🎨 Extracting icons...');
    
    const iconData = extractIconsFromNode(iconNode);
    console.log(`✅ Found ${iconData.length} potential icons`);
    
    if (iconData.length === 0) {
      console.log('❌ No icons found in the Icons page');
      return;
    }
    
    // Organize icons
    const organizedIcons = organizeIcons(iconData);
    
    console.log('\n📊 Icon Analysis:');
    console.log(`Total icons: ${organizedIcons.all.length}`);
    console.log(`Categories: ${Object.keys(organizedIcons.byCategory).length}`);
    console.log(`Sizes: ${Object.keys(organizedIcons.bySize).length}`);
    
    console.log('\n📋 Categories found:');
    Object.entries(organizedIcons.byCategory).forEach(([category, icons]) => {
      console.log(`  ${category}: ${icons.length} icons`);
    });
    
    console.log('\n📐 Sizes found:');
    Object.entries(organizedIcons.bySize).forEach(([size, icons]) => {
      console.log(`  ${size}: ${icons.length} icons`);
    });
    
    // Generate TypeScript tokens
    const tokenFileContent = generateIconTokens(organizedIcons);
    
    // Write to file
    const outputPath = path.join(__dirname, '..', 'src', 'tokens', 'design-system-icons.ts');
    fs.writeFileSync(outputPath, tokenFileContent);
    
    console.log('\n✅ Icon tokens generated successfully!');
    console.log(`📁 Output: ${outputPath}`);
    
    // Save raw data for debugging
    const debugPath = 'figma-icons-raw.json';
    fs.writeFileSync(debugPath, JSON.stringify(organizedIcons, null, 2));
    console.log(`🔍 Raw data: ${debugPath}`);
    
    console.log('\n🎉 Icon extraction complete!');
    console.log('\nKey features:');
    console.log('✅ Categorized icons by usage type');
    console.log('✅ Organized by size for consistent usage');
    console.log('✅ TypeScript definitions for type safety');
    console.log('✅ Utility functions for easy access');
    console.log('✅ Usage guidelines and best practices');
    
    console.log('\n💡 Next steps:');
    console.log('1. Review the generated tokens file');
    console.log('2. Export SVG icons from Figma for use in components');
    console.log('3. Create icon components or sprite systems');
    console.log('4. Add to Storybook for documentation');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main().catch(console.error);