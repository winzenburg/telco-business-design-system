import * as React from 'react';
import { cn } from '../../utils/cn';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Button } from '../ui/button';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface PermissionBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Banner variant based on severity
   */
  variant?: 'info' | 'warning' | 'error';

  /**
   * Banner title
   */
  title?: string;

  /**
   * Banner message
   */
  message: string;

  /**
   * Custom icon
   */
  icon?: IconName;

  /**
   * Whether the banner can be dismissed
   */
  dismissible?: boolean;

  /**
   * Callback when banner is dismissed
   */
  onDismiss?: () => void;

  /**
   * Action button configuration
   */
  action?: {
    label: string;
    onClick: () => void;
  };

  /**
   * Position of the banner
   */
  position?: 'inline' | 'sticky-top' | 'sticky-bottom';

  /**
   * Additional help text or context
   */
  helpText?: string;

  /**
   * Contact information for support
   */
  contactInfo?: React.ReactNode;
}

const variantConfig = {
  info: {
    icon: 'info' as IconName,
    className: 'border-[var(--ds-color-blue-300)] bg-[var(--ds-color-blue-50)]',
    iconColor: 'var(--ds-color-blue-600)',
  },
  warning: {
    icon: 'alert-triangle' as IconName,
    className: 'border-[var(--ds-color-warning-300)] bg-[var(--ds-color-warning-50)]',
    iconColor: 'var(--ds-color-warning-600)',
  },
  error: {
    icon: 'alert-circle' as IconName,
    className: 'border-[var(--ds-color-error-300)] bg-[var(--ds-color-error-50)]',
    iconColor: 'var(--ds-color-error-600)',
  },
} as const;

const positionConfig = {
  inline: '',
  'sticky-top': 'sticky top-0 z-40 shadow-md',
  'sticky-bottom': 'sticky bottom-0 z-40 shadow-md',
} as const;

/**
 * PermissionBanner component - displays permission-related messages and restrictions
 */
export const PermissionBanner = React.forwardRef<HTMLDivElement, PermissionBannerProps>(
  (
    {
      variant = 'warning',
      title,
      message,
      icon,
      dismissible = false,
      onDismiss,
      action,
      position = 'inline',
      helpText,
      contactInfo,
      className,
      ...props
    },
    ref,
  ) => {
    const [isDismissed, setIsDismissed] = React.useState(false);
    const config = variantConfig[variant];
    const displayIcon = icon || config.icon;

    const handleDismiss = () => {
      setIsDismissed(true);
      onDismiss?.();
    };

    if (isDismissed) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(positionConfig[position], className)}
        role="alert"
        aria-live="polite"
        {...props}
      >
        <Alert className={cn(config.className, 'border')}>
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div className="flex-shrink-0 pt-0.5">
              <Icon name={displayIcon as any} size={20} color={config.iconColor} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {title && <AlertTitle className="mb-1">{title}</AlertTitle>}
              <AlertDescription className="text-[var(--ds-color-text-primary)]">
                {message}
              </AlertDescription>

              {helpText && (
                <p className="text-sm text-[var(--ds-color-text-secondary)] mt-2">
                  {helpText}
                </p>
              )}

              {contactInfo && (
                <div className="mt-3 pt-3 border-t border-[var(--ds-color-neutral-300)]">
                  {contactInfo}
                </div>
              )}

              {action && (
                <div className="mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={action.onClick}
                    className="h-8"
                  >
                    {action.label}
                  </Button>
                </div>
              )}
            </div>

            {/* Dismiss Button */}
            {dismissible && (
              <button
                onClick={handleDismiss}
                className="flex-shrink-0 text-[var(--ds-color-text-secondary)] hover:text-[var(--ds-color-text-primary)] transition-colors"
                aria-label="Dismiss"
              >
                <Icon name={'close' as any} size={20} />
              </button>
            )}
          </div>
        </Alert>
      </div>
    );
  },
);

PermissionBanner.displayName = 'PermissionBanner';

/**
 * Preset permission banners for common scenarios
 */
export const PermissionBanners = {
  /**
   * No permission to view content
   */
  NoAccess: ({
    resource = 'this content',
    ...props
  }: Omit<PermissionBannerProps, 'message'> & { resource?: string }) => (
    <PermissionBanner
      variant="error"
      title="Access Denied"
      message={`You don't have permission to access ${resource}.`}
      helpText="If you believe this is an error, please contact your administrator."
      {...props}
    />
  ),

  /**
   * Read-only access (cannot edit)
   */
  ReadOnly: ({
    reason,
    ...props
  }: Omit<PermissionBannerProps, 'message'> & { reason?: string }) => (
    <PermissionBanner
      variant="info"
      title="Read-Only Access"
      message={
        reason
          ? `You have read-only access. ${reason}`
          : 'You have read-only access to this content. Contact your administrator to request edit permissions.'
      }
      {...props}
    />
  ),

  /**
   * Trial or limited access
   */
  TrialAccess: ({
    daysRemaining,
    ...props
  }: Omit<PermissionBannerProps, 'message'> & { daysRemaining?: number }) => (
    <PermissionBanner
      variant="warning"
      title="Trial Access"
      message={
        daysRemaining !== undefined
          ? `You have ${daysRemaining} day${daysRemaining === 1 ? '' : 's'} remaining in your trial.`
          : 'You are using a trial version with limited access.'
      }
      action={{ label: 'Upgrade Now', onClick: () => {} }}
      {...props}
    />
  ),

  /**
   * Feature requires upgrade
   */
  RequiresUpgrade: ({
    feature = 'this feature',
    plan,
    ...props
  }: Omit<PermissionBannerProps, 'message'> & { feature?: string; plan?: string }) => (
    <PermissionBanner
      variant="info"
      title="Upgrade Required"
      message={
        plan
          ? `${feature} is available in the ${plan} plan.`
          : `${feature} requires a plan upgrade.`
      }
      action={{ label: 'View Plans', onClick: () => {} }}
      {...props}
    />
  ),
};
