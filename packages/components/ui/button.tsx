import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"

// Button component with simplified Tailwind classes for testing

const buttonVariants = cva(
  // Base styles
  "appearance-none border-0 inline-flex items-center justify-center gap-2.5 h-10 shrink-0 font-primary font-semibold text-sm leading-[160%] transition-all duration-150 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none select-none disabled:bg-[var(--ds-color-neutral-300)] disabled:text-[var(--ds-color-neutral-600)] data-[loading=true]:bg-[var(--ds-color-intent-primary)]",
  {
    variants: {
      variant: {
        // Primary Button - Using design tokens
        default:
          "bg-[var(--ds-color-intent-primary)] text-white border border-transparent hover:bg-[var(--ds-color-intent-primary-hover)] hover:shadow-sm active:bg-[var(--ds-color-intent-primary-active)] active:translate-y-px focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2",

        // Alias for 'primary' to maintain compatibility
        primary:
          "bg-[var(--ds-color-intent-primary)] text-white border border-transparent hover:bg-[var(--ds-color-intent-primary-hover)] hover:shadow-sm active:bg-[var(--ds-color-intent-primary-active)] active:translate-y-px focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2",

        // Secondary Button
        secondary:
          "bg-[var(--ds-color-neutral-50)] text-[var(--ds-color-intent-primary)] border border-[var(--ds-color-border-muted)] hover:bg-[var(--ds-color-neutral-100)] hover:border-[var(--ds-color-intent-primary)] hover:shadow-sm active:bg-[var(--ds-color-neutral-200)] active:border-[var(--ds-color-border-muted)] active:translate-y-px disabled:bg-[var(--ds-color-neutral-50)] disabled:text-[var(--ds-color-neutral-400)] disabled:border-[var(--ds-color-border-muted)] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2",

        // Tertiary Button
        tertiary:
          "bg-[var(--ds-color-blue-50)] text-[var(--ds-color-intent-primary)] border border-transparent hover:bg-[var(--ds-color-blue-100)] hover:text-[var(--ds-color-intent-primary)] active:bg-[var(--ds-color-blue-200)] active:text-[var(--ds-color-intent-primary)] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2",

        // Ghost Button
        ghost:
          "bg-transparent text-[var(--ds-color-intent-primary)] border border-transparent text-sm font-semibold hover:bg-[var(--ds-color-neutral-100)] hover:text-[var(--ds-color-intent-primary)] active:bg-[var(--ds-color-neutral-200)] active:text-[var(--ds-color-intent-primary)] disabled:bg-transparent disabled:text-[var(--ds-color-neutral-400)] focus-visible:bg-transparent focus-visible:text-[var(--ds-color-intent-primary)] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2 data-[loading=true]:bg-transparent data-[loading=true]:text-[var(--ds-color-intent-primary)]",

        // Submit Button
        submit:
          "bg-[var(--ds-color-intent-primary)] text-white border border-transparent hover:bg-[var(--ds-color-intent-primary-hover)] hover:shadow-sm active:bg-[var(--ds-color-intent-primary-active)] active:translate-y-px disabled:bg-[var(--ds-color-neutral-300)] disabled:text-[var(--ds-color-neutral-600)] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2 data-[loading=true]:bg-[var(--ds-color-intent-primary)]",

        // Link Button - text only, no height constraint
        link:
          "bg-transparent text-[var(--ds-color-intent-primary)] underline-offset-4 hover:underline hover:text-[var(--ds-color-intent-primary-hover)] active:text-[var(--ds-color-intent-primary-active)] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2 p-0 h-auto text-sm font-semibold",

        // Danger Button
        danger:
          "bg-[var(--ds-color-red-500)] text-white border border-transparent hover:bg-[var(--ds-color-red-600)] hover:shadow-sm active:bg-[var(--ds-color-red-700)] active:translate-y-px focus-visible:ring-2 focus-visible:ring-[var(--ds-color-red-500)] focus-visible:ring-offset-2",

        // Destructive Button
        destructive:
          "bg-[var(--ds-color-red-500)] text-white border border-transparent hover:bg-[var(--ds-color-red-600)] hover:shadow-sm active:bg-[var(--ds-color-red-700)] active:translate-y-px focus-visible:ring-2 focus-visible:ring-[var(--ds-color-red-500)] focus-visible:ring-offset-2",

        // Outline variant
        outline:
          "bg-[var(--ds-color-neutral-50)] text-[var(--ds-color-neutral-700)] border border-[var(--ds-color-border-muted)] hover:bg-[var(--ds-color-neutral-100)] hover:text-[var(--ds-color-neutral-700)] hover:border-[var(--ds-color-border-muted)] active:bg-[var(--ds-color-neutral-100)] active:text-[var(--ds-color-neutral-700)] active:border-[var(--ds-color-border-muted)] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2",
      },
      size: {
        // Default size - Using design tokens for 40px height
        default: "h-10 px-3 py-2 text-sm rounded",

        // Medium size - Alias for default to maintain compatibility
        md: "h-10 px-3 py-2 text-sm rounded",

        // Small size - Same height as default (40px)
        sm: "h-10 px-3 py-2 text-sm rounded",

        // Large size - Same height as default (40px)
        lg: "h-10 px-4 py-2 text-sm rounded",

        // Extra Large size - Same height as default (40px)
        xl: "h-10 px-4 py-2 text-sm rounded",

        // Icon only buttons - 40px size using design tokens
        icon: "size-10 p-0 rounded bg-[var(--ds-color-blue-400)] border border-[var(--ds-color-neutral-50)] text-white hover:bg-[var(--ds-color-blue-500)] hover:shadow-sm active:bg-[var(--ds-color-blue-600)] active:translate-y-px disabled:bg-[var(--ds-color-neutral-300)] disabled:border-[var(--ds-color-neutral-200)] disabled:text-[var(--ds-color-neutral-600)] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-blue-500)] data-[loading=true]:bg-[var(--ds-color-blue-400)] [&_svg]:size-5",

        // Small icon - Same 40px size using design tokens
        "icon-sm": "size-10 p-0 rounded bg-[var(--ds-color-blue-400)] border border-[var(--ds-color-neutral-50)] text-white hover:bg-[var(--ds-color-blue-500)] hover:shadow-sm active:bg-[var(--ds-color-blue-600)] active:translate-y-px disabled:bg-[var(--ds-color-neutral-300)] disabled:border-[var(--ds-color-neutral-200)] disabled:text-[var(--ds-color-neutral-600)] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-blue-500)] data-[loading=true]:bg-[var(--ds-color-blue-400)] [&_svg]:size-5",

        // Large icon - Same 40px size using design tokens
        "icon-lg": "size-10 p-0 rounded bg-[var(--ds-color-blue-400)] border border-[var(--ds-color-neutral-50)] text-white hover:bg-[var(--ds-color-blue-500)] hover:shadow-sm active:bg-[var(--ds-color-blue-600)] active:translate-y-px disabled:bg-[var(--ds-color-neutral-300)] disabled:border-[var(--ds-color-neutral-200)] disabled:text-[var(--ds-color-neutral-600)] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-blue-500)] data-[loading=true]:bg-[var(--ds-color-blue-400)] [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  /**
   * Show loading state with spinner
   */
  loading?: boolean
  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode
  /**
   * Icon to display after the button text
   */
  rightIcon?: React.ReactNode
  /**
   * Make button full width
   */
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    fullWidth = false,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Handle loading state
    const isDisabled = disabled || loading

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }), 
          fullWidth && "w-full",
          className
        )}
        ref={ref}
        disabled={isDisabled}
        data-loading={loading}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22ZM12.5 19C16.366 19 19.5 15.866 19.5 12C19.5 8.13401 16.366 5 12.5 5C8.63401 5 5.5 8.13401 5.5 12C5.5 15.866 8.63401 19 12.5 19Z"
              fill="white"
              fillOpacity="0.25"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 3.50005C12.5 2.67162 11.8245 1.98822 11.0053 2.11101C6.67908 2.75943 3.25943 6.17909 2.61101 10.5053C2.48822 11.3245 3.17162 12 4.00005 12C4.82847 12 5.48336 11.3206 5.65877 10.511C6.23737 7.84019 8.34019 5.73737 11.011 5.15877C11.8206 4.98336 12.5 4.32847 12.5 3.50005Z"
              fill="white"
            />
          </svg>
        )}
        {leftIcon && !loading && leftIcon}
        {!loading && children}
        {rightIcon && !loading && rightIcon}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }