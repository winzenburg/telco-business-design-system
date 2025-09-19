import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"

// Badge component following Comcast Business Design System
// Colors: Brand colors for consistency, proper contrast ratios
// Typography: Secondary font, consistent sizing

const badgeVariants = cva(
  // Base styles using design system spacing and typography
  "inline-flex items-center gap-1 rounded-full border font-secondary font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[var(--ds-color-bg-muted)] text-[var(--ds-color-text-primary)] hover:bg-[var(--ds-color-bg-muted)]/80",
        primary: "border-transparent bg-[var(--ds-color-intent-primary)] text-[var(--ds-color-text-on-primary)] hover:bg-[var(--ds-color-intent-primary-hover)]",
        secondary: "border-[var(--ds-color-neutral-300)] bg-[var(--ds-color-bg-surface)] text-[var(--ds-color-text-primary)] hover:bg-[var(--ds-color-bg-muted)]",
        success: "border-transparent bg-[var(--ds-color-intent-success)] text-[var(--ds-color-text-on-primary)] hover:bg-[var(--ds-color-green-600)]",
        warning: "border-transparent bg-[var(--ds-color-intent-warning)] text-[var(--ds-color-text-on-primary)] hover:bg-[var(--ds-color-yellow-600)]",
        destructive: "border-transparent bg-[var(--ds-color-intent-destructive)] text-[var(--ds-color-text-on-primary)] hover:bg-[var(--ds-color-red-600)]",
        info: "border-transparent bg-[var(--ds-color-intent-info)]/10 text-[var(--ds-color-intent-info)] hover:bg-[var(--ds-color-intent-info)]/20",
        outline: "border-[var(--ds-color-neutral-300)] bg-transparent text-[var(--ds-color-text-primary)] hover:bg-[var(--ds-color-bg-surface)]"
      },
      size: {
        sm: "px-[var(--ds-spacing-2)] py-[var(--ds-spacing-1)] text-xs h-[var(--ds-spacing-5)]",
        default: "px-[var(--ds-spacing-2.5)] py-[var(--ds-spacing-1)] text-xs h-[var(--ds-spacing-6)]",
        lg: "px-[var(--ds-spacing-3)] py-[var(--ds-spacing-1.5)] text-sm h-[var(--ds-spacing-8)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Whether the badge is interactive (clickable)
   */
  interactive?: boolean
  /**
   * Whether to show a dot indicator
   */
  dot?: boolean
}

const Badge = React.forwardRef<
  HTMLDivElement,
  BadgeProps
>(({ className, variant, size, interactive = false, dot = false, children, ...props }, ref) => {
  if (interactive) {
    return (
      <button
        className={cn(
          badgeVariants({ variant, size }),
          "cursor-pointer hover:scale-105 active:scale-95",
          dot && "gap-1.5",
          className
        )}
        data-badge="true"
        {...(props as unknown as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {dot && (
          <span 
            className="w-1.5 h-1.5 bg-current rounded-full" 
            aria-hidden="true" 
          />
        )}
        {children}
      </button>
    )
  }

  return (
    <div
      ref={ref}
      className={cn(
        badgeVariants({ variant, size }),
        dot && "gap-1.5",
        className
      )}
      data-badge="true"
      {...props}
    >
      {dot && (
        <span 
          className="w-1.5 h-1.5 bg-current rounded-full" 
          aria-hidden="true" 
        />
      )}
      {children}
    </div>
  )
})

Badge.displayName = "Badge"

export { Badge, badgeVariants }