import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { colors } from '../../tokens/design-system-colors';

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete color palette for the Comcast Business Design System, including brand colors, semantic colors, and data visualization palettes.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch: React.FC<{ color: string; name: string; value: string; description?: string }> = ({ 
  color, 
  name, 
  value,
  description 
}) => (
  <div className="flex flex-col items-center p-4 border border-[var(--ds-color-border-default)] rounded-lg bg-white shadow-sm">
    <div 
      className="w-16 h-16 rounded-lg border border-[var(--ds-color-border-default)] shadow-sm mb-3"
      style={{ backgroundColor: color }}
    />
    <div className="text-center">
      <div className="font-medium text-[var(--ds-color-text-primary)] text-sm">{name}</div>
      <div className="font-mono text-xs text-[var(--ds-color-text-muted)] mt-1">{value}</div>
      {description && (
        <div className="text-xs text-[var(--ds-color-text-muted)] mt-1 max-w-[120px]">{description}</div>
      )}
    </div>
  </div>
);

const ColorSection: React.FC<{ 
  title: string; 
  description: string; 
  colors: Array<{ name: string; value: string; description?: string }> 
}> = ({ title, description, colors: colorArray }) => (
  <div className="mb-12">
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-[var(--ds-color-text-primary)] font-primary mb-2">{title}</h2>
      <p className="text-[var(--ds-color-text-muted)] max-w-2xl">{description}</p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {colorArray.map(({ name, value, description }) => (
        <ColorSwatch
          key={name}
          color={value}
          name={name}
          value={value}
          description={description}
        />
      ))}
    </div>
  </div>
);

export const AllColors: Story = {
  render: () => (
    <div className="p-8 bg-[var(--ds-color-bg-surface)] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-[var(--ds-color-text-primary)] font-primary mb-4">
            Comcast Business Design System Colors
          </h1>
          <p className="text-lg text-[var(--ds-color-text-muted)] max-w-3xl">
            Our comprehensive color palette designed for accessibility, brand consistency, 
            and effective data visualization across all Comcast Business applications.
          </p>
        </div>

        {/* Brand Colors */}
        <ColorSection
          title="Brand Colors"
          description="Primary brand colors that define the Comcast Business identity and key interactive elements."
          colors={[
            { name: 'Comcast Blue', value: colors.blue[500], description: 'Primary brand color for CTAs and links' },
            { name: 'Blue 600', value: colors.blue[600], description: 'Hover state for primary actions' },
            { name: 'Blue 700', value: colors.blue[700], description: 'Active state for primary actions' },
            { name: 'Blue 300', value: colors.blue[300], description: 'Light accent and backgrounds' },
            { name: 'Blue 100', value: colors.blue[100], description: 'Subtle backgrounds and highlights' },
          ]}
        />

        {/* Semantic Colors */}
        <ColorSection
          title="Semantic Colors"
          description="Status and feedback colors that communicate meaning and system states to users."
          colors={[
            { name: 'Success Green', value: colors.green[600], description: 'Success states and positive feedback' },
            { name: 'Warning Orange', value: colors.orange[500], description: 'Caution states and pending actions' },
            { name: 'Error Red', value: colors.red[600], description: 'Error states and destructive actions' },
            { name: 'Info Blue', value: colors.blue[500], description: 'Informational messages' },
          ]}
        />

        {/* Neutral Colors */}
        <ColorSection
          title="Neutral Colors"
          description="Text, background, and border colors that provide hierarchy and structure."
          colors={[
            { name: 'Text Primary', value: colors.neutral[900], description: 'Primary text color' },
            { name: 'Text Secondary', value: colors.neutral[600], description: 'Secondary text and captions' },
            { name: 'Text Muted', value: colors.neutral[400], description: 'Disabled text and placeholders' },
            { name: 'Border', value: '#E8EAEF', description: 'Component borders and dividers' },
            { name: 'Background', value: colors.neutral[100], description: 'Page backgrounds' },
            { name: 'White', value: '#FFFFFF', description: 'Card backgrounds and surfaces' },
          ]}
        />

        {/* Data Visualization - Categorical */}
        <ColorSection
          title="Data Visualization - Categorical"
          description="Distinct colors for different categories, groups, or series in charts and graphs."
          colors={[
            { name: 'Category 1', value: '#0D62FF', description: 'Primary blue category' },
            { name: 'Category 2', value: '#3BB112', description: 'Green category' },
            { name: 'Category 3', value: '#5235A8', description: 'Purple category' },
            { name: 'Category 4', value: '#E7343C', description: 'Red category' },
            { name: 'Category 5', value: '#03496B', description: 'Dark blue category' },
            { name: 'Category 6', value: '#DB9200', description: 'Orange category' },
          ]}
        />

        {/* Data Visualization - Sequential */}
        <ColorSection
          title="Data Visualization - Sequential"
          description="Ordered colors for representing continuous data, gradients, and progressive values."
          colors={[
            { name: 'Sequential 1', value: '#013841', description: 'Darkest value' },
            { name: 'Sequential 2', value: '#055446', description: 'Very dark' },
            { name: 'Sequential 3', value: '#0A704B', description: 'Dark' },
            { name: 'Sequential 4', value: '#0F864F', description: 'Mid-range' },
            { name: 'Sequential 5', value: '#139C53', description: 'Light' },
            { name: 'Sequential 6', value: '#26A54D', description: 'Very light' },
            { name: 'Sequential 7', value: '#499F3C', description: 'Lightest value' },
          ]}
        />

        {/* Data Visualization - Signal */}
        <ColorSection
          title="Data Visualization - Signal"
          description="Status and alert colors for communicating priority, risk levels, and outcomes in data."
          colors={[
            { name: 'Positive', value: '#4EA725', description: 'Positive outcomes' },
            { name: 'Low Risk', value: '#CA8700', description: 'Low priority/risk' },
            { name: 'Medium Risk', value: '#E86711', description: 'Medium priority/risk' },
            { name: 'High Risk', value: '#AD1217', description: 'High priority/risk' },
            { name: 'Critical', value: '#771117', description: 'Critical priority/risk' },
            { name: 'Neutral', value: '#949495', description: 'Neutral/no data' },
          ]}
        />

        {/* Extended Palette */}
        <ColorSection
          title="Extended Palette"
          description="Additional colors from our complete palette for specialized use cases."
          colors={[
            { name: 'Navy 600', value: colors.navy[600], description: 'Deep navy for headers' },
            { name: 'Purple 500', value: colors.purple[500], description: 'Accent purple' },
            { name: 'Yellow 400', value: colors.yellow[400], description: 'Bright yellow accent' },
            { name: 'Orange 600', value: colors.orange[600], description: 'Orange accent' },
            { name: 'Green 700', value: colors.green[700], description: 'Dark green' },
            { name: 'Red 700', value: colors.red[700], description: 'Dark red' },
          ]}
        />

        {/* Usage Guidelines */}
        <div className="mt-16 p-6 bg-white rounded-lg border border-[var(--ds-color-border-default)]">
          <h2 className="text-xl font-bold text-[var(--ds-color-text-primary)] font-primary mb-4">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[var(--ds-color-text-primary)] mb-2">Accessibility</h3>
              <ul className="text-sm text-[var(--ds-color-text-muted)] space-y-1">
                <li>• All colors meet WCAG 2.1 AA contrast requirements</li>
                <li>• Text colors provide 4.5:1 minimum contrast ratio</li>
                <li>• UI elements provide 3:1 minimum contrast ratio</li>
                <li>• Always test colors with accessibility tools</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--ds-color-text-primary)] mb-2">Implementation</h3>
              <ul className="text-sm text-[var(--ds-color-text-muted)] space-y-1">
                <li>• Use design tokens from the color system</li>
                <li>• Avoid hardcoded hex values in components</li>
                <li>• Test colors in both light and dark contexts</li>
                <li>• Document color usage and rationale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};