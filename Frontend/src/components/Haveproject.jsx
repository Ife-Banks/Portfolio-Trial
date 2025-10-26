// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Contact from './Contact.jsx';
import { Link } from 'react-scroll';
import Headings from '../Resuables/Headings';

const HaveProject = () => {
  return (
    <section className='relative z-2 bg-[#0E141F] pt-20 pb-10 px-4 flex flex-col gap-20'
    >
        <div
            className='max-w-6xl mx-auto flex flex-col items-center gap-6 text-center'
            id='have-project'
        >
            <Headings
                badge="Project Idea?"
                text="Let's discuss "
                highlightText="your project!"
                subText="Have a project in mind? Let’s bring it to life. Whether it’s a website, web service, or fullstack application, tailored solutions are built to match your goals and deliver real impact."
                styh1="text-white font-workSan text-2xl md:text-2xl font-semibold max-w-4xl"
                styp="text-[#a5acb5] font-workSan text-lg font-light max-w-xl"
                animate={true} // Optional: if your Headings component supports animation props
            />

            <Link
                to='contact'
                smooth={true}
                duration={500}
                target='_blank'
                rel='noopener noreferrer'
                className="inline-flex items-center justify-center py-3 px-6 rounded-md text-white font-semibold bg-[#871be6] gap-2
    hover:bg-[#9a3aed] hover:scale-105 hover:shadow-[0_5px_15px_rgba(135,27,230,0.4)]
    active:scale-95
    transition-all duration-300 ease-out cursor-pointer"
            >
                <span className='font-workSan text-md font-medium'>Let's work together</span>
                <motion.div
                    style={{
                        width: "25px",
                        height: "24px",
                        position: "relative",
                        overflow: "visible"
                    }}
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        style={{
                            position: "absolute",
                            left: 0
                        }}
                        animate={{
                            x: ["0%", "30%", "0%"],
                            scale: [1, 1.2, 1],
                            transition: {
                                repeat: Infinity,
                                duration: 1.2,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <path
                            d="M18.42 11.6202C18.3724 11.4974 18.301 11.3853 18.21 11.2902L13.21 6.29019C13.1168 6.19695 13.0061 6.12299 12.8842 6.07253C12.7624 6.02207 12.6319 5.99609 12.5 5.99609C12.2337 5.99609 11.9783 6.10188 11.79 6.29019C11.6968 6.38342 11.6228 6.49411 11.5723 6.61594C11.5219 6.73776 11.4959 6.86833 11.4959 7.00019C11.4959 7.26649 11.6017 7.52188 11.79 7.71019L15.09 11.0002H7.5C7.23478 11.0002 6.98043 11.1055 6.79289 11.2931C6.60536 11.4806 6.5 11.735 6.5 12.0002C6.5 12.2654 6.60536 12.5198 6.79289 12.7073C6.98043 12.8948 7.23478 13.0002 7.5 13.0002H15.09L11.79 16.2902C11.6963 16.3831 11.6219 16.4937 11.5711 16.6156C11.5203 16.7375 11.4942 16.8682 11.4942 17.0002C11.4942 17.1322 11.5203 17.2629 11.5711 17.3848C11.6219 17.5066 11.6963 17.6172 11.79 17.7102C11.883 17.8039 11.9936 17.8783 12.1154 17.9291C12.2373 17.9798 12.368 18.006 12.5 18.006C12.632 18.006 12.7627 17.9798 12.8846 17.9291C13.0064 17.8783 13.117 17.8039 13.21 17.7102L18.21 12.7102C18.301 12.6151 18.3724 12.5029 18.42 12.3802C18.52 12.1367 18.52 11.8636 18.42 11.6202Z"
                            fill="white"
                        />
                    </motion.svg>
                </motion.div>
            </Link>
        </div>
        <Contact/>
    </section>
  );
}

export default HaveProject;