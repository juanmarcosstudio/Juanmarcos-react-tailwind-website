import { FaCode, FaPaintBrush, FaWordpress } from "react-icons/fa"

const services = [
  {
    id: 1,
    icon: <FaCode className="text-5xl text-[#F5A623] mb-4" />,
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications from the ground up. I focus on clean code, smooth performance, and great user experiences.",
    tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"],
  },
  {
    id: 2,
    icon: <FaPaintBrush className="text-5xl text-[#F5A623] mb-4" />,
    title: "Web Design",
    description:
      "Crafting visually appealing and intuitive interfaces that engage users. Every design decision is driven by usability, brand identity, and clarity.",
    tools: ["Figma", "Tailwind CSS", "Adobe XD", "Responsive Design"],
  },
  {
    id: 3,
    icon: <FaWordpress className="text-5xl text-[#F5A623] mb-4" />,
    title: "WordPress Development",
    description:
      "Creating custom WordPress sites that are easy to manage and built to grow. From theme setup to plugin configuration, I handle it all.",
    tools: ["WordPress", "PHP", "Elementor", "WooCommerce", "Custom Themes"],
  },
]

const Services = () => {
  return (
    <div id="services" className="dark:bg-[#1e2a2a] bg-white py-16 px-8">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h3 className="text-sm font-semibold uppercase tracking-widest dark:text-[#8A9BA8] text-[#8A9BA8] mb-2">
            What I Offer
          </h3>
          <h2 className="text-4xl font-bold dark:text-[#F5F5F5] text-[#1a1a1a] mb-3">
            My Services
          </h2>
          <div className="w-16 h-1 bg-[#F5A623] mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ id, icon, title, description, tools }, i) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="dark:bg-[#2C3333] bg-gray-50 border border-transparent rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:border-[#F5A623] hover:shadow-[0_0_24px_rgba(245,166,35,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              {icon}
              <h3 className="text-xl font-bold dark:text-[#F5F5F5] text-[#1a1a1a] mb-3">{title}</h3>
              <p className="dark:text-[#8A9BA8] text-gray-600 mb-5 text-sm leading-relaxed">
                {description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="dark:bg-[#1e2a2a] bg-[#2C3333] text-[#F5F5F5] text-xs px-3 py-1 rounded-full"
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
