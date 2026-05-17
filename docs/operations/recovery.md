# Recovery Workflows

WPMoo is designed around recoverable local development.

Generated files can be refreshed. Source repositories are preserved. Database
work has snapshot and dry-run paths.

## Status

`status` is fast and local:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit status
$ npx @wpmoo/toolkit status --json
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit status
$ pnpm dlx @wpmoo/toolkit status --json
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit status
$ yarn dlx @wpmoo/toolkit status --json
```

```sh [bun]
$ bunx @wpmoo/toolkit status
$ bunx @wpmoo/toolkit status --json
```

:::

It reports whether the environment is detected, which Odoo version is selected,
how many source repositories are configured, how many modules are visible, and
which core files are missing.

## Doctor

`doctor` performs deeper checks:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit doctor
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit doctor
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit doctor
```

```sh [bun]
$ bunx @wpmoo/toolkit doctor
```

:::

It checks metadata, source paths, compose files, generated scripts, Docker CLI
access, Docker Compose access, GitHub CLI availability, and source manifest
consistency.

Use safe repairs when available:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit doctor --fix
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit doctor --fix
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit doctor --fix
```

```sh [bun]
$ bunx @wpmoo/toolkit doctor --fix
```

:::

## Snapshots

Before risky local work:

```sh
$ ./moo snapshot devel before-update
```

Preview a restore first:

```sh
$ ./moo restore-snapshot --dry-run before-update devel
```

Then restore when the plan is correct:

```sh
$ ./moo restore-snapshot before-update devel
```

## Safe Reset

Safe reset refreshes generated files without deleting product source code:

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

::: code-group

```sh [npm]
$ ./moo snapshot devel before-reset
$ npx @wpmoo/toolkit reset --dry-run
$ npx @wpmoo/toolkit reset
$ npx @wpmoo/toolkit doctor --fix
$ ./moo restore-snapshot --dry-run before-reset devel
```

```sh [pnpm]
$ ./moo snapshot devel before-reset
$ pnpm dlx @wpmoo/toolkit reset --dry-run
$ pnpm dlx @wpmoo/toolkit reset
$ pnpm dlx @wpmoo/toolkit doctor --fix
$ ./moo restore-snapshot --dry-run before-reset devel
```

```sh [yarn]
$ ./moo snapshot devel before-reset
$ yarn dlx @wpmoo/toolkit reset --dry-run
$ yarn dlx @wpmoo/toolkit reset
$ yarn dlx @wpmoo/toolkit doctor --fix
$ ./moo restore-snapshot --dry-run before-reset devel
```

```sh [bun]
$ ./moo snapshot devel before-reset
$ bunx @wpmoo/toolkit reset --dry-run
$ bunx @wpmoo/toolkit reset
$ bunx @wpmoo/toolkit doctor --fix
$ ./moo restore-snapshot --dry-run before-reset devel
```

:::

Run the real restore only when the dry-run output matches what you expect.
