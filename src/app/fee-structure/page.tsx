const feeOptions = [
  { number: "01", title: "Time Charge Only", subtitle: "Hourly Rate" },
  { number: "02", title: "Hybrid Model", subtitle: "Initial Fee + Success Fee" },
  { number: "03", title: "Contingency Model", subtitle: "Success Fee Only" },
];

export default function FeeStructurePage() {
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
          <p className="text-gold/70 text-[11px] font-semibold tracking-[0.2em] mb-3">PRICING</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Fee Structure</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#FAFBFC]">
        <div className="max-w-3xl mx-auto px-6">
          {/* Intro */}
          <div className="bg-white rounded-2xl border border-gray-100 px-8 py-8 mb-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <p className="text-navy/70 leading-[1.8]">
              We offer three flexible fee structures to empower our clients with strategic choices.
            </p>
            <p className="text-navy/40 text-sm leading-[1.8] mt-3">
              고객님께서 전략적인 선택을 하실 수 있도록 세 가지 유연한 수수료 체계를 운영하고 있습니다.
            </p>
          </div>

          {/* Fee Options */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-navy/30 mb-5 px-1">
              SERVICE FEE OPTIONS
            </p>
            <div className="space-y-3">
              {feeOptions.map((option) => (
                <div
                  key={option.number}
                  className="group bg-white border border-gray-100 rounded-xl px-7 py-6 flex items-center gap-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-navy/10 hover:shadow-[0_4px_12px_rgba(27,42,74,0.06)] transition-all duration-300"
                >
                  <span className="text-3xl font-bold text-navy/[0.07] group-hover:text-navy/[0.12] transition-colors flex-shrink-0 w-10">
                    {option.number}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-navy">
                      {option.title}
                    </h3>
                    <p className="text-navy/35 text-sm mt-0.5">{option.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
