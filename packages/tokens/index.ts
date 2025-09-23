// Comcast Business Design System - Design Tokens
// Consolidated token system for consistent design system implementation

// Core design system tokens - selective exports to avoid circular references
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
// CSS Variables - selective exports
export {
  CSS_VARIABLES,
  getCSSVariable,
  getComputedCSSVariable,
  setCSSVariable,
  themeUtils,
  colorPalettes,
  getPaletteColors,
  createPaletteGradient
} from './css-variables';

// CSS Variable types
export type {
  CSSVariableKey,
  CSSVariableValue
} from './css-variables';

// Typography - selective exports
export {
  fontFamilies,
  typeScale,
  semanticTypography,
  tailwindTypography,
  getTypographyStyle,
  fontWeightName,
  pxToRem
} from './typography-consolidated';

// Typography types
export type {
  FontFamily,
  TypeScaleCategory,
  TypeScaleVariant
} from './typography-consolidated';

// Layout and spacing - export specific modules to avoid conflicts
export { 
  spacing as designSystemSpacing,
  semanticSpacing,
  responsiveSpacing,
  grid as spacingGrid,
  spacingUsage,
  getSpacing as getDesignSystemSpacing,
  getSemanticSpacing
} from './design-system-spacing';

export { 
  breakpoints,
  mediaQueries,
  grid as gridSystem,
  containers,
  columns,
  layoutPatterns,
  cssGrid,
  flexbox,
  gridUsage,
  getBreakpoint,
  getGridConfig,
  getColumnSpan
} from './design-system-grid';

// Other design system modules
export { 
  icons,
  iconsByCategory,
  iconCategories,
  commonIconSizes as designSystemIconSizes,
  iconUsage,
  getIcon,
  getIconsByCategory
} from './design-system-icons-types';

// Design system elevation - selective exports
export {
  elevationSystem,
  semanticElevation,
  tailwindShadows,
  elevationUsage,
  cssCustomProperties,
  getElevation,
  getSemanticElevation,
  createElevationStyle
} from './design-system-elevation';

// Elevation types
export type {
  ElevationData,
  SemanticElevation
} from './design-system-elevation';

// Design system motion - selective exports
export {
  duration,
  easing,
  motion,
  tailwindMotion,
  reducedMotion,
  motionUsage,
  getMotion,
  createMotionStyle
} from './design-system-motion';

// Motion types
export type {
  MotionToken
} from './design-system-motion';

// Design system focus - selective exports
export {
  focusRing,
  skipLinks,
  screenReader,
  liveRegions,
  contrast,
  touchTargets,
  tailwindFocus,
  accessibilityUsage,
  getFocusRing
} from './design-system-focus';

// Focus types
export type {
  FocusToken
} from './design-system-focus';

export {
  componentSizes,
  iconSizes,
  inputHeights,
  buttonMinWidths,
  responsiveSizes,
  tailwindSizes,
  sizingUsage,
  getComponentSize,
  getIconSize,
  createSizeStyle,
  getResponsiveSize
} from './design-system-sizing';

// Legacy spacing system - export with different names to avoid conflicts
export { 
  spacing as legacySpacing,
  sizing,
  layout,
  getSpacing as getLegacySpacing,
  getSizing,
  getLayout,
  responsive
} from './spacing';

// Import for theme object creation
import { colors, brand } from './design-system-colors';
import { fontFamilies, typeScale, semanticTypography } from './typography-consolidated';
import { spacing } from './design-system-spacing';
import { grid } from './design-system-grid';
import { getElevation } from './design-system-elevation';
import { motion } from './design-system-motion';
import focusVisibility from './design-system-focus';

// Design system theme object for easy consumption
export const theme = {
  // Colors - primary design system
  colors: colors,
  brand: brand,

  // Typography - consolidated system
  typography: {
    fontFamilies: fontFamilies,
    typeScale: typeScale,
    semanticTypography: semanticTypography,
  },

  // Spacing and layout
  spacing: spacing,
  grid: grid,

  // Interactive elements
  elevation: getElevation,
  motion: motion,
  focus: focusVisibility,
} as const;

// Design system constants
export const DESIGN_SYSTEM = {
  name: 'Comcast Business Design System',
  version: '1.0.0',
  description: 'A comprehensive design system for Comcast Business applications',
  author: 'Comcast Business',
  license: 'MIT',
} as const;