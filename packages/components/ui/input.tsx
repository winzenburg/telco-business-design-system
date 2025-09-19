import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"
import { Icon } from "../../icons/src/Icon"
import { InputSkeleton } from "./skeleton"
import type { AccessibleFormProps, ComponentPropsWithRef } from '../types/base-props'

// Input component following Comcast Business Design System
// Colors: Using design system tokens for proper theming and accessibility
// Borders, text, and focus states use semantic tokens

const inputVariants = cva(
  // Base styles using exact Figma specifications
  "flex w-full items-center gap-2 self-stretch rounded-[var(--ds-radius-sm)] border bg-[var(--ds-color-bg-canvas)] transition-colors file:border-0 file:bg-transparent focus-visible:outline-none disabled:cursor-not-allowed selection:bg-[var(--ds-color-intent-primary)]/20 overflow-hidden text-ellipsis text-[var(--ds-color-text-primary)] font-secondary placeholder:overflow-hidden placeholder:text-ellipsis placeholder:text-[var(--ds-color-text-muted)] placeholder:font-normal placeholder:leading-[130%] placeholder:tracking-normal",
  {
    variants: {
      variant: {
        // Default state - neutral/grey-400 border
        default: "border-[var(--ds-color-neutral-400)] hover:border-[var(--ds-color-text-muted)] hover:bg-[var(--ds-color-bg-surface)] hover:shadow-[--ds.shadow.sm] focus-visible:border-[var(--ds-color-neutral-400)] focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] active:border-[var(--ds-color-neutral-400)]",
        
        // Error states
        error: "border-[var(--ds-color-intent-destructive] hover:border-[var(--ds-color-intent-destructive]/80 focus-visible:border-[var(--ds-color-intent-destructive)] focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] active:border-[var(--ds-color-intent-destructive)]",
        
        
        // Loading state
        loading: "border-[var(--ds-color-neutral-400)] hover:border-[var(--ds-color-text-primary)] focus-visible:border-[var(--ds-color-neutral-400)] focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] cursor-wait",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-12 px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const inputWrapperVariants = cva(
  "relative flex items-center",
  {
    variants: {
      size: {
        default: "",
        sm: "",
        lg: "",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<ComponentPropsWithRef<'input', AccessibleFormProps>, 'size' | 'type' | 'variant'>,
    VariantProps<typeof inputVariants> {
  /**
   * Input type
   * @default 'text'
   */
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
  /**
   * Icon size using design tokens
   * @default 'md'
   * @deprecated Use leftIcon/rightIcon with sized React components instead
   */
  iconSize?: number
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    variant,
    size,
    type = "text",
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
    iconSize = 16,
    disabled,
    id,
    ...props
  }, ref) => {
    // Generate unique ID if not provided
    const inputId = id || React.useId()
    const errorId = `${inputId}-error`
    const hintId = `${inputId}-hint`

    // Determine variant based on error/loading states
    const finalVariant = loading ? "loading" : error ? "error" : (variant || "default")

    // Calculate padding based on icons
    const paddingLeft = leftIcon ? (size === "sm" ? "pl-8" : size === "lg" ? "pl-12" : "pl-10") : "pl-3"
    const paddingRight = rightIcon || loading ? (size === "sm" ? "pr-8" : size === "lg" ? "pr-12" : "pr-10") : "pr-3"

    // Use hintText if provided
    const displayHintText = hintText

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
      )
    }

    return (
      <div className="space-y-0">
        {/* Label with required indicator */}
        {label && (
          <div className="space-y-1 mb-2">
            <label
              htmlFor={inputId}
              className="flex items-center gap-1 text-sm font-medium text-[var(--ds-color-text-primary)] font-primary"
            >
              {label}
              {required && (
                <span
                  className="text-[var(--ds-color-text-primary)] font-secondary text-sm font-normal leading-[130%] tracking-normal"
                >
                  *
                </span>
              )}
            </label>
            {/* Subcopy */}
            {subcopy && (
              <p className="text-[var(--ds-color-text-muted)] font-secondary font-normal leading-[130%] tracking-normal text-sm">
                {subcopy}
              </p>
            )}
          </div>
        )}
        
        {/* Input field */}
        <div className={cn(inputWrapperVariants({ size }))}>
          {leftIcon && (
            <div className="absolute left-3 z-10 flex items-start gap-2.5 pointer-events-none">
              {typeof leftIcon === 'string' ? (
                <Icon
                  name={leftIcon as any}
                  size={iconSize}
                  className={cn(
                    "text-[var(--ds-color-text-muted)] flex w-4 h-4 items-start",
                    disabled && "opacity-50"
                  )}
                />
              ) : (
                <div className={cn(
                  "text-[var(--ds-color-text-muted)] flex w-4 h-4 items-start",
                  disabled && "opacity-50"
                )}>
                  {leftIcon}
                </div>
              )}
            </div>
          )}
          <input
            id={inputId}
            type={type}
            disabled={disabled || loading}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={[
              error && errorMessage ? errorId : undefined,
              displayHintText ? hintId : undefined
            ].filter(Boolean).join(' ') || undefined}
            aria-required={required || undefined}
            aria-busy={loading || undefined}
            className={cn(
              inputVariants({ variant: finalVariant, size }),
              paddingLeft,
              paddingRight,
              "font-secondary",
              className
            )}
            style={props.style}
            ref={ref}
            {...props}
          />
          {(rightIcon || loading) && (
            <div className="absolute right-3 z-10 flex items-start gap-2.5 pointer-events-none">
              {loading ? (
                <div className="animate-spin">
                  <Icon 
                    name="configure" 
                    size={16}
                    className={cn(
                      "text-[var(--ds-color-text-muted)] flex w-4 h-4 items-start"
                    )} 
                  />
                </div>
              ) : rightIcon ? (
                typeof rightIcon === 'string' ? (
                  <Icon
                    name={rightIcon as any}
                    size={iconSize}
                    className={cn(
                      "text-[var(--ds-color-text-muted)] flex w-4 h-4 items-start",
                      disabled && "opacity-50"
                    )}
                  />
                ) : (
                  <div className={cn(
                    "text-[var(--ds-color-text-muted)] flex w-4 h-4 items-start",
                    disabled && "opacity-50"
                  )}>
                    {rightIcon}
                  </div>
                )
              ) : null}
            </div>
          )}
        </div>
        
        {/* Hint text or error message */}
        {(displayHintText || (error && errorMessage)) && (
          <p
            id={error && errorMessage ? errorId : hintId}
            role={error && errorMessage ? "alert" : undefined}
            aria-live={error && errorMessage ? "polite" : undefined}
            className={cn(
              "font-secondary font-normal leading-[130%] tracking-normal mt-1 text-sm",
              error ? "text-[var(--ds-color-intent-destructive)]" : "text-[var(--ds-color-text-muted)]"
            )}
          >
            {error && errorMessage ? errorMessage : displayHintText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants, InputSkeleton }
