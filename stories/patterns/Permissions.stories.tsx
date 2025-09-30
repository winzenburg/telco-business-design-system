import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  PermissionGate,
  usePermissions,
  type Permission,
} from '../../src/components/patterns/PermissionGate';
import {
  RestrictedAction,
  useRestrictedAction,
} from '../../src/components/patterns/RestrictedAction';
import {
  PermissionBanner,
  PermissionBanners,
} from '../../src/components/patterns/PermissionBanner';
import { Button } from '../../src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../src/components/ui/card';
import { Badge } from '../../src/components/ui/badge';

const meta = {
  title: 'Patterns/Role-Based Permissions',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Role-based permission patterns for controlling UI visibility and actions based on user permissions.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample permissions
const adminPermissions: Permission[] = [
  { id: 'users:read', resource: 'users', action: 'read' },
  { id: 'users:write', resource: 'users', action: 'write' },
  { id: 'users:delete', resource: 'users', action: 'delete' },
  { id: 'settings:admin', resource: 'settings', action: 'admin' },
];

const editorPermissions: Permission[] = [
  { id: 'users:read', resource: 'users', action: 'read' },
  { id: 'users:write', resource: 'users', action: 'write' },
];

const viewerPermissions: Permission[] = [
  { id: 'users:read', resource: 'users', action: 'read' },
];

/**
 * PermissionGate hides/shows content based on user permissions
 */
export const PermissionGateExample: Story = {
  render: () => {
    const [role, setRole] = useState<'admin' | 'editor' | 'viewer'>('viewer');

    const permissions =
      role === 'admin'
        ? adminPermissions
        : role === 'editor'
          ? editorPermissions
          : viewerPermissions;

    return (
      <div className="space-y-4 max-w-2xl">
        <div className="flex items-center gap-3">
          <label className="font-medium">Current Role:</label>
          <div className="flex gap-2">
            {(['admin', 'editor', 'viewer'] as const).map((r) => (
              <Button
                key={r}
                variant={role === r ? 'default' : 'outline'}
                size="sm"
                onClick={() => setRole(r)}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Always visible */}
            <div className="flex items-center justify-between">
              <span>View Users</span>
              <Badge variant="success">Available</Badge>
            </div>

            {/* Requires write permission */}
            <PermissionGate
              requires={[{ id: 'users:write', resource: 'users', action: 'write' }]}
              userPermissions={permissions}
              fallback={
                <div className="flex items-center justify-between opacity-50">
                  <span>Edit Users</span>
                  <Badge>Restricted</Badge>
                </div>
              }
            >
              <div className="flex items-center justify-between">
                <span>Edit Users</span>
                <Badge variant="success">Available</Badge>
              </div>
            </PermissionGate>

            {/* Requires delete permission */}
            <PermissionGate
              requires={[{ id: 'users:delete', resource: 'users', action: 'delete' }]}
              userPermissions={permissions}
              fallback={
                <div className="flex items-center justify-between opacity-50">
                  <span>Delete Users</span>
                  <Badge>Restricted</Badge>
                </div>
              }
            >
              <div className="flex items-center justify-between">
                <span>Delete Users</span>
                <Badge variant="success">Available</Badge>
              </div>
            </PermissionGate>

            {/* Requires admin permission */}
            <PermissionGate
              requires={[{ id: 'settings:admin', resource: 'settings', action: 'admin' }]}
              userPermissions={permissions}
              fallback={
                <div className="flex items-center justify-between opacity-50">
                  <span>Admin Settings</span>
                  <Badge>Admin Only</Badge>
                </div>
              }
            >
              <div className="flex items-center justify-between">
                <span>Admin Settings</span>
                <Badge variant="success">Available</Badge>
              </div>
            </PermissionGate>
          </CardContent>
        </Card>
      </div>
    );
  },
};

/**
 * RestrictedAction disables actions with explanatory tooltips
 */
export const RestrictedActionExample: Story = {
  render: () => {
    const [role, setRole] = useState<'admin' | 'editor' | 'viewer'>('viewer');

    const permissions =
      role === 'admin'
        ? adminPermissions
        : role === 'editor'
          ? editorPermissions
          : viewerPermissions;

    const permissions2 = usePermissions({ userPermissions: permissions });

    return (
      <div className="space-y-6 max-w-2xl">
        <div className="flex items-center gap-3">
          <label className="font-medium">Current Role:</label>
          <div className="flex gap-2">
            {(['admin', 'editor', 'viewer'] as const).map((r) => (
              <Button
                key={r}
                variant={role === r ? 'default' : 'outline'}
                size="sm"
                onClick={() => setRole(r)}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Actions (Hover over disabled buttons)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span>View user details</span>
              <Button size="sm">View</Button>
            </div>

            <div className="flex items-center justify-between">
              <span>Edit user profile</span>
              <RestrictedAction
                hasPermission={permissions2.can({
                  id: 'users:write',
                  resource: 'users',
                  action: 'write',
                })}
                restrictionReason="You need write permissions to edit users. Contact your administrator to request access."
                showLockIcon
              >
                <Button size="sm">Edit</Button>
              </RestrictedAction>
            </div>

            <div className="flex items-center justify-between">
              <span>Delete user account</span>
              <RestrictedAction
                hasPermission={permissions2.can({
                  id: 'users:delete',
                  resource: 'users',
                  action: 'delete',
                })}
                restrictionReason="Only administrators can delete user accounts. This is a destructive action that requires elevated permissions."
                showLockIcon
                onRestrictedAttempt={() =>
                  alert('Delete permission required - request sent to admin')
                }
              >
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </RestrictedAction>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

/**
 * PermissionBanner displays permission-related messages
 */
export const PermissionBannerVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-3xl">
      <PermissionBanner
        variant="info"
        message="You have read-only access to this content."
        action={{ label: 'Request Edit Access', onClick: () => alert('Request sent!') }}
      />

      <PermissionBanner
        variant="warning"
        title="Limited Access"
        message="Some features are restricted in your current plan."
        action={{ label: 'Upgrade Plan', onClick: () => alert('Redirecting...') }}
        dismissible
      />

      <PermissionBanner
        variant="error"
        title="Access Denied"
        message="You don't have permission to access this resource."
        helpText="If you believe this is an error, please contact your administrator."
        contactInfo={
          <p className="text-sm">
            Contact support:{' '}
            <a
              href="mailto:support@example.com"
              className="text-[var(--ds-color-blue-600)] hover:underline"
            >
              support@example.com
            </a>
          </p>
        }
      />
    </div>
  ),
};

/**
 * Preset permission banners for common scenarios
 */
export const PresetBanners: Story = {
  render: () => (
    <div className="space-y-4 max-w-3xl">
      <PermissionBanners.NoAccess resource="user management settings" dismissible />

      <PermissionBanners.ReadOnly
        reason="Your current role only allows viewing."
        dismissible
      />

      <PermissionBanners.TrialAccess daysRemaining={7} dismissible />

      <PermissionBanners.RequiresUpgrade
        feature="Advanced Analytics"
        plan="Professional"
        dismissible
      />
    </div>
  ),
};

/**
 * Complete dashboard with role-based UI
 */
export const RoleBasedDashboard: Story = {
  render: () => {
    const [role, setRole] = useState<'admin' | 'editor' | 'viewer'>('viewer');

    const permissions =
      role === 'admin'
        ? adminPermissions
        : role === 'editor'
          ? editorPermissions
          : viewerPermissions;

    const { can } = usePermissions({ userPermissions: permissions });

    return (
      <div className="space-y-6 max-w-4xl">
        {/* Role Switcher */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">User Management Dashboard</h2>
            <p className="text-[var(--ds-color-text-secondary)]">
              Current role: {role.charAt(0).toUpperCase() + role.slice(1)}
            </p>
          </div>
          <div className="flex gap-2">
            {(['admin', 'editor', 'viewer'] as const).map((r) => (
              <Button
                key={r}
                variant={role === r ? 'default' : 'outline'}
                size="sm"
                onClick={() => setRole(r)}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Permission Banner */}
        {role === 'viewer' && (
          <PermissionBanners.ReadOnly
            reason="Upgrade to Editor role to make changes."
            dismissible
          />
        )}

        {role === 'editor' && (
          <PermissionBanner
            variant="info"
            message="You have editor access. Some admin features may be restricted."
            dismissible
          />
        )}

        {/* User Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Users</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Export
                </Button>
                <PermissionGate
                  requires={[{ id: 'users:write', resource: 'users', action: 'write' }]}
                  userPermissions={permissions}
                >
                  <Button size="sm">Add User</Button>
                </PermissionGate>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['John Doe', 'Jane Smith', 'Bob Johnson'].map((name) => (
                <div key={name} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-[var(--ds-color-text-secondary)]">
                      {name.toLowerCase().replace(' ', '.')}@example.com
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                    <RestrictedAction
                      hasPermission={can({
                        id: 'users:write',
                        resource: 'users',
                        action: 'write',
                      })}
                      restrictionReason="You need write permissions to edit users."
                    >
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </RestrictedAction>
                    <RestrictedAction
                      hasPermission={can({
                        id: 'users:delete',
                        resource: 'users',
                        action: 'delete',
                      })}
                      restrictionReason="Only administrators can delete users."
                      showLockIcon
                    >
                      <Button variant="ghost" size="sm">
                        Delete
                      </Button>
                    </RestrictedAction>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};
