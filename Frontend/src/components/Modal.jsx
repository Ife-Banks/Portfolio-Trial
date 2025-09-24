import React, { useContext } from "react";
import ModalMain from "../Resuables/ModalMain";
import LangContext from "./context/LangContext";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Modal() {
  const { isModalOpen, setIsModalOpen } = useContext(LangContext);

  const CloseSesame = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-51 flex"
          onClick={CloseSesame}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ArrowBackIosIcon sx={{ color: 'white' }} />
          <ModalMain />
          <ArrowBackIosIcon/>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
