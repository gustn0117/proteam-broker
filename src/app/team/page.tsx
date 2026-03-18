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
          <p className="text-gold/70 text-[11px] font-semibold tracking-[0.2em] mb-3">LEADERSHIP</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">OUR TEAM</h1>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-[#FAFBFC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                {/* Pattern Avatar Area */}
                <div className="pattern-avatar h-52 relative flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-navy/10 border-2 border-navy/20 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-navy/50 text-xl font-bold tracking-wide">
                      {member.initials}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Name & Title */}
                <div className="px-7 pt-2 pb-5 text-center border-b border-gray-50">
                  <h2 className="text-lg font-bold text-navy leading-snug">
                    {member.name}
                  </h2>
                  <p className="text-navy/40 text-sm mt-0.5">{member.nameKo}</p>
                  <div className="mt-3 inline-block">
                    <span className="text-[11px] font-semibold tracking-wide text-navy/50 bg-navy/[0.04] rounded-full px-3.5 py-1">
                      {member.title} ({member.titleKo})
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div className="px-7 py-6 space-y-3">
                  <p className="text-navy/70 text-[13px] leading-[1.8]">
                    {member.bioEn}
                  </p>
                  <p className="text-navy/40 text-[13px] leading-[1.8]">
                    {member.bioKo}
                  </p>
                </div>

                {/* Career */}
                <div className="px-7 pb-7">
                  <div className="bg-[#FAFBFC] rounded-xl p-5 border border-gray-50">
                    <p className="text-[10px] font-semibold tracking-[0.15em] text-navy/30 mb-3">
                      CAREER
                    </p>
                    <div className="space-y-2">
                      {member.career.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="w-1 h-1 rounded-full bg-gold/60 mt-[7px] flex-shrink-0" />
                          <p className="text-navy/50 text-xs leading-relaxed">{item}</p>
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
