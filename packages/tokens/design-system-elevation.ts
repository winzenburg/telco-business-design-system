// Comcast Business Design System - Elevation & Shadow Tokens
// Auto-generated from Figma shadow analysis
// Generated on 2025-08-06T00:23:05.895Z

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
export const elevationSystem = {
  "sm": {
    "name": "Small Elevation",
    "description": "Subtle elevation for cards, inputs, and small components",
    "boxShadow": "0 2px 8px -3px rgba(221, 221, 226, 1)",
    "css": "box-shadow: 0 2px 8px -3px rgba(221, 221, 226, 1);",
    "usage": [
      "Form inputs",
      "Small cards",
      "Dropdown elements"
    ]
  },
  "md": {
    "name": "Medium Elevation",
    "description": "Standard elevation for cards, modals, and floating elements",
    "boxShadow": "0 4px 12px -4px rgba(0, 0, 0, 0.25)",
    "css": "box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.25);",
    "usage": [
      "Cards",
      "Modals",
      "Dropdown menus",
      "Tooltips"
    ]
  },
  "lg": {
    "name": "Large Elevation",
    "description": "Higher elevation for floating panels and overlays",
    "boxShadow": "0 8px 16px 0px rgba(0, 0, 0, 0.08), 0 2px 8px 0px rgba(0, 0, 0, 0.04)",
    "css": "box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.08), 0 2px 8px 0px rgba(0, 0, 0, 0.04);",
    "usage": [
      "Toast notifications",
      "Floating panels",
      "Pop-over content"
    ]
  },
  "xl": {
    "name": "Extra Large Elevation",
    "description": "Maximum elevation for prominent floating elements",
    "boxShadow": "0 8px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 4px rgba(0, 0, 0, 0.25)",
    "css": "box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 4px rgba(0, 0, 0, 0.25);",
    "usage": [
      "High-priority alerts",
      "Critical notifications",
      "Primary modal overlays"
    ]
  },
  "focus": {
    "name": "Focus Elevation",
    "description": "Elevation for focused or active interactive elements",
    "boxShadow": "0 0 0 1.5px rgba(13, 98, 255, 1)",
    "css": "box-shadow: 0 0 0 1.5px rgba(13, 98, 255, 1);",
    "usage": [
      "Button focus states",
      "Input focus",
      "Interactive element highlighting"
    ]
  },
  "annotation": {
    "name": "Annotation Elevation",
    "description": "Special elevation for documentation and annotation elements",
    "boxShadow": "0 4.2px 12.6px -4.2px rgba(0, 0, 0, 0.25)",
    "css": "box-shadow: 0 4.2px 12.6px -4.2px rgba(0, 0, 0, 0.25);",
    "usage": [
      "Documentation callouts",
      "Help tooltips",
      "Annotation overlays"
    ]
  }
} as const;

// Semantic elevation mapping
export const semanticElevation = {
  "surface": {
    "description": "Base surface with no elevation",
    "elevation": "none",
    "zIndex": 0
  },
  "raised": {
    "description": "Slightly raised surface (cards, inputs)",
    "elevation": "sm",
    "zIndex": 1
  },
  "floating": {
    "description": "Floating elements (dropdowns, tooltips)",
    "elevation": "md",
    "zIndex": 10
  },
  "overlay": {
    "description": "Overlay elements (modals, panels)",
    "elevation": "lg",
    "zIndex": 100
  },
  "notification": {
    "description": "High-priority notifications and alerts",
    "elevation": "xl",
    "zIndex": 1000
  }
} as const;

// Tailwind CSS shadow utilities
export const tailwindShadows = {
  "elevation-sm": "0 2px 8px -3px rgba(221, 221, 226, 1)",
  "elevation-md": "0 4px 12px -4px rgba(0, 0, 0, 0.25)",
  "elevation-lg": "0 8px 16px 0px rgba(0, 0, 0, 0.08), 0 2px 8px 0px rgba(0, 0, 0, 0.04)",
  "elevation-xl": "0 8px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 4px rgba(0, 0, 0, 0.25)",
  "elevation-focus": "0 0 0 1.5px rgba(13, 98, 255, 1)",
  "elevation-annotation": "0 4.2px 12.6px -4.2px rgba(0, 0, 0, 0.25)"
} as const;

// Usage guidelines and best practices
export const elevationUsage = {
  "principles": [
    "Use elevation to create visual hierarchy and indicate interactivity",
    "Higher elevation should be reserved for more important or temporary content",
    "Maintain consistency in elevation levels across similar components",
    "Consider accessibility - ensure sufficient contrast with shadows"
  ],
  "layering": {
    "z0": "Base surface (backgrounds, static content)",
    "z1": "Raised surface (cards, inputs, buttons)",
    "z10": "Floating elements (dropdowns, tooltips, popovers)",
    "z100": "Overlay elements (modals, slide-outs, full-screen dialogs)",
    "z1000": "Critical notifications and system alerts"
  },
  "performance": [
    "Use box-shadow instead of creating actual DOM layers when possible",
    "Avoid animating shadows on low-end devices",
    "Consider using CSS transforms for better performance on hover states"
  ]
} as const;

// CSS Custom Properties for use in stylesheets
export const cssCustomProperties = `
:root {
  --elevation-sm: 0 2px 8px -3px rgba(221, 221, 226, 1);
  --elevation-md: 0 4px 12px -4px rgba(0, 0, 0, 0.25);
  --elevation-lg: 0 8px 16px 0px rgba(0, 0, 0, 0.08), 0 2px 8px 0px rgba(0, 0, 0, 0.04);
  --elevation-xl: 0 8px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 4px rgba(0, 0, 0, 0.25);
  --elevation-focus: 0 0 0 1.5px rgba(13, 98, 255, 1);
  --elevation-annotation: 0 4.2px 12.6px -4.2px rgba(0, 0, 0, 0.25);
}
`;


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
