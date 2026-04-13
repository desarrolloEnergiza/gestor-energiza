# Checklist de Preparación del Proyecto  
**Proyecto listo para comenzar desarrollo**

Este checklist define las condiciones mínimas que debe cumplir un proyecto
derivado de Proyecto Génesis antes de iniciar la implementación técnica.

Su objetivo es asegurar claridad, coherencia y reducir deuda técnica temprana.

---

## 1. Preset del proyecto

- [ ] El archivo `/docs/00-overview/project-preset.md` existe
- [ ] Todas las secciones críticas del preset están completadas
- [ ] Las decisiones pendientes están explícitamente marcadas
- [ ] El preset refleja el alcance real del proyecto

---

## 2. Documentación base (Overview)

- [ ] `vision.md` describe claramente el propósito del proyecto
- [ ] `scope.md` define límites claros (qué incluye / qué no)
- [ ] `glossary.md` contiene términos propios del dominio (si aplica)
- [ ] El proyecto es entendible sin revisar código

---

## 3. Decisiones de arquitectura (ADRs)

- [ ] Existen ADRs para decisiones fundacionales
- [ ] Cada ADR tiene contexto, decisión y consecuencias
- [ ] Las decisiones del preset están respaldadas por ADRs cuando corresponde
- [ ] No existen decisiones críticas sin justificación documentada

---

## 4. Seguridad y control de acceso

- [ ] Existe documentación de autenticación (`auth.md`)
- [ ] Existe documentación de roles y permisos (`roles-permissions.md`)
- [ ] El modelo de acceso está alineado con el alcance del proyecto
- [ ] Se considera auditoría o logging de acciones relevantes

---

## 5. Base de datos (conceptual)

- [ ] Existe un modelo conceptual documentado (`erd.md`)
- [ ] Se entiende la relación entre entidades principales
- [ ] No existen ambigüedades críticas en el modelo de datos
- [ ] Se definió la estrategia de migraciones y seeds

---

## 6. Features iniciales

- [ ] Las features críticas están documentadas antes de implementarse
- [ ] Cada feature define objetivo, flujo y reglas de negocio
- [ ] Las features consideran roles y permisos
- [ ] Se identificaron edge cases relevantes

---

## 7. Testing y validación

- [ ] Existe una estrategia de testing definida
- [ ] Se definieron criterios mínimos de validación
- [ ] Se entiende qué significa “funciona” para el proyecto

---

## 8. Operación y continuidad

- [ ] Se identificaron los entornos del proyecto (local, staging, producción)
- [ ] Existe una idea clara de despliegue (aunque sea manual)
- [ ] Se considera respaldo y recuperación básica
- [ ] El proyecto no depende de una sola persona para operar

---

## 9. Criterio final

- [ ] El proyecto puede comenzar desarrollo sin decisiones críticas abiertas
- [ ] La documentación guía el desarrollo, no al revés
- [ ] El equipo entiende el proyecto sin explicaciones verbales adicionales

---

## Resultado

Si **todos los puntos críticos** están marcados,  
el proyecto está **listo para iniciar desarrollo técnico**.

Si no, el desarrollo debe postergarse hasta completar lo pendiente.
