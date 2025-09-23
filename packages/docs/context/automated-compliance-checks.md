# Automated Compliance Checks & Pre-Build Validation

> **Purpose:** Catch design system violations BEFORE they reach PR/production through automated validation

## 🚨 Critical Pre-Build Checks

### Border Token Compliance
**Problem Found:** 10 components still using `--ds-color-border-default` instead of correct hierarchy tokens

**Automated Fix Required:**
```bash
# Add to pre-build scripts
npm run audit:borders -- --fix

# Script should:
# 1. Scan all ui/*.tsx files
# 2. Identify component type (form input vs structural)
# 3. Replace border-default with correct token
# 4. Generate report of changes
```

**Components Needing Immediate Fix:**
- `checkbox.tsx`, `radio-group.tsx`, `command.tsx` → Should use `neutral-400` (form inputs)
- `card.tsx`, `dialog.tsx`, `sheet.tsx`, `tabs.tsx`, `popover.tsx`, `breadcrumb.tsx` → Should use `neutral-300` (structural)
- `chart.tsx` → Needs analysis (likely `neutral-300`)

### Circular Reference Prevention
**Problem Found:** Multiple emergency fixes for circular refs in recent commits

**Required Checks:**
```bash
# Must run before EVERY build
npm run check:circular -- --fail-on-warning

# Checks for:
# - Token imports in Tailwind configs
# - Wildcard exports that create cycles
# - Cross-package circular dependencies
```

### TypeScript Build Validation
**Problem Found:** 70+ type errors in index files

**Required Validation:**
```bash
# Must pass before ANY commit
npm run type-check:strict

# Should check:
# - All exports exist in source files
# - No 'any' types in public APIs
# - Props interfaces are exported alongside components
```

## 🤖 Automated Enforcement Rules

### 1. Border Hierarchy Auto-Correction
```javascript
// validate-borders.js
const FORM_INPUTS = ['input', 'textarea', 'select', 'checkbox', 'radio', 'command', 'form'];
const STRUCTURAL = ['table', 'card', 'accordion', 'dialog', 'sheet', 'separator', 'tabs', 'tooltip', 'toast', 'popover', 'breadcrumb'];

function getCorrectBorderToken(componentPath) {
  const filename = path.basename(componentPath, '.tsx');
  if (FORM_INPUTS.includes(filename)) return '--ds-color-neutral-400';
  if (STRUCTURAL.includes(filename)) return '--ds-color-neutral-300';
  return null; // Requires manual review
}
```

### 2. Import Pattern Validation
```javascript
// No token imports in config files
const FORBIDDEN_PATTERNS = [
  {
    files: ['tailwind.config.*', 'postcss.config.*'],
    patterns: [/import.*tokens/, /require.*tokens/],
    message: 'NEVER import tokens in config files - causes circular refs'
  },
  {
    files: ['*.tsx'],
    patterns: [/#[0-9A-Fa-f]{3,6}\b/, /rgb\(/, /\d+px\b/],
    message: 'Use design tokens instead of hardcoded values'
  }
];
```

### 3. Component Export Validation
```javascript
// Every component must export its Props interface
function validateComponentExports(file) {
  const componentName = getComponentName(file);
  const requiredExports = [
    componentName,                    // Component itself
    `${componentName}Props`,          // Props interface
    `${componentName.toLowerCase()}Variants` // If using CVA
  ];
  // Verify all exports exist
}
```

## 📋 Pre-Commit Checklist

### Mandatory Checks (Block Commit)
```bash
#!/bin/bash
# .husky/pre-commit

# 1. Border token compliance
npm run validate:borders || exit 1

# 2. No circular references
npm run check:circular || exit 1

# 3. TypeScript builds clean
npm run type-check || exit 1

# 4. No hardcoded values
npm run validate:tokens || exit 1

# 5. Storybook builds without errors
npm run build:storybook --quiet || exit 1
```

### Warning Checks (Non-blocking but logged)
```bash
# Component completeness
npm run audit:components

# Documentation coverage
npm run validate:docs

# Bundle size check
npm run analyze:bundle --max-size=200kb
```

## 🔄 CI Pipeline Integration

### Stage 1: Pre-Build Validation
```yaml
pre-build:
  script:
    - npm run audit:borders -- --fix
    - npm run check:circular
    - npm run type-check:strict
    - npm run validate:tokens
  allow_failure: false
```

### Stage 2: Build & Test
```yaml
build:
  script:
    - npm run build
    - npm run build:storybook
    - npm run test
  artifacts:
    reports:
      - reports/border-audit.json
      - reports/circular-deps.json
      - reports/type-errors.json
```

### Stage 3: Quality Gates
```yaml
quality:
  script:
    - npm run validate:a11y
    - npm run test:vrt
    - npm run analyze:bundle
  coverage: '/Lines\s*:\s*([0-9.]+)%/'
```

## 📊 Reporting & Metrics

### Weekly Compliance Report
```json
{
  "timestamp": "2025-09-23T10:00:00Z",
  "compliance": {
    "borderHierarchy": {
      "compliant": 70,
      "violations": 10,
      "autoFixed": 8
    },
    "tokenUsage": {
      "compliant": 95,
      "hardcoded": 5
    },
    "typeScript": {
      "clean": false,
      "errors": 70,
      "fixable": 45
    }
  },
  "trends": {
    "improvementRate": "+15%",
    "newViolations": 2,
    "techDebt": "decreasing"
  }
}
```

## 🚀 Implementation Timeline

### Phase 1: Immediate (This Sprint)
- [ ] Fix all border-default violations
- [ ] Add pre-commit hooks
- [ ] Enable circular reference checking

### Phase 2: Next Sprint
- [ ] Implement auto-fix scripts
- [ ] Add TypeScript strict mode
- [ ] Create compliance dashboard

### Phase 3: Ongoing
- [ ] Weekly compliance reports
- [ ] Automated PR comments
- [ ] Performance budgets

## 🎯 Success Metrics

- **Zero** border-default usage (currently 10)
- **Zero** circular reference warnings (currently intermittent)
- **Zero** TypeScript errors (currently 70+)
- **100%** component prop export coverage
- **<200KB** bundle size maintained
- **<5 seconds** Storybook build time

---

**Status:** DRAFT - Pending Review
**Owner:** Design System Team
**Review Date:** September 23, 2025