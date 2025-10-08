import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Progress,
  Badge,
  Alert,
  AlertDescription,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Combobox,
  DatePicker,
  Textarea,
} from '../../src/components';
import { Stepper } from '../../src/components/patterns/Stepper';
import { ArrowRight, Check, User, Mail, Building, CreditCard, AlertCircle } from 'lucide-react';

const meta: Meta = {
  title: 'Workflows/User Onboarding',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A complete user onboarding flow showcasing the Stepper pattern component for multi-step progression, form validation, and user feedback. Demonstrates guided workflow patterns with progress tracking.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// US states for Combobox
const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

// Industry options
const INDUSTRIES = [
  { value: 'technology', label: 'Technology' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'finance', label: 'Finance & Banking' },
  { value: 'retail', label: 'Retail & E-commerce' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'education', label: 'Education' },
  { value: 'hospitality', label: 'Hospitality & Tourism' },
  { value: 'real_estate', label: 'Real Estate' },
  { value: 'transportation', label: 'Transportation & Logistics' },
  { value: 'other', label: 'Other' },
];

// Company size options
const COMPANY_SIZES = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '501-1000', label: '501-1000 employees' },
  { value: '1000+', label: '1000+ employees' },
];

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  industry?: string;
  companySize?: string;
  state?: string;
  role?: string;
  startDate?: string;
  goals?: string;
}

interface OnboardingFlowProps {
  showErrors?: boolean;
}

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ showErrors = false }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    companySize: '',
    state: '',
    role: '',
    accountType: 'standard',
    startDate: undefined as Date | undefined,
    goals: '',
    agreedToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: FormErrors = {};

    if (stepNumber === 1) {
      // Personal information validation
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Valid email is required';
      }
      if (!formData.phone || !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Valid 10-digit phone number is required';
      }
    }

    if (stepNumber === 2) {
      // Company details validation
      if (!formData.company.trim()) {
        newErrors.company = 'Company name is required';
      }
      if (!formData.industry) {
        newErrors.industry = 'Industry is required';
      }
      if (!formData.companySize) {
        newErrors.companySize = 'Company size is required';
      }
      if (!formData.state) {
        newErrors.state = 'State is required';
      }
      if (!formData.role) {
        newErrors.role = 'Your role is required';
      }
    }

    if (stepNumber === 3) {
      // Account setup validation
      if (!formData.startDate) {
        newErrors.startDate = 'Preferred start date is required';
      }
      if (!formData.goals || formData.goals.trim().length < 20) {
        newErrors.goals = 'Please describe your goals (at least 20 characters)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (showErrors && !validateStep(step)) {
      return;
    }
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  // Define steps for Stepper pattern component
  const steps = [
    {
      label: 'Personal Information',
      description: 'Your contact details',
      status: step > 1 ? ('completed' as const) : step === 1 ? ('in-progress' as const) : ('not-started' as const),
    },
    {
      label: 'Company Details',
      description: 'About your organization',
      status: step > 2 ? ('completed' as const) : step === 2 ? ('in-progress' as const) : ('not-started' as const),
    },
    {
      label: 'Account Setup',
      description: 'Configure your account',
      status: step > 3 ? ('completed' as const) : step === 3 ? ('in-progress' as const) : ('not-started' as const),
    },
    {
      label: 'Review & Confirm',
      description: 'Finalize your setup',
      status: step > 4 ? ('completed' as const) : step === 4 ? ('in-progress' as const) : ('not-started' as const),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome to Comcast Business</h1>
        <p className="text-[var(--ds-color-text-muted)] mt-2">
          Let's get you set up in just a few steps
        </p>
      </div>

      {/* Stepper Pattern Component */}
      <Stepper steps={steps} orientation="horizontal" />

      {/* Step Content */}
      <Card>
        <CardContent className="pt-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-[var(--ds-color-intent-primary)]" />
                <h3 className="text-lg font-semibold">Personal Information</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => {
                      setFormData({ ...formData, firstName: e.target.value });
                      if (errors.firstName) setErrors({ ...errors, firstName: undefined });
                    }}
                    placeholder="John"
                    error={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => {
                      setFormData({ ...formData, lastName: e.target.value });
                      if (errors.lastName) setErrors({ ...errors, lastName: undefined });
                    }}
                    placeholder="Doe"
                    error={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="john.doe@company.com"
                  error={!!errors.email}
                />
                {errors.email && (
                  <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="(555) 123-4567"
                  error={!!errors.phone}
                />
                {errors.phone && (
                  <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Building className="h-5 w-5 text-[var(--ds-color-intent-primary)]" />
                <h3 className="text-lg font-semibold">Company Details</h3>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => {
                    setFormData({ ...formData, company: e.target.value });
                    if (errors.company) setErrors({ ...errors, company: undefined });
                  }}
                  placeholder="Acme Corporation"
                  error={!!errors.company}
                />
                {errors.company && (
                  <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.company}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Combobox
                    options={INDUSTRIES}
                    value={formData.industry}
                    onValueChange={(value) => {
                      setFormData({ ...formData, industry: value });
                      if (errors.industry) setErrors({ ...errors, industry: undefined });
                    }}
                    placeholder="Select industry"
                    searchPlaceholder="Search industries..."
                    error={!!errors.industry}
                    width="w-full"
                  />
                  {errors.industry && (
                    <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.industry}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size *</Label>
                  <Combobox
                    options={COMPANY_SIZES}
                    value={formData.companySize}
                    onValueChange={(value) => {
                      setFormData({ ...formData, companySize: value });
                      if (errors.companySize) setErrors({ ...errors, companySize: undefined });
                    }}
                    placeholder="Select size"
                    searchPlaceholder="Search sizes..."
                    error={!!errors.companySize}
                    width="w-full"
                  />
                  {errors.companySize && (
                    <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.companySize}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Combobox
                  options={US_STATES}
                  value={formData.state}
                  onValueChange={(value) => {
                    setFormData({ ...formData, state: value });
                    if (errors.state) setErrors({ ...errors, state: undefined });
                  }}
                  placeholder="Select state"
                  searchPlaceholder="Search states..."
                  error={!!errors.state}
                  width="w-full"
                />
                {errors.state && (
                  <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.state}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Your Role *</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => {
                    setFormData({ ...formData, role: value });
                    if (errors.role) setErrors({ ...errors, role: undefined });
                  }}
                >
                  <SelectTrigger id="role" error={!!errors.role}>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">Business Owner</SelectItem>
                    <SelectItem value="it_manager">IT Manager</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.role && (
                  <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.role}
                  </p>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-5 w-5 text-[var(--ds-color-intent-primary)]" />
                <h3 className="text-lg font-semibold">Account Setup</h3>
              </div>
              <div className="space-y-4">
                <Label>Select Account Type</Label>
                <RadioGroup
                  value={formData.accountType}
                  onValueChange={(value) => setFormData({ ...formData, accountType: value })}
                >
                  <Card className="p-4">
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="standard" id="standard" />
                      <div className="flex-1">
                        <Label htmlFor="standard" className="font-semibold">
                          Standard Plan
                        </Label>
                        <p className="text-sm text-[var(--ds-color-text-muted)] mt-1">
                          Perfect for small teams (up to 10 users)
                        </p>
                        <Badge variant="secondary" className="mt-2">$49/month</Badge>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="professional" id="professional" />
                      <div className="flex-1">
                        <Label htmlFor="professional" className="font-semibold">
                          Professional Plan
                        </Label>
                        <p className="text-sm text-[var(--ds-color-text-muted)] mt-1">
                          For growing businesses (up to 50 users)
                        </p>
                        <Badge variant="default" className="mt-2">$149/month</Badge>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="enterprise" id="enterprise" />
                      <div className="flex-1">
                        <Label htmlFor="enterprise" className="font-semibold">
                          Enterprise Plan
                        </Label>
                        <p className="text-sm text-[var(--ds-color-text-muted)] mt-1">
                          Unlimited users with advanced features
                        </p>
                        <Badge variant="secondary" className="mt-2">Custom pricing</Badge>
                      </div>
                    </div>
                  </Card>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Preferred Start Date *</Label>
                <DatePicker
                  date={formData.startDate}
                  onDateChange={(date) => {
                    setFormData({ ...formData, startDate: date });
                    if (errors.startDate) setErrors({ ...errors, startDate: undefined });
                  }}
                  placeholder="Select a start date"
                />
                {errors.startDate && (
                  <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.startDate}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="goals">What are your goals? *</Label>
                <Textarea
                  id="goals"
                  placeholder="Tell us about your business goals and how we can help..."
                  value={formData.goals}
                  onChange={(e) => {
                    setFormData({ ...formData, goals: e.target.value });
                    if (errors.goals) setErrors({ ...errors, goals: undefined });
                  }}
                  rows={5}
                />
                <div className="flex justify-between items-center">
                  {errors.goals ? (
                    <p className="text-sm text-[var(--ds-color-intent-destructive)] flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.goals}
                    </p>
                  ) : (
                    <p className="text-xs text-[var(--ds-color-text-muted)]">
                      {formData.goals.length}/500 characters (minimum 20)
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Check className="h-5 w-5 text-[var(--ds-color-intent-success)]" />
                <h3 className="text-lg font-semibold">Review & Confirm</h3>
              </div>
              <Alert>
                <AlertDescription>
                  Please review your information before completing registration.
                </AlertDescription>
              </Alert>
              <div className="space-y-3 mt-4">
                <div className="flex justify-between py-2 border-b border-[var(--ds-color-neutral-300)]">
                  <span className="text-[var(--ds-color-text-muted)]">Name</span>
                  <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--ds-color-neutral-300)]">
                  <span className="text-[var(--ds-color-text-muted)]">Email</span>
                  <span className="font-medium">{formData.email || 'Not provided'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--ds-color-neutral-300)]">
                  <span className="text-[var(--ds-color-text-muted)]">Company</span>
                  <span className="font-medium">{formData.company || 'Not provided'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--ds-color-neutral-300)]">
                  <span className="text-[var(--ds-color-text-muted)]">Account Type</span>
                  <span className="font-medium capitalize">{formData.accountType}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-6">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: checked as boolean })}
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={step === 1}
          >
            Previous
          </Button>
          {step < totalSteps ? (
            <Button onClick={handleNext} variant="primary">
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant="primary"
              disabled={!formData.agreedToTerms}
              onClick={() => alert('Registration completed!')}
            >
              Complete Registration
              <Check className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export const Default: Story = {
  render: () => <OnboardingFlow />,
};

export const WithValidationErrors: Story = {
  render: () => <OnboardingFlow showErrors={true} />,
};

export const WithTabs: Story = {
  render: () => (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Account Setup</CardTitle>
        <CardDescription>Choose your onboarding path</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="individual">Individual</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
          </TabsList>
          <TabsContent value="individual" className="space-y-4">
            <Alert>
              <AlertDescription>
                Set up your personal account in just 3 easy steps
              </AlertDescription>
            </Alert>
            <OnboardingFlow showErrors={false} />
          </TabsContent>
          <TabsContent value="business" className="space-y-4">
            <Alert>
              <AlertDescription>
                Business accounts include team management and advanced features
              </AlertDescription>
            </Alert>
            <OnboardingFlow showErrors={false} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  ),
};