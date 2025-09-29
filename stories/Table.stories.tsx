import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../src/components/ui/table';
import { Button } from '../src/components/ui/button';
import { Badge } from '../src/components/ui/badge';
import { Checkbox } from '../src/components/ui/checkbox';
import { Input } from '../src/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../src/components/ui/select';
import { Skeleton } from '../src/components/ui/skeleton';
import { Avatar } from '../src/components/ui/avatar';
import {
  ChevronDown,
  ChevronUp,
  ChevronRight,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Download,
  Search,
  Filter,
  GripVertical
} from 'lucide-react';

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A comprehensive table component built on ShadCN/UI patterns with design system tokens. Features structural borders (neutral-300), sortable columns, selectable rows, pagination, filtering, and responsive layouts.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample Data
const invoices = [
  { id: 'INV001', status: 'Paid', method: 'Credit Card', amount: 250.00, date: '2024-01-15' },
  { id: 'INV002', status: 'Pending', method: 'PayPal', amount: 150.00, date: '2024-01-18' },
  { id: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: 350.00, date: '2024-01-22' },
  { id: 'INV004', status: 'Paid', method: 'Credit Card', amount: 450.00, date: '2024-01-25' },
  { id: 'INV005', status: 'Paid', method: 'Credit Card', amount: 550.00, date: '2024-01-28' },
];

const employees = [
  { id: 1, name: 'Alice Johnson', email: 'alice@company.com', department: 'Engineering', role: 'Senior Developer', salary: 95000, status: 'Active', joinDate: '2022-01-15', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice' },
  { id: 2, name: 'Bob Smith', email: 'bob@company.com', department: 'Marketing', role: 'Marketing Manager', salary: 78000, status: 'Active', joinDate: '2021-11-08', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob' },
  { id: 3, name: 'Carol Williams', email: 'carol@company.com', department: 'Engineering', role: 'DevOps Engineer', salary: 88000, status: 'Active', joinDate: '2023-03-22', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carol' },
  { id: 4, name: 'David Brown', email: 'david@company.com', department: 'Sales', role: 'Sales Director', salary: 105000, status: 'Active', joinDate: '2020-07-10', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
  { id: 5, name: 'Eva Garcia', email: 'eva@company.com', department: 'HR', role: 'HR Specialist', salary: 65000, status: 'Inactive', joinDate: '2022-09-05', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eva' },
  { id: 6, name: 'Frank Miller', email: 'frank@company.com', department: 'Engineering', role: 'Frontend Developer', salary: 82000, status: 'Active', joinDate: '2023-01-12', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Frank' },
  { id: 7, name: 'Grace Lee', email: 'grace@company.com', department: 'Marketing', role: 'Content Creator', salary: 58000, status: 'Active', joinDate: '2023-05-18', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Grace' },
  { id: 8, name: 'Henry Wilson', email: 'henry@company.com', department: 'Sales', role: 'Account Executive', salary: 72000, status: 'Active', joinDate: '2022-06-30', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Henry' },
];

// ========================================
// STRUCTURAL VARIANTS
// ========================================

// Standard Table - Basic headers, rows, columns
export const Standard: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            ${invoices.reduce((sum, inv) => sum + inv.amount, 0).toFixed(2)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

// Zebra (Striped) Table - Alternating row colors
export const ZebraStriped: Story = {
  render: () => (
    <Table>
      <TableCaption>Internet service plans with alternating row colors for better readability</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Speed</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Availability</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { service: 'Business Internet Essential', speed: '25/5 Mbps', price: '$69.95/mo', available: true },
          { service: 'Business Internet Performance', speed: '75/20 Mbps', price: '$89.95/mo', available: true },
          { service: 'Business Internet Advanced', speed: '150/25 Mbps', price: '$149.95/mo', available: false },
          { service: 'Business Internet Premium', speed: '300/35 Mbps', price: '$199.95/mo', available: true },
          { service: 'Business Internet Enterprise', speed: '1 Gbps', price: '$299.95/mo', available: false },
        ].map((plan, index) => (
          <TableRow key={index} className={index % 2 === 1 ? 'bg-neutral-50' : ''}>
            <TableCell className="font-medium">{plan.service}</TableCell>
            <TableCell>{plan.speed}</TableCell>
            <TableCell>{plan.price}</TableCell>
            <TableCell>
              <Badge variant={plan.available ? 'success' : 'secondary'}>
                {plan.available ? 'Available' : 'Limited'}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Borderless Table - Clean look
export const Borderless: Story = {
  render: () => (
    <div className="border border-neutral-300 rounded-lg p-6 bg-white">
      <table className="w-full">
        <caption className="mt-0 mb-4 text-sm text-neutral-600 font-secondary text-left">
          Borderless table for clean, minimal UI
        </caption>
        <thead>
          <tr className="border-b border-neutral-200">
            <th className="pb-3 text-left font-primary font-semibold text-neutral-900">Product</th>
            <th className="pb-3 text-left font-primary font-semibold text-neutral-900">Category</th>
            <th className="pb-3 text-right font-primary font-semibold text-neutral-900">Price</th>
          </tr>
        </thead>
        <tbody>
          {[
            { product: 'Wireless Router', category: 'Hardware', price: '$129.99' },
            { product: 'Security Camera', category: 'Security', price: '$249.99' },
            { product: 'VoIP Phone', category: 'Communication', price: '$89.99' },
          ].map((item, index) => (
            <tr key={index} className="border-b border-neutral-100 last:border-0">
              <td className="py-3 font-secondary text-neutral-700">{item.product}</td>
              <td className="py-3 font-secondary text-neutral-700">{item.category}</td>
              <td className="py-3 text-right font-secondary text-neutral-700">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};

// Dense / Compact Table - Reduced padding
export const Dense: Story = {
  render: () => (
    <Table>
      <TableCaption>Compact table with reduced spacing for dashboards</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="h-8 px-2 py-1">Metric</TableHead>
          <TableHead className="h-8 px-2 py-1 text-right">Value</TableHead>
          <TableHead className="h-8 px-2 py-1 text-right">Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { metric: 'Active Users', value: '2,451', change: '+12%' },
          { metric: 'Revenue', value: '$45,231', change: '+23%' },
          { metric: 'Bandwidth Usage', value: '1.2 TB', change: '-5%' },
          { metric: 'Support Tickets', value: '23', change: '-18%' },
          { metric: 'Uptime', value: '99.9%', change: '0%' },
        ].map((row, index) => (
          <TableRow key={index}>
            <TableCell className="px-2 py-1 text-sm">{row.metric}</TableCell>
            <TableCell className="px-2 py-1 text-sm text-right font-medium">{row.value}</TableCell>
            <TableCell className={`px-2 py-1 text-sm text-right ${row.change.startsWith('+') ? 'text-green-600' : row.change.startsWith('-') ? 'text-red-600' : 'text-neutral-600'}`}>
              {row.change}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Responsive Table (Card on mobile)
export const Responsive: Story = {
  render: () => (
    <div>
      {/* Desktop view */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.slice(0, 3).map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>John Doe</TableCell>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={invoice.status === 'Paid' ? 'success' : invoice.status === 'Pending' ? 'warning' : 'destructive'}>
                    {invoice.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-4">
        {invoices.slice(0, 3).map((invoice) => (
          <div key={invoice.id} className="border border-neutral-300 rounded-lg p-4 bg-white">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium font-primary">John Doe</div>
              <Badge variant={invoice.status === 'Paid' ? 'success' : invoice.status === 'Pending' ? 'warning' : 'destructive'}>
                {invoice.status}
              </Badge>
            </div>
            <div className="space-y-1 text-sm font-secondary text-neutral-700">
              <div className="flex justify-between">
                <span className="text-neutral-600">Order ID:</span>
                <span>{invoice.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Date:</span>
                <span>{invoice.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Amount:</span>
                <span className="font-medium">${invoice.amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// ========================================
// INTERACTIVE VARIANTS
// ========================================

// Sortable Table
export const Sortable: Story = {
  render: () => {
    const [data, setData] = useState([...employees].slice(0, 5));
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

    const handleSort = (key: string) => {
      let direction: 'asc' | 'desc' = 'asc';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
      }

      const sorted = [...data].sort((a, b) => {
        const aVal = a[key as keyof typeof a];
        const bVal = b[key as keyof typeof b];

        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return direction === 'asc' ? aVal - bVal : bVal - aVal;
        }

        const aStr = String(aVal).toLowerCase();
        const bStr = String(bVal).toLowerCase();
        if (aStr < bStr) return direction === 'asc' ? -1 : 1;
        if (aStr > bStr) return direction === 'asc' ? 1 : -1;
        return 0;
      });

      setData(sorted);
      setSortConfig({ key, direction });
    };

    const SortIcon = ({ sortKey }: { sortKey: string }) => (
      <div className="flex flex-col ml-2">
        <ChevronUp
          className={`h-3 w-3 -mb-1 ${sortConfig?.key === sortKey && sortConfig.direction === 'asc' ? 'text-primary-600' : 'text-neutral-400'}`}
        />
        <ChevronDown
          className={`h-3 w-3 ${sortConfig?.key === sortKey && sortConfig.direction === 'desc' ? 'text-primary-600' : 'text-neutral-400'}`}
        />
      </div>
    );

    return (
      <Table>
        <TableCaption>Click column headers to sort data</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              <button
                className="flex items-center hover:text-primary-600 font-primary font-semibold"
                onClick={() => handleSort('name')}
              >
                Name
                <SortIcon sortKey="name" />
              </button>
            </TableHead>
            <TableHead>
              <button
                className="flex items-center hover:text-primary-600 font-primary font-semibold"
                onClick={() => handleSort('department')}
              >
                Department
                <SortIcon sortKey="department" />
              </button>
            </TableHead>
            <TableHead>
              <button
                className="flex items-center hover:text-primary-600 font-primary font-semibold"
                onClick={() => handleSort('role')}
              >
                Role
                <SortIcon sortKey="role" />
              </button>
            </TableHead>
            <TableHead>
              <button
                className="flex items-center hover:text-primary-600 font-primary font-semibold"
                onClick={() => handleSort('salary')}
              >
                Salary
                <SortIcon sortKey="salary" />
              </button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((person) => (
            <TableRow key={person.id}>
              <TableCell className="font-medium">{person.name}</TableCell>
              <TableCell>{person.department}</TableCell>
              <TableCell>{person.role}</TableCell>
              <TableCell>${person.salary.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// Selectable Table
export const Selectable: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const data = employees.slice(0, 5);

    const handleSelectAll = (checked: boolean) => {
      setSelectedRows(checked ? data.map((p) => p.id) : []);
    };

    const handleSelectRow = (id: number, checked: boolean) => {
      setSelectedRows(checked ? [...selectedRows, id] : selectedRows.filter((rowId) => rowId !== id));
    };

    const isAllSelected = selectedRows.length === data.length && data.length > 0;
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < data.length;

    return (
      <div className="space-y-4">
        {selectedRows.length > 0 && (
          <div className="flex items-center gap-3 p-3 bg-primary-50 border border-primary-200 rounded-lg">
            <span className="text-primary-700 font-medium">{selectedRows.length} row(s) selected</span>
            <Button variant="outline" size="sm">
              Delete Selected
            </Button>
            <Button variant="outline" size="sm">
              Export Selected
            </Button>
          </div>
        )}

        <Table>
          <TableCaption>Select rows to perform bulk actions</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={isAllSelected}
                  // @ts-ignore
                  indeterminate={isIndeterminate}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((person) => (
              <TableRow
                key={person.id}
                data-state={selectedRows.includes(person.id) ? 'selected' : undefined}
              >
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(person.id)}
                    onCheckedChange={(checked) => handleSelectRow(person.id, !!checked)}
                  />
                </TableCell>
                <TableCell className="font-medium">{person.name}</TableCell>
                <TableCell>{person.department}</TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCell>
                  <Badge variant={person.status === 'Active' ? 'success' : 'secondary'}>
                    {person.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

// Editable Table (Inline Editing)
export const Editable: Story = {
  render: () => {
    const [data, setData] = useState(employees.slice(0, 3));
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editValue, setEditValue] = useState('');

    const handleEdit = (id: number, field: string, value: string) => {
      setData(data.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
      setEditingId(null);
    };

    return (
      <Table>
        <TableCaption>Click on cells to edit inline</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((person) => (
            <TableRow key={person.id}>
              <TableCell>
                {editingId === person.id ? (
                  <Input
                    defaultValue={person.name}
                    onBlur={(e) => handleEdit(person.id, 'name', e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleEdit(person.id, 'name', (e.target as HTMLInputElement).value);
                      }
                    }}
                    autoFocus
                    className="h-8"
                  />
                ) : (
                  <button
                    onClick={() => setEditingId(person.id)}
                    className="font-medium hover:text-primary-600 text-left w-full"
                  >
                    {person.name}
                  </button>
                )}
              </TableCell>
              <TableCell className="font-secondary text-neutral-700">{person.email}</TableCell>
              <TableCell>
                <Select defaultValue={person.department}>
                  <SelectTrigger className="h-8 w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="HR">HR</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>{person.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// Expandable Row Table
export const ExpandableRows: Story = {
  render: () => {
    const [expandedRows, setExpandedRows] = useState<number[]>([]);

    const toggleRow = (id: number) => {
      setExpandedRows(expandedRows.includes(id) ? expandedRows.filter((rowId) => rowId !== id) : [...expandedRows, id]);
    };

    return (
      <Table>
        <TableCaption>Click row to expand and see additional details</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12"></TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.slice(0, 4).map((person) => (
            <React.Fragment key={person.id}>
              <TableRow className="cursor-pointer" onClick={() => toggleRow(person.id)}>
                <TableCell>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${expandedRows.includes(person.id) ? 'rotate-90' : ''}`}
                  />
                </TableCell>
                <TableCell className="font-medium">{person.name}</TableCell>
                <TableCell>{person.department}</TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCell>
                  <Badge variant={person.status === 'Active' ? 'success' : 'secondary'}>
                    {person.status}
                  </Badge>
                </TableCell>
              </TableRow>
              {expandedRows.includes(person.id) && (
                <TableRow>
                  <TableCell colSpan={5} className="bg-neutral-50">
                    <div className="p-4 space-y-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm font-semibold text-neutral-700">Email:</span>
                          <p className="text-sm text-neutral-600">{person.email}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-neutral-700">Salary:</span>
                          <p className="text-sm text-neutral-600">${person.salary.toLocaleString()}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-neutral-700">Join Date:</span>
                          <p className="text-sm text-neutral-600">{person.joinDate}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-neutral-700">Status:</span>
                          <p className="text-sm text-neutral-600">{person.status}</p>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// Draggable / Reorderable Table
export const Draggable: Story = {
  render: () => {
    const [data, setData] = useState(employees.slice(0, 4));
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

    const handleDragStart = (index: number) => {
      setDraggedIndex(index);
    };

    const handleDragOver = (e: React.DragEvent, index: number) => {
      e.preventDefault();
      if (draggedIndex === null || draggedIndex === index) return;

      const newData = [...data];
      const draggedItem = newData[draggedIndex];
      newData.splice(draggedIndex, 1);
      newData.splice(index, 0, draggedItem);

      setData(newData);
      setDraggedIndex(index);
    };

    const handleDragEnd = () => {
      setDraggedIndex(null);
    };

    return (
      <Table>
        <TableCaption>Drag rows to reorder them</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12"></TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((person, index) => (
            <TableRow
              key={person.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`cursor-move ${draggedIndex === index ? 'opacity-50' : ''}`}
            >
              <TableCell>
                <GripVertical className="h-4 w-4 text-neutral-400" />
              </TableCell>
              <TableCell className="font-medium">{person.name}</TableCell>
              <TableCell>{person.department}</TableCell>
              <TableCell>{person.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// ========================================
// FUNCTIONAL VARIANTS
// ========================================

// Paginated Table
export const Paginated: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    const totalPages = Math.ceil(employees.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = employees.slice(startIndex, endIndex);

    return (
      <div className="space-y-4">
        <Table>
          <TableCaption>Navigate through pages of data</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Salary</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((person) => (
              <TableRow key={person.id}>
                <TableCell className="font-medium">{person.name}</TableCell>
                <TableCell>{person.department}</TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCell>${person.salary.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between">
          <div className="text-sm text-neutral-600 font-secondary">
            Showing {startIndex + 1} to {Math.min(endIndex, employees.length)} of {employees.length} results
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </Button>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentPage(i + 1)}
                className="w-8 h-8 p-0"
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

// Infinite Scroll / Lazy Load Table
export const InfiniteScroll: Story = {
  render: () => {
    const [displayCount, setDisplayCount] = useState(3);
    const [loading, setLoading] = useState(false);

    const loadMore = () => {
      setLoading(true);
      setTimeout(() => {
        setDisplayCount((prev) => Math.min(prev + 3, employees.length));
        setLoading(false);
      }, 1000);
    };

    return (
      <div className="space-y-4">
        <div className="max-h-96 overflow-y-auto border border-neutral-300 rounded-lg">
          <Table>
            <TableHeader className="sticky top-0 bg-white z-10">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.slice(0, displayCount).map((person) => (
                <TableRow key={person.id}>
                  <TableCell className="font-medium">{person.name}</TableCell>
                  <TableCell>{person.department}</TableCell>
                  <TableCell>{person.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {displayCount < employees.length && (
          <div className="flex justify-center">
            <Button onClick={loadMore} disabled={loading}>
              {loading ? 'Loading...' : `Load More (${employees.length - displayCount} remaining)`}
            </Button>
          </div>
        )}
      </div>
    );
  },
};

// Grouped / Sectioned Table
export const Grouped: Story = {
  render: () => {
    const groupedData = employees.reduce((acc, person) => {
      if (!acc[person.department]) {
        acc[person.department] = [];
      }
      acc[person.department].push(person);
      return acc;
    }, {} as Record<string, typeof employees>);

    return (
      <Table>
        <TableCaption>Employees grouped by department</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(groupedData).map(([department, people]) => (
            <React.Fragment key={department}>
              <TableRow className="bg-neutral-100 hover:bg-neutral-100">
                <TableCell colSpan={4} className="font-primary font-bold text-neutral-900">
                  {department} ({people.length})
                </TableCell>
              </TableRow>
              {people.map((person) => (
                <TableRow key={person.id}>
                  <TableCell className="font-medium pl-8">{person.name}</TableCell>
                  <TableCell>{person.role}</TableCell>
                  <TableCell>${person.salary.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={person.status === 'Active' ? 'success' : 'secondary'}>
                      {person.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// Collapsible Column Table
export const CollapsibleColumns: Story = {
  render: () => {
    const [visibleColumns, setVisibleColumns] = useState({
      email: true,
      joinDate: true,
      salary: true,
    });

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 p-3 bg-neutral-50 rounded-lg">
          <span className="text-sm font-medium">Show columns:</span>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={visibleColumns.email}
              onCheckedChange={(checked) => setVisibleColumns({ ...visibleColumns, email: !!checked })}
            />
            Email
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={visibleColumns.joinDate}
              onCheckedChange={(checked) => setVisibleColumns({ ...visibleColumns, joinDate: !!checked })}
            />
            Join Date
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={visibleColumns.salary}
              onCheckedChange={(checked) => setVisibleColumns({ ...visibleColumns, salary: !!checked })}
            />
            Salary
          </label>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              {visibleColumns.email && <TableHead>Email</TableHead>}
              <TableHead>Department</TableHead>
              {visibleColumns.joinDate && <TableHead>Join Date</TableHead>}
              {visibleColumns.salary && <TableHead>Salary</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.slice(0, 4).map((person) => (
              <TableRow key={person.id}>
                <TableCell className="font-medium">{person.name}</TableCell>
                {visibleColumns.email && <TableCell>{person.email}</TableCell>}
                <TableCell>{person.department}</TableCell>
                {visibleColumns.joinDate && <TableCell>{person.joinDate}</TableCell>}
                {visibleColumns.salary && <TableCell>${person.salary.toLocaleString()}</TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

// Fixed Header Table
export const FixedHeader: Story = {
  render: () => (
    <div className="h-96 overflow-auto border border-neutral-300 rounded-lg">
      <Table>
        <TableHeader className="sticky top-0 bg-white shadow-sm z-10">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Salary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...employees, ...employees, ...employees].map((person, index) => (
            <TableRow key={`${person.id}-${index}`}>
              <TableCell className="font-medium">{person.name}</TableCell>
              <TableCell>{person.department}</TableCell>
              <TableCell>{person.role}</TableCell>
              <TableCell>${person.salary.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

// Sticky Column Table
export const StickyColumn: Story = {
  render: () => (
    <div className="overflow-x-auto border border-neutral-300 rounded-lg">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="sticky left-0 bg-white h-12 px-4 text-left font-primary font-semibold text-neutral-900 z-10 border-r border-neutral-300">
              Name
            </th>
            <th className="h-12 px-4 text-left font-primary font-semibold text-neutral-900 whitespace-nowrap">Email</th>
            <th className="h-12 px-4 text-left font-primary font-semibold text-neutral-900 whitespace-nowrap">Department</th>
            <th className="h-12 px-4 text-left font-primary font-semibold text-neutral-900 whitespace-nowrap">Role</th>
            <th className="h-12 px-4 text-left font-primary font-semibold text-neutral-900 whitespace-nowrap">Salary</th>
            <th className="h-12 px-4 text-left font-primary font-semibold text-neutral-900 whitespace-nowrap">Join Date</th>
            <th className="h-12 px-4 text-left font-primary font-semibold text-neutral-900 whitespace-nowrap">Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((person) => (
            <tr key={person.id} className="border-b border-neutral-300 hover:bg-neutral-50 transition-colors">
              <td className="sticky left-0 bg-white p-4 font-medium font-secondary text-neutral-700 z-10 border-r border-neutral-300">
                {person.name}
              </td>
              <td className="p-4 font-secondary text-neutral-700 whitespace-nowrap">{person.email}</td>
              <td className="p-4 font-secondary text-neutral-700 whitespace-nowrap">{person.department}</td>
              <td className="p-4 font-secondary text-neutral-700 whitespace-nowrap">{person.role}</td>
              <td className="p-4 font-secondary text-neutral-700 whitespace-nowrap">${person.salary.toLocaleString()}</td>
              <td className="p-4 font-secondary text-neutral-700 whitespace-nowrap">{person.joinDate}</td>
              <td className="p-4 font-secondary text-neutral-700 whitespace-nowrap">
                <Badge variant={person.status === 'Active' ? 'success' : 'secondary'}>
                  {person.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};

// ========================================
// VISUAL VARIANTS
// ========================================

// Table with Icons/Avatars
export const WithAvatars: Story = {
  render: () => (
    <Table>
      <TableCaption>Employee directory with profile pictures</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Employee</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.slice(0, 5).map((person) => (
          <TableRow key={person.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <img src={person.avatar} alt={person.name} />
                </Avatar>
                <div>
                  <div className="font-medium">{person.name}</div>
                  <div className="text-sm text-neutral-600">{person.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{person.department}</TableCell>
            <TableCell>{person.role}</TableCell>
            <TableCell>
              <Badge variant={person.status === 'Active' ? 'success' : 'secondary'}>
                {person.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Table with Tags/Badges
export const WithBadges: Story = {
  render: () => (
    <Table>
      <TableCaption>Projects with status tags and priority badges</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Tags</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { project: 'Website Redesign', status: 'In Progress', priority: 'High', tags: ['Design', 'Frontend'] },
          { project: 'API Integration', status: 'Completed', priority: 'Medium', tags: ['Backend', 'API'] },
          { project: 'Mobile App', status: 'Planning', priority: 'High', tags: ['Mobile', 'iOS', 'Android'] },
          { project: 'Database Migration', status: 'In Progress', priority: 'Critical', tags: ['Backend', 'Database'] },
        ].map((project, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{project.project}</TableCell>
            <TableCell>
              <Badge
                variant={
                  project.status === 'Completed' ? 'success' : project.status === 'In Progress' ? 'default' : 'secondary'
                }
              >
                {project.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  project.priority === 'Critical'
                    ? 'destructive'
                    : project.priority === 'High'
                      ? 'warning'
                      : 'secondary'
                }
              >
                {project.priority}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Table with Actions Column
export const WithActions: Story = {
  render: () => (
    <Table>
      <TableCaption>Employee list with action buttons</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.slice(0, 5).map((person) => (
          <TableRow key={person.id}>
            <TableCell className="font-medium">{person.name}</TableCell>
            <TableCell>{person.department}</TableCell>
            <TableCell>{person.role}</TableCell>
            <TableCell>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4 text-red-600" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Table with Row Hover States
export const WithHoverStates: Story = {
  render: () => (
    <Table>
      <TableCaption>Hover over rows to see interaction feedback</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.id}
            className="cursor-pointer hover:bg-primary-50 transition-colors"
            onClick={() => alert(`Clicked ${invoice.id}`)}
          >
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>
              <Badge
                variant={invoice.status === 'Paid' ? 'success' : invoice.status === 'Pending' ? 'warning' : 'destructive'}
              >
                {invoice.status}
              </Badge>
            </TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// ========================================
// CONTEXTUAL/HYBRID VARIANTS
// ========================================

// Card Table (already shown in Responsive variant)

// Tree Table / Hierarchical Table
export const TreeHierarchical: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string[]>(['1']);

    const treeData = [
      {
        id: '1',
        name: 'Engineering',
        type: 'Department',
        count: 15,
        children: [
          { id: '1-1', name: 'Frontend Team', type: 'Team', count: 6 },
          { id: '1-2', name: 'Backend Team', type: 'Team', count: 9 },
        ],
      },
      {
        id: '2',
        name: 'Sales',
        type: 'Department',
        count: 8,
        children: [
          { id: '2-1', name: 'Enterprise Sales', type: 'Team', count: 5 },
          { id: '2-2', name: 'SMB Sales', type: 'Team', count: 3 },
        ],
      },
      {
        id: '3',
        name: 'Marketing',
        type: 'Department',
        count: 5,
        children: [{ id: '3-1', name: 'Content Team', type: 'Team', count: 5 }],
      },
    ];

    const toggleExpand = (id: string) => {
      setExpanded(expanded.includes(id) ? expanded.filter((item) => item !== id) : [...expanded, id]);
    };

    return (
      <Table>
        <TableCaption>Organizational hierarchy with expandable departments</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Employee Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {treeData.map((dept) => (
            <React.Fragment key={dept.id}>
              <TableRow className="cursor-pointer font-medium" onClick={() => toggleExpand(dept.id)}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${expanded.includes(dept.id) ? 'rotate-90' : ''}`}
                    />
                    {dept.name}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="default">{dept.type}</Badge>
                </TableCell>
                <TableCell>{dept.count}</TableCell>
              </TableRow>
              {expanded.includes(dept.id) &&
                dept.children?.map((child) => (
                  <TableRow key={child.id} className="bg-neutral-50">
                    <TableCell>
                      <div className="pl-8">{child.name}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{child.type}</Badge>
                    </TableCell>
                    <TableCell>{child.count}</TableCell>
                  </TableRow>
                ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// Comparison Table
export const Comparison: Story = {
  render: () => (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <caption className="mt-0 mb-4 text-sm text-neutral-600 font-secondary">
          Compare internet service plans
        </caption>
        <thead>
          <tr>
            <th className="p-4 text-left font-primary font-semibold text-neutral-900 border-b border-neutral-300 bg-neutral-50">
              Features
            </th>
            <th className="p-4 text-center font-primary font-semibold text-neutral-900 border-b border-l border-neutral-300">
              <div>Essential</div>
              <div className="text-2xl font-bold text-primary-600 mt-2">$69.95</div>
              <div className="text-xs text-neutral-600">/month</div>
            </th>
            <th className="p-4 text-center font-primary font-semibold text-neutral-900 border-b border-l border-neutral-300 bg-primary-50">
              <div>Performance</div>
              <div className="text-2xl font-bold text-primary-600 mt-2">$89.95</div>
              <div className="text-xs text-neutral-600">/month</div>
              <Badge variant="default" className="mt-2">
                Popular
              </Badge>
            </th>
            <th className="p-4 text-center font-primary font-semibold text-neutral-900 border-b border-l border-neutral-300">
              <div>Enterprise</div>
              <div className="text-2xl font-bold text-primary-600 mt-2">$299.95</div>
              <div className="text-xs text-neutral-600">/month</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            { feature: 'Download Speed', essential: '25 Mbps', performance: '150 Mbps', enterprise: '1 Gbps' },
            { feature: 'Upload Speed', essential: '5 Mbps', performance: '25 Mbps', enterprise: '100 Mbps' },
            { feature: 'Static IP', essential: '✗', performance: '✓', enterprise: '✓' },
            { feature: '24/7 Support', essential: '✓', performance: '✓', enterprise: '✓' },
            { feature: 'SLA Guarantee', essential: '✗', performance: '99.9%', enterprise: '99.99%' },
            { feature: 'Priority Support', essential: '✗', performance: '✗', enterprise: '✓' },
          ].map((row, index) => (
            <tr key={index} className={index % 2 === 1 ? 'bg-neutral-50' : ''}>
              <td className="p-4 font-medium font-secondary text-neutral-900 border-b border-neutral-300">{row.feature}</td>
              <td className="p-4 text-center font-secondary text-neutral-700 border-b border-l border-neutral-300">
                {row.essential}
              </td>
              <td className="p-4 text-center font-secondary text-neutral-700 border-b border-l border-neutral-300 bg-primary-50/50">
                {row.performance}
              </td>
              <td className="p-4 text-center font-secondary text-neutral-700 border-b border-l border-neutral-300">
                {row.enterprise}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-4"></td>
            <td className="p-4 text-center border-t border-l border-neutral-300">
              <Button variant="outline">Select Plan</Button>
            </td>
            <td className="p-4 text-center border-t border-l border-neutral-300 bg-primary-50/50">
              <Button>Select Plan</Button>
            </td>
            <td className="p-4 text-center border-t border-l border-neutral-300">
              <Button variant="outline">Contact Sales</Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  ),
};

// Empty State Table
export const EmptyState: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} className="h-64">
            <div className="flex flex-col items-center justify-center text-center py-12">
              <Search className="h-12 w-12 text-neutral-400 mb-4" />
              <h3 className="font-primary font-semibold text-lg text-neutral-900 mb-2">No employees found</h3>
              <p className="text-neutral-600 font-secondary mb-4 max-w-sm">
                Get started by adding your first employee to the system. You can import from CSV or add manually.
              </p>
              <div className="flex gap-2">
                <Button>Add Employee</Button>
                <Button variant="outline">Import from CSV</Button>
              </div>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Loading Table
export const Loading: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 5 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="h-4 w-32" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-48" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-24" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-36" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// ========================================
// COMPLETE / ALL FEATURES COMBINED
// ========================================

export const CompleteTable: Story = {
  render: () => {
    const [data, setData] = useState([...employees]);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('all');
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    // Filter data
    const filteredData = data.filter((person) => {
      const matchesSearch =
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = departmentFilter === 'all' || person.department === departmentFilter;
      return matchesSearch && matchesDepartment;
    });

    // Paginate data
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    const handleSort = (key: string) => {
      let direction: 'asc' | 'desc' = 'asc';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
      }

      const sorted = [...filteredData].sort((a, b) => {
        const aVal = a[key as keyof typeof a];
        const bVal = b[key as keyof typeof b];

        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return direction === 'asc' ? aVal - bVal : bVal - aVal;
        }

        const aStr = String(aVal).toLowerCase();
        const bStr = String(bVal).toLowerCase();
        if (aStr < bStr) return direction === 'asc' ? -1 : 1;
        if (aStr > bStr) return direction === 'asc' ? 1 : -1;
        return 0;
      });

      setData(sorted);
      setSortConfig({ key, direction });
      setCurrentPage(1);
    };

    const departments = Array.from(new Set(employees.map((p) => p.department)));

    const SortIcon = ({ sortKey }: { sortKey: string }) => (
      <div className="flex flex-col ml-2">
        <ChevronUp
          className={`h-3 w-3 -mb-1 ${sortConfig?.key === sortKey && sortConfig.direction === 'asc' ? 'text-primary-600' : 'text-neutral-400'}`}
        />
        <ChevronDown
          className={`h-3 w-3 ${sortConfig?.key === sortKey && sortConfig.direction === 'desc' ? 'text-primary-600' : 'text-neutral-400'}`}
        />
      </div>
    );

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold font-primary">Complete Table</h3>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <span className="text-sm text-neutral-600">{filteredData.length} employees</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
          <div className="flex-1">
            <Input placeholder="Search employees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="w-48">
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Selection Actions */}
        {selectedRows.length > 0 && (
          <div className="flex items-center gap-3 p-3 bg-primary-50 border border-primary-200 rounded-lg">
            <span className="text-primary-700 font-medium">{selectedRows.length} row(s) selected</span>
            <Button variant="outline" size="sm">
              Bulk Action
            </Button>
          </div>
        )}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={currentData.length > 0 && currentData.every((p) => selectedRows.includes(p.id))}
                  onCheckedChange={(checked) => {
                    setSelectedRows(checked ? currentData.map((p) => p.id) : []);
                  }}
                />
              </TableHead>
              <TableHead>
                <button
                  className="flex items-center hover:text-primary-600 font-primary font-semibold"
                  onClick={() => handleSort('name')}
                >
                  Name
                  <SortIcon sortKey="name" />
                </button>
              </TableHead>
              <TableHead>
                <button
                  className="flex items-center hover:text-primary-600 font-primary font-semibold"
                  onClick={() => handleSort('department')}
                >
                  Department
                  <SortIcon sortKey="department" />
                </button>
              </TableHead>
              <TableHead>Role</TableHead>
              <TableHead>
                <button
                  className="flex items-center hover:text-primary-600 font-primary font-semibold"
                  onClick={() => handleSort('salary')}
                >
                  Salary
                  <SortIcon sortKey="salary" />
                </button>
              </TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((person) => (
              <TableRow key={person.id} data-state={selectedRows.includes(person.id) ? 'selected' : undefined}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(person.id)}
                    onCheckedChange={(checked) => {
                      setSelectedRows(
                        checked ? [...selectedRows, person.id] : selectedRows.filter((id) => id !== person.id)
                      );
                    }}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <img src={person.avatar} alt={person.name} />
                    </Avatar>
                    <div>
                      <div className="font-medium">{person.name}</div>
                      <div className="text-sm text-neutral-600">{person.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{person.department}</TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCell>${person.salary.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={person.status === 'Active' ? 'success' : 'secondary'}>{person.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-neutral-600 font-secondary">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} results
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </Button>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? 'default' : 'outline'}
                size="sm"
                onClick={() => setCurrentPage(i + 1)}
                className="w-8 h-8 p-0"
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  },
};