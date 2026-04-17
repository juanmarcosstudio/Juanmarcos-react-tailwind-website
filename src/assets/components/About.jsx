import aboutImg from "../aboutImg.png"
import CV from "../cv.pdf"
import { FaRegHandshake } from "react-icons/fa"
import { MdSupportAgent, MdCleaningServices } from "react-icons/md"
import { BsDownload, BsClockHistory } from "react-icons/bs"
import { Link } from "react-scroll"

const featureCards = [
  { icon: FaRegHandshake, title: "Committed to Excellence", desc: "In every project" },
  { icon: MdSupportAgent, title: "Support", desc: "Responsive and dedicated" },
  { icon: MdCleaningServices, title: "Clean Code", desc: "Readable and maintainable" },
  { icon: BsClockHistory, title: "On-Time Delivery", desc: "Deadlines are a priority" },
]

const stats = [
  { number: "2+", label: "Years of Experience" },
  { number: "10+", label: "Projects Delivered" },
]

const About = () => {
  return (
    <div id="about" className="bg-[#ede8de]">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between py-20 gap-12">

        {/* ── Left: Image ── */}
        <div
          className="w-52 md:w-72 flex-shrink-0 border-l-4 border-[#F5A623] pl-4 rounded-l-sm"
          data-aos="fade-right"
        >
          <img
            src={aboutImg}
            alt="About Me"
            className="w-full h-auto object-cover rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* ── Right: Text content ── */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#d4891a] mb-2">
            Who I Am
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#F5A623] rounded-full mb-6" />

          <p className="text-[#3d3d3d] mb-8 leading-relaxed text-sm md:text-base">
            Hey! I'm Jhon Mark, a web developer and designer based in the
            Philippines. I help clients bring their ideas to life through
            responsive{" "}
            <span className="text-[#d4891a] font-medium">Web Development</span>,
            clean UI/UX{" "}
            <span className="text-[#d4891a] font-medium">Web Design</span>, and
            reliable{" "}
            <span className="text-[#d4891a] font-medium">WordPress</span>{" "}
            solutions. I take pride in writing clean code, meeting deadlines,
            and making the process as smooth as possible for everyone I work
            with. When I'm not building websites, you'll probably find me at a
            coffee shop with a good cup and my laptop.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-6 mb-8 pb-6 border-b border-black/10">
            {stats.map(({ number, label }, i) => (
              <div key={label} className="flex items-center gap-6">
                <div>
                  <p className="text-2xl font-extrabold text-[#d4891a] leading-none">{number}</p>
                  <p className="text-xs text-[#666] mt-0.5">{label}</p>
                </div>
                {i < stats.length - 1 && <div className="w-px h-8 bg-black/15" />}
              </div>
            ))}
          </div>

          {/* 2×2 Feature cards */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {featureCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-3 bg-[#e0dbd0] border border-black/[0.07] rounded-xl p-4 hover:bg-[#d6d0c5] hover:border-[rgba(212,137,26,0.4)] transition-all duration-300"
              >
                <Icon className="text-[#d4891a] text-2xl flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[#1a1a1a] font-semibold text-xs leading-snug">{title}</h4>
                  <p className="text-[#666] text-xs mt-0.5">{desc}</p>
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
              className="bg-[#F5A623] text-[#1a1a1a] font-bold px-8 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(245,166,35,0.40)] hover:scale-105 transition-all duration-200 cursor-pointer text-sm"
            >
              Contact Me
            </Link>
            <a
              href={CV}
              download="jhonmarkresume.pdf"
              className="flex items-center gap-2 border-2 border-[#2E5D57] text-[#2E5D57] font-semibold px-6 py-2 rounded-full hover:bg-[#2E5D57] hover:text-[#F5F5F5] hover:shadow-[0_0_15px_rgba(46,93,87,0.35)] transition-all duration-200 text-sm"
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
