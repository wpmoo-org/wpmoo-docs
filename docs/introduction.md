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
use WPMoo\Fields\Field;

// Define a complete page with all configuration options
Moo::page( 'settings', 'Site Settings' )
    ->capability( 'manage_options' )
    ->title( __('Site Settings', 'wpmoo') )
    ->description( __('Manage site-wide settings', 'wpmoo') )
    ->menu_slug( 'wpmoo-settings' )
    ->menu_position( 20 )
    ->menu_icon( 'dashicons-admin-settings' );
```

#### Layout Components (Separate Definition)
```php
// Define layout components separately, linked via parent
Moo::tabs('main_tabs')
    ->parent('settings')  // Links as child to parent page
    ->vertical()          // Optional: defaults to horizontal
    ->items([
        [
            'id' => 'general',
            'title' => 'General Settings',
            'content' => [
                Field::input('site_title')->label('Site Title')
            ]
        ]
    ]);
```

#### Layout Components (Direct in Page)
```php
// Or define layout components directly within page
Moo::page('settings', 'Site Settings')
    ->capability('manage_options')
    ->tabs('main_tabs')              // Layout components directly under page
        ->items([                    // Common items structure for all layout components with sub-elements
            [
                'id' => 'general',
                'title' => 'General Settings',
                'content' => [        // Content array for fields within this tab
                    Field::input('site_title')->label('Site Title'),
                    Field::text('admin_email')->label('Admin Email')
                ]
            ],
            [
                'id' => 'advanced',
                'title' => 'Advanced Settings',
                'content' => [
                    Field::toggle('enable_cache')->label('Enable Caching')
                ]
            ]
        ]);
```

All layout components with sub-elements (tabs, accordion, fieldset, etc.) use the common items() structure:
- id: Unique identifier for the sub-element
- title: Display title for the sub-element
- content: Array of fields or other components within the sub-element

Layout components can be used in two ways:
- As separate definitions linked with parent() relationship
- Directly within pages using fluent interface

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

## Security

WPMoo enforces security best practices:

- Automatic output escaping through escaping helpers
- Input sanitization through field-specific sanitizers
- No direct superglobal access ($_GET, $_POST)
- Protected against common WordPress vulnerabilities