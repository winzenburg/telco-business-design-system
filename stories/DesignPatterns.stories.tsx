import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from '../src/components/ui/input';
import { Button } from '../src/components/ui/button';
import { Label } from '../src/components/ui/label';
import { Textarea } from '../src/components/ui/textarea';
import { Checkbox } from '../src/components/ui/checkbox';
import { Icon } from '../src/components/Icon';
import { 
  patternCompliance, 
  figmaPatterns, 
  getOverallCompliance, 
  getComponentsByCompliance 
} from '../src/utils/pattern-tracker';

const meta: Meta = {
  title: 'Design System/Figma Patterns',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comprehensive guide to Figma design patterns used throughout the Comcast Business Design System. These patterns ensure pixel-perfect consistency with Figma specifications.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Typography Patterns
export const TypographyPatterns: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Typography Patterns</h2>
        <p className="text-gray-600 font-secondary">Standard typography patterns extracted from Figma with exact specifications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Label Typography */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Label Typography</h3>
          <div className="p-4 border border-gray-200 rounded-lg space-y-3">
            <div className="space-y-2">
              <Label>Standard Label</Label>
              <code className="block text-xs bg-gray-100 p-2 rounded font-mono">
                className="flex items-center gap-1 text-sm font-medium text-black font-primary"
              </code>
            </div>
            
            <div className="space-y-2">
              <Label className="flex items-center gap-1 text-sm font-medium text-black font-primary">
                Required Label
                <span className="text-red-500">*</span>
              </Label>
              <code className="block text-xs bg-gray-100 p-2 rounded font-mono">
                {`{required && <span className="text-red-500">*</span>}`}
              </code>
            </div>

            <div className="text-xs text-gray-600 font-secondary p-2 bg-blue-50 rounded">
              <strong>Figma CSS:</strong><br />
              display: flex;<br />
              align-items: center;<br />
              gap: 4px;<br />
              color: neutral/black;
            </div>
          </div>
        </div>

        {/* Body Typography */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Body Typography</h3>
          <div className="p-4 border border-gray-200 rounded-lg space-y-4">
            <div className="space-y-2">
              <p className="font-secondary font-normal leading-[130%] tracking-normal text-gray-600" 
                 style={{ fontSize: '14px', lineHeight: '18.2px' }}>
                Body/S (14px) - Subcopy text
              </p>
              <code className="block text-xs bg-gray-100 p-2 rounded font-mono">
                {`style={{ fontSize: '14px', lineHeight: '18.2px' }}`}
              </code>
            </div>

            <div className="space-y-2">
              <p className="font-secondary font-normal leading-[130%] tracking-normal text-gray-800" 
                 style={{ fontSize: '12px', lineHeight: '15.6px' }}>
                Body/XS (12px) - Hint text
              </p>
              <code className="block text-xs bg-gray-100 p-2 rounded font-mono">
                {`style={{ fontSize: '12px', lineHeight: '15.6px' }}`}
              </code>
            </div>

            <div className="text-xs text-gray-600 font-secondary p-2 bg-blue-50 rounded">
              <strong>Figma CSS:</strong><br />
              font-family: Lato;<br />
              font-weight: 400;<br />
              line-height: 130%;<br />
              letter-spacing: 0;
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Color System Patterns
export const ColorSystemPatterns: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Color System Patterns</h2>
        <p className="text-gray-600 font-secondary">Consistent color mapping from Figma neutral palette</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Neutral Colors */}
        <div className="space-y-3">
          <h3 className="text-base font-medium font-primary">Neutral Colors</h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black rounded border"></div>
              <div className="text-sm">
                <div className="font-medium text-black font-primary">neutral/black</div>
                <code className="text-xs text-gray-600">text-black</code>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-600 rounded border"></div>
              <div className="text-sm">
                <div className="font-medium text-black font-primary">neutral/grey-600</div>
                <code className="text-xs text-gray-600">text-gray-600</code>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-800 rounded border"></div>
              <div className="text-sm">
                <div className="font-medium text-black font-primary">neutral/grey-800</div>
                <code className="text-xs text-gray-600">text-gray-800</code>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-400 rounded border"></div>
              <div className="text-sm">
                <div className="font-medium text-black font-primary">neutral/grey-400</div>
                <code className="text-xs text-gray-600">border-gray-400</code>
              </div>
            </div>
          </div>
        </div>

        {/* State Colors */}
        <div className="space-y-3">
          <h3 className="text-base font-medium font-primary">State Colors</h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded border" style={{ backgroundColor: '#0D62FF' }}></div>
              <div className="text-sm">
                <div className="font-medium text-black font-primary">Focus Blue</div>
                <code className="text-xs text-gray-600">#0D62FF</code>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-500 rounded border"></div>
              <div className="text-sm">
                <div className="font-medium text-black font-primary">Error Red</div>
                <code className="text-xs text-gray-600">text-red-500</code>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-600 rounded border"></div>
              <div className="text-sm">
                <div className="font-medium text-black font-primary">Success Green</div>
                <code className="text-xs text-gray-600">text-green-600</code>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded border" style={{ backgroundColor: '#2B2D3F' }}></div>
              <div className="text-sm">
                <div className="font-medium text-black font-primary">Hover Gray</div>
                <code className="text-xs text-gray-600">#2B2D3F</code>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-3 md:col-span-2">
          <h3 className="text-base font-medium font-primary">Usage Examples</h3>
          
          <div className="space-y-2 text-sm">
            <div><span className="text-black font-primary font-medium">Labels:</span> <code>text-black font-primary</code></div>
            <div><span className="text-gray-600 font-secondary">Subcopy:</span> <code>text-gray-600 font-secondary</code></div>
            <div><span className="text-gray-800 font-secondary">Hint text:</span> <code>text-gray-800 font-secondary</code></div>
            <div><span className="text-red-500">Error state:</span> <code>text-red-500</code></div>
            <div><span className="text-green-600">Success state:</span> <code>text-green-600</code></div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Input Patterns
export const InputPatterns: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Input Field Patterns</h2>
        <p className="text-gray-600 font-secondary">Complete input structure and styling patterns from Figma</p>
      </div>

      <div className="space-y-8">
        {/* Complete Structure */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Complete Input Structure</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input
                label="Email Address"
                required
                subcopy="We'll use this to send important updates"
                placeholder="Enter your business email"
                leftIcon="users"
                hintText="Use your business email for better security"
              />
              
              <div className="text-xs text-gray-600 font-secondary p-3 bg-blue-50 rounded">
                <strong>Structure Hierarchy:</strong><br />
                1. Label (with required indicator)<br />
                2. Subcopy (additional context)<br />
                3. Input field (with icons)<br />
                4. Hint text / Error message
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium font-primary">Code Pattern:</h4>
              <code className="block text-xs bg-gray-100 p-3 rounded font-mono whitespace-pre-wrap">
{`<Input
  label="Email Address"
  required
  subcopy="Context text"
  placeholder="Placeholder text"
  leftIcon="iconName"
  rightIcon="iconName"
  hintText="Guidance text"
  errorMessage="Error text"
/>`}
              </code>
            </div>
          </div>
        </div>

        {/* Sizing and Spacing */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Input Sizing & Spacing</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium font-primary mb-2">Dimensions</h4>
              <ul className="text-sm font-secondary space-y-1">
                <li>Height: <code>40px</code></li>
                <li>Padding: <code>9px 13px</code></li>
                <li>Border radius: <code>4px</code></li>
                <li>Border: <code>1px solid</code></li>
              </ul>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium font-primary mb-2">Icons</h4>
              <ul className="text-sm font-secondary space-y-1">
                <li>Size: <code>16x16px</code></li>
                <li>Gap: <code>10px</code></li>
                <li>Alignment: <code>flex-start</code></li>
                <li>Color: <code>neutral/grey-600</code></li>
              </ul>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium font-primary mb-2">Typography</h4>
              <ul className="text-sm font-secondary space-y-1">
                <li>Font: <code>Lato</code></li>
                <li>Size: <code>14px</code></li>
                <li>Line height: <code>130%</code></li>
                <li>Weight: <code>400</code></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Component Structure Patterns
export const ComponentStructurePatterns: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Component Structure Patterns</h2>
        <p className="text-gray-600 font-secondary">Consistent patterns applied across all form components</p>
      </div>

      <div className="space-y-8">
        {/* Layout Patterns */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Layout Patterns</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium font-primary">Flex Layout Standard</h4>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-1 text-sm font-medium text-black font-primary mb-2">
                  Example Label
                  <span className="text-red-500">*</span>
                </div>
                <code className="block text-xs bg-gray-100 p-2 rounded font-mono">
                  display: flex;<br />
                  align-items: center;<br />
                  gap: 4px;
                </code>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium font-primary">Icon Positioning</h4>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-start gap-[10px]">
                  <Icon name="users" size={16} className="flex w-4 h-4 items-start text-gray-600" />
                  <span className="text-sm font-secondary">Icon alignment</span>
                </div>
                <code className="block text-xs bg-gray-100 p-2 rounded font-mono mt-2">
                  align-items: flex-start;<br />
                  gap: 10px;<br />
                  size: 16x16px;
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* All Components Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Pattern Applied Across Components</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input
                label="Input Field"
                required
                subcopy="Input with all patterns applied"
                placeholder="Consistent styling"
                leftIcon="users"
                hintText="Follows Figma patterns exactly"
              />

              <Textarea
                label="Textarea Field"
                placeholder="Multi-line input with same patterns"
                style={{ fontSize: '14px', lineHeight: '18.2px' }}
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-1 text-sm font-medium text-black font-primary">
                  Checkbox Options
                </Label>
                <div className="space-y-2">
                  <Checkbox 
                    label="Option 1" 
                    helperText="Helper text with consistent styling"
                  />
                  <Checkbox 
                    label="Option 2" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-1 text-sm font-medium text-black font-primary">
                  Button Examples
                </Label>
                <div className="flex gap-2">
                  <Button size="md">Primary</Button>
                  <Button variant="secondary" size="md">Secondary</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// State Management Patterns
export const StateManagementPatterns: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">State Management Patterns</h2>
        <p className="text-gray-600 font-secondary">Consistent interactive states across all components</p>
      </div>

      <div className="space-y-8">
        {/* State Colors */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Interactive State Colors</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border border-gray-400 rounded-[4px] bg-white">
              <div className="font-medium font-primary mb-1">Default</div>
              <div className="text-sm text-gray-600 font-secondary">border-gray-400</div>
            </div>
            
            <div className="p-4 border rounded-[4px] bg-white" style={{ borderColor: '#2B2D3F' }}>
              <div className="font-medium font-primary mb-1">Hover</div>
              <div className="text-sm text-gray-600 font-secondary">#2B2D3F</div>
            </div>
            
            <div className="p-4 border-2 rounded-[4px] bg-white ring-2 ring-offset-2" style={{ borderColor: '#0D62FF', ringColor: '#0D62FF' }}>
              <div className="font-medium font-primary mb-1">Focus</div>
              <div className="text-sm text-gray-600 font-secondary">#0D62FF + ring</div>
            </div>
            
            <div className="p-4 border border-red-500 rounded-[4px] bg-white">
              <div className="font-medium font-primary mb-1">Error</div>
              <div className="text-sm text-gray-600 font-secondary">border-red-500</div>
            </div>
          </div>
        </div>

        {/* State Implementation */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">State Implementation Pattern</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input
                label="Default State"
                placeholder="Normal input field"
                leftIcon="users"
                hintText="Default gray border"
              />
              
              <Input
                label="Error State"
                required
                placeholder="Invalid input"
                leftIcon="users"
                defaultValue="invalid-data"
                error
                errorMessage="This field has an error"
              />
              
              <Input
                label="Success State"
                placeholder="Valid input"
                leftIcon="users"
                rightIcon="required"
                defaultValue="valid@email.com"
                success
                hintText="✓ Input is valid"
              />
            </div>

            <div className="space-y-3">
              <h4 className="font-medium font-primary">CSS Pattern:</h4>
              <code className="block text-xs bg-gray-100 p-3 rounded font-mono whitespace-pre-wrap">
{`// Base styles
border: 1px solid;
border-radius: 4px;
transition: border-color, box-shadow;

// State variants
.default { border-color: #9CA3AF; }
.hover { border-color: #2B2D3F; }
.focus { 
  border-color: #0D62FF;
  ring: 2px #0D62FF;
  ring-offset: 2px;
}
.error { border-color: #EF4444; }
.success { border-color: #16A34A; }`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Pattern Compliance Dashboard
export const PatternComplianceDashboard: Story = {
  render: () => {
    const overallCompliance = getOverallCompliance();
    const { compliant, needsWork } = getComponentsByCompliance(80);

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 font-primary">Pattern Compliance Dashboard</h2>
          <p className="text-gray-600 font-secondary">Real-time tracking of Figma pattern implementation across components</p>
        </div>

        {/* Overall Score */}
        <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
          <div className="text-4xl font-bold text-green-600 mb-2">{overallCompliance}%</div>
          <div className="text-lg font-medium font-primary">Overall Pattern Compliance</div>
          <div className="text-sm text-gray-600 font-secondary mt-1">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Component Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Compliant Components */}
          <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
            <h3 className="text-lg font-medium font-primary text-green-800 mb-3">
              ✅ Fully Compliant ({compliant.length})
            </h3>
            <div className="space-y-2">
              {compliant.map(component => (
                <div key={component} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-secondary text-green-700">{component}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Components Needing Work */}
          <div className="p-4 border border-orange-200 bg-orange-50 rounded-lg">
            <h3 className="text-lg font-medium font-primary text-orange-800 mb-3">
              🔧 Needs Refinement ({needsWork.length})
            </h3>
            <div className="space-y-2">
              {needsWork.map(component => (
                <div key={component} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="font-secondary text-orange-700">{component}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Compliance */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Component Details</h3>
          
          <div className="grid gap-4">
            {patternCompliance.map(comp => {
              const total = Object.values(comp.typography).length +
                           Object.values(comp.layout).length +
                           Object.values(comp.colors).length +
                           Object.values(comp.states).length;

              const passed = Object.values(comp.typography).filter(Boolean).length +
                            Object.values(comp.layout).filter(Boolean).length +
                            Object.values(comp.colors).filter(Boolean).length +
                            Object.values(comp.states).filter(Boolean).length;

              const percentage = Math.round((passed / total) * 100);

              return (
                <div key={comp.component} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium font-primary">{comp.component}</h4>
                    <div className="flex items-center gap-2">
                      <div className={`text-sm font-medium ${percentage >= 80 ? 'text-green-600' : 'text-orange-600'}`}>
                        {percentage}%
                      </div>
                      <div className="w-16 h-2 bg-gray-200 rounded">
                        <div 
                          className={`h-full rounded ${percentage >= 80 ? 'bg-green-500' : 'bg-orange-500'}`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div>
                      <div className="font-medium font-primary mb-1">Typography</div>
                      <div className="space-y-1">
                        {Object.entries(comp.typography).map(([key, value]) => (
                          <div key={key} className={`flex items-center gap-1 ${value ? 'text-green-600' : 'text-gray-400'}`}>
                            <span>{value ? '✓' : '○'}</span>
                            <span className="font-secondary">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="font-medium font-primary mb-1">Layout</div>
                      <div className="space-y-1">
                        {Object.entries(comp.layout).map(([key, value]) => (
                          <div key={key} className={`flex items-center gap-1 ${value ? 'text-green-600' : 'text-gray-400'}`}>
                            <span>{value ? '✓' : '○'}</span>
                            <span className="font-secondary">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="font-medium font-primary mb-1">Colors</div>
                      <div className="space-y-1">
                        {Object.entries(comp.colors).map(([key, value]) => (
                          <div key={key} className={`flex items-center gap-1 ${value ? 'text-green-600' : 'text-gray-400'}`}>
                            <span>{value ? '✓' : '○'}</span>
                            <span className="font-secondary">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="font-medium font-primary mb-1">States</div>
                      <div className="space-y-1">
                        {Object.entries(comp.states).map(([key, value]) => (
                          <div key={key} className={`flex items-center gap-1 ${value ? 'text-green-600' : 'text-gray-400'}`}>
                            <span>{value ? '✓' : '○'}</span>
                            <span className="font-secondary">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-gray-500 font-secondary">
                    Last updated: {comp.lastUpdated} • Figma version: {comp.figmaVersion}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pattern Reference */}
        <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-medium font-primary mb-3">Live Pattern Reference</h3>
          <div className="text-sm font-secondary space-y-2">
            <p><strong>Auto-updating:</strong> This dashboard updates automatically as components are refined</p>
            <p><strong>Tracked patterns:</strong> Typography, Layout, Colors, Interactive States</p>
            <p><strong>Compliance threshold:</strong> 80% for "Fully Compliant" status</p>
            <p><strong>Next review:</strong> Components below 80% should be prioritized for pattern updates</p>
          </div>
        </div>
      </div>
    );
  },
};

// Implementation Guide
export const ImplementationGuide: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 font-primary">Implementation Guide</h2>
        <p className="text-gray-600 font-secondary">Step-by-step guide to apply Figma patterns in your components</p>
      </div>

      <div className="space-y-8">
        {/* Checklist */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Implementation Checklist</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium font-primary mb-3">Typography ✓</h4>
              <ul className="space-y-2 text-sm font-secondary">
                <li>✅ Labels use <code>text-black font-primary</code></li>
                <li>✅ Body text uses exact pixel values</li>
                <li>✅ Line heights set to 130%</li>
                <li>✅ Font families: Montserrat/Lato</li>
                <li>✅ Letter spacing: 0</li>
              </ul>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium font-primary mb-3">Layout ✓</h4>
              <ul className="space-y-2 text-sm font-secondary">
                <li>✅ Flex layouts with proper gaps</li>
                <li>✅ 4px border radius standard</li>
                <li>✅ 16x16px icon sizing</li>
                <li>✅ Consistent padding/margins</li>
                <li>✅ Proper alignment patterns</li>
              </ul>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium font-primary mb-3">Colors ✓</h4>
              <ul className="space-y-2 text-sm font-secondary">
                <li>✅ Neutral palette mapping</li>
                <li>✅ State color consistency</li>
                <li>✅ Focus blue (#0D62FF)</li>
                <li>✅ Error/success states</li>
                <li>✅ Proper contrast ratios</li>
              </ul>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium font-primary mb-3">States ✓</h4>
              <ul className="space-y-2 text-sm font-secondary">
                <li>✅ All 9 input states implemented</li>
                <li>✅ Consistent hover/focus styles</li>
                <li>✅ Proper disabled states</li>
                <li>✅ Error/success feedback</li>
                <li>✅ Loading state handling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Migration Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium font-primary">Migration Example</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium font-primary text-red-600">❌ Before (Inconsistent)</h4>
              <div className="p-4 border border-gray-200 rounded-lg bg-red-50">
                <code className="block text-xs font-mono whitespace-pre-wrap">
{`// Old pattern - inconsistent
<label className="text-sm font-medium text-gray-700">
  Email *
</label>
<input 
  className="rounded-md border-gray-300 px-3 py-2"
  placeholder="Enter email"
/>
<p className="text-xs text-gray-500">
  Helper text
</p>`}
                </code>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium font-primary text-green-600">✅ After (Figma Pattern)</h4>
              <div className="p-4 border border-gray-200 rounded-lg bg-green-50">
                <code className="block text-xs font-mono whitespace-pre-wrap">
{`// New pattern - Figma accurate
<Input
  label="Email"
  required
  subcopy="Additional context"
  placeholder="Enter email"
  leftIcon="users"
  hintText="Helper text"
/>`}
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-medium font-primary mb-4">Quick Reference</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-secondary">
            <div>
              <strong className="font-primary">Labels:</strong><br />
              <code>flex items-center gap-1 text-black font-primary</code>
            </div>
            <div>
              <strong className="font-primary">Border radius:</strong><br />
              <code>rounded-[4px]</code>
            </div>
            <div>
              <strong className="font-primary">Icons:</strong><br />
              <code>16x16px, text-gray-600</code>
            </div>
            <div>
              <strong className="font-primary">Body text:</strong><br />
              <code>14px/18.2px Lato</code>
            </div>
            <div>
              <strong className="font-primary">Hint text:</strong><br />
              <code>12px/15.6px text-gray-800</code>
            </div>
            <div>
              <strong className="font-primary">Focus state:</strong><br />
              <code>border-[#0D62FF] ring-2</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};