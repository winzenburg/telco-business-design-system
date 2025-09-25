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
} from '../../src/components';
import { ArrowRight, Check, User, Mail, Building, CreditCard } from 'lucide-react';

const meta: Meta = {
  title: 'Workflows/User Onboarding',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A complete user onboarding flow demonstrating form progression, validation, and feedback using the design system components.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const OnboardingFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    accountType: 'standard',
    agreedToTerms: false,
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress Bar */}
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Comcast Business</CardTitle>
          <CardDescription>
            Step {step} of {totalSteps}: {
              step === 1 ? 'Personal Information' :
              step === 2 ? 'Company Details' :
              step === 3 ? 'Account Setup' :
              'Review & Confirm'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="w-full" />
        </CardContent>
      </Card>

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
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john.doe@company.com"
                />
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
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Corporation"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Your Role</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                  <SelectTrigger id="role">
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
            <OnboardingFlow />
          </TabsContent>
          <TabsContent value="business" className="space-y-4">
            <Alert>
              <AlertDescription>
                Business accounts include team management and advanced features
              </AlertDescription>
            </Alert>
            <OnboardingFlow />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  ),
};