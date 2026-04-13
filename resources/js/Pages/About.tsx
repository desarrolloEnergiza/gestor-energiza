import { Head } from '@inertiajs/react';
import Header from '@/Components/Layout/Header';
import Footer from '@/Components/Layout/Footer';
import AboutSection from '@/Components/Sections/AboutSection';
import TeamSection from '@/Components/Sections/TeamSection';

export default function About() {
    return (
        <>
            <Head title="Energiza Virtual - Nosotros" />
            
            <Header />

            <main className="min-h-screen pt-20 xl:pt-[10vh]">
                <AboutSection />
                <TeamSection />
            </main>

            <Footer />
        </>
    );
}
