import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '../../../components/ui/toast';
import { Button } from '../../../components/ui/button';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A succinct message that is displayed temporarily.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-4">
        <Button onClick={() => setOpen(true)}>Show Toast</Button>
        <Toast open={open} onOpenChange={setOpen}>
          <div className="grid gap-1">
            <ToastTitle>Scheduled: Catch up</ToastTitle>
            <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
          </div>
          <ToastClose />
        </Toast>
      </div>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-4">
        <Button onClick={() => setOpen(true)}>Show Toast with Action</Button>
        <Toast open={open} onOpenChange={setOpen}>
          <div className="grid gap-1">
            <ToastTitle>Uh oh! Something went wrong.</ToastTitle>
            <ToastDescription>There was a problem with your request.</ToastDescription>
          </div>
          <ToastAction altText="Try again">Try again</ToastAction>
          <ToastClose />
        </Toast>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [toasts, setToasts] = useState<{ [key: string]: boolean }>({});

    const showToast = (key: string) => {
      setToasts(prev => ({ ...prev, [key]: true }));
    };

    const hideToast = (key: string) => {
      setToasts(prev => ({ ...prev, [key]: false }));
    };

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" onClick={() => showToast('default')}>
            Default Toast
          </Button>
          <Button variant="outline" onClick={() => showToast('success')}>
            Success Toast
          </Button>
          <Button variant="outline" onClick={() => showToast('warning')}>
            Warning Toast
          </Button>
          <Button variant="outline" onClick={() => showToast('destructive')}>
            Error Toast
          </Button>
          <Button variant="outline" onClick={() => showToast('info')}>
            Info Toast
          </Button>
        </div>

        <Toast open={toasts.default} onOpenChange={() => hideToast('default')}>
          <div className="grid gap-1">
            <ToastTitle>Default notification</ToastTitle>
            <ToastDescription>This is a standard notification message.</ToastDescription>
          </div>
          <ToastClose />
        </Toast>

        <Toast variant="success" open={toasts.success} onOpenChange={() => hideToast('success')}>
          <div className="grid gap-1">
            <ToastTitle>Success!</ToastTitle>
            <ToastDescription>Your changes have been saved successfully.</ToastDescription>
          </div>
          <ToastClose />
        </Toast>

        <Toast variant="warning" open={toasts.warning} onOpenChange={() => hideToast('warning')}>
          <div className="grid gap-1">
            <ToastTitle>Warning</ToastTitle>
            <ToastDescription>Please review your settings before proceeding.</ToastDescription>
          </div>
          <ToastClose />
        </Toast>

        <Toast variant="destructive" open={toasts.destructive} onOpenChange={() => hideToast('destructive')}>
          <div className="grid gap-1">
            <ToastTitle>Error</ToastTitle>
            <ToastDescription>Something went wrong. Please try again.</ToastDescription>
          </div>
          <ToastClose />
        </Toast>

        <Toast variant="info" open={toasts.info} onOpenChange={() => hideToast('info')}>
          <div className="grid gap-1">
            <ToastTitle>Information</ToastTitle>
            <ToastDescription>New features are now available in your dashboard.</ToastDescription>
          </div>
          <ToastClose />
        </Toast>
      </div>
    );
  },
};

export const BusinessNotifications: Story = {
  render: () => {
    const [toasts, setToasts] = useState<{ [key: string]: boolean }>({});

    const showToast = (key: string) => {
      setToasts(prev => ({ ...prev, [key]: true }));
    };

    const hideToast = (key: string) => {
      setToasts(prev => ({ ...prev, [key]: false }));
    };

    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-[#15172B] font-primary mb-4">Business Service Notifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button variant="outline" onClick={() => showToast('payment')}>
              <Icon name="wallet" size={16} color="currentColor" className="mr-2" />
              Payment Success
            </Button>
            <Button variant="outline" onClick={() => showToast('service')}>
              <Icon name="wifi" size={16} color="currentColor" className="mr-2" />
              Service Update
            </Button>
            <Button variant="outline" onClick={() => showToast('maintenance')}>
              <Icon name="configure" size={16} color="currentColor" className="mr-2" />
              Maintenance Alert
            </Button>
            <Button variant="outline" onClick={() => showToast('support')}>
              <Icon name="gethelp" size={16} color="currentColor" className="mr-2" />
              Support Ticket
            </Button>
          </div>
        </div>

        {/* Payment Success Toast */}
        <Toast variant="success" open={toasts.payment} onOpenChange={() => hideToast('payment')}>
          <div className="flex items-start gap-3">
            <Icon name="wallet" size={20} color="#16a34a" className="mt-0.5" />
            <div className="grid gap-1">
              <ToastTitle>Payment Processed Successfully</ToastTitle>
              <ToastDescription>
                Your monthly payment of $362.00 has been processed and applied to your account.
              </ToastDescription>
            </div>
          </div>
          <ToastAction 
            altText="View receipt"
            onClick={() => alert('View receipt clicked')}
          >
            View Receipt
          </ToastAction>
          <ToastClose />
        </Toast>

        {/* Service Update Toast */}
        <Toast variant="info" open={toasts.service} onOpenChange={() => hideToast('service')}>
          <div className="flex items-start gap-3">
            <Icon name="wifi" size={20} color="#0D62FF" className="mt-0.5" />
            <div className="grid gap-1">
              <ToastTitle>Internet Pro Service Updated</ToastTitle>
              <ToastDescription>
                Your internet speed has been upgraded to 200 Mbps. Changes are now active.
              </ToastDescription>
            </div>
          </div>
          <ToastAction 
            altText="Test speed"
            onClick={() => alert('Speed test started')}
          >
            Test Speed
          </ToastAction>
          <ToastClose />
        </Toast>

        {/* Maintenance Alert Toast */}
        <Toast variant="warning" open={toasts.maintenance} onOpenChange={() => hideToast('maintenance')}>
          <div className="flex items-start gap-3">
            <Icon name="configure" size={20} color="#f59e0b" className="mt-0.5" />
            <div className="grid gap-1">
              <ToastTitle>Scheduled Maintenance</ToastTitle>
              <ToastDescription>
                Network maintenance is scheduled for Sunday, Dec 15th from 2:00 AM - 4:00 AM EST.
              </ToastDescription>
            </div>
          </div>
          <ToastAction 
            altText="View details"
            onClick={() => alert('Maintenance details opened')}
          >
            View Details
          </ToastAction>
          <ToastClose />
        </Toast>

        {/* Support Ticket Toast */}
        <Toast variant="success" open={toasts.support} onOpenChange={() => hideToast('support')}>
          <div className="flex items-start gap-3">
            <Icon name="gethelp" size={20} color="#16a34a" className="mt-0.5" />
            <div className="grid gap-1">
              <ToastTitle>Support Ticket Created</ToastTitle>
              <ToastDescription>
                Your support request (#12345) has been submitted. We'll respond within 2 hours.
              </ToastDescription>
            </div>
          </div>
          <ToastAction 
            altText="View ticket"
            onClick={() => alert('Support ticket opened')}
          >
            View Ticket
          </ToastAction>
          <ToastClose />
        </Toast>
      </div>
    );
  },
};

export const ServiceAlerts: Story = {
  render: () => {
    const [toasts, setToasts] = useState<{ [key: string]: boolean }>({});

    const showToast = (key: string) => {
      setToasts(prev => ({ ...prev, [key]: true }));
    };

    const hideToast = (key: string) => {
      setToasts(prev => ({ ...prev, [key]: false }));
    };

    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-[#15172B] font-primary mb-4">Service Status Alerts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button variant="outline" onClick={() => showToast('outage')}>
              Service Outage
            </Button>
            <Button variant="outline" onClick={() => showToast('restored')}>
              Service Restored
            </Button>
            <Button variant="outline" onClick={() => showToast('usage')}>
              Usage Alert
            </Button>
            <Button variant="outline" onClick={() => showToast('billing')}>
              Billing Reminder
            </Button>
          </div>
        </div>

        {/* Service Outage Toast */}
        <Toast variant="destructive" open={toasts.outage} onOpenChange={() => hideToast('outage')}>
          <div className="flex items-start gap-3">
            <Icon name="alert" size={20} color="#dc2626" className="mt-0.5" />
            <div className="grid gap-1">
              <ToastTitle>Service Interruption Detected</ToastTitle>
              <ToastDescription>
                There's an issue with your Internet Pro service. Our team is investigating and will restore service shortly.
              </ToastDescription>
            </div>
          </div>
          <ToastAction 
            altText="Get status updates"
            onClick={() => alert('Status page opened')}
          >
            Status Updates
          </ToastAction>
          <ToastClose />
        </Toast>

        {/* Service Restored Toast */}
        <Toast variant="success" open={toasts.restored} onOpenChange={() => hideToast('restored')}>
          <div className="flex items-start gap-3">
            <Icon name="wifi" size={20} color="#16a34a" className="mt-0.5" />
            <div className="grid gap-1">
              <ToastTitle>Service Fully Restored</ToastTitle>
              <ToastDescription>
                Your Internet Pro service is back online and operating normally. Thank you for your patience.
              </ToastDescription>
            </div>
          </div>
          <ToastAction 
            altText="Test connection"
            onClick={() => alert('Connection test started')}
          >
            Test Connection
          </ToastAction>
          <ToastClose />
        </Toast>

        {/* Usage Alert Toast */}
        <Toast variant="warning" open={toasts.usage} onOpenChange={() => hideToast('usage')}>
          <div className="flex items-start gap-3">
            <Icon name="analytics" size={20} color="#f59e0b" className="mt-0.5" />
            <div className="grid gap-1">
              <ToastTitle>High Data Usage Alert</ToastTitle>
              <ToastDescription>
                You've used 85% of your monthly data allowance. Consider upgrading your plan to avoid overage charges.
              </ToastDescription>
            </div>
          </div>
          <ToastAction 
            altText="Upgrade plan"
            onClick={() => alert('Plan upgrade page opened')}
          >
            Upgrade Plan
          </ToastAction>
          <ToastClose />
        </Toast>

        {/* Billing Reminder Toast */}
        <Toast variant="info" open={toasts.billing} onOpenChange={() => hideToast('billing')}>
          <div className="flex items-start gap-3">
            <Icon name="document" size={20} color="#0D62FF" className="mt-0.5" />
            <div className="grid gap-1">
              <ToastTitle>Bill Available</ToastTitle>
              <ToastDescription>
                Your December bill for $362.00 is now available. Payment is due by December 15th.
              </ToastDescription>
            </div>
          </div>
          <ToastAction 
            altText="Pay now"
            onClick={() => alert('Payment page opened')}
          >
            Pay Now
          </ToastAction>
          <ToastClose />
        </Toast>
      </div>
    );
  },
};