const { chromium } = require('playwright');

async function detailedBadgeAnalysis() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // First, analyze the standalone Badge component
    console.log('=== ANALYZING STANDALONE BADGE COMPONENT ===');
    await page.goto('http://localhost:6006/?path=/story/badge--default');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Look for badge elements in the canvas area
    const canvasFrame = await page.frameLocator('[id="storybook-preview-iframe"]');

    // Try different selectors to find badges
    const badgeSelectors = [
      '[class*="badge"]',
      '[data-testid*="badge"]',
      'span[class*="inline-flex"]',
      '.badge',
      '[role="status"]'
    ];

    let standaloneBadgeInfo = null;
    for (const selector of badgeSelectors) {
      try {
        const elements = await canvasFrame.locator(selector).all();
        if (elements.length > 0) {
          console.log(`Found ${elements.length} elements with selector: ${selector}`);
          for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const text = await element.textContent();
            const classes = await element.getAttribute('class');
            const computedStyle = await element.evaluate((el) => {
              const style = window.getComputedStyle(el);
              return {
                fontSize: style.fontSize,
                padding: style.padding,
                borderRadius: style.borderRadius,
                backgroundColor: style.backgroundColor,
                color: style.color,
                fontWeight: style.fontWeight,
                display: style.display,
                alignItems: style.alignItems,
                height: style.height,
                minHeight: style.minHeight
              };
            });
            standaloneBadgeInfo = { text, classes, computedStyle };
            console.log(`Standalone Badge ${i + 1}:`, standaloneBadgeInfo);
          }
          break;
        }
      } catch (e) {
        // Continue to next selector
      }
    }

    // Now analyze the Enterprise Billing page
    console.log('\n=== ANALYZING ENTERPRISE BILLING PAGE ===');
    await page.goto('http://localhost:6006/?path=/story/enterprise-billing--enterprise-billing-interface');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const enterpriseFrame = await page.frameLocator('[id="storybook-preview-iframe"]');

    // Look for text that might be badges - specifically the "2 days overdue" text
    const possibleBadgeTexts = [
      '2 days overdue',
      '3 invoices paid',
      '2 invoices pending',
      '5 invoices this year'
    ];

    for (const text of possibleBadgeTexts) {
      try {
        const element = await enterpriseFrame.locator(`text="${text}"`).first();
        if (await element.isVisible()) {
          const classes = await element.getAttribute('class');
          const computedStyle = await element.evaluate((el) => {
            const style = window.getComputedStyle(el);
            return {
              fontSize: style.fontSize,
              padding: style.padding,
              borderRadius: style.borderRadius,
              backgroundColor: style.backgroundColor,
              color: style.color,
              fontWeight: style.fontWeight,
              display: style.display,
              alignItems: style.alignItems,
              height: style.height,
              minHeight: style.minHeight,
              margin: style.margin,
              lineHeight: style.lineHeight
            };
          });
          console.log(`Enterprise element "${text}":`, { classes, computedStyle });

          // Take a focused screenshot of this element
          await element.screenshot({
            path: `enterprise-element-${text.replace(/\s+/g, '-')}.png`
          });
        }
      } catch (e) {
        console.log(`Could not find text: "${text}"`);
      }
    }

    // Also look for any span elements that might be styled as badges
    const spans = await enterpriseFrame.locator('span').all();
    console.log(`\nFound ${spans.length} span elements on enterprise page`);

    for (let i = 0; i < Math.min(spans.length, 10); i++) {
      const span = spans[i];
      const text = await span.textContent();
      const classes = await span.getAttribute('class');

      // Only analyze spans with interesting text or classes
      if (text && (text.includes('overdue') || text.includes('pending') || text.includes('paid') || classes?.includes('badge'))) {
        const computedStyle = await span.evaluate((el) => {
          const style = window.getComputedStyle(el);
          return {
            fontSize: style.fontSize,
            padding: style.padding,
            borderRadius: style.borderRadius,
            backgroundColor: style.backgroundColor,
            color: style.color,
            fontWeight: style.fontWeight
          };
        });
        console.log(`Interesting span: "${text}"`, { classes, computedStyle });
      }
    }

  } catch (error) {
    console.error('Error during analysis:', error);
  }

  await browser.close();
}

detailedBadgeAnalysis();