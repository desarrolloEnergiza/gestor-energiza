# Guía de Contribución — Proyecto Génesis (Core)

Este repositorio define el estándar base para proyectos derivados.  
Los cambios deben ser cuidadosamente evaluados porque impactan a futuros proyectos.

## Principios

- Cambios pequeños y justificables
- Enfoque en claridad y mantenibilidad
- Evitar “sobre-ingeniería” sin necesidad real
- Documentación primero: si cambia el estándar, debe reflejarse en `/docs`

## Qué tipo de cambios aceptamos

- Mejoras a templates (`/docs/_templates`)
- Mejoras al flujo (`/docs/00-overview/project-creation-flow.md`)
- Mejoras al preset y checklist
- Convenciones más claras y aplicables
- Ajustes a `genesis.config.yml` y su significado

## Qué cambios evitamos en Core

- Lógica de negocio
- Dependencias específicas de un proyecto hijo
- Configuraciones de infraestructura demasiado particulares

## Reglas de documentación al cambiar el estándar

Si el cambio afecta:
- Estructura de docs → actualizar `/docs/index.md`
- Decisiones/flujo → actualizar `project-creation-flow.md`
- Preset → actualizar `project-preset.md`
- Plantillas → actualizar `docs/_templates`

## Estilo de escritura

- Documentos orientados a uso real
- Evitar redundancias
- Priorizar ejemplos y checklists sobre texto extenso
