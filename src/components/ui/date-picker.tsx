'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import type { DateRange } from 'react-day-picker';

import { cn } from '../../utils/cn';
import { Button } from './button';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

export interface DatePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  buttonVariant?: 'outline' | 'ghost' | 'secondary';
  showIcon?: boolean;
  formatString?: string;
  calendarProps?: React.ComponentProps<typeof Calendar>;
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = 'Pick a date',
  disabled = false,
  className,
  buttonVariant = 'outline',
  showIcon = true,
  formatString = 'PPP',
  calendarProps,
}: DatePickerProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(date);
  const [isOpen, setIsOpen] = React.useState(false);

  const currentDate = date !== undefined ? date : internalDate;
  const handleDateChange = onDateChange || setInternalDate;

  const handleDateSelect = (selectedDate: Date | undefined) => {
    handleDateChange(selectedDate);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={buttonVariant}
          disabled={disabled}
          className={cn(
            'w-[280px] justify-start text-left font-secondary',
            'border-neutral-400', // Form input border per design system
            'hover:border-neutral-600 focus:border-primary-500',
            'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
            !currentDate && 'text-neutral-500',
            disabled && 'cursor-not-allowed opacity-60',
            className,
          )}
        >
          {showIcon && <CalendarIcon className="mr-2 h-4 w-4" />}
          {currentDate ? (
            format(currentDate, formatString)
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={currentDate}
          onSelect={handleDateSelect}
          initialFocus
          {...calendarProps}
        />
      </PopoverContent>
    </Popover>
  );
}

export interface DateRangePickerProps {
  dateRange?: DateRange;
  onDateRangeChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  buttonVariant?: 'outline' | 'ghost' | 'secondary';
  showIcon?: boolean;
  numberOfMonths?: number;
  calendarProps?: React.ComponentProps<typeof Calendar>;
}

export function DateRangePicker({
  dateRange,
  onDateRangeChange,
  placeholder = 'Pick a date range',
  disabled = false,
  className,
  buttonVariant = 'outline',
  showIcon = true,
  numberOfMonths = 2,
  calendarProps,
}: DateRangePickerProps) {
  const [internalRange, setInternalRange] = React.useState<DateRange | undefined>(dateRange);
  const [isOpen, setIsOpen] = React.useState(false);

  const currentRange = dateRange !== undefined ? dateRange : internalRange;
  const handleRangeChange = onDateRangeChange || setInternalRange;

  const formatDateRange = (range: DateRange | undefined) => {
    if (!range?.from) return placeholder;
    if (!range.to) return format(range.from, 'LLL dd, y');
    return `${format(range.from, 'LLL dd, y')} - ${format(range.to, 'LLL dd, y')}`;
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={buttonVariant}
          disabled={disabled}
          className={cn(
            'w-[300px] justify-start text-left font-secondary',
            'border-neutral-400', // Form input border per design system
            'hover:border-neutral-600 focus:border-primary-500',
            'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
            !currentRange?.from && 'text-neutral-500',
            disabled && 'cursor-not-allowed opacity-60',
            className,
          )}
        >
          {showIcon && <CalendarIcon className="mr-2 h-4 w-4" />}
          {formatDateRange(currentRange)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={currentRange}
          onSelect={handleRangeChange}
          numberOfMonths={numberOfMonths}
          initialFocus
          {...calendarProps}
        />
      </PopoverContent>
    </Popover>
  );
}

export interface DateOfBirthPickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  buttonVariant?: 'outline' | 'ghost' | 'secondary';
  showIcon?: boolean;
  fromYear?: number;
  toYear?: number;
}

export function DateOfBirthPicker({
  date,
  onDateChange,
  placeholder = 'Pick your date of birth',
  disabled = false,
  className,
  buttonVariant = 'outline',
  showIcon = true,
  fromYear = 1900,
  toYear = new Date().getFullYear(),
}: DateOfBirthPickerProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(date);
  const [isOpen, setIsOpen] = React.useState(false);

  const currentDate = date !== undefined ? date : internalDate;
  const handleDateChange = onDateChange || setInternalDate;

  const handleDateSelect = (selectedDate: Date | undefined) => {
    handleDateChange(selectedDate);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={buttonVariant}
          disabled={disabled}
          className={cn(
            'w-[280px] justify-start text-left font-secondary',
            'border-neutral-400', // Form input border per design system
            'hover:border-neutral-600 focus:border-primary-500',
            'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
            !currentDate && 'text-neutral-500',
            disabled && 'cursor-not-allowed opacity-60',
            className,
          )}
        >
          {showIcon && <CalendarIcon className="mr-2 h-4 w-4" />}
          {currentDate ? (
            format(currentDate, 'PPP')
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={currentDate}
          onSelect={handleDateSelect}
          captionLayout="dropdown"
          fromYear={fromYear}
          toYear={toYear}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

DatePicker.displayName = 'DatePicker';
DateRangePicker.displayName = 'DateRangePicker';
DateOfBirthPicker.displayName = 'DateOfBirthPicker';

export { DatePicker as default };
