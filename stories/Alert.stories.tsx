import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertActions,
  Button
} from '../src/components';
import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';
import AlertDocs from './Alert.mdx';

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      page: AlertDocs,
      description: {
        component: 'Alert component for displaying important messages with support for different layouts, actions, and dismissible functionality.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'destructive'],
      description: 'Alert variant style',
    },
    layout: {
      control: 'select',
      options: ['standard', 'banner', 'floating'],
      description: 'Alert layout style',
    },
    position: {
      control: 'select',
      options: ['static', 'fixed', 'sticky'],
      description: 'Alert positioning',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Info Variant</h3>
        <Alert variant="info">
          <Info className="h-4 w-4" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            Your account has been successfully updated with new preferences.
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Success Variant</h3>
        <Alert variant="success">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your payment has been processed successfully.
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Warning Variant</h3>
        <Alert variant="warning">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Your session will expire in 5 minutes. Please save your work.
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Destructive (Error) Variant</h3>
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            There was a problem processing your request. Please try again.
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Actions</h3>
        <Alert variant="warning">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Update Available</AlertTitle>
          <AlertDescription>
            A new version is available. Would you like to update now?
          </AlertDescription>
          <AlertActions>
            <Button variant="outline" size="sm">Later</Button>
            <Button size="sm">Update Now</Button>
          </AlertActions>
        </Alert>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Dismissible</h3>
        <Alert variant="info" dismissible onDismiss={() => console.log('Dismissed')}>
          <Info className="h-4 w-4" />
          <AlertTitle>New Feature</AlertTitle>
          <AlertDescription>
            Try our new dashboard analytics. Click the X to dismiss.
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Banner Layout</h3>
        <Alert variant="warning" layout="banner">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>System Maintenance</AlertTitle>
          <AlertDescription>
            Scheduled maintenance will begin at 11:00 PM EST.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};

export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const InfoAlert: Story = {
  render: () => (
    <Alert variant="info">
      <Info className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        Your account has been successfully updated with new preferences.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert variant="success">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your payment has been processed successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your session will expire in 5 minutes. Please save your work.
      </AlertDescription>
    </Alert>
  ),
};

export const Error: Story = {
  render: () => (
    <Alert variant="destructive">
      <XCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        There was a problem processing your request. Please try again.
      </AlertDescription>
    </Alert>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Update Available</AlertTitle>
      <AlertDescription>
        A new version of the application is available. Would you like to update now?
      </AlertDescription>
      <AlertActions>
        <Button variant="outline" size="sm">
          Later
        </Button>
        <Button size="sm">
          Update Now
        </Button>
      </AlertActions>
    </Alert>
  ),
};

export const Dismissible: Story = {
  render: () => {
    const [isVisible, setIsVisible] = React.useState(true);
    
    if (!isVisible) {
      return (
        <div className="text-center p-4 text-neutral-500">
          Alert dismissed. 
          <Button 
            variant="link" 
            size="sm" 
            onClick={() => setIsVisible(true)}
            className="ml-2"
          >
            Show again
          </Button>
        </div>
      );
    }
    
    return (
      <Alert variant="info" dismissible onDismiss={() => setIsVisible(false)}>
        <Info className="h-4 w-4" />
        <AlertTitle>New Feature</AlertTitle>
        <AlertDescription>
          Try our new dashboard analytics. Click here to learn more.
        </AlertDescription>
      </Alert>
    );
  },
};

export const BannerLayout: Story = {
  render: () => (
    <Alert variant="warning" layout="banner">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>System Maintenance</AlertTitle>
      <AlertDescription>
        Scheduled maintenance will begin at 11:00 PM EST. Some features may be unavailable.
      </AlertDescription>
      <AlertActions>
        <Button variant="outline" size="sm">
          Learn More
        </Button>
      </AlertActions>
    </Alert>
  ),
};

export const FloatingLayout: Story = {
  render: () => (
    <div className="bg-neutral-100 p-8 rounded-lg">
      <Alert variant="success" layout="floating">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Payment Successful</AlertTitle>
        <AlertDescription>
          Your payment of $124.99 has been processed successfully.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

export const WithMultipleActions: Story = {
  render: () => (
    <Alert variant="info">
      <Info className="h-4 w-4" />
      <AlertTitle>Account Verification</AlertTitle>
      <AlertDescription>
        Please verify your email address to activate all features of your account.
      </AlertDescription>
      <AlertActions>
        <Button variant="ghost" size="sm">
          Skip
        </Button>
        <Button variant="outline" size="sm">
          Resend Email
        </Button>
        <Button size="sm">
          Verify Now
        </Button>
      </AlertActions>
    </Alert>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Alert variant="warning" dismissible>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Privacy Policy Update</AlertTitle>
      <AlertDescription>
        We've updated our Privacy Policy to provide more transparency about how we collect, 
        use, and protect your personal information. The changes include new sections about 
        data retention, third-party integrations, and your rights as a user. Please review 
        the updated policy to understand how these changes may affect you.
      </AlertDescription>
      <AlertActions>
        <Button variant="outline" size="sm">
          View Policy
        </Button>
        <Button size="sm">
          I Understand
        </Button>
      </AlertActions>
    </Alert>
  ),
};