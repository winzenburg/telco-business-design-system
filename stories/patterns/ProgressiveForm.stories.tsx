import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ProgressiveForm, useProgressiveForm, type FormSection } from '../../src/components/patterns/ProgressiveForm';
import { ReviewStep } from '../../src/components/patterns/ReviewStep';
import { Button } from '../../src/components/ui/button';
import { Input } from '../../src/components/ui/input';
import { Label } from '../../src/components/ui/label';
import { Card, CardContent } from '../../src/components/ui/card';
import { Alert, AlertDescription } from '../../src/components/ui/alert';

const meta = {
  title: 'Patterns/Progressive Form',
  component: ProgressiveForm,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Accordion-style progressive disclosure form for complex multi-section data collection. Includes enterprise features: auto-save, navigation guards, conditional sections, and review step.',
      },
    },
  },
} satisfies Meta<typeof ProgressiveForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic progressive form with validation
 */
export const Basic: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      company: '',
      role: '',
    });

    const sections: FormSection[] = [
      {
        id: 'account',
        title: 'Account Credentials',
        description: 'Create your login credentials',
        icon: 'users' as any,
        status: formData.email && formData.password ? 'completed' : 'in-progress',
        validation: {
          isValid: formData.email.includes('@') && formData.password.length >= 8,
          errors:
            !formData.email.includes('@') || formData.password.length < 8
              ? [
                  !formData.email.includes('@') ? 'Please enter a valid email address' : '',
                  formData.password.length < 8 ? 'Password must be at least 8 characters' : '',
                ].filter(Boolean)
              : undefined,
        },
        content: (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>
        ),
      },
      {
        id: 'company',
        title: 'Company Information',
        description: 'Tell us about your organization',
        icon: 'buildingwip' as any,
        status: formData.company ? 'completed' : 'not-started',
        validation: {
          isValid: formData.company.length > 0,
        },
        content: (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                placeholder="Acme Corporation"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Your Role</Label>
              <Input
                id="role"
                placeholder="e.g., Product Manager"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              />
            </div>
          </div>
        ),
      },
      {
        id: 'preferences',
        title: 'Preferences',
        description: 'Customize your experience',
        optional: true,
        status: 'not-started',
        content: (
          <div className="space-y-4">
            <p className="text-sm text-[var(--ds-color-text-secondary)]">
              Notification and privacy settings can be configured here.
            </p>
          </div>
        ),
      },
    ];

    return (
      <div className="max-w-3xl">
        <ProgressiveForm
          sections={sections}
          showProgress
          allowMultiple={false}
          actions={
            <>
              <Button variant="outline">Save & Exit</Button>
              <Button variant="primary">Continue</Button>
            </>
          }
        />
      </div>
    );
  },
};

/**
 * ⭐️ Auto-save & Resume with localStorage persistence
 */
export const WithAutoSave: Story = {
  render: () => {
    const {
      sections,
      expandedSections,
      setExpandedSections,
      formData,
      updateFormData,
      saveProgress,
      clearSavedData,
      isSaving,
      lastSaved,
      hasUnsavedChanges,
      progress,
    } = useProgressiveForm({
      sections: [
        {
          id: 'personal',
          title: 'Personal Information',
          description: 'Basic details about you',
          icon: 'users' as any,
          content: (
            <div className="space-y-4">
              <Input
                label="Full Name"
                required
                placeholder="John Doe"
                onChange={(e) => updateFormData('personal', { fullName: e.target.value })}
              />
              <Input
                label="Email Address"
                required
                type="email"
                placeholder="john@company.com"
                onChange={(e) => updateFormData('personal', { email: e.target.value })}
              />
            </div>
          ),
        },
        {
          id: 'company',
          title: 'Company Details',
          description: 'Information about your organization',
          icon: 'buildingwip' as any,
          dependencies: ['personal'],
          content: (
            <div className="space-y-4">
              <Input
                label="Company Name"
                required
                placeholder="Acme Corp"
                onChange={(e) => updateFormData('company', { companyName: e.target.value })}
              />
              <Input
                label="Job Title"
                placeholder="Product Manager"
                onChange={(e) => updateFormData('company', { jobTitle: e.target.value })}
              />
            </div>
          ),
        },
        {
          id: 'preferences',
          title: 'Preferences',
          description: 'Customize your experience',
          optional: true,
          content: (
            <div className="space-y-4">
              <p className="text-sm text-[var(--ds-color-text-secondary)]">
                Configure notifications and privacy settings.
              </p>
            </div>
          ),
        },
      ],
      autoSave: true,
      autoSaveDelay: 2000,
      onSave: async (data) => {
        console.log('Auto-saving:', data);
        await new Promise((resolve) => setTimeout(resolve, 500));
      },
      storageKey: 'progressive-form-demo',
      enableNavigationGuard: true,
    });

    return (
      <div className="max-w-4xl space-y-4">
        <Alert>
          <AlertDescription>
            <strong>Enterprise Features:</strong> Auto-save (2s delay), localStorage persistence,
            navigation guards, and last saved indicator enabled.
            {hasUnsavedChanges && (
              <span className="text-[var(--ds-color-warning-600)]"> • Unsaved changes detected</span>
            )}
          </AlertDescription>
        </Alert>

        <ProgressiveForm
          sections={sections}
          expandedSections={expandedSections}
          onExpandedChange={setExpandedSections}
          formData={formData}
          lastSaved={lastSaved}
          isSaving={isSaving}
          showProgress
          allowMultiple={false}
          actions={
            <>
              <Button variant="outline" onClick={clearSavedData} size="sm">
                Clear Saved Data
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={saveProgress}
                  disabled={isSaving || !hasUnsavedChanges}
                >
                  {isSaving ? 'Saving...' : 'Save Now'}
                </Button>
                <Button variant="primary" disabled={progress < 67}>
                  Continue to Review
                </Button>
              </div>
            </>
          }
        />
      </div>
    );
  },
};

/**
 * ⭐️ Conditional Branching - sections show/hide based on user input
 */
export const WithConditionalSections: Story = {
  render: () => {
    const [accountType, setAccountType] = useState<'personal' | 'business' | ''>('');

    const sections: FormSection[] = [
      {
        id: 'type',
        title: 'Account Type',
        description: 'Choose your account type',
        status: accountType ? 'completed' : 'in-progress',
        content: (
          <div className="space-y-4">
            <Label>Select Account Type</Label>
            <div className="flex gap-3">
              <Button
                variant={accountType === 'personal' ? 'default' : 'outline'}
                onClick={() => setAccountType('personal')}
              >
                Personal Account
              </Button>
              <Button
                variant={accountType === 'business' ? 'default' : 'outline'}
                onClick={() => setAccountType('business')}
              >
                Business Account
              </Button>
            </div>
          </div>
        ),
      },
      {
        id: 'personal-info',
        title: 'Personal Information',
        description: 'Individual account details',
        condition: (data) => accountType === 'personal',
        content: (
          <div className="space-y-4">
            <Input label="First Name" required placeholder="John" />
            <Input label="Last Name" required placeholder="Doe" />
            <Input label="Date of Birth" type="date" />
          </div>
        ),
      },
      {
        id: 'business-info',
        title: 'Business Information',
        description: 'Company account details',
        condition: (data) => accountType === 'business',
        content: (
          <div className="space-y-4">
            <Input label="Company Name" required placeholder="Acme Corp" />
            <Input label="Tax ID" required placeholder="XX-XXXXXXX" />
            <Input label="Industry" placeholder="Technology" />
          </div>
        ),
      },
      {
        id: 'contact',
        title: 'Contact Details',
        description: 'How we can reach you',
        dependencies: accountType ? [accountType === 'personal' ? 'personal-info' : 'business-info'] : [],
        content: (
          <div className="space-y-4">
            <Input label="Email" required type="email" placeholder="you@company.com" />
            <Input label="Phone" type="tel" placeholder="(555) 123-4567" />
          </div>
        ),
      },
    ];

    return (
      <div className="max-w-4xl space-y-4">
        <Alert>
          <AlertDescription>
            <strong>Conditional Branching:</strong> Form sections dynamically show/hide based on user choices.
            Select an account type to see conditional sections appear.
          </AlertDescription>
        </Alert>

        <ProgressiveForm
          sections={sections}
          formData={{ accountType }}
          showProgress
          allowMultiple={false}
          actions={
            <Button variant="primary" disabled={!accountType}>
              Continue
            </Button>
          }
        />
      </div>
    );
  },
};

/**
 * ⭐️ Review Step - final verification before submission
 */
export const WithReviewStep: Story = {
  render: () => {
    const [showReview, setShowReview] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sections: FormSection[] = [
      {
        id: 'account',
        title: 'Account Information',
        status: 'completed',
        content: <div />,
      },
      {
        id: 'billing',
        title: 'Billing Details',
        status: 'completed',
        content: <div />,
      },
    ];

    const formData = {
      account: {
        fullName: 'John Doe',
        email: 'john@company.com',
        phone: '(555) 123-4567',
      },
      billing: {
        cardNumber: '**** **** **** 1234',
        expiryDate: '12/25',
        billingAddress: '123 Main St, San Francisco, CA 94102',
      },
    };

    const handleSubmit = async () => {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      alert('Form submitted successfully!');
    };

    if (showReview) {
      return (
        <div className="max-w-4xl space-y-4">
          <Alert>
            <AlertDescription>
              <strong>Review Step:</strong> Users can review all information before final submission.
              Follows best practices from Nielsen Norman Group and GOV.UK Design System.
            </AlertDescription>
          </Alert>

          <ReviewStep
            sections={sections}
            formData={formData}
            onEdit={(sectionId) => {
              setShowReview(false);
              alert(`Editing section: ${sectionId}`);
            }}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitLabel="Submit Application"
            showStatus
          />

          <div className="flex justify-center">
            <Button variant="outline" onClick={() => setShowReview(false)}>
              Back to Form
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-4xl space-y-4">
        <Alert>
          <AlertDescription>
            Complete the form sections, then proceed to the review step before submission.
          </AlertDescription>
        </Alert>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <p className="text-[var(--ds-color-text-secondary)]">
                Form sections completed (simulated). Click below to see the Review Step.
              </p>
              <Button variant="primary" onClick={() => setShowReview(true)}>
                Proceed to Review →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};
