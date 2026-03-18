import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/80 to-navy-dark/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-tight">
            PRO&TEAM IP
          </h1>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/team"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-10 hover:bg-white/20 transition-all group"
            >
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                OUR TEAM
              </h2>
              <p className="text-white/50 text-sm">팀 소개</p>
            </Link>

            <Link
              href="/services"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-10 hover:bg-white/20 transition-all group"
            >
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                Services
              </h2>
              <p className="text-white/50 text-sm">업무 분야</p>
            </Link>

            <Link
              href="/fee-structure"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-10 hover:bg-white/20 transition-all group"
            >
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                Fee Structure
              </h2>
              <p className="text-white/50 text-sm">서비스 비용</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
