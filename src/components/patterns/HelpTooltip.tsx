import * as React from 'react';
import { cn } from '../../utils/cn';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface HelpTooltipProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Help text content
   */
  content: React.ReactNode;

  /**
   * Icon to display
   */
  icon?: IconName;

  /**
   * Size of the help icon
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Tooltip side
   */
  side?: 'top' | 'bottom' | 'left' | 'right';

  /**
   * Whether to show "Learn More" link
   */
  learnMoreUrl?: string;

  /**
   * Custom learn more label
   */
  learnMoreLabel?: string;

  /**
   * Icon variant
   */
  variant?: 'default' | 'subtle' | 'inverted';

  /**
   * Maximum width of tooltip content
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeConfig = {
  sm: 14,
  md: 16,
  lg: 18,
} as const;

const maxWidthConfig = {
  sm: 'max-w-xs',
  md: 'max-w-sm',
  lg: 'max-w-md',
  xl: 'max-w-lg',
} as const;

const variantConfig = {
  default: {
    buttonClass:
      'text-[var(--ds-color-blue-600)] hover:text-[var(--ds-color-blue-700)] transition-colors',
    iconColor: 'var(--ds-color-blue-600)',
  },
  subtle: {
    buttonClass:
      'text-[var(--ds-color-text-secondary)] hover:text-[var(--ds-color-text-primary)] transition-colors',
    iconColor: 'var(--ds-color-text-secondary)',
  },
  inverted: {
    buttonClass: 'text-white/80 hover:text-white transition-colors',
    iconColor: 'currentColor',
  },
} as const;

/**
 * HelpTooltip component - provides contextual help with icon and tooltip
 */
export const HelpTooltip = React.forwardRef<HTMLButtonElement, HelpTooltipProps>(
  (
    {
      content,
      icon = 'help-circle' as IconName,
      size = 'md',
      side = 'top',
      learnMoreUrl,
      learnMoreLabel = 'Learn more',
      variant = 'default',
      maxWidth = 'md',
      className,
      ...props
    },
    ref,
  ) => {
    const config = variantConfig[variant];
    const iconSize = sizeConfig[size];

    const tooltipContent = (
      <div className={cn('space-y-2', maxWidthConfig[maxWidth])}>
        <div className="text-sm">{content}</div>
        {learnMoreUrl && (
          <a
            href={learnMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-[var(--ds-color-blue-600)] hover:text-[var(--ds-color-blue-700)] hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {learnMoreLabel}
            <Icon name={'external-link' as any} size={12} />
          </a>
        )}
      </div>
    );

    return (
      <TooltipProvider>
        <Tooltip delayDuration={200}>
          <TooltipTrigger asChild>
            <button
              ref={ref}
              type="button"
              className={cn(
                'inline-flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--ds-color-blue-500)] focus:ring-offset-2',
                config.buttonClass,
                className,
              )}
              aria-label="Help"
              {...props}
            >
              <Icon name={icon as any} size={iconSize} color={config.iconColor} />
            </button>
          </TooltipTrigger>
          <TooltipContent side={side} className={maxWidthConfig[maxWidth]}>
            {tooltipContent}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
);

HelpTooltip.displayName = 'HelpTooltip';

/**
 * LabelWithHelp - combines a label with help tooltip
 */
export interface LabelWithHelpProps {
  /**
   * Label text
   */
  label: string;

  /**
   * Help content
   */
  helpContent: React.ReactNode;

  /**
   * Whether label is required
   */
  required?: boolean;

  /**
   * Learn more URL
   */
  learnMoreUrl?: string;

  /**
   * Custom className
   */
  className?: string;

  /**
   * Help tooltip props
   */
  helpTooltipProps?: Partial<HelpTooltipProps>;
}

export const LabelWithHelp: React.FC<LabelWithHelpProps> = ({
  label,
  helpContent,
  required = false,
  learnMoreUrl,
  className,
  helpTooltipProps,
}) => {
  return (
    <div className={cn('inline-flex items-center gap-1.5', className)}>
      <span className="font-medium text-[var(--ds-color-text-primary)]">
        {label}
        {required && <span className="text-[var(--ds-color-error-500)] ml-0.5">*</span>}
      </span>
      <HelpTooltip
        content={helpContent}
        learnMoreUrl={learnMoreUrl}
        size="sm"
        {...helpTooltipProps}
      />
    </div>
  );
};

LabelWithHelp.displayName = 'LabelWithHelp';
