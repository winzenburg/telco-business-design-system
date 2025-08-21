import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

// Import all our shadcn/ui components
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { Label } from '../src/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../src/components/ui/card';
import { Checkbox } from '../src/components/ui/checkbox';
import { Textarea } from '../src/components/ui/textarea';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '../src/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/components/ui/tabs';

// Import Lucide React icons
import { Plus, Settings, ArrowRight, BarChart, MoreHorizontal, Shield } from 'lucide-react';

const meta: Meta = {
  title: 'Design System/Component Overview',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete overview of shadcn/ui components integrated with the Comcast Business Design System. All components use our design tokens, Figma specifications, and accessibility standards.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Component showcase
export const ComponentShowcase: Story = {
  render: () => (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-neutral-900">shadcn/ui + Comcast Business Design System</h1>
        <p className="text-lg text-neutral-600">
          All components are built on shadcn/ui foundation and customized with our Figma design specifications, 
          design tokens, and accessibility standards.
        </p>
      </div>

      {/* Buttons Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Buttons</h2>
          <p className="text-neutral-600 mb-4">Interactive elements for user actions</p>
        </div>
        
        <div className="grid gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-neutral-800">Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium text-neutral-800">Sizes & Icons</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Small
              </Button>
              <Button>
                <Settings className="mr-2 h-5 w-5" />
                Default
              </Button>
              <Button size="lg">
                Large
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium text-neutral-800">States</h3>
            <div className="flex flex-wrap gap-3">
              <Button>Normal</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Form Components Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Form Components</h2>
          <p className="text-neutral-600 mb-4">Input elements with consistent styling and validation</p>
        </div>

        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>User Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your full name" 
                defaultValue="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john.doe@company.com"
                defaultValue="john.doe@company.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Enter your message..."
                defaultValue="This is a sample message to demonstrate the textarea component."
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" defaultChecked />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">I agree to the terms and conditions</Label>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button>Save Changes</Button>
            <Button variant="outline">Cancel</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Cards Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Cards</h2>
          <p className="text-neutral-600 mb-4">Flexible containers for content organization</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">Simple card with basic content structure.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
<BarChart className="mr-2 h-5 w-5" />
                Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-neutral-600">Users</span>
                  <span className="font-medium">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-neutral-600">Sessions</span>
                  <span className="font-medium">5,678</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">View Details</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Action Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600 mb-4">Card with interactive elements and actions.</p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm">Primary Action</Button>
              <Button variant="ghost" size="sm">Secondary</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Tables Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Data Tables</h2>
          <p className="text-neutral-600 mb-4">Structured data presentation with consistent styling</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Doe</TableCell>
                  <TableCell>john.doe@company.com</TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="ghost" size="sm">
<Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
<Shield className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jane Smith</TableCell>
                  <TableCell>jane.smith@company.com</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="ghost" size="sm">
<Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
<Shield className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bob Johnson</TableCell>
                  <TableCell>bob.johnson@company.com</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Inactive
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-1 justify-end">
                      <Button variant="ghost" size="sm">
<Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
<Shield className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Tabs Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Navigation Tabs</h2>
          <p className="text-neutral-600 mb-4">Tabbed interfaces for content organization</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <h3 className="text-lg font-medium">Dashboard Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">1,234</div>
                    <div className="text-sm text-blue-600">Total Users</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">5,678</div>
                    <div className="text-sm text-green-600">Active Sessions</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">98.2%</div>
                    <div className="text-sm text-purple-600">Uptime</div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-4">
                <h3 className="text-lg font-medium">Analytics Dashboard</h3>
                <p className="text-neutral-600">
                  Detailed analytics and reporting tools would be displayed here. 
                  This demonstrates how tabbed content can organize complex interfaces.
                </p>
                <div className="flex gap-2">
                  <Button size="sm">Generate Report</Button>
                  <Button variant="outline" size="sm">Export Data</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-4">
                <h3 className="text-lg font-medium">Application Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-neutral-600">Receive email updates</p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Dark Mode</Label>
                      <p className="text-sm text-neutral-600">Toggle dark theme</p>
                    </div>
                    <Checkbox />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="team" className="space-y-4">
                <h3 className="text-lg font-medium">Team Management</h3>
                <p className="text-neutral-600">
                  Team member management and collaboration tools.
                </p>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Team Member
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Design System Integration */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Design System Integration</h2>
          <p className="text-neutral-600 mb-4">How shadcn/ui integrates with our design foundation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Design Tokens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Colors:</span>
                  <span className="font-mono text-blue-600">Figma extracted</span>
                </div>
                <div className="flex justify-between">
                  <span>Typography:</span>
                  <span className="font-mono">Montserrat, Lato</span>
                </div>
                <div className="flex justify-between">
                  <span>Spacing:</span>
                  <span className="font-mono">4px baseline</span>
                </div>
                <div className="flex justify-between">
                  <span>Elevation:</span>
                  <span className="font-mono">6 shadow levels</span>
                </div>
                <div className="flex justify-between">
                  <span>Motion:</span>
                  <span className="font-mono">150ms transitions</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-1">
                <div>✅ WCAG 2.1 AA compliant focus rings</div>
                <div>✅ Proper color contrast ratios</div>
                <div>✅ Keyboard navigation support</div>
                <div>✅ Screen reader compatibility</div>
                <div>✅ 44px minimum touch targets</div>
                <div>✅ Semantic HTML structure</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  ),
};

// Interactive form example
export const InteractiveForm: Story = {
  render: () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      newsletter: false,
      terms: false
    });

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitting(false);
      alert('Form submitted successfully!');
    };

    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-neutral-900">Interactive Form Example</h2>
          <p className="text-neutral-600">
            Fully functional form demonstrating component integration and state management
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="form-name">Full Name *</Label>
                  <Input 
                    id="form-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="form-email">Email Address *</Label>
                  <Input 
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="form-message">Message *</Label>
                <Textarea 
                  id="form-message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Enter your message..."
                  rows={4}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="form-newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked as boolean }))}
                  />
                  <Label htmlFor="form-newsletter">Subscribe to our newsletter</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="form-terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: checked as boolean }))}
                  />
                  <Label htmlFor="form-terms">I agree to the terms and conditions *</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button 
                type="submit" 
                loading={isSubmitting}
                disabled={!formData.terms || !formData.name || !formData.email || !formData.message}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Form'}
              </Button>
              <Button 
                type="button" 
                variant="outline"
                onClick={() => setFormData({ name: '', email: '', message: '', newsletter: false, terms: false })}
              >
                Reset
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    );
  },
};