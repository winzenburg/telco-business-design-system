"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../utils/cn"

// List container variants
const listVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "bg-white",
        elevated: "bg-white shadow-sm border border-[var(--ds-color-border-muted)] rounded-lg",
        outlined: "border border-[var(--ds-color-border-muted)] rounded-lg",
      },
      density: {
        default: "",
        compact: "[&_[data-list-item]]:py-2",
        comfortable: "[&_[data-list-item]]:py-4",
      }
    },
    defaultVariants: {
      variant: "default",
      density: "default",
    },
  }
)

// List item variants
const listItemVariants = cva(
  [
    "flex items-center w-full px-4 py-3 text-left transition-colors duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "hover:bg-[var(--ds-color-bg-surface)] active:bg-[var(--ds-color-border-muted)]",
        clickable: "cursor-pointer hover:bg-[var(--ds-color-bg-surface)] active:bg-[var(--ds-color-border-muted)]",
        selected: "bg-[var(--ds-color-intent-primary)]/10 text-[var(--ds-color-intent-primary)] hover:bg-[var(--ds-color-intent-primary)]/15",
        disabled: "opacity-50 cursor-not-allowed",
      },
      size: {
        sm: "min-h-[48px] py-2",
        md: "min-h-[56px] py-3", 
        lg: "min-h-[72px] py-4",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

// List item content variants for different line heights
const listItemContentVariants = cva(
  "flex-1 min-w-0", // min-w-0 for text truncation
  {
    variants: {
      lines: {
        one: "flex items-center",
        two: "flex flex-col justify-center gap-1",
        three: "flex flex-col justify-center gap-1",
      }
    },
    defaultVariants: {
      lines: "one",
    },
  }
)

// List root component
const List = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof listVariants>
>(({ className, variant, density, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(listVariants({ variant, density }), className)}
    role="list"
    {...props}
  />
))
List.displayName = "List"

// List item component
const ListItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & 
  VariantProps<typeof listItemVariants> & {
    asChild?: boolean
    selected?: boolean
    disabled?: boolean
  }
>(({ className, variant, size, asChild = false, selected, disabled, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"
  
  const computedVariant = selected ? "selected" : disabled ? "disabled" : variant

  return (
    <Comp
      ref={ref}
      className={cn(listItemVariants({ variant: computedVariant, size }), className)}
      role="listitem"
      data-list-item
      data-selected={selected}
      data-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    />
  )
})
ListItem.displayName = "ListItem"

// List item content wrapper
const ListItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof listItemContentVariants>
>(({ className, lines, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(listItemContentVariants({ lines }), className)}
    {...props}
  />
))
ListItemContent.displayName = "ListItemContent"

// List item leading element (icon, avatar, etc.)
const ListItemLeading = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      ref={ref}
      className={cn("flex items-center justify-center mr-4 flex-shrink-0", className)}
      {...props}
    />
  )
})
ListItemLeading.displayName = "ListItemLeading"

// List item trailing element (icons, text, actions)
const ListItemTrailing = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean
  }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      ref={ref}
      className={cn("flex items-center ml-4 flex-shrink-0", className)}
      {...props}
    />
  )
})
ListItemTrailing.displayName = "ListItemTrailing"

// List item primary text
const ListItemText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-sm font-medium text-[var(--ds-color-text-primary)] truncate leading-5",
      className
    )}
    {...props}
  />
))
ListItemText.displayName = "ListItemText"

// List item secondary text
const ListItemSecondaryText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-xs text-[var(--ds-color-text-muted)] truncate leading-4 mt-0.5",
      className
    )}
    {...props}
  />
))
ListItemSecondaryText.displayName = "ListItemSecondaryText"

// List item supporting text (third line)
const ListItemSupportingText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-xs text-[var(--ds-color-text-muted)] truncate leading-4 mt-0.5",
      className
    )}
    {...props}
  />
))
ListItemSupportingText.displayName = "ListItemSupportingText"

// List section component for grouping
const ListSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("py-2", className)}
    role="group"
    {...props}
  />
))
ListSection.displayName = "ListSection"

// List section header
const ListSectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-4 py-2 text-xs font-semibold text-[var(--ds-color-text-muted)] uppercase tracking-wider",
      className
    )}
    role="heading"
    aria-level={3}
    {...props}
  />
))
ListSectionHeader.displayName = "ListSectionHeader"

// List divider
const ListDivider = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn("border-0 border-t border-[var(--ds-color-border-muted)] mx-4", className)}
    role="separator"
    {...props}
  />
))
ListDivider.displayName = "ListDivider"

export {
  List,
  ListItem,
  ListItemContent,
  ListItemLeading,
  ListItemTrailing,
  ListItemText,
  ListItemSecondaryText,
  ListItemSupportingText,
  ListSection,
  ListSectionHeader,
  ListDivider,
  listVariants,
  listItemVariants,
  listItemContentVariants,
}