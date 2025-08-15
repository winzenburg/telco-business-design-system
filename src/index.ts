// Comcast Business Design System - Main Entry Point

// Export all tokens
export * from './tokens';

// Export all components
export * from './components';

// Export all utilities
export * from './utils';

// Re-export commonly used items
export { theme, DESIGN_SYSTEM } from './tokens';
export { Button } from './components';
export { cn, Slot } from './utils';

// Default export for the entire design system
export const ComcastBusinessDesignSystem = {
  version: '1.0.0',
  name: 'Comcast Business Design System',
  components: {
    Button,
  },
  tokens: {
    theme,
  },
  utilities: {
    cn,
    Slot,
  },
} as const;

export default ComcastBusinessDesignSystem; 