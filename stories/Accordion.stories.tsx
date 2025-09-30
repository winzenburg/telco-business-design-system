import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../src/components';
import AccordionDocs from './Accordion.mdx';

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      page: AccordionDocs,
      description: {
        component: 'Accordion component for expandable content sections following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Single Expansion Mode (Collapsible)</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What internet speeds do you offer?</AccordionTrigger>
            <AccordionContent>
              We offer business internet speeds from 50 Mbps to 10 Gbps, with plans tailored to your specific business needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is your uptime guarantee?</AccordionTrigger>
            <AccordionContent>
              We provide a 99.9% uptime SLA for all business internet plans, backed by 24/7 support and rapid response times.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer 24/7 support?</AccordionTrigger>
            <AccordionContent>
              Yes, our dedicated business support team is available 24/7/365 via phone, email, and live chat.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Multiple Expansion Mode</h3>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="profile">
            <AccordionTrigger>Profile Settings</AccordionTrigger>
            <AccordionContent>
              Manage your account profile, contact information, and preferences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="security">
            <AccordionTrigger>Security Settings</AccordionTrigger>
            <AccordionContent>
              Update your password, enable two-factor authentication, and manage security preferences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="notifications">
            <AccordionTrigger>Notification Settings</AccordionTrigger>
            <AccordionContent>
              Configure email, SMS, and push notification preferences for your account.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Default Open Item</h3>
        <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>This item starts expanded</AccordionTrigger>
            <AccordionContent>
              Content that is visible by default to guide users.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>This item starts collapsed</AccordionTrigger>
            <AccordionContent>
              Content that users can expand when needed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};

export const Default: Story = {
  args: {},
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the design system.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It uses smooth transitions for opening and closing content.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {},
  render: () => (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Account Settings</AccordionTrigger>
        <AccordionContent>
          Manage your account preferences and settings.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Billing Information</AccordionTrigger>
        <AccordionContent>
          View and update your billing details and payment methods.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Support Resources</AccordionTrigger>
        <AccordionContent>
          Access help documentation and contact support.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};