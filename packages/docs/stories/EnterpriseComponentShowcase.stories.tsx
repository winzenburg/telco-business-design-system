import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Checkbox } from '../../components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectWrapper } from '../../components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { Badge } from '../../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Icon } from '../../icons/src/Icon';
import { GlobalNavigation } from '../../components/src/GlobalNavigation';

const meta: Meta = {
  title: 'Examples/Enterprise Showcase',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Comprehensive showcase of all updated enterprise components with design system principles applied.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// New Enterprise Component Showcase
export const ComponentShowcase: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      {/* Global Navigation */}
      <GlobalNavigation 
        userName="Sarah" 
        sectionTitle="COMPONENT SHOWCASE" 
        showSearch={true}
        showUserProfile={true}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#15172B] font-primary mb-2">
              Enterprise Design System Components
            </h1>
            <p className="text-[#70717D] font-secondary">
              Comprehensive showcase of all updated components with enterprise design principles
            </p>
          </div>

          {/* Alerts & Feedback Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="alert" size={20} />
                Alerts & Status Feedback
              </CardTitle>
              <CardDescription>
                Enterprise-grade alert system with proper accessibility and branding
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert variant="info" showIcon>
                <AlertTitle>Service Update Available</AlertTitle>
                <AlertDescription>
                  New features and security improvements are ready to install for your Internet Pro service.
                </AlertDescription>
              </Alert>
              
              <Alert variant="success" showIcon>
                <AlertTitle>Payment Processed Successfully</AlertTitle>
                <AlertDescription>
                  Your monthly payment of $2,847.00 has been processed and applied to your account.
                </AlertDescription>
              </Alert>
              
              <Alert variant="warning" showIcon>
                <AlertTitle>Scheduled Maintenance</AlertTitle>
                <AlertDescription>
                  Network maintenance is scheduled for Sunday, March 15th from 2:00 AM - 4:00 AM EST.
                </AlertDescription>
              </Alert>
              
              <Alert variant="destructive" showIcon>
                <AlertTitle>Service Interruption Detected</AlertTitle>
                <AlertDescription>
                  There's an issue with your Internet Pro service at 123 Business Ave. Our team is investigating.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* New Icon System Showcase */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="configure" size={20} />
                High-Quality Icon System
              </CardTitle>
              <CardDescription>
                273 optimized SVG icons from Figma with perfect scaling and accessibility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-[#15172B] font-primary">Navigation</h4>
                  <div className="flex gap-3">
                    <Icon name="chevron" size={24} />
                    <Icon name="arrow" size={24} />
                    <Icon name="menu" size={24} />
                    <Icon name="close" size={24} />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-[#15172B] font-primary">Interface</h4>
                  <div className="flex gap-3">
                    <Icon name="check" size={24} />
                    <Icon name="plus" size={24} />
                    <Icon name="search" size={24} />
                    <Icon name="configure" size={24} />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-[#15172B] font-primary">Communication</h4>
                  <div className="flex gap-3">
                    <Icon name="chat" size={24} />
                    <Icon name="conference" size={24} />
                    <Icon name="message" size={24} />
                    <Icon name="video" size={24} />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-[#15172B] font-primary">Business</h4>
                  <div className="flex gap-3">
                    <Icon name="analytics" size={24} />
                    <Icon name="document" size={24} />
                    <Icon name="wallet" size={24} />
                    <Icon name="users" size={24} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Form Components */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="document" size={20} />
                Enhanced Form Controls
              </CardTitle>
              <CardDescription>
                Enterprise-grade form components with consistent validation and accessibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Company Name"
                  placeholder="Enter your company name"
                  leftIcon="users"
                  hintText="This will appear on your account dashboard"
                />
                
                <SelectWrapper
                  label="Business Type"
                  placeholder="Select business type"
                  hintText="Choose the category that best describes your business"
                >
                  <SelectItem value="small">Small Business (1-20 employees)</SelectItem>
                  <SelectItem value="medium">Medium Business (21-100 employees)</SelectItem>
                  <SelectItem value="enterprise">Enterprise (100+ employees)</SelectItem>
                </SelectWrapper>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-[#15172B] font-primary">Service Preferences</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Checkbox
                    label="24/7 Priority Support"
                    rightIcon="gethelp"
                    checked={true}
                  />
                  <Checkbox
                    label="Enhanced Security Suite"
                    rightIcon="blockers"
                    checked={false}
                  />
                  <Checkbox
                    label="Business WiFi Pro"
                    rightIcon="wifi"
                    checked={true}
                  />
                  <Checkbox
                    label="Static IP Addresses"
                    rightIcon="internet"
                    checked={false}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Tables & Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="analytics" size={20} />
                Data Tables & Analytics
              </CardTitle>
              <CardDescription>
                Professional data presentation with sorting, filtering, and export capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Monthly Cost</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Internet Pro 100 Mbps</TableCell>
                    <TableCell>123 Business Ave, Philadelphia</TableCell>
                    <TableCell>
                      <Badge variant="success" dot>Online</Badge>
                    </TableCell>
                    <TableCell>$199.99</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Icon name="configure" size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Business Voice Pro</TableCell>
                    <TableCell>123 Business Ave, Philadelphia</TableCell>
                    <TableCell>
                      <Badge variant="success" dot>Active</Badge>
                    </TableCell>
                    <TableCell>$89.99</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Icon name="configure" size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Security Suite</TableCell>
                    <TableCell>All Locations</TableCell>
                    <TableCell>
                      <Badge variant="warning" dot>Updating</Badge>
                    </TableCell>
                    <TableCell>$49.99</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Icon name="configure" size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Tabbed Content */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="folder" size={20} />
                Tabbed Navigation
              </CardTitle>
              <CardDescription>
                Organize complex content with accessible tabbed interfaces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Service Overview</TabsTrigger>
                  <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
                  <TabsTrigger value="billing">Billing History</TabsTrigger>
                  <TabsTrigger value="support">Support Tickets</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card variant="interactive">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Icon name="wifi" size={16} color="#16a34a" />
                          Internet Service
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#70717D]">100 Mbps Business Internet with 99.9% uptime guarantee</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="interactive">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Icon name="conference" size={16} color="#2563eb" />
                          Voice Service  
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#70717D]">Business VoIP with advanced call management features</p>
                      </CardContent>
                    </Card>
                    
                    <Card variant="interactive">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Icon name="blockers" size={16} color="#dc2626" />
                          Security Suite
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#70717D]">Advanced threat protection and firewall management</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="usage" className="space-y-4">
                  <div className="text-center p-8 bg-gray-100 rounded-lg">
                    <Icon name="analytics" size={48} color="#B4B5BB" className="mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-[#15172B] mb-2">Usage Analytics</h3>
                    <p className="text-[#70717D]">Interactive charts and usage reports would be displayed here</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="billing" className="space-y-4">
                  <div className="text-center p-8 bg-gray-100 rounded-lg">
                    <Icon name="wallet" size={48} color="#B4B5BB" className="mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-[#15172B] mb-2">Billing History</h3>
                    <p className="text-[#70717D]">Payment history and invoice management would be displayed here</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="support" className="space-y-4">
                  <div className="text-center p-8 bg-gray-100 rounded-lg">
                    <Icon name="gethelp" size={48} color="#B4B5BB" className="mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-[#15172B] mb-2">Support Center</h3>
                    <p className="text-[#70717D]">Support tickets and help resources would be displayed here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Actions & CTAs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="configure" size={20} />
                Enterprise Actions
              </CardTitle>
              <CardDescription>
                Complete set of button variants and interactive elements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium text-[#15172B] font-primary mb-4">Primary Actions</h4>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="lg">
                    <Icon name="plus" size={16} className="mr-2" />
                    Add New Service
                  </Button>
                  <Button variant="secondary" size="lg">
                    <Icon name="document" size={16} className="mr-2" />
                    Download Report
                  </Button>
                  <Button variant="outline" size="lg">
                    <Icon name="configure" size={16} className="mr-2" />
                    Manage Settings
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-[#15172B] font-primary mb-4">Status Badges</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="success" dot>Service Active</Badge>
                  <Badge variant="warning" dot>Maintenance Scheduled</Badge>
                  <Badge variant="destructive" dot>Service Issue</Badge>
                  <Badge variant="info" dot>Update Available</Badge>
                  <Badge variant="primary">Enterprise Plan</Badge>
                  <Badge variant="outline">Standard Support</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Design Principles Applied */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="check" size={20} />
                Enterprise Design Principles Applied
              </CardTitle>
              <CardDescription>
                Summary of enterprise-grade improvements implemented across all components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="check" size={16} color="#16a34a" className="mt-1" />
                    <div>
                      <h4 className="font-medium text-[#15172B]">Consistent CVA Patterns</h4>
                      <p className="text-sm text-[#70717D]">Class Variance Authority used across all components for maintainable styling</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="check" size={16} color="#16a34a" className="mt-1" />
                    <div>
                      <h4 className="font-medium text-[#15172B]">Brand Color System</h4>
                      <p className="text-sm text-[#70717D]">Comcast Business brand colors applied consistently throughout</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="check" size={16} color="#16a34a" className="mt-1" />
                    <div>
                      <h4 className="font-medium text-[#15172B]">Typography System</h4>
                      <p className="text-sm text-[#70717D]">Montserrat for headings, Lato for body text with proper hierarchy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="check" size={16} color="#16a34a" className="mt-1" />
                    <div>
                      <h4 className="font-medium text-[#15172B]">4px Spacing Grid</h4>
                      <p className="text-sm text-[#70717D]">Consistent spacing system for professional layouts</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="check" size={16} color="#16a34a" className="mt-1" />
                    <div>
                      <h4 className="font-medium text-[#15172B]">Accessibility First</h4>
                      <p className="text-sm text-[#70717D]">WCAG compliance with proper ARIA attributes and focus management</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="check" size={16} color="#16a34a" className="mt-1" />
                    <div>
                      <h4 className="font-medium text-[#15172B]">High-Quality Icons</h4>
                      <p className="text-sm text-[#70717D]">273 optimized SVG icons from Figma with perfect scaling</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="check" size={16} color="#16a34a" className="mt-1" />
                    <div>
                      <h4 className="font-medium text-[#15172B]">TypeScript Support</h4>
                      <p className="text-sm text-[#70717D]">Full type safety with comprehensive interfaces and variants</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Icon name="check" size={16} color="#16a34a" className="mt-1" />
                    <div>
                      <h4 className="font-medium text-[#15172B]">Performance Optimized</h4>
                      <p className="text-sm text-[#70717D]">Tree-shaking, lazy loading, and minimal bundle impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  ),
};

// Component Performance Showcase
export const PerformanceFeatures: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavigation 
        userName="Alex" 
        sectionTitle="PERFORMANCE SHOWCASE" 
        showSearch={true}
        showUserProfile={true}
      />

      <main className="max-w-6xl mx-auto p-6">
        <div className="space-y-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#15172B] font-primary mb-2">
              Performance & Developer Experience
            </h1>
            <p className="text-[#70717D] font-secondary">
              Enterprise-grade performance optimizations and developer tooling
            </p>
          </div>

          {/* Loading States */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="refresh" size={20} />
                Loading States & Skeletons
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input skeleton size="default" />
                <SelectWrapper skeleton size="default" />
                <Checkbox skeleton />
              </div>
            </CardContent>
          </Card>

          {/* Error Handling */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="alert" size={20} />
                Error Handling & Validation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Email Address"
                error={true}
                errorMessage="Please enter a valid email address"
                value="invalid-email"
              />
              <Checkbox
                label="I agree to the terms"
                error={true}
                required={true}
              />
            </CardContent>
          </Card>

          {/* Interactive States */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="configure" size={20} />
                Interactive States Showcase
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-medium text-[#15172B] font-primary">Button States</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-[#15172B] font-primary">Interactive Badges</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge interactive onClick={() => alert('Badge clicked!')}>
                    Clickable Badge
                  </Badge>
                  <Badge variant="primary" dot interactive>
                    Status Badge
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  ),
};