import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';




const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const publicKEY = process.env.REACT_APP_PUBLIC_KEY;


const Contact = () => {

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isEmptyInput, setIsEmptyInput] = useState(false);
    const form = useRef();
    const succes = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();

        const name = e.target.user_name.value;
        const email = e.target.user_email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;
  
      emailjs.sendForm(serviceID, templateID, form.current, publicKEY, { subject })
        .then((result) => {
            console.log(result.text);
            form.current.reset();
            setIsFormSubmitted(true);
            
        }, (error) => {
            console.log(error.text);
            
        });
    };

    useEffect(() => {
        if (isFormSubmitted) {
          const timer = setTimeout(() => {
            succes.current.remove();
          }, 6000);
    
         
          return () => clearTimeout(timer);
        }
      }, [isFormSubmitted]);

      const handleTypo = (e) => {
        setIsEmptyInput(e.target.value);
      }

      useEffect(() =>{
        console.log(isEmptyInput);
      },[isEmptyInput])

    return (
   
    <div id='contact' className='xs:w-full sm:w-full lg:w-full xl:w-full h-[90vh] xs:bg-red xs:flex xs:flex-col xs:flex-col-reverse xs:items-center xs:justify-center sm:flex sm:flex-col-reverse md:w-full md:flex-row md:justify-around md:items-center lg:flex lg:flex-row xl:flex xl:flex-row bg-backgroundColor'>

        <form ref={form} onSubmit={sendEmail} className='xs:w-[90%] md:w-[45%] md:pt-24 md:pb-4 md:flex-col xs:mb-8'>
            <div className='w-full flex'>
                <div className='w-1/2 h-fit flex flex-col mb-2'>
                    <label htmlFor="name" className='w-full h-fit text-white'>Name</label>
                    <input  id='name' name='user_name' type='text' placeholder='Insert your name' className={`w-[90%] h-[2.5rem] border bg-transparent text-backgroundComplColor pl-2 ${ isEmptyInput ? 'border border-backgroundComplColor' : 'border border-white' }` } required/>
                </div>
                <div className='w-1/2 h-fit flex flex-col mb-4'>
                    <label htmlFor="email" className='w-full h-fit text-white'>Email</label>
                    <input id='email' name='user_email' type='email' placeholder='Insert your email addresse' className={`w-[90%] h-[2.5rem] border border-white bg-transparent text-backgroundComplColor pl-2 ${ isEmptyInput ? 'border border-backgroundComplColor' : 'border border-white' }`} required/>
                </div>
            </div>

            <div className='w-full flex flex-col'>
                <div className='w-1/2 h-fit flex-col mb-4'>
                    <label htmlFor="subject" className='w-full h-fit text-white'>Subject</label>
                    
                    <select id='subject' name="subject" type="text" className={`w-[90%] h-[2.5rem] mb-2 border bg-transparent text-white pl-2 ${ isEmptyInput ? 'border-backgroundComplColor' : 'border border-white' }`} required >
                        <option value="default_option" disabled selected hidden></option>
                        <option value="Starting_a_project" className='text-black'>Starting a project</option>
                        <option value="Maintenance_of_a_website" className='text-black'>Maintenance of a website</option>
                        <option value="Technical_issue" className='text-black'>Technical issue</option>
                    </select>
                </div>

                <div className='w-full h-fit'>
                    <label htmlFor="message" className='text-white'>Message</label>
                    <textarea type="text" name="message" id="message" placeholder="Write a message" className={`w-[95%] h-[6rem] max-h-[10rem] mb-4 border bg-transparent text-backgroundComplColor pl-2 pt-2 ${ isEmptyInput  ? 'border-backgroundComplColor' : '' }`} required
/>

                </div>

            </div>
           <div>

            <button type="submit" onClick={(e)=>{handleTypo(e)}} value="send" className='w-fit h-fit pl-3 pr-3 pt-2 pb-2 rounded-md border border-white text-white hover:bg-white hover:text-backgroundColor'>Submit</button>
           </div>
        </form>

        {isFormSubmitted && (
        <p ref={succes} className="xs:p-4 xs:absolute xs:bottom xs:bottom-8 xs:right-4 xs:text-white">
        Thank you for your submission!
      </p>
        )
      }
      
      <div className=' xs:w-[90%] xs:h-[20rem] xs:flex-col xs:items-center xs:justify-center xs:text-center sm:mt-12 sm:w-2/3 md:mb-[20.5rem] md:w-[45%] lg:w-1/3 xl:w-1/3 flex justify-center items-center'>
    <p className='text-white text-end md:w-full md:h-[10rem] md:text-[3rem] xs:text-center'>
      Have a question, an idea, or a project you'd like to discuss? Feel free to reach out!
    </p>
  </div>
      
        
    </div>
    )
}
export default Contact;
