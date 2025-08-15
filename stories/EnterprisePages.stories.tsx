import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../src/components/ui/button';
import { Input } from '../src/components/ui/input';
import { Checkbox } from '../src/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../src/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/ui/card';
import { Icon } from '../src/components/Icon';
import { GlobalNavigation } from '../src/components/GlobalNavigation';

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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#70717D]">Active Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#15172B]">12</div>
              <div className="flex items-center gap-1 mt-1">
                <Icon name="internet" className="size-4 text-green-600" />
                <span className="text-sm text-green-600 font-medium">All Online</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#70717D]">Monthly Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#15172B]">$2,847</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-sm text-[#70717D]">+$47 from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#70717D]">Open Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#15172B]">3</div>
              <div className="flex items-center gap-1 mt-1">
                <Icon name="alert" className="size-4 text-orange-500" />
                <span className="text-sm text-orange-500 font-medium">1 High Priority</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#70717D]">Bandwidth Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#15172B]">73%</div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-sm text-[#70717D]">847 GB of 1.2 TB</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#15172B]">Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Icon name="configure" className="size-4 mr-3" />
                Manage Services
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="document" className="size-4 mr-3" />
                View Latest Bill
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="gethelp" className="size-4 mr-3" />
                Contact Support
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="analytics" className="size-4 mr-3" />
                Usage Reports
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-[#15172B]">Recent Activity</CardTitle>
              <CardDescription>Latest updates and changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Icon name="configure" className="size-4 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#15172B]">Service Configuration Updated</p>
                    <p className="text-sm text-[#70717D]">Internet Pro plan settings modified</p>
                    <p className="text-xs text-[#70717D] mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <Icon name="internet" className="size-4 text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#15172B]">Payment Processed</p>
                    <p className="text-sm text-[#70717D]">Monthly bill payment of $2,800</p>
                    <p className="text-xs text-[#70717D] mt-1">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <Icon name="alert" className="size-4 text-yellow-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#15172B]">Maintenance Scheduled</p>
                    <p className="text-sm text-[#70717D]">Network maintenance on Sunday 2-4 AM</p>
                    <p className="text-xs text-[#70717D] mt-1">3 days ago</p>
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
                  <Icon name="configure" className="size-5" />
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
                  <Icon name="internet" className="size-5" />
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
                  <Icon name="device" className="size-5" />
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
                  <Icon name="configure" className="size-5" />
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
          {/* Service Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Current Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="internet" className="size-5 text-green-600" />
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

              {/* Usage Chart Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Bandwidth Usage (Last 30 Days)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-[#70717D]">
                      <Icon name="analytics" className="size-12 mx-auto mb-2 text-[#B4B5BB]" />
                      <p className="font-medium">Usage Chart</p>
                      <p className="text-sm">Chart visualization would appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Events */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Service Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <Icon name="internet" className="size-4 text-green-600 mt-1" />
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
                      <Icon name="configure" className="size-4 text-blue-600 mt-1" />
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
                      <Icon name="analytics" className="size-4 text-gray-600 mt-1" />
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
              {/* Service Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Service Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-[#70717D]">Plan</label>
                    <p className="text-[#15172B] font-medium">Internet Pro 100 Mbps</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#70717D]">Service Address</label>
                    <p className="text-[#15172B]">123 Business Ave<br/>Philadelphia, PA 19103</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#70717D]">Account Manager</label>
                    <p className="text-[#15172B]">Sarah Johnson</p>
                    <p className="text-[#70717D] text-sm">sarah.johnson@comcast.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#70717D]">Contract End</label>
                    <p className="text-[#15172B]">December 15, 2024</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="gethelp" className="size-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="document" className="size-4 mr-2" />
                    Download Reports
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="configure" className="size-4 mr-2" />
                    Manage Settings
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Icon name="analytics" className="size-4 mr-2" />
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
                    <Icon name="gethelp" className="size-4 mr-2" />
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