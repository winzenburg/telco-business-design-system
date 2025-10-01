import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  Input,
  Label
} from '../src/components';
import PopoverDocs from './docs/Popover.mdx';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'padded',
    docs: {
      page: PopoverDocs,
      description: {
        component: 'Popover component for displaying content in floating panels following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Basic Popover</h3>
        <div className="flex gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-medium text-[var(--ds-color-text-primary)]">Popover Title</h4>
                <p className="text-sm text-[var(--ds-color-text-secondary)]">
                  This is a basic popover with simple content and information.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Different Positions</h3>
        <div className="flex gap-4 flex-wrap">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Top</Button>
            </PopoverTrigger>
            <PopoverContent side="top" className="w-64">
              <p className="text-sm text-[var(--ds-color-text-primary)]">Appears on top</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Right</Button>
            </PopoverTrigger>
            <PopoverContent side="right" className="w-64">
              <p className="text-sm text-[var(--ds-color-text-primary)]">Appears on right</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" className="w-64">
              <p className="text-sm text-[var(--ds-color-text-primary)]">Appears on bottom</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Left</Button>
            </PopoverTrigger>
            <PopoverContent side="left" className="w-64">
              <p className="text-sm text-[var(--ds-color-text-primary)]">Appears on left</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Form Content</h3>
        <div className="flex gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Edit Details</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h4 className="font-medium text-[var(--ds-color-text-primary)]">Edit Information</h4>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" className="flex-1">Cancel</Button>
                  <Button className="flex-1">Save</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Width Variants</h3>
        <div className="flex gap-4 flex-wrap">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Narrow (280px)</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[280px]">
              <p className="text-sm text-[var(--ds-color-text-primary)]">Narrow popover for compact content</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Default (320px)</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <p className="text-sm text-[var(--ds-color-text-primary)]">Default width popover for standard content</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Wide (400px)</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[400px]">
              <p className="text-sm text-[var(--ds-color-text-primary)]">Wide popover for rich content and detailed forms</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  ),
};

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const ServiceInfo: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Service Details</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Business Internet Essential</h4>
            <p className="text-sm text-muted-foreground">
              High-speed internet solution for small businesses.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="flex justify-between">
              <span className="text-sm">Speed:</span>
              <span className="text-sm font-medium">25/5 Mbps</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Price:</span>
              <span className="text-sm font-medium">$69.95/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Setup Fee:</span>
              <span className="text-sm font-medium">$0</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};