// Comcast Business Design System - Main Entry Point

// Primary exports (optimized for tree-shaking)
export * from './core';

// Heavy components available via lazy loading
// Import from '@comcast/comcast-business-design-system/lazy'
// Documentation: https://docs.comcast.com/design-system/lazy-loading

// All components still available but not auto-imported
// Use explicit imports for better tree-shaking:
// import { SpecificComponent } from '@comcast/comcast-business-design-system/components'

// Tokens available individually:
// import { colors } from '@comcast/comcast-business-design-system/tokens'

// Import for re-export
import { theme, DESIGN_SYSTEM } from './tokens';
import { Button } from './components';
import { cn, Slot } from './utils';

// Re-export commonly used items (already in core)
export { theme, DESIGN_SYSTEM };
export { Button };
export { cn, Slot };

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
