# Cockpit

The cockpit is the daily terminal workspace inside a generated environment.

Open it from the generated environment root:

```bash
./moo
```

The cockpit starts with a quick environment summary, then shows a practical menu
for repeated local work.

```text
WPMoo Cockpit
|-- Command palette /
|-- Services
|-- Modules
|-- Database
|-- Diagnostics
|-- Repositories
|-- Maintenance
`-- Exit
```

## Command Palette

Use `/` to search for commands such as:

```text
/test
/logs
/doctor
/safe-reset
```

This is useful when you know the action but do not want to walk through
categories.

## Services

```text
Services
|-- start
|-- stop
|-- restart
|-- logs
`-- shell
```

Use services for the Odoo container lifecycle and quick access to logs or a
shell.

## Modules

```text
Modules
|-- install
|-- update
|-- test
|-- lint
|-- pot
|-- add-module
`-- remove-module
```

Module actions use detected source repositories and module folders where
possible. `lint` runs the configured environment lint checks.

## Database

```text
Database
|-- psql
|-- snapshot
|-- restore-snapshot
`-- resetdb
```

Database prompts prefer connected PostgreSQL databases. If the list cannot be
read, WPMoo says so and falls back to manual entry.

## Diagnostics

```text
Diagnostics
|-- status
`-- doctor
```

`status` is fast and local. `doctor` performs deeper environment checks.

## Repositories

```text
Repositories
|-- add-repo
`-- remove-repo
```

Repository actions keep source repos as Git submodules under the generated Odoo
source layout.

## Maintenance

```text
Maintenance
`-- safe-reset
```

Safe reset refreshes generated files while preserving product source code.

## Direct Commands

Every cockpit action maps to a direct command:

```bash
./moo start
./moo logs odoo
./moo update sale
./moo test sale
./moo snapshot devel before-update
```

Open the [Command Reference](/reference/commands) for the full map.
