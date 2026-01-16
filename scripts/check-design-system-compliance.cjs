#!/usr/bin/env node

/**
 * Design System Foundation Compliance Checker
 * 
 * Scans the codebase for violations of design system foundation rules:
 * - Hardcoded colors (hex, rgb, hsl)
 * - Hardcoded pixel spacing
 * - Non-design-system fonts
 * - Custom shadows
 * - Non-standard border radius
 * 
 * Usage:
 *   node scripts/check-design-system-compliance.cjs
 *   node scripts/check-design-system-compliance.cjs --fix
 *   node scripts/check-design-system-compliance.cjs --path apps/auto-attendant
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  // Directories to scan
  scanPaths: ['apps', 'packages', 'src'],
  
  // File extensions to check
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.html'],
  
  // Directories to exclude
  excludeDirs: ['node_modules', 'dist', '.next', 'build', 'storybook-static', 'coverage', 'public'],
  
  // Violation patterns
  patterns: {
    hexColor: {
      regex: /#[0-9A-Fa-f]{6}\b|#[0-9A-Fa-f]{3}\b/g,
      severity: 'blocker',
      message: 'Hardcoded hex color found',
      suggestion: 'Use theme(\'colors.primary.500\') or bg-primary-500',
      // Exclude CSS variable declarations (these ARE design system values)
      exclude: [
        /--[a-zA-Z0-9-]+:\s*#[0-9A-Fa-f]{3,6}/,  // CSS variables: --var-name: #hex;
        /\/\*.*\*\//,  // Comments with explanation
      ]
    },
    rgbColor: {
      regex: /rgba?\s*\([^)]+\)/g,
      severity: 'blocker',
      message: 'Hardcoded RGB/RGBA color found',
      suggestion: 'Use theme(\'colors.*\') or Tailwind color classes',
      // Exclude opacity modifiers on black/white and design system colors
      exclude: [
        /rgba?\s*\(\s*0\s*,\s*0\s*,\s*0\s*(?:,\s*[\d.]+)?\s*\)/,  // black with opacity: rgba(0,0,0,*)
        /rgba?\s*\(\s*255\s*,\s*255\s*,\s*255\s*(?:,\s*[\d.]+)?\s*\)/,  // white with opacity: rgba(255,255,255,*)
        /rgba?\s*\(\s*13\s*,\s*98\s*,\s*255\s*(?:,\s*[\d.]+)?\s*\)/,  // primary-500 with opacity: rgba(13,98,255,*)
        /rgba?\s*\(\s*16\s*,\s*185\s*,\s*129\s*(?:,\s*[\d.]+)?\s*\)/,  // green-500 with opacity
        /rgba?\s*\(\s*147\s*,\s*51\s*,\s*234\s*(?:,\s*[\d.]+)?\s*\)/,  // purple-600 with opacity
      ]
    },
    hslColor: {
      regex: /hsla?\s*\([^)]+\)/g,
      severity: 'blocker',
      message: 'Hardcoded HSL/HSLA color found',
      suggestion: 'Use theme(\'colors.*\') or Tailwind color classes'
    },
    pixelValue: {
      regex: /(?<!url\([^)]*)\b\d+px\b(?![^{]*\})/g,
      severity: 'high',
      message: 'Hardcoded pixel value found',
      suggestion: 'Use design system spacing (p-6, theme(\'spacing.6\'))',
      // Exclude common safe patterns
      exclude: [
        /\/\/ .*/,  // Comments
        /\/\* .* \*\//,  // Block comments
        /import .*/,  // Import statements
        /calc\([^)]*\d+px[^)]*\)/,  // calc() functions
        /(max-width|min-width|width|height):\s*\d+px/,  // Explicit dimensions often OK
      ]
    },
    customFont: {
      regex: /font-family:\s*['"](?!Montserrat|Lato|Inter|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|sans-serif|monospace)[^'"]+['"]/gi,
      severity: 'blocker',
      message: 'Non-design-system font found',
      suggestion: 'Use font-sans (Montserrat) or font-lato from design system'
    },
    customShadow: {
      regex: /box-shadow:\s*(?!none|inherit|initial|unset)[^;{]+(?<!theme\([^)]*\))[;{]/g,
      severity: 'high',
      message: 'Custom box-shadow found',
      suggestion: 'Use shadow-sm, shadow-md, shadow-lg or theme(\'boxShadow.*\')'
    },
    cssVariable: {
      regex: /var\(--(?!tw-)[^)]+\)/g,
      severity: 'medium',
      message: 'Custom CSS variable found (not Tailwind)',
      suggestion: 'Use design system tokens via theme() function'
    },
    cdnTailwind: {
      regex: /https?:\/\/cdn\.tailwindcss\.com/g,
      severity: 'blocker',
      message: 'CDN Tailwind detected',
      suggestion: 'Use compiled Tailwind CSS from design system'
    }
  },
  
  // Exception markers
  exceptionMarkers: [
    'DESIGN-SYSTEM-EXCEPTION',
    'DS-EXCEPTION',
    'TODO: Use design system'
  ]
};

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
  bold: '\x1b[1m'
};

class ComplianceChecker {
  constructor(options = {}) {
    this.options = {
      fix: options.fix || false,
      path: options.path || null,
      verbose: options.verbose || false
    };
    
    this.violations = {
      blocker: [],
      high: [],
      medium: [],
      low: []
    };
    
    this.stats = {
      filesScanned: 0,
      filesWithViolations: 0,
      totalViolations: 0
    };
  }
  
  /**
   * Main entry point
   */
  async run() {
    console.log(`${colors.bold}${colors.blue}Design System Foundation Compliance Check${colors.reset}\n`);
    
    const scanPaths = this.options.path 
      ? [this.options.path]
      : CONFIG.scanPaths;
    
    for (const scanPath of scanPaths) {
      if (!fs.existsSync(scanPath)) {
        console.log(`${colors.yellow}⚠ Path not found: ${scanPath}${colors.reset}`);
        continue;
      }
      
      await this.scanDirectory(scanPath);
    }
    
    this.printReport();
    
    return this.getExitCode();
  }
  
  /**
   * Recursively scan directory
   */
  async scanDirectory(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      // Skip excluded directories
      if (entry.isDirectory() && CONFIG.excludeDirs.includes(entry.name)) {
        continue;
      }
      
      if (entry.isDirectory()) {
        await this.scanDirectory(fullPath);
      } else if (this.shouldScanFile(entry.name)) {
        await this.scanFile(fullPath);
      }
    }
  }
  
  /**
   * Check if file should be scanned
   */
  shouldScanFile(filename) {
    const ext = path.extname(filename);
    return CONFIG.extensions.includes(ext);
  }
  
  /**
   * Scan a single file for violations
   */
  async scanFile(filePath) {
    this.stats.filesScanned++;
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    
    let fileHasViolations = false;
    
    // Check for exception marker
    const hasException = CONFIG.exceptionMarkers.some(marker => 
      content.includes(marker)
    );
    
    // Check each pattern
    for (const [patternName, pattern] of Object.entries(CONFIG.patterns)) {
      let match;
      pattern.regex.lastIndex = 0; // Reset regex
      
      while ((match = pattern.regex.exec(content)) !== null) {
        const matchText = match[0];
        const matchIndex = match.index;
        
        // Find line number
        const beforeMatch = content.substring(0, matchIndex);
        const lineNumber = beforeMatch.split('\n').length;
        const lineContent = lines[lineNumber - 1].trim();
        
        // Check if this match should be excluded
        if (this.shouldExclude(pattern, content, matchIndex)) {
          continue;
        }
        
        // Skip if near an exception marker
        if (hasException && this.isNearException(lines, lineNumber)) {
          continue;
        }
        
        // Record violation
        fileHasViolations = true;
        this.violations[pattern.severity].push({
          file: filePath,
          line: lineNumber,
          column: match.index - beforeMatch.lastIndexOf('\n'),
          pattern: patternName,
          match: matchText,
          lineContent: lineContent,
          message: pattern.message,
          suggestion: pattern.suggestion
        });
      }
    }
    
    if (fileHasViolations) {
      this.stats.filesWithViolations++;
    }
  }
  
  /**
   * Check if match should be excluded based on pattern rules
   */
  shouldExclude(pattern, content, matchIndex) {
    if (!pattern.exclude) return false;
    
    // Get context around match
    const start = Math.max(0, matchIndex - 100);
    const end = Math.min(content.length, matchIndex + 100);
    const context = content.substring(start, end);
    
    return pattern.exclude.some(excludeRegex => excludeRegex.test(context));
  }
  
  /**
   * Check if line is near an exception marker
   */
  isNearException(lines, lineNumber, range = 3) {
    const start = Math.max(0, lineNumber - range);
    const end = Math.min(lines.length, lineNumber + range);
    
    for (let i = start; i < end; i++) {
      const line = lines[i];
      if (CONFIG.exceptionMarkers.some(marker => line.includes(marker))) {
        return true;
      }
    }
    
    return false;
  }
  
  /**
   * Print report to console
   */
  printReport() {
    console.log(`\n${colors.bold}Scan Results${colors.reset}`);
    console.log(`${colors.gray}${'─'.repeat(60)}${colors.reset}`);
    console.log(`Files scanned: ${this.stats.filesScanned}`);
    console.log(`Files with violations: ${this.stats.filesWithViolations}`);
    
    // Count violations by severity
    const blockerCount = this.violations.blocker.length;
    const highCount = this.violations.high.length;
    const mediumCount = this.violations.medium.length;
    const lowCount = this.violations.low.length;
    const totalCount = blockerCount + highCount + mediumCount + lowCount;
    
    this.stats.totalViolations = totalCount;
    
    console.log(`\nTotal violations: ${totalCount}`);
    if (blockerCount > 0) console.log(`  ${colors.red}● Blockers: ${blockerCount}${colors.reset}`);
    if (highCount > 0) console.log(`  ${colors.yellow}● High: ${highCount}${colors.reset}`);
    if (mediumCount > 0) console.log(`  ${colors.blue}● Medium: ${mediumCount}${colors.reset}`);
    if (lowCount > 0) console.log(`  ${colors.gray}● Low: ${lowCount}${colors.reset}`);
    
    // Print violations
    if (totalCount > 0) {
      console.log(`\n${colors.bold}Violations by Severity${colors.reset}\n`);
      
      this.printViolationSection('Blockers', this.violations.blocker, colors.red);
      this.printViolationSection('High Priority', this.violations.high, colors.yellow);
      this.printViolationSection('Medium Priority', this.violations.medium, colors.blue);
      this.printViolationSection('Low Priority', this.violations.low, colors.gray);
      
      // Print summary advice
      console.log(`\n${colors.bold}How to Fix${colors.reset}`);
      console.log(`${colors.gray}${'─'.repeat(60)}${colors.reset}`);
      console.log('1. Review violations above');
      console.log('2. Replace hardcoded values with design system tokens');
      console.log('3. See: /agents/design-system-foundation-guard.md');
      console.log('4. Check: /tailwind.config.js for available tokens\n');
    } else {
      console.log(`\n${colors.green}✓ No violations found! All code follows design system foundations.${colors.reset}\n`);
    }
  }
  
  /**
   * Print a section of violations
   */
  printViolationSection(title, violations, color) {
    if (violations.length === 0) return;
    
    console.log(`${color}${colors.bold}${title} (${violations.length})${colors.reset}`);
    console.log(`${colors.gray}${'─'.repeat(60)}${colors.reset}`);
    
    // Group by file
    const byFile = {};
    violations.forEach(v => {
      if (!byFile[v.file]) byFile[v.file] = [];
      byFile[v.file].push(v);
    });
    
    // Print grouped violations
    Object.entries(byFile).forEach(([file, fileViolations]) => {
      console.log(`\n${colors.bold}${file}${colors.reset}`);
      
      fileViolations.forEach(v => {
        console.log(`  ${color}Line ${v.line}:${v.column}${colors.reset} - ${v.message}`);
        console.log(`    ${colors.gray}Found: ${v.match}${colors.reset}`);
        console.log(`    ${colors.gray}Line: ${v.lineContent.substring(0, 80)}${colors.reset}`);
        console.log(`    ${colors.green}Fix: ${v.suggestion}${colors.reset}`);
      });
    });
    
    console.log('');
  }
  
  /**
   * Get exit code based on violations
   */
  getExitCode() {
    // Blockers cause failure
    if (this.violations.blocker.length > 0) {
      return 1;
    }
    
    // No violations = success
    if (this.stats.totalViolations === 0) {
      return 0;
    }
    
    // Warnings but no blockers = success with warnings
    return 0;
  }
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    fix: false,
    path: null,
    verbose: false
  };
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg === '--fix') {
      options.fix = true;
    } else if (arg === '--path' && i + 1 < args.length) {
      options.path = args[++i];
    } else if (arg === '--verbose' || arg === '-v') {
      options.verbose = true;
    } else if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    }
  }
  
  return options;
}

function printHelp() {
  console.log(`
Design System Foundation Compliance Checker

Usage:
  node scripts/check-design-system-compliance.cjs [options]

Options:
  --path <path>     Scan specific directory (default: apps, packages, src)
  --fix             Auto-fix violations (not yet implemented)
  --verbose, -v     Verbose output
  --help, -h        Show this help message

Examples:
  node scripts/check-design-system-compliance.cjs
  node scripts/check-design-system-compliance.cjs --path apps/auto-attendant
  node scripts/check-design-system-compliance.cjs --verbose

Exit Codes:
  0 - Success (no blockers)
  1 - Failure (blockers found)
  `);
}

// Main execution
if (require.main === module) {
  const options = parseArgs();
  const checker = new ComplianceChecker(options);
  
  checker.run()
    .then(exitCode => {
      process.exit(exitCode);
    })
    .catch(error => {
      console.error(`${colors.red}Error: ${error.message}${colors.reset}`);
      process.exit(1);
    });
}

module.exports = ComplianceChecker;
