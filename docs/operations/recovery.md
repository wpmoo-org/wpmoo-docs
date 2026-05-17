# Recovery Workflows

WPMoo is designed around recoverable local development.

Generated files can be refreshed. Source repositories are preserved. Database
work has snapshot and dry-run paths.

## Status

`status` is fast and local:

```bash
npx @wpmoo/toolkit status
npx @wpmoo/toolkit status --json
```

It reports whether the environment is detected, which Odoo version is selected,
how many source repositories are configured, how many modules are visible, and
which core files are missing.

## Doctor

`doctor` performs deeper checks:

```bash
npx @wpmoo/toolkit doctor
```

It checks metadata, source paths, compose files, generated scripts, Docker CLI
access, Docker Compose access, GitHub CLI availability, and source manifest
consistency.

Use safe repairs when available:

```bash
npx @wpmoo/toolkit doctor --fix
```

## Snapshots

Before risky local work:

```bash
./moo snapshot devel before-update
```

Preview a restore first:

```bash
./moo restore-snapshot --dry-run before-update devel
```

Then restore when the plan is correct:

```bash
./moo restore-snapshot before-update devel
```

## Safe Reset

Safe reset refreshes generated files without deleting product source code:

```bash
npx @wpmoo/toolkit reset --dry-run
npx @wpmoo/toolkit reset
```

It preserves:

- `.env`
- database and filestore runtime data
- backups
- source repositories under `odoo/custom/src`
- custom patches and manifests

It can refresh:

- `.wpmoo/odoo.json`
- `moo`
- generated docs
- Compose files
- scripts
- optional project-local Agent Skills

## Recommended Pattern

```bash
./moo snapshot devel before-reset
npx @wpmoo/toolkit reset --dry-run
npx @wpmoo/toolkit reset
npx @wpmoo/toolkit doctor --fix
./moo restore-snapshot --dry-run before-reset devel
```

Run the real restore only when the dry-run output matches what you expect.
