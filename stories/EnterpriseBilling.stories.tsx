import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Badge,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Separator,
  Progress,
} from '../src/components';
import { Icon } from '../src/components/Icon/Icon';

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

export const EnterpriseBillingInterface: Story = {
  render: () => {
    const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [dateRange, setDateRange] = useState('all');

    const filteredInvoices = billingData.filter(invoice => {
      const matchesSearch = invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          invoice.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
      return matchesSearch && matchesStatus;
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
          return <Badge className="bg-green-50 text-green-700 border-green-200" leadingIcon={<Icon name="check" size={12} />}>Paid</Badge>;
        case 'Pending':
          return <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200" leadingIcon={<Icon name="alert" size={12} />}>Pending</Badge>;
        case 'Overdue':
          return <Badge variant="destructive" leadingIcon={<Icon name="alert" size={12} />}>Overdue</Badge>;
        default:
          return <Badge variant="outline">{status}</Badge>;
      }
    };

    const totalBilled = billingData.reduce((sum, invoice) => sum + parseFloat(invoice.amount.replace('$', '').replace(',', '')), 0);
    const totalPaid = billingData.filter(inv => inv.status === 'Paid').reduce((sum, invoice) => sum + parseFloat(invoice.amount.replace('$', '').replace(',', '')), 0);
    const totalPending = billingData.filter(inv => inv.status !== 'Paid').reduce((sum, invoice) => sum + parseFloat(invoice.amount.replace('$', '').replace(',', '')), 0);

    return (
      <div className="min-h-screen bg-[#F9F9FA]">
        {/* Header */}
        <header className="bg-white border-b border-[#F1F2F6] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-primary font-semibold text-xl text-[#2B2D3F]">Enterprise Billing</h1>
              <p className="text-sm text-[#70717D]">Manage invoices, payments, and service usage</p>
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
                <CardTitle className="text-sm font-medium text-[#70717D]">Total Billed (YTD)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#2B2D3F]">${totalBilled.toLocaleString()}</div>
                <p className="text-sm text-[#70717D] mt-1">5 invoices this year</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#70717D]">Total Paid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">${totalPaid.toLocaleString()}</div>
                <p className="text-sm text-[#70717D] mt-1">3 invoices paid</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#70717D]">Outstanding Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">${totalPending.toLocaleString()}</div>
                <p className="text-sm text-[#70717D] mt-1">2 invoices pending</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#70717D]">Next Payment Due</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[#2B2D3F]">Apr 30</div>
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
                        <span className="font-medium text-[#2B2D3F]">{service.service}</span>
                        <span className="text-sm text-[#70717D] ml-2">
                          {service.usage} {service.limit !== 'Unlimited' && service.limit !== '24/7 Active' && `/ ${service.limit}`}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-[#2B2D3F]">{service.cost}</div>
                        {service.limit !== 'Unlimited' && service.limit !== '24/7 Active' && (
                          <div className="text-sm text-[#70717D]">{service.percentage}% used</div>
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
                  <span className="font-semibold text-[#2B2D3F]">Estimated Monthly Total</span>
                  <span className="font-semibold text-[#2B2D3F] text-lg">$13,120.00</span>
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
                  <Badge className="bg-blue-50 text-blue-700 border-blue-200">
                    {selectedInvoices.length} selected
                  </Badge>
                )}
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search invoices by ID or service..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Paid">Paid</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Overdue">Overdue</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="current">Current Year</SelectItem>
                      <SelectItem value="last">Last Year</SelectItem>
                      <SelectItem value="6months">Last 6 Months</SelectItem>
                    </SelectContent>
                  </Select>
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
              <div className="rounded-lg border border-[#F1F2F6] bg-white">
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
                          <span className="font-medium text-[#0D62FF]">{invoice.id}</span>
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
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm"><Icon name="contextmenu" size={16} /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Invoice</DropdownMenuItem>
                              <DropdownMenuItem>Download PDF</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              {invoice.status !== 'Paid' && (
                                <>
                                  <DropdownMenuItem>Make Payment</DropdownMenuItem>
                                  <DropdownMenuItem>Set Up Auto-Pay</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                </>
                              )}
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Dispute Invoice</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-[#70717D]">
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
                <div className="space-y-3 p-4 border border-[#F1F2F6] rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                        VISA
                      </div>
                      <div>
                        <p className="text-sm font-medium">**** **** **** 4532</p>
                        <p className="text-xs text-[#70717D]">Expires 12/26</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Primary</Badge>
                  </div>
                </div>

                <div className="space-y-3 p-4 border border-[#F1F2F6] rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                        MC
                      </div>
                      <div>
                        <p className="text-sm font-medium">**** **** **** 8901</p>
                        <p className="text-xs text-[#70717D]">Expires 08/25</p>
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
      </div>
    );
  },
};