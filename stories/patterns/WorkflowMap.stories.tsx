import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { WorkflowMap, type WorkflowSection, type WorkflowTask } from '../../src/components/patterns/WorkflowMap';
import { Button } from '../../src/components/ui/button';
import { Alert, AlertDescription } from '../../src/components/ui/alert';

const meta = {
  title: 'Patterns/Workflow Map',
  component: WorkflowMap,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Visual journey map for complex, non-linear processes with dependencies, task status tracking, and bulk operations.',
      },
    },
  },
} satisfies Meta<typeof WorkflowMap>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Complex onboarding process with dependencies
 */
export const OnboardingWorkflow: Story = {
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
              <Button variant="primary">Mark All Complete & Continue</Button>
            </>
          }
        />
      </div>
    );
  },
};

/**
 * Project kickoff workflow with team assignments
 */
export const ProjectKickoff: Story = {
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
 * ⭐️ Bulk Operations - select and complete multiple tasks at once
 */
export const WithBulkOperations: Story = {
  render: () => {
    const [selectedTasks, setSelectedTasks] = useState<Set<string>>(new Set());
    const [tasks, setTasks] = useState<WorkflowTask[]>([
      {
        id: 'task-1',
        title: 'Review Requirements',
        description: 'Review and approve project requirements',
        status: 'completed',
        estimatedTime: '2 hours',
        assignee: 'John Doe',
      },
      {
        id: 'task-2',
        title: 'Design Mockups',
        description: 'Create UI/UX mockups in Figma',
        status: 'in-progress',
        estimatedTime: '8 hours',
        assignee: 'Jane Smith',
        dependencies: ['task-1'],
      },
      {
        id: 'task-3',
        title: 'Frontend Development',
        description: 'Build React components',
        status: 'not-started',
        estimatedTime: '16 hours',
        dependencies: ['task-2'],
      },
      {
        id: 'task-4',
        title: 'Backend API',
        description: 'Implement REST API endpoints',
        status: 'not-started',
        estimatedTime: '12 hours',
        dependencies: ['task-1'],
      },
      {
        id: 'task-5',
        title: 'Testing',
        description: 'Write unit and integration tests',
        status: 'blocked',
        estimatedTime: '6 hours',
        dependencies: ['task-3', 'task-4'],
      },
    ]);

    const handleBulkComplete = (taskIds: string[]) => {
      setTasks((prev) =>
        prev.map((task) =>
          taskIds.includes(task.id) ? { ...task, status: 'completed' as const } : task
        )
      );
      setSelectedTasks(new Set());
    };

    const sections: WorkflowSection[] = [
      {
        id: 'section-1',
        title: 'Development Phase',
        tasks,
      },
    ];

    return (
      <div className="max-w-6xl space-y-4">
        <Alert>
          <AlertDescription>
            <strong>Bulk Operations:</strong> Select multiple tasks and perform actions on them at once.
            Click task checkboxes to select, then use the bulk action bar.
          </AlertDescription>
        </Alert>

        {selectedTasks.size > 0 && (
          <div className="sticky top-0 z-10 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[var(--ds-color-text-primary)]">
                {selectedTasks.size} task{selectedTasks.size !== 1 ? 's' : ''} selected
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBulkComplete(Array.from(selectedTasks))}
                >
                  Mark Complete
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedTasks(new Set())}
                >
                  Clear Selection
                </Button>
              </div>
            </div>
          </div>
        )}

        <WorkflowMap
          sections={sections}
          enableBulkActions
          onBulkComplete={handleBulkComplete}
          showProgress
        />
      </div>
    );
  },
};

/**
 * Compact workflow with minimal descriptions
 */
export const Compact: Story = {
  render: () => {
    const sections: WorkflowSection[] = [
      {
        id: 'phase-1',
        title: 'Getting Started',
        tasks: [
          { id: '1', title: 'Create Account', status: 'completed' },
          { id: '2', title: 'Verify Email', status: 'completed', dependencies: ['1'] },
          { id: '3', title: 'Complete Profile', status: 'in-progress', dependencies: ['2'] },
        ],
      },
      {
        id: 'phase-2',
        title: 'Configuration',
        tasks: [
          { id: '4', title: 'Set Up Workspace', status: 'not-started', dependencies: ['3'] },
          { id: '5', title: 'Invite Team', status: 'not-started', optional: true },
          { id: '6', title: 'Configure Settings', status: 'not-started', dependencies: ['4'] },
        ],
      },
    ];

    return (
      <div className="max-w-6xl">
        <WorkflowMap sections={sections} showProgress allowResume />
      </div>
    );
  },
};
