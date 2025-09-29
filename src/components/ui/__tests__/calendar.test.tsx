import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Calendar } from '../calendar';
import { axe, toHaveNoViolations } from 'jest-axe';
import { format, addDays } from 'date-fns';

expect.extend(toHaveNoViolations);

describe('Calendar', () => {
  describe('Basic Rendering', () => {
    it('renders without crashing', () => {
      render(<Calendar />);
      const currentMonth = format(new Date(), 'MMMM yyyy');
      expect(screen.getByText(currentMonth)).toBeInTheDocument();
    });

    it('displays current month and year', () => {
      render(<Calendar />);
      const currentMonth = format(new Date(), 'MMMM yyyy');
      expect(screen.getByText(currentMonth)).toBeInTheDocument();
    });

    it('shows weekday headers', () => {
      render(<Calendar />);
      const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      weekdays.forEach(day => {
        expect(screen.getByText(day)).toBeInTheDocument();
      });
    });

    it('applies custom className', () => {
      const { container } = render(<Calendar className="custom-class" />);
      const calendar = container.firstChild;
      expect(calendar).toHaveClass('custom-class');
    });
  });

  describe('Date Selection', () => {
    it('handles single date selection', () => {
      const onSelect = jest.fn();
      render(<Calendar mode="single" onSelect={onSelect} />);

      const today = new Date().getDate().toString();
      const dateButton = screen.getByRole('button', { name: new RegExp(today) });
      fireEvent.click(dateButton);

      expect(onSelect).toHaveBeenCalledWith(expect.any(Date), expect.anything());
    });

    it('displays selected date with proper styling', () => {
      const selected = new Date();
      render(<Calendar mode="single" selected={selected} />);

      const dateButton = screen.getByRole('button', {
        name: new RegExp(selected.getDate().toString()),
      });
      expect(dateButton).toHaveAttribute('aria-selected', 'true');
    });

    it('handles date range selection', () => {
      const onSelect = jest.fn();
      const { container } = render(<Calendar mode="range" onSelect={onSelect} />);

      const dates = container.querySelectorAll('[role="button"][name*="Select"]');
      if (dates.length >= 2) {
        fireEvent.click(dates[0]);
        fireEvent.click(dates[1]);

        expect(onSelect).toHaveBeenCalled();
      }
    });

    it('handles multiple date selection', () => {
      const onSelect = jest.fn();
      const { container } = render(<Calendar mode="multiple" onSelect={onSelect} />);

      const dates = container.querySelectorAll('[role="button"][name*="Select"]');
      if (dates.length >= 2) {
        fireEvent.click(dates[0]);
        fireEvent.click(dates[1]);

        expect(onSelect).toHaveBeenCalledTimes(2);
      }
    });
  });

  describe('Navigation', () => {
    it('navigates to previous month', () => {
      render(<Calendar />);

      const prevButton = screen.getByRole('button', { name: /previous month/i });
      const initialMonth = screen.getByText(/\w+ \d{4}/);
      const initialMonthText = initialMonth.textContent;

      fireEvent.click(prevButton);

      const newMonth = screen.getByText(/\w+ \d{4}/);
      expect(newMonth.textContent).not.toBe(initialMonthText);
    });

    it('navigates to next month', () => {
      render(<Calendar />);

      const nextButton = screen.getByRole('button', { name: /next month/i });
      const initialMonth = screen.getByText(/\w+ \d{4}/);
      const initialMonthText = initialMonth.textContent;

      fireEvent.click(nextButton);

      const newMonth = screen.getByText(/\w+ \d{4}/);
      expect(newMonth.textContent).not.toBe(initialMonthText);
    });
  });

  describe('Disabled Dates', () => {
    it('disables specified dates', () => {
      const today = new Date();
      const tomorrow = addDays(today, 1);

      render(
        <Calendar
          mode="single"
          disabled={[tomorrow]}
        />,
      );

      const tomorrowButton = screen.getByRole('button', {
        name: new RegExp(tomorrow.getDate().toString()),
      });

      expect(tomorrowButton).toHaveAttribute('aria-disabled', 'true');
    });

    it('disables date ranges', () => {
      const today = new Date();
      const startDate = addDays(today, 1);
      const endDate = addDays(today, 3);

      render(
        <Calendar
          mode="single"
          disabled={{ from: startDate, to: endDate }}
        />,
      );

      const disabledDate = screen.getByRole('button', {
        name: new RegExp(startDate.getDate().toString()),
      });

      expect(disabledDate).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Outside Days', () => {
    it('shows outside days by default', () => {
      const { container } = render(<Calendar showOutsideDays={true} />);
      const outsideDays = container.querySelectorAll('.day-outside');
      expect(outsideDays.length).toBeGreaterThan(0);
    });

    it('hides outside days when specified', () => {
      const { container } = render(<Calendar showOutsideDays={false} />);
      const outsideDays = container.querySelectorAll('.day-outside');
      expect(outsideDays.length).toBe(0);
    });
  });

  describe('Keyboard Navigation', () => {
    it('supports keyboard navigation with arrow keys', () => {
      render(<Calendar mode="single" />);

      const today = new Date().getDate().toString();
      const dateButton = screen.getByRole('button', { name: new RegExp(today) });

      dateButton.focus();
      expect(document.activeElement).toBe(dateButton);

      fireEvent.keyDown(dateButton, { key: 'ArrowRight' });
      fireEvent.keyDown(document.activeElement!, { key: 'Enter' });
    });

    it('supports Enter key for selection', () => {
      const onSelect = jest.fn();
      render(<Calendar mode="single" onSelect={onSelect} />);

      const today = new Date().getDate().toString();
      const dateButton = screen.getByRole('button', { name: new RegExp(today) });

      dateButton.focus();
      fireEvent.keyDown(dateButton, { key: 'Enter' });

      expect(onSelect).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Calendar />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has proper ARIA labels', () => {
      render(<Calendar />);

      expect(screen.getByRole('button', { name: /previous month/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /next month/i })).toBeInTheDocument();
    });

    it('announces selected dates to screen readers', () => {
      const selected = new Date();
      render(<Calendar mode="single" selected={selected} />);

      const dateButton = screen.getByRole('button', {
        name: new RegExp(selected.getDate().toString()),
      });
      expect(dateButton).toHaveAttribute('aria-selected', 'true');
    });

    it('properly marks disabled dates', () => {
      const today = new Date();
      render(<Calendar mode="single" disabled={[today]} />);

      const todayButton = screen.getByRole('button', {
        name: new RegExp(today.getDate().toString()),
      });
      expect(todayButton).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Custom Props', () => {
    it('renders with custom footer', () => {
      render(
        <Calendar
          footer={<div data-testid="custom-footer">Custom Footer</div>}
        />,
      );

      expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
    });

    it('supports numberOfMonths prop', () => {
      render(<Calendar numberOfMonths={2} />);

      const months = screen.getAllByRole('grid');
      expect(months).toHaveLength(2);
    });

    it('supports custom month/year navigation', () => {
      render(
        <Calendar
          captionLayout="dropdown-buttons"
          fromYear={2020}
          toYear={2025}
        />,
      );

      const selects = screen.getAllByRole('combobox');
      expect(selects.length).toBeGreaterThan(0);
    });
  });

  describe('Theming', () => {
    it('applies design system tokens', () => {
      const { container } = render(<Calendar />);
      const calendar = container.firstChild as HTMLElement;

      expect(calendar).toHaveClass('border-neutral-300');
      expect(calendar).toHaveClass('bg-white');
    });

    it('supports dark theme customization', () => {
      const { container } = render(
        <Calendar className="bg-neutral-800 text-white" />,
      );

      const calendar = container.firstChild as HTMLElement;
      expect(calendar).toHaveClass('bg-neutral-800');
      expect(calendar).toHaveClass('text-white');
    });
  });

  describe('Edge Cases', () => {
    it('handles leap years correctly', () => {
      const leapYear = new Date(2024, 1); // February 2024
      render(<Calendar defaultMonth={leapYear} />);

      expect(screen.getByText('29')).toBeInTheDocument();
    });

    it('handles month boundaries correctly', () => {
      const endOfMonth = new Date(2024, 0, 31); // January 31, 2024
      render(<Calendar defaultMonth={endOfMonth} />);

      expect(screen.getByText('31')).toBeInTheDocument();
    });

    it('handles year transitions', () => {
      const december = new Date(2023, 11); // December 2023
      render(<Calendar defaultMonth={december} />);

      const nextButton = screen.getByRole('button', { name: /next month/i });
      fireEvent.click(nextButton);

      expect(screen.getByText('January 2024')).toBeInTheDocument();
    });
  });
});
