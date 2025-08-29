import * as React from "react"

import { cn } from "../utils/cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex w-full rounded-[var(--ds-radius-sm)] border border-[var(--ds-color-border-default] bg-[var(--ds-color-bg-canvas] px-[13px] py-[9px] font-secondary text-[var(--ds-color-text-primary] transition-colors placeholder:text-[var(--ds-color-text-muted] placeholder:font-normal focus-visible:outline-none focus-visible:border-[var(--ds-color-intent-primary] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary] focus-visible:ring-offset-2 hover:border-[var(--ds-color-text-primary] disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--ds-color-bg-surface] overflow-hidden placeholder:overflow-hidden placeholder:text-ellipsis placeholder:leading-[130%] placeholder:tracking-normal selection:bg-[var(--ds-color-intent-primary]/20",
        className
      )}
      style={{ 
        fontSize: '14px', 
        lineHeight: '18.2px',
        fontWeight: '400',
        letterSpacing: '0',
        minHeight: '80px',
        ...props.style
      }}
      {...props}
    />
  )
}

export { Textarea }
