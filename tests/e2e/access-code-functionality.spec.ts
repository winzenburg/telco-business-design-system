import { test, expect } from '@playwright/test';

/**
 * Access Code Functionality Test
 * Tests that the access code input and login work correctly
 */

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
        runId: 'access-code-test'
      })
    });
  } catch (e) {
    // Ignore fetch errors in logging
  }
}

test.describe('Access Code Functionality', () => {
  test('should verify access code input and login work correctly', async ({ page }) => {
    // #region agent log - Hypothesis A: Check visual appearance
    await log({
      location: 'test:12',
      message: 'Starting access code functionality test',
      hypothesisId: 'A',
      data: {}
    });
    // #endregion

    await page.goto('http://localhost:8080');
    
    // Wait for login modal
    await page.waitForSelector('.login-box', { state: 'visible' });

    // #region agent log - Hypothesis A: Capture placeholder color
    const placeholderColor = await page.locator('#login-password').evaluate(el => {
      return window.getComputedStyle(el, '::placeholder').color;
    });
    
    await log({
      location: 'test:28',
      message: 'Placeholder color detected',
      hypothesisId: 'A',
      data: { placeholderColor }
    });
    // #endregion

    // #region agent log - Hypothesis B: Test input field accepts text
    const inputField = page.locator('#login-password');
    const inputVisible = await inputField.isVisible();
    const inputEnabled = await inputField.isEnabled();
    
    await log({
      location: 'test:41',
      message: 'Input field state before typing',
      hypothesisId: 'B,C',
      data: { inputVisible, inputEnabled }
    });
    // #endregion

    // Try to type in the field
    await inputField.click();
    
    // #region agent log - Hypothesis C: Test typing
    await inputField.fill('test123');
    const inputValue = await inputField.inputValue();
    
    await log({
      location: 'test:55',
      message: 'After typing test value',
      hypothesisId: 'C',
      data: { inputValue, expectedValue: 'test123', matches: inputValue === 'test123' }
    });
    // #endregion

    // #region agent log - Hypothesis B: Test form submission
    const loginButton = page.locator('.login-button');
    const buttonVisible = await loginButton.isVisible();
    const buttonEnabled = await loginButton.isEnabled();
    const buttonText = await loginButton.textContent();
    
    await log({
      location: 'test:69',
      message: 'Login button state',
      hypothesisId: 'B',
      data: { buttonVisible, buttonEnabled, buttonText }
    });
    // #endregion

    // Click login button
    await loginButton.click();
    
    // #region agent log - Hypothesis B: Check what happened after click
    // Wait a bit for any JS to execute
    await page.waitForTimeout(500);
    
    const errorVisible = await page.locator('.login-error').isVisible();
    const errorText = errorVisible ? await page.locator('.login-error span').textContent() : null;
    const modalStillVisible = await page.locator('.login-box').isVisible();
    
    await log({
      location: 'test:87',
      message: 'After clicking login button',
      hypothesisId: 'B',
      data: { errorVisible, errorText, modalStillVisible }
    });
    // #endregion

    // #region agent log - Hypothesis E: Check CSS is loaded
    const inputStyles = await inputField.evaluate(el => {
      const styles = window.getComputedStyle(el);
      const placeholderStyles = window.getComputedStyle(el, '::placeholder');
      return {
        inputColor: styles.color,
        inputBackground: styles.backgroundColor,
        inputBorder: styles.border,
        placeholderColor: placeholderStyles.color,
        placeholderOpacity: placeholderStyles.opacity
      };
    });
    
    await log({
      location: 'test:107',
      message: 'All input styles',
      hypothesisId: 'E',
      data: inputStyles
    });
    // #endregion

    // Test with correct password
    await inputField.fill('admin123');
    await loginButton.click();
    
    // #region agent log - Hypothesis B: Check if login succeeded with correct password
    await page.waitForTimeout(1000);
    
    const modalGone = !(await page.locator('.login-box').isVisible().catch(() => true));
    const dashboardVisible = await page.locator('.main-content').isVisible().catch(() => false);
    
    await log({
      location: 'test:125',
      message: 'After correct password attempt',
      hypothesisId: 'B',
      data: { modalGone, dashboardVisible }
    });
    // #endregion

    // Take screenshot for visual inspection
    await page.screenshot({ path: 'test-results/access-code-visual.png', fullPage: true });

    console.log('\n📊 Test completed - check debug.log for detailed instrumentation');
  });
});
