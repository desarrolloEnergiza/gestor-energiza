import React, { lazy } from 'react';
import { Head } from '@inertiajs/react';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';
import HeroSection from '@/Components/Sections/HeroSection';
import LazySection from '@/Components/Common/LazySection';

// Lazy loading sections below the fold
const FeatureSection = lazy(() => import('@/Components/Sections/FeatureSection'));
const PartnersSection = lazy(() => import('@/Components/Sections/PartnersSection'));
const ProjectsSection = lazy(() => import('@/Components/Sections/ProjectsSection'));

// Simple loading placeholder
const SectionLoader = () => (
    <div className="w-full h-48 flex items-center justify-center bg-gray-50/50">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
    </div>
);

export default function Welcome() {
    return (
        <>
            <Head title="Energiza Virtual - Inicio" />
            
            <Header />

            <main className="min-h-screen">
                <HeroSection />
                
                <LazySection fallback={<SectionLoader />}>
                    <FeatureSection />
                </LazySection>

                <LazySection fallback={<SectionLoader />}>
                    <PartnersSection />
                </LazySection>

                <LazySection fallback={<SectionLoader />}>
                    <ProjectsSection />
                </LazySection>
            </main>

            <Footer />
        </>
    );
}
