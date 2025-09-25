import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"

// Navigation component following Comcast Business Design System
// Typography: Action M Bold (for use in global nav only)
// Colors: Primary text tokens for default, intent primary for active states

const navigationVariants = cva(
  // Base styles - Action M Bold typography for global nav
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Global navigation - uses Action M Bold as per design system rules
        global: "font-bold text-[var(--ds-color-text-primary)] hover:text-[var(--ds-color-intent-primary] data-[active=true]:text-[var(--ds-color-intent-primary)] px-4 py-2",
        // Secondary navigation for other contexts
        secondary: "font-medium text-[var(--ds-color-text-primary)] hover:text-[var(--ds-color-intent-primary] data-[active=true]:text-[var(--ds-color-intent-primary)] px-3 py-2",
        // Breadcrumb style
        breadcrumb: "font-medium text-[var(--ds-color-text-muted)] hover:text-[var(--ds-color-text-primary)] data-[active=true]:text-[var(--ds-color-text-primary)] px-2 py-1",
      },
      size: {
        sm: "text-sm",
        default: "text-base", // Action M size
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "global",
      size: "default",
    },
  }
)

export interface NavigationItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navigationVariants> {
  /**
   * Whether the navigation item is active
   */
  active?: boolean
  /**
   * Render as a link instead of button
   */
  asChild?: boolean
  /**
   * Icon to display before the text
   */
  icon?: React.ReactNode
}

const NavigationItem = React.forwardRef<HTMLButtonElement, NavigationItemProps>(
  ({ className, variant, size, active = false, icon, children, ...props }, ref) => {
    return (
      <button
        className={cn(navigationVariants({ variant, size }), className)}
        data-active={active}
        ref={ref}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    )
  }
)
NavigationItem.displayName = "NavigationItem"

// Navigation container component
export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Navigation orientation
   */
  orientation?: "horizontal" | "vertical"
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, orientation = "horizontal", children, ...props }, ref) => {
    return (
      <nav
        className={cn(
          "flex",
          orientation === "horizontal" ? "flex-row items-center space-x-1" : "flex-col items-start space-y-1",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </nav>
    )
  }
)
Navigation.displayName = "Navigation"

// Global Navigation Bar component
export interface GlobalNavProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Navigation brand/logo
   */
  brand?: React.ReactNode
  /**
   * Actions on the right side (user menu, etc.)
   */
  actions?: React.ReactNode
}

const GlobalNav = React.forwardRef<HTMLElement, GlobalNavProps>(
  ({ className, brand, actions, children, ...props }, ref) => {
    return (
      <header
        className={cn(
          "flex items-center justify-between px-6 py-4 bg-[var(--ds-color-bg-canvas)] border-b border-[var(--ds-color-neutral-300)]",
          className
        )}
        ref={ref}
        {...props}
      >
        {brand && <div className="flex items-center">{brand}</div>}
        <Navigation orientation="horizontal" className="flex-1 justify-center">
          {children}
        </Navigation>
        {actions && <div className="flex items-center">{actions}</div>}
      </header>
    )
  }
)
GlobalNav.displayName = "GlobalNav"

export { Navigation, NavigationItem, GlobalNav, navigationVariants }