import * as React from "react"
// import * as MenuPrimitive from "@radix-ui/react-context-menu"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils/cn"
import { Icon } from "../../icons/src/Icon"

// Temporary fallback until @radix-ui/react-context-menu is properly installed
const MenuPrimitive = {
  Root: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Trigger: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  Content: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Item: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  CheckboxItem: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  RadioItem: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Label: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Separator: (props: any) => <hr {...props} />,
  Portal: ({ children }: any) => <>{children}</>,
}

const EnhancedMenu = MenuPrimitive.Root

const EnhancedMenuTrigger = MenuPrimitive.Trigger

const EnhancedMenuGroup = MenuPrimitive.Group

const EnhancedMenuPortal = MenuPrimitive.Portal

const EnhancedMenuSub = MenuPrimitive.Sub

const EnhancedMenuRadioGroup = MenuPrimitive.RadioGroup

const menuContentVariants = cva(
  "z-50 min-w-[12rem] overflow-hidden rounded-lg border border-[var(--ds-color-border-default] bg-[var(--ds-color-bg-canvas] p-1 text-[var(--ds-color-text-primary] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
  {
    variants: {
      size: {
        sm: "min-w-[8rem] text-xs",
        default: "min-w-[12rem] text-sm",
        lg: "min-w-[16rem] text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const EnhancedMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm text-[var(--ds-color-text-primary] outline-none focus:bg-[var(--ds-color-bg-surface] data-[state=open]:bg-[var(--ds-color-bg-surface] hover:bg-[var(--ds-color-bg-surface]",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <Icon name="directionright" size={16} color="currentColor" className="ml-auto" />
  </MenuPrimitive.SubTrigger>
))
EnhancedMenuSubTrigger.displayName = MenuPrimitive.SubTrigger.displayName

const EnhancedMenuSubContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.SubContent> &
    VariantProps<typeof menuContentVariants>
>(({ className, size, ...props }, ref) => (
  <MenuPrimitive.SubContent
    ref={ref}
    className={cn(
      menuContentVariants({ size }),
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
EnhancedMenuSubContent.displayName = MenuPrimitive.SubContent.displayName

const EnhancedMenuContent = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Content> &
    VariantProps<typeof menuContentVariants>
>(({ className, size, ...props }, ref) => (
  <MenuPrimitive.Portal>
    <MenuPrimitive.Content
      ref={ref}
      className={cn(
        menuContentVariants({ size }),
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </MenuPrimitive.Portal>
))
EnhancedMenuContent.displayName = MenuPrimitive.Content.displayName

const EnhancedMenuItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Item> & {
    inset?: boolean
    destructive?: boolean
  }
>(({ className, inset, destructive, ...props }, ref) => (
  <MenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-[var(--ds-color-bg-surface] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      destructive
        ? "text-[var(--ds-color-intent-destructive] focus:bg-[var(--ds-color-intent-destructive]/10 focus:text-[var(--ds-color-intent-destructive]"
        : "text-[var(--ds-color-text-primary] focus:text-[var(--ds-color-intent-primary]",
      className
    )}
    {...props}
  />
))
EnhancedMenuItem.displayName = MenuPrimitive.Item.displayName

const EnhancedMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm text-[var(--ds-color-text-primary] outline-none transition-colors focus:bg-[var(--ds-color-bg-surface] focus:text-[var(--ds-color-intent-primary] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenuPrimitive.ItemIndicator>
        <Icon name="check" size={16} color="currentColor" />
      </MenuPrimitive.ItemIndicator>
    </span>
    {children}
  </MenuPrimitive.CheckboxItem>
))
EnhancedMenuCheckboxItem.displayName = MenuPrimitive.CheckboxItem.displayName

const EnhancedMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm text-[var(--ds-color-text-primary] outline-none transition-colors focus:bg-[var(--ds-color-bg-surface] focus:text-[var(--ds-color-intent-primary] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenuPrimitive.ItemIndicator>
        <Icon name="bullet" size={8} color="currentColor" />
      </MenuPrimitive.ItemIndicator>
    </span>
    {children}
  </MenuPrimitive.RadioItem>
))
EnhancedMenuRadioItem.displayName = MenuPrimitive.RadioItem.displayName

const EnhancedMenuLabel = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-[var(--ds-color-text-muted]",
      inset && "pl-8",
      className
    )}
    {...props}
  />
))
EnhancedMenuLabel.displayName = MenuPrimitive.Label.displayName

const EnhancedMenuSeparator = React.forwardRef<
  React.ElementRef<typeof MenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-[var(--ds-color-border-default]", className)}
    {...props}
  />
))
EnhancedMenuSeparator.displayName = MenuPrimitive.Separator.displayName

const EnhancedMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-[var(--ds-color-text-muted]", className)}
      {...props}
    />
  )
}
EnhancedMenuShortcut.displayName = "EnhancedMenuShortcut"

interface EnhancedMenuItemWithIconProps
  extends React.ComponentPropsWithoutRef<typeof EnhancedMenuItem> {
  icon?: React.ReactNode
  shortcut?: string
}

const EnhancedMenuItemWithIcon = React.forwardRef<
  React.ElementRef<typeof EnhancedMenuItem>,
  EnhancedMenuItemWithIconProps
>(({ className, icon, shortcut, children, ...props }, ref) => (
  <EnhancedMenuItem
    ref={ref}
    className={cn("flex items-center gap-2", className)}
    {...props}
  >
    {icon && <div className="flex-shrink-0">{icon}</div>}
    <span className="flex-1">{children}</span>
    {shortcut && <EnhancedMenuShortcut>{shortcut}</EnhancedMenuShortcut>}
  </EnhancedMenuItem>
))
EnhancedMenuItemWithIcon.displayName = "EnhancedMenuItemWithIcon"

interface EnhancedMenuDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
}

const EnhancedMenuDivider = React.forwardRef<HTMLDivElement, EnhancedMenuDividerProps>(
  ({ className, label, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative -mx-1 my-1", className)}
      {...props}
    >
      <div className="h-px bg-[var(--ds-color-border-default]" />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="px-2 text-xs text-[var(--ds-color-text-muted] bg-[var(--ds-color-bg-canvas]">
            {label}
          </span>
        </div>
      )}
    </div>
  )
)
EnhancedMenuDivider.displayName = "EnhancedMenuDivider"

export {
  EnhancedMenu,
  EnhancedMenuTrigger,
  EnhancedMenuContent,
  EnhancedMenuItem,
  EnhancedMenuItemWithIcon,
  EnhancedMenuCheckboxItem,
  EnhancedMenuRadioItem,
  EnhancedMenuLabel,
  EnhancedMenuSeparator,
  EnhancedMenuDivider,
  EnhancedMenuShortcut,
  EnhancedMenuGroup,
  EnhancedMenuPortal,
  EnhancedMenuSub,
  EnhancedMenuSubContent,
  EnhancedMenuSubTrigger,
  EnhancedMenuRadioGroup,
}