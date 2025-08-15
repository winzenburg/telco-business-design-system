// Comcast Business Design System - Grid & Layout System
// Adaptive design across 3 breakpoints: Desktop (1440px), Tablet (768px), Mobile (375px)

// Core breakpoints for adaptive design
export const breakpoints = {
  mobile: '375px',   // Small - Mobile first
  tablet: '768px',   // Medium - Tablet
  desktop: '1440px', // Large - Desktop
} as const;

// Responsive breakpoint utilities (min-width media queries)
export const mediaQueries = {
  mobile: `@media (min-width: ${breakpoints.mobile})`,
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
  
  // Max-width queries for mobile-first approach
  mobileOnly: `@media (max-width: ${parseInt(breakpoints.tablet) - 1}px)`,
  tabletOnly: `@media (min-width: ${breakpoints.tablet}) and (max-width: ${parseInt(breakpoints.desktop) - 1}px)`,
  desktopOnly: `@media (min-width: ${breakpoints.desktop})`,
} as const;

// Grid configuration for each breakpoint
export const grid = {
  mobile: {
    columns: 6,
    gutters: '8px',    // 2 * 4px baseline
    margins: '8px',    // 2 * 4px baseline
    maxWidth: breakpoints.mobile,
    containerPadding: '8px',
  },
  tablet: {
    columns: 6,
    gutters: '20px',   // 5 * 4px baseline
    margins: '20px',   // 5 * 4px baseline
    maxWidth: breakpoints.tablet,
    containerPadding: '20px',
  },
  desktop: {
    columns: 12,
    gutters: '20px',   // 5 * 4px baseline
    margins: '20px',   // 5 * 4px baseline
    maxWidth: breakpoints.desktop,
    containerPadding: '20px',
  },
} as const;

// Container max-widths and responsive behavior
export const containers = {
  // Fluid containers that adapt to breakpoints
  fluid: {
    mobile: '100%',
    tablet: '100%',
    desktop: '100%',
  },
  
  // Fixed max-width containers
  fixed: {
    mobile: breakpoints.mobile,
    tablet: breakpoints.tablet,
    desktop: breakpoints.desktop,
  },
  
  // Content containers with optimal reading widths
  content: {
    mobile: '100%',
    tablet: '720px',   // Slightly less than tablet breakpoint
    desktop: '1200px', // Optimal content width for desktop
  },
} as const;

// Column calculations and utilities
export const columns = {
  // Column width calculations (accounting for gutters and margins)
  getColumnWidth: (breakpoint: keyof typeof grid, columnSpan: number) => {
    const config = grid[breakpoint];
    const totalGutters = (config.columns - 1) * parseInt(config.gutters);
    const totalMargins = 2 * parseInt(config.margins);
    const availableWidth = parseInt(config.maxWidth) - totalGutters - totalMargins;
    const singleColumnWidth = availableWidth / config.columns;
    const spanGutters = (columnSpan - 1) * parseInt(config.gutters);
    return `${(singleColumnWidth * columnSpan) + spanGutters}px`;
  },
  
  // Column span utilities for each breakpoint
  mobile: {
    1: '1/6',   // 1 of 6 columns
    2: '2/6',   // 2 of 6 columns (1/3)
    3: '3/6',   // 3 of 6 columns (1/2)
    4: '4/6',   // 4 of 6 columns (2/3)
    5: '5/6',   // 5 of 6 columns
    6: '6/6',   // Full width
  },
  
  tablet: {
    1: '1/6',   // 1 of 6 columns
    2: '2/6',   // 2 of 6 columns (1/3)
    3: '3/6',   // 3 of 6 columns (1/2)
    4: '4/6',   // 4 of 6 columns (2/3)
    5: '5/6',   // 5 of 6 columns
    6: '6/6',   // Full width
  },
  
  desktop: {
    1: '1/12',  // 1 of 12 columns
    2: '2/12',  // 2 of 12 columns (1/6)
    3: '3/12',  // 3 of 12 columns (1/4)
    4: '4/12',  // 4 of 12 columns (1/3)
    5: '5/12',  // 5 of 12 columns
    6: '6/12',  // 6 of 12 columns (1/2)
    7: '7/12',  // 7 of 12 columns
    8: '8/12',  // 8 of 12 columns (2/3)
    9: '9/12',  // 9 of 12 columns (3/4)
    10: '10/12', // 10 of 12 columns (5/6)
    11: '11/12', // 11 of 12 columns
    12: '12/12', // Full width
  },
} as const;

// Layout patterns and common grid configurations
export const layoutPatterns = {
  // Two-column layouts
  twoColumn: {
    mobile: { main: 6, sidebar: 6 },    // Stacked on mobile
    tablet: { main: 4, sidebar: 2 },    // 2/3 + 1/3 on tablet
    desktop: { main: 8, sidebar: 4 },   // 2/3 + 1/3 on desktop
  },
  
  // Three-column layouts
  threeColumn: {
    mobile: { left: 6, main: 6, right: 6 }, // All stacked on mobile
    tablet: { left: 2, main: 2, right: 2 }, // Equal thirds on tablet
    desktop: { left: 3, main: 6, right: 3 }, // 1/4 + 1/2 + 1/4 on desktop
  },
  
  // Hero/featured layouts
  hero: {
    mobile: { content: 6 },    // Full width
    tablet: { content: 6 },    // Full width
    desktop: { content: 12 },  // Full width
  },
  
  // Content with sidebar
  contentSidebar: {
    mobile: { content: 6, sidebar: 6 },   // Stacked
    tablet: { content: 4, sidebar: 2 },   // 2/3 + 1/3
    desktop: { content: 9, sidebar: 3 },  // 3/4 + 1/4
  },
  
  // Card grids
  cardGrid: {
    mobile: { card: 6 },       // 1 per row
    tablet: { card: 3 },       // 2 per row
    desktop: { card: 4 },      // 3 per row
  },
} as const;

// Responsive spacing that aligns with grid system
export const responsiveSpacing = {
  mobile: {
    containerPadding: grid.mobile.margins,
    sectionSpacing: '16px',  // 4 * 4px baseline
    elementSpacing: '8px',   // 2 * 4px baseline
    gutters: grid.mobile.gutters,
  },
  tablet: {
    containerPadding: grid.tablet.margins,
    sectionSpacing: '24px',  // 6 * 4px baseline
    elementSpacing: '12px',  // 3 * 4px baseline
    gutters: grid.tablet.gutters,
  },
  desktop: {
    containerPadding: grid.desktop.margins,
    sectionSpacing: '32px',  // 8 * 4px baseline
    elementSpacing: '16px',  // 4 * 4px baseline
    gutters: grid.desktop.gutters,
  },
} as const;

// CSS Grid utilities
export const cssGrid = {
  // CSS Grid template columns for each breakpoint
  mobile: `repeat(${grid.mobile.columns}, 1fr)`,
  tablet: `repeat(${grid.tablet.columns}, 1fr)`,
  desktop: `repeat(${grid.desktop.columns}, 1fr)`,
  
  // Gap values that match gutter system
  gap: {
    mobile: grid.mobile.gutters,
    tablet: grid.tablet.gutters,
    desktop: grid.desktop.gutters,
  },
} as const;

// Flexbox utilities aligned with grid system
export const flexbox = {
  // Gap values for flexbox layouts
  gap: {
    mobile: grid.mobile.gutters,
    tablet: grid.tablet.gutters,
    desktop: grid.desktop.gutters,
  },
  
  // Common flex patterns
  patterns: {
    // Row with responsive wrapping
    responsiveRow: {
      mobile: 'column',      // Stack on mobile
      tablet: 'row',         // Row on tablet+
      desktop: 'row',        // Row on desktop
    },
    
    // Responsive justify content
    justify: {
      mobile: 'center',      // Center on mobile
      tablet: 'space-between', // Space between on tablet+
      desktop: 'space-between', // Space between on desktop
    },
  },
} as const;

// Grid system usage guidelines
export const gridUsage = {
  breakpoints: {
    description: "Adaptive design with 3 key breakpoints",
    values: [
      {
        name: "Mobile (Small)",
        size: breakpoints.mobile,
        columns: grid.mobile.columns,
        gutters: grid.mobile.gutters,
        margins: grid.mobile.margins,
        usage: "Single column layouts, stacked components, compact spacing"
      },
      {
        name: "Tablet (Medium)", 
        size: breakpoints.tablet,
        columns: grid.tablet.columns,
        gutters: grid.tablet.gutters,
        margins: grid.tablet.margins,
        usage: "Two-column layouts, moderate spacing, transitional sizing"
      },
      {
        name: "Desktop (Large)",
        size: breakpoints.desktop,
        columns: grid.desktop.columns,
        gutters: grid.desktop.gutters,
        margins: grid.desktop.margins,
        usage: "Multi-column layouts, optimal reading widths, generous spacing"
      }
    ]
  },
  
  bestPractices: {
    mobile: [
      "Design mobile-first with single column layouts",
      "Use 8px gutters and margins for compact spacing",
      "Stack components vertically for better readability",
      "Prioritize essential content and actions"
    ],
    tablet: [
      "Introduce two-column layouts where appropriate",
      "Increase spacing to 20px gutters for better breathing room",
      "Balance content density with usability",
      "Consider landscape and portrait orientations"
    ],
    desktop: [
      "Utilize 12-column grid for flexible layouts",
      "Implement multi-column content where beneficial",
      "Maintain optimal line lengths for text content",
      "Use generous spacing for improved hierarchy"
    ]
  }
} as const;

// Utility functions
export const getBreakpoint = (width: number): keyof typeof breakpoints => {
  if (width >= parseInt(breakpoints.desktop)) return 'desktop';
  if (width >= parseInt(breakpoints.tablet)) return 'tablet';
  return 'mobile';
};

export const getGridConfig = (breakpoint: keyof typeof grid) => grid[breakpoint];

export const getColumnSpan = (breakpoint: keyof typeof columns, span: number) => {
  const breakpointColumns = columns[breakpoint];
  return breakpointColumns[span as keyof typeof breakpointColumns] || 'auto';
};

export const getResponsiveSpacing = (breakpoint: keyof typeof responsiveSpacing, property: keyof typeof responsiveSpacing.mobile) => {
  return responsiveSpacing[breakpoint][property];
};

// Tailwind CSS integration values
export const tailwindGridConfig = {
  screens: {
    sm: breakpoints.mobile,
    md: breakpoints.tablet,
    lg: breakpoints.desktop,
  },
  
  gridTemplateColumns: {
    'mobile': cssGrid.mobile,
    'tablet': cssGrid.tablet,
    'desktop': cssGrid.desktop,
  },
  
  gap: {
    'mobile': grid.mobile.gutters,
    'tablet': grid.tablet.gutters,
    'desktop': grid.desktop.gutters,
  },
  
  padding: {
    'container-mobile': grid.mobile.margins,
    'container-tablet': grid.tablet.margins,
    'container-desktop': grid.desktop.margins,
  },
} as const;

// Export everything as default
export default {
  breakpoints,
  mediaQueries,
  grid,
  containers,
  columns,
  layoutPatterns,
  responsiveSpacing,
  cssGrid,
  flexbox,
  gridUsage,
  tailwindGridConfig,
  getBreakpoint,
  getGridConfig,
  getColumnSpan,
  getResponsiveSpacing,
} as const;

// Type definitions
export type Breakpoint = keyof typeof breakpoints;
export type GridConfig = typeof grid[Breakpoint];
export type LayoutPattern = keyof typeof layoutPatterns;