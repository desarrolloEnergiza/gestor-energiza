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
            </div>

            {/* Mobile Menu (Absolute Dropdown) */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 ease-in-out transform ${
                    mobileMenuOpen 
                        ? "opacity-100 translate-y-0 visible" 
                        : "opacity-0 -translate-y-4 invisible"
                }`}
            >
                <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
                    <Link
                        href="/"
                        className="text-gray-900 text-xl font-bold border-b border-gray-50 pb-2 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Inicio
                    </Link>
                    <a
                        href="https://aula.energizavirtual.cl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 text-xl font-bold border-b border-gray-50 pb-2 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Aula Virtual
                    </a>
                    <Link
                        href="/nosotros"
                        className="text-gray-900 text-xl font-bold border-b border-gray-50 pb-2 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Nosotros
                    </Link>
                </div>
            </div>
        </nav>
    );
}
