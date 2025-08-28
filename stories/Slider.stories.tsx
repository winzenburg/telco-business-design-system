import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Slider } from '../src/components';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Slider component for range inputs following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-[60%]',
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    className: 'w-[60%]',
  },
};

export const BandwidthSelector: Story = {
  render: () => (
    <div className="w-[60%] space-y-4">
      <div>
        <label className="text-sm font-medium">Bandwidth (Mbps)</label>
        <Slider
          defaultValue={[100]}
          max={1000}
          step={50}
          className="mt-2"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>50</span>
          <span>1000</span>
        </div>
      </div>
    </div>
  ),
};