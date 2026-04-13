#!/usr/bin/env bash
set -e

echo "== Proyecto Génesis :: Instalación automática =="

# --- Validaciones base ---
command -v php >/dev/null 2>&1 || { echo "PHP no está instalado"; exit 1; }
command -v composer >/dev/null 2>&1 || { echo "Composer no está instalado"; exit 1; }
command -v node >/dev/null 2>&1 || { echo "Node.js no está instalado"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "NPM no está instalado"; exit 1; }

# --- Dependencias backend ---
echo "Instalando dependencias PHP (Composer)…"
composer install --no-interaction --prefer-dist

# --- Archivo .env ---
if [ ! -f .env ]; then
  echo "Creando .env"
  cp .env.example .env
  php artisan key:generate
fi

# --- Dependencias frontend ---
if [ -f package.json ]; then
  echo "Instalando dependencias Frontend (NPM)…"
  npm install
  npm run build
fi

# --- Migraciones ---
read -p "¿Ejecutar migraciones? (y/N): " run_migrate
if [[ "$run_migrate" =~ ^[Yy]$ ]]; then
  php artisan migrate
fi

echo "== Instalación Génesis completada correctamente =="
