<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ProyectoInfo extends Command
{
    /**
     * El nombre y la firma del comando de consola.
     *
     * @var string
     */
    protected $signature = 'proyecto:info';

    /**
     * La descripcion del comando de consola.
     *
     * @var string
     */
    protected $description = 'Muestra informacion del proyecto definida en config/metadata.php';

    /**
     * Ejecuta el comando de consola.
     */
    public function handle(): int
    {
        $metadata = config('metadata', []);

        $name = $metadata['name'] ?? 'Proyecto sin nombre';
        $version = $metadata['version'] ?? 'sin-version';

        $entityName = $metadata['entity']['name'] ?? 'Entidad no definida';
        $entityDescription = $metadata['entity']['description'] ?? 'Sin descripcion';

        $authors = $metadata['authors'] ?? [];

        $this->info('=== Informacion del proyecto ===');
        $this->line('Proyecto : ' . $name);
        $this->line('Version  : ' . $version);
        $this->newLine();

        $this->info('Entidad principal');
        $this->line('Nombre      : ' . $entityName);
        $this->line('Descripcion : ' . $entityDescription);
        $this->newLine();

        $this->info('Autores');
        if (empty($authors)) {
            $this->line('- No hay autores definidos en config/metadata.php');
        } else {
            foreach ($authors as $author) {
                $authorName = $author['name'] ?? 'Nombre no definido';
                $linkedin = $author['linkedin'] ?? 'Sin LinkedIn';

                $this->line('- ' . $authorName);
                $this->line('  LinkedIn: ' . $linkedin);
            }
        }

        $this->newLine();
        $this->info('Fin de la informacion del proyecto.');

        return self::SUCCESS;
    }
}
