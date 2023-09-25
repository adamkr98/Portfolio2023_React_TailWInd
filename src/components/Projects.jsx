import React, { useEffect, useRef } from "react";
import { Link } from 'react-scroll';


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
          entry.target.classList.add("opacity-100", "translate-y-[-10rem]");
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
      <div id="projects" className='bg-backgroundColor w-full h-fit flex-col items-center justify-around'>

        <div ref={row1} className='flex justify-around mb-12 opacity-0 transition-opacityTopSlide duration-500 ease-in'>
          <div className='w-[30rem] h-[20rem] bg-[#EAEAEB] rounded-md'></div>
          <div className='w-[30rem] h-[20rem] bg-[#EAEAEB] rounded-md'></div>
        </div>

        <div ref={row2} className='flex justify-around mt-20 opacity-0 transition-opacityTopSlide duration-500 ease-in'>
          <div className='w-[30rem] h-[20rem] bg-[#EAEAEB] rounded-md'></div>
          <div className='w-[30rem] h-[20rem] bg-[#EAEAEB] rounded-md'></div>
        </div>

      </div>
    </>
  );
};

export default Projects;
