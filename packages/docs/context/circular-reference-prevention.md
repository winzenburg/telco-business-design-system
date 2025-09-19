# Circular Reference Prevention & Resolution

> **Critical Knowledge**: Preventing "Maximum call stack size exceeded" errors in Tailwind PostCSS processing

## ⚠️ CRITICAL Rules

### Never Import Token Files in Tailwind Configs OR CSS Files

**CSS Imports Also Cause Circular References:**
```css
/* ❌ WRONG - Can cause circular references during PostCSS processing */
@import url('../../../tokens/css-variables.css');

/* ✅ CORRECT - Inline CSS variables */
:root {
  --ds-color-blue-500: #0D62FF; /* Direct values */
}
```

### Never Import Token Files in Tailwind Configs
```javascript
// ❌ WRONG - Causes circular references
module.exports = {
  theme: {
    colors: {
      ...require('../tokens/design-system-colors').colors, // NEVER DO THIS
    }
  }
}

// ✅ CORRECT - Hardcoded values
module.exports = {
  theme: {
    colors: {
      blue: { 50: "#F5F8FF", 500: "#0D62FF" }, // Direct hex values
    }
  }
}
```

### All Tailwind Configs AND CSS Files Must Be Nuclear-Fixed
- `tailwind.config.js` (main config - used by Storybook)
- `packages/docs/tailwind.config.js` (docs config)
- `src/styles/tailwind.css` (main CSS file)
- `packages/components/src/styles/tailwind.css` (components CSS file)
- Any other `*tailwind.config*` or `*tailwind.css` files

## Root Cause Analysis

**Why This Happens:**
- Tailwind's PostCSS processing uses `cloneDeep()` which traverses all object references
- Token imports create complex reference chains that become circular
- Netlify's build environment resolves modules differently than local development
- Multiple build contexts (main vs Storybook) can trigger the error independently

**Error Signature:**
```
[vite:css] [postcss] Maximum call stack size exceeded
file: ./src/styles/tailwind.css:undefined:NaN
at cloneDeep (./node_modules/tailwindcss/lib/util/cloneDeep.js:16:42)
```

## Complete Fix Pattern

### 1. Fix Token File Circular References
```bash
# Check for self-references
grep -r "colors\." packages/tokens/design-system-colors.ts src/tokens/design-system-colors.ts

# Fix using constants pattern:
const SPECIAL_COLORS = { black: "#15172B", white: "#FFFFFF" };
export const brand = { primary: "#0D62FF" }; // Direct hex, not colors.blue['500']
```

### 2. Replace Wildcard Exports
```bash
# Find wildcards
grep -r "export \*" packages/tokens/ src/tokens/

# Replace with selective exports:
export { colors, brand, blue } from './design-system-colors';
```

### 3. Nuclear Fix All Tailwind Configs
```bash
# Find all configs
find . -name "*tailwind.config*" -not -path "./node_modules/*"

# Check for dangerous imports
grep -r "require.*token\|import.*token" tailwind.config.js packages/docs/tailwind.config.js

# If ANY found: Remove ALL imports and hardcode ALL values
```

## Diagnostic Commands

### Quick Health Check
```bash
# Complete diagnostic
echo "🔍 Checking circular reference patterns..." && \
echo "===== Checking Tailwind configs =====" && \
grep -r "require.*tokens\|import.*tokens" $(find . -name "tailwind.config.*" | grep -v node_modules) 2>/dev/null && \
echo "⚠️ CRITICAL: Found token imports in configs - REMOVE IMMEDIATELY" || echo "✅ No token imports in configs" && \
echo "===== Checking CSS imports =====" && \
grep -r "@import.*tokens" src/styles/tailwind.css packages/components/src/styles/tailwind.css 2>/dev/null && \
echo "⚠️ CRITICAL: Found CSS token imports - REPLACE WITH INLINE" || echo "✅ No CSS token imports" && \
echo "===== Checking wildcard exports =====" && \
grep -r "export \*" packages/tokens/ src/tokens/ 2>/dev/null && \
echo "📋 Found wildcard exports - replace with selective" || echo "✅ No wildcards" && \
echo "===== Checking self-references =====" && \
grep -r "colors\." packages/tokens/design-system-colors.ts src/tokens/design-system-colors.ts 2>/dev/null && \
echo "⚠️ Found self-references - use constants" || echo "✅ No self-refs"
```

### Build Verification
```bash
# Test all build contexts
npm run build && echo "✅ Main build"
npm run type-check && echo "✅ Type check"
npm run build:storybook && echo "✅ Storybook build"
```

## Case Study: Multiple Config Resolution

**Problem:** Fixed `packages/docs/tailwind.config.js` but errors persisted on Netlify

**Discovery:** Storybook build uses main `tailwind.config.js`, creating second vector for circular references

**Solution:** Applied nuclear fix to BOTH configs

**Key Insight:** Multiple Tailwind configs can cause circular references independently. Always check ALL config files.

## Success Indicators

- `npm run build` completes without errors
- `npm run build:storybook` completes without stack overflow
- No "Maximum call stack size exceeded" in any build process
- Netlify deployment succeeds

## Emergency Recovery

If builds are failing in production:

1. **Backup configs**
   ```bash
   cp tailwind.config.js tailwind.config.js.backup
   cp packages/docs/tailwind.config.js packages/docs/tailwind.config.js.backup
   ```

2. **Apply nuclear fix to ALL configs**
   - Remove ALL token imports
   - Hardcode ALL color values
   - Test with `npm run build:storybook`

3. **Deploy immediately**
   - Circular references fixed = deployment will succeed
   - Can refine approach later in separate PR