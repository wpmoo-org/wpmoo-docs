# Quality Gates

WPMoo is not only an environment generator. It also gives Odoo teams a common
way to check whether an environment, addon set, or development train is healthy.

The main tools are:

```text
status
doctor
lint
gate
JSON output
optional .wpmoo/policy.yaml
```

## Status

`status` is fast and local:

```bash
./moo status
./moo status --json
```

It reports:

- whether a WPMoo environment is detected
- selected Odoo version
- source repository count
- module candidate count
- missing core files
- compose layout issues
- module quality issues

Use `status` when you want a quick answer before running deeper checks.

## Doctor

`doctor` performs deeper checks:

```bash
./moo doctor
```

It checks metadata, source paths, generated scripts, Compose files, Docker
access, GitHub CLI availability, source manifest consistency, duplicate addon
technical names, and optional project policy rules.

Apply safe file-level repairs when available:

```bash
./moo doctor --fix
```

Make warnings fail in strict automation:

```bash
./moo doctor --fail-on-warning
```

Add read-only PostgreSQL diagnostics when services are running:

```bash
./moo doctor --postgres
./moo doctor --json --postgres
```

PostgreSQL diagnostics are advisory. WPMoo does not tune PostgreSQL or change
database settings automatically.

## Train Gate

`gate` runs the standard close-out sequence for one or more modules:

```bash
./moo gate --modules my_module --db devel
```

It runs:

```text
update
test
lint
doctor
status --json
```

Use strict mode when warnings should fail:

```bash
./moo gate --modules module_a,module_b --db devel --strict
```

Use changed-module detection when working from Git diffs:

```bash
./moo gate --changed --include-dependent --db devel
```

Machine-readable output is available:

```bash
./moo gate --modules my_module --db devel --json
```

## Optional Addon Policy

Projects can add `.wpmoo/policy.yaml` to define their own architecture checks.
This is optional and project-specific. Toolkit does not hardcode one product's
architecture into every Odoo project.

Example:

```yaml
odoo:
  version: "19.0"

enterpriseOnlyDependencies:
  - documents
  - helpdesk

addonGroups:
  community:
    - community_core
    - community_portal
  pro:
    - pro_account
    - pro_certificate

rules:
  - from: community
    mustNotDependOn: pro
    mustNotDependOnEnterpriseOnly: true
```

Policy checks can detect:

- duplicate Odoo addon technical names
- forbidden dependency directions
- Enterprise-only dependencies in a Community group
- legacy Odoo XML `attrs=` when configured for Odoo 17+
- legacy `_sql_constraints` when configured for Odoo 19
- direct state writes when enabled
- controller ORM writes when enabled
- notification XML without the configured notification dependency
- unexpected top-level backend menus

Local exceptions must include a reason:

```python
# wpmoo-lint: disable=direct-state-write reason="migration adapter"
record.write({"state": "done"})
```

## JSON Output

Use JSON output for scripts, CI jobs, editors, and agents:

```bash
npx @wpmoo/toolkit status --json
npx @wpmoo/toolkit source list --json
npx @wpmoo/toolkit source sync --json
npx @wpmoo/toolkit doctor --json
npx @wpmoo/toolkit doctor --json --fail-on-warning
npx @wpmoo/toolkit doctor --json --postgres
./moo gate --modules my_module --json
```

Automation should check both the process exit code and the `ok` field when one
is present. Unknown JSON fields should be ignored so patch releases can add
optional fields safely.

## Stage And Production Guards

WPMoo can run with:

```text
WPMOO_ENV=dev
WPMOO_ENV=stage
WPMOO_ENV=prod
```

Stage and production-like workflows require explicit intent for risky commands.

| Command family | Stage | Production |
| --- | --- | --- |
| `install`, `update`, `stop`, `restart` | Requires `WPMOO_ALLOW_STAGE_LIFECYCLE=1` | Requires `WPMOO_ALLOW_PROD_LIFECYCLE=1` |
| `test` | Allowed | Requires `WPMOO_ALLOW_PROD_LIFECYCLE=1` |
| `resetdb`, real `restore-snapshot` | Requires `WPMOO_ALLOW_DESTRUCTIVE=1` | Requires `WPMOO_ALLOW_DESTRUCTIVE=1` |
| `restore-snapshot --dry-run` | Allowed | Allowed |

If migration scripts are detected, lifecycle commands may also require:

```text
WPMOO_ALLOW_MIGRATIONS=1
```

Prefer one-command environment variable prefixes so intent is visible in shell
history.

## Approval Ledger

For time-bounded local approvals, generated environments can use:

```text
.wpmoo/approvals.jsonl
```

The file is ignored by Git. It can approve scopes such as stage lifecycle,
production lifecycle, destructive commands, no-recent-snapshot, and migration
risk until `expiresAt`.

Environment variables remain supported. The ledger is additive for teams that
want short-lived approvals recorded locally.
