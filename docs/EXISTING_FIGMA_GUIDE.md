# Accessing Your Existing Figma Design System

This guide shows you how to connect Cursor to your existing Figma design system, even if you haven't been using formal design tokens.

## 🎯 What Cursor Can Extract

Even without formal tokens, Cursor can extract:

### **Colors**
- Colors from component fills and strokes
- Background colors from frames
- Border colors from shapes
- Text colors from text layers

### **Typography**
- Font sizes from text layers
- Font families and weights
- Line heights and letter spacing
- Text styles from components

### **Spacing**
- Padding values from frames
- Gap values from auto-layout
- Margin-like spacing from positioning
- Consistent spacing patterns

### **Components**
- Component names and descriptions
- Component dimensions
- Component hierarchy
- Component variants

## 🚀 Quick Setup

### 1. **Run the Setup Script**
```bash
npm run setup-figma
```

This interactive script will:
- Guide you through getting your Figma access token
- Help you find your file key
- Create the necessary environment variables

### 2. **Get Your Figma Credentials**

#### **Access Token**
1. Go to [Figma Settings](https://www.figma.com/settings)
2. Navigate to **Account** → **Personal access tokens**
3. Click **Create new token**
4. Give it a name (e.g., "Design System Sync")
5. Copy the token

#### **File Key**
1. Open your Figma design system file
2. Copy the file key from the URL:
   ```
   https://www.figma.com/file/XXXXX/Your-Design-System
   ```
   The `XXXXX` part is your file key.

### 3. **Test the Connection**
```bash
npm run sync-figma
```

## 📊 What Gets Extracted

### **From Components**
```typescript
// Example extracted data
{
  colors: {
    'button-primary': '#0087FF',
    'button-secondary': '#69B9FF',
    'text-primary': '#171717',
    'background-white': '#FFFFFF'
  },
  typography: {
    'heading-1': {
      fontSize: 36,
      fontFamily: 'Inter',
      fontWeight: 700,
      lineHeight: 1.25
    },
    'body-medium': {
      fontSize: 16,
      fontFamily: 'Inter',
      fontWeight: 400,
      lineHeight: 1.625
    }
  },
  spacing: {
    '1': 4,    // 4px
    '2': 8,    // 8px
    '4': 16,   // 16px
    '6': 24    // 24px
  },
  components: {
    'Button/Primary': {
      name: 'Button/Primary',
      type: 'COMPONENT',
      description: 'Primary button component',
      width: 120,
      height: 40
    }
  }
}
```

## 🔧 Smart Extraction Features

### **Color Naming**
- Extracts meaningful names from component names
- Falls back to hex values if no meaningful name found
- Handles both fills and strokes

### **Typography Mapping**
- Maps common font sizes to semantic names:
  - 12px → `caption`
  - 14px → `body-small`
  - 16px → `body-medium`
  - 18px → `body-large`
  - 24px → `heading-3`
  - 36px → `heading-1`

### **Spacing Detection**
- Finds consistent spacing patterns
- Maps to standard spacing scale
- Extracts from auto-layout gaps
- Identifies padding and margins

## 📁 Generated Files

After running the sync, you'll get:

### `src/tokens/figma-tokens.ts`
```typescript
// Auto-generated from your Figma file
export const figmaColors = {
  // Your extracted colors
};

export const figmaTypography = {
  // Your extracted typography
};

export const figmaSpacing = {
  // Your extracted spacing
};

export const figmaComponents = {
  // Your extracted components
};
```

## 🎨 Using Extracted Tokens

### **In Your Components**
```typescript
import { figmaColors, figmaTypography, figmaSpacing } from '../src/tokens/figma-tokens';

const MyComponent = styled.div`
  color: ${figmaColors['text-primary']};
  font-size: ${figmaTypography['body-medium'].fontSize}px;
  padding: ${figmaSpacing['4']}px;
`;
```

### **In Storybook**
```typescript
// View all extracted tokens in Storybook
// Go to Design System → Figma Integration
```

## 🔄 Keeping in Sync

### **Manual Sync**
```bash
npm run sync-figma
```

### **Automated Sync**
Set up GitHub Actions to sync daily:
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

## 🛠️ Customization

### **Token Mapping**
You can customize how tokens are mapped by editing the extraction logic in `src/utils/figma.ts`.

### **Naming Conventions**
The system automatically generates meaningful names, but you can:
- Rename components in Figma for better extraction
- Use consistent naming patterns
- Add descriptions to components

## 🚨 Troubleshooting

### **"No tokens found"**
- Check that your file key is correct
- Ensure you have access to the Figma file
- Verify components have fills, text, or spacing

### **"Access denied"**
- Verify your access token is valid
- Check that the token has the right permissions
- Ensure you have access to the file

### **"Empty results"**
- Make sure your Figma file has components
- Check that components have visible properties
- Try with a file that has more design elements

## 📈 Best Practices

### **For Better Extraction**
1. **Use consistent naming** in your Figma components
2. **Add descriptions** to important components
3. **Use auto-layout** for consistent spacing
4. **Create component variants** for different states
5. **Use text styles** for typography consistency

### **For Maintenance**
1. **Run sync regularly** to keep tokens updated
2. **Review extracted tokens** before using them
3. **Document your naming conventions**
4. **Version control** your extracted tokens

## 🎯 Next Steps

1. **Run the setup**: `npm run setup-figma`
2. **Test the connection**: `npm run sync-figma`
3. **View in Storybook**: Check the Figma Integration story
4. **Start using tokens**: Import them in your components
5. **Set up automation**: Configure regular syncing

Your existing Figma design system is now accessible to Cursor! 🎉 