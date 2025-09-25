#!/usr/bin/env node

/**
 * Download Feather Icons and integrate them into the Comcast Business Design System
 * This script downloads all Feather Icons and organizes them by category
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Feather Icons list (from the API call)
const FEATHER_ICONS = [
  'activity', 'airplay', 'alert-circle', 'alert-octagon', 'alert-triangle',
  'align-center', 'align-justify', 'align-left', 'align-right', 'anchor',
  'aperture', 'archive', 'arrow-down', 'arrow-down-circle', 'arrow-down-left',
  'arrow-down-right', 'arrow-left', 'arrow-left-circle', 'arrow-right',
  'arrow-right-circle', 'arrow-up', 'arrow-up-circle', 'arrow-up-left',
  'arrow-up-right', 'at-sign', 'award', 'bar-chart', 'bar-chart-2',
  'battery', 'battery-charging', 'bell', 'bell-off', 'bluetooth', 'bold',
  'book', 'book-open', 'bookmark', 'box', 'briefcase', 'calendar', 'camera',
  'camera-off', 'cast', 'check', 'check-circle', 'check-square',
  'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up',
  'chevrons-down', 'chevrons-left', 'chevrons-right', 'chevrons-up',
  'chrome', 'circle', 'clipboard', 'clock', 'cloud', 'cloud-drizzle',
  'cloud-lightning', 'cloud-off', 'cloud-rain', 'cloud-snow', 'code',
  'codepen', 'codesandbox', 'coffee', 'columns', 'command', 'compass',
  'copy', 'corner-down-left', 'corner-down-right', 'corner-left-down',
  'corner-left-up', 'corner-right-down', 'corner-right-up', 'corner-up-left',
  'corner-up-right', 'cpu', 'credit-card', 'crop', 'crosshair', 'database',
  'delete', 'disc', 'divide', 'divide-circle', 'divide-square',
  'dollar-sign', 'download', 'download-cloud', 'dribbble', 'droplet',
  'edit', 'edit-2', 'edit-3', 'external-link', 'eye', 'eye-off', 'facebook',
  'fast-forward', 'feather', 'figma', 'file', 'file-minus', 'file-plus',
  'file-text', 'film', 'filter', 'flag', 'folder', 'folder-minus',
  'folder-plus', 'framer', 'frown', 'gift', 'git-branch', 'git-commit',
  'git-merge', 'git-pull-request', 'github', 'gitlab', 'globe', 'grid',
  'hard-drive', 'hash', 'headphones', 'heart', 'help-circle', 'hexagon',
  'home', 'image', 'inbox', 'info', 'instagram', 'italic', 'key', 'layers',
  'layout', 'life-buoy', 'link', 'link-2', 'linkedin', 'list', 'loader',
  'lock', 'log-in', 'log-out', 'mail', 'map', 'map-pin', 'maximize',
  'maximize-2', 'meh', 'menu', 'message-circle', 'message-square', 'mic',
  'mic-off', 'minimize', 'minimize-2', 'minus', 'minus-circle',
  'minus-square', 'monitor', 'moon', 'more-horizontal', 'more-vertical',
  'mouse-pointer', 'move', 'music', 'navigation', 'navigation-2', 'octagon',
  'package', 'paperclip', 'pause', 'pause-circle', 'pen-tool', 'percent',
  'phone', 'phone-call', 'phone-forwarded', 'phone-incoming',
  'phone-missed', 'phone-off', 'phone-outgoing', 'pie-chart', 'play',
  'play-circle', 'plus', 'plus-circle', 'plus-square', 'pocket', 'power',
  'printer', 'radio', 'refresh-ccw', 'refresh-cw', 'repeat', 'rewind',
  'rotate-ccw', 'rotate-cw', 'rss', 'save', 'scissors', 'search', 'send',
  'server', 'settings', 'share', 'share-2', 'shield', 'shield-off',
  'shopping-bag', 'shopping-cart', 'shuffle', 'sidebar', 'skip-back',
  'skip-forward', 'slack', 'slash', 'sliders', 'smartphone', 'smile',
  'speaker', 'square', 'star', 'stop-circle', 'sun', 'sunrise', 'sunset',
  'table', 'tablet', 'tag', 'target', 'terminal', 'thermometer',
  'thumbs-down', 'thumbs-up', 'toggle-left', 'toggle-right', 'tool', 'trash',
  'trash-2', 'trello', 'trending-down', 'trending-up', 'triangle', 'truck',
  'tv', 'twitch', 'twitter', 'type', 'umbrella', 'underline', 'unlock',
  'upload', 'upload-cloud', 'user', 'user-check', 'user-minus', 'user-plus',
  'user-x', 'users', 'video', 'video-off', 'voicemail', 'volume', 'volume-1',
  'volume-2', 'volume-x', 'watch', 'wifi', 'wifi-off', 'wind', 'x',
  'x-circle', 'x-octagon', 'x-square', 'youtube', 'zap', 'zap-off',
  'zoom-in', 'zoom-out'
];

// Icon categorization for Feather Icons
const FEATHER_ICON_CATEGORIES = {
  navigation: [
    'arrow-down', 'arrow-down-circle', 'arrow-down-left', 'arrow-down-right',
    'arrow-left', 'arrow-left-circle', 'arrow-right', 'arrow-right-circle',
    'arrow-up', 'arrow-up-circle', 'arrow-up-left', 'arrow-up-right',
    'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up',
    'chevrons-down', 'chevrons-left', 'chevrons-right', 'chevrons-up',
    'corner-down-left', 'corner-down-right', 'corner-left-down',
    'corner-left-up', 'corner-right-down', 'corner-right-up',
    'corner-up-left', 'corner-up-right', 'navigation', 'navigation-2',
    'home', 'map', 'map-pin', 'compass', 'target', 'crosshair'
  ],
  interface: [
    'check', 'check-circle', 'check-square', 'x', 'x-circle', 'x-octagon',
    'x-square', 'plus', 'plus-circle', 'plus-square', 'minus', 'minus-circle',
    'minus-square', 'close', 'menu', 'more-horizontal', 'more-vertical',
    'settings', 'search', 'filter', 'sliders', 'maximize', 'maximize-2',
    'minimize', 'minimize-2', 'refresh-ccw', 'refresh-cw', 'rotate-ccw',
    'rotate-cw', 'move', 'mouse-pointer', 'pen-tool', 'scissors', 'crop',
    'copy', 'edit', 'edit-2', 'edit-3', 'save', 'download', 'upload',
    'upload-cloud', 'download-cloud', 'external-link', 'link', 'link-2',
    'share', 'share-2', 'bookmark', 'tag', 'flag', 'star', 'heart',
    'thumbs-up', 'thumbs-down', 'smile', 'frown', 'meh', 'zap', 'zap-off'
  ],
  status: [
    'alert-circle', 'alert-octagon', 'alert-triangle', 'info', 'help-circle',
    'life-buoy', 'shield', 'shield-off', 'lock', 'unlock', 'key',
    'battery', 'battery-charging', 'wifi', 'wifi-off', 'signal', 'activity',
    'trending-up', 'trending-down', 'loader', 'circle', 'square', 'triangle',
    'hexagon', 'octagon', 'octagon'
  ],
  communication: [
    'mail', 'message-circle', 'message-square', 'phone', 'phone-call',
    'phone-forwarded', 'phone-incoming', 'phone-missed', 'phone-off',
    'phone-outgoing', 'voicemail', 'mic', 'mic-off', 'volume', 'volume-1',
    'volume-2', 'volume-x', 'speaker', 'headphones', 'at-sign', 'send',
    'rss', 'bell', 'bell-off', 'notifications'
  ],
  data: [
    'file', 'file-minus', 'file-plus', 'file-text', 'folder', 'folder-minus',
    'folder-plus', 'clipboard', 'database', 'server', 'hard-drive',
    'bar-chart', 'bar-chart-2', 'pie-chart', 'trending-up', 'trending-down',
    'activity', 'layers', 'grid', 'columns', 'list', 'table', 'terminal',
    'code', 'hash', 'type', 'bold', 'italic', 'underline', 'align-center',
    'align-justify', 'align-left', 'align-right', 'divide', 'divide-circle',
    'divide-square', 'slash'
  ],
  media: [
    'play', 'play-circle', 'pause', 'pause-circle', 'stop-circle',
    'fast-forward', 'rewind', 'skip-back', 'skip-forward', 'repeat',
    'shuffle', 'music', 'video', 'video-off', 'camera', 'camera-off',
    'image', 'film', 'monitor', 'tv', 'airplay', 'cast', 'disc',
    'radio', 'watch', 'smartphone', 'tablet', 'laptop'
  ],
  security: [
    'shield', 'shield-off', 'lock', 'unlock', 'key', 'eye', 'eye-off',
    'user', 'user-check', 'user-minus', 'user-plus', 'user-x', 'users',
    'log-in', 'log-out', 'award', 'verified'
  ],
  general: [
    'feather', 'package', 'box', 'briefcase', 'gift', 'shopping-bag',
    'shopping-cart', 'credit-card', 'dollar-sign', 'percent', 'printer',
    'tool', 'wrench', 'hammer', 'scissors', 'paperclip', 'bookmark',
    'book', 'book-open', 'calendar', 'clock', 'sun', 'moon', 'sunrise',
    'sunset', 'thermometer', 'wind', 'droplet', 'umbrella', 'cloud',
    'cloud-drizzle', 'cloud-lightning', 'cloud-off', 'cloud-rain',
    'cloud-snow', 'zap', 'zap-off', 'cpu', 'monitor', 'smartphone',
    'tablet', 'watch', 'bluetooth', 'wifi', 'wifi-off', 'navigation',
    'navigation-2', 'compass', 'map', 'map-pin', 'home', 'building',
    'briefcase', 'briefcase', 'briefcase', 'briefcase', 'briefcase'
  ]
};

// Function to download a single icon
function downloadIcon(iconName) {
  return new Promise((resolve, reject) => {
    const url = `https://raw.githubusercontent.com/feathericons/feather/main/icons/${iconName}.svg`;
    const filePath = path.join(__dirname, '..', 'src', 'assets', 'icons', `feather-${iconName}.svg`);
    
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${iconName}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${iconName}`);
        resolve(iconName);
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // Delete the file on error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Function to determine category for an icon
function getIconCategory(iconName) {
  for (const [category, icons] of Object.entries(FEATHER_ICON_CATEGORIES)) {
    if (icons.includes(iconName)) {
      return category;
    }
  }
  return 'general';
}

// Main function
async function downloadFeatherIcons() {
  console.log('🚀 Starting Feather Icons download...');
  console.log(`📦 Total icons to download: ${FEATHER_ICONS.length}`);
  
  const iconsDir = path.join(__dirname, '..', 'src', 'assets', 'icons');
  
  // Ensure icons directory exists
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }
  
  const results = {
    success: [],
    failed: [],
    categories: {}
  };
  
  // Download icons in batches to avoid overwhelming the server
  const batchSize = 10;
  for (let i = 0; i < FEATHER_ICONS.length; i += batchSize) {
    const batch = FEATHER_ICONS.slice(i, i + batchSize);
    
    console.log(`\n📥 Downloading batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(FEATHER_ICONS.length / batchSize)}...`);
    
    const promises = batch.map(async (iconName) => {
      try {
        await downloadIcon(iconName);
        const category = getIconCategory(iconName);
        
        if (!results.categories[category]) {
          results.categories[category] = [];
        }
        results.categories[category].push(`feather-${iconName}`);
        
        results.success.push(`feather-${iconName}`);
        return iconName;
      } catch (error) {
        console.error(`❌ Failed to download ${iconName}:`, error.message);
        results.failed.push(iconName);
        return null;
      }
    });
    
    await Promise.all(promises);
    
    // Small delay between batches
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // Generate summary
  console.log('\n📊 Download Summary:');
  console.log(`✅ Successfully downloaded: ${results.success.length}`);
  console.log(`❌ Failed downloads: ${results.failed.length}`);
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed icons:');
    results.failed.forEach(icon => console.log(`  - ${icon}`));
  }
  
  console.log('\n📁 Icons by category:');
  Object.entries(results.categories).forEach(([category, icons]) => {
    console.log(`  ${category}: ${icons.length} icons`);
  });
  
  // Save results to file for the next script
  const resultsPath = path.join(__dirname, 'feather-icons-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  
  console.log(`\n💾 Results saved to: ${resultsPath}`);
  console.log('🎉 Feather Icons download complete!');
  
  return results;
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  downloadFeatherIcons().catch(console.error);
}

export { downloadFeatherIcons, FEATHER_ICONS, FEATHER_ICON_CATEGORIES };