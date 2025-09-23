import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Test/CSS Debug',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TailwindTest: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tailwind CSS Test</h2>

      <div className="space-y-4">
        {/* Basic colors and borders */}
        <div className="p-4 bg-red-500 text-white border-2 border-blue-500">
          Red background, white text, blue border
        </div>

        {/* Custom colors */}
        <div className="p-4 bg-primary-500 text-white border border-gray-300">
          Primary background (should be Comcast blue)
        </div>

        {/* Complex styling */}
        <button className="px-4 py-2 bg-blue-500 text-white border border-gray-300 rounded hover:bg-blue-600">
          Test Button
        </button>

        {/* Inline styles as fallback */}
        <div style={{
          padding: 'var(--ds-spacing-4)',
          backgroundColor: 'var(--ds-color-intent-primary)',
          color: 'white',
          border: 'var(--ds-spacing-0.5) solid var(--ds-color-black)',
          borderRadius: 'var(--ds-radius-sm)',
        }}>
          Inline styles (fallback)
        </div>
      </div>
    </div>
  ),
};
