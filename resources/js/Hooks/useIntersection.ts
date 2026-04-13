import { useState, useEffect, useRef, RefObject } from 'react';

/**
 * Custom hook to detect when an element enters the viewport.
 * @param ref - React ref of the element to observe.
 * @param rootMargin - Margin around the root (default is 0px).
 * @returns boolean - true if the element is currently visible.
 */
export function useIntersection(ref: RefObject<HTMLElement>, rootMargin: string = '0px'): boolean {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        // If it's already visible, no need to observe again (once it's loaded, it's loaded)
        if (isIntersecting) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    // Standard practice is to stop observing once visible for lazy loading
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                rootMargin,
                threshold: 0.01 // Trigger as soon as 1% of the element is visible
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, rootMargin, isIntersecting]);

    return isIntersecting;
}
