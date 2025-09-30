import * as React from 'react';

import { cn } from '../../utils/cn';
import { Icon } from '../Icon';
import { InputSkeleton } from './skeleton';

// Input component following ShadCN pattern with Comcast Business Design System tokens
// Base input uses ShadCN styling, wrapper provides label, icons, and validation

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Show error state
   */
  error?: boolean
  /**
   * Show loading state with spinner
   */
  loading?: boolean
  /**
   * Show skeleton loading state instead of input
   */
  skeleton?: boolean
  /**
   * Input label
   */
  label?: string
  /**
   * Mark field as required (shows * indicator)
   */
  required?: boolean
  /**
   * Subcopy text that appears below the label
   */
  subcopy?: string
  /**
   * Hint text that appears below the input when not in error state
   */
  hintText?: string
  /**
   * Error message that appears below input when in error state
   */
  errorMessage?: string
  /**
   * Icon to display on the left side of the input
   */
  leftIcon?: string
  /**
   * Icon to display on the right side of the input
   */
  rightIcon?: string
  /**
   * Size variant
   */
  size?: 'default' | 'sm' | 'lg'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    type = 'text',
    error = false,
    loading = false,
    skeleton = false,
    label,
    required = false,
    subcopy,
    hintText,
    errorMessage,
    leftIcon,
    rightIcon,
    size = 'default',
    disabled,
    ...props
  }, ref) => {
    // Calculate padding based on icons
    const sizeClasses = {
      sm: 'h-8 text-xs',
      default: 'h-10 text-sm',
      lg: 'h-12 text-base'
    };

    const paddingLeft = leftIcon
      ? (size === 'sm' ? 'pl-8' : size === 'lg' ? 'pl-12' : 'pl-10')
      : (size === 'sm' ? 'pl-2' : size === 'lg' ? 'pl-4' : 'pl-3');

    const paddingRight = (rightIcon || loading)
      ? (size === 'sm' ? 'pr-8' : size === 'lg' ? 'pr-12' : 'pr-10')
      : (size === 'sm' ? 'pr-2' : size === 'lg' ? 'pr-4' : 'pr-3');

    // Show skeleton loading state
    if (skeleton) {
      return (
        <InputSkeleton
          size={size}
          hasLabel={!!label}
          hasSubcopy={!!subcopy}
          hasIcon={!!leftIcon}
          className={className}
        />
      );
    }

    return (
      <div className="w-full">
        {/* Label with required indicator */}
        {label && (
          <div className="space-y-1 mb-2">
            <label className="flex items-center gap-1 text-sm font-medium text-neutral-900 font-primary">
              {label}
              {required && <span className="text-neutral-900">*</span>}
            </label>
            {/* Subcopy */}
            {subcopy && (
              <p className="text-sm text-neutral-600 font-secondary">
                {subcopy}
              </p>
            )}
          </div>
        )}

        {/* Input field */}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <Icon
                name={leftIcon as any}
                className={cn(
                  'w-4 h-4 text-neutral-600',
                  disabled && 'opacity-50',
                )}
              />
            </div>
          )}
          <input
            type={type}
            disabled={disabled || loading}
            className={cn(
              // ShadCN base styles
              'flex w-full rounded-md border bg-white px-3 py-2 font-secondary ring-offset-white transition-colors',
              'file:border-0 file:bg-transparent file:text-sm file:font-medium',
              'placeholder:text-neutral-500',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              // Design system tokens - form input border
              'border-neutral-400',
              // Error state
              error && 'border-[var(--ds-color-intent-destructive)] focus-visible:ring-[var(--ds-color-intent-destructive)]',
              // Loading state
              loading && 'cursor-wait',
              // Size classes
              sizeClasses[size],
              paddingLeft,
              paddingRight,
              className,
            )}
            ref={ref}
            {...props}
          />
          {(rightIcon || loading) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
              {loading ? (
                <div className="animate-spin">
                  <Icon
                    name="configure"
                    className="w-4 h-4 text-neutral-600"
                  />
                </div>
              ) : rightIcon ? (
                <Icon
                  name={rightIcon as any}
                  className={cn(
                    'w-4 h-4 text-neutral-600',
                    disabled && 'opacity-50',
                  )}
                />
              ) : null}
            </div>
          )}
        </div>

        {/* Hint text or error message */}
        {(hintText || (error && errorMessage)) && (
          <p className={cn(
            'text-sm font-secondary mt-1',
            error ? 'text-[var(--ds-color-intent-destructive)]' : 'text-neutral-600',
          )}>
            {error && errorMessage ? errorMessage : hintText}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input, InputSkeleton };