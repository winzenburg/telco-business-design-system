# Visual Regression Testing Guide

## Overview

Visual Regression Testing (VRT) automatically captures screenshots of all components and compares them against baseline images to detect unintended visual changes. This ensures consistent UI appearance across different browsers, themes, and viewports.

---

## 🚀 Quick Start

### Running Tests Locally

```bash
# Start Storybook (required)
npm run dev

# Run visual tests
npm run test:vrt

# Update baselines (when changes are intentional)
npm run test:vrt:update

# Run tests with UI mode for debugging
npm run test:vrt:ui
```

### First Time Setup

```bash
# Install Playwright browsers
npx playwright install

# Generate initial baselines
npm run generate:vrt-baselines
```

---

## 📸 How It Works

### 1. **Baseline Generation**
When you first run VRT, it captures screenshots of all component stories and saves them as "baseline" images.

### 2. **Comparison on Changes**
Subsequent runs compare new screenshots against these baselines, flagging any differences above the threshold (1%).

### 3. **CI Integration**
Every PR automatically runs VRT and comments with results, preventing visual regressions from reaching production.

---

## 📊 What Gets Tested

### Component Coverage
- ✅ **All component variants** (primary, secondary, destructive, etc.)
- ✅ **All sizes** (sm, default, lg)
- ✅ **All states** (default, hover, focus, disabled, loading)
- ✅ **Both themes** (light and dark mode)
- ✅ **Multiple viewports** (mobile, tablet, desktop, wide)
- ✅ **RTL layouts** (for internationalization)
- ✅ **Accessibility modes** (high contrast, forced colors)

### Interactive States
```typescript
// Example: Button hover state test
test('Button hover state', async ({ page }) => {
  await navigateToStory(page, 'button--primary');
  await page.locator('button').hover();
  await expect(page).toHaveScreenshot('button-hover.png');
});
```

### Form Validation
```typescript
// Example: Input error state test
test('Input error state', async ({ page }) => {
  await navigateToStory(page, 'input--error-example');
  await expect(page).toHaveScreenshot('input-error.png');
});
```

---

## 🔧 Developer Workflow

### When Building New Components

1. **Create Component Stories**
   ```typescript
   // MyComponent.stories.tsx
   export const Default = {
     args: {},
   };
   
   export const AllVariants = {
     render: () => (
       <div className="space-x-2">
         <MyComponent variant="primary" />
         <MyComponent variant="secondary" />
         <MyComponent variant="destructive" />
       </div>
     ),
   };
   ```

2. **Generate Baselines**
   ```bash
   npm run test:vrt:update
   ```

3. **Commit Baselines**
   ```bash
   git add tests/visual-regression/
   git commit -m "feat: add MyComponent with visual baselines"
   ```

### When Modifying Existing Components

1. **Make Changes**
   - Update component code
   - Modify tokens/styles
   - Add new variants

2. **Check Visual Impact**
   ```bash
   npm run test:vrt
   ```

3. **Review Differences**
   - If intentional: `npm run test:vrt:update`
   - If unintentional: fix the issue

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "fix: update button hover state"
   ```

### Handling CI Failures

When your PR fails VRT:

1. **Download Artifacts**
   - Go to the failed CI run
   - Download "visual-regression-results"
   - Extract and review image diffs

2. **Analyze Differences**
   - `*-actual.png` = New screenshot
   - `*-expected.png` = Baseline image
   - `*-diff.png` = Highlighted differences

3. **Take Action**
   ```bash
   # If changes are intentional
   npm run test:vrt:update
   git add tests/visual-regression/
   git commit -m "chore: update visual baselines"
   
   # If changes are bugs
   # Fix the issue and push again
   ```

---

## 💻 Configuration

### Playwright Config
```typescript
// playwright.config.ts
export default defineConfig({
  use: {
    expect: {
      threshold: 0.01, // 1% maximum difference
      mode: 'pixel'
    }
  },
  projects: [
    { name: 'chromium', use: devices['Desktop Chrome'] },
    { name: 'Mobile Chrome', use: devices['Pixel 5'] },
    { name: 'RTL Desktop', use: { 
      ...devices['Desktop Chrome'],
      locale: 'ar-SA' 
    }}
  ]
});
```

### Custom Test Configuration
```typescript
// In your test files
test('Custom component test', async ({ page }) => {
  await expect(page.locator('.my-component')).toHaveScreenshot({
    threshold: 0.2,        // Allow 20% difference
    maxDiffPixels: 100,    // Max 100 pixels different
    animations: 'disabled', // Disable animations
    clip: { x: 0, y: 0, width: 400, height: 300 } // Crop area
  });
});
```

---

## 📁 File Organization

```
tests/
└── visual-regression/
    ├── button.spec.ts              # Button component tests
    ├── input.spec.ts               # Input component tests
    └── button-all-variants-test/   # Generated screenshots
        ├── button--primary-light.png
        ├── button--primary-dark.png
        ├── button--primary-hover.png
        └── button--primary-mobile.png
```

---

## 🚑 Troubleshooting

### Common Issues

#### “Baseline image not found”
```bash
# Generate missing baselines
npm run test:vrt:update
```

#### “Storybook not running”
```bash
# Start Storybook first
npm run dev
# Then run tests in another terminal
npm run test:vrt
```

#### “Tests timing out”
```bash
# Increase timeout in test
test.setTimeout(30000); // 30 seconds
```

#### “Flaky animations causing failures”
```typescript
// Disable animations
await page.addStyleTag({
  content: `
    *, *::before, *::after {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  `
});
```

### Performance Tips

1. **Run Specific Tests**
   ```bash
   npm run test:vrt -- --grep "Button"
   ```

2. **Use Headed Mode for Debugging**
   ```bash
   npm run test:vrt -- --headed
   ```

3. **Parallel Execution**
   ```bash
   npm run test:vrt -- --workers=4
   ```

---

## 📈 Best Practices

### ✅ Do's

- **Consistent Story Naming**: Use clear, descriptive story names
- **Stable Test Data**: Use fixed data that doesn't change
- **Disable Animations**: Use `animations: 'disabled'` in tests
- **Wait for Loading**: Use `waitForLoadState('networkidle')`
- **Review Diffs Carefully**: Don't blindly update baselines

### ❌ Don'ts

- **Don't ignore failures**: Always investigate visual differences
- **Don't commit huge baselines**: Optimize image sizes when possible
- **Don't test dynamic content**: Mock timestamps, random data
- **Don't skip mobile viewports**: Test responsive behavior
- **Don't update baselines without review**: Get design team approval

### Story Guidelines

```typescript
// ✅ Good: Stable, comprehensive story
export const AllStates = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <Button variant="primary">Default</Button>
      <Button variant="primary" disabled>Disabled</Button>
      <Button variant="primary" loading>Loading</Button>
      <Button variant="primary" className="hover:bg-primary-600">Hover</Button>
    </div>
  ),
};

// ❌ Bad: Dynamic content that changes
export const WithTimestamp = {
  render: () => (
    <div>
      <p>Last updated: {new Date().toISOString()}</p>
      <Button>Click me</Button>
    </div>
  ),
};
```

---

## 🔗 Integration

### Pre-commit Hook
```bash
# .husky/pre-commit
echo "📸 Running visual regression tests..."
npm run test:vrt
if [ $? -ne 0 ]; then
  echo "❌ Visual regression tests failed!"
  echo "Run 'npm run test:vrt:ui' to debug"
  exit 1
fi
```

### VS Code Integration
```json
// .vscode/settings.json
{
  "playwright.testDir": "tests/visual-regression",
  "playwright.showTrace": true
}
```

### Package.json Scripts
```json
{
  "scripts": {
    "test:vrt": "playwright test tests/visual-regression",
    "test:vrt:ui": "playwright test tests/visual-regression --ui",
    "test:vrt:update": "playwright test tests/visual-regression --update-snapshots",
    "test:vrt:debug": "playwright test tests/visual-regression --debug"
  }
}
```

---

## 📖 Resources

- [Playwright Visual Comparisons](https://playwright.dev/docs/test-screenshots)
- [Storybook Visual Testing](https://storybook.js.org/docs/react/writing-tests/visual-testing)
- [Design System Testing Guide](./testing-guide.md)
- [Component API Reference](../api-reference/)

---

*Visual regression testing helps maintain design consistency and catches unintended changes before they reach users. When in doubt, always review visual differences with the design team.*