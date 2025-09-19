import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"

// Button component with Figma specifications

const buttonVariants = cva(
  [
    // Base styles from Figma: inline-flex, justify-center, align-items-center, gap-10px, height-40px
    "appearance-none border-0 inline-flex items-center justify-center gap-2.5 h-10 shrink-0 font-primary font-semibold text-sm leading-[160%]",
    "transition-all duration-150 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none select-none",
    "disabled:bg-neutral-300 disabled:text-neutral-600 data-[loading=true]:bg-primary-500",
    "relative overflow-hidden", // For ripple effect support
  ],
  {
    variants: {
      variant: {
        // Primary Button - Using CSS variables for colors
        default:
          "bg-primary-500 text-white border border-transparent hover:bg-primary-600 hover:shadow-sm active:bg-primary-800 active:translate-y-px focus-visible:border-white focus-visible:ring-2 focus-visible:ring-primary-500",
        
        // Alias for 'primary' to maintain compatibility with custom Button
        primary:
          "bg-primary-500 text-white border border-transparent hover:bg-primary-600 hover:shadow-sm active:bg-primary-800 active:translate-y-px focus-visible:border-white focus-visible:ring-2 focus-visible:ring-primary-500",
        
        // Secondary Button - All 6 states from Figma
        secondary:
          "bg-white text-primary-500 border border-figma-border hover:bg-primary-50 hover:border-primary-500 hover:shadow-[0_2px_8px_-3px_rgba(221,221,226,1)] active:bg-neutral-300 active:border-figma-border active:translate-y-px disabled:bg-white disabled:text-black/50 disabled:border-neutral-300 focus-visible:border-figma-border focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2 data-[loading=true]:bg-white data-[loading=true]:text-primary-500 data-[loading=true]:border-figma-border",
        
        // Tertiary Button - Similar to ghost but with subtle background
        tertiary:
          "bg-primary-50 text-primary-500 border border-transparent hover:bg-primary-100 hover:text-primary-600 active:bg-primary-200 active:text-primary-700 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2",
        
        // Ghost Button - All 6 states from Figma: transparent background, blue text, 14px font, 600 weight
        ghost:
          "bg-transparent text-primary-500 border border-transparent text-sm font-semibold hover:bg-primary-50 hover:text-primary-600 active:bg-primary-100 active:text-primary-700 disabled:bg-transparent disabled:text-neutral-500 focus-visible:bg-transparent focus-visible:text-primary-500 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2 data-[loading=true]:bg-transparent data-[loading=true]:text-primary-500",
        
        // Submit Button - Same as primary with distinct naming for form contexts
        submit:
          "bg-primary-500 text-white border border-transparent hover:bg-primary-600 hover:shadow-[0_2px_8px_-3px_rgba(221,221,226,1)] active:bg-primary-800 active:translate-y-px disabled:bg-neutral-300 disabled:text-neutral-600 focus-visible:border-white focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] data-[loading=true]:bg-primary-500",
        
        // Text Button - text only, no height constraint
        link:
          "bg-transparent text-primary-500 underline-offset-4 hover:underline hover:text-primary-600 active:text-primary-700 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2 p-0 h-auto text-sm font-semibold",
        
        // Danger Button - Alias for destructive to maintain compatibility
        danger:
          "bg-red-500 text-white border border-transparent hover:bg-red-600 hover:shadow-sm active:bg-red-700 active:translate-y-px focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2",
        
        // Destructive Button - Using Figma red color system
        destructive:
          "bg-red-500 text-white border border-transparent hover:bg-red-600 hover:shadow-sm active:bg-red-700 active:translate-y-px focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2",
        
        // Outline variant - Clean outlined look using neutral colors
        outline:
          "bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50 hover:text-neutral-800 hover:border-neutral-400 active:bg-neutral-100 active:text-neutral-900 active:border-neutral-500 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2",
      },
      size: {
        // Default size - From Figma: 40px height
        default: "h-10 px-3 py-2 text-sm rounded",

        // Small size - Same 40px height
        sm: "h-10 px-3 py-2 text-sm rounded",

        // Medium size - Alias for default to maintain compatibility
        md: "h-10 px-3 py-2 text-sm rounded",

        // Large size - Same 40px height
        lg: "h-10 px-4 py-2 text-sm rounded",

        // Extra Large size - Same 40px height
        xl: "h-10 px-4 py-2 text-sm rounded",
        
        // Icon only buttons - 40px size
        icon: "size-10 p-0 rounded [&_svg]:size-5",

        // Small icon - Same 40px size
        "icon-sm": "size-10 p-0 rounded [&_svg]:size-5",

        // Large icon - Same 40px size
        "icon-lg": "size-10 p-0 rounded [&_svg]:size-5",
        
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
    compoundVariants: [
      // Icon button variants that inherit proper colors and states
      {
        size: ["icon", "icon-sm", "icon-lg"],
        variant: "default",
        className: "bg-primary-400 border border-white text-white hover:bg-primary-500 hover:text-white hover:shadow-[0_2px_8px_-3px_rgba(221,221,226,1)] active:bg-primary-600 active:text-white active:translate-y-px disabled:bg-neutral-300 disabled:border-neutral-400 disabled:text-neutral-600 focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] data-[loading=true]:bg-primary-400",
      },
      {
        size: ["icon", "icon-sm", "icon-lg"],
        variant: "primary",
        className: "bg-primary-400 border border-white text-white hover:bg-primary-500 hover:text-white hover:shadow-[0_2px_8px_-3px_rgba(221,221,226,1)] active:bg-primary-600 active:text-white active:translate-y-px disabled:bg-neutral-300 disabled:border-neutral-400 disabled:text-neutral-600 focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] data-[loading=true]:bg-primary-400",
      },
      {
        size: ["icon", "icon-sm", "icon-lg"],
        variant: "secondary",
        className: "bg-white border border-figma-border text-primary-500 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-500 hover:shadow-[0_2px_8px_-3px_rgba(221,221,226,1)] active:bg-neutral-300 active:text-primary-700 active:border-figma-border active:translate-y-px disabled:bg-white disabled:text-black/50 disabled:border-neutral-300 focus-visible:border-figma-border focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)]",
      },
      {
        size: ["icon", "icon-sm", "icon-lg"],
        variant: "tertiary",
        className: "bg-primary-50 border border-transparent text-primary-500 hover:bg-primary-100 hover:text-primary-600 active:bg-primary-200 active:text-primary-700 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2",
      },
      {
        size: ["icon", "icon-sm", "icon-lg"],
        variant: "ghost",
        className: "bg-transparent border border-transparent text-primary-500 hover:bg-primary-50 hover:text-primary-600 active:bg-primary-100 active:text-primary-700 disabled:bg-transparent disabled:text-neutral-500 focus-visible:bg-transparent focus-visible:text-primary-500 focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2",
      },
      {
        size: ["icon", "icon-sm", "icon-lg"],
        variant: "destructive",
        className: "bg-red-500 border border-transparent text-white hover:bg-red-600 hover:text-white hover:shadow-sm active:bg-red-700 active:text-white active:translate-y-px focus-visible:outline-2 focus-visible:outline-red-500 focus-visible:outline-offset-2",
      },
      {
        size: ["icon", "icon-sm", "icon-lg"],
        variant: "outline",
        className: "bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-800 hover:border-neutral-400 active:bg-neutral-100 active:text-neutral-900 active:border-neutral-500 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2",
      },
    ],
  }
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>,
    VariantProps<typeof buttonVariants> {
  /**
   * Render as a different element or component
   * @default false
   */
  asChild?: boolean
  /**
   * Show loading state with spinner
   * @default false
   */
  loading?: boolean
  /**
   * Icon or content to display before the button text
   */
  leftIcon?: React.ReactNode
  /**
   * Icon or content to display after the button text
   */
  rightIcon?: React.ReactNode
  /**
   * Make button full width
   * @default false
   */
  fullWidth?: boolean
  /**
   * Test identifier for automated testing
   * @example 'submit-button'
   */
  'data-testid'?: string
  /**
   * Whether the button is pressed (for toggle buttons)
   */
  'aria-pressed'?: boolean
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
    onClick,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Handle loading state
    const isDisabled = disabled || loading
    

    return (
      <>
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
          onClick={onClick}
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
      </>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }