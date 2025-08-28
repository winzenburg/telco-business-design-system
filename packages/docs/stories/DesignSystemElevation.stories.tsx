import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { 
  elevationSystem,
  semanticElevation,
  elevationUsage,
  getElevation,
  getSemanticElevation,
  createElevationStyle
} from '../../tokens/design-system-elevation';

const meta: Meta = {
  title: 'Foundations/Elevation',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Elevation and shadow system based on Figma design patterns. Provides consistent depth and layering for UI components.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Component to display elevation levels
const ElevationCard: React.FC<{ 
  level: string; 
  elevation: any; 
  className?: string;
}> = ({ level, elevation, className = '' }) => (
  <div className={`bg-white rounded-lg p-6 border border-gray-200 ${className}`}>
    <div 
      className="w-full h-32 bg-white rounded-lg border border-gray-100 flex items-center justify-center mb-4"
      style={{ boxShadow: elevation.boxShadow }}
    >
      <span className="text-gray-600 font-medium">{elevation.name}</span>
    </div>
    <div className="space-y-2">
      <h3 className="font-semibold text-gray-900">{level}</h3>
      <p className="text-sm text-gray-600">{elevation.description}</p>
      <div className="text-xs font-mono bg-gray-50 p-2 rounded border">
        shadow-{level}
      </div>
    </div>
  </div>
);

// All Elevation Levels
export const AllElevationLevels: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Elevation & Shadow System</h1>
        <p className="text-gray-600 mb-4">
          Consistent elevation levels extracted from Figma design patterns. Use these shadows to create visual hierarchy and indicate interactivity.
        </p>
        
        <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <h3 className="font-medium text-blue-900">From Figma Analysis</h3>
          <p className="text-blue-800 text-sm mt-1">
            These elevation levels were extracted from actual components in your Figma file, including buttons, cards, modals, and notification systems.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(elevationSystem).map(([level, elevation]) => (
          <ElevationCard 
            key={level} 
            level={level} 
            elevation={elevation}
          />
        ))}
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.entries(elevationSystem).map(([level, elevation]) => (
            <div key={level} className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">{elevation.name}</h4>
              <div className="text-sm space-y-2">
                <div>
                  <span className="font-medium">Tailwind class:</span>
                  <code className="ml-2 px-2 py-1 bg-white rounded border text-xs">
                    shadow-elevation-{level}
                  </code>
                </div>
                <div>
                  <span className="font-medium">CSS:</span>
                  <code className="block mt-1 p-2 bg-white rounded border text-xs font-mono">
                    {elevation.css}
                  </code>
                </div>
                <div>
                  <span className="font-medium">Usage:</span>
                  <ul className="list-disc list-inside text-xs mt-1">
                    {elevation.usage.map((use: string, index: number) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Semantic Elevation Mapping
export const SemanticElevation: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Semantic Elevation</h1>
        <p className="text-gray-600">
          Elevation levels mapped to semantic meanings for consistent layering and z-index management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(semanticElevation).map(([semantic, config]) => {
          const elevation = config.elevation !== 'none' ? elevationSystem[config.elevation as keyof typeof elevationSystem] : null;
          
          return (
            <div key={semantic} className="bg-white rounded-lg p-6 border border-gray-200">
              <div 
                className="w-full h-24 bg-white rounded-lg border border-gray-100 flex items-center justify-center mb-4 relative"
                style={{ 
                  boxShadow: elevation?.boxShadow || 'none',
                  zIndex: config.zIndex 
                }}
              >
                <span className="text-gray-600 font-medium capitalize">{semantic}</span>
                <div className="absolute top-2 right-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  z-{config.zIndex}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 capitalize">{semantic}</h3>
                <p className="text-sm text-gray-600">{config.description}</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-medium">Elevation:</span>
                  <code className="px-2 py-1 bg-gray-100 rounded">
                    {config.elevation}
                  </code>
                  <span className="font-medium">Z-Index:</span>
                  <code className="px-2 py-1 bg-gray-100 rounded">
                    {config.zIndex}
                  </code>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
};

// Interactive Elevation Demo
export const InteractiveDemo: Story = {
  render: () => {
    const [selectedLevel, setSelectedLevel] = React.useState<string>('md');
    const elevation = elevationSystem[selectedLevel as keyof typeof elevationSystem];
    
    return (
      <div className="space-y-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Interactive Elevation Demo</h1>
          <p className="text-gray-600">
            Select different elevation levels to see how they affect the visual hierarchy.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {Object.keys(elevationSystem).map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                selectedLevel === level
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Preview</h3>
            <div className="relative bg-gray-100 p-8 rounded-lg min-h-64 flex items-center justify-center">
              <div 
                className="bg-white p-8 rounded-lg transition-shadow duration-300"
                style={{ boxShadow: elevation.boxShadow }}
              >
                <h4 className="font-semibold text-gray-900 mb-2">{elevation.name}</h4>
                <p className="text-gray-600 text-sm">{elevation.description}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Code</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tailwind CSS</label>
                <code className="block p-3 bg-gray-900 text-green-400 rounded text-sm font-mono">
                  &lt;div className="shadow-elevation-{selectedLevel}"&gt;
                </code>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CSS Property</label>
                <code className="block p-3 bg-gray-900 text-green-400 rounded text-sm font-mono whitespace-pre-wrap">
                  {elevation.css}
                </code>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">React Style Object</label>
                <code className="block p-3 bg-gray-900 text-green-400 rounded text-sm font-mono whitespace-pre-wrap">
                  {`style={{ boxShadow: '${elevation.boxShadow}' }}`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Usage Guidelines
export const UsageGuidelines: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Usage Guidelines</h1>
        <p className="text-gray-600">
          Best practices for implementing elevation and shadows in your applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Design Principles</h2>
          <div className="space-y-4">
            {elevationUsage.principles.map((principle, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-700">{principle}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Z-Index Layering</h2>
          <div className="space-y-3">
            {Object.entries(elevationUsage.layering).map(([zIndex, description]) => (
              <div key={zIndex} className="flex items-center gap-3">
                <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono min-w-12 text-center">
                  {zIndex.replace('z', 'z-')}
                </code>
                <span className="text-gray-700">{description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Performance Considerations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {elevationUsage.performance.map((tip, index) => (
            <div key={index} className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Code Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Using Helper Functions</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`import { getElevation, createElevationStyle } from '../tokens/design-system-elevation';

// Get elevation data
const cardElevation = getElevation('md');

// Create style object
const cardStyle = createElevationStyle('md');

// In component
<div style={cardStyle}>
  Card with medium elevation
</div>`}
            </pre>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Tailwind CSS Classes</h4>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<!-- Small elevation for inputs -->
<input className="shadow-elevation-sm rounded border p-2" />

<!-- Medium elevation for cards -->
<div className="shadow-elevation-md bg-white rounded-lg p-4">
  Card content
</div>

<!-- Large elevation for modals -->
<div className="shadow-elevation-lg bg-white rounded-lg p-6">
  Modal content
</div>

<!-- Focus state -->
<button className="shadow-elevation-focus">
  Focused button
</button>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  ),
};