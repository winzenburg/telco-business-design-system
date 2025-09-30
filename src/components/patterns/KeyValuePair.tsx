import * as React from 'react';
import { cn } from '../../utils/cn';
import { Badge } from '../ui/badge';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface KeyValuePairProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The key/label text
   */
  label: string;

  /**
   * The value to display
   */
  value: React.ReactNode;

  /**
   * Layout orientation
   */
  layout?: 'horizontal' | 'vertical' | 'inline';

  /**
   * Label width (only applies to horizontal layout)
   */
  labelWidth?: 'auto' | 'sm' | 'md' | 'lg';

  /**
   * Optional icon before label
   */
  icon?: IconName;

  /**
   * Optional badge to display with value
   */
  badge?: {
    label: string;
    variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive';
  };

  /**
   * Whether the value is copyable
   */
  copyable?: boolean;

  /**
   * Whether the label should be visually emphasized
   */
  emphasizeLabel?: boolean;

  /**
   * Density variant
   */
  density?: 'compact' | 'comfortable' | 'spacious';

  /**
   * Value text style
   */
  valueStyle?: 'normal' | 'mono' | 'strong';
}

const labelWidthConfig = {
  auto: 'w-auto',
  sm: 'w-24',
  md: 'w-32',
  lg: 'w-40',
} as const;

const densityConfig = {
  compact: {
    container: 'gap-1',
    text: 'text-sm',
    iconSize: 14,
  },
  comfortable: {
    container: 'gap-2',
    text: 'text-base',
    iconSize: 16,
  },
  spacious: {
    container: 'gap-3',
    text: 'text-lg',
    iconSize: 18,
  },
} as const;

const valueStyleConfig = {
  normal: 'font-normal',
  mono: 'font-mono',
  strong: 'font-semibold',
} as const;

export const KeyValuePair = React.forwardRef<HTMLDivElement, KeyValuePairProps>(
  (
    {
      label,
      value,
      layout = 'horizontal',
      labelWidth = 'auto',
      icon,
      badge,
      copyable = false,
      emphasizeLabel = false,
      density = 'comfortable',
      valueStyle = 'normal',
      className,
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = React.useState(false);
    const densityStyles = densityConfig[density];

    const handleCopy = async () => {
      if (typeof value === 'string') {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };

    const layoutClasses = {
      horizontal: 'flex items-center',
      vertical: 'flex flex-col',
      inline: 'inline-flex items-baseline gap-2',
    };

    return (
      <div
        ref={ref}
        className={cn(
          layoutClasses[layout],
          densityStyles.container,
          className,
        )}
        {...props}
      >
        {/* Label */}
        <dt
          className={cn(
            'text-[var(--ds-color-text-secondary)] flex items-center gap-2',
            densityStyles.text,
            layout === 'horizontal' && labelWidthConfig[labelWidth],
            layout === 'horizontal' && 'flex-shrink-0',
            emphasizeLabel && 'font-semibold text-[var(--ds-color-text-primary)]',
          )}
        >
          {icon && (
            <Icon
              name={icon as any}
              size={densityStyles.iconSize}
              color="var(--ds-color-neutral-500)"
            />
          )}
          {label}
          {layout === 'horizontal' && ':'}
        </dt>

        {/* Value */}
        <dd
          className={cn(
            'text-[var(--ds-color-text-primary)] flex items-center gap-2 flex-1',
            densityStyles.text,
            valueStyleConfig[valueStyle],
          )}
        >
          <span className="flex-1 min-w-0 break-words">{value}</span>

          {badge && (
            <Badge variant={badge.variant || 'default'} className="flex-shrink-0">
              {badge.label}
            </Badge>
          )}

          {copyable && (
            <button
              onClick={handleCopy}
              className="flex-shrink-0 text-[var(--ds-color-blue-600)] hover:text-[var(--ds-color-blue-700)] transition-colors"
              aria-label="Copy to clipboard"
              title="Copy to clipboard"
            >
              <Icon
                name={copied ? 'check' : 'clipboard' as any}
                size={densityStyles.iconSize}
              />
            </button>
          )}
        </dd>
      </div>
    );
  },
);

KeyValuePair.displayName = 'KeyValuePair';

/**
 * KeyValueList component for displaying multiple key-value pairs
 */
export interface KeyValueListProps extends React.HTMLAttributes<HTMLDListElement> {
  /**
   * Array of key-value pairs
   */
  items: Omit<KeyValuePairProps, 'className'>[];

  /**
   * Layout orientation for all items
   */
  layout?: 'horizontal' | 'vertical' | 'inline';

  /**
   * Label width (only applies to horizontal layout)
   */
  labelWidth?: 'auto' | 'sm' | 'md' | 'lg';

  /**
   * Whether to show dividers between items
   */
  dividers?: boolean;

  /**
   * Density variant
   */
  density?: 'compact' | 'comfortable' | 'spacious';
}

export const KeyValueList = React.forwardRef<HTMLDListElement, KeyValueListProps>(
  (
    {
      items,
      layout = 'horizontal',
      labelWidth = 'auto',
      dividers = false,
      density = 'comfortable',
      className,
      ...props
    },
    ref,
  ) => {
    const spacingClasses = {
      compact: 'space-y-2',
      comfortable: 'space-y-3',
      spacious: 'space-y-4',
    };

    return (
      <dl
        ref={ref}
        className={cn(
          spacingClasses[density],
          dividers && 'divide-y divide-[var(--ds-color-neutral-300)]',
          className,
        )}
        {...props}
      >
        {items.map((item, index) => (
          <KeyValuePair
            key={`kv-${index}`}
            {...item}
            layout={layout}
            labelWidth={labelWidth}
            density={density}
            className={dividers ? 'pt-3 first:pt-0' : undefined}
          />
        ))}
      </dl>
    );
  },
);

KeyValueList.displayName = 'KeyValueList';
