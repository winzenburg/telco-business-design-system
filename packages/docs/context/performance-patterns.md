# Performance Optimization Patterns

> This document defines performance standards and optimization patterns for the design system.

## Performance Budgets (Enforced in CI)

### Bundle Size Limits
- **Total Bundle:** 200KB minified / 50KB gzipped
- **Initial Load:** 50KB minified / 15KB gzipped
- **Per Component:** <20KB (larger components must be lazy loaded)
- **CSS:** 30KB minified / 8KB gzipped

### Runtime Performance
- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1
- **TTI (Time to Interactive):** <3.5s

---

## Import Patterns

### Component Categories

#### Always Bundle (Core Components) - <5KB each
```typescript
// These are always included in initial bundle
import { Button, Input, Text, Link } from '@comcast/design-system';
```

#### Conditionally Bundle (Medium Components) - 5-20KB
```typescript
// Import normally but consider user's bundle
import { Select, Dialog, Card, Badge } from '@comcast/design-system';
```

#### Always Lazy Load (Heavy Components) - >20KB
```typescript
// Must use lazy loading
import { LazyChart, LazyTable, LazyEditor } from '@comcast/design-system/lazy';

// Or with React.lazy
const Chart = React.lazy(() => import('@comcast/design-system/chart'));
```

---

## Tree-Shaking Requirements

### Package.json Configuration
```json
{
  "sideEffects": ["*.css", "*.scss"],
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./lazy": {
      "import": "./dist/lazy.mjs"
    }
  }
}
```

### Component Export Pattern
```typescript
// ✅ Named exports for tree-shaking
export { Button } from './Button';
export { Input } from './Input';

// ❌ Default exports prevent tree-shaking
export default { Button, Input }; // DON'T DO THIS
```

### Verification Commands
```bash
# Check tree-shaking effectiveness
npm run verify:tree-shaking

# Analyze bundle composition
npm run analyze:bundle

# Test specific import patterns
npx webpack-bundle-analyzer stats.json
```

---

## Code Splitting Patterns

### Lazy Component Implementation
```typescript
// packages/components/src/lazy/Chart.tsx
import { lazy, Suspense } from 'react';

const ChartCore = lazy(() =>
  import(/* webpackChunkName: "chart" */ '../Chart')
);

export function LazyChart(props: ChartProps) {
  return (
    <Suspense fallback={<ChartSkeleton />}>
      <ChartCore {...props} />
    </Suspense>
  );
}
```

### Route-Based Splitting
```typescript
// For applications using the design system
const routes = [
  {
    path: '/dashboard',
    component: lazy(() => import('./pages/Dashboard')),
  },
  {
    path: '/analytics',
    component: lazy(() => import('./pages/Analytics')),
  }
];
```

### Preloading Strategy
```typescript
// Preload on hover/focus
function PreloadableButton({ href, children }) {
  const handleInteraction = () => {
    import('./HeavyComponent'); // Start loading early
  };

  return (
    <Link
      href={href}
      onMouseEnter={handleInteraction}
      onFocus={handleInteraction}
    >
      {children}
    </Link>
  );
}
```

---

## CSS Optimization

### Critical CSS Extraction
```typescript
// Only include critical styles in initial bundle
const criticalStyles = `
  .btn { ... }
  .input { ... }
  .text { ... }
`;

// Load non-critical styles asynchronously
<link rel="preload" href="styles.css" as="style" />
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'" />
```

### CSS-in-JS Avoidance
```typescript
// ❌ Runtime CSS generation (slow)
const Button = styled.button`
  background: ${props => props.primary ? 'blue' : 'gray'};
`;

// ✅ Static CSS with variants (fast)
const Button = ({ variant }) => (
  <button className={cn('btn', `btn--${variant}`)} />
);
```

---

## Performance Testing

### Required Checks Before PR
```bash
# 1. Bundle size check
npm run analyze:bundle

# 2. Tree-shaking verification
npm run verify:tree-shaking

# 3. Visual regression
npm run test:vrt

# 4. Performance metrics
npm run lighthouse:ci
```

### Manual Performance Audit
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit with:
   - Device: Mobile
   - Categories: Performance, Accessibility
   - Throttling: Applied (Slow 4G)

### CI Performance Gates
```yaml
# .github/workflows/performance.yml
- name: Check Bundle Size
  run: |
    npm run build
    npm run analyze:bundle
    # Fails if over budget

- name: Lighthouse CI
  run: |
    lhci autorun
    # Fails if scores drop below thresholds
```

---

## Monitoring & Reporting

### Bundle Size Tracking
- Automated reports on every PR
- Historical tracking in `reports/bundle-history.json`
- Alerts when approaching limits

### Runtime Performance
- Real User Monitoring (RUM) integration
- Core Web Vitals tracking
- Performance regression alerts

### Dashboard
Access performance metrics at:
- Bundle Analysis: `/reports/bundle-analysis.html`
- Lighthouse Reports: `/reports/lighthouse/`
- VRT Results: `/tests/e2e/**/*.png`

---

## Common Performance Issues

### Issue: Large Bundle Size
**Symptom:** Total bundle >200KB
**Solution:**
- Identify heavy dependencies with bundle analyzer
- Implement lazy loading for heavy components
- Check for duplicate dependencies

### Issue: Poor Tree-Shaking
**Symptom:** Single imports pull in >50% of library
**Solution:**
- Ensure named exports
- Check for side effects in components
- Verify bundler configuration

### Issue: Slow Initial Load
**Symptom:** TTI >3.5s
**Solution:**
- Reduce initial bundle size
- Implement code splitting
- Optimize critical rendering path

### Issue: Layout Shifts
**Symptom:** CLS >0.1
**Solution:**
- Set explicit dimensions for images/videos
- Avoid injecting content above existing content
- Use CSS transforms instead of position changes

---

## Best Practices Checklist

### For Component Authors
- [ ] Component is <20KB or lazy loaded
- [ ] No runtime CSS-in-JS
- [ ] Uses CSS variables for theming
- [ ] Exports are tree-shakeable
- [ ] No global side effects
- [ ] Includes loading states
- [ ] Optimized for SSR

### For Application Developers
- [ ] Import only needed components
- [ ] Use lazy loading for heavy features
- [ ] Preload critical resources
- [ ] Monitor bundle size in CI
- [ ] Test on slow connections
- [ ] Track Core Web Vitals

### For Design System Maintainers
- [ ] Regular bundle size audits
- [ ] Performance regression tests
- [ ] Documentation updates
- [ ] Migration guides for optimizations
- [ ] Performance budget reviews

---

## Resources

- [Bundle Analyzer](/scripts/analyze-bundle.js)
- [Tree-Shaking Verifier](/scripts/verify-tree-shaking.js)
- [Lazy Loading Utilities](/packages/components/src/lazy/)
- [Performance Budget CI](.github/workflows/performance-budget.yml)
- [Performance Report](/reports/performance-optimization-report.md)