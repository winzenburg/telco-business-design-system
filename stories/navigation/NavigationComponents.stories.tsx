import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  GlobalNavigation
} from '../../src/components';

const meta: Meta = {
  title: 'Components/Navigation/Breadcrumbs & Tabs',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Navigation components for Comcast Business applications including breadcrumbs and tab navigation.'
      }
    }
  },
};

export default meta;
type Story = StoryObj;

export const BreadcrumbNavigation: Story = {
  name: 'Breadcrumb Examples',
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#2B2D3F]">Business Navigation</h2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium">Account Management</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Account</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Billing</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Service Configuration</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Services</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Internet & WiFi</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Network Settings</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>WiFi Configuration</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Support Center</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Support</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Technical Help</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Internet Troubleshooting</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const TabNavigation: Story = {
  name: 'Business Service Tabs',
  render: () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-[#2B2D3F]">Service Management</h2>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Service Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-[#70717D]">Internet Speed</p>
                <p className="font-semibold text-[#2B2D3F]">1000 Mbps / 1000 Mbps</p>
              </div>
              <div>
                <p className="text-sm text-[#70717D]">Service Status</p>
                <p className="font-semibold text-green-600">All Services Active</p>
              </div>
              <div>
                <p className="text-sm text-[#70717D]">Next Billing Date</p>
                <p className="font-semibold text-[#2B2D3F]">January 15, 2025</p>
              </div>
              <div>
                <p className="text-sm text-[#70717D]">Account Manager</p>
                <p className="font-semibold text-[#2B2D3F]">Sarah Johnson</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-4">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Usage Statistics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#70717D]">Data Usage This Month</span>
                  <span className="font-semibold">2.4 TB / Unlimited</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#0D62FF] h-2 rounded-full" style={{width: '24%'}}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-sm text-[#70717D]">Peak Usage</p>
                  <p className="font-semibold text-[#2B2D3F]">450 Mbps</p>
                </div>
                <div>
                  <p className="text-sm text-[#70717D]">Average Usage</p>
                  <p className="font-semibold text-[#2B2D3F]">125 Mbps</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="billing" className="space-y-4">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#70717D]">Monthly Service Fee</span>
                <span className="font-semibold text-[#2B2D3F]">$299.97</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#70717D]">Auto-Pay Status</span>
                <span className="font-semibold text-green-600">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#70717D]">Payment Method</span>
                <span className="font-semibold text-[#2B2D3F]">•••• 4532</span>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-[#70717D] mb-2">Next Payment</p>
                <p className="font-semibold text-[#2B2D3F]">$299.97 on January 15, 2025</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="support" className="space-y-4">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Support Resources</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-[#2B2D3F] mb-2">24/7 Technical Support</h4>
                <p className="text-sm text-[#70717D] mb-2">Get help with technical issues anytime.</p>
                <p className="font-semibold text-[#0D62FF]">1-800-COMCAST</p>
              </div>
              <div>
                <h4 className="font-medium text-[#2B2D3F] mb-2">Account Manager</h4>
                <p className="text-sm text-[#70717D] mb-2">Your dedicated business representative.</p>
                <p className="font-semibold text-[#2B2D3F]">Sarah Johnson - sarah.j@comcast.com</p>
              </div>
              <div>
                <h4 className="font-medium text-[#2B2D3F] mb-2">Online Help Center</h4>
                <p className="text-sm text-[#70717D]">Self-service troubleshooting guides and FAQs.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  ),
};