import type { Meta, StoryObj } from '@storybook/react';
import { KeyValuePair, KeyValueList } from '../../src/components/patterns/KeyValuePair';
import { Badge } from '../../src/components/ui/badge';

const meta = {
  title: 'Patterns/Content & Data Display/KeyValuePair',
  component: KeyValuePair,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible component for displaying key-value pairs with support for multiple layouts, density levels, and interactive features like copying.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The key/label text',
    },
    value: {
      control: 'text',
      description: 'The value to display',
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical', 'inline'],
      description: 'Layout orientation',
    },
    density: {
      control: 'select',
      options: ['compact', 'comfortable', 'spacious'],
      description: 'Density variant',
    },
    copyable: {
      control: 'boolean',
      description: 'Whether the value is copyable',
    },
  },
} satisfies Meta<typeof KeyValuePair>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    value: 'user@example.com',
    layout: 'horizontal',
    density: 'comfortable',
  },
};

export const VerticalLayout: Story = {
  args: {
    label: 'Description',
    value: 'This is a longer description that works well with vertical layout',
    layout: 'vertical',
    density: 'comfortable',
  },
};

export const InlineLayout: Story = {
  args: {
    label: 'Status',
    value: 'Active',
    layout: 'inline',
    density: 'comfortable',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Phone Number',
    value: '+1 (555) 123-4567',
    icon: 'variantphonetypefilled',
    layout: 'horizontal',
    density: 'comfortable',
  },
};

export const WithBadge: Story = {
  args: {
    label: 'Account Status',
    value: 'Active',
    badge: {
      label: 'Verified',
      variant: 'success',
    },
    layout: 'horizontal',
    density: 'comfortable',
  },
};

export const Copyable: Story = {
  args: {
    label: 'API Key',
    value: 'sk_live_51H7Z8KJz4vZvLr0X9L8qW...',
    copyable: true,
    valueStyle: 'mono',
    layout: 'horizontal',
    density: 'comfortable',
  },
};

export const MonospaceValue: Story = {
  args: {
    label: 'Transaction ID',
    value: 'txn_1H7Z8KJz4vZvLr0X9L8qW2b',
    valueStyle: 'mono',
    copyable: true,
    layout: 'horizontal',
    density: 'comfortable',
  },
};

export const StrongValue: Story = {
  args: {
    label: 'Total Amount',
    value: '$1,245.00',
    valueStyle: 'strong',
    layout: 'horizontal',
    density: 'comfortable',
  },
};

export const EmphasizedLabel: Story = {
  args: {
    label: 'Important Field',
    value: 'Critical information',
    emphasizeLabel: true,
    layout: 'horizontal',
    density: 'comfortable',
  },
};

export const LabelWidths: Story = {
  render: () => (
    <div className="space-y-4">
      <KeyValuePair
        label="Auto Width"
        value="Default auto width"
        labelWidth="auto"
        layout="horizontal"
      />
      <KeyValuePair
        label="Small"
        value="Fixed small width (96px)"
        labelWidth="sm"
        layout="horizontal"
      />
      <KeyValuePair
        label="Medium"
        value="Fixed medium width (128px)"
        labelWidth="md"
        layout="horizontal"
      />
      <KeyValuePair
        label="Large"
        value="Fixed large width (160px)"
        labelWidth="lg"
        layout="horizontal"
      />
    </div>
  ),
};

export const AllDensities: Story = {
  render: () => (
    <div className="space-y-4">
      <KeyValuePair
        label="Compact"
        value="Compact density for information-dense layouts"
        density="compact"
        layout="horizontal"
      />
      <KeyValuePair
        label="Comfortable"
        value="Comfortable density (default)"
        density="comfortable"
        layout="horizontal"
      />
      <KeyValuePair
        label="Spacious"
        value="Spacious density for emphasis"
        density="spacious"
        layout="horizontal"
      />
    </div>
  ),
};

export const UserProfileExample: Story = {
  render: () => (
    <div className="max-w-2xl space-y-3">
      <KeyValuePair
        label="Full Name"
        value="Sarah Johnson"
        icon="user"
        layout="horizontal"
        labelWidth="md"
      />
      <KeyValuePair
        label="Email"
        value="sarah.johnson@company.com"
        icon="mail"
        copyable
        layout="horizontal"
        labelWidth="md"
      />
      <KeyValuePair
        label="Phone"
        value="+1 (555) 123-4567"
        icon="phone"
        layout="horizontal"
        labelWidth="md"
      />
      <KeyValuePair
        label="Role"
        value="Senior Engineer"
        badge={{ label: 'Admin', variant: 'default' }}
        layout="horizontal"
        labelWidth="md"
      />
      <KeyValuePair
        label="Status"
        value="Active"
        badge={{ label: 'Verified', variant: 'success' }}
        layout="horizontal"
        labelWidth="md"
      />
      <KeyValuePair
        label="Member Since"
        value="January 15, 2023"
        icon="calendar"
        layout="horizontal"
        labelWidth="md"
      />
    </div>
  ),
};

export const KeyValueListComponent: Story = {
  render: () => (
    <KeyValueList
      items={[
        { label: 'Customer Name', value: 'Acme Corporation' },
        { label: 'Account ID', value: 'ACCT-12345', valueStyle: 'mono', copyable: true },
        { label: 'Status', value: 'Active', badge: { label: 'Verified', variant: 'success' } },
        { label: 'Plan', value: 'Enterprise' },
        { label: 'Monthly Revenue', value: '$15,240', valueStyle: 'strong' },
        { label: 'Contract End Date', value: 'December 31, 2024', icon: 'calendar' },
      ]}
      layout="horizontal"
      dividers={false}
      density="comfortable"
    />
  ),
};

export const KeyValueListWithDividers: Story = {
  render: () => (
    <KeyValueList
      items={[
        { label: 'Order Number', value: '#ORD-2024-1234', valueStyle: 'mono' },
        { label: 'Order Date', value: 'March 15, 2024', icon: 'calendar' },
        { label: 'Status', value: 'Shipped', badge: { label: 'In Transit', variant: 'default' } },
        { label: 'Total Amount', value: '$1,245.00', valueStyle: 'strong' },
        { label: 'Tracking Number', value: '1Z999AA10123456784', copyable: true, valueStyle: 'mono' },
      ]}
      layout="horizontal"
      dividers={true}
      density="comfortable"
    />
  ),
};

export const CompactList: Story = {
  render: () => (
    <KeyValueList
      items={[
        { label: 'CPU Usage', value: '45%', icon: 'device' },
        { label: 'Memory', value: '2.4 GB / 8 GB', icon: 'device' },
        { label: 'Network', value: '125 Mbps', icon: 'wifi' },
        { label: 'Uptime', value: '99.9%', badge: { label: 'Healthy', variant: 'success' } },
      ]}
      layout="horizontal"
      density="compact"
      dividers={false}
    />
  ),
};

export const VerticalList: Story = {
  render: () => (
    <KeyValueList
      items={[
        {
          label: 'Project Description',
          value: 'Design system implementation for enterprise application suite',
        },
        {
          label: 'Goals',
          value: 'Establish consistency across all product interfaces while improving developer productivity',
        },
        {
          label: 'Timeline',
          value: 'Q2 2024 - Q4 2024',
        },
        {
          label: 'Team Size',
          value: '8 designers, 12 engineers, 2 product managers',
        },
      ]}
      layout="vertical"
      density="comfortable"
      dividers={true}
    />
  ),
};

export const MixedContent: Story = {
  render: () => (
    <KeyValueList
      items={[
        {
          label: 'Website',
          value: <a href="#" className="text-[var(--ds-color-blue-600)] hover:underline">https://example.com</a>
        },
        {
          label: 'Tags',
          value: (
            <div className="flex gap-2">
              <Badge variant="secondary">Frontend</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
            </div>
          )
        },
        { label: 'Priority', value: 'High', badge: { label: 'Urgent', variant: 'destructive' } },
        { label: 'Assignees', value: '5 team members', icon: 'users' },
      ]}
      layout="horizontal"
      density="comfortable"
      dividers={false}
    />
  ),
};
