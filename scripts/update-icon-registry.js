#!/usr/bin/env node

/**
 * Update the icon registry with Feather Icons
 * This script reads the download results and updates the icon registry
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the download results
const resultsPath = path.join(__dirname, 'feather-icons-results.json');
if (!fs.existsSync(resultsPath)) {
  console.error('❌ feather-icons-results.json not found. Please run download-feather-icons.js first.');
  process.exit(1);
}

const results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));

// Icon registry path
const registryPath = path.join(__dirname, '..', 'packages', 'tokens', 'icon-registry.ts');

// Read current registry
let registryContent = fs.readFileSync(registryPath, 'utf8');

// Create Feather Icons registry entries
function createFeatherIconEntries() {
  const entries = [];
  
  Object.entries(results.categories).forEach(([category, icons]) => {
    icons.forEach(iconName => {
      // Convert feather-icon-name to a more readable name
      const displayName = iconName.replace('feather-', '');
      const description = `Feather icon: ${displayName.replace(/-/g, ' ')}`;
      
      entries.push({
        name: iconName,
        category: category,
        description: description,
        displayName: displayName
      });
    });
  });
  
  return entries;
}

// Generate the new registry content
function generateUpdatedRegistry() {
  const featherEntries = createFeatherIconEntries();
  
  // Sort entries by category and name
  featherEntries.sort((a, b) => {
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    return a.name.localeCompare(b.name);
  });
  
  // Group by category
  const groupedEntries = {};
  featherEntries.forEach(entry => {
    if (!groupedEntries[entry.category]) {
      groupedEntries[entry.category] = [];
    }
    groupedEntries[entry.category].push(entry);
  });
  
  // Generate the registry code
  let newRegistryCode = `// Comcast Business Design System - Icon Registry
// High-quality icon management system with proper type support

export interface IconMetadata {
  name: string;
  category: 'navigation' | 'status' | 'communication' | 'data' | 'media' | 'interface' | 'security' | 'general';
  description?: string;
  size?: { width: number; height: number };
  tags?: string[];
}

// Core icon registry with commonly used icons
export const CORE_ICONS = {
  // Navigation
  'chevron': { name: 'chevron', category: 'navigation' as const, description: 'Chevron arrow for navigation' },
  'arrow': { name: 'arrow', category: 'navigation' as const, description: 'Basic arrow' },
  'backarrow': { name: 'backarrow', category: 'navigation' as const, description: 'Back navigation arrow' },
  'doublechevron': { name: 'doublechevron', category: 'navigation' as const, description: 'Double chevron for pagination' },
  'menu': { name: 'menu', category: 'navigation' as const, description: 'Hamburger menu' },
  'globalnav': { name: 'globalnav', category: 'navigation' as const, description: 'Global navigation' },
  
  // Interface
  'close': { name: 'close', category: 'interface' as const, description: 'Close/X button' },
  'check': { name: 'check', category: 'interface' as const, description: 'Checkmark' },
  'plus': { name: 'plus', category: 'interface' as const, description: 'Add/Plus button' },
  'minus': { name: 'minus', category: 'interface' as const, description: 'Remove/Minus button' },
  'search': { name: 'search', category: 'interface' as const, description: 'Search icon' },
  'configure': { name: 'configure', category: 'interface' as const, description: 'Settings/Configure' },
  'refresh': { name: 'refresh', category: 'interface' as const, description: 'Refresh/Reload' },
  'download': { name: 'download', category: 'interface' as const, description: 'Download' },
  'upload': { name: 'upload', category: 'interface' as const, description: 'Upload' },
  'maximize': { name: 'maximize', category: 'interface' as const, description: 'Maximize window' },
  'minimize': { name: 'minimize', category: 'interface' as const, description: 'Minimize window' },
  'sort': { name: 'sort', category: 'interface' as const, description: 'Sort data' },
  'filteralt': { name: 'filteralt', category: 'interface' as const, description: 'Filter' },
  'contextmenu': { name: 'contextmenu', category: 'interface' as const, description: 'Context menu (3 dots)' },
  'grabber': { name: 'grabber', category: 'interface' as const, description: 'Drag handle' },
  
  // Status & Feedback
  'alert': { name: 'alert', category: 'status' as const, description: 'Alert/Warning' },
  'complete': { name: 'complete', category: 'status' as const, description: 'Success/Complete' },
  'bell': { name: 'bell', category: 'status' as const, description: 'Notifications' },
  'notifications': { name: 'notifications', category: 'status' as const, description: 'Notification center' },
  'feedback': { name: 'feedback', category: 'status' as const, description: 'User feedback' },
  
  // Communication
  'chat': { name: 'chat', category: 'communication' as const, description: 'Chat/Message' },
  'message': { name: 'message', category: 'communication' as const, description: 'Message' },
  'conference': { name: 'conference', category: 'communication' as const, description: 'Conference call' },
  'video': { name: 'video', category: 'communication' as const, description: 'Video' },
  'voicemail': { name: 'voicemail', category: 'communication' as const, description: 'Voicemail' },
  
  // Data & Documents
  'document': { name: 'document', category: 'data' as const, description: 'Document' },
  'folder': { name: 'folder', category: 'data' as const, description: 'Folder' },
  'clipboard': { name: 'clipboard', category: 'data' as const, description: 'Clipboard' },
  'analytics': { name: 'analytics', category: 'data' as const, description: 'Analytics/Charts' },
  'report': { name: 'report', category: 'data' as const, description: 'Report' },
  'piechart': { name: 'piechart', category: 'data' as const, description: 'Pie chart' },
  
  // Security
  'blockers': { name: 'blockers', category: 'security' as const, description: 'Security blockers' },
  'password': { name: 'password', category: 'security' as const, description: 'Password' },
  'securityquestion': { name: 'securityquestion', category: 'security' as const, description: 'Security question' },
  'variantlockedtypefilled': { name: 'variantlockedtypefilled', category: 'security' as const, description: 'Locked (filled)' },
  'variantlockedtypeoutline': { name: 'variantlockedtypeoutline', category: 'security' as const, description: 'Locked (outline)' },
  'variantunlockedtypefilled': { name: 'variantunlockedtypefilled', category: 'security' as const, description: 'Unlocked (filled)' },
  'variantunlockedtypeoutline': { name: 'variantunlockedtypeoutline', category: 'security' as const, description: 'Unlocked (outline)' },
  
  // Media
  'avplay': { name: 'avplay', category: 'media' as const, description: 'Play' },
  'avpause': { name: 'avpause', category: 'media' as const, description: 'Pause' },
  'avstop': { name: 'avstop', category: 'media' as const, description: 'Stop' },
  'avrecord': { name: 'avrecord', category: 'media' as const, description: 'Record' },
  'playcircle': { name: 'playcircle', category: 'media' as const, description: 'Play button (circle)' },
  'camera': { name: 'camera', category: 'media' as const, description: 'Camera' },
  
  // Business
  'wallet': { name: 'wallet', category: 'general' as const, description: 'Wallet/Payment' },
  'paymentcard': { name: 'paymentcard', category: 'general' as const, description: 'Payment card' },
  'money': { name: 'money', category: 'general' as const, description: 'Money/Currency' },
  'fees': { name: 'fees', category: 'general' as const, description: 'Fees' },
  'shoppingbag': { name: 'shoppingbag', category: 'general' as const, description: 'Shopping bag' },
  'cartempty': { name: 'cartempty', category: 'general' as const, description: 'Empty cart' },
  'pricetag': { name: 'pricetag', category: 'general' as const, description: 'Price tag' },
  'percent': { name: 'percent', category: 'general' as const, description: 'Percentage' },
  
  // Technology
  'internet': { name: 'internet', category: 'general' as const, description: 'Internet connection' },
  'wifi': { name: 'wifi', category: 'general' as const, description: 'WiFi' },
  'ethernet': { name: 'ethernet', category: 'general' as const, description: 'Ethernet connection' },
  'cloud': { name: 'cloud', category: 'general' as const, description: 'Cloud' },
  'cloudupload': { name: 'cloudupload', category: 'general' as const, description: 'Cloud upload' },
  'device': { name: 'device', category: 'general' as const, description: 'Device' },
  'browser': { name: 'browser', category: 'general' as const, description: 'Browser' },
  'portal': { name: 'portal', category: 'general' as const, description: 'Portal' },
  
  // Users & Account
  'users': { name: 'users', category: 'general' as const, description: 'Users/People' },
  'login': { name: 'login', category: 'general' as const, description: 'Login' },
  'logout': { name: 'logout', category: 'general' as const, description: 'Logout' },
  'switchaccounts': { name: 'switchaccounts', category: 'general' as const, description: 'Switch accounts' },
`;

  // Add Feather Icons by category
  Object.entries(groupedEntries).forEach(([category, entries]) => {
    if (entries.length > 0) {
      newRegistryCode += `\n  // Feather Icons - ${category.charAt(0).toUpperCase() + category.slice(1)}\n`;
      entries.forEach(entry => {
        const key = `'${entry.name}'`;
        const value = `{ name: '${entry.name}', category: '${entry.category}' as const, description: '${entry.description}' }`;
        newRegistryCode += `  ${key}: ${value},\n`;
      });
    }
  });

  newRegistryCode += `} as const;

// Type for icon names
export type CoreIconName = keyof typeof CORE_ICONS;

// Get all available icons from the assets directory
export const getAllAvailableIcons = (): string[] => {
  // This would normally be generated at build time
  // For now, we'll return the core icons
  return Object.keys(CORE_ICONS);
};

// Icon utilities
export const getIconMetadata = (name: CoreIconName): IconMetadata => {
  return CORE_ICONS[name];
};

export const getIconsByCategory = (category: IconMetadata['category']): IconMetadata[] => {
  return Object.values(CORE_ICONS).filter(icon => icon.category === category);
};

export const searchIcons = (query: string): IconMetadata[] => {
  const lowercaseQuery = query.toLowerCase();
  return Object.values(CORE_ICONS).filter(icon =>
    icon.name.toLowerCase().includes(lowercaseQuery) ||
    icon.description?.toLowerCase().includes(lowercaseQuery) ||
    icon.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Icon path helper
export const getIconPath = (name: string): string => {
  return \`/icons/\${name}.svg\`;
};

// Preload critical icons
export const CRITICAL_ICONS: CoreIconName[] = [
  'chevron',
  'close',
  'check',
  'plus',
  'minus',
  'search',
  'alert',
  'menu',
  'bell',
  'configure'
];`;

  return newRegistryCode;
}

// Update the registry
function updateIconRegistry() {
  console.log('🔄 Updating icon registry with Feather Icons...');
  
  const newRegistryContent = generateUpdatedRegistry();
  
  // Backup the original file
  const backupPath = registryPath + '.backup';
  fs.writeFileSync(backupPath, registryContent);
  console.log(`💾 Backup created: ${backupPath}`);
  
  // Write the new registry
  fs.writeFileSync(registryPath, newRegistryContent);
  console.log(`✅ Updated icon registry: ${registryPath}`);
  
  // Generate statistics
  const totalIcons = Object.keys(results.categories).reduce((sum, category) => sum + results.categories[category].length, 0);
  console.log(`\n📊 Registry Statistics:`);
  console.log(`   Total Feather Icons added: ${totalIcons}`);
  Object.entries(results.categories).forEach(([category, icons]) => {
    console.log(`   ${category}: ${icons.length} icons`);
  });
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  updateIconRegistry();
}

export { updateIconRegistry };