import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Storybook/);
});

test('can navigate to button stories', async ({ page }) => {
  await page.goto('/');

  // Click on Button story if it exists
  const buttonLink = page.locator('text=Button');
  if (await buttonLink.count() > 0) {
    await buttonLink.first().click();
    await expect(page.locator('h1')).toContainText('Button');
  }
});

test('design system components load correctly', async ({ page }) => {
  await page.goto('/');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Check that Storybook interface loads
  await expect(page.locator('[data-testid="sidebar"]')).toBeVisible();
});
