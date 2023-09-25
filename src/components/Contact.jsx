import React from 'react';
import { Link } from 'react-scroll';


const Contact = () => {

    return (
   
    <div id='contact' className='w-full h-[90vh] bg-backgroundColor flex justify-around pl-24 items-center'>
        <form action="" className='w-1/2 pt-24 pb-4 flex-col'>
            <div className='w-full flex'>
                <div className='w-1/2 h-fit flex flex-col mb-2'>
                    <label htmlFor="name" className='w-full h-fit text-white'>Name</label>
                    <input id='name' type="text" className='w-[90%] h-[2rem] border bg-transparent text-white pl-2' required />
                </div>
                <div className='w-1/2 h-fit flex flex-col mb-4'>
                    <label htmlFor="email" className='w-full h-fit text-white'>Email</label>
                    <input id='email' type="text" className='w-[90%] h-[2rem] border bg-transparent text-white pl-2' required />
                </div>
            </div>

            <div className='w-full flex flex-col'>
                <div className='w-1/2 h-fit flex-col mb-4'>
                    <label htmlFor="subject" className='w-full h-fit text-white'>Subject</label>
                    
                    <select id='subject' type="text" className='w-[90%] h-[2rem] mb-2 border bg-transparent text-white pl-2' required >
                        <option value="default_option" disabled selected hidden></option>
                        <option value="option2" className='text-black'>Starting a project</option>
                        <option value="option3" className='text-black'>Maintenance of a website</option>
                        <option value="option4" className='text-black'>Technical issue</option>
                    </select>
                </div>
                <div className='w-full h-fit'>
                    <label htmlFor="message" className='text-white'>Message</label>
                    <textarea type="text" id='message' className='w-[95%] h-[6rem] mb-4 border bg-transparent text-white pl-2'required />
                </div>
            </div>
           <div>
            <button className='w-fit h-fit pl-3 pr-3 pt-2 pb-2 rounded-md border border-white text-white hover:bg-white hover:text-backgroundColor'>Submit</button>
           </div>
        </form>

        <div className='w-1/3 h-[20rem] flex flex-col justify-start items-center'>
            <p className='text-white text-[2rem]'>Contact Me</p>
            <p className='text-white'>
            I'm always here to connect and answer any questions you may have. Whether you want to discuss a potential project, inquire about my services, or just say hello, I'd love to hear from you.
            </p>
        </div>
        
    </div>
    )
}
export default Contact;
//     <div className='w-full h-[90vh] pt-48 bg-backgroundColor border border-white flex justify-center'>
// <form className='w-2/4 h-[25rem] flex flex-col items-center justify-center border border-red' action="" method="post">
              
//               <div className='w-[90%] h-fit flex '>
//                   <div className="w-[80%] mb-2 flex flex-col justify-start"> 
//                       <label htmlFor="name" className='text-white'>Name</label>
//                       <input type="text" id="name" name="name" className='w-[90%] h-[2rem] rounded-md border border-backgroundColor mb-2'/>
//                   </div>
//                   <div className="w-[80%] mb-2 flex-col justify-start"> 
//                       <label htmlFor="email" className='text-white'>Email</label>
//                       <input type="text" id="email" name="email" className='w-[90%] rounded-md h-[2rem] border border-backgroundColor'/>
//                   </div>
//               </div>
//               <div className='w-[90%] mb-2 flex-col items-start'>
//                   <label htmlFor="subject" className='text-white flex'>Subject</label>
//                   <select type="text" className='w-[50%] h-[2rem] text-white rounded-md flex'>
//                       <option value="">Creating a new web page</option>
//                   </select>
//               </div>
//               <div className="w-[90%] mb-24 flex flex-col justify-start border border-white"> 
//                   <label htmlFor="message" className='text-white'>Message</label>
//                   <textarea type="text" id="email" name="email" className='w-[60%] h-[6rem] rounded-md border border-backgroundColor'/>
//               </div>
//           </form>
// </div>

