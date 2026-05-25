# Recovery Workflows

WPMoo is designed around recoverable local development.

Generated files can be refreshed. Source repositories are preserved. Database
work has snapshot and dry-run paths.

## If The Environment Feels Broken

Start with fast local status:

```bash
./moo status
```

Then run doctor:

```bash
./moo doctor
```

Apply safe file-level repairs only when the output says fixes are available:

```bash
./moo doctor --fix
```

If PostgreSQL is running and you want read-only database diagnostics:

```bash
./moo doctor --postgres
```

## Before Risky Work

Create a snapshot:

```bash
./moo snapshot devel before-refactor
```

List snapshots:

```bash
./moo snapshot --list
```

Preview restore before changing data:

```bash
./moo restore-snapshot --dry-run before-refactor devel
```

Restore intentionally:

```bash
./moo restore-snapshot before-refactor devel
```

## When Generated Files Drift

Preview a safe reset:

```bash
npx @wpmoo/toolkit reset --dry-run
```

Then refresh generated files:

```bash
npx @wpmoo/toolkit reset
```

Run checks after reset:

```bash
./moo doctor
./moo status
```

Safe reset preserves:

- `.env`
- runtime database data
- filestore data
- backups
- source repositories under `odoo/custom/src`
- custom manifests
- custom patches

It can refresh:

- `.wpmoo/odoo.json`
- `./moo`
- generated docs
- Compose files
- helper scripts
- optional project-local Agent Skills

## Common Recovery Playbooks

| Situation | First command | Next step |
| --- | --- | --- |
| Cockpit disables module actions | `./moo status` | Add/sync source repos or add a module. |
| Docker or database is not ready | `./moo doctor` | Start Docker or restart services. |
| Source manifest looks stale | `npx @wpmoo/toolkit source sync --dry-run` | Run `source sync` if the preview is correct. |
| Generated files were edited or lost | `npx @wpmoo/toolkit reset --dry-run` | Run safe reset, then doctor. |
| Test failure is unclear | `./moo test my_module` | Read the printed log excerpt and full log path. |
| Risky migration or refactor ahead | `./moo snapshot devel before-change` | Run update/test, then restore preview if needed. |

## Stage And Production Preview

In stage and production-like modes, prefer read-only or dry-run commands first:

```bash
WPMOO_ENV=prod ./moo status
WPMOO_ENV=prod ./moo doctor
WPMOO_ENV=prod ./moo doctor --postgres
WPMOO_ENV=prod ./moo restore-snapshot --dry-run before-change devel
```

Lifecycle and destructive commands require explicit flags. See
[Quality Gates](/guide/quality-gates#stage-and-production-guards).

## Troubleshooting

For specific failure states, open the [Troubleshooting](/operations/troubleshooting)
guide.
