import React from 'react';

const Navbar = () => {
  return (
    <div className="h-12 bg-black text-white flex justify-between items-center">
      {/* Left side */}
      <div className="w-1/4">
        <h1 className="text-xl font-semibold ml-4">Hello</h1>
      </div>

      {/* Right side */}
      <div className="w-full flex justify-end">
        <ul className=" flex space-x-4 items-center text-base mr-4 "> 
          <li className='xs:min-w-fit pt-0.5 pb-0.5 pl-0.5 pr-0.5 active:border-blue-50 hover:border-white border-transparent border-2'>ABOUT ME</li>
          <li className='pt-0.5 pb-0.5 pl-0.5 pr-0.5 hover:border-white border-transparent border-2'>PROJECTS</li>
          <li className='pt-0.5 pb-0.5 pl-0.5 pr-0 hover:border-red border-transparent border-2'>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
