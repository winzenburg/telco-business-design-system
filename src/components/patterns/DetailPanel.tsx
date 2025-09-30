import * as React from 'react';
import { cn } from '../../utils/cn';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface DetailPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Panel title
   */
  title: string;

  /**
   * Optional subtitle or description
   */
  subtitle?: string;

  /**
   * Whether the panel is expandable/collapsible
   */
  expandable?: boolean;

  /**
   * Default expanded state (only applies when expandable is true)
   */
  defaultExpanded?: boolean;

  /**
   * Controlled expanded state
   */
  expanded?: boolean;

  /**
   * Callback when expanded state changes
   */
  onExpandedChange?: (expanded: boolean) => void;

  /**
   * Optional icon
   */
  icon?: IconName;

  /**
   * Optional badge
   */
  badge?: {
    label: string;
    variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive';
  };

  /**
   * Header actions (buttons, links, etc.)
   */
  headerActions?: React.ReactNode;

  /**
   * Panel content
   */
  children: React.ReactNode;

  /**
   * Density variant
   */
  density?: 'compact' | 'comfortable' | 'spacious';

  /**
   * Whether to show a divider between header and content
   */
  divider?: boolean;
}

const densityConfig = {
  compact: {
    header: 'p-3',
    content: 'p-3',
    titleSize: 'text-sm',
    subtitleSize: 'text-xs',
    iconSize: 18,
  },
  comfortable: {
    header: 'p-4',
    content: 'p-4',
    titleSize: 'text-base',
    subtitleSize: 'text-sm',
    iconSize: 20,
  },
  spacious: {
    header: 'p-6',
    content: 'p-6',
    titleSize: 'text-lg',
    subtitleSize: 'text-base',
    iconSize: 24,
  },
} as const;

export const DetailPanel = React.forwardRef<HTMLDivElement, DetailPanelProps>(
  (
    {
      title,
      subtitle,
      expandable = false,
      defaultExpanded = true,
      expanded: controlledExpanded,
      onExpandedChange,
      icon,
      badge,
      headerActions,
      children,
      density = 'comfortable',
      divider = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [internalExpanded, setInternalExpanded] = React.useState(defaultExpanded);
    const isControlled = controlledExpanded !== undefined;
    const isExpanded = isControlled ? controlledExpanded : internalExpanded;

    const densityStyles = densityConfig[density];

    const handleToggle = () => {
      const newExpanded = !isExpanded;
      if (!isControlled) {
        setInternalExpanded(newExpanded);
      }
      onExpandedChange?.(newExpanded);
    };

    return (
      <Card ref={ref} className={cn('overflow-hidden', className)} {...props}>
        <CardHeader
          className={cn(
            densityStyles.header,
            expandable && 'cursor-pointer select-none hover:bg-[var(--ds-color-neutral-100)] transition-colors',
            divider && 'border-b border-[var(--ds-color-neutral-300)]',
          )}
          onClick={expandable ? handleToggle : undefined}
          onKeyDown={expandable ? (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleToggle();
            }
          } : undefined}
          role={expandable ? 'button' : undefined}
          tabIndex={expandable ? 0 : undefined}
          aria-expanded={expandable ? isExpanded : undefined}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Expand/Collapse Icon */}
              {expandable && (
                <div className="flex-shrink-0">
                  <Icon
                    name={isExpanded ? 'chevron' : 'chevron' as any}
                    size={densityStyles.iconSize}
                    color="var(--ds-color-neutral-500)"
                    className={isExpanded ? '' : 'rotate-90'}
                  />
                </div>
              )}

              {/* Optional Icon */}
              {icon && (
                <div className="flex-shrink-0">
                  <Icon
                    name={icon}
                    size={densityStyles.iconSize}
                    color="var(--ds-color-neutral-600)"
                  />
                </div>
              )}

              {/* Title and Subtitle */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <CardTitle className={cn('font-semibold', densityStyles.titleSize)}>
                    {title}
                  </CardTitle>
                  {badge && (
                    <Badge variant={badge.variant || 'default'}>
                      {badge.label}
                    </Badge>
                  )}
                </div>
                {subtitle && (
                  <p
                    className={cn(
                      'text-[var(--ds-color-text-secondary)] mt-1',
                      densityStyles.subtitleSize,
                    )}
                  >
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Header Actions */}
            {headerActions && (
              <div
                className="flex-shrink-0"
                onClick={(e) => {
                  // Prevent toggle when clicking actions
                  if (expandable) {
                    e.stopPropagation();
                  }
                }}
              >
                {headerActions}
              </div>
            )}
          </div>
        </CardHeader>

        {/* Content */}
        {(!expandable || isExpanded) && (
          <CardContent className={densityStyles.content}>
            {children}
          </CardContent>
        )}
      </Card>
    );
  },
);

DetailPanel.displayName = 'DetailPanel';

/**
 * DetailPanelGroup component for displaying multiple panels
 */
export interface DetailPanelGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Array of panels
   */
  panels: Omit<DetailPanelProps, 'className'>[];

  /**
   * Accordion behavior (only one panel open at a time)
   */
  accordion?: boolean;

  /**
   * Density variant for all panels
   */
  density?: 'compact' | 'comfortable' | 'spacious';

  /**
   * Whether to show dividers between panels
   */
  dividers?: boolean;
}

export const DetailPanelGroup = React.forwardRef<HTMLDivElement, DetailPanelGroupProps>(
  (
    {
      panels,
      accordion = false,
      density = 'comfortable',
      dividers = true,
      className,
      ...props
    },
    ref,
  ) => {
    const [expandedIndex, setExpandedIndex] = React.useState<number | null>(
      panels.findIndex((p) => p.defaultExpanded !== false),
    );

    const handleExpandedChange = (index: number, expanded: boolean) => {
      if (accordion) {
        setExpandedIndex(expanded ? index : null);
      }
      panels[index].onExpandedChange?.(expanded);
    };

    const spacingClasses = {
      compact: 'space-y-2',
      comfortable: 'space-y-3',
      spacious: 'space-y-4',
    };

    return (
      <div
        ref={ref}
        className={cn(spacingClasses[density], className)}
        {...props}
      >
        {panels.map((panel, index) => {
          const isExpanded = accordion
            ? expandedIndex === index
            : panel.expanded ?? panel.defaultExpanded ?? true;

          return (
            <DetailPanel
              key={`panel-${panel.title}-${index}`}
              {...panel}
              density={density}
              divider={dividers}
              expanded={isExpanded}
              onExpandedChange={(expanded) => handleExpandedChange(index, expanded)}
            />
          );
        })}
      </div>
    );
  },
);

DetailPanelGroup.displayName = 'DetailPanelGroup';
