import * as React from 'react';
import { cn } from '../../utils/cn';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface SummaryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card title
   */
  title: string;

  /**
   * Main value to display (e.g., count, metric, status)
   */
  value: string | number;

  /**
   * Optional subtitle or description
   */
  description?: string;

  /**
   * Status indicator
   */
  status?: 'success' | 'warning' | 'error' | 'info' | 'neutral';

  /**
   * Status label text
   */
  statusLabel?: string;

  /**
   * Optional icon
   */
  icon?: IconName;

  /**
   * Icon color (CSS custom property)
   */
  iconColor?: string;

  /**
   * Trend indicator (positive/negative change)
   */
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
  };

  /**
   * Density variant
   */
  density?: 'compact' | 'comfortable' | 'spacious';

  /**
   * Action button in header
   */
  action?: {
    label: string;
    onClick: () => void;
  };

  /**
   * Footer content
   */
  footer?: React.ReactNode;
}

const densityConfig = {
  compact: {
    container: 'gap-2',
    header: 'pb-2',
    content: 'pt-0 pb-3 px-4',
    valueSize: 'text-2xl',
    titleSize: 'text-sm',
    descriptionSize: 'text-xs',
    iconSize: 32,
  },
  comfortable: {
    container: 'gap-3',
    header: 'pb-3',
    content: 'pt-0 pb-4 px-5',
    valueSize: 'text-3xl',
    titleSize: 'text-base',
    descriptionSize: 'text-sm',
    iconSize: 40,
  },
  spacious: {
    container: 'gap-4',
    header: 'pb-4',
    content: 'pt-0 pb-6 px-6',
    valueSize: 'text-4xl',
    titleSize: 'text-lg',
    descriptionSize: 'text-base',
    iconSize: 48,
  },
} as const;

const statusConfig = {
  success: {
    badgeVariant: 'success' as const,
    iconColor: 'var(--ds-color-success-500)',
  },
  warning: {
    badgeVariant: 'warning' as const,
    iconColor: 'var(--ds-color-warning-500)',
  },
  error: {
    badgeVariant: 'destructive' as const,
    iconColor: 'var(--ds-color-error-500)',
  },
  info: {
    badgeVariant: 'default' as const,
    iconColor: 'var(--ds-color-blue-500)',
  },
  neutral: {
    badgeVariant: 'secondary' as const,
    iconColor: 'var(--ds-color-neutral-500)',
  },
} as const;

const trendConfig = {
  up: {
    icon: 'trending-up' as IconName,
    color: 'var(--ds-color-success-600)',
    label: 'increase',
  },
  down: {
    icon: 'trending-down' as IconName,
    color: 'var(--ds-color-error-600)',
    label: 'decrease',
  },
  neutral: {
    icon: 'minus' as IconName,
    color: 'var(--ds-color-neutral-500)',
    label: 'no change',
  },
} as const;

export const SummaryCard = React.forwardRef<HTMLDivElement, SummaryCardProps>(
  (
    {
      title,
      value,
      description,
      status,
      statusLabel,
      icon,
      iconColor,
      trend,
      density = 'comfortable',
      action,
      footer,
      className,
      ...props
    },
    ref,
  ) => {
    const densityStyles = densityConfig[density];
    const statusStyles = status ? statusConfig[status] : null;
    const trendStyles = trend ? trendConfig[trend.direction] : null;

    return (
      <Card ref={ref} className={cn('relative', className)} {...props} draggable={undefined}>
        <CardHeader className={densityStyles.header}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {icon && (
                <div className="flex-shrink-0 flex items-center">
                  <Icon
                    name={icon as any}
                    size={densityStyles.iconSize}
                    color={iconColor || statusStyles?.iconColor || 'var(--ds-color-neutral-500)'}
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <CardTitle className={cn('font-medium', densityStyles.titleSize)}>
                  {title}
                </CardTitle>
                {status && statusLabel && (
                  <Badge
                    variant={statusStyles!.badgeVariant}
                    className="mt-1"
                  >
                    {statusLabel}
                  </Badge>
                )}
              </div>
            </div>
            {action && (
              <button
                onClick={action.onClick}
                className="text-[var(--ds-color-blue-600)] hover:text-[var(--ds-color-blue-700)] text-sm font-medium transition-colors"
                aria-label={action.label}
              >
                {action.label}
              </button>
            )}
          </div>
        </CardHeader>
        <CardContent className={cn(densityStyles.content, densityStyles.container)}>
          {/* Main Value */}
          <div className="flex items-baseline gap-2">
            <span
              className={cn(
                'font-bold text-[var(--ds-color-text-primary)]',
                densityStyles.valueSize,
              )}
            >
              {value}
            </span>
            {trend && trendStyles && (
              <div
                className="flex items-center gap-1 text-sm font-medium"
                style={{ color: trendStyles.color }}
              >
                <Icon name={trendStyles.icon as any} size={16} />
                <span>{trend.value}</span>
              </div>
            )}
          </div>

          {/* Description */}
          {description && (
            <p
              className={cn(
                'text-[var(--ds-color-text-secondary)] leading-relaxed',
                densityStyles.descriptionSize,
              )}
            >
              {description}
            </p>
          )}

          {/* Footer */}
          {footer && (
            <div className="mt-2 pt-2 border-t border-[var(--ds-color-neutral-300)]">
              {footer}
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
);

SummaryCard.displayName = 'SummaryCard';
