import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../src/components/ui/dialog';
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { Label } from '../src/components/ui/label';
import { Textarea } from '../src/components/ui/textarea';
import { Plus, Settings, Trash, AlertTriangle } from 'lucide-react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { ChartTooltip } from '../src/components/ui/chart';
import DialogDocs from './docs/Dialog.mdx';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      page: DialogDocs,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Basic Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Basic Dialog</DialogTitle>
            <DialogDescription>This is a basic dialog example.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Trash</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this item? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Trash</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Create</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Item</DialogTitle>
            <DialogDescription>Fill out the form below to create a new item.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input placeholder="Item name" />
            <Textarea placeholder="Item description" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};

// Basic Dialog
export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Confirmation Dialog
export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash className="mr-2 h-4 w-4" />
          Trash Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            Trash Account
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Trash Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Form Dialog with controlled state
export const FormDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Submitted:', { title, description });
      setOpen(false);
      setTitle('');
      setDescription('');
    };

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create New Project
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
              <DialogDescription>
                Add a new project to your workspace. Fill in the details below.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="project-title">Project Title</Label>
                <Input
                  id="project-title"
                  placeholder="Enter project title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="project-description">Description</Label>
                <Textarea
                  id="project-description"
                  placeholder="Enter project description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Create Project</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  },
};

// Settings Dialog
export const SettingsDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Application Settings</DialogTitle>
          <DialogDescription>
            Manage your application preferences and account settings.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <h4 className="font-medium text-neutral-900">Profile Information</h4>
            <div className="grid gap-3">
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="user@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="display-name">Display Name</Label>
                <Input id="display-name" defaultValue="John Doe" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-neutral-900">Preferences</h4>
            <div className="grid gap-3">
              <div className="grid gap-2">
                <Label htmlFor="language">Language</Label>
                <Input id="language" defaultValue="English" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" defaultValue="UTC-5 (Eastern Time)" />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Simple Alert Dialog
export const AlertDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show Alert</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Important Notice</DialogTitle>
          <DialogDescription>
            Your session will expire in 5 minutes. Please save your work to avoid losing any changes.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button>Understood</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

// Full Width Dialog
export const FullWidthDialog: Story = {
  render: () => {
    const analyticsData = [
      { month: 'Jan', users: 4000, sessions: 2400 },
      { month: 'Feb', users: 3000, sessions: 1398 },
      { month: 'Mar', users: 2000, sessions: 9800 },
      { month: 'Apr', users: 2780, sessions: 3908 },
      { month: 'May', users: 1890, sessions: 4800 },
      { month: 'Jun', users: 2390, sessions: 3800 },
    ];

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Full Width</Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Data Analytics Dashboard</DialogTitle>
            <DialogDescription>
              View and analyze your application metrics and performance data.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h3 className="font-medium text-neutral-900">Total Users</h3>
                <p className="text-2xl font-bold text-primary-600">12,345</p>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h3 className="font-medium text-neutral-900">Active Sessions</h3>
                <p className="text-2xl font-bold text-primary-600">1,234</p>
              </div>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h3 className="font-medium text-neutral-900">Conversion Rate</h3>
                <p className="text-2xl font-bold text-primary-600">3.45%</p>
              </div>
            </div>
            <div className="bg-neutral-50 p-4 rounded-lg h-[300px]">
              <h4 className="font-medium text-neutral-900 mb-4">User Activity</h4>
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={analyticsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--ds-color-neutral-300)" />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                    axisLine={{ stroke: 'var(--ds-color-neutral-300)' }}
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: 'var(--ds-color-text-muted)' }}
                    axisLine={{ stroke: 'var(--ds-color-neutral-300)' }}
                  />
                  <ChartTooltip />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="var(--ds-color-intent-primary)"
                    strokeWidth={2}
                    name="Users"
                  />
                  <Line
                    type="monotone"
                    dataKey="sessions"
                    stroke="var(--ds-color-intent-info)"
                    strokeWidth={2}
                    name="Sessions"
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">Export Data</Button>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

// Dialog without close button (must use DialogClose explicitly)
export const NoCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open (No X)</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] [&>button]:hidden">
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            This dialog can only be closed using the buttons below.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-neutral-600">
            Please choose one of the options below to continue.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Confirm</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};