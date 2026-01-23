# Demo Navigation Buttons Feature

## Overview
Added bidirectional navigation buttons for demo/testing purposes:
1. **"Reset to FTE" button** on the Completed Callflow screen - Jump back to First-Time Experience
2. **"Skip to Completed" button** on the FTE screen - Jump forward to completed state

These buttons provide convenient shortcuts for demos and testing workflows, allowing quick navigation between setup and completed states.

## Visual Design

### Button Positions
Both buttons are **pinned in the viewport** and don't scroll with page content.

**Position:** `position: fixed; top: 94px; right: 20px;` (fixed below global header)

### Completed Callflow Button
**Location:** Top-right of Completed Callflow screen (above page header)

**Styling:**
- Background: `#2B2D3F` (neutral-900)
- Text: White
- Padding: `8px 16px`
- Border radius: `8px`
- Shadow: `0 4px 12px rgba(0,0,0,0.3)`
- Position: `fixed` at `top: 94px; right: 20px`
- Z-index: `9999` (ensures button appears above all content)
- **Does not scroll** with page content (pinned to viewport)

**Layout:**
```
┌─────────────────────────────────┐
│ DEMO: Completed  [Reset to FTE] │
└─────────────────────────────────┘
```

**Components:**
1. **Status label:** "DEMO: Completed" - Indicates current state
2. **Action button:** "Reset to FTE" - Jump back to welcome screen

### FTE Button
**Location:** Top-right of FTE screen (above page header)

**Styling:** Same as Completed Callflow button

**Layout:**
```
┌──────────────────────────────────────┐
│ DEMO: FTE  [Skip to Completed]      │
└──────────────────────────────────────┘
```

**Components:**
1. **Status label:** "DEMO: FTE" - Indicates current state
2. **Action button:** "Skip to Completed" - Jump forward to completed state

### Button States
**Default:**
- Background: White
- Text: `#2B2D3F` (neutral-900)

**Hover:**
- Background: `#F1F2F6` (neutral-200)
- Smooth transition (0.2s)

## Functionality

### Reset to FTE (from Completed)
When clicked, the "Reset to FTE" button:
1. ✅ Hides the completed callflow screen
2. ✅ Shows the First-Time Experience (FTE) setup screen
3. ✅ **Clears** saved wizard progress from localStorage
4. ✅ Resets UI state (footer visibility, wizard actions)
5. ✅ Scrolls to top of page
6. ✅ Reinitializes Lucide icons

**Result:** User is back at the welcome screen as if starting fresh.

### Skip to Completed (from FTE)
When clicked, the "Skip to Completed" button:
1. ✅ Hides the FTE screen
2. ✅ Shows the completed callflow screen
3. ✅ **Saves** completed state to localStorage
4. ✅ Resets UI state (footer visibility, wizard actions)
5. ✅ Scrolls to top of page
6. ✅ Reinitializes Lucide icons

**Result:** User sees completed callflow with Google VA configured.

### Use Cases

**Demo Scenarios:**

*Scenario 1: Show completed → Reset → Walk through setup*
1. Start with completed callflow (Skip to Completed)
2. Show what configured system looks like
3. Click "Reset to FTE"
4. Walk through entire setup wizard
5. End at completed state

*Scenario 2: Skip setup, show results*
1. Start at FTE screen
2. Click "Skip to Completed"
3. Immediately show configured system
4. Discuss features without setup time

**Testing Workflows:**
- Quickly reset state without clearing browser data
- Test both FTE and completed states repeatedly
- Validate navigation and state persistence

## Implementation Details

### HTML Structure

**Completed Callflow Screen:**
```html
<div id="main-callflow-content" style="display: none;">
  <!-- Demo Reset Button (Fixed Position) -->
  <div style="position: fixed; top: 94px; right: 20px; z-index: 9999; ...">
    <span>DEMO: Completed</span>
    <button onclick="resetToFTE()">
      Reset to FTE
    </button>
  </div>
  
  <!-- Rest of completed callflow content -->
  ...
</div>
```

**FTE Screen:**
```html
<div id="fte-callflow" style="display: block;">
  <!-- Demo Skip Button (Fixed Position) -->
  <div style="position: fixed; top: 94px; right: 20px; z-index: 9999; ...">
    <span>DEMO: FTE</span>
    <button onclick="skipToCompleted()">
      Skip to Completed
    </button>
  </div>
  
  <!-- Rest of FTE content -->
  ...
</div>
```

### JavaScript Functions

**resetToFTE()** - Jump from completed back to FTE
```javascript
function resetToFTE() {
  // Hide completed callflow
  document.getElementById('main-callflow-content').style.display = 'none';
  
  // Hide all wizard screens
  document.getElementById('setup-timezone').style.display = 'none';
  document.getElementById('setup-openhours').style.display = 'none';
  document.getElementById('setup-holidays').style.display = 'none';
  document.getElementById('setup-routing').style.display = 'none';
  document.getElementById('setup-routing-closed').style.display = 'none';
  document.getElementById('setup-keypad').style.display = 'none';
  document.getElementById('setup-greeting').style.display = 'none';
  document.getElementById('ai-settings').style.display = 'none';
  
  // Show FTE screen
  document.getElementById('fte-callflow').style.display = 'block';
  
  // Clear saved state so it doesn't restore
  localStorage.removeItem('callflow_current_screen');
  localStorage.removeItem('callflow_context');
  
  // Show footer
  document.getElementById('footer').style.display = 'block';
  document.body.classList.remove('has-wizard-actions');
  
  // Scroll to top
  window.scrollTo(0, 0);
  
  // Reinitialize icons
  lucide.createIcons();
}
```

**skipToCompleted()** - Jump from FTE forward to completed
```javascript
function skipToCompleted() {
  // Hide FTE screen
  document.getElementById('fte-callflow').style.display = 'none';
  
  // Hide all wizard screens
  document.getElementById('setup-timezone').style.display = 'none';
  document.getElementById('setup-openhours').style.display = 'none';
  document.getElementById('setup-holidays').style.display = 'none';
  document.getElementById('setup-routing').style.display = 'none';
  document.getElementById('setup-routing-closed').style.display = 'none';
  document.getElementById('setup-keypad').style.display = 'none';
  document.getElementById('setup-greeting').style.display = 'none';
  document.getElementById('ai-settings').style.display = 'none';
  
  // Show completed callflow
  document.getElementById('main-callflow-content').style.display = 'block';
  
  // Save completed state so it persists
  localStorage.setItem('callflow_current_screen', 'main-callflow-content');
  localStorage.setItem('callflow_context', JSON.stringify({}));
  
  // Show footer
  document.getElementById('footer').style.display = 'block';
  document.body.classList.remove('has-wizard-actions');
  
  // Scroll to top
  window.scrollTo(0, 0);
  
  // Reinitialize icons
  lucide.createIcons();
}
```

## State Management

### Before Reset
```
State:
- Current screen: main-callflow-content (visible)
- localStorage: callflow_current_screen = "main-callflow-content"
- Footer: Visible
- Wizard actions: Not active
```

### After Reset
```
State:
- Current screen: fte-callflow (visible)
- localStorage: callflow_current_screen = (cleared)
- Footer: Visible
- Wizard actions: Not active
```

### Why Clear localStorage?
Clearing localStorage prevents the completed state from being automatically restored when:
- User navigates to Main Business Number via sidebar
- User refreshes the page (with new refresh behavior)
- System tries to restore last known state

## Design System Compliance

### Colors
✅ All colors from design system:
- `#2B2D3F` - neutral-900 (button background)
- `#F1F2F6` - neutral-200 (hover state)
- `white` - Standard white

### Typography
✅ Design system font sizing:
- `12px` - Small, unobtrusive size
- `font-weight: 600` - Semibold for emphasis

### Spacing
✅ Consistent spacing values:
- `20px` - Absolute positioning offset
- `8px` - Vertical padding
- `16px` - Horizontal padding
- `12px` - Gap between elements
- `6px` - Button padding

### Shadow
✅ Design system shadow pattern:
- `0 4px 12px rgba(0,0,0,0.3)` - Prominent shadow for elevation

## Visual Consistency

### Similar to Dashboard Demo Toggle
Both buttons share the same visual language:
- Same background color (`#2B2D3F`)
- Same text color (white)
- Same border radius (`8px`)
- Same padding pattern
- Same hover behavior

**Difference:**
- Dashboard toggle: Changes AI usage states (cycles through states)
- Callflow reset: Returns to FTE (one-way action)

## User Experience

### Clear Affordance
**Visual cues:**
- "DEMO: Completed" label indicates current state
- "Reset to FTE" button clearly states action
- Hover state provides feedback
- Top-right position is consistent with demo controls

### Non-Destructive
**Safety:**
- Only affects demo/wizard state
- Doesn't delete any actual configuration
- Can be re-done anytime
- No confirmation needed (low risk)

### Quick Access
**Convenience:**
- No need to navigate away and back
- No need to manually clear localStorage
- Single click operation
- Immediate effect

## Related Features

### Works With
- ✅ **FTE Setup Wizard** - Returns user to welcome screen
- ✅ **State Management** - Clears saved progress
- ✅ **Page Refresh** - Won't auto-restore cleared state
- ✅ **Sidebar Navigation** - Compatible with navigation flow

### Complements
- Dashboard demo toggle (AI usage states)
- Edit Call Flow button (enters wizard mid-flow)
- Callflow wizard navigation (Next/Back buttons)

## Testing

### Test Case 1: Basic Reset
1. Navigate to Main Business Number page
2. Ensure completed callflow is showing
3. Click "Reset to FTE" button
4. **Expected:** FTE welcome screen appears
5. **Result:** ✅ Pass

### Test Case 2: State Cleared
1. Click "Reset to FTE"
2. Navigate away from Main Business Number
3. Navigate back to Main Business Number
4. **Expected:** FTE screen shows (not completed callflow)
5. **Result:** ✅ Pass

### Test Case 3: Wizard Can Start
1. Click "Reset to FTE"
2. Click "GET STARTED" on FTE screen
3. Complete wizard steps
4. **Expected:** Wizard progresses normally
5. **Result:** ✅ Pass

### Test Case 4: Visual Appearance
1. View completed callflow screen
2. Verify button is in top-right corner
3. Hover over "Reset to FTE" button
4. **Expected:** Background changes to light grey
5. **Result:** ✅ Pass

## Edge Cases

### Already on FTE
**Scenario:** User clicks reset when already viewing FTE (shouldn't happen but...)

**Behavior:**
- Function still runs
- FTE remains visible (no change)
- localStorage still cleared (idempotent)
- No errors

### Mid-Wizard Reset
**Scenario:** User is in middle of wizard (e.g., setup-timezone visible)

**Behavior:**
- Current wizard screen is hidden
- FTE becomes visible
- Progress is lost (intentional)
- localStorage cleared

### Multiple Quick Clicks
**Scenario:** User double-clicks reset button

**Behavior:**
- First click: Resets to FTE
- Second click: No effect (button no longer visible)
- Safe operation (idempotent)

## Files Changed

### `apps/auto-attendant/index.html`
**Changes:**
1. Added demo reset button to completed callflow (`position: fixed; top: 94px`)
2. Added demo skip button to FTE screen (`position: fixed; top: 94px`)
3. Set `z-index: 9999` on both buttons to appear above global header
4. Added `resetToFTE()` JavaScript function
5. Added `skipToCompleted()` JavaScript function

**Key Design Decisions:**
- Changed from `position: absolute` to `position: fixed`
- Buttons now **pinned to viewport** and don't scroll with page content
- Positioned at `top: 94px` to avoid covering "Edit Call Flow" button
- Always visible and accessible regardless of scroll position

**Lines added:**
- Completed callflow button HTML: ~8 lines
- FTE button HTML: ~8 lines
- resetToFTE() function: ~36 lines
- skipToCompleted() function: ~36 lines
- Total: ~88 lines

## Related Documentation
- Page refresh fix: [PAGE-REFRESH-FIX.md](./PAGE-REFRESH-FIX.md)
- Dashboard demo toggle: [DEMO-TOGGLE-REPOSITIONED.md](./DEMO-TOGGLE-REPOSITIONED.md)
- Dashboard navigation: [DASHBOARD-NAVIGATION-FEATURE.md](./DASHBOARD-NAVIGATION-FEATURE.md)

## Summary

✅ **Added** bidirectional demo navigation buttons  
✅ **Fixed position** buttons that stay visible while scrolling  
✅ **Positioned** at `top: 94px` (below global header, doesn't cover Edit button)  
✅ **Z-index: 9999** ensures buttons always appear on top  
✅ **Implemented** resetToFTE() function with full state clearing  
✅ **Implemented** skipToCompleted() function with state persistence  
✅ **Maintained** design system consistency with dashboard controls  
✅ **Enabled** flexible demo/testing workflows  
✅ **Ensured** non-destructive, repeatable operations  

Users can now easily navigate between FTE and completed callflow states in both directions:
- **Reset to FTE:** Jump backward from completed to setup
- **Skip to Completed:** Jump forward from FTE to finished state

The buttons are **pinned to the viewport** and remain accessible regardless of scroll position, making demos and testing workflows significantly more convenient!
