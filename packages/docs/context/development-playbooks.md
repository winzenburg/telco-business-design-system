# Development Playbooks (Copy & Run)

## Development Workflows

**1) Create Component**
```
"Build `{Component}` following quality requirements and discipline checklists. Include: TypeScript interfaces, forwardRef, stories (all states/RTL/themes), tests with axe checks, MDX docs with tokens table, changeset. Validate against UX, Visual, Frontend, and A11y excellence criteria."
```

**2) Token Migration**
```
"Migrate `{OldToken}` → `{NewToken}` across codebase. Generate codemod, add deprecation warnings (2-minor cycle), update docs and examples. Ensure visual consistency and measure impact on bundle size and performance."
```

**3) Quality Audit**
```
"Run `npm run validate:acceptance-criteria` and fix all violations. Cross-reference against discipline checklists. Generate report with prioritized recommendations by severity and impact on user experience."
```

**4) Breaking Change**
```
"Implement breaking change for `{Component}` API. Create codemod, migration guide with examples, deprecation cycle, update all documentation. Validate against API design principles and measure adoption friction."
```

## Design System Workflows

**5) UX Research Integration**
```
"Integrate usability research findings into `{Component}` design. Apply NN/g heuristics, validate mental models, optimize task completion flow. Document personas, user journeys, and success metrics."
```

**6) Accessibility Deep Dive**
```
"Conduct comprehensive accessibility audit for `{Component}` following WCAG 2.2 AA and inclusive design principles. Test with assistive technologies, document findings, create remediation plan with priority levels."
```

**7) Content Design Review**
```
"Review all content in `{Feature}` for clarity, voice consistency, and accessibility. Apply GOV.UK and Shopify guidelines. Check reading level, microcopy effectiveness, and localization readiness."
```

**8) Performance Optimization**
```
"Optimize `{Component}` bundle size and runtime performance. Analyze tree-shaking, implement code splitting, measure Core Web Vitals impact. Document before/after metrics and optimization strategies."
```

## Architecture & Process

**9) Architecture Decision**
```
"Create ADR for `{Decision}` using template. Reference canonical sources, analyze options with trade-offs, document rationale, implementation plan with measurable success criteria."
```

**10) Visual Regression Update**
```
"Update VRT baselines for intentional changes. Attach before/after screenshots, document rationale per story, validate across themes/viewports. Ensure ≤1% pixel difference tolerance."
```

**11) Design Review**
```
Use **design-review** agent with PR number, preview URL, themes, and viewports. Apply discipline checklists for comprehensive evaluation. Generate actionable recommendations with priority scoring.
```

**12) Cross-Discipline Collaboration**
```
"Facilitate design system review with UX, Visual, Frontend, A11y, Content, and QA perspectives. Use respective checklists to identify gaps, conflicts, and optimization opportunities. Document decisions and rationale."
```

## Specialized Review Prompts

**Heuristic Review (NN/g + A11y)**
```
"Review {Component} against NN/g's 10 heuristics and the Accessibility Acceptance above. List concrete issues, empathetic rewording for any microcopy, and minimal diffs to fix. Output: checklist + code edits."
```

**Content Pass (Plain Language)**
```
"Rewrite microcopy for {screen/component} using the Content & Microcopy rules. Keep brand voice neutral, actionable, and inclusive. Provide before/after and rationale."
```

**Forms Pass**
```
"Evaluate {form} against Forms rules. Propose validation strategy, inline error copy, and progressive disclosure. Provide specific component edits."
```