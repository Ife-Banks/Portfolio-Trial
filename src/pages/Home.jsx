import { useEffect, useRef } from 'react';
import Footer from '../components/footer';
import HaveProject from '../components/Haveproject';
import Hero from "../components/Hero";
import Navigate from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Job from '../components/WhatIdo';
import Work from '../components/Work';

const Home = () => {
     const bg1Ref = useRef(null);
    const bg2Ref = useRef(null);
    const bg3Ref = useRef(null);

    useEffect(() => {
        const colors = ["#FF5733", "#33FF57", "#3357FF", "#1A5E4D", "#BE29D7"];
        const colors2 = ["#906010", "#3A6B5D", "#5C6B8A", "#C4B6B2", "#E8D5B5", "#D4AF37"];
        const changeColors = () => {
            // Create a copy of the colors array to avoid modifying the original
            const availableColors = [...colors];
            const availableColors2 = [...colors2];
            
            // Select first color and remove it from available options
            const randomIndex1 = Math.floor(Math.random() * availableColors.length);
            const color1 = availableColors[randomIndex1];
            availableColors.splice(randomIndex1, 1);
            
            // Select second color from remaining options
            const randomIndex2 = Math.floor(Math.random() * availableColors.length);
            const color2 = availableColors[randomIndex2];

            const randomIndex3 = Math.floor(Math.random() * availableColors2.length);
            const color3 = availableColors2[randomIndex3];
            // Apply colors
            if (bg1Ref.current) {
                bg1Ref.current.style.backgroundColor = color1;
            }
            if (bg2Ref.current) {
                bg2Ref.current.style.backgroundColor = color2;
            }
            if (bg3Ref.current) {
                bg3Ref.current.style.backgroundColor = color3;
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
        <div className="bg-[#2A2C38] relative z-0" id="three">
            <main className="bg-[#2A2C38] relative" id="two">
                <div className="" id="one">
                    {/* Gradient circles */}
                    <div 
                        ref={bg1Ref}
                        className="absolute w-[871.213px] h-[871.213px] border rotate-[-130deg] -top-150 -right-100 lg:-top-100 lg:-right-160 transition-all duration-500 blur-[300px]" 
                    ></div>
                    <div 
                        ref={bg2Ref}
                        className="absolute border w-[900px] h-[900px] -right-[50%] top-45 border-black rotate-[-130deg] transition-all duration-500 blur-[300px] -z-0 " 
                    ></div>
                   <div
                   ref={bg3Ref}
                   className="absolute border w-[541px] h-[206px] rotate[-30deg] lg:bottom:0 -bottom-30 -left-70 lg:-left-50  transition-all duration-500 blur-[200px] z-1" ></div>
                </div>
                <Navigate />
                <Hero className="" />
            </main>
            <Work />
            <Portfolio />
            <HaveProject/>
            <Job/>
            <Footer/>
        </div>
    );
}

export default Home;