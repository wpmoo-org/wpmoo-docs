# Command Reference

WPMoo has two command surfaces:

- `npx @wpmoo/toolkit ...` for package, environment, source, scaffold, reset,
  diagnostics, and automation commands.
- `./moo ...` inside a generated environment for daily Odoo work.

Use `@wpmoo/toolkit` in scripts. `@wpmoo/odoo` and `@wpmoo/odoo-dev` are
deprecated compatibility aliases. The unscoped `wpmoo` alias is best-effort.

## Package Commands

Run these from a workspace or generated environment.

| Command | Purpose |
| --- | --- |
| `npx @wpmoo/toolkit` | Open the create wizard outside an environment or the cockpit inside one. |
| `npx @wpmoo/toolkit create` | Create a generated Odoo environment. |
| `npx @wpmoo/toolkit status` | Print fast local environment status. |
| `npx @wpmoo/toolkit doctor` | Run deeper environment checks. |
| `npx @wpmoo/toolkit doctor --fix` | Apply safe file-level repairs, then rerun doctor. |
| `npx @wpmoo/toolkit doctor --postgres` | Add read-only PostgreSQL diagnostics. |
| `npx @wpmoo/toolkit gate --modules <module[,module]>` | Run update, test, lint, doctor, and status as one gate. |
| `npx @wpmoo/toolkit add-repo --repo-url <url>` | Add a source repository submodule. |
| `npx @wpmoo/toolkit remove-repo --repo <name>` | Remove a source repository registration. |
| `npx @wpmoo/toolkit source list` | List source repositories from the source manifest. |
| `npx @wpmoo/toolkit source sync` | Rebuild source manifest data from metadata and Git state. |
| `npx @wpmoo/toolkit source add` | Alias for adding a source repository. |
| `npx @wpmoo/toolkit source remove` | Alias for removing a source repository. |
| `npx @wpmoo/toolkit add-module` | Create an Odoo module skeleton in a source repository. |
| `npx @wpmoo/toolkit remove-module` | Remove module metadata or files. |
| `npx @wpmoo/toolkit reset --dry-run` | Preview generated file refresh. |
| `npx @wpmoo/toolkit reset` | Refresh generated files safely. |

## Create

Interactive:

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

Scripted:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit create \
  --product my_product \
  --odoo-version 19.0 \
  --target ./my_product_dev \
  --source-repo-url https://github.com/example-org/my_product.git
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit create \
  --product my_product \
  --odoo-version 19.0 \
  --target ./my_product_dev \
  --source-repo-url https://github.com/example-org/my_product.git
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit create \
  --product my_product \
  --odoo-version 19.0 \
  --target ./my_product_dev \
  --source-repo-url https://github.com/example-org/my_product.git
```

```sh [bun]
$ bunx @wpmoo/toolkit create \
  --product my_product \
  --odoo-version 19.0 \
  --target ./my_product_dev \
  --source-repo-url https://github.com/example-org/my_product.git
```

:::

Useful options:

| Option | Purpose |
| --- | --- |
| `--product <slug>` | Product slug, usually used for the default `<product>_dev` folder. |
| `--odoo-version <branch>` | Odoo branch. Default is the current Toolkit default. |
| `--target <path>` | Generated environment folder. |
| `--source-repo-url <url>` | Source repository URL. Repeat for multiple sources. |
| `--source-path <path>` | Advanced path override for the previous source repo. |
| `--source-addons <list>` | Advanced addon list for the previous source repo. |
| `--dev-repo-url <url>` | Optional generated environment repository URL. |
| `--init-empty-repos` | Initialize empty source repositories on the selected branch. |
| `--create-missing-repos` | Create inaccessible GitHub repos with the GitHub CLI. |
| `--repo-visibility private\|public` | Visibility for created GitHub repositories. |
| `--compose-template-url <source>` | Use a custom Compose resource source. |
| `--compose-template-ref <ref>` | Pin the Compose resource ref. |
| `--agent-skills-template` | Install project-local Odoo Agent Skills into the environment. |
| `--agent-skills-template-url <source>` | Use a custom Agent Skills resource source. |
| `--agent-skills-template-ref <ref>` | Pin the Agent Skills resource ref. |
| `--postgres-version <value>` | PostgreSQL image version for `.env.example`. |
| `--http-port <port>` | Host HTTP port. |
| `--gevent-port <port>` | Host gevent/live chat port. |
| `--dry-run` | Print planned files and commands without writing. |

## Source Commands

Inspect sources:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit source list
$ npx @wpmoo/toolkit source list --json
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit source list
$ pnpm dlx @wpmoo/toolkit source list --json
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit source list
$ yarn dlx @wpmoo/toolkit source list --json
```

```sh [bun]
$ bunx @wpmoo/toolkit source list
$ bunx @wpmoo/toolkit source list --json
```

:::

Sync the source manifest:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit source sync
$ npx @wpmoo/toolkit source sync --dry-run
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit source sync
$ pnpm dlx @wpmoo/toolkit source sync --dry-run
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit source sync
$ yarn dlx @wpmoo/toolkit source sync --dry-run
```

```sh [bun]
$ bunx @wpmoo/toolkit source sync
$ bunx @wpmoo/toolkit source sync --dry-run
```

:::

Add or remove sources:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit source add \
  --repo-url https://github.com/OCA/server-tools.git \
  --source-type oca

$ npx @wpmoo/toolkit source remove \
  --repo server-tools \
  --source-type oca
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit source add \
  --repo-url https://github.com/OCA/server-tools.git \
  --source-type oca

$ pnpm dlx @wpmoo/toolkit source remove \
  --repo server-tools \
  --source-type oca
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit source add \
  --repo-url https://github.com/OCA/server-tools.git \
  --source-type oca

$ yarn dlx @wpmoo/toolkit source remove \
  --repo server-tools \
  --source-type oca
```

```sh [bun]
$ bunx @wpmoo/toolkit source add \
  --repo-url https://github.com/OCA/server-tools.git \
  --source-type oca

$ bunx @wpmoo/toolkit source remove \
  --repo server-tools \
  --source-type oca
```

:::

Source types:

```text
private, oca, external
```

## Module Commands

Add a module:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit add-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit add-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit add-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private
```

```sh [bun]
$ bunx @wpmoo/toolkit add-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private
```

:::

Add a profile-based module:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit add-module \
  --repo odoo-addons \
  --module my_portal_addon \
  --source-type private \
  --profile portal
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit add-module \
  --repo odoo-addons \
  --module my_portal_addon \
  --source-type private \
  --profile portal
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit add-module \
  --repo odoo-addons \
  --module my_portal_addon \
  --source-type private \
  --profile portal
```

```sh [bun]
$ bunx @wpmoo/toolkit add-module \
  --repo odoo-addons \
  --module my_portal_addon \
  --source-type private \
  --profile portal
```

:::

Supported profiles:

```text
core, documents, scoring, portal, exhibition, ai_review, mail, pro
```

Remove a module:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit remove-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit remove-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit remove-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private
```

```sh [bun]
$ bunx @wpmoo/toolkit remove-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private
```

:::

Delete module files only when intended:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit remove-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private \
  --delete-files
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit remove-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private \
  --delete-files
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit remove-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private \
  --delete-files
```

```sh [bun]
$ bunx @wpmoo/toolkit remove-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private \
  --delete-files
```

:::

## Daily `./moo` Commands

Run these from a generated environment root.

| Command | Purpose |
| --- | --- |
| `./moo` | Open the cockpit. |
| `./moo start` | Start Odoo and database services. |
| `./moo stop` | Stop services. |
| `./moo restart` | Restart services. |
| `./moo logs [service] [tail-lines]` | View service logs. |
| `./moo shell` | Open an Odoo service shell. |
| `./moo psql [db]` | Open PostgreSQL shell. |
| `./moo install <module[,module]> [db]` | Install one or more modules. |
| `./moo update <module[,module]> [db]` | Update one or more modules. |
| `./moo update <module> <module> --db <db>` | Update space-separated modules with explicit database. |
| `./moo test <module[,module]> --db <db>` | Run Odoo tests. |
| `./moo lint` | Run environment lint checks. |
| `./moo pot <module[,module]> [db] [output]` | Export translation templates. |
| `./moo snapshot [--list] [db] [name]` | Create or list database/filestore snapshots. |
| `./moo restore-snapshot --dry-run <name> [db]` | Preview restore. |
| `./moo restore-snapshot <name> [db]` | Restore database and filestore. |
| `./moo resetdb [db] [module[,module]]` | Recreate database and install modules. |
| `./moo status [--json]` | Print environment status. |
| `./moo doctor [--fix] [--postgres] [--fail-on-warning]` | Run diagnostics. |
| `./moo gate --modules <module[,module]> [--db <db>]` | Run the standard update-test-lint-doctor-status gate. |

## Train Gate

Run the standard close-out sequence:

```bash
./moo gate --modules my_module --db devel
```

Options:

| Option | Purpose |
| --- | --- |
| `--strict` | Fail when warnings are present. |
| `--fail-on-warning` | Fail when doctor/status warnings are present. |
| `--json` | Emit machine-readable output. |
| `--skip-update` | Skip the update step. |
| `--changed` | Infer changed addons from Git diffs when modules are omitted. |
| `--include-dependent` | Include addons that depend on selected modules. |

## JSON Output

Machine-readable output is available for:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit status --json
$ npx @wpmoo/toolkit source list --json
$ npx @wpmoo/toolkit source sync --json
$ npx @wpmoo/toolkit doctor --json
$ npx @wpmoo/toolkit doctor --json --postgres
$ npx @wpmoo/toolkit doctor --json --fail-on-warning
$ ./moo gate --modules my_module --json
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit status --json
$ pnpm dlx @wpmoo/toolkit source list --json
$ pnpm dlx @wpmoo/toolkit source sync --json
$ pnpm dlx @wpmoo/toolkit doctor --json
$ pnpm dlx @wpmoo/toolkit doctor --json --postgres
$ pnpm dlx @wpmoo/toolkit doctor --json --fail-on-warning
$ ./moo gate --modules my_module --json
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit status --json
$ yarn dlx @wpmoo/toolkit source list --json
$ yarn dlx @wpmoo/toolkit source sync --json
$ yarn dlx @wpmoo/toolkit doctor --json
$ yarn dlx @wpmoo/toolkit doctor --json --postgres
$ yarn dlx @wpmoo/toolkit doctor --json --fail-on-warning
$ ./moo gate --modules my_module --json
```

```sh [bun]
$ bunx @wpmoo/toolkit status --json
$ bunx @wpmoo/toolkit source list --json
$ bunx @wpmoo/toolkit source sync --json
$ bunx @wpmoo/toolkit doctor --json
$ bunx @wpmoo/toolkit doctor --json --postgres
$ bunx @wpmoo/toolkit doctor --json --fail-on-warning
$ ./moo gate --modules my_module --json
```

:::

Contract notes:

- Automation should ignore unknown fields.
- Minor and patch releases may add optional fields.
- Removing, renaming, or changing the meaning of a documented field requires a
  major release or schema version bump.
- `doctor --json --fix` is intentionally unsupported. Run `doctor --fix` first,
  then inspect the result with `doctor --json`.

## Safety Flags

Stage and production-like commands are guarded.

| Variable | Purpose |
| --- | --- |
| `WPMOO_ENV=dev\|stage\|prod` | Select environment safety policy. |
| `WPMOO_ALLOW_STAGE_LIFECYCLE=1` | Allow install, update, stop, and restart in stage. |
| `WPMOO_ALLOW_PROD_LIFECYCLE=1` | Allow install, update, test, stop, and restart in production. |
| `WPMOO_ALLOW_DESTRUCTIVE=1` | Allow destructive database commands in stage or production. |
| `WPMOO_ALLOW_NO_RECENT_SNAPSHOT=1` | Allow guarded destructive work without a recent snapshot. |
| `WPMOO_ALLOW_MIGRATIONS=1` | Allow guarded lifecycle work when migration scripts are detected. |

## Package Aliases

Use this in new docs and automation:

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

Compatibility aliases:

| Alias | Status |
| --- | --- |
| `npx @wpmoo/odoo` | Deprecated compatibility alias. |
| `npx @wpmoo/odoo-dev` | Deprecated compatibility alias. |
| `npx wpmoo` | Optional best-effort short alias. |

Use the scoped `@wpmoo/toolkit` package for reliable scripts.
