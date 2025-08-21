"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"
import { Body } from "./typography"

// Tabs component following Comcast Business Design System
// Colors: White background, #F1F2F6 borders, #0D62FF for active states
// Typography: Lato Medium for tab labels

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  // Base styles using design system colors
  "inline-flex w-fit items-center justify-center bg-white border border-[#F1F2F6] rounded-lg p-1",
  {
    variants: {
      variant: {
        default: "bg-white",
        enclosed: "bg-[#F9F9FA]",
        pills: "bg-transparent border-0 gap-1",
      },
      size: {
        sm: "h-8 text-sm",
        default: "h-10 text-sm",
        lg: "h-12 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

function TabsList({
  className,
  variant,
  size,
  ...props
}: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ variant, size }), className)}
      {...props}
    />
  )
}

const tabsTriggerVariants = cva(
  // Base styles using design system colors and typography
  "inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 font-secondary font-medium text-[#70717D] transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D62FF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-[#0D62FF] data-[state=active]:text-white data-[state=active]:shadow-sm hover:text-[#2B2D3F]",
        enclosed: "data-[state=active]:bg-white data-[state=active]:text-[#0D62FF] data-[state=active]:border data-[state=active]:border-[#0D62FF] hover:text-[#2B2D3F]",
        pills: "rounded-full border border-[#F1F2F6] data-[state=active]:bg-[#0D62FF] data-[state=active]:text-white data-[state=active]:border-[#0D62FF] hover:bg-[#F9F9FA]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

function TabsTrigger({
  className,
  variant,
  ...props
}: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "mt-4 rounded-lg bg-white p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D62FF] focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
