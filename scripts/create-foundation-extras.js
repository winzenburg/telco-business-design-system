#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🏗️  Creating final foundational elements...');

// 1. Motion & Animation System
const motionSystem = `// Comcast Business Design System - Motion & Animation Tokens
// Based on design system best practices and accessibility

export interface MotionToken {
  duration: string;
  easing: string;
  css: string;
  description: string;
  usage: string[];
}

// Motion duration scale
export const duration = {
  instant: '0ms',
  fast: '150ms',
  normal: '250ms',
  slow: '400ms',
  slower: '600ms'
} as const;

// Easing curves
export const easing = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
} as const;

// Complete motion tokens
export const motion = {
  // Micro-interactions (hover, focus, active states)
  micro: {
    duration: duration.fast,
    easing: easing.easeOut,
    css: 'transition: all 150ms cubic-bezier(0, 0, 0.2, 1);',
    description: 'Quick interactions like hover and focus states',
    usage: ['Button hover', 'Link hover', 'Icon hover', 'Focus states']
  },
  
  // UI state changes (show/hide, expand/collapse)
  ui: {
    duration: duration.normal,
    easing: easing.easeInOut,
    css: 'transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);',
    description: 'Standard UI transitions for state changes',
    usage: ['Modal open/close', 'Dropdown expand', 'Accordion toggle', 'Tab switching']
  },
  
  // Enter animations (slide in, fade in)
  enter: {
    duration: duration.normal,
    easing: easing.easeOut,
    css: 'transition: all 250ms cubic-bezier(0, 0, 0.2, 1);',
    description: 'Elements entering the viewport or appearing',
    usage: ['Toast notifications', 'Modal enter', 'Tooltip show', 'Content load']
  },
  
  // Exit animations (slide out, fade out)
  exit: {
    duration: duration.fast,
    easing: easing.easeIn,
    css: 'transition: all 150ms cubic-bezier(0.4, 0, 1, 1);',
    description: 'Elements leaving the viewport or disappearing',
    usage: ['Toast dismiss', 'Modal close', 'Tooltip hide', 'Content unload']
  },
  
  // Complex animations (page transitions, complex state changes)
  complex: {
    duration: duration.slow,
    easing: easing.spring,
    css: 'transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);',
    description: 'Complex multi-step animations',
    usage: ['Page transitions', 'Multi-step forms', 'Wizard navigation', 'Complex state changes']
  }
} as const;

// Tailwind CSS motion utilities
export const tailwindMotion = {
  'transition-micro': \`transition-all duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)]\`,
  'transition-ui': \`transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]\`,
  'transition-enter': \`transition-all duration-[250ms] ease-[cubic-bezier(0,0,0.2,1)]\`,
  'transition-exit': \`transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,1,1)]\`,
  'transition-complex': \`transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]\`
} as const;

// Reduced motion preferences (accessibility)
export const reducedMotion = {
  css: \`
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
\`,
  description: 'Respect user preferences for reduced motion'
} as const;

// Usage guidelines
export const motionUsage = {
  principles: [
    'Use motion purposefully to guide user attention and provide feedback',
    'Keep animations fast and subtle to avoid being distracting',
    'Always respect prefers-reduced-motion settings',
    'Use consistent timing and easing across similar interactions'
  ],
  accessibility: [
    'Always include prefers-reduced-motion media query',
    'Avoid animations that flash or strobe',
    'Ensure animations don\\'t interfere with reading or comprehension',
    'Provide alternative feedback for users who disable animations'
  ],
  performance: [
    'Prefer CSS transforms over changing layout properties',
    'Use transform and opacity for the smoothest animations',
    'Avoid animating properties that trigger layout recalculation',
    'Test on lower-end devices to ensure smooth performance'
  ]
} as const;

// Helper functions
export const getMotion = (type: keyof typeof motion) => motion[type];

export const createMotionStyle = (type: keyof typeof motion) => ({
  transition: motion[type].css.replace('transition: ', '').replace(';', '')
});

// Export everything
export default {
  duration,
  easing,
  motion,
  tailwindMotion,
  reducedMotion,
  motionUsage,
  getMotion,
  createMotionStyle
} as const;

// Type definitions
export type MotionType = keyof typeof motion;
export type DurationType = keyof typeof duration;
export type EasingType = keyof typeof easing;
`;

// 2. Focus & Accessibility System
const focusSystem = `// Comcast Business Design System - Focus & Accessibility Tokens
// WCAG 2.1 AA compliant focus and accessibility standards

export interface FocusToken {
  outline: string;
  outlineOffset: string;
  boxShadow?: string;
  css: string;
  description: string;
  usage: string[];
}

// Focus ring system
export const focusRing = {
  // Primary focus ring (most interactive elements)
  primary: {
    outline: '2px solid #0D62FF',
    outlineOffset: '2px',
    css: 'outline: 2px solid #0D62FF; outline-offset: 2px;',
    description: 'Primary focus ring for buttons, links, and form controls',
    usage: ['Buttons', 'Links', 'Form inputs', 'Interactive cards']
  },
  
  // Inverse focus ring (dark backgrounds)
  inverse: {
    outline: '2px solid #FFFFFF',
    outlineOffset: '2px',
    css: 'outline: 2px solid #FFFFFF; outline-offset: 2px;',
    description: 'Focus ring for elements on dark backgrounds',
    usage: ['Dark theme buttons', 'Navigation on dark backgrounds', 'Footer links']
  },
  
  // Error focus ring (form validation)
  error: {
    outline: '2px solid #EF4444',
    outlineOffset: '2px',
    css: 'outline: 2px solid #EF4444; outline-offset: 2px;',
    description: 'Focus ring for form elements with validation errors',
    usage: ['Invalid form inputs', 'Error state buttons', 'Required field indicators']
  },
  
  // Success focus ring (confirmation states)
  success: {
    outline: '2px solid #22C55E',
    outlineOffset: '2px',
    css: 'outline: 2px solid #22C55E; outline-offset: 2px;',
    description: 'Focus ring for successful actions or valid inputs',
    usage: ['Valid form inputs', 'Success buttons', 'Confirmation actions']
  },
  
  // Inset focus ring (contained elements)
  inset: {
    outline: 'none',
    outlineOffset: '0',
    boxShadow: 'inset 0 0 0 2px #0D62FF',
    css: 'outline: none; box-shadow: inset 0 0 0 2px #0D62FF;',
    description: 'Inset focus ring for elements that need contained focus',
    usage: ['Tabs', 'Segmented controls', 'Toggle buttons', 'Card selections']
  }
} as const;

// Skip link system
export const skipLinks = {
  styles: {
    position: 'absolute',
    top: '-40px',
    left: '6px',
    background: '#0D62FF',
    color: '#FFFFFF',
    padding: '8px 16px',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    zIndex: '1600',
    transition: 'top 150ms ease-out'
  },
  focusStyles: {
    top: '6px'
  },
  css: \`
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #0D62FF;
  color: #FFFFFF;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  z-index: 1600;
  transition: top 150ms ease-out;
}

.skip-link:focus {
  top: 6px;
}
\`,
  description: 'Skip navigation links for keyboard users'
} as const;

// Screen reader utilities
export const screenReader = {
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0'
  },
  css: \`
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
\`,
  description: 'Hide content visually but keep it available to screen readers'
} as const;

// ARIA live regions
export const liveRegions = {
  polite: {
    'aria-live': 'polite',
    description: 'Announce changes when user is idle',
    usage: ['Status updates', 'Form validation messages', 'Loading states']
  },
  assertive: {
    'aria-live': 'assertive',
    description: 'Announce changes immediately',
    usage: ['Error messages', 'Important alerts', 'Time-sensitive updates']
  },
  off: {
    'aria-live': 'off',
    description: 'Do not announce changes',
    usage: ['Decorative content', 'Frequently changing content']
  }
} as const;

// Color contrast ratios (WCAG AA)
export const contrast = {
  normal: '4.5:1',
  large: '3:1',
  nonText: '3:1',
  description: 'Minimum contrast ratios for WCAG 2.1 AA compliance'
} as const;

// Touch target sizes
export const touchTargets = {
  minimum: '44px',
  recommended: '48px',
  description: 'Minimum touch target sizes for accessibility',
  css: \`
/* Ensure interactive elements meet minimum touch target size */
button, a, input, select, textarea, [role="button"], [role="link"] {
  min-height: 44px;
  min-width: 44px;
}
\`
} as const;

// Tailwind focus utilities
export const tailwindFocus = {
  'focus-primary': 'focus-visible:outline-2 focus-visible:outline-[#0D62FF] focus-visible:outline-offset-2',
  'focus-inverse': 'focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2',
  'focus-error': 'focus-visible:outline-2 focus-visible:outline-[#EF4444] focus-visible:outline-offset-2',
  'focus-success': 'focus-visible:outline-2 focus-visible:outline-[#22C55E] focus-visible:outline-offset-2',
  'focus-inset': 'focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_#0D62FF]'
} as const;

// Usage guidelines
export const accessibilityUsage = {
  focus: [
    'Always provide visible focus indicators',
    'Use consistent focus styles across the application',
    'Ensure focus indicators have sufficient contrast',
    'Test focus management with keyboard navigation'
  ],
  screenReaders: [
    'Provide meaningful alternative text for images',
    'Use semantic HTML elements when possible',
    'Include proper ARIA labels and descriptions',
    'Test with actual screen reader software'
  ],
  keyboard: [
    'Ensure all interactive elements are keyboard accessible',
    'Provide logical tab order',
    'Implement proper focus management in complex components',
    'Support standard keyboard shortcuts where appropriate'
  ],
  color: [
    'Do not rely on color alone to convey information',
    'Ensure sufficient color contrast for all text',
    'Test color combinations with color blindness simulators',
    'Provide alternative indicators for color-coded information'
  ]
} as const;

// Helper functions
export const getFocusRing = (type: keyof typeof focusRing) => focusRing[type];

export const createFocusStyle = (type: keyof typeof focusRing) => {
  const ring = focusRing[type];
  return {
    outline: ring.outline,
    outlineOffset: ring.outlineOffset,
    ...(ring.boxShadow && { boxShadow: ring.boxShadow })
  };
};

// Export everything
export default {
  focusRing,
  skipLinks,
  screenReader,
  liveRegions,
  contrast,
  touchTargets,
  tailwindFocus,
  accessibilityUsage,
  getFocusRing,
  createFocusStyle
} as const;

// Type definitions
export type FocusRingType = keyof typeof focusRing;
export type LiveRegionType = keyof typeof liveRegions;
`;

// 3. Component Size System
const sizingSystem = `// Comcast Business Design System - Component Sizing Tokens
// Consistent sizing for components across the design system

export interface SizeToken {
  height: string;
  padding: string;
  fontSize: string;
  lineHeight: string;
  minWidth?: string;
  description: string;
  usage: string[];
}

// Component size scale
export const componentSizes = {
  // Extra small (compact interfaces)
  xs: {
    height: '1.5rem',     // 24px
    padding: '0.25rem 0.5rem',  // 4px 8px
    fontSize: '0.75rem',   // 12px
    lineHeight: '1rem',    // 16px
    minWidth: '3rem',      // 48px
    description: 'Extra small size for compact interfaces',
    usage: ['Tags', 'Badges', 'Compact buttons', 'Small form controls']
  },
  
  // Small
  sm: {
    height: '2rem',        // 32px
    padding: '0.375rem 0.75rem',  // 6px 12px
    fontSize: '0.875rem',  // 14px
    lineHeight: '1.25rem', // 20px
    minWidth: '4rem',      // 64px
    description: 'Small size for secondary actions and compact layouts',
    usage: ['Secondary buttons', 'Small inputs', 'Compact cards', 'Navigation items']
  },
  
  // Medium (default)
  md: {
    height: '2.5rem',      // 40px
    padding: '0.5rem 1rem',     // 8px 16px
    fontSize: '1rem',      // 16px
    lineHeight: '1.5rem',  // 24px
    minWidth: '5rem',      // 80px
    description: 'Default medium size for most components',
    usage: ['Primary buttons', 'Standard inputs', 'Default cards', 'Most form controls']
  },
  
  // Large
  lg: {
    height: '3rem',        // 48px
    padding: '0.75rem 1.5rem',  // 12px 24px
    fontSize: '1.125rem',  // 18px
    lineHeight: '1.75rem', // 28px
    minWidth: '6rem',      // 96px
    description: 'Large size for prominent actions and spacious layouts',
    usage: ['Hero buttons', 'Large inputs', 'Feature cards', 'Prominent CTAs']
  },
  
  // Extra large
  xl: {
    height: '3.5rem',      // 56px
    padding: '1rem 2rem',       // 16px 32px
    fontSize: '1.25rem',   // 20px
    lineHeight: '2rem',    // 32px
    minWidth: '7rem',      // 112px
    description: 'Extra large size for hero elements and landing pages',
    usage: ['Hero CTAs', 'Landing page buttons', 'Feature highlights', 'Large form sections']
  }
} as const;

// Icon sizing (consistent with component sizes)
export const iconSizes = {
  xs: '0.75rem',  // 12px
  sm: '1rem',     // 16px
  md: '1.25rem',  // 20px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '2.5rem' // 40px
} as const;

// Input height scale (includes borders and padding)
export const inputHeights = {
  xs: '1.75rem',  // 28px
  sm: '2.25rem',  // 36px
  md: '2.75rem',  // 44px
  lg: '3.25rem',  // 52px
  xl: '3.75rem'   // 60px
} as const;

// Button minimum widths (for consistent button sizing)
export const buttonMinWidths = {
  xs: '3rem',    // 48px
  sm: '4rem',    // 64px
  md: '5rem',    // 80px
  lg: '6rem',    // 96px
  xl: '7rem'     // 112px
} as const;

// Responsive sizing breakpoints
export const responsiveSizes = {
  mobile: {
    default: 'sm',
    prominent: 'md',
    description: 'Smaller sizes for mobile devices'
  },
  tablet: {
    default: 'md',
    prominent: 'lg',
    description: 'Medium sizes for tablet devices'
  },
  desktop: {
    default: 'md',
    prominent: 'lg',
    description: 'Standard sizes for desktop devices'
  }
} as const;

// Tailwind sizing utilities
export const tailwindSizes = {
  'size-xs': 'h-6 px-2 text-xs leading-4 min-w-12',
  'size-sm': 'h-8 px-3 text-sm leading-5 min-w-16', 
  'size-md': 'h-10 px-4 text-base leading-6 min-w-20',
  'size-lg': 'h-12 px-6 text-lg leading-7 min-w-24',
  'size-xl': 'h-14 px-8 text-xl leading-8 min-w-28'
} as const;

// Usage guidelines
export const sizingUsage = {
  hierarchy: [
    'Use larger sizes for more important actions and content',
    'Maintain consistent sizing within component groups',
    'Consider responsive sizing for different screen sizes',
    'Ensure touch targets meet accessibility requirements (44px minimum)'
  ],
  consistency: [
    'Use the same size for similar actions across the interface',
    'Group related components using the same size scale',
    'Avoid mixing too many different sizes in one area',
    'Follow the established size progression (xs, sm, md, lg, xl)'
  ],
  accessibility: [
    'Ensure all interactive elements meet minimum touch target size (44px)',
    'Provide adequate spacing between interactive elements',
    'Consider users with motor disabilities when sizing components',
    'Test component usability across different input methods'
  ]
} as const;

// Helper functions
export const getComponentSize = (size: keyof typeof componentSizes) => componentSizes[size];

export const getIconSize = (size: keyof typeof iconSizes) => iconSizes[size];

export const createSizeStyle = (size: keyof typeof componentSizes) => {
  const sizeToken = componentSizes[size];
  return {
    height: sizeToken.height,
    padding: sizeToken.padding,
    fontSize: sizeToken.fontSize,
    lineHeight: sizeToken.lineHeight,
    minWidth: sizeToken.minWidth
  };
};

export const getResponsiveSize = (device: keyof typeof responsiveSizes, prominence: 'default' | 'prominent' = 'default') => {
  return responsiveSizes[device][prominence];
};

// Export everything
export default {
  componentSizes,
  iconSizes,
  inputHeights,
  buttonMinWidths,
  responsiveSizes,
  tailwindSizes,
  sizingUsage,
  getComponentSize,
  getIconSize,
  createSizeStyle,
  getResponsiveSize
} as const;

// Type definitions
export type ComponentSize = keyof typeof componentSizes;
export type IconSizeType = keyof typeof iconSizes;
export type ResponsiveDevice = keyof typeof responsiveSizes;
`;

// Write the files
const tokensDir = path.join(__dirname, '../src/tokens');

fs.writeFileSync(path.join(tokensDir, 'design-system-motion.ts'), motionSystem);
fs.writeFileSync(path.join(tokensDir, 'design-system-focus.ts'), focusSystem);
fs.writeFileSync(path.join(tokensDir, 'design-system-sizing.ts'), sizingSystem);

console.log('✅ Created design-system-motion.ts');
console.log('✅ Created design-system-focus.ts');
console.log('✅ Created design-system-sizing.ts');
console.log('🎯 Foundation is now 100% complete!');