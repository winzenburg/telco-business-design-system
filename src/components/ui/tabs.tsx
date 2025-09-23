'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';
import { Body } from './typography';

// Tabs component following Comcast Business Design System
// Colors: White background, var(--ds-color-neutral-300) borders, var(--ds-color-intent-primary) for active states
// Typography: Lato Medium for tab labels

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  // Base styles using design system colors - let height size naturally
  'inline-flex w-fit items-center bg-white border border-[var(--ds-color-neutral-300)] rounded-lg p-1',
  {
    variants: {
      variant: {
        default: 'bg-white',
        enclosed: 'bg-[var(--ds-color-bg-surface)]',
        pills: 'bg-transparent border-0 gap-1',
      },
      size: {
        sm: 'text-sm',
        default: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

function TabsList({
  className,
  variant,
  size,
  ...props
}: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(tabsListVariants({ variant, size }), className)}
      {...props}
    />
  );
}

const tabsTriggerVariants = cva(
  // Base styles with proper font styling
  'relative inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 font-secondary font-medium transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-[var(--ds-color-text-muted)] hover:text-[var(--ds-color-text-primary)] data-[state=active]:bg-[var(--ds-color-intent-primary)] data-[state=active]:text-white data-[state=active]:shadow-sm',
        enclosed: 'text-[var(--ds-color-text-muted)] hover:text-[var(--ds-color-text-primary)] data-[state=active]:bg-white data-[state=active]:text-[var(--ds-color-intent-primary)] data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-[var(--ds-color-intent-primary)]',
        pills: 'text-[var(--ds-color-text-muted)] rounded-full border border-[var(--ds-color-neutral-300)] hover:bg-[var(--ds-color-bg-surface)] hover:border-[var(--ds-color-text-muted)] data-[state=active]:bg-[var(--ds-color-intent-primary)] data-[state=active]:text-white data-[state=active]:border-[var(--ds-color-intent-primary)] data-[state=active]:shadow-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

function TabsTrigger({
  className,
  variant,
  ...props
}: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        'mt-4 rounded-lg bg-white p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
