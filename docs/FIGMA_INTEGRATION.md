# Figma Integration Guide

This guide explains how to integrate your Figma design system with the Comcast Business Design System using the Figma API.

## Overview

The Figma integration allows you to:
- 🔄 Automatically sync design tokens from Figma
- 🎨 Import colors, typography, and spacing tokens
- 📦 Generate TypeScript files with your design tokens
- 🚀 Keep your design system in sync with Figma

## Setup

### 1. Get Your Figma Access Token

1. Go to [Figma Settings](https://www.figma.com/settings)
2. Navigate to **Account** → **Personal access tokens**
3. Click **Create new token**
4. Give it a name (e.g., "Design System Sync")
5. Copy the token (you won't be able to see it again)

### 2. Get Your Figma File Key

1. Open your Figma design system file
2. Copy the file key from the URL:
   ```
   https://www.figma.com/file/XXXXX/Design-System
   ```
   The `XXXXX` part is your file key.

### 3. Set Environment Variables

Add these to your `.env` file (create one if it doesn't exist):

```bash
FIGMA_ACCESS_TOKEN=your-figma-access-token-here
FIGMA_FILE_KEY=your-figma-file-key-here
```

Or set them in your shell:

```bash
export FIGMA_ACCESS_TOKEN="your-figma-access-token-here"
export FIGMA_FILE_KEY="your-figma-file-key-here"
```

## Usage

### Sync Design Tokens

Run the sync command to fetch the latest tokens from Figma:

```bash
npm run sync-figma
```

This will:
- Fetch all styles from your Figma file
- Extract colors, typography, and spacing tokens
- Generate a `src/tokens/figma-tokens.ts` file
- Map Figma token names to your design system format

### Use Figma Tokens in Your Code

Import the generated tokens in your components:

```typescript
import { figmaColors, figmaTypography, figmaSpacing } from '../src/tokens/figma-tokens';

const MyComponent = styled.div`
  color: ${figmaColors['primary-500']};
  font-size: ${figmaTypography['body-medium'].fontSize};
  padding: ${figmaSpacing['4']}px;
`;
```

## Figma File Structure

For optimal token extraction, organize your Figma file with:

### Colors
- Create **Color Styles** in Figma
- Name them consistently (e.g., `primary-500`, `secondary-600`)
- Use the **FILL** style type

### Typography
- Create **Text Styles** in Figma
- Name them descriptively (e.g., `heading-1`, `body-medium`)
- Set font size, weight, line height, and letter spacing

### Spacing
- Create consistent spacing patterns
- Use frames or components with predictable spacing values
- Name them numerically (e.g., `4`, `8`, `16`, `24`)

## Token Mapping

The sync script automatically maps Figma token names to your design system format:

### Colors
```typescript
// Figma: primary-500
// Design System: colors.primary[500]
```

### Typography
```typescript
// Figma: heading-1
// Design System: typography.textStyles.heading.h1
```

### Spacing
```typescript
// Figma: 4 (pixels)
// Design System: spacing[4] (rem)
```

## Generated Files

After running the sync, you'll get:

### `src/tokens/figma-tokens.ts`
```typescript
// Auto-generated from Figma
export const figmaColors = {
  'primary-500': '#0087FF',
  'primary-600': '#0066CC',
  // ...
};

export const figmaTypography = {
  'heading-1': {
    fontSize: '1.875rem',
    fontWeight: '700',
    // ...
  },
  // ...
};

export const figmaSpacing = {
  '1': 4,
  '2': 8,
  // ...
};
```

## Storybook Integration

View your Figma tokens in Storybook:

1. Go to **Design System** → **Figma Integration**
2. See all imported tokens
3. View token mapping examples
4. Test token usage in components

## Troubleshooting

### Common Issues

**"Missing environment variables"**
- Make sure `FIGMA_ACCESS_TOKEN` and `FIGMA_FILE_KEY` are set
- Check that your `.env` file is in the project root

**"Error fetching Figma file"**
- Verify your access token is valid
- Check that the file key is correct
- Ensure you have access to the Figma file

**"No tokens found"**
- Make sure you have styles defined in your Figma file
- Check that styles are published and accessible
- Verify style naming conventions

### Debug Mode

Run with debug logging:

```bash
DEBUG=figma npm run sync-figma
```

## Best Practices

### Token Naming
- Use consistent naming conventions in Figma
- Follow kebab-case for style names
- Include semantic meaning in names

### File Organization
- Keep design tokens in a dedicated page/frame
- Use clear naming for frames and components
- Document your token structure

### Version Control
- Commit generated token files to version control
- Review changes before committing
- Use the sync script in your CI/CD pipeline

## Advanced Usage

### Custom Token Mapping

You can customize how tokens are mapped by modifying the sync script:

```javascript
// In scripts/sync-figma-tokens.js
const customMapping = {
  'brand-primary': 'colors.primary[500]',
  'text-heading': 'typography.textStyles.heading.h1',
};
```

### Automated Sync

Set up automated syncing with GitHub Actions:

```yaml
# .github/workflows/sync-figma.yml
name: Sync Figma Tokens
on:
  schedule:
    - cron: '0 9 * * *'  # Daily at 9 AM

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run sync-figma
      - uses: actions/commit@v2
```

## Support

For issues with the Figma integration:

1. Check the troubleshooting section above
2. Review the generated token files
3. Verify your Figma file structure
4. Check the Figma API documentation

## Resources

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Figma Design Tokens Plugin](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens)
- [Design Tokens Specification](https://design-tokens.github.io/community-group/format/) 