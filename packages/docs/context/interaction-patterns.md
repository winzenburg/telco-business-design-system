# Interaction Patterns — Component & Flow Selection Heuristics

> Purpose: Guide Claude Code in selecting components or patterns based on user task, role, or system state.

---

## 🧩 When to Use Which Component

| Task Intent            | Recommended Component                |
|------------------------|--------------------------------------|
| Select 1 from <6 items | Radio group                          |
| Select 1 from >6 items | Select dropdown                      |
| Set single value       | Input field                          |
| Set range              | Slider + number field                |
| Trigger task           | Button (primary, ghost, or destructive) |
| Show contextual info   | Tooltip or inline helper             |
| Navigate to config     | CTA button with page route           |
| Confirm high-risk task | Modal with confirmation & escape     |
| Show ongoing status    | Badge or chip                        |
| Persist metadata       | Sidebar or drawer with audit section |
| Batch actions          | Table with checkboxes + bulk menu    |

---

## 🧠 UX Patterns per Flow Type

| Flow Type          | Preferred Pattern                |
|--------------------|----------------------------------|
| Multi-step config  | Stepper wizard / vertical tabs   |
| Dashboard view     | Cards + tables, tabs for scoping |
| Critical decisions | Dialogs with secondary options   |
| Fast task          | Inline editing or slide-out panel|
| Logs & audits      | Accordion logs or data table     |

---

## ⚠️ Risk Level Guidelines

| Risk Type     | Required UX Safeguard               |
|---------------|-------------------------------------|
| Low (undoable)| Simple button action                |
| Medium        | Confirmation modal with cancel path |
| High (irreversible) | Escalation modal + audit trail |

> Risk-aware interactions should trigger heuristics from `design-heuristics.yaml`

---

## Microstates Checklist

Claude must support the following states for any interactive pattern:

- `loading`: include spinner or shimmer for any async interaction
- `empty`: provide guidance or call to action if no data
- `error`: render a recoverable message, not just a toast
- `success`: affirm that the action completed

> Example: A provisioning table should include an empty state message like "No active provisioning tasks. Start one now."


---

## Industry-Standard Interaction Rules

### Interaction Design Rules (Norman + Tognazzini + NN/g) — **Must Comply**
- **Affordance/Signifiers**: Interactive elements look/communicate they're interactive; hover/focus/pressed states always present
- **Feedback**: Every action yields perceivable response ≤100ms (direct manipulation), ≤300ms (network operations)
- **Constraints & Mapping**: Disable or guard impossible actions; map controls to outcomes spatially/semantically
- **Consistency**: Component behaviors and keyboard contracts consistent across all contexts
- **Visibility of System Status**: Users always know what's happening through appropriate feedback
- **Match Mental Models**: Interface matches real-world conventions and user expectations
- **User Control & Freedom**: Users can undo/redo actions; clearly marked exits from unwanted states
- **Recognition Over Recall**: Objects, actions, options visible; don't make users remember information
- **Error Prevention**: Eliminate error-prone conditions; present confirmation options before destructive actions
- **Help & Documentation**: Provide contextual help when needed; focus on user's task

### Information Architecture & Navigation (Covert + Rosenfeld/Morville) — **Must Comply**
- **Labels**: Task-oriented, plain language, 1–3 words; consistent across all surfaces
- **Depth**: Avoid deep nesting; cap primary nav levels at 2; reveal-progress breadcrumbs when depth >1
- **Findability**: Unique, scannable story titles; search synonyms included in documentation

### Forms & Inputs (Wroblewski + Jarrett) — **Must Comply**
- **Grouping**: 1 idea per field; logical sections; progressive disclosure for advanced settings
- **Validation**: Prevent errors where possible; inline, specific, human-readable errors; don't clear user input on error
- **Defaults**: Safe, reversible defaults; destructive actions require confirmation with clear consequences

### Content Design & Microcopy (Halvorson + McGrane + Winters + Metts/Welfle + Yifrah) — **Must Comply**
- **Plain Language**: Reading level ≈ grade 8–9; active voice; front-load meaning
- **Buttons**: Strong verb + object ("Save changes"); links describe destination clearly
- **Error Style**: Say what happened, why it matters, what to do next; offer a way out
- **Inclusivity**: People-first, unbiased language; avoid idioms; localize units, dates, pluralization

### Motion & Ergonomics (Val Head + Platform HIGs) — **Must Comply**
- **Purposeful Motion**: Only for state changes and continuity; 120–240ms UI transitions, 240–400ms entrances
- **Target Sizes**: Min 44×44px (touch), 24×24px (pointer) with adequate spacing; respect Fitts's law

---

## 🤖 Claude Usage

Use this file to:

- Choose the correct component based on task, quantity, or risk
- Build flows that match task type: fast vs. guided vs. dashboard
- Evaluate if your generated UI introduces friction, ambiguity, or overchoice
- Apply industry-standard interaction rules from Norman, Tognazzini, and NN/g
- Ensure content follows plain language and inclusive design principles

