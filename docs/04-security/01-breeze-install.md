# docs/04-security/auth/01-breeze-install.md

# Instalación Opcional — Laravel Breeze

## Alcance
Este instructivo documenta la instalación de Laravel Breeze como **opción de autenticación** en proyectos hijos basados en el Starter Génesis.

## Cuándo usar Breeze
- Autenticación simple y control total del código generado.
- Proyectos que requieren un scaffolding mínimo.
- Escenarios donde se prioriza auditabilidad y simplicidad.

## Instalación

```bash
composer require laravel/breeze --dev
php artisan breeze:install

npm install
npm run build

php artisan migrate

Resultado esperado

Rutas de autenticación registradas.

Controladores, vistas y componentes publicados en el proyecto.

Flujo de autenticación completamente editable.

Requisitos de documentación

Registrar la decisión en un ADR dentro de docs/02-architecture/adr/.

Declarar el uso de Breeze en genesis.config.yml.