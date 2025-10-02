import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioGroup, RadioGroupItem, Label } from '../src/components';
import RadioGroupDocs from './docs/RadioGroup.mdx';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
    docs: {
      page: RadioGroupDocs,
      description: {
        component: 'Radio Group component for single-choice selections following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// All variants overview
export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },  render: () => {
    return (
      <div className="space-y-8 max-w-2xl">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Default (Unselected)</h3>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1" id="variant-unselected-1" />
              <Label htmlFor="variant-unselected-1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2" id="variant-unselected-2" />
              <Label htmlFor="variant-unselected-2">Option 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Selected</h3>
          <RadioGroup defaultValue="selected">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="selected" id="variant-selected" />
              <Label htmlFor="variant-selected">This option is selected</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="variant-other" />
              <Label htmlFor="variant-other">Other option</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Disabled - Unselected</h3>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="disabled1" id="variant-disabled-1" disabled />
              <Label htmlFor="variant-disabled-1" className="text-[var(--ds-color-text-disabled)]">
                Unavailable option
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="available" id="variant-available" />
              <Label htmlFor="variant-available">Available option</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Disabled - Selected</h3>
          <RadioGroup defaultValue="disabled-selected">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="disabled-selected" id="variant-disabled-selected" disabled />
              <Label htmlFor="variant-disabled-selected" className="text-[var(--ds-color-text-disabled)]">
                Required selection (cannot change)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other-disabled" id="variant-other-disabled" disabled />
              <Label htmlFor="variant-other-disabled" className="text-[var(--ds-color-text-disabled)]">
                Also unavailable
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Error State</h3>
          <div className="space-y-3">
            <RadioGroup>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="error1"
                  id="variant-error-1"
                  className="border-[var(--ds-color-intent-destructive)] data-[state=checked]:bg-[var(--ds-color-intent-destructive)] data-[state=checked]:border-[var(--ds-color-intent-destructive)]"
                />
                <Label htmlFor="variant-error-1">Option A</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="error2"
                  id="variant-error-2"
                  className="border-[var(--ds-color-intent-destructive)] data-[state=checked]:bg-[var(--ds-color-intent-destructive)] data-[state=checked]:border-[var(--ds-color-intent-destructive)]"
                />
                <Label htmlFor="variant-error-2">Option B</Label>
              </div>
            </RadioGroup>
            <p className="text-sm text-[var(--ds-color-intent-destructive)]">Please select an option to continue</p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Vertical Layout (Default)</h3>
          <RadioGroup defaultValue="vertical-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="vertical-1" id="vertical-1" />
              <Label htmlFor="vertical-1">Small Business</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="vertical-2" id="vertical-2" />
              <Label htmlFor="vertical-2">Medium Enterprise</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="vertical-3" id="vertical-3" />
              <Label htmlFor="vertical-3">Large Corporation</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Horizontal Layout</h3>
          <RadioGroup defaultValue="horizontal-2" className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="horizontal-1" id="horizontal-1" />
              <Label htmlFor="horizontal-1">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="horizontal-2" id="horizontal-2" />
              <Label htmlFor="horizontal-2">No</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="horizontal-3" id="horizontal-3" />
              <Label htmlFor="horizontal-3">Maybe</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Helper Text</h3>
          <fieldset>
            <legend className="text-sm font-medium mb-2">Select your plan:</legend>
            <RadioGroup defaultValue="plan-business">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="plan-basic" id="plan-basic" />
                <div>
                  <Label htmlFor="plan-basic">Basic Plan</Label>
                  <p className="text-sm text-[var(--ds-color-text-secondary)] ml-6">
                    Up to 10 users, 100GB storage
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="plan-business" id="plan-business" />
                <div>
                  <Label htmlFor="plan-business">Business Plan</Label>
                  <p className="text-sm text-[var(--ds-color-text-secondary)] ml-6">
                    Up to 50 users, 1TB storage, priority support
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="plan-enterprise" id="plan-enterprise" />
                <div>
                  <Label htmlFor="plan-enterprise">Enterprise Plan</Label>
                  <p className="text-sm text-[var(--ds-color-text-secondary)] ml-6">
                    Unlimited users, unlimited storage, 24/7 support
                  </p>
                </div>
              </div>
            </RadioGroup>
          </fieldset>
        </div>
      </div>
    );
  },
};

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};

export const ServicePlans: Story = {
  render: () => (
    <RadioGroup defaultValue="business">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="basic" id="basic" />
        <Label htmlFor="basic">Basic Plan - $29/month</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="business" id="business" />
        <Label htmlFor="business">Business Plan - $59/month</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="enterprise" id="enterprise" />
        <Label htmlFor="enterprise">Enterprise Plan - $99/month</Label>
      </div>
    </RadioGroup>
  ),
};