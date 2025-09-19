import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GlobalNavigation } from '../../components/src/GlobalNavigation';

const meta: Meta<typeof GlobalNavigation> = {
  title: 'GlobalNavigation',
  component: GlobalNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Global navigation component for Comcast Business applications. Provides consistent site-wide navigation with brand identity and user context.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    userName: {
      control: 'text',
      description: 'Current user\'s name to display in greeting'
    },
    sectionTitle: {
      control: 'text', 
      description: 'Current section/page title'
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search icon'
    },
    showUserProfile: {
      control: 'boolean',
      description: 'Show user profile section'
    }
  }
};

export default meta;
type Story = StoryObj<typeof GlobalNavigation>;

export const Default: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavigation {...args} />
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-4">Dashboard</h1>
        <p className="text-muted-foreground">Main content area below global navigation</p>
      </div>
    </div>
  ),
  args: {
    userName: 'David',
    sectionTitle: 'ENTERPRISE SOLUTIONS',
    showSearch: true,
    showUserProfile: true
  }
};

export const Dashboard: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavigation {...args} />
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-4">Business Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Internet Service</h3>
            <p className="text-muted-foreground">Internet Pro - 100 Mbps</p>
            <p className="text-green-600 text-sm mt-2">Active</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Voice Service</h3>
            <p className="text-muted-foreground">Business Voice Pro</p>
            <p className="text-green-600 text-sm mt-2">Active</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Security Suite</h3>
            <p className="text-muted-foreground">24/7 Monitoring</p>
            <p className="text-green-600 text-sm mt-2">Protected</p>
          </div>
        </div>
      </div>
    </div>
  ),
  args: {
    userName: 'David',
    sectionTitle: 'DASHBOARD',
    showSearch: true,
    showUserProfile: true
  }
};

export const MyAccount: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavigation {...args} />
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-4">My Account</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Account Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Business Name</label>
              <p className="text-muted-foreground">Acme Corporation</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Service Address</label>
              <p className="text-muted-foreground">123 Business Ave, Philadelphia, PA 19103</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Account Number</label>
              <p className="text-muted-foreground">8765432109</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  args: {
    userName: 'David',
    sectionTitle: 'MY ACCOUNT',
    showSearch: true,
    showUserProfile: true
  }
};

export const Billing: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavigation {...args} />
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-4">Billing</h1>
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Current Bill</h2>
            <p className="text-muted-foreground">Due December 15, 2024</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Internet Pro (100 Mbps)</span>
              <span className="font-medium">$199.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Business Voice Pro</span>
              <span className="font-medium">$89.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Security Suite</span>
              <span className="font-medium">$49.00</span>
            </div>
            <div className="border-t pt-4 flex justify-between text-lg font-semibold">
              <span>Total Due</span>
              <span>$337.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  args: {
    userName: 'David',
    sectionTitle: 'BILLING',
    showSearch: true,
    showUserProfile: true
  }
};

export const PublicPage: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavigation {...args} />
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-4">Comcast Business Solutions</h1>
        <p className="text-muted-foreground mb-6">
          Reliable internet, voice, and security solutions for businesses of all sizes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3">Internet Solutions</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Internet Pro - Up to 1 Gbps</li>
              <li>• Dedicated Internet Access</li>
              <li>• Ethernet Connectivity</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3">Voice & Communication</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Business Voice</li>
              <li>• VoIP Solutions</li>
              <li>• Conference Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  args: {
    userName: 'Visitor',
    sectionTitle: 'COMCAST BUSINESS',
    showSearch: false,
    showUserProfile: false
  }
};

export const CustomSection: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavigation {...args} />
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-4">Service Management</h1>
        <p className="text-muted-foreground">
          This story demonstrates how the global navigation can be customized with different section titles and user configurations.
        </p>
      </div>
    </div>
  ),
  args: {
    userName: 'Sarah Johnson',
    sectionTitle: 'SERVICE MANAGEMENT',
    showSearch: true,
    showUserProfile: true
  }
};

export const NoUserProfile: Story = {
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavigation {...args} />
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-4">Public Portal</h1>
        <p className="text-muted-foreground">
          Global navigation without user profile for public-facing pages.
        </p>
      </div>
    </div>
  ),
  args: {
    sectionTitle: 'PUBLIC PORTAL',
    showSearch: true,
    showUserProfile: false
  }
};