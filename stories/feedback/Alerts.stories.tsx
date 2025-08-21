import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  Alert,
  AlertTitle,
  AlertDescription,
  Badge,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastProvider,
  ToastViewport,
  Button
} from '../../src/components';

const meta: Meta = {
  title: 'Components/Feedback/Alerts & Notifications',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Feedback components for user notifications and status messages in Comcast Business applications.'
      }
    }
  },
};

export default meta;
type Story = StoryObj;

export const AlertComponents: Story = {
  name: 'Alert Messages',
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <h2 className="text-xl font-semibold text-[#2B2D3F]">System Alerts</h2>
      
      <Alert variant="info">
        <AlertTitle>Service Update</AlertTitle>
        <AlertDescription>
          Your internet service will be upgraded tonight from 2-4 AM EST for improved performance.
        </AlertDescription>
      </Alert>
      
      <Alert variant="success">
        <AlertTitle>Payment Processed</AlertTitle>
        <AlertDescription>
          Your monthly payment of $89.99 has been successfully processed.
        </AlertDescription>
      </Alert>
      
      <Alert variant="warning">
        <AlertTitle>Billing Reminder</AlertTitle>
        <AlertDescription>
          Your auto-pay method expires next month. Please update your payment information.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertTitle>Service Interruption</AlertTitle>
        <AlertDescription>
          We're experiencing connectivity issues in your area. Our team is working on a resolution.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

export const StatusBadges: Story = {
  name: 'Status Badges',
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#2B2D3F]">Service Status</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="success">Active</Badge>
          <Badge variant="info">Pending Setup</Badge>
          <Badge variant="warning">Maintenance</Badge>
          <Badge variant="destructive">Service Issue</Badge>
          <Badge variant="outline">Trial</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Account Types</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>Business Starter</Badge>
          <Badge variant="info">Professional</Badge>
          <Badge variant="secondary">Enterprise</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">Priority Levels</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="destructive" size="sm">Critical</Badge>
          <Badge variant="warning" size="sm">High</Badge>
          <Badge variant="info" size="sm">Medium</Badge>
          <Badge variant="success" size="sm">Low</Badge>
        </div>
      </div>
    </div>
  ),
};