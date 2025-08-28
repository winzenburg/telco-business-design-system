import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { TimePicker } from '../../../components/ui/time-picker';
import { Label } from '../../../components/ui/label';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/Time Picker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A time picker component for selecting time values with business scheduling contexts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    format: {
      control: 'radio',
      options: ['12', '24'],
      description: 'Time format (12-hour or 24-hour)',
    },
    minuteStep: {
      control: { type: 'number', min: 1, max: 60 },
      description: 'Minute step increment',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the time picker is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    format: '12',
    minuteStep: 15,
    placeholder: 'Select time',
  },
};

export const Format24Hour: Story = {
  args: {
    format: '24',
    minuteStep: 15,
    placeholder: 'Select time (24h)',
  },
};

export const WithLabel: Story = {
  render: () => {
    const [time, setTime] = useState('');
    
    return (
      <div className="space-y-3 w-[300px]">
        <Label htmlFor="appointment-time">Appointment Time</Label>
        <TimePicker
          id="appointment-time"
          value={time}
          onTimeChange={setTime}
          format="12"
          minuteStep={30}
        />
        {time && (
          <p className="text-sm text-[#70717D]">Selected: {time}</p>
        )}
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    format: '12',
    minuteStep: 15,
    disabled: true,
    value: '2:00 PM',
  },
};

export const ServiceAppointment: Story = {
  render: () => {
    const [startTime, setStartTime] = useState('9:00 AM');
    const [endTime, setEndTime] = useState('5:00 PM');
    
    return (
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="configure" size={20} color="currentColor" />
            Schedule Service Installation
          </CardTitle>
          <CardDescription>
            Schedule your Internet Pro installation. Our technician will arrive during your selected time window.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start-time">Preferred Start Time</Label>
              <TimePicker
                id="start-time"
                value={startTime}
                onTimeChange={setStartTime}
                format="12"
                minuteStep={30}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-time">Latest End Time</Label>
              <TimePicker
                id="end-time"
                value={endTime}
                onTimeChange={setEndTime}
                format="12"
                minuteStep={30}
              />
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-start gap-3">
              <Icon name="infotimer" size={20} color="#0D62FF" className="mt-0.5" />
              <div className="text-sm">
                <div className="font-medium text-[#0D62FF] mb-1">Installation Time Window</div>
                <div className="text-[#2B2D3F]">
                  Your installation is scheduled between {startTime} and {endTime}. 
                  Our technician will call 30 minutes before arrival.
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              Reschedule
            </Button>
            <Button className="flex-1">
              Confirm Appointment
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const MaintenanceWindow: Story = {
  render: () => {
    const [startTime, setStartTime] = useState('02:00');
    const [endTime, setEndTime] = useState('04:00');
    
    return (
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="configure" size={20} color="currentColor" />
            Network Maintenance Window
          </CardTitle>
          <CardDescription>
            Configure maintenance window for network updates. Services may be temporarily unavailable during this time.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="maintenance-start">Start Time</Label>
              <TimePicker
                id="maintenance-start"
                value={startTime}
                onTimeChange={setStartTime}
                format="24"
                minuteStep={15}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maintenance-end">End Time</Label>
              <TimePicker
                id="maintenance-end"
                value={endTime}
                onTimeChange={setEndTime}
                format="24"
                minuteStep={15}
              />
            </div>
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="flex items-start gap-3">
              <Icon name="alert" size={20} color="#f59e0b" className="mt-0.5" />
              <div className="text-sm">
                <div className="font-medium text-orange-800 mb-1">Service Impact</div>
                <div className="text-orange-700">
                  Network services will be unavailable from {startTime} to {endTime}. 
                  Plan accordingly for critical business operations.
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#70717D]">Maintenance Duration</span>
              <span className="font-medium text-[#15172B]">2 hours</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#70717D]">Affected Services</span>
              <span className="font-medium text-[#15172B]">Internet Pro, Business Voice</span>
            </div>
          </div>
          
          <Button className="w-full">
            Schedule Maintenance
          </Button>
        </CardContent>
      </Card>
    );
  },
};

export const BusinessHours: Story = {
  render: () => {
    const [mondayStart, setMondayStart] = useState('9:00 AM');
    const [mondayEnd, setMondayEnd] = useState('5:00 PM');
    const [saturdayStart, setSaturdayStart] = useState('10:00 AM');
    const [saturdayEnd, setSaturdayEnd] = useState('2:00 PM');
    
    return (
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="portal" size={20} color="currentColor" />
            Business Hours Configuration
          </CardTitle>
          <CardDescription>
            Set your business hours for customer support and service availability.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-[#E8EAEF] rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#16a34a] rounded-full"></div>
                <div>
                  <div className="font-medium text-[#15172B]">Monday - Friday</div>
                  <div className="text-sm text-[#70717D]">Weekday hours</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TimePicker
                  value={mondayStart}
                  onTimeChange={setMondayStart}
                  format="12"
                  minuteStep={30}
                />
                <span className="text-[#70717D]">to</span>
                <TimePicker
                  value={mondayEnd}
                  onTimeChange={setMondayEnd}
                  format="12"
                  minuteStep={30}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-[#E8EAEF] rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
                <div>
                  <div className="font-medium text-[#15172B]">Saturday</div>
                  <div className="text-sm text-[#70717D]">Weekend hours</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TimePicker
                  value={saturdayStart}
                  onTimeChange={setSaturdayStart}
                  format="12"
                  minuteStep={30}
                />
                <span className="text-[#70717D]">to</span>
                <TimePicker
                  value={saturdayEnd}
                  onTimeChange={setSaturdayEnd}
                  format="12"
                  minuteStep={30}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-[#E8EAEF] rounded-lg opacity-60">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#70717D] rounded-full"></div>
                <div>
                  <div className="font-medium text-[#15172B]">Sunday</div>
                  <div className="text-sm text-[#70717D]">Closed</div>
                </div>
              </div>
              <div className="text-sm text-[#70717D]">No support available</div>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex items-center gap-2 text-sm text-[#70717D] mb-4">
              <Icon name="infotimer" size={16} color="currentColor" />
              Changes will take effect on the next business day
            </div>
            <Button className="w-full">
              Update Business Hours
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const ConferenceCall: Story = {
  render: () => {
    const [callTime, setCallTime] = useState('2:00 PM');
    
    return (
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="conference" size={20} color="currentColor" />
            Schedule Conference Call
          </CardTitle>
          <CardDescription>
            Set up a conference call with your Business Voice service.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="call-time">Call Time</Label>
            <TimePicker
              id="call-time"
              value={callTime}
              onTimeChange={setCallTime}
              format="12"
              minuteStep={15}
            />
          </div>
          
          <div className="p-3 bg-[#F5F6FA] rounded-lg">
            <div className="text-sm">
              <div className="font-medium text-[#15172B] mb-1">Call Details</div>
              <div className="space-y-1 text-[#70717D]">
                <div>• Conference Bridge: 1-800-COMCAST</div>
                <div>• Participant Code: 123456</div>
                <div>• Scheduled for: Today at {callTime}</div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <Icon name="document" size={16} color="currentColor" className="mr-2" />
              Send Invites
            </Button>
            <Button className="flex-1">
              <Icon name="conference" size={16} color="white" className="mr-2" />
              Start Call
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};