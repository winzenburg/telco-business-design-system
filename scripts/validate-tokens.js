#!/usr/bin/env node

/**
 * Token Validation Script
 * Validates components against hard-coded colors, pixels, and token usage
 * Enforces CLAUDE.md Task #4: No hard-coded values
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const YAML_CONFIG_PATH = 'packages/docs/context-yaml/tokens.yml';
const COMPONENT_PATHS = [
  'packages/components/**/*.{tsx,ts}',
  'packages/docs/stories/**/*.{tsx,ts}',
  'packages/ui/**/*.{tsx,ts}'
];

class TokenValidator {
  constructor() {
    this.config = this.loadConfig();
    this.violations = [];
  }

  loadConfig() {
    try {
      const configFile = fs.readFileSync(YAML_CONFIG_PATH, 'utf8');
      return yaml.load(configFile);
    } catch (error) {
      console.error(`Failed to load config from ${YAML_CONFIG_PATH}:`, error.message);
      process.exit(1);
    }
  }

  async validateFiles() {
    const files = [];
    for (const pattern of COMPONENT_PATHS) {
      try {
        const matchedFiles = await glob(pattern, { ignore: 'node_modules/**' });
        files.push(...matchedFiles);
      } catch (error) {
        console.warn(`Warning: Pattern ${pattern} failed, trying alternative...`);
        // Try different approach if glob pattern fails
        if (pattern.includes('packages/docs/stories')) {
          files.push(...this.findFilesManually('packages/docs/stories', /\.tsx?$/));
        }
      }
    }
    
    for (const file of files) {
      await this.validateFile(file);
    }

    return this.violations;
  }

  findFilesManually(dir, pattern) {
    const files = [];
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.')) {
        files.push(...this.findFilesManually(fullPath, pattern));
      } else if (pattern.test(item)) {
        files.push(fullPath);
      }
    }
    return files;
  }

  async validateFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for hard-coded hex colors
      this.checkHexColors(filePath, content);
      
      // Check for RGB/RGBA colors
      this.checkRgbColors(filePath, content);
      
      // Check for hard-coded pixel values
      this.checkPixelValues(filePath, content);
      
      // Check for non-token color usage
      this.checkNonTokenColors(filePath, content);
      
      // Check for icon color violations
      this.checkIconColors(filePath, content);
      
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
    }
  }

  checkHexColors(filePath, content) {
    const hexPattern = /#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}/g;
    const matches = content.matchAll(hexPattern);
    
    for (const match of matches) {
      this.violations.push({
        file: filePath,
        type: 'hard-coded-hex',
        value: match[0],
        line: this.getLineNumber(content, match.index),
        message: `Hard-coded hex color "${match[0]}" found. Use design tokens instead.`,
        severity: 'error'
      });
    }
  }

  checkRgbColors(filePath, content) {
    const rgbPattern = /rgba?\([^)]+\)/g;
    const matches = content.matchAll(rgbPattern);
    
    for (const match of matches) {
      this.violations.push({
        file: filePath,
        type: 'hard-coded-rgb',
        value: match[0],
        line: this.getLineNumber(content, match.index),
        message: `Hard-coded RGB color "${match[0]}" found. Use design tokens instead.`,
        severity: 'error'
      });
    }
  }

  checkPixelValues(filePath, content) {
    // Match pixel values but exclude common acceptable patterns
    const pixelPattern = /\b\d+px\b/g;
    const acceptablePatterns = [
      /border-width:\s*\d+px/, // Border widths are often acceptable
      /outline-width:\s*\d+px/, // Outline widths
      /1px/, // Single pixel borders are common
    ];
    
    const matches = content.matchAll(pixelPattern);
    
    for (const match of matches) {
      const context = content.slice(Math.max(0, match.index - 50), match.index + 50);
      const isAcceptable = acceptablePatterns.some(pattern => pattern.test(context));
      
      if (!isAcceptable) {
        this.violations.push({
          file: filePath,
          type: 'hard-coded-pixels',
          value: match[0],
          line: this.getLineNumber(content, match.index),
          message: `Hard-coded pixel value "${match[0]}" found. Use spacing tokens or Tailwind classes.`,
          severity: 'warning'
        });
      }
    }
  }

  checkNonTokenColors(filePath, content) {
    // Check for Tailwind color classes that aren't using tokens
    const colorClassPattern = /(?:text-|bg-|border-)(?!(?:foreground|muted-foreground|primary|secondary|destructive|accent|card|popover|input|ring))[a-z]+-\d+/g;
    const matches = content.matchAll(colorClassPattern);
    
    for (const match of matches) {
      this.violations.push({
        file: filePath,
        type: 'non-token-color',
        value: match[0],
        line: this.getLineNumber(content, match.index),
        message: `Non-token color class "${match[0]}" found. Use semantic token classes instead.`,
        severity: 'warning'
      });
    }
  }

  checkIconColors(filePath, content) {
    // Check for icon components with hard-coded colors instead of currentColor
    const iconColorPattern = /<Icon[^>]*(?:color=["'](?!currentColor)[^"']+["']|style=\{[^}]*color:\s*["'][^"']*["'][^}]*\})/g;
    const matches = content.matchAll(iconColorPattern);
    
    for (const match of matches) {
      // Skip if it's using a proper token pattern
      if (match[0].includes('var(--colors-') || match[0].includes('currentColor')) {
        continue;
      }
      
      this.violations.push({
        file: filePath,
        type: 'icon-color-violation',
        value: match[0],
        line: this.getLineNumber(content, match.index),
        message: `Icon with hard-coded color found. Use currentColor or colorToken prop.`,
        severity: 'warning'
      });
    }
  }

  getLineNumber(content, index) {
    return content.slice(0, index).split('\n').length;
  }

  generateReport() {
    const report = {
      summary: {
        totalViolations: this.violations.length,
        errors: this.violations.filter(v => v.severity === 'error').length,
        warnings: this.violations.filter(v => v.severity === 'warning').length,
        files: [...new Set(this.violations.map(v => v.file))].length
      },
      violations: this.violations.reduce((acc, violation) => {
        if (!acc[violation.file]) {
          acc[violation.file] = [];
        }
        acc[violation.file].push(violation);
        return acc;
      }, {})
    };

    return report;
  }

  printReport(report) {
    console.log('\n🔍 Design Token Validation Report\n');
    console.log(`📊 Summary:`);
    console.log(`   Files scanned: ${report.summary.files}`);
    console.log(`   Total violations: ${report.summary.totalViolations}`);
    console.log(`   Errors: ${report.summary.errors}`);
    console.log(`   Warnings: ${report.summary.warnings}\n`);

    if (report.summary.totalViolations === 0) {
      console.log('✅ No violations found! All components are using design tokens correctly.\n');
      return;
    }

    console.log('📋 Violations by file:\n');

    Object.entries(report.violations).forEach(([file, violations]) => {
      console.log(`📄 ${file}:`);
      violations.forEach(violation => {
        const icon = violation.severity === 'error' ? '❌' : '⚠️';
        console.log(`   ${icon} Line ${violation.line}: ${violation.message}`);
        console.log(`      Found: ${violation.value}`);
      });
      console.log();
    });

    if (report.summary.errors > 0) {
      console.log('💡 Quick fixes:');
      console.log('   • Replace hex colors with semantic tokens (text-foreground, text-muted-foreground, etc.)');
      console.log('   • Use Tailwind spacing classes instead of pixel values');
      console.log('   • Update Icon components to use currentColor or colorToken props');
      console.log();
    }
  }
}

async function main() {
  const validator = new TokenValidator();
  
  console.log('🚀 Starting token validation...');
  
  await validator.validateFiles();
  const report = validator.generateReport();
  
  validator.printReport(report);
  
  // Save JSON report for CI/CD
  const reportPath = 'reports/token-validation.json';
  fs.mkdirSync('reports', { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📄 Detailed report saved to ${reportPath}`);
  
  // Exit with error code if there are violations
  if (report.summary.errors > 0) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Validation failed:', error);
  process.exit(1);
});