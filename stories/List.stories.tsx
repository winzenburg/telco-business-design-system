import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemContent,
  ListItemLeading,
  ListItemTrailing,
  ListItemText,
  ListItemSecondaryText,
  ListItemSupportingText,
  ListSection,
  ListSectionHeader,
  ListDivider,
  Badge,
  Switch,
  Checkbox,
  Avatar,
  AvatarFallback,
  Button,
} from '../src/components';
import { 
  User, 
  Mail, 
  Phone, 
  Settings, 
  ChevronRight,
  Star,
  Heart,
  Download,
  Share,
  MoreHorizontal,
  Wifi,
  Bluetooth,
  Volume,
  Bell,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';

const meta: Meta<typeof List> = {
  title: 'List',
  component: List,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Material Design 3 inspired Lists component for displaying structured content. Supports one-line, two-line, and three-line list items with leading and trailing elements, interactive states, and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined'],
      description: 'Visual style variant of the list',
    },
    density: {
      control: 'select', 
      options: ['default', 'compact', 'comfortable'],
      description: 'Spacing density of list items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OneLineList: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <List {...args}>
        <ListItem>
          <ListItemContent lines="one">
            <ListItemText>Single line item</ListItemText>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent lines="one">
            <ListItemText>Another single line item</ListItemText>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent lines="one">
            <ListItemText>Yet another item</ListItemText>
          </ListItemContent>
        </ListItem>
      </List>
    </div>
  ),
};

export const TwoLineList: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <List {...args}>
        <ListItem>
          <ListItemContent lines="two">
            <ListItemText>Primary text line</ListItemText>
            <ListItemSecondaryText>Secondary supporting text</ListItemSecondaryText>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent lines="two">
            <ListItemText>Another primary line</ListItemText>
            <ListItemSecondaryText>More secondary information</ListItemSecondaryText>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent lines="two">
            <ListItemText>Third item</ListItemText>
            <ListItemSecondaryText>Additional context information</ListItemSecondaryText>
          </ListItemContent>
        </ListItem>
      </List>
    </div>
  ),
};

export const ThreeLineList: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <List {...args}>
        <ListItem>
          <ListItemContent lines="three">
            <ListItemText>Primary headline text</ListItemText>
            <ListItemSecondaryText>Secondary supporting information</ListItemSecondaryText>
            <ListItemSupportingText>Additional supporting details</ListItemSupportingText>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent lines="three">
            <ListItemText>Another headline</ListItemText>
            <ListItemSecondaryText>More supporting content here</ListItemSecondaryText>
            <ListItemSupportingText>Extra contextual information</ListItemSupportingText>
          </ListItemContent>
        </ListItem>
      </List>
    </div>
  ),
};

export const WithLeadingIcons: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <List {...args}>
        <ListItem>
          <ListItemLeading>
            <User className="w-5 h-5 text-[#0D62FF]" />
          </ListItemLeading>
          <ListItemContent lines="one">
            <ListItemText>User Profile</ListItemText>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemLeading>
            <Mail className="w-5 h-5 text-[#0D62FF]" />
          </ListItemLeading>
          <ListItemContent lines="one">
            <ListItemText>Messages</ListItemText>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemLeading>
            <Phone className="w-5 h-5 text-[#0D62FF]" />
          </ListItemLeading>
          <ListItemContent lines="one">
            <ListItemText>Phone</ListItemText>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemLeading>
            <Settings className="w-5 h-5 text-[#0D62FF]" />
          </ListItemLeading>
          <ListItemContent lines="one">
            <ListItemText>Settings</ListItemText>
          </ListItemContent>
        </ListItem>
      </List>
    </div>
  ),
};

export const WithTrailingElements: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <List {...args}>
        <ListItem>
          <ListItemContent lines="two">
            <ListItemText>Wi-Fi</ListItemText>
            <ListItemSecondaryText>Connected to ComcastWifi</ListItemSecondaryText>
          </ListItemContent>
          <ListItemTrailing>
            <Switch />
          </ListItemTrailing>
        </ListItem>
        <ListItem>
          <ListItemContent lines="two">
            <ListItemText>Bluetooth</ListItemText>
            <ListItemSecondaryText>AirPods Pro connected</ListItemSecondaryText>
          </ListItemContent>
          <ListItemTrailing>
            <Switch defaultChecked />
          </ListItemTrailing>
        </ListItem>
        <ListItem>
          <ListItemContent lines="one">
            <ListItemText>Sound & vibration</ListItemText>
          </ListItemContent>
          <ListItemTrailing>
            <ChevronRight className="w-5 h-5 text-[#70717D]" />
          </ListItemTrailing>
        </ListItem>
        <ListItem>
          <ListItemContent lines="one">
            <ListItemText>Display</ListItemText>
          </ListItemContent>
          <ListItemTrailing>
            <ChevronRight className="w-5 h-5 text-[#70717D]" />
          </ListItemTrailing>
        </ListItem>
      </List>
    </div>
  ),
};

export const WithAvatars: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <List {...args}>
        <ListItem>
          <ListItemLeading>
            <Avatar className="w-10 h-10">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </ListItemLeading>
          <ListItemContent lines="two">
            <ListItemText>John Doe</ListItemText>
            <ListItemSecondaryText>Software Engineer</ListItemSecondaryText>
          </ListItemContent>
          <ListItemTrailing>
            <MoreHorizontal className="w-5 h-5 text-[#70717D]" />
          </ListItemTrailing>
        </ListItem>
        <ListItem>
          <ListItemLeading>
            <Avatar className="w-10 h-10">
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </ListItemLeading>
          <ListItemContent lines="two">
            <ListItemText>Alice Smith</ListItemText>
            <ListItemSecondaryText>Product Manager</ListItemSecondaryText>
          </ListItemContent>
          <ListItemTrailing>
            <MoreHorizontal className="w-5 h-5 text-[#70717D]" />
          </ListItemTrailing>
        </ListItem>
        <ListItem>
          <ListItemLeading>
            <Avatar className="w-10 h-10">
              <AvatarFallback>MJ</AvatarFallback>
            </Avatar>
          </ListItemLeading>
          <ListItemContent lines="two">
            <ListItemText>Michael Johnson</ListItemText>
            <ListItemSecondaryText>UX Designer</ListItemSecondaryText>
          </ListItemContent>
          <ListItemTrailing>
            <MoreHorizontal className="w-5 h-5 text-[#70717D]" />
          </ListItemTrailing>
        </ListItem>
      </List>
    </div>
  ),
};

export const InteractiveList: Story = {
  render: (args) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    
    const handleItemClick = (id: string) => {
      setSelectedItems(prev => 
        prev.includes(id) 
          ? prev.filter(item => item !== id)
          : [...prev, id]
      );
    };

    const items = [
      { id: 'item1', title: 'Clickable item 1', subtitle: 'Click to select' },
      { id: 'item2', title: 'Clickable item 2', subtitle: 'Click to select' },
      { id: 'item3', title: 'Clickable item 3', subtitle: 'Click to select' },
    ];

    return (
      <div className="w-full max-w-md">
        <List {...args}>
          {items.map(item => (
            <ListItem
              key={item.id}
              variant="clickable"
              selected={selectedItems.includes(item.id)}
              onClick={() => handleItemClick(item.id)}
            >
              <ListItemLeading>
                <Checkbox 
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleItemClick(item.id)}
                />
              </ListItemLeading>
              <ListItemContent lines="two">
                <ListItemText>{item.title}</ListItemText>
                <ListItemSecondaryText>{item.subtitle}</ListItemSecondaryText>
              </ListItemContent>
            </ListItem>
          ))}
        </List>
      </div>
    );
  },
};

export const SectionedList: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <List {...args}>
        <ListSection>
          <ListSectionHeader>Connectivity</ListSectionHeader>
          <ListItem>
            <ListItemLeading>
              <Wifi className="w-5 h-5 text-[#0D62FF]" />
            </ListItemLeading>
            <ListItemContent lines="two">
              <ListItemText>Wi-Fi</ListItemText>
              <ListItemSecondaryText>ComcastWifi</ListItemSecondaryText>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemLeading>
              <Bluetooth className="w-5 h-5 text-[#0D62FF]" />
            </ListItemLeading>
            <ListItemContent lines="two">
              <ListItemText>Bluetooth</ListItemText>
              <ListItemSecondaryText>2 devices connected</ListItemSecondaryText>
            </ListItemContent>
          </ListItem>
        </ListSection>
        
        <ListDivider />
        
        <ListSection>
          <ListSectionHeader>Sound & Display</ListSectionHeader>
          <ListItem>
            <ListItemLeading>
              <Volume className="w-5 h-5 text-[#0D62FF]" />
            </ListItemLeading>
            <ListItemContent lines="one">
              <ListItemText>Sound</ListItemText>
            </ListItemContent>
            <ListItemTrailing>
              <ChevronRight className="w-5 h-5 text-[#70717D]" />
            </ListItemTrailing>
          </ListItem>
          <ListItem>
            <ListItemLeading>
              <Bell className="w-5 h-5 text-[#0D62FF]" />
            </ListItemLeading>
            <ListItemContent lines="one">
              <ListItemText>Notifications</ListItemText>
            </ListItemContent>
            <ListItemTrailing>
              <ChevronRight className="w-5 h-5 text-[#70717D]" />
            </ListItemTrailing>
          </ListItem>
        </ListSection>
      </List>
    </div>
  ),
};

export const StatusList: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <List {...args}>
        <ListItem>
          <ListItemLeading>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </ListItemLeading>
          <ListItemContent lines="two">
            <ListItemText>Service Connected</ListItemText>
            <ListItemSecondaryText>Internet service is active</ListItemSecondaryText>
          </ListItemContent>
          <ListItemTrailing>
            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
              Active
            </Badge>
          </ListItemTrailing>
        </ListItem>
        
        <ListItem>
          <ListItemLeading>
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </ListItemLeading>
          <ListItemContent lines="two">
            <ListItemText>Maintenance Scheduled</ListItemText>
            <ListItemSecondaryText>Network maintenance at 2:00 AM</ListItemSecondaryText>
          </ListItemContent>
          <ListItemTrailing>
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
              Pending
            </Badge>
          </ListItemTrailing>
        </ListItem>
        
        <ListItem>
          <ListItemLeading>
            <Clock className="w-5 h-5 text-blue-600" />
          </ListItemLeading>
          <ListItemContent lines="two">
            <ListItemText>Backup in Progress</ListItemText>
            <ListItemSecondaryText>Backing up system configuration</ListItemSecondaryText>
          </ListItemContent>
          <ListItemTrailing>
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
              Running
            </Badge>
          </ListItemTrailing>
        </ListItem>
      </List>
    </div>
  ),
};

export const ActionsList: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <List {...args}>
        <ListItem variant="clickable">
          <ListItemLeading>
            <Download className="w-5 h-5 text-[#0D62FF]" />
          </ListItemLeading>
          <ListItemContent lines="two">
            <ListItemText>Download Report</ListItemText>
            <ListItemSecondaryText>Get the latest network report</ListItemSecondaryText>
          </ListItemContent>
        </ListItem>
        
        <ListItem variant="clickable">
          <ListItemLeading>
            <Share className="w-5 h-5 text-[#0D62FF]" />
          </ListItemLeading>
          <ListItemContent lines="two">
            <ListItemText>Share Configuration</ListItemText>
            <ListItemSecondaryText>Send config to team members</ListItemSecondaryText>
          </ListItemContent>
        </ListItem>
        
        <ListItem variant="clickable">
          <ListItemLeading>
            <Star className="w-5 h-5 text-[#0D62FF]" />
          </ListItemLeading>
          <ListItemContent lines="two">
            <ListItemText>Add to Favorites</ListItemText>
            <ListItemSecondaryText>Quick access to this service</ListItemSecondaryText>
          </ListItemContent>
        </ListItem>
      </List>
    </div>
  ),
};

export const DensityVariations: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-md">
      <div>
        <h3 className="text-sm font-medium text-[#2B2D3F] mb-2">Compact Density</h3>
        <List density="compact" variant="outlined">
          <ListItem>
            <ListItemLeading>
              <User className="w-4 h-4 text-[#0D62FF]" />
            </ListItemLeading>
            <ListItemContent lines="one">
              <ListItemText>Compact list item</ListItemText>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemLeading>
              <Mail className="w-4 h-4 text-[#0D62FF]" />
            </ListItemLeading>
            <ListItemContent lines="one">
              <ListItemText>Another compact item</ListItemText>
            </ListItemContent>
          </ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-[#2B2D3F] mb-2">Default Density</h3>
        <List density="default" variant="outlined">
          <ListItem>
            <ListItemLeading>
              <User className="w-5 h-5 text-[#0D62FF]" />
            </ListItemLeading>
            <ListItemContent lines="one">
              <ListItemText>Default list item</ListItemText>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemLeading>
              <Mail className="w-5 h-5 text-[#0D62FF]" />
            </ListItemLeading>
            <ListItemContent lines="one">
              <ListItemText>Another default item</ListItemText>
            </ListItemContent>
          </ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-[#2B2D3F] mb-2">Comfortable Density</h3>
        <List density="comfortable" variant="outlined">
          <ListItem>
            <ListItemLeading>
              <User className="w-5 h-5 text-[#0D62FF]" />
            </ListItemLeading>
            <ListItemContent lines="one">
              <ListItemText>Comfortable list item</ListItemText>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemLeading>
              <Mail className="w-5 h-5 text-[#0D62FF]" />
            </ListItemLeading>
            <ListItemContent lines="one">
              <ListItemText>Another comfortable item</ListItemText>
            </ListItemContent>
          </ListItem>
        </List>
      </div>
    </div>
  ),
};

export const VariantShowcase: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-md">
      <div>
        <h3 className="text-sm font-medium text-[#2B2D3F] mb-2">Default Variant</h3>
        <List variant="default">
          <ListItem>
            <ListItemContent lines="one">
              <ListItemText>Default list styling</ListItemText>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent lines="one">
              <ListItemText>Clean and minimal</ListItemText>
            </ListItemContent>
          </ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-[#2B2D3F] mb-2">Elevated Variant</h3>
        <List variant="elevated">
          <ListItem>
            <ListItemContent lines="one">
              <ListItemText>Elevated with shadow</ListItemText>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent lines="one">
              <ListItemText>Subtle elevation effect</ListItemText>
            </ListItemContent>
          </ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-[#2B2D3F] mb-2">Outlined Variant</h3>
        <List variant="outlined">
          <ListItem>
            <ListItemContent lines="one">
              <ListItemText>Outlined with border</ListItemText>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent lines="one">
              <ListItemText>Clear boundaries</ListItemText>
            </ListItemContent>
          </ListItem>
        </List>
      </div>
    </div>
  ),
};