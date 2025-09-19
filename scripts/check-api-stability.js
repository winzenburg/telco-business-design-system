#!/usr/bin/env node

/**
 * API Stability Checker
 * Uses TypeScript API Extractor to detect breaking changes in public APIs
 */

import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

class APIStabilityChecker {
  constructor() {
    this.violations = [];
    this.currentApiPath = 'reports/api-current.json';
    this.baselineApiPath = 'reports/api-baseline.json';
  }

  async checkAPIStability() {
    console.log('🔍 Checking API stability...\n');

    // Extract current API surface
    await this.extractCurrentAPI();
    
    // Load baseline if it exists
    const hasBaseline = fs.existsSync(this.baselineApiPath);
    
    if (!hasBaseline) {
      console.log('📝 No baseline API found. Creating initial baseline...');
      await this.createBaseline();
      return { isBreaking: false, violations: [], message: 'Baseline created successfully' };
    }

    // Compare APIs
    const comparison = await this.compareAPIs();
    
    return {
      isBreaking: comparison.hasBreakingChanges,
      violations: this.violations,
      changes: comparison.changes,
      summary: comparison.summary
    };
  }

  async extractCurrentAPI() {
    try {
      // Generate API report using TypeScript compiler
      console.log('📊 Extracting current API surface...');
      
      // Create API extractor config if it doesn't exist
      await this.ensureApiExtractorConfig();
      
      // Run API extraction
      await execAsync('npx api-extractor run --local --verbose');
      
      // Parse the generated API file
      const apiReport = await this.parseApiReport();
      
      // Save current API
      fs.writeFileSync(this.currentApiPath, JSON.stringify(apiReport, null, 2));
      
    } catch (error) {
      console.warn('⚠️  API extraction failed, using fallback method:', error.message);
      await this.fallbackApiExtraction();
    }
  }

  async ensureApiExtractorConfig() {
    const configPath = 'api-extractor.json';
    
    if (!fs.existsSync(configPath)) {
      const config = {
        "$schema": "https://developer.microsoft.com/json-schemas/api-extractor/v7/api-extractor.schema.json",
        "mainEntryPointFilePath": "<projectFolder>/dist/types/index.d.ts",
        "bundledPackages": [],
        "compiler": {
          "tsconfigFilePath": "<projectFolder>/tsconfig.json"
        },
        "apiReport": {
          "enabled": true,
          "reportFolder": "<projectFolder>/reports/",
          "reportFileName": "api-report.api.md"
        },
        "docModel": {
          "enabled": false
        },
        "dtsRollup": {
          "enabled": false
        },
        "tsdocMetadata": {
          "enabled": false
        },
        "messages": {
          "compilerMessageReporting": {
            "default": {
              "logLevel": "warning"
            }
          },
          "extractorMessageReporting": {
            "default": {
              "logLevel": "warning"
            },
            "ae-missing-release-tag": {
              "logLevel": "none"
            }
          },
          "tsdocMessageReporting": {
            "default": {
              "logLevel": "none"
            }
          }
        }
      };
      
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    }
  }

  async parseApiReport() {
    // Parse API extractor markdown report
    const reportPath = 'reports/api-report.api.md';
    
    if (fs.existsSync(reportPath)) {
      const content = fs.readFileSync(reportPath, 'utf8');
      return this.parseMarkdownApi(content);
    }
    
    // Fallback: parse TypeScript declaration files directly
    return await this.fallbackApiExtraction();
  }

  parseMarkdownApi(content) {
    const api = {
      interfaces: [],
      types: [],
      functions: [],
      classes: [],
      enums: []
    };

    // Parse interfaces
    const interfaceMatches = content.matchAll(/^interface\s+(\w+)[^{]*\{([^}]*)\}/gm);
    for (const match of interfaceMatches) {
      api.interfaces.push({
        name: match[1],
        body: match[2].trim(),
        signature: match[0]
      });
    }

    // Parse type aliases
    const typeMatches = content.matchAll(/^type\s+(\w+)[^=]*=([^;]*);/gm);
    for (const match of typeMatches) {
      api.types.push({
        name: match[1],
        definition: match[2].trim(),
        signature: match[0]
      });
    }

    // Parse functions
    const functionMatches = content.matchAll(/^(?:export\s+)?(?:declare\s+)?function\s+(\w+)[^{;]*[{;]/gm);
    for (const match of functionMatches) {
      api.functions.push({
        name: match[1],
        signature: match[0]
      });
    }

    return api;
  }

  async fallbackApiExtraction() {
    console.log('📋 Using fallback API extraction...');
    
    const api = {
      interfaces: [],
      types: [],
      functions: [],
      classes: [],
      enums: []
    };

    try {
      // Look for TypeScript declaration files
      const declFiles = ['dist/types/index.d.ts', 'dist/index.d.ts', 'types/index.d.ts'];
      
      for (const file of declFiles) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');
          
          // Extract exported interfaces
          const interfaces = this.extractInterfaces(content);
          const types = this.extractTypes(content);
          const functions = this.extractFunctions(content);
          
          api.interfaces.push(...interfaces);
          api.types.push(...types);
          api.functions.push(...functions);
          
          break;
        }
      }
    } catch (error) {
      console.warn('Fallback API extraction failed:', error.message);
    }

    return api;
  }

  extractInterfaces(content) {
    const interfaces = [];
    const regex = /export\s+interface\s+(\w+)[^{]*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
      interfaces.push({
        name: match[1],
        body: match[2].trim(),
        signature: match[0]
      });
    }

    return interfaces;
  }

  extractTypes(content) {
    const types = [];
    const regex = /export\s+type\s+(\w+)[^=]*=([^;]*);/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
      types.push({
        name: match[1],
        definition: match[2].trim(),
        signature: match[0]
      });
    }

    return types;
  }

  extractFunctions(content) {
    const functions = [];
    const regex = /export\s+(?:declare\s+)?function\s+(\w+)[^{;]*[{;]/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
      functions.push({
        name: match[1],
        signature: match[0]
      });
    }

    return functions;
  }

  async createBaseline() {
    if (fs.existsSync(this.currentApiPath)) {
      fs.copyFileSync(this.currentApiPath, this.baselineApiPath);
      console.log('✅ API baseline created successfully');
    }
  }

  async compareAPIs() {
    const current = JSON.parse(fs.readFileSync(this.currentApiPath, 'utf8'));
    const baseline = JSON.parse(fs.readFileSync(this.baselineApiPath, 'utf8'));

    const changes = {
      breaking: [],
      nonBreaking: [],
      additions: []
    };

    // Compare interfaces
    this.compareInterfaces(baseline.interfaces, current.interfaces, changes);
    
    // Compare types
    this.compareTypes(baseline.types, current.types, changes);
    
    // Compare functions
    this.compareFunctions(baseline.functions, current.functions, changes);

    const summary = {
      breaking: changes.breaking.length,
      nonBreaking: changes.nonBreaking.length,
      additions: changes.additions.length
    };

    return {
      hasBreakingChanges: changes.breaking.length > 0,
      changes,
      summary
    };
  }

  compareInterfaces(baselineInterfaces, currentInterfaces, changes) {
    const baselineMap = new Map(baselineInterfaces.map(i => [i.name, i]));
    const currentMap = new Map(currentInterfaces.map(i => [i.name, i]));

    // Check for removed interfaces
    for (const [name, baseline] of baselineMap) {
      if (!currentMap.has(name)) {
        changes.breaking.push({
          type: 'interface-removed',
          name,
          severity: 'major',
          message: `Interface '${name}' was removed`
        });
      }
    }

    // Check for modified interfaces
    for (const [name, current] of currentMap) {
      const baseline = baselineMap.get(name);
      
      if (!baseline) {
        changes.additions.push({
          type: 'interface-added',
          name,
          severity: 'minor',
          message: `Interface '${name}' was added`
        });
        continue;
      }

      if (baseline.body !== current.body) {
        const isBreaking = this.isInterfaceChangeBreaking(baseline.body, current.body);
        
        changes[isBreaking ? 'breaking' : 'nonBreaking'].push({
          type: 'interface-modified',
          name,
          severity: isBreaking ? 'major' : 'minor',
          message: `Interface '${name}' was modified`,
          baseline: baseline.body,
          current: current.body
        });
      }
    }
  }

  compareTypes(baselineTypes, currentTypes, changes) {
    const baselineMap = new Map(baselineTypes.map(t => [t.name, t]));
    const currentMap = new Map(currentTypes.map(t => [t.name, t]));

    // Check for removed types
    for (const [name, baseline] of baselineMap) {
      if (!currentMap.has(name)) {
        changes.breaking.push({
          type: 'type-removed',
          name,
          severity: 'major',
          message: `Type '${name}' was removed`
        });
      }
    }

    // Check for modified types
    for (const [name, current] of currentMap) {
      const baseline = baselineMap.get(name);
      
      if (!baseline) {
        changes.additions.push({
          type: 'type-added',
          name,
          severity: 'minor',
          message: `Type '${name}' was added`
        });
        continue;
      }

      if (baseline.definition !== current.definition) {
        changes.breaking.push({
          type: 'type-modified',
          name,
          severity: 'major',
          message: `Type '${name}' definition changed`,
          baseline: baseline.definition,
          current: current.definition
        });
      }
    }
  }

  compareFunctions(baselineFunctions, currentFunctions, changes) {
    const baselineMap = new Map(baselineFunctions.map(f => [f.name, f]));
    const currentMap = new Map(currentFunctions.map(f => [f.name, f]));

    // Check for removed functions
    for (const [name, baseline] of baselineMap) {
      if (!currentMap.has(name)) {
        changes.breaking.push({
          type: 'function-removed',
          name,
          severity: 'major',
          message: `Function '${name}' was removed`
        });
      }
    }

    // Check for modified function signatures
    for (const [name, current] of currentMap) {
      const baseline = baselineMap.get(name);
      
      if (!baseline) {
        changes.additions.push({
          type: 'function-added',
          name,
          severity: 'minor',
          message: `Function '${name}' was added`
        });
        continue;
      }

      if (baseline.signature !== current.signature) {
        changes.breaking.push({
          type: 'function-modified',
          name,
          severity: 'major',
          message: `Function '${name}' signature changed`,
          baseline: baseline.signature,
          current: current.signature
        });
      }
    }
  }

  isInterfaceChangeBreaking(baselineBody, currentBody) {
    // Simple heuristic: if properties were removed, it's breaking
    const baselineProps = this.extractInterfaceProps(baselineBody);
    const currentProps = this.extractInterfaceProps(currentBody);
    
    // Check if any required properties were removed
    for (const prop of baselineProps) {
      if (prop.required && !currentProps.some(p => p.name === prop.name)) {
        return true;
      }
    }

    return false;
  }

  extractInterfaceProps(body) {
    const props = [];
    const lines = body.split('\n');
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('//') && !trimmed.startsWith('*')) {
        const match = trimmed.match(/(\w+)(\??)\s*:/);
        if (match) {
          props.push({
            name: match[1],
            required: !match[2] // No ? means required
          });
        }
      }
    }
    
    return props;
  }

  generateReport(result) {
    const report = {
      timestamp: new Date().toISOString(),
      isBreaking: result.isBreaking,
      summary: result.summary || { breaking: 0, nonBreaking: 0, additions: 0 },
      changes: result.changes || { breaking: [], nonBreaking: [], additions: [] },
      violations: result.violations || []
    };

    return report;
  }

  printReport(report) {
    console.log('\n🔍 API Stability Report\n');
    console.log(`📊 Summary:`);
    console.log(`   Breaking changes: ${report.summary.breaking}`);
    console.log(`   Non-breaking changes: ${report.summary.nonBreaking}`);
    console.log(`   Additions: ${report.summary.additions}\n`);

    if (report.isBreaking) {
      console.log('💥 BREAKING CHANGES DETECTED:\n');
      
      report.changes.breaking.forEach(change => {
        console.log(`   ❌ ${change.message}`);
        if (change.baseline && change.current) {
          console.log(`      Before: ${change.baseline.substring(0, 100)}...`);
          console.log(`      After:  ${change.current.substring(0, 100)}...`);
        }
        console.log();
      });

      console.log('🚨 Action required:');
      console.log('   • Update major version if releasing');
      console.log('   • Provide codemods for breaking changes');
      console.log('   • Update migration documentation');
      console.log('   • Consider deprecation period for removed APIs');
    } else {
      console.log('✅ No breaking changes detected!');
      
      if (report.summary.additions > 0) {
        console.log('\n📈 New additions:');
        report.changes.additions.forEach(change => {
          console.log(`   ✨ ${change.message}`);
        });
      }
    }
  }
}

async function main() {
  // Ensure reports directory exists
  fs.mkdirSync('reports', { recursive: true });
  
  const checker = new APIStabilityChecker();
  
  try {
    const result = await checker.checkAPIStability();
    const report = checker.generateReport(result);
    
    checker.printReport(report);
    
    // Save report for CI/CD
    const reportPath = 'reports/api-stability.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Detailed report saved to ${reportPath}`);
    
    // Exit with error if breaking changes detected
    if (report.isBreaking) {
      console.log('\n❌ Breaking changes detected. Please review and update versioning.');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('API stability check failed:', error);
    process.exit(1);
  }
}

main();