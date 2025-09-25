import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../utils/cn"
import { Button } from "./button"

// Calendar component interfaces
export interface CalendarProps {
  className?: string
  selected?: Date
  onSelect?: (date: Date) => void
  month?: Date
  onMonthChange?: (month: Date) => void
  disabled?: (date: Date) => boolean
  showOutsideDays?: boolean
  mode?: "single" | "multiple" | "range"
  multiple?: Date[]
  range?: { from: Date; to?: Date }
}

// Utility functions
const getDaysInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

const getFirstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
}

const isSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

const isToday = (date: Date) => {
  const today = new Date()
  return isSameDay(date, today)
}

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({
    className,
    selected,
    onSelect,
    month = new Date(),
    onMonthChange,
    disabled,
    showOutsideDays = false,
    mode = "single",
    ...props
  }, ref) => {
    const [currentMonth, setCurrentMonth] = React.useState(month)

    const handlePrevMonth = () => {
      const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
      setCurrentMonth(newMonth)
      onMonthChange?.(newMonth)
    }

    const handleNextMonth = () => {
      const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
      setCurrentMonth(newMonth)
      onMonthChange?.(newMonth)
    }

    const handleDateSelect = (date: Date) => {
      if (disabled?.(date)) return
      onSelect?.(date)
    }

    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth)
    
    // Previous month days
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    const daysInPrevMonth = getDaysInMonth(prevMonth)
    
    const days = []
    
    // Previous month's trailing days
    if (showOutsideDays) {
      for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        const date = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), daysInPrevMonth - i)
        days.push({ date, isOutside: true })
      }
    } else {
      for (let i = 0; i < firstDayOfMonth; i++) {
        days.push({ date: null, isOutside: true })
      }
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      days.push({ date, isOutside: false })
    }
    
    // Next month's leading days
    const remainingCells = 42 - days.length
    if (showOutsideDays) {
      const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
      for (let day = 1; day <= remainingCells; day++) {
        const date = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), day)
        days.push({ date, isOutside: true })
      }
    }

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return (
      <div
        ref={ref}
        className={cn(
          "p-4 bg-[var(--ds-color-bg-canvas)] border border-[var(--ds-color-neutral-300)] rounded-lg shadow-sm",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrevMonth}
            className="p-1 h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="font-semibold text-[var(--ds-color-text-primary)] font-primary">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNextMonth}
            className="p-1 h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-[var(--ds-color-text-muted)] font-secondary py-2"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map(({ date, isOutside }, index) => {
            if (!date) {
              return <div key={index} className="h-8" />
            }

            const isSelected = selected && isSameDay(date, selected)
            const isTodayDate = isToday(date)
            const isDisabled = disabled?.(date)

            return (
              <button
                key={date.toISOString()}
                onClick={() => handleDateSelect(date)}
                disabled={isDisabled}
                className={cn(
                  "h-8 w-8 text-sm font-secondary rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ds-color-intent-primary)] focus:ring-offset-2",
                  {
                    // Outside days
                    "text-[var(--ds-color-text-muted)] hover:bg-[var(--ds-color-bg-surface)]": isOutside,
                    // Regular days
                    "text-[var(--ds-color-text-primary)] hover:bg-[var(--ds-color-bg-surface)]": !isOutside && !isSelected && !isTodayDate,
                    // Today
                    "bg-[var(--ds-color-bg-surface)] text-[var(--ds-color-text-primary)] font-semibold": isTodayDate && !isSelected,
                    // Selected
                    "bg-[var(--ds-color-intent-primary] text-[var(--ds-color-bg-canvas)] font-semibold": isSelected,
                    // Disabled
                    "opacity-50 cursor-not-allowed": isDisabled,
                  }
                )}
              >
                {date.getDate()}
              </button>
            )
          })}
        </div>
      </div>
    )
  }
)

Calendar.displayName = "Calendar"

export { Calendar }

// Default export for lazy loading
export default Calendar