# Convenciones de documentación

## Objetivo
Mantener una documentación útil, mantenible y reutilizable entre proyectos basados en Proyecto Génesis.

## Qué SÍ documentamos
- Decisiones de arquitectura y stack (ADR).
- Cómo levantar el proyecto y requisitos.
- Módulos/funcionalidades: objetivo, flujo, endpoints, reglas, permisos.
- Base de datos: tablas clave, relaciones, vistas, migraciones importantes.
- Seguridad: autenticación, autorización, auditoría, amenazas relevantes.
- Operación: despliegue, backups, monitoreo, troubleshooting.

## Qué NO documentamos
- Explicaciones básicas de Laravel.
- Capturas excesivas o textos “tipo tutorial” sin valor.
- Detalles que cambian cada día sin impacto (eso va en issues/tareas).

## Estándar de escritura
- Cada doc debe tener: Propósito → Alcance → Cómo usar/validar → Referencias.
- Preferir listas y ejemplos reales (rutas, comandos, fragmentos).
- Mantener 1 fuente de verdad: si algo cambia en el sistema, se actualiza su doc.

## Política de cambios
- Cambio de auth/permisos/roles → actualizar /docs/04-security
- Cambio de DB → actualizar /docs/05-database
- Cambio de flujo funcional → actualizar /docs/06-features
- Cambio de infraestructura → actualizar /docs/07-operations
- Decisión importante nueva → crear ADR en /docs/02-architecture/decisions
