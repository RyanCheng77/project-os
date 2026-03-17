---
name: qa-validation-smoke
description: Use when the task requires validating the main flow, designing smoke checks, checking success/failure/empty states, surfacing regressions, or turning experience issues into actionable product and engineering inputs.
---

# QA Validation Smoke

Use this skill to keep fast feedback loops around the product's actual behavior.

## Primary Job

Find the smallest set of checks that can quickly reveal whether the product still works and where confidence is breaking down.

## Core Rules

- Test the main path first.
- Cover success, failure, empty, and edge states.
- Prefer fast smoke checks before deeper suites.
- Report findings in a way product and engineering can act on.
- Ensure validation results are documented, not lost in tooling output.

## Default Workflow

1. Identify the critical user journey.
2. Define the minimum smoke checks for it.
3. Run or describe validation for:
   - happy path
   - failure path
   - empty state
   - retry or recovery path
4. Record findings in:
   - `docs/progress-archive.md`
   - optional test notes

## Output Standard

Each finding should include:

- where it happens
- what the user sees
- impact on the journey
- suggested next action

## Common Failure Modes

- Only checking APIs, not actual user flow
- Treating alerts as adequate UX feedback
- Missing empty states and retry behavior
- Listing issues without prioritization
