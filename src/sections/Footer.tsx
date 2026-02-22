import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Dribbble, Twitter, Mail, MapPin, ArrowUpRight, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.fromTo(
        '.footer-logo',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Social icons animation
      gsap.fromTo(
        '.social-icon',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Links animation
      gsap.fromTo(
        '.footer-link',
        { x: -10, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Dribbble className="w-5 h-5" />, href: '#', label: 'Dribbble' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative bg-gray-900 text-white overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: 'linear-gradient(135deg, #1A1A2E 0%, #2D2B55 100%)',
        }}
      />

      {/* Decorative Orb */}
      <div
        className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="w-full px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#hero');
                }}
                className="footer-logo inline-block font-display text-3xl font-bold mb-4 hover:text-purple-400 transition-colors"
              >
                Utama<span className="text-purple-400">.</span>
              </a>
              <p className="text-gray-400 mb-6 max-w-md">
                Designing digital experiences that feel human. Let&apos;s create
                something amazing together.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="social-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 hover:scale-110 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="footer-link inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-6">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hello@utama.design"
                    className="footer-link flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    hello@utama.design
                  </a>
                </li>
                <li>
                  <div className="footer-link flex items-center gap-3 text-gray-400">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    Jakarta, Indonesia
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="w-full px-6 lg:px-12 xl:px-20 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Utama. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-1">
                Designed with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> in Jakarta
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
