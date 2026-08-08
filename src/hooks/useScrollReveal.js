import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registered once at module scope — this file is only evaluated the first
// time it's imported, so every component sharing this hook reuses the same
// registration instead of re-registering the plugin per mount.
gsap.registerPlugin(ScrollTrigger);

/**
 * Fades/slides in any descendant marked with data-reveal as it scrolls into
 * view. One GSAP context per component instance, always reverted on unmount.
 *
 * Usage: const scope = useScrollReveal();  <section ref={scope}> ... <div data-reveal> ... </div> </section>
 */
export default function useScrollReveal() {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = scope.current?.querySelectorAll('[data-reveal]') ?? [];
      targets.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power2.out',
          delay: i * 0.08,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return scope;
}
