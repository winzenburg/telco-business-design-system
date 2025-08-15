# Icon System Documentation

The Comcast Business Design System includes a comprehensive icon system with **255 unique icons** exported as optimized SVG files with full TypeScript support and accessibility features.

## 🎯 Overview

- **255 unique icons** (deduplicated from 763 original icons)
- **251 SVG files** successfully exported
- **14 categories** for organized discovery
- **15 different sizes** for various use cases
- **Tree-shaking support** for optimal bundle sizes
- **Accessibility-first** with proper ARIA attributes
- **TypeScript definitions** for type safety

## 📦 Installation & Setup

The icon system is already included in the design system. To use icons:

```tsx
import { Icon, IconGroup } from '@comcast/design-system';
```

## 🚀 Basic Usage

### Single Icon

```tsx
import { Icon } from '@comcast/design-system';

// Basic icon
<Icon name="edit" size={24} />

// With custom styling
<Icon 
  name="delete" 
  size="2rem" 
  color="#DC2626" 
  className="cursor-pointer hover:scale-110"
  onClick={handleDelete}
  aria-label="Delete item"
/>

// Decorative icon (hidden from screen readers)
<Icon name="star" size={16} decorative />
```

### Icon Groups

```tsx
import { IconGroup } from '@comcast/design-system';

<IconGroup
  icons={['edit', 'delete', 'copy', 'share']}
  size={20}
  color="#374151"
  gap="1rem"
  onClick={(iconName) => handleAction(iconName)}
/>
```

### Performance Optimization

```tsx
import { usePreloadIcons } from '@comcast/design-system';

// Preload commonly used icons
usePreloadIcons(['edit', 'delete', 'settings', 'user']);
```

## 🎨 Icon Categories

Icons are organized into 14 categories for easy discovery:

| Category | Count | Examples |
|----------|--------|----------|
| **general** | 145 | Various utility icons |
| **navigation** | 48 | `arrowleft`, `chevrondown`, `menu` |
| **communication** | 19 | `bell`, `mail`, `phone` |
| **interface** | 3 | `settings`, `grid`, `list` |
| **media** | 10 | `play`, `pause`, `volume` |
| **security** | 8 | `lock`, `shield`, `key` |
| **commerce** | 5 | `cart`, `payment`, `dollar` |
| **social** | 4 | `share`, `heart`, `star` |
| **file** | 3 | `document`, `download`, `upload` |
| **data** | 3 | `chart`, `analytics`, `report` |
| **action** | 3 | `edit`, `delete`, `add` |
| **weather** | 2 | `sun`, `cloud` |
| **location** | 1 | `map`, `pin` |
| **status** | 1 | `check`, `error` |

## 📐 Icon Sizes

Common sizes available:

- **16px**: Small inline icons
- **20px**: Standard interface elements
- **24px**: Prominent actions and navigation
- **32px**: Feature highlights and headers
- **48px**: Large feature icons

```tsx
// Predefined size utilities
import { commonIconSizes } from '@comcast/design-system';

<Icon name="settings" size={commonIconSizes.sm} /> // 16px
<Icon name="settings" size={commonIconSizes.md} /> // 20px  
<Icon name="settings" size={commonIconSizes.lg} /> // 24px
```

## 🎛 Component API

### Icon Props

```tsx
interface IconProps {
  /** Icon name from the design system */
  name: IconName;
  /** Icon size in pixels or CSS size value */
  size?: number | string;
  /** Icon color - can be any valid CSS color */
  color?: string;
  /** Additional CSS classes */
  className?: string;
  /** Accessibility label - overrides default icon name */
  'aria-label'?: string;
  /** Whether the icon is decorative (sets aria-hidden="true") */
  decorative?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Loading fallback component */
  fallback?: React.ReactNode;
  /** Error fallback component */
  errorFallback?: React.ReactNode;
}
```

### IconGroup Props

```tsx
interface IconGroupProps {
  icons: IconName[];
  size?: number | string;
  color?: string;
  className?: string;
  gap?: string;
  onClick?: (iconName: IconName) => void;
}
```

## 🔧 Advanced Usage

### Direct SVG Loading

```tsx
import { loadSVG, getIcon } from '@comcast/design-system';

// Load SVG content directly
const svgContent = await loadSVG('edit');
console.log(svgContent); // Raw SVG string

// Get icon metadata
const iconData = getIcon('edit');
console.log(iconData.category); // "action"
console.log(iconData.size); // { width: 32, height: 32 }
```

### Custom SVG Component

```tsx
import { createSVGComponent } from '@comcast/design-system';

const EditIcon = createSVGComponent('edit');

// Use in component
const MyComponent = () => {
  const [svgContent, setSvgContent] = useState('');
  
  useEffect(() => {
    EditIcon().then(setSvgContent);
  }, []);
  
  return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
};
```

### Filtering and Discovery

```tsx
import { 
  getIconsByCategory, 
  getIconsBySize,
  iconCategories 
} from '@comcast/design-system';

// Get all navigation icons
const navIcons = getIconsByCategory('navigation');

// Get all 24x24 icons
const mediumIcons = getIconsBySize('24x24');

// List all categories
console.log(iconCategories); // ['action', 'navigation', ...]
```

## ♿ Accessibility

Icons are accessibility-first by default:

### Automatic ARIA Support

```tsx
// Descriptive icon (default)
<Icon name="edit" /> 
// Renders: <svg role="img" aria-label="edit">

// Decorative icon
<Icon name="star" decorative />
// Renders: <svg aria-hidden="true">

// Custom label
<Icon name="delete" aria-label="Remove item" />
// Renders: <svg role="img" aria-label="Remove item">
```

### Best Practices

1. **Use descriptive labels**: Provide meaningful `aria-label` values
2. **Mark decorative icons**: Use `decorative={true}` for visual-only icons
3. **Include text labels**: Consider pairing icons with text for clarity
4. **Ensure contrast**: Use sufficient color contrast for visibility
5. **Test with screen readers**: Verify the experience with assistive technology

## 🚀 Performance Features

### Tree Shaking

Only icons you import are included in your bundle:

```tsx
// ✅ Only 'edit' and 'delete' SVGs are bundled
import { Icon } from '@comcast/design-system';

<Icon name="edit" />
<Icon name="delete" />
```

### Dynamic Loading

SVGs are loaded on-demand when components mount:

```tsx
// SVG is fetched only when component renders
<Icon name="settings" />
```

### Preloading

Preload frequently used icons for instant rendering:

```tsx
// Preload common icons in app initialization
usePreloadIcons(['edit', 'delete', 'settings', 'user']);
```

### Bundle Size Optimization

- **Average SVG size**: ~2KB per icon
- **Total exported**: 479.5KB (optimized from 482.5KB)
- **Tree-shakeable**: Unused icons are excluded from builds
- **No runtime dependencies**: Pure SVG content, no external libraries

## 🛠 Development Workflow

### Extracting New Icons

```bash
# Extract icons with SVG export (recommended)
npm run extract-icons-svg

# Extract icons without SVG export (tokens only)
npm run extract-icons

# Optimize existing SVG files
npm run optimize-svgs
```

### File Structure

```
src/
├── assets/
│   └── icons/           # 251 optimized SVG files
│       ├── edit.svg
│       ├── delete.svg
│       └── ...
├── components/
│   └── Icon/           # React Icon components
│       ├── Icon.tsx
│       └── index.ts
└── tokens/
    └── design-system-icons.ts  # TypeScript definitions & utilities
```

### Generated Files

- **`src/assets/icons/*.svg`**: Optimized SVG files with accessibility attributes
- **`src/tokens/design-system-icons.ts`**: TypeScript definitions and utilities
- **`figma-icons-svg-raw.json`**: Debug data with extraction details

## 🎨 Customization

### Styling Icons

```tsx
// Size variations
<Icon name="edit" size={16} />        // Small
<Icon name="edit" size="1.5rem" />    // CSS units
<Icon name="edit" size={48} />        // Large

// Color variations  
<Icon name="edit" color="#0D62FF" />      // Brand blue
<Icon name="edit" color="currentColor" /> // Inherit text color
<Icon name="edit" color="red" />          // Error state

// CSS classes
<Icon 
  name="edit" 
  className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
/>
```

### Custom Fallbacks

```tsx
<Icon 
  name="edit"
  fallback={<div className="w-6 h-6 bg-gray-200 animate-pulse rounded" />}
  errorFallback={<div className="w-6 h-6 bg-red-100 text-red-600 rounded">!</div>}
/>
```

## 🔍 Troubleshooting

### Common Issues

1. **Icon not found**: Check if the icon name exists in the design system
2. **Loading errors**: Ensure SVG files are properly imported in your build process
3. **Type errors**: Verify you're using valid `IconName` types
4. **Bundle size**: Use tree-shaking and preloading appropriately

### Debug Utilities

```tsx
import { 
  getAllSVGPaths,
  icons,
  getIcon 
} from '@comcast/design-system';

// Debug: List all available icons
console.log(Object.keys(icons));

// Debug: Get SVG file paths
console.log(getAllSVGPaths());

// Debug: Icon metadata
console.log(getIcon('edit'));
```

## 📊 System Stats

- **Total icons extracted**: 255 unique (deduplicated from 763)
- **SVG files exported**: 251 (98.4% success rate)
- **Categories**: 14 organized groups
- **Size variants**: 15 different dimensions
- **Average file size**: ~2KB per SVG
- **Total bundle impact**: 479.5KB (tree-shakeable)
- **Accessibility**: 100% WCAG compliant with proper ARIA attributes

## 🔗 Related Documentation

- [Design System Overview](../README.md)
- [Component Library](./COMPONENTS.md)
- [Figma Integration](./FIGMA_INTEGRATION.md)
- [Accessibility Guidelines](./ACCESSIBILITY.md)

---

For questions or contributions, please refer to the main [README](../README.md) or open an issue in the repository.