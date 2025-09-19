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
export * from './css-variables';
export * from './typography-consolidated';

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

export * from './design-system-elevation';
export * from './design-system-motion'; 
export * from './design-system-focus';

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

// Design system theme object for easy consumption
export const theme = {
  // Colors - primary design system
  colors: require('./design-system-colors').colors,
  brand: require('./design-system-colors').brand,
  
  // Typography - consolidated system
  typography: {
    fontFamilies: require('./typography-consolidated').fontFamilies,
    typeScale: require('./typography-consolidated').typeScale,
    semanticTypography: require('./typography-consolidated').semanticTypography,
  },
  
  // Spacing and layout
  spacing: require('./design-system-spacing').spacing,
  grid: require('./design-system-grid').breakpoints,
  
  // Interactive elements
  elevation: require('./design-system-elevation').elevationSystem,
  motion: require('./design-system-motion').duration,
  focus: require('./design-system-focus').focusRing,
} as const;

// Design system constants
export const DESIGN_SYSTEM = {
  name: 'Comcast Business Design System',
  version: '1.0.0',
  description: 'A comprehensive design system for Comcast Business applications',
  author: 'Comcast Business',
  license: 'MIT',
} as const;