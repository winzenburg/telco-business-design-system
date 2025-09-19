import React, { useState, useEffect } from 'react';
import { getIcon, loadSVG, type IconName } from '../../tokens/design-system-icons';

export interface IconProps {
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

/**
 * Creates a fallback icon based on category when the actual icon can't be loaded
 */
const createFallbackIcon = (name: string, category: string): string => {
  const iconsByCategory: Record<string, string> = {
    navigation: `<path d="M8 12l4-4 4 4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    interface: `<rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
                <path d="M3 9h18M9 21V9" stroke="currentColor" stroke-width="2"/>`,
    communication: `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                   <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" stroke="currentColor" stroke-width="2"/>`,
    data: `<rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
           <path d="M7 12l3-3 4 4 5-5" stroke="currentColor" stroke-width="2" fill="none"/>`,
    media: `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
            <polygon points="10,8 16,12 10,16" fill="currentColor"/>`,
    general: `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
              <circle cx="12" cy="12" r="3" fill="currentColor"/>`
  };

  const iconPath = iconsByCategory[category] || iconsByCategory.general;
  
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name}">
    <title>${name}</title>
    ${iconPath}
  </svg>`;
};

/**
 * Icon component that dynamically loads SVG icons from the design system.
 * 
 * Features:
 * - Dynamic SVG loading with tree-shaking
 * - Accessible by default with proper ARIA attributes
 * - Customizable size and color
 * - Loading and error states
 * - TypeScript support with auto-completion
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Icon name="edit" size={24} />
 * 
 * // With custom styling
 * <Icon 
 *   name="delete" 
 *   size="2rem" 
 *   color="red" 
 *   className="cursor-pointer"
 *   onClick={handleDelete}
 * />
 * 
 * // Decorative icon
 * <Icon name="star" decorative />
 * ```
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color = 'currentColor',
  className = '',
  'aria-label': ariaLabel,
  decorative = false,
  onClick,
  fallback = <div>⏳</div>,
  errorFallback = <div>❌</div>,
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadIconSVG = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const iconData = getIcon(name);
        if (!iconData) {
          throw new Error(`Icon "${name}" not found in design system`);
        }

        // Load SVG content using static file loading from public directory
        let svg: string;
        try {
          // Use fetch to load SVG files directly from public directory
          const fileName = (iconData as any).fileName || `${name}.svg`;
          const response = await fetch(`/icons/${fileName}`);
          if (response.ok) {
            svg = await response.text();
          } else {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
        } catch (fetchError) {
          // Fallback: create an actual icon-like SVG based on icon category
          const category = iconData.category || 'general';
          svg = createFallbackIcon(iconData.name, category);
        }
        
        if (mounted) {
          setSvgContent(svg);
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load icon');
          setLoading(false);
        }
      }
    };

    loadIconSVG();

    return () => {
      mounted = false;
    };
  }, [name]);

  // Show loading state
  if (loading) {
    return <>{fallback}</>;
  }

  // Show error state
  if (error || !svgContent) {
    console.warn(`Icon loading error for "${name}":`, error);
    return <>{errorFallback}</>;
  }

  // Process SVG content to apply props
  const processedSVG = processSVGContent(svgContent, {
    size,
    color,
    className,
    ariaLabel: ariaLabel || (decorative ? undefined : name),
    decorative,
    onClick: !!onClick,
  });

  return (
    <span
      className={`inline-flex items-center justify-center ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: processedSVG }}
    />
  );
};

/**
 * Process SVG content to apply styling and accessibility attributes
 */
function processSVGContent(
  svgContent: string,
  options: {
    size: number | string;
    color: string;
    className: string;
    ariaLabel?: string;
    decorative: boolean;
    onClick: boolean;
  }
): string {
  let processed = svgContent;

  // Extract size value
  const sizeValue = typeof options.size === 'number' ? `${options.size}px` : options.size;

  // Add size attributes
  processed = processed.replace(
    /(<svg[^>]*?)(?:\s+width="[^"]*")?(?:\s+height="[^"]*")?/,
    `$1 width="${sizeValue}" height="${sizeValue}"`
  );

  // Add/update viewBox if not present (assuming square icons)
  if (!processed.includes('viewBox=') && typeof options.size === 'number') {
    processed = processed.replace(
      /(<svg[^>]*?)/,
      `$1 viewBox="0 0 ${options.size} ${options.size}"`
    );
  }

  // Apply color to fill and stroke
  processed = processed.replace(/fill="[^"]*"/g, `fill="${options.color}"`);
  processed = processed.replace(/stroke="[^"]*"/g, `stroke="${options.color}"`);

  // Add CSS classes
  if (options.className) {
    processed = processed.replace(/(<svg[^>]*?)(?:\s+class="[^"]*")?/, `$1 class="${options.className}"`);
  }

  // Handle accessibility
  if (options.decorative) {
    processed = processed.replace(/(<svg[^>]*?)/, `$1 aria-hidden="true"`);
    // Remove aria-label if present
    processed = processed.replace(/\s+aria-label="[^"]*"/, '');
  } else if (options.ariaLabel) {
    processed = processed.replace(/(<svg[^>]*?)(?:\s+aria-label="[^"]*")?/, `$1 aria-label="${options.ariaLabel}"`);
  }

  // Add role if not present
  if (!processed.includes('role=')) {
    processed = processed.replace(/(<svg[^>]*?)/, `$1 role="img"`);
  }

  // Add pointer events if clickable
  if (options.onClick) {
    processed = processed.replace(/(<svg[^>]*?)/, `$1 style="cursor: pointer;"`);
  }

  return processed;
}

/**
 * Hook for preloading icons
 */
export const usePreloadIcons = (iconNames: IconName[]) => {
  useEffect(() => {
    const preloadPromises = iconNames.map(name => {
      return loadSVG(name).catch(err => {
        console.warn(`Failed to preload icon "${name}":`, err);
      });
    });

    Promise.all(preloadPromises);
  }, [iconNames]);
};

/**
 * Export the loadSVG utility for external use
 */
export { loadSVG };

/**
 * Utility component for rendering multiple icons with consistent styling
 */
export interface IconGroupProps {
  icons: IconName[];
  size?: number | string;
  color?: string;
  className?: string;
  gap?: string;
  onClick?: (iconName: IconName) => void;
}

export const IconGroup: React.FC<IconGroupProps> = ({
  icons,
  size = 20,
  color = 'currentColor',
  className = '',
  gap = '0.5rem',
  onClick,
}) => {
  return (
    <div
      className={`flex items-center ${className}`}
      style={{ gap }}
    >
      {icons.map((iconName) => (
        <Icon
          key={iconName}
          name={iconName}
          size={size}
          color={color}
          onClick={onClick ? () => onClick(iconName) : undefined}
        />
      ))}
    </div>
  );
};

export default Icon;