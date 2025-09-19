# Systematic Validation Rules for Design System Updates

## Core Principle: Cascading Changes
**Every design system change must propagate to ALL components, stories, and documentation automatically.**

## Validation Commands
```bash
# Validate all design token usage
npm run validate:tokens

# Auto-fix common token issues
npm run fix:tokens

# Comprehensive validation (tokens + accessibility + bundle)
npm run validate
```

## Mandatory Validation Steps

### 1. Pre-Change Analysis
Before making ANY design system change:
- [ ] Run `npm run validate:tokens` to establish baseline
- [ ] Search for ALL usages of the token/pattern being changed
- [ ] Document expected impact across components

### 2. During Change Implementation
- [ ] Update the root token/variable first
- [ ] Run validation after each major change
- [ ] Fix ALL broken references immediately
- [ ] Test in Storybook to verify visual changes

### 3. Post-Change Verification
- [ ] Run `npm run validate:tokens` - MUST pass with 0 violations
- [ ] Run `npm run test:vrt` - Visual regression tests
- [ ] Run `npm run build` - Ensure no build errors
- [ ] Check Storybook manually for visual correctness

## Critical Token Rules

### Border System (NEVER VIOLATE)
```css
/* Default borders - ALWAYS 1px, neutral-600 */
border: 1px solid var(--ds-color-border-default);

/* NOT allowed */
border: 2px solid var(--ds-color-border-default);  ❌ Wrong thickness
border: 1px solid #70717D;                         ❌ Hardcoded color
border: var(--ds-color-border-default);           ❌ Missing thickness
```

### Text Color Hierarchy (NEVER VIOLATE)
```css
/* Primary text - black for body content */
color: var(--ds-color-text-primary);    /* → #15172B */

/* Secondary text - for labels, captions */
color: var(--ds-color-text-secondary);  /* → neutral-700 */

/* Muted text - minimum ADA compliant */
color: var(--ds-color-text-muted);      /* → neutral-600 */

/* NOT allowed */
color: black;         ❌ Use --ds-color-black or --ds-color-text-primary
color: #15172B;       ❌ Use design tokens
color: #666;          ❌ Use neutral scale tokens
```

### Component-Specific Rules

#### Tables
- [ ] Default borders: `border-[var(--ds-color-border-default)]`
- [ ] NO double borders (container + table)
- [ ] Row hover: `hover:bg-[var(--ds-color-bg-surface)]`
- [ ] Header background: `bg-[var(--ds-color-bg-surface)]`

#### Forms
- [ ] Default borders: `border-[var(--ds-color-border-default)]`
- [ ] Focus states: `focus:border-[var(--ds-color-border-strong)]`
- [ ] Placeholder text: `placeholder:text-[var(--ds-color-text-muted)]`

#### Cards & Containers
- [ ] Background: `bg-[var(--ds-color-bg-canvas)]` or `bg-[var(--ds-color-bg-surface)]`
- [ ] Borders: `border-[var(--ds-color-border-default)]`
- [ ] Hover states: `hover:bg-[var(--ds-color-bg-surface)]`

## Automated Enforcement

### Pre-commit Hooks
```bash
# .husky/pre-commit
npm run validate:tokens
npm run lint
npm run type-check
```

### CI/CD Pipeline
```yaml
# .github/workflows/quality-gates.yml
- name: Validate Design Tokens
  run: npm run validate:tokens

- name: Visual Regression Tests
  run: npm run test:vrt

- name: Bundle Size Check
  run: npm run validate:bundle
```

### Development Workflow
1. **Always** run `npm run validate:tokens` before committing
2. **Never** merge PRs with token violations
3. **Immediately** fix broken token patterns when found
4. **Document** any new token usage patterns

## Forbidden Patterns (Auto-Rejected)

### Hardcoded Values
```css
❌ color: #15172B;           /* Use var(--ds-color-black) */
❌ border: 1px solid #ccc;   /* Use var(--ds-color-border-default) */
❌ background: white;        /* Use var(--ds-color-bg-canvas) */
❌ padding: 16px;            /* Use design system spacing tokens */
```

### Broken Tokens
```css
❌ [var(--ds-color-[^])*]    /* Malformed token syntax */
❌ var(--ds-color-border     /* Missing closing parenthesis */
❌ --ds-color-neutral-999    /* Non-existent token */
```

### Anti-Patterns
```css
❌ border: border;                    /* Incomplete declaration */
❌ border: 1px; border: solid;       /* Split declarations */
❌ .table { border: 1px } .table-container { border: 1px }  /* Double borders */
```

## Emergency Override Process

If you MUST bypass validation (extremely rare):

1. Add `/* design-system-override: reason */` comment
2. Document in PR why override is necessary
3. Create follow-up ticket to fix properly
4. Get design system team approval

## Success Metrics

✅ **Zero token violations** in validation runs
✅ **All VRT tests passing** after changes
✅ **Consistent visual appearance** across all components
✅ **ADA compliance maintained** (4.5:1 contrast minimum)
✅ **Build and deployment success** without errors

---

**Remember: Every pixel matters. Every token has a purpose. Every change affects the entire system.**