import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ActivityLog, useActivityLog, type ActivityLogEntry } from '../../src/components/patterns/ActivityLog';
import { NotificationCenter, useNotificationCenter, type Notification } from '../../src/components/patterns/NotificationCenter';
import { Button } from '../../src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../src/components/ui/card';
import { Badge } from '../../src/components/ui/badge';
import { useToast } from '../../src/hooks/use-toast';

const meta = {
  title: 'Patterns/Notifications & Audit Trails',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Traceability and accountability patterns for enterprise compliance and troubleshooting.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample activity data
const sampleActivities: ActivityLogEntry[] = [
  {
    id: '1',
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    user: { name: 'John Smith', id: 'user-1' },
    action: 'Updated customer profile',
    description: 'Changed billing address and contact information',
    type: 'update',
  },
  {
    id: '2',
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    user: { name: 'Sarah Johnson', id: 'user-2' },
    action: 'Deleted invoice',
    description: 'Removed duplicate invoice #INV-2024-0123',
    type: 'delete',
  },
  {
    id: '3',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    user: { name: 'Michael Chen', id: 'user-3' },
    action: 'Created new account',
    description: 'Registered enterprise customer account',
    type: 'create',
  },
  {
    id: '4',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    user: { name: 'Emily Davis', id: 'user-4' },
    action: 'Login attempt failed',
    description: 'Invalid credentials from IP 192.168.1.100',
    type: 'error',
  },
  {
    id: '5',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    user: { name: 'David Wilson', id: 'user-5' },
    action: 'Successful login',
    type: 'login',
  },
  {
    id: '6',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    user: { name: 'Admin User', id: 'admin-1' },
    action: 'System configuration updated',
    description: 'Modified security settings and access controls',
    type: 'warning',
  },
];

// Sample notifications
const sampleNotifications: Notification[] = [
  {
    id: '1',
    title: 'Payment Received',
    message: 'Payment of $1,250.00 has been successfully processed.',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    type: 'success',
    read: false,
  },
  {
    id: '2',
    title: 'Password Expiring Soon',
    message: 'Your password will expire in 3 days. Please update it to maintain access.',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    type: 'warning',
    read: false,
    actionLabel: 'Change Password',
    onAction: () => console.log('Change password clicked'),
  },
  {
    id: '3',
    title: 'New Message',
    message: 'You have a new message from Sarah Johnson regarding Project Alpha.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    type: 'info',
    read: true,
  },
  {
    id: '4',
    title: 'Failed Backup',
    message: 'Automated backup failed. Please check system logs for details.',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    type: 'error',
    read: true,
    actionLabel: 'View Logs',
  },
];

/**
 * ActivityLog displays timestamped user actions
 */
export const ActivityLogVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <ActivityLog entries={sampleActivities} title="Recent Activity" />

      <ActivityLog
        entries={sampleActivities}
        title="Compact Activity Log"
        compact
        maxEntries={3}
      />

      <ActivityLog
        entries={sampleActivities}
        title="Activity by Date"
        groupByDate
      />
    </div>
  ),
};

/**
 * Activity log with type filtering
 */
export const ActivityLogFiltered: Story = {
  render: () => {
    const [filterType, setFilterType] = useState<ActivityLogEntry['type'] | undefined>();

    return (
      <div className="space-y-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Filter by Activity Type</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button
              variant={filterType === undefined ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterType(undefined)}
            >
              All
            </Button>
            <Button
              variant={filterType === 'create' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterType('create')}
            >
              Created
            </Button>
            <Button
              variant={filterType === 'update' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterType('update')}
            >
              Updated
            </Button>
            <Button
              variant={filterType === 'delete' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterType('delete')}
            >
              Deleted
            </Button>
            <Button
              variant={filterType === 'error' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterType('error')}
            >
              Errors
            </Button>
          </CardContent>
        </Card>

        <ActivityLog
          entries={sampleActivities}
          filterType={filterType}
          onEntryClick={(entry) => console.log('Clicked:', entry)}
          clickable
        />
      </div>
    );
  },
};

/**
 * NotificationCenter drawer for system messages
 */
export const NotificationCenterExample: Story = {
  render: () => {
    const {
      open,
      setOpen,
      notifications,
      unreadCount,
      addNotification,
      dismissNotification,
      markAsRead,
      markAllAsRead,
      clearAll,
    } = useNotificationCenter({
      persistToStorage: false,
    });

    // Initialize with sample data
    React.useEffect(() => {
      if (notifications.length === 0) {
        sampleNotifications.forEach((n) => {
          addNotification({
            title: n.title,
            message: n.message,
            type: n.type,
            actionLabel: n.actionLabel,
            onAction: n.onAction,
          });
        });
      }
    }, []);

    return (
      <div className="space-y-4">
        <Card className="max-w-2xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Notification Center Demo</CardTitle>
              <Button variant="outline" onClick={() => setOpen(true)}>
                <span className="mr-2">🔔</span>
                Notifications
                {unreadCount > 0 && (
                  <Badge variant="destructive" className="ml-2 rounded-full">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-[var(--ds-color-text-secondary)]">
              Click the "Notifications" button to open the notification center. You can add new
              notifications using the buttons below.
            </p>

            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                onClick={() =>
                  addNotification({
                    title: 'Test Success',
                    message: 'This is a success notification',
                    type: 'success',
                  })
                }
              >
                Add Success
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  addNotification({
                    title: 'Test Info',
                    message: 'This is an info notification',
                    type: 'info',
                  })
                }
              >
                Add Info
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  addNotification({
                    title: 'Test Warning',
                    message: 'This is a warning notification',
                    type: 'warning',
                    actionLabel: 'Take Action',
                    onAction: () => console.log('Action clicked'),
                  })
                }
              >
                Add Warning
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  addNotification({
                    title: 'Test Error',
                    message: 'This is an error notification',
                    type: 'error',
                  })
                }
              >
                Add Error
              </Button>
            </div>
          </CardContent>
        </Card>

        <NotificationCenter
          open={open}
          onOpenChange={setOpen}
          notifications={notifications}
          onNotificationClick={(n) => {
            markAsRead(n.id);
            console.log('Clicked notification:', n);
          }}
          onNotificationDismiss={dismissNotification}
          onMarkAllRead={markAllAsRead}
          onClearAll={clearAll}
        />
      </div>
    );
  },
};

/**
 * Interactive activity log with hook
 */
export const InteractiveActivityLog: Story = {
  render: () => {
    const { entries, addEntry, clearEntries } = useActivityLog({
      maxEntries: 20,
      persistToStorage: false,
    });

    // Initialize with sample data
    React.useEffect(() => {
      if (entries.length === 0) {
        sampleActivities.forEach((activity) => {
          addEntry({
            user: activity.user,
            action: activity.action,
            description: activity.description,
            type: activity.type,
          });
        });
      }
    }, []);

    const simulateAction = (type: ActivityLogEntry['type']) => {
      const actions = {
        create: 'Created new resource',
        update: 'Updated configuration',
        delete: 'Deleted old record',
        login: 'User logged in',
        logout: 'User logged out',
        error: 'System error occurred',
        warning: 'Warning detected',
        info: 'Information logged',
        access: 'Accessed secure resource',
      };

      addEntry({
        user: { name: 'Current User', id: 'current-user' },
        action: actions[type as keyof typeof actions] || 'Performed action',
        description: `This is a simulated ${type} action`,
        type,
      });
    };

    return (
      <div className="space-y-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Simulate User Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-[var(--ds-color-text-secondary)]">
              Click the buttons below to simulate different types of user actions and see them
              appear in the activity log.
            </p>

            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={() => simulateAction('create')}>
                Create
              </Button>
              <Button size="sm" variant="outline" onClick={() => simulateAction('update')}>
                Update
              </Button>
              <Button size="sm" variant="outline" onClick={() => simulateAction('delete')}>
                Delete
              </Button>
              <Button size="sm" variant="outline" onClick={() => simulateAction('login')}>
                Login
              </Button>
              <Button size="sm" variant="outline" onClick={() => simulateAction('error')}>
                Error
              </Button>
              <Button size="sm" variant="destructive" onClick={clearEntries}>
                Clear All
              </Button>
            </div>
          </CardContent>
        </Card>

        <ActivityLog entries={entries} onEntryClick={(e) => console.log(e)} clickable />
      </div>
    );
  },
};

/**
 * Toast + Persistent Log integration
 */
export const ToastWithAuditTrail: Story = {
  render: () => {
    const { toast } = useToast();
    const { entries, addEntry } = useActivityLog({
      maxEntries: 10,
      persistToStorage: false,
    });

    const performAction = (
      type: 'success' | 'error' | 'warning' | 'info',
      action: string,
      description: string,
    ) => {
      // Show toast
      toast({
        title: action,
        description,
        variant: type === 'error' ? 'destructive' : 'default',
      });

      // Log to audit trail
      addEntry({
        user: { name: 'Current User', id: 'current-user' },
        action,
        description,
        type: type as ActivityLogEntry['type'],
      });
    };

    return (
      <div className="space-y-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Toast + Audit Trail Pattern</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-[var(--ds-color-text-secondary)]">
              This pattern combines ephemeral toast notifications with persistent audit logging for
              complete traceability.
            </p>

            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() =>
                  performAction(
                    'success',
                    'Payment Processed',
                    'Successfully processed payment of $500',
                  )
                }
              >
                Process Payment
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  performAction(
                    'info',
                    'Settings Updated',
                    'User preferences have been saved',
                  )
                }
              >
                Update Settings
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  performAction(
                    'warning',
                    'Backup Skipped',
                    'Scheduled backup was skipped due to low disk space',
                  )
                }
              >
                Skip Backup
              </Button>
              <Button
                variant="destructive"
                onClick={() =>
                  performAction(
                    'error',
                    'Connection Failed',
                    'Unable to connect to database server',
                  )
                }
              >
                Simulate Error
              </Button>
            </div>
          </CardContent>
        </Card>

        <ActivityLog
          entries={entries}
          title="System Audit Trail"
          compact
          maxEntries={10}
        />
      </div>
    );
  },
};

/**
 * Complete compliance dashboard
 */
export const ComplianceDashboard: Story = {
  render: () => {
    const {
      open: notificationOpen,
      setOpen: setNotificationOpen,
      notifications,
      unreadCount,
      addNotification,
      dismissNotification,
      markAllAsRead,
      clearAll,
    } = useNotificationCenter();

    const { entries: auditEntries, addEntry: addAuditEntry } = useActivityLog({
      maxEntries: 50,
    });

    // Initialize
    React.useEffect(() => {
      if (auditEntries.length === 0) {
        sampleActivities.forEach((a) =>
          addAuditEntry({
            user: a.user,
            action: a.action,
            description: a.description,
            type: a.type,
          }),
        );
      }
      if (notifications.length === 0) {
        sampleNotifications.forEach((n) =>
          addNotification({
            title: n.title,
            message: n.message,
            type: n.type,
            actionLabel: n.actionLabel,
          }),
        );
      }
    }, []);

    return (
      <div className="space-y-6 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Compliance Dashboard</h2>
            <p className="text-[var(--ds-color-text-secondary)]">
              Monitor system activity and notifications for compliance and troubleshooting
            </p>
          </div>
          <Button variant="outline" onClick={() => setNotificationOpen(true)}>
            <span className="mr-2">🔔</span>
            Notifications
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2 rounded-full">
                {unreadCount}
              </Badge>
            )}
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{auditEntries.length}</div>
              <div className="text-sm text-[var(--ds-color-text-secondary)]">Total Events</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-[var(--ds-color-error-600)]">
                {auditEntries.filter((e) => e.type === 'error').length}
              </div>
              <div className="text-sm text-[var(--ds-color-text-secondary)]">Errors Logged</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{unreadCount}</div>
              <div className="text-sm text-[var(--ds-color-text-secondary)]">
                Unread Notifications
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">
                {new Set(auditEntries.map((e) => e.user.id)).size}
              </div>
              <div className="text-sm text-[var(--ds-color-text-secondary)]">Active Users</div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Log */}
        <ActivityLog
          entries={auditEntries}
          title="Recent System Activity"
          groupByDate
          maxEntries={15}
        />

        {/* Notification Center */}
        <NotificationCenter
          open={notificationOpen}
          onOpenChange={setNotificationOpen}
          notifications={notifications}
          onNotificationDismiss={dismissNotification}
          onMarkAllRead={markAllAsRead}
          onClearAll={clearAll}
        />
      </div>
    );
  },
};
