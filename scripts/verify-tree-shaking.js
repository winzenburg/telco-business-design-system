#!/usr/bin/env node

/**
 * Tree-Shaking Verification Tool
 *
 * Ensures components can be imported individually without pulling in the entire library
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.dirname(__dirname);

class TreeShakeVerifier {
  constructor() {
    this.results = {
      components: {},
      imports: {},
      issues: [],
      passed: true
    };
  }

  async verify() {
    console.log('🌳 Tree-Shaking Verification\n');

    // Create test directory
    const testDir = path.join(rootDir, '.tree-shake-verify');
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }

    try {
      // Test individual component imports
      await this.testComponentImports(testDir);

      // Test barrel exports
      await this.testBarrelExports(testDir);

      // Verify side effects
      await this.verifySideEffects(testDir);

      // Generate report
      this.generateReport();

    } finally {
      // Clean up
      fs.rmSync(testDir, { recursive: true, force: true });
    }

    return this.results.passed;
  }

  async testComponentImports(testDir) {
    console.log('Testing individual component imports...\n');

    const components = ['Button', 'Input', 'Select', 'Dialog', 'Table'];

    for (const component of components) {
      // Create test file
      const testFile = `
import { ${component} } from '../dist/index.mjs';
export { ${component} };
`;

      const testPath = path.join(testDir, `test-${component.toLowerCase()}.js`);
      fs.writeFileSync(testPath, testFile);

      // Bundle with Rollup
      const bundlePath = path.join(testDir, `bundle-${component.toLowerCase()}.js`);
      const rollupConfig = {
        input: testPath,
        output: {
          file: bundlePath,
          format: 'esm'
        },
        external: ['react', 'react-dom', /^@radix-ui/],
        plugins: []
      };

      fs.writeFileSync(
        path.join(testDir, 'rollup.config.json'),
        JSON.stringify(rollupConfig)
      );

      try {
        execSync(
          `npx rollup ${testPath} -o ${bundlePath} --format es --external react,react-dom,@radix-ui/*`,
          { cwd: rootDir, stdio: 'pipe' }
        );

        const bundleSize = fs.statSync(bundlePath).size;
        this.results.components[component] = {
          size: bundleSize,
          sizeKB: (bundleSize / 1024).toFixed(2)
        };

        console.log(`  ✅ ${component}: ${(bundleSize / 1024).toFixed(2)}KB`);

        // Check if size is reasonable
        if (bundleSize > 50 * 1024) { // 50KB threshold
          this.results.issues.push({
            component,
            issue: 'Component bundle too large',
            size: bundleSize
          });
          this.results.passed = false;
        }

      } catch (error) {
        console.log(`  ❌ ${component}: Failed to bundle`);
        this.results.issues.push({
          component,
          issue: 'Failed to tree-shake',
          error: error.message
        });
        this.results.passed = false;
      }
    }
    console.log();
  }

  async testBarrelExports(testDir) {
    console.log('Testing barrel exports...\n');

    // Check if index file has proper exports
    const indexPath = path.join(rootDir, 'packages/components/src/index.ts');

    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, 'utf8');

      // Check for proper named exports
      const hasNamedExports = /export\s+\{[^}]+\}\s+from/g.test(content);
      const hasStarExports = /export\s+\*\s+from/g.test(content);

      if (hasStarExports && !hasNamedExports) {
        this.results.issues.push({
          file: 'index.ts',
          issue: 'Using star exports can prevent tree-shaking',
          recommendation: 'Use named exports instead'
        });
        console.log('  ⚠️  Star exports detected - may prevent optimal tree-shaking');
      } else {
        console.log('  ✅ Barrel exports configured correctly');
      }
    }
    console.log();
  }

  async verifySideEffects(testDir) {
    console.log('Verifying side effects...\n');

    // Check package.json for sideEffects field
    const packageJsonPath = path.join(rootDir, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    if (!('sideEffects' in packageJson)) {
      this.results.issues.push({
        file: 'package.json',
        issue: 'Missing sideEffects field',
        recommendation: 'Add "sideEffects": false or specify files with side effects'
      });
      console.log('  ⚠️  Missing sideEffects field in package.json');
    } else if (packageJson.sideEffects === false) {
      console.log('  ✅ Package marked as side-effect free');
    } else {
      console.log(`  ℹ️  Side effects: ${JSON.stringify(packageJson.sideEffects)}`);
    }

    // Check for global CSS imports in component files
    const componentsDir = path.join(rootDir, 'packages/components/src');
    if (fs.existsSync(componentsDir)) {
      const files = this.getAllFiles(componentsDir, '.tsx');
      let globalCssImports = 0;

      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        if (/import\s+['"].*\.css['"]/.test(content)) {
          globalCssImports++;
          this.results.issues.push({
            file: path.relative(rootDir, file),
            issue: 'Global CSS import detected',
            recommendation: 'Use CSS modules or CSS-in-JS for better tree-shaking'
          });
        }
      }

      if (globalCssImports > 0) {
        console.log(`  ⚠️  Found ${globalCssImports} global CSS imports`);
        this.results.passed = false;
      } else {
        console.log('  ✅ No global CSS imports in components');
      }
    }
    console.log();
  }

  getAllFiles(dir, ext) {
    const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && !item.includes('test') && !item.includes('stories')) {
        files.push(...this.getAllFiles(fullPath, ext));
      } else if (stat.isFile() && item.endsWith(ext)) {
        files.push(fullPath);
      }
    }

    return files;
  }

  generateReport() {
    console.log('📋 Tree-Shaking Report\n');
    console.log('='.repeat(50));

    // Component sizes
    console.log('\n📦 Component Sizes:');
    for (const [component, data] of Object.entries(this.results.components)) {
      console.log(`  ${component}: ${data.sizeKB}KB`);
    }

    // Issues
    if (this.results.issues.length > 0) {
      console.log('\n⚠️  Issues Found:');
      for (const issue of this.results.issues) {
        console.log(`  - ${issue.component || issue.file}: ${issue.issue}`);
        if (issue.recommendation) {
          console.log(`    💡 ${issue.recommendation}`);
        }
      }
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    if (this.results.passed) {
      console.log('✅ Tree-shaking verification PASSED');
    } else {
      console.log('❌ Tree-shaking verification FAILED');
      console.log('   Run "npm run optimize:imports" to fix issues');
    }
  }
}

// Run verification
if (import.meta.url === `file://${process.argv[1]}`) {
  const verifier = new TreeShakeVerifier();
  verifier.verify().then(passed => {
    process.exit(passed ? 0 : 1);
  }).catch(error => {
    console.error('Error:', error.message);
    process.exit(1);
  });
}

export default TreeShakeVerifier;