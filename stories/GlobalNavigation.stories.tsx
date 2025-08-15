import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GlobalNavigation } from '../src/components/GlobalNavigation';

const meta: Meta<typeof GlobalNavigation> = {
  title: 'Navigation/Global Navigation',
  component: GlobalNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Global navigation bar used across all Comcast Business applications. Features blue gradient background, logo, section title, and user profile section.',
      },
    },
  },
  argTypes: {
    userName: {
      control: 'text',
      description: 'Current user\'s name to display in greeting',
    },
    sectionTitle: {
      control: 'text',
      description: 'Current section/page title displayed in center',
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search icon in header',
    },
    showUserProfile: {
      control: 'boolean',
      description: 'Show user profile section',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlobalNavigation>;

// Default navigation
export const Default: Story = {
  args: {
    userName: 'David',
    sectionTitle: 'ENTERPRISE SOLUTIONS',
    showSearch: true,
    showUserProfile: true,
  },
};

// Different sections
export const Dashboard: Story = {
  args: {
    userName: 'Sarah',
    sectionTitle: 'DASHBOARD',
    showSearch: true,
    showUserProfile: true,
  },
};

export const MyAccount: Story = {
  args: {
    userName: 'John',
    sectionTitle: 'MY ACCOUNT',
    showSearch: true,
    showUserProfile: true,
  },
};

export const Billing: Story = {
  args: {
    userName: 'Maria',
    sectionTitle: 'BILLING & PAYMENTS',
    showSearch: false,
    showUserProfile: true,
  },
};

// Without user profile (for public pages)
export const PublicPage: Story = {
  args: {
    sectionTitle: 'BUSINESS SOLUTIONS',
    showSearch: false,
    showUserProfile: false,
  },
};

// Long section title
export const LongTitle: Story = {
  args: {
    userName: 'Alexandra',
    sectionTitle: 'NETWORK & INFRASTRUCTURE MANAGEMENT',
    showSearch: true,
    showUserProfile: true,
  },
};

// Full page example with content
export const FullPageExample: Story = {
  args: {
    userName: 'David',
    sectionTitle: 'ENTERPRISE SOLUTIONS',
    showSearch: true,
    showUserProfile: true,
  },
  render: (args) => (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavigation {...args} />
      
      {/* Page Content */}
      <main className="p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-[#15172B] font-primary mb-4">
            Welcome to Comcast Business Portal
          </h1>
          <p className="text-[#70717D] font-secondary mb-8">
            Manage your business services, view bills, and get support all in one place.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-[#15172B] font-primary mb-2">
                Internet Services
              </h3>
              <p className="text-[#70717D] font-secondary">
                Manage your internet plans and monitor usage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-[#15172B] font-primary mb-2">
                Voice Services
              </h3>
              <p className="text-[#70717D] font-secondary">
                Configure phone systems and manage users.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-[#15172B] font-primary mb-2">
                Support Center
              </h3>
              <p className="text-[#70717D] font-secondary">
                Get help and contact technical support.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  ),
};