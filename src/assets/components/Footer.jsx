import { FiGithub, FiMail } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="dark:bg-[#2C3333] bg-[#f5f5f0]">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-[#F5A623] to-[#2E5D57]" />

      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            <span className="dark:text-[#F5F5F5] text-[#1a1a1a]">Juan</span>
            <span className="text-[#F5A623]"> Marcos</span>
          </h2>
          <p className="dark:text-[#8A9BA8] text-[#8A9BA8] text-sm mt-1 max-w-xs">
            Made with passion and dedication. Let&apos;s work together to create
            something special!
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/juanmarcosstudio"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="dark:text-[#8A9BA8] text-[#8A9BA8] hover:text-[#F5A623] hover:drop-shadow-[0_0_8px_rgba(245,166,35,0.8)] transition-all duration-300"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="mailto:jhonmarktamayo134@gmail.com"
            aria-label="Email"
            className="dark:text-[#8A9BA8] text-[#8A9BA8] hover:text-[#F5A623] hover:drop-shadow-[0_0_8px_rgba(245,166,35,0.8)] transition-all duration-300"
          >
            <FiMail size={22} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="dark:text-[#8A9BA8] text-[#8A9BA8] hover:text-[#2E5D57] hover:drop-shadow-[0_0_8px_rgba(46,93,87,0.8)] transition-all duration-300"
          >
            <FaLinkedinIn size={22} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="dark:border-t dark:border-white/10 border-t border-gray-200 py-4">
        <p className="text-center dark:text-[#8A9BA8] text-[#8A9BA8] text-xs">
          © {new Date().getFullYear()} Juan Marcos. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
