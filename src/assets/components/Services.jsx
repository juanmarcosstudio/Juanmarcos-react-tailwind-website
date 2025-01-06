import service1 from "../service1.png"
import service2 from "../service2.png"
import service3 from "../service3.png"
import { FaArrowRight } from 'react-icons/fa'

const Services = () => {
  return (
    <div className='bg-white py-16 px-8'>
      <div className='container mx-auto px-6 lg:px-24 text-center'>
        <div className='mb-12'>
            <h3 className='text-blue-500 font-semibold text-lg uppercase mb-2'>Services</h3>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>Check my services</h2>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
            <img src={service1} alt='service1' className='w-full h-48 object-cover rounded-lg mb-4' />
            <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Landing Page Design</h3>
            <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta imperdiet ultricies. Aliquam tincidunt orci sed felis pretium, ac auctor arcu tincidunt.</p>
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
        <img src={service2} alt='service2' className='w-full h-48 object-cover rounded-lg mb-4' />
            <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Mobile App Design</h3>
            <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta imperdiet ultricies. Aliquam tincidunt orci sed felis pretium, ac auctor arcu tincidunt.</p>
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
        <img src={service3} alt='service3' className='w-full h-48 object-cover rounded-lg mb-4' />
            <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Branding</h3>
            <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta imperdiet ultricies. Aliquam tincidunt orci sed felis pretium, ac auctor arcu tincidunt.</p>
        </div>
      </div>
      
      <div className='mt-8 text-right'>
        <a className='flex items-center justify-end text-blue-700 font-semibold hover:text-blue-500'>
            Explore All Services <FaArrowRight 
            className='ml-2' />
        </a>
      </div>
    </div>
  )
}

export default Services
