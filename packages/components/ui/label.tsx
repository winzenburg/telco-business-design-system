import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "../utils/cn"
import { Label as TypographyLabel } from "./typography"

export type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    data-slot="label"
    className={cn(
      "inline-flex items-center gap-1 text-sm font-medium text-[var(--ds-color-text-primary)] leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      className
    )}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
