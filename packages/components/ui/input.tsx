import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"
import { Icon } from "../../icons/src/Icon"
import { InputSkeleton } from "./skeleton"

// Input component following Comcast Business Design System
// Colors: Using design system tokens for proper theming and accessibility
// Borders, text, and focus states use semantic tokens

const inputVariants = cva(
  // Base styles using exact Figma specifications
  "flex w-full items-center gap-[7px] self-stretch rounded-[4px] border bg-[var(--ds-color-bg-canvas] transition-colors file:border-0 file:bg-transparent focus-visible:outline-none disabled:cursor-not-allowed selection:bg-[var(--ds-color-intent-primary]/20 overflow-hidden text-ellipsis text-[var(--ds-color-text-primary] font-secondary placeholder:overflow-hidden placeholder:text-ellipsis placeholder:text-[var(--ds-color-text-muted] placeholder:font-normal placeholder:leading-[130%] placeholder:tracking-normal",
  {
    variants: {
      variant: {
        // Default state - neutral/grey-400 border
        default: "border-[var(--ds-color-border-default] hover:border-[var(--ds-color-text-muted] hover:bg-[var(--ds-color-bg-surface] hover:shadow-[--ds.shadow.sm] focus-visible:border-[var(--ds-color-border-default] focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] active:border-[var(--ds-color-border-default]",
        
        // Error states
        error: "border-[var(--ds-color-intent-destructive] hover:border-[var(--ds-color-intent-destructive]/80 focus-visible:border-[var(--ds-color-intent-destructive] focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] active:border-[var(--ds-color-intent-destructive]",
        
        
        // Loading state
        loading: "border-[var(--ds-color-border-default] hover:border-[var(--ds-color-text-primary] focus-visible:border-[var(--ds-color-border-default] focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] cursor-wait",
      },
      size: {
        default: "h-10 px-[13px] py-[9px]",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-12 px-4 py-3 text-base",
      },
      inputState: {
        default: "",
        active: "border-[var(--ds-color-border-default]",
        focused: "border-[var(--ds-color-border-default] shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)]",
        hover: "border-[var(--ds-color-text-muted] bg-[var(--ds-color-bg-surface] shadow-[--ds.shadow.sm]",
        disabled: "border-[var(--ds-color-border-default]/50 bg-[var(--ds-color-bg-surface]/50 cursor-not-allowed",
        errorFocused: "border-[var(--ds-color-intent-destructive] shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)]",
        errorFilled: "border-[var(--ds-color-intent-destructive]",
        loading: "cursor-wait",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      inputState: "default",
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
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /**
   * Show error state
   */
  error?: boolean
  /**
   * Show loading state
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
   * Helper text below input (deprecated - use hintText instead)
   * @deprecated Use hintText instead
   */
  helperText?: string
  /**
   * Icon to display on the left side of the input
   */
  leftIcon?: string
  /**
   * Icon to display on the right side of the input
   */
  rightIcon?: string
  /**
   * Size of the icons
   */
  iconSize?: number
  /**
   * Explicit state override for demonstration purposes
   */
  inputState?: 'default' | 'active' | 'focused' | 'hover' | 'disabled' | 'errorFocused' | 'errorFilled' | 'loading'
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
    helperText, // Keep for backward compatibility
    leftIcon,
    rightIcon,
    iconSize = 16,
    inputState,
    disabled,
    ...props 
  }, ref) => {
    // Determine variant based on error/loading states
    const finalVariant = loading ? "loading" : error ? "error" : variant

    // Determine state - explicit inputState overrides natural states
    const finalInputState = inputState || 
      (disabled ? "disabled" : 
       loading ? "loading" : 
       error && props.value ? "errorFilled" :
       "default")

    // Calculate padding based on icons
    const paddingLeft = leftIcon ? (size === "sm" ? "pl-8" : size === "lg" ? "pl-12" : "pl-10") : "pl-3"
    const paddingRight = rightIcon || loading ? (size === "sm" ? "pr-8" : size === "lg" ? "pr-12" : "pr-10") : "pr-3"

    // Use hintText if provided, fallback to helperText for backward compatibility
    const displayHintText = hintText || helperText

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
            <label className="flex items-center gap-1 text-sm font-medium text-[var(--ds-color-[^]]*]) font-primary">
              {label}
              {required && (
                <span 
                  className="text-[var(--ds-color-[^]]*]) font-secondary"
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '130%',
                    letterSpacing: '0'
                  }}
                >
                  *
                </span>
              )}
            </label>
            {/* Subcopy */}
            {subcopy && (
              <p className="text-[var(--ds-color-text-muted] font-secondary font-normal leading-[130%] tracking-normal" style={{ 
                fontSize: '14px', 
                lineHeight: '130%',
                fontWeight: 400,
                letterSpacing: '0',
                fontStyle: 'normal'
              }}>
                {subcopy}
              </p>
            )}
          </div>
        )}
        
        {/* Input field */}
        <div className={cn(inputWrapperVariants({ size }))}>
          {leftIcon && (
            <div className="absolute left-3 z-10 flex items-start gap-[10px] pointer-events-none">
              <Icon 
                name={leftIcon as any} 
                size={16}
                className="text-[var(--ds-color-text-muted]"
                className={cn(
                  "flex w-4 h-4 items-start",
                  disabled && "opacity-50"
                )} 
              />
            </div>
          )}
          <input
            type={type}
            disabled={disabled || loading}
            className={cn(
              inputVariants({ variant: finalVariant, size, inputState: finalInputState }),
              paddingLeft,
              paddingRight,
              "font-secondary",
              className
            )}
            style={{ 
              fontSize: '14px', 
              lineHeight: '130%',
              fontWeight: 400,
              letterSpacing: '0',
              fontStyle: 'normal',
              ...props.style
            }}
            ref={ref}
            {...props}
          />
          {(rightIcon || loading) && (
            <div className="absolute right-3 z-10 flex items-start gap-[10px] pointer-events-none">
              {loading ? (
                <div className="animate-spin">
                  <Icon 
                    name="configure" 
                    size={16}
                    className="text-[var(--ds-color-text-muted]"
                    className="flex w-4 h-4 items-start" 
                  />
                </div>
              ) : rightIcon ? (
                <Icon 
                  name={rightIcon as any} 
                  size={16}
                  className="text-[var(--ds-color-text-muted]"
                  className={cn(
                    "flex w-4 h-4 items-start",
                    disabled && "opacity-50"
                  )} 
                />
              ) : null}
            </div>
          )}
        </div>
        
        {/* Hint text or error message */}
        {(displayHintText || (error && errorMessage)) && (
          <p className={cn(
            "font-secondary font-normal leading-[130%] tracking-normal mt-1",
            error ? "text-[var(--ds-color-intent-destructive]" : "text-[var(--ds-color-text-muted]"
          )} style={{ 
            fontSize: '14px', 
            lineHeight: '130%',
            fontWeight: 400,
            letterSpacing: '0',
            fontStyle: 'normal',
            marginTop: '4px'
          }}>
            {error && errorMessage ? errorMessage : displayHintText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants, InputSkeleton }
