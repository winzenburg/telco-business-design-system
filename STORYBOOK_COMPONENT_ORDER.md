# Storybook Component Organization

## Components (Alphabetical Order A-Z)

When adding new components, ensure they follow this alphabetical naming convention:

### Current Components:
1. **Accordion** - `Components/Accordion`
2. **Alert** - `Components/Alert`  
3. **Avatar** - `Components/Avatar`
4. **Badge** - `Components/Badge`
5. **Breadcrumb** - `Components/Breadcrumb`
6. **Button** - `Components/Button`
7. **Card** - `Components/Card`
8. **Chart** - `Components/Chart`
9. **Checkbox** - `Components/Checkbox`
10. **Command** - `Components/Command`
11. **Dialog** - `Components/Dialog`
12. **Menu** - `Components/Menu` (renamed from DropdownMenu)
13. **FormElements** - `Components/FormElements` (note: camelCase)
14. **GlobalNavigation** - `Components/GlobalNavigation` (note: camelCase)
15. **Input** - `Components/Input`
16. **Label** - `Components/Label`
17. **List** - `Components/List`
18. **Navigation** - `Components/Navigation`
19. **Popover** - `Components/Popover`
20. **Progress** - `Components/Progress`
21. **RadioGroup** - `Components/RadioGroup` (note: camelCase)
22. **Select** - `Components/Select`
23. **Separator** - `Components/Separator`
24. **Sheet** - `Components/Sheet`
25. **Skeleton** - `Components/Skeleton`
26. **Slider** - `Components/Slider`
27. **Switch** - `Components/Switch`
28. **Table** - `Components/Table`
29. **Tabs** - `Components/Tabs`
30. **Textarea** - `Components/Textarea`
31. **Toast** - `Components/Toast`
32. **Tooltip** - `Components/Tooltip`

## Design System (Alphabetical Order A-Z)
1. **Elevation & Shadows** - `Design System/Elevation & Shadows`
2. **Grid & Layout** - `Design System/Grid & Layout`  
3. **Icons** - `Design System/Icons`
4. **Spacing** - `Design System/Spacing`
5. **Token Patterns** - `Design System/Token Patterns`
6. **Typography** - `Design System/Typography`

## Enterprise (Alphabetical Order A-Z)
1. **Billing** - `Enterprise/Billing`
2. **Dashboard** - `Enterprise/Dashboard`
3. **Reports** - `Enterprise/Reports`
4. **Service Management** - `Enterprise/Service Management`
5. **Settings** - `Enterprise/Settings`
6. **User Management** - `Enterprise/User Management`
7. **Workflows** - `Enterprise/Workflows`

## Naming Rules:

1. **Use camelCase for multi-word component names** (e.g., `DropdownMenu`, not `Dropdown Menu`)
2. **Keep component names concise but descriptive**
3. **Always use the format**: `Category/ComponentName`
4. **New components should be inserted in alphabetical order**
5. **File names should match the component name**: `ComponentName.stories.tsx`

## Adding New Components:

When adding a new component, find its alphabetical position in the list above and:

1. Create the story file: `stories/ComponentName.stories.tsx`
2. Set the title: `title: 'Components/ComponentName'`
3. Update this reference document
4. Ensure the component exports are properly organized in `src/components/index.ts`

This organization ensures consistent navigation and easy discovery of components in Storybook.