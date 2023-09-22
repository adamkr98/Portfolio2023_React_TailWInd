import React from 'react';

const Navbar = () => {
  return (
    <div className="h-12 w-full bg-backgroundColor border-b-1 fixed top-0 border-white text-white flex justify-between items-center">
      {/* Left side */}
      <div className="w-1/4">
        <h1 className="text-xl font-semibold ml-4">Hello</h1>
      </div>

      {/* Right side */}
      <div className="w-full flex justify-end">
        <ul className=" flex space-x-4 items-center text-base mr-4 "> 
          <li className='xs:min-w-fit pt-0.5 pb-0.5 pl-0.5 pr-0.5 active:border-blue-50 hover:border hover:border-white rounded-md border-transparent border-2 text-sm'>ABOUT ME</li>
          <li className='xs:min-w-fit pt-0.5 pb-0.5 pl-0.5 pr-0.5 active:border-blue-50 hover:border hover:border-white rounded-md border-transparent border-2 text-sm'>PROJECTS</li>
          <li className='xs:min-w-fit pt-0.5 pb-0.5 pl-0.5 pr-0.5 active:border-blue-50 hover:border hover:border-white rounded-md border-transparent border-2 text-sm'>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
