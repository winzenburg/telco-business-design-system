#!/usr/bin/env node

/**
 * Fix duplicate icon names in the registry
 * Rename Feather Icons to avoid conflicts with existing Figma icons
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the current registry
const registryPath = path.join(__dirname, '..', 'packages', 'tokens', 'icon-registry.ts');
let registryContent = fs.readFileSync(registryPath, 'utf8');

// List of icons that exist in both Figma and Feather sets
const duplicateIcons = [
  'bell', 'voicemail', 'clipboard', 'folder', 'cloud', 'percent', 
  'check', 'download', 'maximize', 'menu', 'minimize', 'minus', 
  'plus', 'search', 'upload', 'camera', 'video', 'users', 'wifi'
];

function fixDuplicates() {
  console.log('🔄 Fixing duplicate icon names...');
  
  // Remove duplicate Feather icon entries
  duplicateIcons.forEach(iconName => {
    // Find the Feather icon entry (second occurrence)
    const featherIconPattern = new RegExp(
      `\\s+'${iconName}':\\s*{\\s*name:\\s*'${iconName}',\\s*category:\\s*'[^']*'\\s*as\\s*const,\\s*description:\\s*'Feather icon:[^']*',\\s*source:\\s*'feather'\\s*as\\s*const,\\s*sourceUrl:\\s*'https://feathericons\\.com/',\\s*license:\\s*'MIT'\\s*},?`,
      'g'
    );
    
    registryContent = registryContent.replace(featherIconPattern, '');
  });
  
  // Clean up any extra commas or empty lines
  registryContent = registryContent.replace(/,\s*}/g, '}');
  registryContent = registryContent.replace(/,\s*,/g, ',');
  
  // Write the updated registry
  fs.writeFileSync(registryPath, registryContent);
  console.log('✅ Duplicate icon names fixed');
  console.log(`Removed ${duplicateIcons.length} duplicate Feather icons`);
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  fixDuplicates();
}

export { fixDuplicates };