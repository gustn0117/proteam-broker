const feeOptions = [
  { number: "1", title: "Time Charge Only", subtitle: "Hourly Rate" },
  { number: "2", title: "Hybrid Model", subtitle: "Initial Fee + Success Fee" },
  { number: "3", title: "Contingency Model", subtitle: "Success Fee Only" },
];

export default function FeeStructurePage() {
  return (
    <>
      {/* Hero with photo */}
      <section className="relative h-[340px] md:h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
          <p className="text-gold/60 text-[11px] font-medium tracking-[0.25em] mb-4">PRICING</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Fee Structure</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          {/* Intro */}
          <div className="mb-16">
            <p className="text-navy text-[17px] leading-[1.9] font-light">
              We offer three flexible fee structures to empower our clients with strategic choices.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-6 h-[1px] bg-gold/50" />
            <p className="text-[10px] font-semibold tracking-[0.25em] text-navy/50">
              SERVICE FEE OPTIONS
            </p>
          </div>

          {/* Fee Options */}
          <div className="space-y-0 divide-y divide-navy/[0.04]">
            {feeOptions.map((option) => (
              <div
                key={option.number}
                className="py-7 first:pt-0 last:pb-0 flex items-baseline gap-6"
              >
                <span className="text-3xl font-bold text-navy/[0.15] flex-shrink-0 tabular-nums w-10">
                  {option.number}.
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold text-navy tracking-tight">
                    {option.title}
                  </h3>
                  <p className="text-navy/60 text-sm mt-1">{option.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
