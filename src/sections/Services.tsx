import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Download, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { name: 'UI Design', size: 'large' },
  { name: 'UX Research', size: 'large' },
  { name: 'Prototyping', size: 'medium' },
  { name: 'Design Systems', size: 'medium' },
  { name: 'User Testing', size: 'medium' },
  { name: 'Web Design', size: 'small' },
  { name: 'Mobile App Design', size: 'small' },
  { name: 'Consulting', size: 'small' },
  { name: 'Workshops', size: 'small' },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline animation - word by word
      gsap.fromTo(
        '.services-headline span',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Tags animation
      gsap.fromTo(
        '.service-tag-item',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.services-tags',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA buttons animation
      gsap.fromTo(
        '.services-cta',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.services-cta-container',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Floating animation for tags
      gsap.utils.toArray<HTMLElement>('.service-tag-item').forEach((tag, i) => {
        gsap.to(tag, {
          y: -8,
          duration: 3 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = "Got a project, an idea, or just wanna say hi?".split(' ');

  const getTagClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'px-8 py-4 text-lg';
      case 'medium':
        return 'px-6 py-3 text-base';
      case 'small':
        return 'px-5 py-2.5 text-sm';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-purple-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-pink-100/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="services-headline font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-12 leading-tight">
            {headlineWords.map((word, index) => (
              <span key={index} className="inline-block mr-2 lg:mr-3">
                {word === 'hi?' ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h2>

          {/* Services Tags */}
          <div className="services-tags flex flex-wrap justify-center gap-3 lg:gap-4 mb-12">
            {services.map((service, index) => (
              <span
                key={index}
                className={`service-tag-item ${getTagClasses(service.size)} rounded-full font-medium transition-all duration-300 cursor-default bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white hover:shadow-purple`}
              >
                {service.name}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="services-cta-container flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="services-cta btn-primary group"
            >
              <MessageCircle className="w-5 h-5" />
              Let&apos;s Chat
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="services-cta btn-secondary group">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
