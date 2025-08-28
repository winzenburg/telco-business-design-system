import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../../../components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../../components/ui/tooltip';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icon name="gethelp" size={16} color="currentColor" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Get help and support</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 place-items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const BusinessExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="font-medium text-[#15172B] font-primary">Service Actions</h3>
        <div className="flex gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="primary" size="icon">
                <Icon name="plus" size={16} color="white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add new Internet Pro service</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Icon name="configure" size={16} color="currentColor" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Configure service settings</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="destructive" size="icon">
                <Icon name="close" size={16} color="white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Cancel service (cannot be undone)</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-medium text-[#15172B] font-primary">Account Information</h3>
        <div className="flex gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">
                <Icon name="analytics" size={16} color="currentColor" className="mr-2" />
                View Usage
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View detailed bandwidth and usage analytics</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">
                <Icon name="document" size={16} color="currentColor" className="mr-2" />
                Download Bill
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download your current bill as PDF</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost">
                <Icon name="gethelp" size={16} color="currentColor" className="mr-2" />
                Support
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>24/7 technical support for business customers</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Service Details</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="space-y-2">
          <p className="font-medium">Internet Pro - Main Office</p>
          <p className="text-sm">100 Mbps download / 20 Mbps upload</p>
          <p className="text-sm">24/7 monitoring and support included</p>
          <p className="text-sm">Contract expires: Dec 15, 2024</p>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Delayed: Story = {
  render: () => (
    <Tooltip delayDuration={1000}>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover (1s delay)</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip has a 1 second delay</p>
      </TooltipContent>
    </Tooltip>
  ),
};