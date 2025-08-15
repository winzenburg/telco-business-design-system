// Minimal working icon tokens for testing
export interface IconData {
  name: string;
  id: string;
  category: string;
  key: string;
}

export const icons = {
  "analytics": { name: "Analytics", id: "figma-analytics", category: "general", key: "analytics" },
  "bell": { name: "Bell", id: "figma-bell", category: "general", key: "bell" },
  "users": { name: "Users", id: "figma-users", category: "general", key: "users" },
  "grid": { name: "Grid", id: "figma-grid", category: "general", key: "grid" }
} as const;

export const getIcon = (key: string): IconData | undefined => {
  return icons[key as keyof typeof icons];
};

export const iconsByCategory = {
  general: icons
} as const;

export const getIconsByCategory = (category: string) => {
  return iconsByCategory[category as keyof typeof iconsByCategory] || {};
};

export const iconCategories = ['general'] as const;

export const commonIconSizes = {
  xs: "16x16",
  sm: "20x20", 
  md: "24x24",
  lg: "32x32",
  xl: "48x48"
} as const;

export const iconUsage = {
  loading: "Icons are loaded from public/icons/ directory via fetch",
  sizing: "Use consistent sizes: 16px, 20px, 24px, 32px, 48px",
  accessibility: "All icons include proper ARIA labels and titles",
  performance: "Icons are loaded on-demand and cached by the browser"
} as const;

export type IconName = keyof typeof icons;
export type IconCategory = keyof typeof iconsByCategory;

export default {
  icons,
  iconsByCategory,
  iconCategories,
  commonIconSizes,
  iconUsage,
  getIcon,
  getIconsByCategory
} as const;