# Generated Environments

A generated environment is a separate repository, usually named
`<product>_dev`.

It contains the local runtime files and generated workflow files. Product source
code lives in child source repositories under `odoo/custom/src`.

## Layout

```text
odoo_sample_module_dev/
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
|   `-- odoo/
|       `-- odoo.conf
|-- docs/
|-- resources/
|   `-- odoo/
|       `-- entrypoint.sh
|-- moo
|-- odoo/
|   `-- custom/
|       |-- manifests/
|       |-- patches/
|       `-- src/
|           |-- private/
|           |-- oca/
|           `-- external/
`-- scripts/
```

## Metadata

`.wpmoo/odoo.json` records the selected Odoo version, product slug, source
repositories, ports, external resource refs, and generated file settings.

WPMoo commands use this metadata instead of guessing from the filesystem.

## Compose Overlays

Development uses:

```text
compose.yaml
compose/dev.yaml
```

Other overlays are available for specific workflows:

```text
debug
test
stage
prod
proxy
tools
```

Production-like modes require non-default secrets before Compose is allowed to
run.

## Source Repositories

Source repositories are Git submodules:

```text
odoo/custom/src/private/
odoo/custom/src/oca/
odoo/custom/src/external/
```

The generated source manifest lives at:

```text
odoo/custom/manifests/sources.yaml
```

It mirrors source repository metadata and addon boundaries for tooling,
automation, and review.

## External Resources

WPMoo keeps the npm package small by copying runtime resources from external
resource repositories:

```text
gh:wpmoo-org/odoo-docker-compose
gh:wpmoo-org/odoo-skills
```

These can be pinned by ref when you need repeatable scaffolding.
