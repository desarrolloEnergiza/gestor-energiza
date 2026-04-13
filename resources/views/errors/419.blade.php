<x-layouts.app title="419 — Sesión expirada">
    <div class="card p-8">
        <h1 class="text-2xl font-extrabold tracking-tight">419 — Sesión expirada</h1>
        <p class="mt-2" style="color: rgb(var(--muted));">
            Tu sesión expiró o el token de seguridad no es válido. Vuelve a intentar.
        </p>
        <div class="mt-6 flex gap-3">
            <a href="{{ url('/') }}" class="btn btn-primary">Volver al inicio</a>
            <button class="btn" type="button" onclick="location.reload()">Reintentar</button>
        </div>
    </div>
</x-layouts.app>
