"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils/cn"
import { Icon } from "../../icons/src/Icon"
import { Skeleton } from "./skeleton"

// Select component following Comcast Business Design System patterns
// Consistent with Input component styling and interaction states

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

const selectTriggerVariants = cva(
  // Base styles matching Input component
  "flex w-full items-center justify-between gap-2 rounded-[4px] border bg-[var(--ds-color-bg-canvas] px-[13px] py-[9px] text-sm transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 text-[var(--ds-color-text-primary] font-secondary placeholder:text-[var(--ds-color-text-muted]",
  {
    variants: {
      variant: {
        default: "border-[var(--ds-color-border-default] hover:border-[var(--ds-color-text-muted] hover:bg-[var(--ds-color-bg-surface] hover:shadow-[--ds.shadow.sm] focus-visible:border-[var(--ds-color-border-default] focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] data-[state=open]:border-[var(--ds-color-border-default] data-[state=open]:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)]",
        error: "border-[var(--ds-color-intent-destructive] hover:border-[var(--ds-color-intent-destructive]/80 focus-visible:border-[var(--ds-color-intent-destructive] focus-visible:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)] data-[state=open]:border-[var(--ds-color-intent-destructive] data-[state=open]:shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)]",
      },
      size: {
        default: "h-10 px-[13px] py-[9px]",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-12 px-4 py-3 text-base",
      },
      selectState: {
        default: "",
        hover: "border-[var(--ds-color-text-muted] bg-[var(--ds-color-bg-surface] shadow-[--ds.shadow.sm]",
        focused: "border-[var(--ds-color-border-default] shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)]",
        open: "border-[var(--ds-color-border-default] shadow-[0_0_0_1.5px_var(--ds-color-intent-primary)]",
        disabled: "border-[var(--ds-color-border-default] bg-[var(--ds-color-bg-surface] cursor-not-allowed opacity-50",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      selectState: "default",
    },
  }
)

export interface SelectTriggerProps extends React.ComponentProps<typeof SelectPrimitive.Trigger>, VariantProps<typeof selectTriggerVariants> {
  error?: boolean
  selectState?: "default" | "hover" | "focused" | "open" | "disabled"
}

function SelectTrigger({
  className,
  variant,
  size = "default",
  error = false,
  selectState,
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        selectTriggerVariants({
          variant: error ? "error" : variant,
          size,
          selectState,
        }),
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <Icon name="chevron" size={16} className="rotate-90 shrink-0 text-[var(--ds-color-text-muted]" decorative />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-[4px] border border-[var(--ds-color-[^]]*] bg-[var(--ds-color-[^]]*] text-[var(--ds-color-[^]]*] shadow-lg opacity-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        style={{ opacity: 1, ...props.style }}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-py-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("py-1.5 pl-3 pr-8 text-xs font-secondary font-semibold text-[var(--ds-color-text-muted]", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-[4px] py-2 pl-3 pr-8 text-sm font-secondary transition-colors focus:bg-[var(--ds-color-bg-surface] focus:text-[var(--ds-color-text-primary] focus:outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-[var(--ds-color-bg-surface] hover:text-[var(--ds-color-text-primary]",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Icon name="check" size={16} className="text-[var(--ds-color-intent-primary]" decorative />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText className="truncate">{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("-mx-1 my-1 h-px bg-[var(--ds-color-border-default]", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-[var(--ds-color-text-muted]",
        className
      )}
      {...props}
    >
      <Icon name="chevron" size={16} color="currentColor" className="-rotate-90" decorative />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-[var(--ds-color-text-muted]",
        className
      )}
      {...props}
    >
      <Icon name="chevron" size={16} color="currentColor" className="rotate-90" decorative />
    </SelectPrimitive.ScrollDownButton>
  )
}

// Comprehensive Select wrapper with label, error states, etc.
export interface SelectWrapperProps extends React.ComponentProps<typeof SelectPrimitive.Root> {
  label?: string
  required?: boolean
  subcopy?: string
  hintText?: string
  errorMessage?: string
  error?: boolean
  skeleton?: boolean
  size?: "sm" | "default" | "lg"
  placeholder?: string
}

// Skeleton component for Select
function SelectSkeleton({
  size = "default",
  hasLabel = false,
  hasSubcopy = false,
  className,
  ...props
}: {
  size?: "sm" | "default" | "lg"
  hasLabel?: boolean
  hasSubcopy?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  const heights = {
    sm: "h-8",
    default: "h-10",
    lg: "h-12",
  }

  return (
    <div className={cn("space-y-2", className)} {...props}>
      {hasLabel && (
        <div className="space-y-1">
          <Skeleton className="h-4 w-24" />
          {hasSubcopy && <Skeleton className="h-3 w-32" />}
        </div>
      )}
      <Skeleton className={cn("w-full rounded-[4px]", heights[size])} />
    </div>
  )
}

const SelectWrapper = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  SelectWrapperProps
>(({ 
  label,
  required = false,
  subcopy,
  hintText,
  errorMessage,
  error = false,
  skeleton = false,
  size = "default",
  placeholder,
  children,
  ...props
}, _ref) => {
  if (skeleton) {
    return (
      <SelectSkeleton
        size={size}
        hasLabel={!!label}
        hasSubcopy={!!subcopy}
      />
    )
  }

  const displayHintText = error && errorMessage ? errorMessage : hintText

  return (
    <div className="space-y-0">
      {label && (
        <div className="space-y-1 mb-2">
          <label className="flex items-center gap-1 text-sm font-medium text-[var(--ds-color-[^]]*]) font-primary">
            {label}
            {required && (
              <span 
                className="text-[var(--ds-color-[^]]*]) font-secondary"
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '130%',
                  letterSpacing: '0'
                }}
              >
                *
              </span>
            )}
          </label>
          {subcopy && (
            <p className="text-[var(--ds-color-text-muted] font-secondary font-normal leading-[130%] tracking-normal" style={{ 
              fontSize: '14px', 
              lineHeight: '130%',
              fontWeight: 400,
              letterSpacing: '0',
              fontStyle: 'normal'
            }}>
              {subcopy}
            </p>
          )}
        </div>
      )}
      
      <Select {...props}>
        <SelectTrigger error={error} size={size}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {children}
        </SelectContent>
      </Select>
      
      {displayHintText && (
        <p className={cn(
          "font-secondary font-normal leading-[130%] tracking-normal mt-1",
          error ? "text-[var(--ds-color-intent-destructive]" : "text-[var(--ds-color-text-muted]"
        )} style={{ 
          fontSize: '14px', 
          lineHeight: '130%',
          fontWeight: 400,
          letterSpacing: '0',
          fontStyle: 'normal',
          marginTop: '4px'
        }}>
          {displayHintText}
        </p>
      )}
    </div>
  )
})

SelectWrapper.displayName = "SelectWrapper"

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectWrapper,
  SelectSkeleton,
}
