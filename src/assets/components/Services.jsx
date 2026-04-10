import { FaCode, FaPaintBrush, FaWordpress } from "react-icons/fa"

const services = [
  {
    id: 1,
    icon: FaCode,
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications from the ground up. I focus on clean code, smooth performance, and great user experiences.",
    tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"],
  },
  {
    id: 2,
    icon: FaPaintBrush,
    title: "Web Design",
    description:
      "Crafting visually appealing and intuitive interfaces that engage users. Every design decision is driven by usability, brand identity, and clarity.",
    tools: ["Figma", "Tailwind CSS", "Adobe XD", "Responsive Design"],
  },
  {
    id: 3,
    icon: FaWordpress,
    title: "WordPress Development",
    description:
      "Creating custom WordPress sites that are easy to manage and built to grow. From theme setup to plugin configuration, I handle it all.",
    tools: ["WordPress", "PHP", "Elementor", "WooCommerce", "Custom Themes"],
  },
]

const Services = () => {
  return (
    <div id="services" className="bg-[#1a2e2a] py-16 px-8">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#7aa09a] mb-2">
            What I Offer
          </h3>
          <h2 className="text-4xl font-bold text-[#F5F5F5] mb-3">My Services</h2>
          <div className="w-16 h-1 bg-[#F5A623] mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ id, icon: Icon, title, description, tools }, i) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-[#203530] border border-white/[0.08] rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:bg-[#254540] hover:border-[rgba(245,166,35,0.45)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[rgba(245,166,35,0.12)] mb-5">
                <Icon className="text-3xl text-[#F5A623]" />
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-3">{title}</h3>
              <p className="text-[#b0c8c4] mb-5 text-sm leading-relaxed">{description}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-[rgba(255,255,255,0.07)] text-[#7aa09a] border border-white/10 text-xs px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
