import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../src/components/ui/card';
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { Label } from '../src/components/ui/label';
import { Switch } from '../src/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../src/components/ui/select';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../src/components/ui/tabs';
import { Textarea } from '../src/components/ui/textarea';
import { Badge } from '../src/components/ui/badge';
import { Separator } from '../src/components/ui/separator';
import {
  RadioGroup,
  RadioGroupItem,
} from '../src/components/ui/radio-group';
import { Checkbox } from '../src/components/ui/checkbox';
import {
  Alert,
  AlertDescription,
} from '../src/components/ui/alert';

const meta: Meta = {
  title: 'Enterprise/Settings',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Enterprise settings interface with tabbed navigation and comprehensive configuration options.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EnterpriseSettingsInterface: Story = {
  render: () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [autoBackup, setAutoBackup] = useState(true);

    return (
      <div className="min-h-screen bg-[var(--ds-color-bg-surface)]">
        {/* Header */}
        <header className="bg-[var(--ds-color-bg-canvas)] border-b border-[var(--ds-color-border-default)] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-primary font-semibold text-xl text-[var(--ds-color-text-primary)]">Enterprise Settings</h1>
              <p className="text-sm text-[var(--ds-color-text-muted)]">Manage your organization's configuration and preferences</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">Export Config</Button>
              <Button>Save Changes</Button>
            </div>
          </div>
        </header>

        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="network">Network</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>

              {/* General Settings */}
              <TabsContent value="general" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Organization Information</CardTitle>
                    <CardDescription>
                      Basic information about your enterprise organization
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="org-name">Organization Name</Label>
                        <Input
                          id="org-name"
                          defaultValue="Acme Corporation"
                          placeholder="Enter organization name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="org-id">Organization ID</Label>
                        <Input
                          id="org-id"
                          defaultValue="ORG-12345"
                          disabled
                          className="bg-[var(--ds-color-bg-surface)]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org-description">Description</Label>
                      <Textarea
                        id="org-description"
                        defaultValue="Leading technology solutions provider serving enterprise clients across North America"
                        placeholder="Describe your organization"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="primary-contact">Primary Contact</Label>
                        <Input
                          id="primary-contact"
                          defaultValue="john.doe@acme.com"
                          type="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="est">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pst">PST - Pacific Standard Time</SelectItem>
                            <SelectItem value="mst">MST - Mountain Standard Time</SelectItem>
                            <SelectItem value="cst">CST - Central Standard Time</SelectItem>
                            <SelectItem value="est">EST - Eastern Standard Time</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Regional Preferences</CardTitle>
                    <CardDescription>
                      Configure regional settings and localization
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Language</Label>
                        <Select defaultValue="en-us">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en-us">English (US)</SelectItem>
                            <SelectItem value="en-ca">English (Canada)</SelectItem>
                            <SelectItem value="es-us">Spanish (US)</SelectItem>
                            <SelectItem value="fr-ca">French (Canada)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Date Format</Label>
                        <Select defaultValue="mm-dd-yyyy">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                            <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                            <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Authentication & Access</CardTitle>
                    <CardDescription>
                      Configure security policies and authentication methods
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Two-Factor Authentication</Label>
                        <p className="text-sm text-[var(--ds-color-text-muted)]">
                          Require 2FA for all user accounts
                        </p>
                      </div>
                      <Switch
                        checked={twoFactorEnabled}
                        onCheckedChange={setTwoFactorEnabled}
                      />
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>Password Policy</Label>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="min-length" defaultChecked />
                          <Label htmlFor="min-length" className="text-sm font-normal">
                            Minimum 12 characters
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="special-chars" defaultChecked />
                          <Label htmlFor="special-chars" className="text-sm font-normal">
                            Require special characters
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="numbers" defaultChecked />
                          <Label htmlFor="numbers" className="text-sm font-normal">
                            Require numbers
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="expiry" />
                          <Label htmlFor="expiry" className="text-sm font-normal">
                            Password expires every 90 days
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>Session Management</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="session-timeout" className="text-sm font-normal">Session Timeout (minutes)</Label>
                          <Select defaultValue="30">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="15">15 minutes</SelectItem>
                              <SelectItem value="30">30 minutes</SelectItem>
                              <SelectItem value="60">1 hour</SelectItem>
                              <SelectItem value="120">2 hours</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="max-sessions" className="text-sm font-normal">Max Concurrent Sessions</Label>
                          <Select defaultValue="3">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 session</SelectItem>
                              <SelectItem value="3">3 sessions</SelectItem>
                              <SelectItem value="5">5 sessions</SelectItem>
                              <SelectItem value="unlimited">Unlimited</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>IP Restrictions</CardTitle>
                    <CardDescription>
                      Control access from specific IP addresses or ranges
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Enable IP Restrictions</Label>
                        <Switch />
                      </div>
                      <div className="space-y-2">
                        <Label>Allowed IP Ranges</Label>
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <Input placeholder="192.168.1.0/24" />
                            <Button variant="outline" size="sm">Add</Button>
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-[var(--ds-color-bg-surface)] rounded">
                            <span className="text-sm">192.168.1.0/24</span>
                            <Badge variant="outline">Corporate Network</Badge>
                            <Button variant="ghost" size="sm" className="ml-auto">Remove</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications */}
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Email Notifications</CardTitle>
                    <CardDescription>
                      Configure when and how email notifications are sent
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Enable Email Notifications</Label>
                        <p className="text-sm text-[var(--ds-color-text-muted)]">
                          Send notifications via email
                        </p>
                      </div>
                      <Switch
                        checked={emailNotifications}
                        onCheckedChange={setEmailNotifications}
                      />
                    </div>

                    {emailNotifications && (
                      <div className="space-y-4 pl-4 border-l-2 border-[var(--ds-color-border-default)]">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="service-alerts" defaultChecked />
                            <Label htmlFor="service-alerts" className="text-sm font-normal">
                              Service alerts and outages
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="billing-notices" defaultChecked />
                            <Label htmlFor="billing-notices" className="text-sm font-normal">
                              Billing and payment notices
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="user-activities" />
                            <Label htmlFor="user-activities" className="text-sm font-normal">
                              User account activities
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="maintenance-windows" defaultChecked />
                            <Label htmlFor="maintenance-windows" className="text-sm font-normal">
                              Scheduled maintenance windows
                            </Label>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Email Recipients</Label>
                          <div className="space-y-2">
                            <Input placeholder="admin@company.com" />
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 p-2 bg-[var(--ds-color-bg-surface)] rounded text-sm">
                                <span>admin@acme.com</span>
                                <Badge variant="outline">Primary</Badge>
                                <Button variant="ghost" size="sm" className="ml-auto">Remove</Button>
                              </div>
                              <div className="flex items-center gap-2 p-2 bg-[var(--ds-color-bg-surface)] rounded text-sm">
                                <span>it-alerts@acme.com</span>
                                <Button variant="ghost" size="sm" className="ml-auto">Remove</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>SMS Notifications</CardTitle>
                    <CardDescription>
                      Configure SMS alerts for critical events
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Enable SMS Notifications</Label>
                        <p className="text-sm text-[var(--ds-color-text-muted)]">
                          Send critical alerts via SMS
                        </p>
                      </div>
                      <Switch
                        checked={smsNotifications}
                        onCheckedChange={setSmsNotifications}
                      />
                    </div>

                    {smsNotifications && (
                      <Alert>
                        <AlertDescription>
                          SMS notifications are available for critical service alerts only. Additional charges may apply.
                        </AlertDescription>
                      </Alert>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Network Settings */}
              <TabsContent value="network" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Network Configuration</CardTitle>
                    <CardDescription>
                      Configure network settings and connectivity options
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label>Primary Connection Type</Label>
                      <RadioGroup defaultValue="fiber">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="fiber" id="fiber" />
                          <Label htmlFor="fiber" className="text-sm font-normal">
                            Fiber Optic (Recommended)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="ethernet" id="ethernet" />
                          <Label htmlFor="ethernet" className="text-sm font-normal">
                            Ethernet
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="wireless" id="wireless" />
                          <Label htmlFor="wireless" className="text-sm font-normal">
                            Wireless
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Bandwidth Allocation</Label>
                        <Select defaultValue="1gbps">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="100mbps">100 Mbps</SelectItem>
                            <SelectItem value="500mbps">500 Mbps</SelectItem>
                            <SelectItem value="1gbps">1 Gbps</SelectItem>
                            <SelectItem value="10gbps">10 Gbps</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Quality of Service</Label>
                        <Select defaultValue="business">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard</SelectItem>
                            <SelectItem value="business">Business Priority</SelectItem>
                            <SelectItem value="enterprise">Enterprise Premium</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Network Monitoring</Label>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="uptime-monitoring" defaultChecked />
                          <Label htmlFor="uptime-monitoring" className="text-sm font-normal">
                            24/7 uptime monitoring
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="performance-tracking" defaultChecked />
                          <Label htmlFor="performance-tracking" className="text-sm font-normal">
                            Performance tracking and analytics
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="proactive-maintenance" />
                          <Label htmlFor="proactive-maintenance" className="text-sm font-normal">
                            Proactive maintenance alerts
                          </Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Settings */}
              <TabsContent value="billing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment & Billing</CardTitle>
                    <CardDescription>
                      Manage payment methods and billing preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label>Billing Cycle</Label>
                      <Select defaultValue="monthly">
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                          <SelectItem value="annually">Annually</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>Payment Method</Label>
                      <div className="space-y-3 p-4 border border-[var(--ds-color-border-default)] rounded-lg bg-[var(--ds-color-bg-surface)]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                              VISA
                            </div>
                            <div>
                              <p className="text-sm font-medium">**** **** **** 4532</p>
                              <p className="text-xs text-[var(--ds-color-text-muted)]">Expires 12/26</p>
                            </div>
                          </div>
                          <Badge variant="secondary">Primary</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Add Payment Method
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>Billing Address</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Input placeholder="Company Name" defaultValue="Acme Corporation" />
                        </div>
                        <div className="space-y-2">
                          <Input placeholder="Tax ID" defaultValue="12-3456789" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Input placeholder="Street Address" defaultValue="123 Business Ave" />
                        </div>
                        <div className="space-y-2">
                          <Input placeholder="City" defaultValue="New York" />
                        </div>
                        <div className="space-y-2">
                          <Input placeholder="ZIP Code" defaultValue="10001" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Invoice Preferences</CardTitle>
                    <CardDescription>
                      Configure how invoices are delivered and formatted
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="email-invoice" defaultChecked />
                        <Label htmlFor="email-invoice" className="text-sm font-normal">
                          Email invoices (PDF)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="paper-invoice" />
                        <Label htmlFor="paper-invoice" className="text-sm font-normal">
                          Paper invoices by mail (+$5/month)
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Advanced Settings */}
              <TabsContent value="advanced" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>System Maintenance</CardTitle>
                    <CardDescription>
                      Advanced system configuration and maintenance options
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Maintenance Mode</Label>
                        <p className="text-sm text-[var(--ds-color-text-muted)]">
                          Enable maintenance mode for system updates
                        </p>
                      </div>
                      <Switch
                        checked={maintenanceMode}
                        onCheckedChange={setMaintenanceMode}
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Automatic Backups</Label>
                        <p className="text-sm text-[var(--ds-color-text-muted)]">
                          Automatically backup system data daily
                        </p>
                      </div>
                      <Switch
                        checked={autoBackup}
                        onCheckedChange={setAutoBackup}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Backup Retention Period</Label>
                      <Select defaultValue="30">
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7">7 days</SelectItem>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="365">1 year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Label>API Configuration</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border border-[var(--ds-color-border-default)] rounded-lg">
                          <div>
                            <p className="text-sm font-medium">API Rate Limiting</p>
                            <p className="text-xs text-[var(--ds-color-text-muted)]">1000 requests per hour</p>
                          </div>
                          <Button variant="outline" size="sm">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between p-3 border border-[var(--ds-color-border-default)] rounded-lg">
                          <div>
                            <p className="text-sm font-medium">Webhook Endpoints</p>
                            <p className="text-xs text-[var(--ds-color-text-muted)]">3 endpoints configured</p>
                          </div>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data Management</CardTitle>
                    <CardDescription>
                      Data retention, export, and compliance settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline">Export All Data</Button>
                      <Button variant="outline">Schedule Data Purge</Button>
                    </div>

                    <Alert>
                      <AlertDescription>
                        Data export and purge operations cannot be undone. Please ensure you have proper backups before proceeding.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    );
  },
};