const feeOptions = [
  {
    number: "01",
    title: "Time Charge Only",
    subtitle: "Hourly Rate",
    description:
      "A straightforward hourly billing model. Clients are charged based on the time spent on their matter at our standard hourly rates.",
    features: [
      "Transparent billing",
      "Pay for time spent",
      "Standard hourly rates",
      "Suitable for advisory work",
    ],
  },
  {
    number: "02",
    title: "Hybrid Model",
    subtitle: "Initial Fee + Success Fee",
    description:
      "A balanced approach combining an upfront retainer with a performance-based success fee upon achieving specific milestones or outcomes.",
    features: [
      "Reduced upfront cost",
      "Aligned incentives",
      "Milestone-based payments",
      "Best for licensing campaigns",
    ],
    highlighted: true,
  },
  {
    number: "03",
    title: "Contingency Model",
    subtitle: "Success Fee Only",
    description:
      "A fully performance-based model where fees are paid only upon successful completion. Ideal for clients seeking risk-free engagement.",
    features: [
      "No upfront cost",
      "100% performance-based",
      "Risk-free for clients",
      "Ideal for litigation funding",
    ],
  },
];

export default function FeeStructurePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold font-semibold text-xs tracking-[0.2em] mb-3">PRICING</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fee Structure
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto mb-2">
            We offer three flexible fee structures to empower our clients with
            strategic choices.
          </p>
          <p className="text-white/40 max-w-xl mx-auto text-sm">
            고객님께서 전략적인 선택을 하실 수 있도록 세 가지 유연한 수수료 체계를 운영하고 있습니다.
          </p>
        </div>
      </section>

      {/* Fee Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gold font-semibold text-xs tracking-[0.2em] mb-12">
            SERVICE FEE OPTIONS
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {feeOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 relative transition-all duration-300 hover:-translate-y-2 ${
                  option.highlighted
                    ? "bg-navy text-white shadow-2xl shadow-navy/30 scale-[1.02]"
                    : "bg-white border border-gray-200 text-navy shadow-lg shadow-navy/5"
                }`}
              >
                {option.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy-dark text-xs font-bold px-5 py-1.5 rounded-full">
                    RECOMMENDED
                  </div>
                )}

                <div
                  className={`text-5xl font-bold mb-6 ${
                    option.highlighted ? "text-white/15" : "text-navy/10"
                  }`}
                >
                  {option.number}
                </div>

                <h3 className="text-xl font-bold mb-1">{option.title}</h3>
                <p
                  className={`text-sm mb-5 ${
                    option.highlighted ? "text-gold" : "text-gold-dark"
                  }`}
                >
                  {option.subtitle}
                </p>

                <p
                  className={`text-sm leading-relaxed mb-8 ${
                    option.highlighted ? "text-white/70" : "text-navy-300"
                  }`}
                >
                  {option.description}
                </p>

                <ul className="space-y-3">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${
                          option.highlighted ? "text-gold" : "text-navy"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={
                          option.highlighted ? "text-white/80" : "text-navy-400"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
