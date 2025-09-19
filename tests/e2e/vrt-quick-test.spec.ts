/**
 * Quick VRT Test - Real Stories
 *
 * Tests actual available stories to verify VRT setup works
 */

import { test, expect } from '@playwright/test';

// Real component stories from Storybook index
const AVAILABLE_STORIES = [
  'accordion--default',
  'alert--default',
  'badge--default',
  'card--default',
  'checkbox--default',
  'input--default',
];

// Helper function to navigate to story
async function navigateToStory(page: any, storyId: string, theme = 'light') {
  const url = `http://localhost:6006/iframe.html?id=${storyId}&viewMode=story&theme=${theme}`;
  await page.goto(url);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
}

// Helper function to stabilize visuals
async function stabilizeVisuals(page: any) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        transition-duration: 0s !important;
      }
    `
  });
}

test.describe('Quick VRT Test', () => {
  AVAILABLE_STORIES.forEach((storyId) => {
    test(`${storyId} - light theme`, async ({ page }) => {
      await navigateToStory(page, storyId, 'light');
      await stabilizeVisuals(page);

      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        `${storyId}-light.png`,
        {
          threshold: 0.2,
          animations: 'disabled',
          fullPage: false
        }
      );
    });
  });
});