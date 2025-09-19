import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function inspectTableColors() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Navigating to table docs page...');
    await page.goto('http://localhost:6006/?path=/docs/table--docs', { waitUntil: 'networkidle' });

    // Wait for the page to fully load
    await page.waitForTimeout(3000);

    // Take initial screenshot
    console.log('Taking initial screenshot...');
    await page.screenshot({
      path: 'table-docs-current-state.png',
      fullPage: true
    });

    console.log('Analyzing text colors and elements...');

    // Get all text elements and their computed styles
    const textElements = await page.evaluate(() => {
      const elements = [];

      // Helper function to get computed color
      function getComputedColor(element) {
        const computed = window.getComputedStyle(element);
        return {
          color: computed.color,
          backgroundColor: computed.backgroundColor,
          fontWeight: computed.fontWeight,
          fontSize: computed.fontSize,
          fontFamily: computed.fontFamily
        };
      }

      // Helper function to get text content safely
      function getTextContent(element) {
        return element.textContent?.trim().substring(0, 100) || '';
      }

      // Find table elements
      const tables = document.querySelectorAll('table, [role="table"]');
      tables.forEach((table, index) => {
        // Table headers
        const headers = table.querySelectorAll('th, [role="columnheader"]');
        headers.forEach((header, headerIndex) => {
          const styles = getComputedColor(header);
          elements.push({
            type: 'table-header',
            selector: `table:nth-of-type(${index + 1}) th:nth-of-type(${headerIndex + 1})`,
            text: getTextContent(header),
            ...styles,
            element: 'th'
          });
        });

        // Table cells
        const cells = table.querySelectorAll('td, [role="gridcell"], [role="cell"]');
        cells.forEach((cell, cellIndex) => {
          if (cellIndex < 10) { // Limit to first 10 cells to avoid too much data
            const styles = getComputedColor(cell);
            elements.push({
              type: 'table-cell',
              selector: `table:nth-of-type(${index + 1}) td:nth-of-type(${cellIndex + 1})`,
              text: getTextContent(cell),
              ...styles,
              element: 'td'
            });
          }
        });
      });

      // Form elements
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input, index) => {
        const styles = getComputedColor(input);
        elements.push({
          type: 'form-input',
          selector: `${input.tagName.toLowerCase()}:nth-of-type(${index + 1})`,
          text: input.placeholder || input.value || '',
          ...styles,
          element: input.tagName.toLowerCase()
        });
      });

      // Labels
      const labels = document.querySelectorAll('label');
      labels.forEach((label, index) => {
        const styles = getComputedColor(label);
        elements.push({
          type: 'form-label',
          selector: `label:nth-of-type(${index + 1})`,
          text: getTextContent(label),
          ...styles,
          element: 'label'
        });
      });

      // Navigation elements
      const navElements = document.querySelectorAll('nav, [role="navigation"], .sb-bar, .sidebar-container');
      navElements.forEach((nav, index) => {
        const textNodes = nav.querySelectorAll('a, button, span, div');
        textNodes.forEach((node, nodeIndex) => {
          if (nodeIndex < 5 && getTextContent(node)) { // Limit nav items
            const styles = getComputedColor(node);
            elements.push({
              type: 'navigation',
              selector: `nav:nth-of-type(${index + 1}) ${node.tagName.toLowerCase()}:nth-of-type(${nodeIndex + 1})`,
              text: getTextContent(node),
              ...styles,
              element: node.tagName.toLowerCase()
            });
          }
        });
      });

      // Headings
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        const styles = getComputedColor(heading);
        elements.push({
          type: 'heading',
          selector: `${heading.tagName.toLowerCase()}:nth-of-type(${index + 1})`,
          text: getTextContent(heading),
          ...styles,
          element: heading.tagName.toLowerCase()
        });
      });

      // General text content
      const paragraphs = document.querySelectorAll('p, span, div');
      paragraphs.forEach((p, index) => {
        if (index < 20 && getTextContent(p) && p.offsetParent !== null) { // Limit and check visibility
          const styles = getComputedColor(p);
          elements.push({
            type: 'text-content',
            selector: `${p.tagName.toLowerCase()}:nth-of-type(${index + 1})`,
            text: getTextContent(p),
            ...styles,
            element: p.tagName.toLowerCase()
          });
        }
      });

      return elements;
    });

    console.log('Checking for CSS variables and their resolved values...');

    // Get CSS variables and their values
    const cssVariables = await page.evaluate(() => {
      const root = document.documentElement;
      const computedStyles = window.getComputedStyle(root);
      const variables = {};

      // Get all CSS custom properties
      for (let i = 0; i < computedStyles.length; i++) {
        const propertyName = computedStyles[i];
        if (propertyName.startsWith('--')) {
          variables[propertyName] = computedStyles.getPropertyValue(propertyName).trim();
        }
      }

      return variables;
    });

    console.log('Checking for table-specific styling...');

    // Check table drop shadows and borders
    const tableStyles = await page.evaluate(() => {
      const tables = document.querySelectorAll('table');
      return Array.from(tables).map((table, index) => {
        const computed = window.getComputedStyle(table);
        return {
          tableIndex: index,
          boxShadow: computed.boxShadow,
          border: computed.border,
          borderCollapse: computed.borderCollapse,
          backgroundColor: computed.backgroundColor
        };
      });
    });

    // Generate comprehensive report
    const report = {
      timestamp: new Date().toISOString(),
      url: 'http://localhost:6006/?path=/docs/table--docs',
      textElements: textElements,
      cssVariables: cssVariables,
      tableStyles: tableStyles,
      colorAnalysis: {
        potentialIssues: [],
        recommendations: []
      }
    };

    // Analyze for potential color issues
    textElements.forEach(element => {
      // Check for very light text (might be hard to read)
      if (element.color === 'rgb(255, 255, 255)' || element.color === 'rgba(255, 255, 255, 1)') {
        report.colorAnalysis.potentialIssues.push({
          element: element.type,
          issue: 'White text - may have poor contrast',
          selector: element.selector,
          text: element.text
        });
      }

      // Check for very dark backgrounds with dark text
      if (element.color.includes('rgb(0, 0, 0)') && element.backgroundColor.includes('rgb(0, 0, 0)')) {
        report.colorAnalysis.potentialIssues.push({
          element: element.type,
          issue: 'Black text on black background',
          selector: element.selector,
          text: element.text
        });
      }

      // Check for transparent or missing colors
      if (element.color === 'rgba(0, 0, 0, 0)' || element.color === 'transparent') {
        report.colorAnalysis.potentialIssues.push({
          element: element.type,
          issue: 'Transparent text color',
          selector: element.selector,
          text: element.text
        });
      }
    });

    // Save detailed report
    fs.writeFileSync('table-color-analysis.json', JSON.stringify(report, null, 2));

    // Generate human-readable summary
    const summary = `
# Table Docs Color Analysis Report

Generated: ${new Date().toISOString()}
URL: http://localhost:6006/?path=/docs/table--docs

## Text Elements Found: ${textElements.length}

### By Type:
${Object.entries(textElements.reduce((acc, el) => {
  acc[el.type] = (acc[el.type] || 0) + 1;
  return acc;
}, {})).map(([type, count]) => `- ${type}: ${count} elements`).join('\n')}

## Potential Color Issues: ${report.colorAnalysis.potentialIssues.length}

${report.colorAnalysis.potentialIssues.map(issue => `
### ${issue.element}
- **Issue**: ${issue.issue}
- **Selector**: ${issue.selector}
- **Text**: "${issue.text}"
`).join('\n')}

## Table Styling Analysis

${tableStyles.map((style, index) => `
### Table ${index + 1}
- **Box Shadow**: ${style.boxShadow}
- **Border**: ${style.border}
- **Border Collapse**: ${style.borderCollapse}
- **Background**: ${style.backgroundColor}
`).join('\n')}

## CSS Variables (Color-related)

${Object.entries(cssVariables)
  .filter(([key]) => key.includes('color') || key.includes('text') || key.includes('foreground') || key.includes('background'))
  .map(([key, value]) => `- **${key}**: ${value}`)
  .join('\n')}

## Sample Text Elements by Type

${['table-header', 'table-cell', 'form-input', 'form-label', 'heading', 'navigation'].map(type => {
  const samples = textElements.filter(el => el.type === type).slice(0, 3);
  if (samples.length === 0) return '';

  return `
### ${type.toUpperCase()}
${samples.map(sample => `
- **Text**: "${sample.text}"
- **Color**: ${sample.color}
- **Background**: ${sample.backgroundColor}
- **Font Weight**: ${sample.fontWeight}
`).join('\n')}`;
}).filter(Boolean).join('\n')}
`;

    fs.writeFileSync('table-color-summary.md', summary);

    console.log('\n=== ANALYSIS COMPLETE ===');
    console.log(`Found ${textElements.length} text elements`);
    console.log(`Identified ${report.colorAnalysis.potentialIssues.length} potential color issues`);
    console.log(`Found ${tableStyles.length} tables`);
    console.log('\nFiles generated:');
    console.log('- table-docs-current-state.png (screenshot)');
    console.log('- table-color-analysis.json (detailed data)');
    console.log('- table-color-summary.md (human-readable report)');

    // Take focused screenshots of tables
    const tables = await page.locator('table, [role="table"]');
    const tableCount = await tables.count();

    for (let i = 0; i < tableCount; i++) {
      await tables.nth(i).screenshot({
        path: `table-${i + 1}-screenshot.png`
      });
    }

    console.log(`\nCaptured ${tableCount} individual table screenshots`);

  } catch (error) {
    console.error('Error during inspection:', error);
  } finally {
    await browser.close();
  }
}

inspectTableColors();