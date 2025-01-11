import { BsDownload } from "react-icons/bs"
import avatarImg from "../hero.png"
import CV from "../cv.pdf"

const Hero = () => {
  return (
    <div className="text-black flex flex-col-reverse md:flex-row justify-center items-center py-10 px-5 sm:px-10 lg:px-40 bg-[#353A3A]" >
      <div className="w-full md:w-1/2 mb-10 text-center md:text-left" >
        <h3 className="text-base md:text-lg lg:text-3xl mb-0 md:-mb-2 font-bold text-[#eab949]
        " >
             Hello, I am
        </h3>
        <h1 className="text-2xl text-white md:text-4xl lg:text-5xl my-0 md:-ml-1 font-bold py-0 md:py-2" >
            Jhon Mark
        </h1>
        
        <p className="text-sm md:text-xl lg:text-2xl tracking-normal text-white" >
          I am learning advanced JavaScript, improving my React.js skills for building interactive user interfaces, and working on backend development with Node.js and Express to create efficient and scalable applications.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4 mt-5" >
            <button className="bg-[#eab949] px-10 py-1 rounded-full mr-4 hover:bg-[#4370d8] text-white duration-200" >
              Contact
            </button>
            <a className="flex items-center text-[#eab949] font-semibold" href={CV} download="CV.pdf">
                
                    Download Resume <BsDownload className="ml-2 text-lg" />
                
            </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-10 md:px-0 flex justify-center md:justify-end md:mb-0" >
        <img className="max-w-full h-auto" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  )
}

export default Hero
