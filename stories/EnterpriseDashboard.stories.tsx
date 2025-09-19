import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
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
  render: () => (
    <div className="min-h-screen bg-[var(--ds-color-bg-surface)]">
      {/* Header */}
      <header className="bg-[var(--ds-color-bg-canvas)] border-b border-[var(--ds-color-border-default)] px-6 py-4">
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
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-border-default)" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-border-default)' }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-border-default)' }}
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
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-border-default)" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-border-default)' }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                      axisLine={{ stroke: 'var(--ds-color-border-default)' }}
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
    </div>
  ),
};