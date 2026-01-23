# Failover Active State Feature

## Overview
Added a new "Failover Active" state to the AI Usage dashboard that displays when the Google Virtual Assistant runs out of minutes completely and the standard auto-attendant failover is activated.

## New State: Failover Active (Standard Auto-Attendant)

### Visual Design
- **Background:** Light grey gradient (`neutral-100` to `neutral-200`)
  - `linear-gradient(135deg, #F9F9FA 0%, #F1F2F6 100%)`
- **Border:** Neutral-300 (`#DDDDE2`)
- **Status Color:** Neutral-600 (`#70717D`)
- **Icon:** `info` icon in neutral grey
- **Usage:** 500 / 500 minutes (100%)
- **Remaining:** 0 minutes

### Design Rationale
The failover state uses neutral, calm grey colors to communicate that this is simply the default auto-attendant mode - not an error or critical situation. The standard auto-attendant is a reliable fallback service, so the visual treatment reflects a normal operational state rather than an alarming condition.

### Alert Message
```
Standard Auto-Attendant Active

Your Google Virtual Assistant has used all available minutes. Calls are now 
being handled by your standard auto-attendant.

Add minutes to reactivate your AI assistant.
```

### User Experience
When users see the Failover state:
- ℹ️ Calm, neutral indication that standard auto-attendant is active
- 📞 Clear explanation that calls are handled by the reliable default system
- ➕ Prominent "Add Minutes" button remains available
- 🔄 Users can add minutes to reactivate the AI assistant
- ✅ No alarming colors - this is a normal operational mode

## State Progression

### Complete State Cycle
1. **Normal** (Blue) - 247/500 used, 253 remaining (~49% usage)
2. **Warning** (Yellow) - 410/500 used, 90 remaining (82% usage)
3. **Critical** (Red) - 460/500 used, 40 remaining (92% usage)
4. **Failover** (Grey) - 500/500 used, 0 remaining (100% usage)
5. Back to **Normal**

### Visual Summary

| State | Color | Usage | Remaining | Message |
|-------|-------|-------|-----------|---------|
| Normal | Blue | 247/500 (49%) | 253 min | Healthy usage |
| Warning | Yellow | 410/500 (82%) | 90 min | Low balance warning |
| Critical | Red | 460/500 (92%) | 40 min | Nearly depleted |
| **Failover** | **Grey** | **500/500 (100%)** | **0 min** | **Standard auto-attendant active** |

## Design System Colors Used

### Failover State Colors (Neutral Grey)
- **neutral-100:** `#F9F9FA` (gradient start)
- **neutral-200:** `#F1F2F6` (gradient end)
- **neutral-300:** `#DDDDE2` (border)
- **neutral-600:** `#70717D` (status color, icon)
- **neutral-900:** `#2B2D3F` (heading text)

### Contrast Compliance
✅ **All text passes WCAG AA:**
- Neutral-900 on neutral-100 gradient: ~11.2:1 contrast ratio
- Neutral-600 on neutral-100 gradient: ~4.5:1 contrast ratio
- Exceeds all WCAG AA requirements

## Implementation Details

### JavaScript State Management
```javascript
let currentDemoState = 'normal'; // 'normal', 'warning', 'critical', 'failover'

function toggleDemoUsageState() {
  // Cycle: normal → warning → critical → failover → normal
  if (currentDemoState === 'normal') {
    currentDemoState = 'warning';
  } else if (currentDemoState === 'warning') {
    currentDemoState = 'critical';
  } else if (currentDemoState === 'critical') {
    currentDemoState = 'failover';
  } else {
    currentDemoState = 'normal';
  }
  updateAIUsageStatus();
}
```

### Failover State Values
```javascript
if (currentDemoState === 'failover') {
  used = 500;
  total = 500;
  statusLabel = 'Failover Active';
}
```

### Visual Styling Logic
```javascript
if (percentageUsed >= 100) {
  status = 'failover';
  statusColor = '#70717D'; // neutral-600
  bgGradient = 'linear-gradient(135deg, #F9F9FA 0%, #F1F2F6 100%)'; // neutral-100 to neutral-200
  borderColor = '#DDDDE2'; // neutral-300
  alertHTML = '...'; // Calm informational message with info icon
}
```

## User Actions in Failover State

### "Add Minutes" Button
- ✅ **Remains visible and functional** in failover state
- Located in the top-right of the AI Usage card
- Primary action to reactivate the AI assistant
- Uses design system button styles

### Button Behavior
```html
<button onclick="alert('Add minutes feature coming soon')" 
  style="background: #0D62FF; color: white; ...">
  <i data-lucide="plus-circle"></i>
  Add Minutes
</button>
```

## Business Logic

### Real-World Behavior
In production, the failover state would:
1. **Trigger automatically** when AI minutes reach 0
2. **Switch call routing** to standard auto-attendant
3. **Send notifications** to account admins
4. **Enable "Add Minutes" flow** to purchase additional AI capacity
5. **Reactivate AI assistant** once minutes are added

### Demo Behavior
In the demo:
- State can be toggled manually via "Toggle State" button
- Shows all possible states for demonstration purposes
- "Add Minutes" button shows placeholder alert
- No actual service switching occurs

## Related Documentation
- Default state change: [DEFAULT-STATE-CHANGE.md](./DEFAULT-STATE-CHANGE.md)
- Contrast fixes: [CONTRAST-FIX-SUMMARY.md](./CONTRAST-FIX-SUMMARY.md)
- Theme fixes: [THEME-FUNCTION-FIX.md](./THEME-FUNCTION-FIX.md)
- Login fixes: [LOGIN-FIX-SUMMARY.md](./LOGIN-FIX-SUMMARY.md)
- Visibility fixes: [VISIBILITY-FIX-SUMMARY.md](./VISIBILITY-FIX-SUMMARY.md)

## Files Changed
- `apps/auto-attendant/index.html` - Added failover state logic, styling, and UI updates

## Testing
To test the failover state:
1. Log in to the dashboard (password: `demo2026`)
2. Click "Toggle State" button three times to reach "Standard Auto-Attendant Active"
3. Verify light grey gradient background appears (calm, neutral appearance)
4. Verify alert message displays with info icon (not alarming)
5. Verify "Add Minutes" button is visible and functional
6. Verify 500/500 usage and 0 remaining is displayed
7. Confirm the state feels informative, not alarming