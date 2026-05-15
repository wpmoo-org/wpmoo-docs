---
layout: home

hero:
  name: "WPMoo"
  text: "Odoo development workflow tooling"
  tagline: Create and operate repeatable Docker Compose based Odoo development environments with a guided CLI cockpit.
  actions:
    - theme: brand
      text: Try WPMoo Odoo
      link: https://www.npmjs.com/package/@wpmoo/odoo
    - theme: alt
      text: View on GitHub
      link: https://github.com/wpmoo-org/wpmoo-odoo

features:
  - title: Development-first Odoo CLI
    details: WPMoo Odoo creates local Odoo environments from a dev repository and one or more source repositories.
  - title: Guided cockpit and direct commands
    details: Use an interactive terminal cockpit for daily work or direct commands for automation and repeatable terminal workflows.
  - title: Git submodule source layout
    details: Product source repositories live under odoo/custom/src/private as Git submodules pinned to the selected Odoo branch.
  - title: Docker Compose resources
    details: Runtime assets are copied from wpmoo-org/odoo-docker-compose instead of being embedded into the TypeScript package.
  - title: Agent Skills support
    details: Generated environments can include project-local Agent Skills from wpmoo-org/odoo-skills for Odoo workflows.
  - title: Recovery-oriented workflow
    details: Status, doctor, and safe reset commands help inspect environments and refresh generated files without touching product source code.
---

::: warning Pre-1.0 active development
WPMoo Odoo has not reached `1.0.0` yet. Until the `1.0.0` release, use it as a preview tool for evaluation, local trials, and feedback rather than a dependency for critical production workflows. Setup conventions and command behavior may still change between pre-1.0 releases.
:::

## Quick Start

Run the guided wizard from a workspace directory:

```bash
npx @wpmoo/odoo
```

If the current directory is not already a WPMoo environment, the CLI opens the create flow. It asks for the product slug, Odoo version, and environment folder. Choose any environment folder; the default is `./<product>_dev`.

## What WPMoo Odoo Provides

- A repeatable environment layout for Odoo module and product development.
- A practical cockpit for services, modules, database tasks, diagnostics, repositories, and maintenance.
- Direct commands such as `status`, `doctor`, `add-repo`, `add-module`, `reset`, `start`, `logs`, `install`, `update`, and `test`.
- Safe reset behavior that refreshes generated files while preserving source repositories and product code.

