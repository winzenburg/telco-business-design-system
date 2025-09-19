import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { Checkbox } from '../src/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../src/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardMedia, CardActions, CardDivider, CardFooter } from '../src/components/ui/card';
import { Badge } from '../src/components/ui/badge';
import { Alert, AlertDescription } from '../src/components/ui/alert';
import { ButtonGroup, ButtonGroupItem } from '../src/components/ui/button-group';
import { toast } from '../src/components/ui/toast';
import { Separator } from '../src/components/ui/separator';
import { ChartTooltip } from '../src/components/ui/chart';
import { Icon } from '../src/components/Icon/Icon';
import { GlobalNavigation } from '../src/components/GlobalNavigation';

// Import Recharts components for enhanced visualizations
import {
  LineChart as RechartsLineChart,
  Line,
  AreaChart as RechartsAreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

// Design system colors for workflow charts
const workflowColors = {
  primary: '#0D62FF',    // Primary blue
  success: '#22C55E',    // Green
  warning: '#EAB308',    // Yellow  
  danger: '#EF4444',     // Red
  secondary: '#5235A8',  // Purple
  neutral: '#70717D',    // Gray
};

// Sample data for workflow dashboard
const serviceStatusData = [
  { name: 'Internet', uptime: 99.8, status: 'excellent' },
  { name: 'Voice', uptime: 99.5, status: 'good' },
  { name: 'TV', uptime: 98.2, status: 'fair' },
  { name: 'Security', uptime: 100, status: 'excellent' },
];

const monthlyUsageData = [
  { name: 'Jan', usage: 847, cost: 2400 },
  { name: 'Feb', usage: 923, cost: 2100 },
  { name: 'Mar', usage: 891, cost: 2600 },
  { name: 'Apr', usage: 1045, cost: 2800 },
  { name: 'May', usage: 967, cost: 2500 },
  { name: 'Jun', usage: 1123, cost: 2900 },
];

// Service management analytics data
const servicePerformanceData = [
  { name: 'Internet Pro', uptime: 99.9, issues: 2, satisfaction: 4.8 },
  { name: 'Business Voice', uptime: 99.8, issues: 3, satisfaction: 4.6 },
  { name: 'WiFi Pro', uptime: 98.5, issues: 8, satisfaction: 4.2 },
  { name: 'Security Suite', uptime: 100, issues: 0, satisfaction: 4.9 },
];

const serviceUsageDistribution = [
  { name: 'Internet Pro', value: 45, fill: workflowColors.primary },
  { name: 'Business Voice', value: 25, fill: workflowColors.success },
  { name: 'WiFi Pro', value: 20, fill: workflowColors.secondary },
  { name: 'Security Suite', value: 10, fill: workflowColors.warning },
];

const meta: Meta = {
  title: 'Enterprise/Workflows',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Enterprise workflow patterns demonstrating complex task flows, multi-step processes, and real-world business scenarios using the Comcast Business Design System.',
      },
      page: () => (
        <div>
          <h1>Enterprise Workflows</h1>
          <p>Complex workflow patterns and task flows showcasing the Comcast Business Design System in realistic enterprise scenarios, demonstrating proper component usage, accessibility, and business process patterns.</p>
          
          <h2>Taskflow Patterns Demonstrated</h2>
          <ul>
            <li><strong>Multi-Step Service Provisioning</strong> - Complex configuration pattern with progressive disclosure, stepper navigation, and form validation following interaction patterns guidelines</li>
            <li><strong>Quick Action Taskflows</strong> - Transient pattern for fast feedback on service resets, status monitoring, and bulk operations</li>
            <li><strong>Voice User Management</strong> - Linear task pattern for adding new voice service users with employee setup, phone configuration, permission management, and equipment delivery</li>
            <li><strong>Service Management Dashboard</strong> - Table-based management with batch actions, status indicators, and contextual controls for ongoing service administration</li>
          </ul>
          
          <h2>Comcast Business Design System Tokens Used</h2>
          <table>
            <thead>
              <tr><th>Token</th><th>Value</th><th>Usage</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td>neutral-50</td><td>#FCFCFC</td><td>Page backgrounds</td><td>Lightest neutral surface</td></tr>
              <tr><td>neutral-900</td><td>#2B2D3F</td><td>Primary text, headings</td><td>Default body text color</td></tr>
              <tr><td>neutral-600</td><td>#70717D</td><td>Secondary text</td><td>Lightest ADA compliant gray</td></tr>
              <tr><td>blue-500</td><td>#0D62FF</td><td>Primary actions, links</td><td>Default Blue | Primary Blue</td></tr>
              <tr><td>blue-700</td><td>#083B99</td><td>Hover states</td><td>Interactive on-grey blue</td></tr>
              <tr><td>green-500</td><td>#22C55E</td><td>Success states</td><td>Positive feedback</td></tr>
              <tr><td>yellow-500</td><td>#EAB308</td><td>Warning states</td><td>Caution indicators</td></tr>
              <tr><td>red-500</td><td>#EF4444</td><td>Error states</td><td>Error feedback</td></tr>
              <tr><td>navy-500</td><td>#3E4796</td><td>Professional elements</td><td>Primary navy brand color</td></tr>
              <tr><td>black</td><td>#15172B</td><td>High contrast text</td><td>Default body text and UI elements</td></tr>
            </tbody>
          </table>

          <h2>Data Visualization Colors</h2>
          <table>
            <thead>
              <tr><th>Theme</th><th>Colors</th><th>Usage</th></tr>
            </thead>
            <tbody>
              <tr><td>Categorical</td><td>#0D62FF, #3BB112, #5235A8, #E7343C, #03496B, #DB9200</td><td>Distinct categories in charts</td></tr>
              <tr><td>Sequential</td><td>#013841 → #499F3C (7-step)</td><td>Ordered quantitative data</td></tr>
              <tr><td>Signal</td><td>#771117, #AD1217, #E86711, #CA8700, #4EA725, #949495</td><td>Status and priority levels</td></tr>
            </tbody>
          </table>
        </div>
      ),
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Dashboard Page - Proper Token Usage
export const Dashboard: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      {/* Global Navigation */}
      <GlobalNavigation 
        userName="David" 
        sectionTitle="DASHBOARD" 
        showSearch={true}
        showUserProfile={true}
      />

      {/* Semantic Page Structure */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Primary Content - Sovereign UI Pattern */}
        <main className="flex-1 p-6" role="main" aria-label="Dashboard main content">
          {/* Header with Contextual Orientation */}
          <header className="mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 font-primary mb-2">
                  Service Operations Center
                </h1>
                <p className="text-gray-600 font-secondary">
                  Real-time monitoring and control for all business services
                </p>
              </div>
              {/* Primary Action - NOC Role Pattern */}
              <div className="flex items-center gap-3">
                <Badge chipType="assist" variant="success">Live</Badge>
                <Button variant="primary" onClick={() => console.log('Emergency protocols')}>
                  Emergency Protocols
                </Button>
              </div>
            </div>
          </header>

          {/* Critical System Status - First Priority */}
          <section className="mb-8" aria-label="System status alerts">
            <Alert variant="success" layout="banner">
              <Icon name="check" size={16} />
              <AlertDescription>
                All systems operational • 99.9% uptime • Last incident: 3 days ago
              </AlertDescription>
            </Alert>
          </section>

          {/* Key Metrics - Sovereign UI Pattern */}
          <section className="mb-8" aria-label="Service metrics overview">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Service Health</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[var(--ds-color-text-muted)]">View:</span>
                <Badge chipType="filter" size="sm" selected={true} onSelect={() => console.log('All selected')}>All</Badge>
                <Badge chipType="filter" size="sm" onSelect={() => console.log('Critical selected')}>Critical</Badge>
                <Badge chipType="filter" size="sm" onSelect={() => console.log('Issues selected')}>Issues</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Metric Cards - Simplified for Clarity */}
              <Card className="hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">12</div>
                      <div className="text-sm text-[var(--ds-color-text-muted)]">Active Services</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-green-600 font-medium">Online</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">1.12 TB</div>
                      <div className="text-sm text-[var(--ds-color-text-muted)]">Data Usage</div>
                    </div>
                    <div className="text-sm text-blue-600 font-medium">+15%</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-sm transition-shadow border-l-4 border-l-orange-500">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">3</div>
                      <div className="text-sm text-[var(--ds-color-text-muted)]">Open Tickets</div>
                    </div>
                    <Badge variant="warning" size="sm">2 Critical</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">99.5%</div>
                      <div className="text-sm text-[var(--ds-color-text-muted)]">Uptime</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-green-600 font-medium">Excellent</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Primary Monitoring Interface - Sovereign Pattern */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
            {/* Main Dashboard - 2/3 width */}
            <div className="xl:col-span-2 space-y-6">
              {/* Service Performance - Primary Focus */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Service Performance Monitor</CardTitle>
                      <CardDescription>Real-time uptime tracking across all services</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge chipType="assist" variant="success">Live</Badge>
                      <ButtonGroup value={['7d']} onValueChange={(value) => console.log('Period changed:', value)}>
                        <ButtonGroupItem value="24h" size="sm" variant="ghost">24h</ButtonGroupItem>
                        <ButtonGroupItem value="7d" size="sm" variant="ghost">7d</ButtonGroupItem>
                        <ButtonGroupItem value="30d" size="sm" variant="ghost">30d</ButtonGroupItem>
                      </ButtonGroup>
                    </div>
                  </div>
                </CardHeader>
            <CardContent>
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={serviceStatusData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-border-default)" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-border-default)' }}
                    />
                    <YAxis 
                      domain={[95, 100]}
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-border-default)' }}
                    />
                    <ChartTooltip formatter={(value) => [`${value}%`, 'Uptime']} />
                    <Bar 
                      dataKey="uptime" 
                      fill={workflowColors.primary}
                      radius={[4, 4, 0, 0]}
                    />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
                </CardContent>
              </Card>

              {/* Usage Analytics - Secondary Priority */}
              <Card>
                <CardHeader>
                  <CardTitle>Usage Analytics</CardTitle>
                  <CardDescription>6-month usage and cost trends</CardDescription>
                </CardHeader>
            <CardContent>
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsAreaChart data={monthlyUsageData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-border-default)" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-border-default)' }}
                    />
                    <YAxis 
                      yAxisId="usage"
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-border-default)' }}
                    />
                    <YAxis 
                      yAxisId="cost"
                      orientation="right"
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-border-default)' }}
                    />
                    <ChartTooltip />
                    <Area 
                      yAxisId="usage"
                      type="monotone" 
                      dataKey="usage" 
                      stroke={workflowColors.success}
                      fill={workflowColors.success}
                      fillOpacity={0.3}
                      name="Usage (GB)"
                    />
                    <Line 
                      yAxisId="cost"
                      type="monotone" 
                      dataKey="cost" 
                      stroke={workflowColors.warning}
                      strokeWidth={2}
                      name="Cost ($)"
                    />
                  </RechartsAreaChart>
                </ResponsiveContainer>
              </div>
                </CardContent>
              </Card>
            </div>

            {/* Support Panel - Task-Oriented Actions */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card >
                <CardHeader>
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" onClick={() => console.log('Service reset')}>
                    <Icon name="configure" size={16} className="mr-3" />
                    Service Reset
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => console.log('View tickets')}>
                    <Icon name="alert" size={16} className="mr-3" />
                    View Tickets
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => console.log('Generate report')}>
                    <Icon name="document" size={16} className="mr-3" />
                    Generate Report
                  </Button>
                </CardContent>
              </Card>

              {/* System Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-sm font-medium">Internet Services</span>
                      </div>
                      <span className="text-sm text-gray-600">99.9%</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-sm font-medium">Voice Services</span>
                      </div>
                      <span className="text-sm text-gray-600">99.8%</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <span className="text-sm font-medium">Security Suite</span>
                      </div>
                      <span className="text-sm text-gray-600">98.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card >
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 font-primary">Quick Actions</CardTitle>
              <CardDescription className="text-gray-600 font-secondary">Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardDivider />
            <CardContent className="space-y-3">
              <Button variant="outline" elevation="sm" className="w-full justify-start h-12 hover:shadow-md transition-shadow" onClick={() => console.log('Navigate to services')}>
                <Icon name="configure" size={16} className="mr-3" />
                Manage Services
              </Button>
              <Button variant="outline" elevation="sm" className="w-full justify-start h-12 hover:shadow-md transition-shadow" onClick={() => console.log('View bill')}>
                <Icon name="document" size={16} className="mr-3" />
                View Latest Bill
              </Button>
              <Button variant="outline" elevation="sm" className="w-full justify-start h-12 hover:shadow-md transition-shadow" onClick={() => console.log('Contact support')}>
                <Icon name="gethelp" size={16} className="mr-3" />
                Contact Support
              </Button>
              <Button variant="outline" elevation="sm" className="w-full justify-start h-12 hover:shadow-md transition-shadow" onClick={() => console.log('View reports')}>
                <Icon name="piechart" size={16} className="mr-3" />
                Usage Reports
              </Button>
            </CardContent>
            <CardActions layout="center">
              <Button size="sm" variant="ghost" onClick={() => console.log('Show more actions')}>View All Actions</Button>
            </CardActions>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900 font-primary">Recent Activity</CardTitle>
              <CardDescription className="text-gray-600 font-secondary">Latest updates and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <Icon name="check" size={16} className="text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Service Configuration Updated</p>
                    <p className="text-sm text-gray-600">Internet Pro plan settings modified</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <Icon name="check" size={16} className="text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Payment Processed</p>
                    <p className="text-sm text-gray-600">Monthly bill payment of $2,800</p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <Icon name="alert" size={16} className="text-amber-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Maintenance Scheduled</p>
                    <p className="text-sm text-gray-600">Network maintenance on Sunday 2-4 AM</p>
                    <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardActions layout="between">
              <Button size="sm" variant="ghost" onClick={() => console.log('View all activity')}>View All Activity</Button>
              <Button size="sm" onClick={() => console.log('Activity settings')}>Settings</Button>
            </CardActions>
          </Card>
        </div>
        </main>

        {/* Support Panel - Contextual Information */}
        <aside className="w-80 border-l border-gray-200 bg-white p-6" role="complementary" aria-label="Activity feed and system information">
          {/* Recent Activity Stream */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Activity Feed</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Service Updated</p>
                    <p className="text-xs text-gray-600 truncate">Internet Pro settings modified</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Payment Confirmed</p>
                    <p className="text-xs text-gray-600 truncate">$2,800 monthly bill processed</p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Maintenance Alert</p>
                    <p className="text-xs text-gray-600 truncate">Scheduled for Sunday 2-4 AM</p>
                    <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* System Information */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">System Information</h3>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Account ID:</span>
                  <span>CB-2024-1234</span>
                </div>
                <div className="flex justify-between">
                  <span>Region:</span>
                  <span>East Coast</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Login:</span>
                  <span>Today, 9:15 AM</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  ),
};

// Service Request Form - Accessible & Professional
export const ServiceRequestForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      businessType: '',
      services: [] as string[],
      bandwidth: '',
      contract: '',
      features: [] as string[],
      priority: false,
      terms: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email';
      if (!formData.terms) newErrors.terms = 'You must agree to the terms and conditions';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleServiceChange = (service: string, checked: boolean) => {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, service]
          : prev.services.filter(s => s !== service)
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Service request submitted successfully! A representative will contact you within 24 hours.');
        console.log('Form submitted:', formData);
      }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Global Navigation */}
        <GlobalNavigation 
          userName="David" 
          sectionTitle="NEW SERVICE REQUEST" 
          showSearch={true}
          showUserProfile={true}
        />

        {/* Form Content */}
        <main className="max-w-4xl mx-auto p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Page Header */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-primary mb-2">
                Request New Business Services
              </h1>
              <p className="text-gray-600 font-secondary">
                Complete this form to request new Comcast Business services for your organization
              </p>
            </div>

            {/* Company Information */}
            <Card >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 font-primary">
                  <Icon name="configure" size={20} className="text-primary-600" />
                  Company Information
                  <Badge chipType="badge" size="sm" variant="secondary">Step 1</Badge>
                </CardTitle>
                <CardDescription className="text-gray-600 font-secondary">
                  Basic information about your business
                </CardDescription>
              </CardHeader>
              <CardDivider />
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="companyName">
                      Company Name <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="companyName"
                      placeholder="Enter company name"
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({...prev, companyName: e.target.value}))}
                      className={errors.companyName ? 'border-red-500 focus:border-red-500' : ''}
                    />
                    {errors.companyName && (
                      <p className="text-sm text-red-600 mt-1" role="alert">
                        {errors.companyName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="contactName">
                      Primary Contact
                    </label>
                    <Input
                      id="contactName"
                      placeholder="Contact person name"
                      value={formData.contactName}
                      onChange={(e) => setFormData(prev => ({...prev, contactName: e.target.value}))}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="email">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="business@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Selection */}
            <Card >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 font-primary">
                  <Icon name="videomonitoring" size={20} className="text-primary-600" />
                  Requested Services
                  <Badge chipType="badge" size="sm" variant="secondary">Step 2</Badge>
                </CardTitle>
                <CardDescription className="text-gray-600 font-secondary">
                  Select the services you need for your business
                </CardDescription>
                <div className="flex gap-2 mt-3">
                  <Badge chipType="assist" size="sm">Popular Choices</Badge>
                  <Badge chipType="filter" size="sm" selected={formData.services.includes('internet-pro')} onSelect={() => handleServiceChange('internet-pro', !formData.services.includes('internet-pro'))}>Internet Pro</Badge>
                  <Badge chipType="filter" size="sm" selected={formData.services.includes('business-voice')} onSelect={() => handleServiceChange('business-voice', !formData.services.includes('business-voice'))}>Voice</Badge>
                </div>
              </CardHeader>
              <CardDivider />
              <CardContent className="space-y-6">
                <fieldset>
                  <legend className="font-medium text-gray-900 font-primary mb-4">Business Internet Services</legend>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <Checkbox
                        checked={formData.services.includes('internet-pro')}
                        onCheckedChange={(checked) => handleServiceChange('internet-pro', !!checked)}
                      />
                      <div>
                        <span className="text-sm font-medium text-gray-900 font-secondary">Internet Pro (Up to 100 Mbps)</span>
                        <p className="text-xs text-gray-600">High-speed internet for small to medium businesses</p>
                      </div>
                    </label>
                    <label className="flex items-center space-x-3">
                      <Checkbox
                        checked={formData.services.includes('internet-enterprise')}
                        onCheckedChange={(checked) => handleServiceChange('internet-enterprise', !!checked)}
                      />
                      <div>
                        <span className="text-sm font-medium text-gray-900 font-secondary">Internet Enterprise (Up to 1 Gbps)</span>
                        <p className="text-xs text-gray-600">Ultra-fast speeds for large organizations</p>
                      </div>
                    </label>
                    <label className="flex items-center space-x-3">
                      <Checkbox
                        checked={formData.services.includes('dedicated-internet')}
                        onCheckedChange={(checked) => handleServiceChange('dedicated-internet', !!checked)}
                      />
                      <div>
                        <span className="text-sm font-medium text-gray-900 font-secondary">Dedicated Internet Access</span>
                        <p className="text-xs text-gray-600">Guaranteed bandwidth with SLA protection</p>
                      </div>
                    </label>
                  </div>
                </fieldset>

                <Separator />

                <fieldset>
                  <legend className="font-medium text-gray-900 font-primary mb-4">Business Type</legend>
                  <RadioGroup 
                    value={formData.businessType}
                    onValueChange={(value) => setFormData(prev => ({...prev, businessType: value}))}
                  >
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <RadioGroupItem value="small" />
                        <div>
                          <span className="text-sm font-medium text-gray-900 font-secondary">Small Business (1-20 employees)</span>
                          <p className="text-xs text-gray-600">Perfect for startups and growing companies</p>
                        </div>
                      </label>
                      <label className="flex items-center space-x-3">
                        <RadioGroupItem value="medium" />
                        <div>
                          <span className="text-sm font-medium text-gray-900 font-secondary">Medium Business (21-100 employees)</span>
                          <p className="text-xs text-gray-600">Ideal for established mid-size companies</p>
                        </div>
                      </label>
                      <label className="flex items-center space-x-3">
                        <RadioGroupItem value="enterprise" />
                        <div>
                          <span className="text-sm font-medium text-gray-900 font-secondary">Enterprise (100+ employees)</span>
                          <p className="text-xs text-gray-600">Comprehensive solutions for large organizations</p>
                        </div>
                      </label>
                    </div>
                  </RadioGroup>
                </fieldset>
              </CardContent>
            </Card>

            {/* Terms & Submit */}
            <Card >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 font-primary">
                  <Icon name="document" size={20} className="text-primary-600" />
                  Review & Submit
                  <Badge chipType="badge" size="sm" variant="secondary">Step 3</Badge>
                </CardTitle>
                <CardDescription className="text-gray-600 font-secondary">
                  Please review your information and agree to terms before submitting
                </CardDescription>
              </CardHeader>
              <CardDivider />
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Alert variant="info" layout="compact">
                    <Icon name="check" size={16} />
                    <AlertDescription>
                      Your information has been validated and is ready for submission.
                    </AlertDescription>
                  </Alert>
                  
                  <label className="flex items-start space-x-3">
                    <Checkbox
                      checked={formData.terms}
                      onCheckedChange={(checked) => setFormData(prev => ({...prev, terms: !!checked}))}
                      className={errors.terms ? 'border-red-500' : ''}
                    />
                    <div>
                      <span className="text-sm text-gray-900 font-secondary">
                        I agree to the Terms and Conditions and Service Level Agreement <span className="text-red-600">*</span>
                      </span>
                      <p className="text-xs text-gray-600 mt-1">
                        By checking this box, you agree to our service terms and pricing structure
                      </p>
                    </div>
                  </label>
                  {errors.terms && (
                    <p className="text-sm text-red-600 mt-1 ml-6" role="alert">
                      {errors.terms}
                    </p>
                  )}
                </div>
              </CardContent>
              <CardActions layout="between">
                <Button variant="outline" size="lg" elevation="sm" onClick={() => console.log('Save draft')}>
                  Save Draft
                </Button>
                <ButtonGroup>
                  <Button variant="ghost" size="lg" onClick={() => console.log('Preview')}>
                    Preview
                  </Button>
                  <Button variant="primary" size="lg" elevation="md" onClick={() => {
                    if (validateForm()) {
                      console.log('Form submitted:', formData)
                      // Show success toast
                      setTimeout(() => {
                        console.log('Show success toast: Service request submitted successfully!')
                      }, 100)
                    }
                  }}>
                    Submit Request
                  </Button>
                </ButtonGroup>
              </CardActions>
            </Card>
          </form>
        </main>
      </div>
    );
  },
};

// Multi-Step Service Provisioning Taskflow (Complex Config Pattern)
export const ServiceProvisioningTaskflow: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      location: '',
      serviceType: '',
      bandwidth: '',
      features: [] as string[],
      ipConfig: '',
      contactInfo: {
        name: '',
        email: '',
        phone: ''
      }
    });

    const steps = [
      { id: 1, name: 'Location', description: 'Select service location' },
      { id: 2, name: 'Configuration', description: 'Configure service details' },
      { id: 3, name: 'Network Setup', description: 'Network configuration' },
      { id: 4, name: 'Contact', description: 'Primary contact information' },
      { id: 5, name: 'Review', description: 'Review and confirm' }
    ];

    const handleNext = () => {
      if (currentStep < 5) setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
      if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const renderStepContent = () => {
      switch (currentStep) {
        case 1:
          return (
            <Card >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-primary text-gray-900">
                  <Icon name="videomonitoring" size={20} className="text-primary-600" />
                  Service Location
                  <Badge chipType="badge" size="sm" variant="info">Step 1 of 5</Badge>
                </CardTitle>
                <CardDescription className="font-secondary text-gray-600">
                  Select the business location where the service will be installed
                </CardDescription>
                <div className="flex gap-2 mt-3">
                  <Badge chipType="assist" size="sm">Most Popular</Badge>
                  <Badge chipType="filter" size="sm" selected={formData.location === 'headquarters'} onSelect={() => setFormData(prev => ({...prev, location: 'headquarters'}))}>Headquarters</Badge>
                </div>
              </CardHeader>
              <CardDivider />
              <CardContent className="space-y-4">
                <RadioGroup value={formData.location} onValueChange={(value) => setFormData(prev => ({...prev, location: value}))}>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value="headquarters" />
                      <div>
                        <span className="font-medium text-gray-900">Corporate Headquarters</span>
                        <p className="text-sm text-gray-600">1801 JFK Blvd, Philadelphia, PA 19103</p>
                      </div>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value="branch-nyc" />
                      <div>
                        <span className="font-medium text-gray-900">New York Branch Office</span>
                        <p className="text-sm text-gray-600">200 Park Ave, New York, NY 10166</p>
                      </div>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value="new-location" />
                      <div>
                        <span className="font-medium text-gray-900">New Location</span>
                        <p className="text-sm text-gray-600">Add a new business address</p>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          );
        case 2:
          return (
            <Card >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-primary text-gray-900">
                  <Icon name="configure" size={20} className="text-primary-600" />
                  Service Configuration
                  <Badge chipType="badge" size="sm" variant="info">Step 2 of 5</Badge>
                </CardTitle>
                <CardDescription className="font-secondary text-gray-600">
                  Choose service type and bandwidth requirements
                </CardDescription>
                <div className="flex gap-2 mt-3">
                  <Badge chipType="assist" size="sm">Business Grade</Badge>
                  <Badge chipType="filter" size="sm" selected={formData.serviceType === 'dedicated'} onSelect={() => setFormData(prev => ({...prev, serviceType: 'dedicated'}))}>Dedicated</Badge>
                  <Badge chipType="filter" size="sm" selected={formData.bandwidth === '1gbps'} onSelect={() => setFormData(prev => ({...prev, bandwidth: '1gbps'}))}>1 Gbps</Badge>
                </div>
              </CardHeader>
              <CardDivider />
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 font-primary mb-3">Service Type</label>
                  <RadioGroup value={formData.serviceType} onValueChange={(value) => setFormData(prev => ({...prev, serviceType: value}))}>
                    <div className="grid gap-3">
                      <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="dedicated" />
                        <div className="flex-1">
                          <span className="font-medium text-gray-900">Dedicated Internet Access</span>
                          <p className="text-sm text-gray-600">Guaranteed bandwidth with SLA</p>
                          <Badge variant="secondary" className="mt-1">Recommended</Badge>
                        </div>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="ethernet" />
                        <div className="flex-1">
                          <span className="font-medium text-gray-900">Metro Ethernet</span>
                          <p className="text-sm text-gray-600">High-speed enterprise networking</p>
                        </div>
                      </label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 font-primary mb-3">Bandwidth</label>
                  <RadioGroup value={formData.bandwidth} onValueChange={(value) => setFormData(prev => ({...prev, bandwidth: value}))}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="100mbps" />
                        <span className="font-medium text-gray-900">100 Mbps</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="500mbps" />
                        <span className="font-medium text-gray-900">500 Mbps</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="1gbps" />
                        <span className="font-medium text-gray-900">1 Gbps</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="custom" />
                        <span className="font-medium text-gray-900">Custom</span>
                      </label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          );
        case 3:
          return (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-primary text-gray-900">Network Configuration</CardTitle>
                <CardDescription className="font-secondary text-gray-600">
                  Configure IP addressing and network features
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 font-primary mb-3">IP Configuration</label>
                  <RadioGroup value={formData.ipConfig} onValueChange={(value) => setFormData(prev => ({...prev, ipConfig: value}))}>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="static-single" />
                        <div>
                          <span className="font-medium text-gray-900">Single Static IP</span>
                          <p className="text-sm text-gray-600">One dedicated IP address</p>
                        </div>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="static-block" />
                        <div>
                          <span className="font-medium text-gray-900">Static IP Block</span>
                          <p className="text-sm text-gray-600">Multiple IP addresses (/29 or /28)</p>
                        </div>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="dynamic" />
                        <div>
                          <span className="font-medium text-gray-900">Dynamic IP</span>
                          <p className="text-sm text-gray-600">IP address assigned automatically</p>
                        </div>
                      </label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 font-primary mb-3">Additional Features</label>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <Checkbox />
                      <span className="text-sm font-medium text-gray-900">24/7 Network Monitoring</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <Checkbox />
                      <span className="text-sm font-medium text-gray-900">DDoS Protection</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <Checkbox />
                      <span className="text-sm font-medium text-gray-900">Managed Router Service</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        case 4:
          return (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-primary text-gray-900">Primary Contact</CardTitle>
                <CardDescription className="font-secondary text-gray-600">
                  Who should we contact for service installation and support?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 font-primary mb-2">Full Name</label>
                    <Input
                      placeholder="Enter full name"
                      value={formData.contactInfo.name}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        contactInfo: { ...prev.contactInfo, name: e.target.value }
                      }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 font-primary mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.contactInfo.phone}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        contactInfo: { ...prev.contactInfo, phone: e.target.value }
                      }))}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 font-primary mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="contact@company.com"
                    value={formData.contactInfo.email}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      contactInfo: { ...prev.contactInfo, email: e.target.value }
                    }))}
                  />
                </div>
              </CardContent>
            </Card>
          );
        case 5:
          return (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-primary text-gray-900">Review Configuration</CardTitle>
                <CardDescription className="font-secondary text-gray-600">
                  Please review your service configuration before submitting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 font-primary">Location</h4>
                    <p className="text-sm text-gray-600 font-secondary">{formData.location || 'Not selected'}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 font-primary">Service Configuration</h4>
                    <p className="text-sm text-gray-600 font-secondary">
                      {formData.serviceType || 'Not selected'} - {formData.bandwidth || 'Not selected'}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 font-primary">Network Setup</h4>
                    <p className="text-sm text-gray-600 font-secondary">{formData.ipConfig || 'Not configured'}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 font-primary">Primary Contact</h4>
                    <p className="text-sm text-gray-600 font-secondary">
                      {formData.contactInfo.name || 'No contact specified'}
                      {formData.contactInfo.email && ` (${formData.contactInfo.email})`}
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3">
                      <Icon name="alert" size={20} className="text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900 font-primary">Next Steps</h4>
                        <p className="text-sm text-blue-700 font-secondary mt-1">
                          After submission, a technical specialist will contact you within 2 business days to schedule installation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        default:
          return null;
      }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <GlobalNavigation 
          userName="David" 
          sectionTitle="SERVICE PROVISIONING" 
          showSearch={true}
          showUserProfile={true}
        />

        <main className="max-w-4xl mx-auto p-6">
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-primary mb-2">
                Service Provisioning Wizard
              </h1>
              <p className="text-gray-600 font-secondary">
                Configure and request new business internet services
              </p>
            </div>

            {/* Progress Stepper - Responsive Design */}
            <div className="bg-white p-4 md:p-6 rounded-lg border overflow-hidden">
              {/* Mobile: Vertical Layout */}
              <div className="block md:hidden space-y-4">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-center space-x-3">
                    <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                      currentStep > step.id
                        ? 'bg-green-600 text-white'
                        : currentStep === step.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > step.id ? (
                        <Icon name="check" size={16} />
                      ) : (
                        step.id
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium truncate ${
                        currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.name}
                      </div>
                      <div className="text-xs text-gray-500 truncate">{step.description}</div>
                    </div>
                    {currentStep === step.id && (
                      <div className="text-xs text-primary-600 font-medium flex-shrink-0">
                        Current
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop: Compact Horizontal Layout */}
              <div className="hidden md:block">
                <div className="flex items-center justify-between max-w-full">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center min-w-0 flex-1">
                      <div className="flex items-center min-w-0">
                        <div className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium ${
                          currentStep > step.id
                            ? 'bg-green-600 text-white'
                            : currentStep === step.id
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {currentStep > step.id ? (
                            <Icon name="check" size={12} />
                          ) : (
                            step.id
                          )}
                        </div>
                        <div className="ml-2 min-w-0 flex-1">
                          <div className={`text-xs font-medium truncate ${
                            currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {step.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">{step.description}</div>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`flex-shrink-0 w-6 h-0.5 mx-2 ${
                          currentStep > step.id ? 'bg-green-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Content */}
            {renderStepContent()}

            {/* Enhanced Navigation with Progress */}
            <Card >
              <CardContent className="py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge chipType="badge" variant="secondary" size="sm">
                      Step {currentStep} of {steps.length}
                    </Badge>
                    <div className="flex gap-1">
                      {steps.map((step, index) => (
                        <div
                          key={step.id}
                          className={`h-2 w-8 rounded-full transition-colors ${
                            index + 1 <= currentStep ? 'bg-primary-500' : 'bg-neutral-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="outline" 
                      size="lg"
                      elevation="sm"
                      onClick={handlePrev} 
                      disabled={currentStep === 1}
                      className="hover:shadow-md transition-shadow"
                    >
                      Previous
                    </Button>
                    
                    {currentStep === 5 ? (
                      <ButtonGroup>
                        <Button 
                          variant="ghost"
                          size="lg"
                          onClick={() => console.log('Save draft')}
                        >
                          Save Draft
                        </Button>
                        <Button 
                          variant="primary"
                          size="lg"
                          elevation="md"
                          onClick={() => {
                            console.log('Service request submitted successfully!')
                            // Show success toast notification
                            setTimeout(() => {
                              console.log('Show toast: Service provisioning request submitted!')
                            }, 100)
                          }}
                        >
                          Submit Request
                        </Button>
                      </ButtonGroup>
                    ) : (
                      <Button 
                        variant="primary" 
                        size="lg"
                        elevation="sm"
                        onClick={handleNext}
                        className="hover:shadow-md transition-shadow"
                      >
                        Continue
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  },
};

// Quick Action Taskflow (Transient Pattern)
export const QuickActionTaskflow: Story = {
  render: () => {
    const [isResetting, setIsResetting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const services = [
      { id: 'internet-main', name: 'Internet Pro - Main Office', status: 'online', ip: '192.168.1.1' },
      { id: 'voice-main', name: 'Business Voice - Main Office', status: 'online', lines: '25 active' },
      { id: 'wifi-branch', name: 'WiFi Pro - Branch Office', status: 'offline', issue: 'Connection timeout' }
    ];

    const handleReset = async () => {
      setIsResetting(true);
      // Simulate API call
      setTimeout(() => {
        setIsResetting(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }, 2000);
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <GlobalNavigation 
          userName="David" 
          sectionTitle="SERVICE ACTIONS" 
          showSearch={true}
          showUserProfile={true}
        />

        <main className="max-w-4xl mx-auto p-6">
          <div className="space-y-6">
            {/* Header with Quick Actions */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 font-primary mb-2">
                  Service Quick Actions
                </h1>
                <p className="text-gray-600 font-secondary mb-4">
                  Perform common service management tasks quickly - reset offline services, monitor status, and manage multiple services at once
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <Badge chipType="assist" size="sm">Instant Resets</Badge>
                  <Badge chipType="assist" size="sm">Live Monitoring</Badge>
                  <Badge chipType="assist" size="sm">Bulk Actions</Badge>
                  <Badge chipType="filter" size="sm" selected={true} onSelect={() => console.log('All services selected')}>All Services</Badge>
                  <Badge chipType="filter" size="sm" onSelect={() => console.log('Offline only')}>Offline Only</Badge>
                </div>
              </div>
              
              {showSuccess && (
                <Alert variant="success" dismissible onDismiss={() => setShowSuccess(false)}>
                  <Icon name="check" size={16} />
                  <AlertDescription>
                    Service reset completed successfully! {selectedService} is now back online.
                  </AlertDescription>
                </Alert>
              )}
            </div>

            {/* Service Status Cards with Quick Actions */}
            <div className="grid gap-4">
              {services.map((service) => (
                <Card 
                  key={service.id} 
                  onCardClick={() => console.log('Navigate to service details:', service.name)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${
                          service.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <div>
                          <h3 className="font-semibold text-gray-900 font-primary">{service.name}</h3>
                          <p className="text-sm text-gray-600 font-secondary">
                            {service.status === 'online' 
                              ? (service.ip || service.lines)
                              : service.issue
                            }
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Badge variant={service.status === 'online' ? 'default' : 'destructive'}>
                          {service.status === 'online' ? 'Online' : 'Offline'}
                        </Badge>
                        
                        <div className="flex gap-2">
                          {service.status === 'offline' && (
                            <Button 
                              variant="default" 
                              size="sm"
                              onClick={() => {
                                setSelectedService(service.name);
                                handleReset();
                              }}
                              disabled={isResetting}
                            >
                              {isResetting && selectedService === service.name ? (
                                <>
                                  <Icon name="alert" size={16} className="mr-2 animate-spin" />
                                  Resetting...
                                </>
                              ) : (
                                'Reset Service'
                              )}
                            </Button>
                          )}
                          
                          <Button variant="outline" size="sm">
                            <Icon name="configure" size={16} className="mr-2" />
                            Configure
                          </Button>
                          
                          <Button variant="ghost" size="sm">
                            <Icon name="piechart" size={16} className="mr-2" />
                            Stats
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardActions layout="end">
                    <Button size="sm" variant="ghost" onClick={() => console.log('View details for', service.name)}>Details</Button>
                    <Button size="sm" variant="outline" onClick={() => console.log('Monitor', service.name)}>Monitor</Button>
                  </CardActions>
                </Card>
              ))}
            </div>

            {/* Bulk Actions */}
            <Card >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-primary text-gray-900">
                  <Icon name="configure" size={20} className="text-primary-600" />
                  Bulk Operations
                  <Badge chipType="badge" size="sm" variant="warning">Admin Only</Badge>
                </CardTitle>
                <CardDescription className="font-secondary text-gray-600">
                  One-click actions that affect multiple services - ideal for maintenance windows and troubleshooting
                </CardDescription>
                <div className="flex gap-2 mt-3">
                  <Badge chipType="assist" size="sm">Quick Actions</Badge>
                  <Badge chipType="filter" size="sm" selected={true} onSelect={() => console.log('All services')}>All Services</Badge>
                  <Badge chipType="filter" size="sm" onSelect={() => console.log('Critical only')}>Critical Only</Badge>
                </div>
              </CardHeader>
              <CardDivider />
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="justify-start h-auto p-4 hover:bg-blue-50 hover:border-blue-300">
                    <div className="text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="wifi" size={16} className="text-blue-600" />
                        <span className="font-medium">Reset All Modems</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">Power cycle all internet equipment to resolve connectivity issues</p>
                      <div className="flex items-center gap-1">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">~2 min downtime</span>
                      </div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="justify-start h-auto p-4 hover:bg-green-50 hover:border-green-300">
                    <div className="text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="document" size={16} className="text-green-600" />
                        <span className="font-medium">Generate Report</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">Create comprehensive health report with uptime, performance metrics, and issues</p>
                      <div className="flex items-center gap-1">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">PDF & Excel export</span>
                      </div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="justify-start h-auto p-4 hover:bg-purple-50 hover:border-purple-300">
                    <div className="text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="gethelp" size={16} className="text-purple-600" />
                        <span className="font-medium">Escalate to Support</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">Create priority ticket with current service status and error logs attached</p>
                      <div className="flex items-center gap-1">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">24/7 response</span>
                      </div>
                    </div>
                  </Button>
                </div>
                
                <Alert variant="warning" layout="banner">
                  <Icon name="alert" size={16} />
                  <AlertDescription>
                    <div>
                      <h4 className="font-medium mb-2">Bulk Action Guidelines</h4>
                      <div className="text-sm">
                        • Modem resets affect all locations simultaneously<br/>
                        • Reports include data from last 30 days<br/>
                        • Support escalation auto-includes service diagnostics
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  },
};

// Service Management Dashboard 
export const ServiceManagement: Story = {
  render: () => {
    const services = [
      { 
        id: 1, 
        name: 'Internet Pro', 
        status: 'active', 
        type: 'internet', 
        speed: '100 Mbps', 
        cost: '$149.99',
        uptime: '99.9%',
        location: 'Main Office'
      },
      { 
        id: 2, 
        name: 'Business Voice', 
        status: 'active', 
        type: 'voice', 
        lines: '25 lines', 
        cost: '$89.99',
        uptime: '99.8%',
        location: 'Main Office'
      },
      { 
        id: 3, 
        name: 'WiFi Pro', 
        status: 'pending', 
        type: 'wifi', 
        coverage: 'Full office', 
        cost: '$59.99',
        uptime: '-',
        location: 'Branch Office'
      },
    ];

    const getStatusBadge = (status: string) => {
      switch (status) {
        case 'active':
          return <Badge variant="default" className="bg-green-100 text-green-800 border-green-200" leadingIcon={<Icon name="check" size={12} />}>
            Active
          </Badge>;
        case 'pending':
          return <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200" leadingIcon={<Icon name="alert" size={12} />}>
            Pending
          </Badge>;
        default:
          return <Badge variant="outline">{status}</Badge>;
      }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <GlobalNavigation 
          userName="David" 
          sectionTitle="SERVICE MANAGEMENT" 
          showSearch={true}
          showUserProfile={true}
        />

        <main className="max-w-6xl mx-auto p-6">
          <div className="space-y-8">
            {/* Header with Actions */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 font-primary">
                  Service Management Dashboard
                </h1>
                <p className="text-gray-600 font-secondary mb-4">
                  Configure service settings, monitor performance, manage billing, and control access across all locations
                </p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    <Icon name="configure" size={16} className="inline mr-1" /> Configuration management
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <Icon name="analytics" size={16} className="inline mr-1" /> Performance monitoring
                  </Badge>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    <Icon name="money" size={16} className="inline mr-1" /> Billing optimization
                  </Badge>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    <Icon name="users" size={16} className="inline mr-1" /> Access control
                  </Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Icon name="document" size={16} className="mr-2" />
                  Export Config
                </Button>
                <Button variant="default">
                  <Icon name="videomonitoring" size={16} className="mr-2" />
                  Add Service
                </Button>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid gap-6">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-gray-100">
                          {service.type === 'internet' && <Icon name="wifi" size={20} className="text-blue-600" />}
                          {service.type === 'voice' && <Icon name="configure" size={20} className="text-green-600" />}
                          {service.type === 'wifi' && <Icon name="videomonitoring" size={20} className="text-purple-600" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 font-primary text-lg">{service.name}</h3>
                          <p className="text-sm text-gray-600 font-secondary">
                            {service.speed || service.lines || service.coverage} • {service.location}
                          </p>
                          <p className="text-xs text-gray-500 font-secondary mt-1">
                            Uptime: {service.uptime}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        {getStatusBadge(service.status)}
                        <div className="text-right">
                          <p className="font-semibold text-gray-900 font-primary text-lg">{service.cost}</p>
                          <p className="text-sm text-gray-600 font-secondary">per month</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" title="Configure bandwidth, IP settings, security features">
                            <Icon name="configure" size={16} className="mr-1" />
                            Configure
                          </Button>
                          <Button variant="ghost" size="sm" title="View usage analytics and performance metrics">
                            <Icon name="piechart" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Service Details */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500 font-secondary">Service ID:</span>
                          <span className="ml-2 font-mono text-gray-700">SVC-{service.id.toString().padStart(6, '0')}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 font-secondary">Contract End:</span>
                          <span className="ml-2 text-gray-700">Dec 15, 2024</span>
                        </div>
                        <div>
                          <span className="text-gray-500 font-secondary">Support Level:</span>
                          <span className="ml-2 text-gray-700">24/7 Business</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Summary Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900 font-primary">Account Summary</CardTitle>
                <CardDescription className="text-gray-600 font-secondary">
                  Overview of your business account and services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-700 font-primary">$299.97</div>
                    <div className="text-sm text-green-600 font-secondary">Monthly Total</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-700 font-primary">3</div>
                    <div className="text-sm text-blue-600 font-secondary">Active Services</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="text-2xl font-bold text-amber-700 font-primary">99.9%</div>
                    <div className="text-sm text-amber-600 font-secondary">Avg Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-2xl font-bold text-purple-700 font-primary">24/7</div>
                    <div className="text-sm text-purple-600 font-secondary">Support Access</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900 font-primary">Account Manager</h4>
                      <p className="text-sm text-gray-600 font-secondary">Sarah Johnson</p>
                      <p className="text-sm text-primary-600">sarah.johnson@comcast.com</p>
                    </div>
                    <div className="text-right">
                      <h4 className="font-medium text-gray-900 font-primary">Next Billing Date</h4>
                      <p className="text-sm text-gray-600 font-secondary">January 15, 2025</p>
                    </div>
                    <Button variant="outline">
                      <Icon name="gethelp" size={16} className="mr-2" />
                      Contact Support
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {/* Service Performance Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Performance Analytics</CardTitle>
                  <CardDescription>Uptime and satisfaction metrics by service</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart data={servicePerformanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-border-default)" />
                        <XAxis 
                          dataKey="name" 
                          tick={{ fontSize: 11, fill: 'var(--ds-color-text-muted)' }}
                          angle={-45}
                          textAnchor="end"
                          height={80}
                        />
                        <YAxis 
                          yAxisId="uptime"
                          domain={[95, 100]}
                          tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                          axisLine={{ stroke: 'var(--ds-color-border-default)' }}
                        />
                        <YAxis 
                          yAxisId="satisfaction"
                          orientation="right"
                          domain={[0, 5]}
                          tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                          axisLine={{ stroke: 'var(--ds-color-border-default)' }}
                        />
                        <ChartTooltip />
                        <Bar 
                          yAxisId="uptime"
                          dataKey="uptime" 
                          fill={workflowColors.primary}
                          radius={[4, 4, 0, 0]}
                          name="Uptime (%)"
                        />
                        <Line 
                          yAxisId="satisfaction"
                          type="monotone"
                          dataKey="satisfaction"
                          stroke={workflowColors.success}
                          strokeWidth={3}
                          dot={{ fill: workflowColors.success, r: 4 }}
                          name="Satisfaction (1-5)"
                        />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Service Usage Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Usage Distribution</CardTitle>
                  <CardDescription>Resource allocation across services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={serviceUsageDistribution}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                        >
                          {serviceUsageDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <ChartTooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    {serviceUsageDistribution.map((service, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: service.fill }}
                          />
                          <span className="text-sm font-medium text-[var(--ds-color-text-primary)]">{service.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-[var(--ds-color-text-muted)]">{service.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  },
};
// Voice Services User Management Taskflow (Linear Task Pattern)
export const AddVoiceUserTaskflow: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        jobTitle: '',
        employeeId: ''
      },
      voiceSettings: {
        extension: '',
        directNumber: '',
        voicemailEnabled: true,
        callForwardingEnabled: false,
        callForwardingNumber: '',
        internationalCalling: false
      },
      permissions: {
        canMakeInternational: false,
        canAccessConferencing: true,
        canManageSettings: false,
        adminAccess: false
      },
      equipment: {
        deviceType: 'desk-phone',
        location: '',
        deliveryMethod: 'ship'
      }
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [availableExtensions] = useState(['3001', '3002', '3003', '3004', '3005']);

    const steps = [
      { id: 1, name: 'User Info', description: 'Basic employee information' },
      { id: 2, name: 'Voice Setup', description: 'Phone numbers and voicemail' },
      { id: 3, name: 'Permissions', description: 'Calling and admin permissions' },
      { id: 4, name: 'Equipment', description: 'Device and delivery options' },
      { id: 5, name: 'Review', description: 'Confirm and activate user' }
    ];

    const handleNext = () => {
      if (validateCurrentStep()) {
        if (currentStep < 5) setCurrentStep(currentStep + 1);
      }
    };

    const handlePrev = () => {
      if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const validateCurrentStep = () => {
      const newErrors: Record<string, string> = {};
      
      if (currentStep === 1) {
        if (!formData.userInfo.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.userInfo.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.userInfo.email.trim()) newErrors.email = 'Email is required';
        else if (!formData.userInfo.email.includes('@')) newErrors.email = 'Valid email is required';
        if (!formData.userInfo.department.trim()) newErrors.department = 'Department is required';
      }
      
      if (currentStep === 2) {
        if (!formData.voiceSettings.extension) newErrors.extension = 'Extension is required';
        if (formData.voiceSettings.callForwardingEnabled && !formData.voiceSettings.callForwardingNumber) {
          newErrors.callForwardingNumber = 'Forwarding number is required when call forwarding is enabled';
        }
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const renderStepContent = () => {
      switch (currentStep) {
        case 1:
          return (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-primary text-gray-900">Employee Information</CardTitle>
                <CardDescription className="font-secondary text-gray-600">
                  Basic details for the new voice service user
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="firstName">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter first name"
                      value={formData.userInfo.firstName}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        userInfo: { ...prev.userInfo, firstName: e.target.value }
                      }))}
                      className={errors.firstName ? 'border-red-500' : ''}
                    />
                    {errors.firstName && <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="lastName">
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      value={formData.userInfo.lastName}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        userInfo: { ...prev.userInfo, lastName: e.target.value }
                      }))}
                      className={errors.lastName ? 'border-red-500' : ''}
                    />
                    {errors.lastName && <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="email">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="employee@company.com"
                    value={formData.userInfo.email}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      userInfo: { ...prev.userInfo, email: e.target.value }
                    }))}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="department">
                      Department <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="department"
                      placeholder="e.g., Sales, Marketing, IT"
                      value={formData.userInfo.department}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        userInfo: { ...prev.userInfo, department: e.target.value }
                      }))}
                      className={errors.department ? 'border-red-500' : ''}
                    />
                    {errors.department && <p className="text-sm text-red-600 mt-1">{errors.department}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="jobTitle">
                      Job Title
                    </label>
                    <Input
                      id="jobTitle"
                      placeholder="e.g., Account Manager"
                      value={formData.userInfo.jobTitle}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        userInfo: { ...prev.userInfo, jobTitle: e.target.value }
                      }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        case 2:
          return (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-primary text-gray-900">Voice Service Configuration</CardTitle>
                <CardDescription className="font-secondary text-gray-600">
                  Set up phone numbers, extension, and voicemail settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="extension">
                      Extension <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="extension"
                      value={formData.voiceSettings.extension}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        voiceSettings: { ...prev.voiceSettings, extension: e.target.value }
                      }))}
                      className={`w-full border border-gray-300 rounded-md px-3 py-2 text-sm ${errors.extension ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select available extension</option>
                      {availableExtensions.map(ext => (
                        <option key={ext} value={ext}>Extension {ext}</option>
                      ))}
                    </select>
                    {errors.extension && <p className="text-sm text-red-600 mt-1">{errors.extension}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="directNumber">
                      Direct Number (Optional)
                    </label>
                    <Input
                      id="directNumber"
                      placeholder="(555) 123-4567"
                      value={formData.voiceSettings.directNumber}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        voiceSettings: { ...prev.voiceSettings, directNumber: e.target.value }
                      }))}
                    />
                    <p className="text-xs text-gray-500 mt-1">Additional $15/month per direct number</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900 font-primary">Voicemail & Call Features</h4>
                  
                  <label className="flex items-center space-x-3">
                    <Checkbox
                      checked={formData.voiceSettings.voicemailEnabled}
                      onCheckedChange={(checked) => setFormData(prev => ({
                        ...prev,
                        voiceSettings: { ...prev.voiceSettings, voicemailEnabled: !!checked }
                      }))}
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900 font-secondary">Enable Voicemail</span>
                      <p className="text-xs text-gray-600">Voicemail messages sent to email</p>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3">
                    <Checkbox
                      checked={formData.voiceSettings.callForwardingEnabled}
                      onCheckedChange={(checked) => setFormData(prev => ({
                        ...prev,
                        voiceSettings: { ...prev.voiceSettings, callForwardingEnabled: !!checked }
                      }))}
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900 font-secondary">Enable Call Forwarding</span>
                      <p className="text-xs text-gray-600">Forward calls to another number</p>
                    </div>
                  </label>

                  {formData.voiceSettings.callForwardingEnabled && (
                    <div className="ml-6">
                      <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="callForwardingNumber">
                        Forwarding Number <span className="text-red-600">*</span>
                      </label>
                      <Input
                        id="callForwardingNumber"
                        placeholder="(555) 987-6543"
                        value={formData.voiceSettings.callForwardingNumber}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          voiceSettings: { ...prev.voiceSettings, callForwardingNumber: e.target.value }
                        }))}
                        className={errors.callForwardingNumber ? 'border-red-500' : ''}
                      />
                      {errors.callForwardingNumber && <p className="text-sm text-red-600 mt-1">{errors.callForwardingNumber}</p>}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        case 3:
          return (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-primary text-gray-900">User Permissions</CardTitle>
                <CardDescription className="font-secondary text-gray-600">
                  Control calling permissions and administrative access
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900 font-primary">Calling Permissions</h4>
                  
                  <label className="flex items-center space-x-3">
                    <Checkbox
                      checked={formData.permissions.canMakeInternational}
                      onCheckedChange={(checked) => setFormData(prev => ({
                        ...prev,
                        permissions: { ...prev.permissions, canMakeInternational: !!checked }
                      }))}
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900 font-secondary">International Calling</span>
                      <p className="text-xs text-gray-600">Allow calls outside the United States</p>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3">
                    <Checkbox
                      checked={formData.permissions.canAccessConferencing}
                      onCheckedChange={(checked) => setFormData(prev => ({
                        ...prev,
                        permissions: { ...prev.permissions, canAccessConferencing: !!checked }
                      }))}
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900 font-secondary">Conference Calling</span>
                      <p className="text-xs text-gray-600">Access to conference bridge and meeting features</p>
                    </div>
                  </label>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900 font-primary">Administrative Access</h4>
                  
                  <label className="flex items-center space-x-3">
                    <Checkbox
                      checked={formData.permissions.canManageSettings}
                      onCheckedChange={(checked) => setFormData(prev => ({
                        ...prev,
                        permissions: { ...prev.permissions, canManageSettings: !!checked }
                      }))}
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900 font-secondary">Manage Own Settings</span>
                      <p className="text-xs text-gray-600">User can modify their own voicemail and call forwarding</p>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3">
                    <Checkbox
                      checked={formData.permissions.adminAccess}
                      onCheckedChange={(checked) => setFormData(prev => ({
                        ...prev,
                        permissions: { ...prev.permissions, adminAccess: !!checked }
                      }))}
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900 font-secondary">System Administrator</span>
                      <p className="text-xs text-gray-600">Full access to manage all users and system settings</p>
                    </div>
                  </label>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon name="alert" size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-amber-900 font-primary">Permission Guidelines</h4>
                      <p className="text-sm text-amber-700 font-secondary mt-1">
                        International calling adds additional charges. Administrator access should be limited to IT staff only.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        case 4:
          return (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-primary text-gray-900">Equipment & Delivery</CardTitle>
                <CardDescription className="font-secondary text-gray-600">
                  Select phone device and delivery preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 font-primary mb-3">Device Type</label>
                  <RadioGroup 
                    value={formData.equipment.deviceType} 
                    onValueChange={(value) => setFormData(prev => ({
                      ...prev,
                      equipment: { ...prev.equipment, deviceType: value }
                    }))}
                  >
                    <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value="desk-phone" />
                      <div>
                        <span className="font-medium text-gray-900">Business Desk Phone</span>
                        <p className="text-sm text-gray-600">Full-featured desk phone with display - $8/month</p>
                      </div>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value="softphone" />
                      <div>
                        <span className="font-medium text-gray-900">Software Phone (App)</span>
                        <p className="text-sm text-gray-600">Computer/mobile app only - No additional cost</p>
                      </div>
                    </label>
                    <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <RadioGroupItem value="wireless-headset" />
                      <div>
                        <span className="font-medium text-gray-900">Wireless Headset</span>
                        <p className="text-sm text-gray-600">Bluetooth headset with desk base - $12/month</p>
                      </div>
                    </label>
                  </RadioGroup>
                </div>

                {formData.equipment.deviceType !== 'softphone' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 font-primary mb-2" htmlFor="location">
                        Installation Location
                      </label>
                      <Input
                        id="location"
                        placeholder="e.g., Desk 12B, Conference Room A"
                        value={formData.equipment.location}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          equipment: { ...prev.equipment, location: e.target.value }
                        }))}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 font-primary mb-3">Delivery Method</label>
                      <RadioGroup 
                        value={formData.equipment.deliveryMethod} 
                        onValueChange={(value) => setFormData(prev => ({
                          ...prev,
                          equipment: { ...prev.equipment, deliveryMethod: value }
                        }))}
                      >
                        <label className="flex items-center space-x-3">
                          <RadioGroupItem value="ship" />
                          <span className="text-sm font-medium text-gray-900">Ship to business address (2-3 business days)</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <RadioGroupItem value="pickup" />
                          <span className="text-sm font-medium text-gray-900">Hold for pickup at local service center</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <RadioGroupItem value="technician" />
                          <span className="text-sm font-medium text-gray-900">Professional installation (+$75 fee)</span>
                        </label>
                      </RadioGroup>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          );
        case 5:
          return (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-primary text-gray-900">Review & Activate User</CardTitle>
                <CardDescription className="font-secondary text-gray-600">
                  Confirm all settings before creating the new voice service user
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 font-primary mb-2">User Information</h4>
                    <p className="text-sm text-gray-600 font-secondary">
                      <strong>{formData.userInfo.firstName} {formData.userInfo.lastName}</strong><br />
                      {formData.userInfo.email}<br />
                      {formData.userInfo.department} {formData.userInfo.jobTitle && `- ${formData.userInfo.jobTitle}`}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 font-primary mb-2">Voice Configuration</h4>
                    <p className="text-sm text-gray-600 font-secondary">
                      Extension: {formData.voiceSettings.extension || 'Not selected'}<br />
                      {formData.voiceSettings.directNumber && `Direct Number: ${formData.voiceSettings.directNumber}`}<br />
                      Voicemail: {formData.voiceSettings.voicemailEnabled ? 'Enabled' : 'Disabled'}<br />
                      {formData.voiceSettings.callForwardingEnabled && `Call Forwarding: ${formData.voiceSettings.callForwardingNumber}`}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 font-primary mb-2">Permissions</h4>
                    <p className="text-sm text-gray-600 font-secondary">
                      International Calling: {formData.permissions.canMakeInternational ? 'Allowed' : 'Restricted'}<br />
                      Conference Access: {formData.permissions.canAccessConferencing ? 'Enabled' : 'Disabled'}<br />
                      Self-Management: {formData.permissions.canManageSettings ? 'Allowed' : 'Restricted'}<br />
                      Admin Access: {formData.permissions.adminAccess ? 'Yes' : 'No'}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 font-primary mb-2">Equipment</h4>
                    <p className="text-sm text-gray-600 font-secondary">
                      Device: {formData.equipment.deviceType === 'desk-phone' ? 'Business Desk Phone' : 
                               formData.equipment.deviceType === 'softphone' ? 'Software Phone' : 'Wireless Headset'}<br />
                      {formData.equipment.location && `Location: ${formData.equipment.location}`}<br />
                      {formData.equipment.deviceType !== 'softphone' && `Delivery: ${
                        formData.equipment.deliveryMethod === 'ship' ? 'Ship to business' :
                        formData.equipment.deliveryMethod === 'pickup' ? 'Hold for pickup' : 'Professional installation'
                      }`}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon name="check" size={20} className="text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900 font-primary">Ready to Activate</h4>
                      <p className="text-sm text-blue-700 font-secondary mt-1">
                        User will receive welcome email with setup instructions. Phone service will be active within 15 minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        default:
          return null;
      }
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <GlobalNavigation 
          userName="David" 
          sectionTitle="VOICE SERVICES" 
          showSearch={true}
          showUserProfile={true}
        />

        <main className="max-w-4xl mx-auto p-6">
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-primary mb-2">
                Add Voice Service User
              </h1>
              <p className="text-gray-600 font-secondary mb-4">
                Set up a new employee with business voice services, extension, and calling permissions
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <Icon name="configure" size={16} className="inline mr-1" /> Phone & extension setup
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  <Icon name="voicemail" size={16} className="inline mr-1" /> Voicemail configuration
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  <Icon name="configure" size={16} className="inline mr-1" /> Permission management
                </Badge>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                  <Icon name="truck" size={16} className="inline mr-1" /> Equipment delivery
                </Badge>
              </div>
            </div>

            {/* Progress Stepper - Responsive Design */}
            <div className="bg-white p-4 md:p-6 rounded-lg border overflow-hidden">
              {/* Mobile: Vertical Layout */}
              <div className="block md:hidden space-y-4">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-center space-x-3">
                    <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                      currentStep > step.id
                        ? 'bg-green-600 text-white'
                        : currentStep === step.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {currentStep > step.id ? (
                        <Icon name="check" size={16} />
                      ) : (
                        step.id
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium truncate ${
                        currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.name}
                      </div>
                      <div className="text-xs text-gray-500 truncate">{step.description}</div>
                    </div>
                    {currentStep === step.id && (
                      <div className="text-xs text-primary-600 font-medium flex-shrink-0">
                        Current
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop: Compact Horizontal Layout */}
              <div className="hidden md:block">
                <div className="flex items-center justify-between max-w-full">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center min-w-0 flex-1">
                      <div className="flex items-center min-w-0">
                        <div className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-medium ${
                          currentStep > step.id
                            ? 'bg-green-600 text-white'
                            : currentStep === step.id
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {currentStep > step.id ? (
                            <Icon name="check" size={12} />
                          ) : (
                            step.id
                          )}
                        </div>
                        <div className="ml-2 min-w-0 flex-1">
                          <div className={`text-xs font-medium truncate ${
                            currentStep >= step.id ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {step.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">{step.description}</div>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`flex-shrink-0 w-6 h-0.5 mx-2 ${
                          currentStep > step.id ? 'bg-green-600' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Content */}
            {renderStepContent()}

            {/* Navigation */}
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handlePrev} 
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep === 5 ? (
                <Button 
                  variant="default"
                  onClick={() => alert('Voice service user created successfully! Welcome email sent.')}
                >
                  Activate User
                </Button>
              ) : (
                <Button 
                  variant="default" 
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  },
};
