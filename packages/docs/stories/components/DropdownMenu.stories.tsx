import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../../../components/ui/dropdown-menu';
import { Button } from '../../../components/ui/button';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/Dropdown Menu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Icon name="configure" size={16} color="currentColor" className="mr-2" />
          Options
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Account Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon name="analytics" size={16} color="currentColor" className="mr-2" />
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="configure" size={16} color="currentColor" className="mr-2" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="document" size={16} color="currentColor" className="mr-2" />
            Billing
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon name="gethelp" size={16} color="currentColor" className="mr-2" />
          Support
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithCheckboxes: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = useState({
      notifications: true,
      analytics: false,
      marketing: true,
    });

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Icon name="configure" size={16} color="currentColor" className="mr-2" />
            Preferences
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Email Preferences</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={checkedItems.notifications}
            onCheckedChange={(checked) =>
              setCheckedItems(prev => ({ ...prev, notifications: !!checked }))
            }
          >
            Service Notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={checkedItems.analytics}
            onCheckedChange={(checked) =>
              setCheckedItems(prev => ({ ...prev, analytics: !!checked }))
            }
          >
            Usage Analytics
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={checkedItems.marketing}
            onCheckedChange={(checked) =>
              setCheckedItems(prev => ({ ...prev, marketing: !!checked }))
            }
          >
            Marketing Updates
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const WithRadioGroup: Story = {
  render: () => {
    const [position, setPosition] = useState('bottom');

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Panel Position
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const WithSubmenus: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Icon name="menu" size={16} color="currentColor" className="mr-2" />
          Services
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Business Services</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Icon name="wifi" size={16} color="currentColor" className="mr-2" />
              Internet Services
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Internet Pro 100</DropdownMenuItem>
                <DropdownMenuItem>Internet Pro 200</DropdownMenuItem>
                <DropdownMenuItem>Dedicated Access</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Ethernet</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Icon name="conference" size={16} color="currentColor" className="mr-2" />
              Voice Services
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Business Voice</DropdownMenuItem>
                <DropdownMenuItem>PRI</DropdownMenuItem>
                <DropdownMenuItem>SIP Trunking</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Conference Bridge</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon name="blockers" size={16} color="currentColor" className="mr-2" />
          Security Suite
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon name="gethelp" size={16} color="currentColor" className="mr-2" />
          Support Services
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const BusinessActions: Story = {
  render: () => (
    <div className="flex gap-4">
      {/* Account Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Icon name="users" size={16} color="currentColor" className="mr-2" />
            Account
            <Icon name="chevron" size={12} color="currentColor" className="ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Account Management</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Icon name="analytics" size={16} color="currentColor" className="mr-2" />
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="document" size={16} color="currentColor" className="mr-2" />
              Billing & Payments
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="configure" size={16} color="currentColor" className="mr-2" />
              Account Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Icon name="users" size={16} color="currentColor" className="mr-2" />
              User Management
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="analytics" size={16} color="currentColor" className="mr-2" />
              Usage Reports
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Icon name="gethelp" size={16} color="currentColor" className="mr-2" />
            Get Support
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Service Management Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Icon name="configure" size={16} color="currentColor" className="mr-2" />
            Services
            <Icon name="chevron" size={12} color="currentColor" className="ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel>Service Management</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Icon name="wifi" size={16} color="currentColor" className="mr-2" />
              <div>
                <div>Internet Pro - Main Office</div>
                <div className="text-xs text-[#70717D]">100 Mbps • Active</div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="conference" size={16} color="currentColor" className="mr-2" />
              <div>
                <div>Business Voice</div>
                <div className="text-xs text-[#70717D]">15 Lines • Active</div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="blockers" size={16} color="currentColor" className="mr-2" />
              <div>
                <div>Security Suite</div>
                <div className="text-xs text-[#70717D]">Enterprise • Protected</div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Icon name="plus" size={16} color="currentColor" className="mr-2" />
            Add New Service
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="configure" size={16} color="currentColor" className="mr-2" />
            Manage All Services
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
};

export const QuickActions: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Icon name="configure" size={16} color="white" className="mr-2" />
          Quick Actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel>Frequently Used Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon name="wallet" size={16} color="currentColor" className="mr-3" />
            <div className="flex-1">
              <div className="font-medium">Make a Payment</div>
              <div className="text-xs text-[#70717D]">Pay your current bill</div>
            </div>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="document" size={16} color="currentColor" className="mr-3" />
            <div className="flex-1">
              <div className="font-medium">View Latest Bill</div>
              <div className="text-xs text-[#70717D]">Download or view your bill</div>
            </div>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="analytics" size={16} color="currentColor" className="mr-3" />
            <div className="flex-1">
              <div className="font-medium">Usage Reports</div>
              <div className="text-xs text-[#70717D]">Check your data usage</div>
            </div>
            <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon name="gethelp" size={16} color="currentColor" className="mr-3" />
            <div className="flex-1">
              <div className="font-medium">Contact Support</div>
              <div className="text-xs text-[#70717D]">Get help with your services</div>
            </div>
            <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="plus" size={16} color="currentColor" className="mr-3" />
            <div className="flex-1">
              <div className="font-medium">Request Service</div>
              <div className="text-xs text-[#70717D]">Add or upgrade services</div>
            </div>
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};