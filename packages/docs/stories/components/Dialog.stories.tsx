import type { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Service Configuration</DialogTitle>
          <DialogDescription>
            Configure your business internet service settings. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Service Name
            </Label>
            <Input id="name" defaultValue="Internet Pro 100" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="speed" className="text-right">
              Speed
            </Label>
            <Input id="speed" defaultValue="100 Mbps" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Configuration</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ServiceRequest: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">
          <Icon name="plus" size={16} className="mr-2" />
          Request New Service
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon name="configure" size={20} />
            New Service Request
          </DialogTitle>
          <DialogDescription>
            Request additional services for your business location. Our team will contact you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="service-type">Service Type</Label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>Internet Service</option>
              <option>Business Voice</option>
              <option>Security Suite</option>
              <option>Static IP</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Service Location</Label>
            <Input id="location" placeholder="123 Business Ave, Philadelphia, PA" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <textarea 
              id="notes" 
              className="w-full p-2 border border-gray-300 rounded-md h-20 resize-none"
              placeholder="Any specific requirements or questions..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button type="submit">
            <Icon name="check" size={16} className="mr-2" />
            Submit Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ConfirmationDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Icon name="close" size={16} className="mr-2" />
          Cancel Service
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <Icon name="alert" size={20} />
            Cancel Service Confirmation
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Are you sure you want to cancel your Internet Pro service? This action cannot be undone and will take effect at the end of your current billing cycle.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">This will affect:</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Internet connectivity will be terminated</li>
              <li>• Associated services may be impacted</li>
              <li>• Early termination fees may apply</li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Keep Service</Button>
          <Button variant="destructive">
            <Icon name="check" size={16} className="mr-2" />
            Confirm Cancellation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const SupportTicket: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Icon name="gethelp" size={16} className="mr-2" />
          Get Support
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon name="gethelp" size={20} />
            Create Support Ticket
          </DialogTitle>
          <DialogDescription>
            Describe your issue and we'll connect you with the right support team.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="priority">Priority Level</Label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>Low - General question</option>
              <option>Medium - Service impact</option>
              <option>High - Service down</option>
              <option>Critical - Multiple services affected</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <select className="w-full p-2 border border-gray-300 rounded-md">
              <option>Internet Connection</option>
              <option>Voice Services</option>
              <option>Security Issues</option>
              <option>Billing Question</option>
              <option>Equipment Problem</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Brief description of the issue" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Detailed Description</Label>
            <textarea 
              id="description" 
              className="w-full p-2 border border-gray-300 rounded-md h-24 resize-none"
              placeholder="Please provide as much detail as possible about the issue you're experiencing..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button type="submit">
            <Icon name="check" size={16} className="mr-2" />
            Create Ticket
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};