import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipHeader,
  TooltipBody,
  TooltipArrow,
  Button
} from '../src/components';
import { Plus, Info, CircleHelp, Settings, Download, Share, Eye, Edit, Trash } from 'lucide-react';
import TooltipDocs from './docs/Tooltip.mdx';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'padded',
    docs: {
      page: TooltipDocs,
      description: {
        component: 'Tooltip component for displaying contextual information. Supports plain, rich, and inverted variants with multiple sizes and positioning options.'
      }
    }
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

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-12 max-w-2xl">
      {/* Default Tooltip */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Default Tooltip</h3>
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Icon Button Tooltips */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Icon Button Labels</h3>
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost"><Settings className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Settings</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost"><Download className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Download</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost"><Share className="h-4 w-4" /></Button>
            </TooltipTrigger>
            <TooltipContent>Share</TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Rich Tooltip */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Rich Tooltip</h3>
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Feature Info</Button>
            </TooltipTrigger>
            <TooltipContent variant="rich">
              <TooltipHeader>Advanced Analytics</TooltipHeader>
              <TooltipBody>
                Track network performance and identify potential issues before they impact your business.
              </TooltipBody>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* With Arrow */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Arrow Pointer</h3>
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover for arrow</Button>
            </TooltipTrigger>
            <TooltipContent>
              <TooltipArrow />
              Tooltip with arrow pointer
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Positioning */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Positioning (Top, Right, Bottom, Left)</h3>
        <div className="grid grid-cols-4 gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">Top</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">Right</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Bottom</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">Left</TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Sizes</h3>
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline">Small</Button>
            </TooltipTrigger>
            <TooltipContent size="sm">Small tooltip</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Default</Button>
            </TooltipTrigger>
            <TooltipContent size="default">Default size</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="lg" variant="outline">Large</Button>
            </TooltipTrigger>
            <TooltipContent size="lg">Large tooltip</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">
            <Plus className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add new service</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>More information</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline">
            <CircleHelp className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Get help and support</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Default Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent variant="default">
          This is a default tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Rich Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent variant="rich">
          <TooltipHeader>Rich Tooltip</TooltipHeader>
          <TooltipBody>
            Rich tooltips can contain more detailed information with headers and body text.
          </TooltipBody>
        </TooltipContent>
      </Tooltip>

      <div className="bg-neutral-900 p-4 rounded-lg">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Inverted Tooltip</Button>
          </TooltipTrigger>
          <TooltipContent variant="inverted">
            Inverted tooltip for dark backgrounds
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Small</Button>
        </TooltipTrigger>
        <TooltipContent size="sm">
          Small tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Default</Button>
        </TooltipTrigger>
        <TooltipContent size="default">
          Default size tooltip
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="lg">Large</Button>
        </TooltipTrigger>
        <TooltipContent size="lg">
          Large tooltip with more content
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">With Arrow</Button>
        </TooltipTrigger>
        <TooltipContent>
          <TooltipArrow />
          Tooltip with arrow pointer
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Rich with Arrow</Button>
        </TooltipTrigger>
        <TooltipContent variant="rich">
          <TooltipArrow className="fill-white" />
          <TooltipHeader>Feature Info</TooltipHeader>
          <TooltipBody>
            This feature helps you manage your business services more efficiently.
          </TooltipBody>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const Positioning: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 items-center justify-items-center min-h-[300px]">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <TooltipArrow />
          Tooltip on top
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <TooltipArrow />
          Tooltip on right
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <TooltipArrow />
          Tooltip on bottom
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <TooltipArrow />
          Tooltip on left
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Center</Button>
        </TooltipTrigger>
        <TooltipContent>
          <TooltipArrow />
          Auto-positioned tooltip
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const InteractiveElements: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Settings
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost">
            <Download className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <TooltipHeader>Download</TooltipHeader>
          <TooltipBody>Download the current report as PDF</TooltipBody>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost">
            <Share className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent variant="rich">
          <TooltipHeader>Share</TooltipHeader>
          <TooltipBody>Share this dashboard with team members</TooltipBody>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost">
            <Eye className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Preview
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost">
            <Edit className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Edit service configuration
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="ghost" className="text-red-600">
            <Trash className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent variant="rich">
          <TooltipHeader>Trash Service</TooltipHeader>
          <TooltipBody>This action cannot be undone</TooltipBody>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Long Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>
          This is a longer tooltip that demonstrates how the component handles text wrapping and maintains readability with extended content.
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Rich Long Content</Button>
        </TooltipTrigger>
        <TooltipContent variant="rich">
          <TooltipHeader>Service Management</TooltipHeader>
          <TooltipBody>
            Manage your business services including internet, voice, and security solutions. 
            Access detailed analytics, configure settings, and monitor performance metrics 
            from this centralized dashboard.
          </TooltipBody>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};