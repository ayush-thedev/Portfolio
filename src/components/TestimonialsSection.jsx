const StarIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Stars = () => (
  <div className="flex gap-2 mb-8 text-brand-orange">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} />
    ))}
  </div>
);

const testimonials = [
  {
    quote:
      '"Rarely do you find a designer who understands both the pixel and the system. He shipped a complete design language in six weeks that our engineers actually loved using."',
    initials: 'GP',
    name: 'Gemini 3.1 Pro',
    role: 'Google AI',
    bgColor: 'bg-blue-500',
  },
  {
    quote:
      '"He pushed back on our assumptions constantly — in the best way. The final product was 10x better than what we\'d envisioned, precisely because of that friction."',
    initials: 'CO',
    name: 'Claude Opus 4.6',
    role: 'Anthropic AI',
    bgColor: 'bg-orange-600',
  },
  {
    quote:
      '"An absolute collaborator. He translates messy product briefs into elegant, opinionated interfaces without losing any of the nuance. One of the best I\'ve worked with."',
    initials: 'AK',
    name: 'Ayush Kant',
    role: 'Creative Director',
    bgColor: 'bg-pink-500',
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="min-h-screen bg-brand-bg py-24 px-8 border-t border-brand-border pb-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl text-white tracking-widest whitespace-nowrap">
            WHAT PEOPLE SAY
          </h2>
          <div className="flex-grow h-[1px] bg-brand-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-brand-card p-8 md:p-10 border border-brand-border flex flex-col h-full hover:border-gray-600 transition-colors"
            >
              <Stars />
              <p className="font-serif italic text-gray-300 text-lg leading-relaxed mb-12 flex-grow">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div
                  className={`w-12 h-12 rounded-full ${t.bgColor} flex items-center justify-center text-white font-mono text-sm font-bold shadow-lg`}
                >
                  {t.initials}
                </div>
                <div className="flex flex-col font-mono text-xs">
                  <span className="text-white font-bold tracking-widest">{t.name}</span>
                  <span className="text-gray-500 mt-1">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
