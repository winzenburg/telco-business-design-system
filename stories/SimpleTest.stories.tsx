import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Completely isolated component with no dependencies
const SimpleTest = ({ message = "Hello World" }: { message?: string }) => (
  <div style={{ 
    padding: '20px', 
    background: '#f0f0f0', 
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif'
  }}>
    <h1 style={{ color: '#333', margin: 0 }}>{message}</h1>
    <p style={{ color: '#666', margin: '10px 0 0 0' }}>
      This is a simple test component with no external dependencies.
    </p>
  </div>
);

const meta: Meta<typeof SimpleTest> = {
  title: 'SimpleTest',
  component: SimpleTest,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SimpleTest>;

export const Default: Story = {
  args: {
    message: 'Simple Test Working!'
  },
};