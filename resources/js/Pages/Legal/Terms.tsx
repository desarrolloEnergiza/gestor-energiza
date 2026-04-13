import React from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';

export default function Terms() {
    return (
        <>
            <Head title="Energiza Virtual - Términos y Condiciones" />
            <Header />
            <main className="min-h-screen pt-32 pb-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
                            Términos y <span className="text-secondary italic">Condiciones</span>
                        </h1>
                        
                        <div className="prose prose-lg max-w-none text-gray-600 space-y-12 leading-relaxed text-left">
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-secondary rounded-full"></div>
                                    1. Aceptación de los Términos
                                </h2>
                                <p>
                                    Al acceder y utilizar el sitio web de <strong>Energiza Virtual</strong> y sus servicios relacionados, usted acepta estar sujeto a los siguientes Términos y Condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le recomendamos no utilizar nuestros servicios.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-secondary rounded-full"></div>
                                    2. Uso de los Servicios
                                </h2>
                                <p>
                                    Energiza Virtual proporciona soluciones digitales y plataformas tecnológicas. El usuario se compromete a utilizar estos servicios únicamente para fines lícitos y de acuerdo con las leyes chilenas e internacionales vigentes. Queda prohibido cualquier uso que pueda dañar, inutilizar o sobrecargar nuestras plataformas.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-secondary rounded-full"></div>
                                    3. Propiedad Intelectual
                                </h2>
                                <p>
                                    Todo el contenido presente en este sitio, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes, clips de audio y software, así como la estructura y diseño del sitio, es propiedad de Energiza Virtual o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual chilenas e internacionales.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-secondary rounded-full"></div>
                                    4. Limitación de Responsabilidad
                                </h2>
                                <p>
                                    Energiza Virtual se esfuerza por mantener la disponibilidad y seguridad de sus servicios. Sin embargo, no se hace responsable de los daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de uso de nuestras plataformas digitales, o por acciones tomadas por terceros ajenos a la organización.
                                </p>
                            </section>

                            <div className="bg-secondary/5 p-8 rounded-2xl border-l-4 border-secondary mt-12 mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Información de Contacto</h2>
                                <p>
                                    Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor contáctenos a través de:
                                    <a href="mailto:contacto@energizavirtual.cl" className="text-secondary hover:underline ml-1 font-bold">
                                        contacto@energizavirtual.cl
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
