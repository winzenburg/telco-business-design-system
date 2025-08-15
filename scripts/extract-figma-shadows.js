#!/usr/bin/env node

const axios = require('axios');
require('dotenv').config();

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

if (!FIGMA_ACCESS_TOKEN || !FIGMA_FILE_KEY) {
  console.error('❌ Missing required environment variables: FIGMA_ACCESS_TOKEN and FIGMA_FILE_KEY');
  process.exit(1);
}

async function searchForShadows() {
  console.log('🔍 Searching for shadows and elevation in Figma file...');
  
  try {
    // Get file structure first
    const fileResponse = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}?depth=2`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    const document = fileResponse.data.document;
    const shadows = [];
    const elevationElements = [];
    
    // Search for shadow-related elements
    function searchNode(node, path = '') {
      const currentPath = path ? `${path} > ${node.name}` : node.name;
      
      // Check node name for shadow/elevation keywords
      const name = node.name.toLowerCase();
      if (name.includes('shadow') || name.includes('elevation') || name.includes('drop') || 
          name.includes('depth') || name.includes('surface') || name.includes('layer')) {
        elevationElements.push({
          name: node.name,
          type: node.type,
          id: node.id,
          path: currentPath
        });
      }
      
      // Check for actual shadow effects
      if (node.effects && node.effects.length > 0) {
        const shadowEffects = node.effects.filter(effect => 
          effect.type === 'DROP_SHADOW' || effect.type === 'INNER_SHADOW'
        );
        
        if (shadowEffects.length > 0) {
          shadows.push({
            name: node.name,
            type: node.type,
            id: node.id,
            path: currentPath,
            effects: shadowEffects
          });
        }
      }
      
      // Recursively search children
      if (node.children) {
        node.children.forEach(child => searchNode(child, currentPath));
      }
    }
    
    // Search through all pages
    document.children.forEach(page => {
      console.log(`🔍 Searching page: ${page.name}`);
      searchNode(page);
    });
    
    // Report findings
    console.log('\n📊 SHADOW & ELEVATION SEARCH RESULTS\n');
    
    if (elevationElements.length > 0) {
      console.log(`🎯 Found ${elevationElements.length} elevation-related elements:`);
      elevationElements.forEach((element, index) => {
        console.log(`   ${index + 1}. ${element.name} (${element.type})`);
        console.log(`      Path: ${element.path}`);
        console.log(`      ID: ${element.id}\n`);
      });
    } else {
      console.log('❌ No elevation-related elements found by name');
    }
    
    if (shadows.length > 0) {
      console.log(`\n🌟 Found ${shadows.length} elements with actual shadow effects:`);
      shadows.forEach((shadow, index) => {
        console.log(`   ${index + 1}. ${shadow.name} (${shadow.type})`);
        console.log(`      Path: ${shadow.path}`);
        console.log(`      ID: ${shadow.id}`);
        console.log(`      Effects:`);
        shadow.effects.forEach((effect, effectIndex) => {
          console.log(`         ${effectIndex + 1}. ${effect.type}`);
          if (effect.color) {
            const r = Math.round(effect.color.r * 255);
            const g = Math.round(effect.color.g * 255);
            const b = Math.round(effect.color.b * 255);
            const a = effect.color.a || 1;
            console.log(`            Color: rgba(${r}, ${g}, ${b}, ${a})`);
          }
          if (effect.offset) {
            console.log(`            Offset: x=${effect.offset.x}, y=${effect.offset.y}`);
          }
          if (effect.radius !== undefined) {
            console.log(`            Blur: ${effect.radius}px`);
          }
          if (effect.spread !== undefined) {
            console.log(`            Spread: ${effect.spread}px`);
          }
        });
        console.log('');
      });
    } else {
      console.log('❌ No elements with shadow effects found');
    }
    
    // Look for specific pages that might contain shadow documentation
    const shadowPages = document.children.filter(page => {
      const name = page.name.toLowerCase();
      return name.includes('shadow') || name.includes('elevation') || 
             name.includes('depth') || name.includes('surface') ||
             name.includes('layout') || name.includes('foundation');
    });
    
    if (shadowPages.length > 0) {
      console.log(`\n📄 Found ${shadowPages.length} pages that might contain shadow/elevation specs:`);
      shadowPages.forEach((page, index) => {
        console.log(`   ${index + 1}. ${page.name} (ID: ${page.id})`);
      });
      
      // Let's examine the Layout page more closely since it often contains elevation specs
      const layoutPage = shadowPages.find(page => page.name.toLowerCase().includes('layout'));
      if (layoutPage) {
        console.log(`\n🔍 Examining Layout page in detail...`);
        await examinePageForShadows(layoutPage.id);
      }
    }
    
  } catch (error) {
    console.error('❌ Error searching for shadows:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

async function examinePageForShadows(pageId) {
  try {
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${pageId}&depth=5`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );
    
    const pageData = response.data.nodes[pageId];
    if (!pageData) {
      console.log('❌ Could not fetch page data');
      return;
    }
    
    console.log(`📄 Page: ${pageData.document.name}`);
    
    function analyzeNode(node, depth = 0) {
      const indent = '  '.repeat(depth);
      
      // Look for shadow-related content
      if (node.effects && node.effects.length > 0) {
        const shadows = node.effects.filter(e => e.type === 'DROP_SHADOW' || e.type === 'INNER_SHADOW');
        if (shadows.length > 0) {
          console.log(`${indent}🌟 ${node.name} has ${shadows.length} shadow(s)`);
          shadows.forEach(shadow => {
            console.log(`${indent}   Type: ${shadow.type}`);
            if (shadow.color) {
              const r = Math.round(shadow.color.r * 255);
              const g = Math.round(shadow.color.g * 255);
              const b = Math.round(shadow.color.b * 255);
              const a = shadow.color.a || 1;
              console.log(`${indent}   Color: rgba(${r}, ${g}, ${b}, ${a})`);
            }
            if (shadow.offset) {
              console.log(`${indent}   Offset: ${shadow.offset.x}px, ${shadow.offset.y}px`);
            }
            if (shadow.radius !== undefined) {
              console.log(`${indent}   Blur: ${shadow.radius}px`);
            }
            if (shadow.spread !== undefined) {
              console.log(`${indent}   Spread: ${shadow.spread}px`);
            }
          });
        }
      }
      
      // Look for text that mentions shadows or elevation
      if (node.type === 'TEXT' && node.characters) {
        const text = node.characters.toLowerCase();
        if (text.includes('shadow') || text.includes('elevation') || text.includes('depth')) {
          console.log(`${indent}📝 Text mentions shadows/elevation: "${node.characters}"`);
        }
      }
      
      if (node.children && depth < 3) {
        node.children.forEach(child => analyzeNode(child, depth + 1));
      }
    }
    
    if (pageData.document.children) {
      pageData.document.children.forEach(child => analyzeNode(child));
    }
    
  } catch (error) {
    console.error(`❌ Error examining page ${pageId}:`, error.message);
  }
}

searchForShadows();