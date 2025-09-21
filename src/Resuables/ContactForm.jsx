import React from 'react'
import Lightbtn from "../Resuables/Lightbtn"
function ContactForm() {
  return ( 
    <form action="" className='text-white space-y-5'>
      
      {/* Name Input */}
      <div className="group border-b-2 w-[50%] border-gray-500 py-1 flex gap-2 items-center transition-all duration-300 focus-within:border-[#871be6] w-[60%]">
        <label 
          htmlFor="name" 
          className='text-xl text-gray-500 transition-all duration-300 group-focus-within:text-[#871be6]'
        >
          Name*:
        </label>
        <input 
          id="name"
          type="text" 
          className='pr-2 outline-none text-xl bg-transparent w-full'
        />
      </div>
      {/* Email Input */}
      <div className="group border-b-2 w-[50%] border-gray-500 py-1 flex gap-2 items-center transition-all duration-300 focus-within:border-[#871be6] w-[60%]">
        <label 
          htmlFor="email" 
          className='text-xl text-gray-500 transition-all duration-300 group-focus-within:text-[#871be6]'
        >Email*:
        </label>
        <input 
          id="email"
          type="email" 

          className='pr-2 outline-none text-xl bg-transparent w-full'
        />
      </div>

      {/* Name Input */}
      <div className="group border-b-2 w-[50%] border-gray-500 py-1 flex gap-2 items-center transition-all duration-300 focus-within:border-[#871be6] w-[60%]">
        <label 
          htmlFor="Location" 
          className='text-xl text-gray-500 transition-all duration-300 group-focus-within:text-[#871be6]'
        >
          Location:
        </label>
        <input 
          id="location"
          type='location' 
          className='pr-2 outline-none text-xl bg-transparent w-full'
        />
      </div>
      <div className="group border-b-2 w-[50%] border-gray-500 py-1 flex gap-2 items-center transition-all duration-300 focus-within:border-[#871be6] w-[60%]">
        <label 
          htmlFor="subject" 
          className='text-xl text-gray-500 transition-all duration-300 group-focus-within:text-[#871be6]'
        >
          Subject*:
        </label>
        <input 
          id="subject"
          type="text" 
          className='pr-2 outline-none text-xl bg-transparent w-full'
        />
      </div>
       <div className="group border-b-2 w-[50%] border-gray-500 py-1 flex gap-2 items-center transition-all duration-300 focus-within:border-[#871be6] w-[60%]">
        <label 
          htmlFor="Message" 
          className='text-xl text-gray-500 transition-all duration-300 group-focus-within:text-[#871be6] place-self-start'
        >
          Message*:
        </label>
        <textarea 
          id="Message"
          rows={1}
          type="text" 
          className='pr-2 outline-none text-xl bg-transparent w-full'
        />
      </div>
      <button 
        className={`flex justify-start items-start py-3 px-6  text-white font-semibold bg-[#871be6] hover:bg-[#9a3aed] transition-colors rounded-xl`}>
         Submit
        </button>
      
    </form>
  )
}

export default ContactForm
