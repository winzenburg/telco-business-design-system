import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"
import { Title, Body } from "./typography"

// Card component following Comcast Business Design System
// Colors: Canvas background, border tokens for subdued borders, surface tokens for hover

const cardVariants = cva(
  // Base styles using design system colors
  "flex flex-col gap-6 rounded-xl !bg-white text-[var(--ds-color-text-primary)] shadow-sm transition-colors opacity-100",
  {
    variants: {
      variant: {
        default: "border border-[var(--ds-color-neutral-300)]",
        elevated: "border border-[var(--ds-color-neutral-300)] shadow-md",
        interactive: "border border-[var(--ds-color-neutral-300)] hover:bg-[var(--ds-color-bg-surface)] cursor-pointer",
        outlined: "border-2 border-[var(--ds-color-text-muted)]",
      },
      padding: {
        none: "",
        default: "py-6",
        compact: "py-4",
        spacious: "py-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

export interface CardProps 
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

function Card({ className, variant, padding, style, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, padding }), className)}
      style={{ backgroundColor: '#FFFFFF', ...style }}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <Title
      level={4}
      weight="semibold"
      data-slot="card-title"
      className={cn("text-[var(--ds-color-text-primary)]", className)}
      {...props}
    >
      {children}
    </Title>
  )
}

function CardDescription({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <Body
      size="m"
      data-slot="card-description"
      className={cn("text-[var(--ds-color-text-muted)]", className)}
      {...props}
    >
      {children}
    </Body>
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
