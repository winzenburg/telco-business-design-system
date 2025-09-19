# ButtonGroup

Icon to display before text

## Import

```tsx
import { ButtonGroup } from '@comcast/design-system';
```

## Usage

```tsx
<ButtonGroup />
```

## Variants

### default

```tsx
<ButtonGroup variant="default" />
```

### outline

```tsx
<ButtonGroup variant="outline" />
```

### filled

```tsx
<ButtonGroup variant="filled" />
```

## Sizes

### sm

```tsx
<ButtonGroup size="sm" />
```

### default

```tsx
<ButtonGroup size="default" />
```

### lg

```tsx
<ButtonGroup size="lg" />
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `multiple` | `boolean` | ❌ | `—` | Allow multiple selections (checkbox behavior) / |
| `value` | `string | string[]` | ❌ | `—` | Selected values for controlled component / |
| `defaultValue` | `string | string[]` | ❌ | `—` | Default selected values for uncontrolled component / |
| `onValueChange` | `(value: string | string[]) => void` | ❌ | `—` | Callback when selection changes / |
| `disabled` | `boolean` | ❌ | `—` | Disable the entire group / |
## Accessibility

This component follows WCAG 2.1 AA guidelines and includes:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Related Components

- See [Component Overview](/docs/components) for related components
- Check [Design Tokens](/docs/tokens) for theming
