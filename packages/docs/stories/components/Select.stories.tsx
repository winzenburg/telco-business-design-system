import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectWrapper,
} from '../../../components/ui/select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays a list of options for the user to pick from—triggered by a button.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a service" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="internet">Internet Pro</SelectItem>
        <SelectItem value="voice">Business Voice</SelectItem>
        <SelectItem value="security">Security Suite</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <SelectWrapper
      label="Business Type"
      placeholder="Select business type"
      hintText="Choose the category that best describes your business"
    >
      <SelectItem value="small">Small Business (1-20 employees)</SelectItem>
      <SelectItem value="medium">Medium Business (21-100 employees)</SelectItem>
      <SelectItem value="enterprise">Enterprise (100+ employees)</SelectItem>
    </SelectWrapper>
  ),
};

export const ServicePlans: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <SelectWrapper
        label="Internet Plan"
        placeholder="Choose internet speed"
        hintText="Select the speed that meets your business needs"
      >
        <SelectItem value="basic">Basic - 25 Mbps ($99/month)</SelectItem>
        <SelectItem value="pro">Pro - 100 Mbps ($199/month)</SelectItem>
        <SelectItem value="enterprise">Enterprise - 1 Gbps ($499/month)</SelectItem>
        <SelectItem value="dedicated">Dedicated Access (Custom pricing)</SelectItem>
      </SelectWrapper>
    </div>
  ),
};

export const MultipleSelects: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
      <SelectWrapper
        label="Service Location"
        placeholder="Select location"
        hintText="Choose the business location for this service"
      >
        <SelectItem value="main">Main Office - 123 Business Ave</SelectItem>
        <SelectItem value="branch1">Branch Office - 456 Commerce St</SelectItem>
        <SelectItem value="branch2">Remote Location - 789 Industrial Blvd</SelectItem>
      </SelectWrapper>
      
      <SelectWrapper
        label="Billing Cycle"
        placeholder="Select billing frequency"
        hintText="How often you'd like to be billed"
      >
        <SelectItem value="monthly">Monthly</SelectItem>
        <SelectItem value="quarterly">Quarterly (5% discount)</SelectItem>
        <SelectItem value="annually">Annually (10% discount)</SelectItem>
      </SelectWrapper>
      
      <SelectWrapper
        label="Contract Length"
        placeholder="Select contract term"
        hintText="Longer contracts may include discounts"
      >
        <SelectItem value="month-to-month">Month-to-Month</SelectItem>
        <SelectItem value="12-month">12 Month Contract</SelectItem>
        <SelectItem value="24-month">24 Month Contract</SelectItem>
        <SelectItem value="36-month">36 Month Contract</SelectItem>
      </SelectWrapper>
      
      <SelectWrapper
        label="Support Level"
        placeholder="Choose support tier"
        hintText="Level of technical support included"
      >
        <SelectItem value="standard">Standard Support</SelectItem>
        <SelectItem value="priority">Priority Support (+$50/month)</SelectItem>
        <SelectItem value="premium">Premium 24/7 Support (+$150/month)</SelectItem>
      </SelectWrapper>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <SelectWrapper
        label="Required Service Type"
        placeholder="Please select a service"
        hintText="This field is required to continue"
        error={true}
        errorMessage="Please select a service type"
      >
        <SelectItem value="internet">Internet Service</SelectItem>
        <SelectItem value="voice">Voice Service</SelectItem>
        <SelectItem value="security">Security Service</SelectItem>
      </SelectWrapper>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-sm">
      <SelectWrapper
        label="Service Upgrade"
        placeholder="Not available"
        hintText="Upgrades are not available for your current plan"
        disabled={true}
      >
        <SelectItem value="upgrade1">Speed Upgrade</SelectItem>
        <SelectItem value="upgrade2">Feature Upgrade</SelectItem>
      </SelectWrapper>
    </div>
  ),
};