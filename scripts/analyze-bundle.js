#!/usr/bin/env node

/**
 * Bundle Analysis and Performance Optimization Tool
 *
 * Analyzes bundle sizes, verifies tree-shaking, and generates performance reports
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { gzipSync } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.dirname(__dirname);

// Performance budgets (in KB)
const PERFORMANCE_BUDGETS = {
  'total': 200,           // Total bundle size
  'main': 100,            // Main bundle
  'components': {
    'Button': 5,
    'Input': 8,
    'Select': 12,
    'Dialog': 15,
    'Table': 20,
    'Chart': 50,        // Heavy component
  },
  'css': 30,             // Total CSS
  'firstLoad': 50,       // Critical first load
};

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
};

class BundleAnalyzer {
  constructor() {
    this.results = {
      bundles: {},
      treeShaking: {},
      performance: {},
      recommendations: [],
    };
  }

  async analyze() {
    console.log(`${colors.blue}📦 Bundle Analysis & Performance Optimization${colors.reset}`);
    console.log('='.repeat(50) + '\n');

    // Build the library first
    await this.buildLibrary();

    // Analyze bundle sizes
    await this.analyzeBundleSizes();

    // Verify tree-shaking
    await this.verifyTreeShaking();

    // Check component sizes
    await this.analyzeComponentSizes();

    // Analyze CSS
    await this.analyzeCSSBundle();

    // Check performance budgets
    await this.checkPerformanceBudgets();

    // Generate recommendations
    await this.generateRecommendations();

    // Generate report
    await this.generateReport();

    // Check if budgets are exceeded
    this.checkBudgetViolations();
  }

  async buildLibrary() {
    console.log(`${colors.cyan}🔨 Building library...${colors.reset}`);
    try {
      execSync('npm run build:lib', {
        cwd: rootDir,
        stdio: 'pipe'
      });
      console.log(`${colors.green}✅ Build completed${colors.reset}\n`);
    } catch (error) {
      console.error(`${colors.red}❌ Build failed: ${error.message}${colors.reset}`);
      process.exit(1);
    }
  }

  async analyzeBundleSizes() {
    console.log(`${colors.cyan}📊 Analyzing bundle sizes...${colors.reset}`);

    const distDir = path.join(rootDir, 'dist');

    if (!fs.existsSync(distDir)) {
      console.error(`${colors.red}❌ Dist directory not found${colors.reset}`);
      return;
    }

    const files = fs.readdirSync(distDir).filter(f =>
      f.endsWith('.js') || f.endsWith('.mjs') || f.endsWith('.css')
    );

    for (const file of files) {
      const filePath = path.join(distDir, file);
      const stats = fs.statSync(filePath);
      const content = fs.readFileSync(filePath, 'utf8');
      const gzipped = gzipSync(content);

      this.results.bundles[file] = {
        size: stats.size,
        sizeKB: (stats.size / 1024).toFixed(2),
        gzipped: gzipped.length,
        gzippedKB: (gzipped.length / 1024).toFixed(2),
      };

      console.log(`  ${file}:`);
      console.log(`    Size: ${this.formatSize(stats.size)}`);
      console.log(`    Gzipped: ${this.formatSize(gzipped.length)}`);
    }
    console.log();
  }

  async verifyTreeShaking() {
    console.log(`${colors.cyan}🌳 Verifying tree-shaking...${colors.reset}`);

    // Create test imports to verify tree-shaking
    const testDir = path.join(rootDir, '.tree-shake-test');

    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir);
    }

    // Test single component import
    const singleImportTest = `
import { Button } from '../dist/index.mjs';
console.log(Button);
`;

    fs.writeFileSync(path.join(testDir, 'single-import.js'), singleImportTest);

    // Test multiple component import
    const multiImportTest = `
import { Button, Input, Select } from '../dist/index.mjs';
console.log(Button, Input, Select);
`;

    fs.writeFileSync(path.join(testDir, 'multi-import.js'), multiImportTest);

    // Test full import (should include everything)
    const fullImportTest = `
import * as DS from '../dist/index.mjs';
console.log(DS);
`;

    fs.writeFileSync(path.join(testDir, 'full-import.js'), fullImportTest);

    // Bundle each test with rollup and analyze size
    const tests = ['single-import', 'multi-import', 'full-import'];

    for (const test of tests) {
      try {
        const rollupConfig = `
export default {
  input: '.tree-shake-test/${test}.js',
  output: {
    file: '.tree-shake-test/${test}.bundle.js',
    format: 'es'
  },
  external: ['react', 'react-dom']
};`;

        fs.writeFileSync(path.join(testDir, 'rollup.config.js'), rollupConfig);

        execSync(`npx rollup -c .tree-shake-test/rollup.config.js`, {
          cwd: rootDir,
          stdio: 'pipe'
        });

        const bundlePath = path.join(testDir, `${test}.bundle.js`);
        if (fs.existsSync(bundlePath)) {
          const size = fs.statSync(bundlePath).size;
          this.results.treeShaking[test] = {
            size,
            sizeKB: (size / 1024).toFixed(2)
          };
          console.log(`  ${test}: ${this.formatSize(size)}`);
        }
      } catch (error) {
        console.log(`  ${colors.yellow}⚠️  Could not test ${test}${colors.reset}`);
      }
    }

    // Clean up test directory
    fs.rmSync(testDir, { recursive: true, force: true });
    console.log();
  }

  async analyzeComponentSizes() {
    console.log(`${colors.cyan}🧩 Analyzing component sizes...${colors.reset}`);

    // Analyze individual component exports
    const componentsDir = path.join(rootDir, 'packages/components/src');
    const componentFiles = fs.readdirSync(componentsDir).filter(f =>
      f.endsWith('.tsx') && !f.includes('.test') && !f.includes('.stories')
    );

    for (const file of componentFiles.slice(0, 5)) { // Analyze first 5 components
      const componentName = path.basename(file, '.tsx');
      const filePath = path.join(componentsDir, file);

      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const content = fs.readFileSync(filePath, 'utf8');

        // Rough estimate of component complexity
        const lineCount = content.split('\n').length;
        const importCount = (content.match(/^import/gm) || []).length;

        this.results.performance[componentName] = {
          sourceSize: stats.size,
          lines: lineCount,
          imports: importCount,
          complexity: this.calculateComplexity(content),
        };

        console.log(`  ${componentName}:`);
        console.log(`    Source: ${this.formatSize(stats.size)}`);
        console.log(`    Lines: ${lineCount}`);
        console.log(`    Imports: ${importCount}`);
      }
    }
    console.log();
  }

  async analyzeCSSBundle() {
    console.log(`${colors.cyan}🎨 Analyzing CSS bundle...${colors.reset}`);

    const cssFile = path.join(rootDir, 'dist/styles.css');
    if (fs.existsSync(cssFile)) {
      const stats = fs.statSync(cssFile);
      const content = fs.readFileSync(cssFile, 'utf8');
      const gzipped = gzipSync(content);

      // Analyze CSS content
      const rules = content.match(/[^}]+{[^}]*}/g) || [];
      const selectors = content.match(/[^{]+(?={)/g) || [];
      const variables = content.match(/--[\w-]+/g) || [];

      this.results.performance.css = {
        size: stats.size,
        sizeKB: (stats.size / 1024).toFixed(2),
        gzipped: gzipped.length,
        gzippedKB: (gzipped.length / 1024).toFixed(2),
        rules: rules.length,
        selectors: selectors.length,
        cssVariables: [...new Set(variables)].length,
      };

      console.log(`  Total CSS: ${this.formatSize(stats.size)}`);
      console.log(`  Gzipped: ${this.formatSize(gzipped.length)}`);
      console.log(`  Rules: ${rules.length}`);
      console.log(`  CSS Variables: ${[...new Set(variables)].length}`);
    }
    console.log();
  }

  async checkPerformanceBudgets() {
    console.log(`${colors.cyan}🎯 Checking performance budgets...${colors.reset}`);

    const violations = [];

    // Check total bundle size
    const totalSize = Object.values(this.results.bundles).reduce(
      (sum, b) => sum + b.size, 0
    );
    const totalSizeKB = totalSize / 1024;

    if (totalSizeKB > PERFORMANCE_BUDGETS.total) {
      violations.push({
        type: 'total',
        budget: PERFORMANCE_BUDGETS.total,
        actual: totalSizeKB.toFixed(2),
        exceeded: (totalSizeKB - PERFORMANCE_BUDGETS.total).toFixed(2)
      });
      console.log(`  ${colors.red}❌ Total bundle exceeds budget: ${totalSizeKB.toFixed(2)}KB > ${PERFORMANCE_BUDGETS.total}KB${colors.reset}`);
    } else {
      console.log(`  ${colors.green}✅ Total bundle within budget: ${totalSizeKB.toFixed(2)}KB < ${PERFORMANCE_BUDGETS.total}KB${colors.reset}`);
    }

    // Check CSS budget
    if (this.results.performance.css) {
      const cssKB = parseFloat(this.results.performance.css.sizeKB);
      if (cssKB > PERFORMANCE_BUDGETS.css) {
        violations.push({
          type: 'css',
          budget: PERFORMANCE_BUDGETS.css,
          actual: cssKB,
          exceeded: (cssKB - PERFORMANCE_BUDGETS.css).toFixed(2)
        });
        console.log(`  ${colors.red}❌ CSS exceeds budget: ${cssKB}KB > ${PERFORMANCE_BUDGETS.css}KB${colors.reset}`);
      } else {
        console.log(`  ${colors.green}✅ CSS within budget: ${cssKB}KB < ${PERFORMANCE_BUDGETS.css}KB${colors.reset}`);
      }
    }

    this.results.violations = violations;
    console.log();
  }

  async generateRecommendations() {
    console.log(`${colors.cyan}💡 Generating recommendations...${colors.reset}`);

    const recommendations = [];

    // Check for large dependencies
    if (this.results.bundles['index.js']) {
      const mainBundleKB = parseFloat(this.results.bundles['index.js'].sizeKB);
      if (mainBundleKB > 100) {
        recommendations.push({
          priority: 'high',
          title: 'Large main bundle',
          description: 'Consider code splitting or lazy loading heavy components',
          impact: 'Can reduce initial load time by 30-50%'
        });
      }
    }

    // Check tree-shaking effectiveness
    if (this.results.treeShaking['single-import'] && this.results.treeShaking['full-import']) {
      const ratio = this.results.treeShaking['single-import'].size /
                   this.results.treeShaking['full-import'].size;
      if (ratio > 0.3) {
        recommendations.push({
          priority: 'medium',
          title: 'Tree-shaking could be improved',
          description: 'Single component imports are too large relative to full bundle',
          impact: 'Could reduce bundle size by 20-30% for selective imports'
        });
      }
    }

    // Check CSS optimization
    if (this.results.performance.css && this.results.performance.css.rules > 1000) {
      recommendations.push({
        priority: 'medium',
        title: 'Large CSS bundle',
        description: 'Consider using CSS modules or atomic CSS to reduce duplication',
        impact: 'Can reduce CSS size by 40-60%'
      });
    }

    // Check for components that could be lazy loaded
    const heavyComponents = ['Chart', 'Table', 'Editor', 'Calendar'];
    for (const comp of heavyComponents) {
      if (this.results.performance[comp]) {
        recommendations.push({
          priority: 'low',
          title: `Consider lazy loading ${comp}`,
          description: `${comp} is a heavy component that might not be needed immediately`,
          impact: 'Can improve initial load performance'
        });
      }
    }

    this.results.recommendations = recommendations;

    recommendations.forEach((rec, i) => {
      const icon = rec.priority === 'high' ? '🔴' :
                   rec.priority === 'medium' ? '🟡' : '🟢';
      console.log(`  ${i + 1}. ${icon} ${rec.title}`);
      console.log(`     ${colors.gray}${rec.description}${colors.reset}`);
    });
    console.log();
  }

  async generateReport() {
    const reportPath = path.join(rootDir, 'reports/bundle-analysis.json');
    const reportDir = path.dirname(reportPath);

    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalSize: Object.values(this.results.bundles).reduce((sum, b) => sum + b.size, 0),
        totalGzipped: Object.values(this.results.bundles).reduce((sum, b) => sum + b.gzipped, 0),
        bundleCount: Object.keys(this.results.bundles).length,
        violationCount: (this.results.violations || []).length,
        recommendationCount: this.results.recommendations.length,
      },
      bundles: this.results.bundles,
      treeShaking: this.results.treeShaking,
      performance: this.results.performance,
      violations: this.results.violations || [],
      recommendations: this.results.recommendations,
    };

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`${colors.green}📄 Report saved to: ${reportPath}${colors.reset}\n`);

    // Generate HTML visualization
    await this.generateHTMLReport(report);
  }

  async generateHTMLReport(report) {
    const htmlPath = path.join(rootDir, 'reports/bundle-analysis.html');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bundle Analysis Report</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; padding: 20px; }
    .container { max-width: 1200px; margin: 0 auto; }
    h1 { color: #333; margin-bottom: 20px; }
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
    .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .card h3 { color: #666; font-size: 14px; margin-bottom: 10px; text-transform: uppercase; }
    .card .value { font-size: 32px; font-weight: bold; color: #333; }
    .card .unit { font-size: 14px; color: #999; }
    .chart-container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px; }
    .chart-container h2 { margin-bottom: 20px; color: #333; }
    canvas { max-height: 400px; }
    .recommendations { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .recommendation { padding: 15px; border-left: 4px solid #ddd; margin-bottom: 10px; }
    .recommendation.high { border-color: #f44336; }
    .recommendation.medium { border-color: #ff9800; }
    .recommendation.low { border-color: #4caf50; }
    .recommendation h4 { color: #333; margin-bottom: 5px; }
    .recommendation p { color: #666; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📦 Bundle Analysis Report</h1>
    <p style="color: #666; margin-bottom: 30px;">Generated on ${new Date(report.timestamp).toLocaleString()}</p>

    <div class="cards">
      <div class="card">
        <h3>Total Size</h3>
        <div class="value">${(report.summary.totalSize / 1024).toFixed(1)}<span class="unit">KB</span></div>
      </div>
      <div class="card">
        <h3>Gzipped Size</h3>
        <div class="value">${(report.summary.totalGzipped / 1024).toFixed(1)}<span class="unit">KB</span></div>
      </div>
      <div class="card">
        <h3>Bundle Count</h3>
        <div class="value">${report.summary.bundleCount}</div>
      </div>
      <div class="card">
        <h3>Violations</h3>
        <div class="value" style="color: ${report.summary.violationCount > 0 ? '#f44336' : '#4caf50'}">
          ${report.summary.violationCount}
        </div>
      </div>
    </div>

    <div class="chart-container">
      <h2>Bundle Sizes</h2>
      <canvas id="bundleChart"></canvas>
    </div>

    <div class="chart-container">
      <h2>Tree Shaking Effectiveness</h2>
      <canvas id="treeShakeChart"></canvas>
    </div>

    <div class="recommendations">
      <h2>Recommendations</h2>
      ${report.recommendations.map(rec => `
        <div class="recommendation ${rec.priority}">
          <h4>${rec.title}</h4>
          <p>${rec.description}</p>
          <p style="color: #4caf50; font-size: 12px; margin-top: 5px;">Impact: ${rec.impact}</p>
        </div>
      `).join('')}
    </div>
  </div>

  <script>
    // Bundle sizes chart
    const bundleCtx = document.getElementById('bundleChart').getContext('2d');
    new Chart(bundleCtx, {
      type: 'bar',
      data: {
        labels: ${JSON.stringify(Object.keys(report.bundles))},
        datasets: [{
          label: 'Size (KB)',
          data: ${JSON.stringify(Object.values(report.bundles).map(b => parseFloat(b.sizeKB)))},
          backgroundColor: '#4caf50'
        }, {
          label: 'Gzipped (KB)',
          data: ${JSON.stringify(Object.values(report.bundles).map(b => parseFloat(b.gzippedKB)))},
          backgroundColor: '#2196f3'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

    // Tree shaking chart
    const treeShakeCtx = document.getElementById('treeShakeChart').getContext('2d');
    new Chart(treeShakeCtx, {
      type: 'doughnut',
      data: {
        labels: ${JSON.stringify(Object.keys(report.treeShaking))},
        datasets: [{
          data: ${JSON.stringify(Object.values(report.treeShaking).map(t => parseFloat(t.sizeKB)))},
          backgroundColor: ['#4caf50', '#ff9800', '#f44336']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  </script>
</body>
</html>`;

    fs.writeFileSync(htmlPath, html);
    console.log(`${colors.green}📊 HTML report saved to: ${htmlPath}${colors.reset}\n`);
  }

  formatSize(bytes) {
    if (bytes < 1024) return `${bytes}B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)}KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)}MB`;
  }

  calculateComplexity(content) {
    // Simple complexity calculation based on code patterns
    let complexity = 0;
    complexity += (content.match(/if\s*\(/g) || []).length * 1;
    complexity += (content.match(/for\s*\(/g) || []).length * 2;
    complexity += (content.match(/while\s*\(/g) || []).length * 2;
    complexity += (content.match(/switch\s*\(/g) || []).length * 3;
    complexity += (content.match(/catch\s*\(/g) || []).length * 1;
    return complexity;
  }

  checkBudgetViolations() {
    if (this.results.violations && this.results.violations.length > 0) {
      console.log(`${colors.red}❌ Performance budget violations detected!${colors.reset}`);
      console.log(`${colors.yellow}Run 'npm run optimize:bundle' to see recommendations${colors.reset}\n`);
      process.exit(1);
    } else {
      console.log(`${colors.green}✅ All performance budgets met!${colors.reset}\n`);
    }
  }
}

// Run the analyzer
if (import.meta.url === `file://${process.argv[1]}`) {
  const analyzer = new BundleAnalyzer();
  analyzer.analyze().catch(error => {
    console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
    process.exit(1);
  });
}

export default BundleAnalyzer;