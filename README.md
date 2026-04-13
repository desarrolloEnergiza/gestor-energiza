# Proyecto Génesis · Starter Laravel

Este repositorio es el **Starter oficial de Laravel** basado en el estándar **Proyecto Génesis**.

Su propósito es servir como **punto de partida replicable** para nuevos proyectos Laravel,
integrando desde el inicio:
- una base de código funcional,
- una estructura de documentación estandarizada,
- un flujo claro de creación y gobierno del proyecto.

---

## ¿Qué es este repositorio?

Este repositorio **NO es un proyecto final** ni un producto listo para producción.

Es un **template/starter** que combina:
- Laravel en blanco (framework base),
- el estándar documental de Proyecto Génesis,
- reglas mínimas para crear proyectos sostenibles.

---

## ¿Qué incluye?

### Base técnica
- Laravel (sin lógica de negocio)
- Estructura estándar (`app/`, `routes/`, `database/`, etc.)
- Configuración base de entorno

### Gobierno y documentación
- Carpeta `/docs` con:
  - preset del proyecto,
  - flujo de creación,
  - checklist de readiness,
  - templates (ADR, features, runbooks),
  - prompt de contextualización IA.
- Archivo `genesis.config.yml` (contrato Génesis ↔ proyecto)

---

## ¿Qué NO incluye?

- Lógica de negocio
- Features específicas
- Decisiones cerradas de arquitectura
- Infraestructura productiva

Todo eso debe definirse **en el proyecto hijo**.

---

## Cómo crear un proyecto nuevo desde este Starter

1. Copia o clona este repositorio.
2. Renombra la carpeta y el proyecto.
3. Completa primero:
   - `/docs/00-overview/project-preset.md`
4. Sigue el flujo definido en:
   - `/docs/00-overview/project-creation-flow.md`
5. Verifica el readiness con:
   - `/docs/00-overview/project-readiness-checklist.md`
6. Prepara el entorno base del proyecto (dependencias y build inicial):
   - `chmod +x instalacion`
   - `./instalacion`
7. Recién después, comienza el desarrollo técnico.


---
> Nota: este comando está registrado en `genesis.config.yml` bajo `automation.commands`.


## Documentación

Toda la documentación vive en la carpeta `/docs`.

El índice principal está en:
- `docs/index.md`

La documentación **guía el desarrollo**, no es un artefacto posterior.

---

## Notas sobre Laravel

La documentación original de Laravel incluida por Composer
se mantiene en el archivo:

- `README.laravel.md`

Úsala como referencia técnica del framework.

---

## Rol de este Starter en el ecosistema Génesis

- **Proyecto Génesis Core**  
  Define el estándar, flujo y reglas.

- **Proyecto Génesis Starter (este repo)**  
  Provee una base Laravel lista para iniciar proyectos bajo ese estándar.

- **Proyectos hijos**  
  Nacen desde este Starter y contienen la lógica de negocio real.

---

## Estado del repositorio

Este Starter se considera **estable**.
Las mejoras deben evaluarse cuidadosamente, ya que impactan a futuros proyectos.
