const services = [
  { title: "Patent and Technology Brokerage", titleKo: "특허 및 기술 거래 중개" },
  { title: "Patent Licensing Services", titleKo: "특허 라이센싱" },
  { title: "Patent Valuation", titleKo: "특허 가치평가" },
  { title: "Patent Litigation Funding", titleKo: "특허 수익화, 소송 펀딩 등" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73b1e0e42cd?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Services
          </h1>
          <p className="text-white/50 mt-2">업무 분야</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl px-8 py-6"
            >
              <h2 className="text-lg font-bold text-navy">
                {service.title}
              </h2>
              <p className="text-navy-300 text-sm mt-1">
                ({service.titleKo})
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
