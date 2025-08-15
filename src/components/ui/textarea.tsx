import * as React from "react"

import { cn } from "../../utils/cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex w-full rounded-[4px] border border-gray-400 bg-white px-[13px] py-[9px] font-secondary text-black transition-colors placeholder:text-gray-600 placeholder:font-normal focus-visible:outline-none focus-visible:border-[#0D62FF] focus-visible:ring-2 focus-visible:ring-[#0D62FF] focus-visible:ring-offset-2 hover:border-[#2B2D3F] disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50 overflow-hidden placeholder:overflow-hidden placeholder:text-ellipsis placeholder:leading-[130%] placeholder:tracking-normal selection:bg-gray-600",
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
