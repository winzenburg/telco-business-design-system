import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"

// Button component with Figma specifications

const buttonVariants = cva(
  // Base styles from Figma: inline-flex, justify-center, align-items-center, gap-10px, height-40px
  "appearance-none border-0 inline-flex items-center justify-center gap-2.5 h-10 shrink-0 font-primary font-semibold text-sm leading-[160%] text-white transition-all duration-150 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none select-none disabled:bg-neutral-300 disabled:text-neutral-600 data-[loading=true]:bg-primary-500",
  {
    variants: {
      variant: {
        // Primary Button - From Figma: #0D62FF background, white text, pressed: #052766, focus: white border + blue shadow
        default:
          "bg-primary-500 text-white border border-transparent hover:bg-primary-600 hover:shadow-sm active:bg-primary-800 active:translate-y-px focus-visible:border-white focus-visible:shadow-[0_0_0_1.5px_#0D62FF]",
        
        // Alias for 'primary' to maintain compatibility with custom Button
        primary:
          "bg-primary-500 text-white border border-transparent hover:bg-primary-600 hover:shadow-sm active:bg-primary-800 active:translate-y-px focus-visible:border-white focus-visible:shadow-[0_0_0_1.5px_#0D62FF]",
        
        // Secondary Button - All 6 states from Figma
        secondary:
          "bg-white text-primary-500 border border-figma-border hover:bg-primary-50 hover:border-primary-500 hover:shadow-[0_2px_8px_-3px_rgba(221,221,226,1)] active:bg-neutral-300 active:border-figma-border active:translate-y-px disabled:bg-white disabled:text-black/50 disabled:border-neutral-300 focus-visible:border-figma-border focus-visible:shadow-[0_0_0_1.5px_#0D62FF] focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2 data-[loading=true]:bg-white data-[loading=true]:text-primary-500 data-[loading=true]:border-figma-border",
        
        // Tertiary Button - Similar to ghost but with subtle background
        tertiary:
          "bg-primary-50 text-primary-500 border border-transparent hover:bg-primary-100 hover:text-primary-600 active:bg-primary-200 active:text-primary-700 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2",
        
        // Ghost Button - All 6 states from Figma: transparent background, blue text, 14px font, 600 weight
        ghost:
          "bg-transparent text-primary-500 border border-transparent text-sm font-semibold hover:bg-primary-50 hover:text-primary-600 active:bg-primary-100 active:text-primary-700 disabled:bg-transparent disabled:text-neutral-500 focus-visible:bg-transparent focus-visible:text-primary-500 focus-visible:shadow-[0_0_0_1.5px_#0D62FF] focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2 data-[loading=true]:bg-transparent data-[loading=true]:text-primary-500",
        
        // Submit Button - Same as primary with distinct naming for form contexts
        submit:
          "bg-primary-500 text-white border border-transparent hover:bg-primary-600 hover:shadow-[0_2px_8px_-3px_rgba(221,221,226,1)] active:bg-primary-800 active:translate-y-px disabled:bg-neutral-300 disabled:text-neutral-600 focus-visible:border-white focus-visible:shadow-[0_0_0_1.5px_#0D62FF] data-[loading=true]:bg-primary-500",
        
        // Text Button - From Figma: minimal styling, blue text, 24px height
        link:
          "bg-transparent text-primary-500 underline-offset-4 hover:underline hover:text-primary-600 active:text-primary-700 focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2 p-0 h-6 text-sm font-semibold",
        
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
        // Text Button size - From Figma: 24px height
        sm: "h-6 px-3 py-1 text-sm rounded-[4px]",
        
        // Medium size - Alias for default to maintain compatibility
        md: "py-[9px] px-[13px] text-sm rounded-[4px]",
        
        // Default size - From Figma: padding: 9px 13px, border-radius: 4px
        default: "py-[9px] px-[13px] text-sm rounded-[4px]",
        
        // Large size - Scaled up from default
        lg: "h-12 px-6 py-3 text-lg rounded-[4px]",
        
        // Extra Large size - Alias for large to maintain compatibility
        xl: "h-12 px-6 py-3 text-lg rounded-[4px]",
        
        // Icon only buttons - From Figma: Blue-400 background, white border, all 6 states
        icon: "size-10 p-0 rounded-[6px] bg-primary-400 border border-white text-white hover:bg-primary-500 hover:shadow-[0_2px_8px_-3px_rgba(221,221,226,1)] active:bg-primary-600 active:translate-y-px disabled:bg-neutral-300 disabled:border-neutral-400 disabled:text-neutral-600 focus-visible:shadow-[0_0_0_1.5px_#0D62FF] data-[loading=true]:bg-primary-400 [&_svg]:size-5",
        
        // Small icon - 32px size
        "icon-sm": "size-8 p-0 rounded-[6px] bg-primary-400 border border-white text-white hover:bg-primary-500 hover:shadow-[0_2px_8px_-3px_rgba(221,221,226,1)] active:bg-primary-600 active:translate-y-px disabled:bg-neutral-300 disabled:border-neutral-400 disabled:text-neutral-600 focus-visible:shadow-[0_0_0_1.5px_#0D62FF] data-[loading=true]:bg-primary-400 [&_svg]:size-4",
        
        // Large icon - 48px size  
        "icon-lg": "size-12 p-0 rounded-[6px] bg-primary-400 border border-white text-white hover:bg-primary-500 hover:shadow-[0_2px_8px_-3px_rgba(221,221,226,1)] active:bg-primary-600 active:translate-y-px disabled:bg-neutral-300 disabled:border-neutral-400 disabled:text-neutral-600 focus-visible:shadow-[0_0_0_1.5px_#0D62FF] data-[loading=true]:bg-primary-400 [&_svg]:size-6",
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