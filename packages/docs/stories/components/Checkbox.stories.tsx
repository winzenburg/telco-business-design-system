import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../../components/ui/checkbox';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A control that allows the user to toggle between checked and not checked.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Subscribe to newsletter',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'This option is disabled',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'I agree to the terms',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required field',
    error: true,
    required: true,
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox
        label="24/7 Priority Support"
        rightIcon="gethelp"
        checked={true}
      />
      <Checkbox
        label="Enhanced Security Suite"
        rightIcon="blockers"
        checked={false}
      />
      <Checkbox
        label="Business WiFi Pro"
        rightIcon="wifi"
        checked={true}
      />
      <Checkbox
        label="Static IP Addresses"
        rightIcon="internet"
        checked={false}
      />
    </div>
  ),
};

export const ServiceOptions: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-md">
      <div className="space-y-3">
        <h3 className="font-medium text-gray-900">Business Internet</h3>
        <div className="space-y-3 pl-4 border-l-2 border-blue-100">
          <Checkbox
            label="Internet Pro (Up to 100 Mbps)"
            rightIcon="wifi"
            checked={true}
          />
          <Checkbox
            label="Internet Enterprise (Up to 1 Gbps)"
            rightIcon="wifi"
            checked={false}
          />
          <Checkbox
            label="Dedicated Internet Access"
            rightIcon="wifi"
            checked={false}
          />
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="font-medium text-gray-900">Communication Services</h3>
        <div className="space-y-3 pl-4 border-l-2 border-green-100">
          <Checkbox
            label="Business Voice (VoIP)"
            rightIcon="conference"
            checked={true}
          />
          <Checkbox
            label="PRI (Primary Rate Interface)"
            rightIcon="conference"
            checked={false}
          />
          <Checkbox
            label="SIP Trunking"
            rightIcon="conference"
            checked={false}
          />
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="font-medium text-gray-900">Additional Features</h3>
        <div className="space-y-3 pl-4 border-l-2 border-purple-100">
          <Checkbox
            label="Static IP Addresses"
            rightIcon="internet"
            checked={false}
          />
          <Checkbox
            label="Enhanced Security Suite"
            rightIcon="blockers"
            checked={true}
          />
          <Checkbox
            label="Business WiFi Pro"
            rightIcon="wifi"
            checked={true}
          />
        </div>
      </div>
    </div>
  ),
};

export const FormValidation: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div className="p-4 border border-gray-200 rounded-lg">
        <h3 className="font-medium mb-4">Service Agreement</h3>
        <div className="space-y-4">
          <Checkbox
            label="I agree to the Terms and Conditions"
            required={true}
            checked={false}
            error={true}
          />
          <Checkbox
            label="I agree to the Service Level Agreement"
            required={true}
            checked={true}
          />
          <Checkbox
            label="Subscribe to service updates (optional)"
            checked={false}
          />
        </div>
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50" disabled>
              Continue Setup
            </button>
          </div>
          <p className="text-sm text-red-600 mt-2">Please accept all required terms to continue.</p>
        </div>
      </div>
    </div>
  ),
};