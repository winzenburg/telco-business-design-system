import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../src/components/ui/card';
import { Badge } from '../src/components/ui/badge';
import { Button } from '../src/components/ui/button';
import { Progress } from '../src/components/ui/progress';
import { Separator } from '../src/components/ui/separator';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../src/components/ui/avatar';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../src/components/ui/chart';
import { Combobox } from '../src/components/ui/combobox';
import { DatePicker } from '../src/components/ui/date-picker';
import { Textarea } from '../src/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../src/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../src/components/ui/select';
import { AlertCircle } from 'lucide-react';

// Import Recharts components
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

// Design system color themes
const categoricalColors = {
  cat1: '#0D62FF',    // Primary blue
  cat2: '#3BB112',    // Green
  cat3: '#5235A8',    // Purple
  cat4: '#E7343C',    // Red
  cat5: '#03496B',    // Dark blue
  cat6: '#DB9200',    // Orange/yellow
};

const signalColors = {
  positive: '#4EA725',    // Positive outcomes
  low: '#CA8700',         // Low priority/risk
  medium: '#E86711',      // Medium priority/risk
  high: '#AD1217',        // High priority/risk
  critical: '#771117',    // Critical priority/risk
  neutral: '#949495',     // Neutral/no data
};

// Sample data for dashboard charts
const servicePerformanceTrend = [
  { name: 'Jan', Internet: 98.2, Voice: 99.1, TV: 97.5, Security: 100 },
  { name: 'Feb', Internet: 98.7, Voice: 99.0, TV: 98.1, Security: 100 },
  { name: 'Mar', Internet: 98.5, Voice: 99.2, TV: 97.8, Security: 100 },
  { name: 'Apr', Internet: 99.1, Voice: 99.3, TV: 98.5, Security: 100 },
  { name: 'May', Internet: 98.8, Voice: 98.9, TV: 97.9, Security: 100 },
  { name: 'Jun', Internet: 98.5, Voice: 99.2, TV: 97.8, Security: 100 },
];

const serviceDistribution = [
  { name: 'Internet Services', value: 6847, fill: categoricalColors.cat1 },
  { name: 'Voice Services', value: 3200, fill: categoricalColors.cat2 },
  { name: 'TV Services', value: 1800, fill: categoricalColors.cat3 },
  { name: 'Security Services', value: 1000, fill: categoricalColors.cat4 },
];

const ticketPriority = [
  { name: 'Critical', value: 12, fill: signalColors.critical },
  { name: 'High', value: 28, fill: signalColors.high },
  { name: 'Medium', value: 45, fill: signalColors.medium },
  { name: 'Low', value: 42, fill: signalColors.low },
];

const revenueData = [
  { name: 'Q1', revenue: 2.1, growth: 8.5 },
  { name: 'Q2', revenue: 2.3, growth: 9.1 },
  { name: 'Q3', revenue: 2.2, growth: 4.2 },
  { name: 'Q4', revenue: 2.4, growth: 12.5 },
];

const regionOptions = [
  { value: 'all', label: 'All Regions' },
  { value: 'northeast', label: 'Northeast' },
  { value: 'southeast', label: 'Southeast' },
  { value: 'midwest', label: 'Midwest' },
  { value: 'southwest', label: 'Southwest' },
  { value: 'west', label: 'West' },
];

const serviceCategoryOptions = [
  { value: 'all', label: 'All Services' },
  { value: 'internet', label: 'Internet Services' },
  { value: 'voice', label: 'Voice Services' },
  { value: 'tv', label: 'TV Services' },
  { value: 'security', label: 'Security Services' },
];

const meta: Meta = {
  title: 'Enterprise/Dashboard',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Enterprise dashboard showcasing business metrics, service status, and key performance indicators.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExecutiveDashboard: Story = {
  render: () => {
    const [region, setRegion] = useState('all');
    const [serviceCategory, setServiceCategory] = useState('all');
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [incidentDialogOpen, setIncidentDialogOpen] = useState(false);
    const [incidentType, setIncidentType] = useState('');
    const [incidentDescription, setIncidentDescription] = useState('');

    return (
      <div className="min-h-screen bg-[var(--ds-color-bg-surface)]">
        {/* Header */}
        <header className="bg-[var(--ds-color-bg-canvas)] border-b border-[var(--ds-color-neutral-300)] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[var(--ds-color-intent-primary)] rounded flex items-center justify-center text-white font-bold text-sm">CB</div>
                <div>
                  <h1 className="font-primary font-semibold text-xl text-[var(--ds-color-text-primary)]">Executive Dashboard</h1>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">Real-time business insights</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">Live</Badge>
              <Avatar className="w-8 h-8">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-[var(--ds-color-text-primary)]">John Doe</span>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Combobox
              options={regionOptions}
              value={region}
              onValueChange={setRegion}
              placeholder="Select region..."
              searchPlaceholder="Search regions..."
              width="w-[180px]"
            />
            <Combobox
              options={serviceCategoryOptions}
              value={serviceCategory}
              onValueChange={setServiceCategory}
              placeholder="Select service..."
              searchPlaceholder="Search services..."
              width="w-[200px]"
            />
            <div className="flex items-center gap-2">
              <DatePicker
                date={startDate}
                onDateChange={setStartDate}
                placeholder="Start date"
              />
              <span className="text-sm text-[var(--ds-color-text-muted)]">to</span>
              <DatePicker
                date={endDate}
                onDateChange={setEndDate}
                placeholder="End date"
              />
            </div>
            {(region !== 'all' || serviceCategory !== 'all' || startDate || endDate) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setRegion('all');
                  setServiceCategory('all');
                  setStartDate(undefined);
                  setEndDate(undefined);
                }}
              >
                Clear filters
              </Button>
            )}
            <div className="ml-auto">
              <Button
                variant="outline"
                onClick={() => setIncidentDialogOpen(true)}
              >
                Report Incident
              </Button>
            </div>
          </div>
        </header>

      <div className="p-6 space-y-6">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">$2.4M</div>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="success">
                  ↗ +12.5%
                </Badge>
                <span className="text-sm text-[var(--ds-color-text-muted)]">vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">Active Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">12,847</div>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="info">
                  → +234
                </Badge>
                <span className="text-sm text-[var(--ds-color-text-muted)]">this month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">System Uptime</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">99.97%</div>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="success">
                  Excellent
                </Badge>
                <span className="text-sm text-[var(--ds-color-text-muted)]">30-day avg</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">Support Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">127</div>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="destructive">
                  ↗ +23
                </Badge>
                <span className="text-sm text-[var(--ds-color-text-muted)]">open tickets</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Service Performance Trend */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Service Performance Trends</CardTitle>
                <CardDescription>6-month uptime trends across all service categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={servicePerformanceTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-neutral-300)" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-neutral-300)' }}
                    />
                    <YAxis 
                      domain={[95, 100]}
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-neutral-300)' }}
                    />
                    <ChartTooltip />
                    <Line 
                      type="monotone" 
                      dataKey="Internet" 
                      stroke={categoricalColors.cat1}
                      strokeWidth={3}
                      dot={{ fill: categoricalColors.cat1, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Voice" 
                      stroke={categoricalColors.cat2}
                      strokeWidth={3}
                      dot={{ fill: categoricalColors.cat2, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="TV" 
                      stroke={categoricalColors.cat3}
                      strokeWidth={3}
                      dot={{ fill: categoricalColors.cat3, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Security" 
                      stroke={categoricalColors.cat4}
                      strokeWidth={3}
                      dot={{ fill: categoricalColors.cat4, r: 4 }}
                    />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
                
                <Separator className="my-4" />
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-[var(--ds-color-bg-surface)] rounded-lg">
                    <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">847</div>
                    <div className="text-sm text-[var(--ds-color-text-muted)]">Locations Served</div>
                  </div>
                  <div className="text-center p-4 bg-[var(--ds-color-bg-surface)] rounded-lg">
                    <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">2.3TB</div>
                    <div className="text-sm text-[var(--ds-color-text-muted)]">Data Processed Today</div>
                  </div>
                  <div className="text-center p-4 bg-[var(--ds-color-bg-surface)] rounded-lg">
                    <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">99.1%</div>
                    <div className="text-sm text-[var(--ds-color-text-muted)]">Avg Performance</div>
                  </div>
                  <div className="text-center p-4 bg-[var(--ds-color-bg-surface)] rounded-lg">
                    <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">24/7</div>
                    <div className="text-sm text-[var(--ds-color-text-muted)]">Monitoring</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Distribution */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Service Distribution</CardTitle>
                <CardDescription>Active services by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[240px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={serviceDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${percent ? (percent * 100).toFixed(0) : 0}%`}
                      >
                        {serviceDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <ChartTooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-3 mt-4">
                  {serviceDistribution.map((service, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: service.fill }}
                        />
                        <span className="text-sm font-medium text-[var(--ds-color-text-primary)]">{service.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-[var(--ds-color-text-muted)]">{service.value.toLocaleString()}</span>
                    </div>
                  ))}\n                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Support Tickets by Priority */}
          <Card>
            <CardHeader>
              <CardTitle>Support Tickets by Priority</CardTitle>
              <CardDescription>Current open tickets categorized by priority level</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={ticketPriority}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-neutral-300)" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-neutral-300)' }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-neutral-300)' }}
                    />
                    <ChartTooltip />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {ticketPriority.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Growth */}
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Revenue Growth</CardTitle>
              <CardDescription>Revenue performance and growth rate trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsAreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-neutral-300)" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-neutral-300)' }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-neutral-300)' }}
                    />
                    <ChartTooltip />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke={categoricalColors.cat2}
                      strokeWidth={2}
                      fill={categoricalColors.cat2}
                      fillOpacity={0.3}
                    />
                  </RechartsAreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Critical Alerts
                <Badge variant="destructive">3</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-red-900">High CPU usage</p>
                    <p className="text-xs text-red-700">Server cluster B</p>
                  </div>
                  <Button size="sm" variant="outline">Review</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-red-900">Bandwidth threshold</p>
                    <p className="text-xs text-red-700">Dallas region</p>
                  </div>
                  <Button size="sm" variant="outline">Review</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Pending Approvals
                <Badge variant="secondary">7</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-blue-900">Service upgrade</p>
                    <p className="text-xs text-blue-700">Enterprise client #4521</p>
                  </div>
                  <Button size="sm">Approve</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-blue-900">Budget allocation</p>
                    <p className="text-xs text-blue-700">Q4 infrastructure</p>
                  </div>
                  <Button size="sm">Approve</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Generate Monthly Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Schedule Maintenance
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  View Network Status
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Access Control Panel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Incident Report Dialog */}
      <Dialog open={incidentDialogOpen} onOpenChange={setIncidentDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Report Incident</DialogTitle>
            <DialogDescription>
              Submit an incident report for immediate review by the operations team.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Incident Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--ds-color-text-primary)]">
                Incident Type <span className="text-[var(--ds-color-intent-destructive)]">*</span>
              </label>
              <Select value={incidentType} onValueChange={setIncidentType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select incident type..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="outage">Service Outage</SelectItem>
                  <SelectItem value="degraded">Degraded Performance</SelectItem>
                  <SelectItem value="security">Security Breach</SelectItem>
                  <SelectItem value="billing">Billing Issue</SelectItem>
                  <SelectItem value="hardware">Hardware Failure</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Incident Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--ds-color-text-primary)]">
                Description <span className="text-[var(--ds-color-intent-destructive)]">*</span>
              </label>
              <Textarea
                placeholder="Provide detailed information about the incident..."
                value={incidentDescription}
                onChange={(e) => setIncidentDescription(e.target.value)}
                minLength={30}
                maxLength={1000}
                rows={8}
                showCount
              />
              <p className="text-xs text-[var(--ds-color-text-muted)]">
                Minimum 30 characters. Include details such as affected services, regions, time of occurrence, and impact.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIncidentDialogOpen(false);
                setIncidentType('');
                setIncidentDescription('');
              }}
            >
              Cancel
            </Button>
            <Button
              disabled={!incidentType || incidentDescription.length < 30}
              onClick={() => {
                // Handle incident submission
                setIncidentDialogOpen(false);
                setIncidentType('');
                setIncidentDescription('');
              }}
            >
              Submit Report
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    );
  },
};