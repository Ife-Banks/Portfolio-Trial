import React, { useContext } from "react";
import ModalMain from "../Resuables/ModalMain";
import LangContext from "./context/LangContext";
import { motion, AnimatePresence } from "framer-motion";

function Modal() {
  const { isModalOpen, setIsModalOpen } = useContext(LangContext);

  const CloseSesame = () => setIsModalOpen(false);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end md:items-center justify-center z-50"
          onClick={CloseSesame}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalMain />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
