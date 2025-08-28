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
  CardTitle
} from '../src/components';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Tabs component for organizing content in sections following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

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
            <div className="space-y-1">
              <label>Name</label>
              <input className="w-full p-2 border rounded" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <label>Username</label>
              <input className="w-full p-2 border rounded" defaultValue="@peduarte" />
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
            <div className="space-y-1">
              <label>Current password</label>
              <input type="password" className="w-full p-2 border rounded" />
            </div>
            <div className="space-y-1">
              <label>New password</label>
              <input type="password" className="w-full p-2 border rounded" />
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