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

            <div ref={row1} className="w-full xs:w-full xs:flex-col xs:justify-center xs:items-center sm:flex sm:justify-center md:flex-row md:justify-around opacity-0 transition-opacityTopSlide duration-500 ease-in">

              <div className="mb-12 xs:w-[90%] xs:h-[20rem] xs:mx-auto sm:w-[80%] sm:mx-auto md:w-[35%] bg-[#EAEAEB] rounded-md md:border overflow-hidden md:w-[40%] md:h-fit relative">
                <img src={project1} alt='Project 1' className="xs:w-full xs:h-auto"></img>
                
                <div className="w-full h-20 absolute bottom-0 pt-8 bg bg-[#788AA3] flex justify-between">
                  <div className="w-1/2 h-25 text-white flex flex-col justify-center items-center hover:bg-gray-400 border">
                    <a href="https://github.com/adamkr98/todoList_1" className="text-white text-center block py-8 px-6">CODE</a>
                  </div>

                  <div className="w-1/2 h-25 text-white flex flex-col justify-center items-center hover:bg-gray-400 border">
                    <a href="https://adamkr98.github.io/todoList_1/" className="text-white text-center block py-2 px-6">WEBSITE</a>
                  </div>
              </div>


              </div>

              <div className="mb-12 xs:w-[90%] xs:h-[20rem] xs:mx-auto sm:w-[80%] sm:mx-auto md:w-[35%] bg-[#EAEAEB] rounded-md md:border overflow-hidden md:w-[40%] md:h-fit relative">
                <img src={project1} alt='Project 1' className="xs:w-full xs:h-auto"></img>
                
                <div className="w-full h-20 absolute bottom-0 pt-8 bg bg-[#788AA3] flex justify-between">
                  <div className="w-1/2 h-25 text-white flex flex-col justify-center items-center hover:bg-gray-400 border">
                      <a href="https://github.com/adamkr98/todoList_1" className="text-white text-center block py-8 px-6">CODE</a>
                    </div>

                    <div className="w-1/2 h-25 text-white flex flex-col justify-center items-center hover:bg-gray-400 border">
                      <a href="https://adamkr98.github.io/todoList_1/" className="text-white text-center block py-2 px-6">WEBSITE</a>
                    </div>
                    
                  </div>

              </div>

            </div>

            <div ref={row2} className="w-full xs:w-full xs:flex-col xs:justify-center xs:items-center sm:flex sm:justify-center md:flex-row md:justify-around opacity-0 transition-opacityTopSlide duration-500 ease-in">

              <div className="xs:mb-12 xs:w-[90%] xs:h-[20rem] xs:mx-auto sm:w-[80%] sm:mx-auto md:w-[35%] bg-[#EAEAEB] rounded-md md:border overflow-hidden md:w-[40%] md:h-fit relative md:mt-12">
                <img src={project1} alt='Project 1' className="xs:w-full xs:h-auto"></img>
                
                <div className="w-full h-20 absolute bottom-0 pt-8 bg bg-[#788AA3] flex justify-between">
                  <div className="w-1/2 h-25 text-white flex flex-col justify-center items-center hover:bg-gray-400 border">
                    <a href="https://github.com/adamkr98/todoList_1" className="text-white text-center block py-8 px-6">CODE</a>
                  </div>

                  <div className="w-1/2 h-25 text-white flex flex-col justify-center items-center hover:bg-gray-400 border">
                    <a href="https://adamkr98.github.io/todoList_1/" className="text-white text-center block py-2 px-6">WEBSITE</a>
                  </div>

                </div>

              </div>

              <div className=" xs:w-[90%] xs:h-[20rem] xs:mx-auto sm:w-[80%] sm:mx-auto md:w-[35%] bg-[#EAEAEB] rounded-md md:border overflow-hidden md:w-[40%] md:h-fit relative">
                <img src={project1} alt='Project 1' className="xs:w-full xs:h-auto"></img>
                
                <div className="w-full h-20 absolute bottom-0 pt-8 bg bg-[#788AA3] flex justify-between">
                <div className="w-1/2 h-25 text-white flex flex-col justify-center items-center hover:bg-gray-400 border">
                    <a href="https://github.com/adamkr98/todoList_1" className="text-white text-center block py-8 px-6">CODE</a>
                  </div>

                  <div className="w-1/2 h-25 text-white flex flex-col justify-center items-center hover:bg-gray-400 border">
                    <a href="https://adamkr98.github.io/todoList_1/" className="text-white text-center block py-2 px-6">WEBSITE</a>
                  </div>

                </div>

              </div>

            </div>
</div>

     </>
  );
};

export default Projects;
