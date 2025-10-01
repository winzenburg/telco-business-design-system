import * as React from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/button';
import { Icon } from '../Icon';
import { Card } from '../ui/card';
import type { IconName } from '../../../packages/tokens/design-system-icons-types';
import {
  Menu,
  MenuItem,
  MenuTrigger,
  MenuContent,
} from '../ui/menu';

// ============================================================================
// RESPONSIVE CONTAINER
// ============================================================================

export interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width constraint
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

  /**
   * Whether to center the container
   */
  center?: boolean;

  /**
   * Padding on mobile
   */
  mobilePadding?: 'none' | 'sm' | 'md' | 'lg';

  /**
   * Padding on desktop
   */
  desktopPadding?: 'none' | 'sm' | 'md' | 'lg';
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
} as const;

const paddingClasses = {
  none: '',
  sm: 'px-2',
  md: 'px-4',
  lg: 'px-6',
} as const;

/**
 * ResponsiveContainer - Responsive width constraint with breakpoint-aware padding
 */
export const ResponsiveContainer = React.forwardRef<HTMLDivElement, ResponsiveContainerProps>(
  (
    {
      maxWidth = 'xl',
      center = true,
      mobilePadding = 'md',
      desktopPadding = 'lg',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          maxWidthClasses[maxWidth],
          center && 'mx-auto',
          paddingClasses[mobilePadding],
          `md:${paddingClasses[desktopPadding]}`,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ResponsiveContainer.displayName = 'ResponsiveContainer';

// ============================================================================
// RESPONSIVE GRID
// ============================================================================

export interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns on mobile
   */
  mobileCols?: 1 | 2;

  /**
   * Number of columns on tablet
   */
  tabletCols?: 2 | 3 | 4;

  /**
   * Number of columns on desktop
   */
  desktopCols?: 2 | 3 | 4 | 5 | 6;

  /**
   * Gap between items
   */
  gap?: 'sm' | 'md' | 'lg';
}

const gapClasses = {
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
} as const;

/**
 * ResponsiveGrid - Flexible grid with responsive column counts
 */
export const ResponsiveGrid = React.forwardRef<HTMLDivElement, ResponsiveGridProps>(
  (
    { mobileCols = 1, tabletCols = 2, desktopCols = 3, gap = 'md', className, children, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          `grid-cols-${mobileCols}`,
          `md:grid-cols-${tabletCols}`,
          `lg:grid-cols-${desktopCols}`,
          gapClasses[gap],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ResponsiveGrid.displayName = 'ResponsiveGrid';

// ============================================================================
// RESPONSIVE TABLE
// ============================================================================

export interface ResponsiveTableColumn<T = any> {
  key: string;
  header: string;
  accessor: (row: T) => React.ReactNode;
  /**
   * Show on mobile card view
   */
  showOnMobile?: boolean;
  /**
   * Label for mobile view
   */
  mobileLabel?: string;
}

export interface ResponsiveTableProps<T = any> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Table columns
   */
  columns: ResponsiveTableColumn<T>[];

  /**
   * Table data
   */
  data: T[];

  /**
   * Breakpoint to switch to card view
   */
  mobileBreakpoint?: 'sm' | 'md' | 'lg';

  /**
   * Empty state message
   */
  emptyMessage?: string;
}

/**
 * ResponsiveTable - Transforms to card layout on mobile
 */
export function ResponsiveTable<T = any>({
  columns,
  data,
  mobileBreakpoint = 'md',
  emptyMessage = 'No data available',
  className,
  ...props
}: ResponsiveTableProps<T>) {
  const hideClass = mobileBreakpoint === 'sm' ? 'hidden sm:block' : mobileBreakpoint === 'md' ? 'hidden md:block' : 'hidden lg:block';
  const showClass = mobileBreakpoint === 'sm' ? 'block sm:hidden' : mobileBreakpoint === 'md' ? 'block md:hidden' : 'block lg:hidden';

  if (data.length === 0) {
    return (
      <div className="text-center py-12 text-[var(--ds-color-text-secondary)]">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Desktop Table View */}
      <div className={hideClass}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[var(--ds-color-neutral-300)]">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="text-left px-4 py-3 text-sm font-semibold text-[var(--ds-color-text-primary)] bg-[var(--ds-color-neutral-50)]"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-b border-[var(--ds-color-neutral-300)] hover:bg-[var(--ds-color-neutral-50)] transition-colors"
                >
                  {columns.map((column) => (
                    <td key={column.key} className="px-4 py-3 text-sm text-[var(--ds-color-text-primary)]">
                      {column.accessor(row)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className={showClass}>
        <div className="space-y-3">
          {data.map((row, rowIndex) => (
            <Card key={rowIndex} className="p-4">
              <div className="space-y-2">
                {columns
                  .filter((col) => col.showOnMobile !== false)
                  .map((column) => (
                    <div key={column.key} className="flex justify-between items-start gap-4">
                      <span className="text-sm font-medium text-[var(--ds-color-text-secondary)] min-w-[100px]">
                        {column.mobileLabel || column.header}:
                      </span>
                      <span className="text-sm text-[var(--ds-color-text-primary)] flex-1 text-right">
                        {column.accessor(row)}
                      </span>
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// RESPONSIVE NAVIGATION
// ============================================================================

export interface ResponsiveNavItem {
  id: string;
  label: string;
  icon?: IconName;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface ResponsiveNavigationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /**
   * Navigation items
   */
  items: ResponsiveNavItem[];

  /**
   * Breakpoint to switch to dropdown
   */
  mobileBreakpoint?: 'sm' | 'md' | 'lg';

  /**
   * Dropdown trigger label
   */
  dropdownLabel?: string;
}

/**
 * ResponsiveNavigation - Tabs on desktop, dropdown on mobile
 */
export const ResponsiveNavigation = React.forwardRef<HTMLElement, ResponsiveNavigationProps>(
  ({ items, mobileBreakpoint = 'md', dropdownLabel = 'Menu', className, ...props }, ref) => {
    const hideClass = mobileBreakpoint === 'sm' ? 'hidden sm:flex' : mobileBreakpoint === 'md' ? 'hidden md:flex' : 'hidden lg:flex';
    const showClass = mobileBreakpoint === 'sm' ? 'flex sm:hidden' : mobileBreakpoint === 'md' ? 'flex md:hidden' : 'flex lg:hidden';

    const activeItem = items.find((item) => item.active);

    return (
      <nav ref={ref} className={cn('w-full', className)} {...props}>
        {/* Desktop Tab View */}
        <div className={cn(hideClass, 'gap-1 border-b border-[var(--ds-color-neutral-300)]')}>
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={item.onClick}
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium transition-colors relative',
                item.active
                  ? 'text-[var(--ds-color-blue-600)] border-b-2 border-[var(--ds-color-blue-600)]'
                  : 'text-[var(--ds-color-text-secondary)] hover:text-[var(--ds-color-text-primary)] hover:bg-[var(--ds-color-neutral-50)]',
              )}
            >
              {item.icon && <Icon name={item.icon as any} size={16} className="mr-2" />}
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown View */}
        <div className={showClass}>
          <Menu>
            <MenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span className="flex items-center">
                  {activeItem?.icon && <Icon name={activeItem.icon as any} size={16} className="mr-2" />}
                  {activeItem?.label || dropdownLabel}
                </span>
                <Icon name="chevron" size={16} className="ml-2" />
              </Button>
            </MenuTrigger>
            <MenuContent className="w-full min-w-[200px]">
              {items.map((item) => (
                <MenuItem key={item.id} onClick={item.onClick} className={item.active ? 'bg-[var(--ds-color-blue-50)]' : ''}>
                  {item.icon && <Icon name={item.icon as any} size={16} />}
                  <span>{item.label}</span>
                </MenuItem>
              ))}
            </MenuContent>
          </Menu>
        </div>
      </nav>
    );
  },
);

ResponsiveNavigation.displayName = 'ResponsiveNavigation';

// ============================================================================
// STICKY HEADER
// ============================================================================

export interface StickyHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to show shadow when stuck
   */
  showShadow?: boolean;

  /**
   * Z-index for stacking
   */
  zIndex?: number;

  /**
   * Offset from top
   */
  offsetTop?: number;
}

/**
 * StickyHeader - Header that sticks to top on scroll
 */
export const StickyHeader = React.forwardRef<HTMLDivElement, StickyHeaderProps>(
  ({ showShadow = true, zIndex = 50, offsetTop = 0, className, children, ...props }, ref) => {
    const [isSticky, setIsSticky] = React.useState(false);
    const headerRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => headerRef.current!);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsSticky(!entry.isIntersecting);
        },
        { threshold: [1], rootMargin: `-${offsetTop + 1}px 0px 0px 0px` },
      );

      const sentinel = document.createElement('div');
      sentinel.style.height = '1px';
      sentinel.style.position = 'absolute';
      sentinel.style.top = `${offsetTop}px`;
      sentinel.style.pointerEvents = 'none';

      if (headerRef.current?.parentElement) {
        headerRef.current.parentElement.insertBefore(sentinel, headerRef.current);
        observer.observe(sentinel);
      }

      return () => {
        observer.disconnect();
        sentinel.remove();
      };
    }, [offsetTop]);

    return (
      <div
        ref={headerRef}
        className={cn(
          'sticky bg-white transition-shadow duration-200',
          showShadow && isSticky && 'shadow-md',
          className,
        )}
        style={{ top: offsetTop, zIndex }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

StickyHeader.displayName = 'StickyHeader';

// ============================================================================
// HOOKS
// ============================================================================

/**
 * Hook for detecting current breakpoint
 */
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  React.useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBreakpoint('mobile');
      } else if (width < 1024) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('desktop');
      }
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
}

/**
 * Hook for media query matching
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
