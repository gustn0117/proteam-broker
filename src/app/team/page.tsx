const teamMembers = [
  {
    name: "Oh-jin Kwon",
    nameKo: "권오진",
    title: "Founder & President",
    titleKo: "공동 대표",
    bioEn:
      "With over 32 years of experience in the Intellectual Property (IP) field, I have developed extensive expertise in patent transactions and licensing. I maintain a robust network across Korea, encompassing major corporations, universities, research institutes, and startups.",
    career: [
      "2026 – Present: Pro & Team IP",
      "2017~2026: KIM & CHANG Law Firm, IP Team (Attorney at Law, member of Washington D.C. Bar)",
      "2016~2017: Seoul Semiconductor, IP Team",
      "2015~2016: KCC, IP Team",
      "1994~2013: Samsung Electro-Mechanics, IP Team",
    ],
    initials: "OJK",
  },
  {
    name: "Sean (Seunghun) Lee",
    nameKo: "이승헌",
    title: "Founder & President",
    titleKo: "공동 대표",
    bioEn:
      "A global IP expert with 20+ years of experience in patent licensing and cross-border negotiations across the U.S., Europe, and Asia. Specialized in high-tech sectors including batteries, semiconductors, IT platforms, and SEPs. Leveraging a premier network of IP decision-makers built over two decades at a leading Korean law firm, I provide strategic bridges to maximize IP value and facilitate global transactions.",
    career: [
      "2026 – Present: Managing Patent Attorney, Pro & Team IP",
      "2015 – 2026: Head of Overseas Dispute Team, Kim & Chang",
      "2006 – 2015: Electronics Division, Kim & Chang",
    ],
    initials: "SHL",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero with photo */}
      <section className="relative h-[340px] md:h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
          <p className="text-gold/60 text-[11px] font-medium tracking-[0.25em] mb-4">LEADERSHIP</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">OUR TEAM</h1>
        </div>
      </section>

      {/* Team Members - Side by Side */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index}>
                {/* Pattern Avatar */}
                <div className="pattern-avatar rounded-2xl aspect-[4/3] relative flex items-center justify-center overflow-hidden mb-8">
                  <div className="w-24 h-24 rounded-full bg-white/70 backdrop-blur-sm border border-navy/[0.08] flex items-center justify-center shadow-lg shadow-navy/5">
                    <span className="text-navy/30 text-2xl font-bold tracking-wider">
                      {member.initials}
                    </span>
                  </div>
                </div>

                {/* Name & Title */}
                <h2 className="text-2xl font-bold text-navy tracking-tight">{member.name}</h2>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-6 h-[1px] bg-gold/60" />
                  <span className="text-xs font-medium text-gold-dark tracking-wide">
                    {member.title}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-navy text-[14px] leading-[1.9] mt-6">
                  {member.bioEn}
                </p>

                {/* Career */}
                <div className="border-t border-navy/[0.08] pt-6 mt-8">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-navy/40 mb-4">CAREER</p>
                  <div className="space-y-2.5">
                    {member.career.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-[3px] h-[3px] rounded-full bg-gold/60 mt-[8px] flex-shrink-0" />
                        <p className="text-navy/80 text-[13px] leading-relaxed">{item}</p>
                      </div>
                    ))}
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
