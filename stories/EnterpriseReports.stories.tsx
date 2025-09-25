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
import { Badge } from '../src/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../src/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../src/components/ui/table';
import { Checkbox } from '../src/components/ui/checkbox';
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from '../src/components/ui/menu';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../src/components/ui/tabs';
import { Progress } from '../src/components/ui/progress';
import { Separator } from '../src/components/ui/separator';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../src/components/ui/chart';
import { Icon } from '../packages/icons/src/Icon';

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

// Design system color themes for analytics
const categoricalColors = {
  cat1: '#0D62FF',    // Primary blue
  cat2: '#3BB112',    // Green
  cat3: '#5235A8',    // Purple
  cat4: '#E7343C',    // Red
  cat5: '#03496B',    // Dark blue
  cat6: '#DB9200',    // Orange/yellow
};

const sequentialColors = {
  seq1: '#013841',    // Darkest
  seq2: '#055446',
  seq3: '#0A704B',
  seq4: '#0F864F',    // Mid-range
  seq5: '#139C53',
  seq6: '#26A54D',
  seq7: '#499F3C',    // Lightest
};

// Analytics chart data
const networkPerformanceData = [
  { name: 'Jan', uptime: 99.2, latency: 12, throughput: 847 },
  { name: 'Feb', uptime: 99.5, latency: 11, throughput: 923 },
  { name: 'Mar', uptime: 98.9, latency: 13, throughput: 891 },
  { name: 'Apr', uptime: 99.7, latency: 10, throughput: 1045 },
  { name: 'May', uptime: 99.3, latency: 11, throughput: 967 },
  { name: 'Jun', uptime: 99.8, latency: 9, throughput: 1123 },
];

const serviceTypeUsage = [
  { name: 'Internet', value: 67, fill: categoricalColors.cat1 },
  { name: 'Phone', value: 18, fill: categoricalColors.cat2 },
  { name: 'TV', value: 10, fill: categoricalColors.cat3 },
  { name: 'Security', value: 5, fill: categoricalColors.cat4 },
];

const regionalPerformanceData = [
  { region: 'East Coast', performance: 99.8, color: sequentialColors.seq7 },
  { region: 'Central', performance: 99.5, color: sequentialColors.seq5 },
  { region: 'West Coast', performance: 98.9, color: sequentialColors.seq3 },
  { region: 'Southwest', performance: 99.2, color: sequentialColors.seq4 },
  { region: 'Northwest', performance: 99.6, color: sequentialColors.seq6 },
];

const meta: Meta = {
  title: 'Enterprise/Reports',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Enterprise reports interface with analytics, data visualization, and export capabilities.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const performanceReports = [
  { id: "RPT-001", name: "Network Performance Summary", type: "Performance", lastGenerated: "2024-01-15", status: "Ready", size: "2.3 MB", period: "Monthly" },
  { id: "RPT-002", name: "Service Uptime Analysis", type: "Availability", lastGenerated: "2024-01-14", status: "Ready", size: "1.8 MB", period: "Weekly" },
  { id: "RPT-003", name: "Bandwidth Usage Report", type: "Usage", lastGenerated: "2024-01-13", status: "Generating", size: "-", period: "Daily" },
  { id: "RPT-004", name: "Security Incident Report", type: "Security", lastGenerated: "2024-01-12", status: "Ready", size: "0.9 MB", period: "Weekly" },
  { id: "RPT-005", name: "Cost Analysis Report", type: "Financial", lastGenerated: "2024-01-10", status: "Ready", size: "3.1 MB", period: "Monthly" },
];

const usageData = [
  { location: "New York HQ", internet: 847, phone: 12430, tv: 156, cost: "$8,450" },
  { location: "Chicago Office", internet: 623, phone: 8920, tv: 89, cost: "$6,230" },
  { location: "Dallas Branch", internet: 412, phone: 5640, tv: 67, cost: "$4,120" },
  { location: "Seattle Office", internet: 298, phone: 3210, tv: 34, cost: "$2,980" },
  { location: "Miami Branch", internet: 189, phone: 2100, tv: 22, cost: "$1,890" },
];

// Usage trend data for charts
const usageTrendData = [
  { name: 'Jan', internet: 2.1, phone: 28.4, tv: 0.32, total: 30.82 },
  { name: 'Feb', internet: 2.3, phone: 29.1, tv: 0.35, total: 31.75 },
  { name: 'Mar', internet: 2.2, phone: 31.2, tv: 0.37, total: 33.77 },
  { name: 'Apr', internet: 2.4, phone: 30.8, tv: 0.31, total: 33.51 },
  { name: 'May', internet: 2.6, phone: 32.3, tv: 0.36, total: 35.26 },
  { name: 'Jun', internet: 2.37, phone: 32.3, tv: 0.368, total: 35.04 },
];

const locationCostsData = [
  { name: 'New York HQ', cost: 8450 },
  { name: 'Chicago Office', cost: 6230 },
  { name: 'Dallas Branch', cost: 4120 },
  { name: 'Seattle Office', cost: 2980 },
  { name: 'Miami Branch', cost: 1890 },
];

const analyticsData = [
  { metric: "Total Active Services", current: "12,847", previous: "12,613", change: "+1.85%" },
  { metric: "Average Uptime", current: "99.97%", previous: "99.94%", change: "+0.03%" },
  { metric: "Support Tickets Resolved", current: "94.2%", previous: "92.8%", change: "+1.4%" },
  { metric: "Customer Satisfaction", current: "4.8/5", previous: "4.7/5", change: "+2.1%" },
];

export const EnterpriseReportsInterface: Story = {
  render: () => {
    const [selectedReports, setSelectedReports] = useState<string[]>([]);
    const [reportFilter, setReportFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredReports = performanceReports.filter(report => {
      const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          report.type.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = reportFilter === 'all' || report.type === reportFilter;
      return matchesSearch && matchesFilter;
    });

    const toggleReportSelection = (reportId: string) => {
      setSelectedReports(prev => 
        prev.includes(reportId) 
          ? prev.filter(id => id !== reportId)
          : [...prev, reportId]
      );
    };

    const toggleSelectAll = () => {
      setSelectedReports(
        selectedReports.length === filteredReports.length 
          ? [] 
          : filteredReports.map(report => report.id)
      );
    };

    const getStatusBadge = (status: string) => {
      switch (status) {
        case 'Ready':
          return <Badge variant="success" leadingIcon={<Icon name="check" size={14} />}>Ready</Badge>;
        case 'Generating':
          return <Badge variant="warning" leadingIcon={<Icon name="configure" size={14} />}>Generating</Badge>;
        case 'Failed':
          return <Badge variant="destructive" leadingIcon={<Icon name="alert" size={14} />}>Failed</Badge>;
        default:
          return <Badge variant="outline">{status}</Badge>;
      }
    };

    const getTypeBadge = (type: string) => {
      const variants = {
        Performance: "info",
        Availability: "success",
        Usage: "secondary",
        Security: "destructive",
        Financial: "warning",
      };
      return <Badge variant={(variants[type as keyof typeof variants] || "outline") as any}>{type}</Badge>;
    };

    return (
      <div className="min-h-screen bg-[var(--ds-color-bg-surface)]">
        {/* Header */}
        <header className="bg-white border-b border-[var(--ds-color-neutral-300)] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-primary font-semibold text-xl text-[var(--ds-color-text-primary)]">Enterprise Reports</h1>
              <p className="text-sm text-[var(--ds-color-text-muted)]">Analytics, insights, and data exports for your business</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">Schedule Report</Button>
              <Button>Generate Custom Report</Button>
            </div>
          </div>
        </header>

        <div className="p-6">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 max-w-md">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {analyticsData.map((metric, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">{metric.metric}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">{metric.current}</div>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="success">
                          {metric.change}
                        </Badge>
                        <span className="text-sm text-[var(--ds-color-text-muted)]">vs last period</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Reports</CardTitle>
                    <CardDescription>Latest generated reports and analytics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {performanceReports.slice(0, 4).map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-3 border border-[var(--ds-color-neutral-300)] rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-[var(--ds-color-text-primary)]">{report.name}</p>
                          <p className="text-xs text-[var(--ds-color-text-muted)]">{report.lastGenerated} • {report.size}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(report.status)}
                          <Button variant="ghost" size="sm">
                            Download
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      View All Reports
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Service Performance Trends</CardTitle>
                    <CardDescription>30-day performance overview</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[var(--ds-color-text-primary)]">Internet Uptime</span>
                          <span className="text-sm text-[var(--ds-color-text-muted)]">99.97%</span>
                        </div>
                        <Progress value={99.97} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[var(--ds-color-text-primary)]">Phone Service</span>
                          <span className="text-sm text-[var(--ds-color-text-muted)]">99.95%</span>
                        </div>
                        <Progress value={99.95} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[var(--ds-color-text-primary)]">Security Systems</span>
                          <span className="text-sm text-[var(--ds-color-text-muted)]">100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-[var(--ds-color-text-primary)]">TV Services</span>
                          <span className="text-sm text-[var(--ds-color-text-muted)]">98.8%</span>
                        </div>
                        <Progress value={98.8} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Available Reports</CardTitle>
                      <CardDescription>Generated reports and scheduled analytics</CardDescription>
                    </div>
                    {selectedReports.length > 0 && (
                      <Badge variant="info">
                        {selectedReports.length} selected
                      </Badge>
                    )}
                  </div>

                  {/* Filters */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Search reports by name or type..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Select value={reportFilter} onValueChange={setReportFilter}>
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Types</SelectItem>
                          <SelectItem value="Performance">Performance</SelectItem>
                          <SelectItem value="Availability">Availability</SelectItem>
                          <SelectItem value="Usage">Usage</SelectItem>
                          <SelectItem value="Security">Security</SelectItem>
                          <SelectItem value="Financial">Financial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Bulk Actions */}
                  {selectedReports.length > 0 && (
                    <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <span className="text-sm font-medium text-blue-900">
                        {selectedReports.length} report{selectedReports.length > 1 ? 's' : ''} selected
                      </span>
                      <div className="flex gap-2 ml-auto">
                        <Button size="sm" variant="outline">Download All</Button>
                        <Button size="sm" variant="outline">Email Reports</Button>
                        <Button size="sm">Archive Selected</Button>
                      </div>
                    </div>
                  )}
                </CardHeader>

                <CardContent>
                  <div className="rounded-lg border border-[var(--ds-color-neutral-300)] bg-white">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">
                            <Checkbox
                              checked={selectedReports.length === filteredReports.length && filteredReports.length > 0}
                              onCheckedChange={toggleSelectAll}
                            />
                          </TableHead>
                          <TableHead>Report Name</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Last Generated</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Period</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead className="w-12"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredReports.map((report) => (
                          <TableRow key={report.id}>
                            <TableCell>
                              <Checkbox
                                checked={selectedReports.includes(report.id)}
                                onCheckedChange={() => toggleReportSelection(report.id)}
                              />
                            </TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium text-[var(--ds-color-text-primary)]">{report.name}</div>
                                <div className="text-sm text-[var(--ds-color-text-muted)]">{report.id}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {getTypeBadge(report.type)}
                            </TableCell>
                            <TableCell>{report.lastGenerated}</TableCell>
                            <TableCell>
                              {getStatusBadge(report.status)}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{report.period}</Badge>
                            </TableCell>
                            <TableCell>{report.size}</TableCell>
                            <TableCell>
                              <Menu>
                                <MenuTrigger asChild>
                                  <Button variant="ghost" size="sm"><Icon name="contextmenu" size={16} /></Button>
                                </MenuTrigger>
                                <MenuContent align="end">
                                  <MenuItem>View Report</MenuItem>
                                  <MenuItem>Download PDF</MenuItem>
                                  <MenuItem>Download CSV</MenuItem>
                                  <MenuSeparator />
                                  <MenuItem>Schedule</MenuItem>
                                  <MenuItem>Share</MenuItem>
                                  <MenuSeparator />
                                  <MenuItem>Archive</MenuItem>
                                </MenuContent>
                              </Menu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-[var(--ds-color-text-muted)]">
                      Showing {filteredReports.length} of {performanceReports.length} reports
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Badge variant="secondary">1</Badge>
                      <Button variant="outline" size="sm" disabled>
                        Next
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                  <CardDescription>Detailed analysis of service performance and trends</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Network Performance Chart */}
                  <div className="h-[320px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={networkPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-neutral-300)" />
                      <XAxis 
                        dataKey="name" 
                        tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                        axisLine={{ stroke: 'var(--ds-color-neutral-300)' }}
                      />
                      <YAxis 
                        yAxisId="uptime"
                        domain={[98, 100]}
                        tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                        axisLine={{ stroke: 'var(--ds-color-neutral-300)' }}
                      />
                      <YAxis 
                        yAxisId="throughput"
                        orientation="right"
                        domain={[0, 1200]}
                        tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                        axisLine={{ stroke: 'var(--ds-color-neutral-300)' }}
                      />
                      <ChartTooltip />
                      <Line 
                        yAxisId="uptime"
                        type="monotone" 
                        dataKey="uptime" 
                        stroke={categoricalColors.cat1}
                        strokeWidth={3}
                        dot={{ fill: categoricalColors.cat1, r: 4 }}
                        name="Uptime (%)"
                      />
                      <Line 
                        yAxisId="throughput"
                        type="monotone" 
                        dataKey="throughput" 
                        stroke={categoricalColors.cat2}
                        strokeWidth={3}
                        dot={{ fill: categoricalColors.cat2, r: 4 }}
                        name="Throughput (Mbps)"
                      />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Service Distribution Pie Chart */}
                    <Card className="border-[var(--ds-color-neutral-300)]">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Service Distribution</CardTitle>
                        <CardDescription className="text-xs">Usage by service type</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[160px] w-full flex justify-center">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsPieChart>
                            <Pie
                              data={serviceTypeUsage}
                              cx={80}
                              cy={80}
                              outerRadius={60}
                              dataKey="value"
                            >
                              {serviceTypeUsage.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Pie>
                            <ChartTooltip />
                            </RechartsPieChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="space-y-2 mt-2">
                          {serviceTypeUsage.map((service, index) => (
                            <div key={index} className="flex justify-between items-center text-sm">
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-2 h-2 rounded-full" 
                                  style={{ backgroundColor: service.fill }}
                                />
                                <span>{service.name}</span>
                              </div>
                              <span className="font-medium">{service.value}%</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Regional Performance Bar Chart */}
                    <Card className="border-[var(--ds-color-neutral-300)]">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Regional Performance</CardTitle>
                        <CardDescription className="text-xs">Uptime by region</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[160px] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart data={regionalPerformanceData}>
                            <XAxis 
                              dataKey="region" 
                              tick={{ fontSize: 10, fill: 'var(--ds-color-text-muted)' }}
                              angle={-45}
                              textAnchor="end"
                              height={60}
                            />
                            <YAxis 
                              domain={[98, 100]}
                              tick={{ fontSize: 10, fill: 'var(--ds-color-text-muted)' }}
                            />
                            <ChartTooltip />
                            <Bar dataKey="performance" radius={[2, 2, 0, 0]}>
                              {regionalPerformanceData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Bar>
                            </RechartsBarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Peak Usage Hours */}
                    <Card className="border-[var(--ds-color-neutral-300)]">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Peak Usage Hours</CardTitle>
                        <CardDescription className="text-xs">Daily traffic patterns</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>9:00 AM - 11:00 AM</span>
                              <span className="font-medium">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>2:00 PM - 4:00 PM</span>
                              <span className="font-medium">78%</span>
                            </div>
                            <Progress value={78} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>7:00 PM - 9:00 PM</span>
                              <span className="font-medium">62%</span>
                            </div>
                            <Progress value={62} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>11:00 PM - 1:00 AM</span>
                              <span className="font-medium">34%</span>
                            </div>
                            <Progress value={34} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Usage Tab */}
            <TabsContent value="usage" className="space-y-6">
              {/* Usage Trends Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Usage Trend Over Time */}
                <Card>
                  <CardHeader>
                    <CardTitle>Usage Trends Over Time</CardTitle>
                    <CardDescription>6-month usage patterns by service type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[280px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsAreaChart data={usageTrendData}>
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
                          dataKey="internet" 
                          stackId="1"
                          stroke={categoricalColors.cat1} 
                          fill={categoricalColors.cat1}
                          fillOpacity={0.8}
                          name="Internet (TB)"
                        />
                        <Area 
                          type="monotone" 
                          dataKey="phone" 
                          stackId="1"
                          stroke={categoricalColors.cat2} 
                          fill={categoricalColors.cat2}
                          fillOpacity={0.8}
                          name="Phone (k min)"
                        />
                        <Area 
                          type="monotone" 
                          dataKey="tv" 
                          stackId="1"
                          stroke={categoricalColors.cat3} 
                          fill={categoricalColors.cat3}
                          fillOpacity={0.8}
                          name="TV (k hours)"
                        />
                      </RechartsAreaChart>
                    </ResponsiveContainer>
                  </div>
                  </CardContent>
                </Card>

                {/* Cost by Location */}
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Costs by Location</CardTitle>
                    <CardDescription>Service costs across business locations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[280px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsBarChart data={locationCostsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-neutral-300)" />
                        <XAxis 
                          dataKey="name" 
                          tick={{ fontSize: 10, fill: 'var(--ds-color-text-muted)' }}
                          angle={-45}
                          textAnchor="end"
                          height={80}
                          interval={0}
                        />
                        <YAxis 
                          tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                          axisLine={{ stroke: 'var(--ds-color-neutral-300)' }}
                        />
                        <ChartTooltip 
                          formatter={(value) => [`$${value.toLocaleString()}`, 'Monthly Cost']}
                        />
                        <Bar 
                          dataKey="cost" 
                          fill={categoricalColors.cat2}
                          radius={[4, 4, 0, 0]}
                        />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Usage by Location</CardTitle>
                  <CardDescription>Detailed service consumption across all business locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-[var(--ds-color-neutral-300)] bg-white">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Location</TableHead>
                          <TableHead>Internet (GB)</TableHead>
                          <TableHead>Phone (min)</TableHead>
                          <TableHead>TV (hours)</TableHead>
                          <TableHead>Monthly Cost</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {usageData.map((location, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <span className="font-medium text-[var(--ds-color-text-primary)]">{location.location}</span>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <span className="font-medium">{location.internet}</span>
                                <Progress value={(location.internet / 1000) * 100} className="h-1 w-16" />
                              </div>
                            </TableCell>
                            <TableCell>
                              <span>{location.phone.toLocaleString()}</span>
                            </TableCell>
                            <TableCell>
                              <span>{location.tv}</span>
                            </TableCell>
                            <TableCell>
                              <span className="font-medium text-[var(--ds-color-text-primary)]">{location.cost}</span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Usage Summary */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-[var(--ds-color-bg-surface)] rounded-lg">
                      <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">2.37 TB</div>
                      <div className="text-sm text-[var(--ds-color-text-muted)]">Total Internet Usage</div>
                    </div>
                    <div className="text-center p-4 bg-[var(--ds-color-bg-surface)] rounded-lg">
                      <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">32.3k</div>
                      <div className="text-sm text-[var(--ds-color-text-muted)]">Total Phone Minutes</div>
                    </div>
                    <div className="text-center p-4 bg-[var(--ds-color-bg-surface)] rounded-lg">
                      <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">368</div>
                      <div className="text-sm text-[var(--ds-color-text-muted)]">Total TV Hours</div>
                    </div>
                    <div className="text-center p-4 bg-[var(--ds-color-bg-surface)] rounded-lg">
                      <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">$23.7k</div>
                      <div className="text-sm text-[var(--ds-color-text-muted)]">Total Monthly Cost</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  },
};