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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Alert,
  AlertDescription,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Label,
} from '../../src/components';
import { SummaryCard } from '../../src/components/patterns/SummaryCard';
import { ResponsiveGrid } from '../../src/components/patterns/ResponsiveLayout';
import { KeyValuePair } from '../../src/components/patterns/KeyValuePair';
import { Download, CreditCard, AlertCircle, Check, Calendar, DollarSign } from 'lucide-react';

const meta: Meta = {
  title: 'Workflows/Billing Management',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comprehensive billing management interface for Comcast Business customers. Showcases SummaryCard metrics, KeyValuePair data display, responsive tables, and payment workflows.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

interface Invoice {
  id: string;
  date: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  services: string[];
}

const BillingManagementFlow = () => {
  const [billingPeriod, setBillingPeriod] = useState('current');
  const [autopayEnabled, setAutopayEnabled] = useState(true);
  const [paperlessEnabled, setPaperlessEnabled] = useState(true);

  // Sample billing data
  const currentBalance = 1247.89;
  const nextBillDate = 'Dec 15, 2024';
  const lastPayment = { amount: 1189.45, date: 'Nov 15, 2024' };
  const averageMonthly = 1205.67;

  const invoices: Invoice[] = [
    {
      id: 'INV-2024-11',
      date: 'Nov 1, 2024',
      dueDate: 'Nov 15, 2024',
      amount: 1189.45,
      status: 'paid',
      services: ['Business Internet 1 Gig', 'Business Voice', 'Security Edge'],
    },
    {
      id: 'INV-2024-10',
      date: 'Oct 1, 2024',
      dueDate: 'Oct 15, 2024',
      amount: 1247.89,
      status: 'paid',
      services: ['Business Internet 1 Gig', 'Business Voice', 'Security Edge'],
    },
    {
      id: 'INV-2024-09',
      date: 'Sep 1, 2024',
      dueDate: 'Sep 15, 2024',
      amount: 1189.45,
      status: 'paid',
      services: ['Business Internet 1 Gig', 'Business Voice'],
    },
    {
      id: 'INV-2024-08',
      date: 'Aug 1, 2024',
      dueDate: 'Aug 15, 2024',
      amount: 1189.45,
      status: 'paid',
      services: ['Business Internet 1 Gig', 'Business Voice'],
    },
  ];

  const getStatusBadge = (status: Invoice['status']) => {
    const config = {
      paid: { variant: 'success' as const, label: 'Paid' },
      pending: { variant: 'warning' as const, label: 'Pending' },
      overdue: { variant: 'destructive' as const, label: 'Overdue' },
    };
    return config[status];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Billing & Payments</h1>
        <p className="text-[var(--ds-color-text-muted)]">
          Manage your Comcast Business account billing and payment methods
        </p>
      </div>

      {/* Billing Metrics */}
      <ResponsiveGrid mobileCols={1} tabletCols={2} desktopCols={4} gap="md">
        <SummaryCard
          title="Current Balance"
          value={`$${currentBalance.toFixed(2)}`}
          description={`Due ${nextBillDate}`}
          icon="paymentcard"
          status="info"
          statusLabel="Due Soon"
          density="comfortable"
          action={{
            label: 'Pay Now',
            onClick: () => alert('Navigate to payment page'),
          }}
        />
        <SummaryCard
          title="Last Payment"
          value={`$${lastPayment.amount.toFixed(2)}`}
          description={`Paid on ${lastPayment.date}`}
          icon="complete"
          status="success"
          statusLabel="Paid"
          density="comfortable"
        />
        <SummaryCard
          title="Average Monthly"
          value={`$${averageMonthly.toFixed(2)}`}
          description="Last 6 months"
          icon="bar-chart"
          trend={{ value: '+2.5%', direction: 'up' }}
          density="comfortable"
        />
        <SummaryCard
          title="Autopay Status"
          value={autopayEnabled ? 'Enabled' : 'Disabled'}
          description="Automatic payments"
          icon={autopayEnabled ? 'complete' : 'alert'}
          status={autopayEnabled ? 'success' : 'warning'}
          statusLabel={autopayEnabled ? 'Active' : 'Inactive'}
          density="comfortable"
          action={{
            label: 'Manage',
            onClick: () => alert('Manage autopay settings'),
          }}
        />
      </ResponsiveGrid>

      {/* Autopay Alert */}
      {!autopayEnabled && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Enable Autopay</strong> to ensure your services are never interrupted.
            You'll save time and avoid late fees.
          </AlertDescription>
        </Alert>
      )}

      {/* Main Content */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          <TabsTrigger value="settings">Billing Settings</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Billing Period</CardTitle>
                <CardDescription>
                  Nov 1 - Nov 30, 2024
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <KeyValuePair
                  label="Business Internet 1 Gig"
                  value="$149.99"
                  orientation="horizontal"
                />
                <KeyValuePair
                  label="Business Voice (3 lines)"
                  value="$119.97"
                  orientation="horizontal"
                />
                <KeyValuePair
                  label="Security Edge"
                  value="$29.99"
                  orientation="horizontal"
                />
                <KeyValuePair
                  label="Equipment Rental"
                  value="$15.00"
                  orientation="horizontal"
                />
                <KeyValuePair
                  label="Taxes & Fees"
                  value="$48.94"
                  orientation="horizontal"
                />
                <div className="pt-4 border-t border-[var(--ds-color-neutral-300)]">
                  <KeyValuePair
                    label="Total Amount Due"
                    value={`$${currentBalance.toFixed(2)}`}
                    orientation="horizontal"
                    className="font-bold text-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
                <CardDescription>
                  Your default payment method
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-[var(--ds-color-neutral-300)] rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-8 w-8 text-[var(--ds-color-primary-500)]" />
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-[var(--ds-color-text-muted)]">Expires 12/2025</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Default</Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="autopay" className="font-medium">Autopay</Label>
                      <p className="text-sm text-[var(--ds-color-text-muted)]">
                        Automatic monthly payments
                      </p>
                    </div>
                    <Switch
                      id="autopay"
                      checked={autopayEnabled}
                      onCheckedChange={setAutopayEnabled}
                    />
                  </div>
                  {autopayEnabled && (
                    <div className="flex items-center gap-2 text-sm text-[var(--ds-color-intent-success)]">
                      <Check className="h-4 w-4" />
                      <span>Your next payment will be automatically processed on {nextBillDate}</span>
                    </div>
                  )}
                </div>

                <Button variant="secondary" className="w-full">
                  Update Payment Method
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Invoices Tab */}
        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Billing History</CardTitle>
                  <CardDescription>
                    View and download past invoices
                  </CardDescription>
                </div>
                <Select value={billingPeriod} onValueChange={setBillingPeriod}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current">Current Year</SelectItem>
                    <SelectItem value="last-year">Last Year</SelectItem>
                    <SelectItem value="all">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice #</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Services</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => {
                    const statusConfig = getStatusBadge(invoice.status);
                    return (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.dueDate}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {invoice.services.map((service, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          ${invoice.amount.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Badge variant={statusConfig.variant}>
                            {statusConfig.label}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Methods Tab */}
        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Saved Payment Methods</CardTitle>
              <CardDescription>
                Manage your payment methods for Comcast Business services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-[var(--ds-color-neutral-300)] rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-8 w-8 text-[var(--ds-color-primary-500)]" />
                    <div>
                      <p className="font-medium">Visa •••• 4242</p>
                      <p className="text-sm text-[var(--ds-color-text-muted)]">Expires 12/2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Default</Badge>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-[var(--ds-color-neutral-300)] rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-8 w-8 text-[var(--ds-color-neutral-500)]" />
                    <div>
                      <p className="font-medium">Mastercard •••• 8888</p>
                      <p className="text-sm text-[var(--ds-color-text-muted)]">Expires 06/2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">Set as Default</Button>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
              </div>

              <Button variant="secondary" className="w-full">
                Add New Payment Method
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Preferences</CardTitle>
              <CardDescription>
                Customize how you receive and manage your bills
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="paperless" className="font-medium">Paperless Billing</Label>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Receive invoices via email instead of mail
                  </p>
                </div>
                <Switch
                  id="paperless"
                  checked={paperlessEnabled}
                  onCheckedChange={setPaperlessEnabled}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto" className="font-medium">Automatic Payments</Label>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Auto-pay your bill each month
                  </p>
                </div>
                <Switch
                  id="auto"
                  checked={autopayEnabled}
                  onCheckedChange={setAutopayEnabled}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="font-medium">Payment Reminders</Label>
                  <p className="text-sm text-[var(--ds-color-text-muted)]">
                    Get notified before your bill is due
                  </p>
                </div>
                <Switch id="reminders" defaultChecked />
              </div>

              <div className="pt-4 border-t border-[var(--ds-color-neutral-300)]">
                <Button variant="primary">Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export const Default: Story = {
  render: () => <BillingManagementFlow />,
};
