#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Rebuilding complete icon system...');

// Check if icons exist
const iconsDir = path.join(__dirname, '../public/icons');
if (!fs.existsSync(iconsDir)) {
  console.error('❌ Icons directory not found:', iconsDir);
  process.exit(1);
}

const iconFiles = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.svg'))
  .map(file => file.replace('.svg', ''))
  .sort();

console.log(`📊 Found ${iconFiles.length} icon files`);

// Create comprehensive icon categorization
const categorizeIcon = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes('arrow') || lower.includes('nav') || lower.includes('back') || lower.includes('forward')) return 'navigation';
  if (lower.includes('user') || lower.includes('people') || lower.includes('profile')) return 'users';
  if (lower.includes('mail') || lower.includes('message') || lower.includes('chat') || lower.includes('call')) return 'communication';
  if (lower.includes('chart') || lower.includes('analytics') || lower.includes('report') || lower.includes('data')) return 'data';
  if (lower.includes('play') || lower.includes('pause') || lower.includes('video') || lower.includes('audio')) return 'media';
  if (lower.includes('settings') || lower.includes('config') || lower.includes('tool') || lower.includes('gear')) return 'settings';
  if (lower.includes('add') || lower.includes('edit') || lower.includes('delete') || lower.includes('save')) return 'actions';
  return 'general';
};

// Create icon data with proper categorization
const iconData = {};
const categories = {};

iconFiles.forEach(iconName => {
  const category = categorizeIcon(iconName);
  
  iconData[iconName] = {
    name: iconName.charAt(0).toUpperCase() + iconName.slice(1),
    id: `figma-${iconName}`,
    type: "COMPONENT",
    size: { width: 32, height: 32 },
    category: category,
    description: "",
    key: iconName,
    exportable: true,
    fileName: `${iconName}.svg`,
    filePath: `public/icons/${iconName}.svg`,
    relativePath: `public/icons/${iconName}.svg`
  };
  
  if (!categories[category]) {
    categories[category] = {};
  }
  categories[category][iconName] = iconData[iconName];
});

// Generate the complete file
const content = `// Comcast Business Design System - Icon Tokens
// Auto-generated from ${iconFiles.length} unique icons
// Generated on ${new Date().toISOString()}

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

// Icon metadata (${iconFiles.length} total icons)
export const icons = ${JSON.stringify(iconData, null, 2)} as const;

// Helper functions
export const getIcon = (key: string): IconData | undefined => {
  return icons[key as keyof typeof icons];
};

export const getIconsByCategory = (category: string) => {
  return Object.fromEntries(
    Object.entries(icons).filter(([_, icon]) => icon.category === category)
  );
};

// Icons organized by category
export const iconsByCategory = {
${Object.keys(categories).map(category => 
  `  ${category}: getIconsByCategory('${category}')`
).join(',\n')}
} as const;

export const iconCategories = [${Object.keys(categories).map(cat => `'${cat}'`).join(', ')}] as const;

export const commonIconSizes = {
  xs: "16x16",
  sm: "20x20", 
  md: "24x24",
  lg: "32x32",
  xl: "48x48"
} as const;

// Icon usage guidelines
export const iconUsage = {
  loading: "Icons are loaded from public/icons/ directory via fetch",
  sizing: "Use consistent sizes: 16px, 20px, 24px, 32px, 48px",
  accessibility: "All icons include proper ARIA labels and titles",
  performance: "Icons are loaded on-demand and cached by the browser"
} as const;

// Export everything for convenience
export default {
  icons,
  iconsByCategory,
  iconCategories,
  commonIconSizes,
  iconUsage,
  getIcon,
  getIconsByCategory
} as const;

// Type definitions
export type IconName = keyof typeof icons;
export type IconCategory = keyof typeof iconsByCategory;
export type CommonIconSize = keyof typeof commonIconSizes;
`;

// Write the file
const tokensFile = path.join(__dirname, '../src/tokens/design-system-icons.ts');
fs.writeFileSync(tokensFile, content);

console.log('✅ Rebuilt design-system-icons.ts');
console.log(`📝 Generated ${iconFiles.length} icon definitions`);
console.log(`📂 Organized into ${Object.keys(categories).length} categories:`, Object.keys(categories).join(', '));
console.log('🎯 System ready for use!');