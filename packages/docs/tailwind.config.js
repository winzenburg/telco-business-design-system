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
      // Typography - Hardcoded to prevent circular refs
      fontFamily: {
        'sans': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'lato': ['Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },

      // Typography Scales - Hardcoded to prevent circular refs
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

      // Spacing System - Hardcoded to prevent circular refs
      spacing: {
        'px': '1px',
        '0': '0px',
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        // Custom Figma button spacing
        '3.25': '13px', // 13px horizontal padding
        '2.25': '9px',  // 9px vertical padding
      },

      // Grid System - Hardcoded to prevent circular refs
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

      // Elevation & Shadow System - Hardcoded to prevent circular refs
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'none': 'none',
      },
      
      // Comcast Business Brand Colors - Design System Colors (hardcoded to prevent circular refs)
      colors: {
        // Direct color definitions to avoid ANY circular references during Netlify build
        "blue": {
          "50": "#F5F8FF",
          "100": "#EBF1FF",
          "200": "#C2D8FF",
          "300": "#86B0FF",
          "400": "#4A89FF",
          "500": "#0D62FF",
          "600": "#0A4ECC",
          "700": "#083B99",
          "800": "#052766",
          "900": "#031433"
        },
        "neutral": {
          "50": "#FCFCFC",
          "100": "#F9F9FA",
          "200": "#F1F2F6",
          "300": "#DDDDE2",
          "400": "#B4B5BB",
          "500": "#9D9EA7",
          "600": "#70717D",
          "700": "#595A69",
          "800": "#424454",
          "900": "#2B2D3F"
        },
        "red": {
          "50": "#FEF2F2",
          "100": "#FEE2E2",
          "200": "#FECACA",
          "300": "#FCA5A5",
          "400": "#F87171",
          "500": "#EF4444",
          "600": "#DC2626",
          "700": "#B91C1C",
          "800": "#991B1B",
          "900": "#7F1D1D"
        },
        "green": {
          "50": "#F0FDF4",
          "100": "#DCFCE7",
          "200": "#BBF7D0",
          "300": "#86EFAC",
          "400": "#4ADE80",
          "500": "#22C55E",
          "600": "#16A34A",
          "700": "#15803D",
          "800": "#166534",
          "900": "#14532D"
        },
        "yellow": {
          "50": "#FEFCE8",
          "100": "#FEF9C3",
          "200": "#FEF08A",
          "300": "#FDE047",
          "400": "#FACC15",
          "500": "#EAB308",
          "600": "#CA8A04",
          "700": "#A16207",
          "800": "#854D0E",
          "900": "#713F12"
        },
        "orange": {
          "50": "#FFF7ED",
          "100": "#FFEDD5",
          "200": "#FED7AA",
          "300": "#FDBA74",
          "400": "#FB923C",
          "500": "#F97316",
          "600": "#EA580C",
          "700": "#C2410C",
          "800": "#9A3412",
          "900": "#7C2D12"
        },
        "purple": {
          "50": "#F7F7FF",
          "100": "#F2F2FF",
          "200": "#E4E2FF",
          "300": "#CBC6FF",
          "400": "#A89FFF",
          "500": "#7561D4",
          "600": "#5235A8",
          "700": "#391A7D",
          "800": "#260D52",
          "900": "#130526"
        },
        "navy": {
          "50": "#F2F5FF",
          "100": "#E5E6F1",
          "200": "#C0C1DC",
          "300": "#9EA1CA",
          "400": "#7F84B9",
          "500": "#3E4796",
          "600": "#000A73",
          "700": "#00085E",
          "800": "#00074B",
          "900": "#00031D"
        },
        "sky": {
          "50": "#EBFDFF",
          "100": "#E5FCFF",
          "200": "#D5F8FF",
          "300": "#B6EFFD",
          "400": "#8BE1FA",
          "500": "#59CAF1",
          "600": "#2FAEE0",
          "700": "#1285B7",
          "800": "#03496B",
          "900": "#001A26"
        },
        "teal": {
          "50": "#F0FDFA",
          "100": "#CCFBF1",
          "200": "#99F6E4",
          "300": "#5EEAD4",
          "400": "#2DD4BF",
          "500": "#14B8A6",
          "600": "#0D9488",
          "700": "#0F766E",
          "800": "#115E59",
          "900": "#134E4A"
        },
        "black": "#15172B",
        "white": "#FFFFFF",
        "pageBackground": "#EDEFEF",
        
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