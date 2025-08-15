// Auto-generated grouped typography tokens from Figma
// Generated on: 2025-08-13T17:56:46.122Z
// Source: Figma Typography page with proper Title, Body, Action, Subtitle groups

export const typography = {
  title: {
    "xxl": {
        "fontFamily": "Montserrat",
        "fontSize": "48px",
        "fontWeight": 400,
        "lineHeight": "76.80000305175781px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_figma": {
            "id": "664:19263",
            "originalName": "Title 2XL",
            "fontSize": 48,
            "fontFamily": "Montserrat",
            "fontWeight": 400,
            "lineHeight": 76.80000305175781,
            "letterSpacing": 0
        }
    },
    "xl": {
        "fontFamily": "Roboto Mono",
        "fontSize": "11.5600004196167px",
        "fontWeight": 400,
        "lineHeight": "23.1200008392334px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_figma": {
            "id": "664:19266",
            "originalName": "type/title/7XL",
            "fontSize": 11.5600004196167,
            "fontFamily": "Roboto Mono",
            "fontWeight": 400,
            "lineHeight": 23.1200008392334,
            "letterSpacing": 0
        }
    },
    "m": {
        "fontFamily": "Montserrat",
        "fontSize": "32px",
        "fontWeight": 500,
        "lineHeight": "41.599998474121094px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_figma": {
            "id": "2222:25029",
            "originalName": "Text Copy 3",
            "fontSize": 32,
            "fontFamily": "Montserrat",
            "fontWeight": 500,
            "lineHeight": 41.599998474121094,
            "letterSpacing": 0
        }
    }
},
  body: {
    "l": {
        "fontFamily": "Roboto Mono",
        "fontSize": "11.5600004196167px",
        "fontWeight": 400,
        "lineHeight": "23.1200008392334px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_figma": {
            "id": "5780:135002",
            "originalName": "type/body/L",
            "fontSize": 11.5600004196167,
            "fontFamily": "Roboto Mono",
            "fontWeight": 400,
            "lineHeight": 23.1200008392334,
            "letterSpacing": 0
        }
    },
    "m": {
        "fontFamily": "Roboto Mono",
        "fontSize": "11.5600004196167px",
        "fontWeight": 400,
        "lineHeight": "23.1200008392334px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_figma": {
            "id": "674:56536",
            "originalName": "type/body/M",
            "fontSize": 11.5600004196167,
            "fontFamily": "Roboto Mono",
            "fontWeight": 400,
            "lineHeight": 23.1200008392334,
            "letterSpacing": 0
        }
    },
    "s": {
        "fontFamily": "Roboto Mono",
        "fontSize": "11.5600004196167px",
        "fontWeight": 400,
        "lineHeight": "23.1200008392334px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_figma": {
            "id": "664:19830",
            "originalName": "type/body/S",
            "fontSize": 11.5600004196167,
            "fontFamily": "Roboto Mono",
            "fontWeight": 400,
            "lineHeight": 23.1200008392334,
            "letterSpacing": 0
        }
    },
    "xl": {
        "fontFamily": "Roboto Mono",
        "fontSize": "11.5600004196167px",
        "fontWeight": 400,
        "lineHeight": "23.1200008392334px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_figma": {
            "id": "664:19575",
            "originalName": "type/body/XL",
            "fontSize": 11.5600004196167,
            "fontFamily": "Roboto Mono",
            "fontWeight": 400,
            "lineHeight": 23.1200008392334,
            "letterSpacing": 0
        }
    }
},
  action: {
    "default": {
        "fontFamily": "Montserrat",
        "fontSize": "40px",
        "fontWeight": 500,
        "lineHeight": "64px",
        "letterSpacing": "normal",
        "textTransform": "none",
        "textDecoration": "none",
        "_figma": {
            "id": "664:19672",
            "originalName": "Action",
            "fontSize": 40,
            "fontFamily": "Montserrat",
            "fontWeight": 500,
            "lineHeight": 64,
            "letterSpacing": 0
        }
    }
},
  subtitle: {}
};

// Flattened typography for easy access
export const flatTypography = {
  // Title variants
  titleXxl: typography.title.xxl,
  titleXl: typography.title.xl,
  titleM: typography.title.m,
  
  // Body variants  
  bodyL: typography.body.l,
  bodyM: typography.body.m,
  bodyS: typography.body.s,
  bodyXl: typography.body.xl,
  
  // Action and Subtitle
  action: typography.action.default,
  
};

// Quick access to common typography
export const commonTypography = {
  // Display (largest title)
  display: typography.title.xxl || typography.title.xl || null,
  
  // Headings
  h1: typography.title.xl || typography.title.l || null,
  h2: typography.title.l || typography.title.m || null, 
  h3: typography.title.m || typography.title.s || null,
  h4: typography.title.s || typography.title.xs || null,
  h5: typography.subtitle.default || null,
  h6: typography.title.xs || null,
  
  // Body text
  bodyLarge: typography.body.l || typography.body.xl || null,
  body: typography.body.m || typography.body.l || null,
  bodySmall: typography.body.s || null,
  bodyExtraSmall: typography.body.xs || null,
  
  // UI elements
  action: typography.action.default || null,
  subtitle: typography.subtitle.default || null,
  
  // Special highlight - Title 2XL (48px)
  hero: typography.title.xxl || null
};

// Font families used
export const fontFamilies = {
  'montserrat': 'Montserrat',
  'robotomono': 'Roboto Mono'
};

// Utility functions
export const getTypography = (category: string, size: string) => {
  const cat = typography[category as keyof typeof typography];
  return cat && typeof cat === 'object' ? cat[size as keyof typeof cat] : undefined;
};

export const getCommonTypography = (style: string) => {
  return commonTypography[style as keyof typeof commonTypography];
};

export default typography;
