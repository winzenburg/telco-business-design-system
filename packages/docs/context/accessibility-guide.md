# Comcast Business Design System - Accessibility Guide

## 🎯 Our Commitment

The Comcast Business Design System is committed to **WCAG 2.1 AA compliance** and inclusive design practices. Every component must be usable by everyone, regardless of their abilities or the technology they use.

---

## ✅ Accessibility Checklist

### For Every Component

- [ ] **Keyboard Navigation**: Full functionality via keyboard
- [ ] **Screen Reader Support**: Proper ARIA labels and announcements
- [ ] **Focus Management**: Visible focus indicators (3:1 contrast minimum)
- [ ] **Color Contrast**: AA compliance (4.5:1 for normal text, 3:1 for large)
- [ ] **Touch Targets**: Minimum 44x44px on mobile
- [ ] **Error Handling**: Clear, accessible error messages
- [ ] **Loading States**: Announced to screen readers
- [ ] **Responsive**: Works across all viewport sizes

---

## 🏗️ Implementation Patterns

### 1. Form Inputs

```tsx
// ✅ CORRECT: Fully accessible input
import { Input } from '@/components/ui/input'
import { LiveRegion } from '@/components/ui/live-region'

<Input
  id="email"
  type="email"
  label="Email Address"
  required
  error={hasError}
  errorMessage="Please enter a valid email"
  aria-describedby="email-hint"
/>
<LiveRegion message={statusMessage} />
```

**Key Requirements:**
- Always provide `label` prop or `aria-label`
- Include `id` for label association
- Use `aria-describedby` for hints
- Add `aria-invalid` for errors
- Announce changes with LiveRegion

### 2. Buttons & Interactive Elements

```tsx
// ✅ CORRECT: Accessible button patterns
<Button
  onClick={handleSubmit}
  aria-busy={isLoading}
  aria-label="Submit form" // Only if no visible text
  disabled={!isValid}
>
  {isLoading ? (
    <>
      <span className="sr-only">Loading...</span>
      <Spinner aria-hidden="true" />
    </>
  ) : (
    "Submit"
  )}
</Button>
```

**Key Requirements:**
- Provide accessible name (visible text or aria-label)
- Use `aria-busy` for loading states
- Include screen reader text for icon-only buttons
- Ensure 44x44px minimum touch target

### 3. Modals & Dialogs

```tsx
// ✅ CORRECT: Accessible dialog
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'

<Dialog>
  <DialogContent>
    <DialogTitle>Delete Account</DialogTitle>
    <DialogDescription>
      This action cannot be undone. This will permanently delete your account.
    </DialogDescription>
    {/* Focus trapped within dialog */}
    {/* ESC key closes dialog */}
    {/* Focus returns to trigger on close */}
  </DialogContent>
</Dialog>
```

**Key Requirements:**
- Focus trap within modal
- ESC key to close
- Focus restoration on close
- Proper ARIA labeling

### 4. Navigation & Menus

```tsx
// ✅ CORRECT: Accessible navigation
<nav aria-label="Main navigation">
  <ul role="list">
    <li>
      <a
        href="/dashboard"
        aria-current={isActive ? "page" : undefined}
      >
        Dashboard
      </a>
    </li>
  </ul>
</nav>
```

**Key Requirements:**
- Use semantic HTML (`nav`, `ul`, `li`)
- Add `aria-label` to navigation regions
- Use `aria-current` for active states
- Support arrow key navigation in menus

### 5. Live Regions & Announcements

```tsx
// ✅ CORRECT: Status announcements
import { LiveRegion, LoadingAnnouncer } from '@/components/ui/live-region'

// For loading states
<LoadingAnnouncer
  loading={isLoading}
  loadingMessage="Searching products..."
  completionMessage="Search complete"
/>

// For dynamic updates
<LiveRegion
  message={`${results.length} results found`}
  type="status"
/>

// For errors
<LiveRegion
  message="Error: Unable to save changes"
  type="alert"
/>
```

**Key Requirements:**
- Use `role="status"` for non-critical updates
- Use `role="alert"` for errors
- Keep messages concise
- Auto-clear status messages after 5 seconds

---

## 🎨 Design Tokens & Accessibility

### Color Contrast Requirements

```scss
// Minimum contrast ratios
--ds-color-text-primary: #2B2D3F;     // 11.7:1 on white ✅
--ds-color-text-muted: #70717D;       // 4.9:1 on white ✅
--ds-color-intent-primary: #0D62FF;   // 3.5:1 on white ✅ (large text/icons)
--ds-color-intent-destructive: #D11314; // 4.7:1 on white ✅
```

### Focus Indicators

```scss
// Required focus styles
.focus-visible {
  outline: 2px solid var(--ds-color-intent-primary);
  outline-offset: 2px;
}

// Alternative for dark backgrounds
.focus-visible-inverse {
  outline: 2px solid var(--ds-color-bg-canvas);
  outline-offset: 2px;
}
```

---

## 🧪 Testing Requirements

### Automated Testing

```bash
# Run accessibility tests
npm run test:a11y

# Validate components
npm run validate:accessibility

# Check color contrast
npm run test:contrast
```

### Manual Testing Checklist

#### Keyboard Testing
1. Tab through all interactive elements
2. Verify logical tab order
3. Test Enter/Space activation
4. Test ESC to close modals
5. Verify no keyboard traps

#### Screen Reader Testing
1. Test with NVDA (Windows)
2. Test with JAWS (Windows)
3. Test with VoiceOver (macOS/iOS)
4. Verify all content is announced
5. Check form field labels
6. Verify error messages

#### Visual Testing
1. 200% zoom functionality
2. High contrast mode
3. Dark mode support
4. Focus indicators visible
5. Color-only information avoided

---

## 🚨 Common Accessibility Issues & Fixes

### Issue 1: Missing Form Labels

```tsx
// ❌ WRONG
<input type="text" placeholder="Enter name" />

// ✅ CORRECT
<Input
  id="name"
  label="Full Name"
  placeholder="Enter your full name"
/>
```

### Issue 2: Color-Only Information

```tsx
// ❌ WRONG
<div className="text-red-500">Error</div>

// ✅ CORRECT
<div className="text-red-500">
  <Icon name="alert" aria-hidden="true" />
  <span>Error: Invalid input</span>
</div>
```

### Issue 3: Missing Loading Announcements

```tsx
// ❌ WRONG
{isLoading && <Spinner />}

// ✅ CORRECT
{isLoading && (
  <>
    <Spinner aria-hidden="true" />
    <LiveRegion message="Loading..." type="status" />
  </>
)}
```

### Issue 4: Inaccessible Custom Controls

```tsx
// ❌ WRONG
<div onClick={toggle}>{checked ? "On" : "Off"}</div>

// ✅ CORRECT
<Switch
  checked={checked}
  onCheckedChange={toggle}
  aria-label="Toggle notifications"
/>
```

---

## 📚 Resources

### ARIA Patterns
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [ARIA Roles Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

### Testing Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Lighthouse (Chrome DevTools)](https://developers.google.com/web/tools/lighthouse)

### Screen Readers
- [NVDA (Free, Windows)](https://www.nvaccess.org/)
- [JAWS (Windows)](https://www.freedomscientific.com/products/software/jaws/)
- [VoiceOver (macOS/iOS)](https://www.apple.com/accessibility/voiceover/)

### Design System Examples
- [Polaris (Shopify)](https://polaris.shopify.com/accessibility)
- [Carbon (IBM)](https://www.carbondesignsystem.com/guidelines/accessibility/overview/)
- [Spectrum (Adobe)](https://spectrum.adobe.com/page/inclusive-design/)

---

## 🤝 Accessibility Support

For accessibility questions or issues:

1. Check this guide first
2. Run automated tests
3. Test with assistive technology
4. File an issue with `a11y` label

Remember: **Accessibility is not optional.** Every user deserves equal access to our products.