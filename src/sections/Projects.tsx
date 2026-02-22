import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Smartphone, Monitor, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Mobile App',
    title: 'Block Leave',
    description: 'A streamlined leave management system for modern workplaces with intuitive interface and real-time tracking.',
    image: '/project-blockleave.jpg',
    tags: ['UI Design', 'UX Research', 'Mobile'],
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    id: 2,
    category: 'Web Application',
    title: 'Mandiri Cash Management',
    description: 'Enterprise banking solution for cash flow optimization with comprehensive dashboards and analytics.',
    image: '/project-mandiri.jpg',
    tags: ['Web Design', 'Dashboard', 'Fintech'],
    icon: <Monitor className="w-5 h-5" />,
  },
  {
    id: 3,
    category: 'Web Platform',
    title: 'Public Service Portal',
    description: 'Digital transformation of citizen services with accessible design and seamless user experience.',
    image: '/project-government.jpg',
    tags: ['UX Strategy', 'Accessibility', 'Government'],
    icon: <Globe className="w-5 h-5" />,
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.projects-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Project cards animation
      gsap.fromTo(
        '.project-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 -translate-x-1/2 rounded-full bg-purple-100/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="projects-header text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mb-4 block">Selected Work</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Projects that make an{' '}
            <span className="gradient-text">impact</span>
          </h2>
          <p className="text-gray-600">
            A curated selection of my recent work across different industries
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                  {project.icon}
                  {project.category}
                </div>

                {/* View Project Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-purple-600 hover:bg-purple-50 transition-colors">
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary group">
            View All Projects
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
