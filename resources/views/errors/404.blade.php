<x-layouts.app title="404 — No encontrado">
    <div class="card p-8">
        <h1 class="text-2xl font-extrabold tracking-tight">404 — Página no encontrada</h1>
        <p class="mt-2" style="color: rgb(var(--muted));">
            La ruta que intentaste abrir no existe o fue movida.
        </p>
        <div class="mt-6">
            <a href="{{ url('/') }}" class="btn btn-primary">Volver al inicio</a>
        </div>
    </div>
</x-layouts.app>
