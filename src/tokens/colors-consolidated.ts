// Comcast Business Design System - Consolidated Colors
// Single source of truth for all color definitions
// Generated: 2025-08-11

// ===== LAYER 1: RAW COLORS (FROM FIGMA) =====
// These are the exact colors extracted from Figma designs

export const rawColors = {
  // Primary Blue Family - From Figma extraction
  blue: {
    50: '#F5F8FF',    // Lightest blue tint
    100: '#EBF1FF',   // Very light blue
    200: '#C2D8FF',   // Light blue
    300: '#86B0FF',   // Medium light blue
    400: '#4A89FF',   // Medium blue
    500: '#0D62FF',   // PRIMARY BLUE (exact from Figma) ⭐
    600: '#0A4ECC',   // Hover blue (darker)
    700: '#083B99',   // Active blue (darkest interactive)
    800: '#052766',   // Very dark blue
    900: '#031433',   // Darkest blue
  },

  // Neutral Gray Family - From Figma extraction  
  neutral: {
    50: '#FCFCFC',    // Page backgrounds
    100: '#F9F9FA',   // Card backgrounds
    200: '#F1F2F6',   // Light borders
    300: '#DDDDE2',   // Surface pressed states
    400: '#B4B5BB',   // Secondary text
    500: '#9D9EA7',   // Body text
    600: '#70717D',   // ADA compliant gray
    700: '#595A69',   // Headings
    800: '#424454',   // High emphasis text
    900: '#2B2D3F',   // Maximum contrast
  },

  // Navy Family - For professional depth
  navy: {
    50: '#F2F5FF',    // Light navy backgrounds
    100: '#E5E6F1',   // Subtle navy tints
    200: '#C0C1DC',   // Light navy borders
    300: '#9EA1CA',   // FIGMA BORDER (secondary button) ⭐
    400: '#7F84B9',   // Interactive navy
    500: '#3E4796',   // Primary navy
    600: '#000A73',   // Deep navy
    700: '#00085E',   // Dark navy
    800: '#00074B',   // Very dark navy
    900: '#00031D',   // Maximum navy contrast
  },

  // Secondary Colors - From Figma color page (red, yellow, green, sky, lilac)
  red: {
    50: '#FFEBEF',    // Figma red-50
    100: '#FCC6D1',   // Figma red-100
    200: '#FAA3B1',   // Figma red-200
    300: '#F68190',   // Figma red-300
    400: '#F2616E',   // Figma red-400
    500: '#E7343C',   // Figma red-500
    600: '#D11314',   // Figma red-600
    700: '#AD1217',   // Figma red-700
    800: '#771117',   // Figma red-800
    900: '#330A0E',   // Figma red-900
  },

  yellow: {
    50: '#FFF1D6',    // Figma yellow-50
    100: '#FFE2A8',   // Figma yellow-100
    200: '#FFDB8F',   // Figma yellow-200
    300: '#FFC95C',   // Figma yellow-300
    400: '#FFBD3D',   // Figma yellow-400
    500: '#FFA701',   // Figma yellow-500
    600: '#DB9200',   // Figma yellow-600
    700: '#B27D00',   // Figma yellow-700
    800: '#705400',   // Figma yellow-800
    900: '#382800',   // Figma yellow-900
  },

  green: {
    50: '#EEFFDB',    // Figma green-50
    100: '#D8F8B9',   // Figma green-100
    200: '#C4F09D',   // Figma green-200
    300: '#A9EA7B',   // Figma green-300
    400: '#88E052',   // Figma green-400
    500: '#60CC2E',   // Figma green-500
    600: '#3BB112',   // Figma green-600
    700: '#1E8500',   // Figma green-700
    800: '#085408',   // Figma green-800
    900: '#05230C',   // Figma green-900
  },

  sky: {
    50: '#EBFDFF',
    100: '#E5FCFF',
    200: '#D5F8FF',
    300: '#B6EFFD',
    400: '#8BE1FA',
    500: '#59CAF1',   // Sky from Figma color page
    600: '#2FAEE0',
    700: '#1285B7',
    800: '#03496B',
    900: '#001A26',
  },

  lilac: {
    50: '#F7F7FF',
    100: '#F2F2FF',
    200: '#E4E2FF',
    300: '#CBC6FF',
    400: '#A89FFF',
    500: '#7561D4',   // Lilac (purple) from Figma color page
    600: '#5235A8',
    700: '#391A7D',
    800: '#260D52',
    900: '#130526',
  },

  // Essential Colors
  black: '#15172B',   // Default text (from Figma)
  white: '#FFFFFF',
} as const;

// ===== LAYER 2: SEMANTIC TOKENS =====
// These map raw colors to semantic purposes

export const semanticTokens = {
  // Primary brand identity
  brand: {
    primary: rawColors.blue[500],        // #0D62FF - Main brand color
    primaryHover: rawColors.blue[600],   // #0A4ECC - Hover state  
    primaryActive: rawColors.blue[700],  // #083B99 - Active state
    primaryLight: rawColors.blue[50],    // #F5F8FF - Light backgrounds
    primaryBorder: rawColors.blue[200],  // #C2D8FF - Light borders
  },

  // Text hierarchy
  text: {
    primary: rawColors.black,            // #15172B - Main text
    secondary: rawColors.neutral[700],   // #595A69 - Secondary text
    muted: rawColors.neutral[500],       // #9D9EA7 - Muted text
    disabled: rawColors.neutral[400],    // #B4B5BB - Disabled text
    inverse: rawColors.white,            // #FFFFFF - Text on dark
    link: rawColors.blue[500],          // #0D62FF - Links
    linkHover: rawColors.blue[600],     // #0A4ECC - Link hover
  },

  // Backgrounds
  surface: {
    primary: rawColors.white,            // #FFFFFF - Main backgrounds
    secondary: rawColors.neutral[50],    // #FCFCFC - Secondary surfaces
    tertiary: rawColors.neutral[100],    // #F9F9FA - Card backgrounds
    pressed: rawColors.neutral[300],     // #DDDDE2 - Pressed states
    overlay: 'rgba(43, 45, 63, 0.6)',  // Semi-transparent overlay
  },

  // Borders
  border: {
    default: rawColors.neutral[200],     // #F1F2F6 - Default borders
    strong: rawColors.neutral[300],      // #DDDDE2 - Strong borders
    hover: rawColors.neutral[900],       // #2B2D3F - Hover borders
    focus: rawColors.blue[500],          // #0D62FF - Focus rings
    // Special Figma border color for secondary buttons
    figma: rawColors.navy[300],          // #9EA1CA - From Figma secondary button
  },

  // Interactive states
  interactive: {
    primary: rawColors.blue[500],        // #0D62FF - Primary buttons
    primaryHover: rawColors.blue[600],   // #0A4ECC - Primary hover
    primaryActive: rawColors.blue[700],  // #083B99 - Primary active
    secondary: rawColors.white,          // #FFFFFF - Secondary buttons
    secondaryHover: rawColors.blue[50],  // #F5F8FF - Secondary hover
    secondaryBorder: rawColors.navy[300], // #9EA1CA - Secondary border (Figma)
  },

  // Status/feedback colors
  status: {
    success: rawColors.green[500],       // #22C55E
    warning: rawColors.yellow[500],      // #EAB308
    error: rawColors.red[500],          // #EF4444
    info: rawColors.blue[400],          // #4A89FF
  },

  feedback: {
    successBg: rawColors.green[50],      // Success background
    warningBg: rawColors.yellow[50],     // Warning background
    errorBg: rawColors.red[50],          // Error background
    infoBg: rawColors.blue[50],         // Info background
  },

  // Data Visualization Colors
  dataVisualization: {
    // Categorical colors - for distinct categories/groups in charts
    categorical: {
      cat1: '#0D62FF',      // Category 1 - Primary blue
      cat2: '#3BB112',      // Category 2 - Green
      cat3: '#5235A8',      // Category 3 - Purple
      cat4: '#E7343C',      // Category 4 - Red
      cat5: '#03496B',      // Category 5 - Dark blue
      cat6: '#DB9200',      // Category 6 - Orange/yellow
    },
    
    // Sequential colors - for ordered data/gradients (7-step scale)
    sequential: {
      seq1: '#013841',    // Sequential 1 - Darkest
      seq2: '#055446',    // Sequential 2
      seq3: '#0A704B',    // Sequential 3
      seq4: '#0F864F',    // Sequential 4 - Mid-range
      seq5: '#139C53',    // Sequential 5
      seq6: '#26A54D',    // Sequential 6
      seq7: '#499F3C',    // Sequential 7 - Lightest
    },
    
    // Signal colors - for status/alerts in data
    signal: {
      positive: '#4EA725',    // Positive outcomes
      low: '#CA8700',         // Low priority/risk
      medium: '#E86711',      // Medium priority/risk
      high: '#AD1217',        // High priority/risk
      critical: '#771117',    // Critical priority/risk
      neutral: '#949495',     // Neutral/no data
    },
  },
} as const;

// ===== LAYER 3: COMPONENT TOKENS =====
// These are specific to component implementations

export const componentTokens = {
  button: {
    // Primary button (default)
    primaryBg: semanticTokens.interactive.primary,          // #0D62FF
    primaryBgHover: semanticTokens.interactive.primaryHover, // #0A4ECC
    primaryBgActive: semanticTokens.interactive.primaryActive, // #083B99
    primaryText: semanticTokens.text.inverse,               // #FFFFFF
    
    // Secondary button
    secondaryBg: semanticTokens.interactive.secondary,      // #FFFFFF
    secondaryBgHover: semanticTokens.interactive.secondaryHover, // #F5F8FF
    secondaryText: semanticTokens.brand.primary,           // #0D62FF
    secondaryBorder: semanticTokens.border.figma,          // #9EA1CA (Figma)
    secondaryBorderHover: semanticTokens.brand.primary,    // #0D62FF
    
    // Destructive/danger button
    dangerBg: semanticTokens.status.error,                 // #EF4444
    dangerBgHover: rawColors.red[600],                     // Darker red hover
    dangerBgActive: rawColors.red[700],                    // Darkest red active
    dangerText: semanticTokens.text.inverse,              // #FFFFFF
  },
} as const;

// ===== TAILWIND CSS COMPATIBLE EXPORT =====
export const tailwindColors = {
  // Primary Brand Colors
  primary: rawColors.blue,          // primary-500 = #0D62FF ✅
  neutral: rawColors.neutral,
  navy: rawColors.navy,
  
  // Secondary Brand Colors (from Figma color page)
  red: rawColors.red,               // Red from Figma
  yellow: rawColors.yellow,         // Yellow from Figma  
  green: rawColors.green,           // Green from Figma
  sky: rawColors.sky,               // Sky from Figma
  lilac: rawColors.lilac,           // Lilac (purple) from Figma
  
  // Semantic color mappings for backward compatibility
  success: rawColors.green,         // Maps to green from Figma
  warning: rawColors.yellow,        // Maps to yellow from Figma
  error: rawColors.red,             // Maps to red from Figma
  info: rawColors.sky,              // Maps to sky from Figma
  
  // Special Figma colors for backward compatibility
  'figma-border': rawColors.navy[300], // #9EA1CA - Secondary button border
  'figma-blue': {
    50: rawColors.blue[50],
    100: rawColors.blue[100],
    500: rawColors.blue[500],      // #0D62FF
    600: rawColors.blue[600],      // #0A4ECC  
    700: rawColors.blue[700],      // #083B99
  },
  
  // Data Visualization Colors
  'data-categorical': semanticTokens.dataVisualization.categorical,
  'data-sequential': semanticTokens.dataVisualization.sequential,
  'data-signal': semanticTokens.dataVisualization.signal,
  
  // Essential colors
  black: rawColors.black,
  white: rawColors.white,
} as const;

// ===== UTILITY FUNCTIONS =====
export const getColor = (
  path: string, 
  fallback: string = rawColors.black
): string => {
  const keys = path.split('.');
  let value: any = { rawColors, semanticTokens, componentTokens };
  
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return fallback;
  }
  
  return typeof value === 'string' ? value : fallback;
};

// Color validation
export const isValidColor = (color: string): boolean => {
  return /^#[0-9A-F]{6}$/i.test(color);
};

// ===== EXPORTS =====
export { rawColors as colors };
export default {
  rawColors,
  semanticTokens, 
  componentTokens,
  tailwindColors,
  getColor,
  isValidColor,
};