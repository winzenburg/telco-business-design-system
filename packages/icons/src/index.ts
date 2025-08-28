// Comcast Business Design System - Icons
// Main exports for icon components

// Main Icon component
export { Icon, IconGroup } from './Icon';
export type { IconProps, IconGroupProps, IconName } from './Icon';

// Optimized Icon components
export { InlineIcon } from './OptimizedIcon';
export type { InlineIconProps } from './OptimizedIcon';

// Icon utilities
export { usePreloadIcons, loadSVG } from './Icon';

// Icon registry (re-export from tokens)
export type { CoreIconName, IconMetadata } from '@comcast-business/design-tokens';
export { 
  CORE_ICONS, 
  getAllAvailableIcons, 
  getIconMetadata, 
  getIconsByCategory, 
  searchIcons, 
  getIconPath, 
  CRITICAL_ICONS 
} from '@comcast-business/design-tokens';