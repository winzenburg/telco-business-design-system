#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load the existing icon data
const tokensFile = path.join(__dirname, '../src/tokens/design-system-icons.ts');
const existingContent = fs.readFileSync(tokensFile, 'utf8');

// Get current icon files
const iconsDir = path.join(__dirname, '../public/icons');
const currentIcons = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.svg'))
  .map(file => file.replace('.svg', ''));

console.log(`🔄 Regenerating icon tokens for ${currentIcons.length} icons...`);

// Extract the existing icon data structure
const iconDataMatch = existingContent.match(/export const icons = \{([\s\S]*?)\n\};/);
if (!iconDataMatch) {
  console.error('❌ Could not find existing icon data structure');
  process.exit(1);
}

// Parse existing icon metadata
const existingIconData = {};
const iconDataLines = iconDataMatch[1].split('\n');
iconDataLines.forEach(line => {
  const match = line.match(/^\s*"([^"]+)":\s*\{/);
  if (match) {
    const iconName = match[1];
    // Extract the full icon data block
    const startIndex = existingContent.indexOf(`"${iconName}": {`);
    if (startIndex !== -1) {
      const endPattern = new RegExp(`"${iconName}": \\{[\\s\\S]*?\\n\\s*\\},?\\n`);
      const dataMatch = existingContent.match(endPattern);
      if (dataMatch) {
        existingIconData[iconName] = dataMatch[0];
      }
    }
  }
});

// Create new content
let newContent = existingContent;

// Update svgImports
const svgImportsSection = currentIcons
  .sort()
  .map(iconName => `  "${iconName}": () => import('../assets/icons/${iconName}.svg?raw'),`)
  .join('\n');

newContent = newContent.replace(
  /export const svgImports = \{[\s\S]*?\n\};/,
  `export const svgImports = {\n${svgImportsSection}\n};`
);

// Update icons object
const iconsSection = currentIcons
  .sort()
  .map(iconName => {
    if (existingIconData[iconName]) {
      return existingIconData[iconName].replace(/,?\n$/, ',');
    } else {
      // Create basic icon data for missing icons
      return `  "${iconName}": {
    "name": "${iconName.charAt(0).toUpperCase() + iconName.slice(1)}",
    "id": "generated",
    "type": "COMPONENT",
    "size": { "width": 32, "height": 32 },
    "category": "general",
    "description": "",
    "key": "${iconName}",
    "exportable": true,
    "fileName": "${iconName}.svg",
    "filePath": "src/assets/icons/${iconName}.svg",
    "relativePath": "src/assets/icons/${iconName}.svg"
  },`;
    }
  })
  .join('\n');

newContent = newContent.replace(
  /export const icons = \{[\s\S]*?\n\};/,
  `export const icons = {\n${iconsSection}\n};`
);

// Update the total count in comments
newContent = newContent.replace(
  /\/\/ \d+ icons from Figma/g,
  `// ${currentIcons.length} icons from Figma`
);

// Write the updated file
fs.writeFileSync(tokensFile, newContent);

console.log('✅ Icon tokens regenerated successfully!');
console.log(`📊 Updated to ${currentIcons.length} unique icons`);
console.log(`📁 Removed references to ${Object.keys(existingIconData).length - currentIcons.length} deleted icons`);

// Also copy the deduplicated icons back to src/assets/icons to keep them in sync
const srcIconsDir = path.join(__dirname, '../src/assets/icons');
if (fs.existsSync(srcIconsDir)) {
  // Clear existing icons
  const existingFiles = fs.readdirSync(srcIconsDir).filter(f => f.endsWith('.svg'));
  existingFiles.forEach(file => {
    fs.unlinkSync(path.join(srcIconsDir, file));
  });
  
  // Copy current icons
  currentIcons.forEach(iconName => {
    const src = path.join(iconsDir, `${iconName}.svg`);
    const dest = path.join(srcIconsDir, `${iconName}.svg`);
    fs.copyFileSync(src, dest);
  });
  
  console.log(`📁 Synced ${currentIcons.length} icons to src/assets/icons/`);
}