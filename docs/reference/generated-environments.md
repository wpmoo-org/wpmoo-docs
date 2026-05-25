# Generated Environments

A generated environment is a separate repository, usually named:

```text
<product>_dev
```

It owns runtime wiring, helper scripts, generated docs, metadata, and local
operations. Product addon source code lives in source repositories under
`odoo/custom/src`.

## What Lives Where

| Area | Owned by | Safe reset behavior |
| --- | --- | --- |
| Compose files | WPMoo generated environment | Refreshed. |
| `./moo` and `scripts/` | WPMoo generated environment | Refreshed. |
| `.wpmoo/odoo.json` | WPMoo generated environment | Refreshed from current metadata. |
| `.env` | Local developer/operator | Preserved. |
| database and filestore data | Local runtime | Preserved. |
| `odoo/custom/src/private` | Source repositories | Preserved. |
| `odoo/custom/src/oca` | Source repositories | Preserved. |
| `odoo/custom/src/external` | Source repositories | Preserved. |
| `odoo/custom/manifests` | Source metadata and pins | Preserved and repairable. |
| `odoo/custom/patches` | Local patches | Preserved. |

## Layout

```text
my_product_dev/
|-- .wpmoo/
|   `-- odoo.json
|-- .env.example
|-- AGENTS.md
|-- README.md
|-- compose.yaml
|-- compose/
|   |-- dev.yaml
|   |-- debug.yaml
|   |-- test.yaml
|   |-- stage.yaml
|   |-- prod.yaml
|   |-- proxy.yaml
|   `-- tools.yaml
|-- config/
|   |-- odoo/
|   |   |-- odoo.conf
|   |   `-- requirements.txt
|   `-- logrotate/
|-- resources/
|   `-- odoo/
|       `-- entrypoint.sh
|-- moo
|-- scripts/
|-- odoo/
|   `-- custom/
|       |-- manifests/
|       |-- patches/
|       `-- src/
|           |-- private/
|           |-- oca/
|           `-- external/
`-- docs/
```

## Metadata

`.wpmoo/odoo.json` records the selected Odoo version, product slug, ports,
source repositories, external resource refs, and generated file settings.

WPMoo commands use this file instead of guessing from the filesystem.

## Compose Overlays

Local development uses:

```text
compose.yaml
compose/dev.yaml
```

Additional overlays are available for specific workflows:

```text
debug
test
stage
prod
proxy
tools
```

Stage and production-like modes are guarded. They require production-grade
secrets and explicit safety flags before risky lifecycle or destructive
database commands run.

## Daily Command Hub

The generated root includes:

```text
./moo
```

Use it for local work:

```bash
./moo start
./moo update my_module
./moo test my_module
./moo snapshot devel before-change
./moo doctor
```

`./moo status`, `./moo doctor`, and `./moo gate` route through the package
diagnostic and gate implementation so generated environments stay aligned with
the installed Toolkit release.

## Source Repositories

Source repositories are Git submodules:

```text
odoo/custom/src/private/
odoo/custom/src/oca/
odoo/custom/src/external/
```

The source manifest lives here:

```text
odoo/custom/manifests/sources.yaml
```

Use it with:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit source list
$ npx @wpmoo/toolkit source sync
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit source list
$ pnpm dlx @wpmoo/toolkit source sync
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit source list
$ yarn dlx @wpmoo/toolkit source sync
```

```sh [bun]
$ bunx @wpmoo/toolkit source list
$ bunx @wpmoo/toolkit source sync
```

:::

## External Resources

WPMoo keeps the npm package small by copying runtime resources from standalone
resources:

```text
gh:wpmoo-org/odoo-docker-compose
gh:wpmoo-org/odoo-skills
```

You can pin refs during creation:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit create \
  --product my_product \
  --source-repo-url https://github.com/example-org/my_product.git \
  --compose-template-ref v0.1.0 \
  --agent-skills-template \
  --agent-skills-template-ref v0.1.0
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit create \
  --product my_product \
  --source-repo-url https://github.com/example-org/my_product.git \
  --compose-template-ref v0.1.0 \
  --agent-skills-template \
  --agent-skills-template-ref v0.1.0
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit create \
  --product my_product \
  --source-repo-url https://github.com/example-org/my_product.git \
  --compose-template-ref v0.1.0 \
  --agent-skills-template \
  --agent-skills-template-ref v0.1.0
```

```sh [bun]
$ bunx @wpmoo/toolkit create \
  --product my_product \
  --source-repo-url https://github.com/example-org/my_product.git \
  --compose-template-ref v0.1.0 \
  --agent-skills-template \
  --agent-skills-template-ref v0.1.0
```

:::

## When To Regenerate

Use safe reset when generated files drift, templates improve, or an older
environment needs a refresh:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit reset --dry-run
$ npx @wpmoo/toolkit reset
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit reset --dry-run
$ pnpm dlx @wpmoo/toolkit reset
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit reset --dry-run
$ yarn dlx @wpmoo/toolkit reset
```

```sh [bun]
$ bunx @wpmoo/toolkit reset --dry-run
$ bunx @wpmoo/toolkit reset
```

:::

Safe reset is designed to preserve source repositories and runtime data. Use
the dry run first.
