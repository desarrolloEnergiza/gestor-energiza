import React from "react";

export default function AboutSection() {
    return (
        <section
            id="nosotros"
            className="relative py-16 lg:py-24 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-8">
                        Sobre{" "}
                        <span className="text-primary italic">Nosotros</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                        ENERGIZA nace a raíz de la disrupción digital que está
                        experimentando nuestro país y el mundo, teniendo como
                        objetivo incentivar el uso de las tecnologías. Proveemos
                        plataformas y herramientas digitales al servicio de
                        nuestros clientes.
                    </p>
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-semibold mb-12">
                        Somos una empresa de tecnología focalizada en el
                        desarrollo de software y soluciones digitales.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </span>
                                Nuestra Misión
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Impulsar la transformación y modernización
                                digital de las organizaciones a través de
                                soluciones tecnológicas innovadoras,
                                desarrollando plataformas web robustas y
                                escalables que optimicen sus procesos, potencien
                                sus resultados y mejoren la vida de sus
                                usuarios.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="p-2 bg-secondary/10 rounded-lg text-secondary">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                                Nuestra Visión
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Consolidarnos como el principal aliado
                                estratégico y referente tecnológico a nivel
                                nacional e internacional, reconocidos por
                                nuestra excelencia operativa, el compromiso con
                                el éxito de nuestros clientes y el fomento
                                continuo del uso de nuevas tecnologías.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
