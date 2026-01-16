# Settings Page Blank Screen Fix

## Issue
The AI Settings page was appearing as a blank screen when accessed via the "Settings" button on the completed callflow page.

## Root Cause
The `#ai-settings` div was **nested inside the `#page-attendants` container**. When the `openAISettings()` function ran, it:
1. Called `document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));` to hide all pages
2. This hid the `#page-attendants` page (which has `class="page"`)
3. Since `#ai-settings` was a **child** of `#page-attendants`, it was also hidden
4. Even though the code set `document.getElementById('ai-settings').style.display = 'block';`, the parent being hidden overrode this

**The fundamental issue**: You can't show a child element when its parent is hidden.

## Solution
**Moved the entire `#ai-settings` div outside of the `#page-attendants` container** to be a sibling of all `.page` elements instead of a child of one.

### Before (Broken Structure)
```html
<div id="page-attendants" class="page">
  <!-- FTE, Main Callflow, etc. -->
  
  <div id="ai-settings" style="display: none;">  <!-- ❌ Hidden when parent hides -->
    <!-- Settings content -->
  </div>
</div>
```

### After (Fixed Structure)
```html
<div id="page-attendants" class="page">
  <!-- FTE, Main Callflow, etc. -->
</div>

<div id="ai-settings" style="display: none;">  <!-- ✅ Can show independently -->
  <!-- Settings content -->
</div>
```

### How It Works
1. **Independent visibility**: `#ai-settings` is now a top-level element
2. **openAISettings() works correctly**: Can hide all `.page` elements without affecting `#ai-settings`
3. **Direct control**: `document.getElementById('ai-settings').style.display = 'block';` now works as expected

## Files Changed

### `apps/auto-attendant/index.html`
- **Lines 2349-2516** (original location): Removed `#ai-settings` from inside `#page-attendants`
- **After line 2781** (new location): Added complete `#ai-settings` div after `#page-attendants` closes
- **Added comment**: `<!-- AI Settings Screen (Moved outside #page-attendants to prevent parent hiding) -->`

## Testing
1. Navigate to the completed callflow page
2. Click the "Settings" button in the Google Virtual Assistant card
3. Settings page should now display properly with:
   - Full-width white header
   - "Google Virtual Assistant Settings" title
   - "SAVE & EXIT" button
   - All settings sections visible (AI Assistant Control, Email Notifications, etc.)

## Related
- Settings page accessible via `openAISettings()` function
- Saves settings to `localStorage` under `ai_settings` key
- Returns to main callflow via `saveAISettingsAndExit()` function
