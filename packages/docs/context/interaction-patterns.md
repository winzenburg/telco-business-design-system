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


## 🤖 Claude Usage

Use this file to:

- Choose the correct component based on task, quantity, or risk
- Build flows that match task type: fast vs. guided vs. dashboard
- Evaluate if your generated UI introduces friction, ambiguity, or overchoice

