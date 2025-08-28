import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronRight } from "lucide-react"

import { cn } from "../utils/cn"

const listVariants = cva(
  "divide-y divide-[var(--ds-color-border-default]",
  {
    variants: {
      variant: {
        default: "bg-[var(--ds-color-bg-canvas] border border-[var(--ds-color-border-default] rounded-lg",
        plain: "bg-transparent",
        card: "bg-[var(--ds-color-bg-canvas] border border-[var(--ds-color-border-default] rounded-lg shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const listItemVariants = cva(
  "flex items-center gap-3 px-4 py-3 text-sm text-[var(--ds-color-text-primary] transition-colors hover:bg-[var(--ds-color-bg-surface] focus:bg-[var(--ds-color-bg-surface] focus:outline-none focus:ring-1 focus:ring-[var(--ds-color-intent-primary] focus:ring-inset",
  {
    variants: {
      variant: {
        default: "",
        interactive: "cursor-pointer hover:bg-[var(--ds-color-bg-surface] active:bg-[var(--ds-color-bg-surface]/80",
        selected: "bg-[var(--ds-color-intent-primary]/5 border-r-2 border-r-[var(--ds-color-intent-primary]",
      },
      size: {
        sm: "px-3 py-2 text-xs",
        default: "px-4 py-3 text-sm",
        lg: "px-4 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listVariants> {}

const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(listVariants({ variant }), className)}
      {...props}
    />
  )
)
List.displayName = "List"

interface ListItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof listItemVariants> {
  leading?: React.ReactNode
  trailing?: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
  asChild?: boolean
}

const ListItem = React.forwardRef<HTMLButtonElement, ListItemProps>(
  ({ className, variant, size, leading, trailing, subtitle, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "div" : "button"
    
    return (
      <Comp
        ref={ref}
        className={cn(listItemVariants({ variant, size }), className)}
        {...(asChild ? {} : props)}
      >
        {leading && (
          <div className="flex-shrink-0">
            {leading}
          </div>
        )}
        
        <div className="flex-1 text-left">
          <div className="font-medium text-[var(--ds-color-text-primary]">
            {children}
          </div>
          {subtitle && (
            <div className="text-xs text-[var(--ds-color-text-muted] mt-1">
              {subtitle}
            </div>
          )}
        </div>
        
        {trailing && (
          <div className="flex-shrink-0">
            {trailing}
          </div>
        )}
      </Comp>
    )
  }
)
ListItem.displayName = "ListItem"

interface ListSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  children: React.ReactNode
}

const ListSection = React.forwardRef<HTMLDivElement, ListSectionProps>(
  ({ className, title, children, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-1", className)} {...props}>
      {title && (
        <div className="px-4 py-2 text-xs font-medium text-[var(--ds-color-text-muted] uppercase tracking-wide bg-[var(--ds-color-bg-surface]">
          {title}
        </div>
      )}
      {children}
    </div>
  )
)
ListSection.displayName = "ListSection"

interface ListHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  action?: React.ReactNode
}

const ListHeader = React.forwardRef<HTMLDivElement, ListHeaderProps>(
  ({ className, title, subtitle, action, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between px-4 py-3 border-b border-[var(--ds-color-border-default] bg-[var(--ds-color-bg-surface]",
        className
      )}
      {...props}
    >
      <div>
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary]">{title}</h3>
        {subtitle && (
          <p className="text-xs text-[var(--ds-color-text-muted] mt-1">{subtitle}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
)
ListHeader.displayName = "ListHeader"

interface NavigationListItemProps extends Omit<ListItemProps, 'trailing'> {
  href?: string
  showChevron?: boolean
}

const NavigationListItem = React.forwardRef<HTMLButtonElement, NavigationListItemProps>(
  ({ showChevron = true, ...props }, ref) => (
    <ListItem
      ref={ref}
      variant="interactive"
      trailing={showChevron ? <ChevronRight className="h-4 w-4 text-[var(--ds-color-text-muted]" /> : undefined}
      {...props}
    />
  )
)
NavigationListItem.displayName = "NavigationListItem"

export {
  List,
  ListItem,
  ListSection,
  ListHeader,
  NavigationListItem,
  listVariants,
  listItemVariants,
  type ListProps,
  type ListItemProps,
}