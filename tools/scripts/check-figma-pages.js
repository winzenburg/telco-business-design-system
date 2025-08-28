#!/usr/bin/env node

const https = require('https');

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

// List all pages and frames in the file
function listPagesAndFrames(node, pages = [], depth = 0) {
  const indent = '  '.repeat(depth);
  
  if (node.type === 'CANVAS') {
    // This is a page
    pages.push({
      type: 'PAGE',
      name: node.name,
      id: node.id,
      depth: depth
    });
    console.log(`${indent}📄 PAGE: "${node.name}" (ID: ${node.id})`);
    
    // List frames within this page
    if (node.children) {
      node.children.forEach(child => {
        if (child.type === 'FRAME') {
          pages.push({
            type: 'FRAME',
            name: child.name,
            id: child.id,
            parentPage: node.name,
            depth: depth + 1
          });
          console.log(`${indent}  🖼️  FRAME: "${child.name}" (ID: ${child.id})`);
        }
      });
    }
  }
  
  if (node.children) {
    node.children.forEach(child => listPagesAndFrames(child, pages, depth));
  }
  
  return pages;
}

// Search for specific content types
function searchForContentType(pages, searchTerm) {
  const matches = pages.filter(page => 
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (matches.length > 0) {
    console.log(`\n🔍 Found ${matches.length} matches for "${searchTerm}":`);
    matches.forEach(match => {
      const typeIcon = match.type === 'PAGE' ? '📄' : '🖼️';
      const parentInfo = match.parentPage ? ` (in page: ${match.parentPage})` : '';
      console.log(`   ${typeIcon} ${match.name}${parentInfo} (ID: ${match.id})`);
    });
  } else {
    console.log(`\n❌ No matches found for "${searchTerm}"`);
  }
  
  return matches;
}

async function main() {
  try {
    console.log('🔍 Checking Figma file structure...\n');
    
    // Fetch file with basic depth to see all pages and main frames
    const fileData = await figmaRequest(`/v1/files/${FIGMA_FILE_KEY}?depth=3`);
    console.log(`📄 File: "${fileData.name}"`);
    console.log(`🔗 URL: https://www.figma.com/file/${FIGMA_FILE_KEY}/\n`);
    
    console.log('📋 File Structure:');
    const pages = listPagesAndFrames(fileData.document);
    
    console.log(`\n📊 Summary: Found ${pages.filter(p => p.type === 'PAGE').length} pages and ${pages.filter(p => p.type === 'FRAME').length} frames\n`);
    
    // Search for different content types
    const searchTerms = [
      'icons',
      'icon',
      'iconography', 
      'symbols',
      'components',
      'assets',
      'library',
      'ui elements',
      'elements'
    ];
    
    console.log('🔍 Searching for design system content...');
    
    searchTerms.forEach(term => {
      searchForContentType(pages, term);
    });
    
    // Also check what we know works
    console.log('\n✅ Known working pages:');
    searchForContentType(pages, 'colors');
    searchForContentType(pages, 'typography');
    
    console.log('\n💡 Next steps:');
    console.log('If you see an Icons/Iconography page above, I can extract icons from it!');
    console.log('Run: npm run extract-icons (if we create the script)');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main().catch(console.error);