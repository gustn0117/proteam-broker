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
      <section className="bg-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fee <span className="text-primary">Structure</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-3">
            We offer three flexible fee structures to empower our clients with
            strategic choices.
          </p>
          <p className="text-gray-500 max-w-xl mx-auto">
            고객님께서 전략적인 선택을 하실 수 있도록 세 가지 유연한 수수료 체계를
            운영하고 있습니다.
          </p>
        </div>
      </section>

      {/* Fee Cards */}
      <section className="bg-dark-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-sm font-semibold text-primary tracking-widest mb-12">
            SERVICE FEE OPTIONS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {feeOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 relative transition-transform hover:-translate-y-2 duration-300 ${
                  option.highlighted
                    ? "bg-primary text-white border-2 border-primary"
                    : "bg-dark border border-gray-700 text-white"
                }`}
              >
                {option.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-4 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                )}

                <div
                  className={`text-4xl font-bold mb-4 ${
                    option.highlighted ? "text-white/30" : "text-primary/30"
                  }`}
                >
                  {option.number}
                </div>

                <h3 className="text-xl font-bold mb-1">{option.title}</h3>
                <p
                  className={`text-sm mb-4 ${
                    option.highlighted ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {option.subtitle}
                </p>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    option.highlighted ? "text-white/80" : "text-gray-400"
                  }`}
                >
                  {option.description}
                </p>

                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${
                          option.highlighted ? "text-white" : "text-primary"
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
                          option.highlighted ? "text-white/90" : "text-gray-300"
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
