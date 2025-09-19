# Design System — Claude Code Guide (Router · Rules · Tasks)

> Purpose: make Claude Code (and agents) produce **token-true, accessible, performant** components and enforce that quality in CI. Keep this file lean; push depth into the linked sources.

## 🚀 Quick Reference

**After ANY changes:**
```bash
npm run lint && npm run typecheck && npm run build
```

**🚨 CRITICAL: Ensure changes are reflected in Storybook:**
```bash
npm run force-reload    # Force timestamp updates on all files
npm run verify:storybook # Verify all changes are visible
```

**Before ANY PR:**
```bash
npm run validate:tokens && npm run validate:a11y && npm run test
```

**Common Fixes:**
- TypeScript errors? → Check [Section 6](#6-fix-typescript-build-errors-for-npm-distribution)
- Hard-coded colors? → Use tokens from `packages/tokens/`
- Missing icons? → Sync `design-system-icons-types.ts` with `icon-registry.ts`
- Build failing? → Run `npm run build` and check error patterns

---

## Canonical Sources (read these first)

- **Repository Overview & Workflow** → `./packages/docs/context/README.md`
- **Visual Foundations / Tokens** → `./packages/docs/context/style-guide.md`
- **Border Hierarchy Rules (ENFORCED)** → `./packages/docs/context/border-hierarchy-rules.md`
- **Design Principles (binding rules)** → `./packages/docs/context/design-principles.md`
- **Design Review Process & Merge Gates** → `./packages/docs/context/design-review-slash-command.md`
- **Design Heuristics (automation hints)** → `./packages/docs/context/design-heuristics.yaml`
- **Visual Regression Testing** → `./packages/docs/context/visual-regression-testing.md`
- **Performance Optimization** → `./reports/performance-optimization-report.md`

### UX Reasoning Documents
- **structure, hierarchy, and user goal modeling** → `./packages/docs/context/ux-principles.md`
- **maps tasks to UI patterns** → `./packages/docs/context/interaction-patterns.md`
- **page structure and role-based layout rules** → `./packages/docs/context/layout-decisions.md`
- **inclusive design and accessibility guidance** → `./packages/docs/context/inclusive-ux.md`

### Quality & Standards Documents
- **discipline-specific excellence checklists** → `./packages/docs/context/quality-checklists.md`
- **development playbooks and specialized prompts** → `./packages/docs/context/development-playbooks.md`
- **storybook standards and documentation requirements** → `./packages/docs/context/storybook-standards.md`
- **systematic gap remediation patterns & templates** → `./packages/docs/context/implementation-patterns.md`
- **performance optimization patterns & budgets** → `./packages/docs/context/performance-patterns.md`

> If any document conflicts, **Design Principles** win. The Style Guide supplies values; the Review doc enforces the bar; Heuristics inform automation.

---

## Non-Negotiable Guardrails (binding)

- **Tokens only** for color, typography, spacing, radius, shadow, motion. **No literal hex/rgb/px** in component code.
- **Border Hierarchy (ENFORCED)**: Form inputs use `--ds-color-neutral-400` (#B4B5BB), structural elements use `--ds-color-neutral-300` (#DDDDE2). Never use `--ds-color-border-default` directly.
- **Theming** via CSS variables from `@company/tokens`; support light/dark, density, and RTL. No inline color overrides.
- **Variants / Sizes**: default set = `primary | secondary | ghost | destructive` and `sm | md | lg` unless a spec says otherwise; keep prop names consistent across components.
- **Accessibility (WCAG 2.1 AA)**: complete name/role/value; full keyboard operability; **visible focus**; correct ARIA patterns; contrast meets AA.
- **API shape**: typed props, `forwardRef`, controlled **and** uncontrolled where relevant; stable event contracts; no breaking prop renames without migration.
- **Performance**: SSR-safe, tree-shakeable, zero layout thrash on theme switch; avoid runtime CSS-in-JS (prefer CSS vars with precompiled styles or zero-runtime solutions). Components >20KB must use lazy loading. Bundle must stay under 200KB total, 50KB initial load.
- **Icons policy (resolved)**: Icon components use `currentColor` by default; support `colorToken="<token-name>"` (component resolves token → value). Authors never paste hex.
- **Module Exports (CRITICAL)**: NEVER use `export *` from token files. Always use selective named exports to prevent circular references. See [Token Export Guidelines](#token-export-guidelines).
- **Circular Reference Prevention**: Token files must not reference their own exports within the same module. Use separate constants or direct values for internal references.
- **Never do**: invent tokens/variants ad-hoc; nth-child hacks that break composition; `dangerouslySetInnerHTML` in primitives; console errors in normal flows; wildcard exports from token modules.
- **Component Organization**: Each component should be displayed as a standalone page in Storybook. **Never organize components in folder/category structures** within the Storybook navigation. Each component gets its own top-level page for discoverability and ease of use.

### Component API Consistency Rules
- **Props naming**: `size` (not `sizes`), `variant` (not `variants`), `className` (not `class`)
- **Event handlers**: `onClick`, `onChange`, `onFocus` (always camelCase with "on" prefix)
- **Boolean props**: `disabled`, `required`, `checked` (never `isDisabled`, `isRequired`)
- **Compound components**: Export as `Component.Item`, `Component.Header`, etc.
- **Ref forwarding**: ALL interactive components must forward refs properly
- **Children types**: Explicitly type as `React.ReactNode` when accepting any content

### API Consistency Standards\n\n#### Required Props Pattern\n```typescript\n// ✅ ALL components must support these base props\ninterface BaseComponentProps {\n  className?: string\n  'data-testid'?: string  // For testing\n  id?: string\n}\n\n// ✅ Interactive components extend with these\ninterface InteractiveProps extends BaseComponentProps {\n  disabled?: boolean\n  loading?: boolean\n  size?: 'sm' | 'default' | 'lg'  // Standardized sizes\n  variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'destructive'\n  onClick?: (event: React.MouseEvent) => void\n  onFocus?: (event: React.FocusEvent) => void\n  onBlur?: (event: React.FocusEvent) => void\n}\n\n// ✅ Form components add these\ninterface FormComponentProps extends InteractiveProps {\n  label?: string\n  required?: boolean\n  error?: boolean\n  errorMessage?: string\n  hintText?: string\n  'aria-label'?: string\n  'aria-describedby'?: string\n  'aria-invalid'?: boolean\n}\n```\n\n#### Naming Standards\n- **Props**: `size` (not `sizes`), `variant` (not `variants`), `className` (not `class`)\n- **Events**: `onClick`, `onChange`, `onFocus` (camelCase with \"on\" prefix)\n- **Booleans**: `disabled`, `required`, `checked` (never `isDisabled`, `isRequired`)\n- **Icons**: `leftIcon`, `rightIcon` as `React.ReactNode` (not string names)\n- **❌ Never**: Demo props like `inputState`, `buttonState` in production APIs\n\n#### Required Implementation\n- Use `React.forwardRef` for ALL interactive components\n- Import shared interfaces from `packages/components/types/base-props.ts`\n- Include comprehensive ARIA support\n- Support `data-testid` for automated testing\n- Generate docs with `npm run generate:api-docs`\n\n### Critical Import Patterns
```typescript
// Components
import { Button, Card } from '../ui/button'  // ✅ Relative paths within packages
import { colors } from '../../tokens/design-system-colors'  // ✅ Two levels up for tokens

// Utils
import { cn } from '../utils/cn'  // ✅ Standard classname utility
import { cva } from 'class-variance-authority'  // ✅ For variants

// Types
import type { VariantProps } from 'class-variance-authority'
import * as React from 'react'  // ✅ Always namespace React

// Icons (after sync)
import { CoreIconName } from '../../tokens/design-system-icons-types'
```

---

## Token Export Guidelines

### 🚨 CRITICAL: Preventing Circular References

**The Problem**: Using `export *` from token files can export circular references that cause "Maximum call stack size exceeded" errors during build, especially with Tailwind CSS processing.

**The Solution**: Always use selective named exports from token modules.

### ✅ Correct Token Export Patterns

```typescript
// ✅ GOOD: Selective named exports (prevents circular refs)
export {
  colors,
  cleanColorsForTailwind,  // Safe for Tailwind configs
  tailwindColors,
  primaryColorUsage,
  brand,
  blue, neutral, red, green, yellow, orange, purple,
  black, white, pageBackground,
  navy, sky, teal,
  getColor
} from './design-system-colors';

// ✅ GOOD: Define constants first, then use in multiple places
const SPECIAL_COLORS = {
  black: "#15172B",
  white: "#FFFFFF",
  pageBackground: "#EDEFEF"
};

export const colors = {
  black: SPECIAL_COLORS.black,
  white: SPECIAL_COLORS.white,
  pageBackground: SPECIAL_COLORS.pageBackground,
  // ... other colors
};

export const colorSystem = {
  bg: {
    page: SPECIAL_COLORS.pageBackground,  // Direct reference, no circular ref
    pure: SPECIAL_COLORS.white,
  }
};
```

### ❌ Patterns That Cause Issues

```typescript
// ❌ BAD: Wildcard exports (exports everything including circular refs)
export * from './design-system-colors';

// ❌ BAD: Self-referencing within same module
export const colors = { white: "#FFFFFF" };
export const colorSystem = {
  bg: { pure: colors.white }  // Circular reference!
};

// ❌ BAD: Using exports within same module
export const white = colors.white;
export const utils = { bg: white };  // References export from same file
```

### 🔧 Token File Architecture

1. **Define base constants first**
2. **Build objects from constants**
3. **Create utilities from constants (not exports)**
4. **Export selectively, never with wildcards**

### 🛠️ Debugging Circular References

If you see "Maximum call stack size exceeded":

1. **Check all `export *` statements** - replace with selective exports
2. **Check for self-references** - token files referencing their own exports
3. **Check Tailwind configs** - ensure they use `cleanColorsForTailwind`
4. **Test build locally** with `npm run build:storybook`

---

## Essential Commands (memorize these)

```bash
# Build & Quality Checks
npm run build          # Build for NPM distribution
npm run typecheck      # Run TypeScript type checking
npm run lint           # ESLint with auto-fix
npm run test           # Run all tests (unit + integration)
npm run test:a11y      # Accessibility tests with axe-core
npm run storybook      # Start Storybook dev server
npm run storybook:build # Build static Storybook

# CI Quality Gates (must pass)
npm run validate:tokens     # Ensure no hard-coded values + border hierarchy
npm run validate:heuristics # Check design heuristic compliance
npm run validate:docs       # Documentation completeness
npm run validate:a11y       # Accessibility audit
npm run check:api          # API stability check
npm run analyze:bundle      # Bundle size analysis
npm run verify:tree-shaking # Tree-shaking effectiveness
npm run test:vrt           # Visual regression tests
npm run force-reload       # Force Storybook hot reload
npm run dev:fresh          # Complete Storybook restart
```

**CRITICAL**: Always run `npm run lint` and `npm run typecheck` after making changes. These catch 90% of issues before PR.

**🚨 MANDATORY**: After ANY token changes, also run:
```bash
npm run build:storybook  # Test for circular reference errors
npm run validate:tokens  # Check for hardcoded values/violations
```

---

## Tasks / Playbooks (copy & run)

### 1) Build from spec → implementation + tests + docs
Using `./components/{Component}/spec.md` plus the Guardrails:
- Generate `src/{Component}.tsx` (wrap Radix/Headless when applicable), Storybook stories (all variants/sizes + hover/focus/disabled + RTL + long text), tests (Vitest + Testing Library), **axe** checks (0 violations), and Playwright VRT snapshots (diff ≤ 1%).
- Create MDX docs per docs style with a **"Tokens Used"** table listing the exact token keys.
- Add a Changeset with correct semver and migration notes (if props/tokens changed).

**Prompt**  
"Build `{Component}` from `./components/{Component}/spec.md` following the Guardrails. Implement, add stories (states/RTL/long text), write tests + axe + VRT, write MDX with Tokens Used, and add a Changeset."

---

### 2) Sync tokens from Figma (Token Studio → code)
- Compare the latest Token Studio export (see repo note or CI artifact path) to `packages/tokens/src/*.json`.
- Propose a minimal-diff PR; preserve token names; if renaming, add aliases + deprecate for **2 minors**; run Style Dictionary; update typings; write migration notes; bump **minor**.

**Prompt**  
"Compare Figma Token Studio export with `packages/tokens/src/*.json`. Produce a minimal diff PR, run Style Dictionary, update typings, add aliases for renames, write migration notes, bump minor."

---

### 3) Deprecate & migrate props/tokens
- Search for `{OldPropOrToken}`; generate a **codemod** to `{NewPropOrToken}`; update MDX and usage examples; add deprecation warnings slated for removal in **2 minors**.

**Prompt**  
"Migrate `{Old}` → `{New}` across repo via codemod, update docs and examples, add deprecation warnings, and include a Changeset."

---

### 4) Apply border hierarchy rules (CRITICAL)
- **Form inputs** (input, textarea, select, checkbox, radio, time-picker): Use `--ds-color-neutral-400` (#B4B5BB)
- **Structural elements** (table, card, accordion, dialog, sheet, separator): Use `--ds-color-neutral-300` (#DDDDE2)
- Run `npm run fix:tokens` for automatic application; verify with `npm run validate:tokens`

**Prompt**
"Apply border hierarchy rules: form inputs use neutral-400, structural elements use neutral-300. Run validation and force Storybook reload to verify changes."

---

### 5) Hard-coded color / pixel sweep (gate)
- Scan `packages/ui/src/**` for `#[0-9A-Fa-f]{6}`, `rgb(`, and `\b\d+px\b`. Replace with tokens or scale utilities; include diffs and rationale.

**Prompt**
"Find and replace hard-coded color/px in `packages/ui/src/**` with tokens/scale utilities; produce a diff and rationale."

---

### 6) Ensure Storybook reflects changes (MANDATORY)
- After ANY component changes, run: `npm run force-reload && npm run verify:storybook`
- If changes not visible: `npm run dev:fresh` (kills all processes, clears caches, restarts)
- Manual verification: Navigate to component in Storybook, check borders match expected tokens

**Prompt**
"Force Storybook reload and verify all component changes are visible. Check table borders are light (neutral-300) and form input borders are darker (neutral-400)."

---

### 7) Update VRT baselines (rare; justified)
- Only when intentional visual changes ship; update Playwright snapshots, attach before/after, and record rationale in PR.

**Prompt**
"Refresh VRT baselines for changed stories with before/after screenshots and a one-line rationale per story."

---

### 6) Performance optimization for heavy components
- Components >20KB must be lazy loaded. Check with `npm run analyze:bundle`.
- Use `packages/components/src/lazy/index.tsx` patterns for code splitting.
- Ensure tree-shaking works with `npm run verify:tree-shaking`.

**Prompt**
"Check component size with bundle analyzer. If >20KB, implement lazy loading using existing patterns in packages/components/src/lazy/. Verify tree-shaking effectiveness."

---

### 7) Fix TypeScript build errors for NPM distribution
When preparing NPM packages, these are the most common issues:

**Common Error Patterns & Solutions:**
- **"Type 'X' is not assignable"** → Add explicit type casting or fix prop spreading
- **"Property 'children' is required"** → Explicitly pass children prop when using Typography components
- **"Duplicate identifier"** → Rename interface to avoid conflicts (e.g., `ElevationLevel` → `ElevationData`)
- **"Cannot find module"** → Check relative paths; tokens are at `../../tokens/`, not `../tokens/`
- **"Type 'ForwardRefExoticComponent' not assignable"** → Use primitive elements directly or cast with `as any`
- **Missing icon names** → Sync `design-system-icons-types.ts` with `icon-registry.ts`

**Prompt**
"Fix TypeScript build errors for NPM distribution. Run `npm run build`, identify errors, apply fixes from common patterns above."

---

### Run a design review on a PR
Use the **design-review** agent.

Input:
- pr_number: {PR_NUMBER}
- preview_url: {PREVIEW_URL}
- storybook_url: {STORYBOOK_URL}
- pages: ["/", "/checkout", "/settings"]   # optional
- themes: ["light","dark"]
- viewports: [{width:1440,height:900},{width:768,height:1024},{width:375,height:812}]

Deliverables:
- Markdown report + JSON summary + screenshots saved under reports/
- Comment the Markdown report back to the PR (if CI provides a token)

---

## Performance Optimization Checklist

When implementing or reviewing components, ensure:

1. **Bundle Size**
   - Tree-shakeable exports (named exports, not default)
   - Lazy load heavy components (charts, editors)
   - Check with: `npm run check:budgets`

2. **Runtime Performance**
   - No unnecessary re-renders (use `React.memo` where appropriate)
   - Debounce/throttle expensive operations
   - Virtual scrolling for long lists (>100 items)

3. **CSS Performance**
   - Use CSS variables for theming (no runtime style calculation)
   - Avoid layout thrashing (batch DOM reads/writes)
   - Prefer `transform` and `opacity` for animations

---

## Accessibility Testing Requirements

**Every component MUST pass:**

1. **Automated checks**: `npm run test:a11y` (0 violations)
2. **Keyboard navigation**: Tab, Arrow keys, Enter, Escape work as expected
3. **Screen reader**: Proper ARIA labels, live regions, announcements
4. **Focus management**: Visible focus indicators, logical tab order
5. **Color contrast**: AA minimum (4.5:1 for normal text, 3:1 for large)

**Test with:**
```bash
# Run axe-core tests
npm run test:a11y

# Check specific component
npm run test:a11y -- Button

# Generate accessibility report
npm run validate:a11y
```

---

## NPM Package Distribution

### Package Structure
```
dist/
├── index.js        # CommonJS bundle
├── index.mjs       # ESM bundle
├── types/          # TypeScript definitions
└── icons/          # Optimized icon assets
```

### Publishing Checklist
1. **Version bump**: Use changesets (`npx changeset`)
2. **Build check**: `npm run build` succeeds
3. **Type exports**: All public APIs have TypeScript definitions
4. **Peer deps**: React versions specified correctly
5. **Tree-shaking**: Test with webpack/rollup bundle analyzer
6. **Package size**: Under budget limits (check with `npm run check:budgets`)

### Import Patterns Users Should Use
```typescript
// ✅ Best - lazy load heavy components
import { Button } from '@comcast/comcast-business-design-system'
import { LazyChart, LazyTable } from '@comcast/comcast-business-design-system/lazy'

// ✅ Good - tree-shakeable for light components
import { Button, Card, Input } from '@comcast/comcast-business-design-system'

// ⚠️  Caution - pulls in heavy component synchronously
import { Chart } from '@comcast/comcast-business-design-system'

// ❌ Wrong - imports entire library
import * as DS from '@comcast/comcast-business-design-system'
```

---

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
When fixing TypeScript errors, ALWAYS run `npm run build` to verify fixes.
When modifying components, ALWAYS run `npm run lint` and `npm run typecheck`.


      IMPORTANT: this context may or may not be relevant to your tasks. You should not respond to this context unless it is highly relevant to your task.