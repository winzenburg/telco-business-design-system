// Comcast Business Design System - Icon Type Definitions
// Build-safe version without SVG imports

// Icon data structure
export interface IconData {
  name: string;
  id: string;
  type: string;
  size: {
    width: number;
    height: number;
  } | null;
  category: string;
  description: string;
  key: string;
  exportable: boolean;
  fileName?: string;
  filePath?: string;
  relativePath?: string;
}

// Core icon names (build-safe list without imports)
export const coreIconNames = [
  // Original icons
  "blockers", "numbers", "configure", "device", "document", "folder",
  "performancethreshold", "feedback", "conference", "wallet", "internet",
  "wifi", "analytics", "clipboard", "byod", "shareddata", "shoppingbag",
  "fees", "bell", "close", "backarrow", "menu", "contextmenu", "refresh",
  "externallink2", "externallink1", "maximize", "minimize", "directionright",
  "directiondown", "directionleft", "directionup", "stateunsorted",
  "stateascending", "statedescending", "alert", "check", "chevron", "arrow",
  "doublechevron", "globalnav", "plus", "minus", "search", "download", "upload",
  // All icons from icon-registry
  "avpause", "avplay", "avrecord", "avstop", "browser", "camera", "cartempty",
  "chat", "cloud", "cloudupload", "complete", "ethernet", "filteralt", "grabber",
  "login", "logout", "message", "money", "notifications", "password", "paymentcard",
  "percent", "piechart", "playcircle", "portal", "pricetag", "report",
  "securityquestion", "sort", "switchaccounts", "users", "variantlockedtypefilled",
  "variantlockedtypeoutline", "variantunlockedtypefilled", "variantunlockedtypeoutline",
  "video", "voicemail",
  // Additional UI icons
  "filter", "edit", "delete", "copy", "paste", "undo", "redo",
  "save", "share", "print", "export", "import", "link", "unlink", "eye",
  "eyeOff", "lock", "unlock", "user", "settings", "help", "info",
  "warning", "error", "success", "star", "heart", "thumbsUp", "thumbsDown",
  "comment", "calendar", "clock", "location", "map", "phone", "email",
  "notification", "attachment", "image", "audio",
  "file", "code", "terminal", "database", "server", "sync",
  "backup", "restore", "trash", "archive", "flag", "bookmark", "tag",
  "label", "category", "home", "dashboard", "chart", "graph"
] as const;

// Type definitions
export type CoreIconName = typeof coreIconNames[number];
export type IconName = CoreIconName;
export type IconCategory = 'navigation' | 'actions' | 'content' | 'communication' | 'system';
export type IconSize = '12x12' | '16x16' | '20x20' | '24x24' | '32x32' | '48x48' | '64x64' | '80x80';
export type CommonIconSize = '16x16' | '20x20' | '24x24';

// Icons object for registry
export const icons = coreIconNames.reduce((acc, name) => {
  acc[name] = {
    name,
    id: name,
    type: 'icon',
    size: { width: 24, height: 24 },
    category: 'system',
    description: `${name} icon`,
    key: name,
    exportable: true
  };
  return acc;
}, {} as Record<CoreIconName, IconData>);

// Icons organized by category
export const iconsByCategory = {
  navigation: coreIconNames.filter(name => ['backarrow', 'directionright', 'directiondown', 'directionleft', 'directionup'].includes(name)),
  actions: coreIconNames.filter(name => ['close', 'menu', 'contextmenu', 'refresh', 'maximize', 'minimize'].includes(name)),
  content: coreIconNames.filter(name => ['document', 'folder', 'clipboard'].includes(name)),
  communication: coreIconNames.filter(name => ['bell', 'feedback', 'conference'].includes(name)),
  system: coreIconNames.filter(name => !['backarrow', 'directionright', 'directiondown', 'directionleft', 'directionup', 'close', 'menu', 'contextmenu', 'refresh', 'maximize', 'minimize', 'document', 'folder', 'clipboard', 'bell', 'feedback', 'conference'].includes(name))
};

// Icon categories
export const iconCategories = Object.keys(iconsByCategory) as IconCategory[];

// Common icon sizes
export const commonIconSizes = {
  '16x16': { width: 16, height: 16 },
  '20x20': { width: 20, height: 20 },
  '24x24': { width: 24, height: 24 }
} as const;

// Icon registry functions (without SVG loading)
export const getIconMetadata = (name: CoreIconName): IconData | undefined => {
  return icons[name];
};

export const getIconPath = (name: CoreIconName): string => {
  return `/icons/${name}.svg`;
};

export const getIcon = (name: CoreIconName): IconData | undefined => {
  return icons[name];
};

export const getIconsByCategory = (category: IconCategory): IconData[] => {
  return iconsByCategory[category]?.map(name => icons[name]).filter(Boolean) || [];
};

// Icon usage guidelines
export const iconUsage = {
  sizing: {
    description: "Use consistent icon sizes for visual hierarchy",
    recommended: ["16x16", "20x20", "24x24"],
    guidelines: [
      "Use 16px icons for inline text and small UI elements",
      "Use 20px icons for standard interface elements", 
      "Use 24px icons for prominent actions and navigation",
      "Maintain consistent sizing within component groups"
    ]
  },
  
  accessibility: {
    description: "Icons should be accessible and meaningful to all users",
    guidelines: [
      "Always provide alt text or aria-labels for icons",
      "Use icons that are universally understood",
      "Provide text labels alongside icons when possible",
      "Ensure sufficient color contrast for icon visibility"
    ]
  }
} as const;