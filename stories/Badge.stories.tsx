import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Badge, Avatar } from '../src/components';
import { Star, Heart, User, Plus, Filter, Tag, Check, X, Settings, ChevronDown } from 'lucide-react';
import BadgeDocs from './docs/Badge.mdx';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
    docs: {
      page: BadgeDocs,
      description: {
        component: 'Badge component for displaying status indicators, labels, and interactive chips with support for different types, icons, and user interactions.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'success', 'warning', 'info'],
      description: 'Badge variant style',
    },
    chipType: {
      control: 'select',
      options: ['badge', 'assist', 'filter', 'input', 'suggestion'],
      description: 'Type of chip interaction',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Badge size',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the badge can be dismissed',
    },
    selected: {
      control: 'boolean',
      description: 'Selected state for filter chips',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the badge is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Variants</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Sizes</h3>
        <div className="flex items-center gap-4">
          <Badge size="sm">Small</Badge>
          <Badge size="default">Default</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">With Icons</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge leadingIcon={<Star className="h-3 w-3" />}>Featured</Badge>
          <Badge leadingIcon={<Heart className="h-3 w-3" />} variant="destructive">Favorite</Badge>
          <Badge trailingIcon={<ChevronDown className="h-3 w-3" />} variant="outline">Dropdown</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Assist Chips</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge chipType="assist" leadingIcon={<Plus className="h-3 w-3" />}>
            Add to cart
          </Badge>
          <Badge chipType="assist" leadingIcon={<Settings className="h-3 w-3" />} variant="outline">
            Settings
          </Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Status Badges</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="success" size="sm">Online</Badge>
          <Badge variant="warning" size="sm">Pending</Badge>
          <Badge variant="destructive" size="sm">Failed</Badge>
          <Badge variant="info" size="sm">New</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-[var(--ds-color-text-primary)]">Disabled State</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge disabled>Disabled</Badge>
          <Badge disabled chipType="assist">Disabled Action</Badge>
        </div>
      </div>
    </div>
  ),
};

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Dismissible: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(true);
    
    if (!isVisible) {
      return (
        <div className="text-center p-4 text-neutral-500">
          Badge dismissed. 
          <button 
            className="ml-2 text-blue-600 hover:text-blue-800 underline"
            onClick={() => setIsVisible(true)}
          >
            Show again
          </button>
        </div>
      );
    }
    
    return (
      <Badge 
        dismissible 
        onDismiss={() => setIsVisible(false)}
        variant="info"
      >
        Dismissible Badge
      </Badge>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge leadingIcon={<Star className="h-3 w-3" />}>Starred</Badge>
      <Badge leadingIcon={<Heart className="h-3 w-3" />} variant="destructive">Favorite</Badge>
      <Badge leadingIcon={<User className="h-3 w-3" />} variant="info">User</Badge>
      <Badge trailingIcon={<ChevronDown className="h-3 w-3" />} variant="outline">Dropdown</Badge>
    </div>
  ),
};

export const WithAvatars: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge 
        avatar={
          <Avatar className="w-4 h-4">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User" />
          </Avatar>
        }
        variant="outline"
      >
        John Doe
      </Badge>
      <Badge 
        avatar={
          <Avatar className="w-4 h-4">
            <img src="https://images.unsplash.com/photo-1494790108755-2616b60013ad?w=32&h=32&fit=crop&crop=face" alt="User" />
          </Avatar>
        }
        variant="info"
      >
        Jane Smith
      </Badge>
    </div>
  ),
};

export const AssistChips: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge 
        chipType="assist" 
        leadingIcon={<Plus className="h-3 w-3" />}
        onClick={() => alert('Add clicked')}
      >
        Add to cart
      </Badge>
      <Badge 
        chipType="assist" 
        leadingIcon={<Settings className="h-3 w-3" />}
        onClick={() => alert('Settings clicked')}
        variant="outline"
      >
        Settings
      </Badge>
      <Badge 
        chipType="assist" 
        leadingIcon={<Star className="h-3 w-3" />}
        onClick={() => alert('Rate clicked')}
        variant="info"
      >
        Rate this
      </Badge>
    </div>
  ),
};

export const FilterChips: Story = {
  render: () => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>(['popular']);
    
    const toggleFilter = (filter: string) => {
      setSelectedFilters(prev => 
        prev.includes(filter) 
          ? prev.filter(f => f !== filter)
          : [...prev, filter]
      )
    }
    
    return (
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <Badge 
            chipType="filter"
            selected={selectedFilters.includes('popular')}
            onSelect={() => toggleFilter('popular')}
            leadingIcon={<Star className="h-3 w-3" />}
          >
            Popular
          </Badge>
          <Badge 
            chipType="filter"
            selected={selectedFilters.includes('new')}
            onSelect={() => toggleFilter('new')}
            leadingIcon={<Plus className="h-3 w-3" />}
          >
            New
          </Badge>
          <Badge 
            chipType="filter"
            selected={selectedFilters.includes('sale')}
            onSelect={() => toggleFilter('sale')}
            variant="destructive"
          >
            On Sale
          </Badge>
          <Badge 
            chipType="filter"
            selected={selectedFilters.includes('featured')}
            onSelect={() => toggleFilter('featured')}
            variant="success"
          >
            Featured
          </Badge>
        </div>
        <div className="text-sm text-neutral-600">
          Selected filters: {selectedFilters.join(', ') || 'None'}
        </div>
      </div>
    )
  },
};

export const InputChips: Story = {
  render: () => {
    const [tags, setTags] = useState(['Design', 'Development', 'Marketing']);
    
    const removeTag = (tagToRemove: string) => {
      setTags(prev => prev.filter(tag => tag !== tagToRemove))
    }
    
    return (
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <Badge 
              key={index}
              chipType="input"
              dismissible
              onDismiss={() => removeTag(tag)}
              leadingIcon={<Tag className="h-3 w-3" />}
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="text-sm text-neutral-600">
          Remaining tags: {tags.length}
        </div>
      </div>
    )
  },
};

export const SuggestionChips: Story = {
  render: () => {
    const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);
    
    const suggestions = ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Vite'];
    
    return (
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          {suggestions.map((suggestion) => (
            <Badge 
              key={suggestion}
              chipType="suggestion"
              onClick={() => setSelectedSuggestion(suggestion)}
              variant={selectedSuggestion === suggestion ? 'info' : 'outline'}
              leadingIcon={selectedSuggestion === suggestion ? <Check className="h-3 w-3" /> : undefined}
            >
              {suggestion}
            </Badge>
          ))}
        </div>
        {selectedSuggestion && (
          <div className="text-sm text-neutral-600">
            Selected: {selectedSuggestion}
          </div>
        )}
      </div>
    )
  },
};

export const DisabledStates: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge disabled>Disabled Default</Badge>
      <Badge disabled variant="info" leadingIcon={<Star className="h-3 w-3" />}>Disabled with Icon</Badge>
      <Badge disabled chipType="assist" onClick={() => {}}>Disabled Assist</Badge>
      <Badge disabled dismissible onDismiss={() => {}}>Disabled Dismissible</Badge>
    </div>
  ),
};

export const InteractiveExample: Story = {
  render: () => {
    const [cart, setCart] = useState<string[]>([]);
    const [filters, setFilters] = useState<string[]>(['electronics']);
    
    const products = ['Laptop', 'Phone', 'Tablet', 'Watch'];
    const categories = ['electronics', 'clothing', 'books', 'home'];
    
    const addToCart = (product: string) => {
      if (!cart.includes(product)) {
        setCart(prev => [...prev, product]);
      }
    };
    
    const removeFromCart = (product: string) => {
      setCart(prev => prev.filter(p => p !== product));
    };
    
    const toggleFilter = (filter: string) => {
      setFilters(prev => 
        prev.includes(filter) 
          ? prev.filter(f => f !== filter)
          : [...prev, filter]
      );
    };
    
    return (
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Categories (Filter Chips)</h4>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Badge 
                key={category}
                chipType="filter"
                selected={filters.includes(category)}
                onSelect={() => toggleFilter(category)}
                leadingIcon={<Filter className="h-3 w-3" />}
                variant="outline"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Products (Assist Chips)</h4>
          <div className="flex gap-2 flex-wrap">
            {products.map((product) => (
              <Badge 
                key={product}
                chipType="assist"
                onClick={() => addToCart(product)}
                leadingIcon={<Plus className="h-3 w-3" />}
                variant={cart.includes(product) ? 'success' : 'outline'}
                disabled={cart.includes(product)}
              >
                {cart.includes(product) ? 'Added' : `Add ${product}`}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Shopping Cart (Input Chips)</h4>
          <div className="flex gap-2 flex-wrap">
            {cart.map((item) => (
              <Badge 
                key={item}
                chipType="input"
                dismissible
                onDismiss={() => removeFromCart(item)}
                leadingIcon={<Check className="h-3 w-3" />}
                variant="info"
              >
                {item}
              </Badge>
            ))}
            {cart.length === 0 && (
              <span className="text-sm text-neutral-500">Cart is empty</span>
            )}
          </div>
        </div>
      </div>
    );
  },
};