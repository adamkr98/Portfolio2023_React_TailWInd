import React from 'react';
import ProfilePic from '../Images/AdamKrynskiPhotoProfil.jpg';

// const Hero = () => {
//   return (
//     <div className='w-full bg-black flex flex-col items-center'>
//         <div className='flex justify-center mt-8 mb-8'>
//             <img src={ProfilePic} alt='Profile Picture' className='w-39 h-40 rounded-full' />
//         </div>

//         <p className='w-1/2 text-white pb-4 flex justify-center text-center'>
//             Hi I'm Adam and I'm a Junior Front End Developper / CSS Geek.
//         </p>
//     </div>
//   )
// }

// export default Hero;

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
  <div className='w-full bg-black flex flex-col items-center md:pt-12 md:pb-12'>
    <div className='w-full md:w-4/5 flex flex-col md:flex-row-reverse justify-between items-center'>  
      <div className='w-2/3 md:w-1/3 mt-4 flex flex-col items-center md:flex-row md:items-center md:justify-between'>
        <img src={ProfilePic} alt='Profile Picture' className='w-5 rounded-md mb-4 md:mb-0' />
      </div>

      <div className='md:w-2/3 md:flex-col md:items-center flex flex-col items-center justify-center'>
        <p className='w-full text-white pb-4 ml-12 mr-12 text-center text-lg md:mr-12'>
          Hi I'm Adam and I'm a Junior Front End Developer / CSS Geek.
        </p>

        <button className='w-2/3 mx-auto text-white border border-blue-50 flex justify-center rounded-md hover:text-black hover:bg-white mb-4 md:mb-8 md:w-28 md:h-8 md:items-center'>
          Say Hello
        </button>

        <div className='w-1/3 md:w-1/4 flex justify-between items-center mb-4'>
          <FaGithub className="w-12 h-12 text-gray-500 hover:text-gray-700" />
          <FaLinkedin className="w-12 h-12 text-gray-500 hover:text-gray-700" />
        </div>
      </div>
    </div>

  </div>


  

  )
}

export default Hero;