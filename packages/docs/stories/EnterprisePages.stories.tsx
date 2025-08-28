import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Checkbox } from '../../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectWrapper } from '../../components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert';
import { Badge } from '../../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Form, FormField, FormLabel, FormMessage } from '../../components/ui/form';
import { Icon } from '../../icons/src/Icon';
import { GlobalNavigation } from '../../components/src/GlobalNavigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../components/ui/breadcrumb';
import { Calendar } from '../../components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../components/ui/dropdown-menu';
import { Progress } from '../../components/ui/progress';
import { Separator } from '../../components/ui/separator';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../components/ui/sheet';
import { Skeleton } from '../../components/ui/skeleton';
import { Slider } from '../../components/ui/slider';
import { Switch } from '../../components/ui/switch';
import { Textarea } from '../../components/ui/textarea';
import { Toast } from '../../components/ui/toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { Typography, Title, Body, Label, Code } from '../../components/ui/typography';
import { Label as InputLabel } from '../../components/ui/label';
import { UnifiedChart } from '../../components/ui/unified-chart';

const meta: Meta = {
  title: 'Enterprise Reference Pages',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Reference enterprise pages showing how Comcast Business Design System components work together in realistic business contexts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Dashboard Page
export const Dashboard: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      {/* Global Navigation */}
      <GlobalNavigation 
        userName="David" 
        sectionTitle="DASHBOARD" 
        showSearch={true}
        showUserProfile={true}
      />

      {/* Main Content */}
      <main className="p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#15172B] font-primary mb-2">
            Account Dashboard
          </h1>
          <p className="text-[#70717D] font-secondary">
            Overview of your Comcast Business services and account status
          </p>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-[#70717D] hover:text-[#15172B]">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-[#70717D] hover:text-[#15172B]">
                  Account
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#15172B] font-medium">
                  Dashboard
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Stats Grid with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-green-100 text-green-700">
                    <Icon name="wifi" size={16} />
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-sm font-medium text-[#70717D]">Active Services</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#15172B] mb-2">12</div>
              <Progress value={100} className="mb-2" />
              <div className="flex items-center gap-1">
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  All Online
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-blue-100 text-blue-700">
                    <Icon name="money" size={16} />
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-sm font-medium text-[#70717D]">Monthly Cost</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#15172B] mb-2">$2,847</div>
              <Progress value={85} className="mb-2" />
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-orange-600 border-orange-200">
                  +$47 vs last month
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-orange-100 text-orange-700">
                    <Icon name="alert" size={16} />
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-sm font-medium text-[#70717D]">Open Tickets</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#15172B] mb-2">3</div>
              <Progress value={30} className="mb-2" />
              <div className="flex items-center gap-2">
                <Badge variant="destructive" className="text-xs">
                  1 High Priority
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-purple-100 text-purple-700">
                    <Icon name="analytics" size={16} />
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-sm font-medium text-[#70717D]">Bandwidth Usage</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#15172B] mb-2">73%</div>
              <Progress value={73} className="mb-2" />
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  847 GB of 1.2 TB
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabbed Content Section */}
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            {/* Quick Actions & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Quick Actions with Tooltips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#15172B]">Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="configure" size={16} className="mr-3" />
                          Manage Services
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Configure and manage your business services</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="document" size={16} className="mr-3" />
                        View Latest Bill
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Latest Bill - March 2024</DialogTitle>
                        <DialogDescription>
                          Your latest bill details and payment options.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span>Internet Pro Service</span>
                            <span>$1,200.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Voice Services</span>
                            <span>$847.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Additional Features</span>
                            <span>$800.00</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between font-bold">
                            <span>Total Amount</span>
                            <span>$2,847.00</span>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Download PDF</Button>
                        <Button>Pay Now</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="gethelp" size={16} className="mr-3" />
                    Contact Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="analytics" size={16} className="mr-3" />
                    Usage Reports
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activity with Accordion */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[#15172B]">Recent Activity</CardTitle>
                  <CardDescription>Latest updates and changes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-blue-100">
                              <Icon name="configure" size={12} color="#2563eb" />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-[#15172B]">Service Configuration Updated</p>
                            <p className="text-xs text-[#70717D]">2 hours ago</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-9 space-y-2">
                          <p className="text-sm text-[#70717D]">Internet Pro plan settings modified</p>
                          <div className="flex gap-2">
                            <Badge variant="outline">Configuration</Badge>
                            <Badge variant="outline">Internet Pro</Badge>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-green-100">
                              <Icon name="wifi" size={12} color="#16a34a" />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-[#15172B]">Payment Processed</p>
                            <p className="text-xs text-[#70717D]">1 day ago</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-9 space-y-2">
                          <p className="text-sm text-[#70717D]">Monthly bill payment of $2,800</p>
                          <div className="flex gap-2">
                            <Badge variant="secondary">Payment</Badge>
                            <Badge variant="secondary">$2,800</Badge>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-yellow-100">
                              <Icon name="alert" size={12} color="#ca8a04" />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-[#15172B]">Maintenance Scheduled</p>
                            <p className="text-xs text-[#70717D]">3 days ago</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-9 space-y-2">
                          <p className="text-sm text-[#70717D]">Network maintenance on Sunday 2-4 AM</p>
                          <div className="flex gap-2">
                            <Badge variant="outline">Maintenance</Badge>
                            <Badge variant="outline">Sunday 2-4 AM</Badge>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Management</CardTitle>
                <CardDescription>Manage your active business services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Switch defaultChecked />
                      <div>
                        <p className="font-medium">Internet Pro Service</p>
                        <p className="text-sm text-[#70717D]">100 Mbps • Active</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Switch defaultChecked />
                      <div>
                        <p className="font-medium">Business Voice</p>
                        <p className="text-sm text-[#70717D]">20 Lines • Active</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Switch />
                      <div>
                        <p className="font-medium">Security Suite</p>
                        <p className="text-sm text-[#70717D]">Enhanced Protection • Inactive</p>
                      </div>
                    </div>
                    <Badge variant="outline">Available</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Billing Overview</CardTitle>
                <CardDescription>Payment history and upcoming charges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-700">$0.00</div>
                      <div className="text-sm text-green-600">Outstanding Balance</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">$2,847</div>
                      <div className="text-sm text-blue-600">Next Payment Due</div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Recent Payments</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-sm">March 2024</span>
                        <Badge variant="secondary">Paid</Badge>
                        <span className="font-medium">$2,800.00</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-sm">February 2024</span>
                        <Badge variant="secondary">Paid</Badge>
                        <span className="font-medium">$2,753.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  ),
};

// Complex Form Page
export const ComplexForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      businessType: '',
      services: [] as string[],
      bandwidth: '',
      contract: '',
      features: [] as string[],
      priority: false,
      terms: false,
    });

    const handleServiceChange = (service: string, checked: boolean) => {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, service]
          : prev.services.filter(s => s !== service)
      }));
    };

    const handleFeatureChange = (feature: string, checked: boolean) => {
      setFormData(prev => ({
        ...prev,
        features: checked 
          ? [...prev.features, feature]
          : prev.features.filter(f => f !== feature)
      }));
    };

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Global Navigation */}
        <GlobalNavigation 
          userName="David" 
          sectionTitle="NEW SERVICE REQUEST" 
          showSearch={true}
          showUserProfile={true}
        />

        {/* Form Content */}
        <main className="max-w-4xl mx-auto p-6">
          <div className="space-y-8">
            {/* Page Header */}
            <div>
              <h1 className="text-2xl font-bold text-[#15172B] font-primary mb-2">
                Request New Business Services
              </h1>
              <p className="text-[#70717D] font-secondary">
                Complete this form to request new Comcast Business services for your organization
              </p>
            </div>

            {/* Company Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="configure" size={20} />
                  Company Information
                </CardTitle>
                <CardDescription>
                  Basic information about your business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Company Name"
                    required
                    placeholder="Enter company name"
                    leftIcon="configure"
                    value={formData.companyName}
                    onChange={(e) => setFormData(prev => ({...prev, companyName: e.target.value}))}
                  />
                  <Input
                    label="Primary Contact"
                    required
                    placeholder="Contact person name"
                    value={formData.contactName}
                    onChange={(e) => setFormData(prev => ({...prev, contactName: e.target.value}))}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Email Address"
                    required
                    placeholder="business@company.com"
                    leftIcon="analytics"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                    error={formData.email ? !formData.email.includes('@') : false}
                    errorMessage={formData.email && !formData.email.includes('@') ? "Please enter a valid email" : undefined}
                  />
                  <Input
                    label="Phone Number"
                    required
                    placeholder="(555) 123-4567"
                    leftIcon="conference"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Service Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="wifi" size={20} />
                  Service Address
                </CardTitle>
                <CardDescription>
                  Where services will be installed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Input
                  label="Street Address"
                  required
                  placeholder="123 Business Ave"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({...prev, address: e.target.value}))}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Input
                    label="City"
                    required
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData(prev => ({...prev, city: e.target.value}))}
                  />
                  <Input
                    label="State"
                    required
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) => setFormData(prev => ({...prev, state: e.target.value}))}
                  />
                  <Input
                    label="ZIP Code"
                    required
                    placeholder="12345"
                    value={formData.zip}
                    onChange={(e) => setFormData(prev => ({...prev, zip: e.target.value}))}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Service Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="device" size={20} />
                  Requested Services
                </CardTitle>
                <CardDescription>
                  Select the services you need for your business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-[#15172B] font-primary mb-4">Business Internet</h4>
                  <div className="space-y-3">
                    <Checkbox
                      label="Internet Pro (Up to 100 Mbps)"
                      rightIcon="typeoutlinecoloroff"
                      checked={formData.services.includes('internet-pro')}
                      onCheckedChange={(checked) => handleServiceChange('internet-pro', !!checked)}
                    />
                    <Checkbox
                      label="Internet Enterprise (Up to 1 Gbps)"
                      rightIcon="typeoutlinecoloroff"
                      checked={formData.services.includes('internet-enterprise')}
                      onCheckedChange={(checked) => handleServiceChange('internet-enterprise', !!checked)}
                    />
                    <Checkbox
                      label="Dedicated Internet Access"
                      rightIcon="typeoutlinecoloroff"
                      checked={formData.services.includes('dedicated-internet')}
                      onCheckedChange={(checked) => handleServiceChange('dedicated-internet', !!checked)}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-[#15172B] font-primary mb-4">Communication Services</h4>
                  <div className="space-y-3">
                    <Checkbox
                      label="Business Voice (VoIP)"
                      rightIcon="typeoutlinecoloroff"
                      checked={formData.services.includes('voice')}
                      onCheckedChange={(checked) => handleServiceChange('voice', !!checked)}
                    />
                    <Checkbox
                      label="PRI (Primary Rate Interface)"
                      rightIcon="typeoutlinecoloroff"
                      checked={formData.services.includes('pri')}
                      onCheckedChange={(checked) => handleServiceChange('pri', !!checked)}
                    />
                    <Checkbox
                      label="SIP Trunking"
                      rightIcon="typeoutlinecoloroff"
                      checked={formData.services.includes('sip')}
                      onCheckedChange={(checked) => handleServiceChange('sip', !!checked)}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-[#15172B] font-primary mb-4">Business Type</h4>
                  <RadioGroup 
                    value={formData.businessType}
                    onValueChange={(value) => setFormData(prev => ({...prev, businessType: value}))}
                  >
                    <div className="space-y-3">
                      <RadioGroupItem 
                        value="small"
                        label="Small Business (1-20 employees)"
                      />
                      <RadioGroupItem 
                        value="medium"
                        label="Medium Business (21-100 employees)"
                      />
                      <RadioGroupItem 
                        value="enterprise"
                        label="Enterprise (100+ employees)"
                      />
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* Additional Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="configure" size={20} />
                  Additional Features
                </CardTitle>
                <CardDescription>
                  Optional features and service enhancements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Checkbox
                  label="24/7 Priority Technical Support"
                  rightIcon="typeoutlinecoloroff"
                  checked={formData.priority}
                  onCheckedChange={(checked) => setFormData(prev => ({...prev, priority: !!checked}))}
                />
                <Checkbox
                  label="Static IP Addresses"
                  rightIcon="typeoutlinecoloroff"
                  checked={formData.features.includes('static-ip')}
                  onCheckedChange={(checked) => handleFeatureChange('static-ip', !!checked)}
                />
                <Checkbox
                  label="Enhanced Security Suite"
                  rightIcon="typeoutlinecoloroff"
                  checked={formData.features.includes('security')}
                  onCheckedChange={(checked) => handleFeatureChange('security', !!checked)}
                />
                <Checkbox
                  label="Business WiFi Pro"
                  rightIcon="typeoutlinecoloroff"
                  checked={formData.features.includes('wifi-pro')}
                  onCheckedChange={(checked) => handleFeatureChange('wifi-pro', !!checked)}
                />
              </CardContent>
            </Card>

            {/* Terms & Submit */}
            <Card>
              <CardContent className="space-y-6">
                <div className="border-t pt-6">
                  <Checkbox
                    label="I agree to the Terms and Conditions and Service Level Agreement"
                    required
                    checked={formData.terms}
                    onCheckedChange={(checked) => setFormData(prev => ({...prev, terms: !!checked}))}
                    error={!formData.terms}
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button variant="outline" size="lg">
                    Save Draft
                  </Button>
                  <Button 
                    variant="primary" 
                    size="lg"
                    disabled={!formData.terms || !formData.companyName || !formData.email}
                  >
                    Submit Request
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  },
};

// Service Detail Page
export const ServiceDetail: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      {/* Global Navigation */}
      <GlobalNavigation 
        userName="David" 
        sectionTitle="INTERNET PRO - MAIN OFFICE" 
        showSearch={true}
        showUserProfile={true}
      />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="space-y-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="text-[#70717D] hover:text-[#15172B]">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="text-[#70717D] hover:text-[#15172B]">
                    Services
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-[#15172B] font-medium">
                    Internet Pro - Main Office
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Service Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Current Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="wifi" size={20} color="#16a34a" />
                    Service Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-700">99.9%</div>
                      <div className="text-sm text-green-600">Uptime (30 days)</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-700">87 Mbps</div>
                      <div className="text-sm text-blue-600">Current Speed</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-700">1.2 TB</div>
                      <div className="text-sm text-orange-600">Data Used</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-700">15ms</div>
                      <div className="text-sm text-purple-600">Avg Latency</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Tabs for Metrics */}
              <Tabs defaultValue="usage" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="usage">Usage</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="alerts">Alerts</TabsTrigger>
                </TabsList>
                
                <TabsContent value="usage" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="analytics" size={20} />
                        Bandwidth Usage (Last 30 Days)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Current Usage</span>
                          <span className="text-sm text-[#70717D]">847 GB / 1.2 TB</span>
                        </div>
                        <Progress value={73} className="h-3" />
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="text-lg font-bold text-blue-700">234 GB</div>
                            <div className="text-xs text-blue-600">Week 1</div>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="text-lg font-bold text-green-700">198 GB</div>
                            <div className="text-xs text-green-600">Week 2</div>
                          </div>
                          <div className="text-center p-3 bg-orange-50 rounded-lg">
                            <div className="text-lg font-bold text-orange-700">287 GB</div>
                            <div className="text-xs text-orange-600">Week 3</div>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <div className="text-lg font-bold text-purple-700">128 GB</div>
                            <div className="text-xs text-purple-600">Week 4</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="performance" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="speed" size={20} />
                        Performance Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Download Speed</span>
                          <div className="flex items-center gap-2">
                            <Progress value={87} className="w-20" />
                            <span className="text-sm text-[#70717D]">87 Mbps</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Upload Speed</span>
                          <div className="flex items-center gap-2">
                            <Progress value={92} className="w-20" />
                            <span className="text-sm text-[#70717D]">92 Mbps</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Latency</span>
                          <div className="flex items-center gap-2">
                            <Progress value={25} className="w-20" />
                            <span className="text-sm text-[#70717D]">15ms</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="alerts" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="alert" size={20} />
                        Alert Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Usage Threshold Alert</p>
                            <p className="text-sm text-[#70717D]">Notify when usage exceeds 80%</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Performance Alert</p>
                            <p className="text-sm text-[#70717D]">Notify when speed drops below 50%</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Outage Alert</p>
                            <p className="text-sm text-[#70717D]">Notify during service interruptions</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Recent Events */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Service Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <Icon name="wifi" size={16} color="#16a34a" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-[#15172B]">Service Restored</span>
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">RESOLVED</span>
                        </div>
                        <p className="text-sm text-[#70717D] mt-1">
                          Brief connectivity interruption resolved automatically
                        </p>
                        <p className="text-xs text-[#70717D] mt-1">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <Icon name="configure" size={16} color="#2563eb" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-[#15172B]">Configuration Updated</span>
                          <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">COMPLETED</span>
                        </div>
                        <p className="text-sm text-[#70717D] mt-1">
                          Firewall rules updated per support ticket #12345
                        </p>
                        <p className="text-xs text-[#70717D] mt-1">1 day ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <Icon name="analytics" size={16} color="#4b5563" className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-[#15172B]">Monthly Usage Report</span>
                          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">GENERATED</span>
                        </div>
                        <p className="text-sm text-[#70717D] mt-1">
                          Usage report for March 2024 available for download
                        </p>
                        <p className="text-xs text-[#70717D] mt-1">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Service Details with Avatar */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-100 text-blue-700">
                        <Icon name="wifi" size={16} />
                      </AvatarFallback>
                    </Avatar>
                    Service Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-[#70717D]">Plan</label>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-[#15172B] font-medium">Internet Pro 100 Mbps</p>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <label className="text-sm font-medium text-[#70717D]">Service Address</label>
                    <p className="text-[#15172B] mt-1">123 Business Ave<br/>Philadelphia, PA 19103</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <label className="text-sm font-medium text-[#70717D]">Account Manager</label>
                    <div className="flex items-center gap-3 mt-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/api/placeholder/40/40" alt="Sarah Johnson" />
                        <AvatarFallback className="bg-primary-100 text-primary-700">SJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-[#15172B] font-medium">Sarah Johnson</p>
                        <p className="text-[#70717D] text-sm">sarah.johnson@comcast.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <label className="text-sm font-medium text-[#70717D]">Contract End</label>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-[#15172B] font-medium">December 15, 2024</p>
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        9 months left
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions with Dropdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-green-100 text-green-700">
                        <Icon name="configure" size={12} />
                      </AvatarFallback>
                    </Avatar>
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full justify-between">
                        <div className="flex items-center">
                          <Icon name="gethelp" size={16} className="mr-2" />
                          Contact Support
                        </div>
                        <Icon name="chevron" size={12} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      <DropdownMenuLabel>Support Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Icon name="chat" size={16} className="mr-2" />
                        Live Chat
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon name="conference" size={16} className="mr-2" />
                        Phone Support
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Icon name="document" size={16} className="mr-2" />
                        Submit Ticket
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="document" size={16} className="mr-2" />
                    Download Reports
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="configure" size={16} className="mr-2" />
                    Manage Settings
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="analytics" size={16} className="mr-2" />
                    View Analytics
                  </Button>
                </CardContent>
              </Card>

              {/* Support */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#70717D] mb-4">
                    Get 24/7 technical support for your business services
                  </p>
                  <Button variant="primary" size="sm" className="w-full">
                    <Icon name="gethelp" size={16} className="mr-2" />
                    Get Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  ),
};

// Enhanced Admin Dashboard with All Components
export const EnhancedAdminDashboard: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Global Navigation */}
        <GlobalNavigation 
          userName="Admin" 
          sectionTitle="ENTERPRISE DASHBOARD" 
          showSearch={true}
          showUserProfile={true}
        />

        {/* Main Content */}
        <main className="p-6">
          <div className="space-y-8">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <Typography variant="title-l" className="text-[#15172B] mb-2">
                  Enterprise Control Center
                </Typography>
                <Typography variant="body-l" className="text-[#70717D]">
                  Comprehensive dashboard showcasing all design system components
                </Typography>
              </div>
              
              <div className="flex items-center gap-3">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Icon name="refresh" size={16} className="mr-2" />
                        Refresh
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Refresh all dashboard data</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Multi-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left Column - Calendar & Notifications */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-blue-100 text-blue-700">
                          <Icon name="history" size={12} />
                        </AvatarFallback>
                      </Avatar>
                      Calendar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Component Showcase</CardTitle>
                    <CardDescription>All design system components in action</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="controls">
                        <AccordionTrigger>
                          <div className="flex items-center gap-2">
                            <Icon name="configure" size={16} />
                            Interactive Controls
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-4">
                            <div className="space-y-2">
                              <InputLabel>Bandwidth Limit</InputLabel>
                              <Slider defaultValue={[75]} max={100} step={1} className="w-full" />
                            </div>
                            <div className="flex items-center gap-3">
                              <Switch defaultChecked />
                              <InputLabel>Auto-scaling enabled</InputLabel>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>System Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Network</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          Online
                        </Badge>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  },
};