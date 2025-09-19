#!/usr/bin/env node

/**
 * Comprehensive Border Rules Application Script
 * Applies consistent border rules across ALL components and stories
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Define which components are form inputs vs structural elements
const FORM_INPUT_COMPONENTS = [
  'input', 'textarea', 'select', 'checkbox', 'radio-group', 'command', 'form',
  'time-picker', 'combobox', 'calendar'
];

const STRUCTURAL_COMPONENTS = [
  'table', 'card', 'accordion', 'separator', 'sheet', 'dialog', 'alert',
  'popover', 'dropdown-menu', 'enhanced-menu', 'navigation', 'tabs',
  'toast', 'tooltip', 'progress', 'slider', 'breadcrumb', 'avatar',
  'badge', 'button', 'chart', 'list'
];

const BORDER_RULES = {
  // Form inputs should use neutral-400 (darker/more prominent)
  formInputs: {
    from: 'border-[var(--ds-color-border-default)]',
    to: 'border-[var(--ds-color-neutral-400)]'
  },

  // Structural elements should use neutral-300 (lighter/subtler)
  structural: {
    from: 'border-[var(--ds-color-border-default)]',
    to: 'border-[var(--ds-color-neutral-300)]'
  }
};

// Common malformed token patterns to fix
const MALFORMED_TOKEN_FIXES = [
  {
    pattern: /var\(--ds-color-\[\^\]\)\*\]\)/g,
    replacement: 'var(--ds-color-bg-surface)]',
    description: 'Fixed malformed regex-like tokens'
  },
  {
    pattern: /text-\[var\(--ds-color-text-primary\]/g,
    replacement: 'text-[var(--ds-color-text-primary)]',
    description: 'Fixed missing closing bracket in text-primary'
  },
  {
    pattern: /text-\[var\(--ds-color-text-muted\]/g,
    replacement: 'text-[var(--ds-color-text-muted)]',
    description: 'Fixed missing closing bracket in text-muted'
  },
  {
    pattern: /bg-\[var\(--ds-color-bg-canvas\]/g,
    replacement: 'bg-[var(--ds-color-bg-canvas)]',
    description: 'Fixed missing closing bracket in bg-canvas'
  },
  {
    pattern: /bg-\[var\(--ds-color-bg-surface\]/g,
    replacement: 'bg-[var(--ds-color-bg-surface)]',
    description: 'Fixed missing closing bracket in bg-surface'
  },
  {
    pattern: /hover:bg-\[var\(--ds-color-bg-surface\]/g,
    replacement: 'hover:bg-[var(--ds-color-bg-surface)]',
    description: 'Fixed missing closing bracket in hover:bg-surface'
  },
  {
    pattern: /focus-visible:ring-\[var\(--ds-color-intent-primary\]/g,
    replacement: 'focus-visible:ring-[var(--ds-color-intent-primary)]',
    description: 'Fixed missing closing bracket in focus-visible:ring'
  },
  {
    pattern: /border-\[var\(--ds-color-neutral-\d+\]/g,
    replacement: (match) => match + ')]',
    description: 'Fixed missing closing bracket in neutral borders'
  }
];

async function applyBorderRulesAcrossAllFiles() {
  console.log('🔄 Applying border rules across ALL components and stories...\n');

  let totalFiles = 0;
  let modifiedFiles = 0;
  let totalChanges = 0;

  // Get all component and story files
  const componentFiles = await glob('packages/components/ui/**/*.tsx');
  const storyFiles = await glob('packages/docs/stories/**/*.tsx');
  const allFiles = [...componentFiles, ...storyFiles];

  console.log(`📁 Found ${allFiles.length} files to process\n`);

  for (const filePath of allFiles) {
    const changes = await processFile(filePath);
    if (changes.length > 0) {
      console.log(`✅ ${filePath}:`);
      changes.forEach(change => {
        console.log(`   • ${change}`);
      });
      modifiedFiles++;
      totalChanges += changes.length;
      console.log('');
    }
    totalFiles++;
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files modified: ${modifiedFiles}`);
  console.log(`   Total changes made: ${totalChanges}`);

  if (modifiedFiles > 0) {
    console.log('\n🎉 Border rules successfully applied across all components and stories!');
  } else {
    console.log('\n✨ All files already follow correct border rules!');
  }
}

async function processFile(filePath) {
  const originalContent = fs.readFileSync(filePath, 'utf-8');
  let content = originalContent;
  const changes = [];

  // Determine if this is a form input or structural component
  const fileName = path.basename(filePath, '.tsx').toLowerCase();
  const isFormInput = FORM_INPUT_COMPONENTS.some(comp => fileName.includes(comp));
  const isStructural = STRUCTURAL_COMPONENTS.some(comp => fileName.includes(comp));

  // Apply border rules based on component type
  if (isFormInput) {
    const beforeCount = (content.match(/border-\[var\(--ds-color-border-default\)\]/g) || []).length;
    content = content.replace(/border-\[var\(--ds-color-border-default\)\]/g, 'border-[var(--ds-color-neutral-400)]');
    const afterCount = (content.match(/border-\[var\(--ds-color-border-default\)\]/g) || []).length;

    if (beforeCount > afterCount) {
      changes.push(`Updated ${beforeCount - afterCount} form input borders to neutral-400`);
    }
  } else if (isStructural) {
    const beforeCount = (content.match(/border-\[var\(--ds-color-border-default\)\]/g) || []).length;
    content = content.replace(/border-\[var\(--ds-color-border-default\)\]/g, 'border-[var(--ds-color-neutral-300)]');
    const afterCount = (content.match(/border-\[var\(--ds-color-border-default\)\]/g) || []).length;

    if (beforeCount > afterCount) {
      changes.push(`Updated ${beforeCount - afterCount} structural borders to neutral-300`);
    }
  }

  // Fix malformed tokens
  MALFORMED_TOKEN_FIXES.forEach(fix => {
    const beforeCount = (content.match(fix.pattern) || []).length;
    if (typeof fix.replacement === 'function') {
      content = content.replace(fix.pattern, fix.replacement);
    } else {
      content = content.replace(fix.pattern, fix.replacement);
    }
    const afterCount = (content.match(fix.pattern) || []).length;

    if (beforeCount > afterCount) {
      changes.push(`${fix.description} (${beforeCount - afterCount} fixes)`);
    }
  });

  // Write back if changes were made
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return changes;
}

// Run the script
applyBorderRulesAcrossAllFiles().catch(console.error);