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

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Popover component for displaying content in floating panels following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

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