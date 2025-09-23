import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';
import { Title, Body } from './typography';

// Card component following Comcast Business Design System
// Colors: Using design tokens for consistent theming

const cardVariants = cva(
  [
    // Base styles using design system colors
    'flex flex-col rounded-xl text-[var(--ds-color-text-primary)] transition-all duration-200',
    'relative overflow-hidden', // For state layers and media
  ],
  {
    variants: {
      variant: {
        default: 'bg-[var(--ds-color-white)] border border-[var(--ds-color-neutral-300)] shadow-sm',
        elevated: 'bg-[var(--ds-color-white)] shadow-lg hover:shadow-xl',
        filled: 'bg-[var(--ds-color-bg-surface)] border border-[var(--ds-color-neutral-300)]',
        outlined: 'bg-[var(--ds-color-white)] border-2 border-[var(--ds-color-text-muted)]',
        interactive: 'bg-[var(--ds-color-white)] border border-[var(--ds-color-neutral-300)] hover:bg-[var(--ds-color-bg-surface)] cursor-pointer hover:shadow-md focus-within:shadow-lg focus-within:ring-2 focus-within:ring-[var(--ds-color-intent-primary)] focus-within:ring-offset-2',
      },
      padding: {
        none: '',
        default: 'gap-6',
        compact: 'gap-4',
        spacious: 'gap-8',
      },
      size: {
        sm: 'max-w-sm',
        default: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
      size: 'full', // Default to full width to maintain backward compatibility
    },
  },
);

export interface CardProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof cardVariants> {
  /**
   * Make the card draggable
   */
  draggable?: boolean
  /**
   * Callback when card is clicked (for interactive cards)
   */
  onCardClick?: () => void
}

function Card({ className, variant, padding, size, draggable, onCardClick, onClick, ...props }: CardProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onCardClick) {
      onCardClick();
    }
    onClick?.(e);
  };

  return (
    <div
      className={cn(cardVariants({ variant, padding, size }), className)}
      draggable={draggable}
      onClick={variant === 'interactive' || onCardClick ? handleClick : onClick}
      role={variant === 'interactive' || onCardClick ? 'button' : undefined}
      tabIndex={variant === 'interactive' || onCardClick ? 0 : undefined}
      onKeyDown={variant === 'interactive' || onCardClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e as any);
        }
      } : undefined}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 py-6',
        'has-data-[slot=card-action]:grid-cols-[1fr_auto]',
        '[&:not(:last-child)]:pb-0', // Remove bottom padding if not last child
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <Title
      level={4}
      weight="semibold"
      data-slot="card-title"
      className={cn('text-[var(--ds-color-text-primary)]', className)}
      {...props}
    >
      {children}
    </Title>
  );
}

function CardDescription({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <Body
      size="m"
      data-slot="card-description"
      className={cn('text-[var(--ds-color-text-muted)]', className)}
      {...props}
    >
      {children}
    </Body>
  );
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6 py-2 flex-1 flex flex-col justify-end [&:last-child]:pb-6', className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 py-6 [&:not(:first-child)]:pt-0', className)}
      {...props}
    />
  );
}

// New MD3-inspired components
function CardMedia({ className, aspectRatio = '16/9', ...props }: React.ComponentProps<'div'> & {
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4'
}) {
  const aspectRatioClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
  };

  return (
    <div
      data-slot="card-media"
      className={cn(
        'relative overflow-hidden bg-neutral-100',
        aspectRatioClasses[aspectRatio],
        'first:rounded-t-xl [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-b-xl',
        className,
      )}
      {...props}
    />
  );
}

function CardActions({ className, layout = 'end', ...props }: React.ComponentProps<'div'> & {
  layout?: 'start' | 'end' | 'between' | 'center'
}) {
  const layoutClasses = {
    start: 'justify-start',
    end: 'justify-end',
    between: 'justify-between',
    center: 'justify-center',
  };

  return (
    <div
      data-slot="card-actions"
      className={cn(
        'flex items-center gap-2 px-6 py-4',
        layoutClasses[layout],
        className,
      )}
      {...props}
    />
  );
}

function CardDivider({ className, ...props }: React.ComponentProps<'hr'>) {
  return (
    <hr
      data-slot="card-divider"
      className={cn('mx-6 border-[var(--ds-color-neutral-300)]', className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardMedia,
  CardActions,
  CardDivider,
  cardVariants,
};
