#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const DRY_RUN = process.argv.includes('--dry-run') || process.argv.includes('-d');
const BACKUP_DIR = path.join(__dirname, '../backup-icons');

console.log(`🧹 Icon Deduplication ${DRY_RUN ? '(DRY RUN)' : ''}`);
console.log('='.repeat(50));

function createBackup() {
  if (!DRY_RUN && !fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    console.log(`📁 Created backup directory: ${BACKUP_DIR}`);
  }
}

function deduplicateIcons() {
  const iconsDir = path.join(__dirname, '../public/icons');
  const iconFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));
  
  console.log(`\n📊 Found ${iconFiles.length} icon files`);
  
  const toDelete = [];
  const toKeep = [];
  
  // Define priority order for keeping icons (prefer simpler names)
  const shouldKeep = (filename) => {
    const basename = filename.replace('.svg', '');
    
    // Always delete color variants (colorblack, colorblue, colorwhite + size)
    if (basename.match(/^color(black|white|blue)size/)) {
      return false;
    }
    
    // Delete most size variants but keep one representative size
    if (basename.match(/size(xxs|xs|s|m|l|xl|xxl|xxxl)/)) {
      // Keep medium size as representative
      if (basename.includes('sizem') || basename.includes('sizel32x32')) {
        return true;
      }
      return false;
    }
    
    // Delete property variants except property1default
    if (basename.match(/property\d+/)) {
      if (basename.includes('property1default')) {
        return true;
      }
      return false;
    }
    
    // Delete variant types except filled versions
    if (basename.match(/variant.*type(filled|outline)$/)) {
      // Keep filled versions, delete outline versions
      return basename.includes('typefilled');
    }
    
    // Delete direction variants except down
    if (basename.match(/direction(up|down|left|right)$/)) {
      return basename.includes('directiondown');
    }
    
    // Delete size+direction combinations
    if (basename.match(/size.*direction/)) {
      return false;
    }
    
    // Delete numbered size variants (sizes20, sizexl64, etc.)
    if (basename.match(/^size[a-z]+(16|20|24|32|48|64|80|12)$/)) {
      return false;
    }
    
    // Keep group1, delete other groups
    if (basename.match(/^group\d+$/)) {
      return basename === 'group1';
    }
    
    // Keep simple variant names
    if (basename.match(/^variant[a-z]+$/) && !basename.match(/(type|size|direction)/)) {
      return true;
    }
    
    // Keep everything else (base icons)
    return true;
  };
  
  // Categorize files
  iconFiles.forEach(filename => {
    if (shouldKeep(filename)) {
      toKeep.push(filename);
    } else {
      toDelete.push(filename);
    }
  });
  
  console.log(`\n🎯 DEDUPLICATION PLAN:`);
  console.log(`Files to keep: ${toKeep.length}`);
  console.log(`Files to delete: ${toDelete.length}`);
  console.log(`Space savings: ${((toDelete.length / iconFiles.length) * 100).toFixed(1)}%\n`);
  
  if (DRY_RUN) {
    console.log('📋 FILES TO DELETE (DRY RUN):');
    toDelete.forEach(file => console.log(`  🗑️  ${file}`));
    
    console.log('\n📋 SAMPLE FILES TO KEEP:');
    toKeep.slice(0, 20).forEach(file => console.log(`  ✅ ${file}`));
    if (toKeep.length > 20) {
      console.log(`  ... and ${toKeep.length - 20} more`);
    }
    
    console.log('\n💡 To perform actual deletion, run:');
    console.log('   node scripts/deduplicate-icons.js');
  } else {
    // Create backup
    createBackup();
    
    // Copy files to backup before deletion
    console.log('📦 Creating backup...');
    toDelete.forEach(file => {
      const src = path.join(iconsDir, file);
      const dest = path.join(BACKUP_DIR, file);
      fs.copyFileSync(src, dest);
    });
    
    // Delete duplicate files
    console.log('🗑️  Deleting duplicates...');
    let deletedCount = 0;
    toDelete.forEach(file => {
      const filePath = path.join(iconsDir, file);
      try {
        fs.unlinkSync(filePath);
        deletedCount++;
      } catch (err) {
        console.error(`❌ Failed to delete ${file}: ${err.message}`);
      }
    });
    
    console.log(`\n✅ Deduplication complete!`);
    console.log(`Deleted: ${deletedCount} files`);
    console.log(`Remaining: ${fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg')).length} files`);
    console.log(`Backup created: ${BACKUP_DIR}`);
  }
  
  return { toKeep, toDelete };
}

// Run deduplication
const result = deduplicateIcons();

if (DRY_RUN) {
  console.log('\n🔍 To see this analysis again: node scripts/analyze-duplicate-icons.js');
  console.log('🧹 To deduplicate: node scripts/deduplicate-icons.js');
}