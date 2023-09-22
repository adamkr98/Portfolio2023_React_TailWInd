// import React from "react"

// const About = () => {

//     const textToShow = document.querySelector(".hideText");

//     const observer = new IntersectionObserver(entries => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//             entry.target.classList.add('showPresentation');
//         }
//     });

// observer.observe(textToShow);

import React, { useEffect, useRef } from "react";

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textToShow = textRef.current;

    if (textToShow) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            textToShow.classList.add("opacity-100", "translate-y-[-5rem]");
          }
        },
        {
          threshold: 1, // You can adjust the threshold as needed
        }
      );

      observer.observe(textToShow);

      return () => {
        observer.disconnect(); // Clean up the observer when unmounting
      };
    }
  }, []);

  return (
    <div className="w-full h-20rem flex justify-end">
      <p
        ref={textRef}
        className="w-2/5 opacity-0 transition-transform duration-800 ease-in translate-y-0 text-start mt-[20rem] mb-[4rem] mr-[4rem] "
      >
        Having studied Web Design, I am curently in process of expanding my knowledge in Web Development at BeCode. After creating some projects with HTML/CSS/JS, I find myself passionate about the front-end side and would like to expand my skills during an internship. Let's connect!
      </p>
    </div>
  );
};

export default About;


