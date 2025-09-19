import { chromium } from '@playwright/test';

async function takeScreenshot() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log('Navigating to Enterprise Billing page...');
    await page.goto('http://localhost:6006/?path=/story/enterprise-billing--enterprise-billing-interface');

    // Wait for the page to load
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000); // Give Storybook time to render

    console.log('Taking screenshot...');
    await page.screenshot({
      path: 'enterprise-billing-current-state.png',
      fullPage: true
    });

    // Try to find any elements that might be badges
    const allElements = await page.locator('*:has-text("Paid"), *:has-text("Pending"), *:has-text("Overdue")').all();
    console.log(`Found ${allElements.length} elements containing status text`);

    for (let i = 0; i < allElements.length; i++) {
      const element = allElements[i];
      const tagName = await element.evaluate(el => el.tagName);
      const className = await element.evaluate(el => el.className);
      const textContent = await element.evaluate(el => el.textContent);
      console.log(`Element ${i + 1}: ${tagName} - "${textContent}" - classes: ${className}`);
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

takeScreenshot();