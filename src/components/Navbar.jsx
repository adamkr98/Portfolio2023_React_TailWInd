import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-12 bg-black text-white flex justify-between items-center">
      {/* Left side */}
      <div className="w-1/2">
        <h1 className="text-xl font-semibold ml-8">Hello</h1>
      </div>

      {/* Right side */}
      <div className="w-1/2 ml-4 flex justify-end">
        <ul className="w-64 flex space-x-4 items-center text-sm mr-8 "> 
          <li className='w-16'>ABOUT ME</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
