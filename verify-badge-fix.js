import { chromium } from '@playwright/test';

async function verifyBadgeFix() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log('Navigating to Enterprise Billing story...');
    await page.goto('http://localhost:6006/?path=/story/enterprise-billing--enterprise-billing-interface');

    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(5000); // Give more time for Storybook to reload

    // Look for the story iframe
    const iframe = await page.locator('iframe[data-is-storybook="true"], iframe[title="storybook-preview-iframe"]').first();

    if (await iframe.count() > 0) {
      console.log('Found story iframe, accessing content...');
      const frame = await iframe.contentFrame();

      if (frame) {
        await page.waitForTimeout(3000);

        // Take a screenshot to see the current state
        console.log('Taking screenshot after badge fix...');
        await page.screenshot({
          path: 'badges-after-fix.png',
          fullPage: true
        });

        // Look specifically for status badges
        console.log('Looking for status badges...');

        // Try to find badges with status text
        const statusTexts = ['Paid', 'Pending', 'Overdue'];

        for (const statusText of statusTexts) {
          const badgeElements = await frame.locator(`*:has-text("${statusText}")`).all();
          console.log(`Found ${badgeElements.length} elements containing "${statusText}"`);

          for (let i = 0; i < Math.min(2, badgeElements.length); i++) {
            const element = badgeElements[i];
            const classes = await element.getAttribute('class').catch(() => '');

            if (classes && (classes.includes('inline-flex') || classes.includes('rounded'))) {
              const styles = await element.evaluate(el => {
                const computed = getComputedStyle(el);
                return {
                  gap: computed.gap,
                  display: computed.display,
                  alignItems: computed.alignItems,
                  padding: computed.padding,
                  innerHTML: el.innerHTML.length > 150 ? el.innerHTML.substring(0, 150) + '...' : el.innerHTML
                };
              });

              console.log(`${statusText} Badge ${i + 1}:`, styles);
            }
          }
        }

        // Try a more specific search within table cells
        console.log('\nSearching for badges in table cells...');
        const tableCells = await frame.locator('table td').all();

        for (let i = 0; i < tableCells.length; i++) {
          const cell = tableCells[i];
          const text = await cell.textContent();

          if (text && (text.includes('Paid') || text.includes('Pending') || text.includes('Overdue'))) {
            console.log(`Table cell with status: "${text.trim()}"`);

            // Look for badge within this cell
            const badgeInCell = await cell.locator('[class*="inline-flex"]').first();
            if (await badgeInCell.count() > 0) {
              const badgeStyles = await badgeInCell.evaluate(el => {
                const computed = getComputedStyle(el);
                return {
                  gap: computed.gap,
                  display: computed.display,
                  alignItems: computed.alignItems,
                  justifyContent: computed.justifyContent,
                  padding: computed.padding,
                  innerHTML: el.innerHTML
                };
              });

              console.log(`  Badge styles:`, badgeStyles);
            }
          }
        }

      } else {
        console.log('Could not access iframe content');
      }
    } else {
      console.log('No iframe found, taking main page screenshot');
      await page.screenshot({
        path: 'badges-no-iframe-after-fix.png',
        fullPage: true
      });
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

verifyBadgeFix();