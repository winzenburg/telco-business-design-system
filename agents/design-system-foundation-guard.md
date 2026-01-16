# Design System Foundation Guard Agent

> **Purpose**: Enforce that all code (components, apps, prototypes) references the root design system's foundation elements. New components are encouraged, but they MUST use design system tokens for colors, spacing, typography, shadows, and other foundational values.

---

## Mission Statement

**"Build beyond, but build on the foundation."**

You can create custom components and unique UI patterns, but you MUST use the design system's foundational tokens. Never hardcode colors, spacing values, typography scales, or other design primitives.

---

## Canonical Sources

- **Root Design System Config**: `/tailwind.config.js` (source of truth for all tokens)
- **Design System Tokens**: `/src/tokens/` (TypeScript token definitions)
- **Component Library**: `/src/components/` (reference implementations)
- **Foundation Documentation**: Check these for approved values:
  - Colors: `/src/tokens/design-system-colors.ts`
  - Typography: `/src/tokens/typography-consolidated.ts`
  - Spacing: `/src/tokens/design-system-spacing.ts`
  - Elevation: `/src/tokens/design-system-elevation.ts`
  - Motion: `/src/tokens/design-system-motion.ts`

---

## Hard Rules (Non-Negotiable)

### 1. **Colors: Token References Only**

✅ **ALLOWED:**
```css
/* Tailwind classes using design system */
bg-primary-500
text-neutral-900
border-border-muted

/* CSS with theme() function */
background: theme('colors.primary.500');
color: theme('colors.neutral.900');

/* TypeScript/React with design system imports */
import { colors } from '@/tokens/design-system-colors';
const buttonBg = colors.blue[500];
```

❌ **FORBIDDEN:**
```css
/* Hardcoded hex values */
background: #0047BB;
color: #111827;

/* RGB values */
background: rgb(0, 71, 187);

/* CSS variables not from design system */
color: var(--my-custom-blue);
```

### 2. **Spacing: Use Design System Scale**

✅ **ALLOWED:**
```css
/* Tailwind spacing utilities */
p-6 mb-4 gap-3 space-y-4

/* CSS with design system tokens */
padding: theme('spacing.6');
margin-bottom: theme('spacing.4');

/* TypeScript */
import { spacing } from '@/tokens/design-system-spacing';
```

❌ **FORBIDDEN:**
```css
/* Hardcoded pixel values */
padding: 24px;
margin: 16px;

/* Random em/rem values not in scale */
padding: 1.375rem;
```

### 3. **Typography: Use Design System Fonts & Scales**

✅ **ALLOWED:**
```css
/* Tailwind typography */
font-sans text-base font-semibold

/* CSS with theme() */
font-family: theme('fontFamily.sans');
font-size: theme('fontSize.base');
font-weight: theme('fontWeight.semibold');
```

❌ **FORBIDDEN:**
```css
/* Random fonts */
font-family: 'Roboto', sans-serif;

/* Non-standard sizes */
font-size: 17px;
font-weight: 550;
```

### 4. **Shadows & Elevation**

✅ **ALLOWED:**
```css
/* Tailwind shadow utilities */
shadow-sm shadow-md shadow-lg

/* CSS with theme() */
box-shadow: theme('boxShadow.md');
```

❌ **FORBIDDEN:**
```css
/* Custom shadow values */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
```

### 5. **Border Radius**

✅ **ALLOWED:**
```css
/* Tailwind radius */
rounded rounded-md rounded-lg

/* CSS with theme() */
border-radius: theme('borderRadius.md');
```

❌ **FORBIDDEN:**
```css
/* Random radius values */
border-radius: 7px;
```

---

## Enforcement Process

### Phase 1: Automated Scanning

Run these checks on any code changes:

```bash
# Check for hardcoded colors (hex, rgb, hsl)
grep -RInE '#[0-9A-Fa-f]{6}|rgb\(|rgba\(|hsl\(|hsla\(' \
  apps/ packages/ src/ \
  --include="*.{ts,tsx,js,jsx,css,scss,html}" \
  --exclude-dir=node_modules \
  --exclude-dir=dist \
  --exclude-dir=.next

# Check for hardcoded pixel values (excluding comments and imports)
grep -RInE '\b\d+px\b' \
  apps/ packages/ src/ \
  --include="*.{ts,tsx,js,jsx,css,scss}" \
  --exclude-dir=node_modules \
  --exclude-dir=dist

# Check for non-design-system CSS variables
grep -RInE 'var\(--(?!tw-)' \
  apps/ packages/ src/ \
  --include="*.{ts,tsx,js,jsx,css,scss,html}" \
  --exclude-dir=node_modules
```

### Phase 2: Manual Review Checklist

When reviewing code (PR or manual), verify:

- [ ] **No hardcoded colors** - All color values use `theme()` or Tailwind classes
- [ ] **No hardcoded spacing** - All margins, paddings, gaps use design system scale
- [ ] **Typography matches** - Fonts are `font-sans` or `font-lato` from design system
- [ ] **Shadows from system** - No custom `box-shadow` values
- [ ] **Border radius from system** - Uses `rounded`, `rounded-md`, etc.
- [ ] **Z-index from system** - Uses design system z-index scale if available
- [ ] **Breakpoints match** - Uses standard `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

### Phase 3: Integration Check

For new apps or major features:

- [ ] Has `tailwind.config.js` that **extends** root config
- [ ] Has `postcss.config.js` for Tailwind processing
- [ ] Imports design system CSS or builds from design system tokens
- [ ] No CDN Tailwind or other external CSS frameworks
- [ ] All custom styles use `@layer` directives and `theme()` function

---

## Common Violations & Fixes

### Violation 1: Hardcoded Blue Color

❌ **Before:**
```css
.button {
  background: #0047BB;
  color: white;
}
```

✅ **After:**
```css
.button {
  background: theme('colors.primary.500');
  color: theme('colors.white');
}
```

### Violation 2: Random Spacing

❌ **Before:**
```tsx
<div style={{ padding: '18px', marginBottom: '22px' }}>
```

✅ **After:**
```tsx
<div className="p-[18px] mb-6"> {/* Use closest design system value */}
// OR if 18px is not in scale, use p-4 (16px) or p-5 (20px)
<div className="p-5 mb-6">
```

### Violation 3: Custom Font

❌ **Before:**
```css
.heading {
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
}
```

✅ **After:**
```css
.heading {
  font-family: theme('fontFamily.sans'); /* Montserrat */
  font-size: theme('fontSize.xl'); /* 1.25rem / 20px - closest match */
}
```

### Violation 4: Non-Standard Shadow

❌ **Before:**
```css
.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

✅ **After:**
```css
.card {
  box-shadow: theme('boxShadow.md'); /* Design system shadow */
}
```

---

## Agent Workflow

When invoked (manually or via CI), this agent should:

### 1. **Scan for Violations**
```bash
# Run automated checks (see Phase 1 above)
# Collect all violations with file paths and line numbers
```

### 2. **Categorize Findings**

**Blockers** (must fix before merge):
- Hardcoded colors (hex, rgb, hsl)
- Hardcoded font families not in design system
- CDN Tailwind or external CSS frameworks

**High Priority** (should fix):
- Hardcoded pixel spacing not in scale
- Custom shadow values
- Non-standard border radius

**Medium Priority** (nice to have):
- Could use design system utility instead of custom CSS
- Non-semantic color usage (e.g., using `blue-500` instead of `primary-500`)

### 3. **Generate Report**

```markdown
## Design System Foundation Compliance Report

### Summary
- ✅ Passed: X files
- ⚠️ Warnings: Y files
- ❌ Blockers: Z files

### Blockers
- `apps/my-app/index.html:45` - Hardcoded color `#0047BB` (use `theme('colors.primary.500')`)
- `src/components/CustomButton.tsx:23` - Hardcoded spacing `padding: 18px` (use design system scale)

### High Priority
- `apps/my-app/styles.css:102` - Custom shadow (use `theme('boxShadow.md')`)

### Recommended Actions
1. Replace all hardcoded colors with design system tokens
2. Use Tailwind spacing utilities or theme() function
3. Import fonts from design system config
```

### 4. **Provide Fix Suggestions**

For each violation, suggest the specific fix:
- Show the violating line
- Show the corrected version
- Reference the design system token to use

---

## Integration Points

### For Developers

Add to your pre-commit hook:
```bash
#!/bin/bash
# .husky/pre-commit

npm run lint:design-system

# Or run the checks directly
node scripts/check-design-system-compliance.js
```

### For CI/CD

Add to GitHub Actions / CI pipeline:
```yaml
- name: Check Design System Compliance
  run: |
    npm run lint:design-system
    # Fail build if blockers found
```

### For Code Review

Reviewers should ask:
1. "Are all colors from the design system?"
2. "Is spacing using the design system scale?"
3. "Are fonts from the approved list?"
4. "Do shadows and borders match design system?"

---

## Exceptions (Rare, Must Be Justified)

Some cases MAY warrant exceptions, but require explicit approval:

### Allowed Exceptions:
1. **Third-party library styles** that can't be overridden
2. **Performance-critical inline styles** (with comment explaining why)
3. **Temporary prototypes** (must be marked with `// TODO: Use design system`)
4. **Mathematical calculations** (e.g., `calc(100% - 2px)` for borders)

### Exception Format:
```css
/* DESIGN-SYSTEM-EXCEPTION: Reason
 * Third-party library requires inline style
 * Approved by: @username on 2026-01-16
 */
.library-override {
  color: #custom-value;
}
```

---

## Success Metrics

Track over time:
- **Violation Density**: Violations per 1000 lines of code
- **Compliance Rate**: % of files with zero violations
- **Fix Time**: Time from violation detection to resolution
- **New Violations**: Rate of new violations introduced

**Goal**: 100% compliance for all new code; <5% violations in legacy code.

---

## Quick Reference Card

```
✅ DO                                  ❌ DON'T
theme('colors.primary.500')          background: #0047BB
bg-primary-500                        color: rgb(0,71,187)
p-6 mb-4                              padding: 24px; margin: 18px
font-sans text-base                   font-family: 'Arial'
shadow-md                             box-shadow: 0 2px 8px ...
rounded-md                            border-radius: 6px
```

---

## Contact & Support

- **Questions**: Review `/tailwind.config.js` and `/src/tokens/`
- **New Token Needed**: Open issue with design team
- **Exception Request**: Tag design lead in PR

---

**Remember**: The design system is your friend. Use it, extend it, but never bypass its foundations.
