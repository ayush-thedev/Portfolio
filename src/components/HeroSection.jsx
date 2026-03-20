const GameboyFloat = () => (
  <div className="absolute top-[15%] left-[5%] md:left-[12%] w-32 md:w-48 h-48 md:h-72 bg-[#4a7de8] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-[2rem] border-[6px] border-[#1a1a1a] shadow-2xl -rotate-12 animate-float-slow z-0 flex flex-col items-center pt-4 md:pt-6">
    {/* Screen housing */}
    <div className="w-[85%] h-[45%] bg-[#2a2a2a] rounded-t-lg rounded-bl-lg rounded-br-[1.5rem] border-4 border-[#1a1a1a] flex items-center justify-center p-2">
      <div className="w-full h-full bg-[#c4dbac] border-2 border-[#8ba373] shadow-inner relative overflow-hidden">
        <div className="absolute top-1 right-1 w-2 h-2 bg-[#1a1a1a] rounded-full animate-pulse" />
        <div
          className="absolute bottom-2 left-2 w-4 h-1 bg-[#1a1a1a] rounded-full animate-pulse"
          style={{ animationDelay: '0.2s' }}
        />
        <div
          className="absolute bottom-4 left-2 w-6 h-1 bg-[#1a1a1a] rounded-full animate-pulse"
          style={{ animationDelay: '0.4s' }}
        />
      </div>
    </div>
    {/* Controls */}
    <div className="w-full flex-grow relative mt-4">
      {/* D-pad */}
      <div className="absolute left-4 top-4 w-12 h-12">
        <div className="absolute top-1/2 left-0 w-full h-4 bg-[#1a1a1a] -translate-y-1/2 rounded-sm shadow-md" />
        <div className="absolute left-1/2 top-0 h-full w-4 bg-[#1a1a1a] -translate-x-1/2 rounded-sm shadow-md" />
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#2a2a2a] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </div>
      {/* Buttons */}
      <div className="absolute right-4 top-6 flex gap-2 -rotate-12">
        <div className="w-5 h-5 md:w-6 md:h-6 bg-[#d93838] rounded-full border-2 border-[#1a1a1a] shadow-sm transform translate-y-3" />
        <div className="w-5 h-5 md:w-6 md:h-6 bg-[#d93838] rounded-full border-2 border-[#1a1a1a] shadow-sm" />
      </div>
      {/* Speaker grills */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 rotate-12">
        <div className="w-8 h-2 bg-[#1a1a1a] rounded-full transform -skew-x-12" />
        <div className="w-8 h-2 bg-[#1a1a1a] rounded-full transform -skew-x-12" />
      </div>
    </div>
  </div>
);

const CardStackFloat = () => (
  <div className="absolute top-[20%] right-[10%] md:right-[20%] w-32 md:w-48 h-24 md:h-32 bg-white border-[4px] border-[#1a1a1a] transform rotate-12 -skew-x-12 animate-float-med z-0 shadow-xl flex items-center justify-center relative">
    <div className="absolute top-1 left-1 w-full h-full border-[4px] border-[#1a1a1a] -z-10 bg-gray-200" />
    <div className="absolute top-2 left-2 w-full h-full border-[4px] border-[#1a1a1a] -z-20 bg-gray-300" />
    <div className="w-[80%] h-[70%] border-2 border-[#1a1a1a] flex flex-col relative overflow-hidden">
      <div className="w-full h-1/4 bg-[#ea00d9] border-b-2 border-[#1a1a1a]" />
      <div className="p-2 flex flex-col gap-1">
        <div className="w-[60%] h-1 bg-gray-300" />
        <div className="w-[80%] h-1 bg-gray-300" />
        <div className="w-[40%] h-1 bg-gray-300" />
      </div>
    </div>
  </div>
);

const SpinningDisc = () => (
  <div
    className="absolute top-1/2 -translate-y-1/2 right-[5%] md:right-[8%] w-32 h-32 md:w-40 md:h-40 rounded-full border-[6px] border-[#1a1a1a] z-20 overflow-hidden shadow-2xl animate-cd-spin"
    style={{
      background:
        'conic-gradient(#ffffff 0deg 90deg, #1a1a1a 90deg 180deg, #dfff00 180deg 270deg, #00d970 270deg 360deg)',
    }}
  >
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-brand-bg rounded-full border-[4px] border-[#1a1a1a]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#1a1a1a] rounded-full" />
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-[120vh] flex flex-col items-center overflow-hidden py-32">
      {/* Main text */}
      <div className="z-10 text-center relative pointer-events-none flex flex-col items-center justify-center">
        <h1 className="font-pixel text-[120px] md:text-[200px] leading-[0.8] text-white pixel-text-shadow tracking-tight">
          CREATIVE
        </h1>
        <h1 className="font-pixel text-[120px] md:text-[200px] leading-[0.8] text-white pixel-text-shadow tracking-tight -mt-4 md:-mt-8">
          DIRECTOR
        </h1>
        <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/60 mt-4 md:mt-6 uppercase">
          Frontend Developer | UI/UX Designer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 relative z-50 pointer-events-auto">
          <a
            href="#work"
            className="px-10 py-4 bg-white text-black font-sans text-sm font-bold tracking-widest hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 uppercase shadow-xl shadow-white/10"
          >
            VIEW WORK
          </a>
          <a
            href="/Portfolio/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-transparent text-white font-sans text-sm font-bold tracking-widest border-2 border-white hover:bg-white hover:text-black transition-all duration-300 uppercase"
          >
            RESUME
          </a>
        </div>
      </div>

      {/* Floating decorative elements */}
      <GameboyFloat />
      <CardStackFloat />
      <SpinningDisc />
    </section>
  );
};

export default HeroSection;
