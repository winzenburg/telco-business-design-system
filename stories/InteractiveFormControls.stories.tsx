import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../src/components/ui/button';
import { Checkbox } from '../src/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../src/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../src/components/ui/card';

const meta: Meta = {
  title: 'Interactive Form Controls',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Interactive demonstrations of checkbox and radio button states working together with real user interactions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Interactive States Demo
export const CheckboxStatesDemo: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      emailNotifications: false,
      smsNotifications: true,
      pushNotifications: false,
      marketingEmails: false,
      securityAlerts: true,
      billingReminders: false,
    });

    const [requiredConsent, setRequiredConsent] = useState(false);
    const [loadingStates, setLoadingStates] = useState({
      saving: false,
      loading: false,
    });

    const handlePreferenceChange = (key: string, value: boolean) => {
      setPreferences(prev => ({ ...prev, [key]: value }));
    };

    const handleSave = async () => {
      setLoadingStates(prev => ({ ...prev, saving: true }));
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoadingStates(prev => ({ ...prev, saving: false }));
    };

    const handleLoad = async () => {
      setLoadingStates(prev => ({ ...prev, loading: true }));
      // Simulate loading
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoadingStates(prev => ({ ...prev, loading: false }));
    };

    return (
      <div className="space-y-8 max-w-4xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#15172B] font-primary mb-4">
            Interactive Checkbox States
          </h1>
          <p className="text-[#70717D] font-secondary">
            Interact with checkboxes to see all states in action
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Click checkboxes to change preferences and see states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-medium text-[#15172B] font-primary">Communication</h4>
                <div className="space-y-3">
                  <Checkbox
                    label="Email Notifications"
                    rightIcon="typeoutlinecoloroff"
                    checked={preferences.emailNotifications}
                    onCheckedChange={(checked) => handlePreferenceChange('emailNotifications', !!checked)}
                  />
                  <Checkbox
                    label="SMS Notifications"
                    rightIcon="typeoutlinecoloroff"
                    checked={preferences.smsNotifications}
                    onCheckedChange={(checked) => handlePreferenceChange('smsNotifications', !!checked)}
                  />
                  <Checkbox
                    label="Push Notifications"
                    rightIcon="typeoutlinecoloroff"
                    checked={preferences.pushNotifications}
                    onCheckedChange={(checked) => handlePreferenceChange('pushNotifications', !!checked)}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-[#15172B] font-primary">Marketing</h4>
                <div className="space-y-3">
                  <Checkbox
                    label="Marketing Emails"
                    rightIcon="typeoutlinecoloroff"
                    checked={preferences.marketingEmails}
                    onCheckedChange={(checked) => handlePreferenceChange('marketingEmails', !!checked)}
                  />
                  <Checkbox
                    label="Security Alerts"
                    rightIcon="typeoutlinecoloroff"
                    required
                    checked={preferences.securityAlerts}
                    onCheckedChange={(checked) => handlePreferenceChange('securityAlerts', !!checked)}
                    error={!preferences.securityAlerts}
                  />
                  <Checkbox
                    label="Billing Reminders"
                    rightIcon="typeoutlinecoloroff"
                    disabled
                    checked={preferences.billingReminders}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* State Display */}
          <Card>
            <CardHeader>
              <CardTitle>Current State</CardTitle>
              <CardDescription>
                Live preview of your selections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium">Email Notifications:</span>
                  </div>
                  <div className={preferences.emailNotifications ? "text-green-600" : "text-gray-500"}>
                    {preferences.emailNotifications ? "Enabled" : "Disabled"}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium">SMS Notifications:</span>
                  </div>
                  <div className={preferences.smsNotifications ? "text-green-600" : "text-gray-500"}>
                    {preferences.smsNotifications ? "Enabled" : "Disabled"}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium">Push Notifications:</span>
                  </div>
                  <div className={preferences.pushNotifications ? "text-green-600" : "text-gray-500"}>
                    {preferences.pushNotifications ? "Enabled" : "Disabled"}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium">Marketing Emails:</span>
                  </div>
                  <div className={preferences.marketingEmails ? "text-green-600" : "text-gray-500"}>
                    {preferences.marketingEmails ? "Enabled" : "Disabled"}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium">Security Alerts:</span>
                  </div>
                  <div className={preferences.securityAlerts ? "text-green-600" : "text-red-600"}>
                    {preferences.securityAlerts ? "Enabled (Required)" : "Required!"}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-medium">Billing Reminders:</span>
                  </div>
                  <div className="text-gray-400">
                    Disabled (Admin Only)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Terms and Actions */}
        <Card>
          <CardContent className="space-y-6">
            <div className="border-t pt-6">
              <Checkbox
                label="I agree to save these notification preferences"
                required
                checked={requiredConsent}
                onCheckedChange={(checked) => setRequiredConsent(!!checked)}
                error={!requiredConsent}
              />
            </div>

            {/* Loading States Demo */}
            <div className="space-y-4">
              <h4 className="font-medium text-[#15172B] font-primary">Loading States Demo</h4>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  onClick={handleSave}
                  disabled={!requiredConsent || loadingStates.saving}
                >
                  {loadingStates.saving ? "Saving..." : "Save Preferences"}
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={handleLoad}
                  disabled={loadingStates.loading}
                >
                  {loadingStates.loading ? "Loading..." : "Load Defaults"}
                </Button>
              </div>

              {/* Skeleton Loading Demo */}
              {loadingStates.loading && (
                <div className="space-y-3 pt-4">
                  <p className="text-sm text-[#70717D]">Loading preferences...</p>
                  <div className="space-y-2">
                    <Checkbox label="Loading preference" skeleton />
                    <Checkbox label="Loading preference" skeleton />
                    <Checkbox label="Loading preference" skeleton />
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Visual States Demonstration */}
        <Card>
          <CardHeader>
            <CardTitle>Checkbox Visual States</CardTitle>
            <CardDescription>
              All possible checkbox visual states demonstrated (hover, pressed, focused, etc.)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Default States</h5>
                <div className="space-y-3">
                  <Checkbox label="Default" checkboxState="default" />
                  <Checkbox label="Default Checked" checked checkboxState="default" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Hover States</h5>
                <div className="space-y-3">
                  <Checkbox label="Hover" checkboxState="hover" />
                  <Checkbox label="Hover Checked" checked checkboxState="hover" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Pressed States</h5>
                <div className="space-y-3">
                  <Checkbox label="Pressed" checkboxState="pressed" />
                  <Checkbox label="Pressed Checked" checked checkboxState="pressed" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Focused States</h5>
                <div className="space-y-3">
                  <Checkbox label="Focused" checkboxState="focused" />
                  <Checkbox label="Focused Checked" checked checkboxState="focused" />
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Error States</h5>
                <div className="space-y-3">
                  <Checkbox label="Error" error />
                  <Checkbox label="Error Checked" error checked />
                  <Checkbox label="Required Error" required error />
                </div>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Disabled States</h5>
                <div className="space-y-3">
                  <Checkbox label="Disabled" disabled />
                  <Checkbox label="Disabled Checked" disabled checked />
                  <Checkbox label="Disabled w/ Icon" disabled rightIcon="typeoutlinecoloroff" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Loading States</h5>
                <div className="space-y-3">
                  <Checkbox label="Loading..." skeleton />
                  <Checkbox label="Loading w/ Icon" skeleton rightIcon="typeoutlinecoloroff" />
                  <Checkbox skeleton />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="font-medium text-[#15172B] mb-3">With Icons</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Checkbox label="Analytics Icon" rightIcon="typeoutlinecoloroff" />
                <Checkbox label="Configure Icon" rightIcon="typeoutlinecoloroff" checked />
                <Checkbox label="Device Icon" rightIcon="typeoutlinecoloroff" />
                <Checkbox label="Internet Icon" rightIcon="typeoutlinecoloroff" checked />
                <Checkbox label="Conference Icon" rightIcon="typeoutlinecoloroff" />
                <Checkbox label="Document Icon" rightIcon="typeoutlinecoloroff" checked />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Interactive Radio Button Demo
export const RadioButtonStatesDemo: Story = {
  render: () => {
    const [businessType, setBusinessType] = useState('');
    const [serviceLevel, setServiceLevel] = useState('standard');
    const [contractLength, setContractLength] = useState('');
    const [billingCycle, setBillingCycle] = useState('monthly');

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setLoading(false);
      setFormSubmitted(true);
    };

    const resetForm = () => {
      setBusinessType('');
      setServiceLevel('standard');
      setContractLength('');
      setBillingCycle('monthly');
      setFormSubmitted(false);
    };

    const isFormValid = businessType && serviceLevel && contractLength && billingCycle;

    return (
      <div className="space-y-8 max-w-4xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#15172B] font-primary mb-4">
            Interactive Radio Button States
          </h1>
          <p className="text-[#70717D] font-secondary">
            Select options to see radio button states and form validation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Form */}
          <Card>
            <CardHeader>
              <CardTitle>Service Configuration</CardTitle>
              <CardDescription>
                Select your preferences to configure services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Business Type - Required */}
              <div>
                <h4 className="font-medium text-[#15172B] font-primary mb-4 flex items-center gap-1">
                  Business Type
                  <span className="text-[#424454]">*</span>
                  {!businessType && <span className="text-[#D11314] text-sm ml-2">(Required)</span>}
                </h4>
                <RadioGroup value={businessType} onValueChange={setBusinessType}>
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

              {/* Service Level */}
              <div>
                <h4 className="font-medium text-[#15172B] font-primary mb-4">Service Level</h4>
                <RadioGroup value={serviceLevel} onValueChange={setServiceLevel}>
                  <div className="space-y-3">
                    <RadioGroupItem 
                      value="basic"
                      label="Basic Support (Business Hours)"
                    />
                    <RadioGroupItem 
                      value="standard"
                      label="Standard Support (24/7)"
                    />
                    <RadioGroupItem 
                      value="premium"
                      label="Premium Support (Priority + SLA)"
                    />
                    <RadioGroupItem 
                      value="enterprise"
                      label="Enterprise Support (Dedicated Rep)"
                      disabled
                    />
                  </div>
                </RadioGroup>
              </div>

              {/* Contract Length - Required */}
              <div>
                <h4 className="font-medium text-[#15172B] font-primary mb-4 flex items-center gap-1">
                  Contract Length
                  <span className="text-[#424454]">*</span>
                  {!contractLength && <span className="text-[#D11314] text-sm ml-2">(Required)</span>}
                </h4>
                <RadioGroup value={contractLength} onValueChange={setContractLength}>
                  <div className="space-y-3">
                    <RadioGroupItem 
                      value="12"
                      label="12 Months (Standard Rate)"
                    />
                    <RadioGroupItem 
                      value="24"
                      label="24 Months (5% Discount)"
                    />
                    <RadioGroupItem 
                      value="36"
                      label="36 Months (10% Discount)"
                    />
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Configuration Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Configuration Summary</CardTitle>
              <CardDescription>
                Your current selections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <span className="font-medium">Business Type:</span>
                    <span className={businessType ? "text-[#15172B]" : "text-[#D11314]"}>
                      {businessType ? 
                        businessType.charAt(0).toUpperCase() + businessType.slice(1) : 
                        "Not Selected"
                      }
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <span className="font-medium">Service Level:</span>
                    <span className="text-[#15172B]">
                      {serviceLevel.charAt(0).toUpperCase() + serviceLevel.slice(1)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <span className="font-medium">Contract:</span>
                    <span className={contractLength ? "text-[#15172B]" : "text-[#D11314]"}>
                      {contractLength ? `${contractLength} Months` : "Not Selected"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <span className="font-medium">Billing:</span>
                    <span className="text-[#15172B]">
                      {billingCycle.charAt(0).toUpperCase() + billingCycle.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Estimated Pricing */}
                {isFormValid && (
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-800 mb-2">Estimated Monthly Cost</h5>
                    <div className="text-2xl font-bold text-green-700">
                      ${(() => {
                        let base = 299;
                        if (businessType === 'medium') base += 200;
                        if (businessType === 'enterprise') base += 500;
                        if (serviceLevel === 'standard') base += 50;
                        if (serviceLevel === 'premium') base += 150;
                        if (contractLength === '24') base *= 0.95;
                        if (contractLength === '36') base *= 0.90;
                        return Math.round(base);
                      })()}
                    </div>
                    <div className="text-sm text-green-600 mt-1">
                      {contractLength === '24' && '5% discount applied'}
                      {contractLength === '36' && '10% discount applied'}
                    </div>
                  </div>
                )}

                {/* Form Validation */}
                {!isFormValid && (
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h5 className="font-medium text-red-800 mb-2">Required Fields Missing</h5>
                    <ul className="text-sm text-red-600 space-y-1">
                      {!businessType && <li>• Please select your business type</li>}
                      {!contractLength && <li>• Please choose a contract length</li>}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Billing Cycle */}
        <Card>
          <CardHeader>
            <CardTitle>Billing Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={billingCycle} onValueChange={setBillingCycle}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RadioGroupItem 
                  value="monthly"
                  label="Monthly Billing"
                />
                <RadioGroupItem 
                  value="quarterly"
                  label="Quarterly Billing (2% Discount)"
                />
                <RadioGroupItem 
                  value="annual"
                  label="Annual Billing (5% Discount)"
                />
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Actions */}
        <Card>
          <CardContent className="space-y-4">
            <div className="flex gap-4 pt-4">
              <Button 
                variant="outline" 
                onClick={resetForm}
                disabled={loading}
              >
                Reset Form
              </Button>
              <Button 
                variant="primary" 
                onClick={handleSubmit}
                disabled={!isFormValid || loading}
              >
                {loading ? "Processing..." : "Submit Configuration"}
              </Button>
            </div>

            {formSubmitted && !loading && (
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-800">Configuration Submitted!</h5>
                <p className="text-sm text-green-600 mt-1">
                  Your service configuration has been submitted for review.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Radio Button Visual States */}
        <Card>
          <CardHeader>
            <CardTitle>Radio Button Visual States</CardTitle>
            <CardDescription>
              All possible radio button visual states demonstrated (hover, pressed, focused, etc.)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Default States</h5>
                <RadioGroup value="default2">
                  <div className="space-y-3">
                    <RadioGroupItem value="default1" label="Default" radioState="default" />
                    <RadioGroupItem value="default2" label="Default Selected" radioState="default" />
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Hover States</h5>
                <RadioGroup value="hover2">
                  <div className="space-y-3">
                    <RadioGroupItem value="hover1" label="Hover" radioState="hover" />
                    <RadioGroupItem value="hover2" label="Hover Selected" radioState="hover" />
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Pressed States</h5>
                <RadioGroup value="pressed2">
                  <div className="space-y-3">
                    <RadioGroupItem value="pressed1" label="Pressed" radioState="pressed" />
                    <RadioGroupItem value="pressed2" label="Pressed Selected" radioState="pressed" />
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Focused States</h5>
                <RadioGroup value="focused2">
                  <div className="space-y-3">
                    <RadioGroupItem value="focused1" label="Focused" radioState="focused" />
                    <RadioGroupItem value="focused2" label="Focused Selected" radioState="focused" />
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Error States</h5>
                <RadioGroup value="error2">
                  <div className="space-y-3">
                    <RadioGroupItem value="error1" label="Error" error />
                    <RadioGroupItem value="error2" label="Error Selected" error />
                    <RadioGroupItem value="error3" label="Required Error" required error />
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Disabled States</h5>
                <RadioGroup value="disabled2">
                  <div className="space-y-3">
                    <RadioGroupItem value="disabled1" label="Disabled" disabled />
                    <RadioGroupItem value="disabled2" label="Disabled Selected" disabled />
                    <RadioGroupItem value="disabled3" label="Disabled Required" disabled required />
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-medium text-[#15172B]">Functional Group</h5>
                <RadioGroup value="group2">
                  <div className="space-y-2">
                    <RadioGroupItem value="group1" label="Option A" />
                    <RadioGroupItem value="group2" label="Option B (Selected)" />
                    <RadioGroupItem value="group3" label="Option C" />
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Combined Form Demo
export const CombinedFormDemo: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      // Checkboxes
      emailNotifications: true,
      smsAlerts: false,
      marketingOptIn: false,
      termsAccepted: false,
      
      // Radio buttons
      accountType: '',
      billingFrequency: 'monthly',
      supportLevel: 'standard',
    });

    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
      const newErrors: Record<string, boolean> = {};
      
      if (!formData.accountType) newErrors.accountType = true;
      if (!formData.termsAccepted) newErrors.termsAccepted = true;
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
      if (!validateForm()) return;
      
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setSubmitted(true);
    };

    const resetForm = () => {
      setFormData({
        emailNotifications: true,
        smsAlerts: false,
        marketingOptIn: false,
        termsAccepted: false,
        accountType: '',
        billingFrequency: 'monthly',
        supportLevel: 'standard',
      });
      setErrors({});
      setSubmitted(false);
    };

    return (
      <div className="space-y-8 max-w-4xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#15172B] font-primary mb-4">
            Complete Form Interactions
          </h1>
          <p className="text-[#70717D] font-secondary">
            Combined checkbox and radio button interactions with validation
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Account Setup Form</CardTitle>
            <CardDescription>
              Complete form demonstrating all form control states working together
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Account Type - Radio Group */}
            <div>
              <h4 className="font-medium text-[#15172B] font-primary mb-4 flex items-center gap-2">
                Account Type
                <span className="text-[#424454]">*</span>
                {errors.accountType && <span className="text-[#D11314] text-sm">(Required)</span>}
              </h4>
              <RadioGroup 
                value={formData.accountType} 
                onValueChange={(value) => setFormData(prev => ({...prev, accountType: value}))}
              >
                <div className="space-y-3">
                  <RadioGroupItem value="personal" label="Personal Account" />
                  <RadioGroupItem value="business" label="Business Account" />
                  <RadioGroupItem value="enterprise" label="Enterprise Account" />
                </div>
              </RadioGroup>
            </div>

            {/* Notification Preferences - Checkboxes */}
            <div>
              <h4 className="font-medium text-[#15172B] font-primary mb-4">Notification Preferences</h4>
              <div className="space-y-3">
                <Checkbox
                  label="Email Notifications"
                  rightIcon="typeoutlinecoloroff"
                  checked={formData.emailNotifications}
                  onCheckedChange={(checked) => setFormData(prev => ({...prev, emailNotifications: !!checked}))}
                />
                <Checkbox
                  label="SMS Alerts"
                  rightIcon="typeoutlinecoloroff"
                  checked={formData.smsAlerts}
                  onCheckedChange={(checked) => setFormData(prev => ({...prev, smsAlerts: !!checked}))}
                />
                <Checkbox
                  label="Marketing Communications"
                  rightIcon="typeoutlinecoloroff"
                  checked={formData.marketingOptIn}
                  onCheckedChange={(checked) => setFormData(prev => ({...prev, marketingOptIn: !!checked}))}
                />
              </div>
            </div>

            {/* Billing Frequency - Radio Group */}
            <div>
              <h4 className="font-medium text-[#15172B] font-primary mb-4">Billing Frequency</h4>
              <RadioGroup 
                value={formData.billingFrequency} 
                onValueChange={(value) => setFormData(prev => ({...prev, billingFrequency: value}))}
              >
                <div className="space-y-3">
                  <RadioGroupItem value="monthly" label="Monthly ($29/month)" />
                  <RadioGroupItem value="quarterly" label="Quarterly ($25/month - Save 14%)" />
                  <RadioGroupItem value="annual" label="Annual ($20/month - Save 31%)" />
                </div>
              </RadioGroup>
            </div>

            {/* Support Level - Radio Group */}
            <div>
              <h4 className="font-medium text-[#15172B] font-primary mb-4">Support Level</h4>
              <RadioGroup 
                value={formData.supportLevel} 
                onValueChange={(value) => setFormData(prev => ({...prev, supportLevel: value}))}
              >
                <div className="space-y-3">
                  <RadioGroupItem value="basic" label="Basic Support (Email only)" />
                  <RadioGroupItem value="standard" label="Standard Support (Email + Chat)" />
                  <RadioGroupItem value="premium" label="Premium Support (Email + Chat + Phone)" />
                </div>
              </RadioGroup>
            </div>

            {/* Terms Agreement - Required Checkbox */}
            <div className="border-t pt-6">
              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                required
                checked={formData.termsAccepted}
                onCheckedChange={(checked) => setFormData(prev => ({...prev, termsAccepted: !!checked}))}
                error={errors.termsAccepted}
              />
            </div>

            {/* Form Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium text-[#15172B] mb-3">Form Summary</h5>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[#70717D]">Account Type:</span>
                  <div className={formData.accountType ? "text-[#15172B] font-medium" : "text-[#D11314]"}>
                    {formData.accountType || "Not Selected"}
                  </div>
                </div>
                <div>
                  <span className="text-[#70717D]">Billing:</span>
                  <div className="text-[#15172B] font-medium">
                    {formData.billingFrequency}
                  </div>
                </div>
                <div>
                  <span className="text-[#70717D]">Support:</span>
                  <div className="text-[#15172B] font-medium">
                    {formData.supportLevel}
                  </div>
                </div>
                <div>
                  <span className="text-[#70717D]">Terms:</span>
                  <div className={formData.termsAccepted ? "text-green-600" : "text-[#D11314]"}>
                    {formData.termsAccepted ? "Accepted" : "Required"}
                  </div>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t">
                <div className="text-sm text-[#70717D]">Active Notifications:</div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {formData.emailNotifications && (
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Email</span>
                  )}
                  {formData.smsAlerts && (
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">SMS</span>
                  )}
                  {formData.marketingOptIn && (
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Marketing</span>
                  )}
                  {!formData.emailNotifications && !formData.smsAlerts && !formData.marketingOptIn && (
                    <span className="text-[#70717D] text-xs">None selected</span>
                  )}
                </div>
              </div>
            </div>

            {/* Loading Demo */}
            {isSubmitting && (
              <div className="space-y-4">
                <p className="text-[#70717D] text-sm">Processing your account setup...</p>
                <div className="space-y-2">
                  <Checkbox label="Creating account..." skeleton />
                  <Checkbox label="Setting up notifications..." skeleton />
                  <Checkbox label="Configuring billing..." skeleton />
                </div>
              </div>
            )}

            {/* Success Message */}
            {submitted && !isSubmitting && (
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h5 className="font-medium text-green-800">Account Created Successfully!</h5>
                <p className="text-sm text-green-600 mt-1">
                  Your account has been set up with your selected preferences.
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button 
                variant="outline" 
                onClick={resetForm}
                disabled={isSubmitting}
              >
                Reset Form
              </Button>
              <Button 
                variant="primary" 
                onClick={handleSubmit}
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};