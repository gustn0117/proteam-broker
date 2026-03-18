const services = [
  {
    title: "Patent and Technology Brokerage",
    titleKo: "특허 및 기술 거래 중개",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Patent Licensing Services",
    titleKo: "특허 라이센싱",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Patent Valuation",
    titleKo: "특허 가치평가",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Patent Litigation Funding",
    titleKo: "특허 수익화, 소송 펀딩 등",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-14 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-gold/70 text-[11px] font-semibold tracking-[0.2em] mb-3">WHAT WE DO</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Services</h1>
          <p className="text-white/35 text-sm mt-2">업무 분야</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-[#FAFBFC]">
        <div className="max-w-2xl mx-auto px-6 space-y-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-xl px-6 py-5 flex items-center gap-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-navy/10 hover:shadow-[0_4px_12px_rgba(27,42,74,0.06)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-navy/[0.04] flex items-center justify-center text-navy/40 flex-shrink-0 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <div>
                <h2 className="text-[15px] font-semibold text-navy group-hover:text-navy transition-colors">
                  {service.title}
                </h2>
                <p className="text-navy/35 text-sm mt-0.5">
                  {service.titleKo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
