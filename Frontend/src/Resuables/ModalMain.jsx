import React from 'react'
import Projects from "../data/PortfolioData"
import ModalMainLayout from '../components/ModalMainLayout'


function ModalMain() {
  return (
   <div>
    {Projects.filter(id => id.alt === "Vex Car project" ).map((project) => (
        <ModalMainLayout 
        {...project}
        />
    ))}
   </div>)

}

export default ModalMain