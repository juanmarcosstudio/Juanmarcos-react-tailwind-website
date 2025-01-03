import aboutImg from '../aboutImg.png';
import CV from "../cv.pdf";
import {FaRegHandshake, FaRegFolderOpen} from "react-icons/fa"
import {MdSupportAgent} from "react-icons/md"
import {BsDownload} from "react-icons/bs"


const About = () => {
  return (
    <div className='py-16 bg-gray-50' >
        <div className='container mx-auto px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between py-16 bg-gray-50' >
        <div className='w-52 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30' >
            <img src={aboutImg}
            alt='About Me'
            className='w-full h-auto object-cover' />
        </div>
        {/*Right section*/}
            <div className='w-full md:w-1/2 md:pl-12' >
                <h3 className='text-blue-700 font-semibold text-lg uppercase mb-4'>A Bit</h3>
                <h2 className='text-4xl md:text-6xl font-bold text-gray-800 mb-6'>About Me</h2>
                <p className='text-gray-600 mb-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum risus elit, vel facilisis leo tincidunt in. Maecenas eget risus quis lectus ultricies tincidunt aliquet et ex. Donec a leo eget eros facilisis euismod sit amet in dui. Nunc pretium erat cursus ante tincidunt, aliquam eleifend nisi sollicitudin. Sed vehicula condimentum ex a placerat. Quisque feugiat et neque ut efficitur.
                </p>

                <div className='flex flex-wrap mb-6'>
                    <div className='flex items-center w-1/2 mb-4'>
                        <FaRegHandshake className='text-blue-500 text-5xl mr-4' />
                     <div>
                        <h4 className='text-gray-700 font-semibold'>5 years+</h4>
                        <p className='text-gray-700'>Experience</p>
                    </div>
                    </div>

                </div>
                <div className='flex flex-wrap mb-6'>
                    <div className='flex items-center w-1/2 mb-4'>
                        <MdSupportAgent className='text-blue-500 text-5xl mr-4' />
                     <div>
                        <h4 className='text-gray-700 font-semibold'>24/7</h4>
                        <p className='text-gray-700'>Customer support</p>
                    </div>
                    </div>
                </div>
                <div className='flex items-center' >
                    <button className='bg-blue-600 px-2 py-3 rounded-full mr-4' >Contact Me</button>
                    <a className='flex items-center text-blue-600 font-semibold' href={CV} download="CV.pdf" >
                        Download Resume<BsDownload className='ml-2 text-lg' />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
