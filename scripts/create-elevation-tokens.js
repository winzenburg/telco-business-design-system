#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🌟 Creating elevation and shadow design tokens...');

// Based on the shadow patterns found in Figma
const elevationSystem = {
  // Light shadows for subtle elevation
  sm: {
    name: 'Small Elevation',
    description: 'Subtle elevation for cards, inputs, and small components',
    boxShadow: '0 2px 8px -3px rgba(221, 221, 226, 1)',
    css: 'box-shadow: 0 2px 8px -3px rgba(221, 221, 226, 1);',
    usage: ['Form inputs', 'Small cards', 'Dropdown elements']
  },
  
  // Medium shadows for cards and panels
  md: {
    name: 'Medium Elevation',
    description: 'Standard elevation for cards, modals, and floating elements',
    boxShadow: '0 4px 12px -4px rgba(0, 0, 0, 0.25)',
    css: 'box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.25);',
    usage: ['Cards', 'Modals', 'Dropdown menus', 'Tooltips']
  },
  
  // Larger shadows for floating elements
  lg: {
    name: 'Large Elevation',
    description: 'Higher elevation for floating panels and overlays',
    boxShadow: '0 8px 16px 0px rgba(0, 0, 0, 0.08), 0 2px 8px 0px rgba(0, 0, 0, 0.04)',
    css: 'box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.08), 0 2px 8px 0px rgba(0, 0, 0, 0.04);',
    usage: ['Toast notifications', 'Floating panels', 'Pop-over content']
  },
  
  // Complex multi-layer shadow (from Toast components)
  xl: {
    name: 'Extra Large Elevation',
    description: 'Maximum elevation for prominent floating elements',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 4px rgba(0, 0, 0, 0.25)',
    css: 'box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 4px rgba(0, 0, 0, 0.25);',
    usage: ['High-priority alerts', 'Critical notifications', 'Primary modal overlays']
  },
  
  // Focus/interaction shadows
  focus: {
    name: 'Focus Elevation',
    description: 'Elevation for focused or active interactive elements',
    boxShadow: '0 0 0 1.5px rgba(13, 98, 255, 1)',
    css: 'box-shadow: 0 0 0 1.5px rgba(13, 98, 255, 1);',
    usage: ['Button focus states', 'Input focus', 'Interactive element highlighting']
  },
  
  // Annotation/documentation shadows
  annotation: {
    name: 'Annotation Elevation',
    description: 'Special elevation for documentation and annotation elements',
    boxShadow: '0 4.2px 12.6px -4.2px rgba(0, 0, 0, 0.25)',
    css: 'box-shadow: 0 4.2px 12.6px -4.2px rgba(0, 0, 0, 0.25);',
    usage: ['Documentation callouts', 'Help tooltips', 'Annotation overlays']
  }
};

// Create Tailwind CSS shadow utilities
const tailwindShadows = {
  'elevation-sm': elevationSystem.sm.boxShadow,
  'elevation-md': elevationSystem.md.boxShadow,
  'elevation-lg': elevationSystem.lg.boxShadow,
  'elevation-xl': elevationSystem.xl.boxShadow,
  'elevation-focus': elevationSystem.focus.boxShadow,
  'elevation-annotation': elevationSystem.annotation.boxShadow
};

// Create CSS custom properties
const cssCustomProperties = Object.entries(elevationSystem).map(([key, shadow]) => 
  `  --elevation-${key}: ${shadow.boxShadow};`
).join('\n');

// Semantic elevation mapping
const semanticElevation = {
  surface: {
    description: 'Base surface with no elevation',
    elevation: 'none',
    zIndex: 0
  },
  raised: {
    description: 'Slightly raised surface (cards, inputs)',
    elevation: 'sm',
    zIndex: 1
  },
  floating: {
    description: 'Floating elements (dropdowns, tooltips)',
    elevation: 'md',
    zIndex: 10
  },
  overlay: {
    description: 'Overlay elements (modals, panels)',
    elevation: 'lg',
    zIndex: 100
  },
  notification: {
    description: 'High-priority notifications and alerts',
    elevation: 'xl',
    zIndex: 1000
  }
};

// Usage guidelines
const elevationUsage = {
  principles: [
    'Use elevation to create visual hierarchy and indicate interactivity',
    'Higher elevation should be reserved for more important or temporary content',
    'Maintain consistency in elevation levels across similar components',
    'Consider accessibility - ensure sufficient contrast with shadows'
  ],
  layering: {
    z0: 'Base surface (backgrounds, static content)',
    z1: 'Raised surface (cards, inputs, buttons)',
    z10: 'Floating elements (dropdowns, tooltips, popovers)',
    z100: 'Overlay elements (modals, slide-outs, full-screen dialogs)',
    z1000: 'Critical notifications and system alerts'
  },
  performance: [
    'Use box-shadow instead of creating actual DOM layers when possible',
    'Avoid animating shadows on low-end devices',
    'Consider using CSS transforms for better performance on hover states'
  ]
};

// Helper functions
const helperFunctions = `
// Helper functions for elevation system
export const getElevation = (level: keyof typeof elevationSystem) => {
  return elevationSystem[level];
};

export const getSemanticElevation = (semantic: keyof typeof semanticElevation) => {
  const semanticLevel = semanticElevation[semantic];
  return semanticLevel.elevation !== 'none' ? elevationSystem[semanticLevel.elevation as keyof typeof elevationSystem] : null;
};

export const createElevationStyle = (level: keyof typeof elevationSystem) => ({
  boxShadow: elevationSystem[level].boxShadow,
  zIndex: semanticElevation[level] ? semanticElevation[level].zIndex : 'auto'
});
`;

// Generate the TypeScript file
const content = `// Comcast Business Design System - Elevation & Shadow Tokens
// Auto-generated from Figma shadow analysis
// Generated on ${new Date().toISOString()}

export interface ElevationLevel {
  name: string;
  description: string;
  boxShadow: string;
  css: string;
  usage: string[];
}

export interface SemanticElevation {
  description: string;
  elevation: string;
  zIndex: number;
}

// Elevation system based on Figma design patterns
export const elevationSystem = ${JSON.stringify(elevationSystem, null, 2)} as const;

// Semantic elevation mapping
export const semanticElevation = ${JSON.stringify(semanticElevation, null, 2)} as const;

// Tailwind CSS shadow utilities
export const tailwindShadows = ${JSON.stringify(tailwindShadows, null, 2)} as const;

// Usage guidelines and best practices
export const elevationUsage = ${JSON.stringify(elevationUsage, null, 2)} as const;

// CSS Custom Properties for use in stylesheets
export const cssCustomProperties = \`
:root {
${cssCustomProperties}
}
\`;

${helperFunctions}

// Type definitions
export type ElevationLevel = keyof typeof elevationSystem;
export type SemanticElevationLevel = keyof typeof semanticElevation;

// Default export
export default {
  elevationSystem,
  semanticElevation,
  tailwindShadows,
  elevationUsage,
  cssCustomProperties,
  getElevation,
  getSemanticElevation,
  createElevationStyle
} as const;
`;

// Write the elevation tokens file
const tokensFile = path.join(__dirname, '../src/tokens/design-system-elevation.ts');
fs.writeFileSync(tokensFile, content);

console.log('✅ Created design-system-elevation.ts');
console.log(`📝 Generated ${Object.keys(elevationSystem).length} elevation levels`);
console.log(`🎯 Created ${Object.keys(semanticElevation).length} semantic elevation mappings`);
console.log(`🎨 Generated ${Object.keys(tailwindShadows).length} Tailwind shadow utilities`);
console.log('🌟 Elevation system ready for use!');

// Log the elevation levels for reference
console.log('\n📊 ELEVATION LEVELS CREATED:');
Object.entries(elevationSystem).forEach(([key, level]) => {
  console.log(`   ${key}: ${level.name} - ${level.description}`);
});

console.log('\n🔄 SEMANTIC MAPPINGS:');
Object.entries(semanticElevation).forEach(([key, semantic]) => {
  console.log(`   ${key}: ${semantic.description} (z-index: ${semantic.zIndex})`);
});