import * as React from 'react';
import { cn } from '../../utils/cn';
import { Alert, AlertDescription } from '../ui/alert';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface InlineHelpProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Help content
   */
  content: React.ReactNode;

  /**
   * Visual variant
   */
  variant?: 'info' | 'tip' | 'warning' | 'note';

  /**
   * Custom icon
   */
  icon?: IconName;

  /**
   * Whether the help is collapsible
   */
  collapsible?: boolean;

  /**
   * Default collapsed state (only applies when collapsible is true)
   */
  defaultCollapsed?: boolean;

  /**
   * Optional title
   */
  title?: string;

  /**
   * Learn more link
   */
  learnMoreUrl?: string;

  /**
   * Learn more label
   */
  learnMoreLabel?: string;
}

const variantConfig = {
  info: {
    icon: 'info' as IconName,
    iconColor: 'var(--ds-color-blue-600)',
    bgClass: 'bg-[var(--ds-color-blue-50)]',
    borderClass: 'border-[var(--ds-color-blue-300)]',
    textClass: 'text-[var(--ds-color-blue-900)]',
  },
  tip: {
    icon: 'lightbulb' as IconName,
    iconColor: 'var(--ds-color-warning-600)',
    bgClass: 'bg-[var(--ds-color-warning-50)]',
    borderClass: 'border-[var(--ds-color-warning-300)]',
    textClass: 'text-[var(--ds-color-warning-900)]',
  },
  warning: {
    icon: 'alert-triangle' as IconName,
    iconColor: 'var(--ds-color-warning-600)',
    bgClass: 'bg-[var(--ds-color-warning-50)]',
    borderClass: 'border-[var(--ds-color-warning-400)]',
    textClass: 'text-[var(--ds-color-warning-900)]',
  },
  note: {
    icon: 'file-text' as IconName,
    iconColor: 'var(--ds-color-neutral-600)',
    bgClass: 'bg-[var(--ds-color-neutral-100)]',
    borderClass: 'border-[var(--ds-color-neutral-400)]',
    textClass: 'text-[var(--ds-color-text-primary)]',
  },
} as const;

/**
 * InlineHelp component - embedded help content within the UI
 */
export const InlineHelp = React.forwardRef<HTMLDivElement, InlineHelpProps>(
  (
    {
      content,
      variant = 'info',
      icon,
      collapsible = false,
      defaultCollapsed = false,
      title,
      learnMoreUrl,
      learnMoreLabel = 'Learn more',
      className,
      ...props
    },
    ref,
  ) => {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
    const config = variantConfig[variant];
    const displayIcon = icon || config.icon;

    const toggleCollapse = () => {
      if (collapsible) {
        setIsCollapsed(!isCollapsed);
      }
    };

    return (
      <Alert
        ref={ref}
        className={cn(
          'border',
          config.bgClass,
          config.borderClass,
          config.textClass,
          className,
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 pt-0.5">
            <Icon name={displayIcon as any} size={20} color={config.iconColor} />
          </div>

          <div className="flex-1 min-w-0">
            {(title || collapsible) && (
              <div
                className={cn(
                  'flex items-center gap-2 mb-2',
                  collapsible && 'cursor-pointer',
                )}
                onClick={toggleCollapse}
              >
                {title && (
                  <h4 className="font-semibold text-sm">{title}</h4>
                )}
                {collapsible && (
                  <Icon
                    name={'chevron' as any}
                    size={16}
                    className={cn(
                      'transition-transform flex-shrink-0',
                      isCollapsed ? '-rotate-90' : '',
                    )}
                    color={config.iconColor}
                  />
                )}
              </div>
            )}

            {(!collapsible || !isCollapsed) && (
              <>
                <AlertDescription className="text-sm leading-relaxed">
                  {content}
                </AlertDescription>

                {learnMoreUrl && (
                  <a
                    href={learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[var(--ds-color-blue-600)] hover:text-[var(--ds-color-blue-700)] hover:underline mt-2"
                  >
                    {learnMoreLabel}
                    <Icon name={'external-link' as any} size={12} />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </Alert>
    );
  },
);

InlineHelp.displayName = 'InlineHelp';

/**
 * Glossary Term - inline definition with tooltip
 */
export interface GlossaryTermProps {
  /**
   * The term to define
   */
  term: string;

  /**
   * Definition of the term
   */
  definition: React.ReactNode;

  /**
   * Optional learn more URL
   */
  learnMoreUrl?: string;

  /**
   * Custom className
   */
  className?: string;
}

export const GlossaryTerm: React.FC<GlossaryTermProps> = ({
  term,
  definition,
  learnMoreUrl,
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 border-b-2 border-dotted border-[var(--ds-color-blue-500)] cursor-help',
        className,
      )}
      title={typeof definition === 'string' ? definition : undefined}
    >
      {term}
      <Icon name={'help-circle' as any} size={14} color="var(--ds-color-blue-600)" />
    </span>
  );
};

GlossaryTerm.displayName = 'GlossaryTerm';
