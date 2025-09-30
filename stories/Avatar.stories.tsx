import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '../src/components';
import { User } from 'lucide-react';
import AvatarDocs from './Avatar.mdx';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
    docs: {
      page: AvatarDocs,
      description: {
        component: 'Avatar component for displaying user profile images following Comcast Business Design System.'
      }
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
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Sizes</h3>
        <div className="flex items-center space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Small" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Default" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" alt="Large" />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" alt="Extra Large" />
            <AvatarFallback className="text-lg">XL</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Initials Fallback</h3>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/nonexistent-image.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/nonexistent-image.jpg" alt="User" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/nonexistent-image.jpg" alt="User" />
            <AvatarFallback>XY</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Icon Fallback</h3>
        <Avatar>
          <AvatarImage src="/nonexistent-image.jpg" alt="User" />
          <AvatarFallback>
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Status Indicator</h3>
        <div className="flex items-center space-x-4">
          <div className="relative inline-block">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Online User" />
              <AvatarFallback>ON</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 ring-2 ring-white" />
          </div>
          <div className="relative inline-block">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b60013ad?w=40&h=40&fit=crop&crop=face" alt="Offline User" />
              <AvatarFallback>OFF</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-gray-400 ring-2 ring-white" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Avatar Group (Overlapping)</h3>
        <div className="flex -space-x-2">
          <Avatar className="ring-2 ring-white">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User 1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar className="ring-2 ring-white">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b60013ad?w=40&h=40&fit=crop&crop=face" alt="User 2" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Avatar className="ring-2 ring-white">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" alt="User 3" />
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
          <Avatar className="ring-2 ring-white">
            <AvatarFallback>+5</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Name and Details</h3>
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-[var(--ds-color-text-primary)]">John Doe</p>
            <p className="text-sm text-[var(--ds-color-text-muted)]">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

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