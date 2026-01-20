# Color Mapping Table - Auto-Attendant Callflow

## Purpose
This table maps all hardcoded hex colors in the callflow to their design system equivalents. Use this as a reference for the automated migration script.

---

## Primary Colors (Blue)

| Hardcoded Hex | RGB | Design System Token | Tailwind Class | Usage |
|---------------|-----|---------------------|----------------|-------|
| `#0D62FF` | `rgb(13, 98, 255)` | `theme('colors.primary.500')` | `primary-500` | Primary buttons, links, active states |
| `#083B99` | `rgb(8, 59, 153)` | `theme('colors.primary.700')` | `primary-700` | Button hover states (darker) |
| `#0A4ECC` | `rgb(10, 78, 204)` | `theme('colors.primary.600')` | `primary-600` | Button active/pressed states |
| `#075985` | `rgb(7, 89, 133)` | `theme('colors.sky.700')` | `sky-700` | Badge text (sky variant) |
| `#E0F2FE` | `rgb(224, 242, 254)` | `theme('colors.sky.100')` | `sky-100` | Badge backgrounds (light blue) |
| `#F5F8FF` | `rgb(245, 248, 255)` | `theme('colors.primary.50')` | `primary-50` | Page backgrounds (very light blue) |

---

## Neutral Colors (Grey Scale)

| Hardcoded Hex | RGB | Design System Token | Tailwind Class | Usage |
|---------------|-----|---------------------|----------------|-------|
| `#2B2D3F` | `rgb(43, 45, 63)` | `theme('colors.neutral.900')` | `neutral-900` | Primary text, headings |
| `#595A69` | `rgb(89, 90, 105)` | `theme('colors.neutral.600')` | `neutral-600` | Secondary text, labels |
| `#70717D` | `rgb(112, 113, 125)` | `theme('colors.neutral.500')` | `neutral-500` | Tertiary text, placeholders |
| `#F1F2F6` | `rgb(241, 242, 246)` | `theme('colors.neutral.200')` | `neutral-200` | Borders, dividers (light) |
| `#DDDDE2` | `rgb(221, 221, 226)` | `theme('colors.neutral.300')` | `neutral-300` | Borders, dividers (medium) |
| `#E5E7EB` | `rgb(229, 231, 235)` | `theme('colors.neutral.200')` | `neutral-200` | Borders (alternative) |
| `#FCFCFC` | `rgb(252, 252, 252)` | `theme('colors.neutral.50')` | `neutral-50` | Hover backgrounds |
| `#F9FAFB` | `rgb(249, 250, 251)` | `theme('colors.neutral.50')` | `neutral-50` | Light backgrounds, disabled inputs |
| `#E5E5EA` | `rgb(229, 229, 234)` | `theme('colors.neutral.200')` | `neutral-200` | Disabled borders |

---

## Success Colors (Green)

| Hardcoded Hex | RGB | Design System Token | Tailwind Class | Usage |
|---------------|-----|---------------------|----------------|-------|
| `#22C55E` | `rgb(34, 197, 94)` | `theme('colors.green.500')` | `green-500` | Success indicators, active status |
| `#DCFCE7` | `rgb(220, 252, 231)` | `theme('colors.green.100')` | `green-100` | Success alert backgrounds |
| `#166534` | `rgb(22, 101, 52)` | `theme('colors.green.800')` | `green-800` | Success text (dark green) |

---

## Error/Destructive Colors (Red)

| Hardcoded Hex | RGB | Design System Token | Tailwind Class | Usage |
|---------------|-----|---------------------|----------------|-------|
| `#EF4444` | `rgb(239, 68, 68)` | `theme('colors.red.500')` | `red-500` | Error states, destructive actions |
| `#FEE2E2` | `rgb(254, 226, 226)` | `theme('colors.red.100')` | `red-100` | Error alert backgrounds |
| `#991B1B` | `rgb(153, 27, 27)` | `theme('colors.red.800')` | `red-800` | Error text (dark red) |

---

## Warning Colors (Yellow)

| Hardcoded Hex | RGB | Design System Token | Tailwind Class | Usage |
|---------------|-----|---------------------|----------------|-------|
| `#EAB308` | `rgb(234, 179, 8)` | `theme('colors.yellow.500')` | `yellow-500` | Warning indicators, caution states |
| `#FEF9C3` | `rgb(254, 249, 195)` | `theme('colors.yellow.100')` | `yellow-100` | Warning alert backgrounds |
| `#854D0E` | `rgb(133, 77, 14)` | `theme('colors.yellow.800')` | `yellow-800` | Warning text (dark yellow) |

---

## Accent Colors (Purple, etc.)

| Hardcoded Hex | RGB | Design System Token | Tailwind Class | Usage |
|---------------|-----|---------------------|----------------|-------|
| `#A855F7` | `rgb(168, 85, 247)` | `theme('colors.purple.500')` | `purple-500` | Icons, accents (voicemail, queue) |

---

## Special/Functional Colors

| Hardcoded Hex | RGB | Design System Token | Tailwind Class | Usage |
|---------------|-----|---------------------|----------------|-------|
| `#FFFFFF` | `rgb(255, 255, 255)` | `white` | `white` | White backgrounds, text on dark |
| `#000000` | `rgb(0, 0, 0)` | `black` | `black` | Pure black (rare, usually use neutral-900) |

---

## Brand Exception Colors (Documented)

These colors are **NOT** part of the design system but are **allowed** per documented exceptions:

| Hardcoded Hex | RGB | Usage | Documentation |
|---------------|-----|-------|---------------|
| `#00074b` | `rgb(0, 7, 75)` | Comcast header top bar (brand navy) | `GLOBAL-HEADER-BRANDING.md` |
| `#000a73` | `rgb(0, 10, 115)` | Comcast header main (brand navy) | `GLOBAL-HEADER-BRANDING.md` |

---

## Migration Script Template

```javascript
// color-migration.cjs
const fs = require('fs');
const path = require('path');

const colorMap = {
  // Primary Blues
  '#0D62FF': 'rgb(13, 98, 255)',   // primary-500
  '#083B99': 'rgb(8, 59, 153)',    // primary-700
  '#0A4ECC': 'rgb(10, 78, 204)',   // primary-600
  '#075985': 'rgb(7, 89, 133)',    // sky-700
  '#E0F2FE': 'rgb(224, 242, 254)', // sky-100
  '#F5F8FF': 'rgb(245, 248, 255)', // primary-50
  
  // Neutrals
  '#2B2D3F': 'rgb(43, 45, 63)',    // neutral-900
  '#595A69': 'rgb(89, 90, 105)',   // neutral-600
  '#70717D': 'rgb(112, 113, 125)', // neutral-500
  '#F1F2F6': 'rgb(241, 242, 246)', // neutral-200
  '#DDDDE2': 'rgb(221, 221, 226)', // neutral-300
  '#E5E7EB': 'rgb(229, 231, 235)', // neutral-200
  '#FCFCFC': 'rgb(252, 252, 252)', // neutral-50
  '#F9FAFB': 'rgb(249, 250, 251)', // neutral-50
  '#E5E5EA': 'rgb(229, 229, 234)', // neutral-200
  
  // Success Greens
  '#22C55E': 'rgb(34, 197, 94)',   // green-500
  '#DCFCE7': 'rgb(220, 252, 231)', // green-100
  '#166534': 'rgb(22, 101, 52)',   // green-800
  
  // Error Reds
  '#EF4444': 'rgb(239, 68, 68)',   // red-500
  '#FEE2E2': 'rgb(254, 226, 226)', // red-100
  '#991B1B': 'rgb(153, 27, 27)',   // red-800
  
  // Warning Yellows
  '#EAB308': 'rgb(234, 179, 8)',   // yellow-500
  '#FEF9C3': 'rgb(254, 249, 195)', // yellow-100
  '#854D0E': 'rgb(133, 77, 14)',   // yellow-800
  
  // Accents
  '#A855F7': 'rgb(168, 85, 247)',  // purple-500
  
  // SKIP these (documented exceptions)
  // '#00074b': Comcast header brand color
  // '#000a73': Comcast header brand color
};

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// Replace each hex color with RGB equivalent
Object.entries(colorMap).forEach(([hex, rgb]) => {
  const hexPattern = new RegExp(hex.replace(/[#]/g, '\\#'), 'gi');
  content = content.replace(hexPattern, rgb);
});

// Write back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Color migration complete!');
console.log('Replaced:', Object.keys(colorMap).length, 'color mappings');
```

---

## Usage Notes

### For Inline Styles (Current State)
```html
<!-- BEFORE (hex) -->
<div style="color: #0D62FF; background: #F1F2F6;">

<!-- AFTER (RGB from design system) -->
<div style="color: rgb(13, 98, 255); background: rgb(241, 242, 246);">
```

### For CSS Classes (Future State)
```html
<!-- BEST (Tailwind classes) -->
<div class="text-primary-500 bg-neutral-200">
```

### For CSS Files
```css
/* BEFORE */
.button-primary {
  background: #0D62FF;
  color: white;
}

/* AFTER (using theme()) */
.button-primary {
  background: theme('colors.primary.500');
  color: white;
}

/* BEST (using @apply) */
.button-primary {
  @apply bg-primary-500 text-white;
}
```

---

## Verification

After migration, verify:

1. **Visual Check:** Load app, visually compare before/after
2. **Compliance Check:** Run `npm run lint:design-system`
3. **Grep Check:** Run `grep -r "#[0-9A-Fa-f]{6}" index.html` (should only show exceptions)
4. **Playwright Tests:** Run visual regression tests

---

## Related Files

- `tailwind.config.js` - Source of truth for design system colors
- `src/tokens/design-system-colors.ts` - Color token definitions
- `DESIGN-SYSTEM-AUDIT.md` - Full audit report
- `GLOBAL-HEADER-BRANDING.md` - Documented color exceptions

---

**Last Updated:** January 16, 2026
