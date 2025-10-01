import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '../src/components';
// @ts-expect-error - Some lucide-react icons may not be exported in current version
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';
import CommandDocs from './docs/Command.mdx';

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  parameters: {
    layout: 'padded',
    docs: {
      page: CommandDocs,
      description: {
        component: 'Command component for command palette and search interfaces following Comcast Business Design System.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Basic Command Menu</h3>
        <Command className="rounded-lg border border-[var(--ds-color-neutral-300)] shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Multiple Groups and Shortcuts</h3>
        <Command className="rounded-lg border border-[var(--ds-color-neutral-300)] shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem>
                <span>Dashboard</span>
              </CommandItem>
              <CommandItem>
                <span>Services</span>
              </CommandItem>
              <CommandItem>
                <span>Billing</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Compact Version</h3>
        <Command className="rounded-lg border border-[var(--ds-color-neutral-300)]">
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandGroup>
              <CommandItem>Dashboard</CommandItem>
              <CommandItem>Services</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Support</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  ),
};

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};