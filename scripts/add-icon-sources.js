#!/usr/bin/env node

/**
 * Add source metadata to Feather Icons in the registry
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the current registry
const registryPath = path.join(__dirname, '..', 'packages', 'tokens', 'icon-registry.ts');
let registryContent = fs.readFileSync(registryPath, 'utf8');

// Add source metadata to all Feather Icons
function addSourceMetadata() {
  console.log('🔄 Adding source metadata to Feather Icons...');
  
  // Find all Feather icon entries and add source metadata
  const featherIconPattern = /'feather-([^']+)':\s*{\s*name:\s*'feather-([^']+)',\s*category:\s*'([^']+)'\s*as\s*const,\s*description:\s*'([^']+)'\s*}/g;
  
  registryContent = registryContent.replace(featherIconPattern, (match, iconName, fullName, category, description) => {
    return `'${fullName}': { 
    name: '${fullName}', 
    category: '${category}' as const, 
    description: '${description}',
    source: 'feather' as const,
    sourceUrl: 'https://feathericons.com/',
    license: 'MIT'
  }`;
  });
  
  // Also add source metadata to original icons (assuming they're from Figma)
  const originalIconPattern = /'([^']+)':\s*{\s*name:\s*'([^']+)',\s*category:\s*'([^']+)'\s*as\s*const,\s*description:\s*'([^']+)'\s*}(?!\s*,\s*source:)/g;
  
  registryContent = registryContent.replace(originalIconPattern, (match, iconName, name, category, description) => {
    // Skip if it's already a Feather icon
    if (name.startsWith('feather-')) {
      return match;
    }
    
    return `'${name}': { 
    name: '${name}', 
    category: '${category}' as const, 
    description: '${description}',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  }`;
  });
  
  // Write the updated registry
  fs.writeFileSync(registryPath, registryContent);
  console.log('✅ Source metadata added to icon registry');
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  addSourceMetadata();
}

export { addSourceMetadata };