import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Progress } from '../src/components';
import ProgressDocs from './Progress.mdx';

const meta: Meta<typeof Progress> = {
  title: 'Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
    docs: {
      page: ProgressDocs,
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Progress Values</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Low Progress</span>
              <span>25%</span>
            </div>
            <Progress value={25} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Half Progress</span>
              <span>50%</span>
            </div>
            <Progress value={50} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>High Progress</span>
              <span>75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Complete</span>
              <span>100%</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Sizes</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <span className="text-sm text-[var(--ds-color-text-muted)]">Small (4px)</span>
            <Progress value={60} className="h-1" />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-[var(--ds-color-text-muted)]">Default (8px)</span>
            <Progress value={60} className="h-2" />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-[var(--ds-color-text-muted)]">Large (12px)</span>
            <Progress value={60} className="h-3" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Status Colors</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <span className="text-sm text-[var(--ds-color-text-muted)]">Default (Primary)</span>
            <Progress value={75} />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-green-600">Success</span>
            <Progress value={100} className="[&>div]:bg-green-500" />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-yellow-600">Warning</span>
            <Progress value={60} className="[&>div]:bg-yellow-500" />
          </div>
          <div className="space-y-2">
            <span className="text-sm text-red-600">Error</span>
            <Progress value={40} className="[&>div]:bg-red-500" />
          </div>
        </div>
      </div>
    </div>
  ),
};

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