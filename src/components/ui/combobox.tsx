'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '../../utils/cn';
import { Button } from './button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './popover';

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  width?: string;
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = 'Select option...',
  searchPlaceholder = 'Search...',
  emptyMessage = 'No option found.',
  className,
  disabled = false,
  error = false,
  width = 'w-[200px]',
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(value || '');

  const currentValue = value !== undefined ? value : internalValue;
  const handleValueChange = onValueChange || setInternalValue;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            width,
            'justify-between font-secondary',
            'border-neutral-400', // Form input border per design system
            'hover:border-neutral-600 focus:border-primary-500',
            'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
            error && 'border-[var(--ds-color-intent-destructive)] focus:border-[var(--ds-color-intent-destructive)] focus-visible:ring-[var(--ds-color-intent-destructive)]',
            disabled && 'cursor-not-allowed opacity-60',
            className,
          )}
        >
          <span className="truncate">
            {currentValue
              ? options.find((option) => option.value === currentValue)?.label
              : placeholder}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          width,
          'p-0 border-neutral-300 shadow-md', // Structural element border per design system
          'bg-white',
        )}
      >
        <Command className="bg-white">
          <CommandInput
            placeholder={searchPlaceholder}
            className={cn(
              'h-9 font-secondary text-neutral-900',
              'border-0 focus:ring-0', // Remove inner border as popover handles it
              'placeholder:text-neutral-500',
            )}
          />
          <CommandList>
            <CommandEmpty className="py-6 text-center text-sm text-neutral-700 font-secondary">
              {emptyMessage}
            </CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  onSelect={(selectedValue) => {
                    const newValue = selectedValue === currentValue ? '' : selectedValue;
                    handleValueChange(newValue);
                    setOpen(false);
                  }}
                  className={cn(
                    // Base styles matching DropdownMenu pattern
                    'relative flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                    'cursor-pointer select-none outline-none font-secondary text-neutral-900',
                    // Interactive states matching DropdownMenu
                    'focus:bg-neutral-100 hover:bg-neutral-50 active:bg-neutral-100',
                    'data-[highlighted]:bg-neutral-100',
                    // Selected state
                    'aria-selected:bg-primary-50 aria-selected:text-neutral-900',
                    // Disabled state
                    'disabled:pointer-events-none disabled:opacity-50 disabled:text-neutral-400',
                    option.disabled && 'cursor-not-allowed opacity-50 text-neutral-400',
                  )}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4 text-primary-600',
                      currentValue === option.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  <span className="truncate">{option.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

Combobox.displayName = 'Combobox';

export { Combobox as default };
