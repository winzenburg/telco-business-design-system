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
import { Textarea } from '../src/components/ui/textarea';
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../src/components/ui/dialog';
import { Separator } from '../src/components/ui/separator';
import { Progress } from '../src/components/ui/progress';
import { Icon } from '../packages/icons/src/Icon';
import { AlertCircle } from 'lucide-react';

const meta: Meta = {
  title: 'Enterprise/Billing',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Enterprise billing interface with invoice management, payment history, and usage tracking.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const billingData = [
  { id: "INV-2024-001", date: "2024-01-01", amount: "$12,450.00", status: "Paid", services: ["Internet", "Phone", "Security"], dueDate: "2024-01-31", paymentDate: "2024-01-15" },
  { id: "INV-2024-002", date: "2024-02-01", amount: "$12,450.00", status: "Paid", services: ["Internet", "Phone", "Security"], dueDate: "2024-02-28", paymentDate: "2024-02-12" },
  { id: "INV-2024-003", date: "2024-03-01", amount: "$13,120.00", status: "Paid", services: ["Internet", "Phone", "Security", "TV"], dueDate: "2024-03-31", paymentDate: "2024-03-10" },
  { id: "INV-2024-004", date: "2024-04-01", amount: "$13,120.00", status: "Overdue", services: ["Internet", "Phone", "Security", "TV"], dueDate: "2024-04-30", paymentDate: null },
  { id: "INV-2024-005", date: "2024-05-01", amount: "$13,120.00", status: "Pending", services: ["Internet", "Phone", "Security", "TV"], dueDate: "2024-05-31", paymentDate: null },
];

const usageData = [
  { service: "Internet", usage: "847 GB", limit: "1000 GB", cost: "$8,500.00", percentage: 84.7 },
  { service: "Phone", usage: "12,430 min", limit: "Unlimited", cost: "$2,100.00", percentage: 62 },
  { service: "Security", usage: "24/7 Active", limit: "24/7 Active", cost: "$1,200.00", percentage: 100 },
  { service: "TV", usage: "156 hours", limit: "Unlimited", cost: "$1,320.00", percentage: 78 },
];

const serviceOptions = [
  { value: "all", label: "All Services" },
  { value: "internet", label: "Internet" },
  { value: "phone", label: "Phone" },
  { value: "security", label: "Security" },
  { value: "tv", label: "TV" },
];

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "Paid", label: "Paid" },
  { value: "Pending", label: "Pending" },
  { value: "Overdue", label: "Overdue" },
];

export const EnterpriseBillingInterface: Story = {
  render: () => {
    const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [serviceFilter, setServiceFilter] = useState('all');
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [disputeDialogOpen, setDisputeDialogOpen] = useState(false);
    const [selectedInvoiceForDispute, setSelectedInvoiceForDispute] = useState<string>('');
    const [disputeReason, setDisputeReason] = useState('');
    const [disputeDescription, setDisputeDescription] = useState('');

    const filteredInvoices = billingData.filter(invoice => {
      const matchesSearch = invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          invoice.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
      const matchesService = serviceFilter === 'all' ||
                           invoice.services.some(s => s.toLowerCase() === serviceFilter);

      // Date range filtering
      const invoiceDate = new Date(invoice.date);
      const matchesDateRange = (!startDate || invoiceDate >= startDate) &&
                              (!endDate || invoiceDate <= endDate);

      return matchesSearch && matchesStatus && matchesService && matchesDateRange;
    });

    const toggleInvoiceSelection = (invoiceId: string) => {
      setSelectedInvoices(prev => 
        prev.includes(invoiceId) 
          ? prev.filter(id => id !== invoiceId)
          : [...prev, invoiceId]
      );
    };

    const toggleSelectAll = () => {
      setSelectedInvoices(
        selectedInvoices.length === filteredInvoices.length 
          ? [] 
          : filteredInvoices.map(invoice => invoice.id)
      );
    };

    const getStatusBadge = (status: string) => {
      switch (status) {
        case 'Paid':
          return <Badge variant="success" leadingIcon={<Icon name="check" size={14} />}>Paid</Badge>;
        case 'Pending':
          return <Badge variant="warning" leadingIcon={<Icon name="alert" size={14} />}>Pending</Badge>;
        case 'Overdue':
          return <Badge variant="destructive" leadingIcon={<Icon name="alert" size={14} />}>Overdue</Badge>;
        default:
          return <Badge variant="outline">{status}</Badge>;
      }
    };

    const totalBilled = billingData.reduce((sum, invoice) => sum + parseFloat(invoice.amount.replace('$', '').replace(',', '')), 0);
    const totalPaid = billingData.filter(inv => inv.status === 'Paid').reduce((sum, invoice) => sum + parseFloat(invoice.amount.replace('$', '').replace(',', '')), 0);
    const totalPending = billingData.filter(inv => inv.status !== 'Paid').reduce((sum, invoice) => sum + parseFloat(invoice.amount.replace('$', '').replace(',', '')), 0);

    return (
      <div className="min-h-screen bg-[var(--ds-color-bg-surface)]">
        {/* Header */}
        <header className="bg-[var(--ds-color-bg-canvas)] border-b border-[var(--ds-color-neutral-300)] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-primary font-semibold text-xl text-[var(--ds-color-text-primary)]">Enterprise Billing</h1>
              <p className="text-sm text-[var(--ds-color-text-muted)]">Manage invoices, payments, and service usage</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">Export Report</Button>
              <Button>Make Payment</Button>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Billing Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">Total Billed (YTD)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">${totalBilled.toLocaleString()}</div>
                <p className="text-sm text-[var(--ds-color-text-muted)] mt-1">5 invoices this year</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">Total Paid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">${totalPaid.toLocaleString()}</div>
                <p className="text-sm text-[var(--ds-color-text-muted)] mt-1">3 invoices paid</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">Outstanding Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">${totalPending.toLocaleString()}</div>
                <p className="text-sm text-[var(--ds-color-text-muted)] mt-1">2 invoices pending</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">Next Payment Due</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">Apr 30</div>
                <p className="text-sm text-red-600 mt-1">2 days overdue</p>
              </CardContent>
            </Card>
          </div>

          {/* Current Usage */}
          <Card>
            <CardHeader>
              <CardTitle>Current Month Usage</CardTitle>
              <CardDescription>Service usage for the current billing period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {usageData.map((service, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-[var(--ds-color-text-primary)]">{service.service}</span>
                        <span className="text-sm text-[var(--ds-color-text-muted)] ml-2">
                          {service.usage} {service.limit !== 'Unlimited' && service.limit !== '24/7 Active' && `/ ${service.limit}`}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-[var(--ds-color-text-primary)]">{service.cost}</div>
                        {service.limit !== 'Unlimited' && service.limit !== '24/7 Active' && (
                          <div className="text-sm text-[var(--ds-color-text-muted)]">{service.percentage}% used</div>
                        )}
                      </div>
                    </div>
                    {service.limit !== 'Unlimited' && service.limit !== '24/7 Active' && (
                      <Progress 
                        value={service.percentage} 
                        className="h-2" 
                      />
                    )}
                  </div>
                ))}

                <Separator />

                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[var(--ds-color-text-primary)]">Estimated Monthly Total</span>
                  <span className="font-semibold text-[var(--ds-color-text-primary)] text-lg">$13,120.00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Invoice History */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Invoice History</CardTitle>
                  <CardDescription>View and manage your billing history</CardDescription>
                </div>
                {selectedInvoices.length > 0 && (
                  <Badge variant="info">
                    {selectedInvoices.length} selected
                  </Badge>
                )}
              </div>

              {/* Filters */}
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search invoices by ID or service..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Combobox
                    options={statusOptions}
                    value={statusFilter}
                    onValueChange={setStatusFilter}
                    placeholder="Select status..."
                    searchPlaceholder="Search status..."
                    width="w-[160px]"
                  />
                  <Combobox
                    options={serviceOptions}
                    value={serviceFilter}
                    onValueChange={setServiceFilter}
                    placeholder="Select service..."
                    searchPlaceholder="Search service..."
                    width="w-[180px]"
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
                  {(startDate || endDate || serviceFilter !== 'all' || statusFilter !== 'all') && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setStartDate(undefined);
                        setEndDate(undefined);
                        setServiceFilter('all');
                        setStatusFilter('all');
                      }}
                    >
                      Clear filters
                    </Button>
                  )}
                </div>
              </div>

              {/* Bulk Actions */}
              {selectedInvoices.length > 0 && (
                <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-sm font-medium text-blue-900">
                    {selectedInvoices.length} invoice{selectedInvoices.length > 1 ? 's' : ''} selected
                  </span>
                  <div className="flex gap-2 ml-auto">
                    <Button size="sm" variant="outline">Download PDF</Button>
                    <Button size="sm" variant="outline">Export to CSV</Button>
                    <Button size="sm">Pay Selected</Button>
                  </div>
                </div>
              )}
            </CardHeader>

            <CardContent>
              <div className="rounded-lg border border-[var(--ds-color-neutral-300)] bg-[var(--ds-color-bg-canvas)]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox
                          checked={selectedInvoices.length === filteredInvoices.length && filteredInvoices.length > 0}
                          onCheckedChange={toggleSelectAll}
                        />
                      </TableHead>
                      <TableHead>Invoice ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Services</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Payment Date</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredInvoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedInvoices.includes(invoice.id)}
                            onCheckedChange={() => toggleInvoiceSelection(invoice.id)}
                          />
                        </TableCell>
                        <TableCell>
                          <span className="font-medium text-[var(--ds-color-intent-primary)]">{invoice.id}</span>
                        </TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>
                          <span className="font-medium">{invoice.amount}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {invoice.services.map((service, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(invoice.status)}
                        </TableCell>
                        <TableCell>
                          <span className={invoice.status === 'Overdue' ? 'text-red-600' : ''}>
                            {invoice.dueDate}
                          </span>
                        </TableCell>
                        <TableCell>
                          {invoice.paymentDate || '-'}
                        </TableCell>
                        <TableCell>
                          <Menu>
                            <MenuTrigger asChild>
                              <Button variant="ghost" size="sm"><Icon name="contextmenu" size={16} /></Button>
                            </MenuTrigger>
                            <MenuContent align="end">
                              <MenuItem>View Invoice</MenuItem>
                              <MenuItem>Download PDF</MenuItem>
                              <MenuSeparator />
                              {invoice.status !== 'Paid' && (
                                <>
                                  <MenuItem>Make Payment</MenuItem>
                                  <MenuItem>Set Up Auto-Pay</MenuItem>
                                  <MenuSeparator />
                                </>
                              )}
                              <MenuItem>View Details</MenuItem>
                              <MenuItem
                                onClick={() => {
                                  setSelectedInvoiceForDispute(invoice.id);
                                  setDisputeDialogOpen(true);
                                }}
                              >
                                Dispute Invoice
                              </MenuItem>
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
                  Showing {filteredInvoices.length} of {billingData.length} invoices
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

          {/* Payment Methods & Auto-Pay */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 p-4 border border-[var(--ds-color-neutral-300)] rounded-lg">
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

                <div className="space-y-3 p-4 border border-[var(--ds-color-neutral-300)] rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                        MC
                      </div>
                      <div>
                        <p className="text-sm font-medium">**** **** **** 8901</p>
                        <p className="text-xs text-[var(--ds-color-text-muted)]">Expires 08/25</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Auto-Pay Settings</CardTitle>
                <CardDescription>Automatically pay invoices when due</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-green-900">Auto-Pay Enabled</p>
                    <p className="text-xs text-green-700">Payments processed 3 days before due date</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Modify
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Payment Method:</span>
                    <span className="font-medium">VISA **** 4532</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Maximum Amount:</span>
                    <span className="font-medium">$15,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Next Auto-Payment:</span>
                    <span className="font-medium">May 28, 2024</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Disable Auto-Pay
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dispute Invoice Dialog */}
        <Dialog open={disputeDialogOpen} onOpenChange={setDisputeDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Dispute Invoice</DialogTitle>
              <DialogDescription>
                Submit a dispute for invoice {selectedInvoiceForDispute}. Our billing team will review your request within 3-5 business days.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {/* Dispute Reason */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--ds-color-text-primary)]">
                  Dispute Reason <span className="text-[var(--ds-color-intent-destructive)]">*</span>
                </label>
                <Select value={disputeReason} onValueChange={setDisputeReason}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select reason..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="billing-error">Billing Error</SelectItem>
                    <SelectItem value="unauthorized-charges">Unauthorized Charges</SelectItem>
                    <SelectItem value="service-not-received">Service Not Received</SelectItem>
                    <SelectItem value="incorrect-amount">Incorrect Amount</SelectItem>
                    <SelectItem value="duplicate-charge">Duplicate Charge</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Dispute Description */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--ds-color-text-primary)]">
                  Description <span className="text-[var(--ds-color-intent-destructive)]">*</span>
                </label>
                <Textarea
                  placeholder="Please provide detailed information about your dispute..."
                  value={disputeDescription}
                  onChange={(e) => setDisputeDescription(e.target.value)}
                  minLength={20}
                  maxLength={500}
                  rows={6}
                  showCount
                />
                <p className="text-xs text-[var(--ds-color-text-muted)]">
                  Minimum 20 characters. Include relevant details such as dates, amounts, and supporting information.
                </p>
              </div>
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setDisputeDialogOpen(false);
                  setDisputeReason('');
                  setDisputeDescription('');
                }}
              >
                Cancel
              </Button>
              <Button
                disabled={!disputeReason || disputeDescription.length < 20}
                onClick={() => {
                  // Handle dispute submission
                  setDisputeDialogOpen(false);
                  setDisputeReason('');
                  setDisputeDescription('');
                }}
              >
                Submit Dispute
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const WithValidationErrors: Story = {
  render: () => {
    const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [serviceFilter, setServiceFilter] = useState('all');
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(new Date('2024-01-01'));
    const [disputeDialogOpen, setDisputeDialogOpen] = useState(true);
    const [selectedInvoiceForDispute, setSelectedInvoiceForDispute] = useState<string>('INV-2024-004');
    const [disputeReason, setDisputeReason] = useState('');
    const [disputeDescription, setDisputeDescription] = useState('This is short');
    const [errors, setErrors] = useState({
      startDate: 'Start date must be before end date',
      disputeReason: 'Please select a dispute reason',
      disputeDescription: 'Description must be at least 20 characters',
    });

    const filteredInvoices = billingData.filter(invoice => {
      const matchesSearch = invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          invoice.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
      const matchesService = serviceFilter === 'all' ||
                           invoice.services.some(s => s.toLowerCase() === serviceFilter);

      // Date range filtering
      const invoiceDate = new Date(invoice.date);
      const matchesDateRange = (!startDate || invoiceDate >= startDate) &&
                              (!endDate || invoiceDate <= endDate);

      return matchesSearch && matchesStatus && matchesService && matchesDateRange;
    });

    const toggleInvoiceSelection = (invoiceId: string) => {
      setSelectedInvoices(prev =>
        prev.includes(invoiceId)
          ? prev.filter(id => id !== invoiceId)
          : [...prev, invoiceId]
      );
    };

    const toggleSelectAll = () => {
      setSelectedInvoices(
        selectedInvoices.length === filteredInvoices.length
          ? []
          : filteredInvoices.map(invoice => invoice.id)
      );
    };

    const getStatusBadge = (status: string) => {
      switch (status) {
        case 'Paid':
          return <Badge variant="success" leadingIcon={<Icon name="check" size={14} />}>Paid</Badge>;
        case 'Pending':
          return <Badge variant="warning" leadingIcon={<Icon name="alert" size={14} />}>Pending</Badge>;
        case 'Overdue':
          return <Badge variant="destructive" leadingIcon={<Icon name="alert" size={14} />}>Overdue</Badge>;
        default:
          return <Badge variant="outline">{status}</Badge>;
      }
    };

    const totalBilled = billingData.reduce((sum, invoice) => sum + parseFloat(invoice.amount.replace('$', '').replace(',', '')), 0);
    const totalPaid = billingData.filter(inv => inv.status === 'Paid').reduce((sum, invoice) => sum + parseFloat(invoice.amount.replace('$', '').replace(',', '')), 0);
    const totalPending = billingData.filter(inv => inv.status !== 'Paid').reduce((sum, invoice) => sum + parseFloat(invoice.amount.replace('$', '').replace(',', '')), 0);

    return (
      <div className="min-h-screen bg-[var(--ds-color-bg-surface)]">
        {/* Header */}
        <header className="bg-[var(--ds-color-bg-canvas)] border-b border-[var(--ds-color-neutral-300)] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-primary font-semibold text-xl text-[var(--ds-color-text-primary)]">Enterprise Billing</h1>
              <p className="text-sm text-[var(--ds-color-text-muted)]">Manage invoices, payments, and service usage</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline">Export Report</Button>
              <Button>Make Payment</Button>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Billing Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">Total Billed (YTD)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">${totalBilled.toLocaleString()}</div>
                <p className="text-sm text-[var(--ds-color-text-muted)] mt-1">5 invoices this year</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">Total Paid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">${totalPaid.toLocaleString()}</div>
                <p className="text-sm text-[var(--ds-color-text-muted)] mt-1">3 invoices paid</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">Outstanding Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">${totalPending.toLocaleString()}</div>
                <p className="text-sm text-[var(--ds-color-text-muted)] mt-1">2 invoices pending</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[var(--ds-color-text-muted)]">Next Payment Due</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[var(--ds-color-text-primary)]">Apr 30</div>
                <p className="text-sm text-red-600 mt-1">2 days overdue</p>
              </CardContent>
            </Card>
          </div>

          {/* Invoice History with Date Range Error */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Invoice History</CardTitle>
                  <CardDescription>View and manage your billing history</CardDescription>
                </div>
              </div>

              {/* Filters with Validation Error */}
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search invoices by ID or service..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Combobox
                    options={statusOptions}
                    value={statusFilter}
                    onValueChange={setStatusFilter}
                    placeholder="Select status..."
                    searchPlaceholder="Search status..."
                    width="w-[160px]"
                  />
                  <Combobox
                    options={serviceOptions}
                    value={serviceFilter}
                    onValueChange={setServiceFilter}
                    placeholder="Select service..."
                    searchPlaceholder="Search service..."
                    width="w-[180px]"
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <DatePicker
                        date={startDate}
                        onDateChange={(date) => {
                          setStartDate(date);
                          if (date && endDate && date > endDate) {
                            setErrors(prev => ({ ...prev, startDate: 'Start date must be before end date' }));
                          } else {
                            setErrors(prev => {
                              const newErrors = { ...prev };
                              delete newErrors.startDate;
                              return newErrors as typeof prev;
                            });
                          }
                        }}
                        placeholder="Start date"
                      />
                      <span className="text-sm text-[var(--ds-color-text-muted)]">to</span>
                      <DatePicker
                        date={endDate}
                        onDateChange={(date) => {
                          setEndDate(date);
                          if (startDate && date && startDate > date) {
                            setErrors(prev => ({ ...prev, startDate: 'Start date must be before end date' }));
                          } else {
                            setErrors(prev => {
                              const newErrors = { ...prev };
                              delete newErrors.startDate;
                              return newErrors as typeof prev;
                            });
                          }
                        }}
                        placeholder="End date"
                      />
                    </div>
                    {errors.startDate && (
                      <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.startDate}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="rounded-lg border border-[var(--ds-color-neutral-300)] bg-[var(--ds-color-bg-canvas)]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox
                          checked={selectedInvoices.length === filteredInvoices.length && filteredInvoices.length > 0}
                          onCheckedChange={toggleSelectAll}
                        />
                      </TableHead>
                      <TableHead>Invoice ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Services</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Payment Date</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredInvoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedInvoices.includes(invoice.id)}
                            onCheckedChange={() => toggleInvoiceSelection(invoice.id)}
                          />
                        </TableCell>
                        <TableCell>
                          <span className="font-medium text-[var(--ds-color-intent-primary)]">{invoice.id}</span>
                        </TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>
                          <span className="font-medium">{invoice.amount}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {invoice.services.map((service, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(invoice.status)}
                        </TableCell>
                        <TableCell>
                          <span className={invoice.status === 'Overdue' ? 'text-red-600' : ''}>
                            {invoice.dueDate}
                          </span>
                        </TableCell>
                        <TableCell>
                          {invoice.paymentDate || '-'}
                        </TableCell>
                        <TableCell>
                          <Menu>
                            <MenuTrigger asChild>
                              <Button variant="ghost" size="sm"><Icon name="contextmenu" size={16} /></Button>
                            </MenuTrigger>
                            <MenuContent align="end">
                              <MenuItem>View Invoice</MenuItem>
                              <MenuItem>Download PDF</MenuItem>
                              <MenuSeparator />
                              {invoice.status !== 'Paid' && (
                                <>
                                  <MenuItem>Make Payment</MenuItem>
                                  <MenuItem>Set Up Auto-Pay</MenuItem>
                                  <MenuSeparator />
                                </>
                              )}
                              <MenuItem>View Details</MenuItem>
                              <MenuItem
                                onClick={() => {
                                  setSelectedInvoiceForDispute(invoice.id);
                                  setDisputeDialogOpen(true);
                                }}
                              >
                                Dispute Invoice
                              </MenuItem>
                            </MenuContent>
                          </Menu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-[var(--ds-color-text-muted)]">
                  Showing {filteredInvoices.length} of {billingData.length} invoices
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
        </div>

        {/* Dispute Invoice Dialog with Validation Errors */}
        <Dialog open={disputeDialogOpen} onOpenChange={setDisputeDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Dispute Invoice</DialogTitle>
              <DialogDescription>
                Submit a dispute for invoice {selectedInvoiceForDispute}. Our billing team will review your request within 3-5 business days.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {/* Dispute Reason with Error */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--ds-color-text-primary)]">
                  Dispute Reason <span className="text-[var(--ds-color-intent-destructive)]">*</span>
                </label>
                <Select
                  value={disputeReason}
                  onValueChange={(value) => {
                    setDisputeReason(value);
                    setErrors(prev => {
                      const newErrors = { ...prev };
                      delete newErrors.disputeReason;
                      return newErrors as typeof prev;
                    });
                  }}
                >
                  <SelectTrigger error={!!errors.disputeReason}>
                    <SelectValue placeholder="Select reason..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="billing-error">Billing Error</SelectItem>
                    <SelectItem value="unauthorized-charges">Unauthorized Charges</SelectItem>
                    <SelectItem value="service-not-received">Service Not Received</SelectItem>
                    <SelectItem value="incorrect-amount">Incorrect Amount</SelectItem>
                    <SelectItem value="duplicate-charge">Duplicate Charge</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.disputeReason && (
                  <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.disputeReason}
                  </p>
                )}
              </div>

              {/* Dispute Description with Error */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--ds-color-text-primary)]">
                  Description <span className="text-[var(--ds-color-intent-destructive)]">*</span>
                </label>
                <Textarea
                  placeholder="Please provide detailed information about your dispute..."
                  value={disputeDescription}
                  onChange={(e) => {
                    setDisputeDescription(e.target.value);
                    if (e.target.value.length >= 20) {
                      setErrors(prev => {
                        const newErrors = { ...prev };
                        delete newErrors.disputeDescription;
                        return newErrors as typeof prev;
                      });
                    } else {
                      setErrors(prev => ({ ...prev, disputeDescription: 'Description must be at least 20 characters' }));
                    }
                  }}
                  minLength={20}
                  maxLength={500}
                  rows={6}
                  showCount
                  error={!!errors.disputeDescription}
                />
                {errors.disputeDescription && (
                  <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.disputeDescription}
                  </p>
                )}
                <p className="text-xs text-[var(--ds-color-text-muted)]">
                  Minimum 20 characters. Include relevant details such as dates, amounts, and supporting information.
                </p>
              </div>
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setDisputeDialogOpen(false);
                  setDisputeReason('');
                  setDisputeDescription('');
                }}
              >
                Cancel
              </Button>
              <Button
                disabled={!disputeReason || disputeDescription.length < 20}
                onClick={() => {
                  // Handle dispute submission
                  setDisputeDialogOpen(false);
                  setDisputeReason('');
                  setDisputeDescription('');
                }}
              >
                Submit Dispute
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};