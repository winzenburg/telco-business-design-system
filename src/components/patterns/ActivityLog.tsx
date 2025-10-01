import * as React from 'react';
import { cn } from '../../utils/cn';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface ActivityLogEntry {
  id: string;
  timestamp: Date;
  user: {
    name: string;
    avatar?: string;
    id?: string;
  };
  action: string;
  description?: string;
  details?: React.ReactNode;
  type?: 'create' | 'update' | 'delete' | 'login' | 'logout' | 'access' | 'error' | 'warning' | 'info';
  icon?: IconName;
  metadata?: Record<string, any>;
}

export interface ActivityLogProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Activity entries to display
   */
  entries: ActivityLogEntry[];

  /**
   * Title for the log
   */
  title?: string;

  /**
   * Whether to show timestamps
   */
  showTimestamps?: boolean;

  /**
   * Whether to show user info
   */
  showUsers?: boolean;

  /**
   * Whether to group by date
   */
  groupByDate?: boolean;

  /**
   * Maximum entries to show
   */
  maxEntries?: number;

  /**
   * Callback when an entry is clicked
   */
  onEntryClick?: (entry: ActivityLogEntry) => void;

  /**
   * Whether entries are clickable
   */
  clickable?: boolean;

  /**
   * Compact mode
   */
  compact?: boolean;

  /**
   * Filter by type
   */
  filterType?: ActivityLogEntry['type'];
}

const typeConfig = {
  create: {
    icon: 'plus' as IconName,
    colorClass: 'text-[var(--ds-color-success-600)]',
    bgClass: 'bg-[var(--ds-color-success-50)]',
    label: 'Created',
  },
  update: {
    icon: 'edit' as IconName,
    colorClass: 'text-[var(--ds-color-blue-600)]',
    bgClass: 'bg-[var(--ds-color-blue-50)]',
    label: 'Updated',
  },
  delete: {
    icon: 'trash' as IconName,
    colorClass: 'text-[var(--ds-color-error-600)]',
    bgClass: 'bg-[var(--ds-color-error-50)]',
    label: 'Deleted',
  },
  login: {
    icon: 'log-in' as IconName,
    colorClass: 'text-[var(--ds-color-success-600)]',
    bgClass: 'bg-[var(--ds-color-success-50)]',
    label: 'Login',
  },
  logout: {
    icon: 'log-out' as IconName,
    colorClass: 'text-[var(--ds-color-neutral-600)]',
    bgClass: 'bg-[var(--ds-color-neutral-100)]',
    label: 'Logout',
  },
  access: {
    icon: 'eye' as IconName,
    colorClass: 'text-[var(--ds-color-neutral-600)]',
    bgClass: 'bg-[var(--ds-color-neutral-100)]',
    label: 'Accessed',
  },
  error: {
    icon: 'alert-circle' as IconName,
    colorClass: 'text-[var(--ds-color-error-600)]',
    bgClass: 'bg-[var(--ds-color-error-50)]',
    label: 'Error',
  },
  warning: {
    icon: 'alert-triangle' as IconName,
    colorClass: 'text-[var(--ds-color-warning-600)]',
    bgClass: 'bg-[var(--ds-color-warning-50)]',
    label: 'Warning',
  },
  info: {
    icon: 'info' as IconName,
    colorClass: 'text-[var(--ds-color-blue-600)]',
    bgClass: 'bg-[var(--ds-color-blue-50)]',
    label: 'Info',
  },
} as const;

function formatTimestamp(date: Date, relative = false): string {
  if (relative) {
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
  }

  return date.toLocaleString();
}

function formatDate(date: Date): string {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  } else {
    return date.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}

function groupEntriesByDate(entries: ActivityLogEntry[]): Record<string, ActivityLogEntry[]> {
  return entries.reduce(
    (groups, entry) => {
      const dateKey = entry.timestamp.toDateString();
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(entry);
      return groups;
    },
    {} as Record<string, ActivityLogEntry[]>,
  );
}

/**
 * ActivityLog component - displays timestamped user activity trail
 */
export const ActivityLog = React.forwardRef<HTMLDivElement, ActivityLogProps>(
  (
    {
      entries,
      title = 'Activity Log',
      showTimestamps = true,
      showUsers = true,
      groupByDate = false,
      maxEntries,
      onEntryClick,
      clickable = false,
      compact = false,
      filterType,
      className,
      ...props
    },
    ref,
  ) => {
    const filteredEntries = React.useMemo(() => {
      let result = filterType ? entries.filter((e) => e.type === filterType) : entries;
      if (maxEntries) {
        result = result.slice(0, maxEntries);
      }
      return result;
    }, [entries, filterType, maxEntries]);

    const groupedEntries = React.useMemo(
      () => (groupByDate ? groupEntriesByDate(filteredEntries) : null),
      [filteredEntries, groupByDate],
    );

    const renderEntry = (entry: ActivityLogEntry) => {
      const config = entry.type ? typeConfig[entry.type] : null;
      const isClickable = clickable || !!onEntryClick;

      return (
        <button
          key={entry.id}
          type="button"
          onClick={() => isClickable && onEntryClick?.(entry)}
          disabled={!isClickable}
          className={cn(
            'flex items-start gap-3 p-3 rounded-lg border border-[var(--ds-color-neutral-300)] transition-colors w-full text-left',
            isClickable && 'cursor-pointer hover:bg-[var(--ds-color-neutral-50)]',
            !isClickable && 'cursor-default',
            compact && 'p-2 gap-2',
          )}
        >
          {/* Icon */}
          <div
            className={cn(
              'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
              compact && 'w-6 h-6',
              config?.bgClass || 'bg-[var(--ds-color-neutral-100)]',
            )}
          >
            <Icon
              // @ts-ignore - config.icon type is correct but TS infers wrong union
              name={config?.icon || 'notifications'}
              size={compact ? 14 : 16}
              className={config?.colorClass || 'text-[var(--ds-color-neutral-600)]'}
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="flex-1 min-w-0">
                <p className={cn('font-medium text-[var(--ds-color-text-primary)]', compact && 'text-sm')}>
                  {entry.action}
                </p>
                {showUsers && (
                  <p className="text-sm text-[var(--ds-color-text-secondary)]">{entry.user.name}</p>
                )}
              </div>
              {entry.type && (
                <Badge variant="secondary" className="flex-shrink-0">
                  {config?.label || entry.type}
                </Badge>
              )}
            </div>

            {entry.description && (
              <p className={cn('text-[var(--ds-color-text-secondary)] mb-2', compact ? 'text-xs' : 'text-sm')}>
                {entry.description}
              </p>
            )}

            {entry.details && <div className="mt-2">{entry.details}</div>}

            {showTimestamps && (
              <p className="text-xs text-[var(--ds-color-text-tertiary)] mt-1">
                {formatTimestamp(entry.timestamp, true)} • {formatTimestamp(entry.timestamp, false)}
              </p>
            )}
          </div>
        </button>
      );
    };

    return (
      <Card ref={ref} className={cn('overflow-hidden', className)} {...(props as any)}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{title}</CardTitle>
            <Badge variant="outline">{filteredEntries.length} entries</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {filteredEntries.length === 0 ? (
            <div className="text-center py-8 text-[var(--ds-color-text-secondary)]">
              <Icon name="notifications" size={48} className="mx-auto mb-3 opacity-40" />
              <p>No activity to display</p>
            </div>
          ) : groupedEntries ? (
            Object.keys(groupedEntries).map((dateKey) => (
              <div key={dateKey} className="space-y-3">
                <h3 className="text-sm font-semibold text-[var(--ds-color-text-secondary)] uppercase tracking-wide">
                  {formatDate(new Date(dateKey))}
                </h3>
                {groupedEntries[dateKey].map(renderEntry)}
              </div>
            ))
          ) : (
            filteredEntries.map(renderEntry)
          )}
        </CardContent>
      </Card>
    );
  },
);

ActivityLog.displayName = 'ActivityLog';

/**
 * Hook for managing activity log state
 */
export interface UseActivityLogOptions {
  maxEntries?: number;
  persistToStorage?: boolean;
  storageKey?: string;
}

export function useActivityLog(options: UseActivityLogOptions = {}) {
  const { maxEntries = 100, persistToStorage = false, storageKey = 'activity-log' } = options;

  const [entries, setEntries] = React.useState<ActivityLogEntry[]>(() => {
    if (persistToStorage && typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          return parsed.map((e: any) => ({
            ...e,
            timestamp: new Date(e.timestamp),
          }));
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  const addEntry = React.useCallback(
    (entry: Omit<ActivityLogEntry, 'id' | 'timestamp'>) => {
      const newEntry: ActivityLogEntry = {
        ...entry,
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date(),
      };

      setEntries((prev) => {
        const updated = [newEntry, ...prev].slice(0, maxEntries);

        if (persistToStorage && typeof window !== 'undefined') {
          localStorage.setItem(storageKey, JSON.stringify(updated));
        }

        return updated;
      });

      return newEntry;
    },
    [maxEntries, persistToStorage, storageKey],
  );

  const clearEntries = React.useCallback(() => {
    setEntries([]);
    if (persistToStorage && typeof window !== 'undefined') {
      localStorage.removeItem(storageKey);
    }
  }, [persistToStorage, storageKey]);

  const filterByType = React.useCallback(
    (type: ActivityLogEntry['type']) => {
      return entries.filter((e) => e.type === type);
    },
    [entries],
  );

  const filterByUser = React.useCallback(
    (userId: string) => {
      return entries.filter((e) => e.user.id === userId);
    },
    [entries],
  );

  return {
    entries,
    addEntry,
    clearEntries,
    filterByType,
    filterByUser,
  };
}
