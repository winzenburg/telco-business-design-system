import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  Avatar,
  AvatarFallback,
  AvatarImage
} from '../src/components';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Avatar component for displaying user profile images following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="/api/placeholder/32/32" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="/nonexistent-image.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="/api/placeholder/32/32" alt="Small" />
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/api/placeholder/40/40" alt="Default" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="/api/placeholder/48/48" alt="Large" />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
    </div>
  ),
};