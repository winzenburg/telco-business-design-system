import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

// Material Design 3 Tooltip variants
const tooltipVariants = cva(
  [
    // Base styles following MD3 specifications
    'z-50 overflow-hidden rounded-lg px-3 py-2 text-sm font-medium',
    'max-w-xs break-words',
    // Animation states
    'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    // Directional slide animations
    'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  ],
  {
    variants: {
      variant: {
        // Plain tooltip - MD3 standard
        default: [
          'bg-neutral-800 text-white',
          'shadow-lg border-0',
        ],
        // Rich tooltip with contrast background
        rich: [
          'bg-white text-neutral-900 border border-neutral-200',
          'shadow-xl',
        ],
        // Inverted for dark backgrounds
        inverted: [
          'bg-white text-neutral-900 border border-neutral-200',
          'shadow-lg',
        ],
      },
      size: {
        sm: 'px-2 py-1 text-xs',
        default: 'px-3 py-2 text-sm',
        lg: 'px-4 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> &
  VariantProps<typeof tooltipVariants>
>(({ className, sideOffset = 6, variant, size, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(tooltipVariants({ variant, size }), className)}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// Rich tooltip with header and body sections
const TooltipHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('font-semibold text-sm mb-1 leading-tight', className)}
    {...props}
  />
));
TooltipHeader.displayName = 'TooltipHeader';

const TooltipBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm leading-relaxed', className)}
    {...props}
  />
));
TooltipBody.displayName = 'TooltipBody';

// Tooltip with arrow pointer
const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={cn('fill-current text-neutral-800', className)}
    {...props}
  />
));
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  TooltipHeader,
  TooltipBody,
  TooltipArrow,
  tooltipVariants,
};
