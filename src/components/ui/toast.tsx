import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "../../utils/cn"

const ToastProvider = ToastPrimitive.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitive.Viewport.displayName

const toastVariants = cva(
  [
    "group pointer-events-auto relative flex w-full max-w-md items-start gap-4 overflow-hidden rounded-xl",
    "min-h-[48px] p-4 shadow-lg transition-all duration-300",
    // Animation states
    "data-[swipe=cancel]:translate-x-0",
    "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]", 
    "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
    "data-[swipe=move]:transition-none",
    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out",
    "data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full",
    "data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    // Focus states
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        default: [
          "border border-neutral-200 bg-white text-neutral-900",
          "shadow-[0_3px_14px_rgba(0,0,0,0.12)]"
        ],
        success: [
          "border border-green-200 bg-green-50 text-green-800",
          "shadow-[0_3px_14px_rgba(34,197,94,0.2)]"
        ],
        warning: [
          "border border-yellow-200 bg-yellow-50 text-yellow-800", 
          "shadow-[0_3px_14px_rgba(245,158,11,0.2)]"
        ],
        destructive: [
          "border border-red-200 bg-red-50 text-red-800",
          "shadow-[0_3px_14px_rgba(239,68,68,0.2)]"
        ],
        info: [
          "border border-blue-200 bg-blue-50 text-blue-800",
          "shadow-[0_3px_14px_rgba(13,98,255,0.2)]"
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitive.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitive.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(
      [
        "inline-flex h-9 shrink-0 items-center justify-center rounded-lg px-3",
        "text-sm font-medium transition-colors duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        // Default variant
        "text-blue-600 hover:bg-blue-100 active:bg-blue-200",
        // Destructive variant styles
        "group-[.destructive]:text-red-600 group-[.destructive]:hover:bg-red-100 group-[.destructive]:active:bg-red-200",
        // Success variant styles  
        "group-[.success]:text-green-600 group-[.success]:hover:bg-green-100 group-[.success]:active:bg-green-200",
        // Warning variant styles
        "group-[.warning]:text-yellow-700 group-[.warning]:hover:bg-yellow-100 group-[.warning]:active:bg-yellow-200",
        // Info variant styles
        "group-[.info]:text-blue-700 group-[.info]:hover:bg-blue-100 group-[.info]:active:bg-blue-200",
      ],
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitive.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={cn(
      [
        "absolute right-2 top-2 rounded-lg p-2",
        "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100",
        "transition-all duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "group-hover:opacity-100 opacity-70",
        // Variant-specific close button colors
        "group-[.destructive]:text-red-600 group-[.destructive]:hover:text-red-700 group-[.destructive]:hover:bg-red-100",
        "group-[.success]:text-green-600 group-[.success]:hover:text-green-700 group-[.success]:hover:bg-green-100",
        "group-[.warning]:text-yellow-700 group-[.warning]:hover:text-yellow-800 group-[.warning]:hover:bg-yellow-100",
        "group-[.info]:text-blue-700 group-[.info]:hover:text-blue-800 group-[.info]:hover:bg-blue-100",
      ],
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitive.Close>
))
ToastClose.displayName = ToastPrimitive.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn("text-sm font-medium leading-5", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitive.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn("text-sm leading-5 opacity-90 mt-1", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitive.Description.displayName

// Toast content wrapper for better layout control
const ToastContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 min-w-0", className)}
    {...props}
  />
))
ToastContent.displayName = "ToastContent"

// Toast icon container following MD3 patterns
const ToastIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-shrink-0 w-6 h-6 mt-0.5", className)}
    {...props}
  />
))
ToastIcon.displayName = "ToastIcon"

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ToastContent,
  ToastIcon,
}