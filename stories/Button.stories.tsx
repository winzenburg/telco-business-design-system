import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../src/components';
import { Plus, Download, Settings, User, ArrowRight } from 'lucide-react';
import ButtonDocs from './docs/Button.mdx';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      page: ButtonDocs,
      description: {
        component: 'Button component for triggering actions throughout the application. Supports different variants, sizes, and states.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive', 'link'],
      description: 'The visual style variant of the button'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    children: {
      control: 'text',
      description: 'The content of the button'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// All variants showcase
export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
        <Button variant="ghost" disabled>Ghost Disabled</Button>
        <Button variant="destructive" disabled>Destructive Disabled</Button>
        <Button variant="link" disabled>Link Disabled</Button>
      </div>
    </div>
  )
};

// Basic variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button'
  }
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button'
  }
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm" variant="primary">
        Small
      </Button>
      <Button size="md" variant="primary">
        Medium
      </Button>
      <Button size="lg" variant="primary">
        Large
      </Button>
    </div>
  )
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">
        <Plus className="mr-2 h-4 w-4" />
        Add Item
      </Button>
      <Button variant="secondary">
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
      <Button variant="ghost">
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </Button>
      <Button variant="primary">
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
};

// States
export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">
        Normal
      </Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  )
};