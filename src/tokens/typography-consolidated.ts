// Comcast Business Design System - Consolidated Typography
// Fixed and cleaned typography system from Figma with proper structure
// Generated: 2025-08-11

// ===== LAYER 1: FONT FAMILIES =====
// Primary fonts used in the Figma design system

export const fontFamilies = {
  // Primary brand font - Montserrat (main headings and UI)
  primary: {
    name: 'Montserrat',
    stack: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    category: 'sans-serif',
    usage: 'Headings, buttons, navigation, and primary UI elements',
    weights: [300, 400, 500, 600, 700],
    fallback: 'system-ui, sans-serif'
  },

  // Secondary font - Lato (body text and content)
  secondary: {
    name: 'Lato',
    stack: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
    category: 'sans-serif', 
    usage: 'Body text, paragraphs, and content areas',
    weights: [300, 400, 500, 700],
    fallback: 'system-ui, sans-serif'
  },

  // Action font - Lato (buttons and interactive elements)
  action: {
    name: 'Lato',
    stack: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    category: 'sans-serif',
    usage: 'Buttons, call-to-action elements, and interactive text',
    weights: [400, 600, 700],
    fallback: 'system-ui, sans-serif'
  },

  // Monospace font - JetBrains Mono (code and data)
  mono: {
    name: 'JetBrains Mono',
    stack: 'JetBrains Mono, "SF Mono", Monaco, "Cascadia Code", Consolas, "Courier New", monospace',
    category: 'monospace',
    usage: 'Code blocks, technical data, and fixed-width content',
    weights: [400, 500, 700],
    fallback: 'monospace'
  }
} as const;

// ===== LAYER 2: TYPOGRAPHY SCALE =====
// Systematic font sizes based on proper typographic scale

export const typeScale = {
  // Display sizes - Large marketing and hero text
  display: {
    '2xl': {
      fontSize: '4.5rem',     // 72px
      lineHeight: '1.1',      // 79.2px
      letterSpacing: '-0.02em',
      fontWeight: 700,
      usage: 'Hero headlines, marketing'
    },
    xl: {
      fontSize: '3.75rem',    // 60px
      lineHeight: '1.15',     // 69px
      letterSpacing: '-0.02em',
      fontWeight: 700,
      usage: 'Page headlines'
    },
    lg: {
      fontSize: '3rem',       // 48px
      lineHeight: '1.2',      // 57.6px
      letterSpacing: '-0.01em',
      fontWeight: 600,
      usage: 'Section headlines'
    }
  },

  // Title hierarchy - Complete title system from Figma
  title: {
    '5xl': {
      fontSize: '4rem',       // 64px
      lineHeight: '1.1',      // 70.4px
      letterSpacing: '-0.025em',
      fontWeight: 600,
      usage: 'Title 5XL - Hero headlines, landing pages'
    },
    '4xl': {
      fontSize: '3rem',       // 48px
      lineHeight: '1.15',     // 55.2px
      letterSpacing: '-0.02em',
      fontWeight: 600,
      usage: 'Title 4XL - Page headlines, major sections'
    },
    '3xl': {
      fontSize: '2.25rem',    // 36px
      lineHeight: '1.25',     // 45px
      letterSpacing: '-0.01em',
      fontWeight: 600,
      usage: 'Title 3XL - Section headers'
    },
    '2xl': {
      fontSize: '1.875rem',   // 30px
      lineHeight: '1.3',      // 39px
      letterSpacing: '-0.005em',
      fontWeight: 600,
      usage: 'Title 2XL - Subsection headers'
    },
    xl: {
      fontSize: '1.5rem',     // 24px
      lineHeight: '1.35',     // 32.4px
      letterSpacing: 'normal',
      fontWeight: 600,
      usage: 'Title XL - Component titles'
    },
    l: {
      fontSize: '1.25rem',    // 20px
      lineHeight: '1.4',      // 28px
      letterSpacing: 'normal',
      fontWeight: 600,
      usage: 'Title L - Card titles, modal headers'
    },
    m: {
      fontSize: '1.125rem',   // 18px
      lineHeight: '1.45',     // 26.1px
      letterSpacing: 'normal',
      fontWeight: 600,
      usage: 'Title M - Small headings, form sections'
    }
  },

  // Title variants with different weights
  titleMedium: {
    '3xl': {
      fontSize: '2.25rem',    // 36px
      lineHeight: '1.25',     // 45px
      letterSpacing: '-0.01em',
      fontWeight: 500,
      usage: 'Title 3XL Medium - Lighter section headers'
    },
    '2xl': {
      fontSize: '1.875rem',   // 30px
      lineHeight: '1.3',      // 39px
      letterSpacing: '-0.005em',
      fontWeight: 500,
      usage: 'Title 2XL Medium - Lighter subsection headers'
    }
  },

  titleSemibold: {
    '5xl': {
      fontSize: '4rem',       // 64px
      lineHeight: '1.1',      // 70.4px
      letterSpacing: '-0.025em',
      fontWeight: 600,
      usage: 'Title 5XL Semibold - Heavy hero headlines'
    },
    '4xl': {
      fontSize: '3rem',       // 48px
      lineHeight: '1.15',     // 55.2px
      letterSpacing: '-0.02em',
      fontWeight: 600,
      usage: 'Title 4XL Semibold - Heavy page headlines'
    },
    xl: {
      fontSize: '1.5rem',     // 24px
      lineHeight: '1.35',     // 32.4px
      letterSpacing: 'normal',
      fontWeight: 600,
      usage: 'Title XL Semibold - Heavy component titles'
    },
    l: {
      fontSize: '1.25rem',    // 20px
      lineHeight: '1.4',      // 28px
      letterSpacing: 'normal',
      fontWeight: 600,
      usage: 'Title L Semibold - Heavy card titles'
    },
    m: {
      fontSize: '1.125rem',   // 18px
      lineHeight: '1.45',     // 26.1px
      letterSpacing: 'normal',
      fontWeight: 600,
      usage: 'Title M Semibold - Heavy small headings'
    }
  },

  // Heading sizes - Standard content hierarchy (kept for backward compatibility)
  heading: {
    '4xl': {
      fontSize: '2.25rem',    // 36px
      lineHeight: '1.25',     // 45px
      letterSpacing: '-0.01em',
      fontWeight: 600,
      usage: 'H1 - Main page title'
    },
    '3xl': {
      fontSize: '1.875rem',   // 30px
      lineHeight: '1.3',      // 39px
      letterSpacing: '-0.005em',
      fontWeight: 600,
      usage: 'H2 - Section headers'
    },
    '2xl': {
      fontSize: '1.5rem',     // 24px
      lineHeight: '1.35',     // 32.4px
      letterSpacing: 'normal',
      fontWeight: 600,
      usage: 'H3 - Subsection headers'
    },
    xl: {
      fontSize: '1.25rem',    // 20px
      lineHeight: '1.4',      // 28px
      letterSpacing: 'normal',
      fontWeight: 600,
      usage: 'H4 - Component titles'
    },
    lg: {
      fontSize: '1.125rem',   // 18px
      lineHeight: '1.45',     // 26.1px
      letterSpacing: 'normal',
      fontWeight: 500,
      usage: 'H5 - Card titles'
    }
  },

  // Body sizes - Content and reading text (Lato)
  body: {
    xl: {
      fontSize: '1.125rem',   // 18px
      lineHeight: '1.6',      // 28.8px
      letterSpacing: 'normal',
      fontWeight: 400,
      usage: 'Body XL - Large body text, introductions'
    },
    l: {
      fontSize: '1rem',       // 16px
      lineHeight: '1.6',      // 25.6px
      letterSpacing: 'normal',
      fontWeight: 400,
      usage: 'Body L - Default body text, paragraphs'
    },
    m: {
      fontSize: '0.875rem',   // 14px
      lineHeight: '1.6',      // 22.4px
      letterSpacing: 'normal',
      fontWeight: 400,
      usage: 'Body M - Secondary text, captions'
    },
    s: {
      fontSize: '0.75rem',    // 12px
      lineHeight: '1.5',      // 18px
      letterSpacing: '0.01em',
      fontWeight: 400,
      usage: 'Body S - Small text, helper text'
    },
    xs: {
      fontSize: '0.625rem',   // 10px
      lineHeight: '1.4',      // 14px
      letterSpacing: '0.01em',
      fontWeight: 400,
      usage: 'Body XS - Fine print, metadata, timestamps'
    },
    // Legacy aliases for backward compatibility
    base: {
      fontSize: '0.875rem',   // 14px
      lineHeight: '1.6',      // 22.4px
      letterSpacing: 'normal',
      fontWeight: 400,
      usage: 'Alias for Body M'
    },
    lg: {
      fontSize: '1rem',       // 16px
      lineHeight: '1.6',      // 25.6px
      letterSpacing: 'normal',
      fontWeight: 400,
      usage: 'Alias for Body L'
    },
    sm: {
      fontSize: '0.75rem',    // 12px
      lineHeight: '1.5',      // 18px
      letterSpacing: '0.01em',
      fontWeight: 400,
      usage: 'Alias for Body S'
    }
  },

  // Body semibold variants - For emphasis and importance
  bodySemibold: {
    l: {
      fontSize: '1rem',       // 16px
      lineHeight: '1.6',      // 25.6px
      letterSpacing: 'normal',
      fontWeight: 600,
      usage: 'Body L Semibold - Emphasized body text'
    },
    m: {
      fontSize: '0.875rem',   // 14px
      lineHeight: '1.6',      // 22.4px
      letterSpacing: 'normal',
      fontWeight: 600,
      usage: 'Body M Semibold - Emphasized secondary text'
    },
    s: {
      fontSize: '0.75rem',    // 12px
      lineHeight: '1.5',      // 18px
      letterSpacing: '0.01em',
      fontWeight: 600,
      usage: 'Body S Semibold - Emphasized small text'
    },
    xs: {
      fontSize: '0.625rem',   // 10px
      lineHeight: '1.4',      // 14px
      letterSpacing: '0.01em',
      fontWeight: 600,
      usage: 'Body XS Semibold - Emphasized fine print'
    }
  },

  // Interactive elements - Buttons, links, labels
  interactive: {
    button: {
      lg: {
        fontSize: '1rem',       // 16px
        lineHeight: '1.5',      // 24px
        letterSpacing: '0.005em',
        fontWeight: 500,
        usage: 'Large buttons'
      },
      base: {
        fontSize: '0.875rem',   // 14px
        lineHeight: '1.5',      // 21px
        letterSpacing: '0.005em',
        fontWeight: 500,
        usage: 'Default buttons'
      },
      sm: {
        fontSize: '0.75rem',    // 12px
        lineHeight: '1.5',      // 18px
        letterSpacing: '0.01em',
        fontWeight: 500,
        usage: 'Small buttons, chips'
      }
    },
    
    label: {
      base: {
        fontSize: '0.875rem',   // 14px
        lineHeight: '1.4',      // 19.6px
        letterSpacing: '0.005em',
        fontWeight: 500,
        usage: 'Form labels, tags'
      },
      sm: {
        fontSize: '0.75rem',    // 12px
        lineHeight: '1.4',      // 16.8px
        letterSpacing: '0.01em',
        fontWeight: 500,
        usage: 'Small labels, badges'
      }
    }
  }
} as const;

// ===== LAYER 3: SEMANTIC TYPOGRAPHY =====
// Purpose-based typography mappings

export const semanticTypography = {
  // Page structure - using new title system
  page: {
    heroTitle: {
      ...typeScale.title['5xl'],
      fontFamily: fontFamilies.primary.stack,
    },
    title: {
      ...typeScale.title['4xl'],
      fontFamily: fontFamilies.primary.stack,
    },
    subtitle: {
      ...typeScale.title['2xl'],
      fontFamily: fontFamilies.primary.stack,
      fontWeight: 400,
      opacity: 0.8
    }
  },

  // Title hierarchy - complete system
  titles: {
    hero: {
      ...typeScale.title['5xl'],
      fontFamily: fontFamilies.primary.stack,
    },
    page: {
      ...typeScale.title['4xl'],
      fontFamily: fontFamilies.primary.stack,
    },
    section: {
      ...typeScale.title['3xl'],
      fontFamily: fontFamilies.primary.stack,
    },
    subsection: {
      ...typeScale.title['2xl'],
      fontFamily: fontFamilies.primary.stack,
    },
    component: {
      ...typeScale.title.xl,
      fontFamily: fontFamilies.primary.stack,
    },
    card: {
      ...typeScale.title.l,
      fontFamily: fontFamilies.primary.stack,
    },
    small: {
      ...typeScale.title.m,
      fontFamily: fontFamilies.primary.stack,
    },
    // Medium weight variants
    sectionMedium: {
      ...typeScale.titleMedium['3xl'],
      fontFamily: fontFamilies.primary.stack,
    },
    subsectionMedium: {
      ...typeScale.titleMedium['2xl'],
      fontFamily: fontFamilies.primary.stack,
    },
    // Semibold variants
    heroSemibold: {
      ...typeScale.titleSemibold['5xl'],
      fontFamily: fontFamilies.primary.stack,
    },
    pageSemibold: {
      ...typeScale.titleSemibold['4xl'],
      fontFamily: fontFamilies.primary.stack,
    },
    componentSemibold: {
      ...typeScale.titleSemibold.xl,
      fontFamily: fontFamilies.primary.stack,
    },
    cardSemibold: {
      ...typeScale.titleSemibold.l,
      fontFamily: fontFamilies.primary.stack,
    },
    smallSemibold: {
      ...typeScale.titleSemibold.m,
      fontFamily: fontFamilies.primary.stack,
    }
  },

  // Content hierarchy
  content: {
    headline: {
      ...typeScale.heading['3xl'],
      fontFamily: fontFamilies.primary.stack,
    },
    subheadline: {
      ...typeScale.heading.xl,
      fontFamily: fontFamilies.primary.stack,
    },
    body: {
      ...typeScale.body.l,
      fontFamily: fontFamilies.secondary.stack,
    },
    bodyLarge: {
      ...typeScale.body.xl,
      fontFamily: fontFamilies.secondary.stack,
    },
    bodySmall: {
      ...typeScale.body.m,
      fontFamily: fontFamilies.secondary.stack,
    },
    caption: {
      ...typeScale.body.s,
      fontFamily: fontFamilies.secondary.stack,
      opacity: 0.7
    },
    fine: {
      ...typeScale.body.xs,
      fontFamily: fontFamilies.secondary.stack,
      opacity: 0.6
    }
  },

  // Body text variants - complete system
  body: {
    extraLarge: {
      ...typeScale.body.xl,
      fontFamily: fontFamilies.secondary.stack,
    },
    large: {
      ...typeScale.body.l,
      fontFamily: fontFamilies.secondary.stack,
    },
    medium: {
      ...typeScale.body.m,
      fontFamily: fontFamilies.secondary.stack,
    },
    small: {
      ...typeScale.body.s,
      fontFamily: fontFamilies.secondary.stack,
    },
    extraSmall: {
      ...typeScale.body.xs,
      fontFamily: fontFamilies.secondary.stack,
    },
    // Semibold variants
    largeSemibold: {
      ...typeScale.bodySemibold.l,
      fontFamily: fontFamilies.secondary.stack,
    },
    mediumSemibold: {
      ...typeScale.bodySemibold.m,
      fontFamily: fontFamilies.secondary.stack,
    },
    smallSemibold: {
      ...typeScale.bodySemibold.s,
      fontFamily: fontFamilies.secondary.stack,
    },
    extraSmallSemibold: {
      ...typeScale.bodySemibold.xs,
      fontFamily: fontFamilies.secondary.stack,
    }
  },

  // UI components
  ui: {
    buttonPrimary: {
      ...typeScale.interactive.button.base,
      fontFamily: fontFamilies.primary.stack,
    },
    buttonSecondary: {
      ...typeScale.interactive.button.base,
      fontFamily: fontFamilies.primary.stack,
      fontWeight: 400
    },
    label: {
      ...typeScale.interactive.label.base,
      fontFamily: fontFamilies.primary.stack,
    },
    input: {
      ...typeScale.body.lg,
      fontFamily: fontFamilies.secondary.stack,
    }
  },

  // Special cases
  code: {
    inline: {
      fontSize: '0.875rem',   // 14px
      lineHeight: '1.4',      // 19.6px
      fontFamily: fontFamilies.mono.stack,
      fontWeight: 400
    },
    block: {
      fontSize: '0.875rem',   // 14px
      lineHeight: '1.6',      // 22.4px
      fontFamily: fontFamilies.mono.stack,
      fontWeight: 400
    }
  }
} as const;

// ===== TAILWIND CSS COMPATIBLE EXPORTS =====

export const tailwindTypography = {
  fontFamily: {
    primary: fontFamilies.primary.stack.split(', '),
    secondary: fontFamilies.secondary.stack.split(', '),
    action: fontFamilies.action.stack.split(', '),
    mono: fontFamilies.mono.stack.split(', '),
    montserrat: fontFamilies.primary.stack.split(', '),
    roboto: fontFamilies.secondary.stack.split(', '),
    lato: fontFamilies.action.stack.split(', '),
  },

  fontSize: {
    // Display sizes
    'display-2xl': [typeScale.display['2xl'].fontSize, { lineHeight: typeScale.display['2xl'].lineHeight, letterSpacing: typeScale.display['2xl'].letterSpacing }],
    'display-xl': [typeScale.display.xl.fontSize, { lineHeight: typeScale.display.xl.lineHeight, letterSpacing: typeScale.display.xl.letterSpacing }],
    'display-lg': [typeScale.display.lg.fontSize, { lineHeight: typeScale.display.lg.lineHeight, letterSpacing: typeScale.display.lg.letterSpacing }],

    // Title sizes - Complete hierarchy
    'title-5xl': [typeScale.title['5xl'].fontSize, { lineHeight: typeScale.title['5xl'].lineHeight, letterSpacing: typeScale.title['5xl'].letterSpacing, fontWeight: typeScale.title['5xl'].fontWeight }],
    'title-4xl': [typeScale.title['4xl'].fontSize, { lineHeight: typeScale.title['4xl'].lineHeight, letterSpacing: typeScale.title['4xl'].letterSpacing, fontWeight: typeScale.title['4xl'].fontWeight }],
    'title-3xl': [typeScale.title['3xl'].fontSize, { lineHeight: typeScale.title['3xl'].lineHeight, letterSpacing: typeScale.title['3xl'].letterSpacing, fontWeight: typeScale.title['3xl'].fontWeight }],
    'title-2xl': [typeScale.title['2xl'].fontSize, { lineHeight: typeScale.title['2xl'].lineHeight, letterSpacing: typeScale.title['2xl'].letterSpacing, fontWeight: typeScale.title['2xl'].fontWeight }],
    'title-xl': [typeScale.title.xl.fontSize, { lineHeight: typeScale.title.xl.lineHeight, letterSpacing: typeScale.title.xl.letterSpacing, fontWeight: typeScale.title.xl.fontWeight }],
    'title-l': [typeScale.title.l.fontSize, { lineHeight: typeScale.title.l.lineHeight, letterSpacing: typeScale.title.l.letterSpacing, fontWeight: typeScale.title.l.fontWeight }],
    'title-m': [typeScale.title.m.fontSize, { lineHeight: typeScale.title.m.lineHeight, letterSpacing: typeScale.title.m.letterSpacing, fontWeight: typeScale.title.m.fontWeight }],

    // Title medium weight variants
    'title-3xl-medium': [typeScale.titleMedium['3xl'].fontSize, { lineHeight: typeScale.titleMedium['3xl'].lineHeight, letterSpacing: typeScale.titleMedium['3xl'].letterSpacing, fontWeight: typeScale.titleMedium['3xl'].fontWeight }],
    'title-2xl-medium': [typeScale.titleMedium['2xl'].fontSize, { lineHeight: typeScale.titleMedium['2xl'].lineHeight, letterSpacing: typeScale.titleMedium['2xl'].letterSpacing, fontWeight: typeScale.titleMedium['2xl'].fontWeight }],

    // Title semibold variants
    'title-5xl-semibold': [typeScale.titleSemibold['5xl'].fontSize, { lineHeight: typeScale.titleSemibold['5xl'].lineHeight, letterSpacing: typeScale.titleSemibold['5xl'].letterSpacing, fontWeight: typeScale.titleSemibold['5xl'].fontWeight }],
    'title-4xl-semibold': [typeScale.titleSemibold['4xl'].fontSize, { lineHeight: typeScale.titleSemibold['4xl'].lineHeight, letterSpacing: typeScale.titleSemibold['4xl'].letterSpacing, fontWeight: typeScale.titleSemibold['4xl'].fontWeight }],
    'title-xl-semibold': [typeScale.titleSemibold.xl.fontSize, { lineHeight: typeScale.titleSemibold.xl.lineHeight, letterSpacing: typeScale.titleSemibold.xl.letterSpacing, fontWeight: typeScale.titleSemibold.xl.fontWeight }],
    'title-l-semibold': [typeScale.titleSemibold.l.fontSize, { lineHeight: typeScale.titleSemibold.l.lineHeight, letterSpacing: typeScale.titleSemibold.l.letterSpacing, fontWeight: typeScale.titleSemibold.l.fontWeight }],
    'title-m-semibold': [typeScale.titleSemibold.m.fontSize, { lineHeight: typeScale.titleSemibold.m.lineHeight, letterSpacing: typeScale.titleSemibold.m.letterSpacing, fontWeight: typeScale.titleSemibold.m.fontWeight }],

    // Heading sizes (kept for backward compatibility)
    'heading-4xl': [typeScale.heading['4xl'].fontSize, { lineHeight: typeScale.heading['4xl'].lineHeight, letterSpacing: typeScale.heading['4xl'].letterSpacing }],
    'heading-3xl': [typeScale.heading['3xl'].fontSize, { lineHeight: typeScale.heading['3xl'].lineHeight, letterSpacing: typeScale.heading['3xl'].letterSpacing }],
    'heading-2xl': [typeScale.heading['2xl'].fontSize, { lineHeight: typeScale.heading['2xl'].lineHeight, letterSpacing: typeScale.heading['2xl'].letterSpacing }],
    'heading-xl': [typeScale.heading.xl.fontSize, { lineHeight: typeScale.heading.xl.lineHeight, letterSpacing: typeScale.heading.xl.letterSpacing }],
    'heading-lg': [typeScale.heading.lg.fontSize, { lineHeight: typeScale.heading.lg.lineHeight, letterSpacing: typeScale.heading.lg.letterSpacing }],

    // Body sizes - Complete hierarchy
    'body-xl': [typeScale.body.xl.fontSize, { lineHeight: typeScale.body.xl.lineHeight, fontWeight: typeScale.body.xl.fontWeight }],
    'body-l': [typeScale.body.l.fontSize, { lineHeight: typeScale.body.l.lineHeight, fontWeight: typeScale.body.l.fontWeight }],
    'body-m': [typeScale.body.m.fontSize, { lineHeight: typeScale.body.m.lineHeight, fontWeight: typeScale.body.m.fontWeight }],
    'body-s': [typeScale.body.s.fontSize, { lineHeight: typeScale.body.s.lineHeight, fontWeight: typeScale.body.s.fontWeight }],
    'body-xs': [typeScale.body.xs.fontSize, { lineHeight: typeScale.body.xs.lineHeight, fontWeight: typeScale.body.xs.fontWeight }],

    // Body semibold variants
    'body-l-semibold': [typeScale.bodySemibold.l.fontSize, { lineHeight: typeScale.bodySemibold.l.lineHeight, fontWeight: typeScale.bodySemibold.l.fontWeight }],
    'body-m-semibold': [typeScale.bodySemibold.m.fontSize, { lineHeight: typeScale.bodySemibold.m.lineHeight, fontWeight: typeScale.bodySemibold.m.fontWeight }],
    'body-s-semibold': [typeScale.bodySemibold.s.fontSize, { lineHeight: typeScale.bodySemibold.s.lineHeight, fontWeight: typeScale.bodySemibold.s.fontWeight }],
    'body-xs-semibold': [typeScale.bodySemibold.xs.fontSize, { lineHeight: typeScale.bodySemibold.xs.lineHeight, fontWeight: typeScale.bodySemibold.xs.fontWeight }],

    // Legacy body sizes (for backward compatibility)
    'body-lg': [typeScale.body.lg.fontSize, { lineHeight: typeScale.body.lg.lineHeight }],
    'body-base': [typeScale.body.base.fontSize, { lineHeight: typeScale.body.base.lineHeight }],
    'body-sm': [typeScale.body.sm.fontSize, { lineHeight: typeScale.body.sm.lineHeight }],

    // Interactive sizes
    'button-lg': [typeScale.interactive.button.lg.fontSize, { lineHeight: typeScale.interactive.button.lg.lineHeight }],
    'button-base': [typeScale.interactive.button.base.fontSize, { lineHeight: typeScale.interactive.button.base.lineHeight }],
    'button-sm': [typeScale.interactive.button.sm.fontSize, { lineHeight: typeScale.interactive.button.sm.lineHeight }],
  },

  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  }
} as const;

// ===== UTILITY FUNCTIONS =====

export const getTypographyStyle = (category: string, variant: string) => {
  // Helper to get typography styles programmatically
  const categories = { typeScale, semanticTypography };
  return categories[category as keyof typeof categories]?.[variant as any];
};

export const fontWeightName = (weight: number): string => {
  const weights: Record<number, string> = {
    300: 'Light',
    400: 'Regular',
    500: 'Medium', 
    600: 'Semibold',
    700: 'Bold'
  };
  return weights[weight] || 'Regular';
};

export const pxToRem = (px: string): string => {
  const value = parseFloat(px.replace('px', ''));
  return `${value / 16}rem`;
};

// ===== TYPE DEFINITIONS =====

export type FontFamily = keyof typeof fontFamilies;
export type TypeScaleCategory = keyof typeof typeScale;
export type TypeScaleVariant<T extends TypeScaleCategory> = keyof typeof typeScale[T];
export type SemanticTypographyCategory = keyof typeof semanticTypography;

// ===== EXPORTS =====
export default {
  fontFamilies,
  typeScale,
  semanticTypography,
  tailwindTypography,
  getTypographyStyle,
  fontWeightName,
  pxToRem
};