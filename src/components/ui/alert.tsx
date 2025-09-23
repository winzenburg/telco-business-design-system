import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '../../utils/cn';

const alertVariants = cva(
  [
    'relative w-full border transition-all duration-300',
    '[&>svg~*]:pl-7 [&>svg+div]:-translate-y-1 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  ],
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border-neutral-200',
        info: 'border-[var(--ds-color-intent-primary)]/20 bg-[var(--ds-color-intent-primary)]/5 text-[var(--ds-color-intent-primary)] [&>svg]:text-[var(--ds-color-intent-primary)]',
        success: 'border-green-200 bg-green-50 text-green-800 [&>svg]:text-green-600',
        warning: 'border-orange-200 bg-orange-50 text-orange-800 [&>svg]:text-orange-600',
        destructive: 'border-red-200 bg-red-50 text-red-800 [&>svg]:text-red-600',
      },
      layout: {
        standard: 'rounded-lg p-4',
        banner: 'rounded-none p-4 shadow-md',
        floating: 'rounded-xl p-4 shadow-lg mx-4 my-2',
      },
      position: {
        static: '',
        fixed: 'fixed top-0 left-0 right-0 z-50',
        sticky: 'sticky top-0 z-40',
      },
    },
    defaultVariants: {
      variant: 'default',
      layout: 'standard',
      position: 'static',
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants> & {
    dismissible?: boolean
    onDismiss?: () => void
  }
>(({ className, variant, layout, position, dismissible, onDismiss, children, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant, layout, position }), className)}
    {...props}
  >
    {children}
    {dismissible && (
      <button
        onClick={onDismiss}
        className="absolute right-3 top-3 p-1 rounded-md opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    )}
  </div>
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-semibold leading-none tracking-tight', className)}
    {...props}
  >
    {children}
  </h5>
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

// Alert Actions Component for buttons
const AlertActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-2 mt-3', className)}
    {...props}
  />
));
AlertActions.displayName = 'AlertActions';

export { Alert, AlertTitle, AlertDescription, AlertActions, alertVariants };
