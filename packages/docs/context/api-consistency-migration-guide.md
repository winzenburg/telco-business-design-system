# API Consistency Migration Guide

## Overview

This guide helps you migrate your components to use the new standardized prop interfaces introduced in v2.0.0 of the Comcast Business Design System.

---

## 🚨 Breaking Changes

### 1. Removed Demo/Debug Props

The following props were removed as they were intended only for Storybook demonstrations:

```tsx
// ❌ OLD - These props no longer exist
<Input inputState="focused" />
<Checkbox checkboxState="hover" />
<Radio radioState="pressed" />

// ✅ NEW - Use actual state management
<Input 
  onFocus={() => setFocused(true)}
  className={focused ? 'focused' : ''}
/>
```

### 2. Standardized Icon Props

All icon props now accept `React.ReactNode` instead of string names:

```tsx
// ❌ OLD
<Input leftIcon="search" rightIcon="close" />
<Checkbox rightIcon="check" />

// ✅ NEW
import { Search, X, Check } from '@/icons';

<Input 
  leftIcon={<Search size={16} />} 
  rightIcon={<X size={16} />} 
/>
<Checkbox rightIcon={<Check size={16} />} />
```

### 3. Unified Size Variants

All components now use consistent size values:

```tsx
// ❌ OLD - Inconsistent sizing
<Button size="md" />     // 'md' no longer exists
<Input size="medium" />  // 'medium' no longer exists

// ✅ NEW - Consistent sizing
<Button size="default" />  // or 'sm' | 'lg'
<Input size="default" />   // or 'sm' | 'lg'
```

### 4. Renamed Event Handlers

Some event handlers have been renamed for consistency:

```tsx
// ❌ OLD
<Card onCardClick={handleClick} />

// ✅ NEW
<Card onClick={handleClick} />
```

---

## ✨ New Required Props

### Test IDs

All interactive components now support `data-testid`:

```tsx
// ✅ NEW - Better testing support
<Button data-testid="submit-button">Submit</Button>
<Input data-testid="email-input" />
```

### Accessibility Props

All components now support comprehensive ARIA attributes:

```tsx
// ✅ NEW - Better accessibility
<Button 
  aria-pressed={isToggled}
  aria-busy={isLoading}
  aria-label="Toggle navigation"
/>

<Input
  aria-invalid={hasError}
  aria-describedby="email-hint email-error"
  aria-required={true}
/>
```

---

## 📦 Component-Specific Migrations

### Button Component

```tsx
// ❌ OLD
import { Button } from '@/components/ui/button';

<Button 
  variant="primary"     // 'primary' is now 'default'
  variant="danger"      // 'danger' is now 'destructive'
  elevation={3}         // May not be available in all versions
/>

// ✅ NEW
import { Button } from '@/components/ui/button';

<Button 
  variant="default"      // or 'secondary' | 'ghost' | 'destructive' | 'outline'
  size="default"         // or 'sm' | 'lg'
  data-testid="my-button"
  aria-pressed={isPressed}
  leftIcon={<Icon />}
  rightIcon={<Icon />}
/>
```

### Input Component

```tsx
// ❌ OLD
import { Input } from '@/components/ui/input';

<Input 
  helperText="Help text"    // Deprecated
  leftIcon="search"         // String icon names
  inputState="focused"      // Demo prop
/>

// ✅ NEW
import { Input } from '@/components/ui/input';
import { Search } from '@/icons';

<Input 
  hintText="Help text"      // Use hintText instead
  leftIcon={<Search />}      // React component
  onFocus={handleFocus}      // Real event handlers
  data-testid="search-input"
/>
```

### Checkbox Component

```tsx
// ❌ OLD
<Checkbox 
  checkboxState="hover"
  rightIcon="check"
/>

// ✅ NEW
import { Check } from '@/icons';

<Checkbox 
  checked={isChecked}
  onCheckedChange={setIsChecked}
  rightIcon={<Check />}
  indeterminate={isPartial}  // New prop!
  data-testid="terms-checkbox"
/>
```

### Select Component

```tsx
// ❌ OLD - Minimal props
<Select>
  <SelectTrigger />
  <SelectContent />
</Select>

// ✅ NEW - Comprehensive props
<Select 
  error={hasError}
  errorMessage="Please select an option"
  label="Choose an option"
  required
  data-testid="country-select"
>
  <SelectTrigger size="default" />
  <SelectContent />
</Select>
```

### Card Component

```tsx
// ❌ OLD
<Card 
  onCardClick={handleClick}
  draggable  // Without handlers
/>

// ✅ NEW
<Card 
  onClick={handleClick}       // Standard naming
  onKeyDown={handleKeyDown}   // Keyboard support
  draggable
  onDragStart={handleDragStart}
  onDragEnd={handleDragEnd}
  role="button"              // For interactive cards
  tabIndex={0}               // For keyboard navigation
  aria-label="Product card"
  data-testid="product-card"
/>
```

---

## 🛠️ Migration Utilities

### Automated Codemod

Run our codemod to automatically update most prop changes:

```bash
# Install codemod runner
npm install -g jscodeshift

# Run the migration
npx jscodeshift -t ./codemods/v2-api-migration.js ./src
```

### TypeScript Helper

Use our migration types to catch issues at compile time:

```tsx
import { MigrateProps } from '@comcast/design-system/migrate';

// Will show TypeScript errors for old prop patterns
type MyButtonProps = MigrateProps<ButtonProps>;
```

### ESLint Rules

Add our custom ESLint rules to catch deprecated patterns:

```json
// .eslintrc.json
{
  "extends": [
    "@comcast/design-system/eslint-config"
  ],
  "rules": {
    "@comcast/no-deprecated-props": "error",
    "@comcast/consistent-prop-names": "error"
  }
}
```

---

## 📋 Migration Checklist

For each component in your application:

- [ ] Remove all demo/state props (`inputState`, `checkboxState`, etc.)
- [ ] Update icon props from strings to React components
- [ ] Update size values to `sm | default | lg`
- [ ] Update variant names to standardized values
- [ ] Add `data-testid` props for testing
- [ ] Add appropriate ARIA attributes
- [ ] Update event handler names (`onCardClick` → `onClick`)
- [ ] Replace deprecated props (`helperText` → `hintText`)
- [ ] Add keyboard event handlers for interactive components
- [ ] Test with TypeScript strict mode enabled

---

## 🤝 Getting Help

### Resources

- [Full API Reference](/docs/api-reference)
- [TypeScript Types Documentation](/docs/typescript)
- [Accessibility Guidelines](/docs/accessibility)
- [Component Examples](/storybook)

### Support Channels

- **Slack**: #design-system-support
- **GitHub Issues**: [Report migration issues](https://github.com/comcast/design-system/issues)
- **Office Hours**: Tuesdays 2-3pm ET

### Common Issues

#### Issue: TypeScript errors after migration

```tsx
// If you see: Property 'inputState' does not exist
// Solution: Remove the prop, it was for demos only
```

#### Issue: Icons not rendering

```tsx
// If icons disappear after migration
// Solution: Import actual icon components
import { Search, ChevronDown } from '@/icons';
```

#### Issue: Sizing looks different

```tsx
// If components appear larger/smaller
// Solution: 'md' is now 'default'
// Update your size props accordingly
```

---

## 🚀 Benefits After Migration

### For Developers
- ✅ Consistent, predictable APIs across all components
- ✅ Better TypeScript support and autocomplete
- ✅ Easier to learn and use new components
- ✅ Improved testing with data-testid support

### For Users
- ✅ Better accessibility with comprehensive ARIA support
- ✅ More consistent keyboard navigation
- ✅ Improved screen reader announcements
- ✅ Better error messaging and validation

### For Maintainers
- ✅ Easier to maintain and extend components
- ✅ Reduced API surface area
- ✅ Better documentation generation
- ✅ Fewer edge cases and bugs