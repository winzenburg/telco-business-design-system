import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Input } from '../src/components/ui/input';
import { Label } from '../src/components/ui/label';
import { Button } from '../src/components/ui/button';
import { Search, Mail, Phone, Globe, ExternalLink, AlertTriangle, Check } from 'lucide-react';
import { Title, Body } from '../src/components/ui/typography';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Input component following Comcast Business Design System patterns. Features consistent typography, spacing, and interactive states with full accessibility support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      description: 'Input size variant',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error'],
      description: 'Input style variant',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic input
export const Default: Story = {
  args: {
    placeholder: 'Enter your business name',
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <Title level={3} className="mb-6">Input Sizes</Title>
      </div>
      <div className="space-y-4 w-80">
        <div className="space-y-2">
          <Label>Small Input</Label>
          <Input size="sm" placeholder="Small size input" />
        </div>
        <div className="space-y-2">
          <Label>Default Input</Label>
          <Input placeholder="Default size input" />
        </div>
        <div className="space-y-2">
          <Label>Large Input</Label>
          <Input size="lg" placeholder="Large size input" />
        </div>
      </div>
    </div>
  ),
};

// Input types
export const InputTypes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <Title level={3} className="mb-6">Input Types</Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Text Input</Label>
            <Input type="text" placeholder="Enter text" />
          </div>
          <div className="space-y-2">
            <Label>Email Input</Label>
            <Input type="email" placeholder="user@company.com" />
          </div>
          <div className="space-y-2">
            <Label>Password Input</Label>
            <Input type="password" placeholder="Enter password" />
          </div>
          <div className="space-y-2">
            <Label>Number Input</Label>
            <Input type="number" placeholder="0" />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Phone Input</Label>
            <Input type="tel" placeholder="(555) 123-4567" />
          </div>
          <div className="space-y-2">
            <Label>URL Input</Label>
            <Input type="url" placeholder="https://company.com" />
          </div>
          <div className="space-y-2">
            <Label>Date Input</Label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <Label>Search Input</Label>
            <Input type="search" placeholder="Search services..." />
          </div>
        </div>
      </div>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <Title level={3} className="mb-6">Input States</Title>
      </div>
      <div className="space-y-6 max-w-md mx-auto">
        <div className="space-y-2">
          <Label>Default State</Label>
          <Input placeholder="Enter business name" />
          <Body size="s" className="text-[#70717D]">Normal input field</Body>
        </div>
        
        <div className="space-y-2">
          <Label>Focused State</Label>
          <Input placeholder="Click to focus" className="ring-2 ring-[#0D62FF] ring-offset-2" />
          <Body size="s" className="text-[#70717D]">Blue focus ring on interaction</Body>
        </div>
        
        <div className="space-y-2">
          <Label>Filled State</Label>
          <Input defaultValue="Comcast Business Solutions" />
          <Body size="s" className="text-[#70717D]">Input with content</Body>
        </div>
        
        <div className="space-y-2">
          <Label>Error State</Label>
          <Input variant="error" placeholder="Invalid input" />
          <Body size="s" className="text-[#D11314]">This field is required</Body>
        </div>
        
        <div className="space-y-2">
          <Label>Disabled State</Label>
          <Input disabled placeholder="Disabled input" />
          <Body size="s" className="text-[#70717D]">Field is not editable</Body>
        </div>
      </div>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="text-center">
        <Title level={3} className="mb-6">Inputs with Icons</Title>
      </div>
      <div className="space-y-4 max-w-md mx-auto">
        <div className="space-y-2">
          <Label>Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#70717D] h-4 w-4" />
            <Input placeholder="Search services..." className="pl-10" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#70717D] h-4 w-4" />
            <Input type="email" placeholder="your@email.com" className="pl-10" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Phone</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#70717D] h-4 w-4" />
            <Input type="tel" placeholder="(555) 123-4567" className="pl-10" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Website</Label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#70717D] h-4 w-4" />
            <Input type="url" placeholder="https://company.com" className="pl-10" />
            <ExternalLink className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#70717D] h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Form examples
export const FormExamples: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      businessName: '',
      email: '',
      phone: '',
      website: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };

    return (
      <div className="space-y-6">
        <div className="text-center">
          <Title level={3} className="mb-6">Form Integration</Title>
        </div>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="business-name">Business Name *</Label>
              <Input
                id="business-name"
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                placeholder="Enter your business name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="business@company.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="(555) 123-4567"
              />
              <Body size="s" className="text-[#70717D]">
                We'll use this for account verification
              </Body>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
                placeholder="https://your-website.com"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </div>
      </div>
    );
  },
};

// Validation patterns
export const ValidationPatterns: Story = {
  render: () => {
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    
    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        setEmailError('Email is required');
      } else if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    };
    
    const validatePhone = (phone: string) => {
      const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
      if (phone && !phoneRegex.test(phone)) {
        setPhoneError('Please use format: (555) 123-4567');
      } else {
        setPhoneError('');
      }
    };

    return (
      <div className="space-y-6">
        <div className="text-center">
          <Title level={3} className="mb-6">Validation Patterns</Title>
        </div>
        
        <div className="max-w-md mx-auto space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-validation">Email Address *</Label>
            <Input
              id="email-validation"
              type="email"
              variant={emailError ? 'error' : 'default'}
              placeholder="user@company.com"
              onBlur={(e) => validateEmail(e.target.value)}
            />
            {emailError && (
              <Body size="s" className="text-[#D11314] flex items-center gap-1">
<AlertTriangle className="h-3 w-3" />
                {emailError}
              </Body>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone-validation">Phone Number</Label>
            <Input
              id="phone-validation"
              type="tel"
              variant={phoneError ? 'error' : 'default'}
              placeholder="(555) 123-4567"
              onBlur={(e) => validatePhone(e.target.value)}
            />
            {phoneError && (
              <Body size="s" className="text-[#D11314] flex items-center gap-1">
<AlertTriangle className="h-3 w-3" />
                {phoneError}
              </Body>
            )}
            <Body size="s" className="text-[#70717D]">
              Format: (555) 123-4567
            </Body>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="success-input">Validated Input</Label>
            <Input
              id="success-input"
              defaultValue="valid@email.com"
              className="border-[#139C53] focus:ring-[#139C53]"
            />
            <Body size="s" className="text-[#139C53] flex items-center gap-1">
<Check className="h-3 w-3" />
              Email address is valid
            </Body>
          </div>
        </div>
      </div>
    );
  },
};