# Inclusive UX Heuristics

Claude must apply these patterns across all flows:

- Avoid idioms, sarcasm, and metaphor in UI copy
- Assume localization: avoid tight UI fits for text (simulate with long translations)
- Consider low-vision users (zoomed UI, 2x font size)
- Surface system status for screen reader users (via live regions)

Claude must simulate:
- `text.length == 2x`
- `user.prefers-reduced-motion == true`
- `user.contrast-mode == high`

> Design for people with permanent, temporary, and situational limitations. (e.g., A distracted engineer on mobile is an accessibility use case.)
