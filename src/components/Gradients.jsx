import React from 'react'
import { useEffect, useRef } from 'react';
function Gradients() {
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
   <div className="" id="one">
                    {/* Gradient circles */}
                    <div 
                        ref={bg1Ref}
                        className="absolute w-100 h-[600px] lg:w-[871.213px] lg:h-[871.213px] border rotate-[-130deg] -top-50 right-full lg:-top-100 lg:-right-160 transition-all duration-500 blur-[300px] " 
                    ></div>
                    <div 
                        ref={bg2Ref}
                        className="absolute border w-[700px] lg:w-[900px] h-[1100px] lg:h-[900px] bottom-0 right-full lg:inset-y-0  lg:-right-[50%]  lg:top-45 border-black rotate-[-130deg] transition-all duration-500 blur-[250px] lg:blur-[300px] -z-0 " 
                    ></div>
                   <div
                   ref={bg3Ref}
                   className="absolute border w-[541px] h-[206px] rotate[-30deg] lg:bottom:0 -bottom-30 -left-70 lg:-left-50  transition-all duration-500 blur-[200px] z-1" ></div>
                </div>
  )
}

export default Gradients