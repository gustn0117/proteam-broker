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
      <section className="bg-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the founders of Pro &amp; Team IP — seasoned IP professionals
            with decades of experience in patent transactions, licensing, and
            strategic advisory.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-dark-light py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-10 items-start ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Photo placeholder */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-64 h-72 bg-dark rounded-xl border border-gray-700 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50" />
                  <div className="text-center z-10">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/40">
                      <span className="text-3xl font-bold text-primary">
                        {member.initials}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Photo Coming Soon</p>
                    <p className="text-xs text-gray-600">사진 추가 예정</p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                <p className="text-gray-400 text-lg mb-1">{member.nameKo}</p>
                <p className="text-primary font-semibold mb-1">
                  {member.title}
                </p>
                <p className="text-gray-500 text-sm mb-6">{member.titleKo}</p>

                {/* Bio */}
                <div className="space-y-4 mb-6">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {member.bioEn}
                  </p>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {member.bioKo}
                  </p>
                </div>

                {/* Career */}
                <div className="bg-dark rounded-lg p-5 border border-gray-700">
                  <h3 className="text-primary text-sm font-semibold mb-3 tracking-wider">
                    CAREER
                  </h3>
                  <ul className="space-y-2">
                    {member.career.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-sm flex items-start gap-3"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
