import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Slider } from '../src/components/ui/slider';
import { Label } from '../src/components/ui/label';
import SliderDocs from './Slider.mdx';

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      page: SliderDocs,
      description: {
        component:
          'A slider component built on Radix UI following ShadCN/UI patterns with design system tokens. Features smooth dragging, keyboard navigation, and accessible markup with proper ARIA labels.',
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
    <div className="grid gap-8 p-6 w-[600px]">
      <div>
        <h3 className="text-sm font-semibold mb-3 font-primary">Single Value</h3>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 font-primary">Range</h3>
        <Slider defaultValue={[25, 75]} max={100} step={1} />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 font-primary">Custom Steps</h3>
        <Slider defaultValue={[100]} max={1000} step={100} />
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3 font-primary">Disabled</h3>
        <Slider defaultValue={[50]} max={100} step={1} disabled />
      </div>
    </div>
  ),
};

// Default Single Value Slider
export const Default: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Label>Volume</Label>
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

// Range Slider
export const Range: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Label>Price Range</Label>
      <Slider defaultValue={[25, 75]} max={100} step={1} />
      <div className="flex justify-between text-xs text-neutral-600 font-secondary">
        <span>$0</span>
        <span>$100</span>
      </div>
    </div>
  ),
};

// Disabled State
export const Disabled: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Label>Disabled Slider</Label>
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
};

// With Custom Steps
export const CustomSteps: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Label>Bandwidth (Mbps)</Label>
      <Slider defaultValue={[100]} min={0} max={1000} step={50} />
      <div className="flex justify-between text-xs text-neutral-600 font-secondary">
        <span>0</span>
        <span>250</span>
        <span>500</span>
        <span>750</span>
        <span>1000</span>
      </div>
    </div>
  ),
};

// Controlled Slider
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState([33]);

    return (
      <div className="w-[400px] space-y-4">
        <div className="space-y-2">
          <Label>Service Quality: {value[0]}%</Label>
          <Slider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
          />
        </div>
        <div className="text-sm text-neutral-600 font-secondary">
          Current value: <span className="font-semibold">{value[0]}%</span>
        </div>
      </div>
    );
  },
};

// Bandwidth Selector
export const BandwidthSelector: Story = {
  render: () => {
    const [bandwidth, setBandwidth] = useState([500]);

    return (
      <div className="w-[500px] p-6 border border-neutral-300 rounded-lg bg-white space-y-4">
        <div>
          <h3 className="text-lg font-semibold font-primary text-neutral-900">
            Select Internet Speed
          </h3>
          <p className="text-sm text-neutral-600 font-secondary">
            Choose the bandwidth that fits your business needs
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bandwidth">
            Bandwidth: {bandwidth[0]} Mbps
          </Label>
          <Slider
            id="bandwidth"
            value={bandwidth}
            onValueChange={setBandwidth}
            min={50}
            max={1000}
            step={50}
          />
          <div className="flex justify-between text-xs text-neutral-600 font-secondary">
            <span>50 Mbps</span>
            <span>1 Gbps</span>
          </div>
        </div>

        <div className="bg-neutral-50 p-4 rounded-md">
          <p className="text-sm font-secondary text-neutral-700">
            <strong>Selected:</strong> {bandwidth[0]} Mbps{' '}
            {bandwidth[0] >= 1000 ? '(1 Gbps)' : ''}
          </p>
        </div>
      </div>
    );
  },
};

// Price Range Filter
export const PriceRangeFilter: Story = {
  render: () => {
    const [priceRange, setPriceRange] = useState([200, 800]);

    return (
      <div className="w-[400px] p-6 border border-neutral-300 rounded-lg bg-white space-y-4">
        <div>
          <h3 className="text-lg font-semibold font-primary text-neutral-900">
            Filter by Price
          </h3>
        </div>

        <div className="space-y-2">
          <Label>
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </Label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={1000}
            step={10}
          />
          <div className="flex justify-between text-xs text-neutral-600 font-secondary">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>
    );
  },
};

// Service Level Agreement (SLA)
export const SLAUptime: Story = {
  render: () => {
    const [uptime, setUptime] = useState([99.9]);

    return (
      <div className="w-[500px] p-6 border border-neutral-300 rounded-lg bg-white space-y-4">
        <div>
          <h3 className="text-lg font-semibold font-primary text-neutral-900">
            Service Level Agreement
          </h3>
          <p className="text-sm text-neutral-600 font-secondary">
            Select your required uptime guarantee
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="uptime">
            Uptime Guarantee: {uptime[0]}%
          </Label>
          <Slider
            id="uptime"
            value={uptime}
            onValueChange={setUptime}
            min={95}
            max={99.99}
            step={0.01}
          />
          <div className="flex justify-between text-xs text-neutral-600 font-secondary">
            <span>95%</span>
            <span>99%</span>
            <span>99.9%</span>
            <span>99.99%</span>
          </div>
        </div>

        <div className="bg-primary-50 p-4 rounded-md border border-primary-200">
          <p className="text-sm font-secondary text-neutral-900">
            <strong>{uptime[0]}% uptime</strong> = Maximum{' '}
            {Math.round((100 - uptime[0]) * 87.6)} minutes of downtime per year
          </p>
        </div>
      </div>
    );
  },
};

// Contract Term Length
export const ContractTerm: Story = {
  render: () => {
    const [months, setMonths] = useState([24]);

    const getDiscount = (term: number) => {
      if (term >= 36) return 20;
      if (term >= 24) return 15;
      if (term >= 12) return 10;
      return 0;
    };

    return (
      <div className="w-[500px] p-6 border border-neutral-300 rounded-lg bg-white space-y-4">
        <div>
          <h3 className="text-lg font-semibold font-primary text-neutral-900">
            Contract Length
          </h3>
          <p className="text-sm text-neutral-600 font-secondary">
            Longer terms receive better pricing
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="term">
            Contract Term: {months[0]} months
          </Label>
          <Slider
            id="term"
            value={months}
            onValueChange={setMonths}
            min={1}
            max={60}
            step={1}
          />
          <div className="flex justify-between text-xs text-neutral-600 font-secondary">
            <span>1 mo</span>
            <span>12 mo</span>
            <span>24 mo</span>
            <span>36 mo</span>
            <span>60 mo</span>
          </div>
        </div>

        {getDiscount(months[0]) > 0 && (
          <div className="bg-green-50 p-4 rounded-md border border-green-200">
            <p className="text-sm font-secondary text-green-900">
              <strong>{getDiscount(months[0])}% discount</strong> applied for{' '}
              {months[0]}-month commitment
            </p>
          </div>
        )}
      </div>
    );
  },
};

// Different Sizes
export const DifferentSizes: Story = {
  render: () => (
    <div className="w-[600px] space-y-8 p-6">
      <div className="space-y-2">
        <Label>Small (300px)</Label>
        <Slider defaultValue={[50]} max={100} className="w-[300px]" />
      </div>

      <div className="space-y-2">
        <Label>Medium (400px)</Label>
        <Slider defaultValue={[50]} max={100} className="w-[400px]" />
      </div>

      <div className="space-y-2">
        <Label>Large (500px)</Label>
        <Slider defaultValue={[50]} max={100} className="w-[500px]" />
      </div>

      <div className="space-y-2">
        <Label>Full Width</Label>
        <Slider defaultValue={[50]} max={100} className="w-full" />
      </div>
    </div>
  ),
};