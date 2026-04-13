<x-layouts.app title="429 — Demasiadas solicitudes">
    <div class="card p-8">
        <h1 class="text-2xl font-extrabold tracking-tight">429 — Demasiadas solicitudes</h1>
        <p class="mt-2" style="color: rgb(var(--muted));">
            Estás haciendo solicitudes muy rápido. Espera un momento y vuelve a intentar.
        </p>
        <div class="mt-6">
            <a href="{{ url('/') }}" class="btn btn-primary">Volver al inicio</a>
        </div>
    </div>
</x-layouts.app>
