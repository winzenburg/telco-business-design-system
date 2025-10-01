import * as React from 'react';
import { cn } from '../../utils/cn';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Alert, AlertDescription } from '../ui/alert';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface SettingField {
  id: string;
  label: string;
  description?: string;
  type: 'text' | 'number' | 'select' | 'toggle' | 'radio' | 'checkbox' | 'textarea' | 'custom';
  value: any;
  options?: { label: string; value: any }[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  validation?: (value: any) => string | null;
  render?: (value: any, onChange: (value: any) => void) => React.ReactNode;
}

export interface SettingSection {
  id: string;
  title: string;
  description?: string;
  icon?: IconName;
  fields: SettingField[];
  badge?: string;
}

export interface SettingTab {
  id: string;
  label: string;
  icon?: IconName;
  sections: SettingSection[];
}

export interface SettingsPanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Setting tabs
   */
  tabs?: SettingTab[];

  /**
   * Setting sections (if no tabs)
   */
  sections?: SettingSection[];

  /**
   * Title
   */
  title?: string;

  /**
   * Description
   */
  description?: string;

  /**
   * Save mode
   */
  saveMode?: 'manual' | 'auto';

  /**
   * Auto-save delay in ms (for auto mode)
   */
  autoSaveDelay?: number;

  /**
   * Callback when settings change
   */
  onChange?: (fieldId: string, value: any) => void;

  /**
   * Callback when save is clicked
   */
  onSave?: (values: Record<string, any>) => Promise<void> | void;

  /**
   * Callback when cancel is clicked
   */
  onCancel?: () => void;

  /**
   * Callback when reset is clicked
   */
  onReset?: () => void;

  /**
   * Show unsaved changes warning
   */
  warnUnsavedChanges?: boolean;

  /**
   * Initial values
   */
  initialValues?: Record<string, any>;

  /**
   * Custom footer actions
   */
  footerActions?: React.ReactNode;

  /**
   * Loading state
   */
  loading?: boolean;

  /**
   * Success message
   */
  successMessage?: string;

  /**
   * Error message
   */
  errorMessage?: string;
}

/**
 * SettingsPanel component - form-heavy configuration UI with save/cancel interactions
 */
export const SettingsPanel = React.forwardRef<HTMLDivElement, SettingsPanelProps>(
  (
    {
      tabs,
      sections,
      title = 'Settings',
      description,
      saveMode = 'manual',
      autoSaveDelay = 1000,
      onChange,
      onSave,
      onCancel,
      onReset,
      warnUnsavedChanges = true,
      initialValues = {},
      footerActions,
      loading = false,
      successMessage,
      errorMessage,
      className,
      ...props
    },
    ref,
  ) => {
    const [values, setValues] = React.useState<Record<string, any>>(initialValues);
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [touched, setTouched] = React.useState<Set<string>>(new Set());
    const [isSaving, setIsSaving] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    const autoSaveTimeoutRef = React.useRef<NodeJS.Timeout>();

    const hasUnsavedChanges = React.useMemo(() => {
      return Object.keys(values).some((key) => values[key] !== initialValues[key]);
    }, [values, initialValues]);

    const allSections = React.useMemo(() => {
      if (tabs) {
        return tabs.flatMap((tab) => tab.sections);
      }
      return sections || [];
    }, [tabs, sections]);

    const allFields = React.useMemo(() => {
      return allSections.flatMap((section) => section.fields);
    }, [allSections]);

    const validateField = React.useCallback(
      (fieldId: string, value: any) => {
        const field = allFields.find((f) => f.id === fieldId);
        if (!field) return null;

        if (field.required && !value) {
          return 'This field is required';
        }

        if (field.validation) {
          return field.validation(value);
        }

        return null;
      },
      [allFields],
    );

    const handleFieldChange = React.useCallback(
      (fieldId: string, value: any) => {
        setValues((prev) => ({ ...prev, [fieldId]: value }));
        setTouched((prev) => new Set(prev).add(fieldId));

        const error = validateField(fieldId, value);
        setErrors((prev) => {
          const next = { ...prev };
          if (error) {
            next[fieldId] = error;
          } else {
            delete next[fieldId];
          }
          return next;
        });

        onChange?.(fieldId, value);

        // Auto-save
        if (saveMode === 'auto') {
          if (autoSaveTimeoutRef.current) {
            clearTimeout(autoSaveTimeoutRef.current);
          }
          autoSaveTimeoutRef.current = setTimeout(() => {
            handleSave();
          }, autoSaveDelay);
        }
      },
      [validateField, onChange, saveMode, autoSaveDelay],
    );

    const handleSave = React.useCallback(async () => {
      // Validate all fields
      const newErrors: Record<string, string> = {};
      allFields.forEach((field) => {
        const error = validateField(field.id, values[field.id]);
        if (error) {
          newErrors[field.id] = error;
        }
      });

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setIsSaving(true);
      setShowError(false);

      try {
        await onSave?.(values);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } catch (error) {
        setShowError(true);
      } finally {
        setIsSaving(false);
      }
    }, [values, allFields, validateField, onSave]);

    const handleCancel = React.useCallback(() => {
      if (hasUnsavedChanges && warnUnsavedChanges) {
        if (!window.confirm('You have unsaved changes. Are you sure you want to discard them?')) {
          return;
        }
      }
      setValues(initialValues);
      setErrors({});
      setTouched(new Set());
      onCancel?.();
    }, [hasUnsavedChanges, warnUnsavedChanges, initialValues, onCancel]);

    const handleReset = React.useCallback(() => {
      if (!window.confirm('Are you sure you want to reset all settings to default?')) {
        return;
      }
      setValues(initialValues);
      setErrors({});
      setTouched(new Set());
      onReset?.();
    }, [initialValues, onReset]);

    const renderField = (field: SettingField) => {
      const value = values[field.id] ?? field.value;
      const error = errors[field.id];
      const isTouched = touched.has(field.id);

      if (field.render) {
        return (
          <div key={field.id} className="space-y-2">
            <label className="text-sm font-medium text-[var(--ds-color-text-primary)]">
              {field.label}
              {field.required && <span className="text-[var(--ds-color-error-600)] ml-1">*</span>}
            </label>
            {field.description && (
              <p className="text-xs text-[var(--ds-color-text-secondary)]">{field.description}</p>
            )}
            {field.render(value, (newValue) => handleFieldChange(field.id, newValue))}
            {isTouched && error && (
              <p className="text-xs text-[var(--ds-color-error-600)] flex items-center gap-1">
                <Icon name="alert" size={12} />
                {error}
              </p>
            )}
          </div>
        );
      }

      // Built-in field types
      return (
        <div key={field.id} className="space-y-2">
          <label className="text-sm font-medium text-[var(--ds-color-text-primary)]">
            {field.label}
            {field.required && <span className="text-[var(--ds-color-error-600)] ml-1">*</span>}
          </label>
          {field.description && (
            <p className="text-xs text-[var(--ds-color-text-secondary)]">{field.description}</p>
          )}

          {/* Render based on type - simplified for now */}
          <input
            type={field.type}
            value={value || ''}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            disabled={field.disabled}
            className={cn(
              'w-full px-3 py-2 rounded-md border transition-colors',
              'text-[var(--ds-color-text-primary)]',
              'placeholder:text-[var(--ds-color-text-tertiary)]',
              error && isTouched
                ? 'border-[var(--ds-color-error-600)] focus:ring-[var(--ds-color-error-600)]'
                : 'border-[var(--ds-color-neutral-400)] focus:ring-[var(--ds-color-blue-600)]',
              'focus:outline-none focus:ring-2 focus:ring-offset-2',
              field.disabled && 'opacity-50 cursor-not-allowed',
            )}
          />

          {isTouched && error && (
            <p className="text-xs text-[var(--ds-color-error-600)] flex items-center gap-1">
              <Icon name="alert" size={12} />
              {error}
            </p>
          )}
        </div>
      );
    };

    const renderSection = (section: SettingSection) => (
      <Card key={section.id}>
        <CardHeader>
          <div className="flex items-center gap-3">
            {section.icon && (
              <div className="w-10 h-10 rounded-lg bg-[var(--ds-color-blue-50)] flex items-center justify-center">
                {/* @ts-ignore - section.icon type is correct but TS infers wrong union */}
                <Icon name={section.icon} size={20} className="text-[var(--ds-color-blue-600)]" />
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-base">{section.title}</CardTitle>
                {section.badge && <Badge variant="secondary">{section.badge}</Badge>}
              </div>
              {section.description && <CardDescription>{section.description}</CardDescription>}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.fields.map(renderField)}
          </div>
        </CardContent>
      </Card>
    );

    return (
      <div ref={ref} className={cn('space-y-6', className)} {...props}>
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--ds-color-text-primary)]">{title}</h1>
            {description && (
              <p className="text-sm text-[var(--ds-color-text-secondary)] mt-1">{description}</p>
            )}
          </div>
          {saveMode === 'auto' && (
            <Badge variant="outline" className="flex items-center gap-1">
              <Icon name="refresh" size={12} />
              Auto-save enabled
            </Badge>
          )}
        </div>

        {/* Unsaved changes warning */}
        {warnUnsavedChanges && hasUnsavedChanges && saveMode === 'manual' && (
          <Alert className="border-[var(--ds-color-warning-600)] bg-[var(--ds-color-warning-50)]">
            <Icon name="alert" size={16} className="text-[var(--ds-color-warning-600)]" />
            <AlertDescription className="text-[var(--ds-color-warning-600)]">
              You have unsaved changes. Don't forget to save before leaving this page.
            </AlertDescription>
          </Alert>
        )}

        {/* Success message */}
        {showSuccess && (
          <Alert className="border-[var(--ds-color-success-600)] bg-[var(--ds-color-success-50)]">
            <Icon name="check" size={16} className="text-[var(--ds-color-success-600)]" />
            <AlertDescription className="text-[var(--ds-color-success-600)]">
              {successMessage || 'Settings saved successfully!'}
            </AlertDescription>
          </Alert>
        )}

        {/* Error message */}
        {showError && (
          <Alert className="border-[var(--ds-color-error-600)] bg-[var(--ds-color-error-50)]">
            <Icon name="alert" size={16} className="text-[var(--ds-color-error-600)]" />
            <AlertDescription className="text-[var(--ds-color-error-600)]">
              {errorMessage || 'Failed to save settings. Please try again.'}
            </AlertDescription>
          </Alert>
        )}

        {/* Content */}
        {tabs ? (
          <Tabs defaultValue={tabs[0]?.id} className="w-full">
            <TabsList className="w-full justify-start">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                  {/* @ts-ignore - tab.icon type is correct but TS infers wrong union */}
                  {tab.icon && <Icon name={tab.icon} size={16} />}
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="space-y-4 mt-6">
                {tab.sections.map(renderSection)}
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="space-y-4">{sections?.map(renderSection)}</div>
        )}

        {/* Footer Actions */}
        {saveMode === 'manual' && (
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {onReset && (
                    <Button variant="ghost" onClick={handleReset} disabled={loading || isSaving}>
                      Reset to defaults
                    </Button>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {footerActions}
                  {onCancel && (
                    <Button
                      variant="outline"
                      onClick={handleCancel}
                      disabled={loading || isSaving}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button onClick={handleSave} disabled={loading || isSaving || !hasUnsavedChanges}>
                    {isSaving ? (
                      <>
                        <Icon name="refresh" size={16} className="mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      'Save Changes'
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  },
);

SettingsPanel.displayName = 'SettingsPanel';

/**
 * Hook for managing settings panel state
 */
export interface UseSettingsPanelOptions {
  initialValues?: Record<string, any>;
  onSave?: (values: Record<string, any>) => Promise<void> | void;
  autoSave?: boolean;
  autoSaveDelay?: number;
}

export function useSettingsPanel(options: UseSettingsPanelOptions = {}) {
  const { initialValues = {}, onSave, autoSave = false, autoSaveDelay = 1000 } = options;

  const [values, setValues] = React.useState(initialValues);
  const [isSaving, setIsSaving] = React.useState(false);
  const [lastSaved, setLastSaved] = React.useState<Date | null>(null);
  const autoSaveTimeoutRef = React.useRef<NodeJS.Timeout>();

  const hasUnsavedChanges = React.useMemo(() => {
    return Object.keys(values).some((key) => values[key] !== initialValues[key]);
  }, [values, initialValues]);

  const setValue = React.useCallback(
    (key: string, value: any) => {
      setValues((prev) => ({ ...prev, [key]: value }));

      if (autoSave && onSave) {
        if (autoSaveTimeoutRef.current) {
          clearTimeout(autoSaveTimeoutRef.current);
        }
        autoSaveTimeoutRef.current = setTimeout(async () => {
          setIsSaving(true);
          try {
            await onSave({ ...values, [key]: value });
            setLastSaved(new Date());
          } finally {
            setIsSaving(false);
          }
        }, autoSaveDelay);
      }
    },
    [values, onSave, autoSave, autoSaveDelay],
  );

  const save = React.useCallback(async () => {
    if (!onSave) return;

    setIsSaving(true);
    try {
      await onSave(values);
      setLastSaved(new Date());
    } finally {
      setIsSaving(false);
    }
  }, [values, onSave]);

  const reset = React.useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  return {
    values,
    setValue,
    save,
    reset,
    isSaving,
    hasUnsavedChanges,
    lastSaved,
  };
}
