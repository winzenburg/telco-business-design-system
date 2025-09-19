import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y, getViolations } from '@axe-core/playwright';

// VRT threshold configuration (max 1% diff per Acceptance Criteria)
const VRT_THRESHOLD = 0.01; // 1% maximum difference

test.use({
  // Configure screenshot comparison options
  expect: {
    threshold: VRT_THRESHOLD,
    mode: 'pixel'
  }
});

test.describe('Storybook Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to Storybook
    await page.goto('http://localhost:6006');
    await injectAxe(page);
  });

  const componentStories = [
    'components-button--default',
    'components-button--primary', 
    'components-button--secondary',
    'components-button--destructive',
    'components-input--default',
    'components-alert--default',
    'components-alert--destructive',
    'components-card--default',
    'components-badge--default',
    'components-checkbox--default',
    'components-navigation-global-navigation--default',
  ];

  for (const storyId of componentStories) {
    test(`${storyId} should be accessible`, async ({ page }) => {
      // Navigate to specific story
      await page.goto(`http://localhost:6006/iframe.html?id=${storyId}`);
      
      // Wait for story to load
      await page.waitForSelector('#storybook-root', { timeout: 10000 });
      
      // Run accessibility check
      await checkA11y(page, '#storybook-root', {
        rules: {
          // Enterprise-specific rules
          'color-contrast': { enabled: true },
          'keyboard-navigation': { enabled: true },
          'focus-order-semantics': { enabled: true },
          
          // Disable problematic rules for stories
          'region': { enabled: false },
          'page-has-heading-one': { enabled: false },
          'landmark-one-main': { enabled: false },
        }
      });
    });
  }

  test('Button keyboard navigation', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-button--default');
    await page.waitForSelector('#storybook-root');

    // Test Tab navigation
    const button = page.locator('button').first();
    await button.focus();
    expect(await button.evaluate(el => document.activeElement === el)).toBe(true);

    // Test Enter activation
    await button.press('Enter');
    // Button should remain focused after click
    expect(await button.evaluate(el => document.activeElement === el)).toBe(true);

    // Test Space activation
    await button.press('Space');
    expect(await button.evaluate(el => document.activeElement === el)).toBe(true);
  });

  test('Input keyboard and screen reader support', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-input--default');
    await page.waitForSelector('#storybook-root');

    const input = page.locator('input').first();
    
    // Test focus
    await input.focus();
    expect(await input.evaluate(el => document.activeElement === el)).toBe(true);

    // Test typing
    await input.fill('Test input value');
    expect(await input.inputValue()).toBe('Test input value');

    // Check accessibility properties
    const ariaLabel = await input.getAttribute('aria-label');
    const labelledBy = await input.getAttribute('aria-labelledby');
    const role = await input.getAttribute('role');
    
    // Input should have proper labeling
    expect(ariaLabel || labelledBy).toBeTruthy();
  });

  test('Form validation accessibility', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-input--validation-patterns');
    await page.waitForSelector('#storybook-root');

    // Check for proper error announcement
    const errorElements = page.locator('[role="alert"], [aria-live="polite"], [aria-live="assertive"]');
    const errorCount = await errorElements.count();
    
    if (errorCount > 0) {
      // Verify error messages are associated with inputs
      const inputs = page.locator('input[aria-invalid="true"]');
      const inputCount = await inputs.count();
      
      for (let i = 0; i < inputCount; i++) {
        const input = inputs.nth(i);
        const describedBy = await input.getAttribute('aria-describedby');
        expect(describedBy).toBeTruthy();
      }
    }
  });

  test('Color contrast compliance', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-button--default');
    await page.waitForSelector('#storybook-root');

    // Check that no color contrast violations exist
    const violations = await getViolations(page, '#storybook-root', {
      rules: {
        'color-contrast': { enabled: true }
      }
    });

    const colorContrastViolations = violations.filter(v => v.id === 'color-contrast');
    expect(colorContrastViolations).toHaveLength(0);
  });

  test('Interactive elements have focus indicators', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-button--default');
    await page.waitForSelector('#storybook-root');

    const button = page.locator('button').first();
    await button.focus();

    // Check that focus is visible (this is a basic check)
    const focusedElement = page.locator(':focus');
    expect(await focusedElement.count()).toBeGreaterThan(0);
  });

  test('Enterprise navigation patterns', async ({ page }) => {
    await page.goto('http://localhost:6006/iframe.html?id=components-navigation-global-navigation--default');
    await page.waitForSelector('#storybook-root');

    // Check navigation landmarks
    const nav = page.locator('nav');
    expect(await nav.count()).toBeGreaterThan(0);

    // Check for proper heading structure
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    if (await headings.count() > 0) {
      // Verify heading hierarchy
      const headingLevels = await headings.evaluateAll(elements => 
        elements.map(el => parseInt(el.tagName.charAt(1)))
      );
      
      // Basic check: first heading should be reasonable level
      expect(headingLevels[0]).toBeLessThanOrEqual(3);
    }
  });
});