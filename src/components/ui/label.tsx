import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '../../utils/cn';
import { Label as TypographyLabel } from './typography';

function Label({
  className,
  children,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <TypographyLabel
      as={LabelPrimitive.Root as any}
      data-slot="label"
      className={cn(
        'flex items-center gap-1 text-black leading-none select-none cursor-pointer group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </TypographyLabel>
  );
}

export { Label };
