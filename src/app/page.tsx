import Link from "next/link";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Patent & Technology Brokerage",
    titleKo: "특허 및 기술 거래 중개",
    description:
      "Facilitate patent acquisitions, sales, and technology transfers between global entities with our extensive network.",
    href: "/services",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Patent Licensing Services",
    titleKo: "특허 라이센싱",
    description:
      "Strategic and litigation-driven licensing campaigns to maximize the value of your patent portfolio.",
    href: "/services",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Patent Valuation",
    titleKo: "특허 가치평가",
    description:
      "Understand the true value and competitive positioning of your IP within complex industries.",
    href: "/services",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark pt-20">
        {/* Background gradient effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Giving Ideas{" "}
            <span className="text-primary italic">Value</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
            Pro &amp; Team IP bridges intellectual property with strategic value
            through expert patent brokerage, licensing, and advisory services.
          </p>
          <p className="text-base text-gray-500 mb-10 max-w-xl mx-auto">
            전문적인 특허 중개, 라이센싱, 자문 서비스를 통해 지적 재산에 전략적 가치를 부여합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm tracking-wide"
            >
              OUR SERVICES
            </Link>
            <Link
              href="/team"
              className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors text-sm tracking-wide"
            >
              MEET OUR TEAM
            </Link>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="bg-dark-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Clients can retain Pro &amp; Team IP to partner on IP-based engagements
            through the following service offerings:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-dark group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-6 -mt-14 mx-auto shadow-lg shadow-primary/30">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 text-center mb-4">
                  {service.titleKo}
                </p>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 text-center">
                  <Link
                    href={service.href}
                    className="inline-block px-6 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary-dark transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experienced & Knowledgeable Section */}
      <section className="bg-primary pattern-overlay py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold italic text-white mb-6 tracking-wide">
            EXPERIENCED &amp; KNOWLEDGEABLE
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
            With over 50 years of combined experience in the intellectual
            property field, our founders bring deep expertise in patent
            transactions, licensing, and cross-border negotiations across the
            U.S., Europe, and Asia.
          </p>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            50년 이상의 IP 분야 경험을 바탕으로, 미국, 유럽, 아시아를 아우르는
            특허 거래 및 라이센싱 전문 서비스를 제공합니다.
          </p>
        </div>
      </section>

      {/* Fourth Service Card */}
      <section className="bg-dark py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-dark-light border border-gray-700 rounded-xl p-10 hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-6 mx-auto">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Patent Litigation Funding</h3>
            <p className="text-gray-500 mb-4">특허 수익화, 소송 펀딩 등</p>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              Connect patent holders with litigation funding resources to
              monetize IP assets through strategic enforcement and partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-light py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to unlock the value of your <span className="text-primary">IP</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us to discuss your patent portfolio and strategic options.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors tracking-wide"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </>
  );
}
