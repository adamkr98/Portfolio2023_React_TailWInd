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
    <div className='w-full md:h-[calc(3/4*100vh)] bg-black flex flex-col items-center md:pt-12 md:pb-12'>
      <div className='w-full md:w-4/5 flex flex-col md:flex-row-reverse justify-between items-center'>  

        <div className='w-2/3 md:w-1/3 mt-4 flex flex-col items-center md:flex-row md:items-center md:justify-between animate-slideLft'>
          <img src={ProfilePic} alt='Profile Picture' className='w-5 rounded-md mb-4 md:mb-0' />
        </div>

        <div className='md:min-h-[400px] md:w-2/3 md:flex-col md:items-center flex flex-col items-center justify-center animate-slideRgt'>
          <p className=' text-white pb-4 ml-12 mr-12 text-center text-lg'>
            Hi I'm Adam and I'm a Junior Front End Developer / CSS Geek.
          </p>

          <button className='xs:w-40 xs:h-12 xs:mb-8 text-white border border-blue-50  rounded-md hover:text-black hover:bg-red mb-4'>
            Say Hello
          </button>




          <div className='xs:mb-12 w-1/3 md:w-1/3 flex justify-between items-center mb-4'>
            <a href="https://github.com/adamkr98" target='blank' rel="noopener noreferrer">
              <FaGithub className="w-12 h-12 text-gray-500 hover:text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/adam-krynski" target='blank' rel="noopener noreferrer">
              <FaLinkedin className="w-12 h-12 text-gray-500 hover:text-gray-700" />
            </a>
          </div>
        </div>
      </div>

    </div>


  

  )
}

export default Hero;