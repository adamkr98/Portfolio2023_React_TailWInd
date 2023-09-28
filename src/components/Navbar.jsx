import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-white fixed top-0 z-10 border border-b-backgroundColor text-black flex justify-between items-center">
      {/* Left side */}
      <div className="w-1/4">
        <li className="hover:cursor-pointer list-none text-xl font-semibold ml-4"><Link to='main' smooth={true} duration={1000} offset={-46 * 15}>&lt;/&gt;</Link></li>
      </div>

      {/* Right side */}
      <div className="w-full flex justify-end">
        <ul className=" flex space-x-4 items-center mr-4 "> 
          <li className='xs:min-w-fit pt-0.5 pb-0.5 pl-0.5 pr-0.5 active:border-blue-50 text-md font-bold hover:text-red-800 hover:cursor-pointer'><Link to='about' smooth={true} duration={1000} offset={-5 * 15}>ABOUT ME</Link></li>
          <li className='xs:min-w-fit pt-0.5 pb-0.5 pl-0.5 pr-0.5 active:border-blue-50 text-md font-bold hover:text-red-800 hover:cursor-pointer'><Link to='projects' smooth={true} duration={1000} offset={-20 * 16}>PROJECTS</Link></li>
          <li className='xs:min-w-fit pt-0.5 pb-0.5 pl-0.5 pr-0.5 active:border-blue-50 text-md font-bold hover:text-red-800 hover:cursor-pointer'><Link to='contact' smooth={true} duration={1000}>CONTACT</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
