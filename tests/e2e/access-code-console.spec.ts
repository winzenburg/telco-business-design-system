import { test } from '@playwright/test';

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
        runId: 'console-test'
      })
    });
  } catch (e) {}
}

test.describe('Access Code Console Errors', () => {
  test('should capture console errors and function execution', async ({ page }) => {
    const consoleMessages: any[] = [];
    const consoleErrors: any[] = [];
    
    // Capture console output
    page.on('console', msg => {
      const logObj = { type: msg.type(), text: msg.text() };
      consoleMessages.push(logObj);
      if (msg.type() === 'error') {
        consoleErrors.push(logObj);
      }
    });

    // Capture page errors
    page.on('pageerror', error => {
      consoleErrors.push({ type: 'pageerror', text: error.message, stack: error.stack });
    });

    await page.goto('http://localhost:8080');
    await page.waitForSelector('.login-box', { state: 'visible' });

    // #region agent log - Capture handleLogin function existence
    const handleLoginExists = await page.evaluate(() => {
      return typeof (window as any).handleLogin === 'function';
    });
    
    await log({
      location: 'test:45',
      message: 'Check if handleLogin function exists',
      hypothesisId: 'FUNCTION_MISSING',
      data: { handleLoginExists }
    });
    // #endregion

    // #region agent log - Test wrong password with manual function call
    await page.evaluate(() => {
      const input = document.getElementById('login-password') as HTMLInputElement;
      input.value = 'wrongpassword';
      
      // Try calling handleLogin directly
      try {
        const event = new Event('submit', { bubbles: true, cancelable: true });
        (window as any).handleLogin(event);
        return { success: true, error: null };
      } catch (e: any) {
        return { success: false, error: e.message };
      }
    });
    
    await page.waitForTimeout(300);
    
    const errorVisible1 = await page.locator('#login-error').isVisible();
    
    await log({
      location: 'test:72',
      message: 'After manual handleLogin call with wrong password',
      hypothesisId: 'MANUAL_CALL',
      data: { errorVisible1, consoleErrors: consoleErrors.slice() }
    });
    // #endregion

    // #region agent log - Test with form submit event
    await page.fill('#login-password', 'wrongpassword2');
    await page.click('.login-button');
    await page.waitForTimeout(300);
    
    const errorVisible2 = await page.locator('#login-error').isVisible();
    const allConsoleMessages = consoleMessages.slice();
    const allConsoleErrors = consoleErrors.slice();
    
    await log({
      location: 'test:90',
      message: 'After clicking submit button',
      hypothesisId: 'BUTTON_CLICK',
      data: { 
        errorVisible2,
        consoleMessages: allConsoleMessages,
        consoleErrors: allConsoleErrors
      }
    });
    // #endregion

    // #region agent log - Check DOM state after submission
    const domState = await page.evaluate(() => {
      const errorDiv = document.getElementById('login-error');
      const overlay = document.getElementById('login-overlay');
      const input = document.getElementById('login-password') as HTMLInputElement;
      
      return {
        errorDiv: {
          exists: !!errorDiv,
          classList: errorDiv ? Array.from(errorDiv.classList) : [],
          style: errorDiv ? errorDiv.getAttribute('style') : null,
          computedDisplay: errorDiv ? window.getComputedStyle(errorDiv).display : null
        },
        overlay: {
          exists: !!overlay,
          classList: overlay ? Array.from(overlay.classList) : [],
          computedDisplay: overlay ? window.getComputedStyle(overlay).display : null
        },
        inputValue: input ? input.value : null
      };
    });
    
    await log({
      location: 'test:123',
      message: 'DOM state inspection',
      hypothesisId: 'DOM_STATE',
      data: domState
    });
    // #endregion

    await page.screenshot({ path: 'test-results/access-code-console.png', fullPage: true });
  });
});
