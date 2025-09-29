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
import { Label } from '../src/components/ui/label';
import { Icon } from '../packages/icons/src/Icon';

const meta: Meta = {
  title: 'Enterprise/User Management',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Enterprise user management interface with advanced table features, user roles, and bulk operations.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleUsers = [
  { id: 1, name: "Sarah Johnson", email: "s.johnson@enterprise.com", role: "Admin", department: "IT", status: "Active", lastLogin: "2024-01-15", locations: ["New York", "Boston"] },
  { id: 2, name: "Michael Chen", email: "m.chen@enterprise.com", role: "Manager", department: "Operations", status: "Active", lastLogin: "2024-01-14", locations: ["Chicago"] },
  { id: 3, name: "Emily Rodriguez", email: "e.rodriguez@enterprise.com", role: "User", department: "Finance", status: "Inactive", lastLogin: "2024-01-10", locations: ["Dallas", "Austin"] },
  { id: 4, name: "David Kim", email: "d.kim@enterprise.com", role: "User", department: "Marketing", status: "Active", lastLogin: "2024-01-15", locations: ["Seattle"] },
  { id: 5, name: "Jessica Williams", email: "j.williams@enterprise.com", role: "Manager", department: "HR", status: "Active", lastLogin: "2024-01-13", locations: ["Los Angeles"] },
  { id: 6, name: "Robert Taylor", email: "r.taylor@enterprise.com", role: "User", department: "Sales", status: "Pending", lastLogin: "Never", locations: ["Miami"] },
  { id: 7, name: "Lisa Anderson", email: "l.anderson@enterprise.com", role: "Admin", department: "IT", status: "Active", lastLogin: "2024-01-15", locations: ["New York"] },
  { id: 8, name: "James Wilson", email: "j.wilson@enterprise.com", role: "User", department: "Operations", status: "Active", lastLogin: "2024-01-12", locations: ["Phoenix"] },
];

export const UserManagementInterface: Story = {
  render: () => {
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');
    const [sortColumn, setSortColumn] = useState('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    const filteredUsers = sampleUsers
      .filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = roleFilter === 'all' || user.role === roleFilter;
        const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
        return matchesSearch && matchesRole && matchesStatus;
      })
      .sort((a, b) => {
        const aValue = a[sortColumn as keyof typeof a];
        const bValue = b[sortColumn as keyof typeof b];
        const modifier = sortDirection === 'asc' ? 1 : -1;
        return aValue < bValue ? -1 * modifier : aValue > bValue ? 1 * modifier : 0;
      });

    const handleSort = (column: string) => {
      if (sortColumn === column) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortColumn(column);
        setSortDirection('asc');
      }
    };

    const toggleUserSelection = (userId: number) => {
      setSelectedUsers(prev => 
        prev.includes(userId) 
          ? prev.filter(id => id !== userId)
          : [...prev, userId]
      );
    };

    const toggleSelectAll = () => {
      setSelectedUsers(
        selectedUsers.length === filteredUsers.length 
          ? [] 
          : filteredUsers.map(user => user.id)
      );
    };

    const getStatusBadge = (status: string) => {
      switch (status) {
        case 'Active':
          return <Badge variant="success" leadingIcon={<Icon name="check" size={14} />}>Active</Badge>;
        case 'Inactive':
          return <Badge variant="secondary">Inactive</Badge>;
        case 'Pending':
          return <Badge variant="warning" leadingIcon={<Icon name="alert" size={14} />}>Pending</Badge>;
        default:
          return <Badge variant="outline">{status}</Badge>;
      }
    };

    const getRoleBadge = (role: string) => {
      switch (role) {
        case 'Admin':
          return <Badge variant="info" leadingIcon={<Icon name="configure" size={14} />}>Admin</Badge>;
        case 'Manager':
          return <Badge variant="secondary" leadingIcon={<Icon name="users" size={14} />}>Manager</Badge>;
        case 'User':
          return <Badge variant="outline" leadingIcon={<Icon name="users" size={14} />}>User</Badge>;
        default:
          return <Badge variant="outline">{role}</Badge>;
      }
    };

    return (
      <div className="min-h-screen bg-[var(--ds-color-bg-surface)]">
        {/* Header */}
        <header className="bg-[var(--ds-color-bg-canvas)] border-b border-[var(--ds-color-neutral-300)] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-primary font-semibold text-xl text-[var(--ds-color-text-primary)]">User Management</h1>
              <p className="text-sm text-[var(--ds-color-text-muted)]">Manage enterprise user accounts and permissions</p>
            </div>
            <div className="flex items-center gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Add User</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>
                      Create a new user account for your organization.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">Name</Label>
                      <Input id="name" placeholder="Full name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">Email</Label>
                      <Input id="email" type="email" placeholder="user@company.com" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="role" className="text-right">Role</Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="user">User</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Create User</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </header>

        <div className="p-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>
                    Manage user accounts, roles, and permissions across your organization
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{filteredUsers.length} users</Badge>
                  {selectedUsers.length > 0 && (
                    <Badge variant="info">
                      {selectedUsers.length} selected
                    </Badge>
                  )}
                </div>
              </div>

              {/* Filters and Search */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search users by name, email, or department..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={roleFilter} onValueChange={setRoleFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Manager">Manager</SelectItem>
                      <SelectItem value="User">User</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Bulk Actions */}
              {selectedUsers.length > 0 && (
                <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <span className="text-sm font-medium text-blue-900">
                    {selectedUsers.length} user{selectedUsers.length > 1 ? 's' : ''} selected
                  </span>
                  <div className="flex gap-2 ml-auto">
                    <Button size="sm" variant="outline">Export Selected</Button>
                    <Button size="sm" variant="outline">Change Role</Button>
                    <Button size="sm" variant="outline">Deactivate</Button>
                    <Button size="sm" variant="destructive">Trash</Button>
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
                          checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                          onCheckedChange={toggleSelectAll}
                        />
                      </TableHead>
                      <TableHead>
                        <Button
                          variant="ghost"
                          className="h-auto p-0 font-semibold text-left justify-start"
                          onClick={() => handleSort('name')}
                        >
                          User
                          {sortColumn === 'name' && (
                            <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </Button>
                      </TableHead>
                      <TableHead>
                        <Button
                          variant="ghost"
                          className="h-auto p-0 font-semibold text-left justify-start"
                          onClick={() => handleSort('role')}
                        >
                          Role
                          {sortColumn === 'role' && (
                            <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </Button>
                      </TableHead>
                      <TableHead>
                        <Button
                          variant="ghost"
                          className="h-auto p-0 font-semibold text-left justify-start"
                          onClick={() => handleSort('department')}
                        >
                          Department
                          {sortColumn === 'department' && (
                            <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </Button>
                      </TableHead>
                      <TableHead>
                        <Button
                          variant="ghost"
                          className="h-auto p-0 font-semibold text-left justify-start"
                          onClick={() => handleSort('status')}
                        >
                          Status
                          {sortColumn === 'status' && (
                            <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </Button>
                      </TableHead>
                      <TableHead>
                        <Button
                          variant="ghost"
                          className="h-auto p-0 font-semibold text-left justify-start"
                          onClick={() => handleSort('lastLogin')}
                        >
                          Last Login
                          {sortColumn === 'lastLogin' && (
                            <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                          )}
                        </Button>
                      </TableHead>
                      <TableHead>Locations</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedUsers.includes(user.id)}
                            onCheckedChange={() => toggleUserSelection(user.id)}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback>
                                {user.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-[var(--ds-color-text-primary)]">{user.name}</div>
                              <div className="text-sm text-[var(--ds-color-text-muted)]">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getRoleBadge(user.role)}
                        </TableCell>
                        <TableCell>
                          <span className="text-[var(--ds-color-text-primary)]">{user.department}</span>
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(user.status)}
                        </TableCell>
                        <TableCell>
                          <span className="text-[var(--ds-color-text-primary)]">{user.lastLogin}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {user.locations.slice(0, 2).map((location, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {location}
                              </Badge>
                            ))}
                            {user.locations.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{user.locations.length - 2}
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Menu>
                            <MenuTrigger asChild>
                              <Button variant="ghost" size="sm"><Icon name="contextmenu" size={16} /></Button>
                            </MenuTrigger>
                            <MenuContent align="end">
                              <MenuItem>View Profile</MenuItem>
                              <MenuItem>Edit User</MenuItem>
                              <MenuItem>Reset Password</MenuItem>
                              <MenuSeparator />
                              <MenuItem>Change Role</MenuItem>
                              <MenuItem>Manage Access</MenuItem>
                              <MenuSeparator />
                              <MenuItem className="text-red-600">
                                Deactivate User
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
                  Showing {filteredUsers.length} of {sampleUsers.length} users
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
      </div>
    );
  },
};