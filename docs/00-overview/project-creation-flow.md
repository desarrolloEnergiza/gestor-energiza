# Flujo de Creación de un Proyecto  
**Basado en Proyecto Génesis**

---

## 1. Propósito de este documento

Este documento define el **flujo oficial** para crear un nuevo proyecto a partir de Proyecto Génesis.

Su objetivo es:
- evitar inicios desordenados,
- asegurar decisiones conscientes desde el comienzo,
- garantizar documentación mínima obligatoria,
- estandarizar la forma en que nacen los proyectos.

Este flujo **no describe comandos técnicos**, sino el **orden lógico y documental** que debe seguirse.

---

## 2. Principio fundamental

> **Un proyecto no comienza cuando se escribe código,  
> comienza cuando se definen sus decisiones.**

Proyecto Génesis impone un orden:
1. intención,
2. decisiones,
3. estructura,
4. reglas,
5. implementación.

Saltarse este orden genera deuda técnica temprana.

---

## 3. Estado inicial: Proyecto Génesis puro

Todo proyecto nuevo parte desde un estado idéntico a Proyecto Génesis:

- estructura de carpetas completa,
- documentación vacía o genérica,
- templates disponibles,
- sin decisiones específicas,
- sin lógica de negocio.

En este punto:
- el proyecto **existe formalmente**,
- pero **no está definido**.

Esto es intencional.

---

## 4. Fase 1 — Definición del Preset del Proyecto

### Objetivo
Definir **qué tipo de proyecto es** antes de decidir **cómo se construye**.

### Acción principal
Completar el archivo: [ProjectPreset](/docs/00-overview/project-preset.md)


### Qué se define aquí
- tipo de proyecto,
- stack base,
- enfoque de frontend,
- autenticación y autorización,
- base de datos,
- seguridad,
- testing,
- operación,
- alcance documental.

### Reglas
- Este archivo **debe completarse primero**.
- Si una sección no está clara, se deja explícitamente marcada como pendiente.
- Ninguna feature debe implementarse sin que el preset esté definido.

### Resultado esperado
Un resumen técnico claro del proyecto, entendible sin ver código.

---

## 5. Fase 2 — Decisiones fundacionales (ADRs)

### Objetivo
Justificar las decisiones críticas definidas en el preset.

### Acción principal
Crear Architecture Decision Records (ADR) en:  [Architecture](/docs/02-architecture/decisions/)


### Cuándo crear un ADR
Cuando una decisión:
- tiene alternativas válidas,
- afecta a todo el proyecto,
- sería difícil de cambiar después.

Ejemplos típicos:
- Breeze vs Jetstream
- Blade vs Inertia
- Roles simples vs permisos
- Auditoría sí/no

### Regla clave
> El preset define **qué se eligió**,  
> el ADR explica **por qué**.

### Resultado esperado
Un registro claro de las decisiones que definen la identidad técnica del proyecto.

---

## 6. Fase 3 — Ajuste del marco conceptual

### Objetivo
Alinear la documentación general con el proyecto específico.

### Archivos que se ajustan
- `/docs/00-overview/vision.md` [Vision](/docs/00-overview/vision.md)
- `/docs/00-overview/scope.md` [Scope](/docs/00-overview/scope.md)
- `/docs/02-architecture/system-context.md` [SystemContext](/docs/02-architecture/system-context.md)

### Qué se logra aquí
- El proyecto deja de ser genérico.
- Se entiende el dominio y sus límites.
- El sistema es explicable a terceros.

### Regla
Cualquier persona debería poder entender **qué es el proyecto** leyendo solo esta sección.

---

## 7. Fase 4 — Reglas transversales (seguridad y datos)

### Objetivo
Definir los aspectos que afectan a **todo el sistema**.

### Documentación mínima requerida
- `/docs/04-security/auth.md` [Auth](/docs/04-security/auth.md)
- `/docs/04-security/roles-permissions.md` [RolesPermissions](/docs/04-security/roles-permissions.md)
- `/docs/05-database/erd.md` (modelo conceptual) [Erd](/docs/05-database/erd.md)

### Justificación
- seguridad y datos son difíciles de cambiar tarde,
- impactan todas las features,
- condicionan la arquitectura.

### Regla crítica
No se crean features sin reglas claras de:
- acceso,
- permisos,
- modelo de datos base.

---

## 8. Fase 5 — Definición de features (antes del código)

### Objetivo
Transformar requerimientos en unidades documentadas.

### Acción principal
Crear documentación de features usando: [Features](/docs/06-features/feature-template.md)


Cada feature debe:
- tener objetivo claro,
- definir roles y permisos,
- describir su flujo,
- indicar impacto en datos,
- anticipar edge cases.

### Regla de oro
> Si una feature no puede documentarse con claridad,  
> no está lista para implementarse.

---

## 9. Fase 6 — Inicio de la implementación técnica

### Objetivo
Ejecutar lo que ya fue definido.

En este punto:
- el preset está completo,
- las decisiones están justificadas,
- las reglas están claras,
- las features están definidas.

El desarrollo pasa a ser **ejecución**, no exploración.

### Preparación del entorno de ejecución

Antes de comenzar cualquier implementación, el proyecto debe encontrarse en un
estado técnicamente ejecutable y coherente con el preset definido.

Proyecto Génesis provee un comando de instalación estandarizado para este fin,
el cual prepara el entorno base del proyecto conforme a las decisiones ya tomadas.

Este paso **no define decisiones ni arquitectura**:  
solo habilita la ejecución de lo que ya fue definido.

---

## 10. Fase 7 — Retroalimentación hacia Proyecto Génesis

### Objetivo
Mejorar el estándar a partir de la experiencia real.

### Qué vuelve a Génesis
- mejoras en templates,
- nuevas convenciones,
- ajustes al flujo,
- aclaraciones necesarias.

### Qué no vuelve
- lógica de negocio específica,
- soluciones puntuales,
- implementaciones temporales.

Proyecto Génesis evoluciona lentamente y con criterio.

---

## 11. Criterio de madurez del proyecto

Un proyecto creado correctamente desde Génesis cumple:

- tiene preset completo,
- tiene ADRs clave,
- tiene documentación mínima viva,
- no depende de personas específicas,
- puede ser auditado o continuado.

Si no cumple esto, **el problema no es el código**,  
es que se saltó el flujo.

---

## 12. Cierre

Proyecto Génesis no impone rigidez,  
impone **conciencia técnica**.

Seguir este flujo no garantiza éxito,  
pero reduce significativamente errores tempranos y deuda técnica.

---

**Estado del documento:**  
Referencia oficial del flujo de creación de proyectos basados en Proyecto Génesis.