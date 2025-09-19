import { chromium } from 'playwright';
import fs from 'fs';

async function inspectTableFinal() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // First go to main storybook page
    console.log('Navigating to Storybook...');
    await page.goto('http://localhost:6006', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // Look for Table in the sidebar and click it
    console.log('Looking for Table in sidebar...');
    await page.locator('text=Table').first().click();
    await page.waitForTimeout(2000);

    // Click on Docs tab if it exists
    const docsTab = page.locator('button:has-text("Docs")').first();
    if (await docsTab.count() > 0) {
      console.log('Clicking Docs tab...');
      await docsTab.click();
      await page.waitForTimeout(3000);
    }

    const currentUrl = page.url();
    console.log('Current URL:', currentUrl);

    // Take screenshot of current state
    await page.screenshot({
      path: 'table-final-screenshot.png',
      fullPage: true
    });

    // Wait for content to load and check for tables
    await page.waitForTimeout(3000);
    const tableCount = await page.locator('table').count();
    console.log(`Found ${tableCount} tables on the page`);

    if (tableCount === 0) {
      console.log('No tables found, trying alternative navigation...');

      // Try navigating directly to different stories
      const stories = ['Default', 'Striped', 'SortableTable', 'ZebraStriped'];

      for (const story of stories) {
        console.log(`\nTrying story: ${story}`);
        await page.goto(`http://localhost:6006/?path=/story/table--${story.toLowerCase()}`, { waitUntil: 'networkidle' });
        await page.waitForTimeout(2000);

        const storyTableCount = await page.locator('table').count();
        console.log(`Found ${storyTableCount} tables in ${story} story`);

        if (storyTableCount > 0) {
          await page.screenshot({ path: `table-${story.toLowerCase()}-screenshot.png`, fullPage: true });
          break;
        }
      }
    }

    // Get detailed color analysis of all text elements
    const analysis = await page.evaluate(() => {
      const result = {
        url: window.location.href,
        tables: [],
        textElements: [],
        cssVariables: {},
        colorIssues: [],
        pageInfo: {
          title: document.title,
          hasStorybook: !!document.querySelector('[class*="sidebar"]'),
          hasTable: document.querySelectorAll('table').length > 0
        }
      };

      // Get CSS variables
      const computedStyles = window.getComputedStyle(document.documentElement);
      for (let i = 0; i < computedStyles.length; i++) {
        const prop = computedStyles[i];
        if (prop.startsWith('--') && (
          prop.includes('color') || prop.includes('text') || prop.includes('foreground') ||
          prop.includes('background') || prop.includes('muted') || prop.includes('primary')
        )) {
          result.cssVariables[prop] = computedStyles.getPropertyValue(prop).trim();
        }
      }

      // Analyze tables
      const tables = document.querySelectorAll('table');
      tables.forEach((table, tableIndex) => {
        const tableData = {
          index: tableIndex,
          styles: {},
          headers: [],
          cells: []
        };

        const tableComputed = window.getComputedStyle(table);
        tableData.styles = {
          color: tableComputed.color,
          backgroundColor: tableComputed.backgroundColor,
          boxShadow: tableComputed.boxShadow,
          border: tableComputed.border
        };

        // Analyze table headers
        const headers = table.querySelectorAll('th');
        headers.forEach((header, index) => {
          const computed = window.getComputedStyle(header);
          tableData.headers.push({
            index,
            text: header.textContent?.trim() || '',
            color: computed.color,
            backgroundColor: computed.backgroundColor,
            fontWeight: computed.fontWeight,
            borderBottom: computed.borderBottom
          });
        });

        // Analyze table cells (first 10)
        const cells = table.querySelectorAll('td');
        Array.from(cells).slice(0, 10).forEach((cell, index) => {
          const computed = window.getComputedStyle(cell);
          const cellData = {
            index,
            text: cell.textContent?.trim() || '',
            color: computed.color,
            backgroundColor: computed.backgroundColor,
            fontWeight: computed.fontWeight
          };

          // Check for color issues
          if (cellData.color === 'rgba(0, 0, 0, 0)' || cellData.color === 'transparent') {
            result.colorIssues.push({
              type: 'table-cell',
              issue: 'Transparent text color',
              text: cellData.text,
              element: `table:nth-child(${tableIndex + 1}) td:nth-child(${index + 1})`
            });
          }

          tableData.cells.push(cellData);
        });

        result.tables.push(tableData);
      });

      // Get sample text elements for comparison
      const selectors = ['h1', 'h2', 'h3', 'p', 'span', 'div', 'button', 'a', 'label'];
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        Array.from(elements).slice(0, 5).forEach((el, index) => {
          const text = el.textContent?.trim();
          if (text && text.length > 0 && text.length < 150 && el.offsetParent !== null) {
            const computed = window.getComputedStyle(el);
            result.textElements.push({
              selector: `${selector}:nth-child(${index + 1})`,
              text: text.substring(0, 80),
              color: computed.color,
              backgroundColor: computed.backgroundColor,
              fontSize: computed.fontSize,
              fontWeight: computed.fontWeight
            });
          }
        });
      });

      return result;
    });

    // Save analysis
    fs.writeFileSync('table-final-analysis.json', JSON.stringify(analysis, null, 2));

    // Generate report
    const report = `# Final Table Color Analysis Report

Generated: ${new Date().toISOString()}
Current URL: ${analysis.url}
Page Title: ${analysis.pageInfo.title}
Has Storybook UI: ${analysis.pageInfo.hasStorybook}
Tables Found: ${analysis.tables.length}

## Page Analysis

${analysis.pageInfo.hasTable ? '✅ Tables found on page' : '❌ No tables found on page'}
${analysis.pageInfo.hasStorybook ? '✅ Storybook interface detected' : '❌ No Storybook interface'}

## Tables Analysis (${analysis.tables.length} found)

${analysis.tables.map((table, index) => `
### Table ${index + 1}

**Table Styles:**
- Text Color: ${table.styles.color}
- Background Color: ${table.styles.backgroundColor}
- Box Shadow: ${table.styles.boxShadow}
- Border: ${table.styles.border}

**Headers (${table.headers.length}):**
${table.headers.map(h => `- "${h.text}" → Color: ${h.color}, Background: ${h.backgroundColor}, Weight: ${h.fontWeight}`).join('\n')}

**Sample Cells (${table.cells.length}):**
${table.cells.map(c => `- "${c.text}" → Color: ${c.color}, Background: ${c.backgroundColor}`).join('\n')}
`).join('')}

## Color Issues Found: ${analysis.colorIssues.length}

${analysis.colorIssues.map(issue => `- **${issue.type}**: ${issue.issue} - "${issue.text}" (${issue.element})`).join('\n')}

## CSS Variables (Color-related)

${Object.entries(analysis.cssVariables).length > 0 ?
  Object.entries(analysis.cssVariables).map(([key, value]) => `- **${key}**: ${value}`).join('\n') :
  'No color-related CSS variables found'
}

## Sample Text Elements (for color comparison)

${analysis.textElements.slice(0, 15).map(el => `
- **${el.selector}**: "${el.text}"
  - Color: ${el.color}
  - Background: ${el.backgroundColor}
  - Font Size: ${el.fontSize}
`).join('')}

## Recommendations

1. **Drop Shadow Status**: ${analysis.tables.length > 0 && analysis.tables[0].styles.boxShadow !== 'none' ?
   '⚠️ Tables still have box-shadow - should be removed' :
   '✅ Tables have no box-shadow'}

2. **Text Color Issues**: ${analysis.colorIssues.length > 0 ?
   `⚠️ Found ${analysis.colorIssues.length} text color issues that need fixing` :
   '✅ No obvious text color issues detected'}

3. **CSS Variables**: ${Object.keys(analysis.cssVariables).length > 0 ?
   `✅ Found ${Object.keys(analysis.cssVariables).length} color-related CSS variables` :
   '⚠️ No color CSS variables detected - may indicate theming issues'}
`;

    fs.writeFileSync('table-final-report.md', report);

    console.log('\n=== FINAL ANALYSIS COMPLETE ===');
    console.log('Current URL:', currentUrl);
    console.log(`Tables found: ${analysis.tables.length}`);
    console.log(`Color issues: ${analysis.colorIssues.length}`);
    console.log(`CSS variables: ${Object.keys(analysis.cssVariables).length}`);
    console.log(`Text elements analyzed: ${analysis.textElements.length}`);
    console.log('\nFiles generated:');
    console.log('- table-final-screenshot.png');
    console.log('- table-final-analysis.json');
    console.log('- table-final-report.md');

  } catch (error) {
    console.error('Error during final inspection:', error);
  } finally {
    await browser.close();
  }
}

inspectTableFinal();