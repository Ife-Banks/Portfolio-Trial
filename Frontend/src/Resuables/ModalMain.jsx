import React, { useContext } from "react";
import Projects from "../data/PortfolioData";
import ModalMainLayout from "../components/ModalMainLayout";
import LangContext from "../components/context/LangContext";
import { motion } from "framer-motion";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function ModalMain() {
  const { ide, setIde } = useContext(LangContext);



  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-[#2a2c38] rounded-t-2xl shadow-[0_8px_22px_rgba(255,255,255,0.2)] max-h-[90vh] overflow-y-auto w-full md:w-[80%] md:mx-auto px-2 lg:px-5 lg:pt-10 z-50 flex items-center gap-5"
      onClick={(e) => e.stopPropagation()}
      initial={{ y: "100%" }}       // start off-screen (below)
      animate={{ y: 0 }}            // slide into place
      exit={{ y: "100%" }}          // slide back down
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <ArrowBackIosIcon  sx={{ fontSize: 40 }} onClick={() => { setIde(prev => prev -1);}} />
      {Projects.filter((id) => id.id == ide).map((project) => (
        <ModalMainLayout key={project.alt} {...project} />
      ))}
       <ArrowForwardIosIcon sx={{ fontSize: 40 }} onClick={() => { setIde(prev => prev +1);}}/>
    </motion.div>
  );
}

export default ModalMain;
