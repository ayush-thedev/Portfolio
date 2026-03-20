const principles = [
  { num: '01', title: 'CONSTRAINED BY DESIGN', label: '[PRINCIPLE]' },
  { num: '02', title: 'SYSTEMS OVER SURFACES', label: '[PROCESS]' },
  { num: '03', title: 'TYPOGRAPHY AS A TEXTURE', label: '[APPROACH]' },
];

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-brand-bg py-24 px-8 border-t border-brand-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left column */}
        <div className="flex flex-col">
          <h3 className="font-mono text-brand-orange tracking-widest text-sm uppercase mb-16">
            Years in the field
          </h3>
          <div className="flex flex-col mb-24">
            <span className="font-pixel text-[150px] md:text-[200px] leading-none text-white tracking-tighter mb-4">
              0+
            </span>
            <span className="font-mono text-gray-400 tracking-widest uppercase">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-gray-600 text-xs tracking-widest mb-4">
              PREVIOUSLY AT
            </span>
            <span className="font-mono text-gray-300 tracking-widest">GSSOC / CSI</span>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col pt-2 lg:pt-0">
          <h3 className="font-mono text-brand-orange tracking-widest text-sm uppercase mb-16">
            Design Philosophy
          </h3>
          <div className="prose prose-invert max-w-none mb-20 font-sans text-xl md:text-2xl leading-relaxed text-gray-400">
            <p className="mb-8">
              Hey! This is <strong className="text-white font-semibold">Ayush</strong> and I love building and designing things. I'm eager at blending contrasts with designs which shouldn't usually work. Like <strong className="text-white font-semibold">Neo-Brutalism with minimalism</strong> is what you're looking at right now.
            </p>
            <p>
              When I'm not doing either of these I'm probably <strong className="text-white font-semibold">listening to music</strong> or coming up with a one-liner to log a film on <strong className="text-white font-semibold">Letterboxd</strong>.
            </p>
          </div>

          {/* Principles list */}
          <div className="flex flex-col font-mono text-sm md:text-base border-t border-brand-border">
            {principles.map((p) => (
              <div
                key={p.num}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-brand-border group hover:bg-white/5 transition-colors px-4 -mx-4 rounded-sm"
              >
                <div className="flex items-center gap-8 mb-2 sm:mb-0">
                  <span className="text-brand-orange">{p.num}</span>
                  <span className="text-white font-bold tracking-widest">{p.title}</span>
                </div>
                <span className="text-gray-600 group-hover:text-gray-400 transition-colors">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
