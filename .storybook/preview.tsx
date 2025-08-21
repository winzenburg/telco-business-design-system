import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/tailwind.css';

const preview: Preview = {
  parameters: {
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
      ],
    },
  },
  decorators: [
    (Story) => <Story />,
  ],
};

export default preview; 