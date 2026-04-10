import { FiGithub, FiMail } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-[#141a18]">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-[#F5A623] to-[#2E5D57]" />

      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            <span className="text-[#F5F5F5]">Juan</span>
            <span className="text-[#F5A623]"> Marcos</span>
          </h2>
          <p className="text-[#7aa09a] text-sm mt-1 max-w-xs">
            Made with passion and dedication. Let&apos;s work together to create
            something special!
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/juanmarcosstudio" target="_blank" rel="noreferrer" aria-label="GitHub"
            className="text-[#7aa09a] hover:text-[#F5A623] hover:drop-shadow-[0_0_8px_rgba(245,166,35,0.7)] transition-all duration-300">
            <FiGithub size={22} />
          </a>
          <a href="mailto:jhonmarktamayo134@gmail.com" aria-label="Email"
            className="text-[#7aa09a] hover:text-[#F5A623] hover:drop-shadow-[0_0_8px_rgba(245,166,35,0.7)] transition-all duration-300">
            <FiMail size={22} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="text-[#7aa09a] hover:text-[#4a9e96] hover:drop-shadow-[0_0_8px_rgba(74,158,150,0.7)] transition-all duration-300">
            <FaLinkedinIn size={22} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="text-center text-[#7aa09a] text-xs">
          © {new Date().getFullYear()} Juan Marcos. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
