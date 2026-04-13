import React from "react";
import { 
    Users, 
    Target, 
    Lightbulb, 
    Layers, 
    FlaskConical, 
    Rocket 
} from "lucide-react";

export default function FeatureSection() {
    const steps = [
        {
            id: 1,
            title: "Empatizar",
            desc: "Entendemos a fondo las necesidades y retos de tu negocio.",
            icon: <Users className="w-8 h-8" />,
            color: "text-blue-500",
        },
        {
            id: 2,
            title: "Definir",
            desc: "Analizamos la información para definir el problema central.",
            icon: <Target className="w-8 h-8" />,
            color: "text-red-500",
        },
        {
            id: 3,
            title: "Idear",
            desc: "Generamos múltiples soluciones creativas y funcionales.",
            icon: <Lightbulb className="w-8 h-8" />,
            color: "text-yellow-500",
        },
        {
            id: 4,
            title: "Prototipar",
            desc: "Construimos modelos tangibles para visualizar la solución.",
            icon: <Layers className="w-8 h-8" />,
            color: "text-purple-500",
        },
        {
            id: 5,
            title: "Testear",
            desc: "Validamos con usuarios reales para iterar y mejorar.",
            icon: <FlaskConical className="w-8 h-8" />,
            color: "text-green-500",
        },
        {
            id: 6,
            title: "Implementar",
            desc: "Desplegamos el software final con los más altos estándares.",
            icon: <Rocket className="w-8 h-8" />,
            color: "text-primary",
        },
    ];

    return (
        <section className="relative bg-tertiary overflow-hidden py-12 lg:py-20">
            {/* Decoración de fondo (Digital Grid) */}
            <div className="absolute inset-0 digital-grid opacity-[0.05] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
                    {/* Columna Izquierda: Mockup */}
                    <div className="w-full lg:w-[45%] order-2 lg:order-1">
                        <img
                            src="/images/mockup_2.png"
                            alt="Metodología Energiza"
                            className="w-full h-auto rounded-none"
                        />
                    </div>

                    {/* Columna Derecha: Contenido y Grid */}
                    <div className="w-full lg:w-[55%] order-1 lg:order-2">
                        <div className="mb-10 text-center lg:text-left">
                            <h3 className="text-white/60 font-light text-lg lg:text-xl mb-1">
                                Conoce nuestra
                            </h3>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                                <span className="text-primary italic">Metodología</span> de desarrollo
                            </h2>
                        </div>

                        {/* Grid de Metodología (Compacto) */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
                            {steps.map((step) => (
                                <div 
                                    key={step.id}
                                    className="group bg-white/5 border border-white/10 p-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-primary/30"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`${step.color} shrink-0`}>
                                            {/* Versión más pequeña del icono */}
                                            {React.cloneElement(step.icon as React.ReactElement, { className: "w-6 h-6" })}
                                        </div>
                                        <h4 className="text-white font-bold text-base leading-tight">
                                            {step.title}
                                        </h4>
                                    </div>
                                    <p className="text-white/50 text-[12px] leading-snug">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
