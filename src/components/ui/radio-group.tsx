import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '../../utils/cn';
import { cva } from 'class-variance-authority';

// Radio Group component following Comcast Business Design System
// Default colors: var(--ds-color-neutral-400) for border, var(--ds-color-intent-primary) when checked
// Typography: Lato font family, consistent with Input patterns

// Container variants for hover state background
const radioContainerVariants = cva(
  // Base styles matching design specifications
  'flex items-center gap-2 px-1 py-1 rounded transition-colors',
  {
    variants: {
      radioState: {
        default: '',
        hover: 'bg-[rgba(180,181,187,0.2)]',
        pressed: 'bg-[rgba(180,181,187,0.4)]',
        focused: 'bg-[rgba(255,255,255,0.2)] shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)]',
        disabled: '',
      },
    },
    defaultVariants: {
      radioState: 'default',
    },
  },
);

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentProps<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioGroupItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
  /**
   * Show error state
   */
  error?: boolean
  /**
   * Radio button label
   */
  label?: string
  /**
   * Mark radio button as required (shows * indicator)
   */
  required?: boolean
  /**
   * Visual state override for container styling
   */
  radioState?: 'default' | 'hover' | 'pressed' | 'focused' | 'disabled'
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, error = false, label, required = false, radioState, id, ...props }, ref) => {
  // Generate unique ID if not provided
  const radioId = id || `radio-${React.useId()}`;

  return (
    <div className={cn(
      radioContainerVariants({
        radioState,
      }),
      // Only apply interactive states when radioState is not explicitly set and not disabled
      !radioState && !props.disabled && 'hover:bg-[rgba(180,181,187,0.2)] active:bg-[rgba(180,181,187,0.4)] focus-within:bg-[rgba(255,255,255,0.2)] focus-within:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)]',
    )}>
        <RadioGroupPrimitive.Item
          ref={ref}
          id={radioId}
          className={cn(
            // Base styles using design system colors
            'peer size-4 shrink-0 rounded-full border-2 bg-white transition-colors',
            // Default state: var(--ds-color-text-primary) border (from Figma specs)
            'border-[var(--ds-color-text-primary)]',
            // Checked state: var(--ds-color-intent-primary) border
            'data-[state=checked]:border-[var(--ds-color-intent-primary)]',
            // Focus state: var(--ds-color-intent-primary) box-shadow (consistent with Input pattern)
            radioState !== 'focused' && 'focus-visible:outline-none focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)]',
            // Hover state: slightly darker border
            'hover:border-[var(--ds-color-text-muted)] data-[state=checked]:hover:border-[var(--ds-color-intent-primary)]',
            // Error state: red border
            error && 'border-[var(--ds-color-intent-destructive)] data-[state=checked]:border-[var(--ds-color-intent-destructive)]',
            // Disabled state
            'disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <div className="size-2 rounded-full bg-[var(--ds-color-intent-primary)] data-[state=checked]:bg-[var(--ds-color-intent-primary)]" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {label && (
          <label
            htmlFor={radioId}
            className={cn(
              'flex items-center gap-1 font-secondary',
              // Dynamic text color and cursor based on disabled state
              props.disabled ? 'text-[var(--ds-color-text-muted)] cursor-not-allowed' : 'text-[var(--ds-color-text-secondary)] cursor-pointer',
            )}
            style={{
              fontSize: 'var(--ds-font-size-base)',
              fontWeight: 700,
              lineHeight: '130%',
              letterSpacing: '0',
              fontStyle: 'normal',
            }}
          >
            <span className="flex items-center gap-1">
              {label}
              {required && (
                <span
                  className={cn(
                    'font-secondary',
                    // Dynamic color for asterisk based on disabled state
                    props.disabled ? 'text-[var(--ds-color-text-muted)]' : 'text-[var(--ds-color-text-secondary)]',
                  )}
                  style={{
                    fontSize: 'var(--ds-font-size-base)',
                    fontWeight: 700,
                    lineHeight: '130%',
                    letterSpacing: '0',
                    fontStyle: 'normal',
                  }}
                >
                  *
                </span>
              )}
            </span>
          </label>
        )}
    </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
