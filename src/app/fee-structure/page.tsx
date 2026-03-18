const feeOptions = [
  { number: "1", title: "Time Charge Only (Hourly Rate)" },
  { number: "2", title: "Hybrid Model: Initial Fee + Success Fee" },
  { number: "3", title: "Contingency Model (Success Fee Only)" },
];

export default function FeeStructurePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Fee Structure
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {/* Intro */}
          <div className="mb-12">
            <p className="text-navy-400 text-lg leading-relaxed">
              We offer three flexible fee structures to empower our clients with strategic choices.
            </p>
            <p className="text-navy-300 mt-3 leading-relaxed">
              고객님께서 전략적인 선택을 하실 수 있도록 세 가지 유연한 수수료 체계를 운영하고 있습니다.
            </p>
          </div>

          {/* Fee Options */}
          <div>
            <h2 className="text-sm font-semibold text-navy-300 tracking-wider mb-6">
              Service Fee Options
            </h2>
            <div className="space-y-4">
              {feeOptions.map((option) => (
                <div
                  key={option.number}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-8 py-5 flex items-center gap-5"
                >
                  <span className="text-2xl font-bold text-navy/20">
                    {option.number}.
                  </span>
                  <h3 className="text-lg font-semibold text-navy">
                    {option.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
