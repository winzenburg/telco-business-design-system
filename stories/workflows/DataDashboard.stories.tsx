import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Badge,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Alert,
  AlertDescription,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Input,
  Label,
  Combobox,
  DatePicker,
} from '../../src/components';
import { SummaryCard } from '../../src/components/patterns/SummaryCard';
import { ResponsiveContainer, ResponsiveGrid } from '../../src/components/patterns/ResponsiveLayout';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  User,
  DollarSign,
  Activity,
  Download,
  RefreshCcw,
  Filter,
  Calendar,
  BarChart as BarChartIcon,
  ArrowUp,
  ArrowDown,
  Minus,
  AlertCircle,
  CheckCircle,
  Clock,
  Search,
} from 'lucide-react';

const meta: Meta = {
  title: 'Workflows/Data Dashboard',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive data dashboard showcasing SummaryCard pattern components, ResponsiveGrid layouts, charts, tables, and filtering. Demonstrates analytics, metrics tracking, and reporting capabilities with enterprise patterns.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  description: string;
}

interface ServiceData {
  id: string;
  service: string;
  status: 'active' | 'warning' | 'error' | 'inactive';
  users: number;
  bandwidth: string;
  uptime: number;
  lastUpdated: string;
}

// Service filter options
const SERVICE_OPTIONS = [
  { value: 'all', label: 'All Services' },
  { value: 'internet', label: 'Business Internet' },
  { value: 'voice', label: 'Business Voice' },
  { value: 'security', label: 'Security Edge' },
  { value: 'backup', label: 'Cloud Backup' },
  { value: 'vpn', label: 'Business VPN' },
];

const DashboardFlow = () => {
  const [dateRange, setDateRange] = useState('7d');
  const [customStartDate, setCustomStartDate] = useState<Date | undefined>(undefined);
  const [customEndDate, setCustomEndDate] = useState<Date | undefined>(undefined);
  const [selectedService, setSelectedService] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  // Chart data
  const trafficData = [
    { time: '00:00', upload: 400, download: 2400, total: 2800 },
    { time: '04:00', upload: 300, download: 1398, total: 1698 },
    { time: '08:00', upload: 800, download: 9800, total: 10600 },
    { time: '12:00', upload: 2780, download: 3908, total: 6688 },
    { time: '16:00', upload: 1890, download: 4800, total: 6690 },
    { time: '20:00', upload: 2390, download: 3800, total: 6190 },
  ];

  const userActivityData = [
    { service: 'Internet', users: 1523, color: '#0D62FF' },
    { service: 'Voice', users: 892, color: '#4A89FF' },
    { service: 'Security', users: 445, color: '#86B0FF' },
    { service: 'Backup', users: 234, color: '#C2D8FF' },
    { service: 'VPN', users: 67, color: '#EBF1FF' },
  ];

  const costData = [
    { name: 'Internet', value: 45, cost: 6750 },
    { name: 'Voice', value: 30, cost: 4500 },
    { name: 'Security', value: 15, cost: 2250 },
    { name: 'Backup', value: 7, cost: 1050 },
    { name: 'VPN', value: 3, cost: 450 },
  ];

  const COLORS = ['#0D62FF', '#4A89FF', '#86B0FF', '#C2D8FF', '#EBF1FF'];

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const metrics: MetricCard[] = [
    {
      title: 'Total Revenue',
      value: '$48,532',
      change: 12.5,
      trend: 'up',
      icon: <DollarSign className="h-4 w-4" />,
      description: 'Monthly recurring revenue',
    },
    {
      title: 'Active Users',
      value: '3,421',
      change: -2.4,
      trend: 'down',
      icon: <User className="h-4 w-4" />,
      description: 'Currently active users',
    },
    {
      title: 'Network Uptime',
      value: '99.9%',
      change: 0.1,
      trend: 'up',
      icon: <Activity className="h-4 w-4" />,
      description: 'Last 30 days',
    },
    {
      title: 'Support Tickets',
      value: '42',
      change: -15,
      trend: 'down',
      icon: <AlertCircle className="h-4 w-4" />,
      description: 'Open tickets',
    },
  ];

  const serviceData: ServiceData[] = [
    {
      id: '1',
      service: 'Business Internet',
      status: 'active',
      users: 1523,
      bandwidth: '850 GB',
      uptime: 99.99,
      lastUpdated: '2 mins ago',
    },
    {
      id: '2',
      service: 'Business Voice',
      status: 'active',
      users: 892,
      bandwidth: '120 GB',
      uptime: 99.95,
      lastUpdated: '5 mins ago',
    },
    {
      id: '3',
      service: 'Security Edge',
      status: 'warning',
      users: 445,
      bandwidth: '45 GB',
      uptime: 98.5,
      lastUpdated: '1 min ago',
    },
    {
      id: '4',
      service: 'Cloud Backup',
      status: 'active',
      users: 234,
      bandwidth: '2.3 TB',
      uptime: 100,
      lastUpdated: '10 mins ago',
    },
    {
      id: '5',
      service: 'VPN Gateway',
      status: 'error',
      users: 67,
      bandwidth: '15 GB',
      uptime: 92.3,
      lastUpdated: 'Just now',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-[var(--ds-color-intent-success)]" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-[var(--ds-color-intent-warning)]" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-[var(--ds-color-intent-destructive)]" />;
      default:
        return <Clock className="h-4 w-4 text-[var(--ds-color-text-muted)]" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      active: 'success',
      warning: 'warning',
      error: 'destructive',
      inactive: 'secondary',
    };
    return variants[status] || 'secondary';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Business Dashboard</h1>
          <p className="text-[var(--ds-color-text-muted)]">
            Monitor your services and performance metrics
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[140px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleRefresh}
            disabled={refreshing}
          >
            <RefreshCcw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          </Button>
          <Button variant="secondary" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Custom Date Range */}
      {dateRange === 'custom' && (
        <Card>
          <CardHeader>
            <CardTitle>Custom Date Range</CardTitle>
            <CardDescription>Select a custom date range for your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <DatePicker
                  date={customStartDate}
                  onDateChange={(date) => setCustomStartDate(date)}
                  placeholder="Select start date"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <DatePicker
                  date={customEndDate}
                  onDateChange={(date) => setCustomEndDate(date)}
                  placeholder="Select end date"
                />
              </div>
            </div>
            <div className="mt-4">
              <Button variant="primary" size="sm">
                Apply Date Range
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Alert */}
      {serviceData.some(s => s.status === 'error') && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Service Alert:</strong> VPN Gateway is experiencing issues. Our team is investigating.
          </AlertDescription>
        </Alert>
      )}

      {/* Metrics Grid - Using SummaryCard Pattern */}
      <ResponsiveGrid mobileCols={1} tabletCols={2} desktopCols={4} gap="md">
        <SummaryCard
          title="Total Revenue"
          value="$48,532"
          description="Monthly recurring revenue"
          icon="money"
          trend={{ value: '+12.5%', direction: 'up' }}
          density="compact"
        />
        <SummaryCard
          title="Active Users"
          value="3,421"
          description="Currently active users"
          icon="users"
          trend={{ value: '-2.4%', direction: 'down' }}
          status="warning"
          statusLabel="Declined"
          density="compact"
        />
        <SummaryCard
          title="Network Uptime"
          value="99.9%"
          description="Last 30 days"
          icon="networkhealth"
          trend={{ value: '+0.1%', direction: 'up' }}
          status="success"
          statusLabel="Healthy"
          density="compact"
        />
        <SummaryCard
          title="Support Tickets"
          value="42"
          description="Open tickets"
          icon="chat"
          trend={{ value: '-15%', direction: 'down' }}
          status="success"
          statusLabel="Improving"
          density="compact"
        />
      </ResponsiveGrid>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Service Health</CardTitle>
                  <BarChartIcon className="h-4 w-4 text-[var(--ds-color-text-muted)]" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {serviceData.map(service => (
                  <div key={service.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(service.status)}
                      <span className="font-medium">{service.service}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-[var(--ds-color-text-muted)]">
                        {service.uptime}% uptime
                      </span>
                      <Badge variant={getStatusBadge(service.status)}>
                        {service.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Bandwidth Usage</CardTitle>
                  <PieChart className="h-4 w-4 text-[var(--ds-color-text-muted)]" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Used</span>
                    <span className="font-medium">3.23 TB / 5 TB</span>
                  </div>
                  <Progress value={64.6} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="space-y-2">
                    <p className="text-sm text-[var(--ds-color-text-muted)]">Peak Usage</p>
                    <p className="text-xl font-bold">892 Mbps</p>
                    <p className="text-xs text-[var(--ds-color-text-muted)]">Today at 2:30 PM</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-[var(--ds-color-text-muted)]">Average</p>
                    <p className="text-xl font-bold">456 Mbps</p>
                    <p className="text-xs text-[var(--ds-color-text-muted)]">Last 7 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Activity</CardTitle>
                <LineChart className="h-4 w-4 text-[var(--ds-color-text-muted)]" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-[var(--ds-color-intent-success)]" />
                    <div>
                      <p className="font-medium">Backup completed</p>
                      <p className="text-sm text-[var(--ds-color-text-muted)]">Cloud Backup - 2.3 TB transferred</p>
                    </div>
                  </div>
                  <span className="text-sm text-[var(--ds-color-text-muted)]">10 mins ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-4 w-4 text-[var(--ds-color-intent-warning)]" />
                    <div>
                      <p className="font-medium">High CPU usage detected</p>
                      <p className="text-sm text-[var(--ds-color-text-muted)]">Security Edge - 85% CPU utilization</p>
                    </div>
                  </div>
                  <span className="text-sm text-[var(--ds-color-text-muted)]">25 mins ago</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-[var(--ds-color-intent-primary)]" />
                    <div>
                      <p className="font-medium">New user onboarded</p>
                      <p className="text-sm text-[var(--ds-color-text-muted)]">john.smith@company.com added to Business Voice</p>
                    </div>
                  </div>
                  <span className="text-sm text-[var(--ds-color-text-muted)]">1 hour ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Services Tab */}
        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Service Management</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-[var(--ds-color-text-muted)]" />
                    <Input
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8 w-[200px]"
                    />
                  </div>
                  <Combobox
                    options={SERVICE_OPTIONS}
                    value={selectedService}
                    onValueChange={setSelectedService}
                    placeholder="Filter by service"
                    searchPlaceholder="Search services..."
                    width="w-[180px]"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Users</TableHead>
                    <TableHead className="text-center">Bandwidth</TableHead>
                    <TableHead className="text-center">Uptime</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serviceData
                    .filter(service => {
                      const matchesSearch = service.service.toLowerCase().includes(searchQuery.toLowerCase());
                      const matchesFilter = selectedService === 'all' || service.service.toLowerCase().includes(selectedService);
                      return matchesSearch && matchesFilter;
                    })
                    .map(service => (
                      <TableRow key={service.id}>
                        <TableCell className="font-medium">{service.service}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadge(service.status)}>
                            {service.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">{service.users.toLocaleString()}</TableCell>
                        <TableCell className="text-center">{service.bandwidth}</TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <span>{service.uptime}%</span>
                            {service.uptime < 99 && (
                              <AlertCircle className="h-3 w-3 text-[var(--ds-color-intent-warning)]" />
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-[var(--ds-color-text-muted)]">
                          {service.lastUpdated}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Manage</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Traffic Analytics</CardTitle>
                <CardDescription>Network traffic over the selected period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trafficData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-neutral-300)" />
                      <XAxis dataKey="time" stroke="var(--ds-color-text-muted)" fontSize={12} />
                      <YAxis stroke="var(--ds-color-text-muted)" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid var(--ds-color-neutral-300)',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="download"
                        stackId="1"
                        stroke="#0D62FF"
                        fill="#0D62FF"
                        fillOpacity={0.6}
                        name="Download (Mbps)"
                      />
                      <Area
                        type="monotone"
                        dataKey="upload"
                        stackId="1"
                        stroke="#4A89FF"
                        fill="#4A89FF"
                        fillOpacity={0.6}
                        name="Upload (Mbps)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Services</CardTitle>
                <CardDescription>By usage this period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Business Internet</span>
                      <span className="text-sm">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Cloud Backup</span>
                      <span className="text-sm">30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Business Voice</span>
                      <span className="text-sm">15%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Security Edge</span>
                      <span className="text-sm">7%</span>
                    </div>
                    <Progress value={7} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">VPN Gateway</span>
                      <span className="text-sm">3%</span>
                    </div>
                    <Progress value={3} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>User Activity</CardTitle>
                <CardDescription>Active users by service</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={userActivityData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-neutral-300)" />
                      <XAxis dataKey="service" stroke="var(--ds-color-text-muted)" fontSize={12} />
                      <YAxis stroke="var(--ds-color-text-muted)" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid var(--ds-color-neutral-300)',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Bar dataKey="users" fill="#0D62FF" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cost Distribution</CardTitle>
                <CardDescription>Monthly cost breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={costData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {costData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid var(--ds-color-neutral-300)',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                        formatter={(value, name, props) => [
                          `${value}%`,
                          `$${props.payload.cost}`
                        ]}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Reports Tab */}
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Generate Reports</CardTitle>
              <CardDescription>Create custom reports for your business needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="report-type">Report Type</Label>
                  <Select>
                    <SelectTrigger id="report-type">
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usage">Usage Report</SelectItem>
                      <SelectItem value="billing">Billing Summary</SelectItem>
                      <SelectItem value="performance">Performance Metrics</SelectItem>
                      <SelectItem value="security">Security Audit</SelectItem>
                      <SelectItem value="custom">Custom Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="report-period">Period</Label>
                  <Select>
                    <SelectTrigger id="report-period">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button variant="primary">
                Generate Report
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>Previously generated reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">November Usage Report</p>
                    <p className="text-sm text-[var(--ds-color-text-muted)]">Generated on Nov 1, 2024</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Q3 Performance Metrics</p>
                    <p className="text-sm text-[var(--ds-color-text-muted)]">Generated on Oct 15, 2024</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Security Audit Report</p>
                    <p className="text-sm text-[var(--ds-color-text-muted)]">Generated on Oct 1, 2024</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export const Default: Story = {
  render: () => <DashboardFlow />,
};