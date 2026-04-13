import { execSync } from "node:child_process";

function run(cmd) {
    return execSync(cmd, { encoding: "utf8" }).trim();
}

// Cambios staged (para commit) — si no estás usando git aún, igual sirve cuando lo uses.
let changed = "";
try {
    changed = run("git diff --name-only --cached");
} catch {
    console.log(
        "Git no disponible o no hay cambios staged. (OK para modo local)"
    );
    process.exit(0);
}

const changedFiles = changed.split("\n").filter(Boolean);

const uiTouched = changedFiles.some(
    (p) =>
        p.startsWith("resources/views/components/") ||
        p.startsWith("resources/views/layouts/") ||
        p.startsWith("resources/css/") ||
        p.startsWith("resources/js/")
);

const docsTouched = changedFiles.some(
    (p) =>
        p.startsWith("docs/06-features/modules/ui/") ||
        p === "docs/00-overview/ui-preset.md"
);

if (uiTouched && !docsTouched) {
    console.log(
        "\n[Genesis Docs Guard] Detecté cambios de UI pero no actualizaste la documentación UI."
    );
    console.log("Actualiza al menos uno de estos archivos:");
    console.log("- docs/06-features/modules/ui/README.md");
    console.log("- docs/00-overview/ui-preset.md\n");
    process.exit(1);
}

console.log("[Genesis Docs Guard] OK");
