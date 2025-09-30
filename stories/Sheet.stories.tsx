import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../src/components/ui/sheet';
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { Label } from '../src/components/ui/label';
import { Textarea } from '../src/components/ui/textarea';
import SheetDocs from './Sheet.mdx';

const meta: Meta<typeof Sheet> = {
  title: 'Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
    docs: {
      page: SheetDocs,
      description: {
        component:
          'A sheet component (side panel/drawer) built on Radix UI following ShadCN/UI patterns with design system tokens. Features structural borders (neutral-300), smooth slide animations, and support for all four sides (top, right, bottom, left).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">All Four Positions</h3>
        <div className="flex gap-4 flex-wrap">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Right (Default)</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Right Side Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the right side. Best for forms and details.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Left</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Left Side Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the left side. Best for navigation.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Top</Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-[300px]">
              <SheetHeader>
                <SheetTitle>Top Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the top. Best for notifications.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[300px]">
              <SheetHeader>
                <SheetTitle>Bottom Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the bottom. Best for mobile actions.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Form Content</h3>
        <div className="flex gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button>Edit Profile</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Cancel</Button>
                </SheetClose>
                <Button type="submit">Save changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Size Variants</h3>
        <div className="flex gap-4 flex-wrap">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Small (sm)</Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-[320px]">
              <SheetHeader>
                <SheetTitle>Small Sheet</SheetTitle>
                <SheetDescription>320px width for compact content</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Default</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Default Sheet</SheetTitle>
                <SheetDescription>400px width for standard content</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Large (lg)</Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-[640px]">
              <SheetHeader>
                <SheetTitle>Large Sheet</SheetTitle>
                <SheetDescription>640px width for rich content</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Extra Large (xl)</Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-[768px]">
              <SheetHeader>
                <SheetTitle>Extra Large Sheet</SheetTitle>
                <SheetDescription>768px width for complex layouts</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  ),
};

// Default Right Side Sheet
export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

// Left Side Sheet
export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Navigate through different sections of the application.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Button variant="ghost" className="justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="justify-start">
            Services
          </Button>
          <Button variant="ghost" className="justify-start">
            Billing
          </Button>
          <Button variant="ghost" className="justify-start">
            Support
          </Button>
          <Button variant="ghost" className="justify-start">
            Settings
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

// Top Side Sheet
export const TopSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top</Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-[300px]">
        <SheetHeader>
          <SheetTitle>Notification Center</SheetTitle>
          <SheetDescription>
            You have 3 unread notifications.
          </SheetDescription>
        </SheetHeader>
        <div className="space-y-3 py-4">
          <div className="rounded-md bg-neutral-50 p-3">
            <p className="text-sm font-medium font-secondary">New message</p>
            <p className="text-xs text-neutral-600 font-secondary">
              You received a new message from support
            </p>
          </div>
          <div className="rounded-md bg-neutral-50 p-3">
            <p className="text-sm font-medium font-secondary">Service Update</p>
            <p className="text-xs text-neutral-600 font-secondary">
              Your internet service has been upgraded
            </p>
          </div>
          <div className="rounded-md bg-neutral-50 p-3">
            <p className="text-sm font-medium font-secondary">Bill Ready</p>
            <p className="text-xs text-neutral-600 font-secondary">
              Your monthly bill is now available
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

// Bottom Side Sheet
export const BottomSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[400px]">
        <SheetHeader>
          <SheetTitle>Quick Actions</SheetTitle>
          <SheetDescription>
            Perform common tasks quickly from here.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <Button variant="outline" className="h-20">
            Pay Bill
          </Button>
          <Button variant="outline" className="h-20">
            View Usage
          </Button>
          <Button variant="outline" className="h-20">
            Contact Support
          </Button>
          <Button variant="outline" className="h-20">
            Manage Services
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

// Contact Form Sheet
export const ContactForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Contact Support</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Contact Support</SheetTitle>
          <SheetDescription>
            Fill out the form below and we'll get back to you as soon as possible.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="What can we help you with?" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your.email@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Describe your issue or question..."
              rows={6}
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button type="submit">Send Message</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

// Service Configuration Sheet
export const ServiceConfiguration: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Configure Service</Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Business Internet Configuration</SheetTitle>
          <SheetDescription>
            Customize your internet service settings and preferences.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="speed">Bandwidth Speed</Label>
            <Input id="speed" defaultValue="1 Gbps" disabled />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ip">Static IP Address</Label>
            <Input id="ip" placeholder="192.168.1.1" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dns">Custom DNS</Label>
            <Input id="dns" placeholder="8.8.8.8, 8.8.4.4" />
          </div>
          <div className="space-y-2">
            <Label>Additional Options</Label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-secondary cursor-pointer">
                <input type="checkbox" className="rounded" />
                Enable IPv6
              </label>
              <label className="flex items-center gap-2 text-sm font-secondary cursor-pointer">
                <input type="checkbox" className="rounded" />
                DDoS Protection
              </label>
              <label className="flex items-center gap-2 text-sm font-secondary cursor-pointer">
                <input type="checkbox" className="rounded" defaultChecked />
                24/7 Monitoring
              </label>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Apply Settings</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

// Filter Panel Sheet
export const FilterPanel: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Filters</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filter Results</SheetTitle>
          <SheetDescription>
            Apply filters to refine your search results.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label className="text-sm font-semibold">Service Type</Label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-secondary cursor-pointer">
                <input type="checkbox" className="rounded" />
                Internet
              </label>
              <label className="flex items-center gap-2 text-sm font-secondary cursor-pointer">
                <input type="checkbox" className="rounded" />
                Phone
              </label>
              <label className="flex items-center gap-2 text-sm font-secondary cursor-pointer">
                <input type="checkbox" className="rounded" />
                TV
              </label>
              <label className="flex items-center gap-2 text-sm font-secondary cursor-pointer">
                <input type="checkbox" className="rounded" />
                Security
              </label>
            </div>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm font-semibold">Speed Range</Label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-secondary cursor-pointer">
                <input type="radio" name="speed" className="rounded-full" />
                Up to 100 Mbps
              </label>
              <label className="flex items-center gap-2 text-sm font-secondary cursor-pointer">
                <input type="radio" name="speed" className="rounded-full" />
                100-500 Mbps
              </label>
              <label className="flex items-center gap-2 text-sm font-secondary cursor-pointer">
                <input type="radio" name="speed" className="rounded-full" />
                500+ Mbps
              </label>
              <label className="flex items-center gap-2 text-sm font-secondary cursor-pointer">
                <input type="radio" name="speed" className="rounded-full" />
                1 Gbps+
              </label>
            </div>
          </div>
        </div>
        <SheetFooter>
          <Button variant="ghost">Clear All</Button>
          <Button>Apply Filters</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

// All Sides Showcase
export const AllSides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Right (Default)</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Right Side</SheetTitle>
            <SheetDescription>
              This sheet slides in from the right side.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Left</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Side</SheetTitle>
            <SheetDescription>
              This sheet slides in from the left side.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Top</Button>
        </SheetTrigger>
        <SheetContent side="top" className="h-[200px]">
          <SheetHeader>
            <SheetTitle>Top Side</SheetTitle>
            <SheetDescription>
              This sheet slides in from the top.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[200px]">
          <SheetHeader>
            <SheetTitle>Bottom Side</SheetTitle>
            <SheetDescription>
              This sheet slides in from the bottom.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  ),
};