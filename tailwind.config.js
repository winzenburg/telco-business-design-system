/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
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
    'gap-1', 'gap-1.5', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6',
    // Flexbox utilities for badge alignment in tables
    'inline-flex', 'items-center', 'flex-shrink-0',
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
  ],
  theme: {
    extend: {
      // Typography - Consolidated Font System
      fontFamily: {
        'sans': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'lato': ['Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },

      // Typography Scales
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },

      // Spacing System - 4px baseline
      spacing: {
        // Custom Figma button spacing
        '3.25': '13px', // 13px horizontal padding
        '2.25': '9px',  // 9px vertical padding
      },

      // Grid System - Adaptive design breakpoints
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },

      // Elevation & Shadow System - From Figma analysis
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      
      // Comcast Business Brand Colors - NUCLEAR FIX: All hardcoded to prevent circular references
      colors: {
        // CRITICAL: ALL COLORS HARDCODED TO PREVENT CIRCULAR REFERENCES IN TAILWIND POSTCSS PROCESSING
        // DO NOT IMPORT TOKEN FILES OR USE DYNAMIC REFERENCES

        // Primary Brand Colors (Hardcoded from Figma)
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

        // Neutral Scale (Hardcoded)
        neutral: {
          50: '#FCFCFC',
          100: '#F9F9FA',
          200: '#F1F2F6',
          300: '#DDDDE2',
          400: '#B4B5BB',
          500: '#9D9EA7',
          600: '#70717D',
          700: '#595A69',
          800: '#424454',
          900: '#2B2D3F',
        },

        // Navy Scale (Hardcoded)
        navy: {
          50: '#F4F5F9',
          100: '#E9EBF3',
          200: '#D3D7E7',
          300: '#BDC3DB',
          400: '#A7AFCF',
          500: '#919BC3',
          600: '#7B87B7',
          700: '#6573AB',
          800: '#4F5F9F',
          900: '#394B93',
        },

        // Secondary Colors (Hardcoded)
        red: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },

        green: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },

        yellow: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
        },

        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },

        purple: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7C3AED',
          800: '#6D28D9',
          900: '#581C87',
        },

        sky: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },

        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },

        // Special Colors (Hardcoded)
        black: '#15172B',
        white: '#FFFFFF',

        // Semantic Intent Colors (Hardcoded direct values)
        intent: {
          primary: '#0D62FF',
          secondary: '#919BC3',
          success: '#22C55E',
          warning: '#EAB308',
          destructive: '#EF4444',
          info: '#0EA5E9',
        },

        // Text Colors (Hardcoded direct values)
        text: {
          primary: '#15172B',
          secondary: '#595A69',
          muted: '#70717D',
          inverse: '#FCFCFC',
        },

        // Background Colors (Hardcoded direct values)
        bg: {
          canvas: '#FCFCFC',
          surface: '#F9F9FA',
          muted: '#F1F2F6',
          inverse: '#2B2D3F',
        },

        // Border Colors (Hardcoded direct values)
        border: {
          default: '#70717D',
          muted: '#F1F2F6',
          strong: '#595A69',
          input: '#B4B5BB',      // Form input borders
          structural: '#DDDDE2', // Structural element borders
        },

        // Figma Button Specific Colors (Hardcoded)
        'figma-border': '#9EA1CA', // Secondary button border from Figma
        'figma-blue': {
          50: '#F5F8FF',
          100: '#EBF1FF',
          500: '#0D62FF', // Primary blue from Figma
          600: '#0A4ECC', // Hover blue from Figma
          700: '#083B99', // Active blue from Figma
        },

        // Chart Colors (Hardcoded)
        chart: {
          'cat-1': '#0D62FF',
          'cat-2': '#22C55E',
          'cat-3': '#EF4444',
          'cat-4': '#EAB308',
          'cat-5': '#A855F7',
          'cat-6': '#0EA5E9',
          'seq-1': '#F5F8FF',
          'seq-2': '#C2D8FF',
          'seq-3': '#86B0FF',
          'seq-4': '#4A89FF',
          'seq-5': '#0D62FF',
          'seq-6': '#0A4ECC',
          'seq-7': '#083B99',
          positive: '#22C55E',
          low: '#EAB308',
          medium: '#F97316',
          high: '#EF4444',
          critical: '#DC2626',
          neutral: '#70717D',
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
    },
  },
  plugins: [],
  // Enable dark mode
  darkMode: 'class',
}; 