export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Contact</span> Us
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to explore how Pro &amp; Team IP can help you maximize the
            value of your intellectual property? Get in touch with us.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-dark-light py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Website</h3>
                    <p className="text-gray-400 text-sm">www.proteambroker.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400 text-sm">info@proteambroker.com</p>
                  </div>
                </div>
              </div>

              {/* Team Quick Links */}
              <div className="mt-10 p-6 bg-dark rounded-xl border border-gray-700">
                <h3 className="text-primary text-sm font-semibold tracking-wider mb-4">
                  OUR FOUNDERS
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Oh-jin Kwon (권오진)</p>
                    <p className="text-gray-500 text-sm">Founder &amp; President</p>
                  </div>
                  <div>
                    <p className="font-medium">Sean (Seunghun) Lee (이승헌)</p>
                    <p className="text-gray-500 text-sm">Founder &amp; President</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-dark rounded-xl border border-gray-700 p-8">
              <h2 className="text-xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Name / 이름
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email / 이메일
                  </label>
                  <input
                    type="email"
                    className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Company / 회사
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Message / 메시지
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-dark-light border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors text-sm tracking-wide"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
