import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Calendar } from '../../../components/ui/calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A calendar component for date selection with support for single date, multiple dates, and date ranges.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
    },
    showOutsideDays: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();
    
    return (
      <Calendar
        selected={selected}
        onSelect={setSelected}
      />
    );
  },
};

export const WithSelectedDate: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date>(new Date());
    
    return (
      <Calendar
        selected={selected}
        onSelect={setSelected}
      />
    );
  },
};

export const WithDisabledDates: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();
    
    const isWeekend = (date: Date) => {
      const day = date.getDay();
      return day === 0 || day === 6; // Sunday = 0, Saturday = 6
    };
    
    return (
      <Calendar
        selected={selected}
        onSelect={setSelected}
        disabled={isWeekend}
      />
    );
  },
};

export const WithOutsideDays: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();
    
    return (
      <Calendar
        selected={selected}
        onSelect={setSelected}
        showOutsideDays={true}
      />
    );
  },
};

export const BusinessScheduling: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();
    
    // Disable past dates and weekends for business scheduling
    const isDateDisabled = (date: Date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const day = date.getDay();
      const isWeekend = day === 0 || day === 6;
      const isPast = date < today;
      
      return isWeekend || isPast;
    };
    
    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-[#15172B] font-primary mb-2">Service Installation Schedule</h3>
          <p className="text-sm text-[#70717D] font-secondary mb-4">
            Select a business day for your Internet Pro installation. Weekends and past dates are not available.
          </p>
          <Calendar
            selected={selected}
            onSelect={setSelected}
            disabled={isDateDisabled}
            showOutsideDays={true}
          />
        </div>
        
        {selected && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="text-sm font-medium text-[#15172B]">
              Selected Installation Date:
            </div>
            <div className="text-sm text-[#70717D]">
              {selected.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const MaintenanceCalendar: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();
    
    // Sample maintenance dates
    const maintenanceDates = [
      new Date(2024, 11, 15), // December 15, 2024
      new Date(2024, 11, 22), // December 22, 2024
      new Date(2025, 0, 5),   // January 5, 2025
      new Date(2025, 0, 19),  // January 19, 2025
    ];
    
    const isMaintenanceDate = (date: Date) => {
      return maintenanceDates.some(maintenanceDate => 
        date.getTime() === maintenanceDate.getTime()
      );
    };
    
    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-[#15172B] font-primary mb-2">Network Maintenance Schedule</h3>
          <p className="text-sm text-[#70717D] font-secondary mb-4">
            Scheduled maintenance windows for network infrastructure. Service may be temporarily unavailable during these times.
          </p>
          <Calendar
            selected={selected}
            onSelect={setSelected}
            disabled={isMaintenanceDate}
            showOutsideDays={true}
          />
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium text-[#15172B] font-primary">Upcoming Maintenance</h4>
          <div className="space-y-2">
            {maintenanceDates.map((date, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div>
                  <div className="text-sm font-medium text-[#15172B]">
                    {date.toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="text-xs text-[#70717D]">
                    2:00 AM - 4:00 AM EST
                  </div>
                </div>
                <div className="text-xs text-yellow-700 bg-yellow-100 px-2 py-1 rounded">
                  Scheduled
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const BillingCalendar: Story = {
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>();
    
    // Sample billing dates
    const currentDate = new Date();
    const billingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 15);
    const nextBillingDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 15);
    
    const isBillingDate = (date: Date) => {
      return date.getDate() === 15;
    };
    
    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-[#15172B] font-primary mb-2">Billing Calendar</h3>
          <p className="text-sm text-[#70717D] font-secondary mb-4">
            Your monthly billing cycle. Bills are generated on the 15th of each month.
          </p>
          <Calendar
            selected={selected}
            onSelect={setSelected}
            showOutsideDays={true}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <div className="text-sm font-medium text-[#15172B] mb-1">Current Bill</div>
            <div className="text-lg font-bold text-[#15172B]">$362.00</div>
            <div className="text-xs text-[#70717D]">
              Due: {billingDate.toLocaleDateString()}
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="text-sm font-medium text-[#15172B] mb-1">Next Bill</div>
            <div className="text-lg font-bold text-[#70717D]">Est. $362.00</div>
            <div className="text-xs text-[#70717D]">
              Generated: {nextBillingDate.toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    );
  },
};