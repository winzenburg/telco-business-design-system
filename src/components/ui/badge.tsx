import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "../../utils/cn"

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center gap-1.5 rounded-full border font-medium transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#E8EAEF] text-[#2B2D3F] hover:bg-[#E8EAEF]/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-red-500 text-white hover:bg-red-500/80",
        outline: "border-neutral-200 bg-transparent text-foreground hover:bg-neutral-50",
        success: "border-transparent bg-green-100 text-green-800 hover:bg-green-100/80",
        warning: "border-transparent bg-orange-100 text-orange-800 hover:bg-orange-100/80",
        info: "border-transparent bg-[#0D62FF]/10 text-[#0D62FF] hover:bg-[#0D62FF]/20",
      },
      chipType: {
        badge: "",
        assist: "cursor-pointer hover:shadow-md active:scale-95",
        filter: "cursor-pointer hover:shadow-md active:scale-95 data-[selected=true]:bg-[#0D62FF] data-[selected=true]:text-white data-[selected=true]:border-[#0D62FF]",
        input: "cursor-pointer hover:shadow-md active:scale-95",
        suggestion: "cursor-pointer hover:shadow-md active:scale-95",
      },
      size: {
        sm: "h-6 px-2 text-xs min-w-6",
        default: "h-8 px-3 text-sm min-w-8",
        lg: "h-10 px-4 text-base min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      chipType: "badge",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  avatar?: React.ReactNode
  dismissible?: boolean
  onDismiss?: () => void
  selected?: boolean
  onSelect?: (selected: boolean) => void
  disabled?: boolean
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ 
    className, 
    variant, 
    chipType, 
    size, 
    leadingIcon, 
    trailingIcon, 
    avatar,
    dismissible, 
    onDismiss,
    selected,
    onSelect,
    disabled,
    onClick,
    children, 
    ...props 
  }, ref) => {
    const isInteractive = chipType !== 'badge' || onClick
    const isFilter = chipType === 'filter'
    
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return
      
      if (isFilter && onSelect) {
        onSelect(!selected)
      }
      
      onClick?.(e)
    }

    const handleDismiss = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      onDismiss?.()
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return
      
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleClick(e as any)
      }
      
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (dismissible && onDismiss) {
          e.preventDefault()
          onDismiss()
        }
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({ variant, chipType, size }),
          isInteractive && "cursor-pointer",
          className
        )}
        onClick={isInteractive ? handleClick : undefined}
        onKeyDown={isInteractive ? handleKeyDown : undefined}
        tabIndex={isInteractive && !disabled ? 0 : undefined}
        role={isInteractive ? 'button' : undefined}
        aria-pressed={isFilter ? selected : undefined}
        aria-disabled={disabled}
        data-selected={selected}
        disabled={disabled}
        {...props}
      >
        {avatar && (
          <div className="w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
            {avatar}
          </div>
        )}
        {leadingIcon && !avatar && (
          <span className="flex-shrink-0">
            {leadingIcon}
          </span>
        )}
        <span className="truncate">{children}</span>
        {trailingIcon && !dismissible && (
          <span className="flex-shrink-0">
            {trailingIcon}
          </span>
        )}
        {dismissible && (
          <button
            type="button"
            onClick={handleDismiss}
            className="flex-shrink-0 rounded-full p-0.5 hover:bg-black/10 transition-colors focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-neutral-500"
            aria-label="Remove"
            tabIndex={-1}
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    )
  }
)

Badge.displayName = "Badge"

export { Badge, badgeVariants }