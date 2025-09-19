import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../utils/cn"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Icon } from "../../icons/src/Icon"

const timePickerVariants = cva(
  "flex h-9 w-full rounded-md border border-[var(--ds-color-neutral-400)] bg-[var(--ds-color-bg-canvas)] px-3 py-1 text-sm text-[var(--ds-color-text-primary)] shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--ds-color-text-muted)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--ds-color-intent-primary)] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-[var(--ds-color-neutral-400)]",
        destructive: "border-[var(--ds-color-intent-destructive)] focus-visible:ring-[var(--ds-color-intent-destructive)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface TimePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>,
    VariantProps<typeof timePickerVariants> {
  value?: string
  onTimeChange?: (time: string) => void
  format?: '12' | '24'
  minuteStep?: number
  disabled?: boolean
  placeholder?: string
}

const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  ({ className, variant, value, onTimeChange, format = '12', minuteStep = 15, disabled, placeholder = "Select time", ...props }, ref) => {
    const [open, setOpen] = React.useState(false)
    const [selectedHour, setSelectedHour] = React.useState<number>(9)
    const [selectedMinute, setSelectedMinute] = React.useState<number>(0)
    const [selectedPeriod, setSelectedPeriod] = React.useState<'AM' | 'PM'>('AM')

    const formatTime = React.useCallback((hour: number, minute: number, period?: 'AM' | 'PM') => {
      if (format === '24') {
        return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      } else {
        return `${hour}:${minute.toString().padStart(2, '0')} ${period}`
      }
    }, [format])

    React.useEffect(() => {
      if (value) {
        const timeMatch = value.match(/^(\d{1,2}):(\d{2})(?:\s?(AM|PM))?$/)
        if (timeMatch) {
          const [, hourStr, minuteStr, period] = timeMatch
          const hour = parseInt(hourStr, 10)
          const minute = parseInt(minuteStr, 10)
          
          setSelectedHour(hour)
          setSelectedMinute(minute)
          if (period) {
            setSelectedPeriod(period as 'AM' | 'PM')
          }
        }
      }
    }, [value])

    const handleTimeSelect = React.useCallback((hour: number, minute: number, period?: 'AM' | 'PM') => {
      setSelectedHour(hour)
      setSelectedMinute(minute)
      if (period) {
        setSelectedPeriod(period)
      }
      
      const timeString = formatTime(hour, minute, period)
      onTimeChange?.(timeString)
      setOpen(false)
    }, [formatTime, onTimeChange])

    const generateHours = () => {
      if (format === '24') {
        return Array.from({ length: 24 }, (_, i) => i)
      } else {
        return Array.from({ length: 12 }, (_, i) => i + 1)
      }
    }

    const generateMinutes = () => {
      return Array.from({ length: 60 / minuteStep }, (_, i) => i * minuteStep)
    }

    const displayValue = value || formatTime(selectedHour, selectedMinute, format === '12' ? selectedPeriod : undefined)

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              timePickerVariants({ variant }),
              "justify-between font-normal",
              !value && "text-[var(--ds-color-text-muted)]",
              className
            )}
            disabled={disabled}
          >
            {displayValue}
            <Icon name="infotimer" size={16} color="currentColor" className="ml-auto opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex">
            {/* Hours */}
            <div className="flex flex-col">
              <div className="px-3 py-2 text-sm font-medium text-[var(--ds-color-text-muted)] border-b border-[var(--ds-color-neutral-400)]">
                Hour
              </div>
              <div className="max-h-48 overflow-y-auto">
                {generateHours().map((hour) => (
                  <button
                    key={hour}
                    onClick={() => handleTimeSelect(hour, selectedMinute, format === '12' ? selectedPeriod : undefined)}
                    className={cn(
                      "w-16 px-3 py-2 text-sm hover:bg-[var(--ds-color-bg-surface)] text-center",
                      selectedHour === hour && "bg-[var(--ds-color-intent-primary)] text-[var(--ds-color-bg-canvas)] hover:bg-[var(--ds-color-intent-primary)]"
                    )}
                  >
                    {format === '24' ? hour.toString().padStart(2, '0') : hour}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Minutes */}
            <div className="flex flex-col border-l border-[var(--ds-color-neutral-400)]">
              <div className="px-3 py-2 text-sm font-medium text-[var(--ds-color-text-muted)] border-b border-[var(--ds-color-neutral-400)]">
                Min
              </div>
              <div className="max-h-48 overflow-y-auto">
                {generateMinutes().map((minute) => (
                  <button
                    key={minute}
                    onClick={() => handleTimeSelect(selectedHour, minute, format === '12' ? selectedPeriod : undefined)}
                    className={cn(
                      "w-16 px-3 py-2 text-sm hover:bg-[var(--ds-color-bg-surface)] text-center",
                      selectedMinute === minute && "bg-[var(--ds-color-intent-primary)] text-[var(--ds-color-bg-canvas)] hover:bg-[var(--ds-color-intent-primary)]"
                    )}
                  >
                    {minute.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>
            
            {/* AM/PM */}
            {format === '12' && (
              <div className="flex flex-col border-l border-[var(--ds-color-neutral-400)]">
                <div className="px-3 py-2 text-sm font-medium text-[var(--ds-color-text-muted)] border-b border-[var(--ds-color-neutral-400)]">
                  Period
                </div>
                <div className="flex flex-col">
                  {(['AM', 'PM'] as const).map((period) => (
                    <button
                      key={period}
                      onClick={() => handleTimeSelect(selectedHour, selectedMinute, period)}
                      className={cn(
                        "w-16 px-3 py-2 text-sm hover:bg-[var(--ds-color-bg-surface)] text-center",
                        selectedPeriod === period && "bg-[var(--ds-color-intent-primary)] text-[var(--ds-color-bg-canvas)] hover:bg-[var(--ds-color-intent-primary)]"
                      )}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="p-3 border-t border-[var(--ds-color-neutral-400)]">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={() => handleTimeSelect(selectedHour, selectedMinute, format === '12' ? selectedPeriod : undefined)}
                className="flex-1"
              >
                Set Time
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  }
)
TimePicker.displayName = "TimePicker"

export { TimePicker, type TimePickerProps }