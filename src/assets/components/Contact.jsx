import { FiMail, FiMapPin, FiGithub } from "react-icons/fi"

const contactInfo = [
  { icon: FiMail, label: "Email", value: "jhonmarktamayo134@gmail.com", href: "mailto:jhonmarktamayo134@gmail.com" },
  { icon: FiMapPin, label: "Location", value: "Pangasinan, Philippines", href: null },
  { icon: FiGithub, label: "GitHub", value: "juanmarcosstudio", href: "https://github.com/juanmarcosstudio" },
]

const Contact = () => {
  return (
    <div id="contact" className="bg-[#1a2e2a] py-16 px-4 md:px-12 lg:px-24" data-aos="fade-up">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#7aa09a] mb-2">
            Get In Touch
          </h3>
          <h2 className="text-4xl font-bold text-[#F5F5F5] mb-3">Contact Me</h2>
          <div className="w-16 h-1 bg-[#F5A623] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-4 md:w-80">
            <p className="text-[#b0c8c4] leading-relaxed mb-2">
              It will be my happiness to join you! I am committed to always
              doing my best to learn and help bring your project to life.
            </p>

            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-[#203530] border border-white/[0.08] rounded-xl px-4 py-3 hover:border-[rgba(245,166,35,0.45)] transition-colors duration-200"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[rgba(245,166,35,0.12)] flex-shrink-0">
                  <Icon className="text-[#F5A623] w-4 h-4" />
                </div>
                <div>
                  <p className="text-[#7aa09a] text-xs mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-[#b0c8c4] hover:text-[#F5A623] transition-colors duration-200 text-sm font-medium"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-[#b0c8c4] text-sm font-medium">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="w-full max-w-lg bg-[#203530] border border-white/[0.08] shadow-xl rounded-2xl p-8">
            <form action="https://formspree.io/f/xgvvrezz" method="POST" className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#7aa09a] mb-1">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text" id="name" name="name" required placeholder="Your Name"
                  className="w-full px-4 py-2.5 border border-white/10 bg-[#1a2e2a] text-[#F5F5F5] placeholder-[#4a6b65] rounded-lg focus:ring-2 focus:ring-[rgba(245,166,35,0.50)] focus:border-[rgba(245,166,35,0.50)] outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#7aa09a] mb-1">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email" id="email" name="email" required placeholder="example@gmail.com"
                  className="w-full px-4 py-2.5 border border-white/10 bg-[#1a2e2a] text-[#F5F5F5] placeholder-[#4a6b65] rounded-lg focus:ring-2 focus:ring-[rgba(245,166,35,0.50)] focus:border-[rgba(245,166,35,0.50)] outline-none transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#7aa09a] mb-1">
                  Message
                </label>
                <textarea
                  id="message" name="message" rows="4" placeholder="Your Message"
                  className="w-full px-4 py-2.5 border border-white/10 bg-[#1a2e2a] text-[#F5F5F5] placeholder-[#4a6b65] rounded-lg focus:ring-2 focus:ring-[rgba(245,166,35,0.50)] focus:border-[rgba(245,166,35,0.50)] outline-none transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#F5A623] text-[#1a1a1a] font-bold rounded-full hover:shadow-[0_0_20px_rgba(245,166,35,0.40)] hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[rgba(245,166,35,0.50)] focus:ring-offset-2 focus:ring-offset-[#203530]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
