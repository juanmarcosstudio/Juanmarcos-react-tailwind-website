import aboutImg from "../aboutImg.png"
import CV from "../cv.pdf"
import { FaRegHandshake } from "react-icons/fa"
import { MdSupportAgent, MdCleaningServices } from "react-icons/md"
import { BsDownload, BsClockHistory } from "react-icons/bs"
import { Link } from "react-scroll"

const featureCards = [
  {
    icon: FaRegHandshake,
    title: "Committed to Excellence",
    desc: "In every project",
  },
  {
    icon: MdSupportAgent,
    title: "Support",
    desc: "Responsive and dedicated",
  },
  {
    icon: MdCleaningServices,
    title: "Clean Code",
    desc: "Readable and maintainable",
  },
  {
    icon: BsClockHistory,
    title: "On-Time Delivery",
    desc: "Deadlines are a priority",
  },
]

const stats = [
  { number: "2+", label: "Yrs Experience" },
  { number: "10+", label: "Projects" },
  { number: "3", label: "Services" },
]

const About = () => {
  return (
    <div id="about" className="dark:bg-[#353A3A] bg-[#f5f5f0]">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between py-20 gap-12">

        {/* ── Left: Image ── */}
        <div
          className="w-52 md:w-72 flex-shrink-0 border-l-4 border-[#eab949] pl-4 rounded-l-sm"
          data-aos="fade-right"
        >
          <img
            src={aboutImg}
            alt="About Me"
            className="w-full h-auto object-cover rounded-2xl shadow-[0_0_40px_rgba(234,185,73,0.1)]"
          />
        </div>

        {/* ── Right: Text content ── */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          {/* Badge */}
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#eab949] mb-2">
            Who I Am
          </h3>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-[#1a1a1a] mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#eab949] rounded-full mb-6" />

          {/* Bio */}
          <p className="dark:text-gray-300 text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
            Howdy! I am Jhon Mark from the Philippines. I build responsive
            websites through{" "}
            <span className="text-[#eab949] font-medium">Web Development</span>,
            craft clean and modern interfaces with{" "}
            <span className="text-[#eab949] font-medium">Web Design</span>, and
            set up powerful sites using{" "}
            <span className="text-[#eab949] font-medium">
              WordPress Development
            </span>
            . I love spending time in coffee shops and always bring dedication
            and a positive attitude to every project.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-6 mb-8 pb-6 dark:border-b dark:border-white/10 border-b border-gray-200">
            {stats.map(({ number, label }, i) => (
              <div key={label} className="flex items-center gap-6">
                <div>
                  <p className="text-2xl font-extrabold text-[#eab949] leading-none">
                    {number}
                  </p>
                  <p className="text-xs dark:text-gray-400 text-gray-500 mt-0.5">{label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 dark:bg-white/15 bg-gray-300" />
                )}
              </div>
            ))}
          </div>

          {/* 2×2 Feature cards */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {featureCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-3 dark:bg-[#2a2e2e] bg-white dark:border-white/10 border-gray-200 border rounded-xl p-4 hover:border-[#eab949]/50 transition-colors duration-300"
              >
                <Icon className="text-[#eab949] text-2xl flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="dark:text-white text-[#1a1a1a] font-semibold text-xs leading-snug">
                    {title}
                  </h4>
                  <p className="dark:text-gray-400 text-gray-500 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-[#eab949] text-[#353A3A] font-bold px-8 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(234,185,73,0.55)] hover:scale-105 transition-all duration-200 cursor-pointer text-sm"
            >
              Contact Me
            </Link>
            <a
              href={CV}
              download="jhonmarkresume.pdf"
              className="flex items-center gap-2 border-2 border-[#4370d8] text-[#4370d8] font-semibold px-6 py-2 rounded-full hover:bg-[#4370d8] hover:text-white hover:shadow-[0_0_15px_rgba(67,112,216,0.45)] transition-all duration-200 text-sm"
            >
              Download CV <BsDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
