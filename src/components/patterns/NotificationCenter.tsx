import * as React from 'react';
import { cn } from '../../utils/cn';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read?: boolean;
  type?: 'info' | 'success' | 'warning' | 'error';
  icon?: IconName;
  actionLabel?: string;
  onAction?: () => void;
  metadata?: Record<string, any>;
}

export interface NotificationCenterProps {
  /**
   * Whether the center is open
   */
  open: boolean;

  /**
   * Callback when center should close
   */
  onOpenChange: (open: boolean) => void;

  /**
   * Notifications to display
   */
  notifications: Notification[];

  /**
   * Callback when a notification is clicked
   */
  onNotificationClick?: (notification: Notification) => void;

  /**
   * Callback when a notification is dismissed
   */
  onNotificationDismiss?: (notificationId: string) => void;

  /**
   * Callback when all notifications are marked as read
   */
  onMarkAllRead?: () => void;

  /**
   * Callback when all notifications are cleared
   */
  onClearAll?: () => void;

  /**
   * Title
   */
  title?: string;

  /**
   * Side of the screen to display
   */
  side?: 'left' | 'right';

  /**
   * Whether to show filters
   */
  showFilters?: boolean;
}

const typeConfig = {
  info: {
    icon: 'info' as IconName,
    colorClass: 'text-[var(--ds-color-blue-600)]',
    bgClass: 'bg-[var(--ds-color-blue-50)]',
  },
  success: {
    icon: 'check-circle' as IconName,
    colorClass: 'text-[var(--ds-color-success-600)]',
    bgClass: 'bg-[var(--ds-color-success-50)]',
  },
  warning: {
    icon: 'alert-triangle' as IconName,
    colorClass: 'text-[var(--ds-color-warning-600)]',
    bgClass: 'bg-[var(--ds-color-warning-50)]',
  },
  error: {
    icon: 'alert-circle' as IconName,
    colorClass: 'text-[var(--ds-color-error-600)]',
    bgClass: 'bg-[var(--ds-color-error-50)]',
  },
} as const;

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
}

/**
 * NotificationCenter component - centralized notification drawer
 */
export const NotificationCenter = React.forwardRef<HTMLDivElement, NotificationCenterProps>(
  (
    {
      open,
      onOpenChange,
      notifications,
      onNotificationClick,
      onNotificationDismiss,
      onMarkAllRead,
      onClearAll,
      title = 'Notifications',
      side = 'right',
      showFilters = true,
    },
    ref,
  ) => {
    const [filter, setFilter] = React.useState<'all' | 'unread'>('all');

    const filteredNotifications = React.useMemo(() => {
      if (filter === 'unread') {
        return notifications.filter((n) => !n.read);
      }
      return notifications;
    }, [notifications, filter]);

    const unreadCount = React.useMemo(() => {
      return notifications.filter((n) => !n.read).length;
    }, [notifications]);

    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent ref={ref} side={side} className="w-full sm:max-w-md overflow-y-auto">
          <SheetHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SheetTitle>{title}</SheetTitle>
                {unreadCount > 0 && (
                  <Badge variant="destructive" className="rounded-full">
                    {unreadCount}
                  </Badge>
                )}
              </div>
              {onMarkAllRead && unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={onMarkAllRead}>
                  Mark all read
                </Button>
              )}
            </div>
          </SheetHeader>

          <div className="mt-6 space-y-4">
            {/* Filters */}
            {showFilters && (
              <div className="flex items-center gap-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  All
                </Button>
                <Button
                  variant={filter === 'unread' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setFilter('unread')}
                >
                  Unread {unreadCount > 0 && `(${unreadCount})`}
                </Button>
                {onClearAll && notifications.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={onClearAll} className="ml-auto">
                    Clear all
                  </Button>
                )}
              </div>
            )}

            {/* Notifications List */}
            {filteredNotifications.length === 0 ? (
              <div className="text-center py-8 text-[var(--ds-color-text-secondary)]">
                <Icon name="bell" size={48} className="mx-auto mb-3 opacity-40" />
                <p>{filter === 'unread' ? 'No unread notifications' : 'No notifications'}</p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredNotifications.map((notification) => {
                  const config = notification.type ? typeConfig[notification.type] : null;

                  const isClickable = !!onNotificationClick || !!notification.onAction;

                  return (
                    <button
                      key={notification.id}
                      type="button"
                      onClick={() => onNotificationClick?.(notification)}
                      disabled={!isClickable}
                      className={cn(
                        'p-3 rounded-lg border transition-colors w-full text-left',
                        notification.read
                          ? 'bg-white border-[var(--ds-color-neutral-300)]'
                          : 'bg-[var(--ds-color-blue-50)] border-[var(--ds-color-neutral-300)]',
                        isClickable && 'cursor-pointer hover:shadow-md',
                        !isClickable && 'cursor-default',
                      )}
                    >
                      <div className="flex items-start gap-3">
                        {/* Icon */}
                        {(notification.icon || config) && (
                          <div
                            className={cn(
                              'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
                              config?.bgClass || 'bg-[var(--ds-color-neutral-100)]',
                            )}
                          >
                            <Icon
                              // @ts-ignore - config.icon type is correct but TS infers wrong union
                              name={config?.icon || 'bell'}
                              size={16}
                              className={config?.colorClass || 'text-[var(--ds-color-neutral-600)]'}
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="font-semibold text-sm text-[var(--ds-color-text-primary)]">
                              {notification.title}
                            </h4>
                            {!notification.read && (
                              <div className="w-2 h-2 rounded-full bg-[var(--ds-color-blue-600)] flex-shrink-0 mt-1" />
                            )}
                          </div>

                          <p className="text-sm text-[var(--ds-color-text-secondary)] mb-1">
                            {notification.message}
                          </p>

                          <div className="flex items-center justify-between gap-2">
                            <p className="text-xs text-[var(--ds-color-text-tertiary)]">
                              {formatRelativeTime(notification.timestamp)}
                            </p>

                            {notification.actionLabel && (
                              <Button
                                variant="link"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  notification.onAction?.();
                                }}
                                className="h-auto p-0 text-xs"
                              >
                                {notification.actionLabel}
                              </Button>
                            )}
                          </div>
                        </div>

                        {/* Dismiss */}
                        {onNotificationDismiss && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onNotificationDismiss(notification.id);
                            }}
                            className="flex-shrink-0 p-1 rounded-md hover:bg-[var(--ds-color-neutral-100)] transition-colors"
                            aria-label="Dismiss notification"
                          >
                            <Icon name="close" size={16} className="text-[var(--ds-color-neutral-500)]" />
                          </button>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    );
  },
);

NotificationCenter.displayName = 'NotificationCenter';

/**
 * Hook for managing notification center state
 */
export interface UseNotificationCenterOptions {
  maxNotifications?: number;
  persistToStorage?: boolean;
  storageKey?: string;
  autoDismissAfter?: number; // milliseconds
}

export function useNotificationCenter(options: UseNotificationCenterOptions = {}) {
  const {
    maxNotifications = 50,
    persistToStorage = false,
    storageKey = 'notifications',
    autoDismissAfter,
  } = options;

  const [open, setOpen] = React.useState(false);
  const [notifications, setNotifications] = React.useState<Notification[]>(() => {
    if (persistToStorage && typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          return parsed.map((n: any) => ({
            ...n,
            timestamp: new Date(n.timestamp),
          }));
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  const dismissNotification = React.useCallback(
    (id: string) => {
      setNotifications((prev) => {
        const updated = prev.filter((n) => n.id !== id);

        if (persistToStorage && typeof window !== 'undefined') {
          localStorage.setItem(storageKey, JSON.stringify(updated));
        }

        return updated;
      });
    },
    [persistToStorage, storageKey],
  );

  const addNotification = React.useCallback(
    (notification: Omit<Notification, 'id' | 'timestamp'>) => {
      const newNotification: Notification = {
        ...notification,
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date(),
        read: false,
      };

      setNotifications((prev) => {
        const updated = [newNotification, ...prev].slice(0, maxNotifications);

        if (persistToStorage && typeof window !== 'undefined') {
          localStorage.setItem(storageKey, JSON.stringify(updated));
        }

        return updated;
      });

      if (autoDismissAfter) {
        setTimeout(() => {
          dismissNotification(newNotification.id);
        }, autoDismissAfter);
      }

      return newNotification;
    },
    [maxNotifications, persistToStorage, storageKey, autoDismissAfter, dismissNotification],
  );

  const markAsRead = React.useCallback(
    (id: string) => {
      setNotifications((prev) => {
        const updated = prev.map((n) => (n.id === id ? { ...n, read: true } : n));

        if (persistToStorage && typeof window !== 'undefined') {
          localStorage.setItem(storageKey, JSON.stringify(updated));
        }

        return updated;
      });
    },
    [persistToStorage, storageKey],
  );

  const markAllAsRead = React.useCallback(() => {
    setNotifications((prev) => {
      const updated = prev.map((n) => ({ ...n, read: true }));

      if (persistToStorage && typeof window !== 'undefined') {
        localStorage.setItem(storageKey, JSON.stringify(updated));
      }

      return updated;
    });
  }, [persistToStorage, storageKey]);

  const clearAll = React.useCallback(() => {
    setNotifications([]);
    if (persistToStorage && typeof window !== 'undefined') {
      localStorage.removeItem(storageKey);
    }
  }, [persistToStorage, storageKey]);

  const unreadCount = React.useMemo(() => {
    return notifications.filter((n) => !n.read).length;
  }, [notifications]);

  return {
    open,
    setOpen,
    notifications,
    unreadCount,
    addNotification,
    dismissNotification,
    markAsRead,
    markAllAsRead,
    clearAll,
  };
}
