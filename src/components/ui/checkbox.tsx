import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"
import { Skeleton } from "./skeleton"
import { Icon } from "../Icon"
import { type IconName } from "../../tokens/design-system-icons"

// Checkbox component following Comcast Business Design System
// Default colors: #B4B5BB for border, #0D62FF when checked
// Typography: Lato font family, consistent with Input patterns

// Checkbox variants following Input component pattern
const checkboxVariants = cva(
  // Base styles
  "peer size-4 shrink-0 rounded-[4px] border bg-white transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-[#B4B5BB] data-[state=checked]:bg-[#0D62FF] data-[state=checked]:border-[#0D62FF] data-[state=checked]:text-white",
        error: "border-[#D11314] data-[state=checked]:bg-[#D11314] data-[state=checked]:border-[#D11314] data-[state=checked]:text-white",
      },
      checkboxState: {
        default: "",
        hover: "border-[#70717D] data-[state=checked]:border-[#0D62FF] data-[state=checked]:bg-[#0D62FF]",
        pressed: "border-[#70717D] data-[state=checked]:border-[#0D62FF] data-[state=checked]:bg-[#0D62FF]",
        focused: "", // Focus styling now handled by container
        disabled: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
      checkboxState: "default",
    },
  }
)

// Container variants for hover state background
const checkboxContainerVariants = cva(
  // Base styles matching design specifications
  "flex items-center gap-2 px-[5px] py-[3px] rounded-[4px] transition-colors",
  {
    variants: {
      checkboxState: {
        default: "",
        hover: "bg-[rgba(180,181,187,0.2)]",
        pressed: "bg-[rgba(180,181,187,0.4)]",
        focused: "bg-[rgba(255,255,255,0.2)] shadow-[0_0_0_1.5px_#0D62FF]",
        disabled: "",
      },
    },
    defaultVariants: {
      checkboxState: "default",
    },
  }
)

export interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root>, VariantProps<typeof checkboxVariants> {
  /**
   * Show error state
   */
  error?: boolean
  /**
   * Checkbox label
   */
  label?: string
  /**
   * Mark checkbox as required (shows * indicator)
   */
  required?: boolean
  /**
   * Visual state override
   */
  checkboxState?: "default" | "hover" | "pressed" | "focused" | "disabled"
  /**
   * Show skeleton loading state
   */
  skeleton?: boolean
  /**
   * Optional 16x16 icon to display to the right of the label text
   */
  rightIcon?: IconName
}

// Skeleton component for checkbox
function CheckboxSkeleton({
  hasLabel = false,
  hasIcon = false,
  className,
  ...props
}: {
  hasLabel?: boolean
  hasIcon?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      <div className="flex items-center space-x-2">
        {/* Checkbox skeleton */}
        <Skeleton className="size-4 rounded-[4px]" />
        {/* Label skeleton */}
        {hasLabel && (
          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-24" />
            {/* Icon spacer - no skeleton */}
            {hasIcon && <div className="size-4" />}
          </div>
        )}
      </div>
    </div>
  )
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant, checkboxState, error = false, label, required = false, skeleton = false, rightIcon, id, ...props }, ref) => {
  // Show skeleton if requested
  if (skeleton) {
    return (
      <CheckboxSkeleton 
        hasLabel={!!label}
        hasIcon={!!rightIcon}
        className={className}
      />
    )
  }

  // Generate unique ID if not provided
  const checkboxId = id || `checkbox-${React.useId()}`

  return (
    <div className={cn(
      checkboxContainerVariants({
        checkboxState,
      }),
      // Only apply interactive states when checkboxState is not explicitly set and not disabled
      !checkboxState && !props.disabled && "hover:bg-[rgba(180,181,187,0.2)] active:bg-[rgba(180,181,187,0.4)] focus-within:bg-[rgba(255,255,255,0.2)] focus-within:shadow-[0_0_0_1.5px_#0D62FF]"
    )}>
        <CheckboxPrimitive.Root
          ref={ref}
          id={checkboxId}
          className={cn(
            checkboxVariants({
              variant: error ? "error" : "default",
              checkboxState: checkboxState !== "focused" ? checkboxState : "default", // Let container handle focus styling
            }),
            // Override default focus-visible to match container focus ring
            checkboxState !== "focused" && "focus-visible:shadow-[0_0_0_1.5px_#0D62FF]",
            className
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
            <CheckIcon className="size-3 stroke-[3]" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <label 
            htmlFor={checkboxId}
            className={cn(
              "flex items-center gap-1 font-secondary cursor-pointer peer-disabled:cursor-not-allowed",
              // Dynamic text color based on disabled state
              props.disabled ? "text-[#70717D]" : "text-[#424454]"
            )}
            style={{
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '130%',
              letterSpacing: '0',
              fontStyle: 'normal'
            }}
          >
            <span className="flex items-center gap-1">
              {label}
              {required && (
                <span 
                  className={cn(
                    "font-secondary",
                    // Dynamic color for asterisk based on disabled state
                    props.disabled ? "text-[#70717D]" : "text-[#424454]"
                  )}
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: '130%',
                    letterSpacing: '0',
                    fontStyle: 'normal'
                  }}
                >
                  *
                </span>
              )}
            </span>
            {rightIcon && (
              <Icon 
                name={rightIcon} 
                className="size-4 text-[#70717D]" 
                aria-hidden="true"
              />
            )}
          </label>
        )}
    </div>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox, CheckboxSkeleton }