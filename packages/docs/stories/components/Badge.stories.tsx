import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../../components/ui/badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays a badge or a component that looks like a badge.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'success', 'warning', 'info', 'primary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    dot: {
      control: 'boolean',
    },
    interactive: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success" dot>Online</Badge>
      <Badge variant="warning" dot>Maintenance</Badge>
      <Badge variant="destructive" dot>Offline</Badge>
      <Badge variant="info" dot>Update Available</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="primary" interactive onClick={() => alert('Badge clicked!')}>
        Clickable Badge
      </Badge>
      <Badge variant="success" dot interactive onClick={() => alert('Status clicked!')}>
        Active Service
      </Badge>
      <Badge variant="outline" interactive onClick={() => alert('Filter clicked!')}>
        Filter Option
      </Badge>
    </div>
  ),
};

export const ServiceStatus: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h4 className="font-medium">Internet Pro 100 Mbps</h4>
          <p className="text-sm text-gray-500">Main Office Connection</p>
        </div>
        <Badge variant="success" dot>Online</Badge>
      </div>
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h4 className="font-medium">Business Voice Pro</h4>
          <p className="text-sm text-gray-500">VoIP Service</p>
        </div>
        <Badge variant="warning" dot>Updating</Badge>
      </div>
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h4 className="font-medium">Security Suite</h4>
          <p className="text-sm text-gray-500">Firewall & Protection</p>
        </div>
        <Badge variant="destructive" dot>Issue Detected</Badge>
      </div>
    </div>
  ),
};