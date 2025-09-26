import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconGroup, usePreloadIcons } from '../src/components/Icon';
import { 
  icons,
  iconsByCategory,
  iconCategories,
  getIcon,
  getIconsByCategory
} from '../src/tokens/design-system-icons';
import { CORE_ICONS, getIconMetadata, getIconsByCategory as getCoreIconsByCategory } from '../packages/tokens/icon-registry';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/ui/card';
import { Input } from '../src/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../src/components/ui/select';
import { Badge } from '../src/components/ui/badge';

const meta: Meta<typeof Icon> = {

  title: ' Foundations/Icons',
  component: Icon,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Dynamic SVG icon component with accessibility features, tree-shaking support, and TypeScript safety. Icons are loaded on-demand from the design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(icons),
      description: 'Icon name from the design system',
    },
    size: {
      control: { type: 'range', min: 12, max: 64, step: 4 },
      description: 'Icon size in pixels',
    },
    color: {
      control: 'color',
      description: 'Icon color - any valid CSS color',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the icon is decorative (sets aria-hidden="true")',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Basic Icon Usage
export const BasicIcon: Story = {
  args: {
    name: 'analytics',
    size: 24,
    color: 'var(--ds-color-intent-primary)',
  },
};

// Interactive Icon Picker
export const IconPicker: Story = {
  render: () => {
    const [selectedIcon, setSelectedIcon] = React.useState<keyof typeof icons>('analytics');
    const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
    const [searchQuery, setSearchQuery] = React.useState('');
    const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
    const [copyFeedback, setCopyFeedback] = React.useState<string | null>(null);
    
    // Get icons for selected category - show ALL icons, no limit
    let categoryIcons = selectedCategory === 'all' 
      ? Object.keys(icons) // Show all icons
      : Object.keys(getIconsByCategory(selectedCategory)); // Show all icons in category
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      categoryIcons = categoryIcons.filter(iconName => 
        iconName.toLowerCase().includes(query) || 
        getIcon(iconName)?.category.toLowerCase().includes(query) ||
        getIcon(iconName)?.description.toLowerCase().includes(query)
      );
    }

    const copyToClipboard = (text: string, label: string) => {
      navigator.clipboard.writeText(text);
      setCopyFeedback(`${label} copied!`);
      setTimeout(() => setCopyFeedback(null), 2000);
    };

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Icon Library</h3>
          <p className="text-gray-600">Browse and search through {Object.keys(icons).length} icons from the Comcast Business Design System</p>
        </div>
        
        {/* Selected Icon Display - Enhanced with copy functionality */}
        <div className="p-8 bg-gray-50 rounded-lg text-center relative">
          {copyFeedback && (
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded text-sm">
              {copyFeedback}
            </div>
          )}
          <Icon name={selectedIcon} size={64} color="var(--ds-color-intent-primary)" />
          <p className="mt-3 text-lg font-medium">{selectedIcon}</p>
          <p className="text-sm text-gray-600 mb-4">
            {getIcon(selectedIcon)?.category} • {getIcon(selectedIcon)?.size?.width}×{getIcon(selectedIcon)?.size?.height}
          </p>
          <div className="flex justify-center gap-2">
            <button
              onClick={() => copyToClipboard(`<Icon name="${selectedIcon}" size={24} />`, 'React code')}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm hover:bg-blue-200"
            >
              Copy React Code
            </button>
            <button
              onClick={() => copyToClipboard(selectedIcon, 'Icon name')}
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm hover:bg-gray-200"
            >
              Copy Name
            </button>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Icons
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, category, or description..."
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Filter
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Categories</option>
              {iconCategories.map(category => (
                <option key={category} value={category}>
                  {category} ({Object.keys(iconsByCategory[category] || {}).length})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              View Mode
            </label>
            <div className="flex rounded-md border border-gray-300">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 text-sm font-medium flex-1 ${
                  viewMode === 'grid'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 text-sm font-medium flex-1 ${
                  viewMode === 'list'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>
        
        {/* Icon Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-14 gap-4 max-h-96 overflow-y-auto border border-gray-200 rounded-lg p-6">
            {categoryIcons.map((iconName) => (
              <button
                key={iconName}
                onClick={() => setSelectedIcon(iconName as keyof typeof icons)}
                className={`p-3 rounded-lg border transition-colors ${
                  selectedIcon === iconName
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                title={`${iconName} (${getIcon(iconName)?.category})`}
              >
                <Icon 
                  name={iconName as keyof typeof icons} 
                  size={32} 
                  color={selectedIcon === iconName ? 'var(--ds-color-intent-primary)' : 'var(--ds-color-text-muted)'}
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="max-h-96 overflow-y-auto border border-gray-200 rounded-lg">
            {categoryIcons.map((iconName) => {
              const iconData = getIcon(iconName);
              return (
                <button
                  key={iconName}
                  onClick={() => setSelectedIcon(iconName as keyof typeof icons)}
                  className={`w-full p-4 flex items-center gap-4 border-b border-gray-100 hover:bg-gray-50 text-left ${
                    selectedIcon === iconName ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                >
                  <Icon 
                    name={iconName as keyof typeof icons} 
                    size={24} 
                    color={selectedIcon === iconName ? 'var(--ds-color-intent-primary)' : 'var(--ds-color-text-muted)'}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{iconName}</p>
                    <p className="text-xs text-gray-500 capitalize">{iconData?.category}</p>
                  </div>
                  <div className="text-xs text-gray-400">
                    {iconData?.size?.width}×{iconData?.size?.height}
                  </div>
                </button>
              );
            })}
          </div>
        )}
        
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>
            Showing {categoryIcons.length} icons 
            {searchQuery && `matching "${searchQuery}"`}
            {selectedCategory !== 'all' && ` from ${selectedCategory}`}
          </span>
          <span>
            Total: {Object.keys(icons).length} icons available
          </span>
        </div>
      </div>
    );
  },
};

// Comprehensive Icon Browser with Source Metadata
export const ComprehensiveIconBrowser: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSource, setSelectedSource] = useState('all');
    const [selectedSize, setSelectedSize] = useState('24');
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    // Icon categories for filtering
    const ICON_CATEGORIES = [
      { value: 'all', label: 'All Icons' },
      { value: 'navigation', label: 'Navigation' },
      { value: 'interface', label: 'Interface' },
      { value: 'status', label: 'Status' },
      { value: 'communication', label: 'Communication' },
      { value: 'data', label: 'Data' },
      { value: 'media', label: 'Media' },
      { value: 'security', label: 'Security' },
      { value: 'general', label: 'General' }
    ];

    // Icon sources for filtering
    const ICON_SOURCES = [
      { value: 'all', label: 'All Sources' },
      { value: 'feather', label: 'Feather Icons' },
      { value: 'figma', label: 'Figma' },
      { value: 'custom', label: 'Custom' }
    ];

    // Icon sizes for demonstration
    const ICON_SIZES = [
      { value: '16', label: '16px (XS)' },
      { value: '20', label: '20px (S)' },
      { value: '24', label: '24px (M)' },
      { value: '32', label: '32px (L)' },
      { value: '48', label: '48px (XL)' }
    ];

    // Get icons based on category, source, and search
    const getFilteredIcons = () => {
      let icons = [];
      
      if (selectedCategory === 'all') {
        // Get all icons from all categories
        ICON_CATEGORIES.slice(1).forEach(category => {
          icons.push(...getCoreIconsByCategory(category.value as any));
        });
      } else {
        icons = getCoreIconsByCategory(selectedCategory as any);
      }
      
      // Filter by search term
      if (searchTerm) {
        icons = icons.filter(icon => 
          icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          icon.description?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      // Filter by source
      if (selectedSource !== 'all') {
        icons = icons.filter(icon => icon.source === selectedSource);
      }
      
      return icons.sort((a, b) => a.name.localeCompare(b.name));
    };

    const filteredIcons = getFilteredIcons();
    const iconSize = parseInt(selectedSize);

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Complete Icon Library</h3>
          <p className="text-gray-600">
            Browse {Object.keys(CORE_ICONS).length} icons from Feather Icons, Figma, and custom sources. 
            Each icon includes source metadata and usage examples.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Icon Browser</CardTitle>
            <CardDescription>Search and filter icons by category, source, and size</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-[var(--ds-color-text-primary)] mb-2 block">
                  Search Icons
                </label>
                <Input
                  placeholder="Search by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[var(--ds-color-text-primary)] mb-2 block">
                  Category
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ICON_CATEGORIES.map(category => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-[var(--ds-color-text-primary)] mb-2 block">
                  Source
                </label>
                <Select value={selectedSource} onValueChange={setSelectedSource}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ICON_SOURCES.map(source => (
                      <SelectItem key={source.value} value={source.value}>
                        {source.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-[var(--ds-color-text-primary)] mb-2 block">
                  Icon Size
                </label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ICON_SIZES.map(size => (
                      <SelectItem key={size.value} value={size.value}>
                        {size.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Icon Grid */}
        <Card>
          <CardHeader>
            <CardTitle>
              Icons ({filteredIcons.length})
              {selectedSource !== 'all' && ` • ${selectedSource}`}
              {selectedCategory !== 'all' && ` • ${selectedCategory}`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 lg:grid-cols-16 xl:grid-cols-20 gap-3">
              {filteredIcons.map((icon) => (
                <div
                  key={icon.name}
                  className={`
                    flex flex-col items-center p-3 rounded-lg border-2 transition-all duration-150 cursor-pointer group
                    ${selectedIcon === icon.name ? 'border-[var(--ds-color-intent-primary)] bg-[var(--ds-color-bg-canvas)]' : ''}
                  `}
                  onClick={() => setSelectedIcon(selectedIcon === icon.name ? null : icon.name)}
                >
                  <Icon
                    name={icon.name}
                    size={iconSize}
                    className="text-[var(--ds-color-text-primary)] group-hover:text-[var(--ds-color-intent-primary)] transition-colors"
                  />
                  <span className="text-xs text-[var(--ds-color-text-muted)] mt-2 text-center leading-tight">
                    {icon.name.replace('feather-', '')}
                  </span>
                  {icon.source && (
                    <Badge 
                      variant="outline" 
                      className="text-xs mt-1"
                    >
                      {icon.source}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
            
            {filteredIcons.length === 0 && (
              <div className="text-center py-12 text-[var(--ds-color-text-muted)]">
                <p>No icons found matching your criteria.</p>
                <p className="text-sm mt-1">Try adjusting your search or filters.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Icon Details Panel */}
        {selectedIcon && (
          <Card>
            <CardHeader>
              <CardTitle>Icon Details</CardTitle>
              <CardDescription>Information and usage examples for the selected icon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Icon Preview */}
                <div className="flex flex-col items-center justify-center p-8 bg-[var(--ds-color-bg-subtle)] rounded-lg">
                  <Icon
                    name={selectedIcon}
                    size={64}
                    className="text-[var(--ds-color-intent-primary)]"
                  />
                  <p className="text-lg font-medium mt-4 text-[var(--ds-color-text-primary)]">
                    {selectedIcon.replace('feather-', '')}
                  </p>
                </div>

                {/* Icon Information */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-[var(--ds-color-text-primary)] mb-2 block">
                      Description
                    </label>
                    <p className="text-sm text-[var(--ds-color-text-muted)]">
                      {filteredIcons.find(i => i.name === selectedIcon)?.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[var(--ds-color-text-primary)]">Category</label>
                      <p className="text-sm text-[var(--ds-color-text-muted)]">
                        {filteredIcons.find(i => i.name === selectedIcon)?.category}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[var(--ds-color-text-primary)]">Icon Name</label>
                      <p className="text-sm text-[var(--ds-color-text-muted)] font-mono">
                        {selectedIcon}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[var(--ds-color-text-primary)]">Source</label>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          {filteredIcons.find(i => i.name === selectedIcon)?.source || 'unknown'}
                        </Badge>
                        {filteredIcons.find(i => i.name === selectedIcon)?.sourceUrl && (
                          <a 
                            href={filteredIcons.find(i => i.name === selectedIcon)?.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[var(--ds-color-intent-primary)] hover:underline"
                          >
                            View Source
                          </a>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[var(--ds-color-text-primary)]">License</label>
                      <p className="text-sm text-[var(--ds-color-text-muted)]">
                        {filteredIcons.find(i => i.name === selectedIcon)?.license || 'Unknown'}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-[var(--ds-color-text-primary)] mb-2 block">
                      Usage Example
                    </label>
                    <div className="bg-[var(--ds-color-bg-subtle)] p-3 rounded border font-mono text-sm">
                      <code className="text-[var(--ds-color-text-muted)]">
                        {`<Icon name="${selectedIcon}" size={${iconSize}} />`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Icon Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ICON_SOURCES.slice(1).map(source => {
                const count = Object.values(CORE_ICONS).filter(icon => icon.source === source.value).length;
                return (
                  <div key={source.value} className="text-center">
                    <div className="text-2xl font-bold text-[var(--ds-color-intent-primary)]">{count}</div>
                    <div className="text-sm text-[var(--ds-color-text-muted)] capitalize">{source.label}</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};