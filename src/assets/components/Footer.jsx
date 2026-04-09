import { FiGithub, FiMail } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="dark:bg-[#353A3A] bg-[#f5f5f0]">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-[#eab949] to-[#4370d8]" />

      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">
            <span className="dark:text-white text-[#1a1a1a]">Juan</span>
            <span className="text-[#eab949]"> Marcos</span>
          </h2>
          <p className="dark:text-gray-400 text-gray-500 text-sm mt-1 max-w-xs">
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
            className="dark:text-gray-400 text-gray-500 hover:text-[#eab949] hover:drop-shadow-[0_0_8px_rgba(234,185,73,0.8)] transition-all duration-300"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="mailto:jhonmarktamayo134@gmail.com"
            aria-label="Email"
            className="dark:text-gray-400 text-gray-500 hover:text-[#eab949] hover:drop-shadow-[0_0_8px_rgba(234,185,73,0.8)] transition-all duration-300"
          >
            <FiMail size={22} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="dark:text-gray-400 text-gray-500 hover:text-[#4370d8] hover:drop-shadow-[0_0_8px_rgba(67,112,216,0.8)] transition-all duration-300"
          >
            <FaLinkedinIn size={22} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="dark:border-t dark:border-white/10 border-t border-gray-200 py-4">
        <p className="text-center dark:text-gray-500 text-gray-400 text-xs">
          © {new Date().getFullYear()} Juan Marcos. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
