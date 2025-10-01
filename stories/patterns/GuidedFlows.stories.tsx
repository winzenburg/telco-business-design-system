import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stepper, useStepper, type Step } from '../../src/components/patterns/Stepper';
import { ProgressiveForm, useProgressiveForm, type FormSection } from '../../src/components/patterns/ProgressiveForm';
import { WorkflowMap, type WorkflowSection } from '../../src/components/patterns/WorkflowMap';
import { Button } from '../../src/components/ui/button';
import { Input } from '../../src/components/ui/input';
import { Label } from '../../src/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../../src/components/ui/card';
import { Badge } from '../../src/components/ui/badge';

const meta = {
  title: 'Patterns/Guided Flows & Wizards',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Step-by-step flow patterns for enterprise onboarding, configuration, and complex processes.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample steps for Stepper
const accountSetupSteps: Step[] = [
  {
    id: 'account',
    label: 'Account Info',
    description: 'Basic account details',
    status: 'completed',
  },
  {
    id: 'profile',
    label: 'Profile',
    description: 'Personal information',
    status: 'in-progress',
  },
  {
    id: 'preferences',
    label: 'Preferences',
    description: 'Customize your experience',
    optional: true,
    status: 'not-started',
  },
  {
    id: 'review',
    label: 'Review',
    description: 'Confirm and submit',
    status: 'not-started',
  },
];

/**
 * Stepper - Horizontal orientation with progress
 */
export const StepperHorizontal: Story = {
  render: () => {
    const { currentStep, nextStep, previousStep, isFirstStep, isLastStep, progress } = useStepper({
      totalSteps: 4,
      initialStep: 1,
    });

    const steps: Step[] = accountSetupSteps.map((step, index) => ({
      ...step,
      status:
        index < currentStep
          ? 'completed'
          : index === currentStep
            ? 'in-progress'
            : 'not-started',
    }));

    return (
      <div className="space-y-6 max-w-4xl">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          onStepClick={(index) => console.log('Clicked step:', index)}
          orientation="horizontal"
          allowStepNavigation
        />

        <Card>
          <CardHeader>
            <CardTitle>Step {currentStep + 1}: {steps[currentStep].label}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-[var(--ds-color-text-secondary)]">
              {steps[currentStep].description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t">
              <Button variant="outline" onClick={previousStep} disabled={isFirstStep}>
                Previous
              </Button>
              <Badge variant="outline">{Math.round(progress)}% Complete</Badge>
              <Button onClick={nextStep} disabled={isLastStep}>
                {isLastStep ? 'Submit' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

/**
 * Stepper - Vertical orientation with detailed descriptions
 */
export const StepperVertical: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(2);

    const steps: Step[] = [
      {
        id: '1',
        label: 'Create Account',
        description: 'Set up your basic account information and credentials',
        status: 'completed',
      },
      {
        id: '2',
        label: 'Verify Email',
        description: 'Check your inbox and confirm your email address',
        status: 'completed',
      },
      {
        id: '3',
        label: 'Complete Profile',
        description: 'Add your personal and business information',
        status: 'in-progress',
      },
      {
        id: '4',
        label: 'Set Preferences',
        description: 'Customize notifications and privacy settings',
        optional: true,
        status: 'not-started',
      },
      {
        id: '5',
        label: 'Start Using',
        description: 'You\'re all set! Begin exploring the platform',
        status: 'not-started',
      },
    ];

    return (
      <div className="max-w-2xl">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          onStepClick={setCurrentStep}
          orientation="vertical"
          variant="detailed"
          allowStepNavigation
        />
      </div>
    );
  },
};

/**
 * Stepper - Compact variant
 */
export const StepperCompact: Story = {
  render: () => {
    const steps: Step[] = [
      { id: '1', label: 'Cart', status: 'completed' },
      { id: '2', label: 'Shipping', status: 'completed' },
      { id: '3', label: 'Payment', status: 'in-progress' },
      { id: '4', label: 'Review', status: 'not-started' },
      { id: '5', label: 'Confirmation', status: 'not-started' },
    ];

    return (
      <div className="max-w-3xl">
        <Stepper
          steps={steps}
          currentStep={2}
          orientation="horizontal"
          variant="compact"
          showStepNumbers
        />
      </div>
    );
  },
};

/**
 * ProgressiveForm - Accordion-style with validation
 */
export const ProgressiveFormExample: Story = {
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
        icon: 'user' as any,
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
        icon: 'building' as any,
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
              <Button>Continue</Button>
            </>
          }
        />
      </div>
    );
  },
};

/**
 * ProgressiveForm - Interactive with hook
 */
export const ProgressiveFormInteractive: Story = {
  render: () => {
    const {
      sections,
      expandedSections,
      setExpandedSections,
      markSectionComplete,
      markSectionError,
      progress,
      isSaving,
      saveProgress,
    } = useProgressiveForm({
      sections: [
        {
          id: 'basic',
          title: 'Basic Information',
          icon: 'user' as any,
          content: (
            <div className="space-y-3">
              <Input placeholder="Full Name" />
              <Input placeholder="Email" type="email" />
            </div>
          ),
        },
        {
          id: 'address',
          title: 'Address',
          icon: 'map-pin' as any,
          content: (
            <div className="space-y-3">
              <Input placeholder="Street Address" />
              <Input placeholder="City" />
            </div>
          ),
        },
        {
          id: 'payment',
          title: 'Payment Method',
          icon: 'credit-card' as any,
          optional: true,
          content: (
            <div className="space-y-3">
              <Input placeholder="Card Number" />
              <Input placeholder="Expiry" />
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
    });

    return (
      <div className="space-y-4 max-w-3xl">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Form Progress</p>
                <p className="text-sm text-[var(--ds-color-text-secondary)]">
                  {Math.round(progress)}% complete
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => markSectionComplete('basic')}
                >
                  Mark Basic Complete
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    markSectionError('address', ['Please enter a valid address'])
                  }
                >
                  Trigger Error
                </Button>
                <Button size="sm" onClick={saveProgress} disabled={isSaving}>
                  {isSaving ? 'Saving...' : 'Save Now'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <ProgressiveForm
          sections={sections}
          expandedSections={expandedSections}
          onExpandedChange={setExpandedSections}
          showProgress
        />
      </div>
    );
  },
};

/**
 * WorkflowMap - Complex onboarding process
 */
export const WorkflowMapExample: Story = {
  render: () => {
    const sections: WorkflowSection[] = [
      {
        id: 'setup',
        title: 'Initial Setup',
        description: 'Get started with the basics',
        tasks: [
          {
            id: 'account',
            title: 'Create Account',
            description: 'Sign up with your email and create a password',
            status: 'completed',
            estimatedTime: '2 min',
          },
          {
            id: 'verify',
            title: 'Verify Email',
            description: 'Check your inbox and click the verification link',
            status: 'completed',
            estimatedTime: '1 min',
            dependencies: ['account'],
          },
          {
            id: 'profile',
            title: 'Complete Profile',
            description: 'Add your personal and business information',
            status: 'in-progress',
            estimatedTime: '5 min',
            dependencies: ['verify'],
            assignee: 'You',
          },
        ],
      },
      {
        id: 'configuration',
        title: 'Configuration',
        description: 'Set up your workspace',
        collapsible: true,
        tasks: [
          {
            id: 'workspace',
            title: 'Create Workspace',
            description: 'Name your workspace and invite team members',
            status: 'not-started',
            estimatedTime: '3 min',
            dependencies: ['profile'],
          },
          {
            id: 'integrations',
            title: 'Connect Integrations',
            description: 'Link your existing tools and services',
            status: 'not-started',
            optional: true,
            estimatedTime: '10 min',
          },
          {
            id: 'permissions',
            title: 'Set Permissions',
            description: 'Configure role-based access control',
            status: 'blocked',
            estimatedTime: '5 min',
            dependencies: ['workspace'],
          },
        ],
      },
      {
        id: 'training',
        title: 'Training & Resources',
        description: 'Learn how to use the platform',
        collapsible: true,
        tasks: [
          {
            id: 'tutorial',
            title: 'Interactive Tutorial',
            description: 'Walk through key features with guided examples',
            status: 'not-started',
            optional: true,
            estimatedTime: '15 min',
          },
          {
            id: 'docs',
            title: 'Read Documentation',
            description: 'Browse our comprehensive knowledge base',
            status: 'not-started',
            optional: true,
            estimatedTime: '30 min',
          },
        ],
      },
    ];

    return (
      <div className="max-w-6xl">
        <WorkflowMap
          sections={sections}
          onTaskClick={(task) => console.log('Clicked task:', task)}
          showProgress
          allowResume
          lastSaved={new Date(Date.now() - 5 * 60 * 1000)}
          actions={
            <>
              <Button variant="outline">Save & Exit</Button>
              <Button>Mark All Complete & Continue</Button>
            </>
          }
        />
      </div>
    );
  },
};

/**
 * WorkflowMap - Project kickoff workflow
 */
export const WorkflowMapProject: Story = {
  render: () => {
    const sections: WorkflowSection[] = [
      {
        id: 'planning',
        title: 'Planning Phase',
        tasks: [
          {
            id: 'requirements',
            title: 'Define Requirements',
            description: 'Document project scope and objectives',
            status: 'completed',
            assignee: 'Product Team',
          },
          {
            id: 'timeline',
            title: 'Create Timeline',
            description: 'Set milestones and deadlines',
            status: 'completed',
            assignee: 'Project Manager',
            dependencies: ['requirements'],
          },
          {
            id: 'resources',
            title: 'Allocate Resources',
            description: 'Assign team members and budget',
            status: 'in-progress',
            assignee: 'Resource Manager',
            dependencies: ['timeline'],
          },
        ],
      },
      {
        id: 'design',
        title: 'Design Phase',
        tasks: [
          {
            id: 'wireframes',
            title: 'Create Wireframes',
            status: 'not-started',
            assignee: 'UX Designer',
            dependencies: ['requirements'],
          },
          {
            id: 'mockups',
            title: 'Design Mockups',
            status: 'not-started',
            assignee: 'UI Designer',
            dependencies: ['wireframes'],
          },
          {
            id: 'prototype',
            title: 'Build Prototype',
            status: 'not-started',
            optional: true,
            dependencies: ['mockups'],
          },
        ],
      },
      {
        id: 'development',
        title: 'Development Phase',
        tasks: [
          {
            id: 'setup',
            title: 'Development Setup',
            status: 'not-started',
            dependencies: ['resources'],
          },
          {
            id: 'frontend',
            title: 'Frontend Development',
            status: 'blocked',
            dependencies: ['mockups', 'setup'],
          },
          {
            id: 'backend',
            title: 'Backend Development',
            status: 'blocked',
            dependencies: ['requirements', 'setup'],
          },
        ],
      },
    ];

    return (
      <div className="max-w-6xl">
        <WorkflowMap sections={sections} showProgress />
      </div>
    );
  },
};

/**
 * Complete onboarding flow combining all patterns
 */
export const CompleteOnboardingFlow: Story = {
  render: () => {
    const [flowType, setFlowType] = useState<'stepper' | 'progressive' | 'workflow'>('stepper');

    return (
      <div className="space-y-6 max-w-6xl">
        <Card>
          <CardHeader>
            <CardTitle>Choose Your Flow Pattern</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-3">
            <Button
              variant={flowType === 'stepper' ? 'default' : 'outline'}
              onClick={() => setFlowType('stepper')}
            >
              Linear Stepper
            </Button>
            <Button
              variant={flowType === 'progressive' ? 'default' : 'outline'}
              onClick={() => setFlowType('progressive')}
            >
              Progressive Form
            </Button>
            <Button
              variant={flowType === 'workflow' ? 'default' : 'outline'}
              onClick={() => setFlowType('workflow')}
            >
              Workflow Map
            </Button>
          </CardContent>
        </Card>

        {flowType === 'stepper' && <StepperHorizontal.render />}
        {flowType === 'progressive' && <ProgressiveFormExample.render />}
        {flowType === 'workflow' && <WorkflowMapExample.render />}
      </div>
    );
  },
};
