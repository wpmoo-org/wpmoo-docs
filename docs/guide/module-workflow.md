# Module Workflow

WPMoo is built around the work Odoo developers repeat every day: add a module,
install it, update it, test it, lint the environment, export translations, and
recover safely when something goes wrong.

Use the cockpit for guided selection or run the same actions directly with
`./moo`.

## Find Modules

List modules from the cockpit or inspect the environment:

```bash
./moo status
```

`status` reports installable modules, non-installable modules, and module
quality findings such as missing actionable menus.

If no modules are found, add or sync a source repository first:

::: code-group

```sh [npm]
$ npx @wpmoo/toolkit source list
$ npx @wpmoo/toolkit source sync
```

```sh [pnpm]
$ pnpm dlx @wpmoo/toolkit source list
$ pnpm dlx @wpmoo/toolkit source sync
```

```sh [yarn]
$ yarn dlx @wpmoo/toolkit source list
$ yarn dlx @wpmoo/toolkit source sync
```

```sh [bun]
$ bunx @wpmoo/toolkit source list
$ bunx @wpmoo/toolkit source sync
```

:::

## Add A Module

Create a new addon skeleton inside a source repository:

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

WPMoo creates a minimal install-safe Odoo addon:

```text
my_module/
|-- __init__.py
|-- __manifest__.py
|-- models/
|-- security/
|-- views/
`-- tests/
```

Use a scaffold profile when the addon has a known shape:

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

Profiles keep the generated skeleton generic. They add safe dependencies,
folders, and starter files for common Odoo addon types without adding
product-specific business logic.

## Install And Update

Start services, then install a module:

```bash
./moo start
./moo install my_module
```

After Python, XML, security, or data changes:

```bash
./moo update my_module
```

Update multiple modules with a comma-separated list:

```bash
./moo update module_a,module_b
```

Or use `--db` when spacing module names:

```bash
./moo update module_a module_b --db devel
```

If the arguments are ambiguous, WPMoo prints a concrete correction instead of
guessing.

## Run Tests

Run module tests:

```bash
./moo test my_module
```

Choose a database:

```bash
./moo test my_module --db devel
```

Choose a test mode or tags:

```bash
./moo test my_module --db devel --mode update --tags /my_module
```

When tests fail, WPMoo prints the relevant Odoo log excerpt when available and
still shows the full log path.

## Lint And Translate

Run environment lint checks:

```bash
./moo lint
```

Export a translation template:

```bash
./moo pot my_module devel i18n/my_module.pot
```

## Remove A Module

Remove a module registration:

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

Delete files only when you intend to remove the source directory:

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

WPMoo refuses dirty deletion because module directories are product source code,
not disposable generated files.

## Standard Daily Loop

```bash
./moo start
./moo update my_module
./moo test my_module
./moo lint
./moo doctor
```

For repeatable close-out checks, use [Quality Gates](/guide/quality-gates).
