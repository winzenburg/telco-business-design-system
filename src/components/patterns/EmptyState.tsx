import * as React from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/button';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant defines the context and visual treatment
   */
  variant?: 'no-data' | 'no-results' | 'first-use' | 'error' | 'permissions';

  /**
   * Icon name from design system icons
   */
  icon?: IconName;

  /**
   * Headline text (required)
   */
  headline: string;

  /**
   * Supporting description text
   */
  description?: string;

  /**
   * Primary action button
   */
  primaryAction?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  };

  /**
   * Secondary action button
   */
  secondaryAction?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  };

  /**
   * Additional content to render below actions
   */
  children?: React.ReactNode;

  /**
   * Size of the empty state
   */
  size?: 'sm' | 'md' | 'lg';
}

const variantConfig = {
  'no-data': {
    icon: 'inbox' as IconName,
    iconColor: 'var(--ds-color-neutral-400)',
  },
  'no-results': {
    icon: 'search' as IconName,
    iconColor: 'var(--ds-color-neutral-400)',
  },
  'first-use': {
    icon: 'compass' as IconName,
    iconColor: 'var(--ds-color-blue-500)',
  },
  'error': {
    icon: 'alert-circle' as IconName,
    iconColor: 'var(--ds-color-error-500)',
  },
  'permissions': {
    icon: 'shield' as IconName,
    iconColor: 'var(--ds-color-warning-500)',
  },
} as const;

const sizeConfig = {
  sm: {
    container: 'py-8 px-4',
    iconSize: 'size-12',
    headlineSize: 'text-lg',
    descriptionSize: 'text-sm',
    spacing: 'gap-3',
  },
  md: {
    container: 'py-12 px-6',
    iconSize: 'size-16',
    headlineSize: 'text-xl',
    descriptionSize: 'text-base',
    spacing: 'gap-4',
  },
  lg: {
    container: 'py-16 px-8',
    iconSize: 'size-20',
    headlineSize: 'text-2xl',
    descriptionSize: 'text-lg',
    spacing: 'gap-6',
  },
} as const;

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      variant = 'no-data',
      icon,
      headline,
      description,
      primaryAction,
      secondaryAction,
      children,
      size = 'md',
      className,
      ...props
    },
    ref,
  ) => {
    const config = variantConfig[variant];
    const sizeStyles = sizeConfig[size];
    const displayIcon = icon || config.icon;

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center justify-center text-center',
          sizeStyles.container,
          sizeStyles.spacing,
          className,
        )}
        role="status"
        aria-live="polite"
        {...props}
      >
        {/* Icon */}
        <div
          className={cn('flex items-center justify-center', sizeStyles.iconSize)}
          style={{ color: config.iconColor }}
        >
          <Icon name={displayIcon} className="size-full" />
        </div>

        {/* Headline */}
        <h3
          className={cn(
            'font-primary font-bold text-[var(--ds-color-text-primary)]',
            sizeStyles.headlineSize,
          )}
        >
          {headline}
        </h3>

        {/* Description */}
        {description && (
          <p
            className={cn(
              'font-secondary text-[var(--ds-color-text-secondary)] max-w-md',
              sizeStyles.descriptionSize,
            )}
          >
            {description}
          </p>
        )}

        {/* Actions */}
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            {primaryAction && (
              <Button
                onClick={primaryAction.onClick}
                disabled={primaryAction.disabled}
                variant="primary"
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                onClick={secondaryAction.onClick}
                disabled={secondaryAction.disabled}
                variant="secondary"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}

        {/* Additional content */}
        {children && <div className="mt-4 w-full max-w-md">{children}</div>}
      </div>
    );
  },
);

EmptyState.displayName = 'EmptyState';
