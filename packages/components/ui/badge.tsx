import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"

// Badge component following Comcast Business Design System
// Colors: Brand colors for consistency, proper contrast ratios
// Typography: Secondary font, consistent sizing

const badgeVariants = cva(
  // Base styles using design system spacing and typography
  "inline-flex items-center rounded-full border font-secondary font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-color-[^]]*]) focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[var(--ds-color-[^]]*]) text-[var(--ds-color-[^]]*]) hover:bg-[var(--ds-color-[^]]*])/50",
        primary: "border-transparent bg-[var(--ds-color-[^]]*]) text-[var(--ds-color-[^]]*]) hover:bg-[var(--ds-color-[^]]*])/80",
        secondary: "border-[var(--ds-color-[^]]*]) bg-[var(--ds-color-[^]]*]) text-[var(--ds-color-[^]]*]) hover:bg-[var(--ds-color-[^]]*])",
        success: "border-transparent bg-[var(--ds-color-[^]]*]) text-[var(--ds-color-[^]]*]) hover:bg-[var(--ds-color-[^]]*])",
        warning: "border-transparent bg-[var(--ds-color-[^]]*]) text-[var(--ds-color-[^]]*]) hover:bg-[var(--ds-color-[^]]*])",
        destructive: "border-transparent bg-[var(--ds-color-[^]]*]) text-[var(--ds-color-[^]]*]) hover:bg-[var(--ds-color-[^]]*])/80",
        info: "border-transparent bg-[var(--ds-color-[^]]*])/10 text-[var(--ds-color-[^]]*]) hover:bg-[var(--ds-color-[^]]*])/20",
        outline: "border-[var(--ds-color-[^]]*]) bg-transparent text-[var(--ds-color-[^]]*]) hover:bg-[var(--ds-color-[^]]*]),"
      },
      size: {
        sm: "px-2 py-0.5 text-xs h-5",
        default: "px-2.5 py-1 text-xs h-6",
        lg: "px-3 py-1.5 text-sm h-8",
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
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
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