import { useState } from 'react';

const projectsData = [
  {
    name: 'PORTFOLIO WEBSITE,',
    href: 'https://ayush-thedev.github.io/Portfolio',
    shapeClass: 'w-32 h-32 md:w-48 md:h-48 bg-[#638ce8] rotate-45',
    desc: 'A modular, high-performance portfolio built with Vite, React, and Tailwind CSS. Featuring custom animations and a component-based architecture.',
    tags: ['[REACT]', '[TAILWIND]'],
  },
  {
    name: 'HISTORICAL ARCHIVE,',
    href: 'https://history-of-the-day.vercel.app',
    shapeClass: 'w-32 h-32 md:w-48 md:h-48 bg-[#f59e0b] rounded-full scale-110',
    desc: 'An interactive historical database featuring daily archives, custom filters, and a responsive timeline. Built for high-density data visualization.',
    tags: ['[FULL-STACK]', '[DATA]'],
  },
  {
    name: 'INTRUSION LOGGER,',
    href: 'https://github.com/ayush-thedev/usb-intrusion-system',
    shapeClass: 'w-32 h-32 md:w-48 md:h-48 border-[16px] border-black rounded-xl -rotate-12',
    desc: 'A professional USB monitor for Windows that captures insertion/removal events in real-time. Features a secure C++backend and a web-based administration UI for persistent logging and device access control.',
    tags: ['[C++]', '[SECURITY]', '[SYSTEMS]'],
  },
  {
    name: 'BRAND IDENTITY',
    href: '#',
    shapeClass: 'w-40 h-24 md:w-56 md:h-32 bg-[#10b981] skew-x-12 rotate-12 rounded-sm',
    desc: 'Comprehensive visual identity system encompassing typography, motion guidelines, and multi-platform asset libraries.',
    tags: ['[BRANDING]', '[MOTION]'],
  },
];

const WorkSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const handleHover = (index) => {
    if (index === activeIndex) return;
    setFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFading(false);
    }, 150);
  };

  const current = projectsData[activeIndex];

  return (
    <section id="work" className="min-h-screen bg-[#F5F5F5] py-24 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-center items-center mb-16 border-b border-white/10 pb-4">
        <div className="font-sans text-4xl text-black tracking-tight text-center font-semibold">
          04 ITEMS
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Project list */}
        <div className="lg:col-span-7 flex flex-col gap-2 relative z-10">
          <h3 className="font-mono text-sm tracking-widest text-gray-400 mb-4 uppercase">
            <span className="inline-block bg-black text-white px-3 py-1">[PROJECTS]</span>
          </h3>
          {projectsData.map((project, i) => (
            <a
              key={i}
              href={project.name === 'HISTORICAL ARCHIVE,' ? project.href : project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`work-item block text-5xl md:text-7xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.9] hover:pl-4 transition-all duration-300 ${
                i === activeIndex ? 'active text-black' : 'text-gray-400 hover:text-black'
              }`}
              onMouseEnter={() => handleHover(i)}
              onClick={(e) => {
                if (project.href === '#') e.preventDefault();
              }}
            >
              {project.name}
            </a>
          ))}
        </div>

        {/* Detail card */}
        <div className="lg:col-span-5 relative z-10">
          <div className="bg-brand-card p-6 md:p-8 rounded-lg shadow-2xl border border-white/5 relative group transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="w-full aspect-[4/3] bg-[#0a0a0a] mb-6 relative overflow-hidden border border-white/10 rounded-sm bg-grid flex items-center justify-center">
              <div
                className={`${current.shapeClass} transition-all duration-500 shadow-lg ${
                  fading ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none" />
            </div>

            <div className="flex flex-col gap-4 min-h-[120px]">
              <p
                className={`text-gray-300 text-sm md:text-base leading-relaxed font-sans transition-opacity duration-300 ${
                  fading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {current.desc}
              </p>
              <div
                className={`flex flex-wrap gap-4 font-mono text-xs font-bold text-white mt-auto transition-opacity duration-300 ${
                  fading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {current.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
