import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon, IconGroup, usePreloadIcons } from '../src/components/Icon';
import { 
  icons,
  iconsByCategory,
  iconCategories,
  getIcon,
  getIconsByCategory
} from '../src/tokens/design-system-icons';

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

// All Icons Browser
export const AllIconsBrowser: Story = {
  render: () => {
    const [expandedCategory, setExpandedCategory] = React.useState<string | null>('general');
    
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Icons by Category</h3>
          <p className="text-gray-600">Browse all {Object.keys(icons).length} icons organized by category. Click on a category to expand and view all icons.</p>
        </div>
        
        {iconCategories.map(category => {
          const categoryIcons = Object.keys(iconsByCategory[category] || {});
          const isExpanded = expandedCategory === category;
          
          return (
            <div key={category} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedCategory(isExpanded ? null : category)}
                className="w-full p-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left"
              >
                <div>
                  <h4 className="font-medium text-gray-900 capitalize">{category}</h4>
                  <p className="text-sm text-gray-500">{categoryIcons.length} icons</p>
                </div>
                <div className="text-gray-400">
                  {isExpanded ? '▼' : '▶'}
                </div>
              </button>
              
              {isExpanded && (
                <div className="p-6 bg-white">
                  <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 lg:grid-cols-20 gap-3">
                    {categoryIcons.map((iconName) => (
                      <div
                        key={iconName}
                        className="flex flex-col items-center p-2 rounded hover:bg-gray-50 group"
                        title={iconName}
                      >
                        <Icon 
                          name={iconName as keyof typeof icons} 
                          size={20} 
                          color="var(--ds-color-text-muted)"
                        />
                        <span className="text-xs text-gray-500 mt-1 text-center group-hover:text-gray-700 truncate w-full">
                          {iconName.length > 8 ? `${iconName.substring(0, 8)}...` : iconName}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  },
};