import * as React from 'react';
import { cn } from '../../utils/cn';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Icon } from '../Icon';
import type { FormSection } from './ProgressiveForm';

export interface ReviewStepProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Form sections to review
   */
  sections: FormSection[];

  /**
   * Form data to display
   */
  formData: Record<string, any>;

  /**
   * Callback when edit button is clicked for a section
   */
  onEdit?: (sectionId: string) => void;

  /**
   * Callback when submit button is clicked
   */
  onSubmit?: () => void;

  /**
   * Whether the form is submitting
   */
  isSubmitting?: boolean;

  /**
   * Submit button label
   */
  submitLabel?: string;

  /**
   * Show section status indicators
   */
  showStatus?: boolean;
}

/**
 * ReviewStep component - Final review before submission
 * Following best practices from Nielsen Norman Group and GOV.UK Design System
 */
export const ReviewStep = React.forwardRef<HTMLDivElement, ReviewStepProps>(
  (
    {
      sections,
      formData,
      onEdit,
      onSubmit,
      isSubmitting = false,
      submitLabel = 'Submit',
      showStatus = true,
      className,
      ...props
    },
    ref,
  ) => {
    const renderFieldValue = (value: any): string => {
      if (value === null || value === undefined) return '—';
      if (typeof value === 'boolean') return value ? 'Yes' : 'No';
      if (Array.isArray(value)) return value.join(', ');
      if (typeof value === 'object') return JSON.stringify(value, null, 2);
      return String(value);
    };

    return (
      <div ref={ref} className={cn('space-y-6', className)} {...props}>
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-[var(--ds-color-text-primary)]">
            Review Your Information
          </h2>
          <p className="text-[var(--ds-color-text-secondary)]">
            Please review your information before submitting. You can edit any section if needed.
          </p>
        </div>

        {/* Review Sections */}
        <div className="space-y-4">
          {sections.map((section) => {
            const sectionData = formData[section.id] || {};
            const hasData = Object.keys(sectionData).length > 0;

            return (
              <Card key={section.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {showStatus && section.status === 'completed' && (
                        <Icon
                          name="check"
                          size={20}
                          className="text-[var(--ds-color-success-600)]"
                        />
                      )}
                      <div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                        {section.description && (
                          <p className="text-sm text-[var(--ds-color-text-secondary)] mt-1">
                            {section.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {onEdit && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onEdit(section.id)}
                        className="flex items-center gap-1"
                      >
                        <Icon name="configure" size={16} />
                        Edit
                      </Button>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  {hasData ? (
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(sectionData).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                          <dt className="text-sm font-medium text-[var(--ds-color-text-secondary)]">
                            {key
                              .replace(/([A-Z])/g, ' $1')
                              .replace(/^./, (str) => str.toUpperCase())
                              .trim()}
                          </dt>
                          <dd className="text-sm text-[var(--ds-color-text-primary)] font-semibold">
                            {renderFieldValue(value)}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <p className="text-sm text-[var(--ds-color-text-tertiary)] italic">
                      No data provided for this section
                      {section.optional && ' (optional)'}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Submit Button */}
        {onSubmit && (
          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              onClick={onSubmit}
              disabled={isSubmitting}
              loading={isSubmitting}
              className="min-w-[200px]"
            >
              {isSubmitting ? 'Submitting...' : submitLabel}
            </Button>
          </div>
        )}

        {/* Disclaimer/Notice */}
        <div className="bg-[var(--ds-color-blue-50)] border border-[var(--ds-color-blue-200)] rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Icon
              name="alert"
              size={20}
              className="text-[var(--ds-color-blue-600)] flex-shrink-0 mt-0.5"
            />
            <div className="flex-1">
              <p className="text-sm text-[var(--ds-color-text-primary)]">
                <strong>Important:</strong> By submitting this form, you confirm that the
                information provided is accurate and complete to the best of your knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ReviewStep.displayName = 'ReviewStep';
