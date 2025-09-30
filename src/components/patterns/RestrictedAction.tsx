import * as React from 'react';
import { cn } from '../../utils/cn';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';
import type { Permission } from './PermissionGate';

export interface RestrictedActionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the user has permission
   */
  hasPermission: boolean;

  /**
   * Reason for restriction (shown in tooltip)
   */
  restrictionReason?: string;

  /**
   * Action content (button, link, etc.)
   */
  children: React.ReactNode;

  /**
   * Whether to show the action in a disabled state (vs hiding it)
   */
  showWhenRestricted?: boolean;

  /**
   * Custom tooltip content when restricted
   */
  restrictedTooltip?: React.ReactNode;

  /**
   * Icon to show in tooltip
   */
  tooltipIcon?: IconName;

  /**
   * Whether to show lock icon on disabled button
   */
  showLockIcon?: boolean;

  /**
   * Callback when restricted action is attempted
   */
  onRestrictedAttempt?: () => void;
}

/**
 * RestrictedAction component - wraps actions with permission-based restrictions
 */
export const RestrictedAction = React.forwardRef<HTMLDivElement, RestrictedActionProps>(
  (
    {
      hasPermission,
      restrictionReason = 'You do not have permission to perform this action',
      children,
      showWhenRestricted = true,
      restrictedTooltip,
      tooltipIcon = 'alert' as IconName,
      showLockIcon = false,
      onRestrictedAttempt,
      className,
      ...props
    },
    ref,
  ) => {
    const handleRestrictedClick = (e: React.MouseEvent) => {
      if (!hasPermission) {
        e.preventDefault();
        e.stopPropagation();
        onRestrictedAttempt?.();
      }
    };

    // If user has permission, render children normally
    if (hasPermission) {
      return <>{children}</>;
    }

    // If user lacks permission and we should hide, render nothing
    if (!showWhenRestricted) {
      return null;
    }

    // Clone child and add disabled state if it's a button-like element
    const disabledChild = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          disabled: true,
          'aria-disabled': true,
          onClick: handleRestrictedClick,
          className: cn(
            (child.props as any).className,
            'cursor-not-allowed opacity-60',
          ),
          children: showLockIcon ? (
            <span className="inline-flex items-center gap-2">
              <Icon name={'lock' as any} size={16} />
              {(child.props as any).children}
            </span>
          ) : (
            (child.props as any).children
          ),
        });
      }
      return child;
    });

    const tooltipContent = restrictedTooltip || (
      <div className="flex items-start gap-2 max-w-xs">
        <Icon name={tooltipIcon as any} size={16} className="flex-shrink-0 mt-0.5" />
        <span className="text-sm">{restrictionReason}</span>
      </div>
    );

    return (
      <div ref={ref} className={cn('inline-block', className)} {...props}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="inline-block">{disabledChild}</span>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-xs">
              {tooltipContent}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  },
);

RestrictedAction.displayName = 'RestrictedAction';

/**
 * Hook for creating restricted action handlers
 */
export interface UseRestrictedActionOptions {
  /**
   * Required permission
   */
  permission: Permission | Permission[];

  /**
   * User's current permissions
   */
  userPermissions: Permission[];

  /**
   * Callback when action is attempted without permission
   */
  onRestricted?: (missingPermissions: Permission[]) => void;
}

export function useRestrictedAction({
  permission,
  userPermissions,
  onRestricted,
}: UseRestrictedActionOptions) {
  const permissions = Array.isArray(permission) ? permission : [permission];

  const hasPermission = React.useMemo(() => {
    return permissions.every((perm) =>
      userPermissions.some(
        (userPerm) =>
          userPerm.id === perm.id ||
          (perm.resource &&
            perm.action &&
            userPerm.resource === perm.resource &&
            userPerm.action === perm.action),
      ),
    );
  }, [permissions, userPermissions]);

  const missingPermissions = React.useMemo(() => {
    return permissions.filter(
      (perm) =>
        !userPermissions.some(
          (userPerm) =>
            userPerm.id === perm.id ||
            (perm.resource &&
              perm.action &&
              userPerm.resource === perm.resource &&
              userPerm.action === perm.action),
        ),
    );
  }, [permissions, userPermissions]);

  const attempt = React.useCallback(
    (action: () => void) => {
      if (hasPermission) {
        action();
      } else {
        onRestricted?.(missingPermissions);
      }
    },
    [hasPermission, missingPermissions, onRestricted],
  );

  return {
    hasPermission,
    missingPermissions,
    attempt,
  };
}
