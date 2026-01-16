import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import { Wizard } from '../src/components/patterns/WizardComponent';
import { Input } from '../src/components/ui/input';
import { Label } from '../packages/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../packages/components/ui/select';
import { Checkbox } from '../packages/components/ui/checkbox';

const meta: Meta<typeof Wizard> = {
  title: 'Patterns/Wizards/Phase 1 - Core Features',
  component: Wizard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Enterprise Wizard Pattern - Phase 1

Best-in-class multi-step form implementation based on research from Luke Wroblewski, Nielsen Norman Group, and industry leaders (Azure, AWS, GOV.UK, Zendesk, Lemonade).

## Phase 1 Critical Features ✅

### 1. **Enhanced Validation** (Wroblewski)
- Zod schema validation per step
- Field-level inline validation
- Error summary with focus management
- Real-time feedback on blur/change

### 2. **Save & Resume** (NN/g Critical)
- Auto-save with debouncing (2000ms default)
- Manual "Save Draft" button
- Resume detection on return
- Last saved timestamp display

### 3. **Review Step** (NN/g Critical)
- Final review before submission
- View all collected data
- Edit buttons to jump back to specific steps
- Grouped by step for clarity

### 4. **Navigation Guards** (Enterprise)
- Confirm exit with unsaved changes
- Prevent page navigation (beforeunload)
- Async exit handlers
- Validation blocking on advance

## Best Practices Implemented

- **Branching**: Conditional step visibility based on previous answers
- **Progress Tracking**: Visual progress bar + "Step X of Y"
- **Error Prevention**: Inline validation catches errors immediately
- **Keyboard Accessibility**: Full keyboard navigation support
- **Screen Reader Support**: ARIA labels and announcements
- **Mobile-First**: Responsive layouts and touch-friendly

## Use Cases

- ✅ User registration / onboarding
- ✅ Multi-step checkout flows
- ✅ Complex form submission (compliance, KYC)
- ✅ Service provisioning wizards
- ✅ Configuration wizards

## References

- **Luke Wroblewski**: Inline validation, mobile-first forms
- **Nielsen Norman Group**: Save & resume, review steps, comparison across steps
- **Azure Portal**: Create resource wizards with validation
- **AWS Console**: EC2/RDS creation patterns
- **GOV.UK**: Task list pattern for compliance flows
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Wizard>;

// ===== USER REGISTRATION WIZARD =====

interface UserRegistrationData {
  // Step 1: Account
  email: string;
  password: string;
  confirmPassword: string;

  // Step 2: Profile
  firstName: string;
  lastName: string;
  phone: string;

  // Step 3: Company (conditional)
  isBusinessAccount?: boolean;
  companyName?: string;
  companySize?: string;
  industry?: string;

  // Step 4: Preferences
  newsletter: boolean;
  notifications: boolean;
}

const accountSchema = z
  .object({
    email: z.string().email('Please enter a valid work email').refine(
      (email) => !email.endsWith('@gmail.com') && !email.endsWith('@yahoo.com'),
      'Please use your work email, not a personal email'
    ),
    password: z.string().min(8, 'Password must be at least 8 characters').regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain uppercase, lowercase, and number'
    ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const profileSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Phone must be in format: (123) 456-7890'),
});

const companySchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  companySize: z.enum(['1-10', '11-50', '51-200', '201-1000', '1000+'], {
    errorMap: () => ({ message: 'Please select company size' }),
  }),
  industry: z.string().min(1, 'Please select an industry'),
});

const preferencesSchema = z.object({
  newsletter: z.boolean(),
  notifications: z.boolean(),
});

export const UserRegistration: Story = {
  render: () => {
    const [formData, setFormData] = React.useState<Partial<UserRegistrationData>>({});

    return (
      <Wizard<UserRegistrationData>
        steps={[
          {
            id: 'account',
            title: 'Create Your Account',
            description: 'Start by setting up your login credentials',
            icon: 'user' as any,
            estimatedTime: '~1 minute',
            schema: accountSchema,
            content: (
              <div className="space-y-4">
                <Input
                  id="email"
                  type="email"
                  label="Work Email"
                  required
                  placeholder="name@company.com"
                  hintText="We'll use this for important account updates"
                  value={formData.email || ''}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <Input
                  id="password"
                  type="password"
                  label="Password"
                  required
                  placeholder="Enter password"
                  hintText="Must be 8+ characters with uppercase, lowercase, and number"
                  value={formData.password || ''}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />

                <Input
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  required
                  placeholder="Re-enter password"
                  value={formData.confirmPassword || ''}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            ),
          },
          {
            id: 'profile',
            title: 'Your Profile',
            description: 'Tell us a bit about yourself',
            icon: 'users' as any,
            estimatedTime: '~30 seconds',
            schema: profileSchema,
            content: (
              <div className="space-y-4">
                <Input
                  id="firstName"
                  label="First Name"
                  required
                  placeholder="John"
                  value={formData.firstName || ''}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />

                <Input
                  id="lastName"
                  label="Last Name"
                  required
                  placeholder="Smith"
                  value={formData.lastName || ''}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />

                <Input
                  id="phone"
                  label="Phone Number"
                  required
                  placeholder="(123) 456-7890"
                  hintText="Format: (123) 456-7890"
                  value={formData.phone || ''}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                <div className="flex items-center space-x-2 pt-4">
                  <Checkbox
                    id="isBusinessAccount"
                    checked={formData.isBusinessAccount || false}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, isBusinessAccount: checked as boolean })
                    }
                  />
                  <Label htmlFor="isBusinessAccount" className="text-sm font-normal">
                    This is a business account
                  </Label>
                </div>
              </div>
            ),
          },
          {
            id: 'company',
            title: 'Company Information',
            description: 'Tell us about your business',
            icon: 'buildingwip' as any,
            estimatedTime: '~1 minute',
            condition: (data) => data.isBusinessAccount === true,
            schema: companySchema,
            content: (
              <div className="space-y-4">
                <Input
                  id="companyName"
                  label="Company Name"
                  required
                  placeholder="Acme Corp"
                  value={formData.companyName || ''}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />

                <div>
                  <Label htmlFor="companySize">Company Size *</Label>
                  <Select
                    value={formData.companySize}
                    onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                  >
                    <SelectTrigger id="companySize">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-1000">201-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => setFormData({ ...formData, industry: value })}
                  >
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ),
          },
          {
            id: 'preferences',
            title: 'Communication Preferences',
            description: 'Choose how you want to hear from us',
            icon: 'configure' as any,
            estimatedTime: '~15 seconds',
            optional: true,
            schema: preferencesSchema,
            content: (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter || false}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, newsletter: checked as boolean })
                    }
                  />
                  <div>
                    <Label htmlFor="newsletter" className="font-normal">
                      Email Newsletter
                    </Label>
                    <p className="text-sm text-text-tertiary">
                      Get weekly updates on new features and tips
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="notifications"
                    checked={formData.notifications || false}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, notifications: checked as boolean })
                    }
                  />
                  <div>
                    <Label htmlFor="notifications" className="font-normal">
                      Push Notifications
                    </Label>
                    <p className="text-sm text-text-tertiary">
                      Get notified about important account activity
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> This step is optional. You can always update these preferences later in your account settings.
                  </p>
                </div>
              </div>
            ),
          },
        ]}
        initialData={formData}
        persistence={{
          key: 'user-registration-wizard',
          storage: 'localStorage',
          autoSave: true,
          debounceMs: 2000,
        }}
        review={{
          enabled: true,
          title: 'Review Your Information',
        }}
        onStepChange={(from, to, data) => {
          console.log(`Step changed: ${from} → ${to}`, data);
          setFormData(data);
        }}
        onComplete={async (data) => {
          console.log('Registration complete:', data);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          alert('Registration successful!');
        }}
        onError={(error, step) => {
          console.error(`Error at step ${step}:`, error);
        }}
        onExit={async (data, hasUnsavedChanges) => {
          if (hasUnsavedChanges) {
            return window.confirm('You have unsaved changes. Are you sure you want to exit?');
          }
          return true;
        }}
        variant="detailed"
        showProgress
        showStepNumbers
        stickyActions
      />
    );
  },
};

// ===== COMPACT VARIANT =====

export const CompactWizard: Story = {
  render: () => {
    const [data, setData] = React.useState({});

    return (
      <Wizard
        steps={[
          {
            id: 'step1',
            title: 'Step 1',
            content: <div className="p-8 text-center">Compact wizard with minimal UI</div>,
          },
          {
            id: 'step2',
            title: 'Step 2',
            content: <div className="p-8 text-center">Reduced spacing and smaller text</div>,
          },
          {
            id: 'step3',
            title: 'Step 3',
            content: <div className="p-8 text-center">Perfect for sidebars or modals</div>,
          },
        ]}
        variant="compact"
        showProgress={false}
        review={{ enabled: false }}
        onComplete={async () => console.log('Complete')}
      />
    );
  },
};

// ===== VERTICAL ORIENTATION =====

export const VerticalWizard: Story = {
  render: () => {
    return (
      <Wizard
        steps={[
          {
            id: 'step1',
            title: 'Contact Information',
            description: 'Basic contact details',
            content: <div className="p-8">Vertical stepper works better for mobile or narrow containers</div>,
          },
          {
            id: 'step2',
            title: 'Address',
            description: 'Shipping and billing address',
            content: <div className="p-8">Each step shows description below the title</div>,
          },
          {
            id: 'step3',
            title: 'Payment',
            description: 'Payment method',
            content: <div className="p-8">Connector lines show progress visually</div>,
          },
        ]}
        orientation="vertical"
        variant="detailed"
        review={{ enabled: false }}
        onComplete={async () => console.log('Complete')}
      />
    );
  },
};

// ===== CONDITIONAL BRANCHING =====

interface BranchingData {
  accountType?: 'personal' | 'business';
  personalName?: string;
  businessName?: string;
  taxId?: string;
}

export const ConditionalBranching: Story = {
  render: () => {
    const [data, setData] = React.useState<Partial<BranchingData>>({});

    return (
      <Wizard<BranchingData>
        steps={[
          {
            id: 'type',
            title: 'Account Type',
            description: 'Choose your account type',
            content: (
              <div className="space-y-4">
                <Label>Select Account Type</Label>
                <Select
                  value={data.accountType}
                  onValueChange={(value) => setData({ ...data, accountType: value as any })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal Account</SelectItem>
                    <SelectItem value="business">Business Account</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ),
          },
          {
            id: 'personal',
            title: 'Personal Information',
            description: 'For individual accounts',
            condition: (d) => d.accountType === 'personal',
            content: (
              <div className="space-y-4">
                <Input
                  id="personalName"
                  label="Full Name"
                  value={data.personalName || ''}
                  onChange={(e) => setData({ ...data, personalName: e.target.value })}
                />
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="text-sm text-green-900">
                    This step only appears for personal accounts
                  </p>
                </div>
              </div>
            ),
          },
          {
            id: 'business',
            title: 'Business Information',
            description: 'For business accounts',
            condition: (d) => d.accountType === 'business',
            content: (
              <div className="space-y-4">
                <Input
                  id="businessName"
                  label="Business Name"
                  value={data.businessName || ''}
                  onChange={(e) => setData({ ...data, businessName: e.target.value })}
                />

                <Input
                  id="taxId"
                  label="Tax ID"
                  value={data.taxId || ''}
                  onChange={(e) => setData({ ...data, taxId: e.target.value })}
                />

                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <p className="text-sm text-blue-900">
                    This step only appears for business accounts
                  </p>
                </div>
              </div>
            ),
          },
          {
            id: 'confirmation',
            title: 'Confirmation',
            description: 'All done!',
            content: (
              <div className="p-8 text-center">
                <p className="text-lg">
                  You selected: <strong>{data.accountType}</strong>
                </p>
                <p className="text-sm text-text-tertiary mt-2">
                  Notice how the progress bar adjusts based on visible steps
                </p>
              </div>
            ),
          },
        ]}
        initialData={data}
        onStepChange={(_, __, newData) => setData(newData)}
        review={{ enabled: false }}
        onComplete={async () => alert('Complete!')}
      />
    );
  },
};
