# Demo Controls Consolidated to Center Top

## Overview
All demo control buttons have been consolidated into a single global control bar that's centered at the top of the browser, floating above the global header. This keeps all demo controls in one consistent location and completely out of the interface.

## Changes Made

### Before (Scattered Controls)
- **Dashboard state toggle**: Absolute positioned in dashboard page (top-right)
- **"Skip to Completed" button**: Fixed on FTE page (top-right, 94px from top)
- **"Reset to FTE" button**: Fixed on Completed page (top-right, 94px from top)

**Issues:**
- Controls scattered in different locations
- Could interfere with page content
- Had to be managed separately for each page

### After (Consolidated Bar)
- **Global demo bar**: Single fixed bar at top center
- **Position**: `position: fixed; top: 10px; left: 50%; transform: translateX(-50%);`
- **Z-index**: `10000` (above everything, including global header)
- **Dynamic sections**: Shows only relevant controls based on current page/state

## Visual Design

### Bar Structure
```
┌────────────────────────────────────────────────────┐
│  DEMO: Normal [Toggle State] │ FTE [Skip] │ ...   │
└────────────────────────────────────────────────────┘
```

**Styling:**
- Background: `#2B2D3F` (dark charcoal)
- Text: White
- Padding: `8px 20px`
- Border radius: `8px`
- Box shadow: `0 4px 16px rgba(0,0,0,0.4)`
- No dividers between sections (clean, minimal appearance)

### Three Dynamic Sections

1. **Dashboard State Toggle** (Shows only on Dashboard page)
   - `id="demo-toggle-control"`
   - Shows: "DEMO: [State]" + "Toggle State" button
   - Cycles through: Normal → Warning → Critical → Failover
   - Hidden when on FTE/Completed pages

2. **FTE Navigation** (Shows when on FTE page)
   - `id="demo-fte-control"`
   - Shows: "FTE" + "Skip to Completed" button
   - Hides when on dashboard, completed page, or other pages

3. **Completed Navigation** (Shows when on completed page)
   - `id="demo-completed-control"`
   - Shows: "Completed" + "Reset to FTE" button
   - Hides when on dashboard, FTE page, or other pages

## Implementation Details

### HTML Structure
```html
<div id="global-demo-bar" style="position: fixed; top: 10px; left: 50%; transform: translateX(-50%); ...">
  <!-- Dashboard State Toggle (always visible) -->
  <div id="demo-toggle-control" style="display: flex; ...">
    <span id="demo-status-label">DEMO: Normal</span>
    <button onclick="toggleDemoUsageState()">Toggle State</button>
  </div>
  
  <!-- FTE Navigation (conditional) -->
  <div id="demo-fte-control" style="display: none; ...">
    <span>FTE</span>
    <button onclick="skipToCompleted()">Skip to Completed</button>
  </div>
  
  <!-- Completed Navigation (conditional) -->
  <div id="demo-completed-control" style="display: none; ...">
    <span>Completed</span>
    <button onclick="resetToFTE()">Reset to FTE</button>
  </div>
</div>
```

### JavaScript Updates

**1. Sidebar Navigation Handler**
```javascript
// In sidebar click handler
if (pageId === 'dashboard') {
  // Dashboard: Show only state toggle
  document.getElementById('demo-toggle-control').style.display = 'flex';
  document.getElementById('demo-fte-control').style.display = 'none';
  document.getElementById('demo-completed-control').style.display = 'none';
} else if (pageId === 'attendants') {
  // Attendants: Hide dashboard toggle, show FTE control initially
  document.getElementById('demo-toggle-control').style.display = 'none';
  document.getElementById('demo-fte-control').style.display = 'flex';
  document.getElementById('demo-completed-control').style.display = 'none';
  restoreState(); // May override to show completed control
} else {
  // Other pages: Hide all demo controls
  document.getElementById('demo-toggle-control').style.display = 'none';
  document.getElementById('demo-fte-control').style.display = 'none';
  document.getElementById('demo-completed-control').style.display = 'none';
}
```

**2. resetToFTE() Function**
```javascript
// Hide dashboard toggle, show FTE control
document.getElementById('demo-toggle-control').style.display = 'none';
document.getElementById('demo-fte-control').style.display = 'flex';
document.getElementById('demo-completed-control').style.display = 'none';
```

**3. skipToCompleted() Function**
```javascript
// Hide dashboard toggle, show completed control
document.getElementById('demo-toggle-control').style.display = 'none';
document.getElementById('demo-fte-control').style.display = 'none';
document.getElementById('demo-completed-control').style.display = 'flex';
```

**4. showMainBusinessNumberCallflow() Function**
```javascript
// Hide dashboard toggle, show completed control (when clicking AI Usage card)
document.getElementById('demo-toggle-control').style.display = 'none';
document.getElementById('demo-fte-control').style.display = 'none';
document.getElementById('demo-completed-control').style.display = 'flex';
```

**5. restoreState() Function**
```javascript
// Hide dashboard toggle, show completed control based on restored screen
if (savedScreen === 'main-callflow-content') {
  document.getElementById('demo-toggle-control').style.display = 'none';
  document.getElementById('demo-fte-control').style.display = 'none';
  document.getElementById('demo-completed-control').style.display = 'flex';
}
```

**6. openAISettings() Function**
```javascript
// Hide demo bar completely when entering settings
document.getElementById('global-demo-bar').style.display = 'none';
```

**7. saveAISettingsAndExit() Function**
```javascript
// Show and update demo bar when exiting settings
document.getElementById('global-demo-bar').style.display = 'flex';
document.getElementById('demo-toggle-control').style.display = 'none';
document.getElementById('demo-fte-control').style.display = 'none';
document.getElementById('demo-completed-control').style.display = 'flex';
```

## User Experience

### Benefits
1. **Consistent location**: All demo controls always in the same spot
2. **Out of the way**: Centered at top, doesn't interfere with page content
3. **Always visible**: Fixed positioning, doesn't scroll
4. **Context-aware**: Shows only relevant controls for current page
5. **Visual hierarchy**: Dark background clearly identifies as demo controls

### Behavior
- **Dashboard page**: Shows state toggle only
- **FTE page**: Shows FTE navigation only (no state toggle)
- **Completed page**: Shows completed navigation only (no state toggle)
- **AI Settings page**: Entire demo bar hidden for clean settings view
- **Other pages**: Hides all demo controls
- **Above header**: Positioned at `top: 10px`, header starts at ~32px

## Files Changed

### `apps/auto-attendant/index.html`
1. **Removed** three individual demo control divs:
   - Dashboard: `#demo-toggle-control` (line ~879)
   - FTE: Demo skip button (line ~1148)
   - Completed: Demo reset button (line ~2353)

2. **Added** global demo bar before Comcast Header (line ~742)
   - Consolidated all three controls into one bar
   - Dynamic visibility management

3. **Updated** JavaScript functions:
   - Sidebar navigation handler
   - `resetToFTE()`
   - `skipToCompleted()`
   - `showMainBusinessNumberCallflow()`
   - `restoreState()`

## Testing

1. **Login** to the app
2. **Dashboard**: Should see "DEMO: Normal [Toggle State]" centered at top
3. **Navigate to MAIN BUSINESS NUMBER**: Dashboard toggle hides, FTE navigation appears
4. **Click "Skip to Completed"**: FTE nav hides, completed nav appears
5. **Click Settings** (on Google Virtual Assistant card): Entire demo bar hidden
6. **Click "SAVE & EXIT"**: Returns to completed page, demo bar reappears with completed nav
7. **Click "Reset to FTE"**: Completed nav hides, FTE nav appears
8. **Navigate back to Dashboard**: FTE/Completed nav hides, state toggle appears
9. **Navigate to other pages**: All demo controls hidden
10. **Toggle dashboard states** (on Dashboard): State label updates correctly

## Related Documentation
- `DEMO-RESET-BUTTON.md` - Original button implementation
- `DEMO-TOGGLE-REPOSITIONED.md` - Dashboard toggle positioning
