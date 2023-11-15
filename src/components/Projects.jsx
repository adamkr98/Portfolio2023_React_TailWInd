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
      <div id="projects" className="w-full bg-backgroundColor flex flex-row justify-around">

            

            
      <div className="w-full min-h-screen bg-white flex flex-wrap justify-around">

{Array.from({ length: 8 }).map((_, index) => (
  <div key={index} className="xs:w-full sm:w-full md:w-2/4 lg:w-1/3 xl:w-1/4 flex flex-col xs:items-center sm:justify-around p-5 mr-1">
    <div className="xs:w-[90%] sm:w-[29rem] md:w-[20rem] lg:w-[22rem] h-[20rem] border-2 border-backgroundColor">
    </div>
    <p className="font-bold font-sans pl-5 mt-5">Lorem ipsum dolor.</p>
    <p className="font-bold font-thin pl-5 h-[3rem]">Lorem ipsum dolor sit amet consectetur.</p>
  </div>
))}

</div>

      
      </div>
     </>
  );
};

export default Projects;
