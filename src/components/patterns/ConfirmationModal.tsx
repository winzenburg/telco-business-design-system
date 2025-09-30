import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface ConfirmationModalProps {
  /**
   * Whether the modal is open
   */
  open: boolean;

  /**
   * Callback when modal should close
   */
  onOpenChange: (open: boolean) => void;

  /**
   * Modal title
   */
  title: string;

  /**
   * Modal description/message
   */
  description: string;

  /**
   * Confirm button label
   */
  confirmLabel?: string;

  /**
   * Cancel button label
   */
  cancelLabel?: string;

  /**
   * Callback when confirmed
   */
  onConfirm: () => void | Promise<void>;

  /**
   * Callback when cancelled
   */
  onCancel?: () => void;

  /**
   * Severity level (determines icon and button color)
   */
  severity?: 'info' | 'warning' | 'danger';

  /**
   * Whether the action is loading
   */
  loading?: boolean;

  /**
   * Number of items affected (for bulk actions)
   */
  itemCount?: number;

  /**
   * Custom icon
   */
  icon?: IconName;

  /**
   * Additional content to display
   */
  children?: React.ReactNode;
}

const severityConfig = {
  info: {
    icon: 'info' as IconName,
    iconColor: 'var(--ds-color-blue-500)',
    iconBg: 'bg-[var(--ds-color-blue-100)]',
    confirmVariant: 'default' as const,
  },
  warning: {
    icon: 'alert-triangle' as IconName,
    iconColor: 'var(--ds-color-warning-500)',
    iconBg: 'bg-[var(--ds-color-warning-100)]',
    confirmVariant: 'default' as const,
  },
  danger: {
    icon: 'alert-circle' as IconName,
    iconColor: 'var(--ds-color-error-500)',
    iconBg: 'bg-[var(--ds-color-error-100)]',
    confirmVariant: 'destructive' as const,
  },
} as const;

export const ConfirmationModal = React.forwardRef<HTMLDivElement, ConfirmationModalProps>(
  (
    {
      open,
      onOpenChange,
      title,
      description,
      confirmLabel = 'Confirm',
      cancelLabel = 'Cancel',
      onConfirm,
      onCancel,
      severity = 'info',
      loading = false,
      itemCount,
      icon,
      children,
    },
    ref,
  ) => {
    const [isConfirming, setIsConfirming] = React.useState(false);
    const config = severityConfig[severity];
    const displayIcon = icon || config.icon;

    const handleConfirm = async () => {
      setIsConfirming(true);
      try {
        await onConfirm();
        onOpenChange(false);
      } catch (error) {
        // Error handling should be done by the consumer
        // Log error silently without console
      } finally {
        setIsConfirming(false);
      }
    };

    const handleCancel = () => {
      onCancel?.();
      onOpenChange(false);
    };

    const isLoading = loading || isConfirming;

    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent ref={ref} className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full ${config.iconBg} flex items-center justify-center`}>
                <Icon name={displayIcon as any} size={24} color={config.iconColor} />
              </div>

              {/* Title and Description */}
              <div className="flex-1 min-w-0 pt-1">
                <DialogTitle className="text-left mb-2">
                  {title}
                </DialogTitle>
                <DialogDescription className="text-left">
                  {description}
                  {itemCount !== undefined && itemCount > 0 && (
                    <span className="block mt-2 font-semibold text-[var(--ds-color-text-primary)]">
                      {itemCount} {itemCount === 1 ? 'item' : 'items'} will be affected.
                    </span>
                  )}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {/* Additional Content */}
          {children && (
            <div className="py-4 border-t border-[var(--ds-color-neutral-300)]">
              {children}
            </div>
          )}

          {/* Footer Actions */}
          <DialogFooter className="flex-row gap-2 sm:gap-2">
            <Button
              variant="outline"
              onClick={handleCancel}
              disabled={isLoading}
              className="flex-1 sm:flex-1"
            >
              {cancelLabel}
            </Button>
            <Button
              variant={config.confirmVariant}
              onClick={handleConfirm}
              disabled={isLoading}
              className="flex-1 sm:flex-1"
            >
              {isLoading && <Icon name={'refresh' as any} size={16} className="animate-spin" />}
              {confirmLabel}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
);

ConfirmationModal.displayName = 'ConfirmationModal';

/**
 * Hook for managing confirmation modal state
 */
export interface UseConfirmationOptions {
  /**
   * Callback when confirmed
   */
  onConfirm: () => void | Promise<void>;

  /**
   * Callback when cancelled
   */
  onCancel?: () => void;
}

export function useConfirmation({ onConfirm, onCancel }: UseConfirmationOptions) {
  const [open, setOpen] = React.useState(false);

  const confirm = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleConfirm = React.useCallback(async () => {
    await onConfirm();
    setOpen(false);
  }, [onConfirm]);

  const handleCancel = React.useCallback(() => {
    onCancel?.();
    setOpen(false);
  }, [onCancel]);

  return {
    open,
    confirm,
    handleConfirm,
    handleCancel,
    setOpen,
  };
}
