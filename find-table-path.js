import { chromium } from 'playwright';

async function findTablePath() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Navigating to Storybook root...');
    await page.goto('http://localhost:6006', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);

    // Try to find table in the sidebar
    console.log('Looking for Table in sidebar...');

    // Take screenshot of current state
    await page.screenshot({ path: 'storybook-root.png', fullPage: true });

    // Look for table links in the sidebar
    const tableLinks = await page.locator('a').filter({ hasText: /table/i }).all();
    console.log(`Found ${tableLinks.length} links containing 'table'`);

    for (let i = 0; i < tableLinks.length; i++) {
      const link = tableLinks[i];
      const href = await link.getAttribute('href');
      const text = await link.textContent();
      console.log(`Link ${i + 1}: "${text}" -> ${href}`);
    }

    // Try to click on Table in sidebar
    const tableLink = page.locator('a').filter({ hasText: /^Table$/i }).first();
    if (await tableLink.count() > 0) {
      console.log('Clicking on Table link...');
      await tableLink.click();
      await page.waitForTimeout(3000);

      // Take screenshot after clicking
      await page.screenshot({ path: 'after-table-click.png', fullPage: true });

      // Check current URL
      const currentUrl = page.url();
      console.log('Current URL after clicking Table:', currentUrl);

      // Look for docs tab
      const docsTab = page.locator('button').filter({ hasText: /docs/i }).first();
      if (await docsTab.count() > 0) {
        console.log('Clicking on Docs tab...');
        await docsTab.click();
        await page.waitForTimeout(2000);

        const docsUrl = page.url();
        console.log('Docs URL:', docsUrl);

        await page.screenshot({ path: 'table-docs-found.png', fullPage: true });

        // Now look for actual table elements
        const tables = await page.locator('table').count();
        console.log(`Found ${tables} table elements on docs page`);

        if (tables > 0) {
          console.log('SUCCESS: Found tables on the docs page!');
          return docsUrl;
        }
      }
    }

    // Alternative: try direct navigation to different possible paths
    const possiblePaths = [
      '/?path=/docs/table--docs',
      '/?path=/docs/components-table--docs',
      '/?path=/docs/ui-table--docs',
      '/?path=/story/table--default',
      '/?path=/docs/table--default'
    ];

    for (const path of possiblePaths) {
      console.log(`\nTrying path: ${path}`);
      await page.goto(`http://localhost:6006${path}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2000);

      const tables = await page.locator('table').count();
      console.log(`Found ${tables} table elements at ${path}`);

      if (tables > 0) {
        console.log(`SUCCESS: Found tables at ${path}`);
        await page.screenshot({ path: `table-found-${path.replace(/[^a-zA-Z0-9]/g, '_')}.png`, fullPage: true });
        return `http://localhost:6006${path}`;
      }
    }

  } catch (error) {
    console.error('Error finding table path:', error);
  } finally {
    await browser.close();
  }
}

findTablePath();