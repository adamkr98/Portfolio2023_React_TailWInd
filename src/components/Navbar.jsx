import React from 'react';

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-white fixed top-0 z-10 text-black flex justify-between items-center">
      {/* Left side */}
      <div className="w-1/4">
        <h1 className="text-xl font-semibold ml-4">Hello</h1>
      </div>

      {/* Right side */}
      <div className="w-full flex justify-end">
        <ul className=" flex space-x-4 items-center mr-4 "> 
          <li className='xs:min-w-fit pt-0.5 pb-0.5 pl-0.5 pr-0.5 active:border-blue-50 text-md font-bold hover:text-red-800'>ABOUT ME</li>
          <li className='xs:min-w-fit pt-0.5 pb-0.5 pl-0.5 pr-0.5 active:border-blue-50 text-md font-bold hover:text-red-800'>PROJECTS</li>
          <li className='xs:min-w-fit pt-0.5 pb-0.5 pl-0.5 pr-0.5 active:border-blue-50 text-md font-bold hover:text-red-800'>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
