import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '../../src/components/patterns/EmptyState';
import { Card } from '../../src/components/ui/card';
import { Input } from '../../src/components/ui/input';

const meta = {
  title: 'Patterns/Empty States',
  component: EmptyState,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Empty States & No Data Views

Empty states are critical patterns in enterprise applications that handle scenarios when data is unavailable, not yet configured, or filtered out. They prevent user confusion and support orientation in unfamiliar systems.

## When to Use

- **First-time use**: Guide new users to get started
- **No results**: Explain why a search or filter returned nothing
- **No data yet**: Encourage users to add their first item
- **Error states**: Explain what went wrong and how to fix it
- **Permissions**: Communicate access restrictions clearly

## Pattern Structure

1. **Icon**: Visual representation of the state (12-20 size units)
2. **Headline**: Clear, concise description (1-7 words)
3. **Description**: Optional supporting context (1-2 sentences)
4. **Primary CTA**: Main action to resolve the state
5. **Secondary CTA**: Optional alternative action

## Best Practices

- Keep headlines short and descriptive
- Use icons that match the context
- Always provide a clear next action
- Consider the user's mental model and current task
- Test empty states with real users to ensure clarity
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['no-data', 'no-results', 'first-use', 'error', 'permissions'],
      description: 'Visual and semantic variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the empty state',
    },
    headline: {
      control: 'text',
      description: 'Main headline text',
    },
    description: {
      control: 'text',
      description: 'Supporting description',
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const NoData: Story = {
  args: {
    variant: 'no-data',
    headline: 'No data available',
    description: 'Connect a data source to get started with your dashboard.',
    primaryAction: {
      label: 'Connect Data Source',
      onClick: () => console.log('Connect clicked'),
    },
  },
};

export const NoResults: Story = {
  args: {
    variant: 'no-results',
    headline: 'No results found',
    description: 'Try adjusting your search or filter to find what you\'re looking for.',
    primaryAction: {
      label: 'Clear Filters',
      onClick: () => console.log('Clear filters clicked'),
    },
    secondaryAction: {
      label: 'Reset Search',
      onClick: () => console.log('Reset search clicked'),
    },
  },
};

export const FirstUse: Story = {
  args: {
    variant: 'first-use',
    headline: 'Welcome! Let\'s get started',
    description: 'Create your first project to begin organizing your work.',
    primaryAction: {
      label: 'Create Project',
      onClick: () => console.log('Create project clicked'),
    },
    secondaryAction: {
      label: 'Take a Tour',
      onClick: () => console.log('Tour clicked'),
    },
  },
};

export const ErrorState: Story = {
  args: {
    variant: 'error',
    headline: 'Something went wrong',
    description: 'We couldn\'t load your data. Please try again or contact support if the problem persists.',
    primaryAction: {
      label: 'Try Again',
      onClick: () => console.log('Try again clicked'),
    },
    secondaryAction: {
      label: 'Contact Support',
      onClick: () => console.log('Contact support clicked'),
    },
  },
};

export const PermissionsRestricted: Story = {
  args: {
    variant: 'permissions',
    headline: 'Access restricted',
    description: 'You don\'t have permission to view this content. Request access from your administrator.',
    primaryAction: {
      label: 'Request Access',
      onClick: () => console.log('Request access clicked'),
    },
  },
};

// Size variants
export const SmallSize: Story = {
  args: {
    variant: 'no-data',
    size: 'sm',
    headline: 'No messages',
    description: 'Your inbox is empty.',
  },
};

export const MediumSize: Story = {
  args: {
    variant: 'no-data',
    size: 'md',
    headline: 'No messages',
    description: 'Your inbox is empty.',
  },
};

export const LargeSize: Story = {
  args: {
    variant: 'no-data',
    size: 'lg',
    headline: 'No messages',
    description: 'Your inbox is empty. Start a conversation to get things going.',
  },
};

// Real-world scenarios
export const EmptyInbox: Story = {
  name: 'Scenario: Empty Inbox',
  render: () => (
    <Card className="w-full max-w-4xl">
      <EmptyState
        variant="first-use"
        icon="message"
        headline="Your inbox is empty"
        description="You're all caught up! New messages will appear here when they arrive."
      />
    </Card>
  ),
};

export const NoSearchResults: Story = {
  name: 'Scenario: Search with No Results',
  render: () => (
    <div className="w-full max-w-4xl space-y-4">
      <Input placeholder="Search for customers..." defaultValue="xyz123" />
      <Card>
        <EmptyState
          variant="no-results"
          headline="No customers found"
          description='We could not find any customers matching "xyz123". Try a different search term.'
          primaryAction={{
            label: 'Clear Search',
            onClick: () => console.log('Clear search'),
          }}
        />
      </Card>
    </div>
  ),
};

export const FirstTimeUser: Story = {
  name: 'Scenario: First-Time User Dashboard',
  render: () => (
    <Card className="w-full max-w-4xl min-h-[400px] flex items-center justify-center">
      <EmptyState
        variant="first-use"
        icon="analytics"
        headline="Welcome to your dashboard"
        description="Get started by connecting your first data source. We'll help you visualize your metrics in real-time."
        primaryAction={{
          label: 'Connect Data Source',
          onClick: () => console.log('Connect data source'),
        }}
        secondaryAction={{
          label: 'Watch Tutorial',
          onClick: () => console.log('Watch tutorial'),
        }}
      />
    </Card>
  ),
};

export const EmptyCart: Story = {
  name: 'Scenario: Empty Shopping Cart',
  render: () => (
    <Card className="w-full max-w-4xl">
      <EmptyState
        variant="no-data"
        icon="document"
        headline="Your cart is empty"
        description="Browse our services and add them to your cart to get started."
        primaryAction={{
          label: 'Browse Services',
          onClick: () => console.log('Browse services'),
        }}
      />
    </Card>
  ),
};

export const FilteredOutData: Story = {
  name: 'Scenario: Filtered View (No Matches)',
  render: () => (
    <div className="w-full max-w-4xl space-y-4">
      <div className="flex gap-2 flex-wrap">
        <span className="px-3 py-1 bg-[var(--ds-color-blue-100)] text-[var(--ds-color-blue-700)] rounded-full text-sm">
          Status: Active
        </span>
        <span className="px-3 py-1 bg-[var(--ds-color-blue-100)] text-[var(--ds-color-blue-700)] rounded-full text-sm">
          Region: West
        </span>
        <span className="px-3 py-1 bg-[var(--ds-color-blue-100)] text-[var(--ds-color-blue-700)] rounded-full text-sm">
          Type: Enterprise
        </span>
      </div>
      <Card>
        <EmptyState
          variant="no-results"
          headline="No accounts match your filters"
          description="Try removing some filters to see more results."
          primaryAction={{
            label: 'Clear All Filters',
            onClick: () => console.log('Clear filters'),
          }}
        />
      </Card>
    </div>
  ),
};

export const ConnectionError: Story = {
  name: 'Scenario: Data Connection Failed',
  render: () => (
    <Card className="w-full max-w-4xl">
      <EmptyState
        variant="error"
        icon="blockers"
        headline="Connection failed"
        description="We couldn't connect to your data source. Check your connection settings and try again."
        primaryAction={{
          label: 'Retry Connection',
          onClick: () => console.log('Retry connection'),
        }}
        secondaryAction={{
          label: 'View Settings',
          onClick: () => console.log('View settings'),
        }}
      />
    </Card>
  ),
};

export const RestrictedFeature: Story = {
  name: 'Scenario: Feature Requires Upgrade',
  render: () => (
    <Card className="w-full max-w-4xl">
      <EmptyState
        variant="permissions"
        icon="lock"
        headline="Premium feature"
        description="Advanced analytics are available on Business and Enterprise plans. Upgrade to unlock insights."
        primaryAction={{
          label: 'Upgrade Plan',
          onClick: () => console.log('Upgrade plan'),
        }}
        secondaryAction={{
          label: 'Learn More',
          onClick: () => console.log('Learn more'),
        }}
      />
    </Card>
  ),
};

// Interactive playground
export const Playground: Story = {
  args: {
    variant: 'no-data',
    size: 'md',
    headline: 'Customize your empty state',
    description: 'Use the controls below to experiment with different configurations.',
    primaryAction: {
      label: 'Primary Action',
      onClick: () => console.log('Primary action clicked'),
    },
    secondaryAction: {
      label: 'Secondary Action',
      onClick: () => console.log('Secondary action clicked'),
    },
  },
};
