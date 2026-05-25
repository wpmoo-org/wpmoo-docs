# Cockpit

The cockpit is the daily terminal workspace inside a generated environment.
Use it when you want guided actions without remembering every Docker, Odoo, or
script command.

Open it from the generated environment root:

```bash
./moo
```

The cockpit shows a quick environment summary, then groups actions by the kind
of work you are doing.

```text
WPMoo Cockpit
|-- Services
|-- Modules
|-- Database
|-- Diagnostics
|-- Repositories
`-- Maintenance
```

## Command Palette

Press `/` in the cockpit to search by command or intent:

```text
/test
/logs
/doctor
/safe reset
```

This is useful when you know the action but do not want to navigate categories.
Press `Ctrl+C` to leave the cockpit.

## Services

Use Services for the local Odoo runtime:

```text
Start services
Stop services
Restart services
View logs
Open shell
```

Typical flow:

```bash
./moo start
./moo logs odoo
./moo shell
```

The cockpit disables actions that do not make sense. For example, `Start
services` is disabled when services are already running, and database actions
are disabled until the database is ready.

## Modules

Use Modules for day-to-day addon work:

```text
List modules
Install module
Update module
Run tests
Run environment lint
Generate POT
Add module
Remove module
```

Module actions use detected source repositories and Odoo module folders. When a
large module list exists, WPMoo switches to searchable module selection.

The same workflow is available as direct commands:

```bash
./moo install my_module
./moo update my_module
./moo test my_module
./moo lint
./moo pot my_module
```

See [Module Workflow](/guide/module-workflow) for the full module loop.

## Database

Use Database for PostgreSQL access and snapshots:

```text
Open psql
Create snapshot
Restore snapshot
Reset database
```

Preview destructive work before running it:

```bash
./moo snapshot devel before-change
./moo restore-snapshot --dry-run before-change devel
```

## Diagnostics

Use Diagnostics when something looks wrong or before closing a development
train:

```text
Environment status
Run doctor
```

`status` is fast and local. `doctor` performs deeper health checks.

```bash
./moo status
./moo doctor
./moo doctor --postgres
```

See [Quality Gates](/guide/quality-gates) for doctor, lint, policy checks, and
train gate usage.

## Repositories

Use Repositories to add or remove source repositories:

```text
Add source repo
Remove source repo
```

WPMoo keeps sources under `odoo/custom/src/private`, `odoo/custom/src/oca`, and
`odoo/custom/src/external`. See [Source Layout](/guide/source-layout).

## Maintenance

Use Maintenance for safe generated-file refreshes:

```text
Safe reset environment
```

Safe reset refreshes generated files while preserving source repositories,
runtime data, local patches, and manifests.

## Direct Command Map

Every cockpit action has a direct command. Use the cockpit interactively and the
same commands in scripts or agent workflows:

```bash
./moo start
./moo update my_module
./moo test my_module
./moo snapshot devel before-refactor
./moo doctor
```

Open the [Command Reference](/reference/commands) for the full command surface.
