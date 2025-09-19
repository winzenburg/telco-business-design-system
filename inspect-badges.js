import { chromium } from '@playwright/test';

async function inspectBadges() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // Navigate to the Enterprise Billing page
    await page.goto('http://localhost:6006/?path=/story/enterprise-billing--enterprise-billing-interface');

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Take a screenshot
    await page.screenshot({
      path: 'enterprise-billing-badges-screenshot.png',
      fullPage: true
    });

    // Find and inspect badges with icons
    const statusBadges = await page.locator('[data-testid*="badge"], .inline-flex.items-center.gap-1.rounded-full').all();

    console.log(`Found ${statusBadges.length} potential badge elements`);

    // Inspect the first few badges
    for (let i = 0; i < Math.min(3, statusBadges.length); i++) {
      const badge = statusBadges[i];
      const boundingBox = await badge.boundingBox();
      const computedStyle = await badge.evaluate(el => {
        const styles = getComputedStyle(el);
        return {
          display: styles.display,
          alignItems: styles.alignItems,
          gap: styles.gap,
          padding: styles.padding,
          paddingLeft: styles.paddingLeft,
          paddingRight: styles.paddingRight,
          paddingTop: styles.paddingTop,
          paddingBottom: styles.paddingBottom,
          className: el.className,
          textContent: el.textContent,
          innerHTML: el.innerHTML
        };
      });

      console.log(`Badge ${i + 1}:`, {
        boundingBox,
        computedStyle
      });
    }

    // Look specifically for status badges in the table
    const tableBadges = await page.locator('table [class*="inline-flex"][class*="items-center"]').all();
    console.log(`Found ${tableBadges.length} table badges`);

    for (let i = 0; i < Math.min(3, tableBadges.length); i++) {
      const badge = tableBadges[i];
      const text = await badge.textContent();
      const styles = await badge.evaluate(el => {
        const computed = getComputedStyle(el);
        return {
          gap: computed.gap,
          padding: computed.padding,
          display: computed.display,
          alignItems: computed.alignItems
        };
      });

      console.log(`Table Badge ${i + 1}: "${text}"`, styles);
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

inspectBadges();