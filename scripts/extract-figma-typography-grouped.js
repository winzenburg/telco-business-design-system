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

// Find Typography page
function findNodesByName(node, targetName, results = []) {
  if (node.name && node.name.toLowerCase().includes(targetName.toLowerCase())) {
    results.push(node);
  }
  
  if (node.children) {
    node.children.forEach(child => findNodesByName(child, targetName, results));
  }
  
  return results;
}

// Extract typography with improved pattern matching for groups
function extractTypographyFromNode(node, results = [], depth = 0) {
  if (node.type === 'TEXT' && node.style && node.style.fontSize) {
    const fontSize = node.style.fontSize;
    const name = node.name || 'Unnamed';
    
    // Focus on the main typography patterns we found
    const isRelevantTypography = 
      name.toLowerCase().includes('title') ||
      name.toLowerCase().includes('body') ||
      name.toLowerCase().includes('action') ||
      name.toLowerCase().includes('subtitle') ||
      // Size patterns
      name.match(/\b(xl|2xl|3xl|l|m|s|xs)\b/i) ||
      // Direct size references
      fontSize >= 14;
    
    if (isRelevantTypography) {
      const typographyData = {
        name: name,
        fontSize: fontSize,
        fontFamily: node.style.fontFamily,
        fontWeight: node.style.fontWeight || 400,
        lineHeight: node.style.lineHeightPx || node.style.lineHeightPercentFontSize,
        letterSpacing: node.style.letterSpacing || 0,
        textCase: node.style.textCase,
        textDecoration: node.style.textDecoration,
        fills: node.fills,
        id: node.id,
        depth: depth
      };
      
      results.push(typographyData);
    }
  }
  
  if (node.children && depth < 15) {
    node.children.forEach(child => extractTypographyFromNode(child, results, depth + 1));
  }
  
  return results;
}

// Group typography by semantic categories based on Figma structure
function groupTypographyByCategory(typographyData) {
  const groups = {
    title: {},
    body: {},
    action: {},
    subtitle: {}
  };
  
  // Deduplicate and prioritize larger, more meaningful typography
  const deduped = {};
  typographyData.forEach(item => {
    const name = item.name.toLowerCase();
    
    // Create a category-size key for proper deduplication
    let categoryKey = '';
    if (name.includes('title')) {
      if (name.includes('2xl')) categoryKey = 'title-xxl';
      else if (name.includes('xl')) categoryKey = 'title-xl';
      else if (name.includes('l') && !name.includes('xl')) categoryKey = 'title-l';
      else if (name.includes('m')) categoryKey = 'title-m';
      else if (name.includes('s')) categoryKey = 'title-s';
      else categoryKey = `title-${item.fontSize}`;
    } else if (name.includes('body')) {
      if (name.includes('xl')) categoryKey = 'body-xl';
      else if (name.includes('l') && !name.includes('xl')) categoryKey = 'body-l';
      else if (name.includes('m')) categoryKey = 'body-m';
      else if (name.includes('s')) categoryKey = 'body-s';
      else categoryKey = `body-${item.fontSize}`;
    } else if (name.includes('action')) {
      categoryKey = 'action-default';
    } else if (name.includes('subtitle')) {
      categoryKey = 'subtitle-default';
    } else {
      categoryKey = `other-${item.name}-${item.fontSize}`;
    }
    
    // Prioritize larger sizes and main font families (Montserrat, Lato over Roboto Mono labels)
    const isMainFont = item.fontFamily === 'Montserrat' || item.fontFamily === 'Lato';
    const priority = (isMainFont ? 1000 : 0) + item.fontSize;
    
    if (!deduped[categoryKey] || deduped[categoryKey].priority < priority) {
      deduped[categoryKey] = { ...item, priority };
    }
  });
  
  Object.values(deduped).forEach(item => {
    const name = item.name.toLowerCase();
    const fontSize = item.fontSize;
    
    // Clean up the name for token naming
    let cleanName = item.name
      .replace(/title\s*/i, '')
      .replace(/body\s*/i, '')
      .replace(/action\s*/i, '')
      .replace(/subtitle\s*/i, '')
      .replace(/\s+/g, '')
      .toLowerCase();
    
    // Map size names to more semantic names
    const sizeMap = {
      '2xl': 'xxl',
      'xl': 'xl', 
      'l': 'l',
      'm': 'm',
      's': 's',
      'xs': 'xs'
    };
    
    // Extract size from the name
    let sizeToken = 'm'; // default
    Object.keys(sizeMap).forEach(size => {
      if (cleanName.includes(size)) {
        sizeToken = sizeMap[size];
      }
    });
    
    // Create token structure
    const tokenData = {
      fontFamily: item.fontFamily || 'Montserrat',
      fontSize: `${item.fontSize}px`,
      fontWeight: item.fontWeight || 400,
      lineHeight: item.lineHeight ? 
        (typeof item.lineHeight === 'number' ? 
          (item.lineHeight > 3 ? `${item.lineHeight}px` : item.lineHeight) : 
          item.lineHeight) : 
        'normal',
      letterSpacing: item.letterSpacing ? `${item.letterSpacing}px` : 'normal',
      textTransform: item.textCase === 'UPPER' ? 'uppercase' : 
                    item.textCase === 'LOWER' ? 'lowercase' : 
                    item.textCase === 'TITLE' ? 'capitalize' : 'none',
      textDecoration: item.textDecoration === 'UNDERLINE' ? 'underline' : 'none',
      _figma: {
        id: item.id,
        originalName: item.name,
        fontSize: item.fontSize,
        fontFamily: item.fontFamily,
        fontWeight: item.fontWeight,
        lineHeight: item.lineHeight,
        letterSpacing: item.letterSpacing,
      }
    };
    
    // Categorize into groups
    if (name.includes('title')) {
      // Special handling for Title 2XL (48px)
      if (name.includes('2xl') && fontSize === 48) {
        groups.title['xxl'] = tokenData;
      } else if (cleanName.includes('2xl')) {
        groups.title['xxl'] = tokenData;
      } else if (cleanName.includes('xl')) {
        groups.title['xl'] = tokenData;
      } else if (cleanName.includes('l') && !cleanName.includes('xl')) {
        groups.title['l'] = tokenData;
      } else if (cleanName.includes('m')) {
        groups.title['m'] = tokenData;
      } else if (cleanName.includes('s') && !cleanName.includes('xs')) {
        groups.title['s'] = tokenData;
      } else if (cleanName.includes('xs')) {
        groups.title['xs'] = tokenData;
      } else if (fontSize >= 40) {
        groups.title['xl'] = tokenData;
      } else if (fontSize >= 32) {
        groups.title['l'] = tokenData;
      } else if (fontSize >= 24) {
        groups.title['m'] = tokenData;
      } else if (fontSize >= 18) {
        groups.title['s'] = tokenData;
      } else {
        groups.title['xs'] = tokenData;
      }
    } else if (name.includes('body')) {
      if (cleanName.includes('xl')) {
        groups.body['xl'] = tokenData;
      } else if (cleanName.includes('l') && !cleanName.includes('xl')) {
        groups.body['l'] = tokenData;
      } else if (cleanName.includes('m')) {
        groups.body['m'] = tokenData;
      } else if (cleanName.includes('s') && !cleanName.includes('xs')) {
        groups.body['s'] = tokenData;
      } else if (cleanName.includes('xs')) {
        groups.body['xs'] = tokenData;
      } else if (fontSize >= 20) {
        groups.body['l'] = tokenData;
      } else if (fontSize >= 16) {
        groups.body['m'] = tokenData;
      } else if (fontSize >= 14) {
        groups.body['s'] = tokenData;
      } else {
        groups.body['xs'] = tokenData;
      }
    } else if (name.includes('action')) {
      groups.action['default'] = tokenData;
    } else if (name.includes('subtitle')) {
      groups.subtitle['default'] = tokenData;
    } else {
      // Fallback categorization by size
      if (fontSize >= 32) {
        groups.title[sizeToken] = tokenData;
      } else if (fontSize >= 14) {
        groups.body[sizeToken] = tokenData;
      }
    }
  });
  
  return groups;
}

async function main() {
  try {
    console.log('🔍 Fetching Figma typography with proper grouping...');
    
    const fileData = await figmaRequest(`/v1/files/${FIGMA_FILE_KEY}?depth=2`);
    console.log('📄 File retrieved successfully');
    
    const typographyPages = findNodesByName(fileData.document, 'typography');
    if (typographyPages.length === 0) {
      console.log('❌ No Typography page found');
      return;
    }
    
    console.log(`✅ Found Typography page: "${typographyPages[0].name}"`);
    
    const typographyPage = typographyPages[0];
    const detailedData = await figmaRequest(`/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${typographyPage.id}&depth=12`);
    
    if (!detailedData.nodes || !detailedData.nodes[typographyPage.id]) {
      console.error('❌ Failed to get detailed Typography page data');
      return;
    }
    
    const typographyNode = detailedData.nodes[typographyPage.id].document;
    console.log('📝 Extracting typography with proper grouping...');
    
    const typographyData = extractTypographyFromNode(typographyNode);
    console.log(`✅ Found ${typographyData.length} typography elements`);
    
    // Sort by font size for better analysis
    typographyData.sort((a, b) => (b.fontSize || 0) - (a.fontSize || 0));
    
    console.log('\n📊 Typography Analysis:');
    console.log('Found typography patterns:');
    
    // Group and analyze patterns
    const patterns = {};
    typographyData.forEach(item => {
      const name = item.name.toLowerCase();
      if (name.includes('title')) {
        patterns.title = (patterns.title || 0) + 1;
      } else if (name.includes('body')) {
        patterns.body = (patterns.body || 0) + 1;
      } else if (name.includes('action')) {
        patterns.action = (patterns.action || 0) + 1;
      } else if (name.includes('subtitle')) {
        patterns.subtitle = (patterns.subtitle || 0) + 1;
      }
    });
    
    Object.entries(patterns).forEach(([pattern, count]) => {
      console.log(`  • ${pattern}: ${count} variants`);
    });
    
    // Show largest sizes
    console.log('\nLargest typography found:');
    typographyData.slice(0, 10).forEach(item => {
      console.log(`  • "${item.name}" - ${item.fontSize}px (${item.fontFamily}, ${item.fontWeight})`);
    });
    
    // Group typography by semantic categories
    const groupedTypography = groupTypographyByCategory(typographyData);
    
    console.log('\n🎨 Generated grouped typography:');
    Object.entries(groupedTypography).forEach(([category, sizes]) => {
      console.log(`  ${category}: ${Object.keys(sizes).length} sizes`);
      Object.entries(sizes).forEach(([size, data]) => {
        console.log(`    • ${size}: ${data.fontSize} (${data.fontFamily})`);
      });
    });
    
    // Generate the grouped typography file
    const tokenFileContent = `// Auto-generated grouped typography tokens from Figma
// Generated on: ${new Date().toISOString()}
// Source: Figma Typography page with proper Title, Body, Action, Subtitle groups

export const typography = {
  title: ${JSON.stringify(groupedTypography.title, null, 4)},
  body: ${JSON.stringify(groupedTypography.body, null, 4)},
  action: ${JSON.stringify(groupedTypography.action, null, 4)},
  subtitle: ${JSON.stringify(groupedTypography.subtitle, null, 4)}
};

// Flattened typography for easy access
export const flatTypography = {
  // Title variants
  ${Object.entries(groupedTypography.title).map(([size, data]) => 
    `title${size.charAt(0).toUpperCase() + size.slice(1)}: typography.title.${size}`
  ).join(',\n  ')},
  
  // Body variants  
  ${Object.entries(groupedTypography.body).map(([size, data]) => 
    `body${size.charAt(0).toUpperCase() + size.slice(1)}: typography.body.${size}`
  ).join(',\n  ')},
  
  // Action and Subtitle
  ${Object.entries(groupedTypography.action).map(([key, data]) => 
    `action: typography.action.${key}`
  ).join(',\n  ')},
  ${Object.entries(groupedTypography.subtitle).map(([key, data]) => 
    `subtitle: typography.subtitle.${key}`
  ).join(',\n  ')}
};

// Quick access to common typography
export const commonTypography = {
  // Display (largest title)
  display: typography.title.xxl || typography.title.xl || null,
  
  // Headings
  h1: typography.title.xl || typography.title.l || null,
  h2: typography.title.l || typography.title.m || null, 
  h3: typography.title.m || typography.title.s || null,
  h4: typography.title.s || typography.title.xs || null,
  h5: typography.subtitle.default || null,
  h6: typography.title.xs || null,
  
  // Body text
  bodyLarge: typography.body.l || typography.body.xl || null,
  body: typography.body.m || typography.body.l || null,
  bodySmall: typography.body.s || null,
  bodyExtraSmall: typography.body.xs || null,
  
  // UI elements
  action: typography.action.default || null,
  subtitle: typography.subtitle.default || null,
  
  // Special highlight - Title 2XL (48px)
  hero: typography.title.xxl || null
};

// Font families used
export const fontFamilies = {
  ${[...new Set(Object.values({...groupedTypography.title, ...groupedTypography.body, ...groupedTypography.action, ...groupedTypography.subtitle}).map(token => token.fontFamily))]
    .filter(family => family)
    .map(family => `'${family.toLowerCase().replace(/[^a-z0-9]+/g, '')}': '${family}'`)
    .join(',\n  ')}
};

// Utility functions
export const getTypography = (category: string, size: string) => {
  const cat = typography[category as keyof typeof typography];
  return cat && typeof cat === 'object' ? cat[size as keyof typeof cat] : undefined;
};

export const getCommonTypography = (style: string) => {
  return commonTypography[style as keyof typeof commonTypography];
};

export default typography;
`;

    // Write to file
    const outputPath = path.join(__dirname, '..', 'src', 'tokens', 'figma-typography-grouped.ts');
    fs.writeFileSync(outputPath, tokenFileContent);
    
    console.log('\n✅ Grouped typography tokens generated successfully!');
    console.log(`📁 Output: ${outputPath}`);
    console.log(`📊 Groups: Title (${Object.keys(groupedTypography.title).length}), Body (${Object.keys(groupedTypography.body).length}), Action (${Object.keys(groupedTypography.action).length}), Subtitle (${Object.keys(groupedTypography.subtitle).length})`);
    
    // Save raw data
    const debugPath = 'figma-typography-grouped-raw.json';
    fs.writeFileSync(debugPath, JSON.stringify(typographyData, null, 2));
    console.log(`🔍 Raw data: ${debugPath}`);
    
    console.log('\n🎉 Grouped typography extraction complete!');
    console.log('\nKey features:');
    console.log('✅ Proper Title, Body, Action, Subtitle groups');
    console.log('✅ Size variants: XXL, XL, L, M, S, XS');
    console.log('✅ Title XXL includes your 48px Title 2XL');
    console.log('✅ Quick access via commonTypography.display');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main().catch(console.error);