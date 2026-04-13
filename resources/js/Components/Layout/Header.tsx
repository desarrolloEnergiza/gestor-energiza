import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm fixed w-full z-50 h-20 xl:h-[10vh]">
            <div className="container mx-auto px-4 h-full flex items-center">
                <div className="flex justify-between items-center w-full">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/">
                            <img
                                src="/images/logo_energiza_negro.png"
                                alt="Energiza Virtual Logo"
                                className="h-10 w-auto lg:h-12"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-10">
                        <Link
                            href="/"
                            className="text-gray-800 font-semibold hover:text-primary transition-colors duration-300 text-sm xl:text-base tracking-wider"
                        >
                            Inicio
                        </Link>
                        <a
                            href="https://aula.energizavirtual.cl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 font-semibold hover:text-primary transition-colors duration-300 text-sm xl:text-base tracking-wider"
                        >
                            Aula Virtual
                        </a>
                        <Link
                            href="/nosotros"
                            className="text-gray-800 font-semibold hover:text-primary transition-colors duration-300 text-sm xl:text-base tracking-wider"
                        >
                            Nosotros
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-800 hover:text-primary transition-colors duration-300"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"} mt-4 pb-4 border-t border-gray-100`}
                >
                    <div className="flex flex-col space-y-4 pt-4">
                        <Link
                            href="/"
                            className="text-gray-800 font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Inicio
                        </Link>
                        <a
                            href="https://aula.energizavirtual.cl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Aula Virtual
                        </a>
                        <Link
                            href="/nosotros"
                            className="text-gray-800 font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Nosotros
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
