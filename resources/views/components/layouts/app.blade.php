@props(['title' => 'Energiza Virtual'])
{{-- Layout autocontenido para las páginas de error (404, 419, 429, 500, 503).
     No depende del build de Vite a propósito: debe funcionar incluso cuando los assets
     no existen o el sitio está en mantenimiento. --}}
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title }} · Energiza Virtual</title>
    <link rel="icon" type="image/png" href="/images/favicon_energiza.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: 15 112 183;
            --secondary: 44 46 131;
            --text: 17 24 39;
            --muted: 75 85 99;
            --border: 229 231 235;
        }
        *, *::before, *::after { box-sizing: border-box; }
        html, body { margin: 0; min-height: 100%; }
        body {
            font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
            color: rgb(var(--text));
            background: #f8fafc;
            -webkit-font-smoothing: antialiased;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        header { background: #fff; box-shadow: 0 1px 2px rgba(0, 0, 0, .05); }
        header .inner { max-width: 1100px; margin: 0 auto; padding: 1.25rem 1.5rem; }
        header img { height: 2.5rem; width: auto; display: block; }
        main { flex: 1; display: flex; align-items: center; justify-content: center; padding: 3rem 1.5rem; }
        h1 { margin: 0; }
        p { margin: 0; line-height: 1.6; }
        .card {
            background: #fff;
            border: 1px solid rgb(var(--border));
            border-radius: 1rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .06);
            width: 100%;
            max-width: 32rem;
        }
        .p-8 { padding: 2rem; }
        .mt-2 { margin-top: .5rem; }
        .mt-6 { margin-top: 1.5rem; }
        .flex { display: flex; flex-wrap: wrap; }
        .gap-3 { gap: .75rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .font-extrabold { font-weight: 800; }
        .tracking-tight { letter-spacing: -.025em; }
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: .625rem 1.25rem;
            border-radius: .75rem;
            font: inherit;
            font-weight: 600;
            font-size: .9375rem;
            text-decoration: none;
            cursor: pointer;
            border: 1px solid rgb(var(--border));
            background: #fff;
            color: rgb(var(--text));
            transition: background-color .2s, border-color .2s, color .2s;
        }
        .btn:hover { background: #f3f4f6; }
        .btn-primary { background: rgb(var(--primary)); border-color: rgb(var(--primary)); color: #fff; }
        .btn-primary:hover { background: rgb(var(--secondary)); border-color: rgb(var(--secondary)); }
        footer { text-align: center; padding: 1.5rem; font-size: .8125rem; color: rgb(var(--muted)); }
    </style>
</head>
<body>
    <header>
        <div class="inner">
            <a href="{{ url('/') }}">
                <img src="/images/logo_energiza_negro.png" alt="Energiza Virtual">
            </a>
        </div>
    </header>
    <main>
        {{ $slot }}
    </main>
    <footer>&copy; {{ date('Y') }} Energiza Virtual. Todos los derechos reservados.</footer>
</body>
</html>
