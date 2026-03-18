const services = [
  { title: "Patent and Technology Brokerage", titleKo: "특허 및 기술 거래 중개" },
  { title: "Patent Licensing Services", titleKo: "특허 라이센싱" },
  { title: "Patent Valuation", titleKo: "특허 가치평가" },
  { title: "Patent Litigation Funding", titleKo: "특허 수익화, 소송 펀딩 등" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero with photo */}
      <section className="relative h-[340px] md:h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73b1e0e42cd?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
          <p className="text-gold/60 text-[11px] font-medium tracking-[0.25em] mb-4">WHAT WE DO</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Services</h1>
          <p className="text-white/30 text-sm mt-3 font-light">업무 분야</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="space-y-0 divide-y divide-navy/[0.04]">
            {services.map((service, index) => (
              <div
                key={index}
                className="group py-8 first:pt-0 last:pb-0"
              >
                <div className="flex items-start gap-6">
                  <span className="text-[11px] font-semibold text-navy/15 tracking-wider mt-1 flex-shrink-0 w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-navy tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-navy/30 text-sm mt-1.5 font-light">
                      {service.titleKo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
