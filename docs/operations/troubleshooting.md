# Troubleshooting

This page lists common WPMoo failure states and the safest next action.

Run commands from the generated environment root unless the example starts with
`npx @wpmoo/toolkit`.

## Docker Is Missing Or Stopped

Symptoms:

- The create wizard stops before writing files.
- `./moo start`, `./moo status`, or `./moo doctor` reports Docker unavailable.
- The cockpit disables runtime actions.

Check:

```bash
docker version
docker compose version
```

Next steps:

1. Install or start Docker.
2. Open a new terminal if Docker was added to `PATH`.
3. Run the WPMoo command again.

The create flow intentionally stops before writing files when required runtime
tools are missing.

## No Modules Found

Symptoms:

- Module actions are disabled.
- `status` reports zero module candidates.

Check:

```bash
./moo status
npx @wpmoo/toolkit source list
```

Fix:

```bash
npx @wpmoo/toolkit add-repo \
  --repo-url https://github.com/example-org/odoo-addons.git \
  --source-type private

npx @wpmoo/toolkit source sync
```

Or create a starter module in an existing source repository:

```bash
npx @wpmoo/toolkit add-module \
  --repo odoo-addons \
  --module my_module \
  --source-type private
```

## No Source Repositories

Symptoms:

- `source list` is empty.
- The generated environment exists but `odoo/custom/src` has no source checkout.

Fix:

```bash
npx @wpmoo/toolkit add-repo \
  --repo-url https://github.com/example-org/odoo-addons.git \
  --source-type private

npx @wpmoo/toolkit source sync
```

Use `--source-type oca` or `--source-type external` when appropriate.

## Dirty Module Deletion Is Refused

Symptoms:

- `remove-module --delete-files` refuses to delete files.
- The source repository has local changes.

Check:

```bash
git -C odoo/custom/src/private/<repo> status --short
```

Fix:

1. Commit, stash, or deliberately discard the source changes inside the source
   repository.
2. Run removal again.

WPMoo refuses dirty deletion because module files are product source code.

## Source Manifest Drift

Symptoms:

- `doctor` reports source manifest, metadata, or `.gitmodules` inconsistencies.
- `source list` does not match the actual submodules.

Preview:

```bash
npx @wpmoo/toolkit source sync --dry-run
```

Fix:

```bash
npx @wpmoo/toolkit source sync
./moo doctor
```

## PostgreSQL Diagnostics Are Unavailable

Symptoms:

- `doctor --postgres` prints an advisory warning.
- `doctor --json --postgres` reports PostgreSQL diagnostics unavailable.

Check services:

```bash
./moo status
./moo start
./moo doctor --postgres
```

PostgreSQL diagnostics are read-only and advisory. If the database is not
reachable, core doctor checks still run.

## Stage Or Production Guard Failure

Symptoms:

- `install`, `update`, `test`, `resetdb`, or `restore-snapshot` is refused in
  `WPMOO_ENV=stage` or `WPMOO_ENV=prod`.
- The message names a required `WPMOO_ALLOW_*` flag.

Start with previews:

```bash
./moo restore-snapshot --dry-run <snapshot-name> devel
./moo doctor
./moo doctor --postgres
```

Intentional stage lifecycle command:

```bash
WPMOO_ENV=stage WPMOO_ALLOW_STAGE_LIFECYCLE=1 ./moo update my_module devel
```

Intentional production lifecycle command:

```bash
WPMOO_ENV=prod WPMOO_ALLOW_PROD_LIFECYCLE=1 ./moo test my_module --db devel
```

Intentional destructive command:

```bash
WPMOO_ENV=stage WPMOO_ALLOW_DESTRUCTIVE=1 ./moo resetdb devel
```

Use guard flags only when the command is intentional, reviewed, and has a
rollback path.

## Optional `wpmoo` Alias Fails

Use the supported scoped package in automation:

```bash
npx @wpmoo/toolkit --version
```

The compatibility packages `@wpmoo/odoo` and `@wpmoo/odoo-dev` redirect to the
Toolkit package. The unscoped `wpmoo` alias is best-effort and should not be the
only path in scripts.
