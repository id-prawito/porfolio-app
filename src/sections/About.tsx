import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        '.about-image',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animations
      gsap.fromTo(
        '.about-label',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.about-headline',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.about-body',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.about-stats',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Parallax effect on image
      gsap.to('.about-image', {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50/50 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div ref={imageRef} className="relative">
            <div className="about-image relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/about-portrait.jpg"
                  alt="Utama - UI/UX Designer"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
              </div>

              {/* Decorative Blob Behind */}
              <div
                className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full -z-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 bg-white rounded-2xl shadow-xl p-6">
                <div className="font-display text-4xl font-bold gradient-text mb-1">
                  4+
                </div>
                <div className="text-sm text-gray-600">Years of<br />Experience</div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div ref={contentRef} className="lg:pl-8">
            <span className="about-label section-label mb-4 block">
              About Me
            </span>

            <h2 className="about-headline font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              I believe great design starts with{' '}
              <span className="gradient-text">understanding people.</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="about-body text-gray-600 leading-relaxed">
                With over 4 years of experience in UI/UX design, I&apos;ve had the
                privilege of working on diverse projects across banking,
                manufacturing, and government sectors. My approach combines
                strategic thinking with empathetic design to create solutions
                that not only look beautiful but truly serve user needs.
              </p>
              <p className="about-body text-gray-600 leading-relaxed">
                I specialize in transforming complex problems into intuitive,
                user-friendly interfaces that drive business results while
                delighting users. Every pixel, every interaction, every animation
                is crafted with purpose and care.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="about-stats">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'UI Design',
                  'UX Research',
                  'Prototyping',
                  'Design Systems',
                  'User Testing',
                  'Figma',
                  'Adobe XD',
                  'HTML/CSS',
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
