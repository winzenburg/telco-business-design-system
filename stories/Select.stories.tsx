import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '../src/components/ui/select';
import { Label } from '../src/components/ui/label';
import SelectDocs from './Select.mdx';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      page: SelectDocs,
      description: {
        component: 'A select component built on Radix UI following ShadCN/UI patterns with design system tokens. Features proper form input borders (neutral-400), structural dropdown borders (neutral-300), and comprehensive keyboard navigation.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-8 p-6">
      <div>
        <h3 className="text-sm font-semibold mb-3 font-primary">Basic Select</h3>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 font-primary">With Groups</h3>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Popular</SelectLabel>
              <SelectItem value="fiber">Business Fiber</SelectItem>
              <SelectItem value="phone">Business Phone</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Other</SelectLabel>
              <SelectItem value="tv">Business TV</SelectItem>
              <SelectItem value="security">Security</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 font-primary">Disabled</h3>
        <Select disabled>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Disabled select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};

// Basic Select
export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
};

// Grouped Options
export const GroupedOptions: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select a service" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Internet Services</SelectLabel>
          <SelectItem value="fiber">Business Fiber Internet</SelectItem>
          <SelectItem value="cable">Business Cable Internet</SelectItem>
          <SelectItem value="dedicated">Dedicated Internet Access</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Communication</SelectLabel>
          <SelectItem value="voip">Business VoIP</SelectItem>
          <SelectItem value="phone">Business Phone Lines</SelectItem>
          <SelectItem value="conferencing">Video Conferencing</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Additional Services</SelectLabel>
          <SelectItem value="security">Cybersecurity</SelectItem>
          <SelectItem value="tv">Business TV</SelectItem>
          <SelectItem value="mobility">Business Mobility</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

// Disabled State
export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectContent>
    </Select>
  ),
};

// Disabled Options
export const DisabledOptions: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select bandwidth" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10mbps">10 Mbps</SelectItem>
        <SelectItem value="50mbps">50 Mbps</SelectItem>
        <SelectItem value="100mbps">100 Mbps</SelectItem>
        <SelectItem value="500mbps" disabled>
          500 Mbps (Unavailable)
        </SelectItem>
        <SelectItem value="1gbps">1 Gbps</SelectItem>
        <SelectItem value="10gbps" disabled>
          10 Gbps (Unavailable)
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};

// With Form Label
export const WithFormLabel: Story = {
  render: () => (
    <div className="grid gap-2 w-[300px]">
      <Label htmlFor="service-select">Business Service</Label>
      <Select>
        <SelectTrigger id="service-select">
          <SelectValue placeholder="Choose your service" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="internet">Business Internet</SelectItem>
          <SelectItem value="phone">Business Phone</SelectItem>
          <SelectItem value="tv">Business TV</SelectItem>
          <SelectItem value="security">Cybersecurity</SelectItem>
          <SelectItem value="mobility">Business Mobility</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// Controlled Select
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('apple');

    return (
      <div className="space-y-4">
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-neutral-600 font-secondary">
          Selected value: <span className="font-semibold">{value}</span>
        </p>
      </div>
    );
  },
};

// Long List with Scrolling
export const LongList: Story = {
  render: () => {
    const states = [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
      'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
      'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
      'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
      'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
      'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
      'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
      'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
      'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
      'West Virginia', 'Wisconsin', 'Wyoming',
    ];

    return (
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a state" />
        </SelectTrigger>
        <SelectContent>
          {states.map((state) => (
            <SelectItem key={state} value={state.toLowerCase().replace(/\s+/g, '-')}>
              {state}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  },
};

// Different Widths
export const DifferentWidths: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Select>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Small" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="s">Small</SelectItem>
          <SelectItem value="m">Medium</SelectItem>
          <SelectItem value="l">Large</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="Medium width select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="s">Small</SelectItem>
          <SelectItem value="m">Medium</SelectItem>
          <SelectItem value="l">Large</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[400px]">
          <SelectValue placeholder="Large width select with longer placeholder text" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="s">Small</SelectItem>
          <SelectItem value="m">Medium</SelectItem>
          <SelectItem value="l">Large</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => {
    const [service, setService] = useState('');
    const [bandwidth, setBandwidth] = useState('');
    const [term, setTerm] = useState('');

    return (
      <div className="w-[400px] space-y-6 p-6 border border-neutral-300 rounded-lg bg-white">
        <h3 className="text-lg font-semibold font-primary text-neutral-900">
          Configure Your Service
        </h3>

        <div className="grid gap-2">
          <Label htmlFor="service">Service Type</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fiber">Business Fiber</SelectItem>
              <SelectItem value="cable">Business Cable</SelectItem>
              <SelectItem value="dedicated">Dedicated Internet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="bandwidth">Bandwidth</Label>
          <Select value={bandwidth} onValueChange={setBandwidth}>
            <SelectTrigger id="bandwidth">
              <SelectValue placeholder="Select bandwidth" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="100">100 Mbps</SelectItem>
              <SelectItem value="500">500 Mbps</SelectItem>
              <SelectItem value="1000">1 Gbps</SelectItem>
              <SelectItem value="10000">10 Gbps</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="term">Contract Term</Label>
          <Select value={term} onValueChange={setTerm}>
            <SelectTrigger id="term">
              <SelectValue placeholder="Select term length" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12 Months</SelectItem>
              <SelectItem value="24">24 Months</SelectItem>
              <SelectItem value="36">36 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {service && bandwidth && term && (
          <div className="mt-4 p-4 bg-neutral-50 rounded-md">
            <p className="text-sm font-secondary text-neutral-700">
              <strong>Summary:</strong> {service === 'fiber' ? 'Business Fiber' : service === 'cable' ? 'Business Cable' : 'Dedicated Internet'} at {bandwidth === '10000' ? '10 Gbps' : bandwidth === '1000' ? '1 Gbps' : bandwidth === '500' ? '500 Mbps' : '100 Mbps'} for {term} months
            </p>
          </div>
        )}
      </div>
    );
  },
};