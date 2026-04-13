# Política de Seguridad

Este repositorio forma parte del estándar **Proyecto Génesis** y su objetivo es definir lineamientos de documentación y gobierno técnico.  
Si se detecta una vulnerabilidad o práctica insegura dentro del estándar, se debe reportar responsablemente.

## Reporte responsable

Por favor incluye:

- Descripción clara del problema
- Impacto estimado (qué podría ocurrir)
- Pasos para reproducir (si aplica)
- Archivos/rutas afectadas
- Recomendación de mitigación (si tienes)

## Alcance

Este repositorio puede contener:
- Templates de documentación
- Reglas y convenciones
- Configuración (`genesis.config.yml`)

Los proyectos derivados (hijos) deben tener su propia política de seguridad adicional, según su contexto e infraestructura.

## Buenas prácticas mínimas recomendadas para proyectos hijos

- Autenticación y autorización documentadas en `/docs/04-security/`
- Registro/auditoría de acciones relevantes cuando aplique
- Manejo seguro de secretos (nunca versionar `.env`)
- Validación de entrada y protección CSRF en aplicaciones web
