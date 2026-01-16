#!/usr/bin/env node

/**
 * Documentation Compliance Validator
 * Ensures all component MDX files follow the standardized structure
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const REQUIRED_SECTIONS = [
  'Design Intent',
  'Tokens Used', 
  'Accessibility',
  'Performance Notes',
  'Do / Don\'t'
];

const DOCUMENTATION_PATHS = [
  'packages/docs/stories/**/*.stories.mdx',
  'packages/docs/components/**/*.mdx'
];

class DocumentationValidator {
  constructor() {
    this.violations = [];
  }

  async validateDocumentation() {
    const files = await glob(DOCUMENTATION_PATHS, { ignore: 'node_modules/**' });
    
    for (const file of files) {
      await this.validateFile(file);
    }

    return this.violations;
  }

  async validateFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Skip files that aren't component documentation
      if (!this.isComponentDoc(content)) {
        return;
      }

      this.checkRequiredSections(filePath, content);
      this.checkTokensTable(filePath, content);
      this.checkAccessibilityContent(filePath, content);
      this.checkPerformanceNotes(filePath, content);
      this.checkDosDonts(filePath, content);
      this.checkAPIReference(filePath, content);
      
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
    }
  }

  isComponentDoc(content) {
    // Check if this is a component documentation file
    return content.includes('<Meta title="Components/') && 
           content.includes('## Design Intent') ||
           content.includes('## Tokens Used');
  }

  checkRequiredSections(filePath, content) {
    for (const section of REQUIRED_SECTIONS) {
      if (!content.includes(`## ${section}`)) {
        this.violations.push({
          file: filePath,
          type: 'missing-section',
          section: section,
          severity: 'error',
          message: `Missing required section: "${section}"`
        });
      }
    }
  }

  checkTokensTable(filePath, content) {
    if (content.includes('## Tokens Used')) {
      // Check if tokens table has proper structure
      const tokensSection = this.extractSection(content, 'Tokens Used');
      
      if (!tokensSection.includes('| Token Category | Token Name | Usage |')) {
        this.violations.push({
          file: filePath,
          type: 'invalid-tokens-table',
          severity: 'error',
          message: 'Tokens Used table missing required columns: Token Category, Token Name, Usage'
        });
      }

      // Check for hard-coded values instead of token references
      const hardCodedPattern = /#[0-9A-Fa-f]{6}|rgb\(|hsl\(/g;
      const hardCodedMatches = tokensSection.match(hardCodedPattern);
      
      if (hardCodedMatches) {
        this.violations.push({
          file: filePath,
          type: 'hardcoded-values-in-docs',
          severity: 'warning',
          message: `Found hard-coded color values in tokens table: ${hardCodedMatches.join(', ')}`
        });
      }
    }
  }

  checkAccessibilityContent(filePath, content) {
    if (content.includes('## Accessibility')) {
      const a11ySection = this.extractSection(content, 'Accessibility');
      
      const requiredA11yContent = [
        'Keyboard',
        'ARIA',
        'Screen reader',
        'Focus'
      ];

      requiredA11yContent.forEach(requirement => {
        if (!a11ySection.toLowerCase().includes(requirement.toLowerCase())) {
          this.violations.push({
            file: filePath,
            type: 'incomplete-accessibility',
            severity: 'warning',
            message: `Accessibility section missing "${requirement}" information`
          });
        }
      });
    }
  }

  checkPerformanceNotes(filePath, content) {
    if (content.includes('## Performance Notes')) {
      const perfSection = this.extractSection(content, 'Performance Notes');
      
      const requiredPerfContent = [
        'mount time',
        'SSR',
        'bundle',
        'theme switch'
      ];

      requiredPerfContent.forEach(requirement => {
        if (!perfSection.toLowerCase().includes(requirement.toLowerCase())) {
          this.violations.push({
            file: filePath,
            type: 'incomplete-performance',
            severity: 'info',
            message: `Performance Notes missing "${requirement}" information`
          });
        }
      });
    }
  }

  checkDosDonts(filePath, content) {
    if (content.includes('## Do / Don\'t')) {
      const dosDontsSection = this.extractSection(content, 'Do / Don\'t');
      
      if (!dosDontsSection.includes('✅') && !dosDontsSection.includes('❌')) {
        this.violations.push({
          file: filePath,
          type: 'missing-do-dont-examples',
          severity: 'warning',
          message: 'Do/Don\'t section missing visual indicators (✅/❌)'
        });
      }

      // Check for code examples
      const codeBlocks = dosDontsSection.match(/```[\s\S]*?```/g);
      if (!codeBlocks || codeBlocks.length < 2) {
        this.violations.push({
          file: filePath,
          type: 'insufficient-do-dont-examples',
          severity: 'info',
          message: 'Do/Don\'t section should include multiple code examples'
        });
      }
    }
  }

  checkAPIReference(filePath, content) {
    // Check if ArgsTable is properly used
    if (content.includes('## API Reference')) {
      if (!content.includes('<ArgsTable')) {
        this.violations.push({
          file: filePath,
          type: 'missing-args-table',
          severity: 'warning',
          message: 'API Reference section missing ArgsTable component for interactive documentation'
        });
      }
    }
  }

  extractSection(content, sectionName) {
    const sectionStart = content.indexOf(`## ${sectionName}`);
    if (sectionStart === -1) return '';
    
    const nextSectionStart = content.indexOf('##', sectionStart + 1);
    const sectionEnd = nextSectionStart === -1 ? content.length : nextSectionStart;
    
    return content.slice(sectionStart, sectionEnd);
  }

  generateReport() {
    const violationsBySeverity = this.violations.reduce((acc, violation) => {
      if (!acc[violation.severity]) acc[violation.severity] = [];
      acc[violation.severity].push(violation);
      return acc;
    }, {});

    const report = {
      summary: {
        totalViolations: this.violations.length,
        errors: violationsBySeverity.error?.length || 0,
        warnings: violationsBySeverity.warning?.length || 0,
        info: violationsBySeverity.info?.length || 0,
        files: [...new Set(this.violations.map(v => v.file))].length
      },
      violations: this.violations.reduce((acc, violation) => {
        if (!acc[violation.file]) {
          acc[violation.file] = [];
        }
        acc[violation.file].push(violation);
        return acc;
      }, {}),
      compliance: {
        score: Math.max(0, 100 - (violationsBySeverity.error?.length || 0) * 15 - (violationsBySeverity.warning?.length || 0) * 5),
        requiredSections: REQUIRED_SECTIONS
      }
    };

    return report;
  }

  printReport(report) {
    console.log('\n📚 Documentation Compliance Report\n');
    console.log(`📊 Summary:`);
    console.log(`   Files checked: ${report.summary.files}`);
    console.log(`   Total violations: ${report.summary.totalViolations}`);
    console.log(`   Errors: ${report.summary.errors}`);
    console.log(`   Warnings: ${report.summary.warnings}`);
    console.log(`   Info: ${report.summary.info}`);
    console.log(`   Compliance Score: ${report.compliance.score}/100\n`);

    if (report.summary.totalViolations === 0) {
      console.log('✅ All documentation follows standardized structure!\n');
      return;
    }

    console.log('📋 Violations by file:\n');

    Object.entries(report.violations).forEach(([file, violations]) => {
      console.log(`📄 ${file}:`);
      violations.forEach(violation => {
        const icon = {
          error: '❌',
          warning: '⚠️',
          info: 'ℹ️'
        }[violation.severity] || '•';
        
        console.log(`   ${icon} ${violation.message}`);
        if (violation.section) {
          console.log(`      Missing section: ${violation.section}`);
        }
      });
      console.log();
    });

    console.log('📋 Required sections for all component docs:');
    report.compliance.requiredSections.forEach(section => {
      console.log(`   • ${section}`);
    });
    console.log();

    console.log('💡 Documentation template available at:');
    console.log('   packages/docs/templates/component-docs-template.mdx');
    console.log();

    if (report.summary.errors > 0) {
      console.log('🚫 Critical documentation issues found. These must be fixed before merge.');
    } else if (report.summary.warnings > 0) {
      console.log('⚠️  Documentation warnings found. Consider addressing for better quality.');
    }
  }
}

async function main() {
  const validator = new DocumentationValidator();
  
  console.log('🚀 Starting documentation compliance validation...');
  
  await validator.validateDocumentation();
  const report = validator.generateReport();
  
  validator.printReport(report);
  
  // Save JSON report for CI/CD
  const reportPath = 'reports/documentation-validation.json';
  fs.mkdirSync('reports', { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📄 Detailed report saved to ${reportPath}`);
  
  // Exit with error code if there are critical issues
  if (report.summary.errors > 0) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Documentation validation failed:', error);
  process.exit(1);
});