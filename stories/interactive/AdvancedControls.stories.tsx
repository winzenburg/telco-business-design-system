import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  Popover,
  PopoverTrigger,
  PopoverContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  Button,
  Badge,
  Input,
  Label,
  Switch
} from '../../src/components';
import { Settings, MoreVertical, User, UserPlus, Mail, MessageSquare, Phone, CreditCard, FileText, Download, Share, Edit, Trash, Search, Calculator, Calendar, FileCheck, PieChart } from 'lucide-react';

const meta: Meta = {
  title: 'Components/Interactive/Advanced Controls',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Advanced interactive components including popovers, dropdown menus, sheets, and command palettes for Comcast Business applications.'
      }
    }
  },
};

export default meta;
type Story = StoryObj;

export const PopoverExamples: Story = {
  name: 'Business Popovers',
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#2B2D3F]">Account Information Popovers</h2>
        
        <div className="flex flex-wrap gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Account Details</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Business Account</h4>
                  <p className="text-sm text-[#70717D]">
                    Manage your Comcast Business services and billing information
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="account">Account ID</Label>
                    <Input id="account" value="CB-2024-789123" className="col-span-2 h-8" readOnly />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="status">Status</Label>
                    <div className="col-span-2">
                      <Badge variant="success">Active</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="billing">Billing</Label>
                    <div className="col-span-2">
                      <Badge variant="info">Auto-Pay Enabled</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Service Usage</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Current Usage</h4>
                  <p className="text-sm text-[#70717D]">
                    Real-time usage statistics for your business services
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Internet Data</span>
                    <span className="text-sm font-semibold">2.4 TB / Unlimited</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Voice Minutes</span>
                    <span className="text-sm font-semibold">1,247 / Unlimited</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Security Scans</span>
                    <span className="text-sm font-semibold">847 this month</span>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Contact Support</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Business Support</h4>
                  <p className="text-sm text-[#70717D]">
                    Get help with your Comcast Business services
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#0D62FF]" />
                    <div>
                      <div className="text-sm font-medium">24/7 Technical Support</div>
                      <div className="text-xs text-[#70717D]">1-800-COMCAST</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-4 w-4 text-[#0D62FF]" />
                    <div>
                      <div className="text-sm font-medium">Live Chat</div>
                      <div className="text-xs text-[#70717D]">Available 24/7</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#0D62FF]" />
                    <div>
                      <div className="text-sm font-medium">Account Manager</div>
                      <div className="text-xs text-[#70717D]">sarah.j@comcast.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  ),
};

export const DropdownMenuExamples: Story = {
  name: 'Business Dropdown Menus',
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#2B2D3F]">Service Management Menus</h2>
        
        <div className="flex flex-wrap gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Account Actions</DropdownMenuLabel>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>Download Invoice</span>
                <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Service Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Service Management</DropdownMenuLabel>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                <span>Edit Service</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                <span>Download Report</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share className="mr-2 h-4 w-4" />
                <span>Share Access</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <Trash className="mr-2 h-4 w-4" />
                <span>Cancel Service</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">View Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Display Options</DropdownMenuLabel>
              <DropdownMenuCheckboxItem checked>
                Show Usage Data
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Show Billing History
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>
                Show Service Status
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="detailed">
                <DropdownMenuRadioItem value="simple">
                  Simple View
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="detailed">
                  Detailed View
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="compact">
                  Compact View
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  ),
};

export const SheetExamples: Story = {
  name: 'Business Information Panels',
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#2B2D3F]">Service Detail Panels</h2>
        
        <div className="flex flex-wrap gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Account Settings</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Account Settings</SheetTitle>
                <SheetDescription>
                  Manage your Comcast Business account preferences and notifications.
                </SheetDescription>
              </SheetHeader>
              
              <div className="py-6 space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-[#2B2D3F]">Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Service Alerts</div>
                        <div className="text-xs text-[#70717D]">Receive notifications about service issues</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Billing Reminders</div>
                        <div className="text-xs text-[#70717D]">Get reminders before payment due dates</div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Usage Alerts</div>
                        <div className="text-xs text-[#70717D]">Alerts when approaching usage limits</div>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-[#2B2D3F]">Account Information</h4>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your Business Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email</Label>
                      <Input id="email" type="email" placeholder="business@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Primary Phone</Label>
                      <Input id="phone" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                </div>
              </div>
              
              <SheetFooter>
                <Button type="submit">Save Changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Service Details</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Service Details</SheetTitle>
                <SheetDescription>
                  Comprehensive information about your business services.
                </SheetDescription>
              </SheetHeader>
              
              <div className="py-6 space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-[#2B2D3F]">Internet Service</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#70717D]">Package</span>
                      <span className="font-medium">Business Internet Pro</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#70717D]">Speed</span>
                      <span className="font-medium">1000 Mbps / 1000 Mbps</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#70717D]">Monthly Cost</span>
                      <span className="font-medium">$159.99</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#70717D]">Status</span>
                      <Badge variant="success">Active</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-[#2B2D3F]">Voice Services</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#70717D]">Lines</span>
                      <span className="font-medium">25 Active Lines</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#70717D]">Features</span>
                      <span className="font-medium">Auto Attendant, Voicemail</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#70717D]">Monthly Cost</span>
                      <span className="font-medium">$89.99</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#70717D]">Status</span>
                      <Badge variant="info">Setup in Progress</Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-[#2B2D3F]">Security Suite</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#70717D]">Protection Level</span>
                      <span className="font-medium">Enterprise Grade</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#70717D]">Threats Blocked</span>
                      <span className="font-medium">47 this month</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#70717D]">Monthly Cost</span>
                      <span className="font-medium">$49.99</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#70717D]">Status</span>
                      <Badge variant="warning">Update Available</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  ),
};

export const CommandPaletteExample: Story = {
  name: 'Business Command Palette',
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#2B2D3F]">Quick Actions</h2>
          <p className="text-sm text-[#70717D]">
            Use the command palette to quickly navigate and perform actions across your business account.
          </p>
          
          <Button
            variant="outline"
            onClick={() => setOpen(true)}
            className="justify-start text-left font-normal"
          >
            <Search className="mr-2 h-4 w-4" />
            Search services, billing, support...
            <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border border-[#E8EAEF] bg-[#F5F6FA] px-1.5 font-mono text-[10px] font-medium text-[#70717D]">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>

          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Services">
                <CommandItem>
                  <FileCheck className="mr-2 h-4 w-4" />
                  <span>View Internet Service</span>
                </CommandItem>
                <CommandItem>
                  <Phone className="mr-2 h-4 w-4" />
                  <span>Manage Voice Services</span>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configure Security Settings</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="Billing">
                <CommandItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>View Current Bill</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Download className="mr-2 h-4 w-4" />
                  <span>Download Invoice</span>
                </CommandItem>
                <CommandItem>
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>Payment History</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="Support">
                <CommandItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Contact Support</span>
                  <CommandShortcut>⌘H</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Account Manager</span>
                </CommandItem>
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Service Documentation</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="Reports">
                <CommandItem>
                  <PieChart className="mr-2 h-4 w-4" />
                  <span>Usage Analytics</span>
                </CommandItem>
                <CommandItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Service History</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </div>
      </div>
    );
  },
};