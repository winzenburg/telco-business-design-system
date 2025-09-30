import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuTrigger,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  Button
} from '../src/components';
import {
  MoreHorizontal, Settings, User, CreditCard, LogOut,
  Download, Share, Edit, Eye, Trash, Copy, Star,
  ChevronRight, Plus, Minus, Filter, Bell, Heart,
  Bookmark, Archive, Flag, Cloud, Moon, Sun
} from 'lucide-react';
import MenuDocs from './Menu.mdx';

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'padded',
    docs: {
      page: MenuDocs,
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>
          <Edit className="h-4 w-4" />
          Edit
        </MenuItem>
        <MenuItem>
          <Copy className="h-4 w-4" />
          Copy
        </MenuItem>
        <MenuItem>
          <Share className="h-4 w-4" />
          Share
        </MenuItem>
        <MenuSeparator />
        <MenuItem variant="destructive">
          <Trash className="h-4 w-4" />
          Trash
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Account Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuLabel>Account</MenuLabel>
        <MenuItem>
          <User className="h-4 w-4" />
          Profile
        </MenuItem>
        <MenuItem>
          <Settings className="h-4 w-4" />
          Settings
        </MenuItem>
        <MenuItem>
          <CreditCard className="h-4 w-4" />
          Billing
        </MenuItem>
        <MenuSeparator />
        <MenuLabel>Actions</MenuLabel>
        <MenuItem>
          <Download className="h-4 w-4" />
          Download
        </MenuItem>
        <MenuItem>
          <Share className="h-4 w-4" />
          Share
        </MenuItem>
        <MenuSeparator />
        <MenuItem variant="destructive">
          <LogOut className="h-4 w-4" />
          Logout
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">File Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>
          <Plus className="h-4 w-4" />
          New File
          <MenuShortcut>⌘N</MenuShortcut>
        </MenuItem>
        <MenuItem>
          <Copy className="h-4 w-4" />
          Copy
          <MenuShortcut>⌘C</MenuShortcut>
        </MenuItem>
        <MenuItem>
          <Download className="h-4 w-4" />
          Save
          <MenuShortcut>⌘S</MenuShortcut>
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          <Eye className="h-4 w-4" />
          Preview
          <MenuShortcut>Space</MenuShortcut>
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const WithCheckboxes: Story = {
  render: () => {
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showToolbar, setShowToolbar] = useState(true);

    return (
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">View Options</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuLabel>View</MenuLabel>
          <MenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            Show Bookmarks
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showSidebar}
            onCheckedChange={setShowSidebar}
          >
            Show Sidebar
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showToolbar}
            onCheckedChange={setShowToolbar}
          >
            Show Toolbar
          </MenuCheckboxItem>
        </MenuContent>
      </Menu>
    );
  },
};

export const WithRadioGroups: Story = {
  render: () => {
    const [theme, setTheme] = useState('light');

    return (
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">Theme</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuLabel>Theme</MenuLabel>
          <MenuRadioGroup value={theme} onValueChange={setTheme}>
            <MenuRadioItem value="light">
              <Sun className="h-4 w-4" />
              Light
            </MenuRadioItem>
            <MenuRadioItem value="dark">
              <Moon className="h-4 w-4" />
              Dark
            </MenuRadioItem>
            <MenuRadioItem value="system">
              <Settings className="h-4 w-4" />
              System
            </MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    );
  },
};

export const WithSubmenus: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Actions</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>
          <Edit className="h-4 w-4" />
          Edit
        </MenuItem>
        <MenuSub>
          <MenuSubTrigger>
            <Share className="h-4 w-4" />
            Share
          </MenuSubTrigger>
          <MenuSubContent>
            <MenuItem>
              <Copy className="h-4 w-4" />
              Copy Link
            </MenuItem>
            <MenuItem>
              <Download className="h-4 w-4" />
              Download
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <Cloud className="h-4 w-4" />
              Save to Cloud
            </MenuItem>
          </MenuSubContent>
        </MenuSub>
        <MenuSeparator />
        <MenuItem variant="destructive">
          <Trash className="h-4 w-4" />
          Trash
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">Default</Button>
        </MenuTrigger>
        <MenuContent variant="default">
          <MenuItem>Edit</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Share</MenuItem>
        </MenuContent>
      </Menu>

      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">Elevated</Button>
        </MenuTrigger>
        <MenuContent variant="elevated">
          <MenuItem>Edit</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Share</MenuItem>
        </MenuContent>
      </Menu>

      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">Filled</Button>
        </MenuTrigger>
        <MenuContent variant="filled">
          <MenuItem>Edit</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Share</MenuItem>
        </MenuContent>
      </Menu>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">Small</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem size="sm">
            <Edit className="h-3 w-3" />
            Edit
          </MenuItem>
          <MenuItem size="sm">
            <Copy className="h-3 w-3" />
            Copy
          </MenuItem>
        </MenuContent>
      </Menu>

      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">Default</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem>
            <Edit className="h-4 w-4" />
            Edit
          </MenuItem>
          <MenuItem>
            <Copy className="h-4 w-4" />
            Copy
          </MenuItem>
        </MenuContent>
      </Menu>

      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline" size="lg">Large</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem size="lg">
            <Edit className="h-5 w-5" />
            Edit
          </MenuItem>
          <MenuItem size="lg">
            <Copy className="h-5 w-5" />
            Copy
          </MenuItem>
        </MenuContent>
      </Menu>
    </div>
  ),
};

export const ContextMenuExample: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>
          <Eye className="h-4 w-4" />
          View Details
        </MenuItem>
        <MenuItem>
          <Star className="h-4 w-4" />
          Add to Favorites
        </MenuItem>
        <MenuItem>
          <Bookmark className="h-4 w-4" />
          Bookmark
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          <Download className="h-4 w-4" />
          Download
        </MenuItem>
        <MenuItem>
          <Copy className="h-4 w-4" />
          Copy Link
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          <Archive className="h-4 w-4" />
          Archive
        </MenuItem>
        <MenuItem variant="destructive">
          <Trash className="h-4 w-4" />
          Trash
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const FilterMenu: Story = {
  render: () => {
    const [sortBy, setSortBy] = useState('date');
    const [showHidden, setShowHidden] = useState(false);
    const [groupBy, setGroupBy] = useState(false);

    return (
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter & Sort
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuLabel>Sort By</MenuLabel>
          <MenuRadioGroup value={sortBy} onValueChange={setSortBy}>
            <MenuRadioItem value="name">Name</MenuRadioItem>
            <MenuRadioItem value="date">Date Modified</MenuRadioItem>
            <MenuRadioItem value="size">Size</MenuRadioItem>
            <MenuRadioItem value="type">Type</MenuRadioItem>
          </MenuRadioGroup>
          <MenuSeparator />
          <MenuCheckboxItem
            checked={showHidden}
            onCheckedChange={setShowHidden}
          >
            Show Hidden Files
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={groupBy}
            onCheckedChange={setGroupBy}
          >
            Group by Type
          </MenuCheckboxItem>
        </MenuContent>
      </Menu>
    );
  },
};