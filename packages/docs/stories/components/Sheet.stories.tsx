import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../../components/ui/sheet';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Checkbox } from '../../../components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Extends the Dialog component to display content that complements the main content of the screen.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const FromLeft: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open from Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            Quick access to main sections of your account.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Icon name="analytics" size={16} color="currentColor" className="mr-3" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Icon name="wifi" size={16} color="currentColor" className="mr-3" />
              Internet Services
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Icon name="conference" size={16} color="currentColor" className="mr-3" />
              Voice Services
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Icon name="document" size={16} color="currentColor" className="mr-3" />
              Billing
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Icon name="gethelp" size={16} color="currentColor" className="mr-3" />
              Support
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const FromTop: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open from Top</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>System Notification</SheetTitle>
          <SheetDescription>
            Important updates about your Comcast Business services.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <Icon name="alert" size={20} color="#f59e0b" />
              <div>
                <div className="font-medium text-[#15172B]">Scheduled Maintenance</div>
                <div className="text-sm text-[#70717D]">
                  Network maintenance is scheduled for Sunday, Dec 15th from 2:00 AM - 4:00 AM EST.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <Icon name="configure" size={20} color="#0D62FF" />
              <div>
                <div className="font-medium text-[#15172B]">Service Upgrade Available</div>
                <div className="text-sm text-[#70717D]">
                  Upgrade to Internet Pro 200 Mbps for enhanced business performance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const FromBottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open from Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Quick Actions</SheetTitle>
          <SheetDescription>
            Frequently used actions for your business account.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
          <Button variant="outline" className="flex-col h-auto py-4">
            <Icon name="document" size={24} color="currentColor" className="mb-2" />
            <span className="text-sm">View Bill</span>
          </Button>
          <Button variant="outline" className="flex-col h-auto py-4">
            <Icon name="wallet" size={24} color="currentColor" className="mb-2" />
            <span className="text-sm">Make Payment</span>
          </Button>
          <Button variant="outline" className="flex-col h-auto py-4">
            <Icon name="analytics" size={24} color="currentColor" className="mb-2" />
            <span className="text-sm">Usage Reports</span>
          </Button>
          <Button variant="outline" className="flex-col h-auto py-4">
            <Icon name="gethelp" size={24} color="currentColor" className="mb-2" />
            <span className="text-sm">Get Support</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const ServiceRequest: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      serviceType: '',
      priority: '',
      description: '',
      contactMethod: '',
      acceptTerms: false,
    });

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <Icon name="plus" size={16} color="white" className="mr-2" />
            Request Service
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>New Service Request</SheetTitle>
            <SheetDescription>
              Submit a request for additional Comcast Business services or support.
            </SheetDescription>
          </SheetHeader>
          
          <div className="space-y-6 py-6">
            <div className="space-y-2">
              <Label htmlFor="service-type">Service Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="internet">Internet Pro Upgrade</SelectItem>
                  <SelectItem value="voice">Business Voice</SelectItem>
                  <SelectItem value="security">Security Suite</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - General inquiry</SelectItem>
                  <SelectItem value="medium">Medium - Service issue</SelectItem>
                  <SelectItem value="high">High - Business critical</SelectItem>
                  <SelectItem value="urgent">Urgent - Service outage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your service request or issue in detail..."
                className="min-h-[100px]"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">Preferred Contact Method</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="How should we contact you?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone Call</SelectItem>
                  <SelectItem value="text">Text Message</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => setFormData(prev => ({...prev, acceptTerms: !!checked}))}
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the service terms and authorize Comcast Business to contact me regarding this request
              </Label>
            </div>
          </div>

          <SheetFooter>
            <Button variant="outline">Cancel</Button>
            <Button disabled={!formData.acceptTerms}>
              Submit Request
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const AccountSettings: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Icon name="configure" size={16} color="currentColor" className="mr-2" />
          Account Settings
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Account Settings</SheetTitle>
          <SheetDescription>
            Manage your Comcast Business account preferences and settings.
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6 py-6">
          <div>
            <h4 className="font-medium text-[#15172B] font-primary mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="business-name">Business Name</Label>
                <Input id="business-name" defaultValue="Acme Corporation" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Primary Email</Label>
                <Input id="contact-email" type="email" defaultValue="admin@acme.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="(555) 123-4567" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-[#15172B] font-primary mb-4">Notifications</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <Checkbox id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-alerts">SMS Alerts</Label>
                <Checkbox id="sms-alerts" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="maintenance-alerts">Maintenance Alerts</Label>
                <Checkbox id="maintenance-alerts" defaultChecked />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-[#15172B] font-primary mb-4">Billing</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-pay">Auto Pay</Label>
                <Checkbox id="auto-pay" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="paperless">Paperless Billing</Label>
                <Checkbox id="paperless" defaultChecked />
              </div>
            </div>
          </div>
        </div>

        <SheetFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};