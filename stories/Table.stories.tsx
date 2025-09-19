import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
  Button,
  Input,
  Checkbox,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../src/components';
import { ChevronUp, ChevronDown, Download, Search } from 'lucide-react';

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Table component for displaying tabular data following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const invoices = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
];

export const Default: Story = {
  render: () => (
    <Table>
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
            <TableCell>
              <Badge
                variant={
                  invoice.status === "Paid" ? "success" :
                  invoice.status === "Pending" ? "warning" : "destructive"
                }
              >
                {invoice.status}
              </Badge>
            </TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table variant="striped">
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Speed</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Availability</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Business Internet Essential</TableCell>
          <TableCell>25/5 Mbps</TableCell>
          <TableCell>$69.95/mo</TableCell>
          <TableCell><Badge variant="success">Available</Badge></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Business Internet Performance</TableCell>
          <TableCell>75/20 Mbps</TableCell>
          <TableCell>$89.95/mo</TableCell>
          <TableCell><Badge variant="success">Available</Badge></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Business Internet Advanced</TableCell>
          <TableCell>150/25 Mbps</TableCell>
          <TableCell>$149.95/mo</TableCell>
          <TableCell><Badge variant="warning">Limited</Badge></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Enhanced dataset for advanced table examples
const enhancedData = [
  { id: 1, name: "Alice Johnson", email: "alice@company.com", department: "Engineering", role: "Senior Developer", salary: 95000, status: "Active", joinDate: "2022-01-15" },
  { id: 2, name: "Bob Smith", email: "bob@company.com", department: "Marketing", role: "Marketing Manager", salary: 78000, status: "Active", joinDate: "2021-11-08" },
  { id: 3, name: "Carol Williams", email: "carol@company.com", department: "Engineering", role: "DevOps Engineer", salary: 88000, status: "Active", joinDate: "2023-03-22" },
  { id: 4, name: "David Brown", email: "david@company.com", department: "Sales", role: "Sales Director", salary: 105000, status: "Active", joinDate: "2020-07-10" },
  { id: 5, name: "Eva Garcia", email: "eva@company.com", department: "HR", role: "HR Specialist", salary: 65000, status: "Inactive", joinDate: "2022-09-05" },
  { id: 6, name: "Frank Miller", email: "frank@company.com", department: "Engineering", role: "Frontend Developer", salary: 82000, status: "Active", joinDate: "2023-01-12" },
  { id: 7, name: "Grace Lee", email: "grace@company.com", department: "Marketing", role: "Content Creator", salary: 58000, status: "Active", joinDate: "2023-05-18" },
  { id: 8, name: "Henry Wilson", email: "henry@company.com", department: "Sales", role: "Account Executive", salary: 72000, status: "Active", joinDate: "2022-06-30" },
];

// Sortable Table
export const SortableTable: Story = {
  render: () => {
    const [data, setData] = useState(enhancedData.slice(0, 5));
    const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null);

    const handleSort = (key: string) => {
      let direction: 'asc' | 'desc' = 'asc';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
      }
      
      const sortedData = [...data].sort((a, b) => {
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
      
      setData(sortedData);
      setSortConfig({ key, direction });
    };

    const SortableHeader = ({ children, sortKey }: { children: React.ReactNode, sortKey: string }) => (
      <TableHead>
        <button 
          className="flex items-center gap-2 hover:text-primary-600 font-primary font-semibold"
          onClick={() => handleSort(sortKey)}
        >
          {children}
          <div className="flex flex-col">
            <ChevronUp 
              className={`h-3 w-3 ${sortConfig?.key === sortKey && sortConfig.direction === 'asc' ? 'text-primary-600' : 'text-gray-400'}`} 
            />
            <ChevronDown 
              className={`h-3 w-3 -mt-1 ${sortConfig?.key === sortKey && sortConfig.direction === 'desc' ? 'text-primary-600' : 'text-gray-400'}`} 
            />
          </div>
        </button>
      </TableHead>
    );

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Sortable Columns</h3>
          <p className="text-sm text-gray-600">Click column headers to sort</p>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <SortableHeader sortKey="name">Name</SortableHeader>
              <SortableHeader sortKey="department">Department</SortableHeader>
              <SortableHeader sortKey="role">Role</SortableHeader>
              <SortableHeader sortKey="salary">Salary</SortableHeader>
              <SortableHeader sortKey="status">Status</SortableHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((person) => (
              <TableRow key={person.id}>
                <TableCell className="font-medium">{person.name}</TableCell>
                <TableCell>{person.department}</TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCell>${person.salary.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={person.status === "Active" ? "success" : "secondary"}>
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

// Zebra Striped Table
export const ZebraStriped: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Zebra Striped Table</h3>
        <p className="text-sm text-gray-600">Alternating row colors for better readability</p>
      </div>
      
      <Table variant="striped">
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Join Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {enhancedData.slice(0, 6).map((person) => (
            <TableRow key={person.id}>
              <TableCell>
                <div>
                  <div className="font-medium">{person.name}</div>
                  <div className="text-sm text-gray-500">{person.email}</div>
                </div>
              </TableCell>
              <TableCell>{person.department}</TableCell>
              <TableCell>{person.role}</TableCell>
              <TableCell>{new Date(person.joinDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge variant={person.status === "Active" ? "success" : "secondary"}>
                  {person.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
};

// Paginated Table
export const PaginatedTable: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    
    const totalItems = enhancedData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = enhancedData.slice(startIndex, endIndex);

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Paginated Table</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Rows per page:</span>
            <Select value={String(itemsPerPage)} onValueChange={(value) => {
              setItemsPerPage(Number(value));
              setCurrentPage(1);
            }}>
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="8">8</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Salary</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((person) => (
              <TableRow key={person.id}>
                <TableCell className="font-medium">{person.name}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.department}</TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCell>${person.salary.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} results
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                  className="w-8 h-8 p-0"
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage >= totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

// Filterable Table
export const FilterableTable: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');

    const departments = Array.from(new Set(enhancedData.map(p => p.department)));
    const filteredData = enhancedData.filter(person => {
      const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           person.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           person.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = departmentFilter === 'all' || person.department === departmentFilter;
      const matchesStatus = statusFilter === 'all' || person.status === statusFilter;
      
      return matchesSearch && matchesDepartment && matchesStatus;
    });

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filterable Table</h3>
          <div className="text-sm text-gray-600">
            {filteredData.length} of {enhancedData.length} employees
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <Input
              placeholder="Search by name, email, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              leftIcon="analytics"
            />
          </div>
          <div className="w-48">
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-32">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((person) => (
                <TableRow key={person.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{person.name}</div>
                      <div className="text-sm text-gray-500">{person.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{person.department}</TableCell>
                  <TableCell>{person.role}</TableCell>
                  <TableCell>${person.salary.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={person.status === "Active" ? "success" : "secondary"}>
                      {person.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                  No employees match your search criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  },
};

// Downloadable Table
export const DownloadableTable: Story = {
  render: () => {
    const downloadCSV = () => {
      const headers = ['Name', 'Email', 'Department', 'Role', 'Salary', 'Status'];
      const csvContent = [
        headers.join(','),
        ...enhancedData.map(person => [
          person.name,
          person.email,
          person.department,
          person.role,
          person.salary,
          person.status
        ].join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'employees.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Downloadable Table</h3>
          <Button onClick={downloadCSV} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download CSV
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {enhancedData.slice(0, 5).map((person) => (
              <TableRow key={person.id}>
                <TableCell className="font-medium">{person.name}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.department}</TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCell>${person.salary.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={person.status === "Active" ? "success" : "secondary"}>
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

// Selectable Table
export const SelectableTable: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedRows(enhancedData.slice(0, 6).map(p => p.id));
      } else {
        setSelectedRows([]);
      }
    };

    const handleSelectRow = (id: number, checked: boolean) => {
      if (checked) {
        setSelectedRows([...selectedRows, id]);
      } else {
        setSelectedRows(selectedRows.filter(rowId => rowId !== id));
      }
    };

    const isAllSelected = selectedRows.length === 6;

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Selectable Table</h3>
          <div className="text-sm text-gray-600">
            {selectedRows.length} of 6 rows selected
          </div>
        </div>

        {selectedRows.length > 0 && (
          <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <span className="text-blue-700">{selectedRows.length} rows selected</span>
            <Button variant="outline" size="sm" className="text-blue-700">
              Delete Selected
            </Button>
            <Button variant="outline" size="sm" className="text-blue-700">
              Export Selected
            </Button>
          </div>
        )}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {enhancedData.slice(0, 6).map((person) => (
              <TableRow key={person.id} className={selectedRows.includes(person.id) ? 'bg-blue-50' : ''}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(person.id)}
                    onCheckedChange={(checked) => handleSelectRow(person.id, !!checked)}
                  />
                </TableCell>
                <TableCell className="font-medium">{person.name}</TableCell>
                <TableCell>{person.department}</TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCell>${person.salary.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={person.status === "Active" ? "success" : "secondary"}>
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

// Complete Featured Table (All features combined)
export const CompleteTable: Story = {
  render: () => {
    const [data, setData] = useState(enhancedData);
    const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('all');
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Filter data
    const filteredData = data.filter(person => {
      const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           person.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = departmentFilter === 'all' || person.department === departmentFilter;
      return matchesSearch && matchesDepartment;
    });

    // Paginate data
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    const handleSort = (key: string) => {
      let direction: 'asc' | 'desc' = 'asc';
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
      }
      
      const sortedData = [...filteredData].sort((a, b) => {
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
      
      setData(sortedData);
      setSortConfig({ key, direction });
      setCurrentPage(1);
    };

    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedRows(currentData.map(p => p.id));
      } else {
        setSelectedRows([]);
      }
    };

    const downloadCSV = () => {
      const dataToExport = selectedRows.length > 0 
        ? filteredData.filter(p => selectedRows.includes(p.id))
        : filteredData;
      
      const headers = ['Name', 'Email', 'Department', 'Role', 'Salary', 'Status'];
      const csvContent = [
        headers.join(','),
        ...dataToExport.map(person => [
          person.name,
          person.email,
          person.department,
          person.role,
          person.salary,
          person.status
        ].join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `employees-${selectedRows.length > 0 ? 'selected' : 'all'}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    };

    const departments = Array.from(new Set(enhancedData.map(p => p.department)));

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Complete Table</h3>
          <div className="flex items-center gap-2">
            <Button onClick={downloadCSV} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export {selectedRows.length > 0 ? 'Selected' : 'All'}
            </Button>
            <div className="text-sm text-gray-600">
              {totalItems} employees
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex-1">
            <Input
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              leftIcon="analytics"
            />
          </div>
          <div className="w-48">
            <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
              <SelectTrigger>
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {departments.map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Selection Actions */}
        {selectedRows.length > 0 && (
          <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <span className="text-blue-700">{selectedRows.length} rows selected</span>
            <Button variant="outline" size="sm" className="text-blue-700">
              Bulk Action
            </Button>
          </div>
        )}

        <Table variant="striped">
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={currentData.length > 0 && currentData.every(p => selectedRows.includes(p.id))}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>
                <button 
                  className="flex items-center gap-2 hover:text-primary-600 font-primary font-semibold"
                  onClick={() => handleSort('name')}
                >
                  Name
                  <div className="flex flex-col">
                    <ChevronUp className={`h-3 w-3 ${sortConfig?.key === 'name' && sortConfig.direction === 'asc' ? 'text-primary-600' : 'text-gray-400'}`} />
                    <ChevronDown className={`h-3 w-3 -mt-1 ${sortConfig?.key === 'name' && sortConfig.direction === 'desc' ? 'text-primary-600' : 'text-gray-400'}`} />
                  </div>
                </button>
              </TableHead>
              <TableHead>
                <button 
                  className="flex items-center gap-2 hover:text-primary-600 font-primary font-semibold"
                  onClick={() => handleSort('department')}
                >
                  Department
                  <div className="flex flex-col">
                    <ChevronUp className={`h-3 w-3 ${sortConfig?.key === 'department' && sortConfig.direction === 'asc' ? 'text-primary-600' : 'text-gray-400'}`} />
                    <ChevronDown className={`h-3 w-3 -mt-1 ${sortConfig?.key === 'department' && sortConfig.direction === 'desc' ? 'text-primary-600' : 'text-gray-400'}`} />
                  </div>
                </button>
              </TableHead>
              <TableHead>Role</TableHead>
              <TableHead>
                <button 
                  className="flex items-center gap-2 hover:text-primary-600 font-primary font-semibold"
                  onClick={() => handleSort('salary')}
                >
                  Salary
                  <div className="flex flex-col">
                    <ChevronUp className={`h-3 w-3 ${sortConfig?.key === 'salary' && sortConfig.direction === 'asc' ? 'text-primary-600' : 'text-gray-400'}`} />
                    <ChevronDown className={`h-3 w-3 -mt-1 ${sortConfig?.key === 'salary' && sortConfig.direction === 'desc' ? 'text-primary-600' : 'text-gray-400'}`} />
                  </div>
                </button>
              </TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((person) => (
              <TableRow key={person.id} className={selectedRows.includes(person.id) ? 'bg-blue-50' : ''}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(person.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedRows([...selectedRows, person.id]);
                      } else {
                        setSelectedRows(selectedRows.filter(id => id !== person.id));
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{person.name}</div>
                    <div className="text-sm text-gray-500">{person.email}</div>
                  </div>
                </TableCell>
                <TableCell>{person.department}</TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCell>${person.salary.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={person.status === "Active" ? "success" : "secondary"}>
                    {person.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} results
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Rows per page:</span>
              <Select value={String(itemsPerPage)} onValueChange={(value) => {
                setItemsPerPage(Number(value));
                setCurrentPage(1);
              }}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              Previous
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className="w-8 h-8 p-0"
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage >= totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  },
};