import * as React from "react"

import { cn } from "../utils/cn"

export type TextareaProps = React.ComponentProps<"textarea">

function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex w-full rounded border border-[var(--ds-color-neutral-400)] bg-[var(--ds-color-bg-canvas)] px-3 py-2 font-secondary text-sm text-[var(--ds-color-text-primary)] transition-colors placeholder:text-[var(--ds-color-text-muted)] placeholder:font-normal focus-visible:outline-none focus-visible:border-[var(--ds-color-intent-primary)] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2 hover:border-[var(--ds-color-text-primary)] disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--ds-color-bg-surface)] overflow-hidden placeholder:overflow-hidden placeholder:text-ellipsis placeholder:leading-[130%] placeholder:tracking-normal selection:bg-[var(--ds-color-intent-primary)]/20 min-h-20",
        className
      )}
      style={props.style}
      {...props}
    />
  )
}

export { Textarea }
