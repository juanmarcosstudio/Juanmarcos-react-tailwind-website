import { IoMdMenu } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { useState, useEffect } from "react"
import CV from "../cv.pdf"
import { Link } from "react-scroll"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: "Services", to: "services" },
    { id: 3, text: "Projects", to: "projects" },
    { id: 4, text: "Contact", to: "contact" },
  ]

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "dark:bg-[#2C3333]/80 bg-[#f5f5f0]/80 backdrop-blur-md shadow-lg shadow-black/10"
          : "dark:bg-[#2C3333] bg-[#f5f5f0]"
      }`}
    >
      {/* Desktop */}
      <div className="container mx-auto px-6 py-4 hidden md:flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold flex items-center gap-1">
          <span className="dark:text-[#F5F5F5] text-[#1a1a1a]">Juan</span>
          <span className="text-[#F5A623]">Marcos</span>
        </div>

        <ul className="flex space-x-7 items-center list-none text-base">
          {items.map(({ id, text, to }) => (
            <li key={id}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="nav-active"
                className="dark:text-[#8A9BA8] text-gray-600 hover:text-[#F5A623] transition-colors duration-200 cursor-pointer pb-0.5"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={CV}
            download="jhonmarkresume.pdf"
            className="text-sm bg-[#F5A623] text-[#2C3333] font-bold px-5 py-2 rounded-full hover:shadow-[0_0_16px_rgba(245,166,35,0.55)] hover:scale-105 transition-all duration-200"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile header */}
      <div className="flex w-full justify-between items-center md:hidden px-4 py-3">
        <div className="text-xl font-bold flex items-center gap-1">
          <span className="dark:text-[#F5F5F5] text-[#1a1a1a]">Juan</span>
          <span className="text-[#F5A623]">Marcos</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
            className="dark:text-[#F5F5F5] text-[#1a1a1a]"
          >
            {menu ? <IoClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menu && (
        <div className="md:hidden dark:bg-[#2C3333]/95 bg-[#f5f5f0]/95 backdrop-blur-md py-6 flex flex-col items-center gap-1 text-base">
          {items.map(({ id, text, to }) => (
            <Link
              key={id}
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="nav-active"
              onClick={() => setMenu(false)}
              className="dark:text-[#8A9BA8] text-gray-600 hover:text-[#F5A623] transition-colors duration-200 cursor-pointer w-10/12 py-3 dark:border-b dark:border-white/10 border-b border-gray-200"
            >
              {text}
            </Link>
          ))}
          <a
            href={CV}
            download="jhonmarkresume.pdf"
            className="mt-4 text-sm bg-[#F5A623] text-[#2C3333] font-bold px-7 py-2.5 rounded-full hover:shadow-[0_0_16px_rgba(245,166,35,0.55)] transition-all duration-200"
          >
            Download CV
          </a>
        </div>
      )}
    </div>
  )
}

export default Navbar
