import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../src/components/ui/calendar';
import { useState } from 'react';
import CalendarDocs from './docs/Calendar.mdx';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      page: CalendarDocs,
      description: {
        component: 'A date picker component built on top of react-day-picker with design system tokens.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },  render: () => {
    const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
    const [rangeDate, setRangeDate] = useState<{ from: Date | undefined; to?: Date | undefined }>({
      from: undefined,
      to: undefined,
    });
    const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

    return (
      <div className="space-y-8 max-w-4xl">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Single Selection</h3>
          <Calendar
            mode="single"
            selected={singleDate}
            onSelect={setSingleDate}
            className="rounded-md border border-[var(--ds-color-neutral-300)]"
          />
          {singleDate && (
            <p className="text-sm text-[var(--ds-color-text-secondary)]">
              Selected: {singleDate.toLocaleDateString()}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Range Selection</h3>
          <Calendar
            mode="range"
            selected={rangeDate}
            onSelect={setRangeDate}
            numberOfMonths={2}
            className="rounded-md border border-[var(--ds-color-neutral-300)]"
          />
          {rangeDate?.from && (
            <div className="text-sm text-[var(--ds-color-text-secondary)]">
              <p>From: {rangeDate.from.toLocaleDateString()}</p>
              {rangeDate.to && <p>To: {rangeDate.to.toLocaleDateString()}</p>}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Multiple Selection</h3>
          <Calendar
            mode="multiple"
            selected={multipleDates}
            onSelect={setMultipleDates}
            className="rounded-md border border-[var(--ds-color-neutral-300)]"
          />
          {multipleDates && multipleDates.length > 0 && (
            <p className="text-sm text-[var(--ds-color-text-secondary)]">
              {multipleDates.length} date(s) selected
            </p>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Disabled Dates</h3>
          <Calendar
            mode="single"
            selected={singleDate}
            onSelect={setSingleDate}
            disabled={[
              { dayOfWeek: [0, 6] }, // Disable weekends
              new Date(2025, 0, 1),   // New Year
            ]}
            className="rounded-md border border-[var(--ds-color-neutral-300)]"
          />
          <p className="text-xs text-[var(--ds-color-text-secondary)]">
            Weekends and holidays are disabled
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Year Dropdown</h3>
          <Calendar
            mode="single"
            selected={singleDate}
            onSelect={setSingleDate}
            captionLayout="dropdown"
            fromYear={2020}
            toYear={2030}
            className="rounded-md border border-[var(--ds-color-neutral-300)]"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Size Variants</h3>
          <div className="flex gap-4 items-start flex-wrap">
            <div>
              <p className="text-xs text-[var(--ds-color-text-secondary)] mb-2">Small</p>
              <Calendar
                mode="single"
                selected={singleDate}
                onSelect={setSingleDate}
                className="rounded-md border border-[var(--ds-color-neutral-300)] [--cell-size:1.75rem] text-sm"
              />
            </div>
            <div>
              <p className="text-xs text-[var(--ds-color-text-secondary)] mb-2">Default</p>
              <Calendar
                mode="single"
                selected={singleDate}
                onSelect={setSingleDate}
                className="rounded-md border border-[var(--ds-color-neutral-300)]"
              />
            </div>
            <div>
              <p className="text-xs text-[var(--ds-color-text-secondary)] mb-2">Large</p>
              <Calendar
                mode="single"
                selected={singleDate}
                onSelect={setSingleDate}
                className="rounded-md border border-[var(--ds-color-neutral-300)] [--cell-size:3rem] text-lg p-6"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Default single selection
export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

// Single date selection
export const SingleSelection: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

// Multiple date selection
export const MultipleSelection: Story = {
  render: () => {
    const [dates, setDates] = useState<Date[] | undefined>([]);
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
    );
  },
};

// Range selection
export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = useState<{ from: Date | undefined; to?: Date | undefined }>({
      from: undefined,
      to: undefined,
    });
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-md border"
        numberOfMonths={2}
      />
    );
  },
};

// With disabled dates
export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    const disabledDays = [
      new Date(2024, 11, 25), // Christmas
      new Date(2024, 0, 1),   // New Year
      { from: new Date(2024, 11, 20), to: new Date(2024, 11, 30) }, // Holiday period
    ];

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabledDays}
        className="rounded-md border"
      />
    );
  },
};

// Two months display
export const TwoMonths: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
        className="rounded-md border"
      />
    );
  },
};

// Custom footer
export const CustomFooter: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <div className="mt-4 p-3 bg-neutral-50 rounded-md text-sm text-neutral-700">
          {date ? `Selected: ${date.toDateString()}` : "No date selected"}
        </div>
      </div>
    );
  },
};

// With year navigation dropdown
export const WithYearNavigation: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        fromYear={2020}
        toYear={2030}
        className="rounded-md border"
      />
    );
  },
};

// Small size variant
export const SmallSize: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border [--cell-size:1.75rem] text-sm"
      />
    );
  },
};

// Large size variant
export const LargeSize: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border [--cell-size:3rem] text-lg p-6"
      />
    );
  },
};

// Dark theme (simulated)
export const DarkTheme: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <div className="bg-neutral-900 p-6 rounded-lg">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border border-neutral-700 bg-neutral-800 text-white [&_.rdp-day]:text-white [&_.rdp-day_selected]:bg-primary-500 [&_.rdp-day_today]:bg-neutral-700"
        />
      </div>
    );
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// RTL Support
export const RTLSupport: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <div dir="rtl">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    );
  },
};

// With min/max dates
export const WithMinMaxDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    const today = new Date();
    const oneMonthFromNow = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        fromDate={today}
        toDate={oneMonthFromNow}
        className="rounded-md border"
      />
    );
  },
};

// Loading state
export const Loading: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(true);
    const [date, setDate] = useState<Date | undefined>();

    setTimeout(() => setIsLoading(false), 2000);

    if (isLoading) {
      return (
        <div className="w-80 h-80 border border-neutral-300 rounded-md flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
        </div>
      );
    }

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

// Focused state demonstration
export const FocusedState: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <div>
        <p className="mb-4 text-sm text-neutral-600">Use Tab to navigate and Space/Enter to select dates</p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          autoFocus
        />
      </div>
    );
  },
};