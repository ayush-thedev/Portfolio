import { useState, useRef } from 'react';

const contactLinks = [
  { icon: '@', text: 'ayush.acads@gmail.com', href: 'mailto:ayush.acads@gmail.com' },
  { icon: 'GH', text: 'ayush-thedev', href: 'https://github.com/ayush-thedev' },
  { icon: 'LI', text: '/in/ayush-kant', href: 'https://www.linkedin.com/in/ayush-kant/' },
  { icon: 'X', text: '@yush_dev', href: 'https://x.com/yush_dev' },
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      if (formRef.current) formRef.current.reset();
    }, 4000);
  };

  return (
    <section id="contact" className="relative bg-brand-bg border-t-[8px] border-[#1a1a1a]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left - Info */}
        <div className="p-12 md:p-20 lg:p-24 flex flex-col justify-center border-b-[8px] lg:border-b-0 lg:border-r-[8px] border-[#1a1a1a]">
          <div className="max-w-md">
            <h3 className="font-mono text-brand-orange tracking-[0.3em] text-xs uppercase mb-8 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-brand-orange" />
              SEND A SIGNAL
            </h3>
            <h2 className="font-pixel text-5xl md:text-6xl lg:text-7xl text-white leading-none tracking-tight mb-6 pixel-text-shadow">
              MAKE
              <br />
              contact
            </h2>
            <p className="font-sans text-gray-400 text-lg leading-relaxed">
              Looking to collaborate or just want to talk pixels? Fill out the form and I&apos;ll beam
              back a response.
            </p>

            <div className="mt-12 space-y-4 font-mono text-sm">
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer group"
                >
                  <span className="w-8 h-8 border-2 border-white/20 group-hover:border-white flex items-center justify-center transition-colors">
                    {link.icon}
                  </span>
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="p-12 md:p-20 lg:p-24 flex flex-col justify-center bg-[#0a0a0a] relative overflow-hidden">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="space-y-2">
              <label className="block font-mono text-xs tracking-[0.2em] text-gray-500 uppercase">
                NAME_00
              </label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-0 border-b-2 border-gray-700 py-4 text-white font-mono text-lg focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-700"
                placeholder="YOUR//IDENTITY"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs tracking-[0.2em] text-gray-500 uppercase">
                EMAIL_01
              </label>
              <input
                type="email"
                required
                className="w-full bg-transparent border-0 border-b-2 border-gray-700 py-4 text-white font-mono text-lg focus:outline-none focus:border-brand-orange transition-colors placeholder:text-gray-700"
                placeholder="YOUR//DIGITAL_ADDRESS"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs tracking-[0.2em] text-gray-500 uppercase">
                MESSAGE_02
              </label>
              <textarea
                rows="4"
                required
                className="w-full bg-transparent border-0 border-b-2 border-gray-700 py-4 text-white font-mono text-lg focus:outline-none focus:border-brand-orange transition-colors resize-none placeholder:text-gray-700"
                placeholder="TRANSMIT//YOUR_THOUGHTS"
              />
            </div>

            <button
              type="submit"
              className={`w-full md:w-auto px-12 py-5 font-sans text-sm font-bold tracking-[0.3em] border-2 transition-all duration-300 uppercase ${
                submitted
                  ? 'bg-transparent text-[#10b981] border-[#10b981] cursor-default'
                  : 'bg-white text-black border-white hover:bg-brand-orange hover:text-white hover:border-brand-orange'
              }`}
            >
              {submitted ? 'TRANSMITTED ✓' : 'INITIATE // TRANSMISSION'}
            </button>
          </form>

          {/* Status icon */}
          <div className="absolute top-8 right-8 md:top-16 md:right-16 w-16 h-16 flex items-center justify-center opacity-80 transition-all duration-500 pointer-events-none">
            {submitted ? (
              <svg
                className="w-16 h-16 text-[#10b981] animate-pulse"
                style={{ filter: 'drop-shadow(0 0 8px rgba(16,185,129,0.5))' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="square"
                strokeLinejoin="miter"
              >
                <path d="M4 12l5 5L20 6" />
              </svg>
            ) : (
              <svg
                className="w-12 h-12 text-[#dfff00] animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="square"
                strokeLinejoin="miter"
              >
                <path d="M21 3H3v14h5v4l4-4h9V3z" />
              </svg>
            )}
          </div>

          {/* Decorative circle */}
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-[#e85d04] rounded-full border-4 border-[#1a1a1a] -rotate-12 opacity-80 pointer-events-none" />
        </div>
      </div>

      {/* Footer */}
      <div className="border-t-[8px] border-[#1a1a1a] bg-brand-bg py-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-pixel text-white text-xl">Ayush Kant</span>
          <span className="font-mono text-gray-500 text-xs tracking-widest" />
          <span className="font-mono text-gray-600 text-xs">© 2026</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

