import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SettingsPanel, useSettingsPanel, type SettingTab, type SettingSection } from '../../src/components/patterns/SettingsPanel';
import { Switch } from '../../src/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../src/components/ui/select';
import { Textarea } from '../../src/components/ui/textarea';

const meta = {
  title: 'Patterns/Settings & Configuration',
  component: SettingsPanel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Form-heavy configuration UI with save/cancel interactions, auto-save, and unsaved changes warnings for enterprise admin portals.',
      },
    },
  },
} satisfies Meta<typeof SettingsPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const profileSections: SettingSection[] = [
  {
    id: 'basic',
    title: 'Basic Information',
    description: 'Update your personal details',
    icon: 'users',
    fields: [
      {
        id: 'firstName',
        label: 'First Name',
        type: 'text',
        value: 'John',
        required: true,
        placeholder: 'Enter first name',
      },
      {
        id: 'lastName',
        label: 'Last Name',
        type: 'text',
        value: 'Doe',
        required: true,
        placeholder: 'Enter last name',
      },
      {
        id: 'email',
        label: 'Email',
        type: 'text',
        value: 'john.doe@example.com',
        required: true,
        placeholder: 'Enter email',
        validation: (value) => {
          if (!value.includes('@')) return 'Invalid email address';
          return null;
        },
      },
      {
        id: 'phone',
        label: 'Phone Number',
        type: 'text',
        value: '+1 (555) 123-4567',
        placeholder: 'Enter phone number',
      },
    ],
  },
  {
    id: 'preferences',
    title: 'Preferences',
    description: 'Customize your experience',
    icon: 'configure',
    fields: [
      {
        id: 'language',
        label: 'Language',
        type: 'custom',
        value: 'en',
        render: (value, onChange) => (
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        ),
      },
      {
        id: 'timezone',
        label: 'Timezone',
        type: 'custom',
        value: 'America/New_York',
        render: (value, onChange) => (
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="America/New_York">Eastern Time</SelectItem>
              <SelectItem value="America/Chicago">Central Time</SelectItem>
              <SelectItem value="America/Denver">Mountain Time</SelectItem>
              <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
            </SelectContent>
          </Select>
        ),
      },
      {
        id: 'notifications',
        label: 'Email Notifications',
        description: 'Receive email updates about your account',
        type: 'custom',
        value: true,
        render: (value, onChange) => (
          <Switch checked={value} onCheckedChange={onChange} />
        ),
      },
      {
        id: 'marketing',
        label: 'Marketing Emails',
        description: 'Receive promotional emails and updates',
        type: 'custom',
        value: false,
        render: (value, onChange) => (
          <Switch checked={value} onCheckedChange={onChange} />
        ),
      },
    ],
  },
];

const accountTabs: SettingTab[] = [
  {
    id: 'profile',
    label: 'Profile',
    icon: 'users',
    sections: profileSections,
  },
  {
    id: 'security',
    label: 'Security',
    icon: 'lock',
    sections: [
      {
        id: 'password',
        title: 'Password',
        description: 'Change your password',
        icon: 'lock',
        fields: [
          {
            id: 'currentPassword',
            label: 'Current Password',
            type: 'text',
            value: '',
            required: true,
            placeholder: 'Enter current password',
          },
          {
            id: 'newPassword',
            label: 'New Password',
            type: 'text',
            value: '',
            required: true,
            placeholder: 'Enter new password',
            validation: (value) => {
              if (value && value.length < 8) return 'Password must be at least 8 characters';
              return null;
            },
          },
          {
            id: 'confirmPassword',
            label: 'Confirm Password',
            type: 'text',
            value: '',
            required: true,
            placeholder: 'Confirm new password',
          },
        ],
      },
      {
        id: 'twoFactor',
        title: 'Two-Factor Authentication',
        description: 'Add an extra layer of security',
        icon: 'shield',
        badge: 'Recommended',
        fields: [
          {
            id: 'twoFactorEnabled',
            label: 'Enable Two-Factor Authentication',
            description: 'Require a code from your phone in addition to your password',
            type: 'custom',
            value: false,
            render: (value, onChange) => (
              <Switch checked={value} onCheckedChange={onChange} />
            ),
          },
        ],
      },
    ],
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: 'bell',
    sections: [
      {
        id: 'channels',
        title: 'Notification Channels',
        description: 'Choose how you want to be notified',
        icon: 'bell',
        fields: [
          {
            id: 'emailNotif',
            label: 'Email Notifications',
            type: 'custom',
            value: true,
            render: (value, onChange) => (
              <Switch checked={value} onCheckedChange={onChange} />
            ),
          },
          {
            id: 'pushNotif',
            label: 'Push Notifications',
            type: 'custom',
            value: true,
            render: (value, onChange) => (
              <Switch checked={value} onCheckedChange={onChange} />
            ),
          },
          {
            id: 'smsNotif',
            label: 'SMS Notifications',
            type: 'custom',
            value: false,
            render: (value, onChange) => (
              <Switch checked={value} onCheckedChange={onChange} />
            ),
          },
        ],
      },
    ],
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: 'paymentcard',
    sections: [
      {
        id: 'payment',
        title: 'Payment Method',
        description: 'Manage your payment information',
        icon: 'paymentcard',
        fields: [
          {
            id: 'cardNumber',
            label: 'Card Number',
            type: 'text',
            value: '•••• •••• •••• 4242',
            disabled: true,
          },
          {
            id: 'billingEmail',
            label: 'Billing Email',
            type: 'text',
            value: 'billing@example.com',
            placeholder: 'Enter billing email',
          },
        ],
      },
    ],
  },
];

export const ManualSaveMode: Story = {
  render: () => {
    const [savedMessage, setSavedMessage] = useState('');

    const handleSave = async (values: Record<string, any>) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSavedMessage('Settings saved successfully!');
      console.log('Saved values:', values);
    };

    return (
      <SettingsPanel
        title="Account Settings"
        description="Manage your account preferences and security settings"
        tabs={accountTabs}
        saveMode="manual"
        onSave={handleSave}
        onCancel={() => console.log('Cancelled')}
        onReset={() => console.log('Reset')}
        warnUnsavedChanges
        successMessage={savedMessage}
        initialValues={{
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          phone: '+1 (555) 123-4567',
          language: 'en',
          timezone: 'America/New_York',
          notifications: true,
          marketing: false,
        }}
      />
    );
  },
};

export const AutoSaveMode: Story = {
  render: () => {
    const [lastSaved, setLastSaved] = useState<Date | null>(null);

    const handleSave = async (values: Record<string, any>) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLastSaved(new Date());
      console.log('Auto-saved values:', values);
    };

    return (
      <div className="space-y-4">
        {lastSaved && (
          <div className="text-sm text-[var(--ds-color-text-secondary)]">
            Last saved: {lastSaved.toLocaleTimeString()}
          </div>
        )}
        <SettingsPanel
          title="User Preferences"
          description="Your changes are automatically saved"
          sections={profileSections}
          saveMode="auto"
          autoSaveDelay={1500}
          onSave={handleSave}
          warnUnsavedChanges={false}
          initialValues={{
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1 (555) 123-4567',
            language: 'en',
            timezone: 'America/New_York',
            notifications: true,
            marketing: false,
          }}
        />
      </div>
    );
  },
};

export const WithValidation: Story = {
  render: () => {
    const sections: SettingSection[] = [
      {
        id: 'account',
        title: 'Account Details',
        description: 'All fields are required',
        icon: 'users',
        fields: [
          {
            id: 'username',
            label: 'Username',
            type: 'text',
            value: '',
            required: true,
            placeholder: 'Enter username',
            validation: (value) => {
              if (!value) return 'Username is required';
              if (value.length < 3) return 'Username must be at least 3 characters';
              if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Username can only contain letters, numbers, and underscores';
              return null;
            },
          },
          {
            id: 'email',
            label: 'Email Address',
            type: 'text',
            value: '',
            required: true,
            placeholder: 'Enter email',
            validation: (value) => {
              if (!value) return 'Email is required';
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
              return null;
            },
          },
          {
            id: 'age',
            label: 'Age',
            type: 'number',
            value: '',
            required: true,
            placeholder: 'Enter age',
            validation: (value) => {
              if (!value) return 'Age is required';
              const age = parseInt(value);
              if (isNaN(age)) return 'Age must be a number';
              if (age < 18) return 'You must be at least 18 years old';
              if (age > 120) return 'Please enter a valid age';
              return null;
            },
          },
          {
            id: 'bio',
            label: 'Bio',
            type: 'custom',
            value: '',
            placeholder: 'Tell us about yourself',
            render: (value, onChange) => (
              <Textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Tell us about yourself"
                rows={4}
              />
            ),
          },
        ],
      },
    ];

    return (
      <SettingsPanel
        title="Create Profile"
        description="Fill out all required fields to continue"
        sections={sections}
        saveMode="manual"
        onSave={async (values) => {
          console.log('Saved:', values);
        }}
        warnUnsavedChanges
      />
    );
  },
};

export const LoadingState: Story = {
  render: () => {
    return (
      <SettingsPanel
        title="System Settings"
        description="Configure system-wide preferences"
        sections={profileSections}
        saveMode="manual"
        loading
        initialValues={{
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
        }}
      />
    );
  },
};

export const WithCustomFooter: Story = {
  render: () => {
    return (
      <SettingsPanel
        title="Advanced Settings"
        description="Configure advanced options"
        sections={profileSections}
        saveMode="manual"
        onSave={async (values) => console.log('Saved:', values)}
        footerActions={
          <>
            <button className="px-4 py-2 text-sm text-[var(--ds-color-text-secondary)] hover:text-[var(--ds-color-text-primary)]">
              Export Settings
            </button>
            <button className="px-4 py-2 text-sm text-[var(--ds-color-text-secondary)] hover:text-[var(--ds-color-text-primary)]">
              Import Settings
            </button>
          </>
        }
        initialValues={{
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
        }}
      />
    );
  },
};

export const EnterpriseAdminPanel: Story = {
  render: () => {
    const enterpriseTabs: SettingTab[] = [
      {
        id: 'general',
        label: 'General',
        icon: 'configure',
        sections: [
          {
            id: 'company',
            title: 'Company Information',
            icon: 'info',
            fields: [
              {
                id: 'companyName',
                label: 'Company Name',
                type: 'text',
                value: 'Acme Corporation',
                required: true,
              },
              {
                id: 'industry',
                label: 'Industry',
                type: 'custom',
                value: 'technology',
                render: (value, onChange) => (
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                ),
              },
              {
                id: 'employees',
                label: 'Number of Employees',
                type: 'custom',
                value: '100-500',
                render: (value, onChange) => (
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10</SelectItem>
                      <SelectItem value="11-50">11-50</SelectItem>
                      <SelectItem value="51-100">51-100</SelectItem>
                      <SelectItem value="100-500">100-500</SelectItem>
                      <SelectItem value="500+">500+</SelectItem>
                    </SelectContent>
                  </Select>
                ),
              },
            ],
          },
        ],
      },
      {
        id: 'security',
        label: 'Security',
        icon: 'shield',
        sections: [
          {
            id: 'policies',
            title: 'Security Policies',
            icon: 'shield',
            badge: 'Critical',
            fields: [
              {
                id: 'enforceSSO',
                label: 'Enforce Single Sign-On',
                description: 'Require all users to authenticate via SSO',
                type: 'custom',
                value: true,
                render: (value, onChange) => (
                  <Switch checked={value} onCheckedChange={onChange} />
                ),
              },
              {
                id: 'requireMFA',
                label: 'Require Multi-Factor Authentication',
                description: 'All users must enable MFA',
                type: 'custom',
                value: true,
                render: (value, onChange) => (
                  <Switch checked={value} onCheckedChange={onChange} />
                ),
              },
              {
                id: 'sessionTimeout',
                label: 'Session Timeout (minutes)',
                type: 'number',
                value: '30',
                placeholder: 'Enter timeout in minutes',
              },
              {
                id: 'ipWhitelist',
                label: 'IP Whitelist',
                description: 'Only allow access from these IP addresses (one per line)',
                type: 'custom',
                value: '192.168.1.1\n10.0.0.0/8',
                render: (value, onChange) => (
                  <Textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    rows={4}
                  />
                ),
              },
            ],
          },
        ],
      },
      {
        id: 'integrations',
        label: 'Integrations',
        icon: 'link',
        sections: [
          {
            id: 'apis',
            title: 'API Integrations',
            icon: 'link',
            fields: [
              {
                id: 'slackWebhook',
                label: 'Slack Webhook URL',
                type: 'text',
                value: '',
                placeholder: 'https://hooks.slack.com/...',
              },
              {
                id: 'salesforceAPI',
                label: 'Salesforce API Key',
                type: 'text',
                value: '',
                placeholder: 'Enter API key',
              },
            ],
          },
        ],
      },
    ];

    return (
      <SettingsPanel
        title="Enterprise Administration"
        description="Manage organization-wide settings and security policies"
        tabs={enterpriseTabs}
        saveMode="manual"
        onSave={async (values) => {
          console.log('Enterprise settings saved:', values);
        }}
        onCancel={() => console.log('Cancelled')}
        onReset={() => console.log('Reset to defaults')}
        warnUnsavedChanges
        initialValues={{
          companyName: 'Acme Corporation',
          industry: 'technology',
          employees: '100-500',
          enforceSSO: true,
          requireMFA: true,
          sessionTimeout: '30',
          ipWhitelist: '192.168.1.1\n10.0.0.0/8',
        }}
      />
    );
  },
};
