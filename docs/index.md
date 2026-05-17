---
layout: home

hero:
  name: "WPMoo Toolkit"
  text: "Calmer Odoo development workflows"
  tagline: Free MIT-licensed tooling for creating, operating, and recovering local Odoo development environments.
  actions:
    - theme: brand
      text: Quick Setup
      link: /guide/getting-started
    - theme: alt
      text: Command Reference
      link: /reference/commands
    - theme: alt
      text: GitHub
      link: https://github.com/wpmoo-org/wpmoo-toolkit

features:
  - title: Local-first
    details: Start with a repeatable local Odoo environment before deciding how much infrastructure you need.
  - title: Source code stays separate
    details: Product repositories live as Git submodules under a predictable Odoo source layout.
  - title: Daily work has a cockpit
    details: Services, modules, databases, diagnostics, repositories, and recovery live in one terminal menu.
---

<div class="home-visual">
  <img src="/assets/wpmoo-banner.png" alt="WPMoo Toolkit for Odoo development workflows">
</div>

::: warning Pre-1.0 active development
WPMoo Toolkit is independent from Odoo S.A. and is not affiliated with,
endorsed by, or sponsored by Odoo S.A.

The project is still pre-1.0. Use it for evaluation, local trials, and feedback
before relying on it for critical production workflows.
:::

## Why We Built It

Odoo development has strong pieces, but the day-to-day workflow can still feel
fragile. One project has hand-written Compose files. Another has source code
mixed with generated runtime files. Someone resets a database without a
snapshot. A new developer spends the first day learning the local setup instead
of the module they came to change.

Doodba and odoo.build are valuable parts of the Odoo ecosystem. For our own
work, we still wanted a smaller layer: a friendly local development workflow
that creates a known folder layout, keeps product source repositories separate,
and gives developers a cockpit for the tasks they run every day.

WPMoo Toolkit is that layer. It does not try to be the whole deployment story.
It gives Odoo teams a practical starting point that is easy to inspect, easy to
reset, and safer to operate.

## What It Solves

- Creates repeatable Docker Compose based Odoo development environments.
- Keeps source repositories in `private`, `oca`, or `external` submodule paths.
- Gives daily Odoo work a guided terminal cockpit and matching direct commands.
- Adds status, doctor, snapshot, restore, and safe reset workflows.
- Refreshes generated files without deleting product source code.

## Prerequisites

- Node.js `20.17+`
- Git
- Docker and Docker Compose
- Optional: GitHub CLI (`gh`) for GitHub-connected setup

```bash
brew install gh
gh auth login
```

GitHub CLI is optional. You can start local-only and add repositories later.

## Quick Setup

Run the wizard from the workspace where you keep Odoo projects:

```bash
npx @wpmoo/toolkit
```

Short aliases:

```bash
npx wpmoo
npx @wpmoo/odoo
```

After the environment is created:

```bash
cd <product>_dev
./moo
```

For a scripted setup:

```bash
npx @wpmoo/toolkit create \
  --product odoo_sample_module \
  --odoo-version 19.0 \
  --dev-repo-url https://github.com/example-org/odoo_sample_module_dev.git \
  --source-repo-url https://github.com/example-org/odoo_sample_module.git \
  --init-empty-repos
```

## Main Cockpit Menu

```text
WPMoo Cockpit
|-- Command palette /
|   |-- search commands such as /test, /logs, /doctor, /safe-reset
|-- Services
|   |-- start
|   |-- stop
|   |-- restart
|   |-- logs
|   `-- shell
|-- Modules
|   |-- install
|   |-- update
|   |-- test
|   |-- lint
|   |-- pot
|   |-- add-module
|   `-- remove-module
|-- Database
|   |-- psql
|   |-- snapshot
|   |-- restore-snapshot
|   `-- resetdb
|-- Diagnostics
|   |-- status
|   `-- doctor
|-- Repositories
|   |-- add-repo
|   `-- remove-repo
|-- Maintenance
|   `-- safe-reset
`-- Exit
```

## Keep Reading

- [Getting Started](/guide/getting-started)
- [Cockpit Guide](/guide/cockpit)
- [Command Reference](/reference/commands)
- [Generated Environments](/reference/generated-environments)
- [Recovery Workflows](/operations/recovery)
- [Acknowledgements](/acknowledgements)

## Free And MIT Licensed

WPMoo Toolkit is free software released under the MIT License. It is built for
Odoo teams who want a calmer development workflow without locking their project
into a proprietary setup.
