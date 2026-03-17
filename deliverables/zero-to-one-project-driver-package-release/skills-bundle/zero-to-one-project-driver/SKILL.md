---
name: zero-to-one-project-driver
description: Use when the user wants to drive a project from 0 to 1, land an MVP, coordinate multiple sub-agents or roles, or continuously align product, research, delivery, testing, and documentation. This skill enforces parallel collaboration, frequent cross-role syncing, document-first project memory, and end-of-round unified summaries.
---

# Zero-to-One Project Driver

Use this skill when the user is not asking for a single isolated task, but for an end-to-end project push such as:

- "推进 MVP 落地"
- "从 0 到 1 做一个产品"
- "整理需求、技术、演示和测试"
- "安排不同角色并行推进"
- "沉淀项目文档并统一汇总"

This skill treats the work as a project system, not a one-off implementation.

## Core Goal

Turn fuzzy project intent into a continuously advancing MVP with:

- clear stage judgment
- parallel role collaboration
- frequent information exchange
- timely document updates
- stable demos and validation
- a final unified project view

## Default Working Mode

When this skill triggers, do not jump straight into coding or into a single linear plan.
First operate in this order:

1. Identify the current stage.
2. Define this round's smallest useful closure.
3. Split work into parallel tracks.
4. Create or update shared project documents.
5. Execute, verify, sync, and summarize.

## Small-Unit Execution Rule

Always decompose project execution into the smallest practical units that can be verified quickly.

Do not push large, vague, multi-goal tasks as one block when they can be split into smaller closures.
Large task bundles increase:

- token waste
- context loss
- validation delay
- hidden rework
- coordination drift across roles

Prefer many small verified wins over one large unfinished push.

Each execution unit should ideally be:

- small enough to finish in one round or one focused implementation pass
- specific enough to have a clear done/not-done judgment
- narrow enough to verify immediately
- meaningful enough to advance the project state

Good examples:

- split homepage and demo into separate pages
- replace alert with inline status feedback
- add mock fallback for persona extraction
- add empty state for stats and tags
- add smoke test for three critical APIs

Bad examples:

- "finish the whole product experience"
- "upgrade the entire frontend"
- "complete product, technical, testing, and design optimization together"

## Micro-Closure Standard

Before executing, define the micro-closure for the current round:

- What exact change will be made?
- How will we verify it immediately?
- Which document must reflect it?
- Which role needs to know right away?

If any of these are unclear, the task is probably still too large.

## Validation-First Chunking

Prefer chunking work by validation boundary, not by abstract category.

Examples:

- not "optimize demo page"
  but "turn the step cards into a step bar and verify visual distinction"
- not "improve AI reliability"
  but "add mock fallback to persona extraction and verify the response path"
- not "完善文档"
  but "update MVP definition and archive after the fallback behavior changes"

The guiding question is:

"What is the next smallest change that produces a visible, testable improvement?"

## Stage Detection

Classify the project into one of these stages before acting:

- Idea framing: value proposition, audience, opportunity, positioning are still fuzzy.
- MVP shaping: homepage, core flow, basic backend, demo path, and docs are being assembled.
- Demo hardening: the main flow exists but is unstable, visually unclear, or too dependent on fragile integrations.
- Validation hardening: mock mode, tests, fallback paths, empty states, and clearer success criteria are needed.
- Iteration planning: the MVP works; next priority is roadmap, comparison features, sharing, retention, or scale.

State the detected stage in one short line in your own reasoning and let it influence priorities.

## Default Prioritization

When tradeoffs are unclear, prioritize in this order:

1. Can the project explain its value clearly?
2. Can the main user flow run end to end?
3. Can the flow still run when dependencies fail?
4. Can the team understand the current state from docs?
5. Can the project be iterated safely?

Do not over-invest in polish before the main flow, fallback path, and documentation are in place.

## Parallel Collaboration Rules

Prefer parallel collaboration over linear handoff whenever possible.

If sub-agents or role-based collaborators are available, split by responsibility, not by arbitrary file slices.
Use disjoint ownership where possible, but require shared checkpoints.
Also keep each role's assigned work in small validated units rather than long isolated workstreams.

Recommended default roles:

- Product lead:
  Owns goal clarification, scope control, MVP definition, acceptance criteria, prioritization, and next-step planning.
- User research lead:
  Owns opportunity framing, target users, pain points, mental models, comparable tools, and research-backed inputs.
- Delivery / engineering lead:
  Owns implementation, demo path, API behavior, fallback strategy, environment setup, and technical debt notes.
- QA / validation lead:
  Owns smoke tests, main flow replay, regression risks, empty states, failure modes, and usability issues.
- Archive / PMO lead:
  Owns project memory, progress archive, change log, pending risks, decision log, and final round summary.

One person or agent may cover multiple roles, but the responsibilities must still be explicit.

## Cross-Role Sync Rules

Parallel work must not become isolated work.
Enforce cross-role information flow:

- Product must consume research and testing inputs before locking scope.
- Engineering must reflect product decisions and known QA risks in implementation notes.
- QA must test the real flow, not just read code.
- Archive must continuously absorb outputs from product, research, engineering, and QA.

At minimum, each round should answer:

- What changed?
- What was confirmed?
- What remains risky?
- What did we decide not to do yet?
- What is the next highest-value move?

At minimum, each role handoff should also answer:

- What tiny unit was completed?
- How was it verified?
- What new information must other roles absorb?

If role outputs conflict, surface the conflict clearly and propose a decision instead of hiding it.

## Document-First Project Memory

The project must maintain an overall project document set with enough information for a new collaborator to recover context quickly.

Default required docs:

- `docs/requirements.md`
  Use for product goals, target users, core scenarios, scope boundaries, acceptance criteria.
- `docs/technical-design.md`
  Use for architecture, API behavior, environments, dependencies, fallback logic, technical risks.
- `docs/progress-archive.md`
  Use for completed work, in-progress items, known issues, decisions made, and recommended next actions.
- `docs/mvp-1.0.md`
  Use for the current MVP definition: audience, core value, must-have capabilities, delayed capabilities, validation criteria.

Recommended optional docs when needed:

- `docs/research-input.md`
  Use for user opportunities, personas, methods, comparable products, open-source tools/models, and research synthesis.
- `docs/roadmap.md`
  Use for post-MVP iteration planning and milestone sequencing.
- `docs/decision-log.md`
  Use when the project has many reversals, tradeoffs, or architecture/product decisions that need a stable history.

## Documentation Rules

Documentation is not a final cleanup step. Update it during the round.

Always keep docs synchronized with real project state:

- If the homepage/demo split changes, archive and README should change in the same round.
- If the fallback behavior changes, technical design and README should change in the same round.
- If priorities change, MVP or requirements docs should change in the same round.

Do not leave critical project truth trapped only in chat or only in code.

## Round Execution Template

Each meaningful project round should follow this template:

1. Round goal
   Define the smallest high-value closure for this round.

2. Micro-closures
   Break the round into small units that can each be verified quickly.

3. Parallel tracks
   Split work into product, research, engineering, QA, and archive tracks as appropriate.

4. Shared artifacts
   Decide which docs must be updated this round.

5. Execution
   Implement, validate, and collect role outputs.

6. Sync
   Reconcile contradictions, merge findings, and update the shared project picture.

7. Unified summary
   End with one concise summary covering:
   - what shipped
   - what was validated
   - what remains risky
   - what should happen next

Do not keep micro-closures only in your head. State them explicitly when useful so the user can track project momentum.

## MVP Landing Rules

When the user asks to "推进 MVP 落地", use this default sequence:

1. Make sure the product can explain itself.
2. Make sure the main flow can be demonstrated.
3. Add fallback or mock mode so the demo is resilient.
4. Add minimum validation such as smoke tests or replayable checks.
5. Document the current state clearly.
6. Only then push visual refinement or 1.1 features.

Within each step above, continue breaking work into the smallest verifiable units.
Never attempt the whole sequence as one implementation block.

## UX and Product Heuristics

When reviewing or steering a 0-to-1 product:

- Prefer one clear primary flow over many partial flows.
- Prefer visible status feedback over silent async behavior.
- Prefer page-level clarity over decorative complexity.
- Prefer product comprehension over feature count.
- Prefer stable demoability over brittle realism.

If the user gives subjective UI feedback, translate it into product terms:

- "看不清" often means hierarchy, contrast, state, or semantic grouping is weak.
- "像看板" often means flow elements are visually indistinguishable from content modules.
- "不稳" often means missing fallback, missing validation, or missing system feedback.

## Default Deliverables

Unless the user clearly wants something else, a 0-to-1 project round should try to leave behind:

- a better product state
- an updated shared document set
- a clearer risk list
- a next-step recommendation

## Common Failure Modes

Watch for these and correct them early:

- Treating the project as a sequence of isolated tasks rather than a coordinated system.
- Building pretty pages before the main flow works.
- Depending fully on external AI or services without a demo fallback.
- Letting sub-agents work in parallel without syncing outputs.
- Keeping decisions only in chat and not in docs.
- Reporting file changes without answering what the project state now is.

## Final Response Pattern

At the end of a project round, summarize in this order:

1. Current project state
2. What changed this round
3. What was verified
4. Remaining risks
5. Recommended next step

Keep the summary compact, but make sure it is enough for the next round to continue without re-discovery.
