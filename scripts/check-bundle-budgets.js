#!/usr/bin/env node

/**
 * Bundle Size Budget Checker
 * Enforces the 8kb gzip limit per component from Acceptance Criteria
 */

import fs from 'fs';
import path from 'path';
import { gzipSync } from 'zlib';
import { glob } from 'glob';

const BUNDLE_BUDGET_KB = 8; // 8kb gzip limit per component
const DIST_PATH = 'dist';
const COMPONENTS_PATH = 'packages/components/**/*.tsx';

class BundleBudgetChecker {
  constructor() {
    this.violations = [];
    this.results = [];
  }

  async checkBudgets() {
    // Check if dist directory exists
    if (!fs.existsSync(DIST_PATH)) {
      console.error('❌ Dist directory not found. Run npm run build:lib first.');
      process.exit(1);
    }

    // Get all built component files
    const builtFiles = await glob(`${DIST_PATH}/**/*.js`, { ignore: ['**/*.test.js', '**/*.stories.js'] });
    
    for (const file of builtFiles) {
      await this.checkFileSize(file);
    }

    return this.generateReport();
  }

  async checkFileSize(filePath) {
    try {
      const content = fs.readFileSync(filePath);
      const gzippedContent = gzipSync(content);
      const sizeKb = gzippedContent.length / 1024;
      
      const result = {
        file: filePath,
        sizeKb: Math.round(sizeKb * 100) / 100,
        budgetKb: BUNDLE_BUDGET_KB,
        withinBudget: sizeKb <= BUNDLE_BUDGET_KB
      };

      this.results.push(result);

      if (!result.withinBudget) {
        this.violations.push({
          file: filePath,
          sizeKb: result.sizeKb,
          budgetKb: BUNDLE_BUDGET_KB,
          overage: Math.round((sizeKb - BUNDLE_BUDGET_KB) * 100) / 100,
          severity: 'error'
        });
      }
    } catch (error) {
      console.error(`Error checking ${filePath}:`, error.message);
    }
  }

  generateReport() {
    const report = {
      summary: {
        totalFiles: this.results.length,
        withinBudget: this.results.filter(r => r.withinBudget).length,
        violations: this.violations.length,
        budgetLimit: BUNDLE_BUDGET_KB
      },
      violations: this.violations,
      results: this.results.sort((a, b) => b.sizeKb - a.sizeKb)
    };

    return report;
  }

  printReport(report) {
    console.log('\n📦 Bundle Size Budget Report\n');
    console.log(`📊 Summary:`);
    console.log(`   Budget Limit: ${report.summary.budgetLimit}kb (gzipped)`);
    console.log(`   Files Checked: ${report.summary.totalFiles}`);
    console.log(`   Within Budget: ${report.summary.withinBudget}`);
    console.log(`   Violations: ${report.summary.violations}\n`);

    if (report.summary.violations === 0) {
      console.log('✅ All components are within bundle size budget!\n');
      
      // Show top 5 largest components for awareness
      console.log('📈 Largest Components (within budget):');
      report.results.slice(0, 5).forEach(result => {
        const percentage = Math.round((result.sizeKb / result.budgetKb) * 100);
        console.log(`   📄 ${result.file}: ${result.sizeKb}kb (${percentage}% of budget)`);
      });
      return;
    }

    console.log('❌ Bundle Size Budget Violations:\n');

    report.violations.forEach(violation => {
      const percentage = Math.round((violation.sizeKb / violation.budgetKb) * 100);
      console.log(`📄 ${violation.file}:`);
      console.log(`   Size: ${violation.sizeKb}kb (${percentage}% of ${violation.budgetKb}kb budget)`);
      console.log(`   Overage: +${violation.overage}kb over budget`);
      console.log();
    });

    console.log('💡 Bundle Size Optimization Tips:');
    console.log('   • Use tree-shaking friendly exports (avoid barrel exports)');
    console.log('   • Minimize external dependencies');
    console.log('   • Use dynamic imports for heavy utilities');
    console.log('   • Consider code splitting for complex components');
    console.log('   • Remove unused code and imports');
    console.log();

    console.log('🔧 Analysis Commands:');
    console.log('   npm run build:lib -- --analyze    # Detailed bundle analysis');
    console.log('   npm run validate:bundle           # Re-run this check');
    console.log();
  }
}

async function main() {
  const checker = new BundleBudgetChecker();
  
  console.log('🚀 Checking bundle size budgets...');
  
  const report = await checker.checkBudgets();
  checker.printReport(report);
  
  // Save report for CI/CD
  const reportPath = 'reports/bundle-budget.json';
  fs.mkdirSync('reports', { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📄 Detailed report saved to ${reportPath}`);
  
  // Exit with error if there are violations (fails CI/CD)
  if (report.summary.violations > 0) {
    console.error('\n❌ Bundle size budget check failed. Components exceed 8kb gzip limit.');
    process.exit(1);
  }
  
  console.log('\n✅ Bundle size budget check passed!');
}

main().catch(error => {
  console.error('Bundle budget check failed:', error);
  process.exit(1);
});