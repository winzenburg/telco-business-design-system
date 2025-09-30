import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Button
} from '../src/components';
import TabsDocs from './Tabs.mdx';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      page: TabsDocs,
      description: {
        component: 'Tabs component for organizing content in sections following Comcast Business Design System.'
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
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Default Variant</h3>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList>
            <TabsTrigger value="tab1">Active Tab</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            Content for active tab with default variant styling.
          </TabsContent>
          <TabsContent value="tab2">Content for tab 2</TabsContent>
          <TabsContent value="tab3">Content for tab 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Enclosed Variant</h3>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList variant="enclosed">
            <TabsTrigger variant="enclosed" value="tab1">Active Tab</TabsTrigger>
            <TabsTrigger variant="enclosed" value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger variant="enclosed" value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            Content for active tab with enclosed variant styling.
          </TabsContent>
          <TabsContent value="tab2">Content for tab 2</TabsContent>
          <TabsContent value="tab3">Content for tab 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Pills Variant</h3>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList variant="pills">
            <TabsTrigger variant="pills" value="tab1">Active Tab</TabsTrigger>
            <TabsTrigger variant="pills" value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger variant="pills" value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            Content for active tab with pills variant styling.
          </TabsContent>
          <TabsContent value="tab2">Content for tab 2</TabsContent>
          <TabsContent value="tab3">Content for tab 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Small Size</h3>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList size="sm">
            <TabsTrigger value="tab1">Small Tab</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content with small sized tabs.</TabsContent>
          <TabsContent value="tab2">Content for tab 2</TabsContent>
          <TabsContent value="tab3">Content for tab 3</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Large Size</h3>
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList size="lg">
            <TabsTrigger value="tab1">Large Tab</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content with large sized tabs.</TabsContent>
          <TabsContent value="tab2">Content for tab 2</TabsContent>
          <TabsContent value="tab3">Content for tab 3</TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">Username</label>
              <Input
                id="username"
                defaultValue="@peduarte"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-2">
              <label htmlFor="current" className="text-sm font-medium">Current Password</label>
              <Input
                id="current"
                type="password"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="new" className="text-sm font-medium">New Password</label>
              <Input
                id="new"
                type="password"
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ServiceTabs: Story = {
  render: () => (
    <Tabs defaultValue="internet" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="internet">Internet</TabsTrigger>
        <TabsTrigger value="phone">Phone</TabsTrigger>
        <TabsTrigger value="tv">TV</TabsTrigger>
      </TabsList>
      <TabsContent value="internet" className="space-y-4">
        <h3 className="text-lg font-semibold">Business Internet Services</h3>
        <p>High-speed internet solutions for your business needs.</p>
        <ul className="list-disc pl-6">
          <li>Speeds up to 1 Gbps</li>
          <li>99.9% uptime SLA</li>
          <li>24/7 support</li>
        </ul>
      </TabsContent>
      <TabsContent value="phone" className="space-y-4">
        <h3 className="text-lg font-semibold">Business Phone Services</h3>
        <p>Professional phone solutions with advanced features.</p>
        <ul className="list-disc pl-6">
          <li>Unlimited calling</li>
          <li>Voicemail to email</li>
          <li>Conference calling</li>
        </ul>
      </TabsContent>
      <TabsContent value="tv" className="space-y-4">
        <h3 className="text-lg font-semibold">Business TV Services</h3>
        <p>Entertainment and information for your business.</p>
        <ul className="list-disc pl-6">
          <li>100+ channels</li>
          <li>HD programming</li>
          <li>Business news channels</li>
        </ul>
      </TabsContent>
    </Tabs>
  ),
};