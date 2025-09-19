/**
 * Lazy-loaded components for optimal performance
 *
 * Heavy components are loaded on-demand to reduce initial bundle size
 */

import React, { Suspense, lazy, ComponentType } from 'react';

// Loading fallback component
const LoadingFallback = ({ name = 'Component' }: { name?: string }) => (
  <div className="flex items-center justify-center p-8">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
      <p className="text-sm text-muted-foreground">Loading {name}...</p>
    </div>
  </div>
);

// Error boundary for lazy components
class LazyErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="text-destructive p-4">
            Failed to load component. Please refresh the page.
          </div>
        )
      );
    }

    return this.props.children;
  }
}

/**
 * Higher-order component for lazy loading with error boundary
 */
function withLazyLoading<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  componentName?: string
) {
  const LazyComponent = lazy(importFn);

  return (props: React.ComponentProps<T>) => (
    <LazyErrorBoundary>
      <Suspense fallback={<LoadingFallback name={componentName} />}>
        <LazyComponent {...props} />
      </Suspense>
    </LazyErrorBoundary>
  );
}

// Lazy-loaded heavy components
// These components are only loaded when actually used

/**
 * Chart component - Heavy due to recharts dependency
 * ~50KB gzipped
 */
export const LazyChart = withLazyLoading(
  () => import(/* webpackChunkName: "chart" */ '../../ui/chart'),
  'Chart'
);

/**
 * Rich Table component - Heavy due to virtualization and features
 * ~30KB gzipped
 */
export const LazyTable = withLazyLoading(
  () => import(/* webpackChunkName: "table" */ '../../ui/table'),
  'Table'
);

/**
 * Calendar component - Heavy due to date logic
 * ~25KB gzipped
 */
export const LazyCalendar = withLazyLoading(
  () => import(/* webpackChunkName: "calendar" */ '../../ui/calendar'),
  'Calendar'
);

// NOTE: The following components are commented out as they don't exist yet
// Uncomment when implementing these components

// /**
//  * Code Editor component - Heavy due to syntax highlighting
//  * ~40KB gzipped
//  */
// export const LazyCodeEditor = withLazyLoading(
//   () => import(/* webpackChunkName: "code-editor" */ '../../ui/code-editor'),
//   'Code Editor'
// );

// /**
//  * File Upload component - Heavy due to drag-drop and preview logic
//  * ~20KB gzipped
//  */
// export const LazyFileUpload = withLazyLoading(
//   () => import(/* webpackChunkName: "file-upload" */ '../../ui/file-upload'),
//   'File Upload'
// );

// /**
//  * Rich Text Editor - Heavy due to editing capabilities
//  * ~45KB gzipped
//  */
// export const LazyRichTextEditor = withLazyLoading(
//   () => import(/* webpackChunkName: "rich-text-editor" */ '../../ui/rich-text-editor'),
//   'Rich Text Editor'
// );

// Preload utilities for critical components
export const preloadChart = () => import('../../ui/chart');
export const preloadTable = () => import('../../ui/table');
export const preloadCalendar = () => import('../../ui/calendar');

// Utility to preload components based on route or user action
export function preloadComponent(component: 'chart' | 'table' | 'calendar') {
  switch (component) {
    case 'chart':
      return preloadChart();
    case 'table':
      return preloadTable();
    case 'calendar':
      return preloadCalendar();
    default:
      return Promise.resolve();
  }
}

// Export regular components for backward compatibility with deprecation warning
let hasWarned = false;

function createDeprecatedExport<T extends ComponentType<any>>(
  LazyComponent: T,
  componentName: string
): T {
  return ((props: any) => {
    if (!hasWarned && process.env.NODE_ENV === 'development') {
      console.warn(
        `Direct import of ${componentName} is deprecated and will increase bundle size. ` +
        `Please import from '@comcast/design-system/lazy' instead.`
      );
      hasWarned = true;
    }
    return <LazyComponent {...props} />;
  }) as T;
}

// Re-export with deprecation warnings
export const Chart = createDeprecatedExport(LazyChart, 'Chart');
export const Table = createDeprecatedExport(LazyTable, 'Table');
export const Calendar = createDeprecatedExport(LazyCalendar, 'Calendar');