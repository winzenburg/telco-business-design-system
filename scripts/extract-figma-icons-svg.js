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

// Extract icons from node with deduplication
function extractIconsFromNode(node, results = [], depth = 0, seenNames = new Set()) {
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
    
    // Create unique key for deduplication
    const iconKey = name.toLowerCase().replace(/[^a-z0-9]+/g, '');
    
    if (!shouldSkip && !seenNames.has(iconKey)) {
      seenNames.add(iconKey);
      
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
        // Unique key for referencing
        key: iconKey,
        // SVG export info
        exportable: true
      };
      
      results.push(iconData);
    }
  }
  
  if (node.children) {
    node.children.forEach(child => extractIconsFromNode(child, results, depth + 1, seenNames));
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

// Export SVGs from Figma
async function exportSVGs(iconIds, fileKey, outputDir = 'src/assets/icons') {
  console.log(`\n🎨 Exporting ${iconIds.length} SVGs from Figma...`);
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Figma's images API limits batch size, so process in chunks
  const chunkSize = 100; // Conservative chunk size
  const chunks = [];
  
  for (let i = 0; i < iconIds.length; i += chunkSize) {
    chunks.push(iconIds.slice(i, i + chunkSize));
  }
  
  let totalExported = 0;
  let exportedFiles = {};
  
  for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
    const chunk = chunks[chunkIndex];
    console.log(`📦 Processing chunk ${chunkIndex + 1}/${chunks.length} (${chunk.length} icons)...`);
    
    try {
      // Get image URLs from Figma
      const idsParam = chunk.map(icon => icon.id).join(',');
      const imagesResponse = await figmaRequest(
        `/v1/images/${fileKey}?ids=${idsParam}&format=svg&svg_include_id=true&svg_simplify_stroke=true`
      );
      
      if (!imagesResponse.images) {
        console.warn(`⚠️ No images returned for chunk ${chunkIndex + 1}`);
        continue;
      }
      
      // Download each SVG
      for (const icon of chunk) {
        const imageUrl = imagesResponse.images[icon.id];
        if (!imageUrl) {
          console.warn(`⚠️ No URL for icon: ${icon.name} (${icon.id})`);
          continue;
        }
        
        try {
          const svgContent = await downloadSVG(imageUrl);
          const fileName = `${icon.key}.svg`;
          const filePath = path.join(outputDir, fileName);
          
          // Clean up SVG content
          const cleanedSVG = cleanSVG(svgContent, icon);
          
          fs.writeFileSync(filePath, cleanedSVG);
          exportedFiles[icon.key] = {
            ...icon,
            fileName: fileName,
            filePath: filePath,
            relativePath: path.relative(process.cwd(), filePath)
          };
          
          totalExported++;
          
          if (totalExported % 25 === 0) {
            console.log(`✅ Exported ${totalExported} SVGs...`);
          }
          
        } catch (downloadError) {
          console.warn(`⚠️ Failed to download SVG for ${icon.name}: ${downloadError.message}`);
        }
      }
      
      // Rate limiting - wait between chunks
      if (chunkIndex < chunks.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
      }
      
    } catch (chunkError) {
      console.error(`❌ Error processing chunk ${chunkIndex + 1}: ${chunkError.message}`);
    }
  }
  
  console.log(`\n✅ Successfully exported ${totalExported} SVG files to ${outputDir}`);
  return exportedFiles;
}

// Download SVG from URL
function downloadSVG(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    }).on('error', reject);
  });
}

// Clean up SVG content
function cleanSVG(svgContent, icon) {
  let cleaned = svgContent;
  
  // Add meaningful title and description
  const title = `<title>${icon.name}</title>`;
  const desc = `<desc>${icon.description || `${icon.category} icon from Comcast Business Design System`}</desc>`;
  
  // Insert title and desc after opening SVG tag
  cleaned = cleaned.replace(/(<svg[^>]*>)/, `$1\n  ${title}\n  ${desc}`);
  
  // Add role and aria-label for accessibility
  cleaned = cleaned.replace(/(<svg[^>]*?)>/, `$1 role="img" aria-label="${icon.name}">`);
  
  // Add data attributes for easy identification
  cleaned = cleaned.replace(/(<svg[^>]*?)>/, `$1 data-icon="${icon.key}" data-category="${icon.category}">`);
  
  return cleaned;
}

// Generate TypeScript icon tokens with SVG imports
function generateIconTokensWithSVG(organizedIcons, exportedFiles) {
  const { byCategory, bySize, all } = organizedIcons;
  
  return `// Comcast Business Design System - Icon Tokens with SVG Support
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
  key: string;
  exportable: boolean;
  fileName?: string;
  filePath?: string;
  relativePath?: string;
}

// SVG Import Map - For dynamic imports
export const svgImports = {
${Object.entries(exportedFiles).map(([key, icon]) => 
  `  "${key}": () => import('../assets/icons/${icon.fileName}?raw')`
).join(',\n')}
} as const;

// All icons (deduplicated)
export const icons = {
${all.map(icon => `  "${icon.key}": ${JSON.stringify({
  name: icon.name,
  id: icon.id,
  type: icon.type,
  size: icon.size,
  category: icon.category,
  description: icon.description,
  key: icon.key,
  exportable: icon.exportable,
  fileName: exportedFiles[icon.key]?.fileName,
  filePath: exportedFiles[icon.key]?.filePath,
  relativePath: exportedFiles[icon.key]?.relativePath
}, null, 4)}`).join(',\n')}
} as const;

// Icons organized by category (no duplicates)
export const iconsByCategory = {
${Object.entries(byCategory).map(([category, categoryIcons]) => {
  const uniqueIcons = Object.values(categoryIcons).reduce((acc, icon) => {
    if (!acc[icon.key]) {
      acc[icon.key] = icon;
    }
    return acc;
  }, {});
  
  return `  ${category}: {
${Object.values(uniqueIcons).map(icon => 
    `    "${icon.key}": icons["${icon.key}"]`
  ).join(',\n')}
  }`;
}).join(',\n')}
} as const;

// Icons organized by size (no duplicates)
export const iconsBySize = {
${Object.entries(bySize).map(([size, sizeIcons]) => {
  const uniqueIcons = Object.values(sizeIcons).reduce((acc, icon) => {
    if (!acc[icon.key]) {
      acc[icon.key] = icon;
    }
    return acc;
  }, {});
  
  return `  "${size}": {
${Object.values(uniqueIcons).map(icon => 
    `    "${icon.key}": icons["${icon.key}"]`
  ).join(',\n')}
  }`;
}).join(',\n')}
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

// SVG Loading utilities
export const loadSVG = async (iconKey: string): Promise<string> => {
  const importFn = svgImports[iconKey as keyof typeof svgImports];
  if (!importFn) {
    throw new Error(\`Icon '\${iconKey}' not found\`);
  }
  const module = await importFn();
  return module.default;
};

export const loadSVGSync = (iconKey: string): string | null => {
  // For synchronous loading, you'll need to use a bundler that supports 
  // synchronous imports or pre-load the SVGs
  console.warn('loadSVGSync: Consider using loadSVG (async) for better performance');
  return null;
};

// React SVG Component Generator
export const createSVGComponent = (iconKey: string) => {
  return async () => {
    const svgContent = await loadSVG(iconKey);
    return svgContent;
  };
};

// Utility functions
export const getIcon = (key: string) => {
  return icons[key as keyof typeof icons];
};

export const getIconsByCategory = (category: string) => {
  return iconsByCategory[category as keyof typeof iconsByCategory] || {};
};

export const getIconsBySize = (size: string) => {
  return iconsBySize[size as keyof typeof iconsBySize] || {};
};

export const getAllSVGPaths = (): string[] => {
  return Object.values(icons)
    .filter(icon => icon.relativePath)
    .map(icon => icon.relativePath!);
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
    svgExport: "Icons are exported as optimized SVG files with accessibility attributes",
    reactUsage: "Use loadSVG() for dynamic imports or import SVGs directly as React components",
    webFonts: "Consider icon fonts for simple icons with single colors",
    performance: "SVGs are tree-shakeable and only load when needed"
  }
} as const;

export default {
  icons,
  iconsByCategory,
  iconsBySize,
  iconCategories,
  iconSizes,
  commonIconSizes,
  svgImports,
  iconUsage,
  getIcon,
  getIconsByCategory,
  getIconsBySize,
  loadSVG,
  createSVGComponent,
  getAllSVGPaths
} as const;

// Type definitions
export type IconName = keyof typeof icons;
export type IconCategory = keyof typeof iconsByCategory;
export type IconSize = keyof typeof iconsBySize;
export type CommonIconSize = keyof typeof commonIconSizes;
`;
}

// Organize icons by category and size with deduplication
function organizeIcons(icons) {
  const organized = {
    byCategory: {},
    bySize: {},
    all: icons
  };
  
  // Group by category (deduplicated)
  icons.forEach(icon => {
    const category = icon.category;
    if (!organized.byCategory[category]) {
      organized.byCategory[category] = {};
    }
    
    // Use icon.key for deduplication
    if (!organized.byCategory[category][icon.key]) {
      organized.byCategory[category][icon.key] = icon;
    }
  });
  
  // Group by size (deduplicated)
  icons.forEach(icon => {
    if (icon.size) {
      const sizeKey = `${icon.size.width}x${icon.size.height}`;
      if (!organized.bySize[sizeKey]) {
        organized.bySize[sizeKey] = {};
      }
      
      // Use icon.key for deduplication
      if (!organized.bySize[sizeKey][icon.key]) {
        organized.bySize[sizeKey][icon.key] = icon;
      }
    }
  });
  
  return organized;
}

async function main() {
  try {
    console.log('🔍 Fetching Figma icons with SVG export...');
    
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
    console.log('🎨 Extracting icons with deduplication...');
    
    const iconData = extractIconsFromNode(iconNode);
    console.log(`✅ Found ${iconData.length} unique icons (after deduplication)`);
    
    if (iconData.length === 0) {
      console.log('❌ No icons found in the Icons page');
      return;
    }
    
    // Organize icons
    const organizedIcons = organizeIcons(iconData);
    
    console.log('\n📊 Icon Analysis:');
    console.log(`Total unique icons: ${organizedIcons.all.length}`);
    console.log(`Categories: ${Object.keys(organizedIcons.byCategory).length}`);
    console.log(`Sizes: ${Object.keys(organizedIcons.bySize).length}`);
    
    console.log('\n📋 Categories found:');
    Object.entries(organizedIcons.byCategory).forEach(([category, icons]) => {
      console.log(`  ${category}: ${Object.keys(icons).length} icons`);
    });
    
    // Export SVGs
    const exportedFiles = await exportSVGs(iconData, FIGMA_FILE_KEY);
    
    // Generate TypeScript tokens with SVG support
    const tokenFileContent = generateIconTokensWithSVG(organizedIcons, exportedFiles);
    
    // Write to file
    const outputPath = path.join(__dirname, '..', 'src', 'tokens', 'design-system-icons.ts');
    fs.writeFileSync(outputPath, tokenFileContent);
    
    console.log('\n✅ Icon tokens with SVG support generated successfully!');
    console.log(`📁 Output: ${outputPath}`);
    console.log(`🎨 SVG Files: ${Object.keys(exportedFiles).length} exported`);
    
    // Save raw data for debugging
    const debugPath = 'figma-icons-svg-raw.json';
    fs.writeFileSync(debugPath, JSON.stringify({
      icons: organizedIcons,
      exported: exportedFiles
    }, null, 2));
    console.log(`🔍 Raw data: ${debugPath}`);
    
    console.log('\n🎉 Icon SVG extraction complete!');
    console.log('\nKey features:');
    console.log('✅ Deduplicated icon names and keys');
    console.log('✅ SVG files exported with accessibility attributes');
    console.log('✅ Dynamic SVG loading with tree-shaking support');
    console.log('✅ TypeScript definitions for type safety');
    console.log('✅ Organized by category and size');
    console.log('✅ Ready for React component integration');
    
    console.log('\n💡 Next steps:');
    console.log('1. Create React icon components using the exported SVGs');
    console.log('2. Set up SVG optimization pipeline');
    console.log('3. Add icon preview to Storybook');
    console.log('4. Create icon picker component for design tools');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main().catch(console.error);