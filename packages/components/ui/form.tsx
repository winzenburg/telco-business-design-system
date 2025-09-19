import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"
import { Title, Body, Label as TypographyLabel } from "./typography"

// Form component following Comcast Business Design System
// Typography: Using design system tokens for proper theming and accessibility

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
      <TypographyLabel
        className={cn(
          "leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          error ? "text-[var(--ds-color-intent-destructive)]" : "text-[var(--ds-color-text-primary)]",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {required && <span className="ml-1 text-[var(--ds-color-intent-destructive)]">*</span>}
      </TypographyLabel>
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
          error ? "text-[var(--ds-color-intent-destructive)]" : "text-[var(--ds-color-text-muted)]",
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
      <Body
        size="xs"
        weight="semibold"
        as="p"
        className={cn(
          {
            "text-[var(--ds-color-intent-destructive)]": type === "error",
            "text-[var(--ds-color-intent-success)]": type === "success",
            "text-[var(--ds-color-intent-warning)]": type === "warning",
            "text-[var(--ds-color-intent-info)]": type === "info",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Body>
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
              <Title level={4} weight="semibold" className="text-[var(--ds-color-text-primary)]">
                {title}
              </Title>
            )}
            {description && (
              <Body size="m" className="text-[var(--ds-color-text-muted)]">
                {description}
              </Body>
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