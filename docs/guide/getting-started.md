# Getting Started

WPMoo Toolkit creates a generated Odoo development environment from a product
name, an Odoo version, and optional source repositories.

The generated environment is meant to be boring. Runtime files, Compose files,
metadata, helper scripts, docs, and recovery commands live in the generated
repository. Product source code stays in source repositories under
`odoo/custom/src`.

## Install Nothing First

You can run WPMoo directly through npm:

```bash
npx @wpmoo/toolkit
```

Aliases are available for shorter commands:

```bash
npx wpmoo
npx @wpmoo/odoo
```

## Guided Setup

From the workspace where you keep Odoo projects:

```bash
npx @wpmoo/toolkit
```

If the current directory is not already a WPMoo environment, the CLI opens the
create flow. It asks for:

- product slug
- Odoo version
- target environment folder
- optional GitHub or local-only repository setup
- optional source repositories

The default target folder is `./<product>_dev`.

## Local-Only Setup

GitHub CLI is optional. Choose local-only setup when you want to create the
environment first and connect repositories later.

After setup:

```bash
cd <product>_dev
./moo
```

Add a source repository later from the cockpit or with:

```bash
npx @wpmoo/toolkit add-repo \
  --repo-url https://github.com/example-org/odoo_sample_module.git
```

## Scripted Setup

For repeatable setup:

```bash
npx @wpmoo/toolkit create \
  --product odoo_sample_module \
  --odoo-version 19.0 \
  --dev-repo-url https://github.com/example-org/odoo_sample_module_dev.git \
  --source-repo-url https://github.com/example-org/odoo_sample_module.git \
  --init-empty-repos
```

Preview the generated files without writing:

```bash
npx @wpmoo/toolkit create \
  --product odoo_sample_module \
  --source-repo-url https://github.com/example-org/odoo_sample_module.git \
  --dry-run
```

## Source Types

Source repositories are grouped by intent:

```text
odoo/custom/src/
|-- private/
|-- oca/
`-- external/
```

Use `--source-type oca` or `--source-type external` when a repository should not
go under the private source path.

## Next Step

Open the [Cockpit Guide](/guide/cockpit) to see the daily workflow.
