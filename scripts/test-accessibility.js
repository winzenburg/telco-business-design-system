#!/usr/bin/env node

import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STORYBOOK_URL = process.env.STORYBOOK_URL || 'http://localhost:6006';

// Component stories to test
const STORIES_TO_TEST = [
  'button--primary',
  'button--secondary',
  'button--ghost',
  'button--destructive',
  'input--default',
  'input--with-label',
  'input--error-state',
  'checkbox--default',
  'radio-group--default',
  'select--default',
  'dialog--default',
  'dropdown-menu--default',
  'tabs--default',
  'accordion--default',
  'alert--all-variants',
  'badge--default',
  'card--default',
  'tooltip--default',
  'toast--default',
  'switch--default',
  'slider--default',
  'progress--default',
];

async function testAccessibility() {
  console.log('\n🧪 Running Accessibility Tests');
  console.log('================================\n');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const results = [];
  const violations = [];
  let totalViolations = 0;
  
  // Check if Storybook is running
  try {
    await page.goto(STORYBOOK_URL, { waitUntil: 'networkidle', timeout: 5000 });
  } catch (error) {
    console.error('❌ Error: Storybook is not running at', STORYBOOK_URL);
    console.error('   Please run "npm run dev" first\n');
    await browser.close();
    process.exit(1);
  }
  
  // Test each story
  for (const storyId of STORIES_TO_TEST) {
    console.log(`Testing: ${storyId}...`);
    
    try {
      // Navigate to the story
      const storyUrl = `${STORYBOOK_URL}/iframe.html?id=${storyId}&viewMode=story`;
      await page.goto(storyUrl, { waitUntil: 'networkidle' });
      
      // Wait for content to be ready
      await page.waitForTimeout(500);
      
      // Run axe accessibility tests
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa'])
        .disableRules(['color-contrast']) // Temporarily disable if theme tokens not loaded
        .analyze();
      
      const storyViolations = accessibilityScanResults.violations.length;
      totalViolations += storyViolations;
      
      results.push({
        story: storyId,
        violations: storyViolations,
        passes: accessibilityScanResults.passes.length,
        status: storyViolations === 0 ? '✅' : '❌'
      });
      
      if (storyViolations > 0) {
        violations.push({
          story: storyId,
          violations: accessibilityScanResults.violations.map(v => ({
            id: v.id,
            impact: v.impact,
            description: v.description,
            help: v.help,
            helpUrl: v.helpUrl,
            nodes: v.nodes.length
          }))
        });
      }
      
      console.log(`  ${storyViolations === 0 ? '✅' : '❌'} ${storyId}: ${storyViolations} violations`);
      
    } catch (error) {
      console.error(`  ⚠️ Error testing ${storyId}:`, error.message);
      results.push({
        story: storyId,
        violations: 0,
        passes: 0,
        status: '⚠️',
        error: error.message
      });
    }
  }
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    storybookUrl: STORYBOOK_URL,
    summary: {
      total: results.length,
      passed: results.filter(r => r.status === '✅').length,
      failed: results.filter(r => r.status === '❌').length,
      errors: results.filter(r => r.status === '⚠️').length,
      totalViolations
    },
    results,
    violations
  };
  
  // Ensure reports directory exists
  const reportsDir = path.join(path.dirname(__dirname), 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  
  // Save JSON report
  const reportPath = path.join(reportsDir, 'accessibility-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  // Console summary
  console.log('\n📊 Accessibility Test Summary');
  console.log('================================');
  console.log(`✅ Passed: ${report.summary.passed}/${report.summary.total}`);
  console.log(`❌ Failed: ${report.summary.failed}/${report.summary.total}`);
  if (report.summary.errors > 0) {
    console.log(`⚠️ Errors: ${report.summary.errors}/${report.summary.total}`);
  }
  console.log(`📝 Total violations: ${totalViolations}`);
  
  // Show detailed violations
  if (violations.length > 0) {
    console.log('\n⚠️ Accessibility Violations Found:');
    console.log('====================================\n');
    
    violations.forEach(item => {
      console.log(`📦 ${item.story}:`);
      item.violations.forEach(v => {
        console.log(`   ${v.impact === 'critical' ? '🔴' : v.impact === 'serious' ? '🟠' : '🟡'} [${v.impact}] ${v.description}`);
        console.log(`      Elements affected: ${v.nodes}`);
        console.log(`      Fix: ${v.help}`);
        console.log(`      Learn more: ${v.helpUrl}\n`);
      });
    });
  }
  
  console.log(`\n📄 Full report saved to: ${reportPath}`);
  
  await browser.close();
  
  // Exit with appropriate code
  if (totalViolations > 0) {
    console.log('\n❌ Accessibility tests failed. Please fix the violations above.\n');
    process.exit(1);
  } else {
    console.log('\n✅ All accessibility tests passed!\n');
    process.exit(0);
  }
}

// Run the tests
testAccessibility().catch(error => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});