// Optimized exports for tree-shaking and smaller bundle size

// Core Components
export { Button, buttonVariants } from './ui/button';
export { Input } from './ui/input';
export { Label } from './ui/label';
export { Badge, badgeVariants } from './ui/badge';

// Form Components
export { Checkbox } from './ui/checkbox';
export { RadioGroup, RadioGroupItem } from './ui/radio-group';
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
export { Slider } from './ui/slider';
export { Switch } from './ui/switch';
export { Textarea } from './ui/textarea';

// Layout Components
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardMedia, CardActions, CardDivider } from './ui/card';
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
export { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
export { Separator } from './ui/separator';

// Feedback Components
export { Alert, AlertDescription, AlertTitle, AlertActions } from './ui/alert';
export { Progress } from './ui/progress';
export { Skeleton } from './ui/skeleton';
export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './ui/toast';

// Overlay Components
export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

export {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipHeader, TooltipBody, TooltipArrow } from './ui/tooltip';

// Menu Components (DropdownMenu is an alias)
export {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuLabel,
  MenuSeparator,
  MenuShortcut,
  MenuGroup,
  MenuPortal,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuRadioGroup,
} from './ui/menu';

// DropdownMenu aliases for backwards compatibility
export {
  Menu as DropdownMenu,
  MenuTrigger as DropdownMenuTrigger,
  MenuContent as DropdownMenuContent,
  MenuItem as DropdownMenuItem,
  MenuCheckboxItem as DropdownMenuCheckboxItem,
  MenuRadioItem as DropdownMenuRadioItem,
  MenuLabel as DropdownMenuLabel,
  MenuSeparator as DropdownMenuSeparator,
  MenuGroup as DropdownMenuGroup,
  MenuPortal as DropdownMenuPortal,
  MenuSub as DropdownMenuSub,
  MenuSubContent as DropdownMenuSubContent,
  MenuSubTrigger as DropdownMenuSubTrigger,
  MenuRadioGroup as DropdownMenuRadioGroup,
} from './ui/menu';

// Navigation
export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

// Data Display
export { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
export { List, ListItem, ListSection, ListItemContent, ListItemLeading, ListItemTrailing, ListItemText, ListItemSecondaryText, ListItemSupportingText, ListSectionHeader, ListDivider } from './ui/list';
export { Typography } from './ui/typography';
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from './ui/chart';

// Aliases
export { Label as FormLabel } from './ui/label';

// Command Components
export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './ui/command';

// Table Components
export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

// Utilities
export { cn } from '../utils/cn';

// Type exports - separate for better tree-shaking
export type { ButtonProps } from './ui/button';
export type { InputProps } from './ui/input';
export type { BadgeProps } from './ui/badge';
export type { CheckboxProps } from './ui/checkbox';
export type { CardProps } from './ui/card';
export type { TabsListProps, TabsTriggerProps } from './ui/tabs';
export type { ToastProps, ToastActionElement } from './ui/toast';
export type { TypographyProps } from './ui/typography';
