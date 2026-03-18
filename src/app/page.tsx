import Link from "next/link";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Patent & Technology Brokerage",
    titleKo: "특허 및 기술 거래 중개",
    description:
      "Facilitate patent acquisitions, sales, and technology transfers between global entities with our extensive network.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Patent Licensing Services",
    titleKo: "특허 라이센싱",
    description:
      "Strategic and litigation-driven licensing campaigns to maximize the value of your patent portfolio.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Patent Valuation",
    titleKo: "특허 가치평가",
    description:
      "Understand the true value and competitive positioning of your IP within complex industries.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Patent Litigation Funding",
    titleKo: "특허 소송 펀딩",
    description:
      "Connect patent holders with litigation funding resources to monetize IP assets through strategic enforcement.",
  },
];

const stats = [
  { number: "50+", label: "Years Combined Experience", labelKo: "누적 경력" },
  { number: "3", label: "Global Regions Covered", labelKo: "글로벌 지역" },
  { number: "100+", label: "Successful Transactions", labelKo: "성공 거래" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/30 rounded-full mb-8">
              <span className="text-gold-light text-xs font-semibold tracking-wider">
                PATENT BROKERAGE &amp; IP STRATEGY
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Giving Ideas
              <br />
              <span className="text-gold italic">Value</span>.
            </h1>
            <p className="text-lg text-white/70 mb-3 leading-relaxed max-w-xl">
              Pro &amp; Team IP bridges intellectual property with strategic value
              through expert patent brokerage, licensing, and advisory services.
            </p>
            <p className="text-sm text-white/40 mb-10 max-w-lg">
              전문적인 특허 중개, 라이센싱, 자문 서비스를 통해 지적 재산에 전략적 가치를 부여합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="px-8 py-4 bg-gold text-navy-dark font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm tracking-wider text-center"
              >
                OUR SERVICES
              </Link>
              <Link
                href="/team"
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm tracking-wider text-center"
              >
                MEET OUR TEAM
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-gold">{stat.number}</p>
                  <p className="text-white/70 text-xs md:text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-xs tracking-[0.2em] mb-3">WHAT WE DO</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Services
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              Clients can retain Pro &amp; Team IP to partner on IP-based engagements
              through the following service offerings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-navy hover:shadow-2xl hover:shadow-navy/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center text-navy mb-6 group-hover:bg-white/10 group-hover:text-gold transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-1 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-navy-300 mb-3 group-hover:text-gold/70 transition-colors">
                  {service.titleKo}
                </p>
                <p className="text-navy-300 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-dark transition-colors text-sm tracking-wider"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section with Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-semibold text-xs tracking-[0.2em] mb-4">WHY CHOOSE US</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Experienced &<br />Knowledgeable
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                With over 50 years of combined experience in the intellectual
                property field, our founders bring deep expertise in patent
                transactions, licensing, and cross-border negotiations across the
                U.S., Europe, and Asia.
              </p>
              <p className="text-white/40 leading-relaxed">
                50년 이상의 IP 분야 경험을 바탕으로, 미국, 유럽, 아시아를 아우르는
                특허 거래 및 라이센싱 전문 서비스를 제공합니다.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <p className="text-4xl font-bold text-gold mb-2">32+</p>
                <p className="text-white/60 text-sm">Years in IP<br />Oh-jin Kwon</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mt-8">
                <p className="text-4xl font-bold text-gold mb-2">20+</p>
                <p className="text-white/60 text-sm">Years in IP<br />Sean Lee</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <p className="text-4xl font-bold text-gold mb-2">3</p>
                <p className="text-white/60 text-sm">Continents<br />Covered</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mt-8">
                <p className="text-4xl font-bold text-gold mb-2">IP</p>
                <p className="text-white/60 text-sm">Full-Spectrum<br />Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-xs tracking-[0.2em] mb-3">HOW WE WORK</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your IP portfolio and strategic goals" },
              { step: "02", title: "Analysis", desc: "Evaluate patent value and market positioning" },
              { step: "03", title: "Strategy", desc: "Develop optimal monetization or acquisition plan" },
              { step: "04", title: "Execution", desc: "Negotiate and close deals with our global network" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center mx-auto mb-5 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-navy-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to unlock the value of your IP?
          </h2>
          <p className="text-white/60 mb-4">
            Contact us to discuss your patent portfolio and strategic options.
          </p>
          <p className="text-white/40 text-sm mb-10">
            특허 포트폴리오와 전략적 옵션에 대해 상담하세요.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gold text-navy-dark font-semibold rounded-lg hover:bg-gold-light transition-colors tracking-wider text-sm"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </>
  );
}
