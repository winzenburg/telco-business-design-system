import React from 'react';
import type { Preview } from '@storybook/react';
import '../packages/tokens/css-variables.css';
import '../src/styles/tailwind.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Components',
          ['Accordion', 'Alert', 'Avatar', 'Badge', 'Breadcrumb', 'Button', 'Card', 'Chart', 'Checkbox', 'Command', 'Dialog', 'FormElements', 'GlobalNavigation', 'Input', 'Label', 'List', 'Menu', 'Navigation', 'Popover', 'Progress', 'RadioGroup', 'Select', 'Separator', 'Sheet', 'Skeleton', 'Slider', 'Switch', 'Table', 'Tabs', 'Textarea', 'Toast', 'Tooltip'],
          'Design System',
          ['Elevation & Shadows', 'Grid & Layout', 'Icons', 'Spacing', 'Token Patterns', 'Typography'],
          'Enterprise',
          ['Billing', 'Dashboard', 'Reports', 'Service Management', 'Settings', 'User Management', 'Workflows'],
        ],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#171717',
        },
        {
          name: 'gray',
          value: '#f5f5f5',
        },
        {
          name: 'page',
          value: '#EDEFEF',
        },
      ],
    },
  },
  decorators: [
    (Story) => <Story />,
  ],
};

export default preview; 