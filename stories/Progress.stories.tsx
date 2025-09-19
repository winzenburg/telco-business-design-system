import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Progress } from '../src/components';

const meta: Meta<typeof Progress> = {
  title: 'Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Progress component for showing completion status following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 33,
    className: 'w-[60%]',
  },
};

export const HalfComplete: Story = {
  args: {
    value: 50,
    className: 'w-[60%]',
  },
};

export const NearlyComplete: Story = {
  args: {
    value: 87,
    className: 'w-[60%]',
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    className: 'w-[60%]',
  },
};

export const WithLabels: Story = {
  render: () => (
    <div className="space-y-4 w-[60%]">
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Upload Progress</span>
          <span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Installation</span>
          <span>45%</span>
        </div>
        <Progress value={45} />
      </div>
    </div>
  ),
};