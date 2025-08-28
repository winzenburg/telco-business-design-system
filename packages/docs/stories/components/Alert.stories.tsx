import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/alert';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays a callout for user attention with different variants for different message types.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'info'],
    },
    showIcon: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    showIcon: true,
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Service Update</AlertTitle>
      <AlertDescription>
        Your internet service will be upgraded during the scheduled maintenance window.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" showIcon>
      <AlertTitle>Service Interruption Detected</AlertTitle>
      <AlertDescription>
        There's an issue with your Internet Pro service at 123 Business Ave. Our team is investigating.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert variant="success" showIcon>
      <AlertTitle>Payment Processed Successfully</AlertTitle>
      <AlertDescription>
        Your monthly payment of $2,847.00 has been processed and applied to your account.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning" showIcon>
      <AlertTitle>Scheduled Maintenance</AlertTitle>
      <AlertDescription>
        Network maintenance is scheduled for Sunday, March 15th from 2:00 AM - 4:00 AM EST.
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: () => (
    <Alert variant="info" showIcon>
      <AlertTitle>New Features Available</AlertTitle>
      <AlertDescription>
        Enhanced security features and improved performance are now available for your business internet plan.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert variant="default">
      <AlertTitle>Notice</AlertTitle>
      <AlertDescription>
        This alert doesn't display an icon to demonstrate the flexible nature of the component.
      </AlertDescription>
    </Alert>
  ),
};