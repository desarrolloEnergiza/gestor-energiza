import { Head } from '@inertiajs/react';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';
import HeroSection from '@/Components/Sections/HeroSection';
import FeatureSection from '@/Components/Sections/FeatureSection';
import PartnersSection from '@/Components/Sections/PartnersSection';
import ProjectsSection from '@/Components/Sections/ProjectsSection';

export default function Welcome() {
    return (
        <>
            <Head title="Energiza Virtual - Inicio" />
            
            <Header />

            <main className="min-h-screen">
                <HeroSection />
                
                <FeatureSection />

                <PartnersSection />

                <ProjectsSection />
            </main>

            <Footer />
        </>
    );
}
