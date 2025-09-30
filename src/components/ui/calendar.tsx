'use client';

import * as React from 'react';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker';

import { cn } from '../../utils/cn';
import { Button, buttonVariants } from './button';

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'bg-white p-3 [--cell-size:2.25rem] border border-neutral-300 rounded-lg shadow-sm',
        '[--rdp-accent-color:var(--ds-color-primary-500)]',
        '[--rdp-background-color:var(--ds-color-primary-50)]',
        '[--rdp-outline:2px_solid_var(--ds-color-primary-500)]',
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn(
          'relative flex flex-col gap-4 md:flex-row',
          defaultClassNames.months,
        ),
        month: cn('flex w-full flex-col gap-4', defaultClassNames.month),
        nav: cn(
          'absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1',
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'h-[--cell-size] w-[--cell-size] select-none p-0 opacity-70 hover:opacity-100 transition-opacity',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'h-[--cell-size] w-[--cell-size] select-none p-0 opacity-70 hover:opacity-100 transition-opacity',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium font-primary',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'relative rounded-md border border-neutral-300 shadow-sm',
          'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          'bg-white absolute inset-0 opacity-0',
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          'select-none font-medium font-primary text-neutral-900',
          captionLayout === 'label'
            ? 'text-sm'
            : 'flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5 [&>svg]:text-neutral-600',
          defaultClassNames.caption_label,
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'text-neutral-600 flex-1 select-none rounded-md text-xs font-normal uppercase tracking-wide text-center',
          defaultClassNames.weekday,
        ),
        week: cn('mt-2 flex w-full', defaultClassNames.week),
        week_number_header: cn(
          'w-[--cell-size] select-none',
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          'text-neutral-600 select-none text-xs',
          defaultClassNames.week_number,
        ),
        day: cn(
          'group/day relative aspect-square h-full w-full select-none p-0 text-center',
          '[&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md',
          defaultClassNames.day,
        ),
        range_start: cn(
          'bg-primary-50 rounded-l-md',
          defaultClassNames.range_start,
        ),
        range_middle: cn('rounded-none bg-primary-50', defaultClassNames.range_middle),
        range_end: cn('bg-primary-50 rounded-r-md', defaultClassNames.range_end),
        today: cn(
          'bg-neutral-100 text-neutral-900 font-semibold rounded-md data-[selected=true]:rounded-none',
          defaultClassNames.today,
        ),
        outside: cn(
          'text-neutral-400 opacity-50 aria-selected:text-neutral-500 aria-selected:opacity-30',
          defaultClassNames.outside,
        ),
        disabled: cn(
          'text-neutral-400 opacity-50 cursor-not-allowed',
          defaultClassNames.disabled,
        ),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return (
              <ChevronLeft className={cn('size-4', className)} {...props} />
            );
          }

          if (orientation === 'right') {
            return (
              <ChevronRight
                className={cn('size-4', className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDown className={cn('size-4', className)} {...props} />
          );
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-[--cell-size] items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'h-[--cell-size] w-[--cell-size] p-0 font-normal transition-colors duration-150',
        'hover:bg-neutral-100',
        'data-[selected-single=true]:bg-primary-500 data-[selected-single=true]:text-white data-[selected-single=true]:hover:bg-primary-600',
        'data-[range-start=true]:bg-primary-500 data-[range-start=true]:text-white data-[range-start=true]:hover:bg-primary-600',
        'data-[range-end=true]:bg-primary-500 data-[range-end=true]:text-white data-[range-end=true]:hover:bg-primary-600',
        'data-[range-middle=true]:bg-primary-50 data-[range-middle=true]:text-neutral-900',
        'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md',
        defaultClassNames.day,
        className,
      )}
      {...(props as any)}
    />
  );
}

Calendar.displayName = 'Calendar';
CalendarDayButton.displayName = 'CalendarDayButton';

export { Calendar, CalendarDayButton };
