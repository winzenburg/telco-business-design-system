import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stepper, useStepper, type Step } from '../../src/components/patterns/Stepper';
import { Button } from '../../src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../src/components/ui/card';
import { Badge } from '../../src/components/ui/badge';

const meta = {
  title: 'Patterns/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Step indicator component for linear multi-step processes. Shows user progress and navigation through sequential steps.',
      },
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample steps for demos
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
 * Horizontal orientation with progress tracking
 */
export const Horizontal: Story = {
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
              <Button variant="primary" onClick={nextStep} disabled={isLastStep}>
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
 * Vertical orientation with detailed descriptions
 */
export const Vertical: Story = {
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
 * Compact variant for checkout or short flows
 */
export const Compact: Story = {
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
 * With step numbers displayed
 */
export const WithStepNumbers: Story = {
  render: () => {
    const steps: Step[] = [
      { id: '1', label: 'Choose Plan', status: 'completed' },
      { id: '2', label: 'Account Setup', status: 'in-progress' },
      { id: '3', label: 'Payment', status: 'not-started' },
      { id: '4', label: 'Confirmation', status: 'not-started' },
    ];

    return (
      <div className="max-w-4xl">
        <Stepper
          steps={steps}
          currentStep={1}
          orientation="horizontal"
          showStepNumbers
        />
      </div>
    );
  },
};
