import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ResponsiveGrid,
  ResponsiveTable,
  ResponsiveNavigation,
  StickyHeader,
  useBreakpoint,
  useMediaQuery,
} from '../../src/components/patterns/ResponsiveLayout';
import { Button } from '../../src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../src/components/ui/card';
import { Badge } from '../../src/components/ui/badge';
import { Icon } from '../../src/components/Icon';

const meta: Meta = {
  title: 'Patterns/Responsive Layout',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Responsive utility components for building layouts that adapt to different screen sizes. Includes containers, grids, tables, navigation, and sticky headers.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for demos
const sampleProducts = [
  { id: 1, name: 'Business Internet 500', status: 'Active', monthly: '$99.99', bandwidth: '500 Mbps', users: 25 },
  { id: 2, name: 'Cloud PBX Plus', status: 'Active', monthly: '$299.99', bandwidth: 'N/A', users: 100 },
  { id: 3, name: 'SD-WAN Enterprise', status: 'Pending', monthly: '$499.99', bandwidth: '1 Gbps', users: 50 },
  { id: 4, name: 'Managed WiFi', status: 'Active', monthly: '$149.99', bandwidth: 'N/A', users: 75 },
  { id: 5, name: 'Business Voice', status: 'Active', monthly: '$79.99', bandwidth: 'N/A', users: 15 },
];

// ============================================================================
// RESPONSIVE CONTAINER
// ============================================================================

export const ContainerSizes: Story = {
  args: {},
  render: () => (
    <div className="p-6 space-y-6 bg-[var(--ds-color-neutral-50)]">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--ds-color-text-primary)]">Responsive Containers</h2>
        <p className="text-sm text-[var(--ds-color-text-secondary)]">
          Resize your browser to see how containers adapt with responsive padding.
        </p>
      </div>

      <ResponsiveContainer maxWidth="sm" className="bg-white p-6 rounded-lg border border-[var(--ds-color-neutral-300)]">
        <h3 className="font-semibold mb-2">Small Container (640px)</h3>
        <p className="text-sm text-[var(--ds-color-text-secondary)]">Ideal for focused forms and modals</p>
      </ResponsiveContainer>

      <ResponsiveContainer maxWidth="md" className="bg-white p-6 rounded-lg border border-[var(--ds-color-neutral-300)]">
        <h3 className="font-semibold mb-2">Medium Container (768px)</h3>
        <p className="text-sm text-[var(--ds-color-text-secondary)]">Good for content pages and dashboards</p>
      </ResponsiveContainer>

      <ResponsiveContainer maxWidth="lg" className="bg-white p-6 rounded-lg border border-[var(--ds-color-neutral-300)]">
        <h3 className="font-semibold mb-2">Large Container (1024px)</h3>
        <p className="text-sm text-[var(--ds-color-text-secondary)]">Ideal for data-heavy layouts</p>
      </ResponsiveContainer>

      <ResponsiveContainer maxWidth="xl" className="bg-white p-6 rounded-lg border border-[var(--ds-color-neutral-300)]">
        <h3 className="font-semibold mb-2">Extra Large Container (1280px)</h3>
        <p className="text-sm text-[var(--ds-color-text-secondary)]">Maximum width for wide displays</p>
      </ResponsiveContainer>
    </div>
  ),
};

// ============================================================================
// RESPONSIVE GRID
// ============================================================================

export const ResponsiveGridLayout: Story = {
  args: {},
  render: () => (
    <div className="p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--ds-color-text-primary)]">Responsive Grid</h2>
        <p className="text-sm text-[var(--ds-color-text-secondary)]">
          Grid automatically adjusts columns: 1 on mobile, 2 on tablet, 3 on desktop
        </p>
      </div>

      <ResponsiveContainer maxWidth="xl">
        <ResponsiveGrid mobileCols={1} tabletCols={2} desktopCols={3} gap="md">
          {Array.from({ length: 6 }, (_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Service {i + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--ds-color-text-secondary)]">
                  Grid item that adapts to screen size
                </p>
              </CardContent>
            </Card>
          ))}
        </ResponsiveGrid>
      </ResponsiveContainer>

      <div className="mt-12 space-y-4">
        <h3 className="text-lg font-semibold text-[var(--ds-color-text-primary)]">Wide Grid (4 columns)</h3>
        <ResponsiveContainer maxWidth="2xl">
          <ResponsiveGrid mobileCols={1} tabletCols={2} desktopCols={4} gap="lg">
            {Array.from({ length: 8 }, (_, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-center gap-3">
                  <Icon name="bar-chart" size={24} className="text-[var(--ds-color-blue-600)]" />
                  <div>
                    <p className="font-semibold text-sm">Metric {i + 1}</p>
                    <p className="text-xs text-[var(--ds-color-text-secondary)]">$1,234</p>
                  </div>
                </div>
              </Card>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </div>
    </div>
  ),
};

// ============================================================================
// RESPONSIVE TABLE
// ============================================================================

export const ResponsiveTableView: Story = {
  args: {},
  render: () => {
    const columns = [
      {
        key: 'name',
        header: 'Service Name',
        accessor: (row: typeof sampleProducts[0]) => row.name,
        showOnMobile: true,
        mobileLabel: 'Service',
      },
      {
        key: 'status',
        header: 'Status',
        accessor: (row: typeof sampleProducts[0]) => (
          <Badge variant={row.status === 'Active' ? 'default' : 'secondary'}>{row.status}</Badge>
        ),
        showOnMobile: true,
      },
      {
        key: 'monthly',
        header: 'Monthly Cost',
        accessor: (row: typeof sampleProducts[0]) => row.monthly,
        showOnMobile: true,
        mobileLabel: 'Cost',
      },
      {
        key: 'bandwidth',
        header: 'Bandwidth',
        accessor: (row: typeof sampleProducts[0]) => row.bandwidth,
        showOnMobile: false,
      },
      {
        key: 'users',
        header: 'Users',
        accessor: (row: typeof sampleProducts[0]) => row.users,
        showOnMobile: false,
      },
    ];

    return (
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[var(--ds-color-text-primary)]">Responsive Table</h2>
          <p className="text-sm text-[var(--ds-color-text-secondary)]">
            Table transforms to cards on mobile. Resize to see the transformation.
          </p>
        </div>

        <ResponsiveContainer maxWidth="xl">
          <ResponsiveTable columns={columns} data={sampleProducts} mobileBreakpoint="md" />
        </ResponsiveContainer>
      </div>
    );
  },
};

// ============================================================================
// RESPONSIVE NAVIGATION
// ============================================================================

export const NavigationTabs: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState('services');

    const navItems = [
      { id: 'services', label: 'Services', icon: 'grid' as const, active: activeTab === 'services', onClick: () => setActiveTab('services') },
      { id: 'billing', label: 'Billing', icon: 'credit-card' as const, active: activeTab === 'billing', onClick: () => setActiveTab('billing') },
      { id: 'reports', label: 'Reports', icon: 'bar-chart' as const, active: activeTab === 'reports', onClick: () => setActiveTab('reports') },
      { id: 'settings', label: 'Settings', icon: 'configure' as const, active: activeTab === 'settings', onClick: () => setActiveTab('settings') },
      { id: 'support', label: 'Support', icon: 'help-circle' as const, active: activeTab === 'support', onClick: () => setActiveTab('support') },
    ];

    return (
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[var(--ds-color-text-primary)]">Responsive Navigation</h2>
          <p className="text-sm text-[var(--ds-color-text-secondary)]">
            Tabs on desktop, dropdown on mobile. Try resizing your browser.
          </p>
        </div>

        <ResponsiveContainer maxWidth="xl">
          <Card>
            <CardContent className="p-0">
              <ResponsiveNavigation items={navItems} mobileBreakpoint="md" dropdownLabel="Navigation" />

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {navItems.find((item) => item.active)?.label} Content
                </h3>
                <p className="text-sm text-[var(--ds-color-text-secondary)]">
                  This is the content for the {activeTab} tab. The navigation automatically transforms
                  between tabs and a dropdown based on screen size.
                </p>
              </div>
            </CardContent>
          </Card>
        </ResponsiveContainer>
      </div>
    );
  },
};

// ============================================================================
// STICKY HEADER
// ============================================================================

export const StickyHeaderExample: Story = {
  args: {},
  render: () => (
    <div className="h-screen overflow-auto">
      <ResponsiveContainer maxWidth="xl" className="py-6">
        <div className="space-y-4 mb-6">
          <h2 className="text-xl font-bold text-[var(--ds-color-text-primary)]">Sticky Header</h2>
          <p className="text-sm text-[var(--ds-color-text-secondary)]">
            Scroll down to see the header stick to the top with a shadow
          </p>
        </div>

        <StickyHeader showShadow zIndex={50} offsetTop={0}>
          <div className="bg-white border-b border-[var(--ds-color-neutral-300)] px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Icon name="menu" size={24} />
                <h1 className="text-lg font-semibold">Enterprise Dashboard</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Icon name="bell" size={16} className="mr-2" />
                  Notifications
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="users" size={16} className="mr-2" />
                  Profile
                </Button>
              </div>
            </div>
          </div>
        </StickyHeader>

        <div className="space-y-6 mt-6">
          {Array.from({ length: 20 }, (_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Section {i + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--ds-color-text-secondary)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Scroll to see the sticky header
                  behavior with shadow effect.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ResponsiveContainer>
    </div>
  ),
};

// ============================================================================
// COMPREHENSIVE DASHBOARD
// ============================================================================

export const CompleteDashboard: Story = {
  args: {},
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    const breakpoint = useBreakpoint();
    const isMobile = useMediaQuery('(max-width: 768px)');

    const navItems = [
      { id: 'overview', label: 'Overview', icon: 'grid' as const, active: activeTab === 'overview', onClick: () => setActiveTab('overview') },
      { id: 'services', label: 'Services', icon: 'cloud' as const, active: activeTab === 'services', onClick: () => setActiveTab('services') },
      { id: 'analytics', label: 'Analytics', icon: 'bar-chart' as const, active: activeTab === 'analytics', onClick: () => setActiveTab('analytics') },
      { id: 'billing', label: 'Billing', icon: 'credit-card' as const, active: activeTab === 'billing', onClick: () => setActiveTab('billing') },
    ];

    const tableColumns = [
      {
        key: 'name',
        header: 'Service',
        accessor: (row: typeof sampleProducts[0]) => (
          <div>
            <p className="font-medium">{row.name}</p>
            <p className="text-xs text-[var(--ds-color-text-tertiary)]">ID: {row.id}</p>
          </div>
        ),
        showOnMobile: true,
      },
      {
        key: 'status',
        header: 'Status',
        accessor: (row: typeof sampleProducts[0]) => (
          <Badge variant={row.status === 'Active' ? 'default' : 'secondary'}>{row.status}</Badge>
        ),
        showOnMobile: true,
      },
      {
        key: 'monthly',
        header: 'Cost',
        accessor: (row: typeof sampleProducts[0]) => (
          <span className="font-mono text-sm">{row.monthly}</span>
        ),
        showOnMobile: true,
      },
      {
        key: 'users',
        header: 'Users',
        accessor: (row: typeof sampleProducts[0]) => row.users,
        showOnMobile: false,
      },
    ];

    return (
      <div className="min-h-screen bg-[var(--ds-color-neutral-50)]">
        <StickyHeader showShadow zIndex={50}>
          <div className="bg-white border-b border-[var(--ds-color-neutral-300)]">
            <ResponsiveContainer maxWidth="2xl">
              <div className="py-4">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-xl font-bold">Enterprise Portal</h1>
                  <Badge variant="outline">
                    {breakpoint === 'mobile' ? 'Mobile' : breakpoint === 'tablet' ? 'Tablet' : 'Desktop'}
                  </Badge>
                </div>
                <ResponsiveNavigation items={navItems} mobileBreakpoint="md" />
              </div>
            </ResponsiveContainer>
          </div>
        </StickyHeader>

        <ResponsiveContainer maxWidth="2xl" className="py-6">
          {/* Stats Grid */}
          <ResponsiveGrid mobileCols={1} tabletCols={2} desktopCols={4} gap="md" className="mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--ds-color-text-secondary)]">Active Services</p>
                    <p className="text-2xl font-bold mt-1">12</p>
                  </div>
                  <Icon name="cloud" size={32} className="text-[var(--ds-color-blue-600)]" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--ds-color-text-secondary)]">Monthly Cost</p>
                    <p className="text-2xl font-bold mt-1">$1,899</p>
                  </div>
                  <Icon name="credit-card" size={32} className="text-[var(--ds-color-success-600)]" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--ds-color-text-secondary)]">Total Users</p>
                    <p className="text-2xl font-bold mt-1">340</p>
                  </div>
                  <Icon name="users" size={32} className="text-[var(--ds-color-warning-600)]" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--ds-color-text-secondary)]">Uptime</p>
                    <p className="text-2xl font-bold mt-1">99.9%</p>
                  </div>
                  <Icon name="check" size={32} className="text-[var(--ds-color-success-600)]" />
                </div>
              </CardContent>
            </Card>
          </ResponsiveGrid>

          {/* Services Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Your Services</CardTitle>
                <Button variant="outline" size="sm">
                  <Icon name="plus" size={16} className="mr-2" />
                  {isMobile ? 'Add' : 'Add Service'}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveTable columns={tableColumns} data={sampleProducts} mobileBreakpoint="md" />
            </CardContent>
          </Card>
        </ResponsiveContainer>
      </div>
    );
  },
};
