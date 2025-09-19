// Optimized barrel exports for tree-shaking
// Using named exports instead of wildcards

// Core UI Components (always included - small size)
export { Button, buttonVariants } from '../ui/button'
export type { ButtonProps } from '../ui/button'

export { Input } from '../ui/input'
export type { InputProps } from '../ui/input'

export { Label } from '../ui/label'
export type { LabelProps } from '../ui/label'

export { Badge, badgeVariants } from '../ui/badge'
export type { BadgeProps } from '../ui/badge'

// Form Components
export { Checkbox } from '../ui/checkbox'
export type { CheckboxProps } from '../ui/checkbox'

export { RadioGroup, RadioGroupItem } from '../ui/radio-group'
export type { RadioGroupItemProps } from '../ui/radio-group'

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
export type { SelectProps } from '../ui/select'

export { Slider } from '../ui/slider'
export type { SliderProps } from '../ui/slider'

export { Switch } from '../ui/switch'
export type { SwitchProps } from '../ui/switch'

export { Textarea } from '../ui/textarea'
export type { TextareaProps } from '../ui/textarea'

// Layout Components
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
export type { CardProps } from '../ui/card'

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
export type { AccordionProps } from '../ui/accordion'

export { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
export type { TabsProps } from '../ui/tabs'

export { Separator } from '../ui/separator'
export type { SeparatorProps } from '../ui/separator'

// Feedback Components
export { Alert, AlertDescription, AlertTitle } from '../ui/alert'
export type { AlertProps } from '../ui/alert'

export { Progress } from '../ui/progress'
export type { ProgressProps } from '../ui/progress'

export { Skeleton } from '../ui/skeleton'
export type { SkeletonProps } from '../ui/skeleton'

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  useToast
} from '../ui/toast'
export type { ToastProps, ToastActionElement } from '../ui/toast'

// Overlay Components
export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog'
export type { DialogProps } from '../ui/dialog'

export {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '../ui/sheet'
export type { SheetProps } from '../ui/sheet'

export { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
export type { PopoverProps } from '../ui/popover'

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
export type { TooltipProps } from '../ui/tooltip'

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuShortcut
} from '../ui/dropdown-menu'
export type { DropdownMenuProps } from '../ui/dropdown-menu'

// Navigation Components
export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb'
export type { BreadcrumbProps } from '../ui/breadcrumb'

export { Navigation, NavigationItem, GlobalNav } from '../ui/navigation'
export type { NavigationProps, NavigationItemProps, GlobalNavProps } from '../ui/navigation'

// Data Display Components
export { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
export type { AvatarProps } from '../ui/avatar'

export { List, ListItem, ListSection, ListHeader, NavigationListItem } from '../ui/list'
export type { ListProps } from '../ui/list'

// Typography
export { Typography } from '../ui/typography'
export type { TypographyProps } from '../ui/typography'

// Heavy Components - Should be imported separately or lazy loaded
// These are NOT included in the main bundle to keep size down

// export { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
// export { Calendar } from '../ui/calendar'
// export { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '../ui/command'
// export { Chart } from '../ui/chart'

// Utility exports
export { cn } from '../utils/cn'
export { cva, type VariantProps } from 'class-variance-authority'

// Re-export tokens and icons separately to avoid bundling them
// Users should import these directly if needed:
// import { colors } from '@comcast/design-system/tokens'
// import { Icon } from '@comcast/design-system/icons'