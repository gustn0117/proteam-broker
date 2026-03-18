const services = [
  {
    title: "Patent and Technology Brokerage",
    titleKo: "특허 및 기술 거래 중개",
    description:
      "We assist clients with building patent acquisitions, sales, and technology transfer campaigns. Our extensive network across Korea and global markets enables us to connect patent sellers with buyers efficiently.",
    descriptionKo:
      "특허 매입, 매각 및 기술 이전 캠페인을 지원합니다. 한국 및 글로벌 시장에서의 광범위한 네트워크를 통해 특허 매도자와 매수자를 효율적으로 연결합니다.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    title: "Patent Licensing Services",
    titleKo: "특허 라이센싱",
    description:
      "We help clients monetize their patent portfolios through strategic or litigation-driven licensing campaigns. Our team has extensive experience negotiating cross-border licensing agreements across the U.S., Europe, and Asia.",
    descriptionKo:
      "전략적 또는 소송 기반 라이센싱 캠페인을 통해 특허 포트폴리오의 수익화를 지원합니다. 미국, 유럽, 아시아 전역에서의 라이센싱 협상에 풍부한 경험을 보유하고 있습니다.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1450101499163-c8848e968ab7?w=800&q=80",
  },
  {
    title: "Patent Valuation",
    titleKo: "특허 가치평가",
    description:
      "We help clients understand patent value and competitive IP positioning within complex industries, via focused market research and patent landscaping initiatives.",
    descriptionKo:
      "집중적인 시장 조사 및 특허 랜드스케이프 분석을 통해 복잡한 산업 내에서의 특허 가치와 경쟁적 IP 포지셔닝을 이해하도록 돕습니다.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Patent Litigation Funding",
    titleKo: "특허 수익화, 소송 펀딩 등",
    description:
      "We partner with early-stage companies and patent holders to connect them with litigation funding resources, enabling strategic enforcement and monetization of IP assets.",
    descriptionKo:
      "초기 단계 기업 및 특허 보유자와 협력하여 소송 펀딩 자원을 연결하고, IP 자산의 전략적 행사 및 수익화를 지원합니다.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73b1e0e42cd?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold font-semibold text-xs tracking-[0.2em] mb-3">WHAT WE DO</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto mb-2">
            Pro &amp; Team IP provides comprehensive intellectual property
            services to help clients maximize the value of their patent portfolios.
          </p>
          <p className="text-white/40 max-w-xl mx-auto text-sm">
            고객의 특허 포트폴리오 가치를 극대화하기 위한 종합적인 IP 서비스를 제공합니다.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-10 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-[420px]">
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-navy/10 aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center text-navy mb-5">
                  {service.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-1">
                  {service.title}
                </h2>
                <p className="text-gold text-sm font-medium mb-5">{service.titleKo}</p>
                <p className="text-navy-400 leading-relaxed mb-3">
                  {service.description}
                </p>
                <p className="text-navy-200 text-sm leading-relaxed">
                  {service.descriptionKo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
