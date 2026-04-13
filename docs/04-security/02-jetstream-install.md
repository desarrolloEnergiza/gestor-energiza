
```md
# docs/04-security/auth/02-jetstream-install.md

# Instalación Opcional — Laravel Jetstream

## Alcance
Este instructivo documenta la instalación de Laravel Jetstream como **opción avanzada de autenticación** en proyectos hijos basados en el Starter Génesis.

## Cuándo usar Jetstream
- Proyectos con requerimientos de seguridad avanzados.
- Necesidad de funcionalidades como 2FA o gestión de sesiones.
- Equipos que aceptan un framework más opinado.

## Instalación base

```bash
composer require laravel/jetstream

Selección de stack
Livewire
php artisan jetstream:install livewire

Inertia
php artisan jetstream:install inertia

Teams (opcional)
php artisan jetstream:install livewire --teams

Frontend
npm install
npm run build

Base de datos
php artisan migrate

Resultado esperado

Sistema completo de autenticación y perfil.

Funcionalidades avanzadas listas para usar.

Integración profunda con el stack elegido.

Requisitos de documentación

Registrar la decisión en un ADR dentro de docs/02-architecture/adr/.

Declarar el uso de Jetstream y el stack elegido en genesis.config.yml.
