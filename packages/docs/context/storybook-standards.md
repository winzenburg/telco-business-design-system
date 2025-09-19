# Storybook Standards & Documentation Requirements

## Storybook Standards (Curtis + Frost + Kholmatova) — **Must Comply**
- `.stories.tsx` extension; no React imports needed
- Each component = standalone page (no folder groupings)  
- Cover all variants, states, RTL, themes in stories

## Storybook Docs Requirements (Every Component)
- **Design Intent**: When to use/avoid this component; purpose and context
- **Tokens Used**: Complete mapping to `@tokens` with semantic names
- **Accessibility Contract**: Keyboard interaction table, ARIA patterns and notes
- **Responsive/Adaptive Behavior**: Breakpoint behavior, density variations
- **Performance Notes**: SSR-safe implementation, no layout thrash guarantees

## PR Acceptance Checklist (Copy into PR Template) — **Must Pass All**
- **A11y**: 0 axe violations; keyboard interaction table verified; focus states present
- **Content**: Plain language used; actionable labels; error/help text reviewed
- **IA/Findability**: Component names consistent; story titles scannable
- **Tokens-Only Styling**: No hex/rgb/px values; sizes from design system scales
- **States Coverage**: All states in stories (hover/focus/active/disabled, RTL, long text)
- **Technical Quality**: Bundle size within budget; API fully typed; changeset added