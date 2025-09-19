# What Good Looks Like (Discipline Checklists)

## UX Design Excellence
**Measurable Criteria**:
- [ ] **Task Completion**: ≥85% success rate in usability testing
- [ ] **Cognitive Load**: ≤7±2 interactions to complete primary tasks
- [ ] **Interaction Standards**: Follows Norman/Tognazzini/NN/g rules (affordances, feedback ≤100ms/300ms, constraints)
- [ ] **Error Recovery**: Clear error messages with actionable next steps
- [ ] **Mental Models**: UI matches user expectations (card sorting validation)
- [ ] **Progressive Disclosure**: Information hierarchy reduces decision paralysis
- [ ] **Accessibility**: Works with screen readers, keyboard-only, voice control

**Copy-Paste Prompt**:
```
"Evaluate this UX design against NN/g heuristics, Norman's design principles, and inclusive design standards. Verify: affordances/signifiers, feedback timing, constraints/mapping, consistency, mental model alignment, error prevention, and accessibility compliance. Provide specific improvements with measurable success criteria."
```

## Visual Design Excellence  
**Measurable Criteria**:
- [ ] **Token Compliance**: 100% design tokens, 0 hard-coded values
- [ ] **Contrast**: ≥4.5:1 for normal text, ≥3:1 for large text and UI elements
- [ ] **Spacing Rhythm**: 4px baseline grid maintained throughout
- [ ] **Typography Scale**: Proper hierarchy with ≤6 font sizes
- [ ] **Color Purpose**: Semantic meaning consistent across system
- [ ] **Motion**: ≤200ms for micro-interactions, respects prefers-reduced-motion

**Copy-Paste Prompt**:
```
"Review visual design for token compliance and accessibility. Verify: contrast ratios, spacing grid adherence, typography hierarchy, semantic color usage, and motion design. Generate token usage table and highlight any violations."
```

## Frontend Engineering Excellence
**Measurable Criteria**:
- [ ] **Bundle Size**: ≤8kb gzipped per component
- [ ] **Performance**: LCP ≤2.5s, FID ≤100ms, CLS ≤0.1
- [ ] **API Design**: Composable, predictable props with TypeScript interfaces
- [ ] **Tree Shaking**: ES modules with side-effect-free imports
- [ ] **SSR Ready**: Hydration without layout shifts
- [ ] **Error Boundaries**: Graceful degradation, no white screens

**Copy-Paste Prompt**:
```
"Audit component code for performance and maintainability. Check: bundle analysis, TypeScript strictness, tree-shaking compatibility, SSR safety, error handling, and API design patterns. Provide optimization recommendations."
```

## Accessibility Engineering Excellence
**Measurable Criteria**:
- [ ] **Automated Testing**: 0 axe-core violations across all states and themes
- [ ] **Keyboard Navigation**: Tab order logical; Enter/Space/Arrows/Escape per ARIA APG; focus visible (WCAG 2.4.7/2.4.11)
- [ ] **Name/Role/Value**: Programmatically determinable; states announced correctly; ARIA only when needed and valid
- [ ] **Color/Contrast**: 4.5:1 text contrast, 3:1 UI affordances; no color-only information signals
- [ ] **Motion/Preferences**: Respects prefers-reduced-motion; no parallax/auto-play that traps focus
- [ ] **Screen Reader Sanity**: NVDA+Firefox, VoiceOver+Safari smoke tests on primary flows

**Copy-Paste Prompt**:
```
"Perform comprehensive accessibility audit following WCAG 2.2 AA and WAI-ARIA 1.2. Test keyboard navigation (Enter/Space/Arrows/Escape per ARIA APG), verify programmatic name/role/value, check 4.5:1/3:1 contrast ratios, validate prefers-reduced-motion support, and run NVDA+Firefox and VoiceOver+Safari smoke tests. Document findings with severity levels and WCAG reference numbers."
```

## Content Design Excellence
**Measurable Criteria**:
- [ ] **Reading Level**: ≤Grade 8 (Flesch-Kincaid scale)
- [ ] **Scannability**: F-pattern layout, bullet points, short paragraphs
- [ ] **Voice & Tone**: Consistent brand personality throughout
- [ ] **Microcopy**: Error messages help users recover
- [ ] **Localization Ready**: Text expansion accommodation (±40%)
- [ ] **SEO Friendly**: Semantic structure, proper heading hierarchy

**Copy-Paste Prompt**:
```
"Review content for clarity, voice consistency, and accessibility following GOV.UK and Shopify content guidelines. Check: reading level, scannability, error message usefulness, internationalization readiness, and semantic structure."
```

## QA Engineering Excellence
**Measurable Criteria**:
- [ ] **Test Coverage**: ≥80% unit tests, critical paths 100%
- [ ] **Cross-Browser**: Latest 2 versions of Chrome, Firefox, Safari, Edge
- [ ] **Responsive**: Breakpoints 320px, 768px, 1024px, 1440px
- [ ] **Visual Regression**: ≤1% pixel difference in Chromatic
- [ ] **Performance Budget**: Lighthouse score ≥90 across all metrics
- [ ] **Integration Tests**: User flows with realistic data

**Copy-Paste Prompt**:
```
"Design comprehensive test strategy covering unit, integration, visual regression, and cross-browser testing. Include: coverage targets, performance budgets, accessibility automation, and CI/CD integration points."
```