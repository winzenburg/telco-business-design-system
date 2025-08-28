# Design Review Slash Command (Clean)

`/design-review [component-or-PR]`

> Goal: produce an **evidence‑backed**, triaged review that can gate merges. Live preview first; fall back to static/code review if needed.

## Required inputs
- **PR number** and **PREVIEW_URL** (e.g., Vercel/Netlify)  
- **STORYBOOK_URL** for states
- Optional: pages to exercise (e.g., `/`, `/settings`), themes, viewports

## Phases (what the agent does)
1) **Figma compliance** — spec matches our system (variants/states/tokens).  
2) **Interaction & flows** — primary flow works; all states implemented; perceived performance OK.  
3) **Responsive** — desktop (1440), tablet (768), mobile (375); no horizontal scroll or overlaps.  
4) **Visual polish** — spacing rhythm, type hierarchy, token usage (no literals).  
5) **Accessibility** — keyboard traversal, visible focus, ARIA/semantics, contrast (AA).  
6) **Robustness** — empty/error/loading; long text/overflow; i18n/RTL if available.  
7) **Code health (diff)** — reuse primitives; no magic numbers; tokens only.  
8) **Console/network** — no errors; broken requests flagged.

## Triage matrix
- **[Blocker]** breaks accessibility, core flow, or introduces severe visual/functional defects.  
- **[High]** significant issue to fix before merge.  
- **[Medium]** improvement for follow‑up ticket.  
- **[Nit]** polish; non‑blocking.

## Evidence & artifacts
- Screenshots per theme×viewport; DOM snapshots for key states; console log export.  
- Report saved as Markdown + JSON in `reports/design-review/PR-<id>/` and posted to the PR.

## Merge gate (Definition of Done)
- Score ≥ **85%**, **0 accessibility violations**, **stories cover variants/sizes/states/RTL/long text**, **no console errors**, and **no literal colors/px** in changed code. Values/visual scales live in the **Visual Foundations** doc; this doc never restates them.

