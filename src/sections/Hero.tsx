import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate gradient orbs
      gsap.fromTo(
        '.orb',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'expo.out',
        }
      );

      // Animate headline words
      gsap.fromTo(
        '.headline-word',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'expo.out',
          delay: 0.3,
        }
      );

      // Animate subheadline
      gsap.fromTo(
        '.subheadline',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          delay: 0.8,
        }
      );

      // Animate CTA buttons
      gsap.fromTo(
        '.cta-primary',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          delay: 1,
        }
      );

      gsap.fromTo(
        '.cta-secondary',
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'expo.out',
          delay: 1.1,
        }
      );

      // Floating animation for orbs
      gsap.to('.orb-1', {
        x: 30,
        y: -20,
        scale: 1.05,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.orb-2', {
        x: -20,
        y: 30,
        scale: 1.03,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.orb-3', {
        x: 20,
        y: 20,
        scale: 1.04,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = ['Designing', 'digital', 'experiences', 'that', 'feel', 'human.'];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Gradient Orbs Background */}
      <div ref={orbsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orb 1 - Large Purple */}
        <div
          className="orb orb-1 absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(124, 58, 237, 0) 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Orb 2 - Pink */}
        <div
          className="orb orb-2 absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, rgba(236, 72, 153, 0) 70%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Orb 3 - Purple-Pink Mix */}
        <div
          className="orb orb-3 absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, rgba(167, 139, 250, 0) 70%)',
            filter: 'blur(40px)',
          }}
        />
        
        {/* Decorative Lines */}
        <svg
          className="absolute top-20 right-20 w-64 h-64 opacity-20"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M10 100 Q 50 10, 100 100 T 190 100"
            stroke="#7C3AED"
            strokeWidth="1"
            fill="none"
            className="animate-pulse-slow"
          />
          <path
            d="M10 120 Q 60 30, 110 120 T 190 120"
            stroke="#EC4899"
            strokeWidth="1"
            fill="none"
            className="animate-pulse-slow"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pt-24"
      >
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-8">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">
              UI/UX Designer based in Jakarta
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[1.1] mb-8">
            {headlineWords.map((word, index) => (
              <span
                key={index}
                className={`headline-word inline-block mr-3 lg:mr-5 ${
                  word === 'human.' ? 'gradient-text' : ''
                }`}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className="subheadline text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
            I&apos;m Utama, a UI/UX designer with 4+ years of experience crafting
            digital products for banking, manufacturing, and government projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('#projects')}
              className="cta-primary btn-primary group"
            >
              View My Work
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="cta-secondary btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 lg:mt-32 grid grid-cols-3 gap-8 max-w-2xl">
          {[
            { value: '4+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Completed' },
            { value: '30+', label: 'Happy Clients' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center lg:text-left"
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-purple-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
