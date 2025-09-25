import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from '../src/components/ui/input';
import { Button } from '../src/components/ui/button';
import { Label } from '../src/components/ui/label';
import { Textarea } from '../src/components/ui/textarea';
import { Checkbox } from '../src/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/ui/card';
import { Badge } from '../src/components/ui/badge';
import { Separator } from '../src/components/ui/separator';
import { User, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const meta: Meta = {
  title: ' Foundations/Token Patterns',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Token-compliant design patterns following CLAUDE.md guidelines. Demonstrates semantic design tokens, accessible implementations, and consistent styling across all components.',
      },
      page: () => (
        <div>
          <h1>Design System Token Patterns</h1>
          <p>This guide demonstrates how to implement components using semantic design tokens following CLAUDE.md guidelines. All examples use tokens instead of literal values, ensuring consistency and maintainability.</p>
          
          <h2>Tokens Used</h2>
          <table>
            <thead>
              <tr><th>Token</th><th>Usage</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>--ds-color-text-primary</td><td>Primary text, headings</td><td>#15172B</td></tr>
              <tr><td>--ds-color-text-muted</td><td>Secondary text, descriptions</td><td>#70717D</td></tr>
              <tr><td>--ds-color-bg-canvas</td><td>Page backgrounds</td><td>#FFFFFF</td></tr>
              <tr><td>--ds-color-bg-surface</td><td>Card, surface backgrounds</td><td>#F9FAFB</td></tr>
              <tr><td>--ds-color-neutral-300</td><td>Structural borders, dividers</td><td>#DDDDE2</td></tr>
              <tr><td>--ds-color-neutral-400</td><td>Form input borders</td><td>#B4B5BB</td></tr>
              <tr><td>--ds-color-intent-primary</td><td>Primary actions, focus</td><td>#0D62FF</td></tr>
              <tr><td>--ds-color-intent-success</td><td>Success states</td><td>#16A34A</td></tr>
              <tr><td>--ds-color-intent-warning</td><td>Warning states</td><td>#F59E0B</td></tr>
              <tr><td>--ds-color-intent-destructive</td><td>Error states</td><td>#D11314</td></tr>
              <tr><td>--ds-font-family-heading</td><td>Headings, titles</td><td>Montserrat</td></tr>
              <tr><td>--ds-font-family-body</td><td>Body text, labels</td><td>Lato</td></tr>
              <tr><td>--ds-spacing-2</td><td>Small spacing</td><td>0.5rem</td></tr>
              <tr><td>--ds-spacing-4</td><td>Component spacing</td><td>1rem</td></tr>
              <tr><td>--ds-spacing-6</td><td>Section spacing</td><td>1.5rem</td></tr>
              <tr><td>--ds-spacing-8</td><td>Layout spacing</td><td>2rem</td></tr>
              <tr><td>--ds-border-radius-sm</td><td>Small corners</td><td>0.25rem</td></tr>
              <tr><td>--ds-border-radius-md</td><td>Default corners</td><td>0.375rem</td></tr>
            </tbody>
          </table>
        </div>
      ),
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Token-Compliant Typography Patterns
export const TypographyPatterns: Story = {
  render: () => (
    <div className="space-y-[var(--ds-spacing-8)]">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-[var(--ds-spacing-4)] text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-heading)]">
          Token-Based Typography
        </h2>
        <p className="text-[var(--ds-color-text-muted)] font-[var(--ds-font-family-body)]">
          All typography uses semantic design tokens following CLAUDE.md guidelines
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--ds-spacing-8)]">
        {/* Heading Typography */}
        <Card className="border-[var(--ds-color-neutral-300)]">
          <CardHeader>
            <CardTitle className="text-[var(--ds-color-text-primary)]">Heading Typography</CardTitle>
            <CardDescription className="text-[var(--ds-color-text-muted)]">
              Token-compliant heading styles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-[var(--ds-spacing-4)]">
            <div className="space-y-[var(--ds-spacing-2)]">
              <h1 className="text-3xl font-bold text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-heading)]">
                Heading Level 1
              </h1>
              <code className="block text-sm bg-[var(--ds-color-bg-surface)] p-2 rounded-[var(--ds-border-radius-sm)] text-[var(--ds-color-text-muted)]">
                font-[var(--ds-font-family-heading)] text-[var(--ds-color-text-primary)]
              </code>
            </div>
            
            <div className="space-y-[var(--ds-spacing-2)]">
              <h2 className="text-2xl font-semibold text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-heading)]">
                Heading Level 2
              </h2>
              <code className="block text-sm bg-[var(--ds-color-bg-surface)] p-2 rounded-[var(--ds-border-radius-sm)] text-[var(--ds-color-text-muted)]">
                font-[var(--ds-font-family-heading)] text-[var(--ds-color-text-primary)]
              </code>
            </div>

            <div className="space-y-[var(--ds-spacing-2)]">
              <h3 className="text-lg font-medium text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-heading)]">
                Heading Level 3
              </h3>
              <code className="block text-sm bg-[var(--ds-color-bg-surface)] p-2 rounded-[var(--ds-border-radius-sm)] text-[var(--ds-color-text-muted)]">
                font-[var(--ds-font-family-heading)] text-[var(--ds-color-text-primary)]
              </code>
            </div>
          </CardContent>
        </Card>

        {/* Body Typography */}
        <Card className="border-[var(--ds-color-neutral-300)]">
          <CardHeader>
            <CardTitle className="text-[var(--ds-color-text-primary)]">Body Typography</CardTitle>
            <CardDescription className="text-[var(--ds-color-text-muted)]">
              Token-compliant body text styles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-[var(--ds-spacing-4)]">
            <div className="space-y-[var(--ds-spacing-2)]">
              <p className="text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-body)]">
                Primary body text using semantic tokens
              </p>
              <code className="block text-sm bg-[var(--ds-color-bg-surface)] p-2 rounded-[var(--ds-border-radius-sm)] text-[var(--ds-color-text-muted)]">
                font-[var(--ds-font-family-body)] text-[var(--ds-color-text-primary)]
              </code>
            </div>

            <div className="space-y-[var(--ds-spacing-2)]">
              <p className="text-[var(--ds-color-text-muted)] font-[var(--ds-font-family-body)]">
                Secondary body text for descriptions and helper content
              </p>
              <code className="block text-sm bg-[var(--ds-color-bg-surface)] p-2 rounded-[var(--ds-border-radius-sm)] text-[var(--ds-color-text-muted)]">
                font-[var(--ds-font-family-body)] text-[var(--ds-color-text-muted)]
              </code>
            </div>

            <div className="space-y-[var(--ds-spacing-2)]">
              <Label className="block text-sm font-medium text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-body)]">
                Form Label Style
              </Label>
              <code className="block text-sm bg-[var(--ds-color-bg-surface)] p-2 rounded-[var(--ds-border-radius-sm)] text-[var(--ds-color-text-muted)]">
                font-[var(--ds-font-family-body)] text-[var(--ds-color-text-primary)]
              </code>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

// Token-Compliant Color System
export const ColorSystemPatterns: Story = {
  render: () => (
    <div className="space-y-[var(--ds-spacing-8)]">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-[var(--ds-spacing-4)] text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-heading)]">
          Semantic Color Tokens
        </h2>
        <p className="text-[var(--ds-color-text-muted)] font-[var(--ds-font-family-body)]">
          All colors use semantic tokens for consistency and theme flexibility
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--ds-spacing-6)]">
        {/* Text Colors */}
        <Card className="border-[var(--ds-color-neutral-300)]">
          <CardHeader>
            <CardTitle className="text-[var(--ds-color-text-primary)]">Text Colors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-[var(--ds-spacing-4)]">
            <div className="space-y-[var(--ds-spacing-2)]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[var(--ds-color-text-primary)] rounded border"></div>
                <div className="text-sm">
                  <div className="font-medium text-[var(--ds-color-text-primary)]">Primary Text</div>
                  <code className="text-xs text-[var(--ds-color-text-muted)]">--ds-color-text-primary</code>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[var(--ds-color-text-muted)] rounded border"></div>
                <div className="text-sm">
                  <div className="font-medium text-[var(--ds-color-text-primary)]">Muted Text</div>
                  <code className="text-xs text-[var(--ds-color-text-muted)]">--ds-color-text-muted</code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Intent Colors */}
        <Card className="border-[var(--ds-color-neutral-300)]">
          <CardHeader>
            <CardTitle className="text-[var(--ds-color-text-primary)]">Intent Colors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-[var(--ds-spacing-4)]">
            <div className="space-y-[var(--ds-spacing-2)]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[var(--ds-color-intent-primary)] rounded border"></div>
                <div className="text-sm">
                  <div className="font-medium text-[var(--ds-color-text-primary)]">Primary</div>
                  <code className="text-xs text-[var(--ds-color-text-muted)]">--ds-color-intent-primary</code>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[var(--ds-color-intent-success)] rounded border"></div>
                <div className="text-sm">
                  <div className="font-medium text-[var(--ds-color-text-primary)]">Success</div>
                  <code className="text-xs text-[var(--ds-color-text-muted)]">--ds-color-intent-success</code>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[var(--ds-color-intent-warning)] rounded border"></div>
                <div className="text-sm">
                  <div className="font-medium text-[var(--ds-color-text-primary)]">Warning</div>
                  <code className="text-xs text-[var(--ds-color-text-muted)]">--ds-color-intent-warning</code>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[var(--ds-color-intent-destructive)] rounded border"></div>
                <div className="text-sm">
                  <div className="font-medium text-[var(--ds-color-text-primary)]">Error</div>
                  <code className="text-xs text-[var(--ds-color-text-muted)]">--ds-color-intent-destructive</code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Background Colors */}
        <Card className="border-[var(--ds-color-neutral-300)]">
          <CardHeader>
            <CardTitle className="text-[var(--ds-color-text-primary)]">Background Colors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-[var(--ds-spacing-4)]">
            <div className="space-y-[var(--ds-spacing-2)]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[var(--ds-color-bg-canvas)] rounded border border-[var(--ds-color-neutral-300)]"></div>
                <div className="text-sm">
                  <div className="font-medium text-[var(--ds-color-text-primary)]">Canvas</div>
                  <code className="text-xs text-[var(--ds-color-text-muted)]">--ds-color-bg-canvas</code>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[var(--ds-color-bg-surface)] rounded border"></div>
                <div className="text-sm">
                  <div className="font-medium text-[var(--ds-color-text-primary)]">Surface</div>
                  <code className="text-xs text-[var(--ds-color-text-muted)]">--ds-color-bg-surface</code>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 border-2 border-[var(--ds-color-neutral-300)] rounded"></div>
                <div className="text-sm">
                  <div className="font-medium text-[var(--ds-color-text-primary)]">Border</div>
                  <code className="text-xs text-[var(--ds-color-text-muted)]">--ds-color-neutral-300</code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

// Token-Compliant Component Patterns
export const ComponentPatterns: Story = {
  render: () => (
    <div className="space-y-[var(--ds-spacing-8)]">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-[var(--ds-spacing-4)] text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-heading)]">
          Token-Compliant Components
        </h2>
        <p className="text-[var(--ds-color-text-muted)] font-[var(--ds-font-family-body)]">
          Components implemented with semantic tokens following CLAUDE.md guidelines
        </p>
      </div>

      <div className="space-y-[var(--ds-spacing-8)]">
        {/* Form Components */}
        <Card className="border-[var(--ds-color-neutral-300)]">
          <CardHeader>
            <CardTitle className="text-[var(--ds-color-text-primary)]">Form Component Pattern</CardTitle>
            <CardDescription className="text-[var(--ds-color-text-muted)]">
              Complete form structure using semantic tokens
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-[var(--ds-spacing-6)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--ds-spacing-6)]">
              <div className="space-y-[var(--ds-spacing-4)]">
                <div>
                  <Label className="text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-body)]" htmlFor="business-email">
                    Business Email <span className="text-[var(--ds-color-intent-destructive)]">*</span>
                  </Label>
                  <Input
                    id="business-email"
                    placeholder="Enter your business email"
                    className="border-[var(--ds-color-neutral-300)] focus:border-[var(--ds-color-intent-primary)]"
                  />
                  <p className="text-sm text-[var(--ds-color-text-muted)] font-[var(--ds-font-family-body)] mt-1">
                    We'll use this for important service updates
                  </p>
                </div>
                
                <div>
                  <Label className="text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-body)]" htmlFor="company-message">
                    Message
                  </Label>
                  <Textarea
                    id="company-message"
                    placeholder="Tell us about your business needs..."
                    className="border-[var(--ds-color-neutral-300)] focus:border-[var(--ds-color-intent-primary)] min-h-[100px]"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-body)]">
                    Service Options
                  </Label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-body)]">Business Internet</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-body)]">Voice Services</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <Checkbox />
                      <span className="text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-body)]">Security Suite</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-[var(--ds-spacing-4)]">
                <div className="p-[var(--ds-spacing-4)] bg-[var(--ds-color-bg-surface)] rounded-[var(--ds-border-radius-md)] border border-[var(--ds-color-neutral-300)]">
                  <h4 className="font-semibold text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-heading)] mb-2">
                    Token Implementation
                  </h4>
                  <code className="block text-sm text-[var(--ds-color-text-muted)] font-mono whitespace-pre-wrap">
{`// Label styling
text-[var(--ds-color-text-primary)]
font-[var(--ds-font-family-body)]

// Input borders
border-[var(--ds-color-neutral-300)]
focus:border-[var(--ds-color-intent-primary)]

// Helper text
text-[var(--ds-color-text-muted)]

// Required indicator
text-[var(--ds-color-intent-destructive)]`}
                  </code>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Cancel
                  </Button>
                  <Button variant="default" className="flex-1">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* State Patterns */}
        <Card className="border-[var(--ds-color-neutral-300)]">
          <CardHeader>
            <CardTitle className="text-[var(--ds-color-text-primary)]">Interactive State Patterns</CardTitle>
            <CardDescription className="text-[var(--ds-color-text-muted)]">
              Component states using semantic intent tokens
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-[var(--ds-spacing-6)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--ds-spacing-4)]">
              <div className="p-[var(--ds-spacing-4)] border border-[var(--ds-color-neutral-300)] rounded-[var(--ds-border-radius-md)] bg-[var(--ds-color-bg-canvas)]">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="size-4 text-[var(--ds-color-intent-primary)]" />
                  <span className="font-medium text-[var(--ds-color-text-primary)]">Default</span>
                </div>
                <p className="text-sm text-[var(--ds-color-text-muted)]">Normal state</p>
                <Badge variant="outline" className="mt-2">Normal</Badge>
              </div>
              
              <div className="p-[var(--ds-spacing-4)] border border-[var(--ds-color-intent-success)] rounded-[var(--ds-border-radius-md)] bg-[var(--ds-color-intent-success)]/5">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="size-4 text-[var(--ds-color-intent-success)]" />
                  <span className="font-medium text-[var(--ds-color-text-primary)]">Success</span>
                </div>
                <p className="text-sm text-[var(--ds-color-text-muted)]">Success state</p>
                <Badge variant="default" className="mt-2 bg-[var(--ds-color-intent-success)]">Success</Badge>
              </div>
              
              <div className="p-[var(--ds-spacing-4)] border border-[var(--ds-color-intent-warning)] rounded-[var(--ds-border-radius-md)] bg-[var(--ds-color-intent-warning)]/5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="size-4 text-[var(--ds-color-intent-warning)]" />
                  <span className="font-medium text-[var(--ds-color-text-primary)]">Warning</span>
                </div>
                <p className="text-sm text-[var(--ds-color-text-muted)]">Warning state</p>
                <Badge variant="secondary" className="mt-2 bg-[var(--ds-color-intent-warning)]/20 text-[var(--ds-color-intent-warning)]">Warning</Badge>
              </div>
              
              <div className="p-[var(--ds-spacing-4)] border border-[var(--ds-color-intent-destructive)] rounded-[var(--ds-border-radius-md)] bg-[var(--ds-color-intent-destructive)]/5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="size-4 text-[var(--ds-color-intent-destructive)]" />
                  <span className="font-medium text-[var(--ds-color-text-primary)]">Error</span>
                </div>
                <p className="text-sm text-[var(--ds-color-text-muted)]">Error state</p>
                <Badge variant="destructive" className="mt-2">Error</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Layout Patterns */}
        <Card className="border-[var(--ds-color-neutral-300)]">
          <CardHeader>
            <CardTitle className="text-[var(--ds-color-text-primary)]">Spacing & Layout Tokens</CardTitle>
            <CardDescription className="text-[var(--ds-color-text-muted)]">
              Consistent spacing using semantic spacing tokens
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-[var(--ds-spacing-4)]">
              <div className="p-[var(--ds-spacing-2)] bg-[var(--ds-color-intent-primary)]/10 rounded-[var(--ds-border-radius-sm)]">
                <code className="text-sm text-[var(--ds-color-text-primary)]">--ds-spacing-2 (0.5rem)</code>
              </div>
              <div className="p-[var(--ds-spacing-4)] bg-[var(--ds-color-intent-primary)]/10 rounded-[var(--ds-border-radius-sm)]">
                <code className="text-sm text-[var(--ds-color-text-primary)]">--ds-spacing-4 (1rem)</code>
              </div>
              <div className="p-[var(--ds-spacing-6)] bg-[var(--ds-color-intent-primary)]/10 rounded-[var(--ds-border-radius-md)]">
                <code className="text-sm text-[var(--ds-color-text-primary)]">--ds-spacing-6 (1.5rem)</code>
              </div>
              <div className="p-[var(--ds-spacing-8)] bg-[var(--ds-color-intent-primary)]/10 rounded-[var(--ds-border-radius-md)]">
                <code className="text-sm text-[var(--ds-color-text-primary)]">--ds-spacing-8 (2rem)</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

// Implementation Guide
export const TokenImplementationGuide: Story = {
  render: () => (
    <div className="space-y-[var(--ds-spacing-8)]">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-[var(--ds-spacing-4)] text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-heading)]">
          CLAUDE.md Implementation Guide
        </h2>
        <p className="text-[var(--ds-color-text-muted)] font-[var(--ds-font-family-body)]">
          Step-by-step guide to implement token-compliant components following CLAUDE.md guidelines
        </p>
      </div>

      <div className="space-y-[var(--ds-spacing-8)]">
        {/* Compliance Checklist */}
        <Card className="border-[var(--ds-color-neutral-300)]">
          <CardHeader>
            <CardTitle className="text-[var(--ds-color-text-primary)]">CLAUDE.md Compliance Checklist</CardTitle>
            <CardDescription className="text-[var(--ds-color-text-muted)]">
              Essential requirements for all components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--ds-spacing-6)]">
              <div className="space-y-[var(--ds-spacing-4)]">
                <h4 className="font-semibold text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-heading)]">✅ Token Requirements</h4>
                <ul className="space-y-2 text-sm text-[var(--ds-color-text-muted)] font-[var(--ds-font-family-body)]">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--ds-color-intent-success)]" />
                    Use semantic color tokens (--ds-color-*)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--ds-color-intent-success)]" />
                    Use spacing tokens (--ds-spacing-*)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--ds-color-intent-success)]" />
                    Use typography tokens (--ds-font-*)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--ds-color-intent-success)]" />
                    No literal hex/rgb/px values
                  </li>
                </ul>
              </div>
              
              <div className="space-y-[var(--ds-spacing-4)]">
                <h4 className="font-semibold text-[var(--ds-color-text-primary)] font-[var(--ds-font-family-heading)]">🔒 Accessibility Requirements</h4>
                <ul className="space-y-2 text-sm text-[var(--ds-color-text-muted)] font-[var(--ds-font-family-body)]">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--ds-color-intent-success)]" />
                    WCAG 2.1 AA compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--ds-color-intent-success)]" />
                    Keyboard navigation support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--ds-color-intent-success)]" />
                    Proper ARIA attributes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[var(--ds-color-intent-success)]" />
                    Visible focus indicators
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Before/After Example */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--ds-spacing-6)]">
          <Card className="border-[var(--ds-color-intent-destructive)]">
            <CardHeader>
              <CardTitle className="text-[var(--ds-color-intent-destructive)]">❌ Non-Compliant (Before)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-[var(--ds-spacing-4)] bg-[var(--ds-color-intent-destructive)]/5 rounded-[var(--ds-border-radius-md)]">
                <code className="block text-sm text-[var(--ds-color-text-primary)] font-mono whitespace-pre-wrap">
{`// Hard-coded values - AVOID
<label className="text-gray-700 font-medium">
  Email *
</label>
<input 
  className="border-gray-300 p-3"
  style={{ color: '#15172B' }}
/>
<p style={{ fontSize: '12px', color: '#70717D' }}>
  Helper text
</p>`}
                </code>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[var(--ds-color-intent-success)]">
            <CardHeader>
              <CardTitle className="text-[var(--ds-color-intent-success)]">✅ Token-Compliant (After)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-[var(--ds-spacing-4)] bg-[var(--ds-color-intent-success)]/5 rounded-[var(--ds-border-radius-md)]">
                <code className="block text-sm text-[var(--ds-color-text-primary)] font-mono whitespace-pre-wrap">
{`// Semantic tokens - CORRECT
<Label className="text-[var(--ds-color-text-primary)]
                 font-[var(--ds-font-family-body)]"
       htmlFor="email">
  Email <span className="text-[var(--ds-color-intent-destructive)]">*</span>
</Label>
<Input 
  id="email"
  className="border-[var(--ds-color-neutral-300)]"
/>
<p className="text-[var(--ds-color-text-muted)] 
             font-[var(--ds-font-family-body)]">
  Helper text
</p>`}
                </code>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Reference */}
        <Card className="border-[var(--ds-color-intent-primary)] bg-[var(--ds-color-intent-primary)]/5">
          <CardHeader>
            <CardTitle className="text-[var(--ds-color-text-primary)]">🚀 Quick Token Reference</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--ds-spacing-4)] text-sm font-[var(--ds-font-family-body)]">
              <div>
                <strong className="text-[var(--ds-color-text-primary)]">Primary Text:</strong><br />
                <code className="text-[var(--ds-color-text-muted)]">text-[var(--ds-color-text-primary)]</code>
              </div>
              <div>
                <strong className="text-[var(--ds-color-text-primary)]">Muted Text:</strong><br />
                <code className="text-[var(--ds-color-text-muted)]">text-[var(--ds-color-text-muted)]</code>
              </div>
              <div>
                <strong className="text-[var(--ds-color-text-primary)]">Primary Action:</strong><br />
                <code className="text-[var(--ds-color-text-muted)]">bg-[var(--ds-color-intent-primary)]</code>
              </div>
              <div>
                <strong className="text-[var(--ds-color-text-primary)]">Error State:</strong><br />
                <code className="text-[var(--ds-color-text-muted)]">text-[var(--ds-color-intent-destructive)]</code>
              </div>
              <div>
                <strong className="text-[var(--ds-color-text-primary)]">Card Border:</strong><br />
                <code className="text-[var(--ds-color-text-muted)]">border-[var(--ds-color-neutral-300)]</code>
              </div>
              <div>
                <strong className="text-[var(--ds-color-text-primary)]">Layout Spacing:</strong><br />
                <code className="text-[var(--ds-color-text-muted)]">gap-[var(--ds-spacing-6)]</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};