import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"
import { Title, Body } from "./typography"

// Table component following Comcast Business Design System
// Colors: White background, #F1F2F6 borders, #F9F9FA hover states
// Typography: Montserrat for headers, Lato for content

const tableVariants = cva(
  // Base styles using design system colors and typography
  "w-full caption-bottom border-collapse bg-white",
  {
    variants: {
      variant: {
        default: "border border-[#F1F2F6]",
        striped: "border border-[#F1F2F6] [&_tbody_tr:nth-child(even)]:bg-[#F9F9FA]",
        bordered: "border border-[#F1F2F6] [&_td]:border [&_th]:border [&_td]:border-[#F1F2F6] [&_th]:border-[#F1F2F6]",
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
      className="relative w-full overflow-x-auto rounded-lg border border-[#F1F2F6] bg-white shadow-sm"
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
        "bg-[#F9F9FA] [&_tr]:border-b [&_tr]:border-[#F1F2F6] [&_th]:font-primary [&_th]:text-[#2B2D3F] [&_th]:font-semibold [&_th]:text-left",
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
        "[&_tr:last-child]:border-0 [&_tr]:border-b [&_tr]:border-[#F1F2F6] [&_tr]:hover:bg-[#F9F9FA] [&_tr]:transition-colors [&_td]:font-secondary [&_td]:text-[#424454]",
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
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
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
        "border-b border-[#F1F2F6] transition-colors hover:bg-[#F9F9FA] data-[state=selected]:bg-[#F9F9FA]",
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
        "h-12 px-4 text-left align-middle font-primary font-semibold text-[#2B2D3F] whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
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
        "px-4 py-3 align-middle font-secondary text-[#424454] whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
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
      className={cn("text-muted-foreground mt-4 text-sm", className)}
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
