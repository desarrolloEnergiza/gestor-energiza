import React from "react";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Farmaplace",
            subtitle: "Gestión Farmacéutica Integral",
            desc: "Sistema avanzado de inventario y logística para farmacias. Control crítico de SKUs, lotes, vencimientos y gestión de despachos automatizada.",
            status: "EN CONSTRUCCIÓN",
            image: "/images/Proyects/farmaplace.png",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            title: "Bootcamp Academy",
            subtitle: "E-learning & Marketing Data",
            desc: "Plataforma educativa con BigBlueButton y analítica de Facebook. Gestión de roles avanzada y reportes para campañas de marketing segmentadas.",
            status: "PLATAFORMA ACTIVA",
            image: "/images/Proyects/webinar.png",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Vanadio",
            subtitle: "RRHH & Normativa DT",
            desc: "Gestión de asistencia y liquidaciones bajo Resolución Exenta n°38. Validación estructural para cumplimiento con la Dirección del Trabajo Chilena.",
            status: "EN CONSTRUCCIÓN NORMATIVA",
            image: "/images/Proyects/vanadio.png",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-[#f8fafc] py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                        Proyectos <span className="text-primary italic">destacados</span>
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Soluciones tecnológicas a medida que están transformando procesos críticos en diferentes industrias.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative h-full">
                            {/* Card Background / Shadow */}
                            <div className="absolute inset-0 bg-white rounded-3xl shadow-sm transition-all duration-500 group-hover:shadow-2xl translate-y-2 group-hover:-translate-y-2"></div>
                            
                            {/* Content */}
                            <div className="relative rounded-3xl overflow-hidden flex flex-col h-full border border-gray-100/50">
                                {/* Image Area */}
                                <div className="aspect-video overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay with Icon */}
                                    <div className="absolute top-4 left-4">
                                        <div className="w-10 h-10 bg-white shadow-lg rounded-xl flex items-center justify-center text-primary">
                                            {project.icon}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 lg:p-8 space-y-4 flex flex-col flex-grow">
                                    <div className="space-y-1">
                                        <p className="text-primary font-bold text-xs uppercase tracking-widest italic">
                                            {project.subtitle}
                                        </p>
                                        <h3 className="text-2xl font-black text-gray-900">
                                            {project.title}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                                        {project.desc}
                                    </p>

                                    {/* Badge */}
                                    <div className="pt-6 border-t border-gray-100">
                                        <div className="inline-flex items-center px-4 py-1.5 bg-gray-100 rounded-full text-[10px] font-black text-gray-500 tracking-widest uppercase italic group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                                            {project.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
