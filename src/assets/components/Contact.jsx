import {FiMail, FiMapPin, FiPhone} from "react-icons/fi"

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-12 lg:px-24 bg-gray-50 bg-gradient-to-t from-white to-yellow-50'>
      <div className='flex flex-1 flex-col px-6 mb-14'>
        <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-gray-900'>Contact Me</h2>
        <p className='mb-6 text-gray-600'>We are committed to processing the information to contact you and discuss your project.</p>
        <div>
            <div className='space-y-4 text-gray-600'>
                <FiMail className='text-blue-700 w-6 h-6'/>
                <span>jhonmarktamyo134@gmail.com</span>
            </div>
            <div className='space-y-4 text-gray-600'>
                <FiMapPin className='text-blue-700 w-6 h-6'/>
                <span>Pangasinan, Philippines</span>
            </div>
            <div className='space-y-4 text-gray-600'>
                <FiPhone className='text-blue-700 w-6 h-6'/>
                <span>+63 912 3456 789</span> 
            </div>
        </div>
      </div>
      <div className='flex items-center justify-center w-11/12 max-w-screen-sm bg-white shadow-lg rounded-lg p-6'>
        <form action='#' method='POST' className='w-11/12 space-y-4'>
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
                <label className='block text-sm font-medium text-gray-700' 
                htmlFor='website'>
                    Website
                </label>
                <input 
                type='url'
                id='website'
                name='website'
                placeholder='Your Website (Optional)'
                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500' />
            </div>
            <div>
                <label className='block text-sm font-medium text-gray-700'
                htmlFor='message'>
                    Message
                </label>
                <textarea
                id='message'
                name='message'
                rows='4'
                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500' 
                placeholder='Your Message'
                ></textarea>
            </div>
            <div>
                <button type='submit'
                className='w-full py-2 px-4 bg-blue-700 text-white font-semibold rounded-md hover:bg-yellow-400 focus:outline-none focus-ring-2 focus:ring-blue-500 focus:ring-offset-2'
                >Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
