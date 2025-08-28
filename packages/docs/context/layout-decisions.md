# Layout Decisions — Goal-Driven UI Zones

> Purpose: Inform Claude Code’s layout scaffolding logic based on user role, complexity, and intent.

---

## 🏗️ Standard Page Structure

- **Header**: Primary title, task selector, quick stats
- **Primary pane**: Core interaction zone (form, dashboard, table)
- **Support pane (optional)**: Contextual help, audit info, live status
- **Global footer**: Save/Cancel, contextual CTA

---

## 🎭 Layout by User Role

| Role             | Layout Type              | Notes                                   |
|------------------|--------------------------|-----------------------------------------|
| NOC Engineer     | Sovereign, dense UI      | Emphasize visibility & filtering        |
| Provisioning Ops | Step-based flow          | Default to progressive disclosure       |
| Account Manager  | Table + filters + detail | Prefer batch actions and sort/filter    |
| Compliance Admin | Tabs + log surfaces      | Prioritize audit history and read-only  |

---

## 🔀 Flow Logic Guidelines

- For **multi-step config**, show progress indicators and allow review
- For **ongoing monitoring**, keep the interface persistent with live refresh zones
- For **role-based panels**, allow filtering by org, region, access level

---

## 🧠 Claude Code Layout Rules

1. Always use **semantic containers** for layout regions (header, main, aside)
2. Follow the **4px baseline grid** from `style-guide.md`
3. Never place two CTAs of equal weight at the same level
4. Always provide a “way back” or cancel path
5. Group related actions visually and logically

---

# Information Architecture — UX Navigation & Context Rules

## Navigation Tiers

| Tier | UX Pattern         | Use When                             |
|------|--------------------|--------------------------------------|
| Primary | Top nav or sidebar | Core app sections (Dashboard, Services) |
| Secondary | Tabs or nested nav | Sub-sections (e.g., Logs, Settings)     |
| Tertiary | Anchor links, filters | Content-local nav (e.g., tabs within a tab) |

## Contextual Orientation

Claude must always surface:

- Page title or header (`<h1>`)
- Current location (e.g., breadcrumb or tab highlight)
- Available paths forward (CTAs, nav items)

> Claude: If a screen is more than one tier deep, include breadcrumbs or scoped headers to help the user re-orient.


## 🤖 Claude Usage

Use this file when:
- Designing a new screen from scratch
- Deciding where to place actions vs. metadata
- Scaffolding dashboards, tables, or role-based panels

