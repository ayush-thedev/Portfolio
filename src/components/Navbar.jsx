const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference pointer-events-none">
      <div className="pointer-events-auto">
        <span className="font-mono text-xl font-bold tracking-tighter text-white">
          Ayush Kant
        </span>
      </div>

      <div className="hidden md:flex items-center gap-2 font-mono text-xs tracking-widest pointer-events-auto absolute left-1/2 -translate-x-1/2">
        <span>✦</span>
        <span>Open To Work</span>
      </div>

      <div className="flex gap-4 font-mono text-xs pointer-events-auto">
        <a
          href="#about"
          className="px-6 py-2 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-colors rounded-none hidden sm:block"
        >
          ABOUT
        </a>
        <a
          href="#contact"
          className="px-6 py-2 border border-gray-700 hover:border-white hover:bg-white hover:text-black transition-colors rounded-none hidden sm:block"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
