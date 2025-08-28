// Comcast Business Design System - Focus & Accessibility Tokens
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
  css: `
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
`,
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
  css: `
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
`,
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
  css: `
/* Ensure interactive elements meet minimum touch target size */
button, a, input, select, textarea, [role="button"], [role="link"] {
  min-height: 44px;
  min-width: 44px;
}
`
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
