import * as React from 'react';
import { cn } from '../../utils/cn';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Badge } from '../ui/badge';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface FormSection {
  id: string;
  title: string;
  description?: string;
  icon?: IconName;
  optional?: boolean;
  validation?: {
    isValid: boolean;
    errors?: string[];
    fieldErrors?: Record<string, string[]>; // Field-level validation errors
  };
  status?: 'not-started' | 'in-progress' | 'completed' | 'error';
  content: React.ReactNode;
  // NEW: Conditional rendering
  condition?: (formData: Record<string, any>) => boolean;
  dependencies?: string[]; // Must complete these sections first
}

export interface ProgressiveFormProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Form sections
   */
  sections: FormSection[];

  /**
   * Currently expanded sections
   */
  expandedSections?: string[];

  /**
   * Callback when sections are expanded/collapsed
   */
  onExpandedChange?: (sections: string[]) => void;

  /**
   * Whether to auto-expand next section on completion
   */
  autoExpandNext?: boolean;

  /**
   * Whether to allow multiple sections open
   */
  allowMultiple?: boolean;

  /**
   * Show progress indicator
   */
  showProgress?: boolean;

  /**
   * Action buttons (Save & Exit, Submit, etc.)
   */
  actions?: React.ReactNode;

  /**
   * Callback when section status changes
   */
  onSectionStatusChange?: (sectionId: string, status: FormSection['status']) => void;

  /**
   * Form data for conditional sections
   */
  formData?: Record<string, any>;

  /**
   * Show last saved timestamp
   */
  lastSaved?: Date;

  /**
   * Show saving indicator
   */
  isSaving?: boolean;
}

/**
 * ProgressiveForm component - accordion-style progressive disclosure for forms
 */
export const ProgressiveForm = React.forwardRef<HTMLDivElement, ProgressiveFormProps>(
  (
    {
      sections,
      expandedSections: controlledExpanded,
      onExpandedChange,
      autoExpandNext = true,
      allowMultiple = false,
      showProgress = true,
      actions,
      onSectionStatusChange,
      formData = {},
      lastSaved,
      isSaving = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [internalExpanded, setInternalExpanded] = React.useState<string[]>(() => {
      // Auto-expand first incomplete section
      const firstIncomplete = sections.find((s) => s.status !== 'completed');
      return firstIncomplete ? [firstIncomplete.id] : [];
    });

    const expandedSections = controlledExpanded ?? internalExpanded;

    const handleExpandedChange = (value: string | string[]) => {
      const newExpanded = Array.isArray(value) ? value : [value];
      setInternalExpanded(newExpanded);
      onExpandedChange?.(newExpanded);
    };

    // Filter sections based on conditions and dependencies
    const visibleSections = sections.filter((section) => {
      // Check condition
      if (section.condition && !section.condition(formData)) {
        return false;
      }

      // Check dependencies
      if (section.dependencies && section.dependencies.length > 0) {
        const allComplete = section.dependencies.every((depId) => {
          const depSection = sections.find((s) => s.id === depId);
          return depSection?.status === 'completed';
        });
        if (!allComplete) return false;
      }

      return true;
    });

    const completedSections = visibleSections.filter((s) => s.status === 'completed').length;
    const totalSections = visibleSections.length;
    const progress = (completedSections / totalSections) * 100;

    const getSectionIcon = (section: FormSection): IconName => {
      if (section.status === 'completed') {
        return 'check';
      } else if (section.status === 'error' || (section.validation && !section.validation.isValid)) {
        return 'alert';
      } else if (section.status === 'in-progress') {
        return 'refresh';
      }
      return 'document';
    };

    const getSectionIconColor = (section: FormSection) => {
      if (section.status === 'completed') {
        return 'var(--ds-color-success-600)';
      } else if (section.status === 'error' || (section.validation && !section.validation.isValid)) {
        return 'var(--ds-color-error-600)';
      } else if (section.status === 'in-progress') {
        return 'var(--ds-color-blue-600)';
      }
      return 'var(--ds-color-neutral-500)';
    };

    return (
      <div ref={ref} className={cn('space-y-6', className)} {...props}>
        {/* Progress Bar */}
        {showProgress && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium text-[var(--ds-color-text-primary)]">
                  Progress: {completedSections} of {totalSections} sections
                </span>
                {isSaving && (
                  <span className="flex items-center gap-1 text-[var(--ds-color-blue-600)]">
                    <Icon name="refresh" size={14} className="animate-spin" />
                    Saving...
                  </span>
                )}
                {lastSaved && !isSaving && (
                  <span className="text-[var(--ds-color-text-tertiary)] text-xs">
                    Last saved: {lastSaved.toLocaleTimeString()}
                  </span>
                )}
              </div>
              <span className="text-[var(--ds-color-text-secondary)]">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-[var(--ds-color-neutral-100)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--ds-color-blue-600)] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Form Sections */}
        {allowMultiple ? (
          <Accordion
            type="multiple"
            value={expandedSections}
            onValueChange={handleExpandedChange}
            className="space-y-3"
          >
            {visibleSections.map((section) => {
              const isExpanded = expandedSections.includes(section.id);
              const hasErrors = section.validation && !section.validation.isValid;

              return (
                <AccordionItem
                  key={section.id}
                  value={section.id}
                  className={cn(
                    'border rounded-lg overflow-hidden transition-colors',
                    section.status === 'completed' && 'border-[var(--ds-color-success-300)] bg-[var(--ds-color-success-50)]',
                    hasErrors && 'border-[var(--ds-color-error-300)] bg-[var(--ds-color-error-50)]',
                    section.status === 'in-progress' && 'border-[var(--ds-color-blue-300)] bg-[var(--ds-color-blue-50)]',
                    !section.status && 'border-[var(--ds-color-neutral-300)]',
                  )}
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-white/50">
                    <div className="flex items-center gap-3 flex-1 text-left">
                      <Icon
                        // @ts-ignore - getSectionIcon returns IconName but TS infers wrong union
                        name={getSectionIcon(section)}
                        size={24}
                        color={getSectionIconColor(section)}
                        className="flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-base text-[var(--ds-color-text-primary)]">
                            {section.title}
                          </h3>
                          {section.optional && (
                            <Badge variant="outline" className="text-xs">
                              Optional
                            </Badge>
                          )}
                          {section.status === 'completed' && (
                            <Badge variant="default" className="text-xs bg-[var(--ds-color-success-600)]">
                              Complete
                            </Badge>
                          )}
                          {hasErrors && (
                            <Badge variant="destructive" className="text-xs">
                              {section.validation.errors?.length || 0} error(s)
                            </Badge>
                          )}
                        </div>
                        {section.description && (
                          <p className="text-sm text-[var(--ds-color-text-secondary)]">{section.description}</p>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-4 py-4 bg-white">
                    {section.content}

                    {/* Validation Errors */}
                    {hasErrors && section.validation.errors && section.validation.errors.length > 0 && (
                      <div className="mt-4 p-3 bg-[var(--ds-color-error-50)] border border-[var(--ds-color-error-300)] rounded-lg">
                        <div className="flex items-start gap-2">
                          <Icon name="alert" size={16} color="var(--ds-color-error-600)" className="flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-[var(--ds-color-error-600)] mb-1">
                              Please fix the following errors:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-[var(--ds-color-error-600)]">
                              {section.validation.errors.map((error, i) => (
                                <li key={i}>{error}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        ) : (
          <Accordion
            type="single"
            value={expandedSections[0]}
            onValueChange={(value) => handleExpandedChange(value)}
            className="space-y-3"
          >
          {visibleSections.map((section) => {
            const isExpanded = expandedSections.includes(section.id);
            const hasErrors = section.validation && !section.validation.isValid;

            return (
              <AccordionItem
                key={section.id}
                value={section.id}
                className={cn(
                  'border rounded-lg overflow-hidden transition-colors',
                  section.status === 'completed' && 'border-[var(--ds-color-success-300)] bg-[var(--ds-color-success-50)]',
                  hasErrors && 'border-[var(--ds-color-error-300)] bg-[var(--ds-color-error-50)]',
                  section.status === 'in-progress' && 'border-[var(--ds-color-blue-300)] bg-[var(--ds-color-blue-50)]',
                  !section.status && 'border-[var(--ds-color-neutral-300)]',
                )}
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-white/50">
                  <div className="flex items-center gap-3 flex-1 text-left">
                    <Icon
                      // @ts-ignore - getSectionIcon returns IconName but TS infers wrong union
                      name={getSectionIcon(section)}
                      size={24}
                      color={getSectionIconColor(section)}
                      className="flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-base text-[var(--ds-color-text-primary)]">
                          {section.title}
                        </h3>
                        {section.optional && (
                          <Badge variant="outline" className="text-xs">
                            Optional
                          </Badge>
                        )}
                        {section.status === 'completed' && (
                          <Badge variant="default" className="text-xs bg-[var(--ds-color-success-600)]">
                            Complete
                          </Badge>
                        )}
                        {hasErrors && (
                          <Badge variant="destructive" className="text-xs">
                            {section.validation.errors?.length || 0} error(s)
                          </Badge>
                        )}
                      </div>
                      {section.description && (
                        <p className="text-sm text-[var(--ds-color-text-secondary)]">{section.description}</p>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-4 py-4 bg-white">
                  {section.content}

                  {/* Validation Errors */}
                  {hasErrors && section.validation.errors && section.validation.errors.length > 0 && (
                    <div className="mt-4 p-3 bg-[var(--ds-color-error-50)] border border-[var(--ds-color-error-300)] rounded-lg">
                      <div className="flex items-start gap-2">
                        <Icon name="alert" size={16} color="var(--ds-color-error-600)" className="flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-[var(--ds-color-error-600)] mb-1">
                            Please fix the following errors:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-sm text-[var(--ds-color-error-600)]">
                            {section.validation.errors.map((error, i) => (
                              <li key={i}>{error}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })}
          </Accordion>
        )}

        {/* Actions */}
        {actions && (
          <div className="flex items-center justify-between pt-4 border-t border-[var(--ds-color-neutral-300)]">
            {actions}
          </div>
        )}
      </div>
    );
  },
);

ProgressiveForm.displayName = 'ProgressiveForm';

/**
 * Hook for managing progressive form state
 */
export interface UseProgressiveFormOptions {
  sections: FormSection[];
  autoSave?: boolean;
  autoSaveDelay?: number;
  onSave?: (data: any) => void | Promise<void>;
  onLoad?: () => Promise<any> | any;
  storageKey?: string;
  enableNavigationGuard?: boolean;
}

export function useProgressiveForm(options: UseProgressiveFormOptions) {
  const {
    sections: initialSections,
    autoSave = false,
    autoSaveDelay = 2000,
    onSave,
    onLoad,
    storageKey,
    enableNavigationGuard = true
  } = options;

  const [sections, setSections] = React.useState<FormSection[]>(initialSections);
  const [expandedSections, setExpandedSections] = React.useState<string[]>([]);
  const [isSaving, setIsSaving] = React.useState(false);
  const [lastSaved, setLastSaved] = React.useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false);
  const [formData, setFormData] = React.useState<Record<string, any>>({});
  const saveTimerRef = React.useRef<NodeJS.Timeout>();

  // Auto-save effect
  React.useEffect(() => {
    if (autoSave && hasUnsavedChanges && onSave) {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
      saveTimerRef.current = setTimeout(async () => {
        setIsSaving(true);
        try {
          await Promise.resolve(onSave({ sections, formData }));
          setLastSaved(new Date());
          setHasUnsavedChanges(false);

          // Save to localStorage if storageKey provided
          if (storageKey) {
            localStorage.setItem(storageKey, JSON.stringify({ sections, formData, lastSaved: new Date() }));
          }
        } catch (error) {
          console.error('Failed to save:', error);
        } finally {
          setIsSaving(false);
        }
      }, autoSaveDelay);
    }

    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
    };
  }, [formData, sections, autoSave, autoSaveDelay, hasUnsavedChanges, onSave, storageKey]);

  // Navigation guard
  React.useEffect(() => {
    if (enableNavigationGuard && hasUnsavedChanges) {
      const handler = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
        return e.returnValue;
      };
      window.addEventListener('beforeunload', handler);
      return () => window.removeEventListener('beforeunload', handler);
    }
  }, [hasUnsavedChanges, enableNavigationGuard]);

  // Load saved data on mount
  React.useEffect(() => {
    const loadData = async () => {
      try {
        let data;

        // Try loading from callback first
        if (onLoad) {
          data = await Promise.resolve(onLoad());
        }
        // Fallback to localStorage
        else if (storageKey) {
          const saved = localStorage.getItem(storageKey);
          if (saved) {
            data = JSON.parse(saved);
          }
        }

        if (data) {
          if (data.sections) setSections(data.sections);
          if (data.formData) setFormData(data.formData);
          if (data.lastSaved) setLastSaved(new Date(data.lastSaved));
        }
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };

    loadData();
  }, []); // Only run on mount

  const updateSection = React.useCallback((sectionId: string, updates: Partial<FormSection>) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId ? { ...section, ...updates } : section,
      ),
    );
    setHasUnsavedChanges(true);
  }, []);

  const markSectionComplete = React.useCallback(
    (sectionId: string) => {
      updateSection(sectionId, { status: 'completed' });

      // Auto-expand next section
      const currentIndex = sections.findIndex((s) => s.id === sectionId);
      if (currentIndex < sections.length - 1) {
        const nextSection = sections[currentIndex + 1];
        setExpandedSections([nextSection.id]);
      }
    },
    [sections, updateSection],
  );

  const markSectionError = React.useCallback(
    (sectionId: string, errors: string[]) => {
      updateSection(sectionId, {
        status: 'error',
        validation: { isValid: false, errors },
      });
    },
    [updateSection],
  );

  const resetSection = React.useCallback(
    (sectionId: string) => {
      updateSection(sectionId, {
        status: 'not-started',
        validation: undefined,
      });
    },
    [updateSection],
  );

  const updateFormData = React.useCallback((sectionId: string, data: any) => {
    setFormData((prev) => ({ ...prev, [sectionId]: data }));
    setHasUnsavedChanges(true);
  }, []);

  const saveProgress = React.useCallback(async () => {
    if (onSave) {
      setIsSaving(true);
      try {
        await Promise.resolve(onSave({ sections, formData }));
        setLastSaved(new Date());
        setHasUnsavedChanges(false);

        if (storageKey) {
          localStorage.setItem(storageKey, JSON.stringify({ sections, formData, lastSaved: new Date() }));
        }
      } catch (error) {
        console.error('Failed to save:', error);
      } finally {
        setIsSaving(false);
      }
    }
  }, [onSave, sections, formData, storageKey]);

  const clearSavedData = React.useCallback(() => {
    if (storageKey) {
      localStorage.removeItem(storageKey);
    }
    setFormData({});
    setLastSaved(null);
    setHasUnsavedChanges(false);
  }, [storageKey]);

  const completedSections = sections.filter((s) => s.status === 'completed').length;
  const progress = (completedSections / sections.length) * 100;
  const isComplete = completedSections === sections.length;

  return {
    sections,
    expandedSections,
    setExpandedSections,
    updateSection,
    markSectionComplete,
    markSectionError,
    resetSection,
    formData,
    updateFormData,
    saveProgress,
    clearSavedData,
    isSaving,
    lastSaved,
    hasUnsavedChanges,
    progress,
    completedSections,
    isComplete,
  };
}
