import React, { useEffect } from 'react';import ProfilePic from '../Images/AdamKrynskiPhotoProfil.jpg';
import { Link } from 'react-scroll';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {

  useEffect(() => {
    const profilePic = document.querySelector("img");
  
    profilePic.addEventListener("click", () => {
      profilePic.style.transform = 'rotate(360deg)';
      
      profilePic.style.transition = 'ease-in 1s';
    })
  }, []);


  return (
    <div id="main" className='overflowX w-full md:h-[105vh] overflow-hidden bg-white flex flex-col items-center md:pt-12 md:pb-12'>
      <div className='w-full md:w-4/5 flex flex-col md:flex-row-reverse justify-between items-center'>  

        <div className='w-2/3 md:w-1/3 mt-4 flex flex-col items-center md:flex-row md:items-center md:justify-between animate-slideLft transition-transform duration 100'>
          <img src={ProfilePic} alt='Profile Picture' className='mt-12 xs:w-5 xs:mt-24 md:w-5 rounded-[14rem] mb-4 md:mb-0' />
        </div>

        <div className='md:min-h-[400px] md:w-2/3 md:mt-20 md:flex-col md:items-center flex flex-col items-center justify-center animate-slideRgt'>
          <p className=' text-black pb-4 ml-12 mr-12 mt-14 text-center text-xl'>
            Hi I'm Adam and I'm a Junior Front End Developer / CSS Geek.
          </p>

          <button className='xs:w-40 xs:h-12 xs:mb-8 text-black border-2 border-backgroundColor rounded-md hover:text-white hover:bg-backgroundColor mb-4 font-semibold'>
          <Link to='contact' smooth={true} duration={1000} offset={-5 * 15}>Let's talk!</Link>
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


// import React, { useEffect, useRef } from "react";
// import { Link } from 'react-scroll';
// import project1 from '../Images/todoList.jpg';


// const Projects = () => {
//   const row1 = useRef(null);
//   const row2 = useRef(null);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.5, 
//     };

//     const handleIntersection = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("opacity-100", "translate-y-[-3rem]");
//           observer.unobserve(entry.target);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, observerOptions);

//     if (row1.current) {
//       observer.observe(row1.current);
//     }

//     if (row2.current) {
//       observer.observe(row2.current);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, []);


//   return (
//     <>
//       <div id="projects" className="w-full bg-backgroundColor flex-col items-center justify-around">

//       {/* xs:bg-pink-600 sm:bg-red-600 md:bg-yellow-500 xl:bg-orange-600 */}

//         <div ref={row1} className="w-full xs:w-full xs:flex-col xs:justify-center xs:items-center sm:flex sm:justify-center md:flex-row md:justify-around mb-12 opacity-0 transition-opacityTopSlide duration-500 ease-in">

//         <div className="mb-12 xs:mb-8 xs:w-[90%] xs:h-[20rem] xs:mx-auto sm:mb-8 sm:w-[80%] sm:mx-auto md:w-[35%] bg-[#EAEAEB] rounded-md md:border overflow-hidden md:w-[40%] md:h-fit relative">
//           <img src={project1} alt='Profile Picture' className="xs:w-full xs:h-auto"></img>
         
//         </div>

          
//         <div className="mb-12 xs:mb-8 xs:w-[90%] xs:h-[20rem] xs:mx-auto sm:mb-8 sm:w-[80%] sm:mx-auto md:w-[35%] bg-[#EAEAEB] rounded-md md:border overflow-hidden md:w-[40%] md:h-fit relative">
//           <img src={project1} alt='Profile Picture' className="xs:w-full xs:h-auto"></img>
//           <div className="w-full h-20 absolute bottom-0 pt-8 bg bg-[#788AA3] flex justify-between">
//             <div className="w-1/2 text-white flex justify-center items-center">
//               CODE
//             </div>
//             <div className="w-1/2 text-white flex justify-center items-center">
//               WEBSITE
//             </div>
//           </div>
//         </div>

          

//         </div>

//         {/* xs:bg-pink-600 sm:bg-red-600 md:bg-yellow-500 xl:bg-orange-600 */}

//         <div ref={row2} className="w-full xs:w-full xs:flex-col xs:justify-center xs:items-center sm:flex sm:justify-center md:flex-row md:justify-around opacity-0 transition-opacityTopSlide duration-500 ease-in">

//         <div className="mb-12 xs:mb-8 xs:w-[90%] xs:h-[20rem] xs:mx-auto sm:mb-8 sm:w-[80%] sm:mx-auto md:w-[35%] bg-[#EAEAEB] rounded-md md:border overflow-hidden md:w-[40%] md:h-fit relative">
//           <img src={project1} alt='Profile Picture' className="xs:w-full xs:h-auto"></img>
//           <div className="w-full h-20 absolute bottom-0 pt-8 bg bg-[#788AA3] flex justify-between">
//             <div className="w-1/2 text-white flex justify-center items-center">
//               CODE
//             </div>
//             <div className="w-1/2 text-white flex justify-center items-center">
//               WEBSITE
//             </div>
//           </div>
//         </div>
          
//         <div className="mb-12 xs:mb-8 xs:w-[90%] xs:h-[20rem] xs:mx-auto sm:mb-8 sm:w-[80%] sm:mx-auto md:w-[35%] bg-[#EAEAEB] rounded-md md:border overflow-hidden md:w-[40%] md:h-fit relative">
//           <img src={project1} alt='Profile Picture' className="xs:w-full xs:h-auto"></img>
//           <div className="w-full h-20 absolute bottom-0 pt-8 bg bg-[#788AA3] flex justify-between">
//             <div className="w-1/2 text-white flex justify-center items-center">
//               CODE
//             </div>
//             <div className="w-1/2 text-white flex justify-center items-center">
//               WEBSITE
//             </div>
//           </div>
//         </div>

//         </div>



        
// </div>

//     </>
//   );
// };

// export default Projects;
