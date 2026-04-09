import { FiMail, FiMapPin, FiGithub } from "react-icons/fi"

const Contact = () => {
  return (
    <div
      id="contact"
      className="dark:bg-[#353A3A] bg-[#f5f5f0] py-16 px-4 md:px-12 lg:px-24"
      data-aos="fade-up"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-sm font-semibold uppercase tracking-widest dark:text-gray-400 text-gray-500 mb-2">
            Get In Touch
          </h3>
          <h2 className="text-4xl font-bold dark:text-white text-[#1a1a1a] mb-3">Contact Me</h2>
          <div className="w-16 h-1 bg-[#eab949] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-6 md:w-80">
            <p className="dark:text-gray-300 text-gray-600 leading-relaxed">
              It will be my happiness to join you! I am committed to always
              doing my best to learn and help bring your project to life.
            </p>

            <div className="flex items-center gap-3">
              <FiMail className="text-[#eab949] w-5 h-5 flex-shrink-0" />
              <a
                href="mailto:jhonmarktamayo134@gmail.com"
                className="dark:text-gray-300 text-gray-600 hover:text-[#eab949] transition-colors duration-200 text-sm"
              >
                jhonmarktamayo134@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FiMapPin className="text-[#eab949] w-5 h-5 flex-shrink-0" />
              <span className="dark:text-gray-300 text-gray-600 text-sm">
                Pangasinan, Philippines
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiGithub className="text-[#eab949] w-5 h-5 flex-shrink-0" />
              <a
                href="https://github.com/juanmarcosstudio"
                target="_blank"
                rel="noreferrer"
                className="dark:text-gray-300 text-gray-600 hover:text-[#eab949] transition-colors duration-200 text-sm"
              >
                juanmarcosstudio
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="w-full max-w-lg dark:bg-[#2a2e2e] bg-white shadow-xl rounded-2xl p-8">
            <form
              action="https://formspree.io/f/xgvvrezz"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 border dark:border-white/20 border-gray-300 dark:bg-[#353A3A] bg-white dark:text-white text-gray-900 dark:placeholder-gray-500 placeholder-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-[#eab949] focus:border-[#eab949] outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2.5 border dark:border-white/20 border-gray-300 dark:bg-[#353A3A] bg-white dark:text-white text-gray-900 dark:placeholder-gray-500 placeholder-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-[#eab949] focus:border-[#eab949] outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2.5 border dark:border-white/20 border-gray-300 dark:bg-[#353A3A] bg-white dark:text-white text-gray-900 dark:placeholder-gray-500 placeholder-gray-400 rounded-lg shadow-sm focus:ring-2 focus:ring-[#eab949] focus:border-[#eab949] outline-none transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#eab949] text-[#353A3A] font-bold rounded-full hover:shadow-[0_0_20px_rgba(234,185,73,0.5)] hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#eab949] focus:ring-offset-2"
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
