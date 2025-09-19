# Border Hierarchy Rules & Storybook Verification

> **Status: ENFORCED** — These rules are automatically validated in CI and must be followed for all components.

## Border Hierarchy System

### 🎯 **Purpose**
Create clear visual hierarchy through consistent border styling that distinguishes interactive form elements from structural layout elements.

### 📋 **Rules**

#### **Form Input Elements → `neutral-400` (#B4B5BB)**
*Darker, more prominent borders for interactive elements*

**Components:**
- `input.tsx` - Text inputs, email, password, etc.
- `textarea.tsx` - Multi-line text inputs
- `select.tsx` - Dropdown selectors
- `checkbox.tsx` - Checkbox controls
- `radio-group.tsx` - Radio button groups
- `time-picker.tsx` - Time selection inputs
- `command.tsx` - Command palette inputs
- `form.tsx` - Form field wrappers

**CSS Token:**
```css
border: 1px solid var(--ds-color-neutral-400); /* #B4B5BB */
```

#### **Structural Elements → `neutral-300` (#DDDDE2)**
*Lighter, more subtle borders for layout and organization*

**Components:**
- `table.tsx` - Table borders and cell dividers
- `card.tsx` - Card containers
- `accordion.tsx` - Section separators
- `dialog.tsx` - Modal borders
- `sheet.tsx` - Slide-out panel borders
- `separator.tsx` - Visual dividers
- `tabs.tsx` - Tab panel borders
- `tooltip.tsx` - Tooltip borders
- `toast.tsx` - Notification borders

**CSS Token:**
```css
border: 1px solid var(--ds-color-neutral-300); /* #DDDDE2 */
```

### 🚫 **Forbidden Patterns**

❌ **Never use `--ds-color-border-default` directly**
```css
/* ❌ Wrong */
border: 1px solid var(--ds-color-border-default);
```

❌ **Never use hardcoded border colors**
```css
/* ❌ Wrong */
border: 1px solid #ccc;
border: 1px solid rgb(204, 204, 204);
```

❌ **Don't mix border hierarchy**
```css
/* ❌ Wrong - table using form input border */
.table { border: 1px solid var(--ds-color-neutral-400); }

/* ❌ Wrong - input using structural border */
.input { border: 1px solid var(--ds-color-neutral-300); }
```

### ✅ **Correct Implementation**

#### Form Input Example:
```tsx
// ✅ Correct - Input component
const inputVariants = cva(
  "border border-[var(--ds-color-neutral-400)] ...",
  {
    variants: {
      variant: {
        default: "focus-visible:border-[var(--ds-color-neutral-400)]",
        error: "border-[var(--ds-color-intent-destructive)]"
      }
    }
  }
)
```

#### Structural Element Example:
```tsx
// ✅ Correct - Table component
const tableVariants = cva(
  "border-collapse ...",
  {
    variants: {
      variant: {
        bordered: "[&_td]:border [&_th]:border [&_td]:border-[var(--ds-color-neutral-300)] [&_th]:border-[var(--ds-color-neutral-300)]"
      }
    }
  }
)
```

## Storybook Verification System

### 🎯 **Purpose**
Ensure all component changes are immediately visible in Storybook for design review and testing.

### 📋 **Mandatory Process**

#### **After ANY Component Changes:**
```bash
# 1. Force file timestamp updates
npm run force-reload

# 2. Verify changes are reflected
npm run verify:storybook

# 3. Manual verification in browser
# Navigate to component in Storybook
# Verify borders match expected hierarchy
```

#### **If Changes Not Visible:**
```bash
# Emergency restart procedure
npm run dev:fresh

# This command:
# 1. Kills all Node processes
# 2. Clears all caches (node_modules/.cache, .storybook/.cache, dist, .vite)
# 3. Restarts Storybook fresh
# 4. Wait 30-60 seconds for full startup
# 5. Force browser refresh (Ctrl+Shift+R / Cmd+Shift+R)
```

### 🔍 **Visual Verification Checklist**

#### **Table Component** (`http://localhost:6006/?path=/docs/table--docs`)
- ✅ Borders should be light gray (`#DDDDE2`)
- ✅ Should NOT have thick black borders
- ✅ Cell separators should be subtle

#### **Input Component** (`http://localhost:6006/?path=/docs/input--docs`)
- ✅ Borders should be darker gray (`#B4B5BB`)
- ✅ Should be more prominent than table borders
- ✅ Focus states should be clearly visible

#### **Card Component** (`http://localhost:6006/?path=/docs/card--docs`)
- ✅ Borders should be light gray (`#DDDDE2`)
- ✅ Should match table border lightness

#### **Browser Dev Tools Verification**
```css
/* Check computed styles - should show: */
border: 1px solid rgb(221, 221, 226); /* neutral-300 for structural */
border: 1px solid rgb(180, 181, 187); /* neutral-400 for form inputs */
```

## Automation & Validation

### 🤖 **Automated Enforcement**

#### **CI Pipeline Validation:**
```bash
npm run validate:tokens  # Checks border hierarchy compliance
```

#### **Pre-commit Hooks:**
- Validates all new/modified components follow border rules
- Prevents commits with hardcoded border colors
- Ensures malformed tokens are fixed

#### **Available Scripts:**
```bash
npm run fix:tokens           # Auto-fix border rule violations
npm run force-reload         # Force Storybook hot reload
npm run verify:storybook     # Full verification system
npm run dev:fresh           # Complete restart with cache clearing
```

### 📊 **Validation Output**

#### **Success Example:**
```
✅ Table component: Using neutral-300 borders
✅ Input component: Using neutral-400 borders
✅ No malformed tokens found
📊 Files scanned: 80, Violations: 0
```

#### **Violation Example:**
```
❌ card.tsx: Using border-default instead of neutral-300
❌ input.tsx: Found hardcoded border color #ccc
❌ table.tsx: Malformed token var(--ds-color-border-default]
💥 Found 3 border hierarchy violations
```

## Migration Guide

### 🔄 **Migrating Existing Components**

#### **Step 1: Identify Component Type**
```bash
# Form inputs → neutral-400
grep -l "input\|textarea\|select\|checkbox\|radio" packages/components/ui/*.tsx

# Structural → neutral-300
grep -l "table\|card\|accordion\|dialog\|sheet" packages/components/ui/*.tsx
```

#### **Step 2: Apply Automated Fix**
```bash
npm run fix:tokens
```

#### **Step 3: Manual Review**
```bash
# Check specific component
grep "border.*var(--ds-color" packages/components/ui/table.tsx
```

#### **Step 4: Verify in Storybook**
```bash
npm run force-reload && npm run verify:storybook
```

### 🎯 **Success Criteria**

✅ **All form inputs use neutral-400 borders**
✅ **All structural elements use neutral-300 borders**
✅ **No hardcoded border colors exist**
✅ **All changes immediately visible in Storybook**
✅ **CI validation passes**
✅ **Visual hierarchy is clear and consistent**

---

**Last Updated:** September 2025
**Status:** Actively Enforced
**Validation:** `npm run validate:tokens && npm run verify:storybook`