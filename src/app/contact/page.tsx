export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-gold font-semibold text-xs tracking-[0.2em] mb-3">REACH OUT</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ready to explore how Pro &amp; Team IP can help you maximize the
            value of your intellectual property? Get in touch with us.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info - left side */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-2">
                Get in Touch
              </h2>
              <p className="text-navy-300 text-sm mb-8">
                We'd love to hear about your IP needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-0.5">Website</h3>
                    <p className="text-navy-300 text-sm">www.proteambroker.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm mb-0.5">Email</h3>
                    <p className="text-navy-300 text-sm">info@proteambroker.com</p>
                  </div>
                </div>
              </div>

              {/* Founders */}
              <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-gold-dark text-xs font-semibold tracking-[0.15em] mb-4">
                  OUR FOUNDERS
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-navy text-sm">Oh-jin Kwon (권오진)</p>
                    <p className="text-navy-300 text-xs">Founder &amp; President</p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Sean (Seunghun) Lee (이승헌)</p>
                    <p className="text-navy-300 text-xs">Founder &amp; President</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - right side */}
            <div className="md:col-span-3">
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10">
                <h2 className="text-xl font-bold text-navy mb-2">Send us a message</h2>
                <p className="text-navy-300 text-sm mb-8">Fill out the form below and we'll get back to you shortly.</p>
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-navy-400 mb-2">
                        Name / 이름
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:border-navy focus:ring-1 focus:ring-navy/20 focus:outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-navy-400 mb-2">
                        Email / 이메일
                      </label>
                      <input
                        type="email"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:border-navy focus:ring-1 focus:ring-navy/20 focus:outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy-400 mb-2">
                      Company / 회사
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:border-navy focus:ring-1 focus:ring-navy/20 focus:outline-none transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy-400 mb-2">
                      Message / 메시지
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-navy text-sm focus:border-navy focus:ring-1 focus:ring-navy/20 focus:outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy text-white font-semibold py-3.5 rounded-xl hover:bg-navy-dark transition-colors text-sm tracking-wider"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
