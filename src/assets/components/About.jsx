import aboutImg from '../aboutImg.png';


const About = () => {
  return (
    <div className='container mx-auto px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between py-16 bg-gray-50' >
      <div className='w-52 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30' >
        <img src={aboutImg}
        alt='About Me'
        className='w-full h-auto object-cover' />
      </div>
    {/*Right section*/}
        <div>
            <h3>A Bit</h3>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum risus elit, vel facilisis leo tincidunt in. Maecenas eget risus quis lectus ultricies tincidunt aliquet et ex. Donec a leo eget eros facilisis euismod sit amet in dui. Nunc pretium erat cursus ante tincidunt, aliquam eleifend nisi sollicitudin. Sed vehicula condimentum ex a placerat. Quisque feugiat et neque ut efficitur.</p>
        </div>
    </div>
  )
}

export default About
