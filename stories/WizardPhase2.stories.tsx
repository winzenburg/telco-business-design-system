import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import { Wizard } from '../src/components/patterns/WizardComponent';
import { Input } from '../src/components/ui/input';
import { Label } from '../packages/components/ui/label';
import { Button } from '../packages/components/ui/button';
import { Alert, AlertDescription } from '../packages/components/ui/alert';
import { Icon } from '../src/components/Icon';

const meta: Meta<typeof Wizard> = {
  title: 'Patterns/Wizards/Phase 2 - Enterprise',
  component: Wizard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Enterprise Wizard Pattern - Phase 2

Advanced enterprise features based on Azure Portal, AWS Console, and enterprise design systems.

## Phase 2 Enterprise Features ✅

### 1. **Async Resilience** (Azure/AWS Pattern)
- Background job status tracking
- Automatic retry with exponential backoff (1s, 2s, 4s)
- Max 3 retries by default
- Progress indicators
- Error recovery with retry button

### 2. **Permission-Aware UI** (Enterprise)
- Steps can require specific permissions
- Steps hidden/disabled without permissions
- Rationale tooltips explain why access is restricted
- Admin override flows supported
- Graceful degradation

### 3. **Enhanced Keyboard Navigation** (Accessibility)
- Arrow keys to navigate between steps
- Tab for form field navigation
- Enter to advance/submit
- Escape to exit with confirmation
- Full screen reader support

### 4. **Telemetry Hooks** (Analytics)
- Track step views and time spent
- Monitor advancement patterns
- Identify abandonment points
- Error tracking per step
- Completion funnel analysis

## Enterprise Use Cases

- **Azure Portal**: Resource creation with validation and background provisioning
- **AWS Console**: EC2/RDS setup with permission checks and async operations
- **Stripe**: KYC onboarding with document verification and retry logic
- **GOV.UK**: Compliance flows with role-based access

## Best Practices

✅ Background jobs don't block UI progression
✅ Permission errors provide clear guidance
✅ Retry logic with exponential backoff
✅ Analytics track user behavior patterns
✅ Keyboard shortcuts for power users
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Wizard>;

// ===== ASYNC RESILIENCE EXAMPLE =====

interface CloudResourceData {
  resourceName?: string;
  region?: string;
  instanceType?: string;
  storage?: string;
}

export const AsyncResilience: Story = {
  render: () => {
    const [data, setData] = React.useState<Partial<CloudResourceData>>({});
    const [provisioningStatus, setProvisioningStatus] = React.useState<'idle' | 'pending' | 'success' | 'error'>('idle');
    const [retryCount, setRetryCount] = React.useState(0);

    const simulateProvisioning = async () => {
      setProvisioningStatus('pending');
      setRetryCount(0);

      const attemptProvisioning = async (attempt: number): Promise<void> => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Simulate 70% success rate
        if (Math.random() > 0.3 || attempt >= 3) {
          setProvisioningStatus('success');
        } else {
          setRetryCount(attempt + 1);
          if (attempt < 3) {
            // Exponential backoff
            await new Promise((resolve) => setTimeout(resolve, Math.pow(2, attempt) * 1000));
            return attemptProvisioning(attempt + 1);
          } else {
            setProvisioningStatus('error');
          }
        }
      };

      try {
        await attemptProvisioning(0);
      } catch (error) {
        setProvisioningStatus('error');
      }
    };

    return (
      <div>
        <Wizard<CloudResourceData>
          steps={[
            {
              id: 'basic',
              title: 'Basic Configuration',
              description: 'Configure basic resource settings',
              icon: 'configure' as any,
              content: (
                <div className="space-y-4">
                  <Input
                    id="resourceName"
                    label="Resource Name"
                    value={data.resourceName || ''}
                    onChange={(e) => setData({ ...data, resourceName: e.target.value })}
                  />

                  <Input
                    id="region"
                    label="Region"
                    value={data.region || ''}
                    placeholder="us-east-1"
                    onChange={(e) => setData({ ...data, region: e.target.value })}
                  />
                </div>
              ),
            },
            {
              id: 'compute',
              title: 'Compute Settings',
              description: 'Select instance type and storage',
              icon: 'cloud' as any,
              content: (
                <div className="space-y-4">
                  <Input
                    id="instanceType"
                    label="Instance Type"
                    value={data.instanceType || ''}
                    placeholder="t3.medium"
                    onChange={(e) => setData({ ...data, instanceType: e.target.value })}
                  />

                  <Input
                    id="storage"
                    label="Storage (GB)"
                    type="number"
                    value={data.storage || ''}
                    placeholder="100"
                    onChange={(e) => setData({ ...data, storage: e.target.value })}
                  />
                </div>
              ),
            },
            {
              id: 'provision',
              title: 'Provisioning',
              description: 'Resource provisioning with automatic retry',
              icon: 'refresh' as any,
              content: (
                <div className="space-y-6">
                  {provisioningStatus === 'idle' && (
                    <Alert>
                      <AlertDescription>
                        Ready to provision your cloud resource. This process may take a few moments and will automatically retry if interrupted.
                      </AlertDescription>
                    </Alert>
                  )}

                  {provisioningStatus === 'pending' && (
                    <Alert>
                      <AlertDescription>
                        <div className="flex items-center gap-2">
                          <div className="animate-spin h-4 w-4 border-2 border-primary-500 border-t-transparent rounded-full" />
                          <span>
                            Provisioning resource...
                            {retryCount > 0 && ` (Retry ${retryCount}/3)`}
                          </span>
                        </div>
                      </AlertDescription>
                    </Alert>
                  )}

                  {provisioningStatus === 'success' && (
                    <Alert className="border-success-500 bg-success-50">
                      <AlertDescription className="text-success-900 flex items-center gap-2">
                        <Icon name="complete" size={16} className="text-success-600" />
                        Resource provisioned successfully!
                      </AlertDescription>
                    </Alert>
                  )}

                  {provisioningStatus === 'error' && (
                    <Alert variant="destructive">
                      <AlertDescription>
                        <div className="space-y-2">
                          <p className="flex items-center gap-2">
                            <Icon name="alert" size={16} className="text-destructive-600" />
                            Provisioning failed after 3 attempts.
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setProvisioningStatus('idle');
                              setRetryCount(0);
                              simulateProvisioning();
                            }}
                          >
                            Retry Provisioning
                          </Button>
                        </div>
                      </AlertDescription>
                    </Alert>
                  )}

                  {provisioningStatus === 'idle' && (
                    <Button variant="primary" onClick={simulateProvisioning}>
                      Start Provisioning
                    </Button>
                  )}

                  <div className="bg-neutral-50 border border-neutral-300 rounded-lg p-4 text-sm">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="bar-chart" size={16} />
                      Async Resilience Features:
                    </h4>
                    <ul className="space-y-1 text-sm text-neutral-600">
                      <li>• Automatic retry with exponential backoff (1s, 2s, 4s)</li>
                      <li>• Max 3 retry attempts</li>
                      <li>• Visual status indicators</li>
                      <li>• Manual retry on failure</li>
                      <li>• Progress tracking</li>
                    </ul>
                  </div>
                </div>
              ),
            },
          ]}
          initialData={data}
          onStepChange={(_, __, newData) => setData(newData)}
          review={{ enabled: false }}
          onComplete={async () => {
            console.log('Resource created:', data);
            alert('Resource created successfully!');
          }}
        />
      </div>
    );
  },
};

// ===== PERMISSION-AWARE UI EXAMPLE =====

interface PermissionDemoData {
  projectName?: string;
  environment?: string;
  billingAccount?: string;
}

export const PermissionAware: Story = {
  render: () => {
    const [data, setData] = React.useState<Partial<PermissionDemoData>>({});
    const [userPermissions, setUserPermissions] = React.useState<string[]>(['project:create', 'environment:select']);

    const hasPermission = (required: string[]) => {
      return required.every((perm) => userPermissions.includes(perm));
    };

    return (
      <div className="space-y-6">
        {/* Permission Toggle for Demo */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Icon name="users" size={16} />
            Current Permissions (Demo Controls):
          </h3>
          <div className="space-y-2">
            {['project:create', 'environment:select', 'billing:manage', 'admin:override'].map((perm) => (
              <label key={perm} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={userPermissions.includes(perm)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setUserPermissions([...userPermissions, perm]);
                    } else {
                      setUserPermissions(userPermissions.filter((p) => p !== perm));
                    }
                  }}
                />
                <span className="text-sm font-mono">{perm}</span>
              </label>
            ))}
          </div>
        </div>

        <Wizard<PermissionDemoData>
          steps={[
            {
              id: 'project',
              title: 'Project Setup',
              description: 'Create new project',
              icon: 'folder' as any,
              content: (
                <div className="space-y-4">
                  {hasPermission(['project:create']) ? (
                    <>
                      <Input
                        id="projectName"
                        label="Project Name"
                        value={data.projectName || ''}
                        onChange={(e) => setData({ ...data, projectName: e.target.value })}
                      />
                      <Alert>
                        <AlertDescription>
                          <Icon name="complete" size={16} className="text-success-600 inline" /> You have permission to create projects
                        </AlertDescription>
                      </Alert>
                    </>
                  ) : (
                    <Alert variant="destructive">
                      <AlertDescription>
                        <div className="space-y-2">
                          <p className="flex items-center gap-2">
                            <Icon name="lock" size={16} className="text-destructive-600" />
                            You don't have permission to create projects.
                          </p>
                          <p className="text-sm">
                            Required: <code>project:create</code>
                          </p>
                          <p className="text-sm text-neutral-600">
                            Contact your administrator to request access.
                          </p>
                        </div>
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              ),
            },
            {
              id: 'environment',
              title: 'Environment',
              description: 'Select deployment environment',
              icon: 'cloud' as any,
              content: (
                <div className="space-y-4">
                  {hasPermission(['environment:select']) ? (
                    <>
                      <Input
                        id="environment"
                        label="Environment"
                        value={data.environment || ''}
                        placeholder="production"
                        onChange={(e) => setData({ ...data, environment: e.target.value })}
                      />
                      <Alert>
                        <AlertDescription>
                          <Icon name="complete" size={16} className="text-success-600 inline" /> You have permission to configure environments
                        </AlertDescription>
                      </Alert>
                    </>
                  ) : (
                    <Alert variant="destructive">
                      <AlertDescription>
                        <Icon name="lock" size={16} className="text-destructive-600 inline" /> Missing permission: <code>environment:select</code>
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              ),
            },
            {
              id: 'billing',
              title: 'Billing Setup',
              description: 'Configure billing account',
              icon: 'paymentcard' as any,
              requiredPermissions: ['billing:manage'],
              content: (
                <div className="space-y-4">
                  {hasPermission(['billing:manage']) ? (
                    <>
                      <Input
                        id="billingAccount"
                        label="Billing Account"
                        value={data.billingAccount || ''}
                        placeholder="ACCT-12345"
                        onChange={(e) => setData({ ...data, billingAccount: e.target.value })}
                      />
                      <Alert>
                        <AlertDescription>
                          <Icon name="complete" size={16} className="text-success-600 inline" /> You have billing management permissions
                        </AlertDescription>
                      </Alert>
                    </>
                  ) : (
                    <Alert variant="destructive">
                      <AlertDescription>
                        <div className="space-y-2">
                          <p><Icon name="lock" size={16} className="text-destructive-600 inline" /> This step requires billing management permissions.</p>
                          <p className="text-sm">
                            Required: <code>billing:manage</code>
                          </p>
                          <p className="text-sm text-neutral-600">
                            This is a sensitive operation that requires elevated privileges.
                          </p>
                          {hasPermission(['admin:override']) && (
                            <Button size="sm" variant="destructive">
                              Admin Override
                            </Button>
                          )}
                        </div>
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              ),
            },
          ]}
          initialData={data}
          userPermissions={userPermissions}
          onStepChange={(_, __, newData) => setData(newData)}
          review={{ enabled: false }}
          onComplete={async () => {
            console.log('Project setup complete:', data);
            alert('Project configured!');
          }}
        />
      </div>
    );
  },
};

// ===== TELEMETRY TRACKING EXAMPLE =====

export const TelemetryTracking: Story = {
  render: () => {
    const [data, setData] = React.useState({});
    const [telemetryEvents, setTelemetryEvents] = React.useState<string[]>([]);

    const logEvent = (event: string) => {
      const timestamp = new Date().toLocaleTimeString();
      setTelemetryEvents((prev) => [`[${timestamp}] ${event}`, ...prev].slice(0, 10));
    };

    return (
      <div className="space-y-6">
        {/* Telemetry Log */}
        <div className="bg-neutral-900 text-green-400 rounded-lg p-4 font-mono text-sm max-h-64 overflow-y-auto">
          <div className="text-neutral-400 mb-2 flex items-center gap-2">
            <Icon name="bar-chart" size={16} />
            Analytics Events Log:
          </div>
          {telemetryEvents.length === 0 ? (
            <div className="text-neutral-500">No events yet. Start using the wizard...</div>
          ) : (
            <div className="space-y-1">
              {telemetryEvents.map((event, i) => (
                <div key={i}>{event}</div>
              ))}
            </div>
          )}
        </div>

        <Wizard
          steps={[
            {
              id: 'step1',
              title: 'Step 1',
              content: <div className="p-8">Navigate through the wizard to see telemetry events</div>,
            },
            {
              id: 'step2',
              title: 'Step 2',
              content: <div className="p-8">Each action is tracked for analytics</div>,
            },
            {
              id: 'step3',
              title: 'Step 3',
              content: <div className="p-8">View the log above to see all events</div>,
            },
          ]}
          telemetry={{
            onStepView: (stepId, stepIndex) => {
              logEvent(`View: ${stepId} (index ${stepIndex})`);
            },
            onStepAdvance: (fromStepId, toStepId, timeSpent) => {
              logEvent(`Advance: ${fromStepId} → ${toStepId} (${Math.round(timeSpent / 1000)}s)`);
            },
            onStepBack: (fromStepId, toStepId) => {
              logEvent(`Back: ${fromStepId} ← ${toStepId}`);
            },
            onStepError: (stepId, errors) => {
              logEvent(`Error on ${stepId}: ${Object.keys(errors).length} validation errors`);
            },
            onComplete: (totalTime, stepCount) => {
              logEvent(`Complete: ${stepCount} steps in ${Math.round(totalTime / 1000)}s`);
            },
          }}
          review={{ enabled: false }}
          onComplete={async () => {
            logEvent('Wizard completed successfully!');
          }}
        />

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Icon name="bar-chart" size={16} />
            Telemetry Use Cases:
          </h4>
          <ul className="space-y-1 text-neutral-600">
            <li>• Identify steps where users abandon the flow</li>
            <li>• Measure time spent per step (optimize complex steps)</li>
            <li>• Track error rates and common validation failures</li>
            <li>• A/B test different wizard flows</li>
            <li>• Monitor completion rates and funnel conversion</li>
          </ul>
        </div>
      </div>
    );
  },
};
