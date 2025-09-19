# EXPLICIT RULE: Ensuring All Changes Are Reflected in Storybook

## MANDATORY PROCEDURE FOR ALL COMPONENT CHANGES

### 🎯 RULE: Every change MUST be immediately visible in Storybook

When making ANY changes to components, follow this exact procedure:

### 1. FORCE FILE TIMESTAMP UPDATE
```bash
# Touch all modified files to trigger hot reload
find packages/components/ui -name "*.tsx" -exec touch {} \;
find packages/docs/stories -name "*.tsx" -exec touch {} \;
```

### 2. VERIFY STORYBOOK HOT RELOAD
- Check Storybook terminal for "Files changed" or similar reload messages
- If no reload detected, manually restart Storybook

### 3. FORCE BROWSER REFRESH
- Use Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- This clears browser cache and loads latest version

### 4. VALIDATE CHANGES ARE VISIBLE
- Navigate to specific component in Storybook
- Verify visual changes are present
- Check browser dev tools for updated CSS values

### 5. EMERGENCY RESTART PROCEDURE
If changes still not visible:

```bash
# Kill all processes
pkill -f node

# Clear all caches
rm -rf node_modules/.cache .storybook/.cache dist .vite

# Restart fresh
npm run dev

# Wait for full startup (usually 30-60 seconds)
# Then force browser refresh
```

## SPECIFIC CHANGES TO VERIFY

### Border Color Changes:
- **Tables**: Should show `#DDDDE2` (neutral-300) - lighter gray borders
- **Form inputs**: Should show `#B4B5BB` (neutral-400) - darker gray borders
- **No thick black borders**: All browser default thick borders should be gone

### Component-Specific Checks:
- Navigate to Table component: borders should be subtle/light
- Navigate to Input component: borders should be more prominent
- Navigate to Card component: borders should be subtle/light
- Navigate to Accordion component: separator lines should be subtle/light

## TROUBLESHOOTING

### If changes still not visible:
1. Check file timestamps: `ls -la packages/components/ui/table.tsx`
2. Verify file content: `grep "neutral-" packages/components/ui/table.tsx`
3. Check Storybook console for errors
4. Try incognito/private browser window
5. Check if another Storybook instance is running on different port

### Quick Verification Commands:
```bash
# Check if files have recent changes
node scripts/verify-storybook-changes.js

# Force restart with verification
pkill -f node && sleep 3 && npm run dev
```

## WHY THIS RULE EXISTS

Storybook sometimes doesn't pick up changes due to:
- File watching issues
- Browser caching
- Build cache conflicts
- Multiple dev server instances
- Incomplete hot module replacement

This explicit procedure ensures **100% reliability** that changes are reflected.