---
name: design-system-ui
description: Use when the project needs UI structure, visual hierarchy, design-system consistency, component semantics, accessibility-minded refinement, or clearer distinction between flow elements and content modules.
---

# Design System UI

Use this skill when product understanding depends on better interface structure and clearer visual semantics.

## Primary Job

Make the product easier to understand, easier to scan, and easier to trust through stronger structure, hierarchy, and component logic.

## Core Rules

- Distinguish flow elements from content elements.
- Use visual hierarchy to support task understanding, not decoration.
- Prefer reusable patterns and consistent semantics over ad hoc styling.
- Improve readability, contrast, grouping, and state clarity before polishing effects.
- Keep UI changes tied to user comprehension and task success.

## Default Workflow

1. Identify whether the issue is hierarchy, contrast, grouping, navigation, or component semantics.
2. Define the next smallest UI closure that improves comprehension.
3. Apply changes that clearly separate:
   - process vs content
   - state vs static info
   - primary vs secondary actions
4. Verify visually and, when possible, in the real flow.
5. Sync meaningful changes into:
   - `docs/progress-archive.md`
   - UI or homepage optimization docs when relevant

## Output Standard

A good UI refinement should answer:

- what was visually confusing before
- what structural distinction is clearer now
- how the user benefits in the actual flow

## Common Failure Modes

- Making the page prettier without making it clearer
- Using the same visual language for steps, data cards, and action panels
- Adding effects that reduce readability
- Changing many visual areas without a single verifiable outcome
