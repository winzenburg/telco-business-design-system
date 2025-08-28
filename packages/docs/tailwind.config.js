/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './stories/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
    '../components/**/*.{js,ts,jsx,tsx}',
    '../icons/src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    // Ensure Figma button colors are always included
    'bg-primary-400', 'bg-primary-500', 'bg-primary-600', 'bg-primary-700', 'bg-primary-800',
    'bg-primary-50', 'bg-primary-100',
    'bg-white', 'bg-transparent',
    'text-primary-500', 'text-primary-600', 'text-primary-700',
    'text-white', 'text-black/50', 'text-neutral-500', 'text-neutral-600',
    'border-primary-500', 'border-primary-600', 'border-figma-border',
    'border-white', 'border-neutral-300', 'border-neutral-400', 'border-transparent',
    // Hover states
    'hover:bg-primary-50', 'hover:bg-primary-500', 'hover:bg-primary-600',
    'hover:text-primary-600', 'hover:border-primary-500',
    'hover:shadow-[0_2px_8px_-3px_rgba(221,221,226,1)]',
    // Active states
    'active:bg-neutral-300', 'active:bg-primary-100', 'active:bg-primary-600', 'active:bg-primary-700', 'active:bg-primary-800',
    'active:text-primary-700', 'active:border-primary-600', 'active:translate-y-px',
    // Disabled states
    'disabled:bg-white', 'disabled:bg-transparent', 'disabled:bg-neutral-300',
    'disabled:text-black/50', 'disabled:text-neutral-500', 'disabled:text-neutral-600',
    'disabled:border-neutral-300', 'disabled:border-neutral-400',
    // Focus states
    'focus-visible:bg-transparent', 'focus-visible:text-primary-500',
    'focus-visible:border-white', 'focus-visible:border-figma-border',
    'focus-visible:shadow-[0_0_0_1.5px_#0D62FF]',
    'focus-visible:outline-2', 'focus-visible:outline-primary-500', 'focus-visible:outline-offset-2',
    // Loading states
    'data-[loading=true]:bg-primary-400', 'data-[loading=true]:bg-primary-500',
    'data-[loading=true]:bg-white', 'data-[loading=true]:bg-transparent',
    'data-[loading=true]:text-primary-500', 'data-[loading=true]:border-figma-border',
    // Layout and spacing - 4px grid system (8px, 12px, 16px, 20px, 24px)
    'space-y-2', 'space-y-3', 'space-y-4', 'space-y-5', 'space-y-6',
    'space-x-2', 'space-x-3', 'space-x-4', 'space-x-5', 'space-x-6',
    'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6',
    'p-2', 'p-3', 'p-4', 'p-5', 'p-6', 'px-2', 'px-3', 'px-4', 'px-5', 'px-6',
    'py-2', 'py-3', 'py-4', 'py-5', 'py-6',
    'rounded-[4px]', 'rounded-[6px]', 'py-[9px]', 'px-[13px]', 'gap-2.5',
    'appearance-none', 'border-0', 'inline-flex', 'items-center', 'justify-center',
    'h-10', 'shrink-0', 'font-lato', 'font-montserrat',
    // Size variants
    'size-8', 'size-10', 'size-12',
    // Additional safelist for consolidated colors
    ...Array.from({length: 10}, (_, i) => `bg-primary-${i*100}`),
    ...Array.from({length: 10}, (_, i) => `text-primary-${i*100}`),
    ...Array.from({length: 10}, (_, i) => `border-primary-${i*100}`),
    // Comcast Business destructive colors - Ensure these are included
    'bg-[#D11314]', 'hover:bg-[#B10E11]', 'active:bg-[#8A0A0D]',
    'text-[#D11314]', 'border-[#D11314]', 'focus-visible:outline-[#D11314]',
    // Border utilities
    'border', 'border-2', 'border-4',
  ],
  theme: {
    extend: {
      // Typography - Consolidated Font System
      fontFamily: {
        ...require('../tokens/typography-consolidated').tailwindTypography.fontFamily,
        'sans': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'lato': ['Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },

      // Typography Scales
      fontSize: {
        ...require('../tokens/typography-consolidated').tailwindTypography.fontSize,
      },

      // Spacing System - 4px baseline
      spacing: {
        ...require('../tokens/design-system-spacing').spacing,
        // Custom Figma button spacing
        '3.25': '13px', // 13px horizontal padding
        '2.25': '9px',  // 9px vertical padding
      },

      // Grid System - Adaptive design breakpoints
      screens: {
        ...require('../tokens/design-system-grid').tailwindGridConfig.screens,
      },

      gridTemplateColumns: {
        ...require('../tokens/design-system-grid').tailwindGridConfig.gridTemplateColumns,
      },

      // Elevation & Shadow System - From Figma analysis
      boxShadow: {
        ...require('../tokens/design-system-elevation').tailwindShadows,
      },
      
      // Comcast Business Brand Colors - Design System Colors
      colors: {
        // Use design system colors as primary color system
        ...require('../tokens/design-system-colors').colors,
        
        // Primary Brand Colors (Updated with Figma exact colors)
        primary: {
          50: '#F5F8FF',
          100: '#EBF1FF', 
          200: '#C2D8FF',
          300: '#86B0FF',
          400: '#4A89FF',
          500: '#0D62FF', // Primary Blue (exact from Figma)
          600: '#0A4ECC', // Hover state
          700: '#083B99', // Active state  
          800: '#052766',
          900: '#031433',
        },
        
        // Figma Button Specific Colors
        'figma-border': '#9EA1CA', // Secondary button border from Figma
        'figma-blue': {
          50: '#F5F8FF',
          100: '#EBF1FF', 
          500: '#0D62FF', // Primary blue from Figma
          600: '#0A4ECC', // Hover blue from Figma
          700: '#083B99', // Active blue from Figma
        },
        
        // Comcast Business Brand Colors - Destructive Actions
        'comcast-red': {
          50: '#FEF2F2',
          100: '#FEE2E2', 
          400: '#F87171',
          500: '#D11314', // Primary Comcast Business destructive red
          600: '#B10E11', // Hover state
          700: '#8A0A0D', // Active state
          800: '#7F1D1D',
          900: '#7F1D1D',
        },
      },
      // Transitions
      transitionDuration: {
        '150': '150ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      // Z-Index
      zIndex: {
        'hide': '-1',
        'auto': 'auto',
        'base': '0',
        'docked': '10',
        'dropdown': '1000',
        'sticky': '1100',
        'banner': '1200',
        'overlay': '1300',
        'modal': '1400',
        'popover': '1500',
        'skipLink': '1600',
        'toast': '1700',
        'tooltip': '1800',
      },
      // Accordion animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
  // Enable dark mode
  darkMode: 'class',
};