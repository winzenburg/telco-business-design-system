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
    color: 'var(--ds-color-neutral-400)',
    bgColor: 'var(--ds-color-neutral-100)',
    borderColor: 'var(--ds-color-neutral-300)',
  },
  'in-progress': {
    color: 'var(--ds-color-blue-600)',
    bgColor: 'var(--ds-color-blue-50)',
    borderColor: 'var(--ds-color-blue-500)',
  },
  completed: {
    color: 'var(--ds-color-success-600)',
    bgColor: 'var(--ds-color-success-50)',
    borderColor: 'var(--ds-color-success-500)',
  },
  error: {
    color: 'var(--ds-color-error-600)',
    bgColor: 'var(--ds-color-error-50)',
    borderColor: 'var(--ds-color-error-500)',
  },
  skipped: {
    color: 'var(--ds-color-neutral-500)',
    bgColor: 'var(--ds-color-neutral-50)',
    borderColor: 'var(--ds-color-neutral-300)',
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
          )}
          style={{
            backgroundColor: config.bgColor,
            borderColor: config.borderColor,
            color: config.color,
          }}
          aria-label={`Step ${index + 1}: ${step.label}`}
          aria-current={index === currentStep ? 'step' : undefined}
        >
          {status === 'completed' ? (
            <Icon name={'check' as any} size={variant === 'compact' ? 14 : 18} color={config.color} />
          ) : status === 'error' ? (
            <Icon name={'alert-circle' as any} size={variant === 'compact' ? 14 : 18} color={config.color} />
          ) : status === 'skipped' ? (
            <Icon name={'chevron-right' as any} size={variant === 'compact' ? 14 : 18} color={config.color} />
          ) : step.icon ? (
            <Icon name={step.icon as any} size={variant === 'compact' ? 14 : 18} color={config.color} />
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
                      className="w-0.5 h-12 my-1"
                      style={{
                        backgroundColor: status === 'completed' ? config.borderColor : 'var(--ds-color-neutral-300)',
                      }}
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
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const status = step.status || (index < currentStep ? 'completed' : index === currentStep ? 'in-progress' : 'not-started');
            const config = statusConfig[status];
            const isLast = index === steps.length - 1;

            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center flex-1">
                  {renderStepIndicator(step, index)}

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

                {!isLast && (
                  <div
                    className={cn('h-0.5 flex-1', variant === 'compact' ? 'max-w-12' : 'max-w-24')}
                    style={{
                      backgroundColor: status === 'completed' ? config.borderColor : 'var(--ds-color-neutral-300)',
                    }}
                  />
                )}
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
