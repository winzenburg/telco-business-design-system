# Color Usage Validation Rules

## Design System Black & Neutrals

### Primary Colors for Content
✅ **Black (#15172B)** - `--ds-color-black`
- Default body text and titles
- Icon default state
- Checkbox default state
- Radio button default state
- Highest contrast text color

✅ **Neutral-600 (#70717D)** - `--ds-color-neutral-600`
- Minimum ADA compliant neutral on white
- Placeholder text in input fields
- Default borders for all components
- Subdued/secondary icon colors

### Interactive State Hierarchy
- **Default**: neutral-600 borders, black text/icons
- **Hover**: neutral-100 backgrounds, neutral-900 borders
- **Pressed/Active**: neutral-300 backgrounds
- **Focus**: neutral-900 borders (high contrast)

### Validation Checklist
- [ ] All body text uses `--ds-color-text-primary` (resolves to black #15172B)
- [ ] All default borders use `--ds-color-border-default` (resolves to neutral-600 #70717D)
- [ ] All icons in default state use black (#15172B)
- [ ] All form controls (checkboxes, radio buttons) use black (#15172B) by default
- [ ] No hardcoded hex values in component code
- [ ] All text meets WCAG 2.1 AA contrast requirements (4.5:1 minimum)

### Common Violations to Fix
❌ **Don't Use:**
- Hardcoded `#000000` or `black` (use `--ds-color-black` instead)
- Hardcoded border colors like `#ccc` (use design tokens)
- Random gray values not in the neutral scale
- Text lighter than neutral-600 for accessibility-critical content

✅ **Do Use:**
- `var(--ds-color-text-primary)` for primary text
- `var(--ds-color-border-default)` for component borders
- Semantic color tokens like `--ds-color-text-muted` for secondary text
- Design system neutral scale for all gray values

## Token Reference
```css
/* Primary Content Colors */
--ds-color-black: #15172B
--ds-color-text-primary: var(--ds-color-black)
--ds-color-border-default: var(--ds-color-neutral-600)

/* Neutral Scale */
--ds-color-neutral-50: #FCFCFC   /* Backgrounds */
--ds-color-neutral-100: #F9F9FA  /* Surface hover */
--ds-color-neutral-200: #F1F2F6  /* Muted borders */
--ds-color-neutral-300: #DDDDE2  /* Pressed states */
--ds-color-neutral-600: #70717D  /* Default borders, ADA baseline */
--ds-color-neutral-900: #2B2D3F  /* Hover borders */
```