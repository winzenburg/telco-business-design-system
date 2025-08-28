import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListSection,
  ListHeader,
  NavigationListItem,
} from '../../../components/ui/list';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Switch } from '../../../components/ui/switch';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible list component for displaying structured content with leading and trailing elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'plain', 'card'],
      description: 'Visual style variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <List className="w-[350px]">
      <ListItem>
        Basic list item
      </ListItem>
      <ListItem subtitle="With subtitle">
        List item with subtitle
      </ListItem>
      <ListItem
        leading={<Icon name="wifi" size={20} color="currentColor" />}
        trailing={<Badge>Active</Badge>}
        subtitle="Internet Pro service"
      >
        Internet Connection
      </ListItem>
    </List>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <List className="w-[350px]">
      <ListItem
        leading={<Icon name="wifi" size={20} color="#0D62FF" />}
        trailing={<Icon name="chevron" size={16} color="#70717D" />}
      >
        Internet Services
      </ListItem>
      <ListItem
        leading={<Icon name="conference" size={20} color="#0D62FF" />}
        trailing={<Icon name="chevron" size={16} color="#70717D" />}
      >
        Voice Services
      </ListItem>
      <ListItem
        leading={<Icon name="blockers" size={20} color="#0D62FF" />}
        trailing={<Icon name="chevron" size={16} color="#70717D" />}
      >
        Security Suite
      </ListItem>
    </List>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [selectedService, setSelectedService] = useState('internet');
    
    return (
      <List className="w-[400px]">
        {[
          { id: 'internet', name: 'Internet Pro 100', status: 'Active', icon: 'wifi' },
          { id: 'voice', name: 'Business Voice', status: 'Active', icon: 'conference' },
          { id: 'security', name: 'Security Suite', status: 'Protected', icon: 'blockers' },
        ].map((service) => (
          <ListItem
            key={service.id}
            variant={selectedService === service.id ? 'selected' : 'interactive'}
            leading={<Icon name={service.icon} size={20} color="#0D62FF" />}
            trailing={
              <Badge variant={service.status === 'Active' || service.status === 'Protected' ? 'default' : 'secondary'}>
                {service.status}
              </Badge>
            }
            subtitle={`${service.id === 'internet' ? '100 Mbps' : service.id === 'voice' ? '15 Lines' : 'Enterprise'}`}
            onClick={() => setSelectedService(service.id)}
          >
            {service.name}
          </ListItem>
        ))}
      </List>
    );
  },
};

export const WithSections: Story = {
  render: () => (
    <div className="w-[400px]">
      <List variant="card">
        <ListHeader 
          title="Business Services" 
          subtitle="Manage your Comcast Business services"
          action={<Button size="sm" variant="outline">Manage All</Button>}
        />
        
        <ListSection title="Internet Services">
          <ListItem
            leading={<Icon name="wifi" size={20} color="#16a34a" />}
            trailing={<Badge>Active</Badge>}
            subtitle="100 Mbps • $149/month"
            variant="interactive"
          >
            Internet Pro 100
          </ListItem>
          <ListItem
            leading={<Icon name="ethernet" size={20} color="#0D62FF" />}
            trailing={<Badge variant="secondary">Available</Badge>}
            subtitle="Dedicated connection"
            variant="interactive"
          >
            Ethernet Service
          </ListItem>
        </ListSection>
        
        <ListSection title="Communication">
          <ListItem
            leading={<Icon name="conference" size={20} color="#16a34a" />}
            trailing={<Badge>15 Lines</Badge>}
            subtitle="Business Voice • $89/month"
            variant="interactive"
          >
            Voice Services
          </ListItem>
          <ListItem
            leading={<Icon name="message" size={20} color="#0D62FF" />}
            trailing={<Badge variant="secondary">Add-on</Badge>}
            subtitle="Unified messaging"
            variant="interactive"
          >
            Business Messaging
          </ListItem>
        </ListSection>
      </List>
    </div>
  ),
};

export const ServiceDashboard: Story = {
  render: () => {
    const [services, setServices] = useState([
      { id: 'internet', enabled: true, usage: 75 },
      { id: 'voice', enabled: true, usage: 45 },
      { id: 'security', enabled: false, usage: 0 },
    ]);
    
    const toggleService = (id: string) => {
      setServices(prev => prev.map(service => 
        service.id === id ? { ...service, enabled: !service.enabled } : service
      ));
    };
    
    return (
      <div className="w-[500px]">
        <List variant="card">
          <ListHeader 
            title="Service Management Dashboard" 
            subtitle="Monitor and control your business services"
          />
          
          <ListItem
            leading={<Icon name="wifi" size={24} color={services[0].enabled ? "#16a34a" : "#70717D"} />}
            trailing={
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-[#15172B]">{services[0].usage}%</div>
                  <div className="text-xs text-[#70717D]">Usage</div>
                </div>
                <Switch 
                  checked={services[0].enabled}
                  onCheckedChange={() => toggleService('internet')}
                />
              </div>
            }
            subtitle="Internet Pro 100 • Main Office"
            variant="interactive"
          >
            <div className="flex items-center gap-2">
              Internet Service
              {services[0].enabled && <div className="w-2 h-2 bg-[#16a34a] rounded-full"></div>}
            </div>
          </ListItem>
          
          <ListItem
            leading={<Icon name="conference" size={24} color={services[1].enabled ? "#16a34a" : "#70717D"} />}
            trailing={
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-[#15172B]">12/15</div>
                  <div className="text-xs text-[#70717D]">Lines</div>
                </div>
                <Switch 
                  checked={services[1].enabled}
                  onCheckedChange={() => toggleService('voice')}
                />
              </div>
            }
            subtitle="Business Voice • Conference Ready"
            variant="interactive"
          >
            <div className="flex items-center gap-2">
              Voice Services
              {services[1].enabled && <div className="w-2 h-2 bg-[#16a34a] rounded-full"></div>}
            </div>
          </ListItem>
          
          <ListItem
            leading={<Icon name="blockers" size={24} color={services[2].enabled ? "#16a34a" : "#f59e0b"} />}
            trailing={
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-[#D11314]">Disabled</div>
                  <div className="text-xs text-[#70717D]">Status</div>
                </div>
                <Switch 
                  checked={services[2].enabled}
                  onCheckedChange={() => toggleService('security')}
                />
              </div>
            }
            subtitle="Security Suite • Needs Activation"
            variant="interactive"
          >
            <div className="flex items-center gap-2">
              Security Services
              <div className="w-2 h-2 bg-[#f59e0b] rounded-full"></div>
            </div>
          </ListItem>
        </List>
      </div>
    );
  },
};

export const ContactList: Story = {
  render: () => (
    <div className="w-[400px]">
      <List variant="card">
        <ListHeader title="Support Contacts" subtitle="Quick access to support teams" />
        
        <ListSection title="Technical Support">
          <NavigationListItem
            leading={
              <div className="w-8 h-8 bg-[#0D62FF] rounded-full flex items-center justify-center">
                <Icon name="gethelp" size={16} color="white" />
              </div>
            }
            subtitle="24/7 Technical assistance"
          >
            Internet Support Team
          </NavigationListItem>
          
          <NavigationListItem
            leading={
              <div className="w-8 h-8 bg-[#16a34a] rounded-full flex items-center justify-center">
                <Icon name="conference" size={16} color="white" />
              </div>
            }
            subtitle="Voice service support"
          >
            Voice Support Team
          </NavigationListItem>
        </ListSection>
        
        <ListSection title="Account Management">
          <NavigationListItem
            leading={
              <div className="w-8 h-8 bg-[#f59e0b] rounded-full flex items-center justify-center">
                <Icon name="users" size={16} color="white" />
              </div>
            }
            subtitle="Account questions and billing"
          >
            Account Manager
          </NavigationListItem>
          
          <NavigationListItem
            leading={
              <div className="w-8 h-8 bg-[#8b5cf6] rounded-full flex items-center justify-center">
                <Icon name="configure" size={16} color="white" />
              </div>
            }
            subtitle="Service upgrades and changes"
          >
            Solutions Specialist
          </NavigationListItem>
        </ListSection>
      </List>
    </div>
  ),
};

export const BillingHistory: Story = {
  render: () => (
    <div className="w-[450px]">
      <List variant="card">
        <ListHeader 
          title="Recent Billing History" 
          subtitle="Last 6 months of billing statements"
          action={<Button size="sm" variant="outline">View All</Button>}
        />
        
        {[
          { month: 'December 2023', amount: '$362.00', status: 'Paid', date: 'Dec 15, 2023' },
          { month: 'November 2023', amount: '$362.00', status: 'Paid', date: 'Nov 15, 2023' },
          { month: 'October 2023', amount: '$362.00', status: 'Paid', date: 'Oct 15, 2023' },
          { month: 'September 2023', amount: '$362.00', status: 'Overdue', date: 'Sep 15, 2023' },
        ].map((bill, index) => (
          <ListItem
            key={index}
            leading={<Icon name="document" size={20} color="#0D62FF" />}
            trailing={
              <div className="text-right">
                <div className="font-medium text-[#15172B]">{bill.amount}</div>
                <Badge variant={bill.status === 'Paid' ? 'default' : 'destructive'}>
                  {bill.status}
                </Badge>
              </div>
            }
            subtitle={`Due: ${bill.date}`}
            variant="interactive"
          >
            {bill.month}
          </ListItem>
        ))}
        
        <ListItem variant="interactive" className="justify-center text-[#0D62FF] font-medium">
          <Icon name="download" size={16} color="#0D62FF" className="mr-2" />
          Download All Statements
        </ListItem>
      </List>
    </div>
  ),
};

export const NavigationMenu: Story = {
  render: () => (
    <div className="w-[300px]">
      <List variant="card">
        <ListHeader title="Business Portal" />
        
        <NavigationListItem
          leading={<Icon name="analytics" size={20} color="#0D62FF" />}
          subtitle="Overview and metrics"
        >
          Dashboard
        </NavigationListItem>
        
        <NavigationListItem
          leading={<Icon name="wifi" size={20} color="#0D62FF" />}
          subtitle="Internet and connectivity"
        >
          Network Services
        </NavigationListItem>
        
        <NavigationListItem
          leading={<Icon name="conference" size={20} color="#0D62FF" />}
          subtitle="Voice and communication"
        >
          Voice Services
        </NavigationListItem>
        
        <NavigationListItem
          leading={<Icon name="document" size={20} color="#0D62FF" />}
          subtitle="Invoices and payments"
        >
          Billing & Payments
        </NavigationListItem>
        
        <NavigationListItem
          leading={<Icon name="gethelp" size={20} color="#0D62FF" />}
          subtitle="Help and documentation"
        >
          Support Center
        </NavigationListItem>
        
        <NavigationListItem
          leading={<Icon name="configure" size={20} color="#0D62FF" />}
          subtitle="Account preferences"
        >
          Settings
        </NavigationListItem>
      </List>
    </div>
  ),
};

export const PlainVariant: Story = {
  render: () => (
    <List variant="plain" className="w-[350px]">
      <ListItem>
        Plain list without borders
      </ListItem>
      <ListItem subtitle="Minimal styling">
        Subtitle example
      </ListItem>
      <ListItem
        leading={<Icon name="check" size={16} color="#16a34a" />}
        trailing={<Icon name="externallink" size={16} color="#70717D" />}
      >
        With icons
      </ListItem>
    </List>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <div>
        <h3 className="text-sm font-medium text-[#15172B] mb-2">Small Size</h3>
        <List>
          <ListItem size="sm">Small list item</ListItem>
          <ListItem size="sm" subtitle="With subtitle">Small with subtitle</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-[#15172B] mb-2">Default Size</h3>
        <List>
          <ListItem>Default list item</ListItem>
          <ListItem subtitle="With subtitle">Default with subtitle</ListItem>
        </List>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-[#15172B] mb-2">Large Size</h3>
        <List>
          <ListItem size="lg">Large list item</ListItem>
          <ListItem size="lg" subtitle="With subtitle">Large with subtitle</ListItem>
        </List>
      </div>
    </div>
  ),
};