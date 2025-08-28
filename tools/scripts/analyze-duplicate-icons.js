#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Analyze icon duplicates
function analyzeIconDuplicates() {
  const iconsDir = path.join(__dirname, '../public/icons');
  const iconFiles = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));
  
  console.log(`📊 Analyzing ${iconFiles.length} icon files for duplicates...\n`);
  
  // Group icons by potential base names
  const iconGroups = {};
  const sizeVariants = [];
  const colorVariants = [];
  const propertyVariants = [];
  const directionVariants = [];
  const groupVariants = [];
  
  iconFiles.forEach(filename => {
    const basename = filename.replace('.svg', '');
    
    // Check for size variants (colorblacksizel32x32, etc.)
    if (basename.match(/size(xxs|xs|s|m|l|xl|xxl|xxxl)/)) {
      const baseIcon = basename.replace(/size.*$/, '');
      if (!iconGroups[baseIcon]) iconGroups[baseIcon] = [];
      iconGroups[baseIcon].push(filename);
      sizeVariants.push(filename);
    }
    // Check for color variants  
    else if (basename.match(/^color(black|white|blue)/)) {
      const baseIcon = basename.replace(/^color[a-z]+/, '');
      if (!iconGroups[baseIcon]) iconGroups[baseIcon] = [];
      iconGroups[baseIcon].push(filename);
      colorVariants.push(filename);
    }
    // Check for property variants (property1, variant, etc.)
    else if (basename.match(/(property\d+|variant)/)) {
      const baseIcon = basename.replace(/(property\d+.*|variant.*)/g, '');
      if (!iconGroups[baseIcon]) iconGroups[baseIcon] = [];
      iconGroups[baseIcon].push(filename);
      propertyVariants.push(filename);
    }
    // Check for direction variants
    else if (basename.match(/direction(up|down|left|right)$/)) {
      const baseIcon = basename.replace(/direction.*$/, '');
      if (!iconGroups[baseIcon]) iconGroups[baseIcon] = [];
      iconGroups[baseIcon].push(filename);
      directionVariants.push(filename);
    }
    // Check for group variants
    else if (basename.match(/^group\d+$/)) {
      if (!iconGroups['group']) iconGroups['group'] = [];
      iconGroups['group'].push(filename);
      groupVariants.push(filename);
    }
    // Single base icon
    else {
      if (!iconGroups[basename]) iconGroups[basename] = [];
      iconGroups[basename].push(filename);
    }
  });
  
  // Report findings
  console.log('🔍 DUPLICATE ANALYSIS RESULTS:');
  console.log('================================\n');
  
  console.log(`📏 Size Variants: ${sizeVariants.length} files`);
  console.log(`🎨 Color Variants: ${colorVariants.length} files`);
  console.log(`🔧 Property Variants: ${propertyVariants.length} files`);
  console.log(`➡️  Direction Variants: ${directionVariants.length} files`);
  console.log(`👥 Group Variants: ${groupVariants.length} files\n`);
  
  const totalDuplicates = sizeVariants.length + colorVariants.length + 
                         propertyVariants.length + directionVariants.length + groupVariants.length;
  
  console.log(`🎯 SUMMARY:`);
  console.log(`Total icons: ${iconFiles.length}`);
  console.log(`Potential duplicates: ${totalDuplicates}`);
  console.log(`Unique base icons: ${iconFiles.length - totalDuplicates}\n`);
  
  // Show detailed groups with multiple variants
  console.log('📂 ICON GROUPS WITH MULTIPLE VARIANTS:');
  console.log('======================================\n');
  
  Object.entries(iconGroups)
    .filter(([base, variants]) => variants.length > 1)
    .sort((a, b) => b[1].length - a[1].length)
    .forEach(([base, variants]) => {
      console.log(`${base || 'unnamed'} (${variants.length} variants):`);
      variants.forEach(variant => console.log(`  • ${variant}`));
      console.log('');
    });
  
  return {
    iconGroups,
    sizeVariants,
    colorVariants,
    propertyVariants,
    directionVariants,
    groupVariants,
    totalFiles: iconFiles.length,
    totalDuplicates
  };
}

// Run analysis
const results = analyzeIconDuplicates();