# Component Patterns

This document outlines the established patterns from implementing the Input component that should be followed across all form components in the Comcast Business Design System.

## Typography Patterns

### Font Family Usage
- **Primary Text** (Labels, headings): `font-primary` (system fonts)
- **Secondary Text** (Body, inputs, helper text): `font-secondary` (Lato)

### Font Sizes & Line Heights
- **Labels**: 14px, font-weight: 500 (medium)
- **Input Text**: 14px, font-weight: 400, line-height: 130%
- **Subcopy**: 14px, font-weight: 400, line-height: 130%
- **Helper/Error Text**: 14px, font-weight: 400, line-height: 130%

## Color Patterns

### Text Colors
- **Primary Text**: `#15172B` (neutral-black)
- **Secondary Text**: `#70717D` (neutral-grey-60)
- **Error Text**: `#D11314` (red-red-60)
- **Required Indicators**: `#15172B` (neutral-black, not red)

### Border Colors
- **Default**: `#B4B5BB` (neutral-grey-40)
- **Hover**: `#70717D` (neutral-grey-60)
- **Focus**: `#B4B5BB` with `#0D62FF` focus ring
- **Error**: `#D11314` (red-red-60)
- **Disabled**: `#DDDDE2` (neutral-grey-30)

### Background Colors
- **Default**: `#FFFFFF` (white)
- **Hover**: `#F9F9FA` (neutral-grey-10)
- **Disabled**: `#F1F2F6` (neutral-grey-20)

## Spacing Patterns

### Vertical Spacing Hierarchy
1. **Label to Subcopy**: 4px (`space-y-1`)
2. **Label Section to Input**: 8px (`mb-2`)
3. **Input to Helper Text**: 4px (`mt-1`)

### Component Dimensions
- **Small**: height: 32px (`h-8`), padding: `px-2 py-1`
- **Default**: height: 40px (`h-10`), padding: `px-[13px] py-[9px]`
- **Large**: height: 48px (`h-12`), padding: `px-4 py-3`

## State Management Patterns

### Supported States
- **Default**: Base state
- **Hover**: Enhanced contrast + background tint
- **Focus**: Blue focus ring (1.5px)
- **Active**: Pressed state
- **Disabled**: Reduced contrast + cursor changes
- **Error**: Red borders + error messaging
- **Loading**: Skeleton placeholder

### Focus Ring Pattern
- **Always blue** (`#0D62FF`) regardless of component state
- **1.5px thickness**: `box-shadow: 0 0 0 1.5px #0D62FF`
- **Consistent across all states** (including error states)

## Accessibility Patterns

### Required Field Indicators
- Use neutral black asterisk (*), not red
- Place immediately after label text
- Same typography as label but normal weight

### Helper Text Structure
- **Default state**: Guidance text in neutral grey
- **Error state**: Error message in error red
- **Hierarchy**: Error messages override helper text

## Component Architecture Patterns

### Props Structure
```typescript
interface ComponentProps {
  // Core functionality
  value?: string
  onChange?: (e: ChangeEvent) => void
  
  // Visual states
  error?: boolean
  loading?: boolean
  disabled?: boolean
  
  // Content
  label?: string
  required?: boolean
  subcopy?: string
  hintText?: string
  errorMessage?: string
  
  // Layout
  size?: "sm" | "default" | "lg"
  
  // Special states
  skeleton?: boolean // For loading placeholders
}
```

### Variant Management
- Use `cva` (class-variance-authority) for consistent variant handling
- Separate size, state, and visual variants
- Provide sensible defaults

### Loading States
- **Skeleton Pattern**: Replace content with shimmer placeholders
- **Animation**: Subtle left-to-right shimmer effect
- **Colors**: Use neutral greys (`#F1F2F6` to `#FFFFFF`)
- **Scope**: Animate labels + main content, not helper text

## Implementation Guidelines

### CSS Approach
- **Tailwind CSS** for utility classes
- **Inline styles** for precise values or overrides
- **cva** for variant management
- **Design system colors** via hex values, not generic Tailwind colors

### File Structure
```
components/ui/
  ├── component.tsx     # Main component
  ├── skeleton.tsx      # Loading states
  └── index.ts          # Exports
```

### Story Structure
- **All States**: Show every supported state
- **Interactive Examples**: Real-world usage
- **Documentation**: Visual breakdown with specs
- **Skeleton States**: Loading placeholder examples

## Patterns to Avoid

### ❌ Don't Use
- Success states (not in design system)
- Generic Tailwind colors (use design system colors)
- Red asterisks for required fields
- Ring-based focus (use box-shadow)
- Inconsistent spacing values

### ✅ Do Use
- Neutral colors from design system
- Box-shadow for focus rings
- Consistent typography scale
- Proper spacing hierarchy
- Skeleton loading states

---

*This document should be updated as new patterns emerge from implementing additional components.*