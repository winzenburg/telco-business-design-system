// Comcast Business Design System - Components

// Export all components
export * from './Icon';

// Export shadcn/ui components (customized for our design system)
export * from './ui/button';
export * from './ui/input';
export * from './ui/card';
export * from './ui/label';

// Re-export commonly used components
export { Icon, IconGroup } from './Icon';

// Re-export shadcn/ui components as primary components
export { Button } from './ui/button';
export { Input } from './ui/input';
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './ui/card';
export { Label } from './ui/label'; 