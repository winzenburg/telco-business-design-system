import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { rawColors, semanticTokens, componentTokens } from '../src/tokens/colors-consolidated';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive color system for Comcast Business Design System. Click any color to copy its value, explore usage, and understand the color relationships.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Copy to clipboard utility
const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  }
};

// Color utility functions
const getTextColor = (hexColor: string): string => {
  // Remove # if present
  const hex = hexColor.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

// Convert hex to HSL
const hexToHsl = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
};

// Convert hex to RGB
const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
};

// Enhanced color swatch component inspired by uicolors.app
interface EnhancedColorSwatchProps {
  color: string;
  name: string;
  shade: string;
  usage?: string;
  cssClass?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const EnhancedColorSwatch: React.FC<EnhancedColorSwatchProps> = ({ 
  color, 
  name, 
  shade, 
  usage, 
  cssClass,
  isActive,
  onClick 
}) => {
  const [copied, setCopied] = useState(false);
  const [copyTarget, setCopyTarget] = useState<'hex' | 'css' | 'hsl' | 'rgb'>('hex');
  const textColor = getTextColor(color);

  const handleCopy = async (value: string, type: 'hex' | 'css' | 'hsl' | 'rgb') => {
    const success = await copyToClipboard(value);
    if (success) {
      setCopyTarget(type);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getCopyValue = (type: 'hex' | 'css' | 'hsl' | 'rgb') => {
    switch (type) {
      case 'hex': return color;
      case 'css': return cssClass || `bg-${name}-${shade}`;
      case 'hsl': return hexToHsl(color);
      case 'rgb': return hexToRgb(color);
      default: return color;
    }
  };

  return (
    <div 
      className={`group relative rounded-lg overflow-hidden transition-all duration-200 cursor-pointer
        ${isActive ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105 hover:shadow-lg'}
      `}
      onClick={onClick}
    >
      {/* Main color area */}
      <div
        className="h-24 flex items-end justify-between p-3 transition-all duration-200 group-hover:h-28"
        style={{ backgroundColor: color, color: textColor }}
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="text-sm font-semibold">{shade}</div>
          {usage && <div className="text-xs opacity-80">{usage}</div>}
        </div>
        
        {/* Copy indicator */}
        {copied && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            Copied {copyTarget}!
          </div>
        )}
      </div>

      {/* Info area */}
      <div className="bg-white p-3 border-t border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <div className="font-mono text-sm font-semibold">{color.toUpperCase()}</div>
          <div className="text-xs text-gray-500">{name}-{shade}</div>
        </div>
        
        {/* Copy options */}
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy(getCopyValue('hex'), 'hex');
            }}
            className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
          >
            HEX
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy(getCopyValue('hsl'), 'hsl');
            }}
            className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
          >
            HSL
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy(getCopyValue('rgb'), 'rgb');
            }}
            className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
          >
            RGB
          </button>
          {cssClass && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopy(getCopyValue('css'), 'css');
              }}
              className="text-xs px-2 py-1 bg-blue-100 hover:bg-blue-200 rounded text-blue-700 transition-colors"
            >
              CSS
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Color scale component inspired by uicolors.app
interface ColorScaleProps {
  title: string;
  colors: Record<string, string>;
  prefix: string;
  description?: string;
  primaryShade?: string;
}

const ColorScale: React.FC<ColorScaleProps> = ({ 
  title, 
  colors, 
  prefix, 
  description, 
  primaryShade = '500' 
}) => {
  const [activeColor, setActiveColor] = useState<string | null>(null);

  return (
    <div className="mb-12">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          {primaryShade && colors[primaryShade] && (
            <div 
              className="w-6 h-6 rounded-full border border-gray-200"
              style={{ backgroundColor: colors[primaryShade] }}
            />
          )}
        </div>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
      
      {/* Horizontal color strip */}
      <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
        <div className="flex h-20">
          {Object.entries(colors).map(([shade, color]) => (
            <div
              key={shade}
              className="flex-1 relative cursor-pointer group transition-all duration-200 hover:flex-[1.2]"
              style={{ backgroundColor: color }}
              onClick={() => setActiveColor(activeColor === shade ? null : shade)}
            >
              <div 
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: getTextColor(color) }}
              >
                <span className="font-semibold">{shade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Individual color swatches */}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {Object.entries(colors).map(([shade, color]) => (
          <EnhancedColorSwatch
            key={shade}
            color={color}
            name={prefix}
            shade={shade}
            cssClass={`bg-${prefix}-${shade}`}
            isActive={activeColor === shade}
            onClick={() => setActiveColor(activeColor === shade ? null : shade)}
          />
        ))}
      </div>

      {/* Active color details */}
      {activeColor && colors[activeColor] && (
        <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="w-12 h-12 rounded-lg shadow-sm border border-gray-200"
              style={{ backgroundColor: colors[activeColor] }}
            />
            <div>
              <h4 className="text-lg font-semibold">{prefix}-{activeColor}</h4>
              <p className="text-gray-600">{colors[activeColor]}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h5 className="font-medium text-sm text-gray-700 mb-1">Tailwind CSS</h5>
              <code className="text-xs bg-white px-2 py-1 rounded border">bg-{prefix}-{activeColor}</code>
            </div>
            <div>
              <h5 className="font-medium text-sm text-gray-700 mb-1">HSL</h5>
              <code className="text-xs bg-white px-2 py-1 rounded border">{hexToHsl(colors[activeColor])}</code>
            </div>
            <div>
              <h5 className="font-medium text-sm text-gray-700 mb-1">RGB</h5>
              <code className="text-xs bg-white px-2 py-1 rounded border">{hexToRgb(colors[activeColor])}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Legacy components for backward compatibility
const ColorSwatch: React.FC<{color: string; name: string; value: string; usage?: string}> = ({ color, name, value, usage }) => (
  <div className="flex flex-col">
    <div 
      className="w-20 h-20 rounded-lg border border-neutral-200 shadow-sm"
      style={{ backgroundColor: color }}
    />
    <div className="mt-2 text-sm">
      <div className="font-semibold">{name}</div>
      <div className="font-mono text-xs text-neutral-600">{value}</div>
      {usage && <div className="text-xs text-neutral-500 mt-1">{usage}</div>}
    </div>
  </div>
);

const ColorPalette: React.FC<{title: string; colors: Record<string, string>; prefix?: string}> = ({ title, colors, prefix = '' }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-5 gap-4">
      {Object.entries(colors).map(([shade, color]) => (
        <ColorSwatch
          key={shade}
          color={color}
          name={`${prefix}${shade}`}
          value={color}
        />
      ))}
    </div>
  </div>
);

export const InteractiveColorPalette: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Comcast Business Color System
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interactive color palette with click-to-copy functionality. 
              Hover over colors to see details, click to copy values in multiple formats.
            </p>
          </div>

          <ColorScale 
            title="Primary Blue"
            colors={rawColors.blue}
            prefix="primary"
            description="Main brand color family for buttons, links, and primary actions. From Figma design system."
            primaryShade="500"
          />

          <ColorScale 
            title="Neutral Gray"
            colors={rawColors.neutral}
            prefix="neutral"
            description="Text, backgrounds, borders, and structural elements with proper contrast ratios."
            primaryShade="500"
          />

          <ColorScale 
            title="Navy Professional"
            colors={rawColors.navy}
            prefix="navy"
            description="Professional depth, headers, and sophisticated contrast elements."
            primaryShade="500"
          />
        </div>
      </div>
    </div>
  ),
};

export const SecondaryColors: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-purple-50">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Secondary Brand Colors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The supporting color palette from our Figma design system: red, yellow, green, sky, and lilac.
              These colors provide variety and semantic meaning to complement our primary brand identity.
            </p>
          </div>

          <div className="space-y-16">
            {/* First Row - Red and Yellow */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <ColorScale 
                  title="Red"
                  colors={rawColors.red}
                  prefix="red"
                  description="Attention, errors, and important warnings. From Figma color page."
                  primaryShade="500"
                />
              </div>
              
              <div>
                <ColorScale 
                  title="Yellow"
                  colors={rawColors.yellow}
                  prefix="yellow"
                  description="Caution, warnings, and highlighted information. From Figma color page."
                  primaryShade="500"
                />
              </div>
            </div>

            {/* Second Row - Green and Sky */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <ColorScale 
                  title="Green"
                  colors={rawColors.green}
                  prefix="green"
                  description="Success, positive feedback, and confirmations. From Figma color page."
                  primaryShade="500"
                />
              </div>

              <div>
                <ColorScale 
                  title="Sky"
                  colors={rawColors.sky}
                  prefix="sky"
                  description="Informational messages and secondary calls-to-action. From Figma color page."
                  primaryShade="500"
                />
              </div>
            </div>

            {/* Third Row - Lilac (centered) */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <ColorScale 
                  title="Lilac"
                  colors={rawColors.lilac}
                  prefix="lilac"
                  description="Creative elements, special highlights, and brand differentiation. From Figma color page."
                  primaryShade="500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SemanticTokens: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Semantic Color Tokens</h1>
        <p className="text-neutral-600 mb-8">
          Layer 2: Semantic color tokens that map raw colors to specific purposes.
        </p>
      </div>

      <div className="space-y-8">
        {/* Brand tokens */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Brand Identity</h3>
          <div className="grid grid-cols-5 gap-4">
            <ColorSwatch
              color={semanticTokens.brand.primary}
              name="brand.primary"
              value={semanticTokens.brand.primary}
              usage="Main brand color"
            />
            <ColorSwatch
              color={semanticTokens.brand.primaryHover}
              name="brand.primaryHover"
              value={semanticTokens.brand.primaryHover}
              usage="Hover states"
            />
            <ColorSwatch
              color={semanticTokens.brand.primaryActive}
              name="brand.primaryActive"
              value={semanticTokens.brand.primaryActive}
              usage="Active states"
            />
            <ColorSwatch
              color={semanticTokens.brand.primaryLight}
              name="brand.primaryLight"
              value={semanticTokens.brand.primaryLight}
              usage="Light backgrounds"
            />
            <ColorSwatch
              color={semanticTokens.brand.primaryBorder}
              name="brand.primaryBorder"
              value={semanticTokens.brand.primaryBorder}
              usage="Light borders"
            />
          </div>
        </div>

        {/* Text tokens */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Text Hierarchy</h3>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(semanticTokens.text).map(([name, color]) => (
              <ColorSwatch
                key={name}
                color={color}
                name={`text.${name}`}
                value={color}
              />
            ))}
          </div>
        </div>

        {/* Status tokens */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Status & Feedback</h3>
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(semanticTokens.status).map(([name, color]) => (
              <ColorSwatch
                key={name}
                color={color}
                name={`status.${name}`}
                value={color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ComponentTokens: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Component Color Tokens</h1>
        <p className="text-neutral-600 mb-8">
          Layer 3: Component-specific color tokens with exact values used in UI components.
        </p>
      </div>

      <div className="space-y-8">
        {/* Button tokens */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Button Component Colors</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">Primary Button</h4>
              <div className="grid grid-cols-4 gap-4">
                <ColorSwatch
                  color={componentTokens.button.primaryBg}
                  name="primaryBg"
                  value={componentTokens.button.primaryBg}
                  usage="Default state"
                />
                <ColorSwatch
                  color={componentTokens.button.primaryBgHover}
                  name="primaryBgHover"
                  value={componentTokens.button.primaryBgHover}
                  usage="Hover state"
                />
                <ColorSwatch
                  color={componentTokens.button.primaryBgActive}
                  name="primaryBgActive"
                  value={componentTokens.button.primaryBgActive}
                  usage="Active/pressed"
                />
                <ColorSwatch
                  color={componentTokens.button.primaryText}
                  name="primaryText"
                  value={componentTokens.button.primaryText}
                  usage="Text color"
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Secondary Button</h4>
              <div className="grid grid-cols-5 gap-4">
                <ColorSwatch
                  color={componentTokens.button.secondaryBg}
                  name="secondaryBg"
                  value={componentTokens.button.secondaryBg}
                  usage="Background"
                />
                <ColorSwatch
                  color={componentTokens.button.secondaryBgHover}
                  name="secondaryBgHover"
                  value={componentTokens.button.secondaryBgHover}
                  usage="Hover background"
                />
                <ColorSwatch
                  color={componentTokens.button.secondaryText}
                  name="secondaryText"
                  value={componentTokens.button.secondaryText}
                  usage="Text color"
                />
                <ColorSwatch
                  color={componentTokens.button.secondaryBorder}
                  name="secondaryBorder"
                  value={componentTokens.button.secondaryBorder}
                  usage="Border (from Figma)"
                />
                <ColorSwatch
                  color={componentTokens.button.secondaryBorderHover}
                  name="secondaryBorderHover"
                  value={componentTokens.button.secondaryBorderHover}
                  usage="Border hover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Enhanced color display component for data visualization colors
const DataVisualizationColorSwatch: React.FC<{
  color: string;
  name: string;
  usage: string;
  category: string;
}> = ({ color, name, usage, category }) => {
  const [copied, setCopied] = useState(false);
  const textColor = getTextColor(color);

  const handleCopy = async () => {
    const success = await copyToClipboard(color);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="group relative rounded-lg overflow-hidden transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-lg"
      onClick={handleCopy}
    >
      {/* Main color area */}
      <div
        className="h-24 flex flex-col justify-between p-4 transition-all duration-200"
        style={{ backgroundColor: color, color: textColor }}
      >
        <div className="text-xs opacity-75 font-medium">{category}</div>
        <div>
          <div className="text-sm font-bold">{name}</div>
          <div className="text-xs opacity-90">{usage}</div>
        </div>
        
        {/* Copy indicator */}
        {copied && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            Copied!
          </div>
        )}
      </div>

      {/* Info area */}
      <div className="bg-white p-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="font-mono text-sm font-semibold">{color.toUpperCase()}</div>
          <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
            Click to copy
          </div>
        </div>
      </div>
    </div>
  );
};

export const DataVisualizationColors: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Data Visualization Colors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized color palettes for charts, graphs, and data displays. 
              Organized into Categorical, Sequential, and Signal groups for optimal data storytelling.
            </p>
          </div>

          <div className="space-y-16">
            {/* Categorical Colors */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorical Colors</h2>
                <p className="text-lg text-gray-600 mb-6">
                  For distinct categories and groups in charts. Each color represents a different data series or category.
                </p>
                
                {/* Color strip preview */}
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                  <div className="flex h-16">
                    {Object.entries(semanticTokens.dataVisualization.categorical).map(([key, color]) => (
                      <div
                        key={key}
                        className="flex-1 relative cursor-pointer group transition-all duration-200 hover:flex-[1.3]"
                        style={{ backgroundColor: color }}
                        title={`${key.toUpperCase()}: ${color}`}
                      >
                        <div 
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{ color: getTextColor(color) }}
                        >
                          <span className="font-bold text-sm">{key.toUpperCase()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <DataVisualizationColorSwatch
                  color={semanticTokens.dataVisualization.categorical.cat1}
                  name="Category 1"
                  usage="Primary data series"
                  category="CATEGORICAL"
                />
                <DataVisualizationColorSwatch
                  color={semanticTokens.dataVisualization.categorical.cat2}
                  name="Category 2"
                  usage="Secondary data series"
                  category="CATEGORICAL"
                />
                <DataVisualizationColorSwatch
                  color={semanticTokens.dataVisualization.categorical.cat3}
                  name="Category 3"
                  usage="Tertiary data series"
                  category="CATEGORICAL"
                />
                <DataVisualizationColorSwatch
                  color={semanticTokens.dataVisualization.categorical.cat4}
                  name="Category 4"
                  usage="Quaternary data series"
                  category="CATEGORICAL"
                />
                <DataVisualizationColorSwatch
                  color={semanticTokens.dataVisualization.categorical.cat5}
                  name="Category 5"
                  usage="Quinary data series"
                  category="CATEGORICAL"
                />
                <DataVisualizationColorSwatch
                  color={semanticTokens.dataVisualization.categorical.cat6}
                  name="Category 6"
                  usage="Senary data series"
                  category="CATEGORICAL"
                />
              </div>
            </div>

            {/* Sequential Colors */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Sequential Colors</h2>
                <p className="text-lg text-gray-600 mb-6">
                  For ordered data and gradients. Use these colors to show progression from low to high values.
                </p>
              </div>

              <div className="space-y-8">
                {/* 7-Step Sequential Scale */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{backgroundColor: semanticTokens.dataVisualization.sequential.seq4}}></div>
                    Sequential Scale (7 Steps)
                  </h3>
                  
                  {/* Gradient Preview */}
                  <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                    <div className="flex h-16">
                      {Object.entries(semanticTokens.dataVisualization.sequential).map(([key, color]) => (
                        <div
                          key={key}
                          className="flex-1 relative cursor-pointer group transition-all duration-200 hover:flex-[1.3]"
                          style={{ backgroundColor: color }}
                          title={`${key.toUpperCase()}: ${color}`}
                        >
                          <div 
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            style={{ color: getTextColor(color) }}
                          >
                            <span className="font-bold text-sm">{key.toUpperCase()}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Individual Sequential Swatches */}
                  <div className="grid grid-cols-1 sm:grid-cols-7 gap-4">
                    <DataVisualizationColorSwatch
                      color={semanticTokens.dataVisualization.sequential.seq1}
                      name="Seq 1"
                      usage="Darkest values"
                      category="SEQUENTIAL"
                    />
                    <DataVisualizationColorSwatch
                      color={semanticTokens.dataVisualization.sequential.seq2}
                      name="Seq 2"
                      usage="Very dark values"
                      category="SEQUENTIAL"
                    />
                    <DataVisualizationColorSwatch
                      color={semanticTokens.dataVisualization.sequential.seq3}
                      name="Seq 3"
                      usage="Dark values"
                      category="SEQUENTIAL"
                    />
                    <DataVisualizationColorSwatch
                      color={semanticTokens.dataVisualization.sequential.seq4}
                      name="Seq 4"
                      usage="Mid-range values"
                      category="SEQUENTIAL"
                    />
                    <DataVisualizationColorSwatch
                      color={semanticTokens.dataVisualization.sequential.seq5}
                      name="Seq 5"
                      usage="Light values"
                      category="SEQUENTIAL"
                    />
                    <DataVisualizationColorSwatch
                      color={semanticTokens.dataVisualization.sequential.seq6}
                      name="Seq 6"
                      usage="Very light values"
                      category="SEQUENTIAL"
                    />
                    <DataVisualizationColorSwatch
                      color={semanticTokens.dataVisualization.sequential.seq7}
                      name="Seq 7"
                      usage="Lightest values"
                      category="SEQUENTIAL"
                    />
                  </div>
                  
                  {/* Continuous Gradient Example */}
                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-gray-700 mb-3">Continuous Gradient Example</h4>
                    <div 
                      className="h-12 rounded-lg shadow-sm"
                      style={{
                        background: `linear-gradient(to right, ${semanticTokens.dataVisualization.sequential.seq1}, ${semanticTokens.dataVisualization.sequential.seq2}, ${semanticTokens.dataVisualization.sequential.seq3}, ${semanticTokens.dataVisualization.sequential.seq4}, ${semanticTokens.dataVisualization.sequential.seq5}, ${semanticTokens.dataVisualization.sequential.seq6}, ${semanticTokens.dataVisualization.sequential.seq7})`
                      }}
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Low Values</span>
                      <span>High Values</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signal Colors */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Signal Colors</h2>
                <p className="text-lg text-gray-600 mb-6">
                  For status indicators and alerts in data displays. These colors convey meaning and urgency.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <DataVisualizationColorSwatch
                  color={semanticTokens.dataVisualization.signal.positive}
                  name="Positive"
                  usage="Positive outcomes"
                  category="SIGNAL"
                />
                <DataVisualizationColorSwatch
                  color={semanticTokens.dataVisualization.signal.low}
                  name="Low"
                  usage="Low priority/risk"
                  category="SIGNAL"
                />
                <DataVisualizationColorSwatch
                  color={semanticTokens.dataVisualization.signal.medium}
                  name="Medium"
                  usage="Medium priority/risk"
                  category="SIGNAL"
                />
                <DataVisualizationColorSwatch
                  color={semanticTokens.dataVisualization.signal.high}
                  name="High"
                  usage="High priority/risk"
                  category="SIGNAL"
                />
                <DataVisualizationColorSwatch
                  color={semanticTokens.dataVisualization.signal.critical}
                  name="Critical"
                  usage="Critical priority/risk"
                  category="SIGNAL"
                />
                <DataVisualizationColorSwatch
                  color={semanticTokens.dataVisualization.signal.neutral}
                  name="Neutral"
                  usage="No data/neutral"
                  category="SIGNAL"
                />
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Guidelines</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Categorical</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Bar charts with different categories</li>
                    <li>• Pie charts and donut charts</li>
                    <li>• Line charts with multiple series</li>
                    <li>• Legend items and data labels</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Sequential</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Heat maps and choropleth maps</li>
                    <li>• Gradient fills and backgrounds</li>
                    <li>• Stepped data visualizations</li>
                    <li>• Progress indicators with ranges</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Signal</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Risk level indicators (Low → Critical)</li>
                    <li>• Priority status badges</li>
                    <li>• Alert severity in dashboards</li>
                    <li>• Performance threshold indicators</li>
                    <li>• Service health status</li>
                    <li>• SLA compliance indicators</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ColorSystemVerification: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Color System Verification
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Verification that our consolidated system uses the correct Figma values with proper architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Figma Accuracy Check */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Figma Accuracy</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div 
                    className="w-12 h-12 rounded-lg shadow-sm border border-blue-200"
                    style={{ backgroundColor: rawColors.blue[500] }}
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Primary Blue</div>
                    <div className="text-sm text-gray-600">
                      Expected: #0D62FF → Actual: {rawColors.blue[500]}
                    </div>
                    <div className="text-sm font-semibold text-green-600">
                      {rawColors.blue[500] === '#0D62FF' ? '✅ MATCHES FIGMA' : '❌ MISMATCH'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                  <div 
                    className="w-12 h-12 rounded-lg shadow-sm border border-purple-200"
                    style={{ backgroundColor: rawColors.navy[300] }}
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Secondary Border</div>
                    <div className="text-sm text-gray-600">
                      Expected: #9EA1CA → Actual: {rawColors.navy[300]}
                    </div>
                    <div className="text-sm font-semibold text-green-600">
                      {rawColors.navy[300] === '#9EA1CA' ? '✅ MATCHES FIGMA' : '❌ MISMATCH'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Overview */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">System Architecture</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                  <div className="font-semibold text-gray-900 mb-1">Layer 1: Raw Colors</div>
                  <div className="text-sm text-gray-600">Exact values from Figma design system</div>
                  <code className="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block">
                    rawColors.blue[500] = "#0D62FF"
                  </code>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
                  <div className="font-semibold text-gray-900 mb-1">Layer 2: Semantic Tokens</div>
                  <div className="text-sm text-gray-600">Purpose-based color mappings</div>
                  <code className="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block">
                    semanticTokens.brand.primary
                  </code>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                  <div className="font-semibold text-gray-900 mb-1">Layer 3: Component Tokens</div>
                  <div className="text-sm text-gray-600">Component-specific implementations</div>
                  <code className="text-xs bg-gray-200 px-2 py-1 rounded mt-2 inline-block">
                    componentTokens.button.primaryBg
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Features */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Implementation Features</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">📋</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Click to Copy</h4>
                <p className="text-sm text-gray-600">Copy HEX, HSL, RGB, or CSS class values</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Interactive UI</h4>
                <p className="text-sm text-gray-600">Hover effects, active states, visual feedback</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">⚙️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Developer Tools</h4>
                <p className="text-sm text-gray-600">Tailwind classes, usage guidelines, accessibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};