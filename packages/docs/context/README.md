# Design System Docs & Workflow — Rationale & Operating Guide

> This README explains **why** the documentation set was refactored, **what** each file is responsible for, and **how** to run the day‑to‑day workflows (tokens, components, reviews, CI). It’s the map for humans; `CLAUDE.md` is the map for agents.

---

## TL;DR (what changed and why)

- **Single source of truth**: Visual values live in **tokens** (not scattered examples). Components consume **CSS variables** from `@company/tokens`.
- **Clear authority chain**: If documents disagree → **Design Principles** ⟶ Style Guide ⟶ Review Process. `CLAUDE.md` routes/automates; it does not redefine rules.
- **Conflicts removed**: Icon colors and hex usage were normalized: components are **token‑driven**; authors never paste hex; the Icon component accepts a **token name** and resolves to a value.
- **No redundancy**: Repeated color/size lists were trimmed; shared requirements live once and are linked.
- **Enforceable quality**: Accessibility, VRT, and “no literals” rules are **merge gates** in CI, and the **design‑review** agent produces evidence‑backed reports.

---

## Repository contract (documents & responsibilities)

| File | Purpose | Scope | You’ll find |
|---|---|---|---|
| `style-guide.md` | **Visual Foundations** | Tokens, typography, spacing, elevation, breakpoints, sizing scales, theme modes | Token taxonomy, value tables, examples mapped to token _names_ (not raw hex), and notes on density/RTL |
| `design-principles.md` | **Binding Rules** | Non‑negotiable standards for components | Tokens‑only styling, API patterns (variants/sizes, `forwardRef`, controlled/uncontrolled), WCAG 2.1 AA, performance constraints, release/deprecation policy |
| `design-review-slash-command.md` | **Review Process & Merge Gates** | How we verify changes and what blocks a merge | Phased review, triage matrix, ≥85% score, **zero a11y violations**, required Storybook coverage, artifact expectations |
| `design-heuristics.yaml` | **Automation Heuristics** | Machine‑readable hints for agents and lint checks | Mappings to token keys (e.g., `--ds.color.text.primary`), spacing rules, do/don’t patterns for automated sweeps |
| `CLAUDE.md` | **Router · Rules · Tasks** | Entrypoint for Claude Code & agents | Canonical sources, guardrails, tasks/playbooks, the `design-review` agent spec, acceptance criteria |

> Practical rule: **Principles set the bar** (the “musts”), **Style Guide supplies the values** (the “what”), **Review enforces** (the “prove it”), **Heuristics automate** (the “teach the bots”).

---

## Rationale for the refactor

1. **Token‑first everything**  
   - Styling must reference tokens (color/space/type/shadow/motion). This enables consistent theming, safe refactors, and downstream app performance (CSS variables + static extraction).

2. **Deterministic accessibility**  
   - WCAG 2.1 AA is a merge gate, not a suggestion. Keyboard parity, visible focus, semantic/ARIA contracts, and contrast checks are part of PR checks and agent reviews.

3. **Performance & portability**  
   - Prefer pre‑compiled styles (CSS variables, utility classes, or zero‑runtime systems). Avoid adding runtime CSS‑in‑JS to the component layer. SSR safety and tree‑shakeability are required.

4. **Icon color policy (conflict resolved)**  
   - The Icon component defaults to `currentColor`; it also accepts `colorToken="<token-name>"`. SVG build tooling resolves token names to concrete values—authors never paste hex. Components remain token‑driven.

5. **One set of merge gates**  
   - The review rubric and CI checks are unified: axe = 0 violations; VRT diffs intentional; no literal hex/rgb/px in components; docs include “Tokens Used.”

---

## Operating model (how work flows)

### 1) Add or change tokens (Figma ⟶ code)
1. Update tokens in Figma (Token Studio).
2. Export the JSON (path is documented in `ops/figma-sync.md` or the CI artifact).
3. Run the **Token Sync** task (in `CLAUDE.md`): propose a minimal diff PR, preserve names; if renaming, add **aliases** and mark deprecated for **two minor versions**.
4. Regenerate outputs (Style Dictionary), update typings.
5. Write migration notes; bump **minor**.

**Outcome:** Consumers adopt new tokens without breakage; design and code stay in lockstep.

---

### 2) Build a component from a spec
1. Author or update `./components/{Component}/spec.md` (anatomy, states, keyboard map, tokens used).
2. Run the **Build from spec** task (in `CLAUDE.md`): implementation, stories (variants/sizes + hover/focus/disabled + RTL + long text), tests, axe checks, Playwright VRT, and MDX with **Tokens Used**.
3. Add a Changeset entry with semver rationale.

**Deliverables checklist** (PR must include):  
- ✅ Component code (typed, `forwardRef`, tokens‑only)  
- ✅ Stories (themes/RTL/long text/states)  
- ✅ Tests (unit + interactions) and **axe = 0**  
- ✅ VRT snapshots with rationale for any baseline changes  
- ✅ MDX docs with **Tokens Used** table  
- ✅ Changeset (semver + migrations)

---

### 3) Deprecate & migrate (props or tokens)
1. Create a codemod from `{Old}` → `{New}`.
2. Update MDX and usage examples.
3. Add deprecation warnings and a removal plan for **two minors**.
4. Include migration notes in the Changeset.

**Goal:** Safe, automated upgrades for consuming apps.

---

### 4) Run a design review (agent‑assisted)
- Invoke the **`design-review`** agent (see `CLAUDE.md` Tasks) with: PR number, `PREVIEW_URL`, `STORYBOOK_URL`, pages, themes, and viewports.
- The agent executes the phased review, produces screenshots, a Markdown report, and a JSON summary, and posts back to the PR (if CI token is available).
- CI fails on **Blockers** or if status is `"fail"`.

**What gets checked**
- Interaction flows, responsive layouts (375/768/1440), visual polish (spacing/typography/hierarchy), token usage (no literals), a11y (keyboard/focus/ARIA/contrast), robustness (loading/empty/error/overflow), console errors.

---

## CI merge gates (copied from `CLAUDE.md`)

- **Accessibility:** axe = **0 violations** on changed surfaces (waivers documented in PR).  
- **Visual regressions:** Playwright VRT per variant/size/state (themes + RTL + long text). Diffs are intentional and approved.  
- **Code health:** **No literal hex/rgb/px** in `packages/components/src/**`.  
- **Docs:** MDX includes **“Tokens Used”** referencing canonical token keys.  
- **Release:** Changeset present with semver + migration notes for API/token changes.  
- **Agent review:** `summary.status != "fail"` and no **Blockers**.

> Example lightweight guards you can drop into CI:
>
> ```bash
> # fail if colors/px literals appear in components
> grep -RInE '#[0-9A-Fa-f]{6}|rgb\(|\b\d+px\b' packages/components/src && { echo "Found literals"; exit 1; }
>
> # ensure a Tokens Used table exists in docs
> grep -RIl '## Tokens Used' packages/docs/src/components || { echo "Docs missing Tokens Used"; exit 1; }
> ```

---

## Contribution guide (quick)
- **Before coding**: confirm spec & tokens; avoid inventing variants or tokens ad‑hoc.  
- **While coding**: compose from primitives; no nth‑child layout hacks; keep APIs symmetric across similar components.  
- **Before PR**: run unit tests, axe locally, and VRT; make sure stories cover RTL, themes, and long text; update MDX.  
- **PR checklist**: include acceptance artifacts (screenshots/report from the agent if applicable).

---

## FAQs

**Q: Why force tokens over simple hex?**  
A: Tokens enable consistent theming, safe refactors, and smaller diffs; they also keep the review surface deterministic (automatable).

**Q: When is it OK to update VRT baselines?**  
A: Only for intentional, approved changes. Post before/after screenshots and a one‑line rationale per story.

**Q: Do we allow runtime CSS‑in‑JS?**  
A: Not in core components. Prefer CSS variables with pre‑compiled styles or zero‑runtime systems to keep bundles small and SSR predictable.

**Q: How do we handle exceptions to a11y gates?**  
A: Add a documented waiver with an owner, a remediation plan, and a target version—waivers should be rare and time‑boxed.

---

## Glossary

- **Token**: A named design value (e.g., `--ds.color.bg.surface.default`).  
- **Alias token**: Semantic mapping to one or more base values (e.g., `--ds.color.text.primary`).  
- **Primitive / Composite / Pattern**: Component categorization (simple → complex → recipe).  
- **VRT**: Visual Regression Testing (Playwright snapshots vs. golden images).

---

## Versioning & change management

- **Semver**: Token renames = **minor** (with alias + deprecation for 2 minors). API breaks = **major**.  
- **Changelog**: Changesets generate release notes; include migration steps and codemod commands for breaking/behavioral changes.

---

## Pointers

- Start here: `design-principles.md` (rules) → `style-guide.md` (values) → `CLAUDE.md` (tasks/agent) → `design-review-slash-command.md` (merge gates).
- Building a new component? Use the **Build from spec** task in `CLAUDE.md`. Need to change tokens? Use the **Token Sync** task.
