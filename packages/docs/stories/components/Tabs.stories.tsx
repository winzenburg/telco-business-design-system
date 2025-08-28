import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Manage your account settings and preferences.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label className="text-sm font-medium">Company Name</label>
              <input className="w-full p-2 border rounded" defaultValue="Acme Corporation" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Account Manager</label>
              <input className="w-full p-2 border rounded" defaultValue="Sarah Johnson" />
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
              <label className="text-sm font-medium">Current password</label>
              <input type="password" className="w-full p-2 border rounded" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">New password</label>
              <input type="password" className="w-full p-2 border rounded" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Configure how you receive notifications about your services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Service alerts</span>
              <Badge variant="success">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Billing reminders</span>
              <Badge variant="success">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Marketing emails</span>
              <Badge variant="outline">Disabled</Badge>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ServiceDashboard: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full max-w-4xl">
      <TabsList>
        <TabsTrigger value="overview">Service Overview</TabsTrigger>
        <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
        <TabsTrigger value="billing">Billing History</TabsTrigger>
        <TabsTrigger value="support">Support Tickets</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card variant="interactive">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="wifi" size={16} color="#16a34a" />
                Internet Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">100 Mbps Business Internet with 99.9% uptime guarantee</p>
              <div className="mt-2">
                <Badge variant="success" dot>Online</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card variant="interactive">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="conference" size={16} color="#2563eb" />
                Voice Service  
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Business VoIP with advanced call management features</p>
              <div className="mt-2">
                <Badge variant="success" dot>Active</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card variant="interactive">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="blockers" size={16} color="#dc2626" />
                Security Suite
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Advanced threat protection and firewall management</p>
              <div className="mt-2">
                <Badge variant="warning" dot>Updating</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="usage" className="space-y-4">
        <div className="text-center p-8 bg-gray-100 rounded-lg">
          <Icon name="analytics" size={48} color="#B4B5BB" className="mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Analytics</h3>
          <p className="text-gray-600">Interactive charts and usage reports would be displayed here</p>
          <Button className="mt-4">
            <Icon name="analytics" size={16} className="mr-2" />
            Generate Report
          </Button>
        </div>
      </TabsContent>
      
      <TabsContent value="billing" className="space-y-4">
        <div className="text-center p-8 bg-gray-100 rounded-lg">
          <Icon name="wallet" size={48} color="#B4B5BB" className="mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Billing History</h3>
          <p className="text-gray-600">Payment history and invoice management would be displayed here</p>
          <Button className="mt-4">
            <Icon name="document" size={16} className="mr-2" />
            Download Invoice
          </Button>
        </div>
      </TabsContent>
      
      <TabsContent value="support" className="space-y-4">
        <div className="text-center p-8 bg-gray-100 rounded-lg">
          <Icon name="gethelp" size={48} color="#B4B5BB" className="mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Center</h3>
          <p className="text-gray-600">Support tickets and help resources would be displayed here</p>
          <Button className="mt-4">
            <Icon name="gethelp" size={16} className="mr-2" />
            Create Ticket
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="internet" orientation="vertical" className="w-full max-w-3xl">
      <div className="flex gap-6">
        <TabsList className="flex-col h-fit">
          <TabsTrigger value="internet" className="w-full">Internet Services</TabsTrigger>
          <TabsTrigger value="voice" className="w-full">Voice Services</TabsTrigger>
          <TabsTrigger value="security" className="w-full">Security</TabsTrigger>
          <TabsTrigger value="support" className="w-full">Support</TabsTrigger>
        </TabsList>
        
        <div className="flex-1">
          <TabsContent value="internet">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="wifi" size={20} />
                  Internet Services
                </CardTitle>
                <CardDescription>
                  High-speed internet solutions for your business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 border rounded">
                    <h4 className="font-medium">Internet Pro</h4>
                    <p className="text-sm text-gray-600">Up to 100 Mbps</p>
                    <p className="text-sm font-medium">$199/month</p>
                  </div>
                  <div className="p-3 border rounded">
                    <h4 className="font-medium">Internet Enterprise</h4>
                    <p className="text-sm text-gray-600">Up to 1 Gbps</p>
                    <p className="text-sm font-medium">$499/month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="voice">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="conference" size={20} />
                  Voice Services
                </CardTitle>
                <CardDescription>
                  Business phone and communication solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 border rounded">
                    <h4 className="font-medium">Business Voice</h4>
                    <p className="text-sm text-gray-600">Basic VoIP service</p>
                    <p className="text-sm font-medium">$49/month</p>
                  </div>
                  <div className="p-3 border rounded">
                    <h4 className="font-medium">Voice Pro</h4>
                    <p className="text-sm text-gray-600">Advanced features</p>
                    <p className="text-sm font-medium">$89/month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="blockers" size={20} />
                  Security Services
                </CardTitle>
                <CardDescription>
                  Comprehensive security solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={16} color="#16a34a" />
                    <span className="text-sm">Firewall Protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={16} color="#16a34a" />
                    <span className="text-sm">Threat Detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" size={16} color="#16a34a" />
                    <span className="text-sm">24/7 Monitoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="support">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="gethelp" size={20} />
                  Support Options
                </CardTitle>
                <CardDescription>
                  Get help when you need it
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="gethelp" size={16} className="mr-2" />
                    Create Support Ticket
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="chat" size={16} className="mr-2" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="conference" size={16} className="mr-2" />
                    Schedule Phone Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  ),
};

export const IconTabs: Story = {
  render: () => (
    <Tabs defaultValue="dashboard" className="w-full max-w-2xl">
      <TabsList>
        <TabsTrigger value="dashboard" className="flex items-center gap-2">
          <Icon name="analytics" size={16} />
          Dashboard
        </TabsTrigger>
        <TabsTrigger value="services" className="flex items-center gap-2">
          <Icon name="configure" size={16} />
          Services
        </TabsTrigger>
        <TabsTrigger value="billing" className="flex items-center gap-2">
          <Icon name="wallet" size={16} />
          Billing
        </TabsTrigger>
        <TabsTrigger value="support" className="flex items-center gap-2">
          <Icon name="gethelp" size={16} />
          Support
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="dashboard">
        <Card>
          <CardHeader>
            <CardTitle>Dashboard Overview</CardTitle>
            <CardDescription>Key metrics and service status at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded">
                <div className="text-2xl font-bold text-green-700">12</div>
                <div className="text-sm text-green-600">Active Services</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-2xl font-bold text-blue-700">$2,847</div>
                <div className="text-sm text-blue-600">Monthly Total</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="services">
        <Card>
          <CardHeader>
            <CardTitle>Service Management</CardTitle>
            <CardDescription>Configure and manage your business services</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Service configuration tools would be displayed here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="billing">
        <Card>
          <CardHeader>
            <CardTitle>Billing & Payments</CardTitle>
            <CardDescription>View invoices and manage payment methods</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Billing information and payment history would be displayed here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="support">
        <Card>
          <CardHeader>
            <CardTitle>Customer Support</CardTitle>
            <CardDescription>Get help with your services and account</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Support options and help resources would be displayed here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};