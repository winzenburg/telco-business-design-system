# Google Virtual Assistant - Callflow Page States

**Date:** January 20, 2026  
**Feature:** 4 detailed usage states for Main Business Number Callflow page

---

## Overview

Created 4 distinct visual states for the Google Virtual Assistant usage card on the Main Business Number Callflow page. These states provide **more detailed information** than the dashboard version, with expanded context, insights, and recommendations.

---

## 4 States

### 1. Normal State (< 80% used)

**Usage:** 247 / 500 minutes (49%)  
**Remaining:** 253 minutes

**Visual Theme:**
- Icon background: Blue gradient `linear-gradient(135deg, rgb(224, 242, 254) 0%, rgb(186, 230, 253) 100%)`
- Icon color: Blue `rgb(13, 98, 255)`
- Progress bar: Blue `rgb(13, 98, 255)`
- Remaining text: Green `rgb(21, 128, 61)`
- Status label: "Normal Operation"

**Content:**
- ✅ No alert banner (everything looks good)
- **Info section:** "How AI Minutes Work"
  - Usage explanation: Minutes consumed during active AI conversations
  - Failover Protection: Automatic switch to standard IVR
  - Add More: Purchase anytime
- Background: Light blue `rgb(245, 248, 255)`

**Purpose:** Educational and informative when usage is healthy.

---

### 2. Warning State (80-89% used)

**Usage:** 410 / 500 minutes (82%)  
**Remaining:** 90 minutes

**Visual Theme:**
- Icon background: Yellow gradient `linear-gradient(135deg, rgb(254, 249, 195) 0%, rgb(254, 240, 138) 100%)`
- Icon color: Amber `rgb(234, 179, 8)`
- Progress bar: Amber `rgb(234, 179, 8)`
- Remaining text: Amber `rgb(234, 179, 8)`
- Status label: "Low Balance Warning"

**Content:**
- ⚠️ **Alert Banner** (yellow gradient)
  - Heading: "Low Balance: 90 Minutes Remaining"
  - Message: Used 82% of monthly AI minutes
  - Action: Consider adding more minutes
  - Reassurance: Standard call flow will activate automatically if depleted

- **Usage Insights & Planning Section:**
  - **Current Pace:** Tracking to use ~382 minutes this cycle
  - **Cycle Ends:** 11 days remaining until Feb 1st renewal
  - **Upgrade:** Consider higher plan tier for high-volume months
- Background: Light yellow `rgb(254, 252, 232)`

**Purpose:** Proactive notification with planning insights.

---

### 3. Critical State (90-99% used)

**Usage:** 460 / 500 minutes (92%)  
**Remaining:** 40 minutes

**Visual Theme:**
- Icon background: Red gradient `linear-gradient(135deg, rgb(254, 226, 226) 0%, rgb(254, 202, 202) 100%)`
- Icon color: Red `rgb(220, 38, 38)`
- Progress bar: Red `rgb(220, 38, 38)`
- Remaining text: Red `rgb(220, 38, 38)`
- Status label: "Critical - Action Required"

**Content:**
- 🚨 **Alert Banner** (red gradient)
  - Heading: "Critical: Only 40 Minutes Remaining"
  - Message: AI minutes nearly depleted, will switch to standard IVR at zero
  - CTA: ⚡ Add minutes now to avoid interruption

- **Impact & Recommendations Section:**
  - **At Current Rate:** Minutes may run out in ~13 days
  - **Backup Ready:** Standard IVR will activate automatically - no service disruption
  - **Add Now:** Purchase minutes instantly to continue AI service
- Background: Very light red `rgb(254, 242, 242)`

**Purpose:** Urgent action required with clear impact assessment.

---

### 4. Failover Active State (100% used)

**Usage:** 500 / 500 minutes (100%)  
**Remaining:** 0 minutes

**Visual Theme:**
- Icon background: Gray gradient `linear-gradient(135deg, rgb(249, 249, 250) 0%, rgb(241, 242, 246) 100%)`
- Icon color: Gray `rgb(112, 113, 125)`
- Progress bar: Gray `rgb(180, 181, 187)`
- Remaining text: Gray `rgb(112, 113, 125)`
- Status label: "Failover Active"

**Content:**
- ℹ️ **Alert Banner** (gray gradient)
  - Heading: "Standard Auto-Attendant Active"
  - Message: Google Virtual Assistant has used all available minutes this billing cycle
  - Current state: Calls handled by standard auto-attendant with configured call flow
  - Action: Add more minutes to reactivate AI-powered call handling

- **What Happens When Minutes are Depleted:**
  - **Automatic Failover:** Calls seamlessly transition to standard IVR without interruption
  - **Auto-Restore Next Cycle:** AI assistant reactivates automatically when minutes renew Feb 1st
- Background: Light gray `rgb(252, 252, 252)`

**Purpose:** Clear explanation of current state with reassurance of seamless failover.

---

## Key Differences from Dashboard Card

| Aspect | Dashboard Version | Callflow Page Version |
|--------|------------------|----------------------|
| **Space** | Compact, single summary | Expanded with detailed sections |
| **Alert Banners** | Simple 3-line alerts | Full banners with icons and multi-line content |
| **Details Sections** | Not present | Dedicated info sections with 2-3 column grids |
| **Insights** | Usage % only | Usage pace, cycle info, recommendations |
| **Context** | Quick status | Full explanations and implications |
| **CTAs** | Single "Add Minutes" | Multiple action prompts with context |
| **Icons** | Minimal | Rich iconography throughout details |

---

## Demo Toggle Integration

The demo toggle in the global demo bar cycles through all 4 states:

```
Normal → Warning → Critical → Failover → Normal...
```

**Function Flow:**
1. User clicks demo toggle button
2. `toggleDemoUsageState()` cycles `currentDemoState` variable
3. `updateAIUsageStatus()` is called
4. `updateCallflowAIUsage()` is called from within
5. Both dashboard card AND callflow card update simultaneously

---

## Technical Implementation

**HTML:**
- Single div with ID: `callflow-ai-usage`
- Content dynamically populated by JavaScript

**JavaScript Function:**
```javascript
function updateCallflowAIUsage() {
  // Check for div existence
  // Determine state based on currentDemoState
  // Generate appropriate HTML (400-500 lines per state)
  // Populate callflow-ai-usage div
}
```

**Called from:**
- `updateAIUsageStatus()` - ensures sync with dashboard
- On page load (via `updateAIUsageStatus()` call at end of script)
- On demo toggle (via `toggleDemoUsageState()` → `updateAIUsageStatus()`)

---

## Content Highlights by State

### Normal
- **Focus:** Education and information
- **Tone:** Neutral, helpful
- **Icons:** 3 columns (Usage, Failover Protection, Add More)

### Warning  
- **Focus:** Planning and awareness
- **Tone:** Informative, suggestive
- **Icons:** 3 columns (Current Pace, Cycle Ends, Upgrade)
- **Unique:** Projected usage calculation, timeline info

### Critical
- **Focus:** Urgency and action
- **Tone:** Alert, directive
- **Icons:** 3 columns (At Current Rate, Backup Ready, Add Now)
- **Unique:** Days until depletion estimate, reassurance about backup

### Failover
- **Focus:** Current state explanation
- **Tone:** Informative, reassuring
- **Icons:** 2 columns (Automatic Failover, Auto-Restore Next Cycle)
- **Unique:** Explicit confirmation of seamless transition, auto-restore date

---

## Files Modified

- **apps/auto-attendant/index.html**
  - Replaced static callflow AI card with dynamic div (line ~2752)
  - Added `updateCallflowAIUsage()` function (~400 lines)
  - Integrated call in `updateAIUsageStatus()`

**Total:** ~405 lines added, ~100 lines removed

---

**Status:** ✅ COMPLETE  
**Testing:** Ready for review in browser  
**Demo:** Toggle states using global demo bar
