// Comcast Business Design System - Complete Typography System
// Integrates existing design system tokens with Figma typography

import { typography as figmaTypography, fontFamilies as figmaFontFamilies, fontWeights as figmaFontWeights } from './figma-typography';
import { 
  typography as improvedTypography, 
  commonTypography, 
  semanticStyles as figmaSemanticStyles,
  fontFamilies as improvedFontFamilies,
  typographyBySize
} from './figma-typography-improved';

// Core Typography Foundation (Design System)
export const fontFamilies = {
  // Primary font families from Figma
  montserrat: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  lato: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', 
  robotoMono: '"Roboto Mono", "SF Mono", Monaco, "Cascadia Code", Consolas, "Courier New", monospace',
  
  // Fallback/system fonts
  primary: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  secondary: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  mono: '"Roboto Mono", "SF Mono", Monaco, "Cascadia Code", Consolas, "Courier New", monospace',
  
  // Legacy support
  inter: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  sourceSans: '"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

// Font sizes (design system scale)
export const fontSizes = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
  '6xl': '3.75rem', // 60px
  '7xl': '4.5rem',  // 72px
  '8xl': '6rem',    // 96px
  '9xl': '8rem',    // 128px
};

// Font weights
export const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
  
  // From Figma
  ...figmaFontWeights,
};

// Line heights
export const lineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  
  // Specific values
  3: '.75rem',   // 12px
  4: '1rem',     // 16px
  5: '1.25rem',  // 20px
  6: '1.5rem',   // 24px
  7: '1.75rem',  // 28px
  8: '2rem',     // 32px
  9: '2.25rem',  // 36px
  10: '2.5rem',  // 40px
};

// Letter spacing
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

// Figma Typography Tokens (from your design system)
export const figmaTokens = figmaTypography;

// Semantic Typography Styles (combining improved Figma + design system)
export const textStyles = {
  // Display typography (48px Title 2XL)
  display: improvedTypography.title2xl || commonTypography.display || {
    fontFamily: fontFamilies.montserrat,
    fontSize: '3rem', // 48px
    fontWeight: fontWeights.normal,
    lineHeight: '1.2',
    letterSpacing: letterSpacing.tight,
  },

  // Headings (using improved Figma typography where available)
  h1: commonTypography.h1 || improvedTypography.title || {
    fontFamily: fontFamilies.montserrat,
    fontSize: fontSizes['4xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  
  h2: figmaTypography['title-xl'] || {
    fontFamily: fontFamilies.montserrat,
    fontSize: fontSizes['3xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  
  h3: figmaTypography['title-semibold-l'] || {
    fontFamily: fontFamilies.montserrat,
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.normal,
  },
  
  h4: figmaTypography['title-semibold-m'] || {
    fontFamily: fontFamilies.montserrat,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.normal,
  },
  
  h5: figmaTypography['subtitle'] || {
    fontFamily: fontFamilies.montserrat,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  
  h6: figmaTypography['title'] || {
    fontFamily: fontFamilies.montserrat,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },

  // Body Text (using Lato from Figma where available)
  bodyLarge: figmaTypography['body-l'] || {
    fontFamily: fontFamilies.lato,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacing.normal,
  },
  
  body: figmaTypography['body-m'] || figmaTypography.body || {
    fontFamily: fontFamilies.lato,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  
  bodySmall: figmaTypography['body-s'] || {
    fontFamily: fontFamilies.lato,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  
  bodyExtraSmall: figmaTypography['body-xs'] || {
    fontFamily: fontFamilies.lato,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },

  // Emphasis variations
  bodySemibold: figmaTypography['body-semibold-m'] || {
    fontFamily: fontFamilies.lato,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  
  bodySemiboldSmall: figmaTypography['body-semibold-s'] || {
    fontFamily: fontFamilies.lato,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },

  // Labels and UI Text
  label: figmaTypography.label || {
    fontFamily: fontFamilies.lato,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.wide,
  },
  
  caption: {
    fontFamily: fontFamilies.lato,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  
  overline: {
    fontFamily: fontFamilies.lato,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.widest,
    textTransform: 'uppercase' as const,
  },

  // Code and monospace
  code: {
    fontFamily: fontFamilies.robotoMono,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  
  codeBlock: {
    fontFamily: fontFamilies.robotoMono,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacing.normal,
  },

  // Interactive elements
  button: figmaTypography.action || {
    fontFamily: fontFamilies.montserrat,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.none,
    letterSpacing: letterSpacing.normal,
  },
  
  link: {
    fontFamily: fontFamilies.lato,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  
  // Form elements
  input: {
    fontFamily: fontFamilies.lato,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  
  placeholder: {
    fontFamily: fontFamilies.lato,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
};

// Typography Scale (organized by usage)
export const typographyScale = {
  // Display text (largest)
  display: {
    large: textStyles.h1,
    medium: textStyles.h2,
    small: textStyles.h3,
  },
  
  // Headlines
  headline: {
    large: textStyles.h3,
    medium: textStyles.h4,
    small: textStyles.h5,
  },
  
  // Titles
  title: {
    large: textStyles.h4,
    medium: textStyles.h5,
    small: textStyles.h6,
  },
  
  // Body text
  body: {
    large: textStyles.bodyLarge,
    medium: textStyles.body,
    small: textStyles.bodySmall,
    extraSmall: textStyles.bodyExtraSmall,
  },
  
  // Labels
  label: {
    large: textStyles.label,
    medium: textStyles.caption,
    small: textStyles.overline,
  },
};

// Utility functions
export const getTextStyle = (category: keyof typeof typographyScale, size: string) => {
  const scale = typographyScale[category];
  return scale && typeof scale === 'object' ? scale[size as keyof typeof scale] : undefined;
};

export const getFigmaToken = (tokenName: string) => {
  return figmaTypography[tokenName as keyof typeof figmaTypography];
};

// CSS Custom Properties (for CSS usage)
export const cssVariables = {
  // Font families
  '--font-primary': fontFamilies.primary,
  '--font-secondary': fontFamilies.secondary,
  '--font-mono': fontFamilies.mono,
  '--font-montserrat': fontFamilies.montserrat,
  '--font-lato': fontFamilies.lato,
  '--font-roboto-mono': fontFamilies.robotoMono,
  
  // Common text styles
  '--text-h1-font-family': textStyles.h1.fontFamily,
  '--text-h1-font-size': textStyles.h1.fontSize,
  '--text-h1-font-weight': textStyles.h1.fontWeight,
  '--text-h1-line-height': textStyles.h1.lineHeight,
  
  '--text-body-font-family': textStyles.body.fontFamily,
  '--text-body-font-size': textStyles.body.fontSize,
  '--text-body-font-weight': textStyles.body.fontWeight,
  '--text-body-line-height': textStyles.body.lineHeight,
};

// Export everything
export default {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  textStyles,
  typographyScale,
  figmaTokens,
  cssVariables,
  
  // Improved typography
  improvedTypography,
  commonTypography,
  figmaSemanticStyles,
  typographyBySize,
  
  // Utility functions
  getTextStyle,
  getFigmaToken,
};

// Re-export Figma typography for convenience
export { figmaTypography, improvedTypography, commonTypography, figmaSemanticStyles, typographyBySize };
export * from './figma-typography';
export * from './figma-typography-improved';