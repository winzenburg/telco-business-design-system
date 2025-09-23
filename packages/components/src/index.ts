// Optimized exports for tree-shaking and smaller bundle size

// Core Components
export { Button, buttonVariants } from '../ui/button';
export { Input } from '../ui/input';
export { Label } from '../ui/label';
export { Badge, badgeVariants } from '../ui/badge';

// Form Components
export { Checkbox } from '../ui/checkbox';
export { RadioGroup, RadioGroupItem } from '../ui/radio-group';
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
export { Slider } from '../ui/slider';
export { Switch } from '../ui/switch';
export { Textarea } from '../ui/textarea';

// Layout Components
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
export { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
export { Separator } from '../ui/separator';

// Feedback Components
export { Alert, AlertDescription, AlertTitle } from '../ui/alert';
export { Progress } from '../ui/progress';
export { Skeleton } from '../ui/skeleton';
export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  useToast,
} from '../ui/toast';

// Overlay Components
export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

export {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';

export { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

// Navigation
export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

// Data Display
export { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
export { List, ListItem, ListSection, ListHeader, NavigationListItem } from '../ui/list';
export { Typography } from '../ui/typography';

// Aliases
export { Label as FormLabel } from '../ui/label';

// Utilities
export { cn } from '../utils/cn';

// Type exports - separate for better tree-shaking
export type { ButtonProps } from '../ui/button';
export type { InputProps } from '../ui/input';
export type { LabelProps } from '../ui/label';
export type { BadgeProps } from '../ui/badge';
export type { CheckboxProps } from '../ui/checkbox';
export type { SelectProps } from '../ui/select';
export type { SliderProps } from '../ui/slider';
export type { SwitchProps } from '../ui/switch';
export type { TextareaProps } from '../ui/textarea';
export type { CardProps } from '../ui/card';
export type { AccordionProps } from '../ui/accordion';
export type { TabsProps } from '../ui/tabs';
export type { SeparatorProps } from '../ui/separator';
export type { AlertProps } from '../ui/alert';
export type { ProgressProps } from '../ui/progress';
export type { SkeletonProps } from '../ui/skeleton';
export type { ToastProps, ToastActionElement } from '../ui/toast';
export type { DialogProps } from '../ui/dialog';
export type { SheetProps } from '../ui/sheet';
export type { PopoverProps } from '../ui/popover';
export type { TooltipProps } from '../ui/tooltip';
export type { DropdownMenuProps } from '../ui/dropdown-menu';
export type { BreadcrumbProps } from '../ui/breadcrumb';
export type { AvatarProps } from '../ui/avatar';
export type { ListProps } from '../ui/list';
export type { TypographyProps } from '../ui/typography';
