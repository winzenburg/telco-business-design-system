import { chromium } from 'playwright';
import fs from 'fs';

async function inspectTableDetailed() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Navigating to table docs page...');
    await page.goto('http://localhost:6006/?path=/docs/table--docs', { waitUntil: 'networkidle' });

    // Wait for table to load
    await page.waitForSelector('table', { timeout: 10000 });
    await page.waitForTimeout(3000);

    console.log('Taking screenshot of current state...');
    await page.screenshot({
      path: 'table-detailed-screenshot.png',
      fullPage: true
    });

    // Get detailed table analysis
    const tableAnalysis = await page.evaluate(() => {
      const analysis = {
        tables: [],
        textElements: [],
        cssVariables: {},
        colorIssues: []
      };

      // Get CSS variables
      const root = document.documentElement;
      const computedStyles = window.getComputedStyle(root);
      for (let i = 0; i < computedStyles.length; i++) {
        const propertyName = computedStyles[i];
        if (propertyName.startsWith('--') && (
          propertyName.includes('color') ||
          propertyName.includes('text') ||
          propertyName.includes('foreground') ||
          propertyName.includes('background') ||
          propertyName.includes('muted') ||
          propertyName.includes('accent')
        )) {
          analysis.cssVariables[propertyName] = computedStyles.getPropertyValue(propertyName).trim();
        }
      }

      // Analyze all tables
      const tables = document.querySelectorAll('table');
      tables.forEach((table, tableIndex) => {
        const tableData = {
          index: tableIndex,
          headers: [],
          cells: [],
          tableStyles: {}
        };

        // Get table styles
        const tableComputed = window.getComputedStyle(table);
        tableData.tableStyles = {
          color: tableComputed.color,
          backgroundColor: tableComputed.backgroundColor,
          borderColor: tableComputed.borderColor,
          boxShadow: tableComputed.boxShadow,
          border: tableComputed.border
        };

        // Analyze headers
        const headers = table.querySelectorAll('th');
        headers.forEach((header, headerIndex) => {
          const headerComputed = window.getComputedStyle(header);
          const headerData = {
            index: headerIndex,
            text: header.textContent?.trim() || '',
            styles: {
              color: headerComputed.color,
              backgroundColor: headerComputed.backgroundColor,
              fontWeight: headerComputed.fontWeight,
              fontSize: headerComputed.fontSize,
              borderColor: headerComputed.borderColor,
              borderBottom: headerComputed.borderBottom
            }
          };

          // Check for color issues
          if (headerData.styles.color === 'rgba(0, 0, 0, 0)' || headerData.styles.color === 'transparent') {
            analysis.colorIssues.push({
              type: 'table-header',
              issue: 'Transparent text color',
              text: headerData.text,
              element: `table:nth-child(${tableIndex + 1}) th:nth-child(${headerIndex + 1})`
            });
          }

          tableData.headers.push(headerData);
        });

        // Analyze cells
        const cells = table.querySelectorAll('td');
        cells.forEach((cell, cellIndex) => {
          const cellComputed = window.getComputedStyle(cell);
          const cellData = {
            index: cellIndex,
            text: cell.textContent?.trim() || '',
            styles: {
              color: cellComputed.color,
              backgroundColor: cellComputed.backgroundColor,
              fontWeight: cellComputed.fontWeight,
              fontSize: cellComputed.fontSize,
              borderColor: cellComputed.borderColor
            }
          };

          // Check for color issues
          if (cellData.styles.color === 'rgba(0, 0, 0, 0)' || cellData.styles.color === 'transparent') {
            analysis.colorIssues.push({
              type: 'table-cell',
              issue: 'Transparent text color',
              text: cellData.text,
              element: `table:nth-child(${tableIndex + 1}) td:nth-child(${cellIndex + 1})`
            });
          }

          // Check for very light colors that might be hard to read
          if (cellData.styles.color.includes('rgb(') && !cellData.styles.color.includes('rgba(')) {
            const rgb = cellData.styles.color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
            if (rgb) {
              const [, r, g, b] = rgb.map(Number);
              const lightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
              if (lightness > 0.8) {
                analysis.colorIssues.push({
                  type: 'table-cell',
                  issue: 'Very light text (may have poor contrast)',
                  text: cellData.text,
                  color: cellData.styles.color,
                  element: `table:nth-child(${tableIndex + 1}) td:nth-child(${cellIndex + 1})`
                });
              }
            }
          }

          tableData.cells.push(cellData);
        });

        analysis.tables.push(tableData);
      });

      // Get other text elements for comparison
      const textSelectors = [
        'h1, h2, h3, h4, h5, h6',
        'p',
        'span:not([class*="token"])',
        'div:not([class*="token"]):not([style*="display: none"])',
        'label',
        'button',
        'a'
      ];

      textSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        Array.from(elements).slice(0, 10).forEach((element, index) => {
          const text = element.textContent?.trim();
          if (text && text.length > 0 && text.length < 200) {
            const computed = window.getComputedStyle(element);
            analysis.textElements.push({
              selector: `${selector.split(',')[0]}:nth-child(${index + 1})`,
              text: text.substring(0, 100),
              tagName: element.tagName.toLowerCase(),
              styles: {
                color: computed.color,
                backgroundColor: computed.backgroundColor,
                fontSize: computed.fontSize,
                fontWeight: computed.fontWeight
              }
            });
          }
        });
      });

      return analysis;
    });

    // Generate comprehensive report
    const report = {
      timestamp: new Date().toISOString(),
      url: 'http://localhost:6006/?path=/docs/table--docs',
      ...tableAnalysis
    };

    // Save detailed JSON
    fs.writeFileSync('table-detailed-analysis.json', JSON.stringify(report, null, 2));

    // Generate human-readable report
    const summary = `# Detailed Table Color Analysis Report

Generated: ${new Date().toISOString()}
URL: http://localhost:6006/?path=/docs/table--docs

## Tables Found: ${report.tables.length}

${report.tables.map((table, index) => `
### Table ${index + 1}

**Table Styles:**
- Color: ${table.tableStyles.color}
- Background: ${table.tableStyles.backgroundColor}
- Border: ${table.tableStyles.border}
- Box Shadow: ${table.tableStyles.boxShadow}

**Headers (${table.headers.length}):**
${table.headers.map(header => `
- **"${header.text}"**
  - Color: ${header.styles.color}
  - Background: ${header.styles.backgroundColor}
  - Font Weight: ${header.styles.fontWeight}
  - Font Size: ${header.styles.fontSize}
  - Border Bottom: ${header.styles.borderBottom}
`).join('')}

**Sample Cells (first 10 of ${table.cells.length}):**
${table.cells.slice(0, 10).map(cell => `
- **"${cell.text}"**
  - Color: ${cell.styles.color}
  - Background: ${cell.styles.backgroundColor}
  - Font Weight: ${cell.styles.fontWeight}
`).join('')}
`).join('\n')}

## Color Issues Found: ${report.colorIssues.length}

${report.colorIssues.map(issue => `
### ${issue.type.toUpperCase()}
- **Issue**: ${issue.issue}
- **Text**: "${issue.text}"
- **Element**: ${issue.element}
${issue.color ? `- **Color**: ${issue.color}` : ''}
`).join('')}

## CSS Variables (Color-related)

${Object.entries(report.cssVariables).map(([key, value]) => `- **${key}**: ${value}`).join('\n')}

## Other Text Elements (for comparison)

${report.textElements.slice(0, 20).map(element => `
### ${element.tagName.toUpperCase()}: "${element.text.substring(0, 50)}..."
- Color: ${element.styles.color}
- Background: ${element.styles.backgroundColor}
- Font Size: ${element.styles.fontSize}
- Font Weight: ${element.styles.fontWeight}
`).join('')}

## Recommendations

Based on the analysis:

1. **Check table text colors** - Look for any transparent or very light colors
2. **Verify CSS variable resolution** - Ensure design tokens are resolving correctly
3. **Test contrast ratios** - Especially for status badges and important data
4. **Verify drop shadow removal** - Check if box-shadow has been properly removed
`;

    fs.writeFileSync('table-detailed-summary.md', summary);

    console.log('\n=== DETAILED ANALYSIS COMPLETE ===');
    console.log(`Found ${report.tables.length} tables`);
    console.log(`Found ${report.colorIssues.length} potential color issues`);
    console.log(`Analyzed ${report.cssVariables ? Object.keys(report.cssVariables).length : 0} CSS variables`);
    console.log(`Sampled ${report.textElements.length} other text elements`);

    console.log('\nFiles generated:');
    console.log('- table-detailed-screenshot.png (screenshot)');
    console.log('- table-detailed-analysis.json (detailed data)');
    console.log('- table-detailed-summary.md (human-readable report)');

    // Take a focused screenshot of just the table
    const tableElement = page.locator('table').first();
    if (await tableElement.count() > 0) {
      await tableElement.screenshot({
        path: 'table-focused-screenshot.png'
      });
      console.log('- table-focused-screenshot.png (table-only screenshot)');
    }

  } catch (error) {
    console.error('Error during detailed inspection:', error);
  } finally {
    await browser.close();
  }
}

inspectTableDetailed();