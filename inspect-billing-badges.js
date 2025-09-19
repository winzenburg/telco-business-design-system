import { chromium } from '@playwright/test';

async function inspectBillingBadges() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log('Navigating to Enterprise Billing story...');
    await page.goto('http://localhost:6006/?path=/story/enterprise-billing--enterprise-billing-interface');

    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000);

    // Scroll down to see the full page content
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(1000);

    // Take a full page screenshot
    console.log('Taking full page screenshot...');
    await page.screenshot({
      path: 'enterprise-billing-full-page.png',
      fullPage: true
    });

    // Look for badge elements using various selectors
    console.log('Looking for badge elements...');

    // Look for elements with badge-like classes
    const badgeSelectors = [
      '.inline-flex.items-center',
      '[class*="rounded-full"]',
      '[class*="badge"]',
      'div:has-text("Paid")',
      'div:has-text("Pending")',
      'div:has-text("Overdue")'
    ];

    for (const selector of badgeSelectors) {
      const elements = await page.locator(selector).all();
      console.log(`Selector "${selector}" found ${elements.length} elements`);

      for (let i = 0; i < Math.min(3, elements.length); i++) {
        const element = elements[i];
        const text = await element.textContent().catch(() => '');
        const classes = await element.getAttribute('class').catch(() => '');

        if (text && (text.includes('Paid') || text.includes('Pending') || text.includes('Overdue'))) {
          console.log(`  Match ${i + 1}: "${text}" - classes: ${classes}`);

          // Get computed styles for this badge
          const styles = await element.evaluate(el => {
            const computed = getComputedStyle(el);
            return {
              display: computed.display,
              alignItems: computed.alignItems,
              gap: computed.gap,
              padding: computed.padding,
              paddingLeft: computed.paddingLeft,
              paddingRight: computed.paddingRight,
              fontSize: computed.fontSize,
              borderRadius: computed.borderRadius,
              backgroundColor: computed.backgroundColor,
              innerHTML: el.innerHTML
            };
          });
          console.log(`    Computed styles:`, styles);
        }
      }
    }

    // Specifically look in the table area
    console.log('\nLooking in table for status badges...');
    const tableStatusElements = await page.locator('table td').all();

    for (let i = 0; i < tableStatusElements.length; i++) {
      const cell = tableStatusElements[i];
      const text = await cell.textContent();

      if (text && (text.includes('Paid') || text.includes('Pending') || text.includes('Overdue'))) {
        console.log(`Table cell ${i + 1}: "${text}"`);

        // Look for badge element inside this cell
        const badgeInCell = await cell.locator('.inline-flex, [class*="rounded"]').first();
        if (await badgeInCell.count() > 0) {
          const badgeStyles = await badgeInCell.evaluate(el => {
            const computed = getComputedStyle(el);
            return {
              gap: computed.gap,
              padding: computed.padding,
              display: computed.display,
              alignItems: computed.alignItems,
              innerHTML: el.innerHTML,
              outerHTML: el.outerHTML
            };
          });
          console.log(`    Badge styles:`, badgeStyles);
        }
      }
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

inspectBillingBadges();