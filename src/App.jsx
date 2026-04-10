import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "./assets/components/Navbar"
import Hero from "./assets/components/Hero"
import About from "./assets/components/About"
import Skills from "./assets/components/Skills"
import Services from "./assets/components/Services"
import Projects from "./assets/components/Projects"
import Contact from "./assets/components/Contact"
import Footer from "./assets/components/Footer"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    })
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
