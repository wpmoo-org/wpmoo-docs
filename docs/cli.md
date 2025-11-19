# Command Line Interface (CLI)

The WPMoo CLI is a powerful command-line tool that helps you develop, build, check, and deploy your WordPress plugins built with the WPMoo framework. It provides a range of utilities for maintaining your WPMoo-based plugins.

## Getting Started

To use the CLI with your WPMoo-based plugin, make sure you're in your plugin's directory when running commands. The CLI will automatically detect your plugin and provide the appropriate tools.

## Available Commands

### Info Command (`moo info`)

The Info command provides a quick overview of your current environment. It shows:

- Your current PHP version
- WordPress version (if running in a WordPress environment)
- Basic system information

This is useful for checking your system setup or quickly verifying your environment when troubleshooting.

**Usage:**
```bash
moo info
```

### Check Command (`moo check`)

The Check command performs comprehensive project validation across multiple tools. It's like having a complete quality assurance suite in one command. It automatically:

- Validates your composer.json file
- Runs PHPCBF to automatically fix common coding standard issues
- Executes PHPCS to identify code style problems
- Runs PHPStan for static analysis to catch potential errors
- Executes PHPUnit tests when configured

This command is perfect for ensuring your code meets quality standards before committing or deploying.

**Usage:**
```bash
moo check
```

### Build Command (`moo build`)

The Build command compiles your frontend assets (CSS, JavaScript) using your project's configured package manager (npm, yarn, pnpm, or bun). It:

- Detects your package manager automatically
- Installs dependencies if needed
- Runs your build script (default: "build")

This command is essential for preparing your assets for production.

**Usage:**
```bash
moo build
```

### Update Command (`moo update`)

The Update command runs maintenance tasks, primarily focusing on translation management. It:

- Refreshes your translation template files (.pot)
- Updates existing translation files based on your code changes

This keeps your plugin's translations up-to-date as you add or modify translatable strings.

**Usage:**
```bash
moo update
```

### Version Command (`moo version`)

The Version command updates your project version across all relevant files in one go. It:

- Updates your composer.json version
- Updates plugin header version (in your main plugin file)
- Updates readme.txt stable tag
- Supports semantic versioning (patch, minor, major bumps)

This ensures consistency across all your version references with a single command.

**Usage:**
```bash
# Bump patch version (0.1.0 → 0.1.1)
moo version

# Bump minor version (0.1.1 → 0.2.0)
moo version --bump=minor

# Set explicit version
moo version --explicit=1.2.3
```

### Deploy Command (`moo deploy`)

The Deploy command creates a production-ready copy of your plugin. It:

- Copies all necessary files to a deploy directory
- Excludes development files (node_modules, .git, tests, etc.)
- Optionally creates a zip archive
- Can handle asset building as part of the process

This prepares your plugin for distribution or installation on production sites.

**Usage:**
```bash
# Create deploy directory
moo deploy

# Create zip archive
moo deploy --zip

# Deploy to specific directory
moo deploy /path/to/deploy/location
```

### Dist Command (`moo dist`)

The Dist command creates a distributable archive of your project. It:

- Creates a zip file suitable for distribution
- Includes only the files needed for production
- Optimizes the package by excluding unnecessary files
- Handles framework-specific packaging requirements

This is perfect for creating release packages for distribution on WordPress.org or other repositories.

**Usage:**
```bash
moo dist
```

### Release Command (`moo release`)

The Release command orchestrates a complete release process in one command. It:

- Bumps the version (if specified)
- Runs update tasks (refreshes translations)
- Builds assets
- Creates a distributable package
- Handles all release steps sequentially

This is the command to run when you're ready to make a new release.

**Usage:**
```bash
# Run full release flow
moo release

# Bump version and run release
moo release --bump=minor
```

### Rename Command (`moo rename`)

The Rename command helps you rename your plugin project. It:

- Updates your plugin name in the main plugin file
- Changes the plugin slug
- Updates namespace declarations across all files
- Modifies related configuration files
- Renames language files and POT templates

This is incredibly useful when starting a new project based on the WPMoo starter plugin.


**Usage:**
```bash
# Rename with new name and namespace
moo rename "My Awesome Plugin" MyAwesomePlugin

# Specify individual components
moo rename --name="My Plugin" --slug=my-plugin --namespace=MyPlugin
```

### Plugin Check Command (`moo wp-check`)

The Plugin Check command runs the WordPress Plugin Check tool against your plugin and displays results in an easy-to-read format. It:

- Auto-detects your WordPress installation
- Runs WordPress's official plugin checker
- Shows results in a color-coded, tabular format
- Highlights errors and warnings
- Provides guidance for fixing issues

This ensures your plugin meets WordPress.org requirements and best practices.

**Usage:**
```bash
# Run plugin check
moo wp-check

# Run with specific WordPress path
moo wp-check -- --path=/path/to/wordpress

# Ignore specific check codes
moo wp-check -- --ignore-codes=trademarked_term,plugin_repo
```

## Getting Help

To see all available commands and options for your plugin project, simply run:

```bash
moo
```

The CLI will show you only the commands that are relevant in your current project directory.