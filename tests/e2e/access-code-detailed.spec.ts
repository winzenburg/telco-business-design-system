import { test, expect } from '@playwright/test';

const LOG_ENDPOINT = 'http://127.0.0.1:7243/ingest/39aa3398-5279-48dc-a9ad-352e95fa7d81';

async function log(data: any) {
  try {
    await fetch(LOG_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        timestamp: Date.now(),
        sessionId: 'debug-session',
        runId: 'detailed-test'
      })
    });
  } catch (e) {}
}

test.describe('Access Code Detailed Analysis', () => {
  test('should test all aspects of access code behavior', async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.waitForSelector('.login-box', { state: 'visible' });

    const input = page.locator('#login-password');
    const errorDiv = page.locator('#login-error');
    const button = page.locator('.login-button');

    // #region agent log - Test 1: Wrong password shows error
    await input.fill('wrongpassword');
    await button.click();
    await page.waitForTimeout(300);
    
    const errorVisibleAfterWrong = await errorDiv.isVisible();
    const errorHasShowClass = await errorDiv.evaluate(el => el.classList.contains('show'));
    const errorComputedDisplay = await errorDiv.evaluate(el => window.getComputedStyle(el).display);
    
    await log({
      location: 'test:35',
      message: 'After wrong password',
      hypothesisId: 'ERROR_DISPLAY',
      data: { 
        errorVisibleAfterWrong, 
        errorHasShowClass,
        errorComputedDisplay,
        expectedVisible: true 
      }
    });
    // #endregion

    // #region agent log - Test 2: Correct password (demo2026) hides modal
    await input.fill('demo2026');
    await button.click();
    await page.waitForTimeout(300);
    
    const modalAfterCorrect = await page.locator('#login-overlay').evaluate(el => ({
      hasHiddenClass: el.classList.contains('hidden'),
      computedDisplay: window.getComputedStyle(el).display,
      isVisible: window.getComputedStyle(el).display !== 'none'
    }));
    
    const dashboardVisible = await page.locator('.main-content').isVisible();
    
    await log({
      location: 'test:62',
      message: 'After correct password (demo2026)',
      hypothesisId: 'MODAL_CLOSE',
      data: { 
        modalAfterCorrect,
        dashboardVisible,
        expectedModalHidden: true
      }
    });
    // #endregion

    // #region agent log - Test 3: Check if CSS placeholder is causing issues
    const placeholderStyles = await input.evaluate(el => {
      const placeholder = window.getComputedStyle(el, '::placeholder');
      const input = window.getComputedStyle(el);
      return {
        placeholderColor: placeholder.color,
        placeholderOpacity: placeholder.opacity,
        placeholderFontSize: placeholder.fontSize,
        inputColor: input.color,
        inputDisplay: input.display,
        inputPointerEvents: input.pointerEvents
      };
    });
    
    await log({
      location: 'test:86',
      message: 'Placeholder and input styles',
      hypothesisId: 'CSS_IMPACT',
      data: placeholderStyles
    });
    // #endregion

    // #region agent log - Test 4: Check if form handler is working
    const formInfo = await page.evaluate(() => {
      const form = document.querySelector('.login-form');
      const input = document.getElementById('login-password');
      return {
        formExists: !!form,
        formOnSubmit: form?.getAttribute('onsubmit'),
        inputValue: (input as HTMLInputElement)?.value,
        inputType: (input as HTMLInputElement)?.type
      };
    });
    
    await log({
      location: 'test:105',
      message: 'Form handler check',
      hypothesisId: 'HANDLER_BROKEN',
      data: formInfo
    });
    // #endregion

    // #region agent log - Test 5: Visual contrast measurement
    const contrastData = await input.evaluate(el => {
      function getLuminance(r: number, g: number, b: number): number {
        const [rs, gs, bs] = [r, g, b].map(c => {
          c = c / 255;
          return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
      }
      
      function getContrastRatio(rgb1: [number, number, number], rgb2: [number, number, number]): number {
        const lum1 = getLuminance(...rgb1);
        const lum2 = getLuminance(...rgb2);
        const lighter = Math.max(lum1, lum2);
        const darker = Math.min(lum1, lum2);
        return (lighter + 0.05) / (darker + 0.05);
      }
      
      function parseRgb(rgbString: string): [number, number, number] {
        const match = rgbString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!match) return [0, 0, 0];
        return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
      }
      
      const placeholder = window.getComputedStyle(el, '::placeholder');
      const parent = el.closest('.login-box');
      const bg = parent ? window.getComputedStyle(parent).backgroundColor : 'rgb(255, 255, 255)';
      
      const placeholderRgb = parseRgb(placeholder.color);
      const bgRgb = parseRgb(bg);
      const ratio = getContrastRatio(placeholderRgb, bgRgb);
      
      return {
        placeholderColor: placeholder.color,
        backgroundColor: bg,
        contrastRatio: ratio,
        passesWCAG_AA: ratio >= 4.5
      };
    });
    
    await log({
      location: 'test:154',
      message: 'Contrast measurement',
      hypothesisId: 'CONTRAST_TOO_DARK',
      data: contrastData
    });
    // #endregion

    await page.screenshot({ path: 'test-results/access-code-detailed.png', fullPage: true });
  });
});
