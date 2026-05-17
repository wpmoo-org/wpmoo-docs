# Cockpit

The cockpit is the daily terminal workspace inside a generated environment.

Open it from the generated environment root:

```sh
$ ./moo
```

The cockpit starts with a quick environment summary, then shows a practical menu
for repeated local work.

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

Press `/` inside the cockpit to search for commands such as:

```text
/test
/logs
/doctor
/safe reset
```

This is useful when you know the action but do not want to walk through
categories. Press `Ctrl+C` to exit the cockpit.

## Services

```text
Services
|-- Start services
|-- Stop services
|-- Restart services
|-- View logs
`-- Open shell
```

Use services for the Odoo container lifecycle and quick access to logs or a
shell.

## Modules

```text
Modules
|-- List modules
|-- Install module
|-- Update module
|-- Run tests
|-- Run environment lint
|-- Generate POT
|-- Add module
`-- Remove module
```

Module actions use detected source repositories and module folders where
possible. Run environment lint runs the configured environment lint checks.

## Database

```text
Database
|-- Open psql
|-- Create snapshot
|-- Restore snapshot
`-- Reset database
```

Database prompts prefer connected PostgreSQL databases. If the list cannot be
read, WPMoo says so and falls back to manual entry.

## Diagnostics

```text
Diagnostics
|-- Environment status
`-- Run doctor
```

`status` is fast and local. `doctor` performs deeper environment checks.

## Repositories

```text
Repositories
|-- Add source repo
`-- Remove source repo
```

Repository actions keep source repos as Git submodules under the generated Odoo
source layout.

## Maintenance

```text
Maintenance
`-- Safe reset environment
```

Safe reset refreshes generated files while preserving product source code.

## Direct Commands

Every cockpit action maps to a direct command:

```sh
$ ./moo start
$ ./moo logs odoo
$ ./moo update sale
$ ./moo test sale
$ ./moo snapshot devel before-update
```

Open the [Command Reference](/reference/commands) for the full map.
