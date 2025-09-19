# Checkbox

Optional 16x16 icon to display to the right of the label text

## Import

```tsx
import { Checkbox } from '@comcast/design-system';
```

## Usage

```tsx
<Checkbox />
```

## Variants

### default

```tsx
<Checkbox variant="default" />
```

### error

```tsx
<Checkbox variant="error" />
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `error` | `boolean` | ❌ | `—` | Show error state / |
| `label` | `string` | ❌ | `—` | Checkbox label / |
| `required` | `boolean` | ❌ | `—` | Mark checkbox as required (shows * indicator) / |
| `checkboxState` | `"default" | "hover" | "pressed" | "focused" | "disabled"` | ❌ | `—` | Visual state override / |
| `skeleton` | `boolean` | ❌ | `—` | Show skeleton loading state / |
| `rightIcon` | `IconName` | ❌ | `—` | Optional 16x16 icon to display to the right of the label text / |
## Accessibility

This component follows WCAG 2.1 AA guidelines and includes:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Related Components

- See [Component Overview](/docs/components) for related components
- Check [Design Tokens](/docs/tokens) for theming
