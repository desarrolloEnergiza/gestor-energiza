# ADR-0001 — Stack Técnico Base: Laravel + React (Inertia) + TypeScript

## Estado
Aprobado

## Contexto
El proyecto **web_energizavirtual** inicia como una plataforma comercial bajo el estándar "Proyecto Génesis". Se requiere una arquitectura moderna, escalable y con una excelente experiencia de desarrollo (DX) que permita evolucionar de un sitio comercial estático a una aplicación web completa con el tiempo.

## Decisión
Se ha decidido utilizar el siguiente stack:
- **Backend**: Laravel 12 (Monolito).
- **Frontend**: React mediante Inertia.js.
- **Lenguaje Frontend**: TypeScript para mayor seguridad y robustez.
- **Estilos**: Tailwind CSS 4.0.
- **Base de Datos**: MySQL.

Se utilizará **Laravel Breeze** como herramienta de andamiaje inicial para configurar rápidamente la integración de Vite, Inertia y TypeScript, aunque las funcionalidades de autenticación pública se mantendrán desactivadas inicialmente por el carácter comercial del sitio.

## Alternativas consideradas
- **Blade + Alpine.js**: Pros: Más simple, menos dependencias. Contras: Menor flexibilidad para interfaces altamente interactivas a futuro.
- **Inertia + Vue**: Pros: Excelente integración con Laravel. Contras: El equipo/usuario prefiere React.
- **SPA separada**: Pros: Desacoplamiento total. Contras: Mayor complejidad de despliegue y overhead innecesario para un MVP.

## Consecuencias
- **Impacto técnico**: Requiere compilación de activos mediante Vite.
- **Mantenimiento**: Se beneficia de tipos estáticos gracias a TypeScript.
- **Migración**: Fácil transición a una aplicación con usuarios reales gracias a Breeze/Inertia.

## Referencias
- [Pila tecnológica seleccionada por el usuario](file:///c:/Users/manue/Desktop/ENERGIZA/web_energizavirtual/docs/00-overview/project-preset.md)
