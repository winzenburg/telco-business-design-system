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

**🔴 IMMEDIATE FIXES NEEDED (as of Sep 23):**
- 10 components still using `--ds-color-border-default` (run `grep -r "border-default" src/components/ui`)
- TypeScript errors in index files blocking builds
- See `./packages/docs/context/automated-compliance-checks.md` for full list

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

- **Tokens only** for color, typography, spacing, radius, shadow, motion. **No literal hex/rgb/px** in component code.
- **Border Hierarchy (ENFORCED)**: Form inputs use `--ds-color-neutral-400` (#B4B5BB), structural elements use `--ds-color-neutral-300` (#DDDDE2). Never use `--ds-color-border-default` directly.
- **Theming** via CSS variables from `@company/tokens`; support light/dark, density, and RTL. No inline color overrides.
- **Variants / Sizes**: default set = `primary | secondary | ghost | destructive` and `sm | md | lg` unless a spec says otherwise; keep prop names consistent across components.
- **Accessibility (WCAG 2.1 AA)**: complete name/role/value; full keyboard operability; **visible focus**; correct ARIA patterns; contrast meets AA.
- **API shape**: typed props, `forwardRef`, controlled **and** uncontrolled where relevant; stable event contracts; no breaking prop renames without migration.
- **Performance**: SSR-safe, tree-shakeable, zero layout thrash on theme switch; avoid runtime CSS-in-JS (prefer CSS vars with precompiled styles or zero-runtime solutions). Components >20KB must use lazy loading. Bundle must stay under 200KB total, 50KB initial load.
- **Icons policy (resolved)**: Icon components use `currentColor` by default; support `colorToken="<token-name>"` (component resolves token → value). Authors never paste hex.
- **Never do**: invent tokens/variants ad-hoc; nth-child hacks that break composition; `dangerouslySetInnerHTML` in primitives; console errors in normal flows.
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
- **Form inputs** (input, textarea, select, checkbox, radio, command, form): Use `--ds-color-neutral-400` (#B4B5BB)
- **Structural elements** (table, card, accordion, dialog, sheet, separator, tabs, tooltip, toast, popover, breadcrumb): Use `--ds-color-neutral-300` (#DDDDE2)
- **NEVER use** `--ds-color-border-default` directly - it's deprecated
- Run `npm run fix:tokens` for automatic application; verify with `npm run validate:tokens`
- **Current violations (Sep 23):** checkbox, radio-group, command, card, dialog, sheet, tabs, popover, breadcrumb, chart

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
