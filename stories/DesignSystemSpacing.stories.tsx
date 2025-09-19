import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { 
  spacing, 
  semanticSpacing, 
  responsiveSpacing,
  grid,
  spacingUsage,
  getSpacing,
  getSemanticSpacing
} from '../src/tokens/design-system-spacing';

const meta: Meta = {
  title: ' Foundations/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comprehensive 4px baseline spacing system with standard values: 8px, 12px, 16px, 20px, 24px for consistent layout and spacing.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Spacing Visual Component
const SpacingVisual: React.FC<{ size: string; value: string; description?: string }> = ({ 
  size, 
  value, 
  description 
}) => (
  <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-white">
    <div className="flex items-center justify-between mb-3">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{size}</h3>
        <p className="text-sm text-gray-600">{value}</p>
        {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
      </div>
      <div className="text-sm text-gray-500">
        {size} = {value}
      </div>
    </div>
    
    {/* Visual representation */}
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
        <div 
          className="bg-blue-500 rounded"
          style={{ 
            width: value, 
            height: '16px'
          }}
        ></div>
        <div className="w-4 h-4 bg-gray-300 rounded ml-2"></div>
      </div>
      <span className="text-xs text-gray-500">({value} spacing)</span>
    </div>
    
    {/* Usage example */}
    <div className="mt-4 p-3 bg-gray-50 rounded border-l-4 border-blue-500">
      <code className="text-sm">
        spacing[{size}] • margin-{size} • padding-{size} • gap-{size}
      </code>
    </div>
  </div>
);

// Semantic Spacing Demo
const SemanticSpacingDemo: React.FC<{ 
  category: string; 
  sizes: Record<string, string>;
  description: string;
}> = ({ category, sizes, description }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-900 mb-2 capitalize">{category}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(sizes).map(([size, value]) => (
        <div key={size} className="p-4 border border-gray-200 rounded-lg bg-white">
          <div className="mb-3">
            <h4 className="font-medium text-gray-900">{size}</h4>
            <p className="text-sm text-gray-600">{value}</p>
          </div>
          
          <div className="flex items-center">
            <div 
              className="bg-blue-500 rounded"
              style={{ 
                width: value, 
                height: '12px'
              }}
            ></div>
          </div>
          
          <code className="text-xs text-gray-500 mt-2 block">
            {category}.{size}
          </code>
        </div>
      ))}
    </div>
  </div>
);

// Spacing Patterns Demo
const SpacingPatternsDemo: React.FC = () => (
  <div className="space-y-8">
    <h3 className="text-xl font-semibold text-gray-900">Common Spacing Patterns</h3>
    
    {/* Stack Pattern */}
    <div className="p-6 border border-gray-200 rounded-lg bg-white">
      <h4 className="font-medium text-gray-900 mb-4">Stack Pattern (Vertical Spacing)</h4>
      <div className="space-y-4">
        <div className="p-3 bg-blue-100 rounded border-l-4 border-blue-500">
          <h5 className="font-medium">Small Stack (12px)</h5>
          <div style={{ marginTop: spacingUsage.patterns.stack.small }}>
            <div className="p-2 bg-blue-200 rounded">Related item with tight spacing</div>
          </div>
        </div>
        
        <div className="p-3 bg-green-100 rounded border-l-4 border-green-500">
          <h5 className="font-medium">Medium Stack (16px)</h5>
          <div style={{ marginTop: spacingUsage.patterns.stack.medium }}>
            <div className="p-2 bg-green-200 rounded">Normal spacing between elements</div>
          </div>
        </div>
        
        <div className="p-3 bg-purple-100 rounded border-l-4 border-purple-500">
          <h5 className="font-medium">Large Stack (24px)</h5>
          <div style={{ marginTop: spacingUsage.patterns.stack.large }}>
            <div className="p-2 bg-purple-200 rounded">Loose spacing for sections</div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Inline Pattern */}
    <div className="p-6 border border-gray-200 rounded-lg bg-white">
      <h4 className="font-medium text-gray-900 mb-4">Inline Pattern (Horizontal Spacing)</h4>
      
      <div className="space-y-4">
        <div>
          <h5 className="font-medium mb-2">Tight (8px) - Button Groups</h5>
          <div className="flex" style={{ gap: spacingUsage.patterns.inline.tight }}>
            <button className="px-3 py-1 bg-blue-500 text-white rounded">Save</button>
            <button className="px-3 py-1 bg-gray-500 text-white rounded">Cancel</button>
          </div>
        </div>
        
        <div>
          <h5 className="font-medium mb-2">Normal (16px) - Navigation</h5>
          <div className="flex" style={{ gap: spacingUsage.patterns.inline.normal }}>
            <a href="#" className="text-blue-600 hover:underline">Home</a>
            <a href="#" className="text-blue-600 hover:underline">About</a>
            <a href="#" className="text-blue-600 hover:underline">Contact</a>
          </div>
        </div>
        
        <div>
          <h5 className="font-medium mb-2">Loose (24px) - Separated Items</h5>
          <div className="flex" style={{ gap: spacingUsage.patterns.inline.loose }}>
            <div className="p-3 bg-gray-100 rounded">Item 1</div>
            <div className="p-3 bg-gray-100 rounded">Item 2</div>
            <div className="p-3 bg-gray-100 rounded">Item 3</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// All Spacing Overview
export const AllSpacing: Story = {
  render: () => (
    <div className="space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Spacing System</h1>
        <p className="text-gray-600">
          4px baseline spacing system with standard values for consistent layout and spacing.
        </p>
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <h3 className="font-medium text-blue-900">Standard Values</h3>
          <p className="text-blue-800 text-sm mt-1">
            8px, 12px, 16px, 20px, 24px for margin, padding, and spacing between elements
          </p>
        </div>
      </div>

      {/* Core Spacing Scale */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Spacing Scale</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.entries(spacing).slice(0, 10).map(([key, value]) => (
            <SpacingVisual 
              key={key}
              size={key}
              value={value}
              description={
                key === '2' ? 'Small - tight spacing between related elements' :
                key === '3' ? 'Medium-small - form field gaps' :
                key === '4' ? 'Medium - most common for padding and margins' :
                key === '5' ? 'Large - spacing between unrelated elements' :
                key === '6' ? 'Extra large - section dividers' :
                key === '8' ? 'XXL - section padding' :
                ''
              }
            />
          ))}
        </div>
      </div>

      {/* Standard Values Highlight */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Standard Spacing Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {spacingUsage.standard.values.map((item, index) => (
            <div key={index} className="text-center">
              <div className="mb-3">
                <div 
                  className="bg-blue-500 mx-auto rounded"
                  style={{ width: item.name, height: '20px' }}
                ></div>
              </div>
              <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.usage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Semantic Spacing
export const SemanticSpacing: Story = {
  render: () => (
    <div className="space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Semantic Spacing</h1>
        <p className="text-gray-600">
          Organized spacing values by context and usage for consistent application.
        </p>
      </div>

      <SemanticSpacingDemo 
        category="padding"
        sizes={semanticSpacing.padding}
        description="Internal spacing within components and containers"
      />

      <SemanticSpacingDemo 
        category="margin"
        sizes={semanticSpacing.margin}
        description="External spacing between components and elements"
      />

      <SemanticSpacingDemo 
        category="gap"
        sizes={semanticSpacing.gap}
        description="Spacing for flexbox and grid layouts"
      />
    </div>
  ),
};

// Spacing Patterns
export const SpacingPatterns: Story = {
  render: () => (
    <div className="space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Spacing Patterns</h1>
        <p className="text-gray-600">
          Common spacing patterns and their applications in layout design.
        </p>
      </div>

      <SpacingPatternsDemo />
    </div>
  ),
};

// Component Spacing
export const ComponentSpacing: Story = {
  render: () => (
    <div className="space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Component Spacing</h1>
        <p className="text-gray-600">
          Spacing guidelines for specific component types and contexts.
        </p>
      </div>

      {/* Button Spacing */}
      <div className="p-6 border border-gray-200 rounded-lg bg-white">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Button Spacing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(semanticSpacing.component.button).map(([size, value]) => (
            <div key={size} className="text-center">
              <button 
                className="bg-blue-500 text-white rounded mb-3 transition-colors hover:bg-blue-600"
                style={{ padding: value }}
              >
                {size.toUpperCase()} Button
              </button>
              <p className="text-sm text-gray-600">padding: {value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Card Spacing */}
      <div className="p-6 border border-gray-200 rounded-lg bg-white">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Card Spacing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            className="border border-gray-200 rounded-lg bg-gray-50"
            style={{ padding: semanticSpacing.component.card.padding }}
          >
            <h4 className="font-medium text-gray-900 mb-2">Card Title</h4>
            <div style={{ marginBottom: semanticSpacing.component.card.gap }}>
              <p className="text-gray-600">Card content with proper internal spacing.</p>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Action</button>
            <p className="text-xs text-gray-500 mt-3">
              Padding: {semanticSpacing.component.card.padding}, Gap: {semanticSpacing.component.card.gap}
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Card Spacing Specs</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Internal padding:</strong> {semanticSpacing.component.card.padding}</p>
              <p><strong>Element gap:</strong> {semanticSpacing.component.card.gap}</p>
              <p><strong>Card margin:</strong> {semanticSpacing.component.card.margin}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Spacing */}
      <div className="p-6 border border-gray-200 rounded-lg bg-white">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Form Spacing</h3>
        <div className="max-w-md">
          <div style={{ marginBottom: semanticSpacing.component.form.fieldGap }}>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div style={{ marginTop: semanticSpacing.component.form.labelGap }}>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
          
          <div style={{ marginBottom: semanticSpacing.component.form.sectionGap }}>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div style={{ marginTop: semanticSpacing.component.form.labelGap }}>
              <input 
                type="password" 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>
          
          <div className="text-xs text-gray-500 space-y-1">
            <p><strong>Field gap:</strong> {semanticSpacing.component.form.fieldGap}</p>
            <p><strong>Label gap:</strong> {semanticSpacing.component.form.labelGap}</p>
            <p><strong>Section gap:</strong> {semanticSpacing.component.form.sectionGap}</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Usage Guidelines
export const UsageGuidelines: Story = {
  render: () => (
    <div className="space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Usage Guidelines</h1>
        <p className="text-gray-600">
          How to apply the spacing system effectively in your designs and development.
        </p>
      </div>

      {/* Quick Reference */}
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Tailwind Classes</h3>
            <div className="space-y-2 text-sm font-mono">
              <p><code className="bg-gray-200 px-2 py-1 rounded">m-2</code> = 8px margin</p>
              <p><code className="bg-gray-200 px-2 py-1 rounded">p-4</code> = 16px padding</p>
              <p><code className="bg-gray-200 px-2 py-1 rounded">gap-6</code> = 24px gap</p>
              <p><code className="bg-gray-200 px-2 py-1 rounded">space-y-3</code> = 12px vertical spacing</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">React/CSS Usage</h3>
            <div className="space-y-2 text-sm font-mono">
              <p><code className="bg-gray-200 px-2 py-1 rounded">spacing[4]</code> = '16px'</p>
              <p><code className="bg-gray-200 px-2 py-1 rounded">semanticSpacing.padding.md</code> = '16px'</p>
              <p><code className="bg-gray-200 px-2 py-1 rounded">getSpacing(5)</code> = '20px'</p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border border-green-200 rounded-lg bg-green-50">
          <h3 className="font-semibold text-green-900 mb-3">✅ Best Practices</h3>
          <ul className="text-sm text-green-800 space-y-2">
            <li>• Use 16px (spacing[4]) as your default spacing</li>
            <li>• Stick to the standard values: 8px, 12px, 16px, 20px, 24px</li>
            <li>• Use semantic spacing for component-specific contexts</li>
            <li>• Maintain consistency within similar components</li>
            <li>• Use larger spacing (24px+) for section separation</li>
          </ul>
        </div>
        
        <div className="p-6 border border-red-200 rounded-lg bg-red-50">
          <h3 className="font-semibold text-red-900 mb-3">Avoid These</h3>
          <ul className="text-sm text-red-800 space-y-2">
            <li>• Random pixel values outside the scale</li>
            <li>• Inconsistent spacing between similar elements</li>
            <li>• Using spacing too large for tight interfaces</li>
            <li>• Mixing semantic spacing inconsistently</li>
            <li>• Forgetting responsive spacing considerations</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};