# Closed Hours Routing Selection Fix

**Date:** January 20, 2026  
**Issue:** SAVE & NEXT button on Closed Hours routing screen bypassed routing selection

---

## Problem

The Closed Hours routing screen had a SAVE & NEXT button that allowed users to proceed without selecting a routing option. This was inconsistent with the Open Hours routing screen, where users must click on a routing card to proceed.

---

## Solution

### Changes Made

1. **Removed SAVE & NEXT button** from bottom actions
2. **Updated bottom action bar** from `justify-content: space-between` to `justify-content: flex-start` (left-aligned BACK button only)
3. **Added onclick handlers** to routing cards:
   - User or External Number → `onclick="saveRoutingClosedAndNext()"`
   - Hunt Group → `onclick="saveRoutingClosedAndNext()"`
   - Voicemail → `onclick="saveRoutingClosedAndNext()"`
4. **Updated greeting completion flow** to navigate to CFNR for closed hours context

### Code Changes

**Before:**
```javascript
// Bottom had BACK + SAVE & NEXT buttons
// Routing cards had no onclick handlers (except Keypad)
// Greeting completion went directly to finished callflow
```

**After:**
```javascript
// Bottom has only BACK button
// All routing cards navigate to CFNR:
onclick="saveRoutingClosedAndNext()" // User, Hunt Group, Voicemail
onclick="goToKeypadConfig('closed')" // Keypad Options (existing)

// Greeting completion navigates to CFNR:
if (keypadContext === 'closed') {
  document.getElementById('setup-cfnr').style.display = 'block';
  saveCurrentScreen('setup-cfnr');
}
```

---

## Updated Flow

### Closed Hours Routing Paths

**Path 1: Keypad Options**
```
Step 3: Closed Hours Routing
  → [Click Keypad Options card]
  → Keypad Configuration
  → Greeting Configuration
  → [SAVE & COMPLETE]
  → Step 4: CFNR Configuration ✅
```

**Path 2: Direct Routing (User/Hunt Group/Voicemail)**
```
Step 3: Closed Hours Routing
  → [Click User/Hunt Group/Voicemail card]
  → Step 4: CFNR Configuration ✅
```

---

## Consistency Achieved

The Closed Hours routing screen now works **exactly like the Open Hours routing screen**:

| Aspect | Open Hours | Closed Hours |
|--------|------------|--------------|
| SAVE & NEXT button | ❌ None | ❌ None |
| Routing card selection | ✅ Required | ✅ Required |
| Bottom actions | BACK only | BACK only |
| Navigation trigger | Click card | Click card |

---

## User Experience

### Before (Problematic)
- User could click SAVE & NEXT without making a selection
- No routing option captured
- Inconsistent with Open Hours behavior

### After (Fixed)
- User must click on a routing card to proceed
- Routing selection is captured before navigation
- Consistent pattern across both Open and Closed Hours

---

## Files Modified

- **apps/auto-attendant/index.html**
  - Removed SAVE & NEXT button from `setup-routing-closed`
  - Added `onclick` handlers to 3 routing cards
  - Updated `saveGreetingAndComplete()` function to navigate to CFNR

**Total changes:** ~5 lines modified

---

**Status:** ✅ FIXED  
**Testing:** Ready for validation in browser
