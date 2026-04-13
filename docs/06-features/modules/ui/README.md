# Módulo UI Base (Starter)

Este módulo define una UI mínima reutilizable para proyectos derivados de Proyecto Génesis.

## Objetivo

Proveer una base consistente y neutral:

-   layout principal,
-   navbar y footer reutilizables,
-   tokens de color claro/oscuro (blanco/negro),
-   toggle de tema con persistencia,
-   páginas de error estándar.

## Componentes

-   `resources/views/layouts/app.blade.php` (layout principal)
-   `resources/views/components/navbar.blade.php`
-   `resources/views/components/footer.blade.php`
-   `resources/views/components/layouts/app.blade.php` (wrapper `<x-layouts.app>`)

## Páginas base

-   `resources/views/pages/home.blade.php`

## Tema (claro/oscuro)

-   Tailwind en modo `darkMode: 'class'`
-   Se aplica la clase `dark` sobre `<html>`
-   Persistencia en `localStorage` con key `theme`:
    -   `light`, `dark`, `system` (por defecto)

Archivos relevantes:

-   `resources/css/app.css` (tokens y estilos base)
-   `resources/js/app.js` (control de tema)

## Errores

Vistas incluidas:

-   `resources/views/errors/404.blade.php`
-   `resources/views/errors/500.blade.php`
-   `resources/views/errors/419.blade.php`
-   `resources/views/errors/429.blade.php`
-   `resources/views/errors/503.blade.php`

## Criterio de neutralidad

Este módulo debe mantenerse sin branding específico.
Los proyectos hijos pueden extender tokens y estilos sin romper el estándar.

## Preset UI del proyecto hijo

La personalización visual del branding debe registrarse en:

-   `docs/00-overview/ui-preset.md`

## Responsividad

-   Navbar responsive:
    -   Desktop: navegación visible (`md:flex`)
    -   Mobile: botón menú + panel desplegable (`md:hidden`)
-   Componentes con padding táctil apropiado
