const { injectAxe, checkA11y } = require('@axe-core/playwright');

module.exports = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page) {
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      rules: {
        // Enterprise-specific accessibility rules
        'color-contrast': { enabled: true },
        'keyboard-navigation': { enabled: true },
        'focus-order-semantics': { enabled: true },
        // Disable problematic rules for design system stories
        'region': { enabled: false }, // Stories don't need landmark regions
        'page-has-heading-one': { enabled: false }, // Stories may not have h1
      }
    });
  },
};