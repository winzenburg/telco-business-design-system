// Simple script to help debug badge display issues
const puppeteer = require('puppeteer');

async function capturePageAndBadges() {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    console.log('Navigating to Enterprise Billing page...');
    await page.goto('http://localhost:6006/?path=/story/enterprise-billing--enterprise-billing-interface', {
      waitUntil: 'networkidle0'
    });

    // Wait for the page to fully load
    await page.waitForTimeout(3000);

    // Take a full page screenshot
    console.log('Taking screenshot...');
    await page.screenshot({
      path: 'enterprise-billing-badges-debug.png',
      fullPage: true
    });

    // Get all badge elements and their computed styles
    const badgeInfo = await page.evaluate(() => {
      const badges = Array.from(document.querySelectorAll('[class*="badge"], .inline-flex.items-center.gap-1.rounded-full.border'));

      return badges.map((badge, index) => {
        const computedStyle = window.getComputedStyle(badge);
        const rect = badge.getBoundingClientRect();

        return {
          index,
          text: badge.textContent?.trim() || '',
          className: badge.className,
          width: rect.width,
          height: rect.height,
          backgroundColor: computedStyle.backgroundColor,
          color: computedStyle.color,
          borderColor: computedStyle.borderColor,
          padding: computedStyle.padding,
          overflow: computedStyle.overflow,
          textOverflow: computedStyle.textOverflow,
          whiteSpace: computedStyle.whiteSpace
        };
      });
    });

    console.log('Badge Analysis:');
    console.log(JSON.stringify(badgeInfo, null, 2));

    await browser.close();
    console.log('Screenshot saved as enterprise-billing-badges-debug.png');

  } catch (error) {
    console.error('Error:', error);
  }
}

capturePageAndBadges();