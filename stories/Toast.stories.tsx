import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toaster } from '../src/components/ui/sonner';
import { Button } from '../src/components/ui/button';
import { toast } from 'sonner';

const meta: Meta = {
  title: 'Toast',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A toast notification system built on Sonner following ShadCN/UI patterns with design system tokens. Features promise toasts, action buttons, and various notification types.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj;

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button onClick={() => toast('Default notification')}>
        Default
      </Button>
      <Button onClick={() => toast.success('Success notification')}>
        Success
      </Button>
      <Button onClick={() => toast.error('Error notification')}>
        Error
      </Button>
      <Button onClick={() => toast.warning('Warning notification')}>
        Warning
      </Button>
      <Button onClick={() => toast.info('Info notification')}>
        Info
      </Button>
      <Button onClick={() => toast.loading('Loading...')}>
        Loading
      </Button>
    </div>
  ),
};

// Default Toast
export const Default: Story = {
  render: () => (
    <Button onClick={() => toast('Event has been created')}>
      Show Toast
    </Button>
  ),
};

// Toast with Description
export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
        })
      }
    >
      Show Toast
    </Button>
  ),
};

// Success Toast
export const Success: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.success('Service activated successfully', {
          description: 'Your internet service is now active',
        })
      }
    >
      Show Success Toast
    </Button>
  ),
};

// Error Toast
export const Error: Story = {
  render: () => (
    <Button
      variant="destructive"
      onClick={() =>
        toast.error('Failed to process payment', {
          description: 'Please check your payment information and try again',
        })
      }
    >
      Show Error Toast
    </Button>
  ),
};

// Warning Toast
export const Warning: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.warning('Your session will expire soon', {
          description: 'Please save your work to avoid losing any changes',
        })
      }
    >
      Show Warning Toast
    </Button>
  ),
};

// Info Toast
export const Info: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.info('Maintenance scheduled', {
          description: 'System maintenance is scheduled for tonight at 2 AM',
        })
      }
    >
      Show Info Toast
    </Button>
  ),
};

// Toast with Action
export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => toast('Event has been deleted'),
          },
        })
      }
    >
      Show Toast with Action
    </Button>
  ),
};

// Toast with Cancel Button
export const WithCancel: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('Are you sure you want to continue?', {
          description: 'This action cannot be undone',
          cancel: {
            label: 'Cancel',
            onClick: () => toast('Action cancelled'),
          },
          action: {
            label: 'Continue',
            onClick: () => toast('Action confirmed'),
          },
        })
      }
    >
      Show Toast with Cancel
    </Button>
  ),
};

// Promise Toast
export const Promise: Story = {
  render: () => {
    const promise = () =>
      new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

    return (
      <Button
        onClick={() =>
          toast.promise(promise, {
            loading: 'Processing your request...',
            success: (data: any) => `Successfully completed`,
            error: 'An error occurred',
          })
        }
      >
        Show Promise Toast
      </Button>
    );
  },
};

// Loading Toast
export const Loading: Story = {
  render: () => (
    <Button onClick={() => toast.loading('Processing payment...')}>
      Show Loading Toast
    </Button>
  ),
};

// Custom Duration
export const CustomDuration: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast('This notification will stay for 10 seconds', {
          duration: 10000,
        })
      }
    >
      Show Toast (10s)
    </Button>
  ),
};

// Business Use Cases
export const ServiceActivation: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.success('Business Internet Activated', {
          description: 'Your 1 Gbps fiber connection is now active',
          action: {
            label: 'View Details',
            onClick: () => toast('Opening service details...'),
          },
        })
      }
    >
      Service Activation
    </Button>
  ),
};

export const PaymentSuccess: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.success('Payment Processed', {
          description: '$149.99 charged to card ending in 4242',
          action: {
            label: 'View Receipt',
            onClick: () => toast('Opening receipt...'),
          },
        })
      }
    >
      Payment Success
    </Button>
  ),
};

export const ServiceInterruption: Story = {
  render: () => (
    <Button
      variant="destructive"
      onClick={() =>
        toast.error('Service Interruption Detected', {
          description: 'We are working to restore your connection',
          action: {
            label: 'Check Status',
            onClick: () => toast('Opening service status page...'),
          },
        })
      }
    >
      Service Interruption
    </Button>
  ),
};

export const BillingReminder: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.warning('Payment Due Soon', {
          description: 'Your payment of $149.99 is due on December 15',
          action: {
            label: 'Pay Now',
            onClick: () => toast('Redirecting to payment...'),
          },
        })
      }
    >
      Billing Reminder
    </Button>
  ),
};

export const MaintenanceNotification: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.info('Scheduled Maintenance', {
          description: 'Network maintenance tonight from 2 AM - 4 AM EST',
          action: {
            label: 'Learn More',
            onClick: () => toast('Opening maintenance details...'),
          },
        })
      }
    >
      Maintenance Alert
    </Button>
  ),
};

export const OrderConfirmation: Story = {
  render: () => {
    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ orderId: 'ORD-12345' }), 2000)
      );

    return (
      <Button
        onClick={() =>
          toast.promise(promise, {
            loading: 'Processing your order...',
            success: () => 'Order confirmed! Check your email for details',
            error: 'Failed to process order. Please try again',
          })
        }
      >
        Place Order
      </Button>
    );
  },
};

export const UpgradeService: Story = {
  render: () => {
    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ service: 'upgraded' }), 3000)
      );

    return (
      <Button
        onClick={() =>
          toast.promise(promise, {
            loading: 'Upgrading your service plan...',
            success: 'Successfully upgraded to 10 Gbps Fiber',
            error: 'Failed to upgrade service',
            duration: 5000,
          })
        }
      >
        Upgrade Service
      </Button>
    );
  },
};