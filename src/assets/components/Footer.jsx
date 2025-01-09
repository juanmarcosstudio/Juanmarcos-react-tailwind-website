
const Footer = () => {
  return (
    <div className='bg-white mt-12 flex flex-col items-center'>
      <div className='container flex flex-col md:flex-row justify-between px-5'>
        <div className='mb-8 md:mb-0 md:w-1/4 mr-6 text-center md:text-start'>
            <h2 className='text-3xl font-semibold text-blue-700'>Juan Marcos</h2>
            <p className='mt-1 text-gray-500 md:pr-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex justify-between md:w-3/4'>
            <div className='space-y-4'>
                <h3 className='font-medium text-gray-700'>EXPLORE</h3>
                <ul className='text-gray-500 space-y-2'>
                    <li><a href='#'>Support</a></li>
                    <li><a href='#'>About Me</a></li>
                    <li><a href='#'>Blog</a></li>
                </ul>
            </div>
            <div className='space-y-4'>
            <h3 className='font-medium text-gray-700'>EXPLORE</h3>
                <ul className='text-gray-500 space-y-2'>
                    <li><a href='#'>Support</a></li>
                    <li><a href='#'>About Me</a></li>
                    <li><a href='#'>Blog</a></li>
                </ul>
            </div>
            <div className='space-y-4'>
            <h3 className='font-medium text-gray-700'>EXPLORE</h3>
                <ul className='text-gray-500 space-y-2'>
                    <li><a href='#'>Support</a></li>
                    <li><a href='#'>About Me</a></li>
                    <li><a href='#'>Blog</a></li>
                </ul>
            </div>
        </div>
      </div>
      <div className='mt-8 bg-blue-800 h-2 w-full'>why</div>
    </div>
  )
}

export default Footer
