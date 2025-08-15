#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing design-system-icons.ts...');

// Get current icon files
const iconsDir = path.join(__dirname, '../public/icons');
const iconFiles = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.svg'))
  .map(file => file.replace('.svg', ''))
  .sort();

console.log(`📊 Found ${iconFiles.length} icon files`);

// Create the new file content
const content = `// Comcast Business Design System - Icon Tokens (Deduplicated)
// Auto-generated from ${iconFiles.length} unique icons

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

// Icon metadata
export const icons = {
${iconFiles.map(iconName => `  "${iconName}": {
    "name": "${iconName.charAt(0).toUpperCase() + iconName.slice(1)}",
    "id": "figma-${iconName}",
    "type": "COMPONENT",
    "size": { "width": 32, "height": 32 },
    "category": "general",
    "description": "",
    "key": "${iconName}",
    "exportable": true,
    "fileName": "${iconName}.svg",
    "filePath": "public/icons/${iconName}.svg",
    "relativePath": "public/icons/${iconName}.svg"
  }`).join(',\n')}
} as const;

// Helper functions
export const getIcon = (key: string): IconData | undefined => {
  return icons[key as keyof typeof icons];
};

export const getIconsByCategory = (category: string) => {
  return Object.fromEntries(
    Object.entries(icons).filter(([_, icon]) => icon.category === category)
  );
};

export const iconsByCategory = {
  general: getIconsByCategory('general'),
  navigation: getIconsByCategory('navigation'),
  interface: getIconsByCategory('interface'),
  communication: getIconsByCategory('communication'),
  data: getIconsByCategory('data'),
  media: getIconsByCategory('media'),
  action: getIconsByCategory('action')
} as const;

export const iconCategories = Object.keys(iconsByCategory) as Array<keyof typeof iconsByCategory>;

export const iconsBySize = {
  small: Object.fromEntries(Object.entries(icons).slice(0, 50)),
  medium: Object.fromEntries(Object.entries(icons).slice(50, 100)),
  large: Object.fromEntries(Object.entries(icons).slice(100))
} as const;

export const iconSizes = Object.keys(iconsBySize) as Array<keyof typeof iconsBySize>;

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

// Export everything
export default {
  icons,
  iconsByCategory,
  iconsBySize,
  iconCategories,
  iconSizes,
  commonIconSizes,
  iconUsage,
  getIcon,
  getIconsByCategory
} as const;

// Type definitions
export type IconName = keyof typeof icons;
export type IconCategory = keyof typeof iconsByCategory;
export type IconSize = keyof typeof iconsBySize;
export type CommonIconSize = keyof typeof commonIconSizes;
`;

// Write the file
const tokensFile = path.join(__dirname, '../src/tokens/design-system-icons.ts');
fs.writeFileSync(tokensFile, content);

console.log('✅ Fixed design-system-icons.ts');
console.log(`📝 Generated ${iconFiles.length} icon definitions`);
console.log('🔄 Removed problematic dynamic imports');
console.log('📁 Icons now load from public/icons/ directory');