import React, { useState, useEffect } from 'react';
import { CoreIconName, getIconPath, getIconMetadata, CRITICAL_ICONS } from '../../tokens/icon-registry';
import { InlineIcon } from './OptimizedIcon';
import { cn } from '../../components/utils/cn';

// Legacy support - keeping the old IconName type for backward compatibility
export type IconName = CoreIconName | string;

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
  onClick?: (e: React.MouseEvent) => void;
  /** Loading fallback component */
  fallback?: React.ReactNode;
  /** Error fallback component */
  errorFallback?: React.ReactNode;
}

/**
 * Creates a fallback icon based on category when the actual icon can't be loaded
 */
const createFallbackIcon = (name: string, category: string = 'general'): React.ReactNode => {
  const iconsByCategory: Record<string, React.ReactNode> = {
    navigation: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-label={name}>
        <path d="M8 12l4-4 4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    interface: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-label={name}>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    status: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-label={name}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    communication: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-label={name}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    data: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-label={name}>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M7 12l3-3 4 4 5-5" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    media: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-label={name}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <polygon points="10,8 16,12 10,16" fill="currentColor"/>
      </svg>
    ),
    security: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-label={name}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    general: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-label={name}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
      </svg>
    )
  };

  return iconsByCategory[category] || iconsByCategory.general;
};

/**
 * Icon component that efficiently renders SVG icons from the design system.
 * 
 * Features:
 * - High-performance SVG rendering
 * - Accessible by default with proper ARIA attributes
 * - Customizable size and color
 * - Intelligent fallback system
 * - TypeScript support with icon registry
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Icon name="check" size={24} />
 * 
 * // With custom styling
 * <Icon 
 *   name="close" 
 *   size="2rem" 
 *   color="red" 
 *   className="cursor-pointer"
 *   onClick={handleClose}
 * />
 * 
 * // Decorative icon
 * <Icon name="chevron" decorative />
 * ```
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  color = 'currentColor',
  className,
  'aria-label': ariaLabel,
  decorative = false,
  onClick,
  fallback,
  errorFallback,
}) => {
  // Check if this is a core icon that we can handle optimally
  const iconMeta = getIconMetadata(name as CoreIconName);
  
  // Use optimized inline icon for known icons
  if (iconMeta) {
    return (
      <InlineIcon
        name={name as CoreIconName}
        size={size}
        color={color}
        className={className}
        aria-label={ariaLabel}
        decorative={decorative}
        onClick={onClick}
        fallback={errorFallback || createFallbackIcon(name, iconMeta.category)}
      />
    );
  }

  // Legacy fallback for unknown icons
  return (
    <LegacyIcon
      name={name}
      size={size}
      color={color}
      className={className}
      aria-label={ariaLabel}
      decorative={decorative}
      onClick={onClick}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
};

/**
 * Legacy icon component for backward compatibility
 */
const LegacyIcon: React.FC<IconProps> = ({
  name,
  size = 20,
  color = 'currentColor',
  className,
  'aria-label': ariaLabel,
  decorative = false,
  onClick,
  fallback = <span className="inline-block w-5 h-5 bg-gray-300 animate-pulse rounded" />,
  errorFallback,
}) => {
  const [svgContent, setSvgContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let mounted = true;

    const loadIconSVG = async () => {
      try {
        setLoading(true);
        setError('');
        
        // Try to load the SVG file directly
        const response = await fetch(getIconPath(name));
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const svgText = await response.text();
        
        if (mounted) {
          setSvgContent(svgText);
          setLoading(false);
        }
      } catch (err) {
        console.warn(`Failed to load icon "${name}":`, err);
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
    return errorFallback ? (
      <>{errorFallback}</>
    ) : (
      <span className={cn('inline-block', className)} style={{ width: size, height: size }}>
        {createFallbackIcon(name, 'general')}
      </span>
    );
  }

  // Process SVG content
  const processedSVG = processSVGContent(svgContent, {
    size,
    color,
    className: '',
    ariaLabel: ariaLabel || (decorative ? undefined : name),
    decorative,
    onClick: !!onClick,
  });

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center',
        onClick && 'cursor-pointer',
        className
      )}
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
 * Hook for preloading critical icons
 */
export const usePreloadIcons = (iconNames: CoreIconName[] = CRITICAL_ICONS) => {
  useEffect(() => {
    const preloadPromises = iconNames.map(async (name) => {
      try {
        await fetch(getIconPath(name));
      } catch (err) {
        console.warn(`Failed to preload icon "${name}":`, err);
      }
    });

    Promise.all(preloadPromises);
  }, [iconNames]);
};

/**
 * Utility to preload an icon
 */
export const loadSVG = async (name: IconName): Promise<string> => {
  const response = await fetch(getIconPath(name));
  if (!response.ok) {
    throw new Error(`Failed to load icon "${name}": HTTP ${response.status}`);
  }
  return response.text();
};

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
  /** Whether all icons in the group are decorative */
  decorative?: boolean;
}

export const IconGroup: React.FC<IconGroupProps> = ({
  icons,
  size = 20,
  color = 'currentColor',
  className = '',
  gap = '0.5rem',
  onClick,
  decorative = false,
}) => {
  return (
    <div
      className={cn('flex items-center', className)}
      style={{ gap }}
    >
      {icons.map((iconName) => (
        <Icon
          key={iconName}
          name={iconName}
          size={size}
          color={color}
          decorative={decorative}
          onClick={onClick ? (e) => onClick(iconName) : undefined}
        />
      ))}
    </div>
  );
};

export default Icon;