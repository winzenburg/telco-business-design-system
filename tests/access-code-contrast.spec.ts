import { test, expect } from '@playwright/test';

/**
 * Access Code Page - Contrast Ratio Analysis
 * 
 * This test identifies contrast ratio issues on the login/access code page
 * WCAG AA Requirements:
 * - Normal text (< 18px or < 14px bold): 4.5:1
 * - Large text (>= 18px or >= 14px bold): 3:1
 */

// Helper to calculate relative luminance
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Helper to calculate contrast ratio
function getContrastRatio(rgb1: [number, number, number], rgb2: [number, number, number]): number {
  const lum1 = getLuminance(...rgb1);
  const lum2 = getLuminance(...rgb2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Parse rgb/rgba string to [r, g, b]
function parseRgb(rgbString: string): [number, number, number] {
  const match = rgbString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) throw new Error(`Invalid RGB string: ${rgbString}`);
  return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
}

test.describe('Access Code Page - Contrast Analysis', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the auto-attendant app
    await page.goto('http://localhost:8080');
    
    // Wait for the login modal to be visible
    await page.waitForSelector('.login-box', { state: 'visible' });
  });

  test('should analyze all text contrast ratios', async ({ page }) => {
    console.log('\n🔍 ACCESS CODE PAGE - CONTRAST ANALYSIS\n');
    console.log('=' . repeat(60));

    const results: Array<{
      element: string;
      foreground: string;
      background: string;
      ratio: number;
      passes: boolean;
      requirement: number;
    }> = [];

    // 1. Check "Access Code" label
    const label = page.locator('label[for="login-password"]');
    const labelColor = await label.evaluate(el => window.getComputedStyle(el).color);
    const labelBg = await label.evaluate(el => {
      let parent = el.parentElement;
      while (parent) {
        const bg = window.getComputedStyle(parent).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)') return bg;
        parent = parent.parentElement;
      }
      return 'rgb(255, 255, 255)';
    });
    const labelSize = await label.evaluate(el => parseFloat(window.getComputedStyle(el).fontSize));
    const labelWeight = await label.evaluate(el => window.getComputedStyle(el).fontWeight);
    
    const labelRatio = getContrastRatio(parseRgb(labelColor), parseRgb(labelBg));
    const labelRequirement = (labelSize >= 18 || (labelSize >= 14 && parseInt(labelWeight) >= 700)) ? 3 : 4.5;
    
    results.push({
      element: 'Label: "Access Code"',
      foreground: labelColor,
      background: labelBg,
      ratio: labelRatio,
      passes: labelRatio >= labelRequirement,
      requirement: labelRequirement
    });

    console.log(`\n📝 Label: "Access Code"`);
    console.log(`   Foreground: ${labelColor}`);
    console.log(`   Background: ${labelBg}`);
    console.log(`   Font: ${labelSize}px, weight ${labelWeight}`);
    console.log(`   Contrast: ${labelRatio.toFixed(2)}:1`);
    console.log(`   Required: ${labelRequirement}:1 (${labelRatio >= labelRequirement ? '✅ PASS' : '❌ FAIL'})`);

    // 2. Check input placeholder
    const input = page.locator('#login-password');
    const placeholderColor = await input.evaluate(el => {
      const tempInput = document.createElement('input');
      tempInput.placeholder = 'test';
      document.body.appendChild(tempInput);
      const color = window.getComputedStyle(tempInput, '::placeholder').color;
      document.body.removeChild(tempInput);
      return color;
    });
    const inputBg = await input.evaluate(el => window.getComputedStyle(el).backgroundColor);
    const inputSize = await input.evaluate(el => parseFloat(window.getComputedStyle(el).fontSize));
    
    const placeholderRatio = getContrastRatio(parseRgb(placeholderColor), parseRgb(inputBg));
    const placeholderRequirement = inputSize >= 18 ? 3 : 4.5;
    
    results.push({
      element: 'Input Placeholder',
      foreground: placeholderColor,
      background: inputBg,
      ratio: placeholderRatio,
      passes: placeholderRatio >= placeholderRequirement,
      requirement: placeholderRequirement
    });

    console.log(`\n💬 Input Placeholder: "Enter access code"`);
    console.log(`   Foreground: ${placeholderColor}`);
    console.log(`   Background: ${inputBg}`);
    console.log(`   Font: ${inputSize}px`);
    console.log(`   Contrast: ${placeholderRatio.toFixed(2)}:1`);
    console.log(`   Required: ${placeholderRequirement}:1 (${placeholderRatio >= placeholderRequirement ? '✅ PASS' : '❌ FAIL'})`);

    // 3. Check error message (trigger it first)
    await input.fill('wrong');
    await page.click('.login-button');
    await page.waitForSelector('.login-error.show', { state: 'visible', timeout: 2000 }).catch(() => null);

    const errorVisible = await page.locator('.login-error').isVisible();
    if (errorVisible) {
      const errorText = page.locator('.login-error span');
      const errorColor = await errorText.evaluate(el => window.getComputedStyle(el).color);
      const errorBg = await errorText.evaluate(el => {
        const parent = el.closest('.login-error');
        return parent ? window.getComputedStyle(parent).backgroundColor : 'rgb(255, 255, 255)';
      });
      const errorSize = await errorText.evaluate(el => parseFloat(window.getComputedStyle(el).fontSize));
      
      const errorRatio = getContrastRatio(parseRgb(errorColor), parseRgb(errorBg));
      const errorRequirement = errorSize >= 18 ? 3 : 4.5;
      
      results.push({
        element: 'Error Message',
        foreground: errorColor,
        background: errorBg,
        ratio: errorRatio,
        passes: errorRatio >= errorRequirement,
        requirement: errorRequirement
      });

      console.log(`\n⚠️  Error Message: "Invalid access code..."`);
      console.log(`   Foreground: ${errorColor}`);
      console.log(`   Background: ${errorBg}`);
      console.log(`   Font: ${errorSize}px`);
      console.log(`   Contrast: ${errorRatio.toFixed(2)}:1`);
      console.log(`   Required: ${errorRequirement}:1 (${errorRatio >= errorRequirement ? '✅ PASS' : '❌ FAIL'})`);
    }

    // 4. Check "BUSINESS VOICEEDGE®" heading
    const heading = page.locator('.login-logo h1');
    const headingColor = await heading.evaluate(el => window.getComputedStyle(el).color);
    const headingBg = await heading.evaluate(el => {
      let parent = el.parentElement;
      while (parent) {
        const bg = window.getComputedStyle(parent).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)') return bg;
        parent = parent.parentElement;
      }
      return 'rgb(255, 255, 255)';
    });
    const headingSize = await heading.evaluate(el => parseFloat(window.getComputedStyle(el).fontSize));
    const headingWeight = await heading.evaluate(el => window.getComputedStyle(el).fontWeight);
    
    const headingRatio = getContrastRatio(parseRgb(headingColor), parseRgb(headingBg));
    const headingRequirement = (headingSize >= 18 || (headingSize >= 14 && parseInt(headingWeight) >= 700)) ? 3 : 4.5;
    
    results.push({
      element: 'Heading: "BUSINESS VOICEEDGE®"',
      foreground: headingColor,
      background: headingBg,
      ratio: headingRatio,
      passes: headingRatio >= headingRequirement,
      requirement: headingRequirement
    });

    console.log(`\n📰 Heading: "BUSINESS VOICEEDGE®"`);
    console.log(`   Foreground: ${headingColor}`);
    console.log(`   Background: ${headingBg}`);
    console.log(`   Font: ${headingSize}px, weight ${headingWeight}`);
    console.log(`   Contrast: ${headingRatio.toFixed(2)}:1`);
    console.log(`   Required: ${headingRequirement}:1 (${headingRatio >= headingRequirement ? '✅ PASS' : '❌ FAIL'})`);

    // 5. Check subtitle
    const subtitle = page.locator('.login-logo p');
    const subtitleColor = await subtitle.evaluate(el => window.getComputedStyle(el).color);
    const subtitleBg = await subtitle.evaluate(el => {
      let parent = el.parentElement;
      while (parent) {
        const bg = window.getComputedStyle(parent).backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)') return bg;
        parent = parent.parentElement;
      }
      return 'rgb(255, 255, 255)';
    });
    const subtitleSize = await subtitle.evaluate(el => parseFloat(window.getComputedStyle(el).fontSize));
    
    const subtitleRatio = getContrastRatio(parseRgb(subtitleColor), parseRgb(subtitleBg));
    const subtitleRequirement = subtitleSize >= 18 ? 3 : 4.5;
    
    results.push({
      element: 'Subtitle: "Auto-Attendant Management"',
      foreground: subtitleColor,
      background: subtitleBg,
      ratio: subtitleRatio,
      passes: subtitleRatio >= subtitleRequirement,
      requirement: subtitleRequirement
    });

    console.log(`\n📄 Subtitle: "Auto-Attendant Management"`);
    console.log(`   Foreground: ${subtitleColor}`);
    console.log(`   Background: ${subtitleBg}`);
    console.log(`   Font: ${subtitleSize}px`);
    console.log(`   Contrast: ${subtitleRatio.toFixed(2)}:1`);
    console.log(`   Required: ${subtitleRequirement}:1 (${subtitleRatio >= subtitleRequirement ? '✅ PASS' : '❌ FAIL'})`);

    // Summary
    const failures = results.filter(r => !r.passes);
    
    console.log(`\n${'='.repeat(60)}`);
    console.log(`\n📊 SUMMARY`);
    console.log(`   Total elements checked: ${results.length}`);
    console.log(`   Passed: ${results.length - failures.length}`);
    console.log(`   Failed: ${failures.length}`);

    if (failures.length > 0) {
      console.log(`\n❌ FAILING ELEMENTS:`);
      failures.forEach(f => {
        console.log(`   • ${f.element}`);
        console.log(`     ${f.ratio.toFixed(2)}:1 (needs ${f.requirement}:1)`);
      });
    } else {
      console.log(`\n✅ All elements pass WCAG AA contrast requirements!`);
    }

    console.log('\n');

    // Take screenshot for visual reference
    await page.screenshot({ path: 'test-results/access-code-contrast.png', fullPage: true });
    console.log('📸 Screenshot saved to: test-results/access-code-contrast.png\n');

    // Assert that all elements pass
    expect(failures.length).toBe(0);
  });
});
