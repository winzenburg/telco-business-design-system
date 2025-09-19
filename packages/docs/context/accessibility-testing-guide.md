# Accessibility Testing Guide

## 🚀 Quick Start

```bash
# Run all accessibility tests
npm run test:a11y

# Run specific component tests
npm run test:a11y -- Button

# Generate accessibility report
npm run report:a11y
```

---

## 🧪 Testing Layers

### 1. Static Analysis (Build Time)

#### ESLint Plugin (jsx-a11y)
```bash
# Already configured in .eslintrc.cjs
npm run lint
```

Catches:
- Missing alt text
- Invalid ARIA props
- Missing form labels
- Inaccessible interactive elements

#### TypeScript Types
```tsx
// Enforce accessible prop patterns
interface ButtonProps {
  'aria-label'?: string  // Required if no children
  'aria-pressed'?: boolean
  'aria-expanded'?: boolean
  'aria-busy'?: boolean
}
```

### 2. Unit Testing (Jest/Vitest)

#### Setup
```typescript
// test-utils/a11y.tsx
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

export async function renderAndCheckA11y(component: React.ReactElement) {
  const { container } = render(component)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
  return { container, results }
}
```

#### Component Tests
```typescript
// Button.test.tsx
import { renderAndCheckA11y } from '@/test-utils/a11y'
import { Button } from './Button'

describe('Button Accessibility', () => {
  it('has no accessibility violations', async () => {
    await renderAndCheckA11y(
      <Button>Click me</Button>
    )
  })

  it('has proper ARIA attributes when loading', async () => {
    const { getByRole } = render(
      <Button loading>Loading...</Button>
    )
    const button = getByRole('button')
    expect(button).toHaveAttribute('aria-busy', 'true')
  })

  it('supports keyboard navigation', async () => {
    const onClick = jest.fn()
    const { getByRole } = render(
      <Button onClick={onClick}>Submit</Button>
    )
    const button = getByRole('button')
    
    // Space key
    await userEvent.type(button, ' ')
    expect(onClick).toHaveBeenCalledTimes(1)
    
    // Enter key
    await userEvent.type(button, '{enter}')
    expect(onClick).toHaveBeenCalledTimes(2)
  })
})
```

### 3. Integration Testing (Playwright)

#### Accessibility Assertions
```typescript
// playwright-a11y.spec.ts
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Component Gallery Accessibility', () => {
  test('Button page has no violations', async ({ page }) => {
    await page.goto('/iframe.html?id=button--all-variants')
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()
    
    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('Form components support keyboard navigation', async ({ page }) => {
    await page.goto('/iframe.html?id=form--complete-example')
    
    // Tab through form
    await page.keyboard.press('Tab')
    await expect(page.locator(':focus')).toHaveAttribute('id', 'name-input')
    
    await page.keyboard.press('Tab')
    await expect(page.locator(':focus')).toHaveAttribute('id', 'email-input')
    
    // No keyboard traps
    await page.keyboard.press('Shift+Tab')
    await expect(page.locator(':focus')).toHaveAttribute('id', 'name-input')
  })

  test('Modals trap focus correctly', async ({ page }) => {
    await page.goto('/iframe.html?id=dialog--default')
    
    // Open modal
    await page.click('button:has-text("Open Dialog")')
    
    // Focus should be trapped
    const focusableElements = await page.locator(
      'dialog button, dialog input, dialog [tabindex="0"]'
    ).all()
    
    // Tab through all elements
    for (let i = 0; i < focusableElements.length + 1; i++) {
      await page.keyboard.press('Tab')
    }
    
    // Focus should wrap back to first element
    await expect(page.locator(':focus')).toBe(focusableElements[0])
  })
})
```

### 4. Manual Testing Protocols

#### Screen Reader Testing Script
```markdown
## Testing Protocol: [Component Name]

### Setup
1. Open component in Storybook
2. Enable screen reader (NVDA/JAWS/VoiceOver)
3. Navigate to component

### Test Cases

#### 1. Initial Announcement
- [ ] Component role is announced
- [ ] Component name/label is announced
- [ ] Component state is announced
- [ ] Instructions are provided (if applicable)

#### 2. Interaction
- [ ] All interactive elements are reachable
- [ ] Actions are announced when triggered
- [ ] State changes are announced
- [ ] Error messages are announced

#### 3. Navigation
- [ ] Can navigate with arrow keys (if applicable)
- [ ] Can escape/close with ESC (if applicable)
- [ ] Tab order is logical
- [ ] No elements are skipped

### Expected Announcements

| Action | Expected Announcement |
|--------|----------------------|
| Focus button | "Submit button" |
| Click button | "Submit button pressed" |
| Focus disabled button | "Submit button disabled" |
| Loading state | "Loading, please wait" |
| Success state | "Form submitted successfully" |
| Error state | "Error: Please fix the following issues" |
```

#### Keyboard Navigation Matrix
```markdown
## Keyboard Testing Matrix

| Component | Tab | Shift+Tab | Enter | Space | Arrow Keys | Escape |
|-----------|-----|-----------|-------|-------|------------|--------|
| Button | ✓ Focus | ✓ Focus back | ✓ Activate | ✓ Activate | - | - |
| Link | ✓ Focus | ✓ Focus back | ✓ Navigate | - | - | - |
| Checkbox | ✓ Focus | ✓ Focus back | - | ✓ Toggle | - | - |
| Radio | ✓ Focus group | ✓ Focus back | - | ✓ Select | ✓ Navigate | - |
| Select | ✓ Focus | ✓ Focus back | ✓ Open | ✓ Open | ✓ Navigate | ✓ Close |
| Dialog | - | - | - | - | - | ✓ Close |
| Menu | ✓ Focus | ✓ Focus back | ✓ Open/Select | ✓ Open | ✓ Navigate | ✓ Close |
| Tabs | ✓ Focus panel | ✓ Focus back | - | - | ✓ Navigate tabs | - |
```

---

## 📊 Automated Testing Scripts

### test:a11y Script Implementation
```javascript
// scripts/test-accessibility.js
import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'
import fs from 'fs'
import path from 'path'

const STORYBOOK_URL = process.env.STORYBOOK_URL || 'http://localhost:6006'

async function testAccessibility() {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  
  // Get all story URLs
  await page.goto(`${STORYBOOK_URL}/iframe.html?id=*&viewMode=story`)
  const stories = await page.evaluate(() => {
    // Extract story IDs from Storybook's internal API
    return window.__STORYBOOK_CLIENT_API__.getStoryIndex()
  })
  
  const results = []
  const violations = []
  
  // Test each story
  for (const story of Object.values(stories)) {
    await page.goto(`${STORYBOOK_URL}/iframe.html?id=${story.id}`)
    
    const scanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()
    
    results.push({
      story: story.title,
      violations: scanResults.violations.length,
      passes: scanResults.passes.length
    })
    
    if (scanResults.violations.length > 0) {
      violations.push({
        story: story.title,
        violations: scanResults.violations
      })
    }
  }
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: results.length,
      passed: results.filter(r => r.violations === 0).length,
      failed: results.filter(r => r.violations > 0).length
    },
    results,
    violations
  }
  
  // Save report
  fs.writeFileSync(
    path.join(process.cwd(), 'reports/accessibility-report.json'),
    JSON.stringify(report, null, 2)
  )
  
  // Console output
  console.log('\n📊 Accessibility Test Results')
  console.log('================================')
  console.log(`✅ Passed: ${report.summary.passed}/${report.summary.total}`)
  console.log(`❌ Failed: ${report.summary.failed}/${report.summary.total}`)
  
  if (violations.length > 0) {
    console.log('\n⚠️ Violations Found:')
    violations.forEach(v => {
      console.log(`\n  ${v.story}:`)
      v.violations.forEach(violation => {
        console.log(`    - ${violation.description}`)
        console.log(`      Impact: ${violation.impact}`)
        console.log(`      Fix: ${violation.help}`)
      })
    })
  }
  
  await browser.close()
  
  // Exit with error if violations found
  if (violations.length > 0) {
    process.exit(1)
  }
}

testAccessibility().catch(console.error)
```

### CI Integration
```yaml
# .github/workflows/a11y.yml
name: Accessibility Tests

on:
  pull_request:
    paths:
      - 'packages/components/**'
      - 'src/components/**'

jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      
      # Build and start Storybook
      - run: npm run build-storybook
      - run: npx serve -l 6006 storybook-static &
      - run: npx wait-on http://localhost:6006
      
      # Run accessibility tests
      - run: npm run test:a11y
      
      # Upload report
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: accessibility-report
          path: reports/accessibility-report.json
      
      # Comment on PR
      - uses: actions/github-script@v6
        if: failure()
        with:
          script: |
            const report = require('./reports/accessibility-report.json')
            const comment = `
            ## ❌ Accessibility Issues Found
            
            ${report.violations.map(v => `
            ### ${v.story}
            ${v.violations.map(violation => `
            - **${violation.description}**
              - Impact: ${violation.impact}
              - Elements: ${violation.nodes.length}
              - Fix: ${violation.help}
            `).join('')}
            `).join('')}
            
            [View Full Report](${context.payload.pull_request.html_url}/checks)
            `
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: comment
            })
```

---

## 🎯 Testing Checklist

### Per Component
- [ ] ESLint jsx-a11y rules pass
- [ ] axe-core unit tests pass
- [ ] Playwright integration tests pass
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Focus indicators visible
- [ ] Color contrast meets AA
- [ ] Touch targets ≥ 44x44px
- [ ] Works at 200% zoom
- [ ] Works in high contrast mode

### Per Release
- [ ] Full accessibility audit
- [ ] Screen reader testing (NVDA + JAWS + VoiceOver)
- [ ] Keyboard-only navigation test
- [ ] Mobile accessibility test
- [ ] Assistive technology compatibility

---

## 🔧 Tooling Setup

### Required Packages
```json
{
  "devDependencies": {
    "@axe-core/playwright": "^4.8.0",
    "@testing-library/jest-dom": "^6.1.5",
    "@testing-library/react": "^14.1.2",
    "@testing-library/user-event": "^14.5.1",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "jest-axe": "^8.0.0"
  }
}
```

### VS Code Extensions
```json
// .vscode/extensions.json
{
  "recommendations": [
    "deque-systems.vscode-axe-linter",
    "ms-accessibility.accessibility-insights-for-web"
  ]
}
```

---

## 📚 Resources

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about/#priority)
- [ARIA Testing Guide](https://www.w3.org/WAI/test-evaluate/)
- [Screen Reader Testing Guide](https://webaim.org/articles/screenreader_testing/)