# Design System — Claude Code Guide (Router · Rules · Tasks)

> Purpose: make Claude Code (and agents) produce **token-true, accessible, performant** components and enforce that quality in CI. Keep this file lean; push depth into the linked sources.

## 🚀 Quick Reference

**After ANY changes:**
```bash
npm run lint && npm run type-check && npm run build
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

**🚨 MANDATORY**: After ANY token changes, also run:
```bash
npm run build:storybook  # Test for circular reference errors
```
This catches circular reference issues that only appear during Storybook builds (like the Netlify failures).

**✅ RECENT ACCOMPLISHMENTS (Jan 2025):**
- ✅ All form controls standardized with consistent `error` prop API (Input, Select, Textarea, Checkbox, RadioGroup, Switch, Combobox, Slider)
- ✅ Comprehensive 14-section MDX documentation created for 8 form components (located at `stories/Documentation/Forms/`)
- ✅ Form input state standards defined: Default, Focused, Filled, Error, Disabled
- ✅ Switch component migrated from CSS variables to Tailwind tokens for consistency
- ✅ All components rebuilt using ShadCN-First approach with proper border hierarchy

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

### ⚠️ Critical Infrastructure
- **Circular Reference Prevention** → `./packages/docs/context/circular-reference-prevention.md`
- **Emergency Procedures** → `./packages/docs/context/emergency-procedures.md`
- **Automated Compliance Checks** → `./packages/docs/context/automated-compliance-checks.md` ← NEW: Pre-build validation rules

> If any document conflicts, **Design Principles** win. The Style Guide supplies values; the Review doc enforces the bar; Heuristics inform automation.

---

## Non-Negotiable Guardrails (binding)

- **🚨 MANDATORY: ShadCN/UI-First Approach**: ALWAYS start with the official ShadCN/UI component implementation as the base. NEVER build components from scratch. Copy the exact component code from https://ui.shadcn.com/docs/components/[component-name] or https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/registry/default/ui/[component].tsx, then enhance with design system tokens. This prevents hallucinations and ensures battle-tested implementations.
- **Component Implementation Process (ENFORCED)**:
  1. **Fetch official ShadCN/UI implementation** - Use WebFetch to get the exact component code
  2. **Copy implementation verbatim** - Start with their exact structure, props, and patterns
  3. **Enhance with design tokens** - Replace hardcoded values with CSS custom properties
  4. **Apply border hierarchy** - Follow our specific border color rules
  5. **Test alignment and functionality** - Use Playwright to verify visual correctness
- **Tokens only** for color, typography, spacing, radius, shadow, motion. **No literal hex/rgb/px** in component code.
- **Border Hierarchy (ENFORCED)**: Form inputs use `--ds-color-neutral-400` (#B4B5BB), structural elements use `--ds-color-neutral-300` (#DDDDE2). Never use `--ds-color-border-default` directly.
- **Theming** via CSS variables from `@company/tokens`; support light/dark, density, and RTL. No inline color overrides.
- **Variants / Sizes**: default set = `primary | secondary | ghost | destructive` and `sm | md | lg` unless a spec says otherwise; keep prop names consistent across components.
- **Accessibility (WCAG 2.1 AA)**: complete name/role/value; full keyboard operability; **visible focus**; correct ARIA patterns; contrast meets AA.
- **API shape**: typed props, `forwardRef`, controlled **and** uncontrolled where relevant; stable event contracts; no breaking prop renames without migration.
- **Performance**: SSR-safe, tree-shakeable, zero layout thrash on theme switch; avoid runtime CSS-in-JS (prefer CSS vars with precompiled styles or zero-runtime solutions). Components >20KB must use lazy loading. Bundle must stay under 200KB total, 50KB initial load.
- **Icons policy (resolved)**: Icon components use `currentColor` by default; support `colorToken="<token-name>"` (component resolves token → value). Authors never paste hex.
- **Never do**: invent tokens/variants ad-hoc; nth-child hacks that break composition; `dangerouslySetInnerHTML` in primitives; console errors in normal flows; build components from scratch without ShadCN/UI base.
- **Component Organization**: Each component should be displayed as a standalone page in Storybook. **Never organize components in folder/category structures** within the Storybook navigation. Each component gets its own top-level page for discoverability and ease of use.

### ⚠️ CRITICAL: Circular Reference Prevention

**NEVER import token files in Tailwind configs!** This is the #1 cause of deployment failures.

For complete guidance, see: `./packages/docs/context/circular-reference-prevention.md`

**Emergency Fix:**
```bash
# If Netlify is failing RIGHT NOW:
grep -r "require.*token\|import.*token" tailwind.config.js packages/docs/tailwind.config.js
# If ANY results: Remove imports, hardcode values, test with npm run build:storybook
```

For step-by-step emergency procedures: `./packages/docs/context/emergency-procedures.md`

---

## Essential Commands (memorize these)

```bash
# Build & Quality Checks
npm run build          # Build for NPM distribution
npm run type-check     # Run TypeScript type checking
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

**CRITICAL**: Always run `npm run lint` and `npm run type-check` after making changes. These catch 90% of issues before PR.

---

## Tasks / Playbooks (copy & run)

### 1) Build from ShadCN/UI base → enhance + tests + docs
**MANDATORY ShadCN/UI-First Process**:
1. **Fetch official ShadCN/UI implementation** using WebFetch from https://ui.shadcn.com/docs/components/[component-name] or GitHub raw URL
2. **Copy implementation verbatim** - Use their exact structure, props, classNames, and patterns
3. **Enhance with design tokens** - Replace hardcoded Tailwind classes with our design system tokens
4. **Apply border hierarchy** - Use `neutral-400` for form inputs, `neutral-300` for structural elements
5. **Add comprehensive Storybook stories** (all variants/sizes + hover/focus/disabled + RTL + long text)
6. **Write tests** (Vitest + Testing Library), **axe** checks (0 violations), and Playwright VRT snapshots (diff ≤ 1%)
7. **Create MDX docs** with **"Tokens Used"** table listing exact token keys (see Task 10 for structure)
8. **Visual verification** - Use Playwright screenshots to ensure proper alignment and functionality

**Prompt**
"Build `{Component}` using ShadCN/UI-First approach: 1) Fetch official ShadCN/UI implementation, 2) Copy verbatim, 3) Enhance with design tokens, 4) Add comprehensive stories/tests/docs, 5) Verify with Playwright screenshots."

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
- **Form inputs** (input, textarea, select, checkbox, radio, command, form): Use `border-neutral-400` (#B4B5BB)
- **Structural elements** (table, card, accordion, dialog, sheet, separator, tabs, tooltip, toast, popover, breadcrumb): Use `border-neutral-300` (#DDDDE2)
- **NEVER use** `--ds-color-border-default` directly - it's deprecated
- Run `npm run fix:tokens` for automatic application; verify with `npm run validate:tokens`
- **✅ RESOLVED:** All form controls (Input, Select, Textarea, Checkbox, RadioGroup, Switch, Combobox, Slider) now use correct border hierarchy

**Prompt**
"Fix ALL border-default usage in ui components. Apply border hierarchy: form inputs use neutral-400, structural use neutral-300. Verify with grep and force Storybook reload."

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

### 8) Performance optimization for heavy components
- Components >20KB must be lazy loaded. Check with `npm run analyze:bundle`.
- Use `packages/components/src/lazy/index.tsx` patterns for code splitting.
- Ensure tree-shaking works with `npm run verify:tree-shaking`.

**Prompt**
"Check component size with bundle analyzer. If >20KB, implement lazy loading using existing patterns in packages/components/src/lazy/. Verify tree-shaking effectiveness."

---

### 9) Fix TypeScript build errors for NPM distribution
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

### 10) Create comprehensive MDX component documentation
**14-Section Documentation Structure** (place in `stories/Documentation/Forms/[Component].mdx`):

1. **Component Name** - Clear title with h1
2. **Description** - Overview with primary use cases and business context
3. **Anatomy** - Visual breakdown with ASCII diagram showing all parts
4. **Usage Guidelines** - When to use, when NOT to use, best practices
5. **Behavior / Interaction States** - All states documented (Default, Hover, Focused, Filled, Disabled, Error, Loading, etc.)
6. **Variants** - By size, type, content organization, functionality
7. **Accessibility (a11y) Considerations** - Keyboard interaction, ARIA attributes, screen reader behavior, color contrast, focus indicators
8. **Content Guidelines** - Labels, placeholders, error messages, hint text (with Do's and Don'ts)
9. **Responsive Behavior** - Mobile, tablet, desktop breakpoints
10. **Code Example** - TSX code examples with proper syntax (```tsx without escaping backticks)
11. **Do's and Don'ts** - Tables with specific examples
12. **Related Components** - Cross-references to similar components
13. **Conversion Considerations** - Impact on conversion rates, optimization tips, testing recommendations
14. **Version History** - Changelog table
15. **Design Tokens Used** - Complete table with token names, values, and usage

**MDX File Structure:**
```mdx
import { Meta } from '@storybook/blocks';

<Meta title="Documentation/Forms/ComponentName" />

# ComponentName

## Description
[Content with **bold** for primary use cases and business context]

## Anatomy
[ASCII diagram + numbered list of parts]

## Usage Guidelines
### When to Use
- ✅ Use case 1
### When NOT to Use
- ❌ Anti-pattern 1
### Best Practices
- Guidance 1

[... continue with all 14 sections]

## Design Tokens Used
| Token | Value | Usage |
|-------|-------|-------|
| `border-neutral-400` | #B4B5BB | Default border |
```

**CRITICAL MDX Rules:**
- Use plain backticks for code blocks: ` ```tsx ` NOT `\`\`\`tsx`
- Import only `Meta` from '@storybook/blocks'
- Title format: `Documentation/Forms/ComponentName` for proper navigation
- No component imports needed (docs are informational, not interactive)

**Prompt**
"Create comprehensive 14-section MDX documentation for {Component} at stories/Documentation/Forms/{Component}.mdx following the structure above. Use plain backticks (no escaping) for code blocks."

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

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
When fixing TypeScript errors, ALWAYS run `npm run build` to verify fixes.
When modifying components, ALWAYS run `npm run lint` and `npm run type-check`.

## Form Component Standards (Established Jan 2025)
**Consistent Error Prop Pattern:**
- All form controls expose an explicit `error?: boolean` prop
- Components: Input, Select, Textarea, Checkbox, RadioGroup, Switch, Combobox, Slider
- Error styling: `border-destructive` and `focus:ring-destructive`

**Form Input States Standard (5 core states):**
1. **Default** - Neutral appearance, ready for input
2. **Focused** - Primary-500 border and focus ring
3. **Filled** - Content present, normal styling
4. **Error** - Destructive border and messaging
5. **Disabled** - Reduced opacity, not-allowed cursor

**Token Usage:**
- Form input borders: `border-neutral-400` (#B4B5BB)
- Structural borders: `border-neutral-300` (#DDDDE2)
- Focus rings: `ring-primary-500` (#0D62FF)
- Error states: `border-destructive`, `ring-destructive` (#D11314)
- Use Tailwind tokens, NOT CSS variables (e.g., `bg-primary-500` not `var(--ds-color-intent-primary)`)
