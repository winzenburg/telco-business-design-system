import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"

// Button component with simplified Tailwind classes for testing

const buttonVariants = cva(
  // Base styles
  "appearance-none border-0 inline-flex items-center justify-center gap-2.5 h-10 shrink-0 font-primary font-semibold text-sm leading-[160%] transition-all duration-150 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none select-none disabled:bg-gray-300 disabled:text-gray-600 data-[loading=true]:bg-blue-500",
  {
    variants: {
      variant: {
        // Primary Button - Using standard Tailwind classes
        default:
          "bg-blue-500 text-white border border-transparent hover:bg-blue-600 hover:shadow-sm active:bg-blue-700 active:translate-y-px focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        
        // Alias for 'primary' to maintain compatibility
        primary:
          "bg-blue-500 text-white border border-transparent hover:bg-blue-600 hover:shadow-sm active:bg-blue-700 active:translate-y-px focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        
        // Secondary Button
        secondary:
          "bg-white text-blue-500 border border-gray-200 hover:bg-gray-50 hover:border-blue-500 hover:shadow-sm active:bg-gray-100 active:border-gray-200 active:translate-y-px disabled:bg-white disabled:text-gray-400 disabled:border-gray-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        
        // Tertiary Button
        tertiary:
          "bg-blue-50 text-blue-500 border border-transparent hover:bg-blue-100 hover:text-blue-500 active:bg-blue-200 active:text-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        
        // Ghost Button
        ghost:
          "bg-transparent text-blue-500 border border-transparent text-sm font-semibold hover:bg-gray-50 hover:text-blue-500 active:bg-gray-100 active:text-blue-500 disabled:bg-transparent disabled:text-gray-400 focus-visible:bg-transparent focus-visible:text-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 data-[loading=true]:bg-transparent data-[loading=true]:text-blue-500",
        
        // Submit Button
        submit:
          "bg-blue-500 text-white border border-transparent hover:bg-blue-600 hover:shadow-sm active:bg-blue-700 active:translate-y-px disabled:bg-gray-300 disabled:text-gray-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 data-[loading=true]:bg-blue-500",
        
        // Link Button
        link:
          "bg-transparent text-blue-500 underline-offset-4 hover:underline hover:text-blue-600 active:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 p-0 h-6 text-sm font-semibold",
        
        // Danger Button
        danger:
          "bg-red-500 text-white border border-transparent hover:bg-red-600 hover:shadow-sm active:bg-red-700 active:translate-y-px focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
        
        // Destructive Button
        destructive:
          "bg-red-500 text-white border border-transparent hover:bg-red-600 hover:shadow-sm active:bg-red-700 active:translate-y-px focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
        
        // Outline variant
        outline:
          "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-gray-700 hover:border-gray-200 active:bg-gray-50 active:text-gray-700 active:border-gray-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      },
      size: {
        // Text Button size - From Figma: 24px height
        sm: "h-6 px-3 py-1 text-sm rounded-[var(--ds-radius-sm)]",
        
        // Medium size - Alias for default to maintain compatibility
        md: "py-[9px] px-[13px] text-sm rounded-[var(--ds-radius-sm)]",
        
        // Default size - From Figma: padding: 9px 13px, border-radius: 4px
        default: "py-[9px] px-[13px] text-sm rounded-[var(--ds-radius-sm)]",
        
        // Large size - Scaled up from default
        lg: "h-12 px-6 py-3 text-lg rounded-[var(--ds-radius-sm)]",
        
        // Extra Large size - Alias for large to maintain compatibility
        xl: "h-12 px-6 py-3 text-lg rounded-[var(--ds-radius-sm)]",
        
        // Icon only buttons
        icon: "size-10 p-0 rounded-[var(--ds-radius-sm)] bg-blue-400 border border-white text-white hover:bg-blue-500 hover:shadow-sm active:bg-blue-600 active:translate-y-px disabled:bg-gray-300 disabled:border-gray-200 disabled:text-gray-600 focus-visible:ring-2 focus-visible:ring-blue-500 data-[loading=true]:bg-blue-400 [&_svg]:size-5",
        
        // Small icon - 32px size
        "icon-sm": "size-8 p-0 rounded-[var(--ds-radius-sm)] bg-blue-400 border border-white text-white hover:bg-blue-500 hover:shadow-sm active:bg-blue-600 active:translate-y-px disabled:bg-gray-300 disabled:border-gray-200 disabled:text-gray-600 focus-visible:ring-2 focus-visible:ring-blue-500 data-[loading=true]:bg-blue-400 [&_svg]:size-4",
        
        // Large icon - 48px size  
        "icon-lg": "size-12 p-0 rounded-[var(--ds-radius-sm)] bg-blue-400 border border-white text-white hover:bg-blue-500 hover:shadow-sm active:bg-blue-600 active:translate-y-px disabled:bg-gray-300 disabled:border-gray-200 disabled:text-gray-600 focus-visible:ring-2 focus-visible:ring-blue-500 data-[loading=true]:bg-blue-400 [&_svg]:size-6",
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