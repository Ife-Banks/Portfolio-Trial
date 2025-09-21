import React,{useRef,useEffect} from 'react'
import Headings from '../Resuables/Headings'
import ContactForm from '../Resuables/ContactForm'

function Contact() {
  const bg1Ref = useRef(null);
   useEffect(() => {
          const colors = ["#FF5733", "#33FF57", "#3357FF", "#1A5E4D", "#BE29D7"];
          const changeColors = () => {
              // Create a copy of the colors array to avoid modifying the original
              const availableColors = [...colors];
              // Select first color and remove it from available options
              const randomIndex1 = Math.floor(Math.random() * availableColors.length);
              const color1 = availableColors[randomIndex1];
              availableColors.splice(randomIndex1, 1);
              // Apply colors
              if (bg1Ref.current) {
                  bg1Ref.current.style.backgroundColor = color1;
              }
          };
  
          // Change immediately
          changeColors();
  
          // Set interval for changes
          const intervalId = setInterval(changeColors, 3000);
  
          // Cleanup
          return () => clearInterval(intervalId);
      }, []);
  return (
    <div className="w-[80%] lg:w-[60%] border border-[#474C54] mx-auto lg:-mb-40 p-5 flex flex-col gap-5 rounded-2xl relative bg-black/20 backdrop-blur-sm shadow-[0_8px_32px_rgba(255,255,255,0.2)]"
    id='contact'>
       <div 
        ref={bg1Ref}
        className="absolute w-50 h-[800px] lg:w-[100px] lg:h-[800px] border rotate-[-100deg] top-0 right-1/2 lg:-top-25 lg:right-1/2 translate-x-1/2 transition-all duration-500 blur-[250px] lg:blur-[150px] -z-2" 
        ></div>
      <main className='flex flex-col xl:flex-row items-center justify-evenly'>
        <Headings text={'Get In Touch'} subText={'Open to new opportunities, collaborations, and meaningful conversations with forward-thinking individuals and teams. To view the portfolio deck or discuss a potential project, feel free to reach out via email or book a call.' } styp={'w-[80%]'} styh1={'text-left'} />
        <ul className='flex xl:flex-col gap-5 border-white p-2 text-white w-full xl:w-fit place-self-end'>
          <li className='flex flex-col '>
            <h1 className='font-workSan text-lg font-medium'>Email:</h1>
            <span className='font-IBM italic text-sm -mt-1 font-light'>Ifeoluwa.bankole05@gmail.com</span>
          </li>
           <li className='flex flex-col'>
            <h1 className='font-workSan text-lg font-medium'>Phone No:</h1>
            <span className='font-IBM italic text-sm -mt-1 font-light'>+234 706 777 0855</span>
          </li>
        </ul>
      </main>
      <ContactForm/>
    </div>
  )
}

export default Contact