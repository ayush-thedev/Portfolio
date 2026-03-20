import { useState } from 'react';

const expData = [
  {
    shapeClass: 'w-32 h-32 md:w-48 md:h-48 bg-[#3b82f6] rotate-12',
    org: 'COMPUTER SOCIETY OF INDIA',
    date: 'Aug 2025 - Present',
    desc: 'Marketing Core Team Member at CSI MIT-WPU Chapter. Driving marketing strategies and outreach initiatives for the student community.',
    tags: ['[MARKETING]', '[FULL-TIME]'],
  },
  {
    shapeClass: 'w-32 h-32 md:w-48 md:h-48 bg-[#f97316] rounded-full scale-110',
    org: 'GSSOC OPEN SOURCE',
    date: 'Jul 2025 - Oct 2025',
    desc: 'Ranked in the top 1000 out of 12,000 participants as an Open Source Contributor. Contributing to open source projects and building skills in collaborative development.',
    tags: ['[OPEN SOURCE]', '[PART-TIME]'],
  },
];

const expNames = ['CSI CHAPTER,', 'GSSOC CONTRIBUTOR'];

const ExperienceSection = () => {
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

  const current = expData[activeIndex];

  return (
    <section id="experience" className="min-h-screen bg-[#F5F5F5] py-24 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="border-t border-black/10 w-full mb-12" />
        <div className="font-sans text-4xl text-black tracking-tight text-center font-semibold uppercase">
          02 ITEMS
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Experience list */}
        <div className="lg:col-span-7 flex flex-col gap-2 relative z-10">
          <h3 className="font-mono text-sm tracking-widest text-gray-400 mb-4 uppercase">
            <span className="inline-block bg-black text-white px-3 py-1">[EXPERIENCE]</span>
          </h3>
          {expNames.map((name, i) => (
            <a
              key={i}
              //href="#"
              className={`exp-item block text-5xl md:text-7xl lg:text-[80px] font-black uppercase tracking-tighter leading-[0.9] hover:pl-4 transition-all duration-300 ${
                i === activeIndex ? 'active text-black' : 'text-gray-400 hover:text-black'
              }`}
              onMouseEnter={() => handleHover(i)}
              onClick={(e) => e.preventDefault()}
            >
              {name}
            </a>
          ))}
        </div>

        {/* Detail card */}
        <div className="lg:col-span-5 relative z-10">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl border border-black/5 relative group transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="w-full aspect-[4/3] bg-[#0a0a0a] mb-6 relative overflow-hidden border border-black/10 rounded-sm bg-grid flex items-center justify-center">
              <div
                className={`${current.shapeClass} transition-all duration-500 shadow-lg ${
                  fading ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none" />
            </div>

            <div className="flex flex-col gap-4 min-h-[120px]">
              <div
                className={`flex items-center justify-between transition-opacity duration-300 ${
                  fading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <span className="font-mono text-xs text-gray-500 tracking-widest">{current.org}</span>
                <span className="font-mono text-xs text-gray-400">{current.date}</span>
              </div>
              <p
                className={`text-gray-700 text-sm md:text-base leading-relaxed font-sans transition-opacity duration-300 ${
                  fading ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {current.desc}
              </p>
              <div
                className={`flex flex-wrap gap-4 font-mono text-xs font-bold text-gray-800 mt-auto transition-opacity duration-300 ${
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

export default ExperienceSection;
