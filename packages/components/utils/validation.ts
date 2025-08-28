/**
 * Shared validation utilities for form components
 * Centralizes error handling and validation logic
 */

/**
 * Validation state type
 */
export interface ValidationState {
  isValid: boolean;
  error?: string;
  isDirty: boolean;
  isTouched: boolean;
}

/**
 * Get error message from error prop (boolean | string)
 */
export function getErrorMessage(error: boolean | string | undefined): string | undefined {
  if (typeof error === 'string' && error.length > 0) {
    return error;
  }
  return undefined;
}

/**
 * Check if component has error state
 */
export function hasError(error: boolean | string | undefined): boolean {
  return Boolean(error);
}

/**
 * Get validation class names for form components
 */
export function getValidationClasses(
  error: boolean | string | undefined,
  baseClasses: string = '',
  errorClasses: string = 'border-red-500 focus:border-red-500 focus:ring-red-500'
): string {
  if (hasError(error)) {
    return `${baseClasses} ${errorClasses}`;
  }
  return baseClasses;
}

/**
 * Format validation message for display
 */
export function formatValidationMessage(
  error: boolean | string | undefined,
  required?: boolean,
  fieldName?: string
): string | undefined {
  if (typeof error === 'string' && error.length > 0) {
    return error;
  }
  
  if (error === true && required && fieldName) {
    return `${fieldName} is required`;
  }
  
  return undefined;
}

/**
 * Common validation rules
 */
export const validationRules = {
  email: (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },
  
  phone: (value: string): boolean => {
    const phoneRegex = /^\+?[\d\s-()]+$/;
    return phoneRegex.test(value) && value.replace(/\D/g, '').length >= 10;
  },
  
  required: (value: string | undefined | null): boolean => {
    return Boolean(value && value.trim().length > 0);
  },
  
  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },
  
  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  }
};

/**
 * Validate a field against multiple rules
 */
export function validateField(
  value: string,
  rules: Array<{
    rule: (val: string) => boolean;
    message: string;
  }>
): ValidationState {
  for (const { rule, message } of rules) {
    if (!rule(value)) {
      return {
        isValid: false,
        error: message,
        isDirty: true,
        isTouched: true
      };
    }
  }
  
  return {
    isValid: true,
    isDirty: true,
    isTouched: true
  };
}