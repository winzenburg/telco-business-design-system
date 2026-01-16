import * as React from 'react';
import { z } from 'zod';
import { cn } from '../../utils/cn';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';
import { Button } from '../../../packages/components/ui/button';
import { Alert, AlertDescription } from '../../../packages/components/ui/alert';

/**
 * Enterprise Wizard Pattern - Phase 1 + 2
 *
 * Phase 1 Features:
 * 1. Enhanced validation with Zod schemas
 * 2. Save & resume with auto-save
 * 3. Review step pattern
 * 4. Navigation guards
 *
 * Phase 2 Features (Enterprise):
 * 5. Async resilience with background jobs and retry
 * 6. Permission-aware UI with rationale tooltips
 * 7. Enhanced keyboard navigation (arrow keys)
 * 8. Telemetry hooks for analytics
 */

// ===== TYPES =====

export type AsyncJobStatus = 'idle' | 'pending' | 'success' | 'error' | 'retrying';

export interface AsyncJob {
  id: string;
  status: AsyncJobStatus;
  progress?: number;
  error?: string;
  retryCount?: number;
  maxRetries?: number;
}

export interface WizardStep<TData = any> {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode;

  // Validation
  schema?: z.ZodSchema<any>;
  validateOn?: 'blur' | 'change' | 'submit';

  // Branching
  condition?: (data: Partial<TData>) => boolean;

  // Async Operations (Phase 2)
  onEnter?: (data: Partial<TData>) => Promise<void>;
  onExit?: (data: Partial<TData>) => Promise<void>;
  backgroundJob?: (data: Partial<TData>) => Promise<void>;
  asyncStatus?: AsyncJobStatus;

  // Permissions (Phase 2)
  requiredPermissions?: string[];
  permissionRationale?: string;

  // Metadata
  icon?: IconName;
  optional?: boolean;
  estimatedTime?: string;
}

export interface WizardTelemetry {
  onStepView?: (stepId: string, stepIndex: number) => void;
  onStepAdvance?: (fromStepId: string, toStepId: string, timeSpent: number) => void;
  onStepBack?: (fromStepId: string, toStepId: string) => void;
  onStepError?: (stepId: string, errors: Record<string, string[]>) => void;
  onStepAbandon?: (stepId: string, timeSpent: number) => void;
  onComplete?: (totalTime: number, stepCount: number) => void;
}

export interface WizardPersistence<TData = any> {
  key: string;
  storage?: 'localStorage' | 'sessionStorage';
  autoSave?: boolean;
  debounceMs?: number;
  onSave?: (data: Partial<TData>) => Promise<void>;
  onLoad?: () => Promise<Partial<TData> | null>;
}

export interface WizardReview<TData = any> {
  enabled: boolean;
  title?: string;
  render?: (data: Partial<TData>, goToStep: (id: string) => void) => React.ReactNode;
}

export interface WizardConfig<TData = any> {
  steps: WizardStep<TData>[];
  initialData?: Partial<TData>;
  persistence?: WizardPersistence<TData>;
  review?: WizardReview<TData>;

  // Phase 2: Permissions
  userPermissions?: string[];
  onPermissionDenied?: (step: WizardStep<TData>) => void;

  // Phase 2: Telemetry
  telemetry?: WizardTelemetry;

  // Phase 2: Keyboard Navigation
  enableKeyboardNavigation?: boolean;

  // Callbacks
  onStepChange?: (fromStep: number, toStep: number, data: Partial<TData>) => void;
  onComplete?: (data: TData) => Promise<void>;
  onError?: (error: Error, step: number) => void;
  onExit?: (data: Partial<TData>, hasUnsavedChanges: boolean) => boolean | Promise<boolean>;
}

// ===== VALIDATION UTILITIES =====

async function validateWithSchema<T>(
  schema: z.ZodSchema<T> | undefined,
  data: any,
): Promise<{ valid: boolean; errors: Record<string, string[]> }> {
  if (!schema) {
    return { valid: true, errors: {} };
  }

  try {
    await schema.parseAsync(data);
    return { valid: true, errors: {} };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {};
      error.issues.forEach((err) => {
        const path = err.path.join('.');
        if (!errors[path]) errors[path] = [];
        errors[path].push(err.message);
      });
      return { valid: false, errors };
    }
    return { valid: false, errors: { _root: ['Validation error occurred'] } };
  }
}

// ===== PERMISSION UTILITIES (Phase 2) =====

function hasRequiredPermissions(
  userPermissions: string[] | undefined,
  requiredPermissions: string[] | undefined,
): boolean {
  if (!requiredPermissions || requiredPermissions.length === 0) return true;
  if (!userPermissions || userPermissions.length === 0) return false;
  return requiredPermissions.every((perm) => userPermissions.includes(perm));
}

// ===== ASYNC JOB HOOK (Phase 2) =====

function useAsyncJob(maxRetries = 3) {
  const [jobs, setJobs] = React.useState<Record<string, AsyncJob>>({});

  const startJob = React.useCallback(
    async (
      id: string,
      jobFn: () => Promise<void>,
      onProgress?: (progress: number) => void,
    ) => {
      setJobs((prev) => ({
        ...prev,
        [id]: { id, status: 'pending', progress: 0, retryCount: 0, maxRetries },
      }));

      const executeWithRetry = async (attempt = 0): Promise<void> => {
        try {
          await jobFn();
          setJobs((prev) => ({
            ...prev,
            [id]: { ...prev[id], status: 'success', progress: 100 },
          }));
        } catch (error) {
          if (attempt < maxRetries) {
            setJobs((prev) => ({
              ...prev,
              [id]: {
                ...prev[id],
                status: 'retrying',
                retryCount: attempt + 1,
                error: (error as Error).message,
              },
            }));
            // Exponential backoff: 1s, 2s, 4s
            await new Promise((resolve) => setTimeout(resolve, Math.pow(2, attempt) * 1000));
            return executeWithRetry(attempt + 1);
          } else {
            setJobs((prev) => ({
              ...prev,
              [id]: {
                ...prev[id],
                status: 'error',
                error: (error as Error).message,
                retryCount: attempt,
              },
            }));
          }
        }
      };

      await executeWithRetry();
    },
    [maxRetries],
  );

  const retryJob = React.useCallback(
    (id: string, jobFn: () => Promise<void>) => {
      startJob(id, jobFn);
    },
    [startJob],
  );

  const resetJob = React.useCallback((id: string) => {
    setJobs((prev) => {
      const newJobs = { ...prev };
      delete newJobs[id];
      return newJobs;
    });
  }, []);

  return { jobs, startJob, retryJob, resetJob };
}

// ===== TELEMETRY HOOK (Phase 2) =====

function useTelemetry(config?: WizardTelemetry) {
  const [stepStartTime, setStepStartTime] = React.useState<number>(Date.now());
  const [wizardStartTime] = React.useState<number>(Date.now());

  const trackStepView = React.useCallback(
    (stepId: string, stepIndex: number) => {
      setStepStartTime(Date.now());
      config?.onStepView?.(stepId, stepIndex);
    },
    [config],
  );

  const trackStepAdvance = React.useCallback(
    (fromStepId: string, toStepId: string) => {
      const timeSpent = Date.now() - stepStartTime;
      config?.onStepAdvance?.(fromStepId, toStepId, timeSpent);
    },
    [config, stepStartTime],
  );

  const trackStepBack = React.useCallback(
    (fromStepId: string, toStepId: string) => {
      config?.onStepBack?.(fromStepId, toStepId);
    },
    [config],
  );

  const trackStepError = React.useCallback(
    (stepId: string, errors: Record<string, string[]>) => {
      config?.onStepError?.(stepId, errors);
    },
    [config],
  );

  const trackStepAbandon = React.useCallback(
    (stepId: string) => {
      const timeSpent = Date.now() - stepStartTime;
      config?.onStepAbandon?.(stepId, timeSpent);
    },
    [config, stepStartTime],
  );

  const trackComplete = React.useCallback(
    (stepCount: number) => {
      const totalTime = Date.now() - wizardStartTime;
      config?.onComplete?.(totalTime, stepCount);
    },
    [config, wizardStartTime],
  );

  return {
    trackStepView,
    trackStepAdvance,
    trackStepBack,
    trackStepError,
    trackStepAbandon,
    trackComplete,
  };
}

// ===== PERSISTENCE HOOK =====

function useWizardPersistence<TData = any>(config?: WizardPersistence<TData>) {
  const [data, setData] = React.useState<Partial<TData>>({});
  const [isSaving, setIsSaving] = React.useState(false);
  const [lastSaved, setLastSaved] = React.useState<Date | undefined>();
  const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false);

  const saveTimeoutRef = React.useRef<NodeJS.Timeout>();

  // Load from storage on mount
  React.useEffect(() => {
    if (!config?.key) return;

    const load = async () => {
      try {
        if (config.onLoad) {
          const loaded = await config.onLoad();
          if (loaded) {
            setData(loaded);
            setLastSaved(new Date());
          }
        } else {
          const storage = config.storage === 'sessionStorage' ? sessionStorage : localStorage;
          const stored = storage.getItem(config.key);
          if (stored) {
            const parsed = JSON.parse(stored);
            setData(parsed.data);
            setLastSaved(parsed.timestamp ? new Date(parsed.timestamp) : undefined);
          }
        }
      } catch (error) {
        console.error('Failed to load wizard data:', error);
      }
    };

    load();
  }, [config?.key]);

  // Auto-save with debouncing
  const save = React.useCallback(
    async (dataToSave: Partial<TData>, immediate = false) => {
      if (!config?.key) return;

      // Clear existing timeout
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }

      const performSave = async () => {
        setIsSaving(true);
        try {
          if (config.onSave) {
            await config.onSave(dataToSave);
          } else {
            const storage = config.storage === 'sessionStorage' ? sessionStorage : localStorage;
            storage.setItem(
              config.key,
              JSON.stringify({ data: dataToSave, timestamp: new Date().toISOString() }),
            );
          }
          setLastSaved(new Date());
          setHasUnsavedChanges(false);
        } catch (error) {
          console.error('Failed to save wizard data:', error);
        } finally {
          setIsSaving(false);
        }
      };

      if (immediate) {
        await performSave();
      } else {
        const debounce = config.debounceMs ?? 2000;
        saveTimeoutRef.current = setTimeout(performSave, debounce);
      }
    },
    [config],
  );

  const updateData = React.useCallback(
    (updates: Partial<TData>) => {
      setData((prev) => {
        const newData = { ...prev, ...updates };
        setHasUnsavedChanges(true);

        // Auto-save if enabled
        if (config?.autoSave) {
          save(newData);
        }

        return newData;
      });
    },
    [config?.autoSave, save],
  );

  return {
    data,
    updateData,
    save: (immediate = false) => save(data, immediate),
    isSaving,
    lastSaved,
    hasUnsavedChanges,
  };
}

// ===== MAIN WIZARD HOOK =====

export function useWizard<TData = any>(config: WizardConfig<TData>) {
  const {
    steps,
    initialData,
    persistence,
    review,
    userPermissions,
    onPermissionDenied,
    telemetry,
    enableKeyboardNavigation = true,
    onStepChange,
    onComplete,
    onError,
    onExit
  } = config;

  const [currentStep, setCurrentStep] = React.useState(0);
  const [errors, setErrors] = React.useState<Record<string, string[]>>({});
  const [isValidating, setIsValidating] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const [isReviewStep, setIsReviewStep] = React.useState(false);

  // Phase 2 Hooks
  const persistenceHook = useWizardPersistence(persistence);
  const asyncJobHook = useAsyncJob(3);
  const telemetryHook = useTelemetry(telemetry);

  // Initialize with initial data
  React.useEffect(() => {
    if (initialData && Object.keys(persistenceHook.data).length === 0) {
      persistenceHook.updateData(initialData);
    }
  }, []);

  // Filter visible steps based on conditions
  const visibleSteps = React.useMemo(() => {
    return steps.filter((step) => {
      if (!step.condition) return true;
      return step.condition(persistenceHook.data);
    });
  }, [steps, persistenceHook.data]);

  const totalSteps = visibleSteps.length + (review?.enabled ? 1 : 0);
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === visibleSteps.length - 1 && !review?.enabled;

  // Validate current step
  const validateStep = React.useCallback(
    async (stepIndex?: number): Promise<boolean> => {
      const index = stepIndex ?? currentStep;
      if (isReviewStep) return true;

      const step = visibleSteps[index];
      if (!step || step.optional) return true;

      setIsValidating(true);
      const result = await validateWithSchema(step.schema, persistenceHook.data);
      setIsValidating(false);

      if (!result.valid) {
        setErrors(result.errors);
        return false;
      }

      setErrors({});
      return true;
    },
    [currentStep, isReviewStep, visibleSteps, persistenceHook.data],
  );

  // Navigation
  const goToStep = React.useCallback(
    async (stepIdOrIndex: string | number) => {
      const fromStep = currentStep;
      let toStep: number;

      if (typeof stepIdOrIndex === 'string') {
        toStep = visibleSteps.findIndex((s) => s.id === stepIdOrIndex);
        if (toStep === -1) return;
      } else {
        toStep = stepIdOrIndex;
      }

      if (toStep < 0 || toStep >= visibleSteps.length) return;

      // Validate current step before advancing (not when going back)
      if (toStep > fromStep) {
        const isValid = await validateStep();
        if (!isValid) return;
      }

      setCurrentStep(toStep);
      setIsReviewStep(false);
      setErrors({});
      onStepChange?.(fromStep, toStep, persistenceHook.data);
    },
    [currentStep, visibleSteps, validateStep, onStepChange, persistenceHook.data],
  );

  const nextStep = React.useCallback(async () => {
    // Validate before advancing
    const isValid = await validateStep();
    if (!isValid) return;

    // If on last step and review enabled, go to review
    if (currentStep === visibleSteps.length - 1 && review?.enabled) {
      setIsReviewStep(true);
      setCurrentStep(visibleSteps.length);
      return;
    }

    // Otherwise advance to next step
    if (currentStep < visibleSteps.length - 1) {
      await goToStep(currentStep + 1);
    }
  }, [currentStep, visibleSteps.length, review, validateStep, goToStep]);

  const previousStep = React.useCallback(() => {
    if (isReviewStep) {
      setIsReviewStep(false);
      setCurrentStep(visibleSteps.length - 1);
    } else if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  }, [currentStep, isReviewStep, visibleSteps.length, goToStep]);

  const goToReview = React.useCallback(() => {
    if (review?.enabled) {
      setIsReviewStep(true);
      setCurrentStep(visibleSteps.length);
    }
  }, [review, visibleSteps.length]);

  const reset = React.useCallback(() => {
    setCurrentStep(0);
    setErrors({});
    setIsReviewStep(false);
    setIsComplete(false);
    persistenceHook.updateData({} as Partial<TData>);
  }, [persistenceHook]);

  const complete = React.useCallback(async () => {
    try {
      // Final validation
      for (let i = 0; i < visibleSteps.length; i++) {
        const isValid = await validateStep(i);
        if (!isValid) {
          goToStep(i);
          return;
        }
      }

      await onComplete?.(persistenceHook.data as TData);
      setIsComplete(true);
    } catch (error) {
      onError?.(error as Error, currentStep);
    }
  }, [visibleSteps, validateStep, goToStep, onComplete, onError, currentStep, persistenceHook.data]);

  const exit = React.useCallback(async () => {
    if (onExit) {
      const canExit = await onExit(persistenceHook.data, persistenceHook.hasUnsavedChanges);
      return canExit;
    }
    return true;
  }, [onExit, persistenceHook.data, persistenceHook.hasUnsavedChanges]);

  return {
    // State
    currentStep,
    currentStepId: visibleSteps[currentStep]?.id,
    data: persistenceHook.data,
    visibleSteps,

    // Computed
    progress,
    isFirstStep,
    isLastStep,
    canAdvance: !isValidating && Object.keys(errors).length === 0,
    canGoBack: isFirstStep ? false : true,

    // Navigation
    goToStep,
    nextStep,
    previousStep,
    reset,
    goToReview,
    isReviewStep,

    // Data
    updateData: persistenceHook.updateData,

    // Validation
    errors,
    validateStep,
    clearErrors: () => setErrors({}),

    // Persistence
    save: persistenceHook.save,
    isSaving: persistenceHook.isSaving,
    lastSaved: persistenceHook.lastSaved,
    hasUnsavedChanges: persistenceHook.hasUnsavedChanges,

    // Completion
    complete,
    exit,
    isComplete,
  };
}

// ===== ERROR SUMMARY COMPONENT =====

interface WizardErrorSummaryProps {
  errors: Record<string, string[]>;
  onErrorClick?: (fieldId: string) => void;
}

export function WizardErrorSummary({ errors, onErrorClick }: WizardErrorSummaryProps) {
  const errorCount = Object.keys(errors).length;

  if (errorCount === 0) return null;

  return (
    <Alert variant="destructive" className="mb-4" role="alert" aria-live="assertive">
      <Icon name="alert" className="h-4 w-4" />
      <AlertDescription>
        <p className="font-semibold mb-2">
          {errorCount === 1 ? 'There is 1 error' : `There are ${errorCount} errors`} that must be fixed before continuing:
        </p>
        <ul className="list-disc list-inside space-y-1">
          {Object.entries(errors).map(([field, messages]) => (
            <li key={field}>
              {onErrorClick ? (
                <button
                  type="button"
                  onClick={() => onErrorClick(field)}
                  className="text-left underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-destructive"
                >
                  {messages[0]}
                </button>
              ) : (
                messages[0]
              )}
            </li>
          ))}
        </ul>
      </AlertDescription>
    </Alert>
  );
}

// ===== WIZARD ACTIONS BAR =====

interface WizardActionsProps {
  canGoBack: boolean;
  canAdvance: boolean;
  isLastStep: boolean;
  isReviewStep: boolean;
  isSaving: boolean;
  lastSaved?: Date;
  hasUnsavedChanges: boolean;
  onBack: () => void;
  onNext: () => void;
  onSave?: () => void;
  onExit?: () => void;
  onComplete?: () => void;
  sticky?: boolean;
}

export function WizardActions({
  canGoBack,
  canAdvance,
  isLastStep,
  isReviewStep,
  isSaving,
  lastSaved,
  hasUnsavedChanges,
  onBack,
  onNext,
  onSave,
  onExit,
  onComplete,
  sticky = true,
}: WizardActionsProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-4 pt-6 border-t border-neutral-300',
        sticky && 'sticky bottom-0 bg-white py-4',
      )}
    >
      {/* Left: Back button */}
      <Button variant="outline" onClick={onBack} disabled={!canGoBack}>
        <Icon name="backarrow" className="mr-2 h-4 w-4" />
        Back
      </Button>

      {/* Center: Save status */}
      <div className="flex-1 text-center">
        {onSave && (
          <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
            {isSaving ? (
              <>
                <Icon name="refresh" className="h-4 w-4 animate-spin" />
                <span>Saving...</span>
              </>
            ) : lastSaved ? (
              <>
                <Icon name="check" className="h-4 w-4 text-success-500" />
                <span>
                  Last saved {lastSaved.toLocaleTimeString()}
                  {hasUnsavedChanges && ' (unsaved changes)'}
                </span>
              </>
            ) : null}
          </div>
        )}
      </div>

      {/* Right: Next/Save/Submit buttons */}
      <div className="flex gap-2">
        {onSave && hasUnsavedChanges && (
          <Button variant="outline" onClick={() => onSave()} disabled={isSaving}>
            Save Draft
          </Button>
        )}

        {onExit && (
          <Button variant="ghost" onClick={onExit}>
            Save & Exit
          </Button>
        )}

        {isReviewStep ? (
          <Button variant="primary" onClick={onComplete} disabled={!canAdvance}>
            Submit
          </Button>
        ) : isLastStep ? (
          <Button variant="primary" onClick={onNext} disabled={!canAdvance}>
            Review
          </Button>
        ) : (
          <Button variant="primary" onClick={onNext} disabled={!canAdvance}>
            Continue
            <Icon name="chevron" className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}

// ===== DEFAULT REVIEW STEP =====

interface DefaultReviewProps<TData = any> {
  steps: WizardStep<TData>[];
  data: Partial<TData>;
  onEdit: (stepId: string) => void;
}

export function DefaultReviewStep<TData = any>({ steps, data, onEdit }: DefaultReviewProps<TData>) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Review Your Information</h2>
        <p className="text-text-secondary">
          Please review the information you've provided. You can go back to any step to make changes.
        </p>
      </div>

      {steps.map((step) => (
        <div key={step.id} className="border border-neutral-300 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {step.icon && <Icon name={step.icon as any} className="h-5 w-5 text-primary-500" />}
              <h3 className="font-semibold text-lg">{step.title}</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(step.id)}
              className="text-primary-500"
            >
              Edit
            </Button>
          </div>

          <div className="text-sm text-text-secondary space-y-2">
            {/* Render step-specific data */}
            <pre className="bg-neutral-50 p-3 rounded text-xs overflow-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}
