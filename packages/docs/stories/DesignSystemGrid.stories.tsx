import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { 
  breakpoints,
  grid,
  containers,
  columns,
  layoutPatterns,
  responsiveSpacing,
  gridUsage,
  getBreakpoint,
  getGridConfig,
  getColumnSpan
} from '../../tokens/design-system-grid';

const meta: Meta = {
  title: 'Foundations/Grid',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Adaptive grid system with 3 breakpoints: Desktop (1440px, 12 cols), Tablet (768px, 6 cols), Mobile (375px, 6 cols). Consistent gutters and margins across all devices.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Grid Visualization Component
const GridVisualization: React.FC<{ 
  breakpoint: keyof typeof grid;
  showGutters?: boolean;
}> = ({ breakpoint, showGutters = true }) => {
  const config = grid[breakpoint];
  
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 capitalize mb-2">{breakpoint}</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Breakpoint:</strong> {config.maxWidth}</p>
          <p><strong>Columns:</strong> {config.columns}</p>
          <p><strong>Gutters:</strong> {config.gutters}</p>
          <p><strong>Margins:</strong> {config.margins}</p>
        </div>
      </div>
      
      {/* Grid visualization */}
      <div 
        className="border border-gray-300 bg-white relative"
        style={{ 
          maxWidth: config.maxWidth,
          padding: `0 ${config.margins}`,
          margin: '0 auto'
        }}
      >
        <div 
          className="grid h-32"
          style={{ 
            gridTemplateColumns: `repeat(${config.columns}, 1fr)`,
            gap: showGutters ? config.gutters : '0'
          }}
        >
          {Array.from({ length: config.columns }, (_, i) => (
            <div 
              key={i}
              className="bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-800 font-medium text-sm"
            >
              {i + 1}
            </div>
          ))}
        </div>
        
        {/* Margin indicators */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div 
            className="absolute top-0 bottom-0 bg-red-100 border-l-2 border-r-2 border-red-400 opacity-50"
            style={{ 
              left: '0',
              width: config.margins
            }}
          />
          <div 
            className="absolute top-0 bottom-0 bg-red-100 border-l-2 border-r-2 border-red-400 opacity-50"
            style={{ 
              right: '0',
              width: config.margins
            }}
          />
        </div>
      </div>
      
      <div className="mt-2 text-xs text-gray-500 text-center">
        <span className="inline-block w-3 h-3 bg-blue-100 border border-blue-300 mr-1"></span>
        Columns
        <span className="inline-block w-3 h-3 bg-red-100 border border-red-400 mr-1 ml-4"></span>
        Margins ({config.margins})
      </div>
    </div>
  );
};

// Layout Pattern Demo
const LayoutPatternDemo: React.FC<{
  pattern: keyof typeof layoutPatterns;
  title: string;
  description: string;
}> = ({ pattern, title, description }) => {
  const patternConfig = layoutPatterns[pattern];
  
  return (
    <div className="mb-8 p-6 border border-gray-200 rounded-lg bg-white">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      
      {/* Mobile */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-2">Mobile (375px) - {grid.mobile.columns} columns</h4>
        <div 
          className="grid gap-2 border border-gray-200 p-2 rounded"
          style={{ 
            gridTemplateColumns: `repeat(${grid.mobile.columns}, 1fr)`,
            maxWidth: '375px'
          }}
        >
          {Object.entries(patternConfig.mobile).map(([key, cols], index) => (
            <div 
              key={`mobile-${key}`}
              className="bg-blue-100 border border-blue-300 p-2 text-xs text-blue-800 text-center"
              style={{ gridColumn: `span ${cols}` }}
            >
              {key} ({cols} cols)
            </div>
          ))}
        </div>
      </div>
      
      {/* Tablet */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-800 mb-2">Tablet (768px) - {grid.tablet.columns} columns</h4>
        <div 
          className="grid gap-2 border border-gray-200 p-2 rounded"
          style={{ 
            gridTemplateColumns: `repeat(${grid.tablet.columns}, 1fr)`,
            maxWidth: '500px'
          }}
        >
          {Object.entries(patternConfig.tablet).map(([key, cols], index) => (
            <div 
              key={`tablet-${key}`}
              className="bg-green-100 border border-green-300 p-2 text-xs text-green-800 text-center"
              style={{ gridColumn: `span ${cols}` }}
            >
              {key} ({cols} cols)
            </div>
          ))}
        </div>
      </div>
      
      {/* Desktop */}
      <div>
        <h4 className="font-medium text-gray-800 mb-2">Desktop (1440px) - {grid.desktop.columns} columns</h4>
        <div 
          className="grid gap-2 border border-gray-200 p-2 rounded"
          style={{ 
            gridTemplateColumns: `repeat(${grid.desktop.columns}, 1fr)`,
            maxWidth: '700px'
          }}
        >
          {Object.entries(patternConfig.desktop).map(([key, cols], index) => (
            <div 
              key={`desktop-${key}`}
              className="bg-purple-100 border border-purple-300 p-2 text-xs text-purple-800 text-center"
              style={{ gridColumn: `span ${cols}` }}
            >
              {key} ({cols} cols)
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Responsive Demo Component
const ResponsiveDemo: React.FC = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = React.useState<keyof typeof breakpoints>('desktop');
  
  React.useEffect(() => {
    const handleResize = () => {
      setCurrentBreakpoint(getBreakpoint(window.innerWidth));
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
      <div className="mb-4">
        <h3 className="font-semibold text-gray-900">Current Breakpoint: 
          <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {currentBreakpoint} ({breakpoints[currentBreakpoint]})
          </span>
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Resize your browser window to see the breakpoint change
        </p>
      </div>
      
      <div className="grid gap-4" style={{ 
        gridTemplateColumns: currentBreakpoint === 'mobile' ? 'repeat(6, 1fr)' : 
                           currentBreakpoint === 'tablet' ? 'repeat(6, 1fr)' : 
                           'repeat(12, 1fr)'
      }}>
        {Array.from({ length: grid[currentBreakpoint].columns }, (_, i) => (
          <div 
            key={i}
            className="bg-white border border-gray-200 p-2 text-center text-xs font-medium"
            style={{ minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

// All Grid Overview
export const AllGridSystem: Story = {
  render: () => (
    <div className="p-6 space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Grid & Layout System</h1>
        <p className="text-gray-600">
          Adaptive grid system designed for 3 key breakpoints with consistent spacing and flexible layouts.
        </p>
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <h3 className="font-medium text-blue-900">Adaptive Design Approach</h3>
          <p className="text-blue-800 text-sm mt-1">
            Mobile-first responsive design with deliberate breakpoints for optimal user experience across devices.
          </p>
        </div>
      </div>

      {/* Breakpoints Overview */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Breakpoints Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {gridUsage.breakpoints.values.map((breakpoint, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{breakpoint.name}</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p><strong>Size:</strong> {breakpoint.size}</p>
                <p><strong>Columns:</strong> {breakpoint.columns}</p>
                <p><strong>Gutters:</strong> {breakpoint.gutters}</p>
                <p><strong>Margins:</strong> {breakpoint.margins}</p>
              </div>
              <p className="text-xs text-gray-500">{breakpoint.usage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Visualizations */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Grid Visualizations</h2>
        <div className="space-y-8">
          <GridVisualization breakpoint="mobile" />
          <GridVisualization breakpoint="tablet" />
          <GridVisualization breakpoint="desktop" />
        </div>
      </div>

      {/* Interactive Demo */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Responsive Demo</h2>
        <ResponsiveDemo />
      </div>
    </div>
  ),
};

// Layout Patterns
export const LayoutPatterns: Story = {
  render: () => (
    <div className="p-6 space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Layout Patterns</h1>
        <p className="text-gray-600">
          Common layout patterns and their responsive behavior across breakpoints.
        </p>
      </div>

      <LayoutPatternDemo 
        pattern="twoColumn"
        title="Two Column Layout"
        description="Classic content + sidebar layout that adapts from stacked on mobile to side-by-side on larger screens."
      />

      <LayoutPatternDemo 
        pattern="threeColumn"
        title="Three Column Layout"
        description="Left sidebar + main content + right sidebar that stacks on mobile and flows responsively."
      />

      <LayoutPatternDemo 
        pattern="contentSidebar"
        title="Content with Sidebar"
        description="Primary content area with complementary sidebar, optimized for different screen sizes."
      />

      <LayoutPatternDemo 
        pattern="cardGrid"
        title="Card Grid"
        description="Responsive card layout: 1 per row on mobile, 2 per row on tablet, 3 per row on desktop."
      />
    </div>
  ),
};

// Responsive Spacing
export const ResponsiveSpacing: Story = {
  render: () => (
    <div className="p-6 space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Responsive Spacing</h1>
        <p className="text-gray-600">
          Spacing scales responsively to maintain optimal density and hierarchy across devices.
        </p>
      </div>

      {Object.entries(responsiveSpacing).map(([breakpoint, spacing]) => (
        <div key={breakpoint} className="p-6 border border-gray-200 rounded-lg bg-white">
          <h3 className="text-xl font-semibold text-gray-900 capitalize mb-4">{breakpoint} Spacing</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {Object.entries(spacing).map(([property, value]) => (
              <div key={property} className="text-center">
                <div className="mb-2">
                  <div 
                    className="bg-blue-500 mx-auto rounded"
                    style={{ 
                      width: property === 'containerPadding' || property === 'gutters' ? value : '40px',
                      height: '16px'
                    }}
                  ></div>
                </div>
                <h4 className="font-medium text-gray-900 text-sm capitalize">{property}</h4>
                <p className="text-xs text-gray-600">{value}</p>
              </div>
            ))}
          </div>

          {/* Example layout with spacing */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-3">Example Layout</h4>
            <div style={{ padding: spacing.containerPadding }}>
              <div 
                className="bg-white border border-gray-200 rounded mb-2 p-3"
                style={{ marginBottom: spacing.sectionSpacing }}
              >
                <h5 className="font-medium">Section 1</h5>
                <div style={{ marginTop: spacing.elementSpacing }}>
                  <p className="text-sm text-gray-600">Content with proper spacing</p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded p-3">
                <h5 className="font-medium">Section 2</h5>
                <div style={{ marginTop: spacing.elementSpacing }}>
                  <p className="text-sm text-gray-600">More content with consistent spacing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

// Usage Guidelines
export const UsageGuidelines: Story = {
  render: () => (
    <div className="p-6 space-y-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Usage Guidelines</h1>
        <p className="text-gray-600">
          Best practices for implementing the grid system effectively in your designs and development.
        </p>
      </div>

      {/* Quick Reference */}
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Tailwind Classes</h3>
            <div className="space-y-2 text-sm font-mono">
              <p><code className="bg-gray-200 px-2 py-1 rounded">sm:</code> Mobile (375px+)</p>
              <p><code className="bg-gray-200 px-2 py-1 rounded">md:</code> Tablet (768px+)</p>
              <p><code className="bg-gray-200 px-2 py-1 rounded">lg:</code> Desktop (1440px+)</p>
              <p><code className="bg-gray-200 px-2 py-1 rounded">grid-cols-mobile</code> 6 columns</p>
              <p><code className="bg-gray-200 px-2 py-1 rounded">grid-cols-desktop</code> 12 columns</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-3">React/CSS Usage</h3>
            <div className="space-y-2 text-sm font-mono">
              <p><code className="bg-gray-200 px-2 py-1 rounded">breakpoints.mobile</code> '375px'</p>
              <p><code className="bg-gray-200 px-2 py-1 rounded">grid.desktop.columns</code> 12</p>
              <p><code className="bg-gray-200 px-2 py-1 rounded">getBreakpoint(width)</code> current breakpoint</p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices by Breakpoint */}
      <div className="space-y-8">
        {Object.entries(gridUsage.bestPractices).map(([breakpoint, practices]) => (
          <div key={breakpoint} className="p-6 border border-gray-200 rounded-lg bg-white">
            <h3 className="text-lg font-semibold text-gray-900 capitalize mb-4">{breakpoint} Best Practices</h3>
            <ul className="space-y-2">
              {practices.map((practice, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700 text-sm">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Code Examples */}
      <div className="bg-white p-6 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Code Examples</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Responsive Grid Layout</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<!-- Mobile: stack, Tablet: 2 cols, Desktop: 3 cols -->
<div class="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-12 gap-mobile md:gap-tablet lg:gap-desktop">
  <div class="col-span-6 md:col-span-3 lg:col-span-4">Item 1</div>
  <div class="col-span-6 md:col-span-3 lg:col-span-4">Item 2</div>
  <div class="col-span-6 md:col-span-6 lg:col-span-4">Item 3</div>
</div>`}
            </pre>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Container with Responsive Padding</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<!-- Responsive container padding -->
<div class="px-container-mobile md:px-container-tablet lg:px-container-desktop">
  <div class="max-w-sm md:max-w-md lg:max-w-lg mx-auto">
    Content with responsive padding
  </div>
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  ),
};