# Project OS

Project OS is a reusable toolkit for turning proven project delivery practices into shareable assets.

It combines project orchestration, role-based skills, starter repo scaffolds, and Playwright validation workflows in one repository.

## What This Repo Includes

- Project operating system skills for product, research, delivery, QA, archive, design, ops, and GTM collaboration
- Starter repo scaffolds for launching new projects faster
- Playwright toolkits for responsive layout and mobile validation
- Release-ready bundles for internal sharing and handoff
- Project docs that explain source-of-truth, release boundaries, and packaging decisions

## Who It Is For

- teams starting new AI or product projects
- builders who want smaller, verifiable project loops
- teams that want documentation, delivery, and validation to stay aligned
- teams turning one-off project experience into reusable workflows

## Quick Start

Start with these entry points:

1. [Deliverables Index](deliverables/README.md)
2. [Toolkit Map](docs/toolkit-map.md)
3. [Starter Repo Guide](docs/starter-repo-guide.md)
4. [Release Bundle README](deliverables/zero-to-one-project-driver-package-release/README.md)

If you want the fastest path to reuse, begin with the release bundle in `deliverables/zero-to-one-project-driver-package-release/`.

## Repository Map

```text
project-os/
├── skills/         # source-of-truth role skills
├── deliverables/   # reusable packages, starter repos, validation toolkits
├── docs/           # repository guidance and project memory
├── CHANGELOG.md
└── README.md
```

## Key Packages

### `deliverables/zero-to-one-project-driver-package/`

Editable source bundle for the project operating system package.

### `deliverables/zero-to-one-project-driver-package-release/`

Stable shareable bundle with versioning, changelog, release notes, and installation docs.

### `deliverables/starter-repo-template/`

Minimal starter repo scaffold for launching new projects.

### `deliverables/playwright-responsive-toolkit/`

Generic responsive testing toolkit for layout and mobile validation.

### `deliverables/poll-vote-playwright-enterprise-toolkit/`

Enterprise-derived Playwright toolkit extracted from a real project for reuse and adaptation.

## Source and Release Boundaries

This repository separates maintenance layers on purpose:

1. `skills/` is the source of truth for role skills.
2. `deliverables/zero-to-one-project-driver-package/` is the editable package source.
3. `deliverables/zero-to-one-project-driver-package-release/` is the stable release bundle.
4. Business-project copies should not be treated as the primary maintenance source.

## Current Status

- Repository status: public initial release
- Repository version: `v0.1.0`
- Latest repository notes: [docs/releases/v0.1.0.md](docs/releases/v0.1.0.md)

## Documentation

- [Deliverables Index](deliverables/README.md)
- [Project Overview](docs/project-overview.md)
- [Progress Archive](docs/progress-archive.md)
- [Decision Log](docs/decision-log.md)
- [Open Source Readiness](docs/open-source-readiness.md)

## License

[MIT](LICENSE)
