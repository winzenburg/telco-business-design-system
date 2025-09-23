// Comcast Business Design System - Component Sizing Tokens
// Consistent sizing for components across the design system

export interface SizeToken {
  height: string;
  padding: string;
  fontSize: string;
  lineHeight: string;
  minWidth?: string;
  description: string;
  usage: string[];
}

// Component size scale
export const componentSizes = {
  // Extra small (compact interfaces)
  xs: {
    height: '1.5rem',     // 24px
    padding: '0.25rem 0.5rem',  // 4px 8px
    fontSize: '0.75rem',   // 12px
    lineHeight: '1rem',    // 16px
    minWidth: '3rem',      // 48px
    description: 'Extra small size for compact interfaces',
    usage: ['Tags', 'Badges', 'Compact buttons', 'Small form controls'],
  },

  // Small
  sm: {
    height: '2rem',        // 32px
    padding: '0.375rem 0.75rem',  // 6px 12px
    fontSize: '0.875rem',  // 14px
    lineHeight: '1.25rem', // 20px
    minWidth: '4rem',      // 64px
    description: 'Small size for secondary actions and compact layouts',
    usage: ['Secondary buttons', 'Small inputs', 'Compact cards', 'Navigation items'],
  },

  // Medium (default)
  md: {
    height: '2.5rem',      // 40px
    padding: '0.5rem 1rem',     // 8px 16px
    fontSize: '1rem',      // 16px
    lineHeight: '1.5rem',  // 24px
    minWidth: '5rem',      // 80px
    description: 'Default medium size for most components',
    usage: ['Primary buttons', 'Standard inputs', 'Default cards', 'Most form controls'],
  },

  // Large
  lg: {
    height: '3rem',        // 48px
    padding: '0.75rem 1.5rem',  // 12px 24px
    fontSize: '1.125rem',  // 18px
    lineHeight: '1.75rem', // 28px
    minWidth: '6rem',      // 96px
    description: 'Large size for prominent actions and spacious layouts',
    usage: ['Hero buttons', 'Large inputs', 'Feature cards', 'Prominent CTAs'],
  },

  // Extra large
  xl: {
    height: '3.5rem',      // 56px
    padding: '1rem 2rem',       // 16px 32px
    fontSize: '1.25rem',   // 20px
    lineHeight: '2rem',    // 32px
    minWidth: '7rem',      // 112px
    description: 'Extra large size for hero elements and landing pages',
    usage: ['Hero CTAs', 'Landing page buttons', 'Feature highlights', 'Large form sections'],
  },
} as const;

// Icon sizing (consistent with component sizes)
export const iconSizes = {
  xs: '0.75rem',  // 12px
  sm: '1rem',     // 16px
  md: '1.25rem',  // 20px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '2.5rem', // 40px
} as const;

// Input height scale (includes borders and padding)
export const inputHeights = {
  xs: '1.75rem',  // 28px
  sm: '2.25rem',  // 36px
  md: '2.75rem',  // 44px
  lg: '3.25rem',  // 52px
  xl: '3.75rem',   // 60px
} as const;

// Button minimum widths (for consistent button sizing)
export const buttonMinWidths = {
  xs: '3rem',    // 48px
  sm: '4rem',    // 64px
  md: '5rem',    // 80px
  lg: '6rem',    // 96px
  xl: '7rem',     // 112px
} as const;

// Responsive sizing breakpoints
export const responsiveSizes = {
  mobile: {
    default: 'sm',
    prominent: 'md',
    description: 'Smaller sizes for mobile devices',
  },
  tablet: {
    default: 'md',
    prominent: 'lg',
    description: 'Medium sizes for tablet devices',
  },
  desktop: {
    default: 'md',
    prominent: 'lg',
    description: 'Standard sizes for desktop devices',
  },
} as const;

// Tailwind sizing utilities
export const tailwindSizes = {
  'size-xs': 'h-6 px-2 text-xs leading-4 min-w-12',
  'size-sm': 'h-8 px-3 text-sm leading-5 min-w-16',
  'size-md': 'h-10 px-4 text-base leading-6 min-w-20',
  'size-lg': 'h-12 px-6 text-lg leading-7 min-w-24',
  'size-xl': 'h-14 px-8 text-xl leading-8 min-w-28',
} as const;

// Usage guidelines
export const sizingUsage = {
  hierarchy: [
    'Use larger sizes for more important actions and content',
    'Maintain consistent sizing within component groups',
    'Consider responsive sizing for different screen sizes',
    'Ensure touch targets meet accessibility requirements (44px minimum)',
  ],
  consistency: [
    'Use the same size for similar actions across the interface',
    'Group related components using the same size scale',
    'Avoid mixing too many different sizes in one area',
    'Follow the established size progression (xs, sm, md, lg, xl)',
  ],
  accessibility: [
    'Ensure all interactive elements meet minimum touch target size (44px)',
    'Provide adequate spacing between interactive elements',
    'Consider users with motor disabilities when sizing components',
    'Test component usability across different input methods',
  ],
} as const;

// Helper functions
export const getComponentSize = (size: keyof typeof componentSizes) => componentSizes[size];

export const getIconSize = (size: keyof typeof iconSizes) => iconSizes[size];

export const createSizeStyle = (size: keyof typeof componentSizes) => {
  const sizeToken = componentSizes[size];
  return {
    height: sizeToken.height,
    padding: sizeToken.padding,
    fontSize: sizeToken.fontSize,
    lineHeight: sizeToken.lineHeight,
    minWidth: sizeToken.minWidth,
  };
};

export const getResponsiveSize = (device: keyof typeof responsiveSizes, prominence: 'default' | 'prominent' = 'default') => {
  return responsiveSizes[device][prominence];
};

// Export everything
export default {
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
  getResponsiveSize,
} as const;

// Type definitions
export type ComponentSize = keyof typeof componentSizes;
export type IconSizeType = keyof typeof iconSizes;
export type ResponsiveDevice = keyof typeof responsiveSizes;
