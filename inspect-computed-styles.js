import { chromium } from 'playwright';
import fs from 'fs';

async function inspectComputedStyles() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Navigating to table docs...');
    await page.goto('http://localhost:6006/?path=/docs/table--docs', { waitUntil: 'networkidle' });

    // Wait longer for content to load
    await page.waitForTimeout(5000);

    // Try to find any table-related elements with different strategies
    const analysis = await page.evaluate(() => {
      const result = {
        foundElements: [],
        cssVariables: {},
        allTextColors: [],
        domInfo: {
          totalElements: document.querySelectorAll('*').length,
          hasTable: !!document.querySelector('table'),
          hasTableCell: !!document.querySelector('td, th'),
          hasInvoice: document.body.textContent.includes('INV001')
        }
      };

      // Get all CSS variables from :root
      const rootStyles = window.getComputedStyle(document.documentElement);
      for (let i = 0; i < rootStyles.length; i++) {
        const prop = rootStyles[i];
        if (prop.startsWith('--')) {
          const value = rootStyles.getPropertyValue(prop).trim();
          if (value && (prop.includes('color') || prop.includes('text') || prop.includes('foreground') ||
                       prop.includes('background') || prop.includes('primary') || prop.includes('accent'))) {
            result.cssVariables[prop] = value;
          }
        }
      }

      // Look for table elements with various selectors
      const selectors = [
        'table', 'tbody', 'thead', 'tr', 'td', 'th',
        '[role="table"]', '[role="row"]', '[role="cell"]', '[role="columnheader"]',
        'div[class*="table"]', '*:contains("Invoice")', '*:contains("Status")',
        '.table-cell', '.table-header', '.table-row'
      ];

      selectors.forEach(selector => {
        try {
          const elements = document.querySelectorAll(selector);
          if (elements.length > 0) {
            result.foundElements.push({
              selector,
              count: elements.length,
              samples: Array.from(elements).slice(0, 3).map(el => ({
                tagName: el.tagName,
                className: el.className,
                textContent: el.textContent?.trim().substring(0, 50) || '',
                computed: {
                  color: window.getComputedStyle(el).color,
                  backgroundColor: window.getComputedStyle(el).backgroundColor,
                  display: window.getComputedStyle(el).display
                }
              }))
            });
          }
        } catch (e) {
          // Skip selectors that cause errors
        }
      });

      // Get all unique text colors used on the page
      const allElements = document.querySelectorAll('*');
      const colorSet = new Set();
      Array.from(allElements).forEach(el => {
        if (el.textContent && el.textContent.trim()) {
          const computed = window.getComputedStyle(el);
          if (computed.color !== 'rgba(0, 0, 0, 0)') {
            colorSet.add(computed.color);
          }
        }
      });
      result.allTextColors = Array.from(colorSet);

      // Look for specific text that should be in tables
      const textElements = [];
      ['INV001', 'INV002', 'Status', 'Method', 'Amount', 'Paid', 'Pending', 'Unpaid', 'Credit Card', 'PayPal'].forEach(searchText => {
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null,
          false
        );

        let textNode;
        while (textNode = walker.nextNode()) {
          if (textNode.textContent.includes(searchText)) {
            const parentElement = textNode.parentElement;
            if (parentElement) {
              const computed = window.getComputedStyle(parentElement);
              textElements.push({
                text: searchText,
                element: parentElement.tagName,
                className: parentElement.className,
                color: computed.color,
                backgroundColor: computed.backgroundColor,
                fontWeight: computed.fontWeight
              });
            }
          }
        }
      });

      result.tableTextElements = textElements;

      return result;
    });

    // Save comprehensive analysis
    fs.writeFileSync('computed-styles-analysis.json', JSON.stringify(analysis, null, 2));

    // Generate human-readable report
    const report = `# Computed Styles Analysis Report

Generated: ${new Date().toISOString()}
URL: http://localhost:6006/?path=/docs/table--docs

## DOM Information

- Total Elements: ${analysis.domInfo.totalElements}
- Has Table: ${analysis.domInfo.hasTable ? '✅' : '❌'}
- Has Table Cells: ${analysis.domInfo.hasTableCell ? '✅' : '❌'}
- Contains Invoice Data: ${analysis.domInfo.hasInvoice ? '✅' : '❌'}

## Elements Found by Selector

${analysis.foundElements.map(item => `
### ${item.selector} (${item.count} found)
${item.samples.map(sample => `
- **${sample.tagName}** "${sample.textContent}"
  - Class: ${sample.className}
  - Color: ${sample.computed.color}
  - Background: ${sample.computed.backgroundColor}
  - Display: ${sample.computed.display}
`).join('')}`).join('')}

## Table-Specific Text Elements

${analysis.tableTextElements.map(item => `
### "${item.text}"
- Element: ${item.element}
- Class: ${item.className}
- Color: ${item.color}
- Background: ${item.backgroundColor}
- Font Weight: ${item.fontWeight}
`).join('')}

## CSS Variables Found: ${Object.keys(analysis.cssVariables).length}

${Object.entries(analysis.cssVariables).map(([key, value]) => `- **${key}**: ${value}`).join('\n')}

## All Text Colors Used on Page (${analysis.allTextColors.length} unique)

${analysis.allTextColors.map(color => `- ${color}`).join('\n')}

## Key Findings

1. **Table Detection**: ${analysis.domInfo.hasTable ? 'Tables found in DOM' : 'No tables found'}
2. **Data Presence**: ${analysis.domInfo.hasInvoice ? 'Invoice data is present' : 'No invoice data found'}
3. **CSS Variables**: ${Object.keys(analysis.cssVariables).length > 0 ? `${Object.keys(analysis.cssVariables).length} design tokens loaded` : 'No CSS variables detected'}
4. **Color Variety**: ${analysis.allTextColors.length} different text colors in use
`;

    fs.writeFileSync('computed-styles-report.md', report);

    console.log('\n=== COMPUTED STYLES ANALYSIS COMPLETE ===');
    console.log(`DOM elements: ${analysis.domInfo.totalElements}`);
    console.log(`Has table: ${analysis.domInfo.hasTable}`);
    console.log(`Has table cells: ${analysis.domInfo.hasTableCell}`);
    console.log(`CSS variables found: ${Object.keys(analysis.cssVariables).length}`);
    console.log(`Unique text colors: ${analysis.allTextColors.length}`);
    console.log(`Elements found: ${analysis.foundElements.length}`);
    console.log(`Table text elements: ${analysis.tableTextElements.length}`);

  } catch (error) {
    console.error('Error during analysis:', error);
  } finally {
    await browser.close();
  }
}

inspectComputedStyles();