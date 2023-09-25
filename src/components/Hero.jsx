import React, { useEffect } from 'react';import ProfilePic from '../Images/AdamKrynskiPhotoProfil.jpg';

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

  useEffect(() => {
    const profilePic = document.querySelector("img");
  
    profilePic.addEventListener("click", () => {
      profilePic.style.transform = 'rotateY(180deg)';
    })
  }, []);


  return (
    <div className='overflowX w-full md:h-[105vh] overflow-hidden bg-white flex flex-col items-center md:pt-12 md:pb-12'>
      <div className='w-full md:w-4/5 flex flex-col md:flex-row-reverse justify-between items-center'>  

        <div className='w-2/3 md:w-1/3 mt-4 flex flex-col items-center md:flex-row md:items-center md:justify-between animate-slideLft transition-transform duration 100'>
          <img src={ProfilePic} alt='Profile Picture' className='mt-12 xs:w-5 xs:mt-24 md:w-5 rounded-[12rem] mb-4 md:mb-0' />
        </div>

        <div className='md:min-h-[400px] md:w-2/3 md:mt-20 md:flex-col md:items-center flex flex-col items-center justify-center animate-slideRgt'>
          <p className=' text-black pb-4 ml-12 mr-12 mt-14 text-center text-lg'>
            Hi I'm Adam and I'm a Junior Front End Developer / CSS Geek.
          </p>

          <button className='xs:w-40 xs:h-12 xs:mb-8 text-black border-2 border-backgroundColor rounded-md hover:text-white hover:bg-backgroundColor mb-4 font-semibold'>
            Let's talk!
          </button>




          <div className='xs:mb-12 w-1/3 md:w-1/3 flex justify-between items-center mb-4'>
            <a href="https://github.com/adamkr98" target='blank' rel="noopener noreferrer">
              <FaGithub className="w-12 h-12 text-backgroundColor hover:text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/adam-krynski" target='blank' rel="noopener noreferrer">
              <FaLinkedin className="w-12 h-12 text-backgroundColor hover:text-gray-700" />
            </a>
          </div>
        </div>
      </div>

    </div>


  

  )
}

export default Hero;