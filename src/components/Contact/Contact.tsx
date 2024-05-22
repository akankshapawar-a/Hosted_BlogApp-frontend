import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import { useNavigate } from "react-router-dom";


const Contact = () => {
  const email = "akankshaspawar11@gmail.com";
  const navigate=useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  // function sendEmail(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   if (formRef.current) {
  //     // Extract form data
  //     const formData = new FormData(formRef.current);
  //     const data: Record<string, string> = {};
  //     formData.forEach((value, key) => {
  //       data[key] = value as string;
  //     });
  
  //     // Send email with form data
  //     emailjs.send("service_bn25gvh",
  //       "template_d9q528i",
  //       data,
  //       "aTU2AKHcfOn7qsKfL",
  //     ).then((response) => {
       

  //       console.log('Email sent successfully:', response);
  //     }, (error) => {
  //       console.error('Email sending failed:', error);
  //     });
  //   } else {
  //     console.error("Form reference is null.");
  //   }
  // }
  
  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data: Record<string, string> = {};
      formData.forEach((value, key) => {
        data[key] = value as string;
      });
  
      emailjs.send(
        "service_bn25gvh",
        "template_d9q528i",
        data,
        "aTU2AKHcfOn7qsKfL"
      ).then((response) => {
        console.log('Email sent successfully:', response);
        // Reset form after successful submission
        if (formRef.current) {
          formRef.current.reset();
        }
      }, (error) => {
        console.error('Email sending failed:', error);
      });
    } else {
      console.error("Form reference is null.");
    }
  }
  

  
  return (
    <div className=' dark:bg-gray-800 h-screen space-y-6'>
      <div className='relative  dark:bg-gray-800 ' >

        <img
          src="http://mrtaba.ir/image/bg2.jpg"

          className='w-full h-80'
          alt="image"

        />
  
      </div>
        {/* <div className=' sm:flex ss:flex-none xs:flex-none  mt-5 mx-8 justify-center  dark:bg-gray-800'>
        <p className='flex text-2xl text-gray-600 sm:text-left ss:text-center xs:text-center mt-5 font-bold dark:text-white'>
          You can reach us via {' '}
        </p>
        <div className='flex space-x-2  dark:bg-gray-800'>
         
          <div className=' dark:bg-gray-800 mt-4 ml-2'>
            <a href='https://www.instagram.com/akankshapawar1302' className='dark:bg-gray-800' >
              <img src="data:image/jpeg;base64,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"
                className='w-10 h-10  dark:bg-gray-800 rounded-full ' />
            </a>
          </div>
          <div className=' dark:bg-gray-800 mt-4 '>
            <a href='https://github.com/akankshapawar-a' className='dark:bg-gray-800'>
              <img src="data:image/png;base64,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"
                className='w-10 h-10 rounded-full  ' />
            </a>
          </div>
        </div>
      </div>   */}


 <div className="relative flex items-top justify-center min-h-screen  bg-white dark:bg-gray-800 sm:mt-0 sm:pt-0">
    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                    <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                        Get in touch
                    </h1>
                    <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                        Fill the Form to start a conversation
                    </p>

                    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                    </div>

                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                            +91 8830027200
                        </div>
                    </div>

                    <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                            <a href={`mailto:${email}`}>{email}</a>
                        </div>
                    </div>
                </div>

                <form  className="p-6 flex flex-col justify-center" ref={formRef} onSubmit={sendEmail}>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="hidden">Full Name</label>
                        <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                    </div>

                    <div className="flex flex-col mt-2">
                        <label htmlFor="email" className="hidden">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                    </div>

                    <div className="flex flex-col mt-2">
                        <label htmlFor="message" className="hidden">Message</label>
                        <textarea name="message" id="message" placeholder="Your Message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></textarea>
                    </div>

                    <button type="submit" className="md:w-32 bg-indigo-500  text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-900 transition ease-in-out duration-300">
                        Submit
                    </button>
                </form>
            </div>
            <div className=' sm:flex ss:flex-none xs:flex-none  mt-5 mx-8 justify-center  dark:bg-gray-800'>
        <p className='flex text-2xl text-gray-600 sm:text-left ss:text-center xs:text-center mt-5 font-bold dark:text-white'>
          You can reach us via {' '}
        </p>
        <div className='flex space-x-2  dark:bg-gray-800'>
        
          <div className=' dark:bg-gray-800 mt-4 ml-2'>
            <a href='https://www.instagram.com/akankshapawar1302' className='dark:bg-gray-800' >
              <img src="data:image/jpeg;base64,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"
                className='w-10 h-10  dark:bg-gray-800 rounded-full ' />
            </a>
          </div>
          <div className=' dark:bg-gray-800 mt-4 '>
            <a href='https://github.com/akankshapawar-a' className='dark:bg-gray-800'>
              <img src="data:image/png;base64,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"
                className='w-10 h-10 rounded-full  ' />
            </a>
          </div>
        </div>
      </div>  
        </div>
    </div>
</div> 
     

    </div>
  )
}

export default Contact
