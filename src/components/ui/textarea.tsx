import * as React from 'react';

import { cn } from '../../utils/cn';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  error?: boolean;
  showCount?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, showCount, value, maxLength, minLength, ...props }, ref) => {
    const [charCount, setCharCount] = React.useState(
      typeof value === 'string' ? value.length : 0
    );

    React.useEffect(() => {
      if (typeof value === 'string') {
        setCharCount(value.length);
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      props.onChange?.(e);
    };

    return (
      <div className="relative w-full">
        <textarea
          ref={ref}
          data-slot="textarea"
          className={cn(
            'flex w-full rounded border border-[var(--ds-color-neutral-400)] bg-white px-[var(--ds-spacing-3)] py-[var(--ds-spacing-2)] font-secondary text-[var(--ds-color-text-primary)] transition-colors placeholder:text-[var(--ds-color-text-muted)] placeholder:font-normal focus-visible:outline-none focus-visible:border-[var(--ds-color-intent-primary)] focus-visible:ring-2 focus-visible:ring-[var(--ds-color-intent-primary)] focus-visible:ring-offset-2 hover:border-[var(--ds-color-text-primary)] disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--ds-color-bg-muted)] overflow-hidden placeholder:overflow-hidden placeholder:text-ellipsis placeholder:leading-[130%] placeholder:tracking-normal selection:bg-[var(--ds-color-text-muted)]',
            error && 'border-[var(--ds-color-intent-destructive)] focus-visible:ring-[var(--ds-color-intent-destructive)]',
            showCount && maxLength && 'pb-8',
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
          value={value}
          maxLength={maxLength}
          minLength={minLength}
          onChange={handleChange}
          {...props}
        />
        {showCount && maxLength && (
          <div className="absolute bottom-2 right-2 text-xs text-[var(--ds-color-text-muted)]">
            {charCount}/{maxLength}
          </div>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
