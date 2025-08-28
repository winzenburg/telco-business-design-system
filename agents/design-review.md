# Design System — Claude Code Guide (Router · Rules · Tasks)

> Purpose: make Claude Code (and agents) produce **token-true, accessible, performant** components and enforce that quality in CI. Keep this file lean; push depth into the linked sources.

---

## Canonical Sources (read these first)

- **Visual Foundations / Tokens** → `./style-guide.md`
- **Design Principles (binding rules)** → `./design-principles.md`
- **Design Review Process & Merge Gates** → `./design-review-slash-command.md`
- **Design Heuristics (automation hints)** → `./design-heuristics.yaml`

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

---

## Tasks / Playbooks (copy & run)

### 1) Build from spec → implementation + tests + docs
Using `./components/{Component}/spec.md` plus the Guardrails:
- Generate `src/{Component}.tsx` (wrap Radix/Headless when applicable), Storybook stories (all variants/sizes + hover/focus/disabled + RTL + long text), tests (Vitest + Testing Library), **axe** checks (0 violations), and Playwright VRT snapshots (diff ≤ 1%).
- Create MDX docs per docs style with a **“Tokens Used”** table listing the exact token keys.
- Add a Changeset with correct semver and migration notes (if props/tokens changed).

**Prompt**  
“Build `{Component}` from `./components/{Component}/spec.md` following the Guardrails. Implement, add stories (states/RTL/long text), write tests + axe + VRT, write MDX with Tokens Used, and add a Changeset.”

---

### 2) Sync tokens from Figma (Token Studio → code)
- Compare the latest Token Studio export (see repo note or CI artifact path) to `packages/tokens/src/*.json`.
- Propose a minimal-diff PR; preserve token names; if renaming, add aliases + deprecate for **2 minors**; run Style Dictionary; update typings; write migration notes; bump **minor**.

**Prompt**  
“Compare Figma Token Studio export with `packages/tokens/src/*.json`. Produce a minimal diff PR, run Style Dictionary, update typings, add aliases for renames, write migration notes, bump minor.”

---

### 3) Deprecate & migrate props/tokens
- Search for `{OldPropOrToken}`; generate a **codemod** to `{NewPropOrToken}`; update MDX and usage examples; add deprecation warnings slated for removal in **2 minors**.

**Prompt**  
“Migrate `{Old}` → `{New}` across repo via codemod, update docs and examples, add deprecation warnings, and include a Changeset.”

---

### 4) Hard-coded color / pixel sweep (gate)
- Scan `packages/components/src/**` for `#[0-9A-Fa-f]{6}`, `rgb(`, and `\b\d+px\b`. Replace with tokens or scale utilities; include diffs and rationale.

**Prompt**  
“Find and replace hard-coded color/px in `packages/components/src/**` with tokens/scale utilities; produce a diff and rationale.”

---

### 5) Update VRT baselines (rare; justified)
- Only when intentional visual changes ship; update Playwright snapshots, attach before/after, and record rationale in PR.

**Prompt**  
“Refresh VRT baselines for changed stories with before/after screenshots and a one-line rationale per story.”

---

## Agent: `design-review`

```yaml
agents:
  - name: design-review
    model: sonnet
    color: pink
    description: >
      Comprehensive UI/UX/a11y review for PRs touching user-facing surfaces.
      Live environment first; fall back to static/code review if preview is unavailable.

    triggers:
      paths:
        - "packages/components/**"
        - "packages/tokens/**"
        - "apps/**/src/**"
        - "packages/**/styles/**"
      pr_title_contains: ["UI","design","component","tokens","a11y"]
      labels_any: ["UI","Design","Accessibility"]

    requires:
      env:
        - PREVIEW_URL       # e.g., Vercel/Netlify PR preview
        - STORYBOOK_URL     # Storybook/docs preview for states
      tools:
        - Grep; LS; Read; Edit; MultiEdit; Write; WebFetch; WebSearch; Bash; Glob; BashOutput; NotebookEdit
        - mcp__playwright__browser_install
        - mcp__playwright__browser_navigate
        - mcp__playwright__browser_tab_list
        - mcp__playwright__browser_tab_new
        - mcp__playwright__browser_tab_select
        - mcp__playwright__browser_resize
        - mcp__playwright__browser_wait_for
        - mcp__playwright__browser_click
        - mcp__playwright__browser_type
        - mcp__playwright__browser_hover
        - mcp__playwright__browser_select_option
        - mcp__playwright__browser_press_key
        - mcp__playwright__browser_take_screenshot
        - mcp__playwright__browser_console_messages
        - mcp__playwright__browser_snapshot
        - mcp__playwright__browser_evaluate
        - mcp__playwright__browser_close

    inputs:
      pr_number: integer
      preview_url: string       # overrides env
      storybook_url: string     # overrides env
      pages:
        - "/"                   # extend with deep links for feature flows
      themes: ["light","dark"]
      viewports:
        - { width: 1440, height: 900 }
        - { width: 768,  height: 1024 }
        - { width: 375,  height: 812 }

    guardrails:
      - Use tokens only; no literal hex/rgb/px in components.
      - Enforce focus visibility, correct name/role/value, keyboard parity.
      - Respect standard variants/sizes unless the spec overrides.
      - No horizontal scroll at 375/768/1440; verify RTL and density when present.

    runbook:
      - Phase 0 — Read PR title/description/diff; list impacted surfaces.
      - Phase 1 — Live review on PREVIEW_URL: execute primary flows; note perceived perf.
      - Phase 2 — Responsiveness: screenshot key screens across themes×viewports; flag scroll/overlap.
      - Phase 3 — Visual polish: spacing rhythm, type scale, color usage vs tokens; flag non-token literals.
      - Phase 4 — Accessibility: keyboard traversal, focus, ARIA, form labels; check color contrast.
      - Phase 5 — Robustness: error/empty/loading, overflow/long text, i18n pseudo-localization when available.
      - Phase 6 — Code health: token usage, component reuse over duplication.
      - Phase 7 — Console & network: capture errors/warnings; note broken requests.
      - Produce triaged report + artifacts.

    outputs:
      artifacts_dir: "reports/design-review/PR-${pr_number}/"
      screenshots_dir: "reports/design-review/PR-${pr_number}/screens/"
      markdown_report: "reports/design-review/PR-${pr_number}/report.md"
      json_summary: "reports/design-review/PR-${pr_number}/summary.json"

    report_schema:
      summary:
        status: ["pass","fail","partial"]
        positives: array[string]
        counts: { blockers: int, high: int, medium: int, nit: int }
      findings:
        - id: string
          severity: ["Blocker","High","Medium","Nit"]
          surface: string
          description: string     # problem + user impact (avoid prescriptive fix)
          evidence: string        # path to screenshot/console snippet
          refs: array[string]     # links to specs/docs/tokens

    communication:
      tone: "assume good intent, evidence-led, concise"
      structure: |
        ### Design Review Summary
        [What’s working + overall assessment]

        ### Findings
        #### Blockers
        - [Problem + Evidence]

        #### High-Priority
        - [Problem + Evidence]

        #### Medium-Priority / Suggestions
        - [Problem]

        #### Nitpicks
        - Nit: [Problem]

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
name: Design System Gates
on:
  pull_request:
    paths:
      - 'packages/components/**'
      - 'packages/tokens/**'
      - 'packages/**/styles/**'
      - 'apps/**'
      - '.github/workflows/**'
permissions:
  contents: read
  pull-requests: write

jobs:
  gates:
    runs-on: ubuntu-latest
    timeout-minutes: 30

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node & pnpm
        uses: pnpm/action-setup@v4
        with: { version: 9 }
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Install deps
        run: pnpm install --frozen-lockfile

      # --- Gate 1: no literals (colors/px) in component source
      - name: Hard-coded color/px sweep (fail fast)
        run: |
          set -euo pipefail
          if grep -RInE '#[0-9A-Fa-f]{6}|rgb\(|\b\d+px\b' packages/components/src --include \*.{ts,tsx,css,scss}; then
            echo "::error::Found literal colors or pixel values in component source. Use tokens/scale utilities."
            exit 1
          else
            echo "No literals found ✅"
          fi

      # --- Build & serve Storybook for a11y+VRT under Playwright
      - name: Build Storybook
        run: pnpm build:storybook

      - name: Serve Storybook (background)
        run: |
          npx http-server storybook-static -p 6006 & echo $! > .sb_pid
          pnpm dlx wait-on http://localhost:6006

      - name: Install Playwright
        run: npx playwright install --with-deps

      # --- Gate 2/3: Playwright tests should include axe checks + VRT assertions
      - name: Run Playwright (axe + VRT via tests)
        env:
          STORYBOOK_URL: http://localhost:6006
        run: npx playwright test

      - name: Upload Playwright artifacts (optional)
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-artifacts
          path: |
            playwright-report/**
            test-results/**
            **/playwright/.last-run.json
          if-no-files-found: ignore

      # --- Agent invocation (design-review)
      - name: Set env for agent
        env:
          STORYBOOK_URL: http://localhost:6006
        run: |
          echo "PR_NUMBER=${{ github.event.pull_request.number }}" >> $GITHUB_ENV
          echo "STORYBOOK_URL=${STORYBOOK_URL}" >> $GITHUB_ENV
          # If you have a deployed preview (Vercel/Netlify), export it here or via repo vars/secrets.
          # Fallback: use Storybook URL; the agent should still run in static mode.
          echo "PREVIEW_URL=${{ vars.PREVIEW_URL }}" >> $GITHUB_ENV

      - name: Invoke design-review agent
        env:
          PR_NUMBER: ${{ env.PR_NUMBER }}
          PREVIEW_URL: ${{ env.PREVIEW_URL }}
          STORYBOOK_URL: ${{ env.STORYBOOK_URL }}
        run: |
          # Replace with your actual agent command and args.
          # Expectation: writes reports/design-review/PR-${PR_NUMBER}/summary.json
          pnpm run agent:design-review -- --pr "$PR_NUMBER" --preview "$PREVIEW_URL" --storybook "$STORYBOOK_URL" || true

      - name: Upload design-review artifacts
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: design-review
          path: reports/design-review/
          if-no-files-found: warn

      # --- Gate 4: enforce agent summary (no Blockers; not "fail")
      - name: Enforce agent gates
        run: |
          sudo apt-get update -y >/dev/null && sudo apt-get install -y jq >/dev/null
          SUMMARY="reports/design-review/PR-${PR_NUMBER}/summary.json"
          if [ ! -f "$SUMMARY" ]; then
            echo "::warning::No design-review summary found — ensure agent writes ${SUMMARY}."
          else
            status=$(jq -r '.summary.status' "$SUMMARY")
            blockers=$(jq -r '[.findings[] | select(.severity=="Blocker")] | length' "$SUMMARY")
            echo "Agent status: $status, blockers: $blockers"
            if [ "$status" = "fail" ] || [ "$blockers" -gt 0 ]; then
              echo "::error::Design-review gates failed (status=$status, blockers=$blockers)."
              exit 1
            fi
          fi

      - name: Stop Storybook
        if: always()
        run: |
          if [ -f .sb_pid ]; then kill "$(cat .sb_pid)" || true; fi
