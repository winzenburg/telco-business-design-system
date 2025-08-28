import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../src/components/ui/button';
import { ButtonGroup, ButtonGroupItem } from '../src/components/ui/button-group';
import { BarChart, Users, Settings, ArrowRight, FileText, HelpCircle, AlertTriangle } from 'lucide-react';
import { buttonSpecs, categorizedButtons, buttonUsage } from '../src/tokens/figma-button-specs';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Button component with enhanced features including elevation support, button groups (segmented buttons), and comprehensive interaction states.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'tertiary', 'ghost', 'destructive', 'outline', 'link'],
      description: 'Button variant style',
    },
    size: {
      control: 'select', 
      options: ['sm', 'md', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      description: 'Button size from design system',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width',
    },
    elevation: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
      description: 'Button elevation level (0-5)',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basic Button Usage
export const Default: Story = {
  args: {
    children: 'Get Started',
    variant: 'default',
    size: 'md',
  },
};

// All Button Variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Button Variants</h2>
        <p className="text-gray-600 font-secondary">All button variants from the Figma design system</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Primary Actions</h3>
          <div className="space-y-3">
            <Button variant="default">Primary Button</Button>
            <Button variant="primary">Alternative Primary</Button>
          </div>
          <p className="text-sm text-gray-600 font-secondary">{buttonUsage.primary}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Secondary Actions</h3>
          <div className="space-y-3">
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="tertiary">Tertiary Button</Button>
          </div>
          <p className="text-sm text-gray-600 font-secondary">{buttonUsage.secondary}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Subtle Actions</h3>
          <div className="space-y-3">
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
          <p className="text-sm text-gray-600 font-secondary">{buttonUsage.ghost}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Dangerous Actions</h3>
          <div className="space-y-3">
            <Button variant="destructive">Delete Account</Button>
            <Button variant="destructive" size="sm">Remove</Button>
          </div>
          <p className="text-sm text-gray-600 font-secondary">{buttonUsage.destructive}</p>
        </div>
      </div>
    </div>
  ),
};

// Button Sizes
export const ButtonSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Button Sizes</h2>
        <p className="text-gray-600 font-secondary">Standard sizes based on Figma specifications</p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4 flex-wrap">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <Button variant="secondary" size="sm">Small Secondary</Button>
          <Button variant="secondary" size="md">Medium Secondary</Button>
          <Button variant="secondary" size="lg">Large Secondary</Button>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <Button variant="ghost" size="sm">Small Ghost</Button>
          <Button variant="ghost" size="md">Medium Ghost</Button>
          <Button variant="ghost" size="lg">Large Ghost</Button>
        </div>
      </div>
    </div>
  ),
};

// Button States
export const ButtonStates: Story = {
  render: () => {
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
    
    const toggleLoading = (key: string) => {
      setLoadingStates(prev => ({ ...prev, [key]: !prev[key] }));
      // Auto-reset loading after 3 seconds
      setTimeout(() => {
        setLoadingStates(prev => ({ ...prev, [key]: false }));
      }, 3000);
    };

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 font-primary">Button States</h2>
          <p className="text-gray-600 font-secondary">Interactive states: default, hover, focus, active, disabled, loading</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-primary">Primary Button States</h3>
            <div className="space-y-3">
              <Button>Default State</Button>
              <Button disabled>Disabled State</Button>
              <Button 
                onClick={() => toggleLoading('primary')}
                data-loading={loadingStates.primary}
              >
                {loadingStates.primary ? 'Loading...' : 'Click for Loading'}
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium font-primary">Secondary Button States</h3>
            <div className="space-y-3">
              <Button variant="secondary">Default State</Button>
              <Button variant="secondary" disabled>Disabled State</Button>
              <Button 
                variant="secondary"
                onClick={() => toggleLoading('secondary')}
                data-loading={loadingStates.secondary}
              >
                {loadingStates.secondary ? 'Loading...' : 'Click for Loading'}
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-medium font-primary mb-2">Interactive States</h4>
          <ul className="text-sm text-gray-700 font-secondary space-y-1">
            <li>• <strong>Hover:</strong> Automatically handled by CSS</li>
            <li>• <strong>Focus:</strong> Visible focus ring for keyboard navigation</li>
            <li>• <strong>Active:</strong> Pressed state with slight transform</li>
            <li>• <strong>Disabled:</strong> Reduced opacity and no pointer events</li>
            <li>• <strong>Loading:</strong> Spinner icon with loading state data attribute</li>
          </ul>
        </div>
      </div>
    );
  },
};

// Button with Icons
export const ButtonsWithIcons: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Buttons with Icons</h2>
        <p className="text-gray-600 font-secondary">Icons enhance button meaning and visual hierarchy</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Leading Icons</h3>
          <div className="flex flex-wrap gap-3">
            <Button>
              <BarChart className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
            <Button variant="secondary">
              <Users className="mr-2 h-4 w-4" />
              Manage Users
            </Button>
            <Button variant="ghost">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Trailing Icons</h3>
          <div className="flex flex-wrap gap-3">
            <Button>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="secondary">
              Export Data
              <FileText className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Icon Only Buttons</h3>
          <div className="flex flex-wrap gap-3">
            <Button size="sm" className="px-2">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="px-2">
              <HelpCircle className="h-4 w-4" />
            </Button>
            <Button variant="destructive" size="sm" className="px-2">
              <AlertTriangle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Real-world Usage Examples
export const UsageExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Real-world Usage Examples</h2>
        <p className="text-gray-600 font-secondary">Common button patterns in actual interfaces</p>
      </div>

      <div className="space-y-8">
        {/* Form Actions */}
        <div className="p-6 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-medium mb-4 font-primary">Form Actions</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                className="px-3 py-2 border border-gray-300 rounded-md font-secondary"
                placeholder="Enter your email"
                type="email"
              />
              <input
                className="px-3 py-2 border border-gray-300 rounded-md font-secondary"
                placeholder="Create password"
                type="password"
              />
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="ghost">Cancel</Button>
              <Button>Create Account</Button>
            </div>
          </div>
        </div>

        {/* Card Actions */}
        <div className="p-6 border border-gray-200 rounded-lg">
          <h3 className="text-lg font-medium mb-4 font-primary">Card Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium mb-2 font-primary">Analytics Package</h4>
              <p className="text-sm text-gray-600 mb-4 font-secondary">
                Advanced reporting and insights for your business data.
              </p>
              <div className="flex gap-2">
                <Button size="sm">Learn More</Button>
                <Button variant="ghost" size="sm">Compare</Button>
              </div>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium mb-2 font-primary">Security Suite</h4>
              <p className="text-sm text-gray-600 mb-4 font-secondary">
                Comprehensive security monitoring and threat detection.
              </p>
              <div className="flex gap-2">
                <Button size="sm">Get Started</Button>
                <Button variant="secondary" size="sm">Schedule Demo</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Destructive Actions */}
        <div className="p-6 border border-red-200 bg-red-50 rounded-lg">
          <h3 className="text-lg font-medium mb-4 font-primary">Dangerous Actions</h3>
          <div className="space-y-4">
            <p className="text-sm text-red-700 font-secondary">
              ⚠️ This action cannot be undone. Please confirm you want to delete your account.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost">Keep Account</Button>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Button Groups (Segmented Buttons)
export const ButtonGroups: Story = {
  render: () => {
    const [view, setView] = useState('list');
    const [filters, setFilters] = useState(['popular']);
    const [alignment, setAlignment] = useState('left');
    
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 font-primary">Button Groups</h2>
          <p className="text-gray-600 font-secondary">Segmented button controls for related options</p>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-primary">View Toggle (Single Selection)</h3>
            <ButtonGroup value={view} onValueChange={(value) => setView(value as string)}>
              <ButtonGroupItem value="list" icon={<BarChart className="h-4 w-4" />}>
                List
              </ButtonGroupItem>
              <ButtonGroupItem value="grid" icon={<Users className="h-4 w-4" />}>
                Grid
              </ButtonGroupItem>
              <ButtonGroupItem value="card" icon={<Settings className="h-4 w-4" />}>
                Card
              </ButtonGroupItem>
            </ButtonGroup>
            <p className="text-sm text-gray-600">Current view: {view}</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-primary">Content Filters (Multiple Selection)</h3>
            <ButtonGroup 
              multiple 
              value={filters} 
              onValueChange={(value) => setFilters(value as string[])}
            >
              <ButtonGroupItem value="popular">Popular</ButtonGroupItem>
              <ButtonGroupItem value="recent">Recent</ButtonGroupItem>
              <ButtonGroupItem value="trending">Trending</ButtonGroupItem>
              <ButtonGroupItem value="bookmarked">Bookmarked</ButtonGroupItem>
            </ButtonGroup>
            <p className="text-sm text-gray-600">Active filters: {filters.join(', ') || 'None'}</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-primary">Text Alignment</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <ButtonGroup 
                size="sm" 
                value={alignment} 
                onValueChange={(value) => setAlignment(value as string)}
              >
                <ButtonGroupItem value="left">Left</ButtonGroupItem>
                <ButtonGroupItem value="center">Center</ButtonGroupItem>
                <ButtonGroupItem value="right">Right</ButtonGroupItem>
              </ButtonGroup>
              
              <ButtonGroup 
                size="lg" 
                variant="outline"
                value={alignment} 
                onValueChange={(value) => setAlignment(value as string)}
              >
                <ButtonGroupItem value="left">Left</ButtonGroupItem>
                <ButtonGroupItem value="center">Center</ButtonGroupItem>
                <ButtonGroupItem value="right">Right</ButtonGroupItem>
              </ButtonGroup>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium font-primary">Disabled Group</h3>
            <ButtonGroup disabled>
              <ButtonGroupItem value="option1">Option 1</ButtonGroupItem>
              <ButtonGroupItem value="option2">Option 2</ButtonGroupItem>
              <ButtonGroupItem value="option3">Option 3</ButtonGroupItem>
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  },
};

// Elevation Examples
export const ElevationLevels: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Elevation Levels</h2>
        <p className="text-gray-600 font-secondary">Different shadow depths for visual hierarchy</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[0, 1, 2, 3, 4, 5].map((level) => (
          <div key={level} className="text-center space-y-3">
            <Button elevation={level as 0 | 1 | 2 | 3 | 4 | 5}>
              Level {level}
            </Button>
            <p className="text-xs text-gray-500">Elevation {level}</p>
          </div>
        ))}
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium font-primary">Different Variants with Elevation</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" elevation={2}>
            Primary Elevated
          </Button>
          <Button variant="secondary" elevation={3}>
            Secondary Elevated
          </Button>
          <Button variant="outline" elevation={1}>
            Outline Elevated
          </Button>
          <Button variant="ghost" elevation={4}>
            Ghost Elevated
          </Button>
        </div>
      </div>
    </div>
  ),
};

// Enhanced Icon Buttons
export const EnhancedIconButtons: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Enhanced Icon Buttons</h2>
        <p className="text-gray-600 font-secondary">Icon buttons with improved styling and accessible hover states</p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Icon Button Sizes</h3>
          <div className="flex items-center gap-4">
            <Button size="icon-sm" variant="outline" elevation={1}>
              <Settings className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="primary" elevation={2}>
              <Settings className="h-5 w-5" />
            </Button>
            <Button size="icon-lg" variant="secondary" elevation={3}>
              <Settings className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Icon Button Variants with Accessible Contrast</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center space-y-2">
              <Button size="icon" variant="primary">
                <HelpCircle className="h-5 w-5" />
              </Button>
              <p className="text-xs text-gray-600">Primary</p>
            </div>
            <div className="text-center space-y-2">
              <Button size="icon" variant="secondary">
                <AlertTriangle className="h-5 w-5" />
              </Button>
              <p className="text-xs text-gray-600">Secondary</p>
            </div>
            <div className="text-center space-y-2">
              <Button size="icon" variant="tertiary">
                <FileText className="h-5 w-5" />
              </Button>
              <p className="text-xs text-gray-600">Tertiary</p>
            </div>
            <div className="text-center space-y-2">
              <Button size="icon" variant="outline">
                <Settings className="h-5 w-5" />
              </Button>
              <p className="text-xs text-gray-600">Outline</p>
            </div>
            <div className="text-center space-y-2">
              <Button size="icon" variant="ghost">
                <Users className="h-5 w-5" />
              </Button>
              <p className="text-xs text-gray-600">Ghost</p>
            </div>
            <div className="text-center space-y-2">
              <Button size="icon" variant="destructive">
                <AlertTriangle className="h-5 w-5" />
              </Button>
              <p className="text-xs text-gray-600">Destructive</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Accessibility Test - All Sizes & States</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-sm w-20">Small:</span>
              <Button size="icon-sm" variant="primary">
                <Settings className="h-4 w-4" />
              </Button>
              <Button size="icon-sm" variant="secondary">
                <Settings className="h-4 w-4" />
              </Button>
              <Button size="icon-sm" variant="outline">
                <Settings className="h-4 w-4" />
              </Button>
              <Button size="icon-sm" variant="ghost">
                <Settings className="h-4 w-4" />
              </Button>
              <Button size="icon-sm" variant="destructive">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm w-20">Default:</span>
              <Button size="icon" variant="primary">
                <Settings className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="secondary">
                <Settings className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline">
                <Settings className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Settings className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="destructive">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm w-20">Large:</span>
              <Button size="icon-lg" variant="primary">
                <Settings className="h-6 w-6" />
              </Button>
              <Button size="icon-lg" variant="secondary">
                <Settings className="h-6 w-6" />
              </Button>
              <Button size="icon-lg" variant="outline">
                <Settings className="h-6 w-6" />
              </Button>
              <Button size="icon-lg" variant="ghost">
                <Settings className="h-6 w-6" />
              </Button>
              <Button size="icon-lg" variant="destructive">
                <Settings className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">✅ Accessibility Improvements</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• All icon buttons now inherit proper colors from their variant</li>
              <li>• Hover states maintain WCAG AA contrast ratios (4.5:1 minimum)</li>
              <li>• Icons remain visible and accessible in all interaction states</li>
              <li>• Each variant has consistent color behavior across all sizes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Figma Specifications Display
export const FigmaSpecifications: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Figma Specifications</h2>
        <p className="text-gray-600 font-secondary">Button components extracted from Figma with full specifications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Design System Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50 rounded">
              <p className="text-sm font-medium font-primary">Total Buttons</p>
              <p className="text-2xl font-bold text-blue-600">{buttonSpecs.length}</p>
            </div>
            <div className="p-3 bg-green-50 rounded">
              <p className="text-sm font-medium font-primary">Primary Variants</p>
              <p className="text-2xl font-bold text-green-600">{categorizedButtons.primary.length}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded">
              <p className="text-sm font-medium font-primary">Secondary Variants</p>
              <p className="text-2xl font-bold text-purple-600">{categorizedButtons.secondary.length}</p>
            </div>
            <div className="p-3 bg-orange-50 rounded">
              <p className="text-sm font-medium font-primary">Ghost Variants</p>
              <p className="text-2xl font-bold text-orange-600">{categorizedButtons.ghost.length}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Usage Guidelines</h3>
          <div className="space-y-2">
            {buttonUsage.guidelines.map((guideline, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <p className="text-sm text-gray-700 font-secondary">{guideline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium mb-2 font-primary">Implementation Details</h4>
        <p className="text-sm text-gray-600 font-secondary">
          All buttons implement the shadcn/ui Button component with custom styling based on Figma specifications. 
          The component supports all standard HTML button attributes and is fully accessible with keyboard navigation 
          and screen reader support.
        </p>
      </div>
    </div>
  ),
};