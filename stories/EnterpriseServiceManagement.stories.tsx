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
import { Combobox } from '../src/components/ui/combobox';
import { DatePicker } from '../src/components/ui/date-picker';
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
import { Switch } from '../src/components/ui/switch';
import { Progress } from '../src/components/ui/progress';
import {
  Alert,
  AlertDescription,
} from '../src/components/ui/alert';
import { Separator } from '../src/components/ui/separator';
import {
  Avatar,
  AvatarFallback,
} from '../src/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../src/components/ui/dialog';
import { Textarea } from '../src/components/ui/textarea';
import { Label } from '../src/components/ui/label';
import { Icon } from '../packages/icons/src/Icon';
import { SummaryCard } from '../src/components/patterns/SummaryCard';
import { ResponsiveGrid } from '../src/components/patterns/ResponsiveLayout';
import { BulkActionBar } from '../src/components/patterns/BulkActionBar';
import { RefreshCcw, Settings as SettingsIcon, Power } from 'lucide-react';

const meta: Meta = {
  title: 'Enterprise/Service Management',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Enterprise service management interface for Comcast Business Portal. Showcases SummaryCard metrics, BulkActionBar for service operations, status monitoring, incident management, and service controls with pattern components.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const serviceData = [
  { id: "SVC-001", name: "Primary Internet - Fiber", location: "New York HQ", type: "Internet", status: "Active", uptime: 99.97, bandwidth: "1 Gbps", lastChecked: "2 mins ago" },
  { id: "SVC-002", name: "Business Phone System", location: "New York HQ", type: "Phone", status: "Active", uptime: 99.95, bandwidth: "Unlimited", lastChecked: "5 mins ago" },
  { id: "SVC-003", name: "Security System", location: "New York HQ", type: "Security", status: "Active", uptime: 100, bandwidth: "24/7 Monitoring", lastChecked: "1 min ago" },
  { id: "SVC-004", name: "Enterprise TV Package", location: "New York HQ", type: "TV", status: "Maintenance", uptime: 98.8, bandwidth: "100+ Channels", lastChecked: "10 mins ago" },
  { id: "SVC-005", name: "Branch Internet - Ethernet", location: "Chicago Office", type: "Internet", status: "Active", uptime: 99.5, bandwidth: "500 Mbps", lastChecked: "3 mins ago" },
  { id: "SVC-006", name: "Backup Internet - Wireless", location: "Dallas Branch", type: "Internet", status: "Warning", uptime: 97.2, bandwidth: "100 Mbps", lastChecked: "15 mins ago" },
  { id: "SVC-007", name: "Conference Room Phone", location: "Seattle Office", type: "Phone", status: "Inactive", uptime: 0, bandwidth: "Disabled", lastChecked: "2 hours ago" },
  { id: "SVC-008", name: "Guest WiFi Network", location: "Miami Branch", type: "Internet", status: "Active", uptime: 94.5, bandwidth: "50 Mbps", lastChecked: "8 mins ago" },
];

const incidentData = [
  { id: "INC-001", title: "Intermittent connection drops", service: "SVC-006", severity: "Medium", status: "Open", reported: "2024-01-15 14:30", assignee: "John Smith" },
  { id: "INC-002", title: "Phone system upgrade", service: "SVC-007", severity: "Low", status: "Scheduled", reported: "2024-01-14 09:15", assignee: "Sarah Johnson" },
  { id: "INC-003", title: "Security camera offline", service: "SVC-003", severity: "High", status: "In Progress", reported: "2024-01-15 16:45", assignee: "Mike Chen" },
  { id: "INC-004", title: "Bandwidth optimization", service: "SVC-005", severity: "Low", status: "Resolved", reported: "2024-01-13 11:20", assignee: "Lisa Anderson" },
];

const maintenanceData = [
  { id: "MNT-001", title: "Fiber optic cable upgrade", services: ["SVC-001", "SVC-005"], scheduled: "2024-01-20 02:00", duration: "4 hours", status: "Scheduled", impact: "Service interruption expected" },
  { id: "MNT-002", title: "Phone system software update", services: ["SVC-002"], scheduled: "2024-01-18 23:00", duration: "1 hour", status: "Approved", impact: "Minimal disruption" },
  { id: "MNT-003", title: "Security system calibration", services: ["SVC-003"], scheduled: "2024-01-25 01:00", duration: "2 hours", status: "Pending", impact: "No service interruption" },
];

export const EnterpriseServiceManagementInterface: Story = {
  render: () => {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [serviceFilter, setServiceFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredServices = serviceData.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = serviceFilter === 'all' || service.type === serviceFilter;
      const matchesStatus = statusFilter === 'all' || service.status === statusFilter;
      return matchesSearch && matchesType && matchesStatus;
    });

    const toggleServiceSelection = (serviceId: string) => {
      setSelectedServices(prev => 
        prev.includes(serviceId) 
          ? prev.filter(id => id !== serviceId)
          : [...prev, serviceId]
      );
    };

    const toggleSelectAll = () => {
      setSelectedServices(
        selectedServices.length === filteredServices.length 
          ? [] 
          : filteredServices.map(service => service.id)
      );
    };

    const getStatusBadge = (status: string) => {
      switch (status) {
        case 'Active':
          return <Badge variant="success" leadingIcon={<Icon name="check" size={14} />}>Active</Badge>;
        case 'Maintenance':
          return <Badge variant="warning" leadingIcon={<Icon name="configure" size={14} />}>Maintenance</Badge>;
        case 'Warning':
          return <Badge variant="warning" leadingIcon={<Icon name="alert" size={14} />}>Warning</Badge>;
        case 'Inactive':
          return <Badge variant="secondary">Inactive</Badge>;
        case 'Critical':
          return <Badge variant="destructive" leadingIcon={<Icon name="alert" size={14} />}>Critical</Badge>;
        default:
          return <Badge variant="outline">{status}</Badge>;
      }
    };

    const getSeverityBadge = (severity: string) => {
      switch (severity) {
        case 'High':
          return <Badge variant="destructive" leadingIcon={<Icon name="alert" size={14} />}>High</Badge>;
        case 'Medium':
          return <Badge variant="warning" leadingIcon={<Icon name="alert" size={14} />}>Medium</Badge>;
        case 'Low':
          return <Badge variant="info" leadingIcon={<Icon name="alert" size={14} />}>Low</Badge>;
        default:
          return <Badge variant="outline">{severity}</Badge>;
      }
    };

    const getIncidentStatusBadge = (status: string) => {
      switch (status) {
        case 'Open':
          return <Badge variant="destructive" leadingIcon={<Icon name="alert" size={14} />}>Open</Badge>;
        case 'In Progress':
          return <Badge variant="info" leadingIcon={<Icon name="configure" size={14} />}>In Progress</Badge>;
        case 'Scheduled':
          return <Badge variant="secondary" leadingIcon={<Icon name="configure" size={14} />}>Scheduled</Badge>;
        case 'Resolved':
          return <Badge variant="success" leadingIcon={<Icon name="check" size={14} />}>Resolved</Badge>;
        default:
          return <Badge variant="outline">{status}</Badge>;
      }
    };

    const activeServices = serviceData.filter(s => s.status === 'Active').length;
    const warningServices = serviceData.filter(s => s.status === 'Warning').length;
    const maintenanceServices = serviceData.filter(s => s.status === 'Maintenance').length;
    const avgUptime = serviceData.reduce((acc, s) => acc + s.uptime, 0) / serviceData.length;

    return (
      <div className="min-h-screen bg-[var(--ds-color-bg-surface)]">
        {/* Header */}
        <header className="bg-[var(--ds-color-bg-canvas)] border-b border-[var(--ds-color-neutral-300)] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-primary font-semibold text-xl text-[var(--ds-color-text-primary)]">Service Management</h1>
              <p className="text-sm text-[var(--ds-color-text-muted)]">Monitor and manage all enterprise services</p>
            </div>
            <div className="flex items-center gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Report Issue</Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Report Service Issue</DialogTitle>
                    <DialogDescription>
                      Submit a new incident or service request.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Affected Service</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceData.map(service => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.name} - {service.location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="severity">Severity</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea placeholder="Describe the issue..." />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Submit Report</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button>Schedule Maintenance</Button>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Service Overview - Using SummaryCard Pattern */}
          <ResponsiveGrid mobileCols={1} tabletCols={2} desktopCols={4} gap="md">
            <SummaryCard
              title="Active Services"
              value={activeServices.toString()}
              description="Running normally"
              icon="cloud"
              status="success"
              statusLabel="Healthy"
              density="comfortable"
            />
            <SummaryCard
              title="Warning Services"
              value={warningServices.toString()}
              description="Require attention"
              icon="alert"
              status="warning"
              statusLabel="Issues"
              density="comfortable"
            />
            <SummaryCard
              title="In Maintenance"
              value={maintenanceServices.toString()}
              description="Scheduled work"
              icon="configure"
              status="info"
              statusLabel="Scheduled"
              density="comfortable"
            />
            <SummaryCard
              title="Avg. Uptime"
              value={`${avgUptime.toFixed(1)}%`}
              description="Last 30 days"
              icon="networkhealth"
              status="success"
              statusLabel="Excellent"
              density="comfortable"
            />
          </ResponsiveGrid>

          {/* Active Alerts */}
          <div className="space-y-4">
            <Alert>
              <AlertDescription className="flex items-center justify-between">
                <span>
                  <strong>Service Warning:</strong> Backup Internet - Wireless (Dallas Branch) experiencing intermittent connectivity issues.
                </span>
                <Button size="sm" variant="outline">View Details</Button>
              </AlertDescription>
            </Alert>

            <Alert className="border-blue-200 bg-blue-50">
              <AlertDescription className="flex items-center justify-between">
                <span className="text-blue-800">
                  <strong>Scheduled Maintenance:</strong> Phone system software update planned for Jan 18, 2024 at 11:00 PM EST (1 hour duration).
                </span>
                <Button size="sm" variant="outline">Reschedule</Button>
              </AlertDescription>
            </Alert>
          </div>

          {/* Services Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Service Status</CardTitle>
                  <CardDescription>Real-time status of all enterprise services</CardDescription>
                </div>
                {selectedServices.length > 0 && (
                  <Badge variant="info">
                    {selectedServices.length} selected
                  </Badge>
                )}
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search services by name, location, or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={serviceFilter} onValueChange={setServiceFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Internet">Internet</SelectItem>
                      <SelectItem value="Phone">Phone</SelectItem>
                      <SelectItem value="TV">TV</SelectItem>
                      <SelectItem value="Security">Security</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Warning">Warning</SelectItem>
                      <SelectItem value="Maintenance">Maintenance</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Bulk Actions - Using BulkActionBar Pattern */}
              {selectedServices.length > 0 && (
                <BulkActionBar
                  selectedCount={selectedServices.length}
                  onClearSelection={() => setSelectedServices([])}
                  actions={[
                    {
                      label: 'Restart Services',
                      onClick: () => alert(`Restarting ${selectedServices.length} services`),
                      variant: 'secondary',
                      icon: <RefreshCcw className="h-4 w-4" />,
                    },
                    {
                      label: 'Run Diagnostics',
                      onClick: () => alert(`Running diagnostics on ${selectedServices.length} services`),
                      variant: 'secondary',
                      icon: <SettingsIcon className="h-4 w-4" />,
                    },
                    {
                      label: 'Schedule Maintenance',
                      onClick: () => alert(`Scheduling maintenance for ${selectedServices.length} services`),
                      variant: 'primary',
                    },
                  ]}
                />
              )}
            </CardHeader>

            <CardContent>
              <div className="rounded-lg border border-[var(--ds-color-neutral-300)] bg-[var(--ds-color-bg-canvas)]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox
                          checked={selectedServices.length === filteredServices.length && filteredServices.length > 0}
                          onCheckedChange={toggleSelectAll}
                        />
                      </TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Uptime</TableHead>
                      <TableHead>Capacity</TableHead>
                      <TableHead>Last Checked</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredServices.map((service) => (
                      <TableRow key={service.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedServices.includes(service.id)}
                            onCheckedChange={() => toggleServiceSelection(service.id)}
                          />
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium text-[var(--ds-color-text-primary)]">{service.name}</div>
                            <div className="text-sm text-[var(--ds-color-text-muted)]">{service.id}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-[var(--ds-color-text-primary)]">{service.location}</span>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{service.type}</Badge>
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(service.status)}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{service.uptime}%</span>
                            <Progress value={service.uptime} className="h-1 w-16" />
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-[var(--ds-color-text-primary)]">{service.bandwidth}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-[var(--ds-color-text-muted)]">{service.lastChecked}</span>
                        </TableCell>
                        <TableCell>
                          <Menu>
                            <MenuTrigger asChild>
                              <Button variant="ghost" size="sm"><Icon name="contextmenu" size={16} /></Button>
                            </MenuTrigger>
                            <MenuContent align="end">
                              <MenuItem>View Details</MenuItem>
                              <MenuItem>Run Diagnostics</MenuItem>
                              <MenuItem>View Logs</MenuItem>
                              <MenuSeparator />
                              <MenuItem>Restart Service</MenuItem>
                              <MenuItem>Schedule Maintenance</MenuItem>
                              <MenuSeparator />
                              <MenuItem>Configure Settings</MenuItem>
                              {service.status === 'Active' ? (
                                <MenuItem className="text-red-600">Disable Service</MenuItem>
                              ) : (
                                <MenuItem className="text-green-600">Enable Service</MenuItem>
                              )}
                            </MenuContent>
                          </Menu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Incidents and Maintenance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Incidents */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Incidents</CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <CardDescription>Active and recent service incidents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {incidentData.map((incident) => (
                    <div key={incident.id} className="border border-[var(--ds-color-neutral-300)] rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium text-[var(--ds-color-text-primary)]">{incident.title}</p>
                          <p className="text-sm text-[var(--ds-color-text-muted)]">{incident.id} • {incident.service}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getSeverityBadge(incident.severity)}
                          {getIncidentStatusBadge(incident.status)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-[var(--ds-color-text-muted)]">
                        <span>Assigned to: {incident.assignee}</span>
                        <span>{incident.reported}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Scheduled Maintenance */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Scheduled Maintenance</CardTitle>
                  <Button variant="outline" size="sm">Schedule New</Button>
                </div>
                <CardDescription>Upcoming maintenance windows</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {maintenanceData.map((maintenance) => (
                    <div key={maintenance.id} className="border border-[var(--ds-color-neutral-300)] rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium text-[var(--ds-color-text-primary)]">{maintenance.title}</p>
                          <p className="text-sm text-[var(--ds-color-text-muted)]">{maintenance.id} • {maintenance.services.join(', ')}</p>
                        </div>
                        <Badge
                          variant={
                            maintenance.status === 'Scheduled'
                              ? "info"
                              : maintenance.status === 'Approved'
                              ? "success"
                              : "warning"
                          }
                        >
                          {maintenance.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-[var(--ds-color-text-muted)]">
                        <div className="flex items-center gap-1"><Icon name="configure" size={14} />{maintenance.scheduled} ({maintenance.duration})</div>
                        <div className="flex items-center gap-1"><Icon name="alert" size={14} />{maintenance.impact}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  },
};