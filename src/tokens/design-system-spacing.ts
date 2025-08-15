// Comcast Business Design System - Spacing Tokens
// 4px baseline spacing system with standard values

// Base spacing unit - 4px baseline
export const baseSpacing = 4;

// Core spacing scale based on 4px baseline
export const spacing = {
  // Base unit
  0: '0px',
  1: '4px',   // 1 * 4px = 4px (micro spacing)
  
  // Standard spacing values
  2: '8px',   // 2 * 4px = 8px (small)
  3: '12px',  // 3 * 4px = 12px (medium-small)
  4: '16px',  // 4 * 4px = 16px (medium)
  5: '20px',  // 5 * 4px = 20px (medium-large)
  6: '24px',  // 6 * 4px = 24px (large)
  
  // Extended scale for larger spacing needs
  7: '28px',  // 7 * 4px = 28px
  8: '32px',  // 8 * 4px = 32px (extra large)
  10: '40px', // 10 * 4px = 40px
  12: '48px', // 12 * 4px = 48px
  16: '64px', // 16 * 4px = 64px
  20: '80px', // 20 * 4px = 80px
  24: '96px', // 24 * 4px = 96px
} as const;

// Semantic spacing aliases for common use cases
export const semanticSpacing = {
  // Padding values
  padding: {
    none: spacing[0],
    xs: spacing[2],     // 8px - small padding
    sm: spacing[3],     // 12px - small-medium padding
    md: spacing[4],     // 16px - medium padding (most common)
    lg: spacing[5],     // 20px - large padding
    xl: spacing[6],     // 24px - extra large padding
    xxl: spacing[8],    // 32px - section padding
  },
  
  // Margin values
  margin: {
    none: spacing[0],
    xs: spacing[2],     // 8px - small margin
    sm: spacing[3],     // 12px - small-medium margin
    md: spacing[4],     // 16px - medium margin (most common)
    lg: spacing[5],     // 20px - large margin
    xl: spacing[6],     // 24px - extra large margin
    xxl: spacing[8],    // 32px - section margin
  },
  
  // Gap values (for flexbox/grid)
  gap: {
    none: spacing[0],
    xs: spacing[2],     // 8px - tight gap
    sm: spacing[3],     // 12px - small gap
    md: spacing[4],     // 16px - medium gap (most common)
    lg: spacing[5],     // 20px - large gap
    xl: spacing[6],     // 24px - extra large gap
  },
  
  // Component-specific spacing
  component: {
    // Button internal spacing
    button: {
      xs: `${spacing[2]} ${spacing[3]}`,  // 8px 12px
      sm: `${spacing[3]} ${spacing[4]}`,  // 12px 16px
      md: `${spacing[4]} ${spacing[6]}`,  // 16px 24px
      lg: `${spacing[5]} ${spacing[8]}`,  // 20px 32px
    },
    
    // Card spacing
    card: {
      padding: spacing[4],    // 16px internal padding
      margin: spacing[4],     // 16px between cards
      gap: spacing[3],        // 12px between card elements
    },
    
    // Form spacing
    form: {
      fieldGap: spacing[4],      // 16px between form fields
      labelGap: spacing[2],      // 8px between label and input
      sectionGap: spacing[6],    // 24px between form sections
    },
    
    // Layout spacing
    layout: {
      sectionGap: spacing[8],    // 32px between page sections
      containerPadding: spacing[4], // 16px container padding
      headerHeight: spacing[16],    // 64px header height
    }
  }
} as const;

// Responsive spacing utilities
export const responsiveSpacing = {
  mobile: {
    containerPadding: spacing[4],  // 16px on mobile
    sectionGap: spacing[6],        // 24px between sections on mobile
  },
  tablet: {
    containerPadding: spacing[6],  // 24px on tablet
    sectionGap: spacing[8],        // 32px between sections on tablet
  },
  desktop: {
    containerPadding: spacing[8],  // 32px on desktop
    sectionGap: spacing[12],       // 48px between sections on desktop
  }
} as const;

// Layout grid system based on spacing
export const grid = {
  // Column gaps
  columnGap: spacing[6],        // 24px between columns
  rowGap: spacing[6],           // 24px between rows
  
  // Container max widths
  container: {
    sm: '640px',    // Small container
    md: '768px',    // Medium container
    lg: '1024px',   // Large container
    xl: '1280px',   // Extra large container
    xxl: '1536px',  // 2X large container
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  }
} as const;

// Usage guidelines and patterns
export const spacingUsage = {
  standard: {
    description: "Standard spacing values for consistent layout",
    values: [
      { name: "8px", usage: "Small margins, tight spacing between related elements" },
      { name: "12px", usage: "Small-medium spacing, form field gaps" },
      { name: "16px", usage: "Medium spacing, most common for padding and margins" },
      { name: "20px", usage: "Large spacing between unrelated elements" },
      { name: "24px", usage: "Extra large spacing, section dividers" }
    ]
  },
  
  patterns: {
    stack: {
      description: "Vertical spacing between stacked elements",
      small: spacing[3],    // 12px - tight stacking
      medium: spacing[4],   // 16px - normal stacking
      large: spacing[6],    // 24px - loose stacking
    },
    
    inline: {
      description: "Horizontal spacing between inline elements",
      tight: spacing[2],    // 8px - buttons in a group
      normal: spacing[4],   // 16px - navigation items
      loose: spacing[6],    // 24px - separated items
    },
    
    container: {
      description: "Container and wrapper spacing",
      internal: spacing[4], // 16px - internal container padding
      external: spacing[6], // 24px - spacing around containers
    }
  }
} as const;

// Utility functions
export const getSpacing = (scale: keyof typeof spacing) => spacing[scale];

export const getSemanticSpacing = (category: keyof typeof semanticSpacing, size: string) => {
  const cat = semanticSpacing[category];
  return cat && typeof cat === 'object' ? (cat as any)[size] : undefined;
};

// Convert px values to rem (assuming 16px = 1rem)
export const spacingRem = Object.fromEntries(
  Object.entries(spacing).map(([key, value]) => [
    key,
    value === '0px' ? '0' : `${parseFloat(value) / 16}rem`
  ])
) as Record<keyof typeof spacing, string>;

// Export everything as default
export default {
  baseSpacing,
  spacing,
  semanticSpacing,
  responsiveSpacing,
  grid,
  spacingUsage,
  spacingRem,
  getSpacing,
  getSemanticSpacing,
} as const;

// Type definitions
export type SpacingScale = keyof typeof spacing;
export type SemanticSpacingCategory = keyof typeof semanticSpacing;
export type ResponsiveBreakpoint = keyof typeof responsiveSpacing;