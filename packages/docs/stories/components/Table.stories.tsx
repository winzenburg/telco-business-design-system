import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../components/ui/table';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A responsive table component for displaying structured data.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your business services.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Service ID</TableHead>
          <TableHead>Service Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Monthly Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">SVC-001</TableCell>
          <TableCell>Internet Pro 100 Mbps</TableCell>
          <TableCell>
            <Badge variant="success" dot>Online</Badge>
          </TableCell>
          <TableCell className="text-right">$199.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">SVC-002</TableCell>
          <TableCell>Business Voice Pro</TableCell>
          <TableCell>
            <Badge variant="success" dot>Active</Badge>
          </TableCell>
          <TableCell className="text-right">$89.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">SVC-003</TableCell>
          <TableCell>Security Suite</TableCell>
          <TableCell>
            <Badge variant="warning" dot>Updating</Badge>
          </TableCell>
          <TableCell className="text-right">$49.99</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const ServiceManagement: Story = {
  render: () => (
    <Table>
      <TableCaption>Manage your business services and configurations.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Monthly Cost</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <Icon name="wifi" size={20} color="#0D62FF" />
              <div>
                <div className="font-medium">Internet Pro 100 Mbps</div>
                <div className="text-sm text-gray-500">High-speed business internet</div>
              </div>
            </div>
          </TableCell>
          <TableCell>123 Business Ave, Philadelphia</TableCell>
          <TableCell>
            <Badge variant="success" dot>Online</Badge>
          </TableCell>
          <TableCell>$199.99</TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Icon name="configure" size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="analytics" size={16} />
              </Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <Icon name="conference" size={20} color="#0D62FF" />
              <div>
                <div className="font-medium">Business Voice Pro</div>
                <div className="text-sm text-gray-500">25 lines with advanced features</div>
              </div>
            </div>
          </TableCell>
          <TableCell>123 Business Ave, Philadelphia</TableCell>
          <TableCell>
            <Badge variant="success" dot>Active</Badge>
          </TableCell>
          <TableCell>$89.99</TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Icon name="configure" size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="analytics" size={16} />
              </Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <Icon name="blockers" size={20} color="#0D62FF" />
              <div>
                <div className="font-medium">Security Suite</div>
                <div className="text-sm text-gray-500">Enterprise security package</div>
              </div>
            </div>
          </TableCell>
          <TableCell>All Locations</TableCell>
          <TableCell>
            <Badge variant="warning" dot>Updating</Badge>
          </TableCell>
          <TableCell>$49.99</TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Icon name="configure" size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="analytics" size={16} />
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const BillingHistory: Story = {
  render: () => (
    <Table>
      <TableCaption>Your recent billing and payment history.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Services</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">#INV-2024-001</TableCell>
          <TableCell>March 1, 2024</TableCell>
          <TableCell>Internet Pro, Voice Pro, Security</TableCell>
          <TableCell>$339.97</TableCell>
          <TableCell>
            <Badge variant="success">Paid</Badge>
          </TableCell>
          <TableCell>
            <Button variant="ghost" size="sm">
              <Icon name="document" size={16} className="mr-2" />
              Download
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">#INV-2024-002</TableCell>
          <TableCell>February 1, 2024</TableCell>
          <TableCell>Internet Pro, Voice Pro, Security</TableCell>
          <TableCell>$339.97</TableCell>
          <TableCell>
            <Badge variant="success">Paid</Badge>
          </TableCell>
          <TableCell>
            <Button variant="ghost" size="sm">
              <Icon name="document" size={16} className="mr-2" />
              Download
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">#INV-2024-003</TableCell>
          <TableCell>January 1, 2024</TableCell>
          <TableCell>Internet Pro, Voice Pro</TableCell>
          <TableCell>$289.98</TableCell>
          <TableCell>
            <Badge variant="success">Paid</Badge>
          </TableCell>
          <TableCell>
            <Button variant="ghost" size="sm">
              <Icon name="document" size={16} className="mr-2" />
              Download
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const SupportTickets: Story = {
  render: () => (
    <Table>
      <TableCaption>Your support tickets and their current status.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Ticket ID</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">#TKT-12345</TableCell>
          <TableCell>Internet connection intermittent</TableCell>
          <TableCell>
            <Badge variant="destructive">High</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="info" dot>In Progress</Badge>
          </TableCell>
          <TableCell>March 15, 2024</TableCell>
          <TableCell>
            <Button variant="ghost" size="sm">
              <Icon name="gethelp" size={16} className="mr-2" />
              View
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">#TKT-12344</TableCell>
          <TableCell>Voice quality issues on extensions</TableCell>
          <TableCell>
            <Badge variant="warning">Medium</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="warning" dot>Waiting</Badge>
          </TableCell>
          <TableCell>March 10, 2024</TableCell>
          <TableCell>
            <Button variant="ghost" size="sm">
              <Icon name="gethelp" size={16} className="mr-2" />
              View
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">#TKT-12343</TableCell>
          <TableCell>Request static IP configuration</TableCell>
          <TableCell>
            <Badge variant="outline">Low</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="success" dot>Resolved</Badge>
          </TableCell>
          <TableCell>March 8, 2024</TableCell>
          <TableCell>
            <Button variant="ghost" size="sm">
              <Icon name="gethelp" size={16} className="mr-2" />
              View
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Compact: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Internet Pro</TableCell>
          <TableCell>
            <Badge variant="success" size="sm" dot>Online</Badge>
          </TableCell>
          <TableCell>$199.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Voice Pro</TableCell>
          <TableCell>
            <Badge variant="success" size="sm" dot>Active</Badge>
          </TableCell>
          <TableCell>$89.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Security</TableCell>
          <TableCell>
            <Badge variant="warning" size="sm" dot>Updating</Badge>
          </TableCell>
          <TableCell>$49.99</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};