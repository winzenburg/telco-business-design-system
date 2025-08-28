import type { Meta, StoryObj } from '@storybook/react';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  ToastContent,
} from '../src/components/ui/toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Toast notifications provide brief messages about app processes with support for different variants, actions, and proper accessibility.',
      },
      story: {
        inline: true,
        iframeHeight: 120,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'destructive', 'info'],
      description: 'Toast variant style',
    },
    open: {
      control: 'boolean',
      description: 'Whether the toast is visible',
    },
  },
  decorators: [
    (Story, context) => (
      <ToastProvider>
        <div 
          style={{ 
            position: 'relative', 
            minHeight: '120px', 
            width: '100%', 
            maxWidth: context.viewMode === 'docs' ? '100%' : '420px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: context.viewMode === 'docs' ? '20px' : '0'
          }}
        >
          <Story />
          <ToastViewport 
            style={{
              position: 'static',
              display: 'flex',
              flexDirection: 'column',
              padding: 0,
              margin: 0,
              width: '100%',
              maxWidth: 'none'
            }}
          />
        </div>
      </ToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    open: true,
  },
  render: (args) => (
    <Toast {...args}>
      <ToastContent>
        <ToastTitle>Notification</ToastTitle>
        <ToastDescription>Your message has been sent successfully.</ToastDescription>
      </ToastContent>
      <ToastClose />
    </Toast>
  ),
};

export const Success: Story = {
  args: {
    variant: 'success',
    open: true,
  },
  render: (args) => (
    <Toast {...args}>
      <ToastContent>
        <ToastTitle>Success</ToastTitle>
        <ToastDescription>Changes saved successfully.</ToastDescription>
      </ToastContent>
      <ToastClose />
    </Toast>
  ),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    open: true,
  },
  render: (args) => (
    <Toast {...args}>
      <ToastContent>
        <ToastTitle>Warning</ToastTitle>
        <ToastDescription>Please check your network connection.</ToastDescription>
      </ToastContent>
      <ToastClose />
    </Toast>
  ),
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    open: true,
  },
  render: (args) => (
    <Toast {...args}>
      <ToastContent>
        <ToastTitle>Error</ToastTitle>
        <ToastDescription>Something went wrong. Please try again.</ToastDescription>
      </ToastContent>
      <ToastClose />
    </Toast>
  ),
};

export const Info: Story = {
  args: {
    variant: 'info',
    open: true,
  },
  render: (args) => (
    <Toast {...args}>
      <ToastContent>
        <ToastTitle>Information</ToastTitle>
        <ToastDescription>New features are now available.</ToastDescription>
      </ToastContent>
      <ToastClose />
    </Toast>
  ),
};