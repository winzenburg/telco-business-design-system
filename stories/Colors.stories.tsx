import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: ' Foundations/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete color system with semantic tokens, brand colors, and accessible color ramps for the Comcast Business Design System.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Color palette data from Tailwind config
const colorPalette = {
  primary: {
    50: '#F5F8FF',
    100: '#EBF1FF',
    200: '#C2D8FF',
    300: '#86B0FF',
    400: '#4A89FF',
    500: '#0D62FF', // Primary Blue
    600: '#0A4ECC', // Hover state
    700: '#083B99', // Active state
    800: '#052766',
    900: '#031433',
  },
  neutral: {
    50: '#FCFCFC',
    100: '#F9F9FA',
    200: '#F1F2F6',
    300: '#DDDDE2',
    400: '#B4B5BB',
    500: '#9D9EA7',
    600: '#70717D',
    700: '#595A69',
    800: '#424454',
    900: '#2B2D3F',
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
};

// Component to display a color swatch
const ColorSwatch: React.FC<{
  name: string;
  value: string;
  hex: string;
  textColor?: string;
}> = ({ name, value, hex, textColor = 'text-gray-900' }) => (
  <div className="flex flex-col">
    <div
      className={`w-full h-20 rounded-lg shadow-sm border border-gray-200`}
      style={{ backgroundColor: hex }}
    />
    <div className="mt-2 space-y-1">
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-xs text-gray-600">{value}</p>
      <p className="text-xs font-mono text-gray-500">{hex}</p>
    </div>
  </div>
);

// Component to display a color ramp
const ColorRamp: React.FC<{
  name: string;
  colors: Record<string, string>;
  description?: string;
}> = ({ name, colors, description }) => (
  <div className="mb-12">
    <div className="mb-4">
      <h3 className="text-lg font-semibold capitalize">{name}</h3>
      {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
    </div>
    <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
      {Object.entries(colors).map(([shade, hex]) => (
        <ColorSwatch
          key={`${name}-${shade}`}
          name={shade}
          value={`${name}-${shade}`}
          hex={hex}
          textColor={parseInt(shade) >= 500 ? 'text-white' : 'text-gray-900'}
        />
      ))}
    </div>
  </div>
);

export const AllColors: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Color System</h2>
        <p className="text-gray-600 mb-8">
          The Comcast Business Design System color palette provides a comprehensive set of colors
          that ensure consistency and accessibility across all applications.
        </p>
      </div>

      <ColorRamp
        name="Primary"
        colors={colorPalette.primary}
        description="Primary brand colors used for main actions, links, and key interface elements."
      />

      <ColorRamp
        name="Neutral"
        colors={colorPalette.neutral}
        description="Neutral colors for text, backgrounds, and borders."
      />

      <ColorRamp
        name="Success"
        colors={colorPalette.success}
        description="Colors to indicate successful operations or positive states."
      />

      <ColorRamp
        name="Warning"
        colors={colorPalette.warning}
        description="Colors to alert users to potential issues or important information."
      />

      <ColorRamp
        name="Error"
        colors={colorPalette.error}
        description="Colors to indicate errors, destructive actions, or critical issues."
      />

      <ColorRamp
        name="Info"
        colors={colorPalette.info}
        description="Colors for informational messages and secondary interface elements."
      />
    </div>
  ),
};

export const BrandColors: Story = {
  render: () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Brand Colors</h2>
      <p className="text-gray-600 mb-8">
        Core brand colors that define the Comcast Business visual identity.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <div
            className="w-full h-32 rounded-lg shadow-md"
            style={{ backgroundColor: '#0D62FF' }}
          />
          <div className="mt-3">
            <p className="font-semibold">Primary Blue</p>
            <p className="text-sm text-gray-600">primary-500</p>
            <p className="text-xs font-mono text-gray-500">#0D62FF</p>
            <p className="text-xs text-gray-500 mt-1">Main brand color</p>
          </div>
        </div>

        <div>
          <div
            className="w-full h-32 rounded-lg shadow-md"
            style={{ backgroundColor: '#0A4ECC' }}
          />
          <div className="mt-3">
            <p className="font-semibold">Hover Blue</p>
            <p className="text-sm text-gray-600">primary-600</p>
            <p className="text-xs font-mono text-gray-500">#0A4ECC</p>
            <p className="text-xs text-gray-500 mt-1">Interactive hover state</p>
          </div>
        </div>

        <div>
          <div
            className="w-full h-32 rounded-lg shadow-md"
            style={{ backgroundColor: '#083B99' }}
          />
          <div className="mt-3">
            <p className="font-semibold">Active Blue</p>
            <p className="text-sm text-gray-600">primary-700</p>
            <p className="text-xs font-mono text-gray-500">#083B99</p>
            <p className="text-xs text-gray-500 mt-1">Active/pressed state</p>
          </div>
        </div>

        <div>
          <div
            className="w-full h-32 rounded-lg shadow-md border border-gray-200"
            style={{ backgroundColor: '#FFFFFF' }}
          />
          <div className="mt-3">
            <p className="font-semibold">White</p>
            <p className="text-sm text-gray-600">white</p>
            <p className="text-xs font-mono text-gray-500">#FFFFFF</p>
            <p className="text-xs text-gray-500 mt-1">Primary background</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SemanticColors: Story = {
  render: () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Semantic Colors</h2>
      <p className="text-gray-600 mb-8">
        Colors with specific meanings to communicate status and actions consistently.
      </p>

      <div className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold mb-4">Status Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-green-500" />
              <div>
                <p className="font-medium">Success</p>
                <p className="text-xs text-gray-500">success-500</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-amber-500" />
              <div>
                <p className="font-medium">Warning</p>
                <p className="text-xs text-gray-500">warning-500</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-red-500" />
              <div>
                <p className="font-medium">Error</p>
                <p className="text-xs text-gray-500">error-500</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-blue-500" />
              <div>
                <p className="font-medium">Info</p>
                <p className="text-xs text-gray-500">info-500</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold mb-4">Text Colors</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-900">Primary Text</span>
              <span className="text-xs font-mono text-gray-500">text-gray-900</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Secondary Text</span>
              <span className="text-xs font-mono text-gray-500">text-gray-600</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Disabled Text</span>
              <span className="text-xs font-mono text-gray-500">text-gray-400</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-blue-600">Link Text</span>
              <span className="text-xs font-mono text-gray-500">text-primary-600</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold mb-4">Background Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <div className="w-full h-20 rounded border border-gray-200 bg-white" />
              <p className="text-sm mt-2">Surface</p>
              <p className="text-xs text-gray-500">bg-white</p>
            </div>
            <div>
              <div className="w-full h-20 rounded border border-gray-200 bg-gray-50" />
              <p className="text-sm mt-2">Background</p>
              <p className="text-xs text-gray-500">bg-gray-50</p>
            </div>
            <div>
              <div className="w-full h-20 rounded border border-gray-200 bg-gray-100" />
              <p className="text-sm mt-2">Elevated</p>
              <p className="text-xs text-gray-500">bg-gray-100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AccessibilityGuide: Story = {
  render: () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Color Accessibility</h2>
      <p className="text-gray-600 mb-8">
        Guidelines for using colors to ensure WCAG 2.1 AA compliance.
      </p>

      <div className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold mb-4">Contrast Ratios</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-12 bg-gray-900 text-white flex items-center justify-center text-sm rounded">
                Text
              </div>
              <div className="flex-1">
                <p className="font-medium">Normal Text</p>
                <p className="text-sm text-gray-600">Minimum 4.5:1 contrast ratio</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-12 bg-gray-700 text-white flex items-center justify-center text-lg font-bold rounded">
                Large
              </div>
              <div className="flex-1">
                <p className="font-medium">Large Text</p>
                <p className="text-sm text-gray-600">Minimum 3:1 contrast ratio (18pt+)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-12 bg-blue-600 text-white flex items-center justify-center text-sm rounded">
                UI
              </div>
              <div className="flex-1">
                <p className="font-medium">UI Components</p>
                <p className="text-sm text-gray-600">Minimum 3:1 contrast ratio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold mb-4">Color Blind Safe Combinations</h3>
          <p className="text-sm text-gray-600 mb-4">
            These color combinations are distinguishable for common types of color blindness.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex space-x-2">
              <div className="w-12 h-12 rounded bg-blue-500" />
              <div className="w-12 h-12 rounded bg-orange-500" />
            </div>
            <div className="flex space-x-2">
              <div className="w-12 h-12 rounded bg-blue-500" />
              <div className="w-12 h-12 rounded bg-yellow-500" />
            </div>
            <div className="flex space-x-2">
              <div className="w-12 h-12 rounded bg-purple-500" />
              <div className="w-12 h-12 rounded bg-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold mb-2 text-blue-900">Best Practices</h3>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>• Never use color as the only means of conveying information</li>
            <li>• Provide text labels or icons alongside color indicators</li>
            <li>• Test designs with color blindness simulators</li>
            <li>• Ensure sufficient contrast between text and background</li>
            <li>• Use patterns or textures in addition to colors for charts</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

export const ChartColors: Story = {
  render: () => {
    // Chart color themes
    const chartThemes = {
      primary: [
        '#0D62FF', // Primary blue
        '#4A89FF', // Light blue
        '#86B0FF', // Lighter blue
        '#C2D8FF', // Very light blue
        '#EBF1FF', // Pale blue
        '#F5F8FF', // Lightest blue
      ],
      categorical: [
        '#0D62FF', // Primary blue
        '#22C55E', // Success green
        '#F59E0B', // Warning amber
        '#EF4444', // Error red
        '#8B5CF6', // Purple
        '#06B6D4', // Cyan
        '#EC4899', // Pink
        '#84CC16', // Lime
        '#F97316', // Orange
        '#6366F1', // Indigo
      ],
      sequential: {
        blue: ['#F5F8FF', '#EBF1FF', '#C2D8FF', '#86B0FF', '#4A89FF', '#0D62FF', '#083B99'],
        green: ['#F0FDF4', '#DCFCE7', '#BBF7D0', '#86EFAC', '#4ADE80', '#22C55E', '#15803D'],
        orange: ['#FFFBEB', '#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24', '#F59E0B', '#B45309'],
      },
      diverging: [
        '#EF4444', // Red
        '#F87171', // Light red
        '#FCA5A5', // Lighter red
        '#FEE2E2', // Pale red
        '#F3F4F6', // Neutral gray
        '#DBEAFE', // Pale blue
        '#93C5FD', // Light blue
        '#3B82F6', // Blue
        '#1D4ED8', // Dark blue
      ],
    };

    const ColorTheme = ({ title, colors, description }) => (
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {colors.map((color, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-12 h-12 rounded shadow-sm border border-gray-200"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs font-mono mt-1 text-gray-500">{color}</span>
            </div>
          ))}
        </div>
      </div>
    );

    const SequentialTheme = ({ name, colors, description }) => (
      <div className="mb-4">
        <h4 className="font-medium capitalize mb-2">{name}</h4>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex gap-1">
          {colors.map((color, index) => (
            <div key={index} className="flex-1">
              <div
                className="w-full h-8 first:rounded-l last:rounded-r"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs font-mono block text-center mt-1 text-gray-500">
                {color}
              </span>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Chart Color Themes</h2>
        <p className="text-gray-600 mb-8">
          Specialized color palettes designed for data visualization and charts to ensure clarity, accessibility, and visual hierarchy.
        </p>

        <ColorTheme
          title="Primary Chart Theme"
          colors={chartThemes.primary}
          description="Monochromatic blue palette ideal for single-series charts and progressive data visualization."
        />

        <ColorTheme
          title="Categorical Theme"
          colors={chartThemes.categorical}
          description="Distinct colors for categorical data, ensuring good contrast and color-blind accessibility."
        />

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h3 className="font-semibold mb-2">Sequential Themes</h3>
          <p className="text-sm text-gray-600 mb-4">
            Gradual color progressions for ordered data like heatmaps, choropleth maps, and range visualizations.
          </p>
          
          <SequentialTheme
            name="Blue Sequential"
            colors={chartThemes.sequential.blue}
            description="For showing data progression from light to dark blue"
          />
          
          <SequentialTheme
            name="Green Sequential"
            colors={chartThemes.sequential.green}
            description="For positive metrics, growth, or success indicators"
          />
          
          <SequentialTheme
            name="Orange Sequential"
            colors={chartThemes.sequential.orange}
            description="For attention-getting data or warning states"
          />
        </div>

        <ColorTheme
          title="Diverging Theme"
          colors={chartThemes.diverging}
          description="For data with a meaningful center point, showing both positive and negative values or deviations from a baseline."
        />

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold mb-4">Chart Color Usage Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Best Practices</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Use categorical colors for unordered data</li>
                <li>• Apply sequential colors for ordered/continuous data</li>
                <li>• Reserve diverging colors for data with natural midpoints</li>
                <li>• Limit categorical charts to 10 colors maximum</li>
                <li>• Always provide legends or direct labeling</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Accessibility</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Colors tested for deuteranopia and protanopia</li>
                <li>• Minimum 3:1 contrast ratio maintained</li>
                <li>• Patterns or textures supplement color coding</li>
                <li>• Direct labeling reduces color dependence</li>
                <li>• Dark mode compatible variants available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  },
};