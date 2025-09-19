import { chromium } from '@playwright/test';

async function viewStoryCanvas() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log('Navigating to Enterprise Billing story...');
    await page.goto('http://localhost:6006/?path=/story/enterprise-billing--enterprise-billing-interface');

    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(3000);

    // Try to find and switch to the Canvas view
    console.log('Looking for Canvas tab...');
    const canvasTab = await page.locator('button:has-text("Canvas"), [data-selected="true"]').first();
    if (await canvasTab.count() > 0) {
      console.log('Found Canvas tab, clicking...');
      await canvasTab.click();
      await page.waitForTimeout(2000);
    }

    // Try to find the story iframe
    console.log('Looking for story iframe...');
    const iframe = await page.locator('iframe[data-is-storybook="true"], iframe[title="storybook-preview-iframe"]').first();

    if (await iframe.count() > 0) {
      console.log('Found story iframe, switching to it...');
      const frame = await iframe.contentFrame();

      if (frame) {
        // Wait for content to load in iframe
        await page.waitForTimeout(3000);

        // Take screenshot of the iframe content
        console.log('Taking screenshot of story content...');
        await page.screenshot({
          path: 'enterprise-billing-story-content.png',
          fullPage: true
        });

        // Look for badges in the iframe
        console.log('Looking for badges in story content...');

        // Try different selectors for badges
        const badgeElements = await frame.locator('div, span').all();
        console.log(`Found ${badgeElements.length} potential elements`);

        let badgeCount = 0;
        for (let i = 0; i < Math.min(50, badgeElements.length); i++) {
          const element = badgeElements[i];
          const text = await element.textContent().catch(() => '');
          const classes = await element.getAttribute('class').catch(() => '');

          if (text && (text.trim() === 'Paid' || text.trim() === 'Pending' || text.trim() === 'Overdue' || text.includes('selected'))) {
            badgeCount++;
            console.log(`Badge ${badgeCount}: "${text}" - classes: ${classes}`);

            // Get computed styles
            const styles = await element.evaluate(el => {
              const computed = getComputedStyle(el);
              return {
                display: computed.display,
                alignItems: computed.alignItems,
                gap: computed.gap,
                padding: computed.padding,
                backgroundColor: computed.backgroundColor,
                borderRadius: computed.borderRadius,
                fontSize: computed.fontSize,
                innerHTML: el.innerHTML.length > 200 ? el.innerHTML.substring(0, 200) + '...' : el.innerHTML
              };
            });
            console.log(`  Styles:`, styles);

            if (badgeCount >= 5) break; // Limit output
          }
        }

        // Also search for elements that contain icons plus text
        const iconPlusTextElements = await frame.locator('[class*="inline-flex"]').all();
        console.log(`Found ${iconPlusTextElements.length} inline-flex elements`);

        for (let i = 0; i < Math.min(10, iconPlusTextElements.length); i++) {
          const element = iconPlusTextElements[i];
          const text = await element.textContent().catch(() => '');
          const innerHTML = await element.innerHTML().catch(() => '');

          if (text && (text.includes('Paid') || text.includes('Pending') || text.includes('Overdue'))) {
            console.log(`Inline-flex badge: "${text}"`);
            console.log(`  HTML: ${innerHTML.length > 100 ? innerHTML.substring(0, 100) + '...' : innerHTML}`);

            const styles = await element.evaluate(el => {
              const computed = getComputedStyle(el);
              return {
                gap: computed.gap,
                padding: computed.padding,
                alignItems: computed.alignItems
              };
            });
            console.log(`  Styles:`, styles);
          }
        }

      } else {
        console.log('Could not access iframe content');
      }
    } else {
      console.log('No story iframe found');
      // Take screenshot of main page
      await page.screenshot({
        path: 'enterprise-billing-no-iframe.png',
        fullPage: true
      });
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

viewStoryCanvas();