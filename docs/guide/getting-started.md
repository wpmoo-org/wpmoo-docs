# Getting Started

WPMoo Toolkit creates a repeatable Odoo development environment for a product.
It gives you a generated runtime repository, keeps addon source repositories
separate, and gives daily work one command hub: `./moo`.

Use this guide when you want to create your first environment and understand
what happens next.

## Before You Start

You need:

- Node.js 20.17 or newer.
- Docker and Docker Compose.
- Git.
- GitHub CLI only if you want WPMoo to create or check GitHub repositories for
  you.

The create flow checks the required local tools before writing files. If Docker
or Git is not ready, WPMoo stops early and tells you what to fix.

## Start In Three Commands

Run the setup wizard:

```bash
npx @wpmoo/toolkit
```

Enter the generated environment:

```bash
cd <product>_dev
```

Open the cockpit:

```bash
./moo
```

Outside a generated environment, `npx @wpmoo/toolkit` opens the create flow.
Inside a generated environment, it opens the cockpit.

## Interactive Setup

The wizard asks for:

- product slug
- Odoo version
- target environment folder
- local-only or GitHub-backed repository setup
- optional source repositories

The default target folder is:

```text
./<product>_dev
```

Choose local-only setup when you want to get an environment running first and
connect repositories later.

## Scripted Setup

Use `create` when you want repeatable setup in a script or team onboarding
guide:

```bash
npx @wpmoo/toolkit create \
  --product my_product \
  --odoo-version 19.0 \
  --target ./my_product_dev \
  --source-repo-url https://github.com/example-org/my_product.git
```

Preview the generated files without writing them:

```bash
npx @wpmoo/toolkit create \
  --product my_product \
  --source-repo-url https://github.com/example-org/my_product.git \
  --dry-run
```

## Add Sources Later

Generated environments can start empty. Add source repositories later from the
cockpit or with a direct command:

```bash
npx @wpmoo/toolkit add-repo \
  --repo-url https://github.com/example-org/odoo-addons.git \
  --source-type private
```

Then refresh the manifest:

```bash
npx @wpmoo/toolkit source sync
```

Source repositories are grouped under:

```text
odoo/custom/src/
|-- private/
|-- oca/
`-- external/
```

Open the [Source Layout](/guide/source-layout) guide for details.

## First Daily Loop

After setup, start services and run the basic checks:

```bash
./moo start
./moo status
./moo doctor
```

When a module exists:

```bash
./moo update my_module
./moo test my_module
```

For the interactive workflow, continue with the [Cockpit Guide](/guide/cockpit).
