import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox, Label } from '../src/components';
import CheckboxDocs from './Checkbox.mdx';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      page: CheckboxDocs,
      description: {
        component: 'Checkbox component for form inputs following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// All variants overview
export const AllVariants: Story = {
  render: () => {
    return (
      <div className="space-y-8 max-w-2xl">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Unchecked (Default)</h3>
          <div className="flex items-center space-x-2">
            <Checkbox id="variant-unchecked" />
            <Label htmlFor="variant-unchecked">Accept terms and conditions</Label>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Checked</h3>
          <div className="flex items-center space-x-2">
            <Checkbox id="variant-checked" defaultChecked />
            <Label htmlFor="variant-checked">I agree to receive marketing emails</Label>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Indeterminate</h3>
          <div className="flex items-center space-x-2">
            <Checkbox id="variant-indeterminate" checked="indeterminate" />
            <Label htmlFor="variant-indeterminate">Some items selected (2 of 5)</Label>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Disabled - Unchecked</h3>
          <div className="flex items-center space-x-2">
            <Checkbox id="variant-disabled-unchecked" disabled />
            <Label htmlFor="variant-disabled-unchecked" className="text-[var(--ds-color-text-disabled)]">
              This option is unavailable
            </Label>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Disabled - Checked</h3>
          <div className="flex items-center space-x-2">
            <Checkbox id="variant-disabled-checked" disabled defaultChecked />
            <Label htmlFor="variant-disabled-checked" className="text-[var(--ds-color-text-disabled)]">
              This option is required (cannot be changed)
            </Label>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Error State - Unchecked</h3>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="variant-error-unchecked"
                className="border-[var(--ds-color-intent-destructive)] data-[state=checked]:bg-[var(--ds-color-intent-destructive)] data-[state=checked]:border-[var(--ds-color-intent-destructive)]"
              />
              <Label htmlFor="variant-error-unchecked">You must accept the terms to continue</Label>
            </div>
            <p className="text-sm text-[var(--ds-color-intent-destructive)] ml-6">This field is required</p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Group of Checkboxes</h3>
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium mb-2">Select your interests:</legend>
            <div className="flex items-center space-x-2">
              <Checkbox id="interest-1" defaultChecked />
              <Label htmlFor="interest-1">Enterprise Solutions</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interest-2" />
              <Label htmlFor="interest-2">Cloud Services</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interest-3" defaultChecked />
              <Label htmlFor="interest-3">Network Security</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="interest-4" />
              <Label htmlFor="interest-4">Voice Solutions</Label>
            </div>
          </fieldset>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Helper Text</h3>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="variant-helper" />
              <Label htmlFor="variant-helper">Enable two-factor authentication</Label>
            </div>
            <p className="text-sm text-[var(--ds-color-text-secondary)] ml-6">
              Recommended for enhanced security
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Description</h3>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="variant-description" />
              <div>
                <Label htmlFor="variant-description">Email notifications</Label>
                <p className="text-sm text-[var(--ds-color-text-secondary)] mt-0.5">
                  Receive email updates about your account activity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">This is checked by default</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled checkbox</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Disabled and checked</Label>
      </div>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="error" className="border-destructive data-[state=checked]:bg-destructive data-[state=checked]:border-destructive" />
      <Label htmlFor="error" className="text-destructive">Checkbox with error state</Label>
    </div>
  ),
};