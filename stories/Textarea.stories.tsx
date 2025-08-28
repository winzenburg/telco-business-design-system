import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Textarea, Label } from '../src/components';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Textarea component for multi-line text input following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Type your message here.',
    disabled: true,
  },
};

export const SupportRequest: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="support-message">Describe your issue</Label>
      <Textarea 
        placeholder="Please provide details about the issue you're experiencing..."
        id="support-message"
        className="min-h-[100px]"
      />
      <p className="text-sm text-muted-foreground">
        Include as much detail as possible to help us assist you better.
      </p>
    </div>
  ),
};