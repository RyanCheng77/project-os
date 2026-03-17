# Contributing

Thanks for helping improve Project Operating System Toolkit.

## Before You Start

- Read `README.md` for repository structure.
- Read `docs/toolkit-map.md` to understand source, release, and copied artifacts.
- Prefer updating source directories before touching release or copied directories.

## Contribution Rules

1. Keep changes small and reviewable.
2. Update project docs when structure, packaging, or release rules change.
3. Do not treat business-project copies as the primary maintenance source.
4. If you modify release assets, document whether the same change must flow back to the source package.

## Recommended Flow

1. Update source materials in `skills/`, `docs/`, or editable deliverables first.
2. Verify whether the same change affects:
   - `deliverables/zero-to-one-project-driver-package/`
   - `deliverables/zero-to-one-project-driver-package-release/`
   - business-project copies
3. Update `docs/decision-log.md` for meaningful packaging or maintenance decisions.
4. Update `docs/progress-archive.md` with completed work and next actions when the change is structural.

## Pull Request Notes

Please include:

- what changed
- why it changed
- whether release artifacts were updated
- whether any copied artifacts still need sync
