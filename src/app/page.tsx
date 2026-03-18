import Link from "next/link";

const sections = [
  {
    label: "OUR TEAM",
    labelKo: "팀 소개",
    href: "/team",
  },
  {
    label: "Services",
    labelKo: "업무 분야",
    href: "/services",
  },
  {
    label: "Fee Structure",
    labelKo: "서비스 비용",
    href: "/fee-structure",
  },
];

export default function HomePage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/40 via-transparent to-navy-dark/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <div className="w-12 h-[1px] bg-gold/50 mx-auto mb-8" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            PRO&TEAM IP
          </h1>
          <p className="text-white/30 text-xs tracking-[0.3em] mt-4 font-light">
            INTELLECTUAL PROPERTY
          </p>
          <div className="w-12 h-[1px] bg-gold/50 mx-auto mt-8" />
        </div>

        {/* Navigation */}
        <div className="mt-20 grid md:grid-cols-3 gap-[1px] bg-white/[0.06] rounded-2xl overflow-hidden max-w-3xl mx-auto animate-fade-up delay-2">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group relative bg-white/[0.03] backdrop-blur-sm px-8 py-10 hover:bg-white/[0.08] transition-all duration-500"
            >
              <h2 className="text-sm font-semibold text-white tracking-wide group-hover:text-gold transition-colors duration-500">
                {section.label}
              </h2>
              <p className="text-white/25 text-xs mt-2 font-light">{section.labelKo}</p>
              <div className="mt-6 flex items-center gap-2 text-white/0 group-hover:text-gold/60 transition-all duration-500">
                <div className="w-4 h-[0.5px] bg-current" />
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
