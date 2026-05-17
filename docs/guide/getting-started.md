# Getting Started

WPMoo Toolkit creates a generated Odoo development environment from a product
name, an Odoo version, and optional source repositories.

The generated environment is meant to be boring. Runtime files, Compose files,
metadata, helper scripts, docs, and recovery commands live in the generated
repository. Product source code stays in source repositories under
`odoo/custom/src`.

## Install Nothing First

You can add WPMoo Toolkit to a project with the package manager you already use:

::: code-group

```sh [npm]
$ npm i @wpmoo/toolkit
```

```sh [pnpm]
$ pnpm add @wpmoo/toolkit
```

```sh [yarn]
$ yarn add @wpmoo/toolkit
```

```sh [bun]
$ bun add @wpmoo/toolkit
```

:::

For one-off local environment creation, you can also run it without adding a
dependency:

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

Aliases are available for shorter commands:

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

## Guided Setup

From the workspace where you keep Odoo projects:

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

```sh
$ cd <product>_dev
$ ./moo
```

Add a source repository later from the cockpit or with:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit add-repo \
  --repo-url https://github.com/example-org/odoo_sample_module.git
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit add-repo \
  --repo-url https://github.com/example-org/odoo_sample_module.git
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit add-repo \
  --repo-url https://github.com/example-org/odoo_sample_module.git
```

```sh [bun]
$ bunx @wpmoo/toolkit add-repo \
  --repo-url https://github.com/example-org/odoo_sample_module.git
```

:::

## Scripted Setup

For repeatable setup:

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

Preview the generated files without writing:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit create \
  --product odoo_sample_module \
  --source-repo-url https://github.com/example-org/odoo_sample_module.git \
  --dry-run
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit create \
  --product odoo_sample_module \
  --source-repo-url https://github.com/example-org/odoo_sample_module.git \
  --dry-run
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit create \
  --product odoo_sample_module \
  --source-repo-url https://github.com/example-org/odoo_sample_module.git \
  --dry-run
```

```sh [bun]
$ bunx @wpmoo/toolkit create \
  --product odoo_sample_module \
  --source-repo-url https://github.com/example-org/odoo_sample_module.git \
  --dry-run
```

:::

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
