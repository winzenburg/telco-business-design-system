#!/usr/bin/env node

/**
 * Design Heuristics Validator
 * Validates code against patterns defined in design-heuristics.yaml
 */

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { glob } from 'glob';

const HEURISTICS_CONFIG_PATH = 'packages/docs/context/design-heuristics.yaml';
const COMPONENT_PATHS = [
  'packages/components/**/*.{tsx,ts}',
  'packages/docs/stories/**/*.{tsx,ts}',
  'packages/ui/**/*.{tsx,ts}'
];

class HeuristicsValidator {
  constructor() {
    this.config = this.loadConfig();
    this.violations = [];
  }

  loadConfig() {
    try {
      const configFile = fs.readFileSync(HEURISTICS_CONFIG_PATH, 'utf8');
      return yaml.load(configFile);
    } catch (error) {
      console.error(`Failed to load heuristics config from ${HEURISTICS_CONFIG_PATH}:`, error.message);
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
      const lines = content.split('\n');
      
      // Get validation heuristics from config
      const heuristics = this.config.validation_heuristics || [];
      
      for (const heuristic of heuristics) {
        this.checkHeuristic(filePath, content, lines, heuristic);
      }
      
      // Run additional special pattern checks
      this.checkSpecialPatterns(filePath, content, lines);
      
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
    }
  }

  checkHeuristic(filePath, content, lines, heuristic) {
    const { id, pattern, severity, guidance, signal } = heuristic;
    
    if (pattern) {
      this.checkPattern(filePath, content, lines, { id, pattern, severity, guidance });
    }
    
    if (signal) {
      this.checkSignal(filePath, content, lines, { id, signal, severity, guidance });
    }
  }

  checkPattern(filePath, content, lines, { id, pattern, severity, guidance }) {
    const regex = new RegExp(pattern, 'g');
    const matches = content.matchAll(regex);
    
    for (const match of matches) {
      const lineNumber = this.getLineNumber(content, match.index);
      const lineContent = lines[lineNumber - 1]?.trim();
      
      // Skip if it's in a comment or string literal (basic heuristic)
      if (this.isInComment(lineContent) || this.isInStringLiteral(match[0], lineContent)) {
        continue;
      }
      
      this.violations.push({
        file: filePath,
        line: lineNumber,
        heuristic: id,
        pattern: pattern,
        match: match[0],
        severity: severity,
        message: guidance,
        context: lineContent
      });
    }
  }

  checkSignal(filePath, content, lines, { id, signal, severity, guidance }) {
    // Handle more complex signal-based heuristics
    switch (id) {
      case 'over-abstraction':
        this.checkOverAbstraction(filePath, content, lines, { id, severity, guidance });
        break;
      default:
        // Generic signal checking (could be enhanced based on signal type)
        if (content.includes(signal)) {
          this.violations.push({
            file: filePath,
            line: 1, // Would need more sophisticated detection for exact line
            heuristic: id,
            signal: signal,
            severity: severity,
            message: guidance,
            context: 'Signal detected in file'
          });
        }
    }
  }

  checkOverAbstraction(filePath, content, lines, { id, severity, guidance }) {
    // Check for specific over-abstraction patterns
    const patterns = [
      'generic utils used once',
      'indirection layers',
      'Utils',
      'Helper',
      'Manager'
    ];

    patterns.forEach(pattern => {
      if (content.includes(pattern)) {
        // Try to find the line where this pattern occurs
        const regex = new RegExp(pattern.replace(/\s+/g, '\\s*'), 'gi');
        const matches = content.matchAll(regex);
        
        for (const match of matches) {
          const lineNumber = this.getLineNumber(content, match.index);
          const lineContent = lines[lineNumber - 1]?.trim();
          
          this.violations.push({
            file: filePath,
            line: lineNumber,
            heuristic: id,
            pattern: pattern,
            match: match[0],
            severity: severity,
            message: guidance,
            context: lineContent
          });
        }
      }
    });
  }

  checkSpecialPatterns(filePath, content, lines) {
    // Check for god components based on file size and complexity
    const linesCount = lines.length;
    const componentMatch = content.match(/(?:export\s+(?:const|function)|function)\s+([A-Z]\w+)/);
    
    if (componentMatch && linesCount > 200) {
      this.violations.push({
        file: filePath,
        line: 1,
        heuristic: 'god-component-size',
        match: `${linesCount} lines`,
        severity: 'warn',
        message: `Component ${componentMatch[1]} is very large (${linesCount} lines). Consider breaking into smaller components.`,
        context: 'File size analysis'
      });
    }

    // Check for prop drilling by counting prop passes
    const propPassMatches = content.match(/\w+={[\w.]+}/g) || [];
    if (propPassMatches.length > 10) {
      this.violations.push({
        file: filePath,
        line: 1,
        heuristic: 'excessive-prop-passing',
        match: `${propPassMatches.length} prop passes`,
        severity: 'warn',
        message: 'Excessive prop passing detected. Consider React Context or state management.',
        context: 'Prop drilling analysis'
      });
    }

    // Check for magic numbers (excluding common values like 0, 1, 100, etc.)
    const magicNumberPattern = /\b(?:[2-9]|[1-9]\d{1}|[1-9]\d{2,})\b(?!\s*(?:px|rem|em|%|s|ms))/g;
    const magicNumbers = content.match(magicNumberPattern) || [];
    const commonValues = ['24', '48', '64', '100', '200', '300', '400', '500', '600', '700', '800', '900']; // Common design values
    
    magicNumbers.forEach(num => {
      if (!commonValues.includes(num)) {
        const regex = new RegExp(`\\b${num}\\b`);
        const match = content.match(regex);
        if (match) {
          const lineNumber = this.getLineNumber(content, content.indexOf(match[0]));
          const lineContent = lines[lineNumber - 1]?.trim();
          
          this.violations.push({
            file: filePath,
            line: lineNumber,
            heuristic: 'magic-numbers',
            match: num,
            severity: 'info',
            message: `Magic number '${num}' should be extracted to a named constant.`,
            context: lineContent
          });
        }
      }
    });
  }

  isInComment(lineContent) {
    return lineContent.startsWith('//') || lineContent.startsWith('/*') || lineContent.startsWith('*');
  }

  isInStringLiteral(match, lineContent) {
    // Basic check - could be enhanced
    const beforeMatch = lineContent.substring(0, lineContent.indexOf(match));
    const quotes = (beforeMatch.match(/"/g) || []).length;
    return quotes % 2 === 1; // Odd number of quotes means we're inside a string
  }

  getLineNumber(content, index) {
    return content.slice(0, index).split('\n').length;
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
        warnings: violationsBySeverity.warn?.length || 0,
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
      heuristicsUsed: [...new Set(this.violations.map(v => v.heuristic))]
    };

    return report;
  }

  printReport(report) {
    console.log('\n🎯 Design Heuristics Validation Report\n');
    console.log(`📊 Summary:`);
    console.log(`   Files scanned: ${report.summary.files}`);
    console.log(`   Total violations: ${report.summary.totalViolations}`);
    console.log(`   Errors: ${report.summary.errors}`);
    console.log(`   Warnings: ${report.summary.warnings}`);
    console.log(`   Info: ${report.summary.info}\n`);

    if (report.summary.totalViolations === 0) {
      console.log('✅ No heuristic violations found! Code follows design system patterns.\n');
      return;
    }

    console.log('📋 Violations by file:\n');

    Object.entries(report.violations).forEach(([file, violations]) => {
      console.log(`📄 ${file}:`);
      violations.forEach(violation => {
        const icon = {
          error: '❌',
          warn: '⚠️',
          info: 'ℹ️'
        }[violation.severity] || '•';
        
        console.log(`   ${icon} Line ${violation.line}: [${violation.heuristic}] ${violation.message}`);
        console.log(`      Found: ${violation.match || violation.signal || 'pattern detected'}`);
        if (violation.context && violation.context !== violation.match) {
          console.log(`      Context: ${violation.context}`);
        }
      });
      console.log();
    });

    console.log('💡 Heuristics Applied:');
    report.heuristicsUsed.forEach(heuristic => {
      console.log(`   • ${heuristic}`);
    });
    console.log();

    if (report.summary.errors > 0) {
      console.log('🚫 Critical heuristic violations found. These should be fixed before merging.');
    } else if (report.summary.warnings > 0) {
      console.log('⚠️  Warning-level heuristic violations found. Consider addressing these.');
    }
  }
}

async function main() {
  const validator = new HeuristicsValidator();
  
  console.log('🚀 Starting design heuristics validation...');
  
  await validator.validateFiles();
  const report = validator.generateReport();
  
  validator.printReport(report);
  
  // Save JSON report for CI/CD
  const reportPath = 'reports/heuristics-validation.json';
  fs.mkdirSync('reports', { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📄 Detailed report saved to ${reportPath}`);
  
  // Exit with error code if there are errors (not warnings or info)
  if (report.summary.errors > 0) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Heuristics validation failed:', error);
  process.exit(1);
});