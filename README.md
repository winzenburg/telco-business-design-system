# Comcast Business Design System

A comprehensive design system for Comcast Business applications, providing consistent UI components, design tokens, and guidelines.

## 🎨 Overview

The Comcast Business Design System is built to ensure consistency, accessibility, and scalability across all Comcast Business applications. It provides a unified set of design principles, components, and tools for building exceptional user experiences.

## 🚀 Features

- **React Components**: Reusable, accessible UI components
- **Design Tokens**: Consistent colors, typography, spacing, and more
- **TypeScript Support**: Full type safety and IntelliSense
- **Storybook Integration**: Interactive component documentation
- **Accessibility**: WCAG 2.1 AA compliant components
- **Responsive Design**: Mobile-first approach
- **Theme Support**: Light and dark mode capabilities
- **Tailwind CSS**: Utility-first styling with design system tokens
- **Figma Integration**: Auto-sync design tokens from Figma

## 📦 Installation

```bash
npm install @comcast/comcast-business-design-system
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start Storybook for development:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start Storybook development server
- `npm run build` - Build the component library
- `npm run build:storybook` - Build Storybook for production
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run sync-figma` - Sync design tokens from Figma
- `npm run extract-figma` - Extract design tokens from Figma file
- `npm run extract-colors` - Extract color tokens from Figma Colors page
- `npm run extract-colors-improved` - Extract color tokens with improved naming and organization
- `npm run extract-actual-swatches` - Extract design system colors with pattern correction (recommended)
- `npm run setup-figma` - Interactive Figma setup wizard

## 📁 Project Structure

```
src/
├── components/     # React components
├── styles/        # Global styles and themes
├── tokens/        # Design tokens (colors, typography, etc.)
├── utils/         # Utility functions and helpers
└── docs/          # Documentation and guidelines

stories/           # Storybook stories
tests/             # Test files
public/            # Static assets
```

## 🎯 Design Principles

1. **Consistency**: Unified design language across all applications
2. **Accessibility**: Inclusive design for all users
3. **Scalability**: Components that grow with business needs
4. **Performance**: Optimized for speed and efficiency
5. **Maintainability**: Clean, well-documented code

## 🎨 Design Tokens

The design system uses a token-based approach for consistent styling:

- **Colors**: Primary, secondary, and semantic color palettes
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing scale
- **Breakpoints**: Responsive design breakpoints
- **Shadows**: Elevation and depth system

## 📚 Component Library

### Core Components

- **Button**: Primary, secondary, and tertiary button variants
- **Input**: Form inputs with validation states
- **Card**: Content containers with various layouts
- **Modal**: Overlay dialogs and confirmations
- **Navigation**: Header, sidebar, and breadcrumb components
- **Data Display**: Tables, lists, and data visualization components

### Usage Examples

**Styled Components (Original):**
```tsx
import { Button, Card, Text } from '@comcast/comcast-business-design-system';

function MyComponent() {
  return (
    <Card>
      <Text variant="heading">Welcome to Comcast Business</Text>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Get Started
      </Button>
    </Card>
  );
}
```

**Tailwind CSS (Recommended for your team):**
```tsx
import { ButtonTailwind } from '@comcast/comcast-business-design-system';

function MyComponent() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-heading-1 text-gray-900 mb-4">Welcome to Comcast Business</h1>
      <ButtonTailwind 
        variant="primary" 
        onClick={() => console.log('Clicked!')}
        className="w-full md:w-auto"
      >
        Get Started
      </ButtonTailwind>
    </div>
  );
}
```

**Utility Classes:**
```tsx
import { cn } from '@comcast/comcast-business-design-system';

function MyComponent() {
  return (
    <button className={cn(
      'btn btn-primary btn-lg',
      'hover:scale-105 transition-transform',
      'focus:ring-2 focus:ring-primary-500'
    )}>
      Custom Button
    </button>
  );
}
```

## 🧪 Testing

Components are thoroughly tested with:

- **Unit Tests**: Jest and React Testing Library
- **Visual Regression**: Storybook visual testing
- **Accessibility**: Automated a11y testing
- **Integration**: End-to-end component testing

## 🔄 Figma Integration

The design system includes automatic Figma integration for seamless design token synchronization:

### Setup
1. **For existing Figma files**: Run `npm run setup-figma` (interactive setup)
2. **Manual setup**: Get your Figma access token from [Figma Settings](https://www.figma.com/settings)
3. Copy your Figma file key from the file URL
4. Set environment variables (see `env.example`)
5. Run `npm run sync-figma` to sync tokens

### Features
- **Auto-sync**: Fetch latest design tokens from Figma
- **Token mapping**: Convert Figma tokens to design system format
- **TypeScript support**: Generated tokens with full type safety
- **Storybook integration**: View synced tokens in Storybook

For detailed setup instructions, see [Figma Integration Guide](docs/FIGMA_INTEGRATION.md).

**For existing Figma files without formal tokens**, see [Existing Figma Guide](docs/EXISTING_FIGMA_GUIDE.md).

## 📖 Documentation

- **Storybook**: Interactive component documentation
- **Design Guidelines**: Usage and best practices
- **API Reference**: Component props and methods
- **Examples**: Real-world usage examples
- **Figma Integration**: [Complete setup guide](docs/FIGMA_INTEGRATION.md)

## 🤝 Contributing

1. Follow the established coding standards
2. Write tests for new components
3. Update documentation and stories
4. Ensure accessibility compliance
5. Submit pull requests for review

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For questions and support, please contact the Design System team or create an issue in the repository.

---

Built with ❤️ by the Comcast Business Design Team 