const { chromium } = require('playwright');

async function compareBadges() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Take screenshot of standalone Badge component
    console.log('Navigating to standalone Badge component...');
    await page.goto('http://localhost:6006/?path=/story/badge--default');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Wait for component to fully render

    // Take full page screenshot for standalone
    await page.screenshot({
      path: 'badge-standalone.png',
      fullPage: true
    });
    console.log('Standalone Badge screenshot saved as badge-standalone.png');

    // Take screenshot of Enterprise Billing page with badges
    console.log('Navigating to Enterprise Billing page...');
    await page.goto('http://localhost:6006/?path=/story/enterprise-billing--enterprise-billing-interface');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Wait for component to fully render

    // Take full page screenshot for enterprise context
    await page.screenshot({
      path: 'badge-enterprise-full.png',
      fullPage: true
    });
    console.log('Enterprise Billing full page screenshot saved as badge-enterprise-full.png');

    // Try to find and screenshot specific badge elements in the enterprise page
    const badges = await page.locator('[class*="badge"], [data-testid*="badge"]').all();
    console.log(`Found ${badges.length} badge elements on enterprise page`);

    if (badges.length > 0) {
      // Take a focused screenshot of the first few badges
      const firstBadge = badges[0];
      await firstBadge.screenshot({ path: 'badge-enterprise-focused.png' });
      console.log('Focused badge screenshot saved as badge-enterprise-focused.png');
    }

    // Get more information about the page structure
    const pageTitle = await page.title();
    console.log('Page title:', pageTitle);

    // Get information about badge elements
    for (let i = 0; i < Math.min(badges.length, 5); i++) {
      const badge = badges[i];
      const classList = await badge.getAttribute('class');
      const textContent = await badge.textContent();
      console.log(`Badge ${i + 1}:`, { classList, textContent });
    }

  } catch (error) {
    console.error('Error during badge comparison:', error);
  }

  await browser.close();
}

compareBadges();