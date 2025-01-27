import { FiMail, FiMapPin, FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <div id="contact" className='flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-12 lg:px-24 bg-[#353A3A]'>
      <div className='flex flex-1 flex-col px-6 mb-14'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-[#eab949]'>Contact Me</h2>
        <p className='mb-6 text-[#eab949]'>It will be my happiness to join you! I am committed to always doing my best to learn and help bring your project to life.</p>
        <div>
          <div className='space-y-4 text-white'>
            <FiMail className='text-[#eab949] w-6 h-6'/>
            <span>jhonmarktamayo134@gmail.com</span>
          </div>
          <div className='space-y-4 text-white'>
            <FiMapPin className='text-[#eab949] w-6 h-6'/>
            <span>San Carlos City, Pangasinan, Philippines</span>
          </div>
          <div className='space-y-4 text-white'>
            <FiGithub className='text-[#eab949] w-6 h-6'/>
            <span>juanmarcosstudio</span>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center w-11/12 max-w-screen-sm bg-white shadow-lg rounded-lg p-6'>
        <form action="https://formspree.io/f/xgvvrezz" method="POST" className='w-11/12 space-y-4'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name
              <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              required
              placeholder='Your Name'
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500' />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700' htmlFor='website'>
              Email
              <span className='text-red-500'>*</span>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              placeholder='example@gmail.com'
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500' />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700' htmlFor='message'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='4'
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500'
              placeholder='Your Message'></textarea>
          </div>
          <div>
            <button
              type='submit'
              className='w-full py-2 px-4 bg-[#4370d8] text-white font-semibold rounded-md hover:bg-[#eab949] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
