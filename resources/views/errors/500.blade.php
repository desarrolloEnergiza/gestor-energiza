<x-layouts.app title="500 — Error interno">
    <div class="card p-8">
        <h1 class="text-2xl font-extrabold tracking-tight">500 — Error interno</h1>
        <p class="mt-2" style="color: rgb(var(--muted));">
            Ocurrió un problema inesperado. Si persiste, revisa logs y configuración.
        </p>
        <div class="mt-6 flex gap-3">
            <a href="{{ url('/') }}" class="btn btn-primary">Volver al inicio</a>
            <button class="btn" type="button" onclick="location.reload()">Reintentar</button>
        </div>
    </div>
</x-layouts.app>
