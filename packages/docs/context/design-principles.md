
# Comcast Business Design System — Design Principles (Outcomes-Driven)

> Purpose: the **binding rules** for how we design and implement components. This is the source of truth for non‑negotiables, API patterns, and workflow. Focus on **measurable outcomes** and **developer productivity** over style preferences. If this doc conflicts with others, **this doc wins**.

## Non‑negotiables
1. **Accessibility by default** — WCAG 2.1 AA; full keyboard support; visible focus; correct name/role/value; ARIA patterns per component spec.
2. **Token‑driven styling** — all color/space/type/shadow/motion come from `@company/tokens` (CSS variables). No literals in components.
3. **Border hierarchy (ENFORCED)** — Form inputs use `--ds-color-neutral-400` (#B4B5BB), structural elements use `--ds-color-neutral-300` (#DDDDE2). Never use `--ds-color-border-default` directly.
4. **Stable APIs** — forwardRef; typed props; controlled + uncontrolled when appropriate; consistent prop names across similar components.
5. **Performance** — SSR‑safe; tree‑shakeable; minimal re‑renders; avoid runtime CSS‑in‑JS; no console errors/warnings.
6. **Theming** — support light/dark, density, RTL via attributes (`data-theme`, `dir="rtl"`). No hardcoded palette in components.
7. **Documentation** — every component ships MDX with: What/Why, Anatomy, Props, Tokens Used, A11y, Do/Don't, Examples, Changelog.

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

## Principles in Practice

### Cognitive Simplicity First
- **Readability over cleverness**: Clear, explicit code beats concise but unclear abstractions
- **Predictable patterns**: Same concepts work the same way across all components
- **Minimal cognitive load**: Developers should understand component behavior without deep study
- **Local reasoning**: Component behavior should be understandable from its props and state alone

### DORA-ish Metrics & Outcomes
We measure success through developer productivity proxies:

**Lead Time (Development Velocity)**
- Time from feature request to production deployment
- CI pipeline duration: target ≤ 10 minutes for component changes
- Review cycle time: target ≤ 2 business days

**Change Failure Rate (Stability)**
- E2E test stability: target ≥ 95% pass rate
- Visual regression failures: target ≤ 1% false positive rate  
- Production incidents from design system changes: target = 0

**Recovery Time (Quality Gates)**
- Time to fix failing acceptance criteria: target ≤ 4 hours
- Documentation completeness: 100% (automated validation)
- Accessibility violation resolution: target ≤ 1 day

### Measurable Quality Indicators
- **Bundle size impact**: Per-component budget ≤ 8kb gzip
- **Accessibility score**: 100% axe-core compliance, 0 violations
- **API consistency**: TypeScript strict mode, 100% prop documentation
- **Token compliance**: 0 hard-coded values, automated validation
- **Test coverage**: 100% of interactive behavior, visual regression coverage

## Deprecation & Compatibility Policy

### 2-Minor Deprecation Cycle
1. **Version N.X.0**: Add new API alongside old; deprecated API shows runtime warnings
2. **Version N.(X+1).0**: Deprecation warnings become more prominent; codemods available
3. **Version N.(X+2).0**: Remove deprecated API; breaking change with major version bump

### Compatibility Guarantees  
- **Token aliases**: Minimum 2 minor versions for renamed tokens
- **Prop aliases**: Minimum 2 minor versions for renamed props
- **Codemods**: Provided for all breaking changes affecting > 10 components
- **Migration guides**: Detailed documentation with before/after examples
- **Runtime warnings**: Clear migration paths in development mode

### Alias Strategy
```typescript
// Example: size → variant migration
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  /** @deprecated Use 'variant' instead. Will be removed in v3.0.0 */
  size?: 'primary' | 'secondary' | 'ghost' | 'destructive';
}
```

## Governance & maturity
- Status: Proposed → Beta → Stable → Deprecated.  
- Breaking API changes = major; token renames with alias = minor.  
- Deprecations keep shims for 2 minors with codemods.
- **Outcome tracking**: Measure actual developer productivity impact of changes

## CI Gates (Binding Acceptance Criteria)

### Automated Quality Validation
All PRs must pass `npm run validate:acceptance-criteria` with minimum 85/100 score:

1. **Accessibility**: 0 axe violations; full name/role/value; keyboard + visible focus
2. **Tokens-only**: No hex/rgb/px; CSS vars from tokens only
3. **API Design**: Exported types reviewed; no breaking renames; changeset present
4. **Bundle Size**: Per-component budget ≤ 8kb gzip (PR fails if exceeded)
5. **Visual Regression**: Max diff ≤ 1% across states, RTL, density variants  
6. **Heuristics**: Design patterns validated; no god components or prop drilling

### Review Requirements
- **PR Template**: Complete checklist in `.github/pull_request_template.md`
- **Stories Coverage**: All variants/sizes/states, RTL, long text, both themes
- **Documentation**: MDX updated with tokens used table
- **Migration**: Codemods provided for breaking changes affecting >10 components

### Continuous Monitoring
- **Lead Time**: CI pipeline ≤ 10 minutes for component changes
- **Stability**: E2E tests ≥ 95% pass rate, VRT ≤ 1% false positives
- **Recovery**: Acceptance criteria violations resolved ≤ 4 hours

---

## Refactoring Guidance

### When to Abstract (Fowler/Beck/Ousterhout)

**The Rule of Three**: Extract common patterns only after seeing them in **3+ distinct contexts** with stable requirements. Premature abstraction increases cognitive load.

**Abstraction Checklist**:
- [ ] **Duplication Threshold**: Same logic appears in 3+ components with identical semantics
- [ ] **Requirements Stability**: Pattern hasn't changed in 2+ months across implementations  
- [ ] **Call Site Analysis**: 5+ usage locations benefit from single source of truth
- [ ] **Cognitive Load Test**: Abstraction reduces mental model complexity, not just line count

### Module Boundaries (Deep vs. Shallow)

**Prefer Deep Modules** (Ousterhout):
- Simple interface hiding complex implementation
- High functionality-to-interface ratio
- Example: `<DataTable data={items} />` vs. `<Table><Header><Row><Cell>`

**Guard Against Shallow Modules**:
- Complex interfaces with minimal functionality  
- Forced to understand implementation details
- Example: `<Button onClick={handleClick} onMouseEnter={onHover} onFocus={onFocus}>`

### Anti-Patterns to Avoid

**God Components**:
- Single component >300 lines or >10 props
- Split by responsibility: data, presentation, interaction
- Use composition over inheritance

**Deep Inheritance**:
- Avoid >2 levels of component extension
- Prefer composition with slot/render props
- Example: `<Card>` + `<Card.Header>` vs. `BaseCard` → `HeaderCard` → `TitleHeaderCard`

**Megacomponents**:
- Components handling >3 concerns simultaneously
- Extract hooks for complex logic
- Use compound component pattern for related UI

### Refactoring Decision Tree

```
Is duplication causing bugs or maintenance issues?
├─ Yes: Is the pattern stable across 3+ use cases?
│   ├─ Yes: Will abstraction reduce cognitive complexity?
│   │   ├─ Yes: ✅ Extract and abstract
│   │   └─ No: 🛑 Keep duplicated, document pattern
│   └─ No: 🛑 Wait for requirements to stabilize
└─ No: 🛑 Leave as-is, small duplication preferred
```

### Cognitive Load Reduction

**Prefer Explicit Over Clever**:
- `variant="primary"` over `primary={true}`
- Named exports over default exports for utilities
- Predictable prop naming across similar components

**Module Interface Design**:
- Single responsibility per hook/component
- Minimize required mental model to use effectively
- Hide implementation complexity behind simple APIs

