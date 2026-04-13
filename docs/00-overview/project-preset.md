# Preset de Proyecto

Este documento define las decisiones iniciales del proyecto.
Debe completarse antes de comenzar el desarrollo funcional.

---

## 1. Información general

- Nombre del proyecto: web_energizavirtual
- Descripción breve: Plataforma comercial para Energiza Virtual.
- Tipo de proyecto:
  - [ ] Aplicación interna
  - [x] Plataforma pública
  - [x] MVP
  - [ ] Producto en evolución
- Estado inicial:
  - [x] Nuevo
  - [ ] Migración
  - [ ] Reescritura

---

## 2. Stack base

### Framework / Backend
- Framework principal: Laravel
- Versión objetivo: 12.x
- Tipo de arquitectura:
  - [x] Monolito
  - [ ] Monolito modular
  - [ ] Servicios

### Frontend
- Enfoque:
  - [ ] Blade + Alpine
  - [x] Inertia
  - [ ] Livewire
  - [ ] SPA externa
- Frameworks/librerías UI: React, TypeScript, Tailwind CSS

---

## 3. Autenticación y autorización

### Autenticación
- Starter kit:
  - [x] Breeze
  - [ ] Jetstream
  - [ ] Fortify
  - [ ] Custom
- Métodos de acceso:
  - [x] Email/Password
  - [ ] Social login
  - [ ] 2FA
- Manejo de sesiones:
  - [x] Cookies
  - [ ] Tokens

### Autorización
- Modelo de permisos:
  - [ ] Roles simples
  - [ ] Roles + permisos
  - [ ] Políticas custom
- Librerías:
  - [ ] spatie/laravel-permission
  - [ ] Custom

---

## 4. Base de datos

- Motor:
  - [x] MySQL
  - [ ] PostgreSQL
  - [ ] Otro
- Estrategia:
  - [ ] Migraciones puras
  - [ ] Migraciones + vistas
  - [ ] Seeds base
- Volumen esperado:
  - [ ] Bajo
  - [ ] Medio
  - [ ] Alto

---

## 5. Seguridad

- Hashing:
- Protección CSRF:
  - [ ] Sí
  - [ ] No
- Auditoría:
  - [ ] Logs de acceso
  - [ ] Logs de acciones críticas
- Librerías de auditoría:
  - [ ] spatie/laravel-activitylog
  - [ ] Custom

---

## 6. Testing

- Estrategia:
  - [ ] Manual
  - [ ] Automatizada parcial
  - [ ] Automatizada completa
- Frameworks:
- Cobertura objetivo:
  - [ ] No definida
  - [ ] > 50%
  - [ ] > 80%

---

## 7. Operación e infraestructura

- Entornos:
  - [ ] Local
  - [ ] Staging
  - [ ] Producción
- Despliegue:
  - [ ] Manual
  - [ ] Automatizado
- Backups:
  - [ ] Sí
  - [ ] No
- Monitoreo:
  - [ ] Básico
  - [ ] Avanzado

---

## 8. Documentación y gobierno

- ADRs requeridos:
  - [ ] Auth
  - [ ] Arquitectura
  - [ ] Seguridad
  - [ ] Base de datos
- Features críticas documentadas:
  - [ ] Sí
  - [ ] No
- Responsable de documentación:
- Frecuencia de actualización:
  - [ ] Por feature
  - [ ] Por release

---

## 9. Observaciones iniciales

Notas, riesgos conocidos, decisiones pendientes.
