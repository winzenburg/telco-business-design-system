import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker, DateRangePicker, DateOfBirthPicker } from '../src/components/ui/date-picker';

const meta: Meta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A date picker component built on top of Calendar and Popover with various configurations for different use cases.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// Basic Date Picker
export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Pick a date"
      />
    );
  },
};

// Date Picker with preselected date
export const WithPreselectedDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Pick a date"
      />
    );
  },
};

// Date Picker without icon
export const WithoutIcon: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Pick a date"
        showIcon={false}
      />
    );
  },
};

// Date Picker with custom format
export const CustomFormat: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Pick a date"
        formatString="MM/dd/yyyy"
      />
    );
  },
};

// Date Picker with different button variants
export const ButtonVariants: Story = {
  render: () => {
    const [date1, setDate1] = useState<Date | undefined>();
    const [date2, setDate2] = useState<Date | undefined>();
    const [date3, setDate3] = useState<Date | undefined>();

    return (
      <div className="flex flex-col gap-4">
        <DatePicker
          date={date1}
          onDateChange={setDate1}
          placeholder="Outline variant"
          buttonVariant="outline"
        />
        <DatePicker
          date={date2}
          onDateChange={setDate2}
          placeholder="Ghost variant"
          buttonVariant="ghost"
        />
        <DatePicker
          date={date3}
          onDateChange={setDate3}
          placeholder="Secondary variant"
          buttonVariant="secondary"
        />
      </div>
    );
  },
};

// Disabled state
export const Disabled: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Pick a date"
        disabled={true}
      />
    );
  },
};

// Custom width
export const CustomWidth: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Pick a date"
        className="w-[400px]"
      />
    );
  },
};

// Date Range Picker
export const DateRange: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<{ from: Date | undefined; to?: Date | undefined }>();
    return (
      <DateRangePicker
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        placeholder="Pick a date range"
      />
    );
  },
};

// Date Range Picker with preselected range
export const DateRangePreselected: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<{ from: Date | undefined; to?: Date | undefined }>({
      from: new Date(),
      to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    });
    return (
      <DateRangePicker
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        placeholder="Pick a date range"
      />
    );
  },
};

// Date Range Picker single month
export const DateRangeSingleMonth: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<{ from: Date | undefined; to?: Date | undefined }>();
    return (
      <DateRangePicker
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        placeholder="Pick a date range"
        numberOfMonths={1}
        className="w-[280px]"
      />
    );
  },
};

// Date of Birth Picker
export const DateOfBirth: Story = {
  render: () => {
    const [birthDate, setBirthDate] = useState<Date | undefined>();
    return (
      <DateOfBirthPicker
        date={birthDate}
        onDateChange={setBirthDate}
        placeholder="Pick your date of birth"
        fromYear={1950}
        toYear={2010}
      />
    );
  },
};

// Date of Birth Picker with preselected date
export const DateOfBirthPreselected: Story = {
  render: () => {
    const [birthDate, setBirthDate] = useState<Date | undefined>(new Date(1990, 5, 15));
    return (
      <DateOfBirthPicker
        date={birthDate}
        onDateChange={setBirthDate}
        placeholder="Pick your date of birth"
        fromYear={1950}
        toYear={2010}
      />
    );
  },
};

// With restricted date ranges
export const WithMinMaxDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    const today = new Date();
    const oneMonthFromNow = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Pick a future date"
        calendarProps={{
          fromDate: today,
          toDate: oneMonthFromNow,
        }}
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
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Pick a date (holidays disabled)"
        calendarProps={{
          disabled: disabledDays,
        }}
      />
    );
  },
};

// Compact size
export const Compact: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Pick"
        className="w-[180px]"
        formatString="MM/dd/yy"
      />
    );
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => {
    const [date1, setDate1] = useState<Date | undefined>();
    const [dateRange, setDateRange] = useState<{ from: Date | undefined; to?: Date | undefined }>();
    const [birthDate, setBirthDate] = useState<Date | undefined>();

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-neutral-700 mb-2">Single Date Picker</h3>
          <DatePicker
            date={date1}
            onDateChange={setDate1}
            placeholder="Pick a date"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-neutral-700 mb-2">Date Range Picker</h3>
          <DateRangePicker
            dateRange={dateRange}
            onDateRangeChange={setDateRange}
            placeholder="Pick a date range"
          />
        </div>

        <div>
          <h3 className="text-sm font-medium text-neutral-700 mb-2">Date of Birth Picker</h3>
          <DateOfBirthPicker
            date={birthDate}
            onDateChange={setBirthDate}
            placeholder="Pick your date of birth"
            fromYear={1950}
            toYear={2010}
          />
        </div>
      </div>
    );
  },
};