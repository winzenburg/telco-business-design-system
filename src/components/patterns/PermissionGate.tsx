import * as React from 'react';

export interface Permission {
  /**
   * Permission identifier
   */
  id: string;

  /**
   * Permission resource (e.g., 'users', 'settings', 'reports')
   */
  resource?: string;

  /**
   * Permission action (e.g., 'read', 'write', 'delete', 'admin')
   */
  action?: string;
}

export interface PermissionGateProps {
  /**
   * Required permissions (user must have ALL of these)
   */
  requires?: Permission[];

  /**
   * Required permissions (user must have AT LEAST ONE of these)
   */
  requiresAny?: Permission[];

  /**
   * User's current permissions
   */
  userPermissions: Permission[];

  /**
   * Content to render when user has permission
   */
  children: React.ReactNode;

  /**
   * Content to render when user lacks permission
   */
  fallback?: React.ReactNode;

  /**
   * Callback when permission check fails
   */
  onPermissionDenied?: (missingPermissions: Permission[]) => void;
}

/**
 * Check if user has a specific permission
 */
function hasPermission(
  userPermissions: Permission[],
  requiredPermission: Permission,
): boolean {
  return userPermissions.some(
    (userPerm) =>
      userPerm.id === requiredPermission.id ||
      (requiredPermission.resource &&
        requiredPermission.action &&
        userPerm.resource === requiredPermission.resource &&
        userPerm.action === requiredPermission.action),
  );
}

/**
 * Check if user has all required permissions
 */
function hasAllPermissions(
  userPermissions: Permission[],
  requiredPermissions: Permission[],
): boolean {
  return requiredPermissions.every((required) =>
    hasPermission(userPermissions, required),
  );
}

/**
 * Check if user has at least one of the required permissions
 */
function hasAnyPermission(
  userPermissions: Permission[],
  requiredPermissions: Permission[],
): boolean {
  return requiredPermissions.some((required) =>
    hasPermission(userPermissions, required),
  );
}

/**
 * Get missing permissions
 */
function getMissingPermissions(
  userPermissions: Permission[],
  requiredPermissions: Permission[],
): Permission[] {
  return requiredPermissions.filter(
    (required) => !hasPermission(userPermissions, required),
  );
}

/**
 * PermissionGate component - conditionally renders content based on user permissions
 */
export const PermissionGate: React.FC<PermissionGateProps> = ({
  requires,
  requiresAny,
  userPermissions,
  children,
  fallback = null,
  onPermissionDenied,
}) => {
  const hasAccess = React.useMemo(() => {
    // If both requires and requiresAny are provided, user must satisfy both conditions
    if (requires && requiresAny) {
      return (
        hasAllPermissions(userPermissions, requires) &&
        hasAnyPermission(userPermissions, requiresAny)
      );
    }

    // If only requires is provided, user must have all permissions
    if (requires) {
      return hasAllPermissions(userPermissions, requires);
    }

    // If only requiresAny is provided, user must have at least one permission
    if (requiresAny) {
      return hasAnyPermission(userPermissions, requiresAny);
    }

    // If no requirements specified, grant access
    return true;
  }, [userPermissions, requires, requiresAny]);

  React.useEffect(() => {
    if (!hasAccess && onPermissionDenied) {
      const missingPerms = requires
        ? getMissingPermissions(userPermissions, requires)
        : [];
      onPermissionDenied(missingPerms);
    }
  }, [hasAccess, onPermissionDenied, userPermissions, requires]);

  if (hasAccess) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};

PermissionGate.displayName = 'PermissionGate';

/**
 * Hook for checking permissions
 */
export interface UsePermissionsOptions {
  /**
   * User's current permissions
   */
  userPermissions: Permission[];
}

export function usePermissions({ userPermissions }: UsePermissionsOptions) {
  const can = React.useCallback(
    (permission: Permission | Permission[]): boolean => {
      const perms = Array.isArray(permission) ? permission : [permission];
      return hasAllPermissions(userPermissions, perms);
    },
    [userPermissions],
  );

  const canAny = React.useCallback(
    (permissions: Permission[]): boolean => {
      return hasAnyPermission(userPermissions, permissions);
    },
    [userPermissions],
  );

  const cannot = React.useCallback(
    (permission: Permission | Permission[]): boolean => {
      return !can(permission);
    },
    [can],
  );

  const getMissing = React.useCallback(
    (required: Permission[]): Permission[] => {
      return getMissingPermissions(userPermissions, required);
    },
    [userPermissions],
  );

  return {
    can,
    canAny,
    cannot,
    getMissing,
    permissions: userPermissions,
  };
}
