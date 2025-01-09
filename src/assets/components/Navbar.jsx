import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import CV from '../cv.pdf';
import {Link} from "react-scroll"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const items = [
    { id: 1, text: "About", to: "about"},
    { id: 2, text: "Services", to: "services"},
    { id: 3, text: "Contact", to: "contact"},
  ];

  return (
    <div className="bg-[#353A3A] text-white w-full">
      <div className="container mx-auto p-4 hidden md:flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold flex items-center gap-1">
          <span className="text-white">Juan</span>
          <span className="text-[#eab949]">Marcos</span>
        </div >
        <div className="hidden md:flex space-x-6 items-center list-none text-lg">
          {items.map(({ id, text, to }) => ( //Use to find the items for navbar
            <li
             key={id} className='hover:text-[#eab949] duration-200 cursor-pointer'
             >
              <Link
              to={to}
              smooth={true}
              duration={500}
              >{text}
              </Link>
             </li>
          ))}
        </div>
        <a href={CV} download="CV.pdf" className='text-lg bg-[#eab949] text-white px-4 py-2 rounded-full hover:bg-[#4370d8]'>
          Download Resume
        </a>
      </div>
      <div className='flex w-full justify-between items-center md:hidden p-2 shadow-sm'>
        <div className='text-xl font-bold flex items-center gap-2'>
          <span className='text-white'>Juan</span>
          <span className="text-[#eab949]">Marcos</span>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <div onClick={() => setMenu(!menu)}>
            {menu ? (
              <IoClose size={30} className='text-white' />
              ) : (
              <IoMdMenu size={30} className='text-white' />
              )}
          </div>
        </div>
      </div>
      {menu && (
        <div className='md:hidden bg-[#353A3A] py-6 justify-center items-center gap-2 text-lg text-white flex flex-col list-none shadow-sm'>
          {items.map(({ id, text, to }) => ( //Items or menu to pop-up in icon menu
            <li 
             key={id} className='hover:text-[#eab949] duration-200 cursor-pointer border-b w-11/12 '
             >
             <Link
              to={to}
              smooth={true}
              duration={500}
              >{text}
            </Link>
             </li>
          ))}
          
          <a href={CV} download="CV.pdf" className='text-lg bg-[#eab949] text-white px-4 py-2 mt-3 rounded-full hover:bg-[#4370d8]'> 
           Download Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
