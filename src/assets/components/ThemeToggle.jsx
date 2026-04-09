import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useTheme } from "../../context/ThemeContext"

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useTheme()

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      aria-label="Toggle theme"
      className="w-9 h-9 flex items-center justify-center rounded-full border dark:border-white/20 border-gray-300 dark:text-gray-300 text-gray-600 hover:border-[#eab949] hover:text-[#eab949] transition-all duration-200"
    >
      {isDarkMode ? <MdLightMode size={18} /> : <MdDarkMode size={18} />}
    </button>
  )
}

export default ThemeToggle
