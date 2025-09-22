import React,{useContext} from 'react'
import ModalMain from '../Resuables/ModalMain'
import LangContext from './context/LangContext'
function Modal() {
    const{isModalOpen,setIsModalOpen} = useContext(LangContext)
    const CloseSesame = () => {
        setIsModalOpen(prev => !prev)
    }
  return (
  <div>
     {isModalOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick ={CloseSesame}>
      {/* Modal content */}
      
       <ModalMain/>
      </div>
    }
  </div>
  )
}

export default Modal