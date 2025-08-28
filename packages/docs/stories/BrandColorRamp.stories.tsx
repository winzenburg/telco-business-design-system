import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { colors, brand, colorCategories, CSS_VARIABLES, getCSSVariable, themeUtils } from '../../tokens/index';

const meta = {
  title: 'Foundation/Brand Color Ramp',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete Comcast Business Design System brand color ramp with all primary and secondary colors, semantic tokens, and data visualization colors.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Color Card Component
const ColorCard: React.FC<{
  name: string;
  value: string;
  cssVar?: string;
  description?: string;
  usage?: string[];
  textColor?: string;
}> = ({ name, value, cssVar, description, usage, textColor = 'var(--ds-color-text-primary)' }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="border border-[var(--ds-color-border-default)] rounded-lg overflow-hidden bg-[var(--ds-color-bg-canvas)] shadow-sm">
      <div 
        className="h-24 cursor-pointer transition-transform hover:scale-105" 
        style={{ backgroundColor: value }}
        onClick={() => copyToClipboard(value)}
        title={`Click to copy: ${value}`}
      />
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-sm text-[var(--ds-color-text-primary)]">{name}</h3>
          <code 
            className="text-xs bg-[var(--ds-color-bg-surface)] px-2 py-1 rounded cursor-pointer hover:bg-[var(--ds-color-bg-muted)] transition-colors"
            onClick={() => copyToClipboard(value)}
            title={`Click to copy: ${value}`}
          >
            {value}
          </code>
        </div>
        {cssVar && (
          <code 
            className="text-xs text-[var(--ds-color-text-muted)] block cursor-pointer hover:text-[var(--ds-color-intent-primary)] transition-colors"
            onClick={() => copyToClipboard(cssVar)}
            title={`Click to copy: ${cssVar}`}
          >
            {cssVar}
          </code>
        )}
        {description && (
          <p className="text-xs text-[var(--ds-color-text-muted)] leading-relaxed">{description}</p>
        )}
        {usage && usage.length > 0 && (
          <div className="space-y-1">
            <p className="text-xs font-medium text-[var(--ds-color-text-secondary)]">Usage:</p>
            <ul className="text-xs text-[var(--ds-color-text-muted)] space-y-0.5">
              {usage.slice(0, 3).map((use, index) => (
                <li key={index}>• {use}</li>
              ))}
              {usage.length > 3 && (
                <li className="italic">+ {usage.length - 3} more...</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Color Scale Component
const ColorScale: React.FC<{
  title: string;
  colors: Record<string, string>;
  description?: string;
  usage?: Record<string, string[]>;
}> = ({ title, colors, description, usage }) => (
  <div className="space-y-4">
    <div>
      <h2 className="text-2xl font-bold text-[var(--ds-color-text-primary)] mb-2">{title}</h2>
      {description && (
        <p className="text-[var(--ds-color-text-muted)] text-sm">{description}</p>
      )}
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 gap-4">
      {Object.entries(colors).map(([shade, value]) => {
        const cssVarKey = `${title.toLowerCase()}-${shade}` as keyof typeof CSS_VARIABLES;
        const cssVar = CSS_VARIABLES[cssVarKey];
        
        return (
          <ColorCard
            key={shade}
            name={`${title} ${shade}`}
            value={value}
            cssVar={cssVar ? `var(${cssVar})` : undefined}
            usage={usage?.[shade]}
          />
        );
      })}
    </div>
  </div>
);

// Theme Toggle Component
const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    themeUtils.setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 bg-[var(--ds-color-intent-primary)] text-[var(--ds-color-text-on-primary)] px-4 py-2 rounded-lg shadow-lg hover:bg-[var(--ds-color-intent-primary-hover)] transition-colors"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export const CompleteBrandColorRamp: Story = {
  render: () => (
    <div className="min-h-screen bg-[var(--ds-color-bg-canvas)] p-6 space-y-12">
      <ThemeToggle />
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--ds-color-text-primary)]">
          Comcast Business Design System
        </h1>
        <p className="text-xl text-[var(--ds-color-text-muted)]">
          Complete Brand Color Ramp & Design Tokens
        </p>
        <p className="text-[var(--ds-color-text-secondary)]">
          Click any color to copy its value. Toggle between light and dark themes to see adaptive behavior.
        </p>
      </div>

      {/* Primary Brand Colors */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-[var(--ds-color-text-primary)] border-b border-[var(--ds-color-border-default)] pb-2">
          Primary Brand Colors
        </h2>
        
        <ColorScale
          title="Blue"
          colors={colors.blue}
          description="Primary brand identity color. Used for core interactions, links, and key brand elements."
          usage={{
            '50': ['Light backgrounds', 'Subtle highlights'],
            '100': ['Hover states for light elements'],
            '500': ['Primary buttons', 'Brand identity', 'Focus states'],
            '600': ['Hover states for primary elements'],
            '700': ['Interactive elements on grey backgrounds'],
            '900': ['Maximum contrast text'],
          }}
        />
        
        <ColorScale
          title="Neutral"
          colors={colors.neutral}
          description="Foundation grayscale for text, backgrounds, borders, and structural elements."
          usage={{
            '50': ['Page backgrounds', 'Card surfaces'],
            '200': ['Light borders', 'Default borders'],
            '600': ['Body text', 'Placeholder text'],
            '900': ['Headlines', 'High emphasis text'],
          }}
        />
        
        <ColorScale
          title="Navy"
          colors={colors.navy}
          description="Professional depth and sophisticated contrast for headers and premium features."
          usage={{
            '500': ['Professional content sections'],
            '600': ['Navigation headers'],
            '700': ['Dark theme elements'],
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ColorCard
            name="Black"
            value={colors.black}
            cssVar="var(--ds-color-black)"
            description="Default text and essential UI elements"
            usage={['Default body text', 'Headlines', 'Icon states', 'Primary text content']}
          />
        </div>
      </div>

      {/* Secondary Brand Colors */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-[var(--ds-color-text-primary)] border-b border-[var(--ds-color-border-default)] pb-2">
          Secondary Brand Colors
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ColorScale
            title="Red"
            colors={colors.red}
            description="Error states and destructive actions"
          />
          
          <ColorScale
            title="Green"
            colors={colors.green}
            description="Success states and positive outcomes"
          />
          
          <ColorScale
            title="Yellow"
            colors={colors.yellow}
            description="Warning states and caution indicators"
          />
          
          <ColorScale
            title="Orange"
            colors={colors.orange}
            description="Secondary brand accent color"
          />
          
          <ColorScale
            title="Purple"
            colors={colors.purple}
            description="Secondary brand and premium features"
          />
          
          <ColorScale
            title="Sky"
            colors={colors.sky}
            description="Secondary brand and informational content"
          />
          
          <ColorScale
            title="Teal"
            colors={colors.teal}
            description="Accent color and brand extensions"
          />
        </div>
      </div>

      {/* Semantic Colors */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-[var(--ds-color-text-primary)] border-b border-[var(--ds-color-border-default)] pb-2">
          Semantic Color Tokens
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Intent Colors */}
          <ColorCard
            name="Primary"
            value={getCSSVariable('intent-primary')}
            cssVar="var(--ds-color-intent-primary)"
            description="Primary actions and brand identity"
          />
          <ColorCard
            name="Success"
            value={getCSSVariable('intent-success')}
            cssVar="var(--ds-color-intent-success)"
            description="Success states and positive actions"
          />
          <ColorCard
            name="Warning"
            value={getCSSVariable('intent-warning')}
            cssVar="var(--ds-color-intent-warning)"
            description="Warning states and caution"
          />
          <ColorCard
            name="Destructive"
            value={getCSSVariable('intent-destructive')}
            cssVar="var(--ds-color-intent-destructive)"
            description="Error states and destructive actions"
          />
          <ColorCard
            name="Info"
            value={getCSSVariable('intent-info')}
            cssVar="var(--ds-color-intent-info)"
            description="Informational content and help"
          />
          <ColorCard
            name="Secondary"
            value={getCSSVariable('intent-secondary')}
            cssVar="var(--ds-color-intent-secondary)"
            description="Secondary brand actions"
          />

          {/* Text Colors */}
          <ColorCard
            name="Text Primary"
            value={getCSSVariable('text-primary')}
            cssVar="var(--ds-color-text-primary)"
            description="Primary text content"
          />
          <ColorCard
            name="Text Muted"
            value={getCSSVariable('text-muted')}
            cssVar="var(--ds-color-text-muted)"
            description="Secondary and placeholder text"
          />

          {/* Background Colors */}
          <ColorCard
            name="Canvas"
            value={getCSSVariable('bg-canvas')}
            cssVar="var(--ds-color-bg-canvas)"
            description="Page and container backgrounds"
          />
          <ColorCard
            name="Surface"
            value={getCSSVariable('bg-surface')}
            cssVar="var(--ds-color-bg-surface)"
            description="Card and component backgrounds"
          />

          {/* Border Colors */}
          <ColorCard
            name="Border Default"
            value={getCSSVariable('border-default')}
            cssVar="var(--ds-color-border-default)"
            description="Default borders and dividers"
          />
          <ColorCard
            name="Border Strong"
            value={getCSSVariable('border-strong')}
            cssVar="var(--ds-color-border-strong)"
            description="Emphasized borders"
          />
        </div>
      </div>

      {/* Data Visualization Colors */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-[var(--ds-color-text-primary)] border-b border-[var(--ds-color-border-default)] pb-2">
          Data Visualization Colors
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[var(--ds-color-text-primary)] mb-4">Categorical Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Array.from({ length: 6 }, (_, i) => (
                <ColorCard
                  key={i}
                  name={`Category ${i + 1}`}
                  value={getCSSVariable(`chart-cat-${i + 1}` as keyof typeof CSS_VARIABLES)}
                  cssVar={`var(--ds-color-chart-cat-${i + 1})`}
                  description={`Categorical color ${i + 1} for charts`}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--ds-color-text-primary)] mb-4">Sequential Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {Array.from({ length: 7 }, (_, i) => (
                <ColorCard
                  key={i}
                  name={`Seq ${i + 1}`}
                  value={getCSSVariable(`chart-seq-${i + 1}` as keyof typeof CSS_VARIABLES)}
                  cssVar={`var(--ds-color-chart-seq-${i + 1})`}
                  description={`Sequential color ${i + 1} for ordered data`}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--ds-color-text-primary)] mb-4">Signal Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['positive', 'low', 'medium', 'high', 'critical', 'neutral'].map((signal) => (
                <ColorCard
                  key={signal}
                  name={signal.charAt(0).toUpperCase() + signal.slice(1)}
                  value={getCSSVariable(`chart-${signal}` as keyof typeof CSS_VARIABLES)}
                  cssVar={`var(--ds-color-chart-${signal})`}
                  description={`${signal} status indicator`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--ds-color-text-primary)] border-b border-[var(--ds-color-border-default)] pb-2">
          Usage Guidelines
        </h2>
        
        <div className="space-y-4 text-[var(--ds-color-text-secondary]">
          <div className="bg-[var(--ds-color-status-info-bg] border border-[var(--ds-color-status-info-border] rounded-lg p-4">
            <h3 className="font-semibold text-[var(--ds-color-status-info-text] mb-2">✅ Do:</h3>
            <ul className="space-y-1 text-[var(--ds-color-text-primary)]">
              <li>• Use semantic tokens (intent, text, bg, border) for consistent theming</li>
              <li>• Copy CSS variable names for implementation</li>
              <li>• Test colors in both light and dark modes</li>
              <li>• Use the appropriate color for its intended purpose</li>
              <li>• Ensure sufficient contrast for accessibility (WCAG AA)</li>
            </ul>
          </div>
          
          <div className="bg-[var(--ds-color-status-error-bg] border border-[var(--ds-color-status-error-border] rounded-lg p-4">
            <h3 className="font-semibold text-[var(--ds-color-status-error-text] mb-2">❌ Don't:</h3>
            <ul className="space-y-1 text-[var(--ds-color-text-primary)]">
              <li>• Use hex values directly in components</li>
              <li>• Mix color scales inappropriately</li>
              <li>• Override semantic tokens without good reason</li>
              <li>• Use too many colors in a single interface</li>
              <li>• Ignore accessibility contrast requirements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ColorTokensReference: Story = {
  render: () => (
    <div className="p-6 space-y-8 bg-[var(--ds-color-bg-canvas] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[var(--ds-color-text-primary)] mb-6">
          Color Tokens Quick Reference
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--ds-color-text-primary)]">CSS Variables</h2>
            <div className="bg-[var(--ds-color-bg-surface] rounded-lg p-4 text-sm">
              <code className="text-[var(--ds-color-text-primary)]">
                {`/* Use in CSS/SCSS */
.my-component {
  color: var(--ds-color-text-primary);
  background: var(--ds-color-bg-canvas);
  border: 1px solid var(--ds-color-border-default);
}`}
              </code>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--ds-color-text-primary)]">Tailwind Classes</h2>
            <div className="bg-[var(--ds-color-bg-surface] rounded-lg p-4 text-sm">
              <code className="text-[var(--ds-color-text-primary)]">
                {`<!-- Use in HTML/JSX -->
<div className="
  text-[var(--ds-color-text-primary)]
  bg-[var(--ds-color-bg-canvas]
  border-[var(--ds-color-border-default)]
">`}
              </code>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[var(--ds-color-text-primary)]">TypeScript Utils</h2>
            <div className="bg-[var(--ds-color-bg-surface] rounded-lg p-4 text-sm">
              <code className="text-[var(--ds-color-text-primary)]">
                {`// Use in JS/TS
import { getCSSVariable } from '@tokens';

const primaryColor = getCSSVariable('intent-primary');
// Returns: "var(--ds-color-intent-primary)"`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};