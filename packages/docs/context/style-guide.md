# Comcast Business Design System — Visual Foundations (Clean)

> Purpose: define **visual decisions** for color, type, spacing, elevation, iconography, and responsive layout **as tokens**. Engineers never paste hex/rgb values in components—tokens are the contract. Values below are provided only as a reference for the tokens package.

## Principles (applies to this doc)
- **Token-first:** all visual values resolve from `@company/tokens` (CSS variables). No literals in components.
- **Accessible by default:** color and type scales must meet WCAG 2.1 AA. Verify contrast per state.
- **Responsive & scalable:** 4px baseline grid; consistent breakpoints.

## Color System (semantic tokens)
Use **semantic** tokens. Brand/base tokens are implementation details exposed via the tokens package.
- `--ds.color.text.primary`
- `--ds.color.text.muted`
- `--ds.color.bg.canvas`
- `--ds.color.bg.surface`
- `--ds.color.border.default`
- `--ds.color.intent.primary` (CTA)
- `--ds.color.intent.destructive`
- `--ds.color.intent.success`
- `--ds.color.intent.warning`
- `--ds.color.intent.info`

### Token map (reference values only)
> These values live in the tokens package; do **not** copy into components.

| Token | Initial value |
|---|---|
| `--ds.color.intent.primary` | #0D62FF |
| `--ds.color.intent.destructive` | #D11314 |
| `--ds.color.intent.success` | #16A34A |
| `--ds.color.intent.warning` | #F59E0B |
| `--ds.color.text.primary` | #15172B |
| `--ds.color.text.muted` | #70717D |
| `--ds.color.bg.canvas` | #FFFFFF |
| `--ds.color.bg.surface` | #F9FAFB |
| `--ds.color.border.default` | #E8EAEF |

> Dark mode and brand variants override these via `data-theme` attributes. Contrast must be re-validated per mode.

## Typography
- **Fonts:** Headings `Montserrat`, Body `Lato` (fallback stacks configured in tokens).
- **Scale:** Typescale tokens (`--ds.font.size.sm|md|lg|xl|2xl`); line-heights `--ds.font.line.*`; weights `--ds.font.weight.*`.
- **Usage:** Choose size by **role** (heading level, body, caption) rather than pixels.

## Spacing & Layout
- **Baseline grid:** 4px. Spacing tokens: `--ds.space.1 (4px)`, `--ds.space.2 (8px)`, … `--ds.space.8 (32px)`, `--ds.space.10 (40px)`, `--ds.space.12 (48px)`.
- **Breakpoints:** `--ds.bp.sm (640px)`, `--ds.bp.md (768px)`, `--ds.bp.lg (1024px)`, `--ds.bp.xl (1280px)`.
- **Containers & gutters:** standard page gutters `--ds.space.6–8` depending on breakpoint.

## Shape & Elevation
- **Radius:** `--ds.radius.sm (4px)`, `--ds.radius.md (8px)`, `--ds.radius.lg (12px)`.
- **Elevation:** `--ds.shadow.sm`, `--ds.shadow.md`, `--ds.shadow.lg` (defined in tokens). Use sparingly; never as a substitute for contrast.

## Iconography
- **Library:** use the system Icon component only.
- **Color:** default to `currentColor` so icons inherit text color. If your SVG assets contain hardcoded `fill`/`stroke`, the icon pipeline normalizes them to `currentColor` at build time. Consumers may pass a **token name** (e.g., `colorToken="--ds.color.intent.primary"`) which the Icon resolves to a value from tokens.
- **Sizes:** inline `16px`, button/icon-only `20px`, decorative large `24px+`.
- **Contrast:** icons used as indicators must meet 3:1 against their background (4.5:1 when functioning as critical affordances at small sizes).

## Component Dimensions (common)
- Buttons: heights `32 | 40 | 48` (sm|md|lg); radius = `--ds.radius.sm`.
- Inputs: height `40`, inline density variant `32`.
- Focus rings: 2px visible ring using focus token (do not rely on OS default).

## Don’ts
- Don’t hardcode hex/rgb in components or stories—use tokens.
- Don’t introduce ad-hoc variants or sizes; add to tokens and spec first.
- Don’t use elevation to “fake” contrast; fix color tokens instead.

