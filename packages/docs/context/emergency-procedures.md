# Emergency Procedures - Design System

> **When builds are failing in production and you need immediate fixes**

## 🚨 Circular Reference Emergency

**Symptoms:** "Maximum call stack size exceeded" during Netlify deployment

**Immediate Fix:**
```bash
# 1. Backup all Tailwind configs
cp tailwind.config.js tailwind.config.js.backup
cp packages/docs/tailwind.config.js packages/docs/tailwind.config.js.backup

# 2. Check for token imports in configs (if ANY found, must fix)
grep -r "require.*token\|import.*token" tailwind.config.js packages/docs/tailwind.config.js

# 3. Check for CSS imports in Tailwind CSS files (NEW: this can also cause circular refs)
grep -r "@import.*tokens" src/styles/tailwind.css packages/components/src/styles/tailwind.css

# 4. Remove ALL token imports from configs AND replace CSS imports with inline variables
# - Configs: Replace with hardcoded hex values: blue: { 500: "#0D62FF" }
# - CSS files: Replace @import with inline :root { --ds-color-blue-500: #0D62FF; }

# 5. Verify fix
npm run build:storybook && echo "✅ FIXED - Deploy now!"
```

**Why This Works:** Eliminates circular references in PostCSS processing

## 🚨 TypeScript Build Failures

**Symptoms:** Build failing with type errors during `npm run build`

**Common Fixes:**
```bash
# Check for missing dependencies
npm install

# Clear TypeScript cache
rm -rf dist/ && npm run build

# Fix duplicate identifier errors
# - Rename conflicting interfaces
# - Use proper relative paths for tokens

# Verify fix
npm run type-check
```

## 🚨 Storybook Not Starting

**Symptoms:** Storybook dev server won't start or shows blank page

**Immediate Fix:**
```bash
# Clear all caches
rm -rf node_modules/.cache
rm -rf .storybook/.cache
rm -rf storybook-static

# Force restart
npm run dev:fresh

# If still failing, check for:
# - Circular imports in stories
# - Missing story files
# - Incorrect Storybook paths
```

## 🚨 Missing Icons/Assets

**Symptoms:** Icons not displaying, build warnings about missing assets

**Quick Fix:**
```bash
# Sync icon registry with types
# Check: packages/tokens/design-system-icons-types.ts
# Must match: packages/icons/src/icon-registry.ts

# Regenerate types if needed
npm run build:icons
```

## 🚨 Netlify Deployment Failure

**General troubleshooting:**
```bash
# 1. Check build commands match local
npm run build:storybook  # Should match Netlify command

# 2. Check for environment differences
# - Node version (use .nvmrc)
# - Package versions (check package-lock.json)

# 3. Check for hardcoded paths
# - No absolute paths in imports
# - Use relative paths consistently
```

## Recovery Workflow

1. **Identify error type** from build logs
2. **Apply immediate fix** from relevant section above
3. **Test locally** with same commands as production
4. **Deploy fix** once verified
5. **Document issue** in appropriate context file
6. **Create follow-up task** for proper resolution if emergency fix was temporary

## Escalation

If emergency procedures don't resolve the issue:

1. **Revert to last known good commit**
2. **Create minimal reproduction** of the issue
3. **Document exact error messages** and build context
4. **Check for similar issues** in design system documentation
5. **Create detailed issue** with reproduction steps