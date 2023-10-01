import React, { useEffect, useRef } from "react";
import { Link } from 'react-scroll';


const words = ["code", "passion", "creation"];

const About = () => {


  return (
      <div className="w-full flex h-[40rem] xs:justify-center justify-center ">
        {/* <div className="hidden w-1/2 justify-center items-start">
            <p className="text-white sm:block md:block w-fit text-[5rem]">&lt;<span id="textDynamic" className="text-[5vw]"></span>&gt;
            </p>
        </div> */}
        
             
        <div id="about" className="w-full bg-backgroundColor flex h-[40rem] xs:justify-center justify-center items-center">
          <div className="w-[90%] flex justify-center items-center md:w-2/3 ">
            <p className="md:text-[2rem] sm:w-[80%] sm:w-[40%] md:w-3/3 md:h-[28rem] md:text-[2rem] text-white transition-opacityTopSlide duration-800 ease-in transform translate-y-0 text-center xs:pb-12">
                        Having studied Web Design, I am curently in process of expanding my knowledge in Web Development at BeCode. After creating some projects with <span className="font-semibold">HTML/CSS/JS</span>, I find myself passionate about the front-end side and would like to expand my skills during an internship. <span className="text-[2rem]">Let's connect!</span>
            </p>
          </div>  
        </div>
      </div>
  );
};

export default About;


