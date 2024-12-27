import { BsDownload } from "react-icons/bs"
import avatarImg from "../hero.png"
import CV from "../cv.pdf"

const Hero = () => {
  return (
    <div className="text-black flex flex-col-reverse md:flex-row justify-center items-center py-10 px-5 sm:px-10 lg:px-40 bg-gradient-to-t from-white to-yellow-50" >
      <div className="w-full md:w-1/2 mb-10 text-center md:text-left" >
        <h3 className="text-base md:text-lg lg:text-3xl mb-0 md:-mb-2 font-bold text-blue-800" >
            Hello, I am
        </h3>
        <h1 className="text-2xl md:text-4xl lg:text-5xl my-0 md:-ml-1 font-bold" >
            Jhon Mark
        </h1>
        <h3 className="text-base md:text-xl lg:text-2xl text-green-700" >Web Developer</h3>
        <p className="text-sm md:text-xl lg:text-2xl tracking-tighter" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat tempus nisl, quis commodo est consectetur id. Aenean vitae mattis massa.</p>
        <div className="flex items-center justify-center md:justify-start gap-4 mt-5" >
            <button className="bg-blue-800 px-10 py-1 rounded-full mr-4 hover:bg-blue-700 text-white" >Contact</button>
            <a className="flex items-center text-blue-800 font-semibold" href={CV} download="CV.pdf">
                <button>
                    Download Resume <BsDownload/>{" "}
                </button>
            </a>
        </div>
      </div>
      <div>
        <img src={avatarImg} alt="Avatar" />
      </div>
    </div>
  )
}

export default Hero
