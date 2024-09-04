import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      setIsExiting(true);
      // Set a timeout to ensure the overlay has time to exit before removing the class
      setTimeout(() => {
        document.body.classList.remove('modal-open');
        setIsExiting(false);
      }, 300); // Match the duration of your exit animation
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);
  // console.log(isOpen,"isOpen")

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            // className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
