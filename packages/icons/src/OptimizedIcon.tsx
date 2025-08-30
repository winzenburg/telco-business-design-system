import React, { useMemo, CSSProperties } from 'react';
import { CoreIconName, getIconPath, getIconMetadata } from '../../tokens/icon-registry';
import { cn } from '../../components/utils/cn';

export interface OptimizedIconProps {
  /** Icon name from the design system registry */
  name: CoreIconName;
  /** Icon size in pixels */
  size?: number | string;
  /** Icon color - defaults to currentColor for CSS inheritance */
  color?: string;
  /** Additional CSS classes */
  className?: string;
  /** Accessibility label - overrides default icon name */
  'aria-label'?: string;
  /** Whether the icon is decorative (sets aria-hidden="true") */
  decorative?: boolean;
  /** Click handler */
  onClick?: (e: React.MouseEvent) => void;
  /** Additional CSS styles */
  style?: CSSProperties;
  /** Whether to show loading state */
  loading?: boolean;
}

/**
 * High-performance Icon component that renders SVGs efficiently
 * 
 * Features:
 * - Direct SVG loading from public assets
 * - Proper accessibility support
 * - CSS-based styling for performance
 * - TypeScript support with icon registry
 * - Minimal runtime overhead
 */
export const OptimizedIcon: React.FC<OptimizedIconProps> = ({
  name,
  size = 20,
  color = 'currentColor',
  className,
  'aria-label': ariaLabel,
  decorative = false,
  onClick,
  style,
  loading = false,
}) => {
  // Get icon metadata for accessibility
  const iconMeta = getIconMetadata(name);
  
  // Compute styles
  const iconStyles = useMemo((): CSSProperties => {
    const sizeValue = typeof size === 'number' ? `${size}px` : size;
    return {
      width: sizeValue,
      height: sizeValue,
      display: 'inline-block',
      color,
      fill: 'currentColor',
      flexShrink: 0,
      ...style,
    };
  }, [size, color, style]);

  // Loading state
  if (loading) {
    return (
      <span
        className={cn('inline-block animate-pulse bg-gray-300 rounded', className)}
        style={iconStyles}
        aria-hidden="true"
      />
    );
  }

  // Determine accessibility attributes
  const accessibilityProps = decorative
    ? { 'aria-hidden': 'true' as const }
    : {
        'aria-label': ariaLabel || iconMeta?.description || iconMeta?.name || name,
        'role': 'img' as const,
      };

  // Icon path
  const iconPath = getIconPath(name);

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      style={iconStyles}
      {...accessibilityProps}
    >
      <svg
        width={size}
        height={size}
        style={{
          width: '100%',
          height: '100%',
          fill: 'currentColor',
          color: 'inherit',
        }}
      >
        <use href={`${iconPath}#${name}`} />
        {/* Fallback for browsers that don't support SVG use element */}
        <image href={iconPath} width="100%" height="100%" />
      </svg>
    </span>
  );
};

/**
 * Icon component with inline SVG for better performance and reliability
 * This version fetches the SVG content and inlines it for maximum compatibility
 */
export interface InlineIconProps extends Omit<OptimizedIconProps, 'loading'> {
  /** Fallback content when icon fails to load */
  fallback?: React.ReactNode;
}

export const InlineIcon: React.FC<InlineIconProps> = ({
  name,
  size = 20,
  color = 'currentColor',
  className,
  'aria-label': ariaLabel,
  decorative = false,
  onClick,
  style,
  fallback,
}) => {
  const [svgContent, setSvgContent] = React.useState<string>('');
  const [error, setError] = React.useState(false);

  // Get icon metadata
  const iconMeta = getIconMetadata(name);

  // Load SVG content
  React.useEffect(() => {
    let mounted = true;

    const loadSVG = async () => {
      try {
        const response = await fetch(getIconPath(name));
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const svgText = await response.text();
        if (mounted) {
          setSvgContent(svgText);
          setError(false);
        }
      } catch (err) {
        console.warn(`Failed to load icon "${name}":`, err);
        if (mounted) {
          setError(true);
        }
      }
    };

    loadSVG();

    return () => {
      mounted = false;
    };
  }, [name]);

  // Compute styles
  const iconStyles = useMemo((): CSSProperties => {
    const sizeValue = typeof size === 'number' ? `${size}px` : size;
    return {
      width: sizeValue,
      height: sizeValue,
      display: 'inline-block',
      color,
      fill: 'currentColor',
      flexShrink: 0,
      ...style,
    };
  }, [size, color, style]);

  // Handle error state
  if (error) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <span
        className={cn('inline-block bg-gray-200 rounded', className)}
        style={iconStyles}
        aria-label={`Icon "${name}" failed to load`}
      />
    );
  }

  // Handle loading state
  if (!svgContent) {
    return (
      <span
        className={cn('inline-block animate-pulse bg-gray-200 rounded', className)}
        style={iconStyles}
        aria-hidden="true"
      />
    );
  }

  // Process SVG content
  let processedSVG = svgContent;

  // Update size attributes
  const sizeValue = typeof size === 'number' ? `${size}px` : size;
  processedSVG = processedSVG.replace(
    /(<svg[^>]*?)(?:\s+width="[^"]*")?(?:\s+height="[^"]*")?/,
    `$1 width="${sizeValue}" height="${sizeValue}"`
  );

  // Update color
  if (color !== 'currentColor') {
    processedSVG = processedSVG.replace(/fill="[^"]*"/g, `fill="${color}"`);
    processedSVG = processedSVG.replace(/stroke="[^"]*"/g, `stroke="${color}"`);
  }

  // Add accessibility attributes
  const accessibilityProps = decorative
    ? { 'aria-hidden': 'true' as const }
    : {
        'aria-label': ariaLabel || iconMeta?.description || iconMeta?.name || name,
      };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      style={{
        width: sizeValue,
        height: sizeValue,
        flexShrink: 0,
        ...style,
      }}
      {...accessibilityProps}
      dangerouslySetInnerHTML={{ __html: processedSVG }}
    />
  );
};

// Default export is the optimized version
export default OptimizedIcon;