import type { Meta, StoryObj } from '@storybook/react';
import { SummaryCard } from '../../src/components/patterns/SummaryCard';

const meta = {
  title: 'Patterns/Content & Data Display/SummaryCard',
  component: SummaryCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile summary card component for displaying key metrics, status information, and data visualizations with support for multiple density levels and status indicators.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    value: {
      control: 'text',
      description: 'Main value to display',
    },
    description: {
      control: 'text',
      description: 'Supporting description text',
    },
    status: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info', 'neutral', undefined],
      description: 'Status indicator',
    },
    density: {
      control: 'select',
      options: ['compact', 'comfortable', 'spacious'],
      description: 'Density variant',
    },
    icon: {
      control: 'text',
      description: 'Icon name from design system',
    },
  },
} satisfies Meta<typeof SummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Total Revenue',
    value: '$48,574',
    description: 'Total revenue from all sources this month',
    icon: 'dollar-sign',
    density: 'comfortable',
  },
};

export const WithTrend: Story = {
  args: {
    title: 'Active Users',
    value: '2,345',
    description: 'Currently active users on the platform',
    icon: 'users',
    trend: {
      value: '+12.5%',
      direction: 'up',
    },
    density: 'comfortable',
  },
};

export const WithStatus: Story = {
  args: {
    title: 'System Health',
    value: '99.9%',
    description: 'Uptime over the last 30 days',
    icon: 'activity',
    status: 'success',
    statusLabel: 'Healthy',
    density: 'comfortable',
  },
};

export const ErrorState: Story = {
  args: {
    title: 'Failed Requests',
    value: '127',
    description: 'API requests that returned errors',
    icon: 'alert-circle',
    status: 'error',
    statusLabel: 'Critical',
    trend: {
      value: '+45%',
      direction: 'up',
    },
    density: 'comfortable',
  },
};

export const WithAction: Story = {
  args: {
    title: 'Storage Used',
    value: '84.2 GB',
    description: 'Out of 100 GB available',
    icon: 'hard-drive',
    status: 'warning',
    statusLabel: 'Almost Full',
    action: {
      label: 'Manage',
      onClick: () => alert('Manage storage clicked'),
    },
    density: 'comfortable',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Monthly Sales',
    value: '$156,284',
    description: 'Total sales for current month',
    icon: 'shopping-bag',
    trend: {
      value: '+8.2%',
      direction: 'up',
    },
    footer: (
      <div className="text-sm text-[var(--ds-color-text-secondary)]">
        <span className="font-medium">Target:</span> $175,000 (89% complete)
      </div>
    ),
    density: 'comfortable',
  },
};

export const CompactDensity: Story = {
  args: {
    title: 'Pending Orders',
    value: '42',
    description: 'Orders awaiting fulfillment',
    icon: 'package',
    status: 'info',
    statusLabel: 'In Queue',
    density: 'compact',
  },
};

export const SpaciousDensity: Story = {
  args: {
    title: 'Customer Satisfaction',
    value: '4.8',
    description: 'Average rating from customer surveys',
    icon: 'star',
    status: 'success',
    statusLabel: 'Excellent',
    trend: {
      value: '+0.3',
      direction: 'up',
    },
    density: 'spacious',
  },
};

export const AllDensities: Story = {
  render: () => (
    <div className="space-y-4">
      <SummaryCard
        title="Compact"
        value="1,234"
        description="Compact density for information-dense dashboards"
        icon="bar-chart"
        density="compact"
      />
      <SummaryCard
        title="Comfortable"
        value="5,678"
        description="Comfortable density (default) balances space and information"
        icon="bar-chart"
        density="comfortable"
      />
      <SummaryCard
        title="Spacious"
        value="9,012"
        description="Spacious density for prominent metrics and executive dashboards"
        icon="bar-chart"
        density="spacious"
      />
    </div>
  ),
};

export const AllStatuses: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SummaryCard
        title="Success Metric"
        value="98.5%"
        description="System performing optimally"
        icon="check-circle"
        status="success"
        statusLabel="Healthy"
      />
      <SummaryCard
        title="Warning Metric"
        value="75.2%"
        description="Approaching threshold limit"
        icon="alert-triangle"
        status="warning"
        statusLabel="Warning"
      />
      <SummaryCard
        title="Error Metric"
        value="12"
        description="Critical issues detected"
        icon="x-circle"
        status="error"
        statusLabel="Critical"
      />
      <SummaryCard
        title="Info Metric"
        value="456"
        description="General information display"
        icon="info"
        status="info"
        statusLabel="Information"
      />
      <SummaryCard
        title="Neutral Metric"
        value="234"
        description="No specific status indicated"
        icon="circle"
        status="neutral"
        statusLabel="Neutral"
      />
      <SummaryCard
        title="No Status"
        value="789"
        description="Card without status indicator"
        icon="bar-chart-2"
      />
    </div>
  ),
};

export const DashboardExample: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <SummaryCard
        title="Total Revenue"
        value="$248.5K"
        icon="dollar-sign"
        trend={{ value: '+18.2%', direction: 'up' }}
        description="vs. last month"
        density="compact"
      />
      <SummaryCard
        title="New Customers"
        value="1,429"
        icon="users"
        trend={{ value: '+12.4%', direction: 'up' }}
        description="vs. last month"
        density="compact"
      />
      <SummaryCard
        title="Avg. Order Value"
        value="$174"
        icon="shopping-cart"
        trend={{ value: '-2.1%', direction: 'down' }}
        description="vs. last month"
        density="compact"
      />
      <SummaryCard
        title="Conversion Rate"
        value="3.24%"
        icon="trending-up"
        trend={{ value: '+0.5%', direction: 'up' }}
        description="vs. last month"
        status="success"
        statusLabel="On Target"
        density="compact"
      />
    </div>
  ),
};

export const WithoutIcon: Story = {
  args: {
    title: 'Total Orders',
    value: '3,456',
    description: 'Orders processed this quarter',
    trend: {
      value: '+23.1%',
      direction: 'up',
    },
    density: 'comfortable',
  },
};

export const NegativeTrend: Story = {
  args: {
    title: 'Support Tickets',
    value: '89',
    description: 'Open support tickets',
    icon: 'message-circle',
    trend: {
      value: '-15.8%',
      direction: 'down',
    },
    status: 'success',
    statusLabel: 'Improving',
    density: 'comfortable',
  },
};

export const LongText: Story = {
  args: {
    title: 'Average Customer Lifetime Value Across All Segments',
    value: '$12,456.78',
    description: 'This is a very long description that demonstrates how the card handles longer text content. It should wrap appropriately and maintain readability across different screen sizes.',
    icon: 'dollar-sign',
    trend: {
      value: '+8.5%',
      direction: 'up',
    },
    density: 'comfortable',
  },
};
