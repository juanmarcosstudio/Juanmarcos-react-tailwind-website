import { IoMdMenu } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { useState, useEffect } from "react"
import CV from "../cv.pdf"
import { Link } from "react-scroll"
import logo from "../logo.png"

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
          ? "bg-[#1e2222]/90 backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-[#1e2222]"
      }`}
    >
      {/* Desktop */}
      <div className="container mx-auto px-6 py-4 hidden md:flex justify-between items-center">
        <img
          src={logo}
          alt="Studio Cadenova"
          className="h-10 md:h-12 w-auto object-contain mix-blend-screen"
        />

        <ul className="flex space-x-7 items-center list-none text-base">
          {items.map(({ id, text, to }) => (
            <li key={id}>
              <Link
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="nav-active"
                className="text-[#b0bfbf] hover:text-[#F5A623] transition-colors duration-200 cursor-pointer pb-0.5"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={CV}
          download="jhonmarkresume.pdf"
          className="text-sm bg-[#F5A623] text-[#1a1a1a] font-bold px-5 py-2 rounded-full hover:shadow-[0_0_16px_rgba(245,166,35,0.40)] hover:scale-105 transition-all duration-200"
        >
          Download CV
        </a>
      </div>

      {/* Mobile header */}
      <div className="flex w-full justify-between items-center md:hidden px-4 py-3">
        <img
          src={logo}
          alt="Studio Cadenova"
          className="h-9 w-auto object-contain mix-blend-screen"
        />
        <button
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
          className="text-[#F5F5F5]"
        >
          {menu ? <IoClose size={28} /> : <IoMdMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menu && (
        <div className="md:hidden bg-[#1e2222]/95 backdrop-blur-md py-6 flex flex-col items-center gap-1 text-base">
          {items.map(({ id, text, to }) => (
            <Link
              key={id}
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="nav-active"
              onClick={() => setMenu(false)}
              className="text-[#b0bfbf] hover:text-[#F5A623] transition-colors duration-200 cursor-pointer w-10/12 py-3 border-b border-white/10"
            >
              {text}
            </Link>
          ))}
          <a
            href={CV}
            download="jhonmarkresume.pdf"
            className="mt-4 text-sm bg-[#F5A623] text-[#1a1a1a] font-bold px-7 py-2.5 rounded-full hover:shadow-[0_0_16px_rgba(245,166,35,0.40)] transition-all duration-200"
          >
            Download CV
          </a>
        </div>
      )}
    </div>
  )
}

export default Navbar
