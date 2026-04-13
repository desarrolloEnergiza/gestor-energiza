import React from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';

export default function Privacy() {
    return (
        <>
            <Head title="Energiza Virtual - Política de Privacidad" />
            <Header />
            <main className="min-h-screen pt-32 pb-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
                            Política de <span className="text-primary italic">Privacidad</span>
                        </h1>
                        
                        <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-relaxed">
                            <p>
                                <strong>Energiza Virtual</strong> hace pública esta declaración con el objeto de informar a todas las personas cuyos datos personales se encuentran en nuestras bases de datos, y teniendo en cuenta la importancia de la privacidad y protección de la información en el entorno digital.
                            </p>

                            <p>
                                Energiza Virtual manifiesta que los datos personales incluidos en sus bases de datos se han recopilado para el desarrollo de diversos procedimientos relacionados directamente con su objeto social de innovación tecnológica, desarrollo de software y provisión de herramientas digitales.
                            </p>

                            <p>
                                De igual modo, se le informa que los datos registrados en nuestras bases de datos pueden incluir, entre otros: nombres, direcciones, teléfonos, correos electrónicos, información de contacto profesional y fechas de nacimiento (para los casos que aplique). En todo caso, en cualquier momento el titular de la información podrá revocar su consentimiento y ejercer su derecho a la supresión de datos personales.
                            </p>

                            <div className="bg-primary/5 p-8 rounded-2xl border-l-4 border-primary mt-12 mb-12">
                                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                                    Derechos del Titular:
                                </h3>
                                <p>
                                    Si Usted desea consultar información o solicitar la supresión o rectificación de sus datos personales de nuestras bases de datos, podrá hacerlo en cualquier momento a través del correo electrónico:
                                    <a href="mailto:contacto@energizavirtual.cl" className="text-primary hover:underline ml-1 font-bold">
                                        contacto@energizavirtual.cl
                                    </a>
                                </p>
                            </div>

                            <p>
                                Al utilizar nuestras plataformas y servicios, usted autoriza el tratamiento de sus datos personales de acuerdo con esta política. Lo anterior, sin perjuicio del derecho que asiste al titular de información en cualquier tiempo de consultar, conocer, actualizar sus datos personales, o solicitar su supresión o rectificación conforme a la legislación vigente.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
