import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge class names with Tailwind CSS conflict resolution
 * Combines clsx for conditional classes and tailwind-merge for conflict resolution
 *
 * This is the main utility for all design system components - use this instead
 * of manual class concatenation to ensure proper Tailwind class merging.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
