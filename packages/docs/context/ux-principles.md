# UX Principles — Behavioral Guidelines for Platform Apps

> Purpose: Guide Claude Code in selecting appropriate flows, layouts, and interaction models based on user behavior, role, and task complexity.

---

## 🎯 User Goal Types

| Goal Type     | Design Strategy                      | Example                                     |
|---------------|--------------------------------------|---------------------------------------------|
| Quick action  | Shallow flow, fast feedback          | Reset modem, update SLA                     |
| Complex config| Step-by-step, progressive disclosure | Provision service, assign IP blocks         |
| Continuous monitor | Sovereign UI with live updates  | NOC dashboard, SLAs, service uptime         |
| Background insight | Support panels, cards           | Health alerts, audit logs                   |

---

## 🧠 User Modes & Mental Models

- **Transient** (task-focused): minimize steps, smart defaults, focus on CTA
- **Sovereign** (persistent): data-dense, deep drilldowns, modular widgets
- **Daemonic** (background): show system status, escalate only on failure
- **Parasitic** (adjunct): inline helpers (e.g., autocomplete, audit info)

---

## 📐 Hierarchy & Readability

- One primary action per view
- Titles, labels, and sections must communicate **priority**
- Use whitespace and typography to indicate grouping and importance
- Minimize visual noise; surface meaningful signals

---

## ✅ Accessibility Principles in Behavior

- Use **semantic regions** (`<main>`, `<nav>`, `<aside>`) to enable screen reader structure
- Every interactive element must have **name, role, and value**
- Avoid hover-only disclosure patterns (always provide keyboard triggers)
- Ensure **focus state visibility** for all inputs and actions

---

## Task Flow Types

| Flow Type       | Characteristics                                | UI Guidelines                  |
|-----------------|------------------------------------------------|--------------------------------|
| Linear task     | Has a start and clear finish                   | Stepper, breadcrumb, modal     |
| Branching flow  | User chooses between paths                     | Tabs, conditional modals       |
| Loop (revisit)  | User reviews or retries steps                  | Back/Review button, save draft |
| Asynchronous    | System continues after user exits              | Status indicators, alerts      |

> Claude: Treat each flow as a **task object**. Generate UI that matches the flow type and step count.
---

## Complexity Controls (Claude)

Claude must reduce perceived complexity by:

- Chunking information into groups of 5–9 items max per view
- Using progressive disclosure (show detail on demand)
- Prioritizing "first read" content — the 3 most important elements must be visible without scroll on 1024×768
- Avoiding multiple dense regions in the same viewport

Heuristic Trigger:
- If `layout.density == high` or `component.count > 12`, Claude should offer:
  - Accordion
  - Tabs
  - Summary/Details toggle

---

## 🤖 Claude Usage

Use this file to:

- Determine which layout to choose for a user flow
- Decide whether to simplify a flow or split it into stages
- Choose components based on **task criticality** and **user role**
- Surface priority info at the right hierarchy level

