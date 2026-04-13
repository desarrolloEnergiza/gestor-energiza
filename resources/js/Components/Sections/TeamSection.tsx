import React from "react";

export default function TeamSection() {
    const team = [
        {
            id: 1,
            name: "Roberto Soto Antihual",
            role: "CEO & Founder",
            image: "/images/team/roberto.jpg",
        },
        {
            id: 2,
            name: "Carolina Bustamante",
            role: "Directora de MKTG y Proyectos",
            image: "/images/team/carolina.jpg",
        },
        {
            id: 3,
            name: "José Alvarado Mazzei",
            role: "Tech Lead, Arquitecto de software",
            image: "/images/team/jose.jpg",
        },
        {
            id: 4,
            name: "Manuel Ibarra Moreno",
            role: "Desarrollador Fullstack",
            image: "/images/team/manuel.jpg",
        },
    ];

    return (
        <section id="quienes-somos" className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
                        <span className="text-primary italic">Quiénes</span> Somos
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Conoce al equipo de trabajo de ENERGIZA. Profesionales apasionados por la tecnología y la innovación, comprometidos con el éxito de cada proyecto que emprendemos.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-16 max-w-3xl mx-auto">
                    {team.map((member) => (
                        <div key={member.id} className="flex flex-col items-center group">
                            <div className="relative w-48 h-48 mb-6">
                                {/* Marco redondo con colores del proyecto */}
                                <div className="absolute inset-0 rounded-full border-4 border-primary/20 group-hover:border-primary transition-colors duration-500"></div>
                                <div className="absolute inset-2 border-4 border-secondary rounded-full overflow-hidden bg-gray-200">
                                    {/* Placeholder o foto */}
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <svg className="w-20 h-20 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    </div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 text-center mb-1">
                                {member.name}
                            </h3>
                            <p className="text-base font-semibold text-primary text-center">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
