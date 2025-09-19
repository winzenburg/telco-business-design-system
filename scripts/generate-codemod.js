#!/usr/bin/env node

/**
 * Codemod Generator for Breaking Changes
 * Generates automated transformation scripts for API migrations
 */

import fs from 'fs';
import path from 'path';

class CodemodGenerator {
  constructor(options) {
    this.componentName = options.componentName;
    this.oldAPI = options.oldAPI;
    this.newAPI = options.newAPI;
    this.changeDescription = options.changeDescription;
    this.version = options.version || '1.0.0';
  }

  generateCodemod() {
    const codemodName = `${this.componentName.toLowerCase()}-${this.oldAPI.toLowerCase()}-to-${this.newAPI.toLowerCase()}`;
    const codemodPath = `codemods/${codemodName}.js`;

    const codemodTemplate = this.createCodemodTemplate();
    
    // Ensure codemods directory exists
    fs.mkdirSync('codemods', { recursive: true });
    
    // Write codemod file
    fs.writeFileSync(codemodPath, codemodTemplate);
    
    // Generate package.json for codemod package
    this.generateCodemodPackage(codemodName);
    
    // Generate README for codemod
    this.generateCodemodReadme(codemodName);
    
    return {
      path: codemodPath,
      name: codemodName,
      command: `npx @comcast/design-system-codemods ${codemodName}`
    };
  }

  createCodemodTemplate() {
    return `#!/usr/bin/env node

/**
 * Codemod: ${this.componentName} ${this.oldAPI} → ${this.newAPI}
 * 
 * ${this.changeDescription}
 * 
 * Usage:
 *   npx jscodeshift -t codemods/${this.componentName.toLowerCase()}-${this.oldAPI.toLowerCase()}-to-${this.newAPI.toLowerCase()}.js src/
 * 
 * Generated: ${new Date().toISOString()}
 */

const { getCSSRules, report } = require('./utils');

module.exports = function transformer(fileInfo, api, options) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  let hasChanges = false;

  // Find imports of the component
  root
    .find(j.ImportDeclaration)
    .filter(path => {
      return path.value.source.value.includes('${this.componentName}') ||
             path.value.source.value.includes('@comcast/design-system');
    })
    .forEach(path => {
      const specifiers = path.value.specifiers;
      specifiers.forEach(spec => {
        if (spec.type === 'ImportSpecifier' && spec.imported.name === '${this.componentName}') {
          // Component is imported, now transform its usage
          transformComponentUsage(root, spec.local.name, j);
          hasChanges = true;
        }
      });
    });

  function transformComponentUsage(root, localName, j) {
    // Transform JSX elements
    root
      .find(j.JSXElement)
      .filter(path => {
        return path.value.openingElement.name.name === localName;
      })
      .forEach(path => {
        const element = path.value.openingElement;
        
        // Transform specific prop changes
        ${this.generatePropTransformations()}
      });

    // Transform TypeScript interfaces if applicable
    root
      .find(j.TSInterfaceDeclaration)
      .filter(path => path.value.id.name.includes('${this.componentName}Props'))
      .forEach(path => {
        // Update interface properties
        ${this.generateInterfaceTransformations()}
      });
  }

  if (hasChanges) {
    report(\`Migrated ${this.componentName} from ${this.oldAPI} to ${this.newAPI}\`);
  }

  return hasChanges ? root.toSource({ quote: 'single' }) : null;
};

module.exports.parser = 'tsx';
`;
  }

  generatePropTransformations() {
    // Generate specific transformations based on the API change
    return `
        // Example transformations (customize based on actual API changes)
        element.attributes.forEach(attr => {
          if (attr.type === 'JSXAttribute') {
            // Transform prop name changes
            if (attr.name.name === '${this.oldAPI}') {
              attr.name.name = '${this.newAPI}';
              hasChanges = true;
            }
            
            // Transform prop value changes if needed
            if (attr.name.name === '${this.newAPI}' && attr.value) {
              // Add value transformation logic here
            }
          }
        });`;
  }

  generateInterfaceTransformations() {
    return `
        // Transform TypeScript interface properties
        const members = path.value.body.body;
        members.forEach(member => {
          if (member.type === 'TSPropertySignature' && 
              member.key.name === '${this.oldAPI}') {
            member.key.name = '${this.newAPI}';
            hasChanges = true;
          }
        });`;
  }

  generateCodemodPackage(codemodName) {
    const packageJson = {
      name: `@comcast/design-system-codemods`,
      version: this.version,
      description: 'Codemods for migrating Comcast Business Design System components',
      main: 'index.js',
      bin: {
        [codemodName]: `./${codemodName}.js`
      },
      scripts: {
        test: `jest codemods/__tests__/${codemodName}.test.js`
      },
      dependencies: {
        jscodeshift: '^0.15.1',
        yargs: '^17.7.2'
      },
      devDependencies: {
        jest: '^29.7.0',
        '@types/jscodeshift': '^0.11.10'
      },
      keywords: [
        'codemod',
        'jscodeshift',
        'migration',
        'design-system',
        'comcast'
      ]
    };

    fs.writeFileSync('codemods/package.json', JSON.stringify(packageJson, null, 2));
  }

  generateCodemodReadme(codemodName) {
    const readme = `# ${this.componentName} Migration Codemod

## Overview
Automatically migrates ${this.componentName} components from \`${this.oldAPI}\` to \`${this.newAPI}\`.

${this.changeDescription}

## Installation
\`\`\`bash
npm install -g @comcast/design-system-codemods
\`\`\`

## Usage
\`\`\`bash
# Run on entire src directory
npx jscodeshift -t node_modules/@comcast/design-system-codemods/${codemodName}.js src/

# Run on specific files
npx jscodeshift -t node_modules/@comcast/design-system-codemods/${codemodName}.js src/components/MyComponent.tsx

# Dry run (see changes without applying)
npx jscodeshift -t node_modules/@comcast/design-system-codemods/${codemodName}.js src/ --dry
\`\`\`

## What it changes

### Before
\`\`\`tsx
<${this.componentName} ${this.oldAPI}="value" />
\`\`\`

### After
\`\`\`tsx
<${this.componentName} ${this.newAPI}="value" />
\`\`\`

## Manual steps required

After running this codemod, you may need to:

1. **Update imports** if the component location changed
2. **Review prop values** for semantic changes
3. **Update tests** that reference the old API
4. **Check TypeScript types** for any remaining errors

## Timeline

- **Deprecation**: ${this.version} (warnings added)
- **Removal**: ${this.getRemovalVersion()} (2 minor versions later)

## Support

If you encounter issues:
1. Check the [migration guide](./MIGRATION.md)
2. Run with \`--dry\` flag to preview changes
3. Create an issue on GitHub with examples
`;

    fs.writeFileSync(`codemods/${codemodName}.md`, readme);
  }

  getRemovalVersion() {
    const [major, minor, patch] = this.version.split('.').map(Number);
    return `${major}.${minor + 2}.0`;
  }

  generateDeprecationWarnings() {
    const warningTemplate = `
// Add this to the component file
useEffect(() => {
  if (process.env.NODE_ENV === 'development') {
    if (props.${this.oldAPI} !== undefined) {
      console.warn(
        \`[DEPRECATED] ${this.componentName}: The '${this.oldAPI}' prop is deprecated and will be removed in v${this.getRemovalVersion()}. Use '${this.newAPI}' instead.\`,
        \`\nMigration: npx @comcast/design-system-codemods ${this.componentName.toLowerCase()}-${this.oldAPI.toLowerCase()}-to-${this.newAPI.toLowerCase()}\`,
        \`\nSee: https://design-system.comcast.com/migrations/${this.componentName.toLowerCase()}\`
      );
    }
  }
}, [props.${this.oldAPI}]);
`;

    return warningTemplate;
  }

  generateChangesetEntry() {
    const changesetContent = `---
'@comcast/design-system': minor
---

**BREAKING CHANGE**: ${this.componentName} ${this.oldAPI} → ${this.newAPI}

${this.changeDescription}

## Migration

Run the automated codemod:
\`\`\`bash
npx @comcast/design-system-codemods ${this.componentName.toLowerCase()}-${this.oldAPI.toLowerCase()}-to-${this.newAPI.toLowerCase()}
\`\`\`

## Timeline

- **v${this.version}**: Deprecation warnings added
- **v${this.getRemovalVersion()}**: Old API removed (2 minors from now)

## Manual updates needed

After running the codemod, review and update:
- [ ] Component tests referencing old API
- [ ] Documentation examples  
- [ ] Type definitions if using custom interfaces
`;

    const changesetPath = `.changeset/${this.componentName.toLowerCase()}-${Date.now()}.md`;
    fs.writeFileSync(changesetPath, changesetContent);
    return changesetPath;
  }
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  
  if (args.length < 4) {
    console.log('Usage: node generate-codemod.js <ComponentName> <OldAPI> <NewAPI> <Description> [Version]');
    console.log('Example: node generate-codemod.js Button size variant "Changed size prop to variant for consistency" 2.1.0');
    process.exit(1);
  }

  const [componentName, oldAPI, newAPI, changeDescription, version] = args;
  
  const generator = new CodemodGenerator({
    componentName,
    oldAPI,
    newAPI,
    changeDescription,
    version
  });

  const result = generator.generateCodemod();
  const changesetPath = generator.generateChangesetEntry();
  const warnings = generator.generateDeprecationWarnings();

  console.log('✅ Codemod generated successfully!');
  console.log(\`📁 Codemod: \${result.path}\`);
  console.log(\`📝 Changeset: \${changesetPath}\`);
  console.log(\`⚠️  Add deprecation warnings to component:\`);
  console.log(warnings);
  console.log(\`🚀 Run migration: \${result.command}\`);
}

export { CodemodGenerator };
`;
    fs.writeFileSync(codemodPath, codemodTemplate);
  }
}