import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../utils/cn"

// Form component following Comcast Business Design System
// Typography: Default body text using #2B2D3F, labels and helper text as per design system

const formVariants = cva(
  "space-y-6",
  {
    variants: {
      layout: {
        vertical: "space-y-6",
        horizontal: "space-y-4",
        inline: "flex flex-wrap gap-4 items-end",
      },
    },
    defaultVariants: {
      layout: "vertical",
    },
  }
)

export interface FormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, layout, children, ...props }, ref) => {
    return (
      <form
        className={cn(formVariants({ layout }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </form>
    )
  }
)
Form.displayName = "Form"

// Form Field Container
export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Show error state
   */
  error?: boolean
  /**
   * Required field indicator
   */
  required?: boolean
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, error = false, required = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "space-y-2",
          error && "space-y-1",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)
FormField.displayName = "FormField"

// Form Label
export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Show required indicator
   */
  required?: boolean
  /**
   * Show error state
   */
  error?: boolean
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, required = false, error = false, children, ...props }, ref) => {
    return (
      <label
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          error ? "text-red-500" : "text-[#2B2D3F]",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
    )
  }
)
FormLabel.displayName = "FormLabel"

// Form Description/Helper Text
export interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Show error state
   */
  error?: boolean
}

const FormDescription = React.forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, error = false, ...props }, ref) => {
    return (
      <p
        className={cn(
          "text-xs",
          error ? "text-red-500" : "text-[#70717D]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
FormDescription.displayName = "FormDescription"

// Form Message (for validation feedback)
export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Message type
   */
  type?: "error" | "success" | "warning" | "info"
}

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, type = "error", children, ...props }, ref) => {
    if (!children) return null

    return (
      <p
        className={cn(
          "text-xs font-medium",
          {
            "text-red-500": type === "error",
            "text-green-600": type === "success", 
            "text-orange-500": type === "warning",
            "text-[#0D62FF]": type === "info",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    )
  }
)
FormMessage.displayName = "FormMessage"

// Form Section (for grouping related fields)
export interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Section title
   */
  title?: string
  /**
   * Section description
   */
  description?: string
}

const FormSection = React.forwardRef<HTMLDivElement, FormSectionProps>(
  ({ className, title, description, children, ...props }, ref) => {
    return (
      <div
        className={cn("space-y-4", className)}
        ref={ref}
        {...props}
      >
        {(title || description) && (
          <div className="space-y-1">
            {title && (
              <h3 className="text-lg font-semibold text-[#2B2D3F]">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm text-[#70717D]">
                {description}
              </p>
            )}
          </div>
        )}
        <div className="space-y-4">
          {children}
        </div>
      </div>
    )
  }
)
FormSection.displayName = "FormSection"

// Form Actions (for submit/cancel buttons)
export interface FormActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Alignment of actions
   */
  align?: "left" | "center" | "right"
}

const FormActions = React.forwardRef<HTMLDivElement, FormActionsProps>(
  ({ className, align = "right", children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex gap-3 pt-4",
          {
            "justify-start": align === "left",
            "justify-center": align === "center", 
            "justify-end": align === "right",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)
FormActions.displayName = "FormActions"

export {
  Form,
  FormField,
  FormLabel,
  FormDescription,
  FormMessage,
  FormSection,
  FormActions,
  formVariants,
}