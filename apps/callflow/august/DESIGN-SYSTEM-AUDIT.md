# Auto-Attendant Callflow Design System Audit

**Date:** January 16, 2026  
**Auditor:** AI Design System Compliance Checker  
**Scope:** Complete callflow workflow (FTE → Completed)

---

## Executive Summary

The auto-attendant callflow workflow has **extensive design system violations** that need to be addressed. While the application functions well, it uses hardcoded values throughout instead of design system tokens.

### Violation Summary

| Type | Count | Severity |
|------|-------|----------|
| **Hardcoded Hex Colors** | 728 | 🔴 **BLOCKER** |
| **Hardcoded Pixel Spacing** | 1,162 | 🔴 **BLOCKER** |
| **Hardcoded RGBA Colors** | 68 | 🟡 **WARNING** |
| **CSS Variable Usage** | Multiple | 🟢 **INFO** |

**Total Violations:** ~1,958 design system violations

---

## Detailed Analysis

### 1. Hardcoded Colors (728 instances)

#### Common Violations

**Primary Colors (Blue):**
- `#0D62FF` - Used throughout for primary actions (should use `theme('colors.primary.500')` or Tailwind class)
- `#083B99` - Hover state (should use `theme('colors.primary.700')`)
- `#0A4ECC` - Active state (should use `theme('colors.primary.600')`)
- `#E0F2FE` - Light blue background (should use `theme('colors.sky.100')`)

**Neutral Colors (Grey):**
- `#2B2D3F` - Text primary (should use `theme('colors.neutral.900')`)
- `#595A69` - Text secondary (should use `theme('colors.neutral.600')`)
- `#70717D` - Text tertiary (should use `theme('colors.neutral.500')`)
- `#F1F2F6` - Borders (should use `theme('colors.neutral.200')`)
- `#DDDDE2` - Borders (should use `theme('colors.neutral.300')`)
- `#FCFCFC` - Hover backgrounds (should use `theme('colors.neutral.50')`)

**Semantic Colors:**
- `#22C55E` - Success green (should use `theme('colors.green.500')`)
- `#DCFCE7` - Success background (should use `theme('colors.green.100')`)
- `#166534` - Success text (should use `theme('colors.green.800')`)
- `#EF4444` - Error red (should use `theme('colors.red.500')`)
- `#FEE2E2` - Error background (should use `theme('colors.red.100')`)
- `#991B1B` - Error text (should use `theme('colors.red.800')`)
- `#EAB308` - Warning yellow (should use `theme('colors.yellow.500')`)
- `#FEF9C3` - Warning background (should use `theme('colors.yellow.100')`)
- `#854D0E` - Warning text (should use `theme('colors.yellow.800')`)

#### Affected Screens

1. **FTE (First-Time Experience) Screen**
   - Hero section colors
   - Button styles
   - Card backgrounds

2. **Setup Wizard Screens:**
   - **Timezone Selection** - Dropdown styles, labels
   - **Open Hours** - Toggle switches, time pickers
   - **Holidays** - Calendar UI, date inputs
   - **Routing (Open)** - Radio buttons, action cards
   - **Routing (Closed)** - Radio buttons, action cards
   - **Keypad Options** - Keypad grid, extension inputs
   - **Greeting** - Audio player, upload UI

3. **Completed Callflow Screen**
   - Configuration cards
   - Status indicators
   - Edit buttons

4. **AI Settings Screen**
   - Toggle switches
   - Form inputs
   - Section headers

### 2. Hardcoded Pixel Spacing (1,162 instances)

#### Common Violations

**Padding:**
- `padding: 24px` (should use `p-6` or `theme('spacing.6')`)
- `padding: 20px` (should use `p-5` or `theme('spacing.5')`)
- `padding: 16px` (should use `p-4` or `theme('spacing.4')`)
- `padding: 12px` (should use `p-3` or `theme('spacing.3')`)
- `padding: 8px` (should use `p-2` or `theme('spacing.2')`)

**Margins:**
- `margin-bottom: 32px` (should use `mb-8` or `theme('spacing.8')`)
- `margin-bottom: 24px` (should use `mb-6`)
- `margin-bottom: 16px` (should use `mb-4`)

**Gaps:**
- `gap: 24px` (should use `gap-6`)
- `gap: 16px` (should use `gap-4`)
- `gap: 12px` (should use `gap-3`)
- `gap: 8px` (should use `gap-2`)

**Sizes:**
- `width: 32px; height: 32px` (for icons/avatars)
- `width: 24px; height: 24px`
- `width: 18px; height: 18px`

#### Impact Areas

- All inline styles in wizard screens
- Bottom action bars
- Wizard step indicators
- Form inputs and labels
- Card padding and margins
- Icon sizes

### 3. RGBA Colors (68 instances)

Most RGBA usage is for shadows and opacity, which may be acceptable:

**Shadows (Acceptable):**
- `rgba(0,0,0,0.08)` - Light shadows
- `rgba(0,0,0,0.1)` - Medium shadows
- `rgba(0,0,0,0.3)` - Dark shadows
- `rgba(0,0,0,0.4)` - Very dark shadows

**Hover States (Need Review):**
- `rgba(255,255,255,0.1)` - Header button hovers
- `rgba(255,255,255,0.2)` - Header button hovers

### 4. CSS Variables (Mixed Usage)

The code uses CSS variables in some places (good practice):

**✅ Good Examples:**
```html
<span style="color: var(--neutral-500);">Text</span>
<div style="background: var(--neutral-100);">Content</div>
```

However, these CSS variables are **NOT defined** in the codebase, so they're not working as intended.

---

## Design System Exceptions

### Acceptable Hardcoded Values

1. **Global Header Brand Colors** (Documented exceptions):
   - `#00074b` - Comcast header top bar (brand requirement)
   - `#000a73` - Comcast header main section (brand requirement)
   - Documented in `apps/auto-attendant/GLOBAL-HEADER-BRANDING.md`

2. **Shadow RGBA Values** (For opacity only):
   - `rgba(0,0,0,X)` where X is opacity (0-1)
   - Used in `box-shadow` declarations only

---

## Priority Recommendations

### 🔴 HIGH PRIORITY (Blockers)

#### 1. Color Token Migration
**Effort:** Very Large (728 instances)  
**Impact:** Brand consistency, maintainability

**Strategy:**
- Create a mapping table of hardcoded colors → design system tokens
- Use find/replace with Node.js script (similar to previous `theme()` fix)
- Focus on most frequent colors first

**Example Mapping:**
```javascript
const colorMap = {
  '#0D62FF': 'theme(\'colors.primary.500\')',
  '#2B2D3F': 'theme(\'colors.neutral.900\')',
  '#595A69': 'theme(\'colors.neutral.600\')',
  '#70717D': 'theme(\'colors.neutral.500\')',
  '#F1F2F6': 'theme(\'colors.neutral.200\')',
  '#22C55E': 'theme(\'colors.green.500\')',
  // ... etc
};
```

#### 2. Spacing Token Migration
**Effort:** Very Large (1,162 instances)  
**Impact:** Consistency, responsive design

**Strategy:**
- Move inline styles to CSS classes with `@layer components`
- Use Tailwind utility classes where possible
- Replace hardcoded pixels with design system spacing scale

**Example Refactor:**
```html
<!-- BEFORE -->
<div style="padding: 24px; margin-bottom: 16px; gap: 12px;">

<!-- AFTER -->
<div class="p-6 mb-4 gap-3">
```

### 🟡 MEDIUM PRIORITY (Warnings)

#### 3. Define CSS Variables
**Effort:** Small  
**Impact:** Code consistency

The code references CSS variables like `var(--neutral-500)` but they're not defined. Either:
- Remove these and use direct hex/theme() calls
- Define them properly in `:root` or Tailwind config

#### 4. Extract Reusable Components
**Effort:** Medium  
**Impact:** Maintainability, consistency

Many patterns repeat (wizard headers, bottom bars, cards). Extract these into reusable CSS classes:

```css
@layer components {
  .wizard-header {
    @apply bg-white px-6 py-5 border-b border-neutral-200;
  }
  
  .wizard-bottom-bar {
    @apply fixed bottom-0 left-[340px] right-0 bg-white px-6 py-5 border-t border-neutral-200;
  }
  
  .wizard-card {
    @apply bg-white border border-neutral-200 rounded-xl p-7;
  }
}
```

### 🟢 LOW PRIORITY (Info)

#### 5. Typography Audit
**Status:** Appears mostly compliant  
**Action:** Verify all font-sizes map to design system scale

#### 6. Border Radius Audit
**Status:** Mix of hardcoded `border-radius: 8px`, `6px`, `4px`  
**Action:** Map to Tailwind radius scale (`rounded-lg`, `rounded-md`, `rounded`)

---

## Wizard Screen Breakdown

### Wizard Screens (All Need Remediation)

1. **Setup Timezone** (`#setup-timezone`)
   - ~80 color violations
   - ~140 spacing violations

2. **Setup Open Hours** (`#setup-openhours`)
   - ~100 color violations
   - ~180 spacing violations
   - Time picker has extensive inline styles

3. **Setup Holidays** (`#setup-holidays`)
   - ~60 color violations
   - ~110 spacing violations
   - Calendar UI needs refactoring

4. **Setup Routing (Open)** (`#setup-routing`)
   - ~90 color violations
   - ~160 spacing violations
   - Action cards reusable component opportunity

5. **Setup Routing (Closed)** (`#setup-routing-closed`)
   - ~90 color violations
   - ~160 spacing violations
   - Duplicate of open hours routing

6. **Setup Keypad** (`#setup-keypad`)
   - ~120 color violations
   - ~200 spacing violations
   - Keypad grid has complex inline styles

7. **Setup Greeting** (`#setup-greeting`)
   - ~70 color violations
   - ~130 spacing violations
   - Audio player UI needs tokens

---

## Implementation Plan

### Phase 1: Color Token Migration (Week 1)
- [ ] Create color mapping script
- [ ] Test on single screen (e.g., Timezone)
- [ ] Apply to all wizard screens
- [ ] Update global header (preserve documented exceptions)
- [ ] Run design system compliance checker
- [ ] Visual QA

### Phase 2: Spacing Token Migration (Week 2)
- [ ] Identify most common spacing patterns
- [ ] Create reusable CSS components
- [ ] Migrate to Tailwind utilities where possible
- [ ] Test responsive behavior
- [ ] Run design system compliance checker
- [ ] Visual QA

### Phase 3: Component Extraction (Week 3)
- [ ] Extract wizard header component
- [ ] Extract bottom action bar component
- [ ] Extract card styles
- [ ] Extract form field styles
- [ ] Update all screens to use components
- [ ] Visual QA

### Phase 4: Final Cleanup (Week 4)
- [ ] Remove or define undefined CSS variables
- [ ] Audit typography and border-radius
- [ ] Fix any remaining violations
- [ ] Full regression testing
- [ ] Update documentation

---

## Risk Assessment

### Risks of NOT Fixing

1. **Brand Inconsistency** - Colors may not match official brand guidelines
2. **Maintenance Burden** - Changes require updating hundreds of inline styles
3. **Scaling Issues** - New screens will perpetuate violations
4. **Design Drift** - No single source of truth for colors/spacing
5. **Dark Mode** - Impossible to implement with hardcoded colors

### Risks of Fixing

1. **Visual Regressions** - Colors/spacing might shift slightly
2. **Time Investment** - ~4 weeks of focused work
3. **Testing Overhead** - Extensive QA needed across all screens
4. **Merge Conflicts** - If other work is happening in parallel

### Mitigation Strategies

1. **Automated Testing** - Use Playwright visual regression tests
2. **Phased Rollout** - Fix one screen at a time, test thoroughly
3. **Backup/Branching** - Work in feature branch, easy rollback
4. **Documentation** - Document every exception and decision

---

## Success Metrics

### Compliance Targets

- [ ] **Zero blocker violations** (hardcoded colors/spacing in inline styles)
- [ ] **<10 warning violations** (documented exceptions only)
- [ ] **100% design system token usage** for colors, spacing, typography
- [ ] **Reusable components** for all common patterns
- [ ] **Automated compliance checks** in CI/CD pipeline

### Quality Targets

- [ ] **Zero visual regressions** (pixel-perfect comparison)
- [ ] **All Playwright tests passing**
- [ ] **Accessibility maintained** (WCAG AA compliance)
- [ ] **Performance maintained** (no degradation)
- [ ] **Dark mode ready** (using design system tokens)

---

## Conclusion

The auto-attendant callflow workflow is **functionally excellent** but has **significant design system debt**. With ~1,958 violations across colors, spacing, and other tokens, this represents a substantial refactoring effort.

**Recommendation:** Prioritize this work as a dedicated sprint/project. The current state makes it difficult to:
- Maintain brand consistency
- Implement new features efficiently
- Support dark mode or themes
- Scale to additional workflows

**Estimated Effort:** 3-4 weeks of focused development + 1 week QA

**ROI:** High - Sets foundation for all future work, enables theming, dramatically improves maintainability

---

## Next Steps

1. **Review this audit** with product/design team
2. **Get buy-in** for refactoring effort
3. **Create detailed tickets** for each phase
4. **Allocate dedicated time** (avoid interruptions)
5. **Set up visual regression testing** before starting
6. **Begin with Phase 1** (Color Token Migration)

---

**Questions or concerns?** This audit is comprehensive but may not capture every edge case. Additional issues may be discovered during implementation.
