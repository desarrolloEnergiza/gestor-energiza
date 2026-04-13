import React, { lazy } from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';
import AboutSection from '@/Components/Sections/AboutSection';
import LazySection from '@/Components/Common/LazySection';

// Lazy loading team section
const TeamSection = lazy(() => import('@/Components/Sections/TeamSection'));

// Simple loading placeholder
const SectionLoader = () => (
    <div className="w-full h-48 flex items-center justify-center bg-gray-50/50">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
    </div>
);

export default function About() {
    return (
        <>
            <Head title="Energiza Virtual - Nosotros" />
            
            <Header />

            <main className="min-h-screen pt-20 xl:pt-[10vh]">
                <AboutSection />
                <LazySection fallback={<SectionLoader />}>
                    <TeamSection />
                </LazySection>
            </main>

            <Footer />
        </>
    );
}
