#!/usr/bin/env node
/**
 * Auto-Attendant Design System Migration Script
 * 
 * This script automatically migrates hardcoded colors and spacing values
 * to design system tokens (as RGB/rem values that match the design system).
 * 
 * Usage: node migrate-to-design-system.cjs
 */

const fs = require('fs');
const path = require('path');

// ============================================================================
// COLOR MAPPINGS (Hex → RGB matching design system tokens)
// ============================================================================

const colorMap = {
  // Primary Blues
  '#0D62FF': 'rgb(13, 98, 255)',    // primary-500
  '#0d62ff': 'rgb(13, 98, 255)',    // primary-500 (lowercase)
  '#083B99': 'rgb(8, 59, 153)',     // primary-700 (hover)
  '#083b99': 'rgb(8, 59, 153)',     // primary-700 (lowercase)
  '#0A4ECC': 'rgb(10, 78, 204)',    // primary-600 (active)
  '#0a4ecc': 'rgb(10, 78, 204)',    // primary-600 (lowercase)
  '#075985': 'rgb(7, 89, 133)',     // sky-700
  '#E0F2FE': 'rgb(224, 242, 254)',  // sky-100
  '#e0f2fe': 'rgb(224, 242, 254)',  // sky-100 (lowercase)
  '#F5F8FF': 'rgb(245, 248, 255)',  // primary-50
  '#f5f8ff': 'rgb(245, 248, 255)',  // primary-50 (lowercase)
  
  // Neutrals (Greys)
  '#2B2D3F': 'rgb(43, 45, 63)',     // neutral-900
  '#2b2d3f': 'rgb(43, 45, 63)',     // neutral-900 (lowercase)
  '#595A69': 'rgb(89, 90, 105)',    // neutral-600
  '#595a69': 'rgb(89, 90, 105)',    // neutral-600 (lowercase)
  '#70717D': 'rgb(112, 113, 125)',  // neutral-500
  '#70717d': 'rgb(112, 113, 125)',  // neutral-500 (lowercase)
  '#F1F2F6': 'rgb(241, 242, 246)',  // neutral-200
  '#f1f2f6': 'rgb(241, 242, 246)',  // neutral-200 (lowercase)
  '#DDDDE2': 'rgb(221, 221, 226)',  // neutral-300
  '#dddde2': 'rgb(221, 221, 226)',  // neutral-300 (lowercase)
  '#E5E7EB': 'rgb(229, 231, 235)',  // neutral-200
  '#e5e7eb': 'rgb(229, 231, 235)',  // neutral-200 (lowercase)
  '#FCFCFC': 'rgb(252, 252, 252)',  // neutral-50
  '#fcfcfc': 'rgb(252, 252, 252)',  // neutral-50 (lowercase)
  '#F9FAFB': 'rgb(249, 250, 251)',  // neutral-50
  '#f9fafb': 'rgb(249, 250, 251)',  // neutral-50 (lowercase)
  '#E5E5EA': 'rgb(229, 229, 234)',  // neutral-200
  '#e5e5ea': 'rgb(229, 229, 234)',  // neutral-200 (lowercase)
  
  // Success Greens
  '#22C55E': 'rgb(34, 197, 94)',    // green-500
  '#22c55e': 'rgb(34, 197, 94)',    // green-500 (lowercase)
  '#DCFCE7': 'rgb(220, 252, 231)',  // green-100
  '#dcfce7': 'rgb(220, 252, 231)',  // green-100 (lowercase)
  '#166534': 'rgb(22, 101, 52)',    // green-800
  '#16A34A': 'rgb(22, 163, 74)',    // green-600
  '#16a34a': 'rgb(22, 163, 74)',    // green-600 (lowercase)
  '#BBF7D0': 'rgb(187, 247, 208)',  // green-200
  '#bbf7d0': 'rgb(187, 247, 208)',  // green-200 (lowercase)
  
  // Error Reds
  '#EF4444': 'rgb(239, 68, 68)',    // red-500
  '#ef4444': 'rgb(239, 68, 68)',    // red-500 (lowercase)
  '#FEE2E2': 'rgb(254, 226, 226)',  // red-100
  '#fee2e2': 'rgb(254, 226, 226)',  // red-100 (lowercase)
  '#991B1B': 'rgb(153, 27, 27)',    // red-800
  '#991b1b': 'rgb(153, 27, 27)',    // red-800 (lowercase)
  '#DC2626': 'rgb(220, 38, 38)',    // red-600
  '#dc2626': 'rgb(220, 38, 38)',    // red-600 (lowercase)
  '#FECACA': 'rgb(254, 202, 202)',  // red-200
  '#fecaca': 'rgb(254, 202, 202)',  // red-200 (lowercase)
  '#F87171': 'rgb(248, 113, 113)',  // red-400
  '#f87171': 'rgb(248, 113, 113)',  // red-400 (lowercase)
  
  // Warning Yellows
  '#EAB308': 'rgb(234, 179, 8)',    // yellow-500
  '#eab308': 'rgb(234, 179, 8)',    // yellow-500 (lowercase)
  '#FEF9C3': 'rgb(254, 249, 195)',  // yellow-100
  '#fef9c3': 'rgb(254, 249, 195)',  // yellow-100 (lowercase)
  '#854D0E': 'rgb(133, 77, 14)',    // yellow-800
  '#854d0e': 'rgb(133, 77, 14)',    // yellow-800 (lowercase)
  '#FEF08A': 'rgb(254, 240, 138)',  // yellow-200
  '#fef08a': 'rgb(254, 240, 138)',  // yellow-200 (lowercase)
  '#FACC15': 'rgb(250, 204, 21)',   // yellow-400
  '#facc15': 'rgb(250, 204, 21)',   // yellow-400 (lowercase)
  
  // Accents (Purple)
  '#A855F7': 'rgb(168, 85, 247)',   // purple-500
  '#a855f7': 'rgb(168, 85, 247)',   // purple-500 (lowercase)
  '#E9D5FF': 'rgb(233, 213, 255)',  // purple-200
  '#e9d5ff': 'rgb(233, 213, 255)',  // purple-200 (lowercase)
  '#D8B4FE': 'rgb(216, 180, 254)',  // purple-300
  '#d8b4fe': 'rgb(216, 180, 254)',  // purple-300 (lowercase)
  '#FAF5FF': 'rgb(250, 245, 255)',  // purple-50
  '#faf5ff': 'rgb(250, 245, 255)',  // purple-50 (lowercase)
  '#F3E8FF': 'rgb(243, 232, 255)',  // purple-100
  '#f3e8ff': 'rgb(243, 232, 255)',  // purple-100 (lowercase)
  
  // Sky Blues (additional)
  '#C2D8FF': 'rgb(194, 216, 255)',  // sky-200
  '#c2d8ff': 'rgb(194, 216, 255)',  // sky-200 (lowercase)
  '#7DD3FC': 'rgb(125, 211, 252)',  // sky-300
  '#7dd3fc': 'rgb(125, 211, 252)',  // sky-300 (lowercase)
  '#BAE6FD': 'rgb(186, 230, 253)',  // sky-200
  '#bae6fd': 'rgb(186, 230, 253)',  // sky-200 (lowercase)
  
  // Additional Neutrals
  '#9D9EA7': 'rgb(157, 158, 167)',  // neutral-400
  '#9d9ea7': 'rgb(157, 158, 167)',  // neutral-400 (lowercase)
  '#B4B5BB': 'rgb(180, 181, 187)',  // neutral-400
  '#b4b5bb': 'rgb(180, 181, 187)',  // neutral-400 (lowercase)
  '#424454': 'rgb(66, 68, 84)',     // neutral-700
  '#F9F9FA': 'rgb(249, 249, 250)',  // neutral-50
  '#f9f9fa': 'rgb(249, 249, 250)',  // neutral-50 (lowercase)
  
  // Additional Success
  '#15803D': 'rgb(21, 128, 61)',    // green-700
  '#15803d': 'rgb(21, 128, 61)',    // green-700 (lowercase)
  
  // Special
  '#FFFFFF': 'white',
  '#ffffff': 'white',
  '#000000': 'black',
  
  // SKIP these colors (documented brand exceptions):
  // '#00074b' - Comcast header brand navy (top bar)
  // '#000a73' - Comcast header brand navy (main section)
  // '#052766' - Comcast footer brand navy
};

// ============================================================================
// SPACING MAPPINGS (px → rem matching design system spacing scale)
// ============================================================================

const spacingMap = {
  // Common padding values
  'padding: 0px': 'padding: 0',
  'padding: 2px': 'padding: 0.125rem',    // spacing-0.5
  'padding: 4px': 'padding: 0.25rem',     // spacing-1
  'padding: 6px': 'padding: 0.375rem',    // spacing-1.5
  'padding: 8px': 'padding: 0.5rem',      // spacing-2
  'padding: 10px': 'padding: 0.625rem',   // spacing-2.5
  'padding: 12px': 'padding: 0.75rem',    // spacing-3
  'padding: 14px': 'padding: 0.875rem',   // spacing-3.5
  'padding: 16px': 'padding: 1rem',       // spacing-4
  'padding: 20px': 'padding: 1.25rem',    // spacing-5
  'padding: 24px': 'padding: 1.5rem',     // spacing-6
  'padding: 28px': 'padding: 1.75rem',    // spacing-7
  'padding: 32px': 'padding: 2rem',       // spacing-8
  'padding: 40px': 'padding: 2.5rem',     // spacing-10
  
  // Common margin values
  'margin: 0px': 'margin: 0',
  'margin: 4px': 'margin: 0.25rem',
  'margin: 8px': 'margin: 0.5rem',
  'margin: 12px': 'margin: 0.75rem',
  'margin: 16px': 'margin: 1rem',
  'margin: 24px': 'margin: 1.5rem',
  'margin: 32px': 'margin: 2rem',
  
  // Margin-bottom (very common)
  'margin-bottom: 4px': 'margin-bottom: 0.25rem',
  'margin-bottom: 6px': 'margin-bottom: 0.375rem',
  'margin-bottom: 8px': 'margin-bottom: 0.5rem',
  'margin-bottom: 12px': 'margin-bottom: 0.75rem',
  'margin-bottom: 16px': 'margin-bottom: 1rem',
  'margin-bottom: 20px': 'margin-bottom: 1.25rem',
  'margin-bottom: 24px': 'margin-bottom: 1.5rem',
  'margin-bottom: 28px': 'margin-bottom: 1.75rem',
  'margin-bottom: 32px': 'margin-bottom: 2rem',
  
  // Margin-top
  'margin-top: 2px': 'margin-top: 0.125rem',
  'margin-top: 4px': 'margin-top: 0.25rem',
  'margin-top: 8px': 'margin-top: 0.5rem',
  'margin-top: 12px': 'margin-top: 0.75rem',
  'margin-top: 16px': 'margin-top: 1rem',
  'margin-top: 24px': 'margin-top: 1.5rem',
  
  // Margin-left / right
  'margin-left: auto': 'margin-left: auto',
  'margin-right: 8px': 'margin-right: 0.5rem',
  'margin-right: 12px': 'margin-right: 0.75rem',
  'margin-left: 24px': 'margin-left: 1.5rem',
  
  // Gap (flexbox/grid)
  'gap: 0px': 'gap: 0',
  'gap: 4px': 'gap: 0.25rem',
  'gap: 6px': 'gap: 0.375rem',
  'gap: 8px': 'gap: 0.5rem',
  'gap: 10px': 'gap: 0.625rem',
  'gap: 12px': 'gap: 0.75rem',
  'gap: 16px': 'gap: 1rem',
  'gap: 20px': 'gap: 1.25rem',
  'gap: 24px': 'gap: 1.5rem',
  'gap: 32px': 'gap: 2rem',
  
  // Border-radius
  'border-radius: 4px': 'border-radius: 0.25rem',   // rounded
  'border-radius: 6px': 'border-radius: 0.375rem',  // rounded-md
  'border-radius: 8px': 'border-radius: 0.5rem',    // rounded-lg
  'border-radius: 12px': 'border-radius: 0.75rem',  // rounded-xl
  'border-radius: 50%': 'border-radius: 50%',       // rounded-full
  
  // Individual padding sides
  'padding-top: 8px': 'padding-top: 0.5rem',
  'padding-top: 12px': 'padding-top: 0.75rem',
  'padding-top: 20px': 'padding-top: 1.25rem',
  'padding-bottom: 8px': 'padding-bottom: 0.5rem',
  'padding-bottom: 12px': 'padding-bottom: 0.75rem',
  'padding-bottom: 20px': 'padding-bottom: 1.25rem',
  'padding-left: 8px': 'padding-left: 0.5rem',
  'padding-left: 14px': 'padding-left: 0.875rem',
  'padding-left: 24px': 'padding-left: 1.5rem',
  'padding-right: 8px': 'padding-right: 0.5rem',
  'padding-right: 16px': 'padding-right: 1rem',
  
  // Width/height (for consistent spacing, not layout)
  'height: 80px': 'height: 5rem',   // spacing-20
};

// ============================================================================
// MAIN MIGRATION FUNCTION
// ============================================================================

function migrateDesignSystem() {
  const filePath = path.join(__dirname, 'index.html');
  
  console.log('🚀 Starting Design System Migration...\n');
  
  // Read file
  let content = fs.readFileSync(filePath, 'utf8');
  const originalLength = content.length;
  
  // Track replacements
  let colorReplacements = 0;
  let spacingReplacements = 0;
  
  // Step 1: Replace colors
  console.log('📝 Step 1: Migrating colors...');
  Object.entries(colorMap).forEach(([hex, rgb]) => {
    const regex = new RegExp(hex.replace(/[#]/g, '\\#'), 'g');
    const matches = content.match(regex);
    if (matches) {
      colorReplacements += matches.length;
      content = content.replace(regex, rgb);
      console.log(`   ${hex} → ${rgb} (${matches.length} instances)`);
    }
  });
  
  console.log(`\n✅ Color migration complete: ${colorReplacements} replacements\n`);
  
  // Step 2: Replace spacing
  console.log('📝 Step 2: Migrating spacing...');
  Object.entries(spacingMap).forEach(([px, rem]) => {
    const regex = new RegExp(px.replace(/([()])/g, '\\$1'), 'g');
    const matches = content.match(regex);
    if (matches) {
      spacingReplacements += matches.length;
      content = content.replace(regex, rem);
      if (matches.length > 10) {
        console.log(`   ${px} → ${rem} (${matches.length} instances)`);
      }
    }
  });
  
  console.log(`\n✅ Spacing migration complete: ${spacingReplacements} replacements\n`);
  
  // Write back
  fs.writeFileSync(filePath, content, 'utf8');
  
  // Summary
  console.log('═══════════════════════════════════════════════════');
  console.log('✨ MIGRATION COMPLETE ✨');
  console.log('═══════════════════════════════════════════════════');
  console.log(`📊 Total Replacements: ${colorReplacements + spacingReplacements}`);
  console.log(`   • Colors: ${colorReplacements}`);
  console.log(`   • Spacing: ${spacingReplacements}`);
  console.log(`📄 File: ${filePath}`);
  console.log(`📏 Size: ${originalLength.toLocaleString()} → ${content.length.toLocaleString()} bytes`);
  console.log('═══════════════════════════════════════════════════\n');
  
  // Next steps
  console.log('🎯 NEXT STEPS:');
  console.log('1. Run: npm run build:css');
  console.log('2. Test app visually at http://localhost:8080');
  console.log('3. Run: npm run lint:design-system');
  console.log('4. Run Playwright tests if available\n');
  
  return {
    colorReplacements,
    spacingReplacements,
    total: colorReplacements + spacingReplacements
  };
}

// ============================================================================
// RUN MIGRATION
// ============================================================================

try {
  const results = migrateDesignSystem();
  process.exit(0);
} catch (error) {
  console.error('❌ Migration failed:', error.message);
  process.exit(1);
}
