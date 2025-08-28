// Comcast Business Design System - Motion & Animation Tokens
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
  'transition-micro': `transition-all duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)]`,
  'transition-ui': `transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]`,
  'transition-enter': `transition-all duration-[250ms] ease-[cubic-bezier(0,0,0.2,1)]`,
  'transition-exit': `transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,1,1)]`,
  'transition-complex': `transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]`
} as const;

// Reduced motion preferences (accessibility)
export const reducedMotion = {
  css: `
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
`,
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
    'Ensure animations don\'t interfere with reading or comprehension',
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
