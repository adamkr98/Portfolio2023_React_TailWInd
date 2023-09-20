import React from 'react';
import ProfilePic from '../Images/AdamKrynskiPhotoProfil.jpg';

const Hero = () => {
  return (
    <div className='w-full bg-black flex flex-col items-center'>
        <div className='flex justify-center mt-8 mb-8'>
            <img src={ProfilePic} alt='Profile Picture' className='w-39 h-40 rounded-full' />
        </div>

        <p className='w-1/2 text-white pb-4 flex text-center'>
            Hi I'm Kevin and I'm a Junior Front End Developper / CSS Geek.
        </p>
    </div>
  )
}

export default Hero;