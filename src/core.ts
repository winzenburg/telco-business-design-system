// Core lightweight exports for most common use cases

// Essential tokens
export { colors } from './tokens/design-system-colors';
export { spacing } from './tokens/spacing';
export { elevationSystem as elevation } from './tokens/design-system-elevation';
export { focusRing as focus } from './tokens/design-system-focus';

// Essential components (light)
export { Button } from './components/ui/button';
export { Input } from './components/ui/input';
export { Label } from './components/ui/label';
export { Card, CardHeader, CardContent, CardTitle, CardDescription } from './components/ui/card';
export { Alert } from './components/ui/alert';
export { Badge } from './components/ui/badge';

// Essential utilities
export { cn } from './utils/cn';
export { Slot } from './utils/slot';

// Theme and configuration
export { theme, DESIGN_SYSTEM } from './tokens';