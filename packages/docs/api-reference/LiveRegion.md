# LiveRegion

Additional CSS classes

## Import

```tsx
import { LiveRegion } from '@comcast/design-system';
```

## Usage

```tsx
// Loading state announcement
 <LiveRegion message="Loading results..." type="status" />
  // Error announcement
 <LiveRegion message="Error: Invalid email address" type="alert" />
  // Visually hidden announcement
 <LiveRegion message="Form submitted successfully" visuallyHidden />
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `message` | `string` | ❌ | `—` | The message to announce to screen readers / |
| `type` | `'status' | 'alert'` | ❌ | `—` | Type of announcement - status: Non-critical updates (polite) - alert: Important/error messages (assertive) / |
| `politeness` | `'polite' | 'assertive'` | ❌ | `—` | Politeness level for the announcement - polite: Waits for screen reader to finish current task - assertive: Interrupts current screen reader task / |
| `visuallyHidden` | `boolean` | ❌ | `—` | Whether to visually hide the message (still announced to screen readers) / |
| `className` | `string` | ❌ | `—` | Additional CSS classes / |

## Examples

### Example 2

```tsx
const { announce, clearAnnouncement } = useLiveAnnouncer()
  // Announce a status
 announce("Processing your request...")
  // Announce an error
 announce("Error: Please try again", 'alert')
```

## Accessibility

This component follows WCAG 2.1 AA guidelines and includes:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Related Components

- See [Component Overview](/docs/components) for related components
- Check [Design Tokens](/docs/tokens) for theming
