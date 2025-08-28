import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../src/components/ui/button';
import { Input, InputSkeleton } from '../src/components/ui/input';
import { Label } from '../src/components/ui/label';
import { Checkbox, CheckboxSkeleton } from '../src/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../src/components/ui/radio-group';
import { Textarea } from '../src/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/ui/card';
import { formElementSpecs, categorizedForms, formElementUsage } from '../src/tokens/figma-form-specs';

const meta: Meta = {
  title: 'Components/FormElements',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Form components built to Figma specifications from the Comcast Business Design System. Includes inputs, checkboxes, radio buttons, and more.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// All Input States
export const AllInputStates: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">All Input States</h2>
        <p className="text-gray-600 font-secondary">All 9 input states from Figma: Default, Active, Focused, Hover, Disabled, Error, Error Focused, Error Filled, Loading</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Default State */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium font-primary text-gray-900">1. Default</h3>
          <Input
            label="Email Address"
            placeholder="Enter your email"
            leftIcon="analytics"
            hintText="Default state with no interaction"
            inputState="default"
          />
        </div>

        {/* 2. Active State */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium font-primary text-gray-900">2. Active</h3>
          <Input
            label="Email Address"
            placeholder="Enter your email"
            leftIcon="analytics"
            hintText="Active state (clicked/pressed)"
            inputState="active"
          />
        </div>

        {/* 3. Focused State */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium font-primary text-gray-900">3. Focused</h3>
          <Input
            label="Email Address"
            placeholder="Enter your email"
            leftIcon="analytics"
            hintText="Focused state (keyboard focus)"
            inputState="focused"
            autoFocus
          />
        </div>

        {/* 4. Hover State */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium font-primary text-gray-900">4. Hover</h3>
          <Input
            label="Email Address"
            placeholder="Enter your email"
            leftIcon="analytics"
            hintText="Hover state (mouse over)"
            inputState="hover"
          />
        </div>

        {/* 5. Disabled State */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium font-primary text-gray-900">5. Disabled</h3>
          <Input
            label="Email Address"
            placeholder="Enter your email"
            leftIcon="analytics"
            hintText="Disabled state (cannot interact)"
            disabled
          />
        </div>

        {/* 6. Error State */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium font-primary text-gray-900">6. Error</h3>
          <Input
            label="Email Address"
            placeholder="Enter your email"
            leftIcon="analytics"
            error
            errorMessage="Please enter a valid email address"
          />
        </div>

        {/* 7. Error Focused State */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium font-primary text-gray-900">7. Error Focused</h3>
          <Input
            label="Email Address"
            placeholder="Enter your email"
            leftIcon="analytics"
            error
            errorMessage="Please enter a valid email address"
            inputState="errorFocused"
          />
        </div>

        {/* 8. Error Filled State */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium font-primary text-gray-900">8. Error Filled</h3>
          <Input
            label="Email Address"
            placeholder="Enter your email"
            leftIcon="analytics"
            defaultValue="invalid-email"
            error
            errorMessage="Please enter a valid email address"
            inputState="errorFilled"
          />
        </div>

        {/* 9. Loading State */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium font-primary text-gray-900">9. Loading</h3>
          <Input
            label="Email Address"
            placeholder="Validating..."
            leftIcon="analytics"
            hintText="Checking email availability..."
            skeleton
          />
        </div>
      </div>

      {/* State Documentation */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-4 font-primary">State Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium mb-2 font-primary">Default States:</h4>
            <ul className="text-sm text-gray-700 font-secondary space-y-1">
              <li>• <strong>Default:</strong> Neutral gray border (#B4B5BB)</li>
              <li>• <strong>Hover:</strong> Dark gray border (#70717D) + light background</li>
              <li>• <strong>Focused:</strong> Gray border (#B4B5BB) + blue focus ring (#0D62FF)</li>
              <li>• <strong>Active:</strong> Neutral gray border (pressed state)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 font-primary">Error States:</h4>
            <ul className="text-sm text-gray-700 font-secondary space-y-1">
              <li>• <strong>Error:</strong> Red border (#D11314)</li>
              <li>• <strong>Error Focused:</strong> Red border + blue focus ring</li>
              <li>• <strong>Error Filled:</strong> Red border with error content</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 font-primary">Special States:</h4>
            <ul className="text-sm text-gray-700 font-secondary space-y-1">
              <li>• <strong>Disabled:</strong> Light gray border + background (#DDDDE2, #F1F2F6)</li>
              <li>• <strong>Loading:</strong> Skeleton shimmer with label animation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* With Different Sizes */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium font-primary">States Across Sizes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium font-primary">Small</h4>
            <Input
              label="Default Small"
              placeholder="Small default"
              size="sm"
              leftIcon="analytics"
            />
            <Input
              label="Error Small"
              placeholder="Small error"
              size="sm"
              leftIcon="analytics"
              error
              errorMessage="Error in small input"
            />
            <Input
              label="Loading Small"
              placeholder="Loading..."
              size="sm"
              leftIcon="analytics"
              skeleton
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium font-primary">Default</h4>
            <Input
              label="Default Medium"
              placeholder="Medium default"
              leftIcon="analytics"
            />
            <Input
              label="Error Medium"
              placeholder="Medium error"
              leftIcon="analytics"
              error
              errorMessage="Error in medium input"
            />
            <Input
              label="Loading Medium"
              placeholder="Loading..."
              leftIcon="analytics"
              skeleton
            />
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium font-primary">Large</h4>
            <Input
              label="Default Large"
              placeholder="Large default"
              size="lg"
              leftIcon="analytics"
            />
            <Input
              label="Error Large"
              placeholder="Large error"
              size="lg"
              leftIcon="analytics"
              error
              errorMessage="Error in large input"
            />
            <Input
              label="Loading Large"
              placeholder="Loading..."
              size="lg"
              leftIcon="analytics"
              skeleton
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Complete Input Structure
export const CompleteInputStructure: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Complete Input Structure</h2>
        <p className="text-gray-600 font-secondary">Input fields with label, required indicator (*), subcopy, hint text, and error copy based on Figma specifications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Default State */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium font-primary">Default State</h3>
          
          <Input
            label="Email Address"
            required
            subcopy="We'll use this to send you important account updates"
            placeholder="Enter your email address"
            leftIcon="analytics"
            hintText="Use your business email for better security"
          />

          <Input
            label="Password"
            required
            subcopy="Must be at least 8 characters"
            type="password"
            placeholder="Create a secure password"
            leftIcon="configure"
            rightIcon="typeoutlinecoloroff"
            hintText="Include uppercase, lowercase, numbers, and symbols"
          />

          <Input
            label="Company Name"
            subcopy="This will appear on your invoices and contracts"
            placeholder="Enter your company name"
            leftIcon="analytics"
            hintText="Legal business name preferred"
          />

          <Input
            label="Phone Number"
            required
            placeholder="(555) 123-4567"
            leftIcon="conference"
            hintText="We'll only call for urgent account matters"
          />
        </div>

        {/* Error States */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium font-primary">Error States</h3>
          
          <Input
            label="Email Address"
            required
            subcopy="We'll use this to send you important account updates"
            placeholder="Enter your email address"
            leftIcon="analytics"
            defaultValue="invalid-email"
            error
            errorMessage="Please enter a valid email address"
          />

          <Input
            label="Password"
            required
            subcopy="Must be at least 8 characters"
            type="password"
            placeholder="Create a secure password"
            leftIcon="configure"
            rightIcon="typeoutlinecoloroff"
            defaultValue="123"
            error
            errorMessage="Password must be at least 8 characters long"
          />

          <Input
            label="Confirm Password"
            required
            subcopy="Re-enter your password to confirm"
            type="password"
            placeholder="Confirm your password"
            leftIcon="configure"
            defaultValue="different-password"
            error
            errorMessage="Passwords do not match"
          />

          <Input
            label="Phone Number"
            required
            placeholder="(555) 123-4567"
            leftIcon="conference"
            defaultValue="123"
            error
            errorMessage="Please enter a valid phone number"
          />
        </div>

        {/* Filled States */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium font-primary">Filled States</h3>
          
          <Input
            label="Email Address"
            required
            subcopy="We'll use this to send you important account updates"
            placeholder="Enter your email address"
            leftIcon="analytics"
            defaultValue="user@company.com"
            hintText="Enter your business email"
          />

          <Input
            label="Password"
            required
            subcopy="Must be at least 8 characters"
            type="password"
            placeholder="Create a secure password"
            leftIcon="configure"
            defaultValue="SecurePassword123!"
            hintText="Password meets requirements"
          />
        </div>

        {/* Different Sizes */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium font-primary">Different Sizes</h3>
          
          <Input
            label="Small Input"
            required
            subcopy="This is a small input field"
            placeholder="Small size"
            leftIcon="analytics"
            rightIcon="typeoutlinecoloroff"
            size="sm"
            hintText="Compact form input"
          />

          <Input
            label="Default Input"
            required
            subcopy="This is a default input field"
            placeholder="Default size"
            leftIcon="analytics"
            rightIcon="typeoutlinecoloroff"
            hintText="Standard form input"
          />

          <Input
            label="Large Input"
            required
            subcopy="This is a large input field"
            placeholder="Large size"
            leftIcon="analytics"
            rightIcon="typeoutlinecoloroff"
            size="lg"
            hintText="Prominent form input"
          />
        </div>
      </div>

      {/* Structure Breakdown */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-medium mb-4 font-primary">Input Structure Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2 font-primary">Elements & Spacing:</h4>
            <ul className="text-sm text-gray-700 font-secondary space-y-1">
              <li>• <strong>Label</strong> - Field name with required indicator (*)</li>
              <li>• <strong>4px gap</strong> - Between label and subcopy</li>
              <li>• <strong>Subcopy</strong> - Additional context below label</li>
              <li>• <strong>8px gap</strong> - Between label section and input</li>
              <li>• <strong>Input Field</strong> - With optional left icons</li>
              <li>• <strong>4px gap</strong> - Between input and helper text</li>
              <li>• <strong>Helper Text</strong> - Guidance or error messages</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 font-primary">Typography & Colors:</h4>
            <ul className="text-sm text-gray-700 font-secondary space-y-1">
              <li>• Label: <span className="text-[#15172B] font-medium">Neutral black (#15172B), Lato medium</span></li>
              <li>• Required: <span className="text-[#15172B]">Neutral black asterisk (*)</span></li>
              <li>• Subcopy: <span className="text-[#70717D]">Neutral gray (#70717D), 14px</span></li>
              <li>• Input Text: <span className="text-[#15172B]">Neutral black (#15172B), 14px</span></li>
              <li>• Helper Text: <span className="text-[#70717D]">Neutral gray (#70717D), 14px</span></li>
              <li>• Error Text: <span className="text-[#D11314]">Error red (#D11314), 14px</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Input Icon Variations
export const InputIconVariations: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Input Icon Variations</h2>
        <p className="text-gray-600 font-secondary">Input fields with left icons, right icons, and both based on Figma specifications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* No Icons */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">No Icons</h3>
          <div className="space-y-3">
            <Input placeholder="Default input" />
            <Input placeholder="Small input" size="sm" />
            <Input placeholder="Large input" size="lg" />
          </div>
        </div>

        {/* Left Icon Only */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Left Icon</h3>
          <div className="space-y-3">
            <Input 
              placeholder="Search..." 
              leftIcon="analytics" 
            />
            <Input 
              placeholder="Email address" 
              leftIcon="analytics" 
              size="sm" 
            />
            <Input 
              placeholder="Phone number" 
              leftIcon="conference" 
              size="lg" 
            />
          </div>
        </div>

        {/* Right Icon Only */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Right Icon</h3>
          <div className="space-y-3">
            <Input 
              placeholder="Select option" 
              rightIcon="typeoutlinecoloroff" 
            />
            <Input 
              placeholder="Password" 
              type="password"
              rightIcon="typeoutlinecoloroff" 
              size="sm" 
            />
            <Input 
              placeholder="Configuration" 
              rightIcon="typeoutlinecoloroff" 
              size="lg" 
            />
          </div>
        </div>

        {/* Both Icons */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Both Icons</h3>
          <div className="space-y-3">
            <Input 
              placeholder="Search services..." 
              leftIcon="analytics" 
              rightIcon="typeoutlinecoloroff" 
            />
            <Input 
              placeholder="Secure input" 
              leftIcon="configure" 
              rightIcon="typeoutlinecoloroff" 
              size="sm" 
            />
            <Input 
              placeholder="Network settings" 
              leftIcon="internet" 
              rightIcon="typeoutlinecoloroff" 
              size="lg" 
            />
          </div>
        </div>

        {/* Common Patterns */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Common Patterns</h3>
          <div className="space-y-3">
            <Input 
              placeholder="Enter email address" 
              type="email"
              leftIcon="analytics" 
              label="Email"
            />
            <Input 
              placeholder="Enter password" 
              type="password"
              leftIcon="configure" 
              rightIcon="typeoutlinecoloroff"
              label="Password" 
            />
            <Input 
              placeholder="Search documentation" 
              leftIcon="analytics" 
              rightIcon="typeoutlinecoloroff"
              label="Search"
            />
          </div>
        </div>

        {/* Different States with Icons */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">States with Icons</h3>
          <div className="space-y-3">
            <Input 
              placeholder="Valid email" 
              leftIcon="analytics"
              defaultValue="user@example.com"
            />
            <Input 
              placeholder="Invalid input" 
              leftIcon="configure"
              rightIcon="typeoutlinecoloroff"
              error
              defaultValue="invalid"
            />
            <Input 
              placeholder="Disabled input" 
              leftIcon="analytics"
              rightIcon="typeoutlinecoloroff"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Basic Form Elements
export const BasicElements: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Form Elements</h2>
        <p className="text-gray-600 font-secondary">Basic form components built to exact Figma specifications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Input
            label="Email Address"
            required
            subcopy="We'll use this to send you important updates"
            type="email"
            placeholder="Enter your business email"
            leftIcon="analytics"
            hintText="Use your business email for better security"
          />

          <Input
            label="Password"
            required
            subcopy="Must be at least 8 characters with mixed case"
            type="password"
            placeholder="Create a secure password"
            leftIcon="configure"
            rightIcon="typeoutlinecoloroff"
            hintText="Include uppercase, lowercase, numbers, and symbols"
          />

          <Input
            label="Company Name"
            subcopy="Legal business name as it appears on documents"
            placeholder="Enter your company name"
            leftIcon="analytics"
            hintText="This will appear on invoices and contracts"
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="(555) 123-4567"
            leftIcon="conference"
            hintText="Primary business contact number"
          />
        </div>

        <div className="space-y-6">
          <Input
            label="Search Services"
            type="search"
            placeholder="Search our business solutions..."
            leftIcon="analytics"
            rightIcon="typeoutlinecoloroff"
            hintText="Find internet, voice, TV, and security services"
          />

          <Input
            label="Account ID"
            subcopy="Find this on your monthly statement"
            placeholder="Enter 10-digit account number"
            hintText="Located in the top right of your bill"
          />

          <div className="space-y-2">
            <Label className="flex items-center gap-1 text-sm font-medium text-black font-primary">
              Message
              <span className="text-red-500">*</span>
            </Label>
            <Textarea
              placeholder="Tell us about your business needs..."
              rows={4}
              className="font-secondary"
              style={{ fontSize: '14px', lineHeight: '18.2px' }}
            />
            <p className="font-secondary font-normal leading-[130%] tracking-normal text-gray-800" 
               style={{ fontSize: '12px', lineHeight: '15.6px' }}>
              Provide details about your requirements
            </p>
          </div>

          <div className="space-y-4">
            <Label className="flex items-center gap-1 text-sm font-medium text-black font-primary">
              Notification Preferences
            </Label>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="email-notifications" />
                <Label
                  htmlFor="email-notifications"
                  className="text-sm font-normal cursor-pointer font-secondary"
                >
                  Email notifications
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="sms-notifications" />
                <Label
                  htmlFor="sms-notifications"
                  className="text-sm font-normal cursor-pointer font-secondary"
                >
                  SMS notifications
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="push-notifications" defaultChecked />
                <Label
                  htmlFor="push-notifications"
                  className="text-sm font-normal cursor-pointer font-secondary"
                >
                  Push notifications
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="flex items-center gap-1 text-sm font-medium text-black font-primary">
              Account Type
              <span className="text-red-500">*</span>
            </Label>
            <RadioGroup defaultValue="business">
              <div className="space-y-3">
                <RadioGroupItem 
                  value="personal" 
                  label="Personal Account"
                  radioState="default"
                />
                <RadioGroupItem 
                  value="business" 
                  label="Business Account"
                  radioState="hover"
                />
                <RadioGroupItem 
                  value="enterprise" 
                  label="Enterprise Account"
                  radioState="focused"
                />
                <RadioGroupItem 
                  value="disabled" 
                  label="Disabled Account"
                  disabled
                />
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Form States and Validation
export const FormStates: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      username: '',
      email: 'invalid-email',
      confirmEmail: '',
      terms: false
    });

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 font-primary">Form States & Validation</h2>
          <p className="text-gray-600 font-secondary">All form states with Figma-accurate styling and validation feedback</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-lg font-medium font-primary">Default & Interactive States</h3>
            
            <Input
              label="Normal Input"
              placeholder="Default state input"
              leftIcon="analytics"
              hintText="This is a normal input field"
            />

            <Input
              label="Focused Input"
              placeholder="Click to see focus state"
              leftIcon="analytics"
              inputState="focused"
              hintText="Input with focus state applied"
            />

            <Input
              label="Hover State"
              placeholder="Hover state demonstration"
              leftIcon="analytics"
              inputState="hover"
              hintText="Input showing hover interaction"
            />

            <Input
              label="Disabled Input"
              placeholder="This input is disabled"
              leftIcon="analytics"
              disabled
              hintText="Cannot interact with this field"
            />

            <Input
              label="Loading State"
              placeholder="Processing..."
              leftIcon="analytics"
              loading
              hintText="Input in loading state"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-medium font-primary">Error & Success States</h3>
            
            <Input
              label="Email Address"
              required
              subcopy="Please enter a valid business email"
              type="email"
              placeholder="Enter your email"
              leftIcon="analytics"
              defaultValue="invalid-email"
              error
              errorMessage="Please enter a valid email address"
            />

            <Input
              label="Confirm Email"
              required
              subcopy="Must match the email above"
              type="email"
              placeholder="Confirm your email"
              leftIcon="analytics"
              defaultValue="different@email.com"
              error
              errorMessage="Email addresses do not match"
            />

            <Input
              label="Password"
              required
              subcopy="Must be at least 8 characters"
              type="password"
              placeholder="Create password"
              leftIcon="configure"
              defaultValue="123"
              error
              errorMessage="Password must be at least 8 characters long"
            />

            <Input
              label="Email Address"
              subcopy="Enter your business email address"
              type="email"
              placeholder="Enter your email"
              leftIcon="analytics"
              defaultValue="john.doe@company.com"
              hintText="Use your primary business email"
            />

            <Input
              label="Password"
              subcopy="Must be at least 8 characters"
              type="password"
              placeholder="Enter password"
              leftIcon="configure"
              defaultValue="SecurePassword123!"
              hintText="Password meets requirements"
            />
          </div>
        </div>

        {/* Interactive Example */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-4 font-primary">Interactive Validation Example</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Email Address"
              required
              subcopy="Real-time validation example"
              type="email"
              placeholder="Type to see validation"
              leftIcon="analytics"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              error={formData.email ? !formData.email.includes('@') : false}
              errorMessage={formData.email && !formData.email.includes('@') ? "Please enter a valid email address" : undefined}
              hintText={formData.email.includes('@') && formData.email.includes('.') ? "Valid email format" : "Enter a valid email address"}
            />
            
            <div className="space-y-3">
              <p className="text-sm font-medium font-primary">Current State:</p>
              <div className="text-xs space-y-1 font-secondary">
                <p>Value: <code className="bg-white px-1 rounded">{formData.email || 'empty'}</code></p>
                <p>Valid: <span className={formData.email.includes('@') && formData.email.includes('.') ? 'text-green-600' : 'text-red-500'}>
                  {formData.email.includes('@') && formData.email.includes('.') ? 'Yes' : 'No'}
                </span></p>
                <p>State: <span className="font-medium">
                  {formData.email.includes('@') && formData.email.includes('.') ? 'Success' : 
                   formData.email && !formData.email.includes('@') ? 'Error' : 'Default'}
                </span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Complete Form Example
export const CompleteFormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      accountType: 'business',
      services: [] as string[],
      message: '',
      newsletter: true,
      terms: false
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };

    const toggleService = (service: string) => {
      setFormData(prev => ({
        ...prev,
        services: prev.services.includes(service)
          ? prev.services.filter(s => s !== service)
          : [...prev.services, service]
      }));
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 font-primary">Complete Form Example</h2>
          <p className="text-gray-600 font-secondary">Real-world form implementation using all components</p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="font-primary">Contact Information</CardTitle>
            <CardDescription className="font-secondary">
              Please provide your details to get started with Comcast Business services.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  required
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  hintText="Legal first name"
                />
                <Input
                  label="Last Name"
                  required
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  hintText="Legal last name"
                />
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <Input
                  label="Email Address"
                  required
                  subcopy="Primary contact email for your account"
                  type="email"
                  placeholder="Enter your business email"
                  leftIcon="analytics"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  hintText="We'll send important account updates here"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Company Name"
                    subcopy="Legal business name"
                    placeholder="Enter company name"
                    leftIcon="analytics"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    hintText="As it appears on legal documents"
                  />
                  <Input
                    label="Phone Number"
                    subcopy="Primary business contact"
                    type="tel"
                    placeholder="(555) 123-4567"
                    leftIcon="conference"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    hintText="For urgent account matters"
                  />
                </div>
              </div>

              {/* Account Type */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Account Type *</Label>
                <RadioGroup
                  value={formData.accountType}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, accountType: value }))}
                >
                  <div className="space-y-3">
                    <RadioGroupItem 
                      value="personal" 
                      label="Personal Account"
                    />
                    <RadioGroupItem 
                      value="business" 
                      label="Business Account"
                    />
                    <RadioGroupItem 
                      value="enterprise" 
                      label="Enterprise Account"
                    />
                  </div>
                </RadioGroup>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Services of Interest</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Internet', 'Voice', 'TV', 'Mobile', 'Security', 'Analytics'].map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={`service-${service.toLowerCase()}`}
                        checked={formData.services.includes(service)}
                        onCheckedChange={() => toggleService(service)}
                      />
                      <Label
                        htmlFor={`service-${service.toLowerCase()}`}
                        className="cursor-pointer"
                      >
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label className="flex items-center gap-1 text-sm font-medium text-black font-primary">
                  Additional Information
                </Label>
                <Textarea
                  placeholder="Tell us about your specific business needs..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="font-secondary"
                  style={{ fontSize: '14px', lineHeight: '18.2px' }}
                />
                <p className="font-secondary font-normal leading-[130%] tracking-normal text-gray-800" 
                   style={{ fontSize: '12px', lineHeight: '15.6px' }}>
                  Help us understand your requirements better
                </p>
              </div>

              {/* Preferences */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: !!checked }))}
                  />
                  <Label htmlFor="newsletter" className="cursor-pointer">
                    Subscribe to our newsletter for updates and offers
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: !!checked }))}
                    required
                  />
                  <Label htmlFor="terms" className="cursor-pointer">
                    I agree to the Terms of Service and Privacy Policy *
                  </Label>
                </div>
              </div>

              {/* Submit Actions */}
              <div className="flex justify-end gap-3 pt-4">
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
                <Button type="submit">
                  Submit Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Figma Specifications
export const FigmaSpecifications: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Figma Specifications</h2>
        <p className="text-gray-600 font-secondary">Form element components extracted from Figma with specifications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Design System Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50 rounded">
              <p className="text-sm font-medium font-primary">Total Components</p>
              <p className="text-2xl font-bold text-blue-600">{formElementSpecs.length}</p>
            </div>
            <div className="p-3 bg-green-50 rounded">
              <p className="text-sm font-medium font-primary">Input Types</p>
              <p className="text-2xl font-bold text-green-600">{categorizedForms.input?.length || 0}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="text-sm font-medium font-primary">Checkbox Variants</p>
              <p className="text-2xl font-bold text-purple-600">{categorizedForms.checkbox?.length || 0}</p>
            </div>
            <div className="p-3 bg-orange-50 rounded">
              <p className="text-sm font-medium font-primary">Select Components</p>
              <p className="text-2xl font-bold text-orange-600">{categorizedForms.select?.length || 0}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Form Categories</h3>
          <div className="space-y-2">
            {Object.entries(categorizedForms).map(([category, components]) => (
              <div key={category} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium capitalize font-primary">{category}</span>
                <span className="text-sm text-gray-600 font-secondary">{components.length} components</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium font-primary">Usage Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(formElementUsage).filter(([key]) => key !== 'guidelines').map(([type, description]) => (
            <div key={type} className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium capitalize mb-2 font-primary">{type}</h4>
              <p className="text-sm text-gray-600 font-secondary">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-medium mb-2 font-primary">Implementation Guidelines</h4>
        <ul className="text-sm text-blue-800 font-secondary space-y-1">
          {formElementUsage.guidelines.map((guideline, index) => (
            <li key={index}>• {guideline}</li>
          ))}
        </ul>
      </div>
    </div>
  ),
};

// Skeleton Loading States
export const SkeletonLoadingStates: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Skeleton Loading States</h2>
        <p className="text-gray-600 font-secondary">Loading placeholders that match the input field designs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Basic Input Skeleton */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Basic Input</h3>
          <Input
            label="Email Address"
            placeholder="Enter your email"
            skeleton
          />
        </div>

        {/* Input with Subcopy Skeleton */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">With Subcopy</h3>
          <Input
            label="Password"
            subcopy="Must be at least 8 characters"
            placeholder="Enter password"
            skeleton
          />
        </div>

        {/* Input with Icon Skeleton */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">With Icon</h3>
          <Input
            label="Search"
            placeholder="Search..."
            leftIcon="analytics"
            skeleton
          />
        </div>

        {/* Small Size Skeleton */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Small Size</h3>
          <Input
            label="Compact Input"
            placeholder="Small input"
            size="sm"
            leftIcon="analytics"
            skeleton
          />
        </div>

        {/* Large Size Skeleton */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Large Size</h3>
          <Input
            label="Large Input"
            placeholder="Large input"
            size="lg"
            leftIcon="analytics"
            skeleton
          />
        </div>

        {/* Complex Input Skeleton */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Complex Form</h3>
          <Input
            label="Company Email"
            required
            subcopy="We'll use this for important notifications"
            placeholder="Enter business email"
            leftIcon="analytics"
            skeleton
          />
        </div>
      </div>

      {/* Direct Skeleton Usage */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium font-primary">Direct Skeleton Components</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <p className="text-sm font-medium">Small Input</p>
            <InputSkeleton size="sm" hasLabel hasIcon />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium">Default Input</p>
            <InputSkeleton hasLabel hasSubcopy hasIcon />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium">Large Input</p>
            <InputSkeleton size="lg" hasLabel hasIcon />
          </div>
        </div>
      </div>

      <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-medium mb-2 font-primary">Skeleton Usage</h4>
        <ul className="text-sm text-blue-800 font-secondary space-y-1">
          <li>• Use <code>skeleton={'true'}</code> prop on Input component for loading state</li>
          <li>• Or use <code>InputSkeleton</code> directly with size and feature props</li>
          <li>• Skeleton automatically matches input dimensions and layout</li>
          <li>• Includes shimmer animation for visual feedback</li>
        </ul>
      </div>
    </div>
  ),
};

// Checkbox States - All States Demo
export const CheckboxStates: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Checkbox States</h2>
        <p className="text-gray-600 font-secondary">All checkbox states: unchecked/checked × default/hover/pressed/focused/skeleton (no helper text)</p>
      </div>

      {/* Unchecked States */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium font-primary border-b pb-2">Unchecked States</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          {/* Unchecked Default */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Default</h4>
            <Checkbox
              label="Default unchecked"
              checkboxState="default"
            />
          </div>

          {/* Unchecked Hover */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Hover</h4>
            <Checkbox
              label="Hover unchecked"
              checkboxState="hover"
            />
          </div>

          {/* Unchecked Pressed */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Pressed</h4>
            <Checkbox
              label="Pressed unchecked"
              checkboxState="pressed"
            />
          </div>

          {/* Unchecked Focused */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Focused</h4>
            <Checkbox
              label="Focused unchecked"
              checkboxState="focused"
            />
          </div>

          {/* Unchecked Skeleton */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Skeleton</h4>
            <Checkbox
              label="Loading..."
              skeleton
            />
          </div>
        </div>
      </div>

      {/* Checked States */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium font-primary border-b pb-2">Checked States</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          
          {/* Checked Default */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Default</h4>
            <Checkbox
              label="Default checked"
              checkboxState="default"
              defaultChecked
            />
          </div>

          {/* Checked Hover */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Hover</h4>
            <Checkbox
              label="Hover checked"
              checkboxState="hover"
              defaultChecked
            />
          </div>

          {/* Checked Pressed */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Pressed</h4>
            <Checkbox
              label="Pressed checked"
              checkboxState="pressed"
              defaultChecked
            />
          </div>

          {/* Checked Focused */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Focused</h4>
            <Checkbox
              label="Focused checked"
              checkboxState="focused"
              defaultChecked
            />
          </div>

          {/* Checked Skeleton - Same as unchecked since skeleton doesn't show checked state */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Skeleton</h4>
            <Checkbox
              label="Loading..."
              skeleton
            />
          </div>
        </div>
      </div>

      {/* Error States */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium font-primary border-b pb-2">Error States</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Error Unchecked */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Error Unchecked</h4>
            <Checkbox
              label="Required field"
              required
              error
            />
          </div>

          {/* Error Checked */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Error Checked</h4>
            <Checkbox
              label="Required field"
              required
              error
              defaultChecked
            />
          </div>

          {/* Error Focused */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Error Focused</h4>
            <Checkbox
              label="Required field"
              required
              error
              checkboxState="focused"
            />
          </div>

          {/* Disabled */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Disabled</h4>
            <Checkbox
              label="Disabled checkbox"
              disabled
              defaultChecked
            />
          </div>

          {/* Disabled Unchecked */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Disabled Unchecked</h4>
            <Checkbox
              label="Disabled unchecked"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Checkboxes with Icons */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium font-primary border-b pb-2">With Icons (16x16)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Analytics</h4>
            <Checkbox
              label="Enable analytics"
              rightIcon="typeoutlinecoloroff"
            />
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Configure</h4>
            <Checkbox
              label="Configuration access"
              rightIcon="typeoutlinecoloroff"
              defaultChecked
            />
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Internet</h4>
            <Checkbox
              label="Internet connectivity"
              rightIcon="typeoutlinecoloroff"
              required
            />
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700 font-primary">Conference</h4>
            <Checkbox
              label="Meeting notifications"
              rightIcon="typeoutlinecoloroff"
              checkboxState="focused"
            />
          </div>
        </div>
      </div>

      {/* Real-world Examples */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium font-primary border-b pb-2">Real-world Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="space-y-4">
            <h4 className="font-medium font-primary">Terms and Conditions</h4>
            <Checkbox
              label="I agree to the Terms and Conditions"
              required
              error
            />
          </div>

          <div className="space-y-4">
            <h4 className="font-medium font-primary">Newsletter Subscription</h4>
            <Checkbox
              label="Subscribe to our newsletter"
              rightIcon="typeoutlinecoloroff"
              defaultChecked
            />
          </div>
        </div>
      </div>

      {/* Implementation Note */}
      <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-medium mb-2 font-primary">Checkbox State Implementation</h4>
        <ul className="text-sm text-blue-800 font-secondary space-y-1">
          <li>• Use <code>checkboxState</code> prop to override visual states for demos</li>
          <li>• <code>error</code> prop applies error styling and red color scheme</li>
          <li>• <code>skeleton</code> prop shows loading placeholder</li>
          <li>• <code>required</code> prop adds neutral black asterisk (*)</li>
          <li>• <code>rightIcon</code> prop adds a 16x16 icon to the right of the label text</li>
          <li>• <code>disabled</code> prop changes font color to neutral grey-600 (#70717D)</li>
          <li>• <strong>Label text is clickable</strong> - clicking the label toggles the checkbox</li>
          <li>• <strong>No helper text support</strong> - checkboxes only have labels and error states</li>
          <li>• Focus ring is always blue (#0D62FF) regardless of error state</li>
          <li>• All states follow the established Input component patterns</li>
        </ul>
      </div>
    </div>
  ),
};