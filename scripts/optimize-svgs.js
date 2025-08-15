#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple SVG optimization utility
function optimizeSVG(svgContent) {
  let optimized = svgContent;
  
  // Remove comments
  optimized = optimized.replace(/<!--[\s\S]*?-->/g, '');
  
  // Remove XML declaration if present
  optimized = optimized.replace(/<\?xml[^>]*\?>/g, '');
  
  // Remove DOCTYPE if present
  optimized = optimized.replace(/<!DOCTYPE[^>]*>/g, '');
  
  // Remove unnecessary whitespace
  optimized = optimized.replace(/>\s+</g, '><');
  optimized = optimized.trim();
  
  // Remove empty attributes
  optimized = optimized.replace(/\s+[a-zA-Z-]+="\s*"/g, '');
  
  // Simplify fill="none" stroke="none" combinations
  optimized = optimized.replace(/fill="none"\s+stroke="none"/g, 'fill="none"');
  
  // Remove redundant spaces in attributes
  optimized = optimized.replace(/\s+/g, ' ');
  
  return optimized;
}

function optimizeIconDirectory(iconsDir = 'src/assets/icons') {
  if (!fs.existsSync(iconsDir)) {
    console.log('❌ Icons directory not found:', iconsDir);
    return;
  }
  
  const files = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));
  
  if (files.length === 0) {
    console.log('❌ No SVG files found in:', iconsDir);
    return;
  }
  
  console.log(`🎨 Optimizing ${files.length} SVG files...`);
  
  let totalSizeBefore = 0;
  let totalSizeAfter = 0;
  let optimizedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(iconsDir, file);
    const originalContent = fs.readFileSync(filePath, 'utf8');
    const optimizedContent = optimizeSVG(originalContent);
    
    const sizeBefore = Buffer.byteLength(originalContent, 'utf8');
    const sizeAfter = Buffer.byteLength(optimizedContent, 'utf8');
    
    totalSizeBefore += sizeBefore;
    totalSizeAfter += sizeAfter;
    
    if (sizeAfter < sizeBefore) {
      fs.writeFileSync(filePath, optimizedContent);
      optimizedCount++;
    }
  });
  
  const totalSaved = totalSizeBefore - totalSizeAfter;
  const percentSaved = ((totalSaved / totalSizeBefore) * 100).toFixed(1);
  
  console.log(`✅ Optimization complete!`);
  console.log(`📊 Files processed: ${files.length}`);
  console.log(`📈 Files optimized: ${optimizedCount}`);
  console.log(`💾 Size before: ${(totalSizeBefore / 1024).toFixed(1)}KB`);
  console.log(`💾 Size after: ${(totalSizeAfter / 1024).toFixed(1)}KB`);
  console.log(`💰 Total saved: ${(totalSaved / 1024).toFixed(1)}KB (${percentSaved}%)`);
}

// Run optimization
const iconsDir = process.argv[2] || 'src/assets/icons';
optimizeIconDirectory(iconsDir);