# Call Flow Wizard - CFNR and Google Virtual Assistant Steps

**Date:** January 20, 2026  
**Feature:** Added two new wizard steps for CFNR configuration and Google Virtual Assistant setup

---

## Overview

Expanded the Call Flow Setup wizard from **3 steps to 5 steps** to include CFNR (Call Forward No Reply) configuration and Google Virtual Assistant setup.

---

## New Wizard Flow

### Previous Flow (3 Steps)
```
Step 1: Schedules (Timezone, Open Hours, Holidays)
Step 2: Open Hours Routing
Step 3: Closed Hours Routing
→ Complete
```

### New Flow (5 Steps)
```
Step 1: Schedules (Timezone, Open Hours, Holidays)
Step 2: Open Hours Routing
Step 3: Closed Hours Routing
Step 4: CFNR Configuration (NEW)
Step 5: Google Virtual Assistant Configuration (NEW)
→ Complete
```

---

## Step 4: CFNR Configuration

### Purpose
Configure failover routing when:
- AI Agent fails
- Network issues occur
- Calls don't reach primary call flow

### Screen Details

**Screen ID:** `setup-cfnr`

**Stepper:**
- Step 1: Schedules (completed, green check)
- Step 2: Open Hours (completed, green check)
- Step 3: Closed Hours (completed, green check)
- Step 4: **Failover** (active, blue)
- Step 5: Google Virtual Assistant (inactive, gray)

**Content:**
- Section header: "FAILOVER ROUTING"
- Main heading: "Where should calls route if there are any issues?"
- Subtext: "Configure backup routing when the AI Assistant fails, network issues occur, or calls don't reach your primary call flow"

**Routing Options:**
- User (from site)
- Hunt Group (from site)
- Voicemail (from site)
- External Number (manual phone number entry)
- Google Assistant TN is excluded

**Dynamic Selection:**
- Dropdown shows routing type options
- Secondary input appears based on selection:
  - User → User picker dropdown
  - Hunt Group → Hunt group picker dropdown
  - Voicemail → Voicemail box picker dropdown
  - External Number → Phone number input field

**Navigation:**
- BACK button → Returns to `setup-routing-closed`
- SAVE & NEXT button → Proceeds to `setup-google-ai`

### New Functions Added

```javascript
// Navigate from routing-closed to CFNR
function saveRoutingClosedAndNext() { ... }

// Navigate back from CFNR to routing-closed
function backToCFNRFromRouting() { ... }

// Save CFNR and proceed to Google Virtual Assistant
function saveCFNRAndNext() { ... }

// Update secondary options based on routing type
function updateCFNRSecondaryOptions() { ... }
```

---

## Step 5: Google Virtual Assistant Configuration

### Purpose
Inform customers about Google Assistant configuration and provide SSO link to complete setup.

### Screen Details

**Screen ID:** `setup-google-ai`

**Stepper:**
- Step 1: Schedules (completed, green check)
- Step 2: Open Hours (completed, green check)
- Step 3: Closed Hours (completed, green check)
- Step 4: Failover (completed, green check)
- Step 5: **Google Virtual Assistant** (active, blue)

**Content Sections:**

1. **Success Banner** (green gradient)
   - Check circle icon (64px)
   - "Call Flow Configuration Complete!"
   - "Your call flow has been saved and is ready to handle incoming calls."

2. **Google Virtual Assistant Configuration Card** (blue gradient)
   - Bot icon (64px)
   - Heading: "Configure Google Virtual Assistant"
   - Description: "Your call flow is configured and ready. To enable AI-powered call handling, complete the Google Assistant configuration."
   
   **Key Points Listed:**
   - All calls route to the configured call flow until AI is configured and turned on
   - Assistant can be turned off at any time to route back to call flow
   - Configured schedules apply to both call flow and Google Virtual Assistant routing

3. **Primary CTA Button**
   - "CONFIGURE GOOGLE ASSISTANT" with external link icon
   - Opens: `https://google-ai-config-placeholder.com` in new tab
   - Large, prominent, blue with shadow and hover effects

4. **Secondary Option**
   - "I'll configure this later" text button
   - Proceeds to completed callflow

5. **Info Note**
   - Explains that routing selections (Open/Closed Hours) are only for backup/default call flow
   - Used when AI is disabled or minutes are depleted

**Navigation:**
- BACK button → Returns to `setup-cfnr`
- FINISH button → Completes wizard, shows `main-callflow-content`

### New Functions Added

```javascript
// Navigate back from Google Virtual Assistant to CFNR
function backToGoogleAIFromCFNR() { ... }

// Complete wizard from Google Virtual Assistant step
function completeWizardFromGoogleAI() { ... }

// Launch Google Virtual Assistant config (opens in new tab)
function launchGoogleAIConfig() { ... }
```

---

## Stepper Updates

### Screens Updated (7 total)

All wizard screens updated to show 5 steps:

1. **setup-timezone** (Step 1 active)
2. **setup-openhours** (Step 1 active)
3. **setup-holidays** (Step 1 active)
4. **setup-routing** (Steps 1 completed, Step 2 active)
5. **setup-routing-closed** (Steps 1-2 completed, Step 3 active)
6. **setup-keypad** (dynamic via `updateStepper()`)
7. **setup-greeting** (dynamic via `updateStepper()`)

### Step Labels

| Step | Previous Label | New Label |
|------|----------------|-----------|
| 1 | Schedules | Schedules |
| 2 | Open Hours | Open Hours |
| 3 | Closed Hours & Holidays | Closed Hours |
| 4 | - | **Failover** (NEW) |
| 5 | - | **Google Virtual Assistant** (NEW) |

**Note:** Step 3 label shortened from "Closed Hours & Holidays" to "Closed Hours" for space efficiency with 5 steps.

---

## State Management Updates

### Functions Updated

**openAISettings():**
- Added hide calls for `setup-cfnr` and `setup-google-ai`

**restoreState():**
- Added hide calls for `setup-cfnr` and `setup-google-ai`
- Will restore to these screens if saved in localStorage

**resetToFTE():**
- Added hide calls for `setup-cfnr` and `setup-google-ai`

**backToFTE():**
- Added hide calls for all wizard screens including new ones

**updateStepper():**
- Updated to generate 5 steps for both 'open' and 'closed' contexts
- Steps 4 and 5 always show as inactive in keypad/greeting sub-screens

---

## Navigation Flow

### Complete Wizard Path

```
FTE Landing
  ↓ [GET STARTED]
Step 1: Timezone
  ↓ [SAVE & NEXT]
Step 1: Open Hours (tab)
  ↓ [SAVE & NEXT]
Step 1: Holidays (tab)
  ↓ [SAVE & NEXT]
Step 2: Open Hours Routing
  ↓ [Select Keypad Options]
  → Keypad Config (Open Hours)
    ↓ [SAVE & NEXT]
  → Greeting Config (Open Hours)
    ↓ [SAVE & COMPLETE]
Step 3: Closed Hours Routing
  ↓ [SAVE & NEXT] ← NEW BUTTON ADDED
Step 4: CFNR Configuration ← NEW STEP
  ↓ [SAVE & NEXT]
Step 5: Google Virtual Assistant Configuration ← NEW STEP
  ↓ [FINISH] or [I'll configure this later]
Completed Callflow
```

### Key Navigation Changes

**setup-routing-closed:**
- **Before:** Only BACK button (dead end)
- **After:** BACK + SAVE & NEXT buttons (proceeds to CFNR)

---

## Key Requirements Met

### CFNR Step
- ✅ Allows selection from all site numbers (users, hunt groups, voicemail)
- ✅ Allows external number entry
- ✅ Excludes Google Assistant TN (implementation note: filter in production)
- ✅ Generic messaging about "issues" (AI failure, network, backup flow)

### Google Virtual Assistant Step
- ✅ Informs about next steps in Google
- ✅ Explains call routing behavior (uses call flow until AI configured)
- ✅ Explains ability to turn off AI (routes back to call flow)
- ✅ Provides SSO link (placeholder: `https://google-ai-config-placeholder.com`)
- ✅ Clarifies that hours/schedule config applies to BOTH backup flow AND Google Virtual Assistant
- ✅ Clarifies that routing selection (open/closed) is ONLY for backup/default call flow

---

## UI/UX Enhancements

### Visual Consistency
- All new screens match existing wizard design language
- Consistent header, stepper, and bottom action bar styling
- Proper use of design system colors and spacing

### Information Architecture
- Success banner celebrates completion before next step
- Clear iconography (shield for failover, bot for AI)
- Info banners provide context without overwhelming
- Progressive disclosure (secondary options appear based on selection)

### Navigation Clarity
- Breadcrumbs show clear path
- BACK/NEXT buttons always visible
- "SAVE & EXIT" in header for quick exit
- Demo controls remain functional

---

## Testing Status

### Manual Testing Checklist
- [ ] All 5 steps display correctly in all wizard screens
- [ ] CFNR dropdown shows all routing types
- [ ] CFNR secondary options appear/hide correctly based on selection
- [ ] Google Virtual Assistant screen displays all required messaging
- [ ] SSO link opens in new tab when clicked
- [ ] "I'll configure this later" navigates to completed callflow
- [ ] BACK/NEXT navigation works through all steps
- [ ] SAVE & EXIT works from any step
- [ ] State persists correctly on page refresh
- [ ] Demo controls (Reset to FTE, Skip to Completed) still work
- [ ] No JavaScript console errors

---

## Files Modified

- **apps/auto-attendant/index.html**
  - Added `setup-cfnr` screen (~95 lines)
  - Added `setup-google-ai` screen (~80 lines)
  - Updated 5 static wizard steppers (~150 line changes)
  - Updated `updateStepper()` function for dynamic steppers
  - Added 6 new navigation functions (~95 lines)
  - Updated 4 state management functions (~15 line changes)
  - Added SAVE & NEXT button to `setup-routing-closed`
  
**Total:** ~435 lines added/modified

---

## Production Readiness

### Completed
- ✅ All HTML structure added
- ✅ All navigation functions implemented
- ✅ State management updated
- ✅ CSS compiled successfully
- ✅ Design system compliant

### Before Launch
- [ ] Replace placeholder SSO URL with actual Google Virtual Assistant config endpoint
- [ ] Implement actual CFNR data persistence (currently TODO comment)
- [ ] Implement actual filtering of Google Assistant TN from CFNR options
- [ ] Add form validation for external number input
- [ ] Test full wizard flow end-to-end
- [ ] Verify SSO integration works with Google

---

**Implementation Status:** ✅ COMPLETE  
**CSS Build:** ✅ SUCCESS  
**Testing:** Ready for manual QA  
**Next Action:** Test complete wizard flow in browser
