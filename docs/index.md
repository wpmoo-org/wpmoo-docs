---
layout: home

hero:
  name: "WPMoo Toolkit"
  text: "Create. Work. Recover."
  tagline: Free MIT-licensed tooling for creating, operating, and recovering local Odoo development environments.
  image:
    src: /assets/wpmoo-logo.webp
    alt: WPMoo Toolkit logo
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

```sh
$ brew install gh
$ gh auth login
```

GitHub CLI is optional. You can start local-only and add repositories later.

## Quick Setup

Run the wizard from the workspace where you keep Odoo projects:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit
```

```sh [bun]
$ bunx @wpmoo/toolkit
```

:::

Short aliases:

::: code-group

```sh [npm]
$ npx wpmoo
$ npx @wpmoo/odoo
```

```sh [pnpm]
$ pnpm dlx wpmoo
$ pnpm dlx @wpmoo/odoo
```

```sh [yarn]
$ yarn dlx wpmoo
$ yarn dlx @wpmoo/odoo
```

```sh [bun]
$ bunx wpmoo
$ bunx @wpmoo/odoo
```

:::

After the environment is created:

```sh
$ cd <product>_dev
$ ./moo
```

For a scripted setup:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit create \
  --product odoo_sample_module \
  --odoo-version 19.0 \
  --dev-repo-url https://github.com/example-org/odoo_sample_module_dev.git \
  --source-repo-url https://github.com/example-org/odoo_sample_module.git \
  --init-empty-repos
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit create \
  --product odoo_sample_module \
  --odoo-version 19.0 \
  --dev-repo-url https://github.com/example-org/odoo_sample_module_dev.git \
  --source-repo-url https://github.com/example-org/odoo_sample_module.git \
  --init-empty-repos
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit create \
  --product odoo_sample_module \
  --odoo-version 19.0 \
  --dev-repo-url https://github.com/example-org/odoo_sample_module_dev.git \
  --source-repo-url https://github.com/example-org/odoo_sample_module.git \
  --init-empty-repos
```

```sh [bun]
$ bunx @wpmoo/toolkit create \
  --product odoo_sample_module \
  --odoo-version 19.0 \
  --dev-repo-url https://github.com/example-org/odoo_sample_module_dev.git \
  --source-repo-url https://github.com/example-org/odoo_sample_module.git \
  --init-empty-repos
```

:::

## Main Cockpit Menu

```text
WPMoo Cockpit
|-- Services
|   |-- Start services
|   |-- Stop services
|   |-- Restart services
|   |-- View logs
|   `-- Open shell
|-- Modules
|   |-- List modules
|   |-- Install module
|   |-- Update module
|   |-- Run tests
|   |-- Run environment lint
|   |-- Generate POT
|   |-- Add module
|   `-- Remove module
|-- Database
|   |-- Open psql
|   |-- Create snapshot
|   |-- Restore snapshot
|   `-- Reset database
|-- Diagnostics
|   |-- Environment status
|   `-- Run doctor
|-- Repositories
|   |-- Add source repo
|   `-- Remove source repo
`-- Maintenance
    `-- Safe reset environment
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
