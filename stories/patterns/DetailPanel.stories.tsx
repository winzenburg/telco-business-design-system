import type { Meta, StoryObj } from '@storybook/react';
import { DetailPanel, DetailPanelGroup } from '../../src/components/patterns/DetailPanel';
import { KeyValueList } from '../../src/components/patterns/KeyValuePair';
import { Button } from '../../src/components/ui/button';

const meta = {
  title: 'Patterns/Content & Data Display/DetailPanel',
  component: DetailPanel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'An expandable panel component for organizing detailed information with support for collapsible sections, icons, badges, and custom actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Panel title',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle or description',
    },
    expandable: {
      control: 'boolean',
      description: 'Whether the panel is expandable/collapsible',
    },
    density: {
      control: 'select',
      options: ['compact', 'comfortable', 'spacious'],
      description: 'Density variant',
    },
  },
} satisfies Meta<typeof DetailPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Customer Information',
    children: (
      <KeyValueList
        items={[
          { label: 'Name', value: 'John Doe' },
          { label: 'Email', value: 'john.doe@example.com' },
          { label: 'Phone', value: '+1 (555) 123-4567' },
        ]}
        layout="horizontal"
        labelWidth="md"
      />
    ),
  },
};

export const Expandable: Story = {
  args: {
    title: 'Account Details',
    subtitle: 'Click to expand or collapse',
    expandable: true,
    defaultExpanded: false,
    children: (
      <KeyValueList
        items={[
          { label: 'Account ID', value: 'ACCT-12345', valueStyle: 'mono' },
          { label: 'Created', value: 'January 15, 2023' },
          { label: 'Status', value: 'Active', badge: { label: 'Verified', variant: 'success' } },
          { label: 'Plan', value: 'Enterprise' },
        ]}
        layout="horizontal"
        labelWidth="md"
      />
    ),
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Billing Information',
    icon: 'credit-card',
    children: (
      <KeyValueList
        items={[
          { label: 'Card Type', value: 'Visa' },
          { label: 'Last 4 Digits', value: '4242', valueStyle: 'mono' },
          { label: 'Expiry', value: '12/2025' },
          { label: 'Billing Address', value: '123 Main St, New York, NY 10001' },
        ]}
        layout="horizontal"
        labelWidth="md"
      />
    ),
  },
};

export const WithBadge: Story = {
  args: {
    title: 'System Status',
    badge: {
      label: 'Healthy',
      variant: 'success',
    },
    icon: 'activity',
    children: (
      <div className="space-y-4">
        <p className="text-sm text-[var(--ds-color-text-secondary)]">
          All systems are operating normally with no reported issues.
        </p>
        <KeyValueList
          items={[
            { label: 'Uptime', value: '99.9%' },
            { label: 'Response Time', value: '45ms' },
            { label: 'Active Servers', value: '24 / 24' },
          ]}
          layout="horizontal"
          labelWidth="md"
        />
      </div>
    ),
  },
};

export const WithHeaderActions: Story = {
  args: {
    title: 'Project Settings',
    icon: 'settings',
    headerActions: (
      <Button variant="ghost" size="sm">
        Edit
      </Button>
    ),
    children: (
      <KeyValueList
        items={[
          { label: 'Project Name', value: 'Design System' },
          { label: 'Owner', value: 'Sarah Johnson' },
          { label: 'Visibility', value: 'Private' },
          { label: 'Last Updated', value: '2 hours ago' },
        ]}
        layout="horizontal"
        labelWidth="md"
      />
    ),
  },
};

export const WithDivider: Story = {
  args: {
    title: 'Order Summary',
    icon: 'shopping-bag',
    divider: true,
    children: (
      <div className="space-y-4">
        <KeyValueList
          items={[
            { label: 'Order Number', value: '#ORD-2024-1234', valueStyle: 'mono' },
            { label: 'Order Date', value: 'March 15, 2024' },
            { label: 'Total Items', value: '5' },
          ]}
          layout="horizontal"
          labelWidth="md"
        />
        <div className="pt-3 border-t border-[var(--ds-color-neutral-300)]">
          <KeyValueList
            items={[
              { label: 'Subtotal', value: '$1,125.00' },
              { label: 'Tax', value: '$90.00' },
              { label: 'Total', value: '$1,215.00', valueStyle: 'strong' },
            ]}
            layout="horizontal"
            labelWidth="md"
          />
        </div>
      </div>
    ),
  },
};

export const AllDensities: Story = {
  args: {},
  render: () => (
    <div className="space-y-4">
      <DetailPanel
        title="Compact Panel"
        subtitle="Compact density for information-dense layouts"
        density="compact"
      >
        <p className="text-sm">This panel uses compact density spacing.</p>
      </DetailPanel>
      <DetailPanel
        title="Comfortable Panel"
        subtitle="Comfortable density (default)"
        density="comfortable"
      >
        <p className="text-base">This panel uses comfortable density spacing.</p>
      </DetailPanel>
      <DetailPanel
        title="Spacious Panel"
        subtitle="Spacious density for emphasis"
        density="spacious"
      >
        <p className="text-lg">This panel uses spacious density spacing.</p>
      </DetailPanel>
    </div>
  ),
};

export const DetailPanelGroupComponent: Story = {
  args: {},
  render: () => (
    <DetailPanelGroup
      panels={[
        {
          title: 'Personal Information',
          icon: 'user',
          expandable: true,
          defaultExpanded: true,
          children: (
            <KeyValueList
              items={[
                { label: 'Full Name', value: 'Sarah Johnson' },
                { label: 'Email', value: 'sarah.johnson@company.com', copyable: true },
                { label: 'Phone', value: '+1 (555) 123-4567' },
                { label: 'Location', value: 'New York, NY' },
              ]}
              layout="horizontal"
              labelWidth="md"
            />
          ),
        },
        {
          title: 'Account Settings',
          icon: 'settings',
          expandable: true,
          defaultExpanded: false,
          children: (
            <KeyValueList
              items={[
                { label: 'Account ID', value: 'USR-98765', valueStyle: 'mono' },
                { label: 'Member Since', value: 'January 2023' },
                { label: 'Subscription', value: 'Pro', badge: { label: 'Active', variant: 'success' } },
                { label: 'Storage Used', value: '42.8 GB / 100 GB' },
              ]}
              layout="horizontal"
              labelWidth="md"
            />
          ),
        },
        {
          title: 'Security',
          icon: 'shield',
          expandable: true,
          defaultExpanded: false,
          badge: {
            label: 'Verified',
            variant: 'success',
          },
          children: (
            <KeyValueList
              items={[
                { label: '2FA Enabled', value: 'Yes', badge: { label: 'Active', variant: 'success' } },
                { label: 'Last Login', value: '2 hours ago' },
                { label: 'Login Method', value: 'SSO (Google)' },
                { label: 'Active Sessions', value: '3' },
              ]}
              layout="horizontal"
              labelWidth="md"
            />
          ),
        },
      ]}
      density="comfortable"
      dividers={true}
    />
  ),
};

export const AccordionMode: Story = {
  args: {},
  render: () => (
    <DetailPanelGroup
      accordion={true}
      panels={[
        {
          title: 'Section 1',
          icon: 'file-text',
          expandable: true,
          children: <p>Only one section can be open at a time in accordion mode.</p>,
        },
        {
          title: 'Section 2',
          icon: 'folder',
          expandable: true,
          children: <p>Click another section to automatically close the current one.</p>,
        },
        {
          title: 'Section 3',
          icon: 'archive',
          expandable: true,
          children: <p>This ensures users focus on one section at a time.</p>,
        },
      ]}
      density="comfortable"
    />
  ),
};

export const OrderDetailsExample: Story = {
  args: {},
  render: () => (
    <DetailPanelGroup
      panels={[
        {
          title: 'Order Information',
          icon: 'shopping-cart',
          badge: { label: 'Shipped', variant: 'default' },
          expandable: true,
          defaultExpanded: true,
          divider: true,
          children: (
            <KeyValueList
              items={[
                { label: 'Order Number', value: '#ORD-2024-5678', valueStyle: 'mono', copyable: true },
                { label: 'Order Date', value: 'March 15, 2024', icon: 'calendar' },
                { label: 'Status', value: 'Shipped', badge: { label: 'In Transit', variant: 'default' } },
                { label: 'Tracking', value: '1Z999AA10123456784', copyable: true, valueStyle: 'mono' },
              ]}
              layout="horizontal"
              labelWidth="md"
            />
          ),
        },
        {
          title: 'Shipping Address',
          icon: 'map-pin',
          expandable: true,
          defaultExpanded: false,
          children: (
            <div className="text-sm">
              <p className="font-medium">John Doe</p>
              <p className="text-[var(--ds-color-text-secondary)] mt-1">
                123 Main Street<br />
                Apartment 4B<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
          ),
        },
        {
          title: 'Payment Method',
          icon: 'credit-card',
          expandable: true,
          defaultExpanded: false,
          children: (
            <KeyValueList
              items={[
                { label: 'Card Type', value: 'Visa' },
                { label: 'Last 4 Digits', value: '4242', valueStyle: 'mono' },
                { label: 'Expiry', value: '12/2025' },
              ]}
              layout="horizontal"
              labelWidth="md"
            />
          ),
        },
        {
          title: 'Order Total',
          icon: 'dollar-sign',
          expandable: true,
          defaultExpanded: true,
          divider: true,
          children: (
            <KeyValueList
              items={[
                { label: 'Subtotal', value: '$1,125.00' },
                { label: 'Shipping', value: '$15.00' },
                { label: 'Tax', value: '$90.00' },
                { label: 'Total', value: '$1,230.00', valueStyle: 'strong' },
              ]}
              layout="horizontal"
              labelWidth="md"
              dividers={true}
            />
          ),
        },
      ]}
      density="comfortable"
    />
  ),
};

export const CompactGroup: Story = {
  args: {},
  render: () => (
    <DetailPanelGroup
      panels={[
        {
          title: 'CPU Usage',
          icon: 'cpu',
          badge: { label: '45%', variant: 'success' },
          children: <p className="text-sm">System CPU utilization is within normal parameters.</p>,
        },
        {
          title: 'Memory',
          icon: 'hard-drive',
          badge: { label: '2.4 GB', variant: 'default' },
          children: <p className="text-sm">Memory usage: 2.4 GB of 8 GB available.</p>,
        },
        {
          title: 'Network',
          icon: 'wifi',
          badge: { label: '125 Mbps', variant: 'success' },
          children: <p className="text-sm">Network throughput is excellent.</p>,
        },
      ]}
      density="compact"
      dividers={false}
    />
  ),
};
