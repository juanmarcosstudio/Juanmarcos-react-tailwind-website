import aboutImg from '../aboutImg.png';
import CV from "../cv.pdf";
import {FaRegHandshake,} from "react-icons/fa"
import {MdSupportAgent} from "react-icons/md"
import {BsDownload} from "react-icons/bs"
import { Link } from 'react-scroll';


const About = () => {
  return (
    <div id="about" className='py-5 bg-gray-50' >
        <div className='container mx-auto px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between py-16 bg-[#353A3A]' >
        <div className='w-52 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30' >
            <img src={aboutImg}
            alt='About Me'
            className='w-full h-auto object-cover' />
        </div>
        {/*Right section*/}
            <div className='w-full md:w-1/2 md:pl-12' >
            
                <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>About Me</h2>
                <p className='text-white mb-6'>
                Howdy! I am Jhon Mark from the Philippines. I love spending time in coffee shops, enjoying the atmosphere and playing musical instruments. Coffee helps me stay focused and energized while I work. I am dedicated to doing my best in everything I do and always try to stay positive and professional.
                </p>

                <div className='flex flex-wrap mb-6'>
                    <div className='flex items-center w-1/2 mb-4'>
                        <FaRegHandshake className='text-[#eab949] text-5xl mr-4' />
                     <div>
                        <h4 className='text-white font-semibold'>Committed to excellence</h4>
                        <p className='text-white'>In every project</p>
                    </div>
                    </div>

                </div>
                <div className='flex flex-wrap mb-6'>
                    <div className='flex items-center w-1/2 mb-4'>
                        <MdSupportAgent className='text-[#eab949] text-5xl mr-4' />
                     <div>
                        <h4 className='text-white font-semibold'>Support</h4>
                        <p className='text-white'>Responsive and dedicated</p>
                    </div>
                    </div>
                </div>
                <div className='flex items-center' >
                    
                        <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="bg-[#eab949] text-white px-10 py-1 rounded-full mr-4 hover:bg-[#4370d8] cursor-pointer"
                        >
                            Contact
                        </Link>
                        
                    <a className='flex items-center text-[#eab949] font-semibold' href={CV} download="jhonmarkresume.pdf" >
                        Download Resume<BsDownload className='ml-2 text-lg' />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
