import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#E8EAEF] text-[#2B2D3F] hover:bg-[#E8EAEF]/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-red-500 text-white hover:bg-red-500/80",
        outline: "text-foreground",
        success: "border-transparent bg-green-100 text-green-800 hover:bg-green-100/80",
        warning: "border-transparent bg-orange-100 text-orange-800 hover:bg-orange-100/80",
        info: "border-transparent bg-[#0D62FF]/10 text-[#0D62FF] hover:bg-[#0D62FF]/20",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }