import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays a card with header, content, and optional actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'interactive', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Internet Pro Service</CardTitle>
        <CardDescription>
          High-speed business internet with 99.9% uptime guarantee
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Speed:</span>
            <span className="font-medium">100 Mbps</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Status:</span>
            <Badge variant="success" dot>Online</Badge>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Monthly Cost:</span>
            <span className="font-medium">$199.99</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="wifi" size={20} />
          Business Voice Pro
        </CardTitle>
        <CardDescription>
          Advanced VoIP service with call management features
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-4">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Lines:</span>
            <span className="font-medium">25 Active</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Features:</span>
            <span className="text-sm">Auto-attendant, Voicemail</span>
          </div>
        </div>
      </CardContent>
      <CardAction>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Icon name="configure" size={16} className="mr-2" />
            Configure
          </Button>
          <Button variant="primary" size="sm">
            <Icon name="analytics" size={16} className="mr-2" />
            View Details
          </Button>
        </div>
      </CardAction>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card variant="interactive" className="w-[350px] cursor-pointer">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Icon name="blockers" size={20} />
            Security Suite
          </span>
          <Badge variant="warning" dot>Updating</Badge>
        </CardTitle>
        <CardDescription>
          Comprehensive security protection for your business
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Icon name="check" size={16} color="#16a34a" />
            <span>Firewall Protection</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="check" size={16} color="#16a34a" />
            <span>Intrusion Detection</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="check" size={16} color="#16a34a" />
            <span>24/7 Monitoring</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Active Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">12</div>
          <div className="flex items-center gap-1 mt-1">
            <Icon name="check" size={16} color="#16a34a" />
            <span className="text-sm text-green-600 font-medium">All Online</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Monthly Cost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">$2,847</div>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-sm text-gray-500">+$47 from last month</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Open Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">3</div>
          <div className="flex items-center gap-1 mt-1">
            <Icon name="alert" size={16} color="#f59e0b" />
            <span className="text-sm text-orange-500 font-medium">1 High Priority</span>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

export const ServiceList: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Card variant="interactive">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Icon name="wifi" size={24} color="#0D62FF" />
            <div>
              <h4 className="font-medium">Internet Pro</h4>
              <p className="text-sm text-gray-500">100 Mbps</p>
            </div>
          </div>
          <Badge variant="success" dot>Online</Badge>
        </CardContent>
      </Card>
      
      <Card variant="interactive">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Icon name="conference" size={24} color="#0D62FF" />
            <div>
              <h4 className="font-medium">Business Voice</h4>
              <p className="text-sm text-gray-500">25 Lines</p>
            </div>
          </div>
          <Badge variant="success" dot>Active</Badge>
        </CardContent>
      </Card>
      
      <Card variant="interactive">
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Icon name="blockers" size={24} color="#0D62FF" />
            <div>
              <h4 className="font-medium">Security Suite</h4>
              <p className="text-sm text-gray-500">Enterprise</p>
            </div>
          </div>
          <Badge variant="warning" dot>Updating</Badge>
        </CardContent>
      </Card>
    </div>
  ),
};