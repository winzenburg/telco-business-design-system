// Lazy-loaded heavy components for code splitting
import React, { lazy, Suspense } from 'react';

// Heavy components that should be loaded on demand
export const ChartContainer = lazy(() => import('./components/ui/chart').then(m => ({ default: m.ChartContainer })));
export const Table = lazy(() => import('./components/ui/table').then(m => ({ default: m.Table })));
export const Command = lazy(() => import('./components/ui/command').then(m => ({ default: m.Command })));

// Advanced UI components
export const Dialog = lazy(() => import('./components/ui/dialog').then(m => ({ default: m.Dialog })));
export const Popover = lazy(() => import('./components/ui/popover').then(m => ({ default: m.Popover })));

// Utility for loading states
export { Suspense };

// Pre-configured suspense wrapper
export const LazyComponentWrapper = ({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) => {
  return React.createElement(
    Suspense,
    { fallback: fallback || React.createElement('div', {}, 'Loading...') },
    children,
  );
};
