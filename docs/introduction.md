# Introduction

WPMoo is a modern WordPress development framework under the wpmoo-org organization. It provides fluent builders (Moo::page(), Moo::field(), etc.) with PicoCSS-first design, strong security, and full testability.

## Overview

WPMoo is designed as a **Micro Object-Oriented Framework** for WordPress that helps developers create options pages, metaboxes, custom post types, and more with elegant, fluent APIs. The framework emphasizes clean architecture, domain isolation, and testability.

### Primary Goals

- **Fluent Builders**: Create WordPress components using elegant fluent APIs
- **PicoCSS-First Design**: Built-in responsive styling with PicoCSS semantics
- **Strong Security**: Built-in escaping, sanitization, and protection against common vulnerabilities
- **Full Testability**: Domain logic is testable without WordPress dependencies
- **Modern Architecture**: Clear separation of concerns with domain isolation

## Architecture

WPMoo follows a modular architecture with complete domain isolation:

- **Field Domain**: Input fields, toggles, textareas, and other form elements
- **Layout Domain**: Tabs, accordions, fieldsets for organizing interface elements
- **Page Domain**: Options pages with sidebar navigation
- **Metabox Domain**: Post editing metaboxes

Each domain is a self-contained vertical slice that can function independently. Cross-domain communication happens only through contracts (interfaces), ensuring clean separation of concerns.

### Dual-Purpose Design

WPMoo can function both as:

1. **Standalone Plugin**: When installed directly, it provides a complete framework
2. **Framework Library**: When used as a dependency in other plugins via Composer

This dual-purpose design allows maximum flexibility for different integration scenarios.

## Key Features

### Fluent API

Create WordPress components with intuitive fluent syntax in two ways:

#### Page Configuration
```php
use WPMoo\Moo;

// Define a complete page with all configuration options
Moo::page( 'settings', 'Site Settings' )
    ->capability( 'manage_options' )
    ->title( __('Site Settings', 'wpmoo') )
    ->description( __('Manage site-wide settings', 'wpmoo') )
    ->menu_slug( 'wpmoo-settings' )
    ->menu_position( 20 )
    ->menu_icon( 'dashicons-admin-settings' );
```

#### Layout Components (Container-Based Architecture)
```php
// Use container-based approach with individual components
Moo::page( 'settings', 'Site Settings' )
    ->capability( 'manage_options' )
    ->menu_slug( 'wpmoo-settings' );

// Create a layout container (e.g., tabs container)
Moo::container('tabs', 'main_tabs')
    ->parent('settings');             // Links as child to parent page

// Create individual tabs linked to the container
Moo::tab('general', 'General Settings')
    ->parent('main_tabs')             // Links to the tabs container
    ->fields([                       // Content array for fields within this tab
        Moo::input('site_title')->label('Site Title'),
        Moo::toggle('enable_cache')->label('Enable Caching')
    ]);

Moo::tab('advanced', 'Advanced Settings')
    ->parent('main_tabs')             // Links to the tabs container
    ->fields([                       // Content array for fields within this tab
        Moo::input('cache_timeout')->label('Cache Timeout'),
        Moo::textarea('description')->label('Description')
    ]);
```

The enhanced approach allows using a container-based architecture:
- Cleaner, more readable code with explicit parent-child relationships
- No need to import WPMoo\Field\Field separately (convenience methods available)
- Better IDE support and autocomplete
- Flexible and extensible architecture where new container types can be added easily

Layout components follow a container + items pattern where containers define the layout type and individual components are linked to them.

### PicoCSS Integration

Leverage PicoCSS semantic markup for responsive designs:

- `<main class="container">` for main content areas
- `<section>` for grouping related elements
- `<div class="grid">` for responsive field layouts
- All layout components (tabs, accordions, etc.) follow PicoCSS patterns for consistency

All layout components generate PicoCSS-compatible markup to ensure consistency and accessibility.

## Architecture

WPMoo follows a micro-object-oriented approach with clear separation between domain logic and WordPress integration:

### Domain Isolation

Each domain (Field, Layout, Page, Metabox) maintains complete independence:

- No domain depends on another domain's concrete classes
- Cross-domain communication only through interfaces
- Each domain follows layered responsibility pattern:
  - Contracts → interfaces only
  - Abstracts → shared base behavior
  - Builders → fluent API
  - Types/Component → concrete implementations
  - (No WordPress integration - kept separate for decoupling)

### WordPress Integration

All WordPress integration is centralized in a dedicated `WordPress/` directory:

- Bootstrap: Main entry point and plugin initialization
- Managers: Handle registration of domain components with WordPress
- Renderers: Handle rendering of components in WordPress context
- AssetEnqueuers: Handle loading of assets in WordPress context
- Handlers: Handle processing tasks in WordPress context

This architecture ensures domain logic remains testable without WordPress dependencies while providing a centralized location for all WordPress integration.

## Getting Started

The framework provides multiple entry points depending on your needs:

- Use `Moo` facade for options pages and metaboxes
- Use `Field` class for form elements
- Use `Layout` namespace for layout components
- Extend base classes for custom implementations

## Multi-Plugin Support

WPMoo supports multiple plugins using the same framework simultaneously without conflicts. This makes it ideal for creating "WPMoo-based plugins" that can coexist peacefully.

### Automatic Plugin Isolation

When components (pages, fields, layouts) are created using the Moo facade, the framework automatically detects which plugin is making the call and isolates the components accordingly:

```php
// In any WPMoo-based plugin
use WPMoo\Moo;

Moo::page('settings', 'My Plugin Settings')
    ->capability('manage_options')
    ->menu_slug('my-plugin-settings');
```

Each plugin's components are stored separately in the framework registry, ensuring no conflicts even when multiple plugins use the same component IDs.

### Benefits for Plugin Developers

1. **No Conflicts**: Multiple WPMoo-based plugins can use the same component IDs without conflicts
2. **Easy Integration**: Just use the standard Moo API; isolation happens automatically
3. **Scalability**: The system supports any number of plugins using the framework
4. **Complete Isolation**: Each plugin's components are completely separated from others

## Security

WPMoo enforces security best practices:

- Automatic output escaping through escaping helpers
- Input sanitization through field-specific sanitizers
- No direct superglobal access ($_GET, $_POST)
- Protected against common WordPress vulnerabilities