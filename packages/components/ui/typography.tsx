import * as React from "react"
import { cn } from "../utils/cn"
import { 
  typeScale, 
  fontFamilies, 
  semanticTypography,
  type TypeScaleCategory, 
  type TypeScaleVariant 
} from "../../tokens/typography-consolidated"

// Typography utility component that provides easy access to the design system typography

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 
    | 'display-2xl' | 'display-xl' | 'display-lg'
    | 'title-5xl' | 'title-4xl' | 'title-3xl' | 'title-2xl' | 'title-xl' | 'title-l' | 'title-m'
    | 'title-3xl-medium' | 'title-2xl-medium'
    | 'title-5xl-semibold' | 'title-4xl-semibold' | 'title-xl-semibold' | 'title-l-semibold' | 'title-m-semibold'
    | 'heading-4xl' | 'heading-3xl' | 'heading-2xl' | 'heading-xl' | 'heading-lg'
    | 'body-xl' | 'body-l' | 'body-m' | 'body-s' | 'body-xs'
    | 'body-l-semibold' | 'body-m-semibold' | 'body-s-semibold' | 'body-xs-semibold'
    | 'button-lg' | 'button-base' | 'button-sm'
    | 'label-base' | 'label-sm'
    | 'code-inline' | 'code-block'
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body-l', as, children, style, ...props }, ref) => {
    // Determine the component to render
    const Component = as || getDefaultComponent(variant)
    
    // Get styles for the variant
    const variantStyles = getVariantStyles(variant)
    
    return (
      React.createElement(
        Component,
        {
          className: cn(getVariantClassName(variant), className),
          style: {
            ...variantStyles,
            ...style
          },
          ref,
          ...props
        },
        children
      )
    )
  }
)

Typography.displayName = "Typography"

// Helper functions
function getDefaultComponent(variant: string): keyof JSX.IntrinsicElements {
  if (variant.startsWith('display') || variant.startsWith('title-5xl') || variant.startsWith('title-4xl')) return 'h1'
  if (variant.startsWith('title-3xl') || variant.startsWith('heading-4xl')) return 'h1'
  if (variant.startsWith('title-2xl') || variant.startsWith('heading-3xl')) return 'h2'
  if (variant.startsWith('title-xl') || variant.startsWith('heading-2xl')) return 'h3'
  if (variant.startsWith('title-l') || variant.startsWith('heading-xl')) return 'h4'
  if (variant.startsWith('title-m') || variant.startsWith('heading-lg')) return 'h5'
  if (variant.startsWith('button')) return 'span'
  if (variant.startsWith('label')) return 'label'
  if (variant.startsWith('code')) return 'code'
  return 'p'
}

function getVariantStyles(variant: string): React.CSSProperties {
  // Parse variant and get corresponding styles
  const [category, size, weight] = variant.split('-')
  
  let styles: any = {}
  
  switch (category) {
    case 'display':
      styles = typeScale.display[size as keyof typeof typeScale.display]
      break
    case 'title':
      if (weight === 'medium') {
        styles = typeScale.titleMedium[size as keyof typeof typeScale.titleMedium]
      } else if (weight === 'semibold') {
        styles = typeScale.titleSemibold[size as keyof typeof typeScale.titleSemibold]
      } else {
        styles = typeScale.title[size as keyof typeof typeScale.title]
      }
      break
    case 'heading':
      styles = typeScale.heading[size as keyof typeof typeScale.heading]
      break
    case 'body':
      if (weight === 'semibold') {
        styles = typeScale.bodySemibold[size as keyof typeof typeScale.bodySemibold]
      } else {
        styles = typeScale.body[size as keyof typeof typeScale.body]
      }
      break
    case 'button':
      styles = typeScale.interactive.button[size as keyof typeof typeScale.interactive.button]
      break
    case 'label':
      styles = typeScale.interactive.label[size as keyof typeof typeScale.interactive.label]
      break
    case 'code':
      styles = semanticTypography.code[size as keyof typeof semanticTypography.code]
      break
  }
  
  // Add appropriate font family
  let fontFamily = fontFamilies.secondary.stack // Default to Lato
  if (category === 'display' || category === 'title' || category === 'heading' || category === 'button' || category === 'label') {
    fontFamily = fontFamilies.primary.stack // Montserrat for headings and UI
  } else if (category === 'code') {
    fontFamily = fontFamilies.mono.stack // Monospace for code
  }
  
  return {
    fontFamily,
    fontSize: styles?.fontSize,
    fontWeight: styles?.fontWeight,
    lineHeight: styles?.lineHeight,
    letterSpacing: styles?.letterSpacing === 'normal' ? '0' : styles?.letterSpacing,
  }
}

function getVariantClassName(variant: string): string {
  // Return appropriate Tailwind classes for the variant
  return `text-${variant.replace('_', '-')}`
}

// Semantic typography components for common use cases
export const Title = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'> & { 
  level?: 1 | 2 | 3 | 4 | 5 
  weight?: 'normal' | 'medium' | 'semibold'
}>(
  ({ level = 1, weight = 'normal', as, ...props }, ref) => {
    const variants = {
      1: weight === 'semibold' ? 'title-5xl-semibold' : 'title-5xl',
      2: weight === 'semibold' ? 'title-4xl-semibold' : 'title-4xl', 
      3: weight === 'medium' ? 'title-3xl-medium' : weight === 'semibold' ? 'title-3xl' : 'title-3xl',
      4: weight === 'medium' ? 'title-2xl-medium' : 'title-2xl',
      5: weight === 'semibold' ? 'title-xl-semibold' : 'title-xl',
    }
    
    const defaultElements = { 1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5' } as const
    
    return (
      <Typography
        variant={variants[level] as any}
        as={as || defaultElements[level]}
        ref={ref}
        {...props}
      />
    )
  }
)

export const Body = React.forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant'> & { 
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
  weight?: 'normal' | 'semibold'
}>(
  ({ size = 'l', weight = 'normal', as = 'p', ...props }, ref) => {
    const variant = weight === 'semibold' ? `body-${size}-semibold` : `body-${size}`
    
    return (
      <Typography
        variant={variant as any}
        as={as}
        ref={ref}
        {...props}
      />
    )
  }
)

export const Label = React.forwardRef<HTMLLabelElement, Omit<TypographyProps, 'variant'> & { 
  size?: 'base' | 'sm'
}>(
  ({ size = 'base', as = 'label', ...props }, ref) => {
    return (
      <Typography
        variant={`label-${size}` as any}
        as={as}
        ref={ref}
        {...props}
      />
    )
  }
)

export const Code = React.forwardRef<HTMLElement, Omit<TypographyProps, 'variant'> & { 
  inline?: boolean
}>(
  ({ inline = false, as, ...props }, ref) => {
    return (
      <Typography
        variant={inline ? 'code-inline' : 'code-block' as any}
        as={as || (inline ? 'code' : 'pre')}
        ref={ref}
        {...props}
      />
    )
  }
)

export { Typography }