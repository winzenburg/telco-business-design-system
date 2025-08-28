import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../src/components';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Select component for dropdown selections following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

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

export const BusinessServices: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Choose a service" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="internet">Business Internet</SelectItem>
        <SelectItem value="phone">Business Phone</SelectItem>
        <SelectItem value="tv">Business TV</SelectItem>
        <SelectItem value="security">Business Security</SelectItem>
        <SelectItem value="mobility">Business Mobility</SelectItem>
      </SelectContent>
    </Select>
  ),
};