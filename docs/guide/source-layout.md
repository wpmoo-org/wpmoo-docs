# Source Layout

WPMoo separates generated runtime files from product source code.

The generated environment can be refreshed. Your addon repositories should stay
versioned separately.

## The Three Source Buckets

Source repositories live under `odoo/custom/src`:

```text
odoo/custom/src/
|-- private/
|-- oca/
`-- external/
```

Use the buckets by intent:

| Bucket | Use it for |
| --- | --- |
| `private` | Product-owned addons, client addons, commercial addons, private repositories. |
| `oca` | OCA repositories such as `server-tools`, `sale-workflow`, or `web`. |
| `external` | Third-party addon repositories that are not OCA and not product-owned. |

## Add A Source Repository

Add a private source repository:

```bash
npx @wpmoo/toolkit add-repo \
  --repo-url https://github.com/example-org/odoo-addons.git \
  --source-type private
```

Add an OCA repository:

```bash
npx @wpmoo/toolkit add-repo \
  --repo-url https://github.com/OCA/server-tools.git \
  --source-type oca
```

WPMoo adds source repositories as Git submodules and registers them in the
generated environment metadata.

## Source Manifest

The generated source manifest lives here:

```text
odoo/custom/manifests/sources.yaml
```

It records:

- source type
- repository path
- repository URL
- Odoo branch
- addon boundaries

Inspect it:

```bash
npx @wpmoo/toolkit source list
npx @wpmoo/toolkit source list --json
```

Regenerate it after manual source repairs:

```bash
npx @wpmoo/toolkit source sync
```

Preview source sync changes:

```bash
npx @wpmoo/toolkit source sync --dry-run
```

## Remove A Source Repository

Remove a registered source repository:

```bash
npx @wpmoo/toolkit remove-repo --repo odoo-addons --source-type private
```

If the same repository folder name exists in more than one bucket, pass
`--source-type` so WPMoo knows which one you mean.

## How Odoo Sees Addons

The generated Compose entrypoint scans source repositories and exposes detected
addons to Odoo through the generated addon path. You keep source code in its own
repository, while the generated environment handles runtime wiring.

This is the main reason safe reset can refresh generated files without deleting
product code.

## Legacy Layouts

Older generated environments may still contain repositories directly under:

```text
odoo/custom/src/<repo>
```

WPMoo treats those as legacy private sources. `doctor`, `status`, and safe reset
can help register them in `.wpmoo/odoo.json` and `sources.yaml` without deleting
the existing source folder.

## Good Habits

- Commit product code inside the source repository, not in the generated
  environment root.
- Keep generated runtime changes separate from addon source changes.
- Run `source sync` after manual submodule repair.
- Run `status` after adding repositories so module detection is visible.
