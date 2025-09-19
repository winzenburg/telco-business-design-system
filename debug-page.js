import { chromium } from '@playwright/test';

async function debugPage() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log('Navigating to localhost:6006...');
    await page.goto('http://localhost:6006');

    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);

    const title = await page.title();
    console.log('Page title:', title);

    const url = page.url();
    console.log('Current URL:', url);

    // Check if Storybook has loaded
    const storybookElements = await page.locator('[id="storybook-root"], .sidebar-container, .sb-main-padded').all();
    console.log(`Found ${storybookElements.length} Storybook elements`);

    // Try to find the Enterprise Billing story in the sidebar
    const enterpriseStories = await page.locator('text=Enterprise').all();
    console.log(`Found ${enterpriseStories.length} Enterprise items`);

    // Try to navigate to the specific story
    console.log('Trying to navigate to Enterprise Billing story...');
    await page.goto('http://localhost:6006/?path=/story/enterprise-billing--enterprise-billing-interface');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000);

    // Check if we're on the right page
    const newUrl = page.url();
    console.log('New URL:', newUrl);

    // Look for any content
    const bodyText = await page.locator('body').textContent();
    console.log('Page has content:', bodyText.length > 0);

    if (bodyText.includes('Enterprise Billing')) {
      console.log('✅ Found Enterprise Billing content!');
    } else {
      console.log('❌ No Enterprise Billing content found');
      console.log('First 200 chars of body:', bodyText.substring(0, 200));
    }

    // Take a screenshot
    await page.screenshot({
      path: 'debug-page-screenshot.png',
      fullPage: true
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

debugPage();