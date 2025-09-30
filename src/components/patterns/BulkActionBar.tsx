import * as React from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface BulkAction {
  /**
   * Action identifier
   */
  id: string;

  /**
   * Action label
   */
  label: string;

  /**
   * Optional icon
   */
  icon?: IconName;

  /**
   * Action variant (determines visual style)
   */
  variant?: 'default' | 'primary' | 'destructive';

  /**
   * Whether action requires confirmation
   */
  requiresConfirmation?: boolean;

  /**
   * Whether action is disabled
   */
  disabled?: boolean;

  /**
   * Click handler
   */
  onClick: (selectedIds: string[]) => void;
}

export interface BulkActionBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of selected items
   */
  selectedCount: number;

  /**
   * Total number of items
   */
  totalCount: number;

  /**
   * Array of selected item IDs
   */
  selectedIds: string[];

  /**
   * Available bulk actions
   */
  actions: BulkAction[];

  /**
   * Callback when selection is cleared
   */
  onClearSelection: () => void;

  /**
   * Callback when "Select All" is clicked
   */
  onSelectAll?: () => void;

  /**
   * Position variant
   */
  position?: 'floating' | 'sticky' | 'static';

  /**
   * Show select all option
   */
  showSelectAll?: boolean;

  /**
   * Custom message template (use {count} and {total} placeholders)
   */
  message?: string;

  /**
   * Whether the bar should animate in/out
   */
  animated?: boolean;
}

const positionStyles = {
  floating: 'fixed bottom-6 left-1/2 -translate-x-1/2 shadow-lg rounded-lg z-50',
  sticky: 'sticky top-0 z-40 shadow-md',
  static: 'relative shadow-sm',
} as const;

export const BulkActionBar = React.forwardRef<HTMLDivElement, BulkActionBarProps>(
  (
    {
      selectedCount,
      totalCount,
      selectedIds,
      actions,
      onClearSelection,
      onSelectAll,
      position = 'floating',
      showSelectAll = true,
      message,
      animated = true,
      className,
      ...props
    },
    ref,
  ) => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
      if (selectedCount > 0) {
        setIsVisible(true);
      } else {
        // Delay hiding to allow animation
        const timeout = setTimeout(() => setIsVisible(false), 200);
        return () => clearTimeout(timeout);
      }
    }, [selectedCount]);

    if (!isVisible && selectedCount === 0) {
      return null;
    }

    const defaultMessage = showSelectAll && selectedCount < totalCount
      ? '{count} of {total} selected'
      : '{count} selected';

    const displayMessage = (message || defaultMessage)
      .replace('{count}', String(selectedCount))
      .replace('{total}', String(totalCount));

    const allSelected = selectedCount === totalCount && totalCount > 0;

    return (
      <div
        ref={ref}
        className={cn(
          'bg-[var(--ds-color-blue-600)] text-white border border-[var(--ds-color-blue-700)]',
          positionStyles[position],
          position === 'floating' && 'max-w-4xl w-[calc(100%-3rem)]',
          animated && selectedCount > 0 && 'animate-in slide-in-from-bottom-4 fade-in duration-200',
          animated && selectedCount === 0 && 'animate-out slide-out-to-bottom-4 fade-out duration-200',
          className,
        )}
        role="toolbar"
        aria-label="Bulk actions toolbar"
        {...props}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3">
          {/* Selection Info */}
          <div className="flex items-center gap-3">
            <button
              onClick={onClearSelection}
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Clear selection"
              title="Clear selection"
            >
              <Icon name={'close' as any} size={20} />
            </button>

            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {selectedCount}
              </Badge>
              <span className="text-sm font-medium">{displayMessage}</span>
            </div>

            {showSelectAll && !allSelected && onSelectAll && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onSelectAll}
                className="text-white hover:bg-white/10 hover:text-white h-8"
              >
                Select all {totalCount}
              </Button>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {actions.map((action) => (
              <Button
                key={action.id}
                variant={
                  action.variant === 'destructive'
                    ? 'destructive'
                    : action.variant === 'primary'
                      ? 'default'
                      : 'ghost'
                }
                size="sm"
                onClick={() => action.onClick(selectedIds)}
                disabled={action.disabled}
                className={cn(
                  action.variant === 'default' &&
                    'text-white hover:bg-white/10 hover:text-white border-white/30',
                  action.variant === 'destructive' && 'bg-[var(--ds-color-error-600)] hover:bg-[var(--ds-color-error-700)]',
                )}
              >
                {action.icon && <Icon name={action.icon as any} size={16} />}
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

BulkActionBar.displayName = 'BulkActionBar';

/**
 * Hook for managing bulk selection state
 */
export interface UseSelectionOptions<T> {
  /**
   * Array of items
   */
  items: T[];

  /**
   * Function to get unique ID from item
   */
  getItemId: (item: T) => string;

  /**
   * Initial selected IDs
   */
  initialSelectedIds?: string[];
}

export function useSelection<T>({
  items,
  getItemId,
  initialSelectedIds = [],
}: UseSelectionOptions<T>) {
  const [selectedIds, setSelectedIds] = React.useState<Set<string>>(
    new Set(initialSelectedIds),
  );

  const toggleItem = React.useCallback(
    (item: T) => {
      const id = getItemId(item);
      setSelectedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    },
    [getItemId],
  );

  const toggleAll = React.useCallback(() => {
    if (selectedIds.size === items.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(items.map(getItemId)));
    }
  }, [items, getItemId, selectedIds.size]);

  const selectAll = React.useCallback(() => {
    setSelectedIds(new Set(items.map(getItemId)));
  }, [items, getItemId]);

  const clearSelection = React.useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const isSelected = React.useCallback(
    (item: T) => selectedIds.has(getItemId(item)),
    [selectedIds, getItemId],
  );

  const isAllSelected = items.length > 0 && selectedIds.size === items.length;
  const isIndeterminate = selectedIds.size > 0 && selectedIds.size < items.length;

  return {
    selectedIds: Array.from(selectedIds),
    selectedCount: selectedIds.size,
    toggleItem,
    toggleAll,
    selectAll,
    clearSelection,
    isSelected,
    isAllSelected,
    isIndeterminate,
  };
}
