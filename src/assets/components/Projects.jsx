import { useState } from "react"
import { FiGithub, FiExternalLink } from "react-icons/fi"

// Replace these with your real projects
const projects = [
  {
    id: 1,
    title: "E-Commerce Store",
    category: "Web Dev",
    description:
      "A full-stack e-commerce app with product listings, cart, and checkout built with React and Node.js.",
    tools: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Restaurant Landing Page",
    category: "Web Design",
    description:
      "A visually rich landing page for a local restaurant featuring a menu, gallery, and reservation form.",
    tools: ["Figma", "HTML", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Business Portfolio Site",
    category: "WordPress",
    description:
      "A custom WordPress site for a small business with Elementor page builder and WooCommerce integration.",
    tools: ["WordPress", "Elementor", "WooCommerce"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Task Manager App",
    category: "Web Dev",
    description:
      "A productivity app with drag-and-drop task boards, user auth, and real-time updates.",
    tools: ["React", "Node.js", "Express"],
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Creative Agency Site",
    category: "Web Design",
    description:
      "A bold, modern design for a creative agency with animated sections and a portfolio showcase.",
    tools: ["Figma", "React", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Blog Platform",
    category: "WordPress",
    description:
      "A custom-themed WordPress blog with optimized SEO, responsive layout, and a contact plugin.",
    tools: ["WordPress", "PHP", "Custom Theme"],
    github: "#",
    live: "#",
  },
]

const filters = ["All", "Web Dev", "Web Design", "WordPress"]

const categoryColors = {
  "Web Dev": "bg-[#2E5D57] text-[#F5F5F5]",
  "Web Design": "bg-[#F5A623] text-[#F5F5F5]",
  WordPress: "bg-[#2C3333] text-[#F5F5F5] border border-white/20",
}

const Projects = () => {
  const [active, setActive] = useState("All")

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <div id="projects" className="dark:bg-[#2C3333] bg-gray-50 py-16 px-8">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h3 className="text-sm font-semibold uppercase tracking-widest dark:text-[#8A9BA8] text-[#8A9BA8] mb-2">
            My Work
          </h3>
          <h2 className="text-4xl font-bold dark:text-[#F5F5F5] text-[#1a1a1a] mb-3">Projects</h2>
          <div className="w-16 h-1 bg-[#F5A623] mx-auto rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer ${
                active === filter
                  ? "bg-[#F5A623] text-[#F5F5F5] shadow-[0_0_14px_rgba(245,166,35,0.4)]"
                  : "dark:bg-[#1e2a2a] bg-white dark:text-[#F5F5F5] text-[#1a1a1a] dark:border-white/20 border-gray-300 border hover:border-[#F5A623] hover:text-[#F5A623]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(({ id, title, category, description, tools, github, live }, i) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="dark:bg-[#1e2a2a] bg-white border border-transparent rounded-xl shadow-md overflow-hidden flex flex-col hover:border-[#F5A623] hover:shadow-[0_0_24px_rgba(245,166,35,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Color bar */}
              <div className="h-1 bg-gradient-to-r from-[#F5A623] to-[#2E5D57]" />

              <div className="p-6 flex flex-col flex-1">
                {/* Category badge */}
                <span
                  className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 ${categoryColors[category]}`}
                >
                  {category}
                </span>

                <h3 className="text-lg font-bold dark:text-[#F5F5F5] text-[#1a1a1a] mb-2">
                  {title}
                </h3>
                <p className="dark:text-[#8A9BA8] text-gray-600 text-sm leading-relaxed mb-4">
                  {description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="dark:bg-[#2C3333] bg-gray-100 dark:text-[#8A9BA8] text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-3 dark:border-t dark:border-white/10 border-t border-gray-100">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm dark:text-[#8A9BA8] text-[#8A9BA8] hover:text-[#F5A623] transition-colors duration-200 font-medium"
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm dark:text-[#8A9BA8] text-[#8A9BA8] hover:text-[#2E5D57] transition-colors duration-200 font-medium"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
