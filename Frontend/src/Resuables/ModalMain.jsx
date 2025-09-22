import React,{useContext} from 'react'
import Projects from "../data/PortfolioData"
import ModalMainLayout from '../components/ModalMainLayout'
import LangContext from '../components/context/LangContext'


function ModalMain() {
  const {ide} = useContext(LangContext)
  return (
   <div className='border-white w-[90%] lg:w-[80%] px-2 lg:px-15 lg:py-10 rounded-2xl shadow-[0_8px_22px_rgba(255,255,255,0.2)]'>
    {Projects.filter(id => id.alt === ide ).map((project) => (
        <ModalMainLayout 
        {...project}
        />
    ))}
   </div>)

}

export default ModalMain