import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../packages/docs/stories/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    if (config.build) {
      config.build.sourcemap = false;
    }
    config.logLevel = 'error';

    // Ensure CSS variables are processed correctly
    if (!config.css) {
      config.css = {};
    }
    if (!config.css.preprocessorOptions) {
      config.css.preprocessorOptions = {};
    }

    // Configure file serving permissions - allow access to entire project
    if (!config.server) {
      config.server = {};
    }
    if (!config.server.fs) {
      config.server.fs = {};
    }
    if (!config.server.fs.allow) {
      config.server.fs.allow = [];
    }
    
    // Allow access to entire project directory
    config.server.fs.allow.push('..');

    // Alternative approach: configure resolve alias
    if (!config.resolve) {
      config.resolve = {};
    }
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    
    config.resolve.alias['@tokens'] = '/packages/tokens';
    config.resolve.alias['@styles'] = '/src/styles';

    return config;
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: true,
    reactDocgen: false,
  },
};

export default config; 