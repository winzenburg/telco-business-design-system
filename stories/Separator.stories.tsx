import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Separator } from '../src/components';
import SeparatorDocs from './Separator.mdx';

const meta: Meta<typeof Separator> = {
  title: 'Separator',
  component: Separator,
  parameters: {
    layout: 'padded',
    docs: {
      page: SeparatorDocs,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Business Services</h4>
        <p className="text-sm text-muted-foreground">
          Professional solutions for your business needs.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Internet</div>
        <Separator orientation="vertical" />
        <div>Phone</div>
        <Separator orientation="vertical" />
        <div>TV</div>
        <Separator orientation="vertical" />
        <div>Security</div>
      </div>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Content above separator</p>
      <Separator />
      <p>Content below separator</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Home</div>
      <Separator orientation="vertical" />
      <div>Services</div>
      <Separator orientation="vertical" />
      <div>About</div>
      <Separator orientation="vertical" />
      <div>Contact</div>
    </div>
  ),
};