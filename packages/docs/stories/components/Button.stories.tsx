import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays a button or a component that looks like a button.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'primary'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
  args: { onClick: () => {} },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Icon name="plus" size={16} color="white" className="mr-2" />
        Add Location
      </Button>
      <Button variant="primary">
        <Icon name="wifi" size={16} color="white" className="mr-2" />
        Internet Pro
      </Button>
      <Button variant="destructive">
        <Icon name="close" size={16} color="white" className="mr-2" />
        Cancel Service
      </Button>
      <Button variant="secondary">
        <Icon name="configure" size={16} color="currentColor" className="mr-2" />
        Account Settings
      </Button>
      <Button variant="outline">
        <Icon name="analytics" size={16} color="currentColor" className="mr-2" />
        Usage Reports
      </Button>
      <Button variant="ghost">
        View Services
        <Icon name="arrow" size={16} color="currentColor" className="ml-2" />
      </Button>
    </div>
  ),
};

export const IconButton: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="primary" size="icon">
        <Icon name="plus" size={16} color="white" />
      </Button>
      <Button variant="destructive" size="icon">
        <Icon name="close" size={16} color="white" />
      </Button>
      <Button variant="outline" size="icon">
        <Icon name="configure" size={16} color="currentColor" />
      </Button>
      <Button variant="secondary" size="icon">
        <Icon name="search" size={16} color="currentColor" />
      </Button>
      <Button variant="ghost" size="icon">
        <Icon name="analytics" size={16} color="currentColor" />
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    
    return (
      <div className="flex gap-4">
        <Button loading={loading} onClick={handleClick}>
          {loading ? 'Processing...' : 'Click me'}
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </div>
    );
  },
};

export const BusinessActions: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-medium text-[#15172B] font-primary">Internet Services</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">
            <Icon name="plus" size={16} color="white" className="mr-2" />
            Add Internet Pro
          </Button>
          <Button variant="secondary">
            <Icon name="configure" size={16} color="currentColor" className="mr-2" />
            Manage Bandwidth
          </Button>
          <Button variant="outline">
            <Icon name="analytics" size={16} color="currentColor" className="mr-2" />
            Usage Analytics
          </Button>
        </div>
        <p className="text-sm text-[#70717D] font-secondary">Internet Pro - 100 Mbps starting at $199/month</p>
      </div>
      
      <div className="space-y-3">
        <h3 className="font-medium text-[#15172B] font-primary">Voice Solutions</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="ghost">
            <Icon name="conference" size={16} color="currentColor" className="mr-2" />
            Business Voice
          </Button>
          <Button variant="ghost">
            <Icon name="gethelp" size={16} color="currentColor" className="mr-2" />
            Priority Support
          </Button>
          <Button variant="ghost">
            <Icon name="numbers" size={16} color="currentColor" className="mr-2" />
            SIP Trunking
          </Button>
        </div>
        <p className="text-sm text-[#70717D] font-secondary">Voice Pro with advanced features - $89/month</p>
      </div>
      
      <div className="space-y-3">
        <h3 className="font-medium text-[#15172B] font-primary">Security & Support</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">
            <Icon name="analytics" size={16} color="white" className="mr-2" />
            Security Suite
          </Button>
          <Button variant="outline">
            <Icon name="document" size={16} color="currentColor" className="mr-2" />
            Download Invoice
          </Button>
          <Button variant="destructive">
            <Icon name="close" size={16} color="white" className="mr-2" />
            Cancel Service
          </Button>
        </div>
        <p className="text-sm text-[#70717D] font-secondary">24/7 Monitoring & Threat Protection - $49/month</p>
      </div>
    </div>
  ),
};