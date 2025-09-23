import * as React from 'react';

/**
 * Slot utility for component composition
 * Based on Radix UI's slot pattern
 * Allows components to merge their props with child components
 */
export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        ...children.props,
        ref: ref || (children as any).ref,
      });
    }
    return null;
  },
);

Slot.displayName = 'Slot';

/**
 * Utility to merge props with slot children
 * Useful for components that need to pass props to their children
 */
export function mergeProps<T extends Record<string, any>>(
  ...objects: (T | undefined | null)[]
): T {
  return objects.reduce((acc, obj) => {
    if (!obj) return acc;
    return { ...acc, ...obj };
  }, {} as T);
}

/**
 * Utility to forward refs with proper typing
 * Helps with component ref forwarding
 */
export function forwardRef<T, P>(
  Component: React.ForwardRefRenderFunction<T, React.PropsWithoutRef<P>>,
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
> {
  return React.forwardRef(Component as any) as any;
}
