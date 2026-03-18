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
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            OUR TEAM
          </h1>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                {/* Photo */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Title */}
                <div className="px-8 pt-8 pb-6 text-center border-b border-gray-100">
                  <h2 className="text-xl font-bold text-navy">
                    {member.name} ({member.nameKo})
                  </h2>
                  <p className="text-navy-400 mt-1">{member.title}</p>
                  <p className="text-navy-300 text-sm">({member.titleKo})</p>
                </div>

                {/* Bio & Career */}
                <div className="px-8 py-6 space-y-4">
                  <p className="text-navy-400 text-sm leading-relaxed">
                    {member.bioEn}
                  </p>
                  <p className="text-navy-300 text-sm leading-relaxed">
                    {member.bioKo}
                  </p>
                  <div className="pt-4 border-t border-gray-100 space-y-1.5">
                    {member.career.map((item, i) => (
                      <p key={i} className="text-navy-300 text-sm">
                        {item}
                      </p>
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
