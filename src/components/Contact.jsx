import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';




const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const publicKEY = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {

    const form = useRef();
  
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
            alert("okokoko")
            
        }, (error) => {
            console.log(error.text);
            // const messageContainer = document.createElement('div');
            //     messageContainer.style = `
            //         background-color: white;
            //         width: 10rem;
            //         height: 4rem;

            //         position: absolute;
            //         bottom: 5rem;
            //     `
            // const message200 = document.createElement('div');
            //     message200.style = `
            //     width: 100%;    
            //     height: 1rem;

            //     color: black;
            //     font-size: 1.5rem;
            //     `
            // let body = document.querySelector('body');
            // body.append(messageContainer);
            // messageContainer.append(message200);
        });
    };

    return (
   
    <div id='contact' className='xs:w-full sm:w-full md:w-full lg:w-full xl:w-full  h-[90vh] xs:bg-backgroundColor xs:flex xs:flex-col xs:flex-col-reverse xs:items-center xs:justify-center sm:flex sm:flex-col-reverse md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row justify-around'>

        <form ref={form} onSubmit={sendEmail} className='xs:w-[90%] md:w-1/2 md:pt-24 md:pb-4 md:flex-col'>
            <div className='w-full flex'>
                <div className='w-1/2 h-fit flex flex-col mb-2'>
                    <label htmlFor="name" className='w-full h-fit text-white'>Name</label>
                    <input id='name' name="user_name" type="text" placeholder='Insert your name' className='w-[90%] h-[2rem] border bg-transparent text-white pl-2' required />
                </div>
                <div className='w-1/2 h-fit flex flex-col mb-4'>
                    <label htmlFor="email" className='w-full h-fit text-white'>Email</label>
                    <input id='email' name="user_email" type="text" placeholder='Insert your email addresse' className='w-[90%] h-[2rem] border bg-transparent text-white pl-2' required />
                </div>
            </div>

            <div className='w-full flex flex-col'>
                <div className='w-1/2 h-fit flex-col mb-4'>
                    <label htmlFor="subject" className='w-full h-fit text-white'>Subject</label>
                    
                    <select id='subject' name="subject" type="text" className='w-[90%] h-[2rem] mb-2 border bg-transparent text-white pl-2' required >
                        <option value="default_option" disabled selected hidden></option>
                        <option value="Starting_a_project" className='text-black'>Starting a project</option>
                        <option value="Maintenance_of_a_website" className='text-black'>Maintenance of a website</option>
                        <option value="Technical_issue" className='text-black'>Technical issue</option>
                    </select>
                </div>
                <div className='w-full h-fit'>
                    <label htmlFor="message" className='text-white'>Message</label>
                    <textarea type="text" name="message" id='message' placeholder='Write a message' className='w-[95%] h-[6rem] mb-4 border bg-transparent text-white pl-2 pt-2'required />
                </div>
            </div>
           <div>
            <button type="submit" value="send" className='w-fit h-fit pl-3 pr-3 pt-2 pb-2 rounded-md border border-white text-white hover:bg-white hover:text-backgroundColor'>Submit</button>
           </div>
        </form>

        <div className='xs:w-[90%] xs:h-fit xs:flex-col xs:items-center xs:text-center sm:mt-12 sm:w-2/3 md:w-1/3 lg:w-1/3 xl:w-1/3 h-[20rem] flex flex-col justify-start items-center'>
            <p className='text-white text-[2rem]'>Contact Me</p>
            <p className='text-white xs:w-full xs:mb-4'>
            I'm always here to connect and answer any questions you may have. Whether you want to discuss a potential project, inquire about my services, or just say hello, I'd love to hear from you.
            </p>
        </div>
        
    </div>
    )
}
export default Contact;
