import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"
import { Icon } from "../../icons/src/Icon"
import { type IconName } from "../../tokens/design-system-icons"

// Alert component following Comcast Business Design System
// Colors: Brand colors for variants, consistent with design system
// Typography: Primary font for titles, secondary for descriptions

const alertVariants = cva(
  // Base styles using design system spacing and typography
  "relative w-full rounded-[var(--ds-radius-sm)] border p-4 transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[var(--ds-color-[^]]*]) border-[var(--ds-color-[^]]*]) text-[var(--ds-color-[^]]*]) [&>svg]:text-[var(--ds-color-[^]]*])",
        info: "border-[var(--ds-color-[^]]*]) bg-[var(--ds-color-[^]]*])/10 text-[var(--ds-color-[^]]*]) [&>svg]:text-[var(--ds-color-[^]]*])",
        success: "border-[var(--ds-color-[^]]*]) bg-[var(--ds-color-[^]]*]) text-[var(--ds-color-[^]]*]) [&>svg]:text-[var(--ds-color-[^]]*])",
        warning: "border-[var(--ds-color-[^]]*]) bg-[var(--ds-color-[^]]*]) text-[var(--ds-color-[^]]*]) [&>svg]:text-[var(--ds-color-[^]]*])",
        destructive: "border-[var(--ds-color-[^]]*]) bg-[var(--ds-color-[^]]*])/10 text-[var(--ds-color-[^]]*]) [&>svg]:text-[var(--ds-color-[^]]*]),"
      },
      size: {
        sm: "p-3 text-sm",
        default: "p-4",
        lg: "p-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /**
   * Icon to display at the beginning of the alert
   */
  icon?: IconName
  /**
   * Whether to show the icon
   */
  showIcon?: boolean
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, size, icon, showIcon = true, children, ...props }, ref) => {
    // Default icons for each variant
    const defaultIcons: Record<NonNullable<typeof variant>, IconName> = {
      default: "alert",
      info: "alert",
      success: "check",
      warning: "alert", 
      destructive: "alert",
    }

    const displayIcon = icon || (showIcon ? defaultIcons[variant || "default"] : undefined)

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, size }), className)}
        {...props}
      >
        <div className="flex items-start gap-3">
          {displayIcon && (
            <Icon 
              name={displayIcon} 
              size={16} 
              color="currentColor"
              className="flex-shrink-0 mt-0.5" 
              decorative 
            />
          )}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-2 font-primary font-semibold text-sm leading-tight tracking-tight",
      className
    )}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-sm font-secondary leading-relaxed [&_p]:leading-relaxed [&_p]:mb-0",
      className
    )}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }