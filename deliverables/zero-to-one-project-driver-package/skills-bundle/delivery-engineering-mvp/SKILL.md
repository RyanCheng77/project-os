---
name: delivery-engineering-mvp
description: Use when the task is to land the MVP technically: build the main path, keep the demo runnable, add fallback or mock behavior, control implementation scope, and leave behind verifiable delivery artifacts.
---

# Delivery Engineering MVP

Use this skill for practical MVP implementation and delivery hardening.

## Primary Job

Keep the project runnable, demoable, and verifiable while shipping the smallest useful implementation.

## Core Rules

- Prioritize the main flow over broad architecture.
- Add fallback or mock paths when external dependencies are fragile.
- Break implementation into small units that can be verified immediately.
- Prefer simple tests or scripts over unbounded test ambition.
- Sync implementation changes into technical docs in the same round.

## Default Workflow

1. Identify the critical path to keep working.
2. Implement the next smallest change on that path.
3. Add or improve fallback, mock, or error handling when needed.
4. Add minimum validation:
   - smoke test
   - manual replay step
   - direct API check
5. Update:
   - `docs/technical-design.md`
   - `docs/progress-archive.md`

## Output Standard

Explain:

- what path was improved
- how it was verified
- what remains technically fragile

## Common Failure Modes

- Overbuilding before the main flow is stable
- Relying entirely on external AI or services
- Shipping without a fast verification path
- Leaving doc truth behind code truth
