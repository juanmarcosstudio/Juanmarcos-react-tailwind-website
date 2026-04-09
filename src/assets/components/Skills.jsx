import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiMongodb,
  SiPhp,
  SiExpress,
} from "react-icons/si"
import { FaWordpress } from "react-icons/fa"

const skills = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "WordPress", icon: FaWordpress },
  { name: "Figma", icon: SiFigma },
  { name: "Git", icon: SiGit },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PHP", icon: SiPhp },
]

const Skills = () => {
  return (
    <div id="skills" className="bg-[#353A3A] py-16 px-8">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-2">
            What I Work With
          </h3>
          <h2 className="text-4xl font-bold text-white mb-3">Skills & Tools</h2>
          <div className="w-16 h-1 bg-[#eab949] mx-auto rounded-full" />
        </div>

        <div
          className="flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex items-center gap-3 bg-[#2a2e2e] border border-white/10 hover:border-[#eab949] hover:shadow-[0_0_16px_rgba(234,185,73,0.25)] rounded-full px-5 py-3 transition-all duration-300 cursor-default"
            >
              <Icon className="text-xl text-gray-400 group-hover:text-[#eab949] transition-colors duration-300" />
              <span className="text-white text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
