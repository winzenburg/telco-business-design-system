/**
 * Visual Regression Testing Suite
 * 
 * Tests all components across multiple themes, viewports, and states
 * to ensure consistent visual appearance and catch regressions.
 */

import { test, expect } from '@playwright/test';

// Component story URLs to test
const COMPONENT_STORIES = [
  // Interactive Components
  'button--all-variants',
  'button--all-sizes', 
  'button--loading-states',
  'button--with-icons',
  
  // Form Components
  'input--all-variants',
  'input--all-sizes',
  'input--with-labels',
  'input--error-states',
  'input--with-icons',
  'checkbox--default',
  'checkbox--all-states',
  'radio-group--default',
  'radio-group--all-states',
  'select--default',
  'select--all-variants',
  'switch--default',
  'switch--all-states',
  'slider--default',
  'slider--all-variants',
  
  // Layout Components
  'card--default',
  'card--all-variants',
  'accordion--default',
  'accordion--expanded',
  'tabs--default',
  'tabs--all-variants',
  'sheet--default',
  'dialog--default',
  
  // Display Components
  'badge--all-variants',
  'badge--all-sizes',
  'alert--all-variants',
  'avatar--default',
  'avatar--with-fallback',
  'progress--default',
  'progress--all-variants',
  'tooltip--default',
  'toast--all-variants',
  
  // Navigation Components
  'breadcrumb--default',
  'dropdown-menu--default',
  'command--default',
  
  // Data Components
  'table--default',
  'table--with-sorting',
  'list--default',
  'list--all-variants',
  
  // Chart Components
  'charts--line-chart',
  'charts--bar-chart',
  'charts--pie-chart',
  'charts--area-chart',
];

// Themes to test
const THEMES = ['light', 'dark'];

// Viewport configurations
const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'wide', width: 1920, height: 1080 },
];

// Helper function to navigate to story
async function navigateToStory(page: any, storyId: string, theme = 'light') {
  const url = `/iframe.html?id=${storyId}&viewMode=story&theme=${theme}`;
  await page.goto(url);
  // Wait for story to load and animations to settle
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500); // Allow animations to complete
}

// Helper function to hide dynamic content
async function hideVariableContent(page: any) {
  // Hide timestamps, random IDs, etc.
  await page.addStyleTag({
    content: `
      /* Hide variable content that changes between runs */
      [data-testid*="timestamp"],
      [data-testid*="random"],
      .loading-spinner,
      .animate-pulse,
      .animate-spin {
        visibility: hidden !important;
      }
      
      /* Disable animations for consistent screenshots */
      *,
      *::before,
      *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    `
  });
}

test.describe('Visual Regression Tests', () => {
  
  test.describe('Component Screenshots - Light Theme', () => {
    COMPONENT_STORIES.forEach((storyId) => {
      test(`${storyId} - light theme`, async ({ page }) => {
        await navigateToStory(page, storyId, 'light');
        await hideVariableContent(page);
        
        // Take screenshot of the component
        await expect(page.locator('#storybook-root')).toHaveScreenshot(
          `${storyId}-light.png`,
          {
            fullPage: false,
            animations: 'disabled',
            clip: { x: 0, y: 0, width: 800, height: 600 }
          }
        );
      });
    });
  });
  
  test.describe('Component Screenshots - Dark Theme', () => {
    COMPONENT_STORIES.forEach((storyId) => {
      test(`${storyId} - dark theme`, async ({ page }) => {
        await navigateToStory(page, storyId, 'dark');
        await hideVariableContent(page);
        
        // Take screenshot of the component
        await expect(page.locator('#storybook-root')).toHaveScreenshot(
          `${storyId}-dark.png`,
          {
            fullPage: false,
            animations: 'disabled',
            clip: { x: 0, y: 0, width: 800, height: 600 }
          }
        );
      });
    });
  });
  
  test.describe('Responsive Design Tests', () => {
    const KEY_COMPONENTS = [
      'button--all-variants',
      'input--all-variants', 
      'card--default',
      'navigation--default',
      'table--default'
    ];
    
    VIEWPORTS.forEach((viewport) => {
      test.describe(`${viewport.name} viewport (${viewport.width}x${viewport.height})`, () => {
        test.beforeEach(async ({ page }) => {
          await page.setViewportSize({ width: viewport.width, height: viewport.height });
        });
        
        KEY_COMPONENTS.forEach((storyId) => {
          test(`${storyId} - ${viewport.name}`, async ({ page }) => {
            await navigateToStory(page, storyId);
            await hideVariableContent(page);
            
            await expect(page.locator('#storybook-root')).toHaveScreenshot(
              `${storyId}-${viewport.name}.png`,
              {
                fullPage: false,
                animations: 'disabled'
              }
            );
          });
        });
      });
    });
  });
  
  test.describe('Interactive State Tests', () => {
    test('Button hover states', async ({ page }) => {
      await navigateToStory(page, 'button--all-variants');
      await hideVariableContent(page);
      
      const button = page.locator('button').first();
      await button.hover();
      await page.waitForTimeout(100); // Allow hover styles to apply
      
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'button-hover-state.png',
        { animations: 'disabled' }
      );
    });
    
    test('Input focus states', async ({ page }) => {
      await navigateToStory(page, 'input--all-variants');
      await hideVariableContent(page);
      
      const input = page.locator('input').first();
      await input.focus();
      await page.waitForTimeout(100); // Allow focus styles to apply
      
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'input-focus-state.png',
        { animations: 'disabled' }
      );
    });
    
    test('Dialog open state', async ({ page }) => {
      await navigateToStory(page, 'dialog--default');
      await hideVariableContent(page);
      
      // Open the dialog
      await page.click('button:has-text("Open Dialog")');
      await page.waitForTimeout(300); // Allow dialog to fully open
      
      await expect(page).toHaveScreenshot(
        'dialog-open-state.png',
        { 
          fullPage: true,
          animations: 'disabled' 
        }
      );
    });
    
    test('Dropdown menu open state', async ({ page }) => {
      await navigateToStory(page, 'dropdown-menu--default');
      await hideVariableContent(page);
      
      // Open the dropdown
      await page.click('[data-testid="dropdown-trigger"]');
      await page.waitForTimeout(200); // Allow dropdown to open
      
      await expect(page).toHaveScreenshot(
        'dropdown-open-state.png',
        { 
          fullPage: true,
          animations: 'disabled' 
        }
      );
    });
  });
  
  test.describe('Form Validation States', () => {
    test('Input error state', async ({ page }) => {
      await navigateToStory(page, 'input--error-states');
      await hideVariableContent(page);
      
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'input-error-states.png',
        { animations: 'disabled' }
      );
    });
    
    test('Form validation example', async ({ page }) => {
      await navigateToStory(page, 'form--validation-example');
      await hideVariableContent(page);
      
      // Trigger validation
      await page.click('button[type="submit"]');
      await page.waitForTimeout(200);
      
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'form-validation-example.png',
        { animations: 'disabled' }
      );
    });
  });
  
  test.describe('Loading States', () => {
    test('Button loading state', async ({ page }) => {
      await navigateToStory(page, 'button--loading-states');
      await hideVariableContent(page);
      
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'button-loading-states.png',
        { animations: 'disabled' }
      );
    });
    
    test('Skeleton loading states', async ({ page }) => {
      await navigateToStory(page, 'skeleton--all-variants');
      await hideVariableContent(page);
      
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'skeleton-loading-states.png',
        { animations: 'disabled' }
      );
    });
  });
  
  test.describe('RTL Layout Tests', () => {
    test.beforeEach(async ({ page }) => {
      await page.addStyleTag({
        content: 'body { direction: rtl; }'
      });
    });
    
    const RTL_COMPONENTS = [
      'button--with-icons',
      'input--with-icons',
      'navigation--default',
      'breadcrumb--default',
      'alert--all-variants'
    ];
    
    RTL_COMPONENTS.forEach((storyId) => {
      test(`${storyId} - RTL layout`, async ({ page }) => {
        await navigateToStory(page, storyId);
        await hideVariableContent(page);
        
        await expect(page.locator('#storybook-root')).toHaveScreenshot(
          `${storyId}-rtl.png`,
          { animations: 'disabled' }
        );
      });
    });
  });
  
  test.describe('Accessibility State Tests', () => {
    test('High contrast mode simulation', async ({ page }) => {
      await page.emulateMedia({ colorScheme: 'dark', forcedColors: 'active' });
      await navigateToStory(page, 'button--all-variants');
      await hideVariableContent(page);
      
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'button-high-contrast.png',
        { animations: 'disabled' }
      );
    });
    
    test('Focus indicators visible', async ({ page }) => {
      await navigateToStory(page, 'form--complete-example');
      await hideVariableContent(page);
      
      // Tab through form elements
      await page.keyboard.press('Tab');
      await page.waitForTimeout(100);
      
      await expect(page.locator('#storybook-root')).toHaveScreenshot(
        'form-focus-indicators.png',
        { animations: 'disabled' }
      );
    });
  });
});

// Utility test for updating all baselines
test.describe('Baseline Generation', () => {
  test.skip('Generate all baselines', async ({ page }) => {
    // This test is skipped by default and only run manually
    // when we want to update all baseline images
    console.log('Use --update-snapshots flag to update baselines');
  });
});