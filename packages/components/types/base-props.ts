/**
 * Standardized Base Props for Comcast Business Design System
 * 
 * These interfaces ensure consistency across all components and improve
 * developer experience through predictable APIs.
 */

import type { ReactNode } from 'react';

/**
 * Core size variants used across all components
 */
export type ComponentSize = 'sm' | 'default' | 'lg';

/**
 * Core visual variants for components
 */
export type ComponentVariant = 
  | 'default'
  | 'primary' 
  | 'secondary'
  | 'ghost'
  | 'destructive'
  | 'outline';

/**
 * Base props that all components should support
 */
export interface BaseComponentProps {
  /**
   * Additional CSS classes to apply to the component
   */
  className?: string;
  
  /**
   * Test identifier for automated testing
   * @example 'submit-button' results in data-testid="submit-button"
   */
  'data-testid'?: string;
  
  /**
   * Component ID for accessibility and form associations
   */
  id?: string;
}

/**
 * Props for components with size variants
 */
export interface SizeableComponentProps extends BaseComponentProps {
  /**
   * Component size variant
   * @default 'default'
   */
  size?: ComponentSize;
}

/**
 * Props for components with visual variants
 */
export interface VariantComponentProps extends SizeableComponentProps {
  /**
   * Visual style variant
   * @default 'default'
   */
  variant?: ComponentVariant;
}

/**
 * Props for interactive components
 */
export interface InteractiveComponentProps extends VariantComponentProps {
  /**
   * Whether the component is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the component is in a loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Click event handler
   */
  onClick?: (event: React.MouseEvent) => void;
  
  /**
   * Focus event handler
   */
  onFocus?: (event: React.FocusEvent) => void;
  
  /**
   * Blur event handler
   */
  onBlur?: (event: React.FocusEvent) => void;
  
  /**
   * Keyboard event handler
   */
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

/**
 * Props for form components
 */
export interface FormComponentProps extends InteractiveComponentProps {
  /**
   * Field label
   */
  label?: string;
  
  /**
   * Whether the field is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Whether the field has an error
   * @default false
   */
  error?: boolean;
  
  /**
   * Error message to display
   */
  errorMessage?: string;
  
  /**
   * Help text displayed below the field
   */
  hintText?: string;
  
  /**
   * Subcopy text displayed below the label
   */
  subcopy?: string;
  
  /**
   * Show skeleton loading state
   * @default false
   */
  skeleton?: boolean;
}

/**
 * Props for components with icons
 */
export interface IconableComponentProps {
  /**
   * Icon or content to display on the left side
   */
  leftIcon?: ReactNode;
  
  /**
   * Icon or content to display on the right side
   */
  rightIcon?: ReactNode;
}

/**
 * Accessibility props that all interactive components should support
 */
export interface AccessibilityProps {
  /**
   * Accessible label for the component
   */
  'aria-label'?: string;
  
  /**
   * ID of element that labels the component
   */
  'aria-labelledby'?: string;
  
  /**
   * ID of element that describes the component
   */
  'aria-describedby'?: string;
  
  /**
   * Whether the component value is invalid
   */
  'aria-invalid'?: boolean;
  
  /**
   * Whether the component is required
   */
  'aria-required'?: boolean;
  
  /**
   * Whether the component is busy/loading
   */
  'aria-busy'?: boolean;
  
  /**
   * Whether the component is pressed (for toggle buttons)
   */
  'aria-pressed'?: boolean;
  
  /**
   * Whether the component is expanded
   */
  'aria-expanded'?: boolean;
  
  /**
   * Whether the component is selected
   */
  'aria-selected'?: boolean;
  
  /**
   * Component role for accessibility
   */
  role?: string;
}

/**
 * Combined props for fully accessible interactive components
 */
export interface AccessibleInteractiveProps 
  extends InteractiveComponentProps, 
          AccessibilityProps,
          IconableComponentProps {}

/**
 * Combined props for fully accessible form components
 */
export interface AccessibleFormProps 
  extends FormComponentProps,
          AccessibilityProps,
          IconableComponentProps {}

/**
 * Props for components that can be rendered as different elements
 */
export interface PolymorphicComponentProps {
  /**
   * Render as a different element or component
   */
  asChild?: boolean;
  
  /**
   * The element or component to render as
   */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

/**
 * Props for draggable components
 */
export interface DraggableComponentProps {
  /**
   * Whether the component is draggable
   * @default false
   */
  draggable?: boolean;
  
  /**
   * Drag start event handler
   */
  onDragStart?: (event: React.DragEvent) => void;
  
  /**
   * Drag end event handler
   */
  onDragEnd?: (event: React.DragEvent) => void;
  
  /**
   * Drag over event handler
   */
  onDragOver?: (event: React.DragEvent) => void;
  
  /**
   * Drop event handler
   */
  onDrop?: (event: React.DragEvent) => void;
}

/**
 * Props for toggleable components (checkbox, switch, etc)
 */
export interface ToggleableComponentProps extends AccessibleInteractiveProps {
  /**
   * Whether the component is checked/on
   * @default false
   */
  checked?: boolean;
  
  /**
   * Default checked state (for uncontrolled)
   */
  defaultChecked?: boolean;
  
  /**
   * Called when the checked state changes
   */
  onCheckedChange?: (checked: boolean) => void;
  
  /**
   * Whether the component is in an indeterminate state
   * @default false
   */
  indeterminate?: boolean;
}

/**
 * Props for selectable components (radio, menu items, etc)
 */
export interface SelectableComponentProps extends AccessibleInteractiveProps {
  /**
   * The value of the component
   */
  value?: string | number;
  
  /**
   * Called when the component is selected
   */
  onSelect?: (value: string | number) => void;
}

/**
 * Type guard to check if a component has a label
 */
export function hasLabel<T extends { label?: string }>(props: T): props is T & { label: string } {
  return Boolean(props.label);
}

/**
 * Type guard to check if a component has an error
 */
export function hasError<T extends { error?: boolean; errorMessage?: string }>(
  props: T
): props is T & { error: true; errorMessage: string } {
  return props.error === true && Boolean(props.errorMessage);
}

/**
 * Type guard to check if a component is loading
 */
export function isLoading<T extends { loading?: boolean }>(props: T): props is T & { loading: true } {
  return props.loading === true;
}

/**
 * Type guard to check if a component is disabled
 */
export function isDisabled<T extends { disabled?: boolean }>(props: T): props is T & { disabled: true } {
  return props.disabled === true;
}

/**
 * Utility type to make specific props required
 */
export type RequireProps<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Utility type to omit specific props
 */
export type OmitProps<T, K extends keyof T> = Omit<T, K>;

/**
 * Utility type for component props that extend HTML element props
 */
export type ComponentPropsWithRef<
  T extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  P = {}
> = P & Omit<React.ComponentPropsWithRef<T>, keyof P>;