import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { HelpTooltip, LabelWithHelp } from '../../src/components/patterns/HelpTooltip';
import { HelpDrawer, useHelpDrawer, type HelpArticle } from '../../src/components/patterns/HelpDrawer';
import { InlineHelp, GlossaryTerm } from '../../src/components/patterns/InlineHelp';
import { Button } from '../../src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../src/components/ui/card';
import { Input } from '../../src/components/ui/input';
import { Label } from '../../src/components/ui/label';

const meta = {
  title: 'Patterns/Help & Documentation',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Documentation and help integration patterns for contextual education and support.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample help articles
const helpArticles: HelpArticle[] = [
  {
    id: '1',
    title: 'Getting Started',
    category: 'Basics',
    icon: 'play' as any,
    keywords: ['intro', 'setup', 'begin'],
    content: (
      <div className="space-y-3">
        <p>Welcome to our platform! Here's how to get started:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Create your account and verify your email</li>
          <li>Complete your profile with basic information</li>
          <li>Set up your first project</li>
          <li>Invite team members to collaborate</li>
        </ol>
        <p>Need help? Our support team is available 24/7.</p>
      </div>
    ),
  },
  {
    id: '2',
    title: 'Managing Users',
    category: 'User Management',
    icon: 'users' as any,
    keywords: ['users', 'team', 'permissions', 'roles'],
    content: (
      <div className="space-y-3">
        <p>Learn how to manage users and permissions:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Add new users to your organization</li>
          <li>Assign roles and permissions</li>
          <li>Manage user access levels</li>
          <li>Deactivate or remove users</li>
        </ul>
      </div>
    ),
  },
  {
    id: '3',
    title: 'Setting Up Integrations',
    category: 'Integrations',
    icon: 'settings' as any,
    keywords: ['api', 'webhooks', 'connect', 'integrate'],
    content: (
      <div className="space-y-3">
        <p>Connect your favorite tools and services:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Navigate to Settings → Integrations</li>
          <li>Choose the integration you want to add</li>
          <li>Follow the authentication flow</li>
          <li>Configure integration settings</li>
        </ol>
      </div>
    ),
  },
  {
    id: '4',
    title: 'Keyboard Shortcuts',
    category: 'Basics',
    icon: 'command' as any,
    keywords: ['shortcuts', 'keyboard', 'hotkeys', 'productivity'],
    content: (
      <div className="space-y-3">
        <p>Boost your productivity with these keyboard shortcuts:</p>
        <div className="space-y-2 font-mono text-sm">
          <div className="flex justify-between">
            <span>Open command palette</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded">⌘ K</kbd>
          </div>
          <div className="flex justify-between">
            <span>Create new item</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded">⌘ N</kbd>
          </div>
          <div className="flex justify-between">
            <span>Search</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded">⌘ F</kbd>
          </div>
        </div>
      </div>
    ),
  },
];

/**
 * HelpTooltip provides contextual help with icons and tooltips
 */
export const HelpTooltipVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Help Tooltip Variants</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <span>Default variant:</span>
            <HelpTooltip content="This is a helpful tooltip that explains what this feature does." />
          </div>

          <div className="flex items-center gap-4">
            <span>Subtle variant:</span>
            <HelpTooltip
              variant="subtle"
              content="A more subtle help icon that blends with secondary text."
            />
          </div>

          <div className="flex items-center gap-4">
            <span>With Learn More link:</span>
            <HelpTooltip
              content="This feature allows you to export your data in various formats."
              learnMoreUrl="https://docs.example.com/export"
              learnMoreLabel="View documentation"
            />
          </div>

          <div className="flex items-center gap-4">
            <span>Different sizes:</span>
            <div className="flex items-center gap-2">
              <HelpTooltip size="sm" content="Small size" />
              <HelpTooltip size="md" content="Medium size (default)" />
              <HelpTooltip size="lg" content="Large size" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

/**
 * LabelWithHelp combines labels with contextual help
 */
export const FormWithHelp: Story = {
  render: () => (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>User Settings Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <LabelWithHelp
            label="API Key"
            helpContent="Your API key is used to authenticate requests to our API. Keep it secure and never share it publicly."
            learnMoreUrl="https://docs.example.com/api-keys"
            required
          />
          <Input type="password" placeholder="Enter your API key" />
        </div>

        <div className="space-y-2">
          <LabelWithHelp
            label="Webhook URL"
            helpContent="Enter the URL where you want to receive webhook notifications. It must be a valid HTTPS endpoint."
            learnMoreUrl="https://docs.example.com/webhooks"
          />
          <Input type="url" placeholder="https://example.com/webhook" />
        </div>

        <div className="space-y-2">
          <LabelWithHelp
            label="Timeout (seconds)"
            helpContent="Maximum time to wait for a response before timing out. Default is 30 seconds. Increase for slower endpoints."
          />
          <Input type="number" defaultValue="30" min="1" max="300" />
        </div>

        <Button>Save Settings</Button>
      </CardContent>
    </Card>
  ),
};

/**
 * HelpDrawer provides a searchable help sidebar
 */
export const HelpDrawerExample: Story = {
  render: () => {
    const { open, openHelp, closeHelp, setOpen } = useHelpDrawer();

    return (
      <div className="space-y-4">
        <Card className="max-w-2xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Dashboard</CardTitle>
              <Button variant="outline" size="sm" onClick={() => openHelp()}>
                <span className="mr-2">?</span>
                Help & Support
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-[var(--ds-color-text-secondary)]">
              Click the "Help & Support" button to open the help drawer with searchable articles.
            </p>
          </CardContent>
        </Card>

        <HelpDrawer
          open={open}
          onOpenChange={setOpen}
          articles={helpArticles}
          supportInfo={{
            email: 'support@example.com',
            phone: '1-800-123-4567',
            chatUrl: 'https://chat.example.com',
          }}
        />
      </div>
    );
  },
};

/**
 * InlineHelp provides embedded documentation
 */
export const InlineHelpVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-3xl">
      <InlineHelp
        variant="info"
        title="Information"
        content="This is an informational message that provides helpful context to the user."
      />

      <InlineHelp
        variant="tip"
        title="Pro Tip"
        content="Use keyboard shortcuts to navigate faster. Press ⌘K to open the command palette."
        learnMoreUrl="https://docs.example.com/shortcuts"
      />

      <InlineHelp
        variant="warning"
        title="Important"
        content="Changes to these settings will affect all users in your organization. Make sure to review before saving."
      />

      <InlineHelp
        variant="note"
        content="API rate limits apply: 100 requests per minute for free tier, 1000 for premium."
      />

      <InlineHelp
        variant="info"
        title="Collapsible Help"
        content="This help section can be collapsed to save space. Click the title to toggle visibility."
        collapsible
        defaultCollapsed={false}
      />
    </div>
  ),
};

/**
 * GlossaryTerm for inline definitions
 */
export const GlossaryExample: Story = {
  render: () => (
    <Card className="max-w-3xl">
      <CardHeader>
        <CardTitle>Documentation with Glossary Terms</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Our platform uses{' '}
          <GlossaryTerm
            term="webhooks"
            definition="Webhooks are HTTP callbacks that deliver real-time data to your application when specific events occur."
            learnMoreUrl="https://docs.example.com/webhooks"
          />{' '}
          to notify your application about events. You can configure webhooks in your{' '}
          <GlossaryTerm
            term="API settings"
            definition="API settings control how your application interacts with our API, including authentication, rate limits, and permissions."
          />
          .
        </p>

        <p>
          When setting up{' '}
          <GlossaryTerm
            term="OAuth 2.0"
            definition="OAuth 2.0 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service."
          />
          , make sure your{' '}
          <GlossaryTerm
            term="redirect URI"
            definition="The redirect URI is the URL where users are sent after authorizing your application. It must match the URI configured in your app settings."
          />{' '}
          is correctly configured.
        </p>

        <InlineHelp
          variant="tip"
          content="Hover over underlined terms to see their definitions. This helps users learn the terminology without leaving the page."
        />
      </CardContent>
    </Card>
  ),
};

/**
 * Complete dashboard with integrated help
 */
export const IntegratedHelpSystem: Story = {
  render: () => {
    const { open, openHelp, setOpen } = useHelpDrawer();

    return (
      <div className="space-y-6 max-w-4xl">
        {/* Header with Help Button */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Project Dashboard</h2>
            <p className="text-[var(--ds-color-text-secondary)]">
              Manage your projects and team
            </p>
          </div>
          <Button variant="outline" onClick={() => openHelp()}>
            <span className="mr-2">?</span>
            Help
          </Button>
        </div>

        {/* Onboarding Tip */}
        <InlineHelp
          variant="tip"
          title="Welcome! 👋"
          content="New to our platform? Check out our getting started guide to learn the basics and set up your first project."
          learnMoreUrl="https://docs.example.com/getting-started"
          collapsible
        />

        {/* Form with Contextual Help */}
        <Card>
          <CardHeader>
            <CardTitle>Create New Project</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <LabelWithHelp
                label="Project Name"
                helpContent="Choose a descriptive name for your project. You can change this later in project settings."
                required
              />
              <Input placeholder="My Awesome Project" />
            </div>

            <div className="space-y-2">
              <LabelWithHelp
                label="Project Type"
                helpContent="Select the type of project you're creating. This determines available features and templates."
                learnMoreUrl="https://docs.example.com/project-types"
              />
              <select className="w-full border rounded-md p-2">
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>API Service</option>
              </select>
            </div>

            <InlineHelp
              variant="info"
              content="Projects are billed based on usage. Free tier includes up to 3 projects with basic features."
              learnMoreUrl="https://example.com/pricing"
            />

            <Button>Create Project</Button>
          </CardContent>
        </Card>

        {/* Help Drawer */}
        <HelpDrawer
          open={open}
          onOpenChange={setOpen}
          articles={helpArticles}
          title="Help Center"
          description="Search our knowledge base or contact support"
          supportInfo={{
            email: 'support@example.com',
            phone: '1-800-EXAMPLE',
            chatUrl: 'https://chat.example.com',
          }}
        />
      </div>
    );
  },
};
