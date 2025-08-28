import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "../../utils/cn"

// Material Design 3 Menu Components
const Menu = DropdownMenuPrimitive.Root

const MenuTrigger = DropdownMenuPrimitive.Trigger

const MenuGroup = DropdownMenuPrimitive.Group

const MenuPortal = DropdownMenuPrimitive.Portal

const MenuSub = DropdownMenuPrimitive.Sub

const MenuRadioGroup = DropdownMenuPrimitive.RadioGroup

// Menu content variants following MD3 specifications
const menuContentVariants = cva(
  [
    // Base MD3 menu styles
    "z-50 min-w-[180px] max-w-[280px] overflow-hidden rounded-lg border shadow-lg p-1",
    "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out", 
    "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    // Directional animations
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
    "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  ],
  {
    variants: {
      variant: {
        default: "bg-white border-neutral-200 text-neutral-900",
        elevated: "bg-white border-neutral-200 text-neutral-900 shadow-xl",
        filled: "bg-neutral-50 border-neutral-200 text-neutral-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// Menu item variants following MD3 specifications
const menuItemVariants = cva(
  [
    // Base MD3 menu item styles
    "relative flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
    "cursor-pointer select-none outline-none",
    "focus:bg-neutral-100 hover:bg-neutral-50 active:bg-neutral-100",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[highlighted]:bg-neutral-100",
  ],
  {
    variants: {
      variant: {
        default: "",
        destructive: "text-red-600 focus:bg-red-50 hover:bg-red-50 active:bg-red-100",
      },
      size: {
        sm: "px-2 py-1.5 text-xs min-h-[32px]",
        default: "px-3 py-2 text-sm min-h-[40px]",
        lg: "px-4 py-3 text-base min-h-[48px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const MenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> &
  VariantProps<typeof menuContentVariants>
>(({ className, sideOffset = 4, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(menuContentVariants({ variant }), className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
MenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const MenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> &
  VariantProps<typeof menuItemVariants> & {
    inset?: boolean
  }
>(({ className, inset, variant, size, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      menuItemVariants({ variant, size }),
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(menuItemVariants(), "pl-8", className)}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
MenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(menuItemVariants(), "pl-8", className)}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
MenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const MenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-3 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
MenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("my-1 h-px bg-neutral-200", className)}
    {...props}
  />
))
MenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const MenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-neutral-500", className)}
      {...props}
    />
  )
}
MenuShortcut.displayName = "MenuShortcut"

// Submenu components
const MenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & 
  VariantProps<typeof menuItemVariants> & {
    inset?: boolean
  }
>(({ className, inset, variant, size, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      menuItemVariants({ variant, size }),
      "data-[state=open]:bg-neutral-100",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4 opacity-60" />
  </DropdownMenuPrimitive.SubTrigger>
))
MenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const MenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> &
  VariantProps<typeof menuContentVariants>
>(({ className, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(menuContentVariants({ variant }), className)}
    {...props}
  />
))
MenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

export {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuLabel,
  MenuSeparator,
  MenuShortcut,
  MenuGroup,
  MenuPortal,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuRadioGroup,
  menuContentVariants,
  menuItemVariants,
}