import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Icon } from '../packages/icons/src/Icon';
import { Input } from '../src/components/ui/input';
import { Badge } from '../src/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/ui/card';
import { Button } from '../src/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../src/components/ui/select';
import { getIconsByCategory, searchIcons } from '../packages/tokens/icon-registry';

const meta: Meta = {
  title: 'Icons/Feather Icons',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive showcase of Feather Icons integrated into the Comcast Business Design System. Browse, search, and explore all 287+ Feather Icons organized by category.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

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

export const FeatherIconsShowcase: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSource, setSelectedSource] = useState('all');
    const [selectedSize, setSelectedSize] = useState('24');
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    // Get icons based on category, source, and search
    const getFilteredIcons = () => {
      let icons = [];
      
      if (selectedCategory === 'all') {
        // Get all icons from all categories
        ICON_CATEGORIES.slice(1).forEach(category => {
          icons.push(...getIconsByCategory(category.value as any));
        });
      } else {
        icons = getIconsByCategory(selectedCategory as any);
      }
      
      // Filter by search term
      if (searchTerm) {
        icons = searchIcons(searchTerm);
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
      <div className="min-h-screen bg-[var(--ds-color-bg-surface)]">
        {/* Header */}
        <header className="bg-[var(--ds-color-bg-canvas)] border-b border-[var(--ds-color-neutral-300)] px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-primary font-semibold text-xl text-[var(--ds-color-text-primary)]">
                Feather Icons Showcase
              </h1>
              <p className="text-sm text-[var(--ds-color-text-muted)]">
                Browse and explore {filteredIcons.length} Feather Icons integrated into the design system
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary">
                {filteredIcons.length} icons
              </Badge>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Icon Browser</CardTitle>
              <CardDescription>Search and filter Feather Icons by category and size</CardDescription>
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
              <CardTitle>Feather Icons</CardTitle>
              <CardDescription>
                Click on any icon to see its details. All icons are optimized SVGs with consistent styling.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
                {filteredIcons.map((icon) => (
                  <div
                    key={icon.name}
                    className={`
                      flex flex-col items-center p-3 rounded-lg border border-[var(--ds-color-neutral-300)] 
                      hover:border-[var(--ds-color-intent-primary)] hover:bg-[var(--ds-color-bg-canvas)]
                      transition-all duration-150 cursor-pointer group
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
                <div className="text-center py-12">
                  <Icon name="feather-search" size={48} className="text-[var(--ds-color-text-muted)] mx-auto mb-4" />
                  <p className="text-[var(--ds-color-text-muted)]">No icons found matching your criteria</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Selected Icon Details */}
          {selectedIcon && (
            <Card>
              <CardHeader>
                <CardTitle>Icon Details</CardTitle>
                <CardDescription>Information about the selected icon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center p-4 border border-[var(--ds-color-neutral-300)] rounded-lg">
                    <Icon
                      name={selectedIcon}
                      size={64}
                      className="text-[var(--ds-color-intent-primary)] mb-2"
                    />
                    <span className="text-sm text-[var(--ds-color-text-muted)]">
                      {iconSize}px
                    </span>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="font-medium text-[var(--ds-color-text-primary)] mb-1">
                        {selectedIcon.replace('feather-', '')}
                      </h3>
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
                      <div className="bg-[var(--ds-color-bg-muted)] p-3 rounded border border-[var(--ds-color-neutral-300)]">
                        <code className="text-sm text-[var(--ds-color-text-primary)]">
                          {`<Icon name="${selectedIcon}" size={${iconSize}} />`}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Category Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Icon Statistics</CardTitle>
              <CardDescription>Distribution of Feather Icons by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ICON_CATEGORIES.slice(1).map(category => {
                  const count = getIconsByCategory(category.value as any).filter(icon => icon.name.startsWith('feather-')).length;
                  return (
                    <div key={category.value} className="text-center p-4 border border-[var(--ds-color-neutral-300)] rounded-lg">
                      <div className="text-2xl font-bold text-[var(--ds-color-intent-primary)]">{count}</div>
                      <div className="text-sm text-[var(--ds-color-text-muted)]">{category.label}</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  },
};

export const FeatherIconsByCategory: Story = {
  render: () => {
    const [selectedCategory, setSelectedCategory] = useState('navigation');

    const categoryIcons = getIconsByCategory(selectedCategory as any).filter(icon => icon.name.startsWith('feather-'));

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-[var(--ds-color-text-primary)]">
            Feather Icons by Category
          </h2>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {ICON_CATEGORIES.slice(1).map(category => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label} ({getIconsByCategory(category.value as any).filter(icon => icon.name.startsWith('feather-')).length})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
          {categoryIcons.map((icon) => (
            <div
              key={icon.name}
              className="flex flex-col items-center p-2 border border-[var(--ds-color-neutral-300)] rounded hover:border-[var(--ds-color-intent-primary)] transition-colors"
            >
              <Icon
                name={icon.name}
                size={24}
                className="text-[var(--ds-color-text-primary)] mb-1"
              />
              <span className="text-xs text-[var(--ds-color-text-muted)] text-center leading-tight">
                {icon.name.replace('feather-', '')}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const FeatherIconsSizes: Story = {
  render: () => {
    const sampleIcons = [
      'feather-home', 'feather-user', 'feather-settings', 'feather-search',
      'feather-heart', 'feather-star', 'feather-check', 'feather-x'
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-[var(--ds-color-text-primary)]">
          Feather Icons - Size Variations
        </h2>
        
        <div className="space-y-4">
          {ICON_SIZES.map(size => (
            <div key={size.value} className="flex items-center gap-4 p-4 border border-[var(--ds-color-neutral-300)] rounded-lg">
              <div className="w-20 text-sm text-[var(--ds-color-text-muted)]">
                {size.label}
              </div>
              <div className="flex items-center gap-4">
                {sampleIcons.map(iconName => (
                  <div key={iconName} className="flex flex-col items-center gap-1">
                    <Icon
                      name={iconName}
                      size={parseInt(size.value)}
                      className="text-[var(--ds-color-text-primary)]"
                    />
                    <span className="text-xs text-[var(--ds-color-text-muted)]">
                      {iconName.replace('feather-', '')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};