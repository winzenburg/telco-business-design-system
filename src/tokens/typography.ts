// Comcast Business Design System - Typography Tokens

export const typography = {
  // Font Families
  fontFamily: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    secondary: '"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
  },

  // Font Sizes
  fontSize: {
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
  },

  // Font Weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Line Heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Text Styles (Predefined combinations)
  textStyles: {
    // Display styles
    display: {
      large: {
        fontSize: '3.75rem', // 6xl
        fontWeight: '700', // bold
        lineHeight: '1.25', // tight
        letterSpacing: '-0.025em', // tight
      },
      medium: {
        fontSize: '3rem', // 5xl
        fontWeight: '700', // bold
        lineHeight: '1.25', // tight
        letterSpacing: '-0.025em', // tight
      },
      small: {
        fontSize: '2.25rem', // 4xl
        fontWeight: '700', // bold
        lineHeight: '1.25', // tight
        letterSpacing: '-0.025em', // tight
      },
    },

    // Heading styles
    heading: {
      h1: {
        fontSize: '1.875rem', // 3xl
        fontWeight: '700', // bold
        lineHeight: '1.25', // tight
        letterSpacing: '-0.025em', // tight
      },
      h2: {
        fontSize: '1.5rem', // 2xl
        fontWeight: '600', // semibold
        lineHeight: '1.375', // snug
        letterSpacing: '-0.025em', // tight
      },
      h3: {
        fontSize: '1.25rem', // xl
        fontWeight: '600', // semibold
        lineHeight: '1.375', // snug
        letterSpacing: '0em', // normal
      },
      h4: {
        fontSize: '1.125rem', // lg
        fontWeight: '600', // semibold
        lineHeight: '1.5', // normal
        letterSpacing: '0em', // normal
      },
      h5: {
        fontSize: '1rem', // base
        fontWeight: '600', // semibold
        lineHeight: '1.5', // normal
        letterSpacing: '0em', // normal
      },
      h6: {
        fontSize: '0.875rem', // sm
        fontWeight: '600', // semibold
        lineHeight: '1.5', // normal
        letterSpacing: '0em', // normal
      },
    },

    // Body text styles
    body: {
      large: {
        fontSize: '1.125rem', // lg
        fontWeight: '400', // normal
        lineHeight: '1.625', // relaxed
        letterSpacing: '0em', // normal
      },
      medium: {
        fontSize: '1rem', // base
        fontWeight: '400', // normal
        lineHeight: '1.625', // relaxed
        letterSpacing: '0em', // normal
      },
      small: {
        fontSize: '0.875rem', // sm
        fontWeight: '400', // normal
        lineHeight: '1.5', // normal
        letterSpacing: '0em', // normal
      },
      xs: {
        fontSize: '0.75rem', // xs
        fontWeight: '400', // normal
        lineHeight: '1.5', // normal
        letterSpacing: '0em', // normal
      },
    },

    // Label styles
    label: {
      large: {
        fontSize: '1rem', // base
        fontWeight: '500', // medium
        lineHeight: '1.5', // normal
        letterSpacing: '0.025em', // wide
      },
      medium: {
        fontSize: '0.875rem', // sm
        fontWeight: '500', // medium
        lineHeight: '1.5', // normal
        letterSpacing: '0.025em', // wide
      },
      small: {
        fontSize: '0.75rem', // xs
        fontWeight: '500', // medium
        lineHeight: '1.5', // normal
        letterSpacing: '0.025em', // wide
      },
    },

    // Caption styles
    caption: {
      fontSize: '0.75rem', // xs
      fontWeight: '400', // normal
      lineHeight: '1.5', // normal
      letterSpacing: '0.025em', // wide
    },

    // Code styles
    code: {
      inline: {
        fontSize: '0.875rem', // sm
        fontWeight: '400', // normal
        lineHeight: '1.5', // normal
        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
      },
      block: {
        fontSize: '0.875rem', // sm
        fontWeight: '400', // normal
        lineHeight: '1.625', // relaxed
        fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
      },
    },
  },
} as const;

// Typography type definitions
export type FontFamily = keyof typeof typography.fontFamily;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type LineHeight = keyof typeof typography.lineHeight;
export type LetterSpacing = keyof typeof typography.letterSpacing;
export type TextStyle = keyof typeof typography.textStyles;

// Utility function to get typography value
export const getTypography = (
  property: 'fontFamily' | 'fontSize' | 'fontWeight' | 'lineHeight' | 'letterSpacing',
  token: string
): string => {
  return typography[property][token as keyof typeof typography[typeof property]];
};

// Utility function to get text style
export const getTextStyle = (style: TextStyle): Record<string, string> => {
  return typography.textStyles[style];
}; 