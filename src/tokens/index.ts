// Comcast Business Design System - Design Tokens

// Import token modules
import { colors, getColor, semanticColors } from './colors';
import { typography, getTypography, getTextStyle } from './typography';
import { spacing, sizing, layout, getSpacing, getSizing, getLayout, responsive } from './spacing';

// Import design system colors (LATEST & RECOMMENDED)
import { 
  colors as designSystemColors, 
  brand, 
  colorCategories, 
  primaryColorUsage 
} from './design-system-colors';

// Import design system spacing (4px baseline)
import { 
  spacing as designSystemSpacing,
  semanticSpacing,
  responsiveSpacing,
  grid,
  spacingUsage,
  getSpacing as getDesignSystemSpacing,
  getSemanticSpacing
} from './design-system-spacing';

// Import design system grid (adaptive breakpoints)
import { 
  breakpoints,
  mediaQueries,
  grid as gridSystem,
  containers,
  columns,
  layoutPatterns,
  responsiveSpacing as gridResponsiveSpacing,
  cssGrid,
  flexbox,
  gridUsage,
  getBreakpoint,
  getGridConfig,
  getColumnSpan,
  getResponsiveSpacing as getGridResponsiveSpacing
} from './design-system-grid';

// Import design system icons
import {
  icons,
  iconsByCategory,
  iconCategories,
  commonIconSizes,
  iconUsage,
  getIcon,
  getIconsByCategory
} from './design-system-icons';

// Import design system elevation (shadows and z-index)
import {
  elevationSystem,
  semanticElevation,
  tailwindShadows,
  elevationUsage,
  cssCustomProperties,
  getElevation,
  getSemanticElevation,
  createElevationStyle
} from './design-system-elevation';

// Import design system motion (animations and transitions)
import {
  duration,
  easing,
  motion,
  tailwindMotion,
  reducedMotion,
  motionUsage,
  getMotion,
  createMotionStyle
} from './design-system-motion';

// Import design system focus & accessibility
import {
  focusRing,
  skipLinks,
  screenReader,
  liveRegions,
  contrast,
  touchTargets,
  tailwindFocus,
  accessibilityUsage,
  getFocusRing,
  createFocusStyle
} from './design-system-focus';

// Import design system sizing (component dimensions)
import {
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

// Import new typography system and Figma typography
import typographySystem, { textStyles, typographyScale, fontFamilies as systemFontFamilies } from './typography-system';
import { typography as figmaTypography, fontFamilies as figmaFontFamilies } from './figma-typography';
import { 
  typography as improvedTypography, 
  commonTypography, 
  semanticStyles as figmaSemanticStyles 
} from './figma-typography-improved';

// Import properly grouped typography (LATEST)
import { 
  typography as groupedTypography,
  flatTypography,
  commonTypography as groupedCommonTypography,
  fontFamilies as groupedFontFamilies,
  getTypography as getGroupedTypography
} from './figma-typography-grouped';

// Export all token modules
export * from './colors';
export * from './typography';
export * from './spacing';
export * from './design-system-colors'; // LATEST - Comprehensive color system
export * from './design-system-spacing'; // LATEST - 4px baseline spacing system
export * from './design-system-grid'; // LATEST - Adaptive grid system
export * from './design-system-icons'; // LATEST - Icon system from Figma

// Export new typography system
export * from './typography-system';
export * from './figma-typography';
export * from './figma-typography-improved';
export * from './figma-typography-grouped'; // LATEST - Properly grouped typography

// Re-export commonly used tokens for convenience
export { colors, getColor, semanticColors } from './colors';
export { typography, getTypography, getTextStyle } from './typography';
export { spacing, sizing, layout, getSpacing, getSizing, getLayout, responsive } from './spacing';

// Re-export design system colors (RECOMMENDED)
export { 
  designSystemColors, 
  brand, 
  colorCategories, 
  primaryColorUsage 
};

// Re-export design system spacing (RECOMMENDED)
export {
  designSystemSpacing,
  semanticSpacing,
  responsiveSpacing,
  grid,
  spacingUsage,
  getDesignSystemSpacing,
  getSemanticSpacing
};

// Re-export design system grid (RECOMMENDED)
export {
  breakpoints,
  mediaQueries,
  gridSystem,
  containers,
  columns,
  layoutPatterns,
  gridResponsiveSpacing,
  cssGrid,
  flexbox,
  gridUsage,
  getBreakpoint,
  getGridConfig,
  getColumnSpan,
  getGridResponsiveSpacing
};

// Re-export design system icons (RECOMMENDED)
export {
  icons,
  iconsByCategory,
  iconCategories,
  commonIconSizes,
  iconUsage,
  getIcon,
  getIconsByCategory
};

// Re-export design system elevation (RECOMMENDED)
export {
  elevationSystem,
  semanticElevation,
  tailwindShadows,
  elevationUsage,
  cssCustomProperties,
  getElevation,
  getSemanticElevation,
  createElevationStyle
};

// Re-export design system motion (RECOMMENDED)
export {
  duration,
  easing,
  motion,
  tailwindMotion,
  reducedMotion,
  motionUsage,
  getMotion,
  createMotionStyle
};

// Re-export design system focus & accessibility (RECOMMENDED)
export {
  focusRing,
  skipLinks,
  screenReader,
  liveRegions,
  contrast,
  touchTargets,
  tailwindFocus,
  accessibilityUsage,
  getFocusRing,
  createFocusStyle
};

// Re-export design system sizing (RECOMMENDED)
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
};

// Re-export new typography system
export { typographySystem, textStyles, typographyScale, systemFontFamilies };
export { figmaTypography, figmaFontFamilies };
export { improvedTypography, commonTypography, figmaSemanticStyles };

// Re-export grouped typography (RECOMMENDED)
export { 
  groupedTypography, 
  flatTypography, 
  groupedCommonTypography, 
  groupedFontFamilies,
  getGroupedTypography 
};

// Design system theme object
export const theme = {
  colors,
  typography,
  spacing,
  sizing,
  layout,
  responsive,
  
  // New typography system
  typographySystem,
  textStyles,
  typographyScale,
  fontFamilies: systemFontFamilies,
  figmaTypography,
  
  // Improved typography
  improvedTypography,
  commonTypography,
  figmaSemanticStyles,
  
  // Grouped typography (LATEST & RECOMMENDED)
  groupedTypography,
  flatTypography,
  groupedCommonTypography,
  
  // Design system colors (LATEST & RECOMMENDED)
  designSystemColors,
  brand,
  colorCategories,
  primaryColorUsage,
  
  // Design system spacing (LATEST & RECOMMENDED)
  designSystemSpacing,
  semanticSpacing,
  responsiveSpacing,
  grid,
  spacingUsage,
  
  // Design system grid (LATEST & RECOMMENDED)
  breakpoints,
  mediaQueries,
  gridSystem,
  containers,
  columns,
  layoutPatterns,
  gridResponsiveSpacing,
  cssGrid,
  flexbox,
  gridUsage,
  
  // Design system icons (LATEST & RECOMMENDED)
  icons,
  iconsByCategory,
  iconCategories,
  commonIconSizes,
  iconUsage,
  
  // Design system elevation (LATEST & RECOMMENDED)
  elevationSystem,
  semanticElevation,
  tailwindShadows,
  elevationUsage,
  
  // Design system motion (LATEST & RECOMMENDED)
  duration,
  easing,
  motion,
  tailwindMotion,
  reducedMotion,
  motionUsage,
  
  // Design system focus & accessibility (LATEST & RECOMMENDED)
  focusRing,
  skipLinks,
  screenReader,
  liveRegions,
  contrast,
  touchTargets,
  tailwindFocus,
  accessibilityUsage,
  
  // Design system sizing (LATEST & RECOMMENDED)
  componentSizes,
  iconSizes,
  inputHeights,
  buttonMinWidths,
  responsiveSizes,
  tailwindSizes,
  sizingUsage,
} as const;

// Type definitions for the entire theme
export type Theme = typeof theme;
export type ThemeColors = typeof colors;
export type ThemeTypography = typeof typography;
export type ThemeSpacing = typeof spacing;
export type ThemeSizing = typeof sizing;
export type ThemeLayout = typeof layout;

// Utility function to get theme value
export const getThemeValue = (path: string): any => {
  const keys = path.split('.');
  let value: any = theme;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return undefined;
    }
  }
  
  return value;
};

// Design system constants
export const DESIGN_SYSTEM = {
  name: 'Comcast Business Design System',
  version: '1.0.0',
  description: 'A comprehensive design system for Comcast Business applications',
  author: 'Comcast Business',
  license: 'MIT',
} as const; 