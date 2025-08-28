
# Comcast Business Design System — Design Principles (Clean)

> Purpose: the **binding rules** for how we design and implement components. This is the source of truth for non‑negotiables, API patterns, and workflow. If this doc conflicts with others, **this doc wins**.

## Non‑negotiables
1. **Accessibility by default** — WCAG 2.1 AA; full keyboard support; visible focus; correct name/role/value; ARIA patterns per component spec.
2. **Token‑driven styling** — all color/space/type/shadow/motion come from `@company/tokens` (CSS variables). No literals in components.
3. **Stable APIs** — forwardRef; typed props; controlled + uncontrolled when appropriate; consistent prop names across similar components.
4. **Performance** — SSR‑safe; tree‑shakeable; minimal re‑renders; avoid runtime CSS‑in‑JS; no console errors/warnings.
5. **Theming** — support light/dark, density, RTL via attributes (`data-theme`, `dir="rtl"`). No hardcoded palette in components.
6. **Documentation** — every component ships MDX with: What/Why, Anatomy, Props, Tokens Used, A11y, Do/Don’t, Examples, Changelog.

## Token architecture
- **Global** → **Alias (semantic)** → **Component** tokens.
- Naming: `--ds.{category}.{role}.{scale}.{state}` (e.g., `--ds.color.bg.surface.default`).
- Modes/Density override tokens via attributes on the root.
- **Renames:** provide aliases for 2 minor versions; publish codemods and migration notes.

## API & Variants
- Use a variant system (e.g., CVA/recipes) with standard variants: `primary | secondary | ghost | destructive`; sizes: `sm | md | lg` (unless spec says otherwise).
- Props must be composable and predictable; avoid boolean explosion — prefer `variant/size/intent` patterns.

## Component workflow
**Phase 1 — Figma analysis**: extract variants, states, token map, keyboard map.  
**Phase 2 — Implement**: code with tokens; write stories for all states (hover/focus/active/disabled/loading/error), RTL, long text, both themes.  
**Phase 3 — Tests**: Vitest + Testing Library for interactions; axe for a11y; Playwright VRT per state.  
**Phase 4 — Docs**: MDX per template with **Tokens Used** table.  
**Phase 5 — Release**: Changeset with semver rationale; add migration notes if API/tokens change.

## Icon policy (conflict resolution)
- Use the **Icon component** exclusively. Default color is `currentColor`. Consumers may set `colorToken` to a token name; implementation resolves token → value. Raw SVGs are normalized to support this. Authors never paste hex/rgb.

## Governance & maturity
- Status: Proposed → Beta → Stable → Deprecated.  
- Breaking API changes = major; token renames with alias = minor.  
- Deprecations keep shims for 2 minors with codemods.

## CI gates (binding acceptance criteria)
- axe: **0 violations** on changed surfaces; waivers documented in MDX.
- Playwright VRT snapshots added for variants/sizes/states; diffs justified.
- Stories cover both themes, RTL, and long‑text/overflow.
- No literal colors/px values; lint/grep gate enforces this.
- Changeset + docs updated in the same PR.

