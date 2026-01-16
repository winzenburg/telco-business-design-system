# Design System Foundation Enforcement

This document explains how we enforce that all code references the root design system's foundation elements (colors, spacing, typography, etc.) while still allowing custom components beyond the existing component library.

## Philosophy

**"Build beyond, but build on the foundation."**

✅ Custom components and unique UI patterns are **encouraged**  
✅ All code **must** use design system tokens for foundational values  
❌ Hardcoding colors, spacing, fonts, shadows, etc. is **forbidden**

## Enforcement Tools

### 1. `.cursorrules` - AI Assistant Rules

**Location**: `/.cursorrules`

**Purpose**: Automatically loaded by AI coding assistants (Cursor, Claude, etc.) to enforce design system usage during code generation.

**What it does**:
- Provides clear rules for AI assistants
- Shows examples of allowed vs forbidden code
- References design system token locations
- Includes quick reference for common tokens

**When it runs**: Automatically every time an AI assistant generates code.

### 2. Design System Foundation Guard Agent

**Location**: `/agents/design-system-foundation-guard.md`

**Purpose**: Comprehensive guide for manual and automated design system compliance checks.

**What it covers**:
- Hard rules (non-negotiable)
- Enforcement process (3 phases)
- Common violations and fixes
- Agent workflow for automated checks
- Exception handling
- Success metrics

**When to use**:
- Manual code reviews
- Understanding design system requirements
- Setting up automated checks
- Training team members

### 3. Compliance Checker Script

**Location**: `/scripts/check-design-system-compliance.js`

**Purpose**: Automated scanning tool that finds design system violations in code.

**What it checks**:
- ❌ Hardcoded colors (hex, rgb, hsl)
- ❌ Hardcoded pixel spacing
- ❌ Non-design-system fonts
- ❌ Custom shadows
- ❌ CDN Tailwind usage
- ❌ Custom CSS variables (non-Tailwind)

**How to use**:

```bash
# Check entire codebase
npm run lint:design-system

# Check specific directory
node scripts/check-design-system-compliance.js --path apps/auto-attendant

# Verbose output
node scripts/check-design-system-compliance.js --verbose

# Show help
node scripts/check-design-system-compliance.js --help
```

**Output**: Grouped report by severity (Blockers, High, Medium, Low) with:
- File path and line number
- Violation description
- Suggested fix
- Example of correct usage

**Exit codes**:
- `0` = Success (no blockers)
- `1` = Failure (blockers found)

## Workflow

### During Development

1. **AI-Assisted Coding**:
   - AI assistants automatically follow `.cursorrules`
   - Generated code uses design system tokens
   - Violations prevented before they're written

2. **Manual Coding**:
   - Reference `/tailwind.config.js` for available tokens
   - Use Tailwind classes (`bg-primary-500`) or `theme()` function
   - Check `/src/tokens/` for TypeScript token imports

3. **Before Commit**:
   ```bash
   npm run lint:design-system
   ```
   Fix any violations before committing.

### During Code Review

1. **Run compliance check**:
   ```bash
   npm run lint:design-system
   ```

2. **Review any violations** in PR diff

3. **Check that new components**:
   - Use design system colors
   - Use design system spacing scale
   - Use design system typography
   - Extend Tailwind config if new app

4. **Approve only if**: No blockers remain

### In CI/CD Pipeline

Add to GitHub Actions or CI:

```yaml
- name: Check Design System Compliance
  run: npm run lint:design-system

- name: Fail on Blockers
  if: failure()
  run: exit 1
```

This ensures:
- No hardcoded values merge to main
- All apps follow design system
- Consistent quality across codebase

## Severity Levels

### Blocker (Must Fix)
- Hardcoded hex colors
- Hardcoded RGB/HSL colors
- Non-design-system fonts
- CDN Tailwind script tags

**Action**: Cannot merge until fixed.

### High Priority (Should Fix)
- Hardcoded pixel spacing
- Custom box shadows
- Non-standard border radius

**Action**: Fix before merge or create follow-up issue.

### Medium Priority (Nice to Have)
- Custom CSS variables (could use design system)
- Non-semantic color usage (e.g., `blue-500` vs `primary-500`)

**Action**: Consider fixing or document why exception is needed.

### Low Priority (Optional)
- Could refactor to use design system utility
- Minor consistency improvements

**Action**: Optional improvements for future refactors.

## Design System Token Reference

### Colors

```css
/* Tailwind classes */
bg-primary-500 text-neutral-900 border-border-muted

/* CSS with theme() */
background: theme('colors.primary.500');
color: theme('colors.neutral.900');
```

**Available palettes**:
- `primary` (blue): 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- `neutral` (gray): 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- Semantic: `red`, `green`, `yellow`, `orange`, `purple`, `sky`, `teal`
- Intent: `intent-primary`, `intent-success`, `intent-warning`, `intent-destructive`
- Special: `border-muted`, `border-structural`, `bg-canvas`, `text-primary`

### Spacing

```css
/* Tailwind utilities */
p-6 mb-4 gap-3 space-x-2

/* CSS with theme() */
padding: theme('spacing.6');
```

**Scale**: `0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64`  
**Maps to**: `0px, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px...`

### Typography

```css
/* Fonts */
font-sans  /* Montserrat - primary */
font-lato  /* Lato - secondary */

/* Sizes */
text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl text-5xl text-6xl

/* Weights */
font-light (300) font-normal (400) font-medium (500) font-semibold (600) font-bold (700)
```

### Shadows

```css
shadow-sm shadow-md shadow-lg

box-shadow: theme('boxShadow.md');
```

### Border Radius

```css
rounded rounded-md rounded-lg rounded-full

border-radius: theme('borderRadius.md');
```

## Exceptions

Sometimes exceptions are necessary. Document them:

```css
/* DESIGN-SYSTEM-EXCEPTION: Third-party library requirement
 * Library X requires specific color format that can't use our tokens
 * Approved by: @username on 2026-01-16
 */
.library-override {
  color: #specific-value;
}
```

The compliance checker will skip violations near exception markers.

## Examples

### ✅ Good - New Custom Component

```tsx
// CustomCallout.tsx
import { cn } from '@/utils/cn';

interface CalloutProps {
  variant?: 'info' | 'warning' | 'success';
  children: React.ReactNode;
}

export function Callout({ variant = 'info', children }: CalloutProps) {
  return (
    <div className={cn(
      'p-4 rounded-md border',
      variant === 'info' && 'bg-primary-50 border-primary-200 text-primary-900',
      variant === 'warning' && 'bg-yellow-50 border-yellow-200 text-yellow-900',
      variant === 'success' && 'bg-green-50 border-green-200 text-green-900'
    )}>
      {children}
    </div>
  );
}
```

**Why it's good**:
- Uses Tailwind classes from design system
- Colors: `primary-50`, `yellow-50`, `green-50`
- Spacing: `p-4`
- Border radius: `rounded-md`
- All from design system tokens

### ❌ Bad - Hardcoded Values

```tsx
// BAD CustomCallout.tsx
export function Callout({ variant = 'info', children }) {
  return (
    <div style={{
      padding: '18px',              // ❌ Hardcoded spacing
      borderRadius: '6px',          // ❌ Hardcoded radius
      backgroundColor: '#E3F2FD',   // ❌ Hardcoded color
      border: '1px solid #BBDEFB',  // ❌ Hardcoded color
      color: '#0D47A1'              // ❌ Hardcoded color
    }}>
      {children}
    </div>
  );
}
```

**Problems**:
- Hardcoded pixel spacing
- Hardcoded hex colors
- Not using design system at all

## Quick Fixes

### Fix: Hardcoded Color

```diff
- background: #0D62FF;
+ background: theme('colors.primary.500');
```

### Fix: Hardcoded Spacing

```diff
- padding: 24px;
+ padding: theme('spacing.6');
```

Or use Tailwind:
```diff
- <div style={{ padding: '24px' }}>
+ <div className="p-6">
```

### Fix: Custom Font

```diff
- font-family: 'Roboto', sans-serif;
+ font-family: theme('fontFamily.sans');
```

### Fix: CDN Tailwind

```diff
- <script src="https://cdn.tailwindcss.com"></script>
+ <link rel="stylesheet" href="./public/styles.css">
```

And create proper build setup (see `/apps/auto-attendant/DESIGN-SYSTEM-INTEGRATION.md` for example).

## Getting Help

- **Token reference**: Check `/tailwind.config.js`
- **Examples**: See `/apps/auto-attendant/` for properly integrated app
- **Component patterns**: Check `/src/components/` for reference implementations
- **Full agent guide**: Read `/agents/design-system-foundation-guard.md`
- **Questions**: Ask the team or design lead

## Summary

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `.cursorrules` | AI assistant rules | Automatic during AI coding |
| Foundation Guard Agent | Comprehensive guide | Manual reviews, training |
| Compliance Checker | Automated scanning | Pre-commit, CI/CD, reviews |

**Remember**: Custom components are great! Just build them on the design system foundation. 🎨
