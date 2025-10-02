import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Alert,
  AlertDescription,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../src/components';
import { SummaryCard } from '../../src/components/patterns/SummaryCard';
import { ResponsiveGrid } from '../../src/components/patterns/ResponsiveLayout';
import { EmptyState } from '../../src/components/patterns/EmptyState';
import { BulkActionBar } from '../../src/components/patterns/BulkActionBar';
import { Plus, Settings, Trash2, RefreshCcw, AlertCircle, CheckCircle, Power } from 'lucide-react';

const meta: Meta = {
  title: 'Workflows/Service Management',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Service management interface for Comcast Business Portal. Showcases SummaryCard metrics, BulkActionBar for multi-service operations, EmptyState patterns, and service provisioning workflows.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

interface Service {
  id: string;
  name: string;
  type: 'internet' | 'voice' | 'security' | 'backup' | 'other';
  status: 'active' | 'provisioning' | 'suspended' | 'error';
  users: number;
  bandwidth?: string;
  uptime: number;
  location: string;
  monthlyPrice: number;
}

const ServiceManagementFlow = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const services: Service[] = [
    {
      id: 'svc-001',
      name: 'Business Internet 1 Gig',
      type: 'internet',
      status: 'active',
      users: 250,
      bandwidth: '1 Gbps',
      uptime: 99.99,
      location: 'Philadelphia, PA - Main Office',
      monthlyPrice: 149.99,
    },
    {
      id: 'svc-002',
      name: 'Business Voice Pro',
      type: 'voice',
      status: 'active',
      users: 150,
      uptime: 99.95,
      location: 'Philadelphia, PA - Main Office',
      monthlyPrice: 299.99,
    },
    {
      id: 'svc-003',
      name: 'Security Edge Plus',
      type: 'security',
      status: 'active',
      users: 250,
      uptime: 100,
      location: 'Philadelphia, PA - Main Office',
      monthlyPrice: 89.99,
    },
    {
      id: 'svc-004',
      name: 'Business Internet 500',
      type: 'internet',
      status: 'active',
      users: 50,
      bandwidth: '500 Mbps',
      uptime: 99.98,
      location: 'King of Prussia, PA - Branch Office',
      monthlyPrice: 99.99,
    },
    {
      id: 'svc-005',
      name: 'Cloud Backup Pro',
      type: 'backup',
      status: 'provisioning',
      users: 100,
      uptime: 100,
      location: 'Philadelphia, PA - Main Office',
      monthlyPrice: 149.99,
    },
  ];

  // Calculate metrics
  const activeServices = services.filter(s => s.status === 'active').length;
  const totalUsers = services.reduce((sum, s) => sum + s.users, 0);
  const averageUptime = services.reduce((sum, s) => sum + s.uptime, 0) / services.length;
  const monthlyTotal = services.reduce((sum, s) => sum + s.monthlyPrice, 0);

  const getStatusConfig = (status: Service['status']) => {
    const configs = {
      active: { variant: 'success' as const, label: 'Active', icon: CheckCircle },
      provisioning: { variant: 'warning' as const, label: 'Provisioning', icon: RefreshCcw },
      suspended: { variant: 'secondary' as const, label: 'Suspended', icon: Power },
      error: { variant: 'destructive' as const, label: 'Error', icon: AlertCircle },
    };
    return configs[status];
  };

  const getTypeLabel = (type: Service['type']) => {
    const labels = {
      internet: 'Internet',
      voice: 'Voice',
      security: 'Security',
      backup: 'Backup',
      other: 'Other',
    };
    return labels[type];
  };

  const filteredServices = services.filter(service => {
    const matchesType = filterType === 'all' || service.type === filterType;
    const matchesStatus = filterStatus === 'all' || service.status === filterStatus;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  const handleSelectService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedServices.length === filteredServices.length) {
      setSelectedServices([]);
    } else {
      setSelectedServices(filteredServices.map(s => s.id));
    }
  };

  const handleBulkAction = (action: string) => {
    alert(`Performing ${action} on ${selectedServices.length} services`);
    setSelectedServices([]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Service Management</h1>
          <p className="text-[var(--ds-color-text-muted)]">
            Manage your Comcast Business services and subscriptions
          </p>
        </div>
        <Button variant="primary">
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      {/* Service Metrics */}
      <ResponsiveGrid mobileCols={1} tabletCols={2} desktopCols={4} gap="md">
        <SummaryCard
          title="Active Services"
          value={activeServices.toString()}
          description="Currently running"
          icon="cloud"
          status="success"
          statusLabel="Operational"
          density="comfortable"
        />
        <SummaryCard
          title="Total Users"
          value={totalUsers.toLocaleString()}
          description="Across all services"
          icon="users"
          density="comfortable"
        />
        <SummaryCard
          title="Average Uptime"
          value={`${averageUptime.toFixed(2)}%`}
          description="Last 30 days"
          icon="networkhealth"
          status={averageUptime >= 99.9 ? 'success' : 'warning'}
          statusLabel={averageUptime >= 99.9 ? 'Excellent' : 'Good'}
          density="comfortable"
        />
        <SummaryCard
          title="Monthly Cost"
          value={`$${monthlyTotal.toFixed(2)}`}
          description="Total monthly charges"
          icon="money"
          trend={{ value: '+12%', direction: 'up' }}
          density="comfortable"
        />
      </ResponsiveGrid>

      {/* Provisioning Alert */}
      {services.some(s => s.status === 'provisioning') && (
        <Alert>
          <RefreshCcw className="h-4 w-4" />
          <AlertDescription>
            <strong>Services Provisioning:</strong> Cloud Backup Pro is being configured and will be available within 24 hours.
          </AlertDescription>
        </Alert>
      )}

      {/* Bulk Action Bar */}
      {selectedServices.length > 0 && (
        <BulkActionBar
          selectedCount={selectedServices.length}
          onClearSelection={() => setSelectedServices([])}
          actions={[
            {
              label: 'Restart',
              onClick: () => handleBulkAction('restart'),
              variant: 'secondary',
              icon: <RefreshCcw className="h-4 w-4" />,
            },
            {
              label: 'Configure',
              onClick: () => handleBulkAction('configure'),
              variant: 'secondary',
              icon: <Settings className="h-4 w-4" />,
            },
            {
              label: 'Suspend',
              onClick: () => handleBulkAction('suspend'),
              variant: 'destructive',
              icon: <Power className="h-4 w-4" />,
              confirmMessage: 'Are you sure you want to suspend these services?',
            },
          ]}
        />
      )}

      {/* Service Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Your Services</CardTitle>
              <CardDescription>
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="sm:w-[200px]"
              />
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="sm:w-[150px]">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="internet">Internet</SelectItem>
                  <SelectItem value="voice">Voice</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                  <SelectItem value="backup">Backup</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="sm:w-[150px]">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="provisioning">Provisioning</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {filteredServices.length === 0 ? (
            <EmptyState
              icon="cloud"
              title="No services found"
              description="Try adjusting your filters or add a new service to get started."
              action={{
                label: 'Add Service',
                onClick: () => alert('Navigate to add service page'),
              }}
            />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <input
                      type="checkbox"
                      checked={selectedServices.length === filteredServices.length}
                      onChange={handleSelectAll}
                      className="rounded border-[var(--ds-color-neutral-400)]"
                    />
                  </TableHead>
                  <TableHead>Service Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-center">Users</TableHead>
                  <TableHead className="text-center">Uptime</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">Monthly</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.map((service) => {
                  const statusConfig = getStatusConfig(service.status);
                  const StatusIcon = statusConfig.icon;
                  return (
                    <TableRow key={service.id}>
                      <TableCell>
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service.id)}
                          onChange={() => handleSelectService(service.id)}
                          className="rounded border-[var(--ds-color-neutral-400)]"
                        />
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{service.name}</p>
                          {service.bandwidth && (
                            <p className="text-sm text-[var(--ds-color-text-muted)]">
                              {service.bandwidth}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{getTypeLabel(service.type)}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={statusConfig.variant}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {statusConfig.label}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">{service.users}</TableCell>
                      <TableCell className="text-center">
                        <span className={service.uptime >= 99.9 ? 'text-[var(--ds-color-intent-success)]' : ''}>
                          {service.uptime}%
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-[var(--ds-color-text-muted)]">
                        {service.location}
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        ${service.monthlyPrice.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Manage
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export const Default: Story = {
  render: () => <ServiceManagementFlow />,
};
