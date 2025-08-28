import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"

// Button Group (Segmented Buttons) Component following MD3 patterns
const buttonGroupVariants = cva(
  [
    "inline-flex items-center rounded-lg border border-neutral-200 bg-white",
    "shadow-sm overflow-hidden divide-x divide-neutral-200",
  ],
  {
    variants: {
      size: {
        sm: "h-8",
        default: "h-10", 
        lg: "h-12",
      },
      variant: {
        default: "border-neutral-200 bg-white",
        outline: "border-neutral-300 bg-transparent",
        filled: "border-neutral-200 bg-neutral-50",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

const buttonGroupItemVariants = cva(
  [
    "inline-flex items-center justify-center px-3 py-2 text-sm font-medium transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-primary-500 focus:z-10",
    "disabled:pointer-events-none disabled:opacity-50",
    "first:rounded-l-lg last:rounded-r-lg",
    "hover:bg-primary-50 hover:text-primary-600",
    "data-[selected=true]:bg-primary-500 data-[selected=true]:text-white",
    "data-[selected=true]:hover:bg-primary-600",
  ],
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-xs h-8",
        default: "px-3 py-2 text-sm h-10",
        lg: "px-4 py-3 text-base h-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  /**
   * Allow multiple selections (checkbox behavior)
   */
  multiple?: boolean
  /**
   * Selected values for controlled component
   */
  value?: string | string[]
  /**
   * Default selected values for uncontrolled component
   */
  defaultValue?: string | string[]
  /**
   * Callback when selection changes
   */
  onValueChange?: (value: string | string[]) => void
  /**
   * Disable the entire group
   */
  disabled?: boolean
}

export interface ButtonGroupItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonGroupItemVariants> {
  /**
   * Value for this button
   */
  value: string
  /**
   * Icon to display before text
   */
  icon?: React.ReactNode
}

const ButtonGroupContext = React.createContext<{
  selectedValues: string[]
  multiple: boolean
  disabled: boolean
  size?: "sm" | "default" | "lg"
  onSelect: (value: string) => void
} | null>(null)

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ 
    className, 
    size, 
    variant,
    multiple = false,
    value,
    defaultValue,
    onValueChange,
    disabled = false,
    children,
    ...props 
  }, ref) => {
    // Handle controlled vs uncontrolled state
    const [internalValue, setInternalValue] = React.useState<string[]>(() => {
      if (defaultValue) {
        return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
      }
      return []
    })
    
    const selectedValues = React.useMemo(() => {
      if (value !== undefined) {
        return Array.isArray(value) ? value : [value]
      }
      return internalValue
    }, [value, internalValue])
    
    const handleSelect = (itemValue: string) => {
      if (disabled) return
      
      let newValues: string[]
      
      if (multiple) {
        // Toggle selection for multiple mode
        if (selectedValues.includes(itemValue)) {
          newValues = selectedValues.filter(v => v !== itemValue)
        } else {
          newValues = [...selectedValues, itemValue]
        }
      } else {
        // Single selection mode
        newValues = selectedValues.includes(itemValue) ? [] : [itemValue]
      }
      
      // Update internal state if uncontrolled
      if (value === undefined) {
        setInternalValue(newValues)
      }
      
      // Call onChange callback
      if (onValueChange) {
        if (multiple) {
          onValueChange(newValues)
        } else {
          onValueChange(newValues[0] || '')
        }
      }
    }
    
    const contextValue = React.useMemo(
      () => ({
        selectedValues,
        multiple,
        disabled,
        size,
        onSelect: handleSelect,
      }),
      [selectedValues, multiple, disabled, size, handleSelect]
    )

    return (
      <ButtonGroupContext.Provider value={contextValue}>
        <div
          ref={ref}
          role={multiple ? "group" : "radiogroup"}
          aria-disabled={disabled}
          className={cn(buttonGroupVariants({ size, variant }), className)}
          {...props}
        >
          {children}
        </div>
      </ButtonGroupContext.Provider>
    )
  }
)
ButtonGroup.displayName = "ButtonGroup"

const ButtonGroupItem = React.forwardRef<HTMLButtonElement, ButtonGroupItemProps>(
  ({ className, size, value, icon, disabled, children, onClick, ...props }, ref) => {
    const context = React.useContext(ButtonGroupContext)
    
    if (!context) {
      throw new Error("ButtonGroupItem must be used within a ButtonGroup")
    }
    
    const { selectedValues, multiple, disabled: groupDisabled, size: groupSize, onSelect } = context
    const isSelected = selectedValues.includes(value)
    const isDisabled = disabled || groupDisabled
    const buttonSize = size || groupSize
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        onSelect(value)
        onClick?.(e)
      }
    }
    
    return (
      <button
        ref={ref}
        type="button"
        role={multiple ? "checkbox" : "radio"}
        aria-checked={isSelected}
        aria-disabled={isDisabled}
        data-selected={isSelected}
        disabled={isDisabled}
        className={cn(buttonGroupItemVariants({ size: buttonSize }), className)}
        onClick={handleClick}
        {...props}
      >
        {icon && (
          <span className="flex-shrink-0 mr-2">
            {icon}
          </span>
        )}
        <span className="truncate">{children}</span>
      </button>
    )
  }
)
ButtonGroupItem.displayName = "ButtonGroupItem"

export { 
  ButtonGroup, 
  ButtonGroupItem, 
  buttonGroupVariants, 
  buttonGroupItemVariants 
}