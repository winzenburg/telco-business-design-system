import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  EnhancedMenu,
  EnhancedMenuTrigger,
  EnhancedMenuContent,
  EnhancedMenuItem,
  EnhancedMenuItemWithIcon,
  EnhancedMenuCheckboxItem,
  EnhancedMenuRadioItem,
  EnhancedMenuLabel,
  EnhancedMenuSeparator,
  EnhancedMenuDivider,
  EnhancedMenuShortcut,
  EnhancedMenuGroup,
  EnhancedMenuSub,
  EnhancedMenuSubContent,
  EnhancedMenuSubTrigger,
  EnhancedMenuRadioGroup,
} from '../../../components/ui/enhanced-menu';
import { Button } from '../../../components/ui/button';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof EnhancedMenu> = {
  title: 'Components/Enhanced Menu',
  component: EnhancedMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An enhanced context menu with support for cascading submenus, icons, and business-focused interactions.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-[#E8EAEF] text-sm">
      <EnhancedMenu>
        <EnhancedMenuTrigger asChild>
          <div className="cursor-pointer p-4 text-center">
            Right-click me for context menu
          </div>
        </EnhancedMenuTrigger>
        <EnhancedMenuContent>
          <EnhancedMenuItem>Back</EnhancedMenuItem>
          <EnhancedMenuItem>Forward</EnhancedMenuItem>
          <EnhancedMenuItem>Reload</EnhancedMenuItem>
          <EnhancedMenuSeparator />
          <EnhancedMenuItem>View Source</EnhancedMenuItem>
          <EnhancedMenuItem>Inspect Element</EnhancedMenuItem>
        </EnhancedMenuContent>
      </EnhancedMenu>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-[#E8EAEF] text-sm">
      <EnhancedMenu>
        <EnhancedMenuTrigger asChild>
          <div className="cursor-pointer p-4 text-center">
            Right-click for service menu
          </div>
        </EnhancedMenuTrigger>
        <EnhancedMenuContent>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="analytics" size={16} color="currentColor" />}
            shortcut="⌘D"
          >
            View Dashboard
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="configure" size={16} color="currentColor" />}
            shortcut="⌘S"
          >
            Service Settings
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuSeparator />
          <EnhancedMenuItemWithIcon
            icon={<Icon name="document" size={16} color="currentColor" />}
            shortcut="⌘B"
          >
            View Bill
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="gethelp" size={16} color="currentColor" />}
            shortcut="⌘H"
          >
            Get Support
          </EnhancedMenuItemWithIcon>
        </EnhancedMenuContent>
      </EnhancedMenu>
    </div>
  ),
};

export const WithSubmenus: Story = {
  render: () => (
    <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-[#E8EAEF] text-sm">
      <EnhancedMenu>
        <EnhancedMenuTrigger asChild>
          <div className="cursor-pointer p-4 text-center">
            Right-click for business services
          </div>
        </EnhancedMenuTrigger>
        <EnhancedMenuContent>
          <EnhancedMenuLabel>Business Services</EnhancedMenuLabel>
          <EnhancedMenuSeparator />
          
          <EnhancedMenuSub>
            <EnhancedMenuSubTrigger>
              <Icon name="wifi" size={16} color="currentColor" className="mr-2" />
              Internet Services
            </EnhancedMenuSubTrigger>
            <EnhancedMenuSubContent>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="wifi" size={16} color="#16a34a" />}
              >
                Internet Pro 100
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="wifi" size={16} color="#0D62FF" />}
              >
                Internet Pro 200
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="ethernet" size={16} color="#f59e0b" />}
              >
                Dedicated Access
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuSeparator />
              <EnhancedMenuItemWithIcon
                icon={<Icon name="plus" size={16} color="currentColor" />}
              >
                Upgrade Service
              </EnhancedMenuItemWithIcon>
            </EnhancedMenuSubContent>
          </EnhancedMenuSub>
          
          <EnhancedMenuSub>
            <EnhancedMenuSubTrigger>
              <Icon name="conference" size={16} color="currentColor" className="mr-2" />
              Voice Services
            </EnhancedMenuSubTrigger>
            <EnhancedMenuSubContent>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="conference" size={16} color="#16a34a" />}
              >
                Business Voice
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="conference" size={16} color="#0D62FF" />}
              >
                PRI Lines
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="message" size={16} color="#8b5cf6" />}
              >
                SIP Trunking
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuSeparator />
              <EnhancedMenuItemWithIcon
                icon={<Icon name="configure" size={16} color="currentColor" />}
              >
                Manage Lines
              </EnhancedMenuItemWithIcon>
            </EnhancedMenuSubContent>
          </EnhancedMenuSub>
          
          <EnhancedMenuSeparator />
          <EnhancedMenuItemWithIcon
            icon={<Icon name="blockers" size={16} color="currentColor" />}
          >
            Security Suite
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="plus" size={16} color="#0D62FF" />}
          >
            Add New Service
          </EnhancedMenuItemWithIcon>
        </EnhancedMenuContent>
      </EnhancedMenu>
    </div>
  ),
};

export const WithCheckboxes: Story = {
  render: () => {
    const [notifications, setNotifications] = useState({
      email: true,
      sms: false,
      push: true,
      maintenance: true,
    });
    
    return (
      <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-[#E8EAEF] text-sm">
        <EnhancedMenu>
          <EnhancedMenuTrigger asChild>
            <div className="cursor-pointer p-4 text-center">
              Right-click for notification settings
            </div>
          </EnhancedMenuTrigger>
          <EnhancedMenuContent>
            <EnhancedMenuLabel>Notification Settings</EnhancedMenuLabel>
            <EnhancedMenuSeparator />
            <EnhancedMenuCheckboxItem
              checked={notifications.email}
              onCheckedChange={(checked) =>
                setNotifications(prev => ({ ...prev, email: !!checked }))
              }
            >
              Email Notifications
            </EnhancedMenuCheckboxItem>
            <EnhancedMenuCheckboxItem
              checked={notifications.sms}
              onCheckedChange={(checked) =>
                setNotifications(prev => ({ ...prev, sms: !!checked }))
              }
            >
              SMS Alerts
            </EnhancedMenuCheckboxItem>
            <EnhancedMenuCheckboxItem
              checked={notifications.push}
              onCheckedChange={(checked) =>
                setNotifications(prev => ({ ...prev, push: !!checked }))
              }
            >
              Push Notifications
            </EnhancedMenuCheckboxItem>
            <EnhancedMenuSeparator />
            <EnhancedMenuCheckboxItem
              checked={notifications.maintenance}
              onCheckedChange={(checked) =>
                setNotifications(prev => ({ ...prev, maintenance: !!checked }))
              }
            >
              Maintenance Alerts
            </EnhancedMenuCheckboxItem>
          </EnhancedMenuContent>
        </EnhancedMenu>
      </div>
    );
  },
};

export const WithRadioGroup: Story = {
  render: () => {
    const [bandwidth, setBandwidth] = useState('100');
    
    return (
      <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-[#E8EAEF] text-sm">
        <EnhancedMenu>
          <EnhancedMenuTrigger asChild>
            <div className="cursor-pointer p-4 text-center">
              Right-click to select bandwidth
            </div>
          </EnhancedMenuTrigger>
          <EnhancedMenuContent>
            <EnhancedMenuLabel>Internet Speed Options</EnhancedMenuLabel>
            <EnhancedMenuSeparator />
            <EnhancedMenuRadioGroup value={bandwidth} onValueChange={setBandwidth}>
              <EnhancedMenuRadioItem value="50">
                Internet Pro 50 - $99/month
              </EnhancedMenuRadioItem>
              <EnhancedMenuRadioItem value="100">
                Internet Pro 100 - $149/month
              </EnhancedMenuRadioItem>
              <EnhancedMenuRadioItem value="200">
                Internet Pro 200 - $199/month
              </EnhancedMenuRadioItem>
              <EnhancedMenuRadioItem value="500">
                Internet Pro 500 - $299/month
              </EnhancedMenuRadioItem>
            </EnhancedMenuRadioGroup>
            <EnhancedMenuSeparator />
            <EnhancedMenuItemWithIcon
              icon={<Icon name="configure" size={16} color="currentColor" />}
            >
              Custom Configuration
            </EnhancedMenuItemWithIcon>
          </EnhancedMenuContent>
        </EnhancedMenu>
      </div>
    );
  },
};

export const ServiceManagement: Story = {
  render: () => (
    <div className="flex gap-4">
      {/* Internet Service Context Menu */}
      <EnhancedMenu>
        <EnhancedMenuTrigger asChild>
          <Button variant="outline">
            <Icon name="wifi" size={16} color="currentColor" className="mr-2" />
            Internet Pro 100
          </Button>
        </EnhancedMenuTrigger>
        <EnhancedMenuContent>
          <EnhancedMenuLabel>Internet Pro 100 - Main Office</EnhancedMenuLabel>
          <EnhancedMenuDivider label="Service Actions" />
          
          <EnhancedMenuItemWithIcon
            icon={<Icon name="analytics" size={16} color="#0D62FF" />}
            shortcut="⌘U"
          >
            View Usage Stats
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="speed" size={16} color="#16a34a" />}
            shortcut="⌘T"
          >
            Run Speed Test
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="refresh" size={16} color="#f59e0b" />}
          >
            Reset Connection
          </EnhancedMenuItemWithIcon>
          
          <EnhancedMenuSeparator />
          
          <EnhancedMenuSub>
            <EnhancedMenuSubTrigger>
              <Icon name="configure" size={16} color="currentColor" className="mr-2" />
              Configuration
            </EnhancedMenuSubTrigger>
            <EnhancedMenuSubContent>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="wifi" size={16} color="currentColor" />}
              >
                Network Settings
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="blockers" size={16} color="currentColor" />}
              >
                Security Settings
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="device" size={16} color="currentColor" />}
              >
                Device Management
              </EnhancedMenuItemWithIcon>
            </EnhancedMenuSubContent>
          </EnhancedMenuSub>
          
          <EnhancedMenuSub>
            <EnhancedMenuSubTrigger>
              <Icon name="plus" size={16} color="currentColor" className="mr-2" />
              Upgrade Options
            </EnhancedMenuSubTrigger>
            <EnhancedMenuSubContent>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="increase" size={16} color="#0D62FF" />}
              >
                Upgrade to 200 Mbps
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="ethernet" size={16} color="#8b5cf6" />}
              >
                Add Ethernet Service
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="staticip" size={16} color="#f59e0b" />}
              >
                Add Static IP
              </EnhancedMenuItemWithIcon>
            </EnhancedMenuSubContent>
          </EnhancedMenuSub>
          
          <EnhancedMenuSeparator />
          <EnhancedMenuItemWithIcon
            icon={<Icon name="gethelp" size={16} color="currentColor" />}
            shortcut="⌘H"
          >
            Contact Support
          </EnhancedMenuItemWithIcon>
        </EnhancedMenuContent>
      </EnhancedMenu>

      {/* Voice Service Context Menu */}
      <EnhancedMenu>
        <EnhancedMenuTrigger asChild>
          <Button variant="outline">
            <Icon name="conference" size={16} color="currentColor" className="mr-2" />
            Business Voice
          </Button>
        </EnhancedMenuTrigger>
        <EnhancedMenuContent>
          <EnhancedMenuLabel>Business Voice - 15 Lines</EnhancedMenuLabel>
          <EnhancedMenuDivider label="Voice Management" />
          
          <EnhancedMenuItemWithIcon
            icon={<Icon name="conference" size={16} color="#16a34a" />}
          >
            Start Conference Call
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="voicemail" size={16} color="#0D62FF" />}
          >
            Check Voicemail
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="analytics" size={16} color="#f59e0b" />}
          >
            Call Analytics
          </EnhancedMenuItemWithIcon>
          
          <EnhancedMenuSeparator />
          
          <EnhancedMenuSub>
            <EnhancedMenuSubTrigger>
              <Icon name="users" size={16} color="currentColor" className="mr-2" />
              Line Management
            </EnhancedMenuSubTrigger>
            <EnhancedMenuSubContent>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="plus" size={16} color="#16a34a" />}
              >
                Add New Line
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="configure" size={16} color="#0D62FF" />}
              >
                Configure Extensions
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="switchaccounts" size={16} color="#f59e0b" />}
              >
                Transfer Lines
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuSeparator />
              <EnhancedMenuItemWithIcon
                icon={<Icon name="minus" size={16} color="#D11314" />}
                destructive
              >
                Remove Lines
              </EnhancedMenuItemWithIcon>
            </EnhancedMenuSubContent>
          </EnhancedMenuSub>
          
          <EnhancedMenuItemWithIcon
            icon={<Icon name="configure" size={16} color="currentColor" />}
          >
            Voice Settings
          </EnhancedMenuItemWithIcon>
        </EnhancedMenuContent>
      </EnhancedMenu>
    </div>
  ),
};

export const AccountManagement: Story = {
  render: () => (
    <div className="flex h-[150px] w-[400px] items-center justify-center rounded-md border border-dashed border-[#E8EAEF] text-sm">
      <EnhancedMenu>
        <EnhancedMenuTrigger asChild>
          <div className="cursor-pointer p-4 text-center">
            Right-click for account actions
          </div>
        </EnhancedMenuTrigger>
        <EnhancedMenuContent size="lg">
          <EnhancedMenuLabel>Account: ABC Corporation</EnhancedMenuLabel>
          <EnhancedMenuDivider />
          
          <EnhancedMenuGroup>
            <EnhancedMenuItemWithIcon
              icon={<Icon name="analytics" size={16} color="#0D62FF" />}
              shortcut="⌘D"
            >
              Account Dashboard
            </EnhancedMenuItemWithIcon>
            <EnhancedMenuItemWithIcon
              icon={<Icon name="document" size={16} color="#16a34a" />}
              shortcut="⌘B"
            >
              Billing & Payments
            </EnhancedMenuItemWithIcon>
            <EnhancedMenuItemWithIcon
              icon={<Icon name="users" size={16} color="#8b5cf6" />}
              shortcut="⌘U"
            >
              User Management
            </EnhancedMenuItemWithIcon>
          </EnhancedMenuGroup>
          
          <EnhancedMenuDivider label="Quick Actions" />
          
          <EnhancedMenuItemWithIcon
            icon={<Icon name="wallet" size={16} color="#16a34a" />}
            shortcut="⌘P"
          >
            Make a Payment
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="download" size={16} color="#0D62FF" />}
            shortcut="⌘I"
          >
            Download Latest Bill
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="plus" size={16} color="#f59e0b" />}
            shortcut="⌘N"
          >
            Request New Service
          </EnhancedMenuItemWithIcon>
          
          <EnhancedMenuSeparator />
          
          <EnhancedMenuSub>
            <EnhancedMenuSubTrigger>
              <Icon name="gethelp" size={16} color="currentColor" className="mr-2" />
              Support Options
            </EnhancedMenuSubTrigger>
            <EnhancedMenuSubContent>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="message" size={16} color="#0D62FF" />}
              >
                Live Chat Support
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="conference" size={16} color="#16a34a" />}
              >
                Schedule Support Call
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuItemWithIcon
                icon={<Icon name="document" size={16} color="#f59e0b" />}
              >
                Submit Support Ticket
              </EnhancedMenuItemWithIcon>
              <EnhancedMenuSeparator />
              <EnhancedMenuItemWithIcon
                icon={<Icon name="guide" size={16} color="#8b5cf6" />}
              >
                Help Documentation
              </EnhancedMenuItemWithIcon>
            </EnhancedMenuSubContent>
          </EnhancedMenuSub>
          
          <EnhancedMenuSeparator />
          <EnhancedMenuItemWithIcon
            icon={<Icon name="configure" size={16} color="currentColor" />}
          >
            Account Settings
          </EnhancedMenuItemWithIcon>
        </EnhancedMenuContent>
      </EnhancedMenu>
    </div>
  ),
};

export const DestructiveActions: Story = {
  render: () => (
    <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-[#E8EAEF] text-sm">
      <EnhancedMenu>
        <EnhancedMenuTrigger asChild>
          <div className="cursor-pointer p-4 text-center">
            Right-click for service actions
          </div>
        </EnhancedMenuTrigger>
        <EnhancedMenuContent>
          <EnhancedMenuLabel>Service Actions</EnhancedMenuLabel>
          <EnhancedMenuSeparator />
          
          <EnhancedMenuItemWithIcon
            icon={<Icon name="configure" size={16} color="currentColor" />}
          >
            Configure Service
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="refresh" size={16} color="currentColor" />}
          >
            Restart Service
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="plus" size={16} color="currentColor" />}
          >
            Upgrade Service
          </EnhancedMenuItemWithIcon>
          
          <EnhancedMenuSeparator />
          
          <EnhancedMenuItemWithIcon
            icon={<Icon name="minus" size={16} color="#D11314" />}
            destructive
          >
            Suspend Service
          </EnhancedMenuItemWithIcon>
          <EnhancedMenuItemWithIcon
            icon={<Icon name="close" size={16} color="#D11314" />}
            destructive
          >
            Cancel Service
          </EnhancedMenuItemWithIcon>
        </EnhancedMenuContent>
      </EnhancedMenu>
    </div>
  ),
};