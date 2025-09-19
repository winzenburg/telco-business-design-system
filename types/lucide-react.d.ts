declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }
  
  export type LucideIcon = FC<LucideProps>;
  
  export const AlertCircle: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const X: LucideIcon;
  export const Check: LucideIcon;
  export const Calendar: LucideIcon;
  export const Clock: LucideIcon;
  export const User: LucideIcon;
  export const Settings: LucideIcon;
  export const Menu: LucideIcon;
  export const Search: LucideIcon;
  export const Bell: LucideIcon;
  export const Home: LucideIcon;
  export const Mail: LucideIcon;
  export const Phone: LucideIcon;
  export const MapPin: LucideIcon;
  export const Info: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const XCircle: LucideIcon;
  export const Eye: LucideIcon;
  export const EyeOff: LucideIcon;
  export const Download: LucideIcon;
  export const Upload: LucideIcon;
  export const Edit: LucideIcon;
  export const Trash: LucideIcon;
  export const Plus: LucideIcon;
  export const Minus: LucideIcon;
  export const Star: LucideIcon;
  export const Heart: LucideIcon;
  export const Share: LucideIcon;
  export const Copy: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Link: LucideIcon;
  export const Bookmark: LucideIcon;
  export const Tag: LucideIcon;
  export const Filter: LucideIcon;
  export const Sort: LucideIcon;
  export const Grid: LucideIcon;
  export const List: LucideIcon;
  export const Layout: LucideIcon;
  export const Sidebar: LucideIcon;
  export const Maximize: LucideIcon;
  export const Minimize: LucideIcon;
  export const Refresh: LucideIcon;
  export const RotateCcw: LucideIcon;
  export const RotateCw: LucideIcon;
  export const ArrowUp: LucideIcon;
  export const ArrowDown: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const ArrowDownRight: LucideIcon;
  export const ArrowDownLeft: LucideIcon;
  export const ArrowUpLeft: LucideIcon;
  export const MoreHorizontal: LucideIcon;
  export const MoreVertical: LucideIcon;
}