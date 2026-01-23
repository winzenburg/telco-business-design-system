# Global Demo Bar - AI Usage State Toggle

**Date:** January 20, 2026  
**Feature:** Added AI minute usage state toggle to global demo bar

---

## Overview

Added a permanent AI usage state toggle to the global demo bar that's **always visible** at the top of the screen, regardless of which page or state the user is viewing.

---

## Feature Details

### Location
- **Position:** Fixed at top of screen (left section of global demo bar)
- **Visibility:** Always visible on all pages
- **Styling:** Separated from other controls with a vertical divider

### Visual Design

```
┌─────────────────────────────────────────────────────┐
│  🤖 Normal (49%)  [Toggle Minutes]  │  Other Controls │
└─────────────────────────────────────────────────────┘
```

**Components:**
1. **Icon:** Bot icon (Lucide `bot`)
2. **State Label:** Dynamic text showing current state and percentage
3. **Button:** "Toggle Minutes" to cycle through states

### State Labels & Colors

| State | Label | Color | Usage |
|-------|-------|-------|-------|
| **Normal** | Normal (49%) | Light Blue `rgb(186, 230, 253)` | 247/500 |
| **Warning** | Warning (82%) | Light Yellow `rgb(254, 240, 138)` | 410/500 |
| **Critical** | Critical (92%) | Light Red `rgb(254, 202, 202)` | 460/500 |
| **Failover** | Failover (100%) | Light Gray `rgb(221, 221, 226)` | 500/500 |

---

## User Interaction

1. User clicks **"Toggle Minutes"** button
2. State cycles: `Normal → Warning → Critical → Failover → Normal...`
3. Label updates with new state name and percentage
4. Color changes to match state theme
5. **Both** dashboard card AND callflow page card update simultaneously

---

## Technical Implementation

### HTML Structure

```html
<div style="display: flex; align-items: center; gap: 0.75rem; padding-right: 1rem; border-right: 1px solid rgba(255,255,255,0.2);">
  <span id="demo-usage-label" style="display: flex; align-items: center; gap: 0.5rem;">
    <i data-lucide="bot" style="width: 16px; height: 16px;"></i>
    <span id="demo-usage-state-text">Normal</span>
  </span>
  <button onclick="toggleDemoUsageState()">
    Toggle Minutes
  </button>
</div>
```

### JavaScript Functions

**1. toggleDemoUsageState()**
- Cycles through `currentDemoState` variable
- Updates `demo-usage-state-text` element with new label and color
- Calls `updateAIUsageStatus()` to update all cards

**2. initializeDemoBar()**
- Runs on page load
- Sets initial state to "Normal (49%)" with blue color

**3. updateAIUsageStatus()**
- Called by toggle function
- Updates dashboard card via existing logic
- Calls `updateCallflowAIUsage()` for callflow page card

---

## Integration with Existing Controls

### Before
```
┌──────────────────────────────────┐
│  DEMO: Normal  [Toggle State]    │  ← Only on dashboard
│  FTE  [Skip to Completed]        │  ← Only on FTE screens
│  Completed  [Reset to FTE]       │  ← Only on completed
└──────────────────────────────────┘
```

### After
```
┌─────────────────────────────────────────────────────┐
│  🤖 Normal (49%)  [Toggle Minutes]  │  Context Controls │
└─────────────────────────────────────────────────────┘
     ↑ Always visible               ↑ Context-dependent
```

**Layout:**
- AI usage toggle: **Always visible** (left side with divider)
- Dashboard state toggle: Visible only on dashboard
- FTE controls: Visible only during wizard setup
- Completed controls: Visible only on completed callflow

---

## Benefits

### 1. **Global Access**
- Toggle states from anywhere in the app
- No need to return to dashboard to change state

### 2. **Visual Feedback**
- Color-coded labels match state themes
- Percentage shows exact usage at a glance

### 3. **Consistent Behavior**
- Single source of truth (`currentDemoState` variable)
- All cards update simultaneously

### 4. **Better Demo Experience**
- Quick state changes during presentations
- Clear indication of current demo state

---

## Files Modified

**apps/auto-attendant/index.html**
1. Added new section to `global-demo-bar` (line ~744)
2. Updated `toggleDemoUsageState()` to include label updates
3. Added `initializeDemoBar()` function
4. Added initialization call on page load

**Total Changes:** ~35 lines added

---

## Testing Checklist

- [x] Label displays correctly on page load
- [x] Button cycles through all 4 states
- [x] Label text updates correctly
- [x] Label color changes to match state
- [x] Dashboard card updates when toggled
- [x] Callflow page card updates when toggled
- [x] Toggle works from dashboard
- [x] Toggle works from callflow page
- [x] Toggle works from AI settings
- [x] Toggle works during wizard setup

---

## Visual Reference

### Normal State
```
🤖 Normal (49%)  [Toggle Minutes]
    └─ Light blue color
```

### Warning State
```
🤖 Warning (82%)  [Toggle Minutes]
    └─ Light yellow color
```

### Critical State
```
🤖 Critical (92%)  [Toggle Minutes]
    └─ Light red color
```

### Failover State
```
🤖 Failover (100%)  [Toggle Minutes]
    └─ Light gray color
```

---

**Status:** ✅ COMPLETE  
**Server:** Running at http://localhost:8080  
**Ready for:** Demo and testing
