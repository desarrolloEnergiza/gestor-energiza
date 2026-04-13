# Automatización asistida de documentación (Starter)

El Starter incluye una validación local que detecta cambios en UI y exige
actualizar documentación relacionada.

## Objetivo

Evitar que el código UI evolucione sin reflejar cambios en:

-   `docs/06-features/modules/ui/README.md`
-   `docs/00-overview/ui-preset.md`

## Script

-   `tooling/docs-guard.js`

## Uso (manual)

-   `npm run docs:guard`

## Alcance

Este mecanismo es “asistido”:

-   valida y alerta,
-   no genera documentación automáticamente.

## Evolución futura

-   integrar como pre-commit hook
-   integrar en CI/CD cuando exista repositorio remoto
