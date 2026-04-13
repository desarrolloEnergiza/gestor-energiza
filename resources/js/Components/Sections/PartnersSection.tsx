import React from "react";

export default function PartnersSection() {
    const partners = [
        // { name: "Sence", logo: "/images/Partners/sence.png" },
        { name: "Sustantiva", logo: "/images/Partners/sustantiva.png" },
        {
            name: "Bootcamp Academy",
            logo: "/images/Partners/bootcampacademy.png",
        },
        // { name: "Talento Digital", logo: "/images/Partners/talentodigital.png" },
    ];

    // Duplicamos el array para que el scroll sea infinito y fluido
    const allPartners = [...partners, ...partners, ...partners, ...partners];

    return (
        <section className="bg-white py-16 lg:py-24 border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <div className="text-center">
                    <h2 className="text-2xl lg:text-3xl font-black text-gray-900 uppercase tracking-widest">
                        Nuestros{" "}
                        <span className="text-primary italic">aliados</span>
                    </h2>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="flex animate-marquee whitespace-nowrap items-center py-4">
                    {allPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="mx-8 lg:mx-16 flex-shrink-0 flex items-center justify-center h-20 lg:h-24 transition-all duration-500 filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
                            style={{ minWidth: "150px" }}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-w-[180px] lg:max-w-[250px] max-h-[80px] lg:max-h-[100px] w-auto h-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
