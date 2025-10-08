import * as React from 'react';
import { z } from 'zod';
import { cn } from '../../utils/cn';
import { Button } from '../../../packages/components/ui/button';
import { Icon } from '../Icon';

/**
 * Single-Field Wizard - Zendesk Pattern
 *
 * Best Practice: One question per page reduces cognitive load
 * Research: Luke Wroblewski - Breaking complex forms into single questions
 * increases completion rates by up to 300%
 *
 * When to Use:
 * - Long forms (8+ fields)
 * - Mobile-first experiences
 * - High-stakes forms (registration, checkout)
 * - When you need maximum focus per field
 *
 * Examples:
 * - Zendesk demo request (8 steps, 1 field each)
 * - Typeform surveys
 * - TurboTax guided experience
 */

export interface SingleFieldQuestion<TData = any> {
  id: string;
  question: string;
  description?: string;
  field: React.ReactNode;
  schema?: z.ZodSchema<any>;
  condition?: (data: Partial<TData>) => boolean;
}

export interface SingleFieldWizardProps<TData = any> {
  questions: SingleFieldQuestion<TData>[];
  data: Partial<TData>;
  onDataChange: (data: Partial<TData>) => void;
  onComplete: (data: TData) => void;
  className?: string;
}

export function SingleFieldWizard<TData = any>({
  questions,
  data,
  onDataChange,
  onComplete,
  className,
}: SingleFieldWizardProps<TData>) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [errors, setErrors] = React.useState<string[]>([]);
  const [direction, setDirection] = React.useState<'forward' | 'backward'>('forward');

  // Filter visible questions based on conditions
  const visibleQuestions = React.useMemo(() => {
    return questions.filter((q) => !q.condition || q.condition(data));
  }, [questions, data]);

  const currentQuestion = visibleQuestions[currentIndex];
  const progress = ((currentIndex + 1) / visibleQuestions.length) * 100;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === visibleQuestions.length - 1;

  const validateCurrent = async (): Promise<boolean> => {
    if (!currentQuestion.schema) return true;

    try {
      await currentQuestion.schema.parseAsync(data);
      setErrors([]);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.issues.map((e) => e.message));
      }
      return false;
    }
  };

  const handleNext = async () => {
    const isValid = await validateCurrent();
    if (!isValid) return;

    if (isLast) {
      onComplete(data as TData);
    } else {
      setDirection('forward');
      setCurrentIndex((prev) => prev + 1);
      setErrors([]);
    }
  };

  const handleBack = () => {
    if (!isFirst) {
      setDirection('backward');
      setCurrentIndex((prev) => prev - 1);
      setErrors([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div
      className={cn('w-full max-w-2xl mx-auto min-h-screen flex flex-col', className)}
      onKeyDown={handleKeyDown}
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-200 z-50">
        <div
          className="h-full bg-primary-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {/* Question Counter */}
      <div className="text-center text-sm text-neutral-500 mb-8 mt-20">
        Question {currentIndex + 1} of {visibleQuestions.length}
      </div>

      {/* Question Content - Animated */}
      <div className="flex-1 flex flex-col justify-center">
        <div
          key={currentQuestion.id}
          className={cn(
            'transition-all duration-300',
            direction === 'forward' ? 'animate-in slide-in-from-right' : 'animate-in slide-in-from-left',
          )}
        >
          {/* Question Text */}
          <h1 className="text-4xl font-bold text-text-primary mb-4 leading-tight">
            {currentQuestion.question}
          </h1>

          {currentQuestion.description && (
            <p className="text-lg text-text-secondary mb-8">{currentQuestion.description}</p>
          )}

          {/* Field Input */}
          <div className="mb-6">{currentQuestion.field}</div>

          {/* Errors */}
          {errors.length > 0 && (
            <div className="bg-destructive-50 border border-destructive-300 rounded-lg p-4 mb-6">
              {errors.map((error, i) => (
                <p key={i} className="text-sm text-destructive-700">
                  {error}
                </p>
              ))}
            </div>
          )}

          {/* Hint Text */}
          <p className="text-sm text-neutral-500 mb-8">
            Press <kbd className="px-2 py-1 bg-neutral-100 rounded border">Enter ↵</kbd> to continue
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="sticky bottom-0 bg-white border-t border-neutral-200 py-6 flex justify-between items-center">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={isFirst}
          className="flex items-center gap-2"
        >
          <Icon name="backarrow" className="h-4 w-4" />
          Back
        </Button>

        <div className="flex gap-2">
          {visibleQuestions.map((_, index) => (
            <div
              key={index}
              className={cn(
                'h-2 w-2 rounded-full transition-all',
                index === currentIndex
                  ? 'bg-primary-500 w-8'
                  : index < currentIndex
                  ? 'bg-primary-300'
                  : 'bg-neutral-300',
              )}
            />
          ))}
        </div>

        <Button variant="primary" onClick={handleNext} className="flex items-center gap-2">
          {isLast ? 'Submit' : 'Continue'}
          <Icon name="chevron" className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
