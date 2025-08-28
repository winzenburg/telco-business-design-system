import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Switch } from '../../../components/ui/switch';
import { Label } from '../../../components/ui/label';
import { Icon } from '../../../icons/src/Icon';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
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
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="flex items-center space-x-2">
        <Switch
          id="example-switch"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="example-switch">Enable notifications</Label>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled-off" disabled={true} />
        <Label htmlFor="disabled-off">Disabled (off)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-on" disabled={true} defaultChecked={true} />
        <Label htmlFor="disabled-on">Disabled (on)</Label>
      </div>
    </div>
  ),
};

export const BusinessSettings: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      autoPayment: true,
      emailNotifications: false,
      smsAlerts: true,
      maintenanceUpdates: false,
      usageAlerts: true,
      securityMonitoring: true,
    });

    const updateSetting = (key: keyof typeof settings) => {
      setSettings(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };

    return (
      <div className="space-y-6 w-80">
        <div>
          <h3 className="font-medium text-[var(--ds-color-text-primary)] font-primary mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="wallet" size={16} color="currentColor" />
                <Label htmlFor="auto-payment" className="font-secondary">Auto Payment</Label>
              </div>
              <Switch
                id="auto-payment"
                checked={settings.autoPayment}
                onCheckedChange={() => updateSetting('autoPayment')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="analytics" size={16} color="currentColor" />
                <Label htmlFor="usage-alerts" className="font-secondary">Usage Alerts</Label>
              </div>
              <Switch
                id="usage-alerts"
                checked={settings.usageAlerts}
                onCheckedChange={() => updateSetting('usageAlerts')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="blockers" size={16} color="currentColor" />
                <Label htmlFor="security" className="font-secondary">Security Monitoring</Label>
              </div>
              <Switch
                id="security"
                checked={settings.securityMonitoring}
                onCheckedChange={() => updateSetting('securityMonitoring')}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-[var(--ds-color-text-primary)] font-primary mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="message" size={16} color="currentColor" />
                <Label htmlFor="email-notifications" className="font-secondary">Email Notifications</Label>
              </div>
              <Switch
                id="email-notifications"
                checked={settings.emailNotifications}
                onCheckedChange={() => updateSetting('emailNotifications')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="numbers" size={16} color="currentColor" />
                <Label htmlFor="sms-alerts" className="font-secondary">SMS Alerts</Label>
              </div>
              <Switch
                id="sms-alerts"
                checked={settings.smsAlerts}
                onCheckedChange={() => updateSetting('smsAlerts')}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="configure" size={16} color="currentColor" />
                <Label htmlFor="maintenance" className="font-secondary">Maintenance Updates</Label>
              </div>
              <Switch
                id="maintenance"
                checked={settings.maintenanceUpdates}
                onCheckedChange={() => updateSetting('maintenanceUpdates')}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const ThemeTesting: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    
    return (
      <div className="space-y-8">
        <div>
          <h3 className="font-medium text-[var(--ds-color-text-primary)] font-primary mb-4">Switch Visibility Test</h3>
          <p className="text-sm text-[var(--ds-color-text-secondary)] mb-4">
            Test switch visibility in both light and dark themes. Switch should be clearly visible in all states.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-medium text-[var(--ds-color-text-primary)] font-primary">Switch States</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-[var(--ds-color-border-default)] rounded">
                <Label>Checked</Label>
                <Switch checked={true} onChange={() => {}} />
              </div>
              <div className="flex items-center justify-between p-3 border border-[var(--ds-color-border-default)] rounded">
                <Label>Unchecked</Label>
                <Switch checked={false} onChange={() => {}} />
              </div>
              <div className="flex items-center justify-between p-3 border border-[var(--ds-color-border-default)] rounded">
                <Label>Disabled (On)</Label>
                <Switch checked={true} disabled onChange={() => {}} />
              </div>
              <div className="flex items-center justify-between p-3 border border-[var(--ds-color-border-default)] rounded">
                <Label>Disabled (Off)</Label>
                <Switch checked={false} disabled onChange={() => {}} />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-[var(--ds-color-text-primary)] font-primary">Interactive</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-[var(--ds-color-border-default)] rounded">
                <Label htmlFor="theme-test">Toggle me</Label>
                <Switch
                  id="theme-test"
                  checked={checked}
                  onCheckedChange={setChecked}
                />
              </div>
              <div className="text-sm text-[var(--ds-color-text-muted)]">
                Current state: {checked ? 'ON' : 'OFF'}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-[var(--ds-color-bg-muted)] border border-[var(--ds-color-border-default)] rounded">
          <p className="text-sm text-[var(--ds-color-text-secondary)]">
            <strong>Accessibility Note:</strong> Switch uses semantic design tokens that automatically adapt to light/dark themes. 
            The background uses <code>--ds-color-intent-primary</code> when checked and <code>--ds-color-neutral-300</code> when unchecked. 
            The thumb uses <code>--ds-color-bg-canvas</code> and <code>--ds-color-text-on-primary</code> for optimal contrast.
          </p>
        </div>
      </div>
    );
  },
};

export const ServiceControls: Story = {
  render: () => {
    const [services, setServices] = useState({
      internetPro: true,
      businessVoice: false,
      securitySuite: true,
      staticIP: false,
      prioritySupport: true,
    });

    const updateService = (key: keyof typeof services) => {
      setServices(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    };

    return (
      <div className="space-y-6 w-96">
        <div>
          <h3 className="font-medium text-[var(--ds-color-text-primary)] font-primary mb-4">Service Management</h3>
          <div className="space-y-6">
            <div className="p-4 border border-[var(--ds-color-border-default)] rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-medium text-[var(--ds-color-text-primary)] font-primary">Internet Pro</div>
                  <div className="text-sm text-[var(--ds-color-text-secondary)] font-secondary">100 Mbps - $199/month</div>
                </div>
                <Switch
                  checked={services.internetPro}
                  onCheckedChange={() => updateService('internetPro')}
                />
              </div>
              <div className="text-xs text-[var(--ds-color-text-muted)] font-secondary">
                {services.internetPro ? 'Service active' : 'Service paused'}
              </div>
            </div>

            <div className="p-4 border border-[var(--ds-color-border-default)] rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-medium text-[var(--ds-color-text-primary)] font-primary">Business Voice</div>
                  <div className="text-sm text-[var(--ds-color-text-secondary)] font-secondary">VoIP Pro - $89/month</div>
                </div>
                <Switch
                  checked={services.businessVoice}
                  onCheckedChange={() => updateService('businessVoice')}
                />
              </div>
              <div className="text-xs text-[var(--ds-color-text-muted)] font-secondary">
                {services.businessVoice ? 'Service active' : 'Service paused'}
              </div>
            </div>

            <div className="p-4 border border-[var(--ds-color-border-default)] rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-medium text-[var(--ds-color-text-primary)] font-primary">Security Suite</div>
                  <div className="text-sm text-[var(--ds-color-text-secondary)] font-secondary">24/7 Monitoring - $49/month</div>
                </div>
                <Switch
                  checked={services.securitySuite}
                  onCheckedChange={() => updateService('securitySuite')}
                />
              </div>
              <div className="text-xs text-[var(--ds-color-text-muted)] font-secondary">
                {services.securitySuite ? 'Protection enabled' : 'Protection disabled'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};