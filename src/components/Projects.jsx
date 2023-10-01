import React, { useEffect, useRef } from "react";
import { Link } from 'react-scroll';
import project1 from '../Images/todoList.jpg';


const Projects = () => {
  const row1 = useRef(null);
  const row2 = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, 
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-[-3rem]");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (row1.current) {
      observer.observe(row1.current);
    }

    if (row2.current) {
      observer.observe(row2.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <>
      <div id="projects" className="w-full bg-backgroundColor flex-col items-center justify-around">

      {/* xs:bg-pink-600 sm:bg-red-600 md:bg-yellow-500 xl:bg-orange-600 */}

        <div ref={row1} className="w-full xs:w-full xs:flex-col xs:justify-center xs:items-center sm:flex sm:justify-center md:flex-row md:justify-around mb-12 opacity-0 transition-opacityTopSlide duration-500 ease-in">

        <div className="mb-12 xs:mb-8 xs:w-[90%] xs:h-[20rem] xs:mx-auto sm:mb-8 sm:w-[80%] sm:mx-auto md:w-[45%] bg-[#EAEAEB] rounded-md md:border overflow-hidden md:w-[40%] md:h-fit">
          <img src={project1} alt='Profile Picture' className="xs:w-full xs:h-auto"></img>
        </div>

          
        <div className="xs:mb-0 xs:w-[90%] xs:h-[20rem] xs:mx-auto sm:mb-8 sm:w-[80%] sm:mx-auto md:w-[45%] bg-[#EAEAEB] rounded-md overflow-hidden md:w-[40%] md:h-fit">
          <img src={project1} alt='Profile Picture' className="xs:w-full xs:h-auto"></img>
        </div>

          

        </div>

        {/* xs:bg-pink-600 sm:bg-red-600 md:bg-yellow-500 xl:bg-orange-600 */}

        <div ref={row2} className="w-full xs:w-full xs:flex-col xs:justify-center xs:items-center sm:flex sm:justify-center md:flex-row md:justify-around opacity-0 transition-opacityTopSlide duration-500 ease-in">

          <div className="mb-12 xs:mb-8 xs:w-[90%] xs:h-[20rem] xs:mx-auto sm:mb-8 sm:w-[80%] sm:mx-auto md:w-[45%] bg-[#EAEAEB] rounded-md md:border overflow-hidden md:w-[40%] md:h-fit">
            <img src={project1} alt='Profile Picture' className="xs:w-full xs:h-auto"></img>
          </div>
          
          <div className="mb-12 xs:mb-0 xs:w-[90%] xs:h-[20rem] xs:mx-auto sm:mb-8 sm:w-[80%] sm:mx-auto md:w-[45%] bg-[#EAEAEB] rounded-md md:w-[40%] overflow-hidden md:h-fit">
            <img src={project1} alt='Profile Picture' className="xs:w-full xs:h-auto"></img>
          </div>

        </div>



        
</div>

    </>
  );
};

export default Projects;
