# docs/04-security/auth/00-auth-starter-kits.md

# Kits de Autenticación Laravel — Guía de Elección

Este documento define el criterio oficial del estándar **Proyecto Génesis** para decidir el uso (o no) de un kit de autenticación en proyectos Laravel.

## Principio Génesis
- El **Starter** se mantiene limpio: no incluye autenticación por defecto.
- La **decisión de autenticación** pertenece al proyecto hijo y debe quedar documentada.
- La adopción de un kit es **opcional** y explícita.

## Opciones evaluadas

### Laravel Breeze
**Perfil**
- Scaffolding mínimo.
- Código publicado directamente en el proyecto.
- Fácil de modificar y auditar.

**Cuándo elegirlo**
- Autenticación básica (login, registro, reset de contraseña).
- Proyectos que priorizan control y simplicidad.
- Equipos que prefieren ver y modificar todo el código generado.

**Trade-offs**
- Menos funcionalidades “listas” que Jetstream.
- Features avanzadas deben implementarse manualmente.

### Laravel Jetstream
**Perfil**
- Scaffolding completo y opinado.
- Soporte para múltiples stacks (Livewire o Inertia).
- Incluye features avanzadas (ej. 2FA, gestión de sesiones).

**Cuándo elegirlo**
- Proyectos que requieren features avanzadas desde el inicio.
- Equipos que aceptan mayor complejidad a cambio de velocidad.
- Casos donde el framework define parte del flujo de usuario.

**Trade-offs**
- Más abstracción y decisiones implícitas.
- Mayor superficie de código a comprender.

## Reglas de decisión
- Si el proyecto necesita **control total y mínima magia** → Breeze.
- Si el proyecto necesita **features avanzadas listas** → Jetstream.
- Si el proyecto es **API-only** → evaluar no usar kits y documentar alternativa.

## Gobierno técnico
- Toda adopción debe registrarse mediante un ADR en:
  `docs/02-architecture/adr/`
- El kit elegido debe declararse en `genesis.config.yml`.

