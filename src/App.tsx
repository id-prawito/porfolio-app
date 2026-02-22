import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Footer from './sections/Footer';
import Navigation from './sections/Navigation';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize scroll animations
    const ctx = gsap.context(() => {
      // Fade in sections on scroll
      gsap.utils.toArray<HTMLElement>('.section-animate').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.8, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
