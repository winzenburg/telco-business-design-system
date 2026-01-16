#!/usr/bin/env node
/**
 * Sync Icon Registry - Automatically adds missing icons from public/icons to the registry
 * This ensures all Figma-exported SVG files are accessible through the Icon component
 */

const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../public/icons');
const REGISTRY_PATH = path.join(__dirname, '../packages/tokens/icon-registry.ts');

// Category mapping based on icon name patterns
function categorizeIcon(name) {
  const patterns = {
    navigation: /^(arrow|chevron|backarrow|doublechevron|menu|globalnav|direction)/i,
    interface: /^(close|check|plus|minus|search|configure|refresh|download|upload|maximize|minimize|sort|filter|contextmenu|grabber)/i,
    status: /^(alert|complete|bell|notification|feedback|lock|unlock|warning|error|success|info)/i,
    communication: /^(chat|message|conference|video|voicemail|phone|call|email|mail)/i,
    data: /^(document|folder|clipboard|analytics|chart|graph|report|table|database)/i,
    media: /^(play|pause|stop|record|camera|image|photo|av)/i,
    security: /^(shield|lock|unlock|2factor|secure|private)/i,
  };

  for (const [category, pattern] of Object.entries(patterns)) {
    if (pattern.test(name)) {
      return category;
    }
  }

  return 'general';
}

// Generate a readable description from icon name
function generateDescription(name) {
  return name
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]/g, ' ')
    .toLowerCase()
    .trim()
    .replace(/^./, str => str.toUpperCase());
}

// Read all SVG files
function getAllSvgFiles() {
  try {
    const files = fs.readdirSync(ICONS_DIR);
    return files
      .filter(file => file.endsWith('.svg'))
      .map(file => file.replace('.svg', ''))
      .sort();
  } catch (error) {
    console.error('Error reading icons directory:', error);
    return [];
  }
}

// Parse existing registry to get current icons
function getCurrentIcons() {
  try {
    const content = fs.readFileSync(REGISTRY_PATH, 'utf8');
    const iconMatches = content.matchAll(/'([a-z0-9-]+)':\s*\{/g);
    return Array.from(iconMatches).map(match => match[1]);
  } catch (error) {
    console.error('Error reading registry:', error);
    return [];
  }
}

// Generate registry entry for an icon
function generateIconEntry(name) {
  const category = categorizeIcon(name);
  const description = generateDescription(name);

  return `  '${name}': {
    name: '${name}',
    category: '${category}' as const,
    description: '${description}',
    source: 'figma' as const,
    sourceUrl: 'https://www.figma.com/',
    license: 'Proprietary'
  }`;
}

// Main sync function
function syncIconRegistry() {
  console.log('🔍 Scanning for icons...\n');

  const allSvgFiles = getAllSvgFiles();
  const currentIcons = getCurrentIcons();

  console.log(`📦 Found ${allSvgFiles.length} SVG files`);
  console.log(`📋 Found ${currentIcons.length} icons in registry`);

  const missingIcons = allSvgFiles.filter(icon => !currentIcons.includes(icon));

  if (missingIcons.length === 0) {
    console.log('\n✅ All icons are already in the registry!');
    return;
  }

  console.log(`\n⚠️  Found ${missingIcons.length} missing icons`);
  console.log('\n📝 Adding missing icons to registry...\n');

  // Group by category for organized output
  const iconsByCategory = {};
  missingIcons.forEach(icon => {
    const category = categorizeIcon(icon);
    if (!iconsByCategory[category]) {
      iconsByCategory[category] = [];
    }
    iconsByCategory[category].push(icon);
  });

  // Generate entries organized by category
  let newEntries = '';
  Object.entries(iconsByCategory).sort().forEach(([category, icons]) => {
    newEntries += `\n  // ${category.charAt(0).toUpperCase() + category.slice(1)} Icons\n`;
    icons.forEach(icon => {
      newEntries += generateIconEntry(icon) + ',\n';
    });
  });

  // Read current registry content
  let registryContent = fs.readFileSync(REGISTRY_PATH, 'utf8');

  // Find the closing of CORE_ICONS object (before the "} as const;")
  const insertPoint = registryContent.lastIndexOf('}} as const;');

  if (insertPoint === -1) {
    console.error('❌ Could not find insertion point in registry');
    return;
  }

  // Insert new entries before the closing
  const before = registryContent.slice(0, insertPoint + 1);
  const after = registryContent.slice(insertPoint + 1);

  const updatedContent = before + ',' + newEntries + after;

  // Write updated registry
  fs.writeFileSync(REGISTRY_PATH, updatedContent, 'utf8');

  console.log(`✅ Successfully added ${missingIcons.length} icons to registry\n`);
  console.log('📊 Summary by category:');
  Object.entries(iconsByCategory).sort().forEach(([category, icons]) => {
    console.log(`   ${category}: ${icons.length} icons`);
  });

  console.log('\n💡 Next steps:');
  console.log('   1. Run: npm run build:types');
  console.log('   2. Verify icons in Storybook');
  console.log('   3. Commit the updated icon-registry.ts\n');
}

// Run the sync
syncIconRegistry();
