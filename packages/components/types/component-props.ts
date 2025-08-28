/**
 * Shared component prop types for the Comcast Business Design System
 * These interfaces ensure consistency across all components
 */

/**
 * Standard size variants used across all components
 */
export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Base props that all interactive components should inherit
 */
export interface BaseComponentProps {
  /**
   * Component size variant
   */
  size?: ComponentSize;
  
  /**
   * Loading state for the component
   */
  loading?: boolean;
  
  /**
   * Disabled state for the component
   */
  disabled?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Props for components that support form validation
 */
export interface FormComponentProps extends BaseComponentProps {
  /**
   * Error state - can be boolean or error message string
   */
  error?: boolean | string;
  
  /**
   * Required field indicator
   */
  required?: boolean;
}

/**
 * Props for components that support icons
 */
export interface IconComponentProps extends BaseComponentProps {
  /**
   * Icon to display on the left side
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Icon to display on the right side
   */
  rightIcon?: React.ReactNode;
}

/**
 * Standard color variants used across components
 */
export type ColorVariant = 
  | "default"
  | "primary" 
  | "secondary"
  | "success"
  | "warning"
  | "destructive"
  | "info"
  | "outline"
  | "ghost"
  | "link";

/**
 * Props for components that support color variants
 */
export interface VariantComponentProps extends BaseComponentProps {
  /**
   * Visual variant of the component
   */
  variant?: ColorVariant;
}

/**
 * Combined props for full-featured interactive components
 */
export interface InteractiveComponentProps 
  extends FormComponentProps, 
          IconComponentProps, 
          VariantComponentProps {
  /**
   * Full width component
   */
  fullWidth?: boolean;
}

/**
 * Props for layout components
 */
export interface LayoutComponentProps extends BaseComponentProps {
  /**
   * Responsive behavior
   */
  responsive?: boolean;
  
  /**
   * Spacing variant
   */
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
}

/**
 * Props for data display components
 */
export interface DataDisplayProps extends BaseComponentProps {
  /**
   * Empty state content
   */
  emptyState?: React.ReactNode;
  
  /**
   * Loading state content
   */
  loadingState?: React.ReactNode;
}