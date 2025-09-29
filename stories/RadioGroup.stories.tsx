import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioGroup, RadioGroupItem, Label } from '../src/components';
import RadioGroupDocs from './RadioGroup.mdx';

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
    docs: {
      page: RadioGroupDocs,
      description: {
        component: 'Radio Group component for single-choice selections following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};

export const ServicePlans: Story = {
  render: () => (
    <RadioGroup defaultValue="business">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="basic" id="basic" />
        <Label htmlFor="basic">Basic Plan - $29/month</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="business" id="business" />
        <Label htmlFor="business">Business Plan - $59/month</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="enterprise" id="enterprise" />
        <Label htmlFor="enterprise">Enterprise Plan - $99/month</Label>
      </div>
    </RadioGroup>
  ),
};