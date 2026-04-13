import React from "react";

export default function HeroSection() {
    // Generar posiciones para los destellos tech (re-utilizados en la zona azul)
    const glimmers = [
        { top: "20%", left: "30%", delay: "0s", size: "4px" },
        { top: "40%", left: "70%", delay: "1s", size: "3px" },
        { top: "70%", left: "50%", delay: "2s", size: "5px" },
        { top: "15%", left: "80%", delay: "0.5s", size: "4px" },
    ];

    return (
        <section className="relative min-h-[85vh] lg:min-h-screen flex items-center bg-white overflow-hidden py-16 pt-32 xl:py-0 xl:pt-[10vh]">
            {/* --- FONDO DIAGONAL (Desktop XL) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden xl:block">
                <div className="absolute top-0 w-[60%] h-full bg-secondary -skew-x-12 origin-top transform transition-all duration-700 left-[55%]">
                    <div className="absolute inset-0 digital-grid opacity-20"></div>
                </div>
                <div className="absolute top-0 h-full bg-primary -skew-x-12 opacity-80 w-[10%] left-[48%]"></div>
                <div className="absolute top-0 h-full bg-tertiary -skew-x-12 opacity-90 w-[5%] left-[78%]"></div>
            </div>

            {/* --- FONDO DINÁMICO (Móvil/Tablet/Laptops < XL) --- */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden xl:hidden">
                {/* Cuadrícula digital base */}
                <div className="absolute inset-0 digital-grid opacity-[0.12]"></div>
                
                {/* Degradados fusionados (sin cortes verticales) */}
                <div 
                    className="absolute inset-0 opacity-100"
                    style={{
                        background: `
                            radial-gradient(circle at top left, rgba(44, 46, 131, 0.12) 0%, transparent 60%),
                            radial-gradient(circle at bottom right, rgba(15, 112, 183, 0.18) 0%, transparent 60%)
                        `
                    }}
                ></div>
            </div>

            {/* --- CONTENIDO PRINCIPAL --- */}
            <div className="container mx-auto px-6 sm:px-12 lg:px-16 z-10 relative">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Columna Izquierda: Texto */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs sm:text-sm mb-6 animate-pulse">
                            Soluciones digitales a medida
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
                            <span className="text-primary italic">
                                Tu idea,
                            </span>{" "}
                            hecha software
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Diseñamos y desarrollamos plataformas web
                            personalizadas, desde la idea hasta la
                            implementación, adaptadas a los procesos reales de
                            tu negocio.
                        </p>
                    </div>

                    {/* Columna Derecha: Mockup e Imagen */}
                    <div className="w-full lg:w-1/2 relative space-y-6 px-2 sm:px-8 lg:px-0">
                        <div className="relative z-20 transition-transform duration-700 max-w-[550px] lg:max-w-none mx-auto">
                            {/* Imagen Mockup (Limpia) */}
                            <img
                                src="/images/mockup_1.png"
                                alt="Plataforma Energiza Virtual"
                                className="relative rounded-2xl w-full h-auto"
                            />

                            {/* Destellos Tech sobre el mockup */}
                            <div className="absolute inset-0 pointer-events-none">
                                {glimmers.map((g, i) => (
                                    <div
                                        key={i}
                                        className="glimmer-energiza twinkle-energiza"
                                        style={{
                                            top: g.top,
                                            left: g.left,
                                            width: g.size,
                                            height: g.size,
                                            animationDelay: g.delay,
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        {/* Etiquetas flotantes decorativas (Ajustadas según dispositivo) */}
                        <div className="absolute top-10 right-0 sm:right-4 lg:-right-4 bg-white/95 backdrop-blur shadow-xl p-3 sm:p-4 rounded-lg border-l-4 border-primary z-30 block floating-energiza">
                            <div className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase">
                                Digitaliza tu
                            </div>
                            <div className="text-primary font-black text-lg sm:text-xl uppercase">
                                negocio
                            </div>
                        </div>
                        <div
                            className="absolute bottom-10 left-0 sm:left-4 lg:-left-6 bg-secondary/95 backdrop-blur text-white shadow-xl p-3 sm:p-4 rounded-lg z-30 block floating-energiza"
                            style={{ animationDelay: "1s" }}
                        >
                            <div className="text-sm sm:text-base opacity-70 font-bold uppercase">
                                Enfoque en
                            </div>
                            <div className="font-black text-sm sm:text-base uppercase">
                                rendimiento
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
