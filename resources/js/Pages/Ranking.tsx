import React from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";

type Otec = {
    name: string;
    enrolled: number; // Matriculados
    graduated: number; // Egresados / aprobados
};

type RankedOtec = Otec & {
    position: number;
    rate: number; // Tasa de finalización/aprobación (%)
};

// Datos del Ranking de Bootcamps de Formación Tecnológica – Talento Digital 2022.
const OTECS: Otec[] = [
    { name: "Linares y Moreira Ltda.", enrolled: 241, graduated: 196 },
    { name: "Linares y Cía. Ltda. / Edutecno Capacita", enrolled: 497, graduated: 395 },
    { name: "Sustantiva SpA", enrolled: 72, graduated: 52 },
    { name: "Kibernum Capacitación S.A.", enrolled: 505, graduated: 329 },
    { name: "Aspasia Servicios de Formación", enrolled: 325, graduated: 204 },
    { name: "Fundación Hispano Chilena Adalid", enrolled: 541, graduated: 315 },
    { name: "Adalid Servicios de Capacitación", enrolled: 600, graduated: 349 },
    { name: "Centro de Capacitación Inforcap", enrolled: 535, graduated: 256 },
];

// Tasa = participantes que finalizaron exitosamente ÷ participantes que iniciaron × 100.
// El ranking se calcula y ordena aquí para garantizar que siempre quede ordenado por tasa.
const RANKING: RankedOtec[] = OTECS.map((otec) => ({
    ...otec,
    rate: (otec.graduated / otec.enrolled) * 100,
}))
    .sort((a, b) => b.rate - a.rate)
    .map((otec, index) => ({ ...otec, position: index + 1 }));

const MAX_RATE = Math.max(...RANKING.map((otec) => otec.rate));

const percentFormatter = new Intl.NumberFormat("es-CL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
const integerFormatter = new Intl.NumberFormat("es-CL");

const formatRate = (rate: number) => `${percentFormatter.format(rate)}%`;
const formatInteger = (value: number) => integerFormatter.format(value);

function PositionBadge({ position }: { position: number }) {
    const isPodium = position <= 3;

    return (
        <span
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black tabular-nums ${
                isPodium
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "bg-gray-100 text-gray-700"
            }`}
            aria-label={`Posición ${position}`}
        >
            {position}
        </span>
    );
}

function RateBar({ rate }: { rate: number }) {
    const width = `${(rate / MAX_RATE) * 100}%`;

    return (
        <div
            className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200"
            aria-hidden="true"
        >
            <div className="h-full rounded-full bg-primary" style={{ width }}></div>
        </div>
    );
}

export default function Ranking() {
    return (
        <>
            <Head title="Energiza Virtual - Ranking Bootcamps Talento Digital 2022">
                <meta
                    name="description"
                    content="Ranking de Bootcamps de Formación Tecnológica – Talento Digital 2022, clasificado según la tasa de finalización/aprobación de participantes por OTEC."
                />
            </Head>

            <Header />

            <main className="min-h-screen bg-white pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="mx-auto max-w-5xl">
                        {/* Encabezado */}
                        <header className="mb-10 text-center lg:mb-14">
                            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary sm:text-sm">
                                Talento Digital 2022
                            </div>
                            <h1 className="mb-5 text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                                Ranking de Bootcamps de{" "}
                                <span className="italic text-primary">
                                    Formación Tecnológica
                                </span>
                            </h1>
                            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                                Clasificación según tasa de finalización/aprobación
                                de participantes.
                            </p>
                        </header>

                        {/* Criterio */}
                        <div className="mb-10 rounded-2xl border-l-4 border-secondary bg-secondary/5 p-6 sm:p-8">
                            <h2 className="mb-3 text-xs font-black uppercase tracking-widest text-secondary">
                                Criterio
                            </h2>
                            <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                                <span className="font-bold text-gray-900">
                                    Tasa de finalización/aprobación
                                </span>{" "}
                                = participantes que finalizaron exitosamente ÷
                                participantes que iniciaron × 100
                            </p>
                        </div>

                        {/* Nota de orden */}
                        <p className="mb-4 text-sm font-semibold text-gray-500">
                            {RANKING.length} OTEC evaluadas · ordenadas de mayor a
                            menor tasa
                        </p>

                        {/* Tabla (escritorio) */}
                        <div className="hidden overflow-hidden rounded-2xl border border-gray-100 shadow-sm lg:block">
                            <table className="w-full text-left">
                                <caption className="sr-only">
                                    Ranking de Bootcamps de Formación Tecnológica –
                                    Talento Digital 2022, ordenado por tasa de
                                    finalización/aprobación.
                                </caption>
                                <thead className="bg-gray-50 text-xs font-black uppercase tracking-widest text-gray-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                            Posición
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            OTEC
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-right">
                                            Matriculados
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-right">
                                            Egresados / aprobados
                                        </th>
                                        <th scope="col" className="px-6 py-4 text-right">
                                            Tasa
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 bg-white">
                                    {RANKING.map((otec) => (
                                        <tr
                                            key={otec.name}
                                            className="transition-colors duration-200 hover:bg-gray-50/70"
                                        >
                                            <td className="px-6 py-4">
                                                <PositionBadge position={otec.position} />
                                            </td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 text-left font-semibold text-gray-900"
                                            >
                                                {otec.name}
                                            </th>
                                            <td className="px-6 py-4 text-right tabular-nums text-gray-600">
                                                {formatInteger(otec.enrolled)}
                                            </td>
                                            <td className="px-6 py-4 text-right tabular-nums text-gray-600">
                                                {formatInteger(otec.graduated)}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="ml-auto flex w-40 flex-col items-end gap-2">
                                                    <span className="text-base font-black tabular-nums text-gray-900">
                                                        {formatRate(otec.rate)}
                                                    </span>
                                                    <RateBar rate={otec.rate} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Tarjetas (móvil y tablet) */}
                        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
                            {RANKING.map((otec) => (
                                <li
                                    key={otec.name}
                                    className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                                >
                                    <div className="flex items-start gap-4">
                                        <PositionBadge position={otec.position} />
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                                OTEC
                                            </p>
                                            <h3 className="text-base font-bold leading-snug text-gray-900">
                                                {otec.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <div className="mb-2 flex items-baseline justify-between">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                                Tasa
                                            </span>
                                            <span className="text-2xl font-black tabular-nums text-gray-900">
                                                {formatRate(otec.rate)}
                                            </span>
                                        </div>
                                        <RateBar rate={otec.rate} />
                                    </div>

                                    <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                                        <div className="flex flex-col">
                                            <dt className="flex-1 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                                Matriculados
                                            </dt>
                                            <dd className="mt-1 text-lg font-bold tabular-nums text-gray-700">
                                                {formatInteger(otec.enrolled)}
                                            </dd>
                                        </div>
                                        <div className="flex flex-col">
                                            <dt className="flex-1 text-[10px] font-black uppercase tracking-widest text-gray-400">
                                                Egresados / aprobados
                                            </dt>
                                            <dd className="mt-1 text-lg font-bold tabular-nums text-gray-700">
                                                {formatInteger(otec.graduated)}
                                            </dd>
                                        </div>
                                    </dl>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
