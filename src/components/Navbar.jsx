import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-12 bg-black text-white flex justify-between items-center">
      {/* Left side */}
      <div className="w-1/4">
        <h1 className="text-xl font-semibold ml-4">Hello</h1>
      </div>

      {/* Right side */}
      <div className="w-full ml-4 flex justify-end">
        <ul className="w-72 flex space-x-4 items-center text-base mr-4 "> 
          <li className='pt-0.5 pb-0.5 pl-0.5 pr-0.5 hover:border-white border-transparent border-2'>ABOUT ME</li>
          <li className='pt-0.5 pb-0.5 pl-0.5 pr-0.5 hover:border-white border-transparent border-2'>PROJECTS</li>
          <li className='pt-0.5 pb-0.5 pl-0.5 pr-0.5 hover:border-white border-transparent border-2'>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
