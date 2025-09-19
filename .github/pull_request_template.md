# Pull Request Checklist

## Description
<!-- Brief description of changes and why they're needed -->

## Type of Change
- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ New feature (non-breaking change that adds functionality)
- [ ] 💥 Breaking change (fix or feature that causes existing functionality to change)
- [ ] 📚 Documentation update
- [ ] 🔧 Internal/tooling change (build, CI, dependencies)

## Quality Gates ✅

### Accessibility (WCAG 2.2 AA)
- [ ] **Axe violations**: 0 violations in all stories (light/dark themes)
- [ ] **RTL support**: Component works correctly in right-to-left layouts
- [ ] **Keyboard navigation**: Full keyboard operability with visible focus
- [ ] **Screen reader**: Proper semantic markup and ARIA attributes
- [ ] **Color contrast**: Meets 4.5:1 ratio for text, 3:1 for interactive elements

### Design Tokens & Styling
- [ ] **Tokens-only**: No hex/rgb/px values; all colors from CSS custom properties
- [ ] **Spacing/sizing**: Uses design system scale tokens (--ds.space.*, --ds.size.*)
- [ ] **Typography**: Uses system font tokens and scale
- [ ] **Theme support**: Works in light/dark modes via CSS variables

### API Design & TypeScript
- [ ] **Public API typed**: All props have TypeScript interfaces with JSDoc
- [ ] **API documentation**: Props documented in Storybook controls/docs
- [ ] **No breaking changes**: Or breaking changes follow deprecation protocol
- [ ] **forwardRef**: Component forwards refs to underlying DOM element
- [ ] **Event consistency**: Event handlers follow established patterns

### Bundle & Performance  
- [ ] **Bundle size**: Component within 8kb gzip budget per acceptance criteria
- [ ] **Tree-shakeable**: Imports are optimized and components can be tree-shaken
- [ ] **SSR-safe**: No client-only code in initial render
- [ ] **Performance**: No unnecessary re-renders or performance regressions

### Testing & Visual Regression
- [ ] **Stories coverage**: All variants, sizes, states (hover/focus/active/disabled)
- [ ] **Long text testing**: Component handles overflow and edge cases
- [ ] **RTL stories**: Right-to-left versions of key stories
- [ ] **VRT diff**: Visual regression diff ≤ 1% (or justified if higher)
- [ ] **Unit tests**: Interactive behavior covered with Testing Library
- [ ] **E2E tests**: Critical paths covered in Playwright tests

### Documentation & Release
- [ ] **Changeset added**: Appropriate semver level with clear description
- [ ] **Migration guide**: If breaking changes, codemod and migration docs provided
- [ ] **Storybook docs**: Component documented with usage examples
- [ ] **Tokens used table**: MDX includes table of all design tokens used
- [ ] **Do/Don't examples**: Usage guidelines with visual examples

## Design System Compliance

### Heuristics Validation
- [ ] **No god components**: Component focused and under 200 lines
- [ ] **No prop drilling**: Appropriate use of context or state management
- [ ] **Clear abstractions**: No over-engineering or unnecessary indirection
- [ ] **Pattern compliance**: Follows established design system patterns

### Accessibility Patterns
- [ ] **Form labels**: All inputs have associated labels or aria-label
- [ ] **Interactive elements**: Buttons, links have accessible names
- [ ] **Error handling**: Error states announced to screen readers
- [ ] **Focus management**: Logical focus order and focus trapping where needed

## Automated Validation Status
<!-- These should be automated via CI/CD -->
- [ ] **ESLint**: All linting issues resolved
- [ ] **TypeScript**: No type errors in strict mode  
- [ ] **Tests passing**: All unit and integration tests pass
- [ ] **Build successful**: Component builds without errors
- [ ] **Acceptance criteria**: `npm run validate:acceptance-criteria` passes

## Reviewer Checklist

### Design Review
- [ ] **Visual accuracy**: Matches design specifications and Figma
- [ ] **Interaction states**: All interactive states function correctly
- [ ] **Responsive behavior**: Component adapts appropriately across viewports
- [ ] **Brand consistency**: Aligns with Comcast Business brand guidelines

### Code Review  
- [ ] **Code quality**: Clean, readable, and maintainable code
- [ ] **Security**: No security vulnerabilities introduced
- [ ] **Performance**: No performance regressions
- [ ] **Architecture**: Follows established patterns and conventions

## Testing Instructions
<!-- How should reviewers test this change? -->
1. 
2. 
3. 

## Screenshots/Videos
<!-- Visual proof of the changes, especially for UI changes -->

## Related Issues
<!-- Link to related issues, user stories, or design specs -->
- Closes #
- Related to #

---

**Note**: This PR will be automatically validated against acceptance criteria. All quality gates must pass before merge.