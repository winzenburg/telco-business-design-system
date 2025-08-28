# Design System — Claude Code Guide (Router · Rules · Tasks)

> Purpose: make Claude Code (and agents) produce **token-true, accessible, performant** components and enforce that quality in CI. Keep this file lean; push depth into the linked sources.

---

## Canonical Sources (read these first)

- **Repository Overview & Workflow** → `./packages/docs/context/README.md`
- **Visual Foundations / Tokens** → `./packages/docs/context/style-guide.md`
- **Design Principles (binding rules)** → `./packages/docs/context/design-principles.md`
- **Design Review Process & Merge Gates** → `./packages/docs/context/design-review-slash-command.md`
- **Design Heuristics (automation hints)** → `./packages/docs/context/design-heuristics.yaml`

### UX Reasoning Documents
- **structure, hierarchy, and user goal modeling** → `./packages/docs/context/ux-principles.md`
- **maps tasks to UI patterns** → `./packages/docs/context/interaction-patterns.md`
- **page structure and role-based layout rules** → `./packages/docs/context/layout-decisions.md`
- **inclusive design and accessibility guidance** → `./packages/docs/context/inclusive-ux.md`


> If any document conflicts, **Design Principles** win. The Style Guide supplies values; the Review doc enforces the bar; Heuristics inform automation.

---

## Non-Negotiable Guardrails (binding)

- **Tokens only** for color, typography, spacing, radius, shadow, motion. **No literal hex/rgb/px** in component code.
- **Theming** via CSS variables from `@company/tokens`; support light/dark, density, and RTL. No inline color overrides.
- **Variants / Sizes**: default set = `primary | secondary | ghost | destructive` and `sm | md | lg` unless a spec says otherwise; keep prop names consistent across components.
- **Accessibility (WCAG 2.1 AA)**: complete name/role/value; full keyboard operability; **visible focus**; correct ARIA patterns; contrast meets AA.
- **API shape**: typed props, `forwardRef`, controlled **and** uncontrolled where relevant; stable event contracts; no breaking prop renames without migration.
- **Performance**: SSR-safe, tree-shakeable, zero layout thrash on theme switch; avoid runtime CSS-in-JS (prefer CSS vars with precompiled styles or zero-runtime solutions).
- **Icons policy (resolved)**: Icon components use `currentColor` by default; support `colorToken="<token-name>"` (component resolves token → value). Authors never paste hex.
- **Never do**: invent tokens/variants ad-hoc; nth-child hacks that break composition; `dangerouslySetInnerHTML` in primitives; console errors in normal flows.
- **Component Organization**: Each component should be displayed as a standalone page in Storybook. **Never organize components in folder/category structures** within the Storybook navigation. Each component gets its own top-level page for discoverability and ease of use.

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

### 4) Hard-coded color / pixel sweep (gate)
- Scan `packages/ui/src/**` for `#[0-9A-Fa-f]{6}`, `rgb(`, and `\b\d+px\b`. Replace with tokens or scale utilities; include diffs and rationale.

**Prompt**  
"Find and replace hard-coded color/px in `packages/ui/src/**` with tokens/scale utilities; produce a diff and rationale."

---

### 5) Update VRT baselines (rare; justified)
- Only when intentional visual changes ship; update Playwright snapshots, attach before/after, and record rationale in PR.

**Prompt**  
"Refresh VRT baselines for changed stories with before/after screenshots and a one-line rationale per story."

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
