# Command Reference

WPMoo has two command surfaces:

- `npx @wpmoo/toolkit ...` for package and environment management commands
- `./moo ...` inside a generated environment for daily Odoo work

## Package Commands

Run these from a workspace or generated environment:

| Command | Purpose |
| --- | --- |
| `npx @wpmoo/toolkit` | Open create flow or cockpit |
| `npx @wpmoo/toolkit create` | Create a generated Odoo environment |
| `npx @wpmoo/toolkit status` | Print fast local environment status |
| `npx @wpmoo/toolkit doctor` | Run deeper environment checks |
| `npx @wpmoo/toolkit doctor --fix` | Apply safe file-level repairs |
| `npx @wpmoo/toolkit add-repo` | Add a source repository submodule |
| `npx @wpmoo/toolkit remove-repo` | Remove a source repository submodule |
| `npx @wpmoo/toolkit add-module` | Create a minimal module skeleton |
| `npx @wpmoo/toolkit remove-module` | Remove a module registration or files |
| `npx @wpmoo/toolkit reset --dry-run` | Preview generated file refresh |
| `npx @wpmoo/toolkit reset` | Refresh generated files safely |

Many operator commands support `--json` for automation:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit status --json
$ npx @wpmoo/toolkit doctor --json
$ npx @wpmoo/toolkit source list --json
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit status --json
$ pnpm dlx @wpmoo/toolkit doctor --json
$ pnpm dlx @wpmoo/toolkit source list --json
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit status --json
$ yarn dlx @wpmoo/toolkit doctor --json
$ yarn dlx @wpmoo/toolkit source list --json
```

```sh [bun]
$ bunx @wpmoo/toolkit status --json
$ bunx @wpmoo/toolkit doctor --json
$ bunx @wpmoo/toolkit source list --json
```

:::

## Daily `./moo` Commands

Run these from a generated environment root:

| Command | Purpose |
| --- | --- |
| `./moo start` | Start Odoo and database services |
| `./moo stop` | Stop services |
| `./moo restart` | Restart Odoo |
| `./moo logs odoo` | Follow service logs |
| `./moo shell` | Open an Odoo container shell |
| `./moo psql postgres` | Open PostgreSQL shell |
| `./moo install sale` | Install module or module list |
| `./moo update sale` | Update module or module list |
| `./moo test sale` | Run module tests |
| `./moo lint` | Run configured environment lint checks |
| `./moo pot sale` | Export translation template |
| `./moo snapshot devel before-update` | Snapshot database and filestore |
| `./moo restore-snapshot --dry-run before-update devel` | Preview restore |
| `./moo restore-snapshot before-update devel` | Restore database and filestore |
| `./moo resetdb devel sale` | Recreate database and install modules |

Destructive database commands require explicit confirmation in non-interactive
contexts.

## Source Commands

`source` commands inspect or sync the source manifest:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit source list
$ npx @wpmoo/toolkit source list --json
$ npx @wpmoo/toolkit source sync
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit source list
$ pnpm dlx @wpmoo/toolkit source list --json
$ pnpm dlx @wpmoo/toolkit source sync
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit source list
$ yarn dlx @wpmoo/toolkit source list --json
$ yarn dlx @wpmoo/toolkit source sync
```

```sh [bun]
$ bunx @wpmoo/toolkit source list
$ bunx @wpmoo/toolkit source list --json
$ bunx @wpmoo/toolkit source sync
```

:::

`source add` and `source remove` are aliases for repository operations:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit source add \
  --repo-url https://github.com/OCA/server-tools.git \
  --source-type oca

$ npx @wpmoo/toolkit source remove --repo server-tools --source-type oca
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit source add \
  --repo-url https://github.com/OCA/server-tools.git \
  --source-type oca

$ pnpm dlx @wpmoo/toolkit source remove --repo server-tools --source-type oca
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit source add \
  --repo-url https://github.com/OCA/server-tools.git \
  --source-type oca

$ yarn dlx @wpmoo/toolkit source remove --repo server-tools --source-type oca
```

```sh [bun]
$ bunx @wpmoo/toolkit source add \
  --repo-url https://github.com/OCA/server-tools.git \
  --source-type oca

$ bunx @wpmoo/toolkit source remove --repo server-tools --source-type oca
```

:::
