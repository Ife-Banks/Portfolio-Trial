import React,{useRef,useEffect} from 'react'

function PortfolioGradient() {
     const bg1Ref = useRef(null);
          const bg2Ref = useRef(null);
      
          useEffect(() => {
              const colors = ["#FF5733", "#33FF57", "#3357FF", "#1A5E4D", "#BE29D7"];
              
              const changeColors = () => {
                  // Create a copy of the colors array to avoid modifying the original
                  const availableColors = [...colors];
                  
                  // Select first color and remove it from available options
                  const randomIndex1 = Math.floor(Math.random() * availableColors.length);
                  const color1 = availableColors[randomIndex1];
                  availableColors.splice(randomIndex1, 1);
                  
                  // Select second color from remaining options
                  const randomIndex2 = Math.floor(Math.random() * availableColors.length);
                  const color2 = availableColors[randomIndex2];
                  
                  // Apply colors
                  if (bg1Ref.current) {
                      bg1Ref.current.style.backgroundColor = color1;
                  }
                  if (bg2Ref.current) {
                      bg2Ref.current.style.backgroundColor = color2;
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
    
    <div>
        <div
         ref={bg1Ref}
         className="absolute border w-[541px] h-[206px] rotate[-30deg] -bottom-30 -left-80 bg-[rgba(190,41,215,0.5)] blur-[200px] -z-1  transition-all duration-500"></div>
        <div
        ref={bg2Ref}
        className="absolute border w-[541px] h-[206px] rotate[-30deg] -bottom-10 -right-90 bg-[rgba(26,94,77,0.7)] blur-[200px] -z-1  transition-all duration-500"></div>
    </div>
  )
}

export default PortfolioGradient