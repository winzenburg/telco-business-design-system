# Dashboard Card Navigation Feature

## Overview
Made the Google Virtual Assistant dashboard card clickable to navigate directly to the Main Business Number Callflow page, providing a seamless way for users to view and manage their AI-powered call handling configuration.

## User Experience

### Clickable Card
The Google Virtual Assistant card on the dashboard is now fully interactive:
- **Visual feedback:** Card elevates on hover with shadow effect
- **Clear indication:** Subtitle includes "Click to view details"
- **Smooth navigation:** Takes users directly to the Main Business Number callflow
- **Smart button handling:** "Add Minutes" button doesn't trigger card navigation

### Navigation Behavior
When users click the card:
1. ✅ Navigates to Main Business Number page (`page-attendants`)
2. ✅ Shows the finished callflow content (not first-time setup)
3. ✅ Highlights the correct sidebar item ("MAIN BUSINESS NUMBER")
4. ✅ Scrolls to top of the page
5. ✅ Reinitializes Lucide icons

## Implementation Details

### Card Interaction Styling
```html
<div id="dashboard-ai-usage" 
  onclick="showMainBusinessNumberCallflow()"
  style="cursor: pointer; transition: all 0.3s;"
  onmouseover="this.style.boxShadow='0 8px 24px rgba(13,98,255,0.25)'; this.style.transform='translateY(-2px)';"
  onmouseout="this.style.boxShadow='none'; this.style.transform='translateY(0)';">
```

**Visual States:**
- **Default:** No shadow, no transform
- **Hover:** Elevated 2px with blue shadow (`rgba(13,98,255,0.25)`)
- **Transition:** Smooth 0.3s animation

### Event Propagation Handling
To prevent the "Add Minutes" button from triggering card navigation:

```html
<button onclick="event.stopPropagation(); alert('Add minutes feature coming soon');">
  Add Minutes
</button>
```

Similarly for the demo toggle button:
```html
<button onclick="event.stopPropagation(); toggleDemoUsageState();">
  Toggle State
</button>
```

### Navigation Function
Created a new dedicated function for this navigation pattern:

```javascript
function showMainBusinessNumberCallflow() {
  // Clear all active states
  document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
  pages.forEach(p => p.classList.remove('active'));
  
  // Activate the Main Business Number page
  document.getElementById('page-attendants').classList.add('active');
  
  // Highlight sidebar navigation
  const attendantNavItem = document.querySelector('.sidebar-item[data-page="attendants"]');
  if (attendantNavItem) {
    attendantNavItem.classList.add('active');
  }
  
  // Show finished callflow (skip first-time experience)
  document.getElementById('fte-callflow').style.display = 'none';
  document.getElementById('main-callflow-content').style.display = 'block';
  
  // Smooth scroll to top
  window.scrollTo(0, 0);
  
  // Ensure icons render correctly
  lucide.createIcons();
}
```

### Why This Approach?
1. **Direct to content:** Skips FTE (first-time experience) and goes straight to configured callflow
2. **Contextual:** Users clicking from dashboard already have AI set up
3. **Consistent:** Matches sidebar navigation pattern
4. **Visual feedback:** Clear hover state indicates interactivity

## Pages Structure

### Page Hierarchy
```
Dashboard (page-dashboard)
  └─ [Click AI Usage Card]
      └─ Main Business Number (page-attendants)
          ├─ fte-callflow (display: none)
          └─ main-callflow-content (display: block) ✓ Target
```

### Page States
- **fte-callflow:** First-time setup experience (hidden when navigating from dashboard)
- **main-callflow-content:** Finished configuration view (shown when navigating from dashboard)

## Visual Design

### Hover State Colors
- **Shadow:** `rgba(13, 98, 255, 0.25)` (primary-500 at 25% opacity)
- **Transform:** `translateY(-2px)` (subtle elevation)
- **Transition:** `all 0.3s` (smooth animation)

### Text Updates
**Before:**
```
Google Virtual Assistant
AI-powered call handling
```

**After:**
```
Google Virtual Assistant
AI-powered call handling • Click to view details
```

The added "Click to view details" provides clear affordance that the card is interactive.

## Design System Compliance

✅ **Colors:** All colors use design system tokens
- Primary-500 (`#0D62FF`) for shadows and interactions
- Neutral colors for text (`#2B2D3F`, `#595A69`)

✅ **Spacing:** Uses design system spacing scale
- Card padding: `24px` (spacing-6)
- Gap values: `12px`, `6px` (spacing-3, spacing-1.5)

✅ **Transitions:** Smooth, intentional animations
- Duration: `0.3s` for card, `0.2s` for buttons
- Easing: Default (ease)

## Related Features

### Integrated With
- **AI Usage Dashboard:** Main card component
- **State Management:** Demo state toggle doesn't break navigation
- **Add Minutes Button:** Isolated click handler
- **Sidebar Navigation:** Correctly highlights active page

### Complements
- Failover state feature (users can navigate to see AI config even when offline)
- Add Minutes button (users can top off from dashboard or detail page)
- Demo state toggle (shows different scenarios without breaking navigation)

## Testing

To test the navigation:
1. Log in to **http://localhost:8080** (password: `demo2026`)
2. On the dashboard, hover over the Google Virtual Assistant card
3. Verify the card elevates with a shadow
4. Click anywhere on the card (except "Add Minutes" button)
5. Verify navigation to Main Business Number page
6. Verify "MAIN BUSINESS NUMBER" is highlighted in sidebar
7. Verify the finished callflow content is displayed (not setup wizard)
8. Return to dashboard and click "Add Minutes" button
9. Verify only the button action fires (no navigation)

## Related Documentation
- Failover state: [FAILOVER-STATE-FEATURE.md](./FAILOVER-STATE-FEATURE.md)
- Default state: [DEFAULT-STATE-CHANGE.md](./DEFAULT-STATE-CHANGE.md)
- Contrast fixes: [CONTRAST-FIX-SUMMARY.md](./CONTRAST-FIX-SUMMARY.md)

## Files Changed
- `apps/auto-attendant/index.html`:
  - Added `showMainBusinessNumberCallflow()` function
  - Made `#dashboard-ai-usage` clickable with hover effects
  - Added `event.stopPropagation()` to buttons within card
  - Updated card subtitle to indicate interactivity
