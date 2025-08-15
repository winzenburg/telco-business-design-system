// Comcast Business Design System - Corrected Typography from Figma
// Generated: 2025-08-13 
// Corrected to use proper Montserrat and Lato fonts as per Figma design

export const typography = {
  title: {
    "xxl": {
        "fontFamily": "Montserrat",
        "fontSize": "48px",
        "fontWeight": 600,
        "lineHeight": "58px",
        "letterSpacing": "-0.02em",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Title 2XL",
        "_usage": "Hero headings, page titles"
    },
    "xl": {
        "fontFamily": "Montserrat",
        "fontSize": "40px", 
        "fontWeight": 600,
        "lineHeight": "48px",
        "letterSpacing": "-0.01em",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Title XL",
        "_usage": "Section headings, large titles"
    },
    "l": {
        "fontFamily": "Montserrat",
        "fontSize": "32px",
        "fontWeight": 500,
        "lineHeight": "42px",
        "letterSpacing": "normal",
        "textTransform": "none", 
        "textDecoration": "none",
        "_source": "Title L",
        "_usage": "Card titles, modal headers"
    },
    "m": {
        "fontFamily": "Montserrat",
        "fontSize": "24px",
        "fontWeight": 500,
        "lineHeight": "32px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Title M",
        "_usage": "Component headings, subsection titles"
    },
    "s": {
        "fontFamily": "Montserrat",
        "fontSize": "20px",
        "fontWeight": 500,
        "lineHeight": "28px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Title S",
        "_usage": "Small headings, form section titles"
    },
    "xs": {
        "fontFamily": "Montserrat",
        "fontSize": "18px",
        "fontWeight": 500,
        "lineHeight": "26px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Title XS",
        "_usage": "Micro headings, labels"
    }
  },
  body: {
    "xl": {
        "fontFamily": "Lato",
        "fontSize": "18px",
        "fontWeight": 400,
        "lineHeight": "28px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Body XL",
        "_usage": "Large body text, intro paragraphs"
    },
    "l": {
        "fontFamily": "Lato",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": "26px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Body L",
        "_usage": "Standard body text, descriptions"
    },
    "m": {
        "fontFamily": "Lato",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": "22px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Body M",
        "_usage": "Secondary text, captions"
    },
    "s": {
        "fontFamily": "Lato",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": "18px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Body S",
        "_usage": "Small text, helper text, footnotes"
    },
    "xs": {
        "fontFamily": "Lato",
        "fontSize": "10px",
        "fontWeight": 400,
        "lineHeight": "16px",
        "letterSpacing": "0.02em",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Body XS",
        "_usage": "Micro text, timestamps, metadata"
    }
  },
  action: {
    "l": {
        "fontFamily": "Montserrat",
        "fontSize": "18px",
        "fontWeight": 600,
        "lineHeight": "18px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Action L",
        "_usage": "Large button text, primary CTAs"
    },
    "m": {
        "fontFamily": "Montserrat",
        "fontSize": "16px",
        "fontWeight": 600,
        "lineHeight": "16px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Action M",
        "_usage": "Standard button text, links"
    },
    "s": {
        "fontFamily": "Montserrat",
        "fontSize": "14px",
        "fontWeight": 600,
        "lineHeight": "14px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Action S",
        "_usage": "Small button text, compact CTAs"
    }
  },
  label: {
    "l": {
        "fontFamily": "Montserrat",
        "fontSize": "16px",
        "fontWeight": 500,
        "lineHeight": "24px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Label L",
        "_usage": "Form labels, navigation items"
    },
    "m": {
        "fontFamily": "Montserrat",
        "fontSize": "14px",
        "fontWeight": 500,
        "lineHeight": "20px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Label M",
        "_usage": "Standard labels, menu items"
    },
    "s": {
        "fontFamily": "Montserrat",
        "fontSize": "12px",
        "fontWeight": 500,
        "lineHeight": "18px",
        "letterSpacing": "0.01em",
        "textTransform": "none",
        "textDecoration": "none",
        "_source": "Label S",
        "_usage": "Small labels, tags, badges"
    }
  }
};

// Flattened typography for easy access
export const flatTypography = {
  // Title variants
  displayLarge: typography.title.xxl,
  displayMedium: typography.title.xl,
  headingLarge: typography.title.l,
  headingMedium: typography.title.m,
  headingSmall: typography.title.s,
  headingXSmall: typography.title.xs,
  
  // Body variants  
  bodyExtraLarge: typography.body.xl,
  bodyLarge: typography.body.l,
  bodyMedium: typography.body.m,
  bodySmall: typography.body.s,
  bodyXSmall: typography.body.xs,
  
  // Action and Label
  actionLarge: typography.action.l,
  actionMedium: typography.action.m,
  actionSmall: typography.action.s,
  
  labelLarge: typography.label.l,
  labelMedium: typography.label.m,
  labelSmall: typography.label.s,
};

// Semantic typography mappings
export const semanticTypography = {
  // Headings
  h1: typography.title.xxl,
  h2: typography.title.xl, 
  h3: typography.title.l,
  h4: typography.title.m,
  h5: typography.title.s,
  h6: typography.title.xs,
  
  // Body text
  paragraph: typography.body.l,
  paragraphLarge: typography.body.xl,
  paragraphSmall: typography.body.m,
  caption: typography.body.s,
  overline: typography.body.xs,
  
  // Interactive elements
  buttonPrimary: typography.action.m,
  buttonSecondary: typography.action.s,
  buttonLarge: typography.action.l,
  link: typography.action.s,
  
  // Form elements
  inputLabel: typography.label.m,
  inputText: typography.body.m,
  inputHelper: typography.body.s,
  inputError: typography.body.s,
  
  // Navigation
  navPrimary: typography.label.l,
  navSecondary: typography.label.m,
  breadcrumb: typography.label.s,
  
  // Data display
  tableHeader: typography.label.m,
  tableCell: typography.body.m,
  cardTitle: typography.title.m,
  cardText: typography.body.m,
};

// Font families with proper stacks
export const fontFamilies = {
  primary: {
    name: 'Montserrat',
    stack: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    usage: 'Headings, titles, buttons, labels, navigation',
    weights: [400, 500, 600, 700]
  },
  secondary: {
    name: 'Lato', 
    stack: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    usage: 'Body text, paragraphs, descriptions, content',
    weights: [300, 400, 500, 700]
  },
  monospace: {
    name: 'JetBrains Mono',
    stack: 'JetBrains Mono, "SF Mono", Monaco, Inconsolata, "Roboto Mono", monospace',
    usage: 'Code, technical content, data',
    weights: [400, 500, 600]
  }
};

// Typography scale with consistent rem values
export const typeScale = {
  // Display sizes
  display: {
    large: { size: '3rem', lineHeight: '3.5rem' },      // 48px
    medium: { size: '2.5rem', lineHeight: '3rem' },     // 40px
  },
  
  // Heading sizes
  heading: {
    large: { size: '2rem', lineHeight: '2.5rem' },      // 32px
    medium: { size: '1.5rem', lineHeight: '2rem' },     // 24px
    small: { size: '1.25rem', lineHeight: '1.75rem' },  // 20px
    xsmall: { size: '1.125rem', lineHeight: '1.625rem' }, // 18px
  },
  
  // Body sizes
  body: {
    xlarge: { size: '1.125rem', lineHeight: '1.75rem' }, // 18px
    large: { size: '1rem', lineHeight: '1.625rem' },     // 16px
    medium: { size: '0.875rem', lineHeight: '1.375rem' }, // 14px
    small: { size: '0.75rem', lineHeight: '1.125rem' },  // 12px
    xsmall: { size: '0.625rem', lineHeight: '1rem' },    // 10px
  },
  
  // Action sizes (buttons, links)
  action: {
    large: { size: '1.125rem', lineHeight: '1.125rem' }, // 18px
    medium: { size: '1rem', lineHeight: '1rem' },        // 16px
    small: { size: '0.875rem', lineHeight: '0.875rem' }, // 14px
  }
};

// Utility functions
export const getTypography = (category: keyof typeof typography, size: string) => {
  const cat = typography[category];
  return cat && typeof cat === 'object' ? cat[size as keyof typeof cat] : undefined;
};

export const getSemanticTypography = (style: keyof typeof semanticTypography) => {
  return semanticTypography[style];
};

export const getFontStack = (family: keyof typeof fontFamilies) => {
  return fontFamilies[family]?.stack || fontFamilies.primary.stack;
};

// CSS custom properties
export const typographyCSSVariables = {
  // Font families
  '--font-primary': fontFamilies.primary.stack,
  '--font-secondary': fontFamilies.secondary.stack,
  '--font-monospace': fontFamilies.monospace.stack,
  
  // Font sizes - using type scale
  '--text-display-lg': typeScale.display.large.size,
  '--text-display-md': typeScale.display.medium.size,
  '--text-heading-lg': typeScale.heading.large.size,
  '--text-heading-md': typeScale.heading.medium.size,
  '--text-heading-sm': typeScale.heading.small.size,
  '--text-heading-xs': typeScale.heading.xsmall.size,
  '--text-body-xl': typeScale.body.xlarge.size,
  '--text-body-lg': typeScale.body.large.size,
  '--text-body-md': typeScale.body.medium.size,
  '--text-body-sm': typeScale.body.small.size,
  '--text-body-xs': typeScale.body.xsmall.size,
  '--text-action-lg': typeScale.action.large.size,
  '--text-action-md': typeScale.action.medium.size,
  '--text-action-sm': typeScale.action.small.size,
  
  // Line heights
  '--leading-display-lg': typeScale.display.large.lineHeight,
  '--leading-display-md': typeScale.display.medium.lineHeight,
  '--leading-heading-lg': typeScale.heading.large.lineHeight,
  '--leading-heading-md': typeScale.heading.medium.lineHeight,
  '--leading-heading-sm': typeScale.heading.small.lineHeight,
  '--leading-heading-xs': typeScale.heading.xsmall.lineHeight,
  '--leading-body-xl': typeScale.body.xlarge.lineHeight,
  '--leading-body-lg': typeScale.body.large.lineHeight,
  '--leading-body-md': typeScale.body.medium.lineHeight,
  '--leading-body-sm': typeScale.body.small.lineHeight,
  '--leading-body-xs': typeScale.body.xsmall.lineHeight,
};

export default typography;