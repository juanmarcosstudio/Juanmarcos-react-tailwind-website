import service1 from "../service1.png"
import service2 from "../service2.png"
import service3 from "../service3.png"
import { FaArrowRight } from 'react-icons/fa'

const Services = () => {
  return (
    <div id="services" className='bg-white py-16 px-8'>
      <div className='container mx-auto px-6 lg:px-24 text-center'>
        <div className='mb-12'>
            <h3 className='text-[#353A3A] font-semibold text-lg uppercase mb-2'>Services</h3>
            <h2 className='text-4xl font-bold text-[#353A3A] mb-4'>Check my services</h2>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
          <div className='overflow-hidden rounded-lg mb-4'>
            <img src={service1} alt='service1' className='w-full h-48 object-cover rounded-lg mb-4 hover:scale-110' />
          </div>
            <h3 className='text-2xl font-semibold text-[#353A3A] mb-2'>Web Development Services</h3>
            <p className='text-gray-600 mb-4'>From concept to completion, I strive to deliver responsive and user-focused designs that reflect creativity and functionality. My goal is to create websites that leave a lasting impression and perform flawlessly.</p>
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
          <div className="overflow-hidden rounded-lg mb-4">
            <img src={service2} alt='service2' className='w-full h-48 object-cover rounded-lg mb-4 hover:scale-110' />
          </div>
            <h3 className='text-2xl font-semibold text-[#353A3A] mb-2'>Creative Services</h3>
            <p className='text-gray-600 mb-4'>Bring ideas to life with visually stunning and impactful designs. From logo creation and branding to graphic design and content development, I focus on delivering creative solutions that resonate with your audience. Whether it’s digital or print, every project is crafted with attention to detail and a passion for excellence.</p>
        </div>
        <div className='bg-gray-50 rounded-lg shadow-lg p-6'>
          <div className="overflow-hidden rounded-lg mb-4">
            <img src={service3} alt='service3' className='w-full h-48 object-cover rounded-lg mb-4 hover:scale-110' />
          </div>
            <h3 className='text-2xl font-semibold text-[#353A3A] mb-2'>Additional Options</h3>
            <p className='text-gray-600 mb-4'>Offer a variety of services to help your business grow. From managing your social media and running digital marketing campaigns to setting up email marketing and online stores, I’m here to make sure your brand reaches the right people.</p>
        </div>
      </div>
      
      <div className='mt-8 text-right'>
        <a className='flex items-center justify-end text-[#eab949] font-semibold hover:text-[#4370d8]'>
            Explore All Services <FaArrowRight 
            className='ml-2' />
        </a>
      </div>
    </div>
  )
}

export default Services
