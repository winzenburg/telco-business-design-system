/** @type {import('tailwindcss').Config} */
const designSystemConfig = require('../../tailwind.config.js');

module.exports = {
  // Extend the design system config
  ...designSystemConfig,
  content: [
    './index.html',
    './auto-attendant-prototype.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
    // Include design system components if needed
    '../../src/components/**/*.{js,ts,jsx,tsx}',
  ],
};
