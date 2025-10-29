// ============= Modal.jsx =============
import React, { useContext } from "react";
import ModalMain from "../Resuables/ModalMain";
import LangContext from "./context/LangContext";
import { motion, AnimatePresence } from "framer-motion";

function FuturisticModal() {
  const { isModalOpen, setIsModalOpen } = useContext(LangContext);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop with Blur */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center pointer-events-none">
            <ModalMain />
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default FuturisticModal;