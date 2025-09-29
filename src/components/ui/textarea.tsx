import * as React from 'react';

import { cn } from '../../utils/cn';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        data-slot="textarea"
        className={cn(
          'flex w-full rounded border border-[var(--ds-color-neutral-400)] bg-white px-[var(--ds-spacing-3)] py-[var(--ds-spacing-2)] font-secondary text-[var(--ds-color-text-primary)] transition-colors placeholder:text-[var(--ds-color-text-muted)] placeholder:font-normal focus-visible:outline-none focus-visible:border-[var(--ds-color-intent-primary)] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2 hover:border-[var(--ds-color-text-primary)] disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--ds-color-bg-muted)] overflow-hidden placeholder:overflow-hidden placeholder:text-ellipsis placeholder:leading-[130%] placeholder:tracking-normal selection:bg-[var(--ds-color-text-muted)]',
          error && 'border-[var(--ds-color-intent-destructive)] focus-visible:ring-[var(--ds-color-intent-destructive)]',
          className,
        )}
        style={{
          fontSize: 'var(--ds-font-size-sm)',
          lineHeight: '130%',
          fontWeight: '400',
          letterSpacing: '0',
          minHeight: 'var(--ds-spacing-20)',
          ...props.style,
        }}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
