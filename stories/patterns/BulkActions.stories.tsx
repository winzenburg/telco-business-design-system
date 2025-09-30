import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BulkActionBar, useSelection } from '../../src/components/patterns/BulkActionBar';
import { ConfirmationModal } from '../../src/components/patterns/ConfirmationModal';
import { Checkbox } from '../../src/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../src/components/ui/table';
import { Badge } from '../../src/components/ui/badge';

const meta = {
  title: 'Patterns/Bulk Actions & Multi-Select',
  component: BulkActionBar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive patterns for bulk actions, multi-select functionality, and confirmation modals in enterprise applications.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BulkActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
interface User {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  role: string;
}

const sampleUsers: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', status: 'active', role: 'Admin' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', status: 'active', role: 'User' },
  { id: '3', name: 'Carol Williams', email: 'carol@example.com', status: 'inactive', role: 'User' },
  { id: '4', name: 'David Brown', email: 'david@example.com', status: 'pending', role: 'User' },
  { id: '5', name: 'Eve Davis', email: 'eve@example.com', status: 'active', role: 'Editor' },
  { id: '6', name: 'Frank Miller', email: 'frank@example.com', status: 'active', role: 'User' },
  { id: '7', name: 'Grace Wilson', email: 'grace@example.com', status: 'inactive', role: 'User' },
  { id: '8', name: 'Henry Moore', email: 'henry@example.com', status: 'active', role: 'Admin' },
];

const statusColors = {
  active: 'success',
  inactive: 'secondary',
  pending: 'warning',
} as const;

export const FloatingToolbar: Story = {
  render: () => {
    const [users, setUsers] = useState(sampleUsers);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showArchiveConfirm, setShowArchiveConfirm] = useState(false);

    const selection = useSelection({
      items: users,
      getItemId: (user) => user.id,
    });

    const handleDelete = async () => {
      // Simulate async deletion
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUsers(users.filter((u) => !selection.selectedIds.includes(u.id)));
      selection.clearSelection();
    };

    const handleArchive = async () => {
      // Simulate async archival
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(`Archived ${selection.selectedCount} users`);
      selection.clearSelection();
    };

    const handleExport = () => {
      alert(`Exported ${selection.selectedCount} users to CSV`);
    };

    return (
      <div className="p-6 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">User Management</h2>

          <div className="bg-white rounded-lg border border-[var(--ds-color-neutral-300)]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selection.isAllSelected}
                      onCheckedChange={selection.toggleAll}
                      aria-label="Select all users"
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Checkbox
                        checked={selection.isSelected(user)}
                        onCheckedChange={() => selection.toggleItem(user)}
                        aria-label={`Select ${user.name}`}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge variant={statusColors[user.status]}>
                        {user.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <BulkActionBar
            selectedCount={selection.selectedCount}
            totalCount={users.length}
            selectedIds={selection.selectedIds}
            onClearSelection={selection.clearSelection}
            onSelectAll={selection.selectAll}
            position="floating"
            actions={[
              {
                id: 'export',
                label: 'Export',
                icon: 'download',
                variant: 'default',
                onClick: handleExport,
              },
              {
                id: 'archive',
                label: 'Archive',
                icon: 'archive',
                variant: 'default',
                onClick: () => setShowArchiveConfirm(true),
              },
              {
                id: 'delete',
                label: 'Delete',
                icon: 'trash',
                variant: 'destructive',
                onClick: () => setShowDeleteConfirm(true),
              },
            ]}
          />

          <ConfirmationModal
            open={showDeleteConfirm}
            onOpenChange={setShowDeleteConfirm}
            title="Delete Users"
            description="Are you sure you want to delete the selected users? This action cannot be undone."
            confirmLabel="Delete"
            severity="danger"
            itemCount={selection.selectedCount}
            onConfirm={handleDelete}
          />

          <ConfirmationModal
            open={showArchiveConfirm}
            onOpenChange={setShowArchiveConfirm}
            title="Archive Users"
            description="The selected users will be archived and moved to the archived users list. You can restore them later."
            confirmLabel="Archive"
            severity="warning"
            itemCount={selection.selectedCount}
            onConfirm={handleArchive}
          />
        </div>
      </div>
    );
  },
};

export const StickyToolbar: Story = {
  render: () => {
    const [users] = useState(sampleUsers);
    const selection = useSelection({
      items: users,
      getItemId: (user) => user.id,
    });

    return (
      <div className="min-h-screen">
        <div className="sticky top-0 z-50 bg-white border-b border-[var(--ds-color-neutral-300)] p-4">
          <h2 className="text-2xl font-bold mb-4">Sticky Toolbar Example</h2>

          <BulkActionBar
            selectedCount={selection.selectedCount}
            totalCount={users.length}
            selectedIds={selection.selectedIds}
            onClearSelection={selection.clearSelection}
            onSelectAll={selection.selectAll}
            position="sticky"
            actions={[
              {
                id: 'activate',
                label: 'Activate',
                icon: 'check-circle',
                variant: 'primary',
                onClick: () => alert('Activated'),
              },
              {
                id: 'deactivate',
                label: 'Deactivate',
                icon: 'x-circle',
                variant: 'default',
                onClick: () => alert('Deactivated'),
              },
            ]}
          />
        </div>

        <div className="p-6">
          <div className="max-w-6xl mx-auto bg-white rounded-lg border border-[var(--ds-color-neutral-300)]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selection.isAllSelected}
                      onCheckedChange={selection.toggleAll}
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Checkbox
                        checked={selection.isSelected(user)}
                        onCheckedChange={() => selection.toggleItem(user)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge variant={statusColors[user.status]}>
                        {user.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  },
};

export const StaticToolbar: Story = {
  render: () => {
    const [users] = useState(sampleUsers);
    const selection = useSelection({
      items: users,
      getItemId: (user) => user.id,
    });

    return (
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Static Toolbar Example</h2>

          <BulkActionBar
            selectedCount={selection.selectedCount}
            totalCount={users.length}
            selectedIds={selection.selectedIds}
            onClearSelection={selection.clearSelection}
            onSelectAll={selection.selectAll}
            position="static"
            message="You have selected {count} out of {total} users"
            actions={[
              {
                id: 'assign',
                label: 'Assign Role',
                icon: 'user',
                variant: 'default',
                onClick: () => alert('Assign role'),
              },
              {
                id: 'notify',
                label: 'Send Notification',
                icon: 'send',
                variant: 'primary',
                onClick: () => alert('Send notification'),
              },
            ]}
          />

          <div className="mt-4 bg-white rounded-lg border border-[var(--ds-color-neutral-300)]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selection.isAllSelected}
                      onCheckedChange={selection.toggleAll}
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Checkbox
                        checked={selection.isSelected(user)}
                        onCheckedChange={() => selection.toggleItem(user)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge variant={statusColors[user.status]}>
                        {user.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  },
};

export const ConfirmationModals: Story = {
  render: () => {
    const [infoOpen, setInfoOpen] = useState(false);
    const [warningOpen, setWarningOpen] = useState(false);
    const [dangerOpen, setDangerOpen] = useState(false);

    return (
      <div className="p-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold mb-6">Confirmation Modals</h2>

          <button
            onClick={() => setInfoOpen(true)}
            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50"
          >
            <strong>Info Confirmation</strong>
            <p className="text-sm text-gray-600">
              For non-destructive actions like exporting or downloading
            </p>
          </button>

          <button
            onClick={() => setWarningOpen(true)}
            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50"
          >
            <strong>Warning Confirmation</strong>
            <p className="text-sm text-gray-600">
              For potentially reversible actions like archiving or moving
            </p>
          </button>

          <button
            onClick={() => setDangerOpen(true)}
            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50"
          >
            <strong>Danger Confirmation</strong>
            <p className="text-sm text-gray-600">
              For destructive actions like deleting or removing permanently
            </p>
          </button>

          <ConfirmationModal
            open={infoOpen}
            onOpenChange={setInfoOpen}
            title="Export Data"
            description="Export the selected users to a CSV file. This will include all user information and settings."
            confirmLabel="Export"
            severity="info"
            itemCount={5}
            onConfirm={async () => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              alert('Data exported!');
            }}
          />

          <ConfirmationModal
            open={warningOpen}
            onOpenChange={setWarningOpen}
            title="Archive Users"
            description="The selected users will be moved to the archived users list. You can restore them later from the archive."
            confirmLabel="Archive"
            severity="warning"
            itemCount={3}
            onConfirm={async () => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              alert('Users archived!');
            }}
          />

          <ConfirmationModal
            open={dangerOpen}
            onOpenChange={setDangerOpen}
            title="Delete Users Permanently"
            description="This will permanently delete the selected users. This action cannot be undone and all associated data will be lost."
            confirmLabel="Delete Permanently"
            severity="danger"
            itemCount={2}
            onConfirm={async () => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              alert('Users deleted!');
            }}
          >
            <div className="p-3 bg-[var(--ds-color-error-50)] border border-[var(--ds-color-error-200)] rounded text-sm">
              <strong className="text-[var(--ds-color-error-700)]">Warning:</strong>{' '}
              <span className="text-[var(--ds-color-error-600)]">
                This will also delete all projects, files, and settings associated with these users.
              </span>
            </div>
          </ConfirmationModal>
        </div>
      </div>
    );
  },
};

export const LargeDataset: Story = {
  render: () => {
    const largeDataset = Array.from({ length: 100 }, (_, i) => ({
      id: `user-${i + 1}`,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      status: (['active', 'inactive', 'pending'] as const)[i % 3],
      role: (['Admin', 'User', 'Editor'] as const)[i % 3],
    }));

    const [users, setUsers] = useState(largeDataset);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const selection = useSelection({
      items: users,
      getItemId: (user) => user.id,
    });

    const handleDelete = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUsers(users.filter((u) => !selection.selectedIds.includes(u.id)));
      selection.clearSelection();
    };

    return (
      <div className="p-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Large Dataset (100 items)</h2>

          <div className="bg-white rounded-lg border border-[var(--ds-color-neutral-300)] max-h-[600px] overflow-auto">
            <Table>
              <TableHeader className="sticky top-0 bg-white z-10">
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selection.isAllSelected}
                      onCheckedChange={selection.toggleAll}
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Checkbox
                        checked={selection.isSelected(user)}
                        onCheckedChange={() => selection.toggleItem(user)}
                      />
                    </TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge variant={statusColors[user.status]}>
                        {user.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <BulkActionBar
            selectedCount={selection.selectedCount}
            totalCount={users.length}
            selectedIds={selection.selectedIds}
            onClearSelection={selection.clearSelection}
            onSelectAll={selection.selectAll}
            position="floating"
            showSelectAll={true}
            actions={[
              {
                id: 'delete',
                label: 'Delete',
                icon: 'trash',
                variant: 'destructive',
                onClick: () => setShowDeleteConfirm(true),
              },
            ]}
          />

          <ConfirmationModal
            open={showDeleteConfirm}
            onOpenChange={setShowDeleteConfirm}
            title="Delete Users"
            description="Are you sure you want to delete the selected users?"
            confirmLabel="Delete"
            severity="danger"
            itemCount={selection.selectedCount}
            onConfirm={handleDelete}
          />
        </div>
      </div>
    );
  },
};
