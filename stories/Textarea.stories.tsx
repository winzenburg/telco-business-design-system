import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Textarea, Label } from '../src/components';
import TextareaDocs from './Textarea.mdx';

const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
    docs: {
      page: TextareaDocs,
      description: {
        component: 'Textarea component for multi-line text input following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Default</h3>
        <Textarea placeholder="Type your message here." />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Label</h3>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-1">Your message</Label>
          <Textarea placeholder="Type your message here." id="message-1" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Value (Filled State)</h3>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-2">Your message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message-2"
            defaultValue="This textarea has some pre-filled content that demonstrates the filled state."
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Disabled</h3>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-3">Your message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message-3"
            disabled={true}
            defaultValue="This textarea is disabled"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Error</h3>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-4">Your message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message-4"
            error={true}
          />
          <p className="text-sm text-[var(--ds-color-intent-destructive)]">
            This field is required
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Small Size (3 rows)</h3>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-5">Your message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message-5"
            rows={3}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Large Size (10 rows)</h3>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-6">Your message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message-6"
            rows={10}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Helper Text</h3>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-7">Describe your issue</Label>
          <Textarea
            placeholder="Please provide details about the issue you're experiencing..."
            id="message-7"
            className="min-h-[100px]"
          />
          <p className="text-sm text-[var(--ds-color-text-muted)]">
            Include as much detail as possible to help us assist you better.
          </p>
        </div>
      </div>
    </div>
  ),
};

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

export const WithError: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="error-message">Your message</Label>
      <Textarea
        placeholder="Type your message here."
        id="error-message"
        error={true}
      />
      <p className="text-sm text-[var(--ds-color-intent-destructive)]">
        This field is required
      </p>
    </div>
  ),
};

export const WithValue: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="filled-message">Your message</Label>
      <Textarea
        placeholder="Type your message here."
        id="filled-message"
        defaultValue="This textarea has some pre-filled content that demonstrates the filled state with text."
      />
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid w-full gap-1.5">
        <Label htmlFor="small-message">Small (3 rows)</Label>
        <Textarea
          placeholder="Type your message here."
          id="small-message"
          rows={3}
        />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="medium-message">Medium (6 rows)</Label>
        <Textarea
          placeholder="Type your message here."
          id="medium-message"
          rows={6}
        />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="large-message">Large (10 rows)</Label>
        <Textarea
          placeholder="Type your message here."
          id="large-message"
          rows={10}
        />
      </div>
    </div>
  ),
};