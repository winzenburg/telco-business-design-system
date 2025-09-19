import { chromium } from 'playwright';

async function takeScreenshot() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to the Enterprise Reports page
    await page.goto('http://localhost:6006/?path=/docs/enterprise-reports--docs');

    // Wait for the page to load completely
    await page.waitForTimeout(3000);

    // Take a screenshot
    await page.screenshot({
      path: 'enterprise-reports-tabs-screenshot.png',
      fullPage: true
    });

    console.log('Screenshot saved as enterprise-reports-tabs-screenshot.png');

    // Try to get some information about the tabs
    const tabsInfo = await page.evaluate(() => {
      const tabsList = document.querySelector('[data-slot="tabs-list"]');
      if (tabsList) {
        const computedStyle = window.getComputedStyle(tabsList);
        return {
          backgroundColor: computedStyle.backgroundColor,
          borderColor: computedStyle.borderColor,
          borderWidth: computedStyle.borderWidth,
          height: computedStyle.height,
          className: tabsList.className
        };
      }
      return null;
    });

    console.log('Tabs styling info:', JSON.stringify(tabsInfo, null, 2));

  } catch (error) {
    console.error('Error taking screenshot:', error);
  }

  await browser.close();
}

takeScreenshot();