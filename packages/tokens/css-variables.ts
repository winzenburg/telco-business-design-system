/**
 * CSS Variables Helper - Comcast Business Design System
 * Provides TypeScript utilities for accessing CSS custom properties
 */

// CSS Variable name constants for type safety
export const CSS_VARIABLES = {
  // Brand Colors - Blue Scale
  'blue-50': '--ds-color-blue-50',
  'blue-100': '--ds-color-blue-100',
  'blue-200': '--ds-color-blue-200',
  'blue-300': '--ds-color-blue-300',
  'blue-400': '--ds-color-blue-400',
  'blue-500': '--ds-color-blue-500', // Primary Brand Blue
  'blue-600': '--ds-color-blue-600',
  'blue-700': '--ds-color-blue-700',
  'blue-800': '--ds-color-blue-800',
  'blue-900': '--ds-color-blue-900',

  // Brand Colors - Neutral Scale
  'neutral-50': '--ds-color-neutral-50',
  'neutral-100': '--ds-color-neutral-100',
  'neutral-200': '--ds-color-neutral-200',
  'neutral-300': '--ds-color-neutral-300',
  'neutral-400': '--ds-color-neutral-400',
  'neutral-500': '--ds-color-neutral-500',
  'neutral-600': '--ds-color-neutral-600',
  'neutral-700': '--ds-color-neutral-700',
  'neutral-800': '--ds-color-neutral-800',
  'neutral-900': '--ds-color-neutral-900',

  // Brand Colors - Navy Scale
  'navy-50': '--ds-color-navy-50',
  'navy-100': '--ds-color-navy-100',
  'navy-200': '--ds-color-navy-200',
  'navy-300': '--ds-color-navy-300',
  'navy-400': '--ds-color-navy-400',
  'navy-500': '--ds-color-navy-500',
  'navy-600': '--ds-color-navy-600',
  'navy-700': '--ds-color-navy-700',
  'navy-800': '--ds-color-navy-800',
  'navy-900': '--ds-color-navy-900',

  // Brand Colors - Black
  'black': '--ds-color-black',

  // Secondary Colors - Red Scale
  'red-50': '--ds-color-red-50',
  'red-100': '--ds-color-red-100',
  'red-200': '--ds-color-red-200',
  'red-300': '--ds-color-red-300',
  'red-400': '--ds-color-red-400',
  'red-500': '--ds-color-red-500',
  'red-600': '--ds-color-red-600',
  'red-700': '--ds-color-red-700',
  'red-800': '--ds-color-red-800',
  'red-900': '--ds-color-red-900',

  // Secondary Colors - Green Scale
  'green-50': '--ds-color-green-50',
  'green-100': '--ds-color-green-100',
  'green-200': '--ds-color-green-200',
  'green-300': '--ds-color-green-300',
  'green-400': '--ds-color-green-400',
  'green-500': '--ds-color-green-500',
  'green-600': '--ds-color-green-600',
  'green-700': '--ds-color-green-700',
  'green-800': '--ds-color-green-800',
  'green-900': '--ds-color-green-900',

  // Secondary Colors - Yellow Scale
  'yellow-50': '--ds-color-yellow-50',
  'yellow-100': '--ds-color-yellow-100',
  'yellow-200': '--ds-color-yellow-200',
  'yellow-300': '--ds-color-yellow-300',
  'yellow-400': '--ds-color-yellow-400',
  'yellow-500': '--ds-color-yellow-500',
  'yellow-600': '--ds-color-yellow-600',
  'yellow-700': '--ds-color-yellow-700',
  'yellow-800': '--ds-color-yellow-800',
  'yellow-900': '--ds-color-yellow-900',

  // Secondary Colors - Orange Scale
  'orange-50': '--ds-color-orange-50',
  'orange-100': '--ds-color-orange-100',
  'orange-200': '--ds-color-orange-200',
  'orange-300': '--ds-color-orange-300',
  'orange-400': '--ds-color-orange-400',
  'orange-500': '--ds-color-orange-500',
  'orange-600': '--ds-color-orange-600',
  'orange-700': '--ds-color-orange-700',
  'orange-800': '--ds-color-orange-800',
  'orange-900': '--ds-color-orange-900',

  // Secondary Colors - Purple Scale
  'purple-50': '--ds-color-purple-50',
  'purple-100': '--ds-color-purple-100',
  'purple-200': '--ds-color-purple-200',
  'purple-300': '--ds-color-purple-300',
  'purple-400': '--ds-color-purple-400',
  'purple-500': '--ds-color-purple-500',
  'purple-600': '--ds-color-purple-600',
  'purple-700': '--ds-color-purple-700',
  'purple-800': '--ds-color-purple-800',
  'purple-900': '--ds-color-purple-900',

  // Secondary Colors - Sky Scale
  'sky-50': '--ds-color-sky-50',
  'sky-100': '--ds-color-sky-100',
  'sky-200': '--ds-color-sky-200',
  'sky-300': '--ds-color-sky-300',
  'sky-400': '--ds-color-sky-400',
  'sky-500': '--ds-color-sky-500',
  'sky-600': '--ds-color-sky-600',
  'sky-700': '--ds-color-sky-700',
  'sky-800': '--ds-color-sky-800',
  'sky-900': '--ds-color-sky-900',

  // Secondary Colors - Teal Scale
  'teal-50': '--ds-color-teal-50',
  'teal-100': '--ds-color-teal-100',
  'teal-200': '--ds-color-teal-200',
  'teal-300': '--ds-color-teal-300',
  'teal-400': '--ds-color-teal-400',
  'teal-500': '--ds-color-teal-500',
  'teal-600': '--ds-color-teal-600',
  'teal-700': '--ds-color-teal-700',
  'teal-800': '--ds-color-teal-800',
  'teal-900': '--ds-color-teal-900',

  // Semantic Colors - Intent
  'intent-primary': '--ds-color-intent-primary',
  'intent-primary-hover': '--ds-color-intent-primary-hover',
  'intent-primary-active': '--ds-color-intent-primary-active',
  'intent-secondary': '--ds-color-intent-secondary',
  'intent-accent': '--ds-color-intent-accent',
  'intent-success': '--ds-color-intent-success',
  'intent-warning': '--ds-color-intent-warning',
  'intent-destructive': '--ds-color-intent-destructive',
  'intent-info': '--ds-color-intent-info',

  // Semantic Colors - Text
  'text-primary': '--ds-color-text-primary',
  'text-secondary': '--ds-color-text-secondary',
  'text-muted': '--ds-color-text-muted',
  'text-inverse': '--ds-color-text-inverse',
  'text-on-primary': '--ds-color-text-on-primary',
  'text-on-dark': '--ds-color-text-on-dark',

  // Semantic Colors - Background
  'bg-canvas': '--ds-color-bg-canvas',
  'bg-surface': '--ds-color-bg-surface',
  'bg-muted': '--ds-color-bg-muted',
  'bg-inverse': '--ds-color-bg-inverse',
  'bg-overlay': '--ds-color-bg-overlay',

  // Semantic Colors - Border
  'border-default': '--ds-color-border-default',
  'border-muted': '--ds-color-border-muted',
  'border-strong': '--ds-color-border-strong',
  'border-inverse': '--ds-color-border-inverse',

  // Semantic Colors - Interactive
  'interactive-primary': '--ds-color-interactive-primary',
  'interactive-hover': '--ds-color-interactive-hover',
  'interactive-active': '--ds-color-interactive-active',
  'interactive-disabled': '--ds-color-interactive-disabled',

  // Data Visualization - Categorical
  'chart-cat-1': '--ds-color-chart-cat-1',
  'chart-cat-2': '--ds-color-chart-cat-2',
  'chart-cat-3': '--ds-color-chart-cat-3',
  'chart-cat-4': '--ds-color-chart-cat-4',
  'chart-cat-5': '--ds-color-chart-cat-5',
  'chart-cat-6': '--ds-color-chart-cat-6',

  // Data Visualization - Sequential
  'chart-seq-1': '--ds-color-chart-seq-1',
  'chart-seq-2': '--ds-color-chart-seq-2',
  'chart-seq-3': '--ds-color-chart-seq-3',
  'chart-seq-4': '--ds-color-chart-seq-4',
  'chart-seq-5': '--ds-color-chart-seq-5',
  'chart-seq-6': '--ds-color-chart-seq-6',
  'chart-seq-7': '--ds-color-chart-seq-7',

  // Data Visualization - Signal
  'chart-positive': '--ds-color-chart-positive',
  'chart-low': '--ds-color-chart-low',
  'chart-medium': '--ds-color-chart-medium',
  'chart-high': '--ds-color-chart-high',
  'chart-critical': '--ds-color-chart-critical',
  'chart-neutral': '--ds-color-chart-neutral',

  // Shadows and Effects
  'shadow-sm': '--ds-shadow-sm',
  'shadow-md': '--ds-shadow-md',
  'shadow-lg': '--ds-shadow-lg',
  'shadow-xl': '--ds-shadow-xl',
  'focus-ring': '--ds-focus-ring',
  'focus-ring-offset': '--ds-focus-ring-offset',
} as const;

// Type definitions
export type CSSVariableKey = keyof typeof CSS_VARIABLES;
export type CSSVariableValue = typeof CSS_VARIABLES[CSSVariableKey];

/**
 * Get a CSS variable reference for use in CSS-in-JS or inline styles
 * @param key - The color token key
 * @returns CSS variable reference (e.g., "var(--ds-color-blue-500)")
 */
export function getCSSVariable(key: CSSVariableKey): string {
  return `var(${CSS_VARIABLES[key]})`;
}

/**
 * Get the computed CSS variable value from the DOM
 * @param key - The color token key
 * @param element - Element to get computed style from (defaults to document.documentElement)
 * @returns The computed color value (e.g., "#0D62FF")
 */
export function getComputedCSSVariable(
  key: CSSVariableKey,
  element: Element = document.documentElement
): string {
  const variableName = CSS_VARIABLES[key];
  return getComputedStyle(element).getPropertyValue(variableName).trim();
}

/**
 * Set a CSS variable value dynamically
 * @param key - The color token key
 * @param value - The new color value
 * @param element - Element to set the variable on (defaults to document.documentElement)
 */
export function setCSSVariable(
  key: CSSVariableKey,
  value: string,
  element: Element = document.documentElement
): void {
  const variableName = CSS_VARIABLES[key];
  (element as HTMLElement).style.setProperty(variableName, value);
}

/**
 * Theme utilities
 */
export const themeUtils = {
  /**
   * Set the theme on the document
   * @param theme - 'light' or 'dark'
   */
  setTheme(theme: 'light' | 'dark'): void {
    document.documentElement.setAttribute('data-theme', theme);
  },

  /**
   * Get the current theme
   * @returns Current theme or null if not set
   */
  getTheme(): 'light' | 'dark' | null {
    return document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null;
  },

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const currentTheme = this.getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  },

  /**
   * Check if the user prefers dark mode
   */
  prefersDarkMode(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  },

  /**
   * Set theme based on user preference if no theme is explicitly set
   */
  setThemeFromPreference(): void {
    if (!this.getTheme()) {
      this.setTheme(this.prefersDarkMode() ? 'dark' : 'light');
    }
  },
};

/**
 * Color palette groups for easier access
 */
export const colorPalettes = {
  // Primary Brand Colors
  blue: [
    'blue-50', 'blue-100', 'blue-200', 'blue-300', 'blue-400',
    'blue-500', 'blue-600', 'blue-700', 'blue-800', 'blue-900'
  ] as const,
  
  neutral: [
    'neutral-50', 'neutral-100', 'neutral-200', 'neutral-300', 'neutral-400',
    'neutral-500', 'neutral-600', 'neutral-700', 'neutral-800', 'neutral-900'
  ] as const,
  
  navy: [
    'navy-50', 'navy-100', 'navy-200', 'navy-300', 'navy-400',
    'navy-500', 'navy-600', 'navy-700', 'navy-800', 'navy-900'
  ] as const,

  // Secondary Brand Colors
  red: [
    'red-50', 'red-100', 'red-200', 'red-300', 'red-400',
    'red-500', 'red-600', 'red-700', 'red-800', 'red-900'
  ] as const,
  
  green: [
    'green-50', 'green-100', 'green-200', 'green-300', 'green-400',
    'green-500', 'green-600', 'green-700', 'green-800', 'green-900'
  ] as const,
  
  yellow: [
    'yellow-50', 'yellow-100', 'yellow-200', 'yellow-300', 'yellow-400',
    'yellow-500', 'yellow-600', 'yellow-700', 'yellow-800', 'yellow-900'
  ] as const,
  
  orange: [
    'orange-50', 'orange-100', 'orange-200', 'orange-300', 'orange-400',
    'orange-500', 'orange-600', 'orange-700', 'orange-800', 'orange-900'
  ] as const,
  
  purple: [
    'purple-50', 'purple-100', 'purple-200', 'purple-300', 'purple-400',
    'purple-500', 'purple-600', 'purple-700', 'purple-800', 'purple-900'
  ] as const,
  
  sky: [
    'sky-50', 'sky-100', 'sky-200', 'sky-300', 'sky-400',
    'sky-500', 'sky-600', 'sky-700', 'sky-800', 'sky-900'
  ] as const,
  
  teal: [
    'teal-50', 'teal-100', 'teal-200', 'teal-300', 'teal-400',
    'teal-500', 'teal-600', 'teal-700', 'teal-800', 'teal-900'
  ] as const,

  // Semantic Colors
  intent: [
    'intent-primary', 'intent-primary-hover', 'intent-primary-active',
    'intent-secondary', 'intent-accent', 'intent-success', 'intent-warning',
    'intent-destructive', 'intent-info'
  ] as const,
  
  text: [
    'text-primary', 'text-secondary', 'text-muted', 'text-inverse',
    'text-on-primary', 'text-on-dark'
  ] as const,
  
  background: [
    'bg-canvas', 'bg-surface', 'bg-muted', 'bg-inverse', 'bg-overlay'
  ] as const,
  
  border: [
    'border-default', 'border-muted', 'border-strong', 'border-inverse'
  ] as const,

  // Data Visualization
  chart: [
    'chart-cat-1', 'chart-cat-2', 'chart-cat-3', 'chart-cat-4', 'chart-cat-5', 'chart-cat-6',
    'chart-seq-1', 'chart-seq-2', 'chart-seq-3', 'chart-seq-4', 'chart-seq-5', 'chart-seq-6', 'chart-seq-7',
    'chart-positive', 'chart-low', 'chart-medium', 'chart-high', 'chart-critical', 'chart-neutral'
  ] as const,
};

/**
 * Get all colors in a palette
 * @param palette - The palette name
 * @returns Array of CSS variable references
 */
export function getPaletteColors<T extends keyof typeof colorPalettes>(
  palette: T
): string[] {
  return colorPalettes[palette].map(key => getCSSVariable(key as CSSVariableKey));
}

/**
 * Create a gradient from a color palette
 * @param palette - The palette name
 * @param direction - CSS gradient direction (default: 'to right')
 * @returns CSS linear gradient string
 */
export function createPaletteGradient<T extends keyof typeof colorPalettes>(
  palette: T,
  direction: string = 'to right'
): string {
  const colors = getPaletteColors(palette);
  return `linear-gradient(${direction}, ${colors.join(', ')})`;
}

// Export everything for convenience
export {
  colors,
  cleanColorsForTailwind,
  tailwindColors,
  primaryColorUsage,
  brand,
  blue,
  neutral,
  red,
  green,
  yellow,
  orange,
  purple,
  black,
  white,
  pageBackground,
  navy,
  sky,
  teal,
  getColor
} from './design-system-colors';