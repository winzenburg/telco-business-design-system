// Pattern Tracker - Monitors compliance with Figma design patterns
// Auto-updates as components are refined

export interface PatternCompliance {
  component: string;
  typography: {
    labelPattern: boolean;
    bodyS: boolean;
    bodyXS: boolean;
    fontFamilies: boolean;
  };
  layout: {
    borderRadius: boolean;
    flexLayout: boolean;
    iconSizing: boolean;
    spacing: boolean;
  };
  colors: {
    neutralPalette: boolean;
    stateColors: boolean;
    consistency: boolean;
  };
  states: {
    interactive: boolean;
    errorHandling: boolean;
    focusManagement: boolean;
    accessibility: boolean;
  };
  lastUpdated: string;
  figmaVersion: string;
}

// Current pattern compliance status
export const patternCompliance: PatternCompliance[] = [
  {
    component: 'Input',
    typography: {
      labelPattern: true,
      bodyS: true,
      bodyXS: true,
      fontFamilies: true,
    },
    layout: {
      borderRadius: true,
      flexLayout: true,
      iconSizing: true,
      spacing: true,
    },
    colors: {
      neutralPalette: true,
      stateColors: true,
      consistency: true,
    },
    states: {
      interactive: true,
      errorHandling: true,
      focusManagement: true,
      accessibility: true,
    },
    lastUpdated: '2025-08-13',
    figmaVersion: 'v2.1.0',
  },
  {
    component: 'Label',
    typography: {
      labelPattern: true,
      bodyS: false,
      bodyXS: false,
      fontFamilies: true,
    },
    layout: {
      borderRadius: false,
      flexLayout: true,
      iconSizing: false,
      spacing: true,
    },
    colors: {
      neutralPalette: true,
      stateColors: false,
      consistency: true,
    },
    states: {
      interactive: false,
      errorHandling: false,
      focusManagement: false,
      accessibility: true,
    },
    lastUpdated: '2025-08-13',
    figmaVersion: 'v2.1.0',
  },
  {
    component: 'Textarea',
    typography: {
      labelPattern: false,
      bodyS: true,
      bodyXS: false,
      fontFamilies: true,
    },
    layout: {
      borderRadius: true,
      flexLayout: true,
      iconSizing: false,
      spacing: true,
    },
    colors: {
      neutralPalette: true,
      stateColors: true,
      consistency: true,
    },
    states: {
      interactive: true,
      errorHandling: true,
      focusManagement: true,
      accessibility: true,
    },
    lastUpdated: '2025-08-13',
    figmaVersion: 'v2.1.0',
  },
  {
    component: 'Checkbox',
    typography: {
      labelPattern: true,
      bodyS: false,
      bodyXS: true,
      fontFamilies: true,
    },
    layout: {
      borderRadius: true,
      flexLayout: true,
      iconSizing: false,
      spacing: true,
    },
    colors: {
      neutralPalette: true,
      stateColors: true,
      consistency: true,
    },
    states: {
      interactive: true,
      errorHandling: true,
      focusManagement: true,
      accessibility: true,
    },
    lastUpdated: '2025-08-13',
    figmaVersion: 'v2.1.0',
  },
  {
    component: 'Button',
    typography: {
      labelPattern: false,
      bodyS: true,
      bodyXS: false,
      fontFamilies: true,
    },
    layout: {
      borderRadius: true,
      flexLayout: true,
      iconSizing: true,
      spacing: true,
    },
    colors: {
      neutralPalette: true,
      stateColors: true,
      consistency: true,
    },
    states: {
      interactive: true,
      errorHandling: false,
      focusManagement: true,
      accessibility: true,
    },
    lastUpdated: '2025-08-13',
    figmaVersion: 'v2.1.0',
  },
];

// Pattern definitions from Figma
export const figmaPatterns = {
  typography: {
    label: {
      css: 'display: flex; align-items: center; gap: 4px; color: neutral/black;',
      tailwind: 'flex items-center gap-1 text-sm font-medium text-black font-primary',
      figmaProperty: 'Label Typography',
    },
    bodyS: {
      css: 'font-family: Lato; font-size: 14px; font-weight: 400; line-height: 130%;',
      styles: { fontSize: 'var(--ds-font-size-sm)', lineHeight: 'var(--ds-line-height-normal)', fontWeight: '400', letterSpacing: '0' },
      tailwind: 'font-secondary font-normal leading-[130%] tracking-normal',
      figmaProperty: 'body/S',
    },
    bodyXS: {
      css: 'font-family: Lato; font-size: 12px; font-weight: 400; line-height: 130%;',
      styles: { fontSize: 'var(--ds-font-size-xs)', lineHeight: 'var(--ds-line-height-tight)', fontWeight: '400', letterSpacing: '0' },
      tailwind: 'font-secondary font-normal leading-[130%] tracking-normal',
      figmaProperty: 'body/XS',
    },
  },
  layout: {
    borderRadius: {
      css: 'border-radius: 4px;',
      tailwind: 'rounded-[4px]',
      figmaProperty: 'Border Radius Small',
    },
    inputField: {
      css: 'display: flex; height: 40px; padding: 9px 13px; align-items: center; gap: 7px;',
      tailwind: 'flex w-full items-center gap-[7px] h-10 px-[13px] py-[9px]',
      figmaProperty: 'Input Field',
    },
    icon: {
      css: 'display: flex; width: 16px; height: 16px; align-items: flex-start; gap: 10px;',
      tailwind: 'flex w-4 h-4 items-start gap-[10px]',
      figmaProperty: 'Icon',
    },
  },
  colors: {
    neutralBlack: { hex: 'var(--ds-color-black)', tailwind: 'text-black', figmaToken: 'neutral/black' },
    neutralGrey600: { hex: 'var(--ds-color-neutral-600)', tailwind: 'text-gray-600', figmaToken: 'neutral/grey-600' },
    neutralGrey800: { hex: 'var(--ds-color-neutral-800)', tailwind: 'text-gray-800', figmaToken: 'neutral/grey-800' },
    neutralGrey400: { hex: 'var(--ds-color-neutral-400)', tailwind: 'border-gray-400', figmaToken: 'neutral/grey-400' },
    focusBlue: { hex: 'var(--ds-color-intent-primary)', tailwind: 'border-primary-500', figmaToken: 'primary/blue' },
    errorRed: { hex: 'var(--ds-color-red-500)', tailwind: 'text-red-500', figmaToken: 'error/red' },
    successGreen: { hex: 'var(--ds-color-green-600)', tailwind: 'text-green-600', figmaToken: 'success/green' },
  },
};

// Helper functions
export const getPatternCompliance = (componentName: string): PatternCompliance | undefined => {
  return patternCompliance.find(comp => comp.component === componentName);
};

export const getOverallCompliance = (): number => {
  const totalChecks = patternCompliance.reduce((acc, comp) => {
    const checks = Object.values(comp.typography).length +
                  Object.values(comp.layout).length +
                  Object.values(comp.colors).length +
                  Object.values(comp.states).length;
    return acc + checks;
  }, 0);

  const passedChecks = patternCompliance.reduce((acc, comp) => {
    const passed = Object.values(comp.typography).filter(Boolean).length +
                  Object.values(comp.layout).filter(Boolean).length +
                  Object.values(comp.colors).filter(Boolean).length +
                  Object.values(comp.states).filter(Boolean).length;
    return acc + passed;
  }, 0);

  return Math.round((passedChecks / totalChecks) * 100);
};

export const getComponentsByCompliance = (threshold: number = 80): {
  compliant: string[];
  needsWork: string[];
} => {
  const compliant: string[] = [];
  const needsWork: string[] = [];

  patternCompliance.forEach(comp => {
    const total = Object.values(comp.typography).length +
                 Object.values(comp.layout).length +
                 Object.values(comp.colors).length +
                 Object.values(comp.states).length;

    const passed = Object.values(comp.typography).filter(Boolean).length +
                  Object.values(comp.layout).filter(Boolean).length +
                  Object.values(comp.colors).filter(Boolean).length +
                  Object.values(comp.states).filter(Boolean).length;

    const percentage = (passed / total) * 100;

    if (percentage >= threshold) {
      compliant.push(comp.component);
    } else {
      needsWork.push(comp.component);
    }
  });

  return { compliant, needsWork };
};

// Update pattern compliance when components are refined
export const updatePatternCompliance = (
  componentName: string,
  updates: Partial<Omit<PatternCompliance, 'component' | 'lastUpdated' | 'figmaVersion'>>,
): void => {
  const index = patternCompliance.findIndex(comp => comp.component === componentName);

  if (index !== -1) {
    patternCompliance[index] = {
      ...patternCompliance[index],
      ...updates,
      lastUpdated: new Date().toISOString().split('T')[0],
      figmaVersion: 'v2.1.0', // Update as needed
    };
  } else {
    // Add new component
    patternCompliance.push({
      component: componentName,
      typography: {
        labelPattern: false,
        bodyS: false,
        bodyXS: false,
        fontFamilies: false,
      },
      layout: {
        borderRadius: false,
        flexLayout: false,
        iconSizing: false,
        spacing: false,
      },
      colors: {
        neutralPalette: false,
        stateColors: false,
        consistency: false,
      },
      states: {
        interactive: false,
        errorHandling: false,
        focusManagement: false,
        accessibility: false,
      },
      ...updates,
      lastUpdated: new Date().toISOString().split('T')[0],
      figmaVersion: 'v2.1.0',
    });
  }
};

export default {
  patternCompliance,
  figmaPatterns,
  getPatternCompliance,
  getOverallCompliance,
  getComponentsByCompliance,
  updatePatternCompliance,
};
