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
        runId: 'visibility-test'
      })
    });
  } catch (e) {}
}

test.describe('Access Code Visibility Issue', () => {
  test('should diagnose why input and button are not visible', async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.waitForTimeout(1000);

    // #region agent log - Hypothesis A: Check if elements exist in DOM
    const elementsExist = await page.evaluate(() => {
      return {
        inputExists: !!document.getElementById('login-password'),
        buttonExists: !!document.querySelector('.login-button'),
        loginBoxExists: !!document.querySelector('.login-box'),
        overlayExists: !!document.getElementById('login-overlay')
      };
    });
    
    await log({
      location: 'test:32',
      message: 'Check if elements exist in DOM',
      hypothesisId: 'A',
      data: elementsExist
    });
    // #endregion

    // #region agent log - Hypothesis B: Check computed styles of input
    const inputStyles = await page.evaluate(() => {
      const input = document.getElementById('login-password');
      if (!input) return { error: 'Input not found' };
      
      const computed = window.getComputedStyle(input);
      const rect = input.getBoundingClientRect();
      
      return {
        display: computed.display,
        visibility: computed.visibility,
        opacity: computed.opacity,
        width: computed.width,
        height: computed.height,
        position: computed.position,
        zIndex: computed.zIndex,
        color: computed.color,
        backgroundColor: computed.backgroundColor,
        border: computed.border,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          isInViewport: rect.top >= 0 && rect.left >= 0
        },
        parentDisplay: input.parentElement ? window.getComputedStyle(input.parentElement).display : 'N/A'
      };
    });
    
    await log({
      location: 'test:68',
      message: 'Input field computed styles',
      hypothesisId: 'B',
      data: inputStyles
    });
    // #endregion

    // #region agent log - Hypothesis C: Check button styles
    const buttonStyles = await page.evaluate(() => {
      const button = document.querySelector('.login-button');
      if (!button) return { error: 'Button not found' };
      
      const computed = window.getComputedStyle(button);
      const rect = button.getBoundingClientRect();
      
      return {
        display: computed.display,
        visibility: computed.visibility,
        opacity: computed.opacity,
        width: computed.width,
        height: computed.height,
        position: computed.position,
        zIndex: computed.zIndex,
        color: computed.color,
        backgroundColor: computed.backgroundColor,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          isInViewport: rect.top >= 0 && rect.left >= 0
        }
      };
    });
    
    await log({
      location: 'test:102',
      message: 'Button computed styles',
      hypothesisId: 'C',
      data: buttonStyles
    });
    // #endregion

    // #region agent log - Hypothesis D: Check login-box and overlay
    const containerStyles = await page.evaluate(() => {
      const loginBox = document.querySelector('.login-box');
      const overlay = document.getElementById('login-overlay');
      
      return {
        loginBox: loginBox ? {
          display: window.getComputedStyle(loginBox).display,
          visibility: window.getComputedStyle(loginBox).visibility,
          opacity: window.getComputedStyle(loginBox).opacity,
          zIndex: window.getComputedStyle(loginBox).zIndex,
          rect: loginBox.getBoundingClientRect()
        } : { error: 'Not found' },
        overlay: overlay ? {
          display: window.getComputedStyle(overlay).display,
          visibility: window.getComputedStyle(overlay).visibility,
          opacity: window.getComputedStyle(overlay).opacity,
          zIndex: window.getComputedStyle(overlay).zIndex,
          classList: Array.from(overlay.classList)
        } : { error: 'Not found' }
      };
    });
    
    await log({
      location: 'test:135',
      message: 'Container (login-box and overlay) styles',
      hypothesisId: 'D',
      data: containerStyles
    });
    // #endregion

    // #region agent log - Hypothesis E: Check CSS file loaded
    const cssInfo = await page.evaluate(() => {
      const stylesheets = Array.from(document.styleSheets);
      return {
        totalStylesheets: stylesheets.length,
        stylesheetHrefs: stylesheets.map(s => s.href),
        hasInlineStyles: stylesheets.some(s => !s.href),
        publicStylesLoaded: stylesheets.some(s => s.href?.includes('public/styles.css'))
      };
    });
    
    await log({
      location: 'test:154',
      message: 'CSS loading check',
      hypothesisId: 'E',
      data: cssInfo
    });
    // #endregion

    // #region agent log - Hypothesis F: Check placeholder-specific styles
    const placeholderInfo = await page.evaluate(() => {
      const input = document.getElementById('login-password');
      if (!input) return { error: 'Input not found' };
      
      const placeholderStyles = window.getComputedStyle(input, '::placeholder');
      
      return {
        placeholderColor: placeholderStyles.color,
        placeholderDisplay: placeholderStyles.display,
        placeholderOpacity: placeholderStyles.opacity,
        placeholderVisibility: placeholderStyles.visibility
      };
    });
    
    await log({
      location: 'test:177',
      message: 'Placeholder pseudo-element styles',
      hypothesisId: 'F',
      data: placeholderInfo
    });
    // #endregion

    // Take screenshot
    await page.screenshot({ 
      path: 'test-results/access-code-visibility.png', 
      fullPage: true 
    });

    // Try to take screenshot with element highlighted
    await page.evaluate(() => {
      const input = document.getElementById('login-password');
      if (input) {
        (input as HTMLElement).style.border = '5px solid red';
        (input as HTMLElement).style.outline = '5px solid blue';
      }
      const button = document.querySelector('.login-button');
      if (button) {
        (button as HTMLElement).style.border = '5px solid green';
        (button as HTMLElement).style.outline = '5px solid yellow';
      }
    });

    await page.screenshot({ 
      path: 'test-results/access-code-visibility-highlighted.png', 
      fullPage: true 
    });
  });
});
