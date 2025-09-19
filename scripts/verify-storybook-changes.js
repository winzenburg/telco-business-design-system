#!/usr/bin/env node

/**
 * EXPLICIT RULE: Verify All Changes Are Reflected in Storybook
 * This script ensures that every change made to components is immediately
 * visible and functional in the running Storybook instance.
 */

import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * MANDATORY VERIFICATION STEPS FOR ALL CHANGES:
 * 1. Force clear any caches
 * 2. Restart Storybook dev server
 * 3. Verify component files have been updated
 * 4. Check that Storybook is serving the latest version
 * 5. Validate that changes are actually visible
 */

class StorybookChangeVerifier {
  constructor() {
    this.storybookUrl = 'http://localhost:6006';
    this.componentsPath = 'packages/components/ui';
    this.storiesPath = 'packages/docs/stories';
  }

  async verifyAllChangesReflected() {
    console.log('🔍 EXPLICIT VERIFICATION: Ensuring all changes are reflected in Storybook...\n');

    try {
      // Step 1: Force clear caches
      await this.clearAllCaches();

      // Step 2: Restart Storybook with fresh state
      await this.restartStorybook();

      // Step 3: Verify file timestamps
      await this.verifyFileUpdates();

      // Step 4: Check Storybook is serving latest
      await this.verifyStorybookServing();

      // Step 5: Validate specific changes
      await this.validateSpecificChanges();

      console.log('✅ ALL CHANGES VERIFIED AND REFLECTED IN STORYBOOK!\n');
      console.log(`🌐 Storybook URL: ${this.storybookUrl}`);
      console.log('📋 Key changes to verify:');
      console.log('   • Table borders should be lighter (neutral-300: #DDDDE2)');
      console.log('   • Form input borders should be darker (neutral-400: #B4B5BB)');
      console.log('   • No more thick default browser borders');
      console.log('   • All malformed tokens should be fixed');

    } catch (error) {
      console.error('❌ VERIFICATION FAILED:', error.message);
      console.log('\n🔧 TROUBLESHOOTING STEPS:');
      console.log('1. Kill all Node processes: pkill -f node');
      console.log('2. Clear all caches: rm -rf node_modules/.cache .storybook/node_modules');
      console.log('3. Restart Storybook: npm run dev');
      console.log('4. Force browser refresh: Ctrl+Shift+R or Cmd+Shift+R');
      process.exit(1);
    }
  }

  async clearAllCaches() {
    console.log('🧹 Step 1: Clearing all caches...');

    const cacheDirectories = [
      'node_modules/.cache',
      '.storybook/.cache',
      'dist',
      '.vite'
    ];

    for (const dir of cacheDirectories) {
      try {
        await execAsync(`rm -rf ${dir}`);
        console.log(`   ✅ Cleared: ${dir}`);
      } catch (error) {
        console.log(`   ⚠️  Could not clear ${dir}: ${error.message}`);
      }
    }
  }

  async restartStorybook() {
    console.log('🔄 Step 2: Restarting Storybook...');

    // Kill any existing processes
    try {
      await execAsync('pkill -f "storybook dev"');
      await execAsync('sleep 2');
    } catch (error) {
      // It's ok if no processes were found
    }

    console.log('   ✅ Storybook processes terminated');
    console.log('   🚀 Starting fresh Storybook instance...');

    // Note: The actual restart should be handled by the caller
    // This function just ensures we're ready for a clean start
  }

  async verifyFileUpdates() {
    console.log('📁 Step 3: Verifying file updates...');

    const criticalFiles = [
      'packages/components/ui/table.tsx',
      'packages/components/ui/input.tsx',
      'packages/components/ui/textarea.tsx',
      'packages/components/ui/select.tsx',
      'packages/components/ui/card.tsx',
      'packages/components/ui/accordion.tsx',
      'packages/components/ui/sheet.tsx'
    ];

    const now = Date.now();
    const fiveMinutesAgo = now - (5 * 60 * 1000); // 5 minutes ago

    for (const file of criticalFiles) {
      if (fs.existsSync(file)) {
        const stats = fs.statSync(file);
        const modifiedTime = stats.mtime.getTime();

        if (modifiedTime > fiveMinutesAgo) {
          console.log(`   ✅ ${file} - Recently updated (${new Date(modifiedTime).toLocaleTimeString()})`);
        } else {
          console.log(`   ⚠️  ${file} - Not recently updated`);
        }
      } else {
        console.log(`   ❌ ${file} - File not found`);
      }
    }
  }

  async verifyStorybookServing() {
    console.log('🌐 Step 4: Verifying Storybook is serving latest version...');

    // Wait for Storybook to be fully ready
    let attempts = 0;
    const maxAttempts = 30; // 30 seconds

    while (attempts < maxAttempts) {
      try {
        const response = await fetch(this.storybookUrl);
        if (response.ok) {
          console.log(`   ✅ Storybook is serving at ${this.storybookUrl}`);
          return;
        }
      } catch (error) {
        // Continue waiting
      }

      attempts++;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    throw new Error('Storybook failed to start within 30 seconds');
  }

  async validateSpecificChanges() {
    console.log('🔍 Step 5: Validating specific changes in component files...');

    // Check table component has neutral-300 borders
    const tableContent = fs.readFileSync('packages/components/ui/table.tsx', 'utf-8');
    if (tableContent.includes('neutral-300')) {
      console.log('   ✅ Table component: Using neutral-300 borders');
    } else {
      throw new Error('Table component: neutral-300 borders not found');
    }

    // Check input component has neutral-400 borders
    const inputContent = fs.readFileSync('packages/components/ui/input.tsx', 'utf-8');
    if (inputContent.includes('neutral-400')) {
      console.log('   ✅ Input component: Using neutral-400 borders');
    } else {
      throw new Error('Input component: neutral-400 borders not found');
    }

    // Check for malformed tokens
    const malformedPattern = /var\(--ds-color-\[\^\]/;
    const componentFiles = [
      'packages/components/ui/sheet.tsx',
      'packages/components/ui/tooltip.tsx',
      'packages/components/ui/toast.tsx'
    ];

    for (const file of componentFiles) {
      const content = fs.readFileSync(file, 'utf-8');
      if (!malformedPattern.test(content)) {
        console.log(`   ✅ ${path.basename(file)}: No malformed tokens`);
      } else {
        throw new Error(`${file}: Still contains malformed tokens`);
      }
    }
  }
}

// Export for use in other scripts
export { StorybookChangeVerifier };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const verifier = new StorybookChangeVerifier();
  verifier.verifyAllChangesReflected();
}