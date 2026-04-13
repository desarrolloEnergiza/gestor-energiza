import React, { useRef, Suspense, ReactNode } from 'react';
import { useIntersection } from '@/Hooks/useIntersection';

interface LazySectionProps {
    children: ReactNode;
    fallback: ReactNode;
    rootMargin?: string;
    className?: string;
    /** Minimum height of the placeholder to prevent layout shift */
    minHeight?: string;
    /** If true, the section will also fade in when visible */
    animate?: boolean;
}

/**
 * Wrapper component that only renders its children once it enters the viewport.
 * Perfect for lazy loading sections and their associated JS chunks.
 */
export default function LazySection({ 
    children, 
    fallback, 
    rootMargin = '200px', 
    className = "",
    minHeight = "200px",
    animate = true
}: LazySectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersection(sectionRef, rootMargin);

    return (
        <div 
            ref={sectionRef} 
            className={`${className}`} 
            style={{ minHeight: isVisible ? 'auto' : minHeight }}
        >
            {isVisible ? (
                <div className={animate ? "animate-in fade-in duration-700" : ""}>
                    <Suspense fallback={fallback}>
                        {children}
                    </Suspense>
                </div>
            ) : (
                <div className="invisible h-0 overflow-hidden">
                    {/* Pre-render fallback if needed or just keep empty */}
                </div>
            )}
        </div>
    );
}
