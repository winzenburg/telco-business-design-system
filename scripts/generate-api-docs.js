#!/usr/bin/env node

/**
 * API Documentation Generator
 * 
 * Automatically generates comprehensive API documentation for all components
 * by parsing TypeScript interfaces and extracting prop information.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENT_PATHS = [
  'src/components/ui/**/*.tsx',
  'packages/components/ui/**/*.tsx'
];

const OUTPUT_PATH = 'packages/docs/api-reference';

class APIDocumentationGenerator {
  constructor() {
    this.components = new Map();
    this.interfaces = new Map();
  }

  async generateDocs() {
    console.log('🚀 Generating API Documentation...');
    
    // Find all component files
    const files = await glob(COMPONENT_PATHS, { 
      ignore: ['**/node_modules/**', '**/*.test.*', '**/*.stories.*'] 
    });
    
    console.log(`📁 Found ${files.length} component files`);
    
    // Parse each component file
    for (const file of files) {
      await this.parseComponent(file);
    }
    
    // Generate documentation
    await this.generateComponentDocs();
    await this.generateIndexDoc();
    
    console.log('✅ API documentation generated successfully!');
  }

  async parseComponent(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const componentName = this.extractComponentName(filePath);
      
      if (!componentName) return;
      
      const componentInfo = {
        name: componentName,
        filePath,
        description: this.extractDescription(content),
        props: this.extractProps(content, componentName),
        examples: this.extractExamples(content),
        variants: this.extractVariants(content),
        sizes: this.extractSizes(content)
      };
      
      this.components.set(componentName, componentInfo);
      console.log(`📄 Parsed ${componentName}`);
      
    } catch (error) {
      console.error(`❌ Error parsing ${filePath}:`, error.message);
    }
  }

  extractComponentName(filePath) {
    const fileName = path.basename(filePath, '.tsx');
    // Skip index files and utility files
    if (fileName === 'index' || fileName.includes('skeleton') || fileName.includes('utils')) {
      return null;
    }
    // Convert kebab-case to PascalCase
    return fileName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }

  extractDescription(content) {
    // Look for component description in comments
    const descriptionMatch = content.match(/\/\*\*[\s\S]*?@description\s+([^\n*]+)/i);
    if (descriptionMatch) {
      return descriptionMatch[1].trim();
    }
    
    // Look for JSDoc comment before component
    const jsdocMatch = content.match(/\/\*\*[\s\S]*?\*\//g);
    if (jsdocMatch) {
      const lastComment = jsdocMatch[jsdocMatch.length - 1];
      const lines = lastComment.split('\n')
        .map(line => line.replace(/^\s*\*\s?/, ''))
        .filter(line => !line.startsWith('@') && line.trim())
        .slice(1, -1); // Remove /** and */
      
      if (lines.length > 0) {
        return lines.join(' ').trim();
      }
    }
    
    return 'A reusable UI component from the Comcast Business Design System.';
  }

  extractProps(content, componentName) {
    const props = [];
    
    // Find the Props interface
    const interfacePattern = new RegExp(
      `interface\\s+${componentName}Props[\\s\\S]*?\\{([\\s\\S]*?)\\}`,
      'i'
    );
    
    const interfaceMatch = content.match(interfacePattern);
    if (!interfaceMatch) return props;
    
    const propsContent = interfaceMatch[1];
    
    // Extract individual props
    const propPattern = /\/\*\*[\s\S]*?\*\/\s*([\w'"\[\]]+)(\?)?:\s*([^;\n]+)/g;
    let propMatch;
    
    while ((propMatch = propPattern.exec(propsContent)) !== null) {
      const [, name, optional, type] = propMatch;
      
      // Extract JSDoc comment
      const commentStart = propsContent.lastIndexOf('/**', propMatch.index);
      const commentEnd = propsContent.indexOf('*/', commentStart) + 2;
      const comment = propsContent.slice(commentStart, commentEnd);
      
      const description = this.extractPropDescription(comment);
      const defaultValue = this.extractDefaultValue(comment);
      const examples = this.extractPropExamples(comment);
      
      props.push({
        name: name.replace(/['"]/g, ''), // Remove quotes
        type: type.trim(),
        required: !optional,
        description,
        defaultValue,
        examples
      });
    }
    
    return props;
  }

  extractPropDescription(comment) {
    const lines = comment.split('\n')
      .map(line => line.replace(/^\s*\*\s?/, ''))
      .filter(line => !line.startsWith('@') && line.trim() && !line.includes('/**') && !line.includes('*/'))
      .join(' ')
      .trim();
    
    return lines || 'No description available.';
  }

  extractDefaultValue(comment) {
    const defaultMatch = comment.match(/@default\s+(.+)/i);
    return defaultMatch ? defaultMatch[1].trim() : undefined;
  }

  extractPropExamples(comment) {
    const exampleMatch = comment.match(/@example\s+(.+)/i);
    return exampleMatch ? [exampleMatch[1].trim()] : [];
  }

  extractVariants(content) {
    const variantMatch = content.match(/variant:\s*\{([^}]+)\}/s);
    if (!variantMatch) return [];
    
    const variants = [];
    const variantContent = variantMatch[1];
    const variantPattern = /([\w-]+):/g;
    let match;
    
    while ((match = variantPattern.exec(variantContent)) !== null) {
      variants.push(match[1]);
    }
    
    return variants;
  }

  extractSizes(content) {
    const sizeMatch = content.match(/size:\s*\{([^}]+)\}/s);
    if (!sizeMatch) return [];
    
    const sizes = [];
    const sizeContent = sizeMatch[1];
    const sizePattern = /([\w-]+):/g;
    let match;
    
    while ((match = sizePattern.exec(sizeContent)) !== null) {
      sizes.push(match[1]);
    }
    
    return sizes;
  }

  extractExamples(content) {
    // Look for @example tags in comments
    const exampleMatches = content.match(/@example[\s\S]*?(?=\*\/|@\w+)/g);
    if (!exampleMatches) return [];
    
    return exampleMatches.map(match => {
      return match
        .replace(/@example\s*/, '')
        .replace(/\*\s?/g, '')
        .trim();
    });
  }

  async generateComponentDocs() {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_PATH)) {
      fs.mkdirSync(OUTPUT_PATH, { recursive: true });
    }
    
    for (const [componentName, info] of this.components) {
      const docContent = this.generateComponentDoc(info);
      const docPath = path.join(OUTPUT_PATH, `${componentName}.md`);
      fs.writeFileSync(docPath, docContent);
      console.log(`📝 Generated docs for ${componentName}`);
    }
  }

  generateComponentDoc(info) {
    const { name, description, props, examples, variants, sizes } = info;
    
    let doc = `# ${name}

${description}\n\n`;
    
    // Import example
    doc += `## Import\n\n\`\`\`tsx\nimport { ${name} } from '@comcast/design-system';\n\`\`\`\n\n`;
    
    // Basic usage
    if (examples.length > 0) {
      doc += `## Usage\n\n\`\`\`tsx\n${examples[0]}\n\`\`\`\n\n`;
    } else {
      doc += `## Usage\n\n\`\`\`tsx\n<${name} />\n\`\`\`\n\n`;
    }
    
    // Variants
    if (variants.length > 0) {
      doc += `## Variants\n\n`;
      variants.forEach(variant => {
        doc += `### ${variant}\n\n\`\`\`tsx\n<${name} variant="${variant}" />\n\`\`\`\n\n`;
      });
    }
    
    // Sizes
    if (sizes.length > 0) {
      doc += `## Sizes\n\n`;
      sizes.forEach(size => {
        doc += `### ${size}\n\n\`\`\`tsx\n<${name} size="${size}" />\n\`\`\`\n\n`;
      });
    }
    
    // Props API
    doc += `## Props\n\n`;
    
    if (props.length > 0) {
      doc += `| Prop | Type | Required | Default | Description |\n`;
      doc += `|------|------|----------|---------|-------------|\n`;
      
      props.forEach(prop => {
        const required = prop.required ? '✅' : '❌';
        const defaultVal = prop.defaultValue || '—';
        doc += `| \`${prop.name}\` | \`${prop.type}\` | ${required} | \`${defaultVal}\` | ${prop.description} |\n`;
      });
    } else {
      doc += `No custom props. Extends standard HTML element props.\n`;
    }
    
    // Additional examples
    if (examples.length > 1) {
      doc += `\n## Examples\n\n`;
      examples.slice(1).forEach((example, index) => {
        doc += `### Example ${index + 2}\n\n\`\`\`tsx\n${example}\n\`\`\`\n\n`;
      });
    }
    
    // Accessibility
    doc += `## Accessibility\n\n`;
    doc += `This component follows WCAG 2.1 AA guidelines and includes:\n\n`;
    doc += `- Proper ARIA attributes\n`;
    doc += `- Keyboard navigation support\n`;
    doc += `- Screen reader compatibility\n`;
    doc += `- Focus management\n\n`;
    
    // Related components
    doc += `## Related Components\n\n`;
    doc += `- See [Component Overview](/docs/components) for related components\n`;
    doc += `- Check [Design Tokens](/docs/tokens) for theming\n`;
    
    return doc;
  }

  async generateIndexDoc() {
    const indexPath = path.join(OUTPUT_PATH, 'index.md');
    const componentNames = Array.from(this.components.keys()).sort();
    
    let indexContent = `# API Reference\n\n`;
    indexContent += `Complete API documentation for all components in the Comcast Business Design System.\n\n`;
    
    indexContent += `## Components\n\n`;
    componentNames.forEach(name => {
      const info = this.components.get(name);
      indexContent += `### [${name}](./${name}.md)\n\n${info.description}\n\n`;
    });
    
    indexContent += `## Quick Reference\n\n`;
    indexContent += `### Common Props\n\n`;
    indexContent += `All interactive components support these base props:\n\n`;
    indexContent += `- \`className?: string\` - Additional CSS classes\n`;
    indexContent += `- \`data-testid?: string\` - Test identifier\n`;
    indexContent += `- \`disabled?: boolean\` - Disabled state\n`;
    indexContent += `- \`loading?: boolean\` - Loading state\n`;
    indexContent += `- \`size?: 'sm' | 'default' | 'lg'\` - Component size\n`;
    indexContent += `- \`variant?: string\` - Visual variant\n\n`;
    
    indexContent += `### Accessibility Props\n\n`;
    indexContent += `All components support ARIA attributes:\n\n`;
    indexContent += `- \`aria-label?: string\`\n`;
    indexContent += `- \`aria-labelledby?: string\`\n`;
    indexContent += `- \`aria-describedby?: string\`\n`;
    indexContent += `- \`aria-invalid?: boolean\`\n`;
    indexContent += `- \`role?: string\`\n\n`;
    
    fs.writeFileSync(indexPath, indexContent);
    console.log('📚 Generated API index');
  }
}

// Run the generator
const generator = new APIDocumentationGenerator();
generator.generateDocs().catch(console.error);