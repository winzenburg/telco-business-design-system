# Comcast Business Design System - Design Patterns & Optimization Guide

This document outlines the consistent patterns extracted from Figma specifications and optimization opportunities identified through comprehensive codebase analysis. Use this guide to ensure consistency, performance, and maintainability across all components.

## 🚀 Recent Updates (August 2024)

### Optimization Opportunities Identified
- **Code Duplication**: Typography and color patterns repeated across components
- **Inconsistent Styling**: Mix of hardcoded values and design tokens
- **Performance Gaps**: Unoptimized icon loading and variant calculations
- **Type Safety**: Missing shared interfaces and union types
- **Accessibility**: Inconsistent focus ring and ARIA implementations

### Implementation Priority
1. **Phase 1 (Weeks 1-2)**: Foundation - Unified tokens and utilities
2. **Phase 2 (Weeks 3-4)**: Component consistency and standardization  
3. **Phase 3 (Weeks 5-6)**: Performance optimization and enhanced accessibility

## Typography System

### Label Typography
**Pattern**: All labels should follow this exact structure:
```jsx
className="flex items-center gap-1 text-sm font-medium text-black font-primary"
```

**Figma CSS**:
```css
display: flex;
align-items: center;
gap: 4px;
color: neutral/black;
```

### Body/S Typography (14px)
**Usage**: Input text, placeholder text, subcopy
```jsx
// Class approach
className="font-secondary font-normal leading-[130%] tracking-normal"

// Inline styles for exact values
style={{ 
  fontSize: '14px', 
  lineHeight: '18.2px',
  fontWeight: '400',
  letterSpacing: '0'
}}
```

**Figma CSS**:
```css
font-family: Lato;
font-size: 14px;
font-weight: 400;
line-height: 130%; /* 18.2px */
letter-spacing: 0;
```

### Body/XS Typography (12px)  
**Usage**: Hint text, helper text, captions
```jsx
// Class approach
className="font-secondary font-normal leading-[130%] tracking-normal"

// Inline styles for exact values
style={{ 
  fontSize: '12px', 
  lineHeight: '15.6px'
}}
```

**Figma CSS**:
```css
font-family: Lato;
font-size: 12px;
font-weight: 400;
line-height: 130%; /* 15.6px */
letter-spacing: 0;
```

## Color System

### Neutral Colors
- **neutral/black**: `text-black` (labels, primary text)
- **neutral/grey-600**: `text-gray-600` (subcopy, icons, placeholder)
- **neutral/grey-800**: `text-gray-800` (hint text, secondary text)
- **neutral/grey-400**: `border-gray-400` (default borders)
- **neutral/white**: `bg-white` (backgrounds)

### State Colors
- **Focus**: `#0D62FF` (blue)
- **Error**: `text-red-500`, `border-red-500`
- **Success**: `text-green-600`, `border-green-500`
- **Hover**: `#2B2D3F` (dark gray)

## Layout Patterns

### Component Structure Hierarchy
All form components should follow this structure:
1. **Label** (with required indicator if needed)
2. **Subcopy** (optional additional context)
3. **Input/Control** (the interactive element)
4. **Hint Text** (default state) / **Error Message** (error state)

### Required Indicators
```jsx
{required && <span className="text-red-500">*</span>}
```
- Red asterisk (*) 
- 4px gap from label (`gap-1`)

### Subcopy Pattern
```jsx
{subcopy && (
  <p className="text-sm text-gray-600 font-secondary font-normal leading-[130%] tracking-normal" 
     style={{ fontSize: '14px', lineHeight: '18.2px' }}>
    {subcopy}
  </p>
)}
```

### Hint Text Pattern
```jsx
{hintText && (
  <p className="font-secondary font-normal leading-[130%] tracking-normal text-gray-800" 
     style={{ fontSize: '12px', lineHeight: '15.6px' }}>
    {hintText}
  </p>
)}
```

## Input Field Patterns

### Base Input Styling
```jsx
className="flex w-full items-center gap-[7px] self-stretch rounded-[4px] border bg-white transition-colors font-secondary text-black focus-visible:outline-none disabled:cursor-not-allowed selection:bg-gray-600"

style={{ 
  fontSize: '14px', 
  lineHeight: '18.2px',
  fontWeight: '400',
  letterSpacing: '0'
}}
```

**Figma CSS**:
```css
display: flex;
height: 40px;
padding: 9px 13px;
align-items: center;
gap: 7px;
border-radius: 4px;
border: 1px solid neutral/grey-400;
background: neutral/white;
```

### Placeholder Styling
```jsx
className="placeholder:overflow-hidden placeholder:text-ellipsis placeholder:text-gray-600 placeholder:font-normal placeholder:leading-[130%] placeholder:tracking-normal"
```

**Figma CSS**:
```css
overflow: hidden;
color: neutral/grey-600;
text-overflow: ellipsis;
font-family: Lato;
font-size: 14px;
font-weight: 400;
line-height: 130%;
```

## Icon Patterns

### Icon Specifications
```jsx
// Icon wrapper
className="absolute left-3 z-10 flex items-start gap-[10px] pointer-events-none"

// Icon component
<Icon 
  name={iconName} 
  size={16}
  className="flex w-4 h-4 items-start text-gray-600"
/>
```

**Figma CSS**:
```css
display: flex;
width: 16px;
height: 16px;
align-items: flex-start;
gap: 10px;
color: neutral/grey-600;
```

## Border Radius Standard

### Global Border Radius
All components should use **4px border radius**:
```jsx
className="rounded-[4px]"
```

This applies to:
- Input fields
- Buttons
- Cards
- Containers
- Form controls

## State Management Patterns

### Interactive States
All interactive components should support these states:
1. **Default**: Base styling
2. **Hover**: Darker border/background
3. **Focus**: Blue border + focus ring
4. **Active**: Pressed state
5. **Disabled**: Reduced opacity + gray background
6. **Error**: Red border + error message
7. **Success**: Green border + success message
8. **Loading**: Spinner + disabled state

### State Implementation
```jsx
// Variant-based states
const variants = {
  default: "border-gray-400 hover:border-[#2B2D3F] focus-visible:border-[#0D62FF]",
  error: "border-red-500 focus-visible:border-red-500", 
  success: "border-green-500 focus-visible:border-green-500"
}

// Focus rings
className="focus-visible:ring-2 focus-visible:ring-[#0D62FF] focus-visible:ring-offset-2"
```

## Component-Specific Patterns

### Buttons
- Use exact Figma padding: `py-[9px] px-[13px]`
- Standard border radius: `rounded-[4px]`
- Font: `font-primary font-semibold`

### Form Controls
- Height: `h-10` (40px)
- Padding: `px-[13px] py-[9px]`
- Border: `border border-gray-400`
- Font: `font-secondary`

### Labels
- Typography: Black color, Montserrat font, medium weight
- Layout: Flex with 4px gap for required indicators
- Structure: Always paired with form controls

## Implementation Checklist

When creating or updating components, ensure:

- [ ] Typography follows exact Figma specifications (font size, line height, font family)
- [ ] Colors use the neutral palette consistently
- [ ] Border radius is 4px across all elements
- [ ] Icons are 16x16px with proper alignment
- [ ] Labels use flex layout with 4px gap
- [ ] All interactive states are implemented
- [ ] Component structure follows hierarchy pattern
- [ ] Accessibility is maintained (proper labeling, focus management)

## Migration Guide

### Updating Existing Components

1. **Labels**: Update to use flex layout and black color
2. **Typography**: Apply exact font sizes and line heights
3. **Colors**: Replace custom colors with neutral palette
4. **Border Radius**: Standardize to 4px
5. **Icons**: Ensure 16x16px sizing and proper alignment
6. **States**: Implement all interactive states consistently

### Example Migration

**Before**:
```jsx
<label className="text-sm font-medium text-gray-700">
  Email *
</label>
```

**After**:
```jsx
<label className="flex items-center gap-1 text-sm font-medium text-black font-primary">
  Email
  <span className="text-red-500">*</span>
</label>
```

This ensures pixel-perfect consistency with Figma designs across the entire design system.

---

## 🔧 Optimization Patterns & Best Practices

### Shared Utility System

#### Color Token Integration
**Current Issue**: Components use hardcoded hex values instead of design tokens.

**Problem**:
```jsx
// ❌ Current approach - hardcoded values
"border-[#B4B5BB] hover:border-[#70717D] focus-visible:border-[#0D62FF]"
```

**Solution**:
```jsx
// ✅ Recommended approach - design tokens
"border-neutral-400 hover:border-neutral-600 focus-visible:border-blue-500"

// Create unified color utility
export const designSystemColors = {
  semantic: {
    text: {
      primary: '#15172B',    // colors.black
      secondary: '#70717D',  // colors.neutral[600] 
      disabled: '#B4B5BB',   // colors.neutral[400]
    },
    border: {
      default: '#B4B5BB',   // colors.neutral[400]
      hover: '#70717D',     // colors.neutral[600]
      focus: '#0D62FF',     // colors.blue[500]
      error: '#D11314',     // colors.red[500]
    }
  }
}
```

#### Typography Utilities
**Current Issue**: Typography styles repeated with inline CSS across components.

**Problem**:
```jsx
// ❌ Repeated across multiple components
style={{
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '130%',
  letterSpacing: '0',
  fontStyle: 'normal'
}}
```

**Solution**:
```jsx
// ✅ Create shared typography utility
export const textStyles = {
  label: 'font-secondary text-base font-bold leading-[130%] tracking-normal',
  body: 'font-secondary text-sm font-normal leading-[130%] tracking-normal',
  caption: 'font-secondary text-xs font-normal leading-[130%] tracking-normal',
} as const

// Usage in components
<label className={cn("flex items-center gap-1", textStyles.label)}>
```

### Standardized Component Variants

#### Interactive State Management
**Current Issue**: Each component implements states differently.

**Problem**:
```jsx
// ❌ Inconsistent state types across components
checkboxState?: "default" | "hover" | "pressed" | "focused" | "disabled"
inputState?: 'default' | 'active' | 'focused' | 'hover' | 'disabled' | 'errorFocused'
radioState?: "default" | "hover" | "pressed" | "focused" | "disabled"
```

**Solution**:
```jsx
// ✅ Unified state types
type InteractiveState = 'default' | 'hover' | 'pressed' | 'focused' | 'disabled'
type ValidationState = 'default' | 'error' | 'success' | 'warning'
type ComponentSize = 'sm' | 'default' | 'lg'

// Shared interactive state hook
export const useInteractiveState = (disabled = false, explicitState?: InteractiveState) => {
  const [state, setState] = useState<InteractiveState>('default')
  
  return {
    state: explicitState || state,
    eventHandlers: {
      onMouseEnter: () => !explicitState && !disabled && setState('hover'),
      onMouseLeave: () => !explicitState && setState('default'),
      onMouseDown: () => !explicitState && !disabled && setState('pressed'),
      onFocus: () => !explicitState && setState('focused'),
      onBlur: () => !explicitState && setState('default'),
    }
  }
}
```

#### Form Component Variants
**Current Issue**: Form components don't share common variant patterns.

**Solution**:
```jsx
// ✅ Shared form field variants
export const formFieldVariants = cva(
  "transition-colors font-secondary border rounded-[4px]",
  {
    variants: {
      size: {
        sm: "h-8 px-2 py-1 text-sm",
        default: "h-10 px-[13px] py-[9px] text-sm", 
        lg: "h-12 px-4 py-3 text-base",
      },
      state: {
        default: "border-neutral-400 hover:border-neutral-600 focus-visible:border-blue-500",
        error: "border-red-500 focus-visible:border-red-500",
        disabled: "border-neutral-200 bg-neutral-100 cursor-not-allowed opacity-50",
      },
      variant: {
        default: "bg-white",
        filled: "bg-neutral-50",
        outline: "bg-transparent border-2",
      }
    },
    defaultVariants: {
      size: "default",
      state: "default", 
      variant: "default",
    },
  }
)
```

### Focus Ring Standardization

#### Current Issue
**Problem**: Different focus ring implementations across components.

```jsx
// ❌ Inconsistent focus rings
"focus-visible:shadow-[0_0_0_1.5px_#0D62FF]"
"focus-visible:border-white focus-visible:shadow-[0_0_0_1.5px_#0D62FF]"
"focus-visible:ring-2 focus-visible:ring-[#0D62FF]"
```

**Solution**:
```jsx
// ✅ Standardized focus ring utility
export const focusRing = {
  default: 'focus-visible:outline-none focus-visible:shadow-[0_0_0_1.5px_#0D62FF]',
  error: 'focus-visible:outline-none focus-visible:shadow-[0_0_0_1.5px_#D11314]',
  white: 'focus-visible:outline-none focus-visible:border-white focus-visible:shadow-[0_0_0_1.5px_#0D62FF]',
} as const

export const getFocusRing = (variant: keyof typeof focusRing = 'default') => focusRing[variant]

// Usage in components
<input className={cn("...", getFocusRing())} />
```

### Performance Optimization Patterns

#### Memoized Variant Calculations
**Issue**: CVA variants recalculated on every render.

**Solution**:
```jsx
// ✅ Memoized variant functions
import { useMemo } from 'react'

const MyComponent = ({ variant, size, ...props }) => {
  const variantClasses = useMemo(() => 
    componentVariants({ variant, size }), 
    [variant, size]
  )
  
  return <div className={variantClasses} {...props} />
}
```

#### Icon Optimization
**Issue**: Icons loaded individually causing bundle bloat.

**Solution**:
```jsx
// ✅ Icon sprite system or dynamic imports
const Icon = ({ name, ...props }) => {
  const IconComponent = useMemo(() => 
    lazy(() => import(`../assets/icons/${name}.svg`)), 
    [name]
  )
  
  return (
    <Suspense fallback={<div className="size-4 bg-gray-200 animate-pulse" />}>
      <IconComponent {...props} />
    </Suspense>
  )
}
```

### Accessibility Enhancement Patterns

#### Consistent ARIA Patterns
**Issue**: ARIA attributes implemented inconsistently.

**Solution**:
```jsx
// ✅ Shared ARIA utility patterns
export const ariaPatterns = {
  formField: (id: string, error?: string, description?: string) => ({
    'aria-invalid': !!error,
    'aria-describedby': [
      error && `${id}-error`,
      description && `${id}-description`
    ].filter(Boolean).join(' ') || undefined,
  }),
  
  interactive: (disabled: boolean, loading: boolean) => ({
    'aria-disabled': disabled,
    'aria-busy': loading,
    tabIndex: disabled ? -1 : 0,
  }),
}

// Usage in components
<input 
  {...ariaPatterns.formField(id, error, description)}
  {...ariaPatterns.interactive(disabled, loading)}
/>
```

### Type Safety Improvements

#### Shared Interface Patterns
**Issue**: Similar props defined separately across components.

**Solution**:
```jsx
// ✅ Shared type definitions
export interface BaseComponentProps {
  /** Component size */
  size?: ComponentSize
  /** Validation state */
  state?: ValidationState
  /** Interactive state override */
  interactiveState?: InteractiveState
  /** Show loading state */
  loading?: boolean
  /** Component is disabled */
  disabled?: boolean
  /** Additional CSS classes */
  className?: string
}

export interface FormFieldProps extends BaseComponentProps {
  /** Field label */
  label?: string
  /** Required field indicator */
  required?: boolean
  /** Error message */
  error?: string | boolean
  /** Helper text */
  description?: string
  /** Right-aligned icon */
  rightIcon?: IconName
}

// Component usage
interface CheckboxProps extends FormFieldProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
}
```

## Implementation Roadmap

### Phase 1: Foundation (Weeks 1-2)
- [ ] Create `src/utils/design-tokens.ts` with unified color system
- [ ] Implement `src/utils/typography.ts` with shared text styles
- [ ] Build `src/utils/focus-system.ts` for consistent focus rings
- [ ] Establish `src/types/shared.ts` for common interfaces

### Phase 2: Component Standardization (Weeks 3-4)
- [ ] Refactor form components to use shared utilities
- [ ] Implement `useInteractiveState` hook across components
- [ ] Standardize prop interfaces and event handlers
- [ ] Update icon integration to use consistent patterns

### Phase 3: Performance & Accessibility (Weeks 5-6)
- [ ] Implement performance optimizations (memoization, lazy loading)
- [ ] Enhance accessibility with standardized ARIA patterns
- [ ] Add comprehensive TypeScript coverage
- [ ] Create automated testing for consistency

### Quick Wins (Immediate)
- [ ] Replace hardcoded colors with design token references
- [ ] Extract repeated typography styles into utilities
- [ ] Standardize focus ring implementation
- [ ] Add shared TypeScript interfaces

## Measuring Success

### Before Optimization
- **Bundle Size**: ~XXX KB (measure current)
- **Code Duplication**: Typography repeated 15+ times
- **Type Coverage**: Inconsistent prop interfaces
- **Accessibility Score**: Baseline measurement needed

### After Optimization Targets
- **Bundle Size**: 15-20% reduction through shared utilities
- **Code Duplication**: <3 instances of repeated patterns
- **Type Coverage**: 100% TypeScript coverage with shared interfaces
- **Accessibility Score**: 95%+ with standardized patterns
- **Developer Experience**: Autocomplete for all design tokens
- **Consistency Score**: 100% adherence to design patterns

This optimization guide transforms the Comcast Business Design System into a more maintainable, performant, and consistent component library while preserving all existing functionality and accessibility standards.