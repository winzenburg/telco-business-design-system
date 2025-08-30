// Comcast Business Design System - Icons
// Main exports for icon components

// Main Icon component
export { Icon, IconGroup } from './Icon';
export type { IconProps, IconGroupProps } from './Icon';

// Optimized Icon components
export { InlineIcon } from './OptimizedIcon';
export type { InlineIconProps } from './OptimizedIcon';

// Icon utilities
export { usePreloadIcons, loadSVG } from './Icon';

// Icon registry (re-export from tokens)
export type { IconName } from '../../tokens/design-system-icons';