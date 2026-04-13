import React from "react";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
                    <div>
                        <div className="mb-6">
                            <Link href="/">
                                <img
                                    className="h-14 lg:h-20 w-auto"
                                    src="/images/energiza_footer.png"
                                    alt="Energiza Virtual Logo"
                                />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white tracking-wider">
                            Links de interés
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/nosotros"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                                >
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://aula.energizavirtual.cl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                                >
                                    Aula virtual
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white tracking-wider">
                            Contacto
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mr-3 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:contacto@energizavirtual.cl"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                                >
                                    contacto@energizavirtual.cl
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Energiza Virtual.
                        Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a
                            href="#"
                            className="hover:text-white transition-colors text-sm"
                        >
                            Términos y condiciones
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors text-sm"
                        >
                            Política de privacidad
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
