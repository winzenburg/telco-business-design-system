import * as React from 'react';
import { cn } from '../../utils/cn';
import { Stepper } from './Stepper';
import type { Step } from './Stepper';
import {
  useWizard,
  WizardActions,
  WizardErrorSummary,
  DefaultReviewStep,
  type WizardConfig,
  type WizardStep,
} from './Wizard';

/**
 * Wizard Component - Enterprise-grade multi-step form
 *
 * Phase 1 Features:
 * ✅ Zod schema validation per step
 * ✅ Auto-save with debouncing
 * ✅ Review step before submission
 * ✅ Navigation guards with exit confirmation
 * ✅ Error summary with focus management
 * ✅ Progress tracking
 * ✅ Conditional step rendering (branching)
 */

export interface WizardComponentProps<TData = any> extends WizardConfig<TData> {
  // Layout
  variant?: 'default' | 'compact' | 'detailed';
  orientation?: 'horizontal' | 'vertical';

  // Display
  showProgress?: boolean;
  showStepNumbers?: boolean;
  stickyActions?: boolean;

  // Styling
  className?: string;
  contentClassName?: string;
}

export function WizardComponent<TData = any>({
  steps,
  initialData,
  persistence,
  review,
  onStepChange,
  onComplete,
  onError,
  onExit,
  variant = 'default',
  orientation = 'horizontal',
  showProgress = true,
  showStepNumbers = true,
  stickyActions = true,
  className,
  contentClassName,
}: WizardComponentProps<TData>) {
  const wizard = useWizard<TData>({
    steps,
    initialData,
    persistence,
    review: review ?? { enabled: true }, // Default to enabled
    onStepChange,
    onComplete,
    onError,
    onExit,
  });

  // Convert wizard steps to Stepper steps
  const stepperSteps: Step[] = wizard.visibleSteps.map((step, index) => {
    let status: Step['status'] = 'not-started';

    if (index < wizard.currentStep) {
      status = 'completed';
    } else if (index === wizard.currentStep && !wizard.isReviewStep) {
      status = 'in-progress';
    }

    // Show error status if current step has errors
    if (index === wizard.currentStep && Object.keys(wizard.errors).length > 0) {
      status = 'error';
    }

    return {
      id: step.id,
      label: step.title,
      description: step.description,
      optional: step.optional,
      status,
      icon: step.icon,
    };
  });

  // Add review step to stepper if enabled
  if (review?.enabled ?? true) {
    stepperSteps.push({
      id: 'review',
      label: review?.title ?? 'Review',
      status: wizard.isReviewStep ? 'in-progress' : wizard.currentStep >= wizard.visibleSteps.length ? 'completed' : 'not-started',
    });
  }

  // Handle exit with confirmation
  const handleExit = React.useCallback(async () => {
    if (wizard.hasUnsavedChanges) {
      const confirmed = window.confirm(
        'You have unsaved changes. Do you want to save before exiting?'
      );

      if (confirmed) {
        await wizard.save(true);
      }
    }

    const canExit = await wizard.exit();
    if (canExit) {
      // Navigate away or close modal
      window.history.back();
    }
  }, [wizard]);

  // Prevent accidental page navigation
  React.useEffect(() => {
    if (!wizard.hasUnsavedChanges) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [wizard.hasUnsavedChanges]);

  const currentStep = wizard.visibleSteps[wizard.currentStep];

  return (
    <div className={cn('w-full max-w-4xl mx-auto', className)} role="region" aria-label="Multi-step wizard">
      {/* Progress & Title */}
      <div className="mb-8">
        {showProgress && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-text-secondary mb-2">
              <span>
                Step {wizard.currentStep + 1} of {wizard.visibleSteps.length + (review?.enabled ? 1 : 0)}
              </span>
              <span>{Math.round(wizard.progress)}% complete</span>
            </div>
            <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-500 transition-all duration-300"
                style={{ width: `${wizard.progress}%` }}
                role="progressbar"
                aria-valuenow={Math.round(wizard.progress)}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        )}

        {!wizard.isReviewStep && currentStep && (
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-text-primary mb-2">{currentStep.title}</h1>
            {currentStep.description && (
              <p className="text-lg text-text-secondary">{currentStep.description}</p>
            )}
            {currentStep.estimatedTime && (
              <p className="text-sm text-text-tertiary mt-1">Estimated time: {currentStep.estimatedTime}</p>
            )}
          </div>
        )}
      </div>

      {/* Stepper Navigation */}
      <div className="mb-8">
        <Stepper
          steps={stepperSteps}
          currentStep={wizard.isReviewStep ? stepperSteps.length - 1 : wizard.currentStep}
          onStepClick={(index) => {
            if (index < wizard.visibleSteps.length) {
              wizard.goToStep(index);
            } else if (index === wizard.visibleSteps.length && (review?.enabled ?? true)) {
              wizard.goToReview();
            }
          }}
          orientation={orientation}
          allowStepNavigation={true}
          showStepNumbers={showStepNumbers}
          variant={variant}
        />
      </div>

      {/* Error Summary */}
      <WizardErrorSummary
        errors={wizard.errors}
        onErrorClick={(fieldId) => {
          const element = document.getElementById(fieldId);
          if (element) {
            element.focus();
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }}
      />

      {/* Step Content or Review */}
      <div className={cn('mb-8', contentClassName)}>
        {wizard.isReviewStep ? (
          review?.render ? (
            review.render(wizard.data, wizard.goToStep)
          ) : (
            <DefaultReviewStep
              steps={wizard.visibleSteps}
              data={wizard.data}
              onEdit={(stepId) => wizard.goToStep(stepId)}
            />
          )
        ) : (
          currentStep && (
            <div key={currentStep.id} className="space-y-6">
              {currentStep.content}
            </div>
          )
        )}
      </div>

      {/* Actions Bar */}
      <WizardActions
        canGoBack={wizard.canGoBack}
        canAdvance={wizard.canAdvance}
        isLastStep={wizard.isLastStep}
        isReviewStep={wizard.isReviewStep}
        isSaving={wizard.isSaving}
        lastSaved={wizard.lastSaved}
        hasUnsavedChanges={wizard.hasUnsavedChanges}
        onBack={wizard.previousStep}
        onNext={wizard.nextStep}
        onSave={persistence ? () => wizard.save(true) : undefined}
        onExit={onExit ? handleExit : undefined}
        onComplete={wizard.complete}
        sticky={stickyActions}
      />

      {/* Completion State */}
      {wizard.isComplete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md text-center shadow-xl">
            <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">Success!</h2>
            <p className="text-text-secondary">Your submission has been completed.</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Named export
export { WizardComponent as Wizard };
