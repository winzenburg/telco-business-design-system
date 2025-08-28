import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"
import { Title, Body } from "./typography"

// Table component following Comcast Business Design System
// Colors: Canvas background, border tokens, surface hover states
// Typography: Montserrat for headers, Lato for content

const tableVariants = cva(
  // Base styles using design system colors and typography
  "w-full caption-bottom border-collapse bg-[var(--ds-color-bg-canvas] opacity-100",
  {
    variants: {
      variant: {
        default: "border border-[var(--ds-color-border-default]",
        striped: "border border-[var(--ds-color-border-default] [&_tbody_tr:nth-child(even)]:bg-[var(--ds-color-bg-surface]",
        bordered: "border border-[var(--ds-color-border-default] [&_td]:border [&_th]:border [&_td]:border-[var(--ds-color-border-default] [&_th]:border-[var(--ds-color-border-default]",
      },
      size: {
        sm: "[&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2",
        default: "[&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3",
        lg: "[&_th]:px-6 [&_th]:py-4 [&_td]:px-6 [&_td]:py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TableProps
  extends React.ComponentProps<"table">,
    VariantProps<typeof tableVariants> {}

function Table({ className, variant, size, ...props }: TableProps) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto rounded-lg border border-[var(--ds-color-border-default] bg-[var(--ds-color-bg-canvas] shadow-sm opacity-100"
    >
      <table
        data-slot="table"
        className={cn(tableVariants({ variant, size }), className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "bg-[var(--ds-color-bg-surface] [&_tr]:border-b [&_tr]:border-[var(--ds-color-border-default] [&_th]:font-primary [&_th]:text-[var(--ds-color-text-primary] [&_th]:font-semibold [&_th]:text-left",
        className
      )}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        "[&_tr:last-child]:border-0 [&_tr]:border-b [&_tr]:border-[var(--ds-color-border-default] [&_tr]:hover:bg-[var(--ds-color-bg-surface] [&_tr]:transition-colors [&_td]:font-secondary [&_td]:text-[var(--ds-color-text-primary]",
        className
      )}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-[var(--ds-color-[^]]*] border-t border-[var(--ds-color-[^]]*] font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-[var(--ds-color-border-default] transition-colors hover:bg-[var(--ds-color-bg-surface] data-[state=selected]:bg-[var(--ds-color-bg-surface]",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-12 px-4 text-left align-middle font-primary font-semibold text-[var(--ds-color-text-primary] whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-4 py-3 align-middle font-secondary text-[var(--ds-color-text-primary] whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-[var(--ds-color-[^]]*] mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
