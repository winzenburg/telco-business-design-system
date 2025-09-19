import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Switch, Label } from '../src/components';

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Switch component for toggle controls following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" defaultChecked />
      <Label htmlFor="notifications">Push Notifications</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled" disabled />
        <Label htmlFor="disabled">Disabled</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Disabled & Checked</Label>
      </div>
    </div>
  ),
};

export const SettingsPanel: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="auto-renewal">Auto Renewal</Label>
        <Switch id="auto-renewal" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="email-alerts">Email Alerts</Label>
        <Switch id="email-alerts" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="sms-notifications">SMS Notifications</Label>
        <Switch id="sms-notifications" defaultChecked />
      </div>
    </div>
  ),
};