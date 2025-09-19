#!/usr/bin/env node

/**
 * Comprehensive Design Token Validation Script
 * Ensures all components use proper design tokens and changes cascade everywhere
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Define validation rules
const VALIDATION_RULES = {
  // Forbidden patterns (hardcoded values)
  forbidden: [
    /#[0-9A-Fa-f]{6}/g,                    // Hex colors like #ffffff
    /#[0-9A-Fa-f]{3}/g,                     // Short hex colors like #fff
    /\brgb\s*\(/g,                          // RGB values
    /\bhsl\s*\(/g,                          // HSL values
    /\b\d+px\b/g,                           // Pixel values (use tokens)
    /border:\s*\d+px/g,                     // Direct border declarations
    /\[var\(--ds-color-\[\^\]/g,            // Broken token patterns
    /color:\s*black\b/g,                    // Direct color: black
    /color:\s*white\b/g,                    // Direct color: white
    /background:\s*#/g,                     // Direct background colors
  ],

  // Required patterns (proper usage)
  required: {
    borders: [
      'var(--ds-color-border-default)',     // Default borders
      'var(--ds-color-border-muted)',       // Muted borders
      'var(--ds-color-border-strong)',      // Strong borders
    ],
    text: [
      'var(--ds-color-text-primary)',       // Primary text (black)
      'var(--ds-color-text-secondary)',     // Secondary text
      'var(--ds-color-text-muted)',         // Muted text
    ],
    backgrounds: [
      'var(--ds-color-bg-canvas)',          // Canvas backgrounds
      'var(--ds-color-bg-surface)',         // Surface backgrounds
      'var(--ds-color-bg-muted)',           // Muted backgrounds
    ]
  }
};

// Critical token mappings
const CRITICAL_TOKENS = {
  'neutral-600': 'Default borders, placeholder text, subdued icons (ADA baseline)',
  'black': 'Default text, icons, form controls (#15172B)',
  'border-default': 'Must resolve to neutral-600 (#70717D)',
  'text-primary': 'Must resolve to black (#15172B)'
};

async function validateDesignTokens() {
  console.log('🔍 Validating Design Token Usage...\n');

  let totalViolations = 0;
  let totalFiles = 0;

  // Get all component files
  const componentFiles = await glob('packages/components/ui/**/*.{tsx,ts}', {
    ignore: ['**/*.d.ts']
  });

  const storyFiles = await glob('packages/docs/stories/**/*.{tsx,ts}', {
    ignore: ['**/*.d.ts']
  });

  const allFiles = [...componentFiles, ...storyFiles];

  for (const filePath of allFiles) {
    const violations = await validateFile(filePath);
    if (violations.length > 0) {
      console.log(`❌ ${filePath}`);
      violations.forEach(violation => {
        console.log(`   • ${violation}`);
      });
      totalViolations += violations.length;
      console.log('');
    }
    totalFiles++;
  }

  // Validate token consistency
  await validateTokenConsistency();

  console.log(`\n📊 Validation Summary:`);
  console.log(`   Files scanned: ${totalFiles}`);
  console.log(`   Total violations: ${totalViolations}`);

  if (totalViolations === 0) {
    console.log('✅ All design token validations passed!');
    process.exit(0);
  } else {
    console.log(`💥 Found ${totalViolations} design token violations`);
    process.exit(1);
  }
}

async function validateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const violations = [];

  // Check for forbidden patterns
  VALIDATION_RULES.forbidden.forEach((pattern, index) => {
    const matches = content.match(pattern);
    if (matches) {
      violations.push(`Forbidden pattern: ${pattern} (found ${matches.length} times)`);
    }
  });

  // Check for missing closing brackets in CSS variables
  const malformedTokens = content.match(/var\(--ds-[^)]+$/gm);
  if (malformedTokens) {
    violations.push(`Malformed tokens: ${malformedTokens.join(', ')}`);
  }

  // Check for proper border usage in table components
  if (filePath.includes('table')) {
    if (!content.includes('border-[var(--ds-color-neutral-300)]')) {
      violations.push('Table component should use --ds-color-neutral-300 for borders (structural element hierarchy)');
    }

    // Check for double borders (container + table)
    const containerBorders = (content.match(/border\s+border-\[var/g) || []).length;
    if (containerBorders > 3) { // Allow some borders but not excessive
      violations.push('Potential double border issue - check container and table borders');
    }
  }

  return violations;
}

async function validateTokenConsistency() {
  console.log('🔧 Validating Token Consistency...\n');

  // Check CSS variables file
  const cssVarsPath = 'packages/tokens/css-variables.css';
  if (fs.existsSync(cssVarsPath)) {
    const cssContent = fs.readFileSync(cssVarsPath, 'utf-8');

    // Verify critical mappings
    const checks = [
      {
        token: '--ds-color-border-default',
        expected: 'var(--ds-color-neutral-600)',
        description: 'Default borders should use neutral-600'
      },
      {
        token: '--ds-color-text-primary',
        expected: 'var(--ds-color-black)',
        description: 'Primary text should use black'
      },
      {
        token: '--ds-color-black',
        expected: '#15172B',
        description: 'Black should be #15172B'
      }
    ];

    checks.forEach(check => {
      if (!cssContent.includes(`${check.token}: ${check.expected}`)) {
        console.log(`❌ Token mapping issue: ${check.description}`);
        console.log(`   Expected: ${check.token}: ${check.expected}`);
      } else {
        console.log(`✅ ${check.description}`);
      }
    });
  }
}

// Auto-fix function
async function autoFixCommonIssues() {
  console.log('🔧 Auto-fixing common design token issues...\n');

  const componentFiles = await glob('packages/components/ui/**/*.{tsx,ts}');

  for (const filePath of componentFiles) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // Fix broken token patterns
    const fixes = [
      {
        pattern: /\[var\(--ds-color-\[\^\]\*\]/g,
        replacement: '[var(--ds-color-bg-surface)]',
        description: 'Fixed broken token patterns'
      },
      {
        pattern: /border\s+border-\[var\(--ds-color-border-default\]\]/g,
        replacement: 'border-[var(--ds-color-border-default)]',
        description: 'Fixed double border declarations'
      },
      {
        pattern: /color:\s*black\b/g,
        replacement: 'color: var(--ds-color-black)',
        description: 'Replaced hardcoded black with token'
      }
    ];

    fixes.forEach(fix => {
      const beforeCount = (content.match(fix.pattern) || []).length;
      content = content.replace(fix.pattern, fix.replacement);
      const afterCount = (content.match(fix.pattern) || []).length;

      if (beforeCount > afterCount) {
        console.log(`✅ ${filePath}: ${fix.description} (${beforeCount - afterCount} fixes)`);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  }
}

// CLI interface
const command = process.argv[2];

if (command === '--fix' || command === 'fix') {
  autoFixCommonIssues().then(() => {
    console.log('🎉 Auto-fix completed. Running validation...\n');
    validateDesignTokens();
  });
} else {
  validateDesignTokens();
}

export { validateDesignTokens, autoFixCommonIssues };