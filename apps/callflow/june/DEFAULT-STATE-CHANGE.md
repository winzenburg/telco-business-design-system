# Default Demo State Changed to Normal

## Change Summary
Changed the default state of the AI Usage dashboard from "Warning" to "Normal" on login.

## What Was Changed

### 1. Initial Demo State
**Before:**
```javascript
let currentDemoState = 'warning'; // Started in warning state
```

**After:**
```javascript
let currentDemoState = 'normal'; // Now starts in normal state
```

### 2. Toggle Cycle Order
**Before:** Warning → Critical → Normal → Warning

**After:** Normal → Warning → Critical → Normal

### 3. Initial HTML Display

#### Background & Border
**Before:** Yellow gradient (warning state)
```html
background: linear-gradient(135deg, #FEF9C3 0%, #FEF08A 100%);
border: 1px solid #FACC15;
```

**After:** Blue gradient (normal state)
```html
background: linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%);
border: 1px solid #0D62FF;
```

#### Demo Label
**Before:** `DEMO: Warning`

**After:** `DEMO: Normal`

#### Usage Stats
**Before:**
- Used: 410 / 500 minutes (82%)
- Remaining: 90 minutes (yellow-800)
- Progress bar: 82% yellow

**After:**
- Used: 247 / 500 minutes (49.4%)
- Remaining: 253 minutes (green-700)
- Progress bar: 49.4% primary blue

## Visual Changes

### Normal State (New Default)
- **Background:** Light blue gradient (`sky-100` to `sky-200`)
- **Border:** Primary blue (`primary-500`)
- **Text:** Green-700 for "remaining" count
- **Progress Bar:** Primary blue
- **Percentage:** ~49% usage (healthy)

### User Experience
When users log in, they now see:
- ✅ A healthy, normal usage state
- ✅ Positive visual indicators (blue/green)
- ✅ Clear message that AI usage is within normal range
- ✅ Majority of minutes still available (253 out of 500)

### Toggle Behavior
Clicking "Toggle State" cycles through:
1. **Normal** (blue) - 247/500 used, 253 remaining
2. **Warning** (yellow) - 410/500 used, 90 remaining  
3. **Critical** (red) - 460/500 used, 40 remaining
4. Back to **Normal**

## Design System Compliance

All colors remain from the design system:
- **Normal state:** `sky-100`, `sky-200`, `primary-500`, `green-700`
- **Warning state:** `yellow-100`, `yellow-200`, `yellow-400`, `yellow-800`
- **Critical state:** `red-100`, `red-200`, `red-400`, `red-600`

## Rationale

Starting with a "Normal" state provides:
1. **Positive first impression** - Users see healthy usage status
2. **Less alarm** - Warning/critical states are now opt-in via toggle
3. **Better UX** - Most users won't be in warning state in real usage
4. **Realistic demo** - Shows the typical state customers would experience

## Files Changed
- `apps/auto-attendant/index.html` - Updated initial state, HTML values, and toggle logic
