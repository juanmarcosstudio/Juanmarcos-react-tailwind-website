import {
  SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiCss3,
  SiTailwindcss, SiFigma, SiGit, SiMongodb, SiPhp, SiExpress,
} from "react-icons/si"
import { FaWordpress } from "react-icons/fa"

const skills = [
  { name: "React", icon: SiReact, dot: "#F5A623" },
  { name: "JavaScript", icon: SiJavascript, dot: "#F5A623" },
  { name: "Node.js", icon: SiNodedotjs, dot: "#4a9e96" },
  { name: "Express", icon: SiExpress, dot: "#4a9e96" },
  { name: "HTML5", icon: SiHtml5, dot: "#F5A623" },
  { name: "CSS3", icon: SiCss3, dot: "#F5A623" },
  { name: "Tailwind CSS", icon: SiTailwindcss, dot: "#4a9e96" },
  { name: "WordPress", icon: FaWordpress, dot: "#2E5D57" },
  { name: "Figma", icon: SiFigma, dot: "#F5A623" },
  { name: "Git", icon: SiGit, dot: "#4a9e96" },
  { name: "MongoDB", icon: SiMongodb, dot: "#4a9e96" },
  { name: "PHP", icon: SiPhp, dot: "#2E5D57" },
]

const Skills = () => {
  return (
    <div id="skills" className="bg-[#ede8de] py-16 px-8">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#666] mb-2">
            What I Work With
          </h3>
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-3">Skills & Tools</h2>
          <div className="w-16 h-1 bg-[#F5A623] mx-auto rounded-full" />
        </div>

        <div
          className="flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {skills.map(({ name, icon: Icon, dot }) => (
            <div
              key={name}
              className="group flex items-center gap-3 bg-[#e0dbd0] border border-black/[0.07] hover:bg-[#d6d0c5] hover:border-[rgba(212,137,26,0.4)] hover:shadow-[0_0_16px_rgba(212,137,26,0.20)] rounded-full px-5 py-3 transition-all duration-300 cursor-default"
            >
              <Icon className="text-xl text-[#666] group-hover:text-[#d4891a] transition-colors duration-300" />
              <span className="text-[#3d3d3d] text-sm font-medium">{name}</span>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: dot }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
