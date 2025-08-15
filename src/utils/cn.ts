import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge class names with Tailwind CSS conflict resolution
 * Combines clsx for conditional classes and tailwind-merge for conflict resolution
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Type-safe class name utility for design system components
 * Provides better TypeScript support for conditional styling
 */
export function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Utility for creating variant-based class names
 * Useful for component variants that might use Tailwind in the future
 */
export function variantClasses(
  baseClasses: string,
  variants: Record<string, string> = {},
  variantProps: Record<string, string | undefined> = {}
) {
  const variantClasses = Object.entries(variantProps)
    .map(([key, value]) => value && variants[`${key}-${value}`])
    .filter(Boolean);

  return cn(baseClasses, ...variantClasses);
} 