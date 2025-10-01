import * as React from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '../Icon';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';

export interface Step {
  id: string;
  label: string;
  description?: string;
  optional?: boolean;
  status?: 'not-started' | 'in-progress' | 'completed' | 'error' | 'skipped';
  icon?: IconName;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Steps in the flow
   */
  steps: Step[];

  /**
   * Current active step index
   */
  currentStep: number;

  /**
   * Callback when a step is clicked
   */
  onStepClick?: (stepIndex: number) => void;

  /**
   * Orientation
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Whether completed steps are clickable
   */
  allowStepNavigation?: boolean;

  /**
   * Show step numbers
   */
  showStepNumbers?: boolean;

  /**
   * Variant
   */
  variant?: 'default' | 'compact' | 'detailed';
}

const statusConfig = {
  'not-started': {
    colorClass: 'text-[var(--ds-color-neutral-400)]',
    bgClass: 'bg-[var(--ds-color-neutral-100)]',
    borderClass: 'border-[var(--ds-color-neutral-300)]',
  },
  'in-progress': {
    colorClass: 'text-[var(--ds-color-blue-600)]',
    bgClass: 'bg-[var(--ds-color-blue-50)]',
    borderClass: 'border-[var(--ds-color-blue-500)]',
  },
  completed: {
    colorClass: 'text-[var(--ds-color-success-600)]',
    bgClass: 'bg-[var(--ds-color-success-50)]',
    borderClass: 'border-[var(--ds-color-success-500)]',
  },
  error: {
    colorClass: 'text-[var(--ds-color-error-600)]',
    bgClass: 'bg-[var(--ds-color-error-50)]',
    borderClass: 'border-[var(--ds-color-error-500)]',
  },
  skipped: {
    colorClass: 'text-[var(--ds-color-neutral-500)]',
    bgClass: 'bg-[var(--ds-color-neutral-50)]',
    borderClass: 'border-[var(--ds-color-neutral-300)]',
  },
} as const;

/**
 * Stepper component - linear wizard with progress indicator
 */
export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      steps,
      currentStep,
      onStepClick,
      orientation = 'horizontal',
      allowStepNavigation = true,
      showStepNumbers = true,
      variant = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    const isStepClickable = (index: number, step: Step) => {
      if (!allowStepNavigation || !onStepClick) return false;
      // Can only click on completed steps or current step
      return step.status === 'completed' || index === currentStep;
    };

    const renderStepIndicator = (step: Step, index: number) => {
      const status = step.status || (index < currentStep ? 'completed' : index === currentStep ? 'in-progress' : 'not-started');
      const config = statusConfig[status];
      const isClickable = isStepClickable(index, step);

      return (
        <button
          type="button"
          onClick={() => isClickable && onStepClick?.(index)}
          disabled={!isClickable}
          className={cn(
            'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm border-2 transition-all',
            isClickable && 'cursor-pointer hover:shadow-md',
            !isClickable && 'cursor-default',
            variant === 'compact' && 'w-8 h-8 text-xs',
            config.bgClass,
            config.borderClass,
            config.colorClass,
          )}
          aria-label={`Step ${index + 1}: ${step.label}`}
          aria-current={index === currentStep ? 'step' : undefined}
        >
          {status === 'completed' ? (
            <Icon name="check" size={variant === 'compact' ? 14 : 18} className={config.colorClass} />
          ) : status === 'error' ? (
            <Icon name="alert" size={variant === 'compact' ? 14 : 18} className={config.colorClass} />
          ) : status === 'skipped' ? (
            <Icon name="chevron" size={variant === 'compact' ? 14 : 18} className={config.colorClass} />
          ) : showStepNumbers ? (
            index + 1
          ) : null}
        </button>
      );
    };

    if (orientation === 'vertical') {
      return (
        <div ref={ref} className={cn('space-y-2', className)} {...props}>
          {steps.map((step, index) => {
            const status = step.status || (index < currentStep ? 'completed' : index === currentStep ? 'in-progress' : 'not-started');
            const config = statusConfig[status];
            const isLast = index === steps.length - 1;

            return (
              <div key={step.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  {renderStepIndicator(step, index)}
                  {!isLast && (
                    <div
                      className={cn(
                        'w-0.5 h-12 my-1',
                        status === 'completed' ? config.borderClass : 'bg-[var(--ds-color-neutral-300)]',
                      )}
                    />
                  )}
                </div>

                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <h4
                      className={cn(
                        'font-semibold',
                        variant === 'compact' ? 'text-sm' : 'text-base',
                        index === currentStep && 'text-[var(--ds-color-text-primary)]',
                        index !== currentStep && 'text-[var(--ds-color-text-secondary)]',
                      )}
                    >
                      {step.label}
                    </h4>
                    {step.optional && (
                      <span className="text-xs text-[var(--ds-color-text-tertiary)]">(Optional)</span>
                    )}
                  </div>

                  {variant === 'detailed' && step.description && (
                    <p className="text-sm text-[var(--ds-color-text-secondary)]">{step.description}</p>
                  )}

                  {status === 'error' && (
                    <p className="text-sm text-[var(--ds-color-error-600)] mt-1">Action required</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    // Horizontal orientation
    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div className="flex justify-between">
          {steps.map((step, index) => {
            const status = step.status || (index < currentStep ? 'completed' : index === currentStep ? 'in-progress' : 'not-started');
            const config = statusConfig[status];
            const isLast = index === steps.length - 1;

            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center flex-1">
                  <div className="flex items-center w-full">
                    {renderStepIndicator(step, index)}

                    {!isLast && (
                      <div
                        className={cn(
                          'h-0.5 flex-1',
                          variant === 'compact' ? 'max-w-12' : 'max-w-24',
                          status === 'completed' ? config.borderClass : 'bg-[var(--ds-color-neutral-300)]',
                        )}
                      />
                    )}
                  </div>

                  <div className="mt-2 text-center">
                    <div className="flex items-center gap-1 justify-center">
                      <p
                        className={cn(
                          'font-medium',
                          variant === 'compact' ? 'text-xs' : 'text-sm',
                          index === currentStep && 'text-[var(--ds-color-text-primary)]',
                          index !== currentStep && 'text-[var(--ds-color-text-secondary)]',
                        )}
                      >
                        {step.label}
                      </p>
                      {step.optional && (
                        <span className="text-xs text-[var(--ds-color-text-tertiary)]">(Optional)</span>
                      )}
                    </div>

                    {variant === 'detailed' && step.description && (
                      <p className="text-xs text-[var(--ds-color-text-secondary)] mt-1">{step.description}</p>
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  },
);

Stepper.displayName = 'Stepper';

/**
 * Hook for managing stepper state
 */
export interface UseStepperOptions {
  totalSteps: number;
  initialStep?: number;
  onStepChange?: (step: number) => void;
}

export function useStepper(options: UseStepperOptions) {
  const { totalSteps, initialStep = 0, onStepChange } = options;

  const [currentStep, setCurrentStep] = React.useState(initialStep);

  const goToStep = React.useCallback(
    (step: number) => {
      if (step >= 0 && step < totalSteps) {
        setCurrentStep(step);
        onStepChange?.(step);
      }
    },
    [totalSteps, onStepChange],
  );

  const nextStep = React.useCallback(() => {
    goToStep(currentStep + 1);
  }, [currentStep, goToStep]);

  const previousStep = React.useCallback(() => {
    goToStep(currentStep - 1);
  }, [currentStep, goToStep]);

  const reset = React.useCallback(() => {
    goToStep(0);
  }, [goToStep]);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return {
    currentStep,
    goToStep,
    nextStep,
    previousStep,
    reset,
    isFirstStep,
    isLastStep,
    progress,
  };
}
