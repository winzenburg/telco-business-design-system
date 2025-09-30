import React from 'react';
import type { Preview } from '@storybook/react';
import './css-variables.css';
import './tailwind.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Foundations',
          ['Colors', 'Typography', 'Spacing', 'Grid & Layout', 'Elevation & Shadows', 'Icons', 'Token Patterns'],
          'Components',
          ['Accordion', 'Alert', 'Avatar', 'Badge', 'Breadcrumb', 'Button', 'Calendar', 'Card', 'Chart', 'Checkbox', 'Combobox', 'Command', 'DatePicker', 'Dialog', 'DropdownMenu', 'FormElements', 'GlobalNavigation', 'Input', 'Label', 'List', 'Menu', 'Navigation', 'Popover', 'Progress', 'RadioGroup', 'Select', 'Separator', 'Sheet', 'Skeleton', 'Slider', 'Switch', 'Table', 'Tabs', 'Textarea', 'Toast', 'Tooltip'],
          'Patterns',
          ['Empty States'],
          'Workflows',
          ['Checkout Process', 'Data Dashboard', 'Settings Management', 'User Onboarding'],
          'Enterprise',
          ['Billing', 'Dashboard', 'Reports', 'Service Management', 'Settings', 'User Management'],
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