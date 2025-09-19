# Neutral Colors Usage Guidelines

## Color Values and Usage Rules

### Black: #15172B (Design System Black)
**Usage:** Default body text and titles, Icon default, Checkbox default, Radio button default
- Primary text color for all body content
- Heading and title text
- Default icon color (when not using semantic colors)
- Default state for checkboxes and radio buttons
- Default form control indicators
- **Accessibility:** Highest contrast text color

### neutral-50: #FCFCFC
**Usage:** Primary backgrounds, card surfaces
- Main page backgrounds
- Card/panel backgrounds
- Modal backgrounds
- Primary surface color

### neutral-100: #F9F9FA
**Usage:** Gray surface, surface hover
- Secondary surface backgrounds
- Hover states for gray surfaces
- Subtle background variations
- Input field backgrounds

### neutral-200: #F1F2F6
**Usage:** Subdued border
- Subtle borders for cards and containers
- Divider lines between sections
- Input field borders (default state)
- Table borders and separators

### neutral-300: #DDDDE2
**Usage:** Surface Pressed
- Active/pressed states for interactive surfaces
- Button pressed states (ghost/secondary variants)
- Card pressed states
- Interactive element active feedback

### neutral-400: #B4B5BB
**Usage:** [Awaiting usage definition]

### neutral-500: #9D9EA7
**Usage:** [Awaiting usage definition]

### neutral-600: #70717D
**Usage:** Placeholder text in input fields, default border, subdued icon
- **Accessibility:** Lightest ADA compliant neutral on white (WCAG 2.1 AA)
- Placeholder text in form inputs
- Default border states for form elements
- Subdued/secondary icon colors
- Helper text and secondary labels

### neutral-700: #595A69
**Usage:** [Awaiting usage definition]

### neutral-800: #424454
**Usage:** [Awaiting usage definition]

### neutral-900: #2B2D3F
**Usage:** Border on hover
- Hover state borders for interactive elements
- Focus ring borders (high contrast)
- Active/selected border states
- Strong border emphasis on interaction

## Design System Rules

### Accessibility Requirements
- Text on neutral backgrounds must meet WCAG 2.1 AA contrast ratios (4.5:1 minimum)
- Interactive elements must have sufficient contrast for focus states
- Color cannot be the only means of conveying information

### Component Usage Patterns
- **Backgrounds**: neutral-50 (primary), neutral-100 (secondary/hover)
- **Borders**: neutral-600 (default), neutral-200 (muted), neutral-900 (hover/focus)
- **Interactive States**:
  - Default: neutral-600 borders
  - Hover: neutral-100 backgrounds, neutral-900 borders
  - Pressed/Active: neutral-300 backgrounds
- **Text & Content**:
  - Primary text: Black (#15172B)
  - Secondary text: neutral-700 (#595A69)
  - Muted/helper text: neutral-600 (#70717D) - minimum for ADA compliance
- **Icons & Controls**: Black (#15172B) for default states
- **Decorative Elements**: neutral-200 to neutral-500 (non-text only)

### Validation Rules
- No hardcoded hex values in components - must use design tokens
- All neutral color usage must follow defined patterns
- Changes to neutral colors require design system approval

---

**Status:** In Progress - Awaiting complete neutral color palette and usage definitions
**Last Updated:** [Current Date]