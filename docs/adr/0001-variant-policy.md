# ADR-0001: Variant Policy Standardization

**Date**: 2024-01-15  
**Status**: Accepted  
**Deciders**: Design System Platform Team, UX Leadership  
**Technical Story**: Standardize variant naming and behavior across all components  

## Context and Problem Statement

Components across the design system use inconsistent variant naming (size vs variant, type vs kind) and different sets of variants (some have 3 variants, others have 5+). This creates cognitive load for developers and inconsistent user experiences.

### Business Context
- Developers spend extra time learning different API patterns for each component
- Inconsistent naming leads to bugs and slower development
- New team members struggle with the learning curve
- Brand consistency is compromised by variant proliferation

### Technical Context  
- 23 components currently use different variant patterns
- TypeScript definitions are inconsistent across components
- Bundle size increases due to unused variant code
- Testing complexity grows exponentially with variant combinations

## Decision Drivers

- **Developer Experience** (High): Consistent, predictable APIs
- **Brand Consistency** (High): Limited, purposeful variant set  
- **Maintenance Burden** (Medium): Reduce testing and documentation overhead
- **Backward Compatibility** (Medium): Minimize breaking changes
- **Design Flexibility** (Low): Allow for future extension

## Considered Options

### Option 1: Unified "variant" prop with 4 standard values
Standardize all components to use `variant` prop with: `primary | secondary | ghost | destructive`.

**Pros**:
- Single prop name across all components
- Limited, purposeful set of variants
- Clear semantic meaning aligned with design intent
- Reduced testing matrix

**Cons**:
- Breaking change for components using `size`, `type`, etc.
- May not fit all component semantics perfectly
- Requires migration effort

### Option 2: Component-specific variant naming
Allow each component to use its most semantically appropriate prop name.

**Pros**:
- More semantic meaning per component
- No breaking changes required
- Flexibility for edge cases

**Cons**:
- Continued inconsistency and cognitive load
- No improvement to current problems
- Harder to create reusable patterns

### Option 3: Dual approach: variant + size
Use `variant` for semantic meaning and separate `size` for scale.

**Pros**:
- Semantic clarity between intent and scale
- Covers more use cases

**Cons**:
- More complex API surface
- Confusion about which prop to use when
- Larger testing matrix

## Decision

**Chosen option**: "Option 1: Unified variant prop with 4 standard values"

### Rationale
- **Primary reason**: Developer experience is our highest priority, and API consistency directly improves productivity
- **Secondary reasons**: 
  - Brand consistency benefits from limited, purposeful variants
  - Reduced maintenance overhead for platform team
  - Cleaner TypeScript experience with shared interfaces
- **Risk mitigation**: Provide codemods and 2-minor deprecation cycle for breaking changes

### Implementation Plan
1. **Phase 1** (Sprint 1-2): Create shared `VariantProp` type and update 5 core components
2. **Phase 2** (Sprint 3-4): Migrate remaining components with codemods  
3. **Phase 3** (Sprint 5): Remove deprecated props and update documentation

### Success Criteria
- **API Consistency**: 100% of components use `variant` prop by Q2 2024
- **Developer Satisfaction**: NPS improvement from current baseline
- **Bundle Impact**: No increase in bundle size despite migration
- **Timeline**: Complete migration within 2 quarters

## Consequences

### Positive Consequences
- **Consistent mental model**: Developers learn once, apply everywhere
- **Improved TypeScript experience**: Shared interfaces and better autocomplete
- **Reduced testing overhead**: 4 variants instead of variable numbers per component
- **Better documentation**: Single pattern to document and explain

### Negative Consequences
- **Breaking changes**: Require coordinated migration across all consuming applications
- **Semantic mismatch**: Some components may feel less semantic with generic "variant"
- **Migration effort**: Platform and stream-aligned teams need to coordinate updates

### Neutral Consequences
- **Bundle size**: Roughly equivalent after migration
- **Runtime performance**: No significant change

## Compliance and Validation

### Design System Impact
- [x] Affects component APIs (breaking)
- [x] Requires documentation updates
- [x] Requires codemod for migration
- [ ] Affects accessibility standards
- [ ] Impacts bundle size or performance

### Quality Gates
- [x] Passes all acceptance criteria
- [x] API stability validated (breaking change managed)
- [x] Migration plan provided (codemods + 2-minor deprecation)
- [x] Documentation updated
- [x] Tests added/updated

### Team Impact
- [x] **Platform Team**: Update core component APIs
- [x] **Stream-Aligned Teams**: Migrate consuming applications  
- [ ] **Enabling Teams**: No direct impact
- [x] **Cross-Team**: Requires coordination for migration timing

## Follow-up Actions

### Immediate (1-2 weeks)
- [x] Create `VariantProp` TypeScript type (Owner: Platform, Due: 2024-01-22)
- [x] Generate migration codemods (Owner: Platform, Due: 2024-01-25)

### Short-term (1-3 months)  
- [ ] Migrate Button, Input, Alert, Badge, Card components (Owner: Platform, Due: 2024-02-15)
- [ ] Update Storybook documentation (Owner: Platform, Due: 2024-02-28)
- [ ] Stream-aligned team migrations begin (Owner: Each team, Due: 2024-03-31)

### Long-term (3+ months)
- [ ] Remove deprecated props (Due: 2024-06-30)
- [ ] Review decision effectiveness (Due: 2024-07-01)

## Links and References

- [RFC: Component Variant Standardization](https://github.com/comcast/design-system/issues/1234)
- [Codemod: size-to-variant migration](./codemods/size-to-variant.js)
- [Brand Guidelines: Semantic Color Usage](https://brand.comcast.com/guidelines)
- [Team Topology: Platform Team Responsibilities](./team-topology.md)

## Validation and Updates

**Review Schedule**: Quarterly review for first year, then annually  
**Last Reviewed**: 2024-01-15  
**Next Review**: 2024-04-15

### Amendment History
| Date | Change | Reason | Updated By |
|------|--------|--------|------------|
| 2024-01-15 | Original decision | Initial standardization effort | Platform Team |
| | | | |

---

**Implementation Status**: ✅ Complete (as of 2024-06-30)  
**Migration Success**: 47 consuming applications migrated successfully  
**Developer Feedback**: NPS improved from 6.2 to 8.1 post-migration