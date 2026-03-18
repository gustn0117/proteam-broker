const teamMembers = [
  {
    name: "Oh-jin Kwon",
    nameKo: "권오진",
    title: "Founder & President",
    titleKo: "공동 대표",
    bioEn:
      "With over 32 years of experience in the Intellectual Property (IP) field, I have developed extensive expertise in patent transactions and licensing. I maintain a robust network across Korea, encompassing major corporations, universities, research institutes, and startups.",
    bioKo:
      "32년 이상 IP 분야에서 일해 왔고, 특허거래 및 특허 라이센싱 등에 많은 경험을 가지고 있습니다. 특히, 한국의 다양한 대기업들, 대학, 연구소, 스타트업들과 네트웍을 가지고 있습니다.",
    career: [
      "1994~2013: Samsung Electro-Mechanics, IP Team",
      "2015~2016: KCC, IP Team",
      "2016~2017: Seoul Semiconductor, IP Team",
      "2017~2027: KIM & CHANG Law Firm, IP Team (Attorney at Law, member of Washington D.C. Bar)",
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
    bioKo:
      "20년 경력의 IP 라이선싱 전문가입니다. 미국, 유럽, 아시아를 무대로 이차전지, 반도체, IT 플랫폼 및 표준특허 분야의 계약을 성공적으로 이끌어 왔습니다. 전문성과 글로벌 네트워크를 기반으로 최적의 가치를 창출합니다.",
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

      {/* Team Members */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-10 md:gap-14 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Pattern Avatar */}
                <div className="flex-shrink-0 w-full md:w-[280px]">
                  <div className="pattern-avatar rounded-2xl aspect-[3/4] relative flex items-center justify-center overflow-hidden">
                    <div className="w-24 h-24 rounded-full bg-white/70 backdrop-blur-sm border border-navy/[0.08] flex items-center justify-center shadow-lg shadow-navy/5">
                      <span className="text-navy/30 text-2xl font-bold tracking-wider">
                        {member.initials}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/60 to-transparent" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-navy tracking-tight">{member.name}</h2>
                    <p className="text-navy/30 mt-1">{member.nameKo}</p>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-6 h-[1px] bg-gold/60" />
                      <span className="text-xs font-medium text-gold-dark tracking-wide">
                        {member.title}
                      </span>
                    </div>
                    <p className="text-navy/30 text-xs mt-1 ml-9">{member.titleKo}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-navy/60 text-[14px] leading-[1.9]">{member.bioEn}</p>
                    <p className="text-navy/30 text-[13px] leading-[1.9]">{member.bioKo}</p>
                  </div>

                  <div className="border-t border-navy/[0.06] pt-6">
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-navy/20 mb-4">CAREER</p>
                    <div className="space-y-2.5">
                      {member.career.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-[3px] h-[3px] rounded-full bg-gold/50 mt-[8px] flex-shrink-0" />
                          <p className="text-navy/40 text-[13px] leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
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
