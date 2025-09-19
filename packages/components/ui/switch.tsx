import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "../utils/cn"

export type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-[var(--ds-color-intent-primary)] data-[state=unchecked]:bg-[var(--ds-color-bg-surface)]",
      "focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-[var(--ds-color-bg-canvas)]",
      "hover:data-[state=checked]:bg-[var(--ds-color-intent-primary-hover)] hover:data-[state=unchecked]:bg-[var(--ds-color-bg-muted)]",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform",
        "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        "bg-[var(--ds-color-bg-canvas)] data-[state=checked]:bg-[var(--ds-color-bg-canvas)]"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }