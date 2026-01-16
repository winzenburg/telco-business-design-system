#!/usr/bin/env node

/**
 * Accessibility Validation Script
 * Validates components against accessibility standards
 * Reads configuration from packages/docs/context-yaml/accessibility.yml
 */

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { glob } from 'glob';

const YAML_CONFIG_PATH = 'packages/docs/context-yaml/accessibility.yml';
const COMPONENT_PATHS = [
  'packages/components/**/*.{tsx,ts}',
  'packages/docs/stories/**/*.{tsx,ts}',
  'packages/ui/**/*.{tsx,ts}'
];

class AccessibilityValidator {
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
    const files = await glob(COMPONENT_PATHS, { ignore: 'node_modules/**' });
    
    for (const file of files) {
      await this.validateFile(file);
    }

    return this.violations;
  }

  async validateFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for missing alt text on images
      this.checkImageAltText(filePath, content);
      
      // Check for form label associations
      this.checkFormLabeling(filePath, content);
      
      // Check for interactive elements without labels
      this.checkInteractiveLabeling(filePath, content);
      
      // Check for missing ARIA attributes
      this.checkAriaAttributes(filePath, content);
      
      // Check for color-only information
      this.checkColorOnlyInformation(filePath, content);
      
      // Check for focus management
      this.checkFocusManagement(filePath, content);
      
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
    }
  }

  checkImageAltText(filePath, content) {
    // Check for img tags without alt attributes
    const imgWithoutAlt = /<img(?![^>]*alt=)[^>]*>/g;
    const matches = [...content.matchAll(imgWithoutAlt)];

    for (const match of matches) {
      this.violations.push({
        file: filePath,
        type: 'missing-alt-text',
        value: match[0],
        line: this.getLineNumber(content, match.index),
        message: 'Image without alt attribute found. Add descriptive alt text or alt="" for decorative images.',
        severity: 'error'
      });
    }
  }

  checkFormLabeling(filePath, content) {
    // Check for input elements without proper labeling
    const inputPattern = /<input[^>]*>/g;
    const inputs = [...content.matchAll(inputPattern)];
    
    for (const input of inputs) {
      const inputTag = input[0];
      const hasId = /id=["'][^"']+["']/.test(inputTag);
      const hasAriaLabel = /aria-label=["'][^"']+["']/.test(inputTag);
      const hasAriaLabelledBy = /aria-labelledby=["'][^"']+["']/.test(inputTag);
      
      if (hasId) {
        // Check if there's a corresponding label
        const idMatch = inputTag.match(/id=["']([^"']+)["']/);
        if (idMatch) {
          const id = idMatch[1];
          const hasLabel = new RegExp(`<label[^>]*for=["']${id}["']`).test(content);
          
          if (!hasLabel && !hasAriaLabel && !hasAriaLabelledBy) {
            this.violations.push({
              file: filePath,
              type: 'unlabeled-input',
              value: inputTag,
              line: this.getLineNumber(content, input.index),
              message: `Input with id="${id}" has no associated label. Add a <label> element or aria-label.`,
              severity: 'error'
            });
          }
        }
      } else if (!hasAriaLabel && !hasAriaLabelledBy) {
        this.violations.push({
          file: filePath,
          type: 'unlabeled-input',
          value: inputTag,
          line: this.getLineNumber(content, input.index),
          message: 'Input without proper labeling. Add id with label, aria-label, or aria-labelledby.',
          severity: 'error'
        });
      }
    }
  }

  checkInteractiveLabeling(filePath, content) {
    // Check for buttons without accessible names
    const buttonPattern = /<button[^>]*>([^<]*)<\/button>/g;
    const buttons = [...content.matchAll(buttonPattern)];
    
    for (const button of buttons) {
      const buttonTag = button[0];
      const buttonContent = button[1]?.trim();
      const hasAriaLabel = /aria-label=["'][^"']+["']/.test(buttonTag);
      const hasAriaLabelledBy = /aria-labelledby=["'][^"']+["']/.test(buttonTag);
      
      // Check if button has text content or proper labeling
      if (!buttonContent && !hasAriaLabel && !hasAriaLabelledBy) {
        // Check if it's an icon-only button
        if (buttonTag.includes('<Icon') || buttonTag.includes('<svg')) {
          this.violations.push({
            file: filePath,
            type: 'unlabeled-icon-button',
            value: buttonTag,
            line: this.getLineNumber(content, button.index),
            message: 'Icon-only button without accessible name. Add aria-label describing the action.',
            severity: 'error'
          });
        } else {
          this.violations.push({
            file: filePath,
            type: 'unlabeled-button',
            value: buttonTag,
            line: this.getLineNumber(content, button.index),
            message: 'Button without accessible name. Add text content or aria-label.',
            severity: 'error'
          });
        }
      }
    }
  }

  checkAriaAttributes(filePath, content) {
    // Check for invalid ARIA attribute values
    const ariaInvalidPattern = /aria-invalid=["'](?!true|false|spelling|grammar)([^"']+)["']/g;
    const matches = [...content.matchAll(ariaInvalidPattern)];
    
    for (const match of matches) {
      this.violations.push({
        file: filePath,
        type: 'invalid-aria-value',
        value: match[0],
        line: this.getLineNumber(content, match.index),
        message: `Invalid aria-invalid value "${match[1]}". Must be "true", "false", "spelling", or "grammar".`,
        severity: 'warning'
      });
    }

    // Check for aria-describedby without corresponding elements
    const describedByPattern = /aria-describedby=["']([^"']+)["']/g;
    const describedBy = [...content.matchAll(describedByPattern)];
    
    for (const match of describedBy) {
      const ids = match[1].split(' ');
      for (const id of ids) {
        if (!new RegExp(`id=["']${id}["']`).test(content)) {
          this.violations.push({
            file: filePath,
            type: 'missing-describedby-target',
            value: match[0],
            line: this.getLineNumber(content, match.index),
            message: `aria-describedby references id "${id}" which doesn't exist in the component.`,
            severity: 'warning'
          });
        }
      }
    }
  }

  checkColorOnlyInformation(filePath, content) {
    // Check for potential color-only information patterns
    const colorOnlyPatterns = [
      /className=["'][^"']*(?:text-red|text-green|text-yellow|text-blue)[^"']*["'][^>]*>([^<]*(?:required|error|success|warning|info)[^<]*)</g,
    ];
    
    colorOnlyPatterns.forEach(pattern => {
      const matches = [...content.matchAll(pattern)];
      for (const match of matches) {
        // Check if there's also an icon or other visual indicator
        const context = content.slice(Math.max(0, match.index - 100), match.index + 100);
        if (!context.includes('<Icon') && !context.includes('aria-label')) {
          this.violations.push({
            file: filePath,
            type: 'color-only-information',
            value: match[0],
            line: this.getLineNumber(content, match.index),
            message: 'Information may be conveyed by color only. Add icons or text to support meaning.',
            severity: 'warning'
          });
        }
      }
    });
  }

  checkFocusManagement(filePath, content) {
    // Check for custom focus management without proper tabindex usage
    const customFocusPattern = /(?:onFocus|onBlur)=\{[^}]+\}/g;
    const customFocus = [...content.matchAll(customFocusPattern)];
    
    for (const match of customFocus) {
      const element = this.getElementFromContext(content, match.index);
      if (element && !element.includes('tabIndex') && !element.includes('tabindex')) {
        this.violations.push({
          file: filePath,
          type: 'missing-tabindex',
          value: match[0],
          line: this.getLineNumber(content, match.index),
          message: 'Custom focus handler found without tabIndex. Ensure element is keyboard accessible.',
          severity: 'warning'
        });
      }
    }
  }

  getElementFromContext(content, index) {
    // Extract the element containing the match
    const start = content.lastIndexOf('<', index);
    const end = content.indexOf('>', index) + 1;
    return content.slice(start, end);
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
    console.log('\n♿ Accessibility Validation Report\n');
    console.log(`📊 Summary:`);
    console.log(`   Files scanned: ${report.summary.files}`);
    console.log(`   Total violations: ${report.summary.totalViolations}`);
    console.log(`   Errors: ${report.summary.errors}`);
    console.log(`   Warnings: ${report.summary.warnings}\n`);

    if (report.summary.totalViolations === 0) {
      console.log('✅ No accessibility violations found! All components meet WCAG 2.2 AA standards.\n');
      return;
    }

    console.log('📋 Violations by file:\n');

    Object.entries(report.violations).forEach(([file, violations]) => {
      console.log(`📄 ${file}:`);
      violations.forEach(violation => {
        const icon = violation.severity === 'error' ? '❌' : '⚠️';
        console.log(`   ${icon} Line ${violation.line}: ${violation.message}`);
        console.log(`      Found: ${violation.value.slice(0, 100)}${violation.value.length > 100 ? '...' : ''}`);
      });
      console.log();
    });

    if (report.summary.errors > 0) {
      console.log('💡 Accessibility quick fixes:');
      console.log('   • Add alt attributes to all images');
      console.log('   • Associate form inputs with labels using id/for or aria-label');
      console.log('   • Provide accessible names for icon-only buttons');
      console.log('   • Ensure information is not conveyed by color alone');
      console.log();
    }
  }
}

async function main() {
  const validator = new AccessibilityValidator();
  
  console.log('🚀 Starting accessibility validation...');
  
  await validator.validateFiles();
  const report = validator.generateReport();
  
  validator.printReport(report);
  
  // Save JSON report for CI/CD
  const reportPath = 'reports/accessibility-validation.json';
  fs.mkdirSync('reports', { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📄 Detailed report saved to ${reportPath}`);
  
  // Exit with error code if there are errors
  if (report.summary.errors > 0) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Accessibility validation failed:', error);
  process.exit(1);
});