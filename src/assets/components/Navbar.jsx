import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import CV from '../cv.pdf'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const items = [
    { id: 1, text: "About" },
    { id: 2, text: "Services" },
    { id: 3, text: "Contact" },
  ];

  return (
    <div className="bg-yellow-50 text-black w-full">
      <div className="container mx-auto p-4 hidden md:flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold flex items-center gap-1">
          <span className="text-black">Juan</span>
          <span className="text-blue-800">Marcos</span>
        </div >
        <div className="hidden md:flex space-x-6 items-center list-none text-lg">
          {items.map(({ id, text }) => ( //Use to find the items for navbar
            <li
             key={id} className='hover:text-blue-500 duration-200 cursor-pointer'
             >
              {text}
             </li>
          ))}
        </div>
        <a href={CV} download="CV.pdf" className='text-lg bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800'>
          Download Resume
        </a>
      </div>
      <div className='flex w-full justify-between items-center md:hidden p-2 shadow-sm'>
        <div className='text-xl font-bold flex items-center gap-2'>
          <span className='text-black'>Juan</span>
          <span className='text-blue-800'>Marcos</span>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <div onClick={() => setMenu(!menu)}>
            {menu ? (
              <IoClose size={30} className='text-black' />
              ) : (
              <IoMdMenu size={30} className='text-black' />
              )}
          </div>
        </div>
      </div>
      {menu && (
        <div className='md:hidden bg-yellow-50 py-6 justify-center items-center gap-2 text-lg text-black flex flex-col list-none shadow-sm'>
          {items.map(({ id, text }) => ( //Items or menu to pop-up in icon menu
            <li
             key={id} className='hover:text-blue-500 duration-200 cursor-pointer border-b w-11/12 '
             >
              {text}
             </li>
          ))}

          <a href={CV} download="CV.pdf" className='text-lg bg-blue-900 text-white px-4 py-2 mt-3 rounded-full hover:bg-blue-800'>
           Download Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
